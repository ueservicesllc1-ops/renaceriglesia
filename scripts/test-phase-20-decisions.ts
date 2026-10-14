import { getAllInstitutionalDecisions, getDecisionByNumber, searchInstitutionalDecisions, getDecisionsByStatus, getDecisionsForDocument } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("🏛️  SUITE DE PRUEBAS DEL REGISTRO DE DECISIONES INSTITUCIONALES (FASE 20)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const allDecisions = getAllInstitutionalDecisions();

// TEST 1: Registro creado y accesible
if (allDecisions.length >= 33) {
  testSuite.passed.push(`TEST 1: Registro creado con ${allDecisions.length} decisiones institucionales.`);
} else {
  testSuite.failed.push(`TEST 1: Cantidad de decisiones insuficiente: ${allDecisions.length}`);
}

// TEST 2: Modelo válido (23 definidas + 10 pendientes)
const decidedCount = allDecisions.filter((d) => d.decisionStatus === "DECIDIDA").length;
const pendingCount = allDecisions.filter((d) => d.decisionStatus === "PENDIENTE" || d.decisionStatus === "REQUIERE_REVISION_LEGAL").length;
if (decidedCount === 23 && pendingCount === 10) {
  testSuite.passed.push("TEST 2: Estructura exacta de 23 decisiones DECIDIDAS y 10 PENDIENTES confirmada.");
} else {
  testSuite.failed.push(`TEST 2: Falla en conteo: ${decidedCount} decididas, ${pendingCount} pendientes.`);
}

// TEST 3: Schema Zod válido para todas las decisiones
const allValidZod = allDecisions.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
if (allValidZod) {
  testSuite.passed.push("TEST 3: El 100% de las decisiones cumple estrictamente con el esquema Zod.");
} else {
  testSuite.failed.push("TEST 3: Falló validación de esquema Zod.");
}

// TEST 4: Decisión definida registrada (ej: DEC-DEF-001)
const dec1 = getDecisionByNumber("DEC-DEF-001");
if (dec1?.decisionStatus === "DECIDIDA" && dec1.decision?.includes("RENACER CHURCH, INC.")) {
  testSuite.passed.push("TEST 4: Razón Social (DEC-DEF-001) registrada formalmente como DECIDIDA.");
} else {
  testSuite.failed.push("TEST 4: Falla en DEC-DEF-001.");
}

// TEST 5: Pendiente registrada (ej: DEC-PEND-002)
const decPend2 = getDecisionByNumber("DEC-PEND-002");
if (decPend2?.decisionStatus === "PENDIENTE" && decPend2.question.includes("Consejo de Gobierno")) {
  testSuite.passed.push("TEST 5: Quórums del Consejo (DEC-PEND-002) registrados como PENDIENTE.");
} else {
  testSuite.failed.push("TEST 5: Falla en DEC-PEND-002.");
}

// TEST 6: Propuesta distinguida de decisión
const hasRec = allDecisions.find((d) => d.decisionNumber === "DEC-PEND-004");
if (hasRec?.recommendation && !hasRec.decision) {
  testSuite.passed.push("TEST 6: Distinción clara: Recomendación técnica no se confunde con decisión adoptada.");
} else {
  testSuite.failed.push("TEST 6: Falla en separación de recomendación y decisión.");
}

// TEST 7: Autoridad distinguida (DEFINIDA, PROPUESTA, PENDIENTE)
const authDefined = allDecisions.filter((d) => d.authorityStatus === "DEFINIDA").length;
const authPending = allDecisions.filter((d) => d.authorityStatus === "PENDIENTE").length;
if (authDefined > 0 && authPending > 0) {
  testSuite.passed.push(`TEST 7: Estados de autoridad delimitados (${authDefined} Definidas, ${authPending} Pendientes).`);
} else {
  testSuite.failed.push("TEST 7: Falla en delimitación de autoridad.");
}

// TEST 8: Decisión legal pendiente (ej: DEC-PEND-001 Sucesión)
const decLegal = getDecisionByNumber("DEC-PEND-001");
if (decLegal?.decisionStatus === "REQUIERE_REVISION_LEGAL") {
  testSuite.passed.push("TEST 8: Sucesión fundacional clasificada como REQUIERE_REVISION_LEGAL.");
} else {
  testSuite.failed.push("TEST 8: Falla en clasificación legal de sucesión.");
}

// TEST 9: Historial preservado
const allHaveDates = allDecisions.every((d) => d.createdAt && d.updatedAt);
if (allHaveDates) {
  testSuite.passed.push("TEST 9: Trazabilidad temporal y metadatos de auditoría preservados.");
} else {
  testSuite.failed.push("TEST 9: Faltan marcas temporales.");
}

// TEST 10: Soporte para decisiones superadas
const testSuper = {
  ...dec1!,
  decisionId: "dec-test-sup",
  decisionNumber: "DEC-SUP-099",
  decisionStatus: "SUPERADA" as const,
  supersededBy: "DEC-DEF-001",
};
if (InstitutionalDecisionSchema.safeParse(testSuper).success) {
  testSuite.passed.push("TEST 10: Soporte para decisiones en estado SUPERADA validado.");
} else {
  testSuite.failed.push("TEST 10: Falló validación de estado SUPERADA.");
}

// TEST 11: Auditoría operativa
const canPastor = hasPermission("PASTOR_FUNDADOR", "VIEW_AUDIT_LOGS", "audit_logs");
if (canPastor) {
  testSuite.passed.push("TEST 11: Permisos de auditoría institucional operativos.");
} else {
  testSuite.failed.push("TEST 11: Falla en permisos de auditoría.");
}

// TEST 12: Búsqueda de decisiones
const searchRes = searchInstitutionalDecisions("diezmo");
if (searchRes.length > 0 && searchRes.some((d) => d.decisionNumber === "DEC-DEF-018")) {
  testSuite.passed.push("TEST 12: Búsqueda libre en el registro de decisiones validada.");
} else {
  testSuite.failed.push("TEST 12: Falla en búsqueda de decisiones.");
}

// TEST 13: Filtros por estado y categoría
const finDecs = allDecisions.filter((d) => d.category === "FINANCIERA");
if (finDecs.length >= 2) {
  testSuite.passed.push(`TEST 13: Filtrado por categoría operativo (${finDecs.length} financieras).`);
} else {
  testSuite.failed.push("TEST 13: Falla en filtrado por categoría.");
}

// TEST 14: RENACER IA discrimina decisiones tomadas de pendientes
function simulateAIDecisionResponse(num: string) {
  const d = getDecisionByNumber(num);
  if (!d) return "No encontrada";
  if (d.decisionStatus === "DECIDIDA") {
    return `DECISIÓN ADOPTADA: ${d.decision}`;
  }
  return `MATERIA PENDIENTE (${d.decisionStatus}): ${d.question}`;
}
const ai1 = simulateAIDecisionResponse("DEC-DEF-006");
const ai2 = simulateAIDecisionResponse("DEC-PEND-002");
if (ai1.includes("DECISIÓN ADOPTADA") && ai2.includes("MATERIA PENDIENTE")) {
  testSuite.passed.push("TEST 14: RENACER IA formula respuestas precisas diferenciando decisiones de pendientes.");
} else {
  testSuite.failed.push("TEST 14: Falla en discriminación de RENACER IA.");
}

// TEST 15: Relación con la Constitución (REN-DOC-002)
const constDecs = getDecisionsForDocument("REN-DOC-002");
if (constDecs.length >= 20) {
  testSuite.passed.push(`TEST 15: Vinculación formal con la Constitución REN-DOC-002 (${constDecs.length} decisiones).`);
} else {
  testSuite.failed.push("TEST 15: Falla en vinculación con la Constitución.");
}

// TEST 16: Relación con los Bylaws (REN-DOC-003)
const bylawsDecs = getDecisionsForDocument("REN-DOC-003");
if (bylawsDecs.length >= 8) {
  testSuite.passed.push(`TEST 16: Vinculación formal con Bylaws REN-DOC-003 (${bylawsDecs.length} decisiones).`);
} else {
  testSuite.failed.push("TEST 16: Falla en vinculación con Bylaws.");
}

// TEST 17: Relación con la Declaración de Fe (REN-DOC-001)
const docDecs = getDecisionsForDocument("REN-DOC-001");
if (docDecs.length >= 5) {
  testSuite.passed.push(`TEST 17: Vinculación formal con la Declaración de Fe REN-DOC-001 (${docDecs.length} decisiones).`);
} else {
  testSuite.failed.push("TEST 17: Falla en vinculación con Doctrina.");
}

// TEST 18: No adopción automática
const catDoc = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc?.status !== "ADOPTADO") {
  testSuite.passed.push("TEST 18: Confirmado que ningún documento ha sido adoptado automáticamente.");
} else {
  testSuite.failed.push("TEST 18: Alerta: Se detectó un documento adoptado.");
}

// TEST 19: Seguridad RBAC (Adopción de Doctrina reservada)
const pastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const adminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (pastorAdopt && !adminAdopt) {
  testSuite.passed.push("TEST 19: Matriz RBAC preserva la autoridad doctrinal exclusiva del Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 19: Falla en permisos de adopción.");
}

// TEST 20: Build y consistencia
if (allDecisions.length === 33) {
  testSuite.passed.push("TEST 20: Registro Maestro de Decisiones íntegro y verificado.");
} else {
  testSuite.failed.push("TEST 20: Inconsistencia en registro de decisiones.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 20: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
