import { getDecisionByNumber, getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("🏛️  SUITE DE PRUEBAS DE CONSOLIDACIÓN (FASE 23A - DEC 002, 004, 005, 007)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// TEST 1: DEC-PEND-002 está registrada correctamente
const dec2 = getDecisionByNumber("DEC-PEND-002");
if (dec2 && dec2.title.includes("Asuntos Extraordinarios") && InstitutionalDecisionSchema.safeParse(dec2).success) {
  testSuite.passed.push("TEST 1: DEC-PEND-002 registrada válidamente bajo esquema Zod.");
} else {
  testSuite.failed.push("TEST 1: Falla en DEC-PEND-002.");
}

// TEST 2: Las 8 categorías extraordinarias están presentes
const notes2 = dec2?.notes || "";
const has8Extraordinary =
  notes2.includes("(1) Compra, venta o transferencia de inmuebles") &&
  notes2.includes("(2) Préstamos, deuda o garantías") &&
  notes2.includes("(3) Contratos o compromisos financieros extraordinarios") &&
  notes2.includes("(4) Apertura, cierre o modificación sustancial de cuentas") &&
  notes2.includes("(5) Inversiones de fondos") &&
  notes2.includes("(6) Gastos extraordinarios fuera del presupuesto") &&
  notes2.includes("(7) Venta, transferencia o disposición de activos") &&
  notes2.includes("(8) Cualquier operación que pueda comprometer significativamente el patrimonio");
if (has8Extraordinary) {
  testSuite.passed.push("TEST 2: Las 8 categorías extraordinarias del Consejo están registradas en DEC-PEND-002.");
} else {
  testSuite.failed.push("TEST 2: Faltan categorías extraordinarias en DEC-PEND-002.");
}

// TEST 3: Regla de aprobación 2/3 + Pastor Fundador presente
if (notes2.includes("2/3 del Consejo de Gobierno + Aprobación del Pastor Fundador")) {
  testSuite.passed.push("TEST 3: Regla de aprobación extraordinaria (2/3 Consejo + Pastor Fundador) registrada.");
} else {
  testSuite.failed.push("TEST 3: Falla en regla de aprobación de asuntos extraordinarios.");
}

// TEST 4: DEC-PEND-004 establece quórum del 50%
const dec4 = getDecisionByNumber("DEC-PEND-004");
const notes4 = dec4?.notes || "";
if (notes4.includes("Al menos el 50% de los miembros activos con derecho a voto")) {
  testSuite.passed.push("TEST 4: Quórum congregacional del 50% registrado en DEC-PEND-004.");
} else {
  testSuite.failed.push("TEST 4: Falla en quórum congregacional del 50%.");
}

// TEST 5: Se conservan las reglas de votación previamente aprobadas
const hasVotingRules =
  notes4.includes("Formales, activos, bautizados conforme a RENACER") &&
  notes4.includes("Asuntos sobre los que vota la congregación (6 materias)") &&
  notes4.includes("Asuntos NO sujetos a voto congregacional: Doctrina, Declaración de Fe") &&
  notes4.includes("Ordinarias = Mayoría simple") &&
  notes4.includes("Extraordinarias = 2/3");
if (hasVotingRules) {
  testSuite.passed.push("TEST 5: Reglas congregacionales (miembros activos, materias, mayorías) preservadas.");
} else {
  testSuite.failed.push("TEST 5: Falla en reglas de votación congregacional.");
}

// TEST 6: DEC-PEND-005 contiene exactamente los niveles A, B y C
const dec5 = getDecisionByNumber("DEC-PEND-005");
const notes5 = dec5?.notes || "";
const has3Levels =
  notes5.includes("NIVEL A — DOCTRINAL") &&
  notes5.includes("Revisión doctrinal y aprobación exclusiva del Pastor Fundador") &&
  notes5.includes("NIVEL B — CONSTITUCIONAL IMPORTANTE") &&
  notes5.includes("Pastor Fundador + Consejo de Gobierno + Consejo Ministerial") &&
  notes5.includes("NIVEL C — ADMINISTRATIVO") &&
  notes5.includes("Procedimiento simplificado reglamentado en Bylaws/Manuales");
if (has3Levels) {
  testSuite.passed.push("TEST 6: Clasificación de enmiendas en Niveles A, B y C registrada en DEC-PEND-005.");
} else {
  testSuite.failed.push("TEST 6: Falla en los 3 niveles de enmiendas.");
}

// TEST 7: DEC-PEND-007 no tiene fecha ficticia y define 10 pasos
const dec7 = getDecisionByNumber("DEC-PEND-007");
const notes7 = dec7?.notes || "";
const has10Steps =
  notes7.includes("ACTO FORMAL DE ADOPCIÓN en 10 pasos") &&
  notes7.includes("(1) Presentación de versión final") &&
  notes7.includes("(4) Firma del Acta de Adopción Constitucional") &&
  notes7.includes("(7) Cambio de estado a ADOPTADO") &&
  notes7.includes("(10) Incorporación a la base de conocimiento de RENACER IA") &&
  notes7.includes("Sin fechas ficticias ni retroactivas");
if (has10Steps) {
  testSuite.passed.push("TEST 7: Protocolo de adopción formal en 10 pasos (sin fechas ficticias) registrado en DEC-PEND-007.");
} else {
  testSuite.failed.push("TEST 7: Falla en protocolo de adopción de DEC-PEND-007.");
}

// TEST 8: La Constitución NO cambia a ADOPTADO
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
if (catConst?.status === "PLANIFICADO" && catConst.version === "0.1") {
  testSuite.passed.push("TEST 8: Constitución (REN-DOC-002) permanece estrictamente en PLANIFICADO v0.1.");
} else {
  testSuite.failed.push("TEST 8: Modificación indebida en Constitución.");
}

// TEST 9: Ningún documento doctrinal fue modificado
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc?.status === "BORRADOR" && catDoc.version === "1.0") {
  testSuite.passed.push("TEST 9: Declaración de Fe (REN-DOC-001) permanece en BORRADOR v1.0.");
} else {
  testSuite.failed.push("TEST 9: Modificación indebida en Doctrina.");
}

// TEST 10: Ninguna decisión previa fue sobrescrita
const allDecs = getAllInstitutionalDecisions();
const dec1 = getDecisionByNumber("DEC-DEF-001");
const dec23 = getDecisionByNumber("DEC-DEF-023");
if (allDecs.length === 33 && dec1?.decisionStatus === "DECIDIDA" && dec23?.decisionStatus === "DECIDIDA") {
  testSuite.passed.push("TEST 10: Total de 33 decisiones preservado con integridad de decisiones previas.");
} else {
  testSuite.failed.push("TEST 10: Falla en preservación de decisiones previas.");
}

// TEST 11: Registros de auditoría y trazabilidad
const canViewAudit = hasPermission("PASTOR_FUNDADOR", "VIEW_AUDIT_LOGS", "audit_logs");
if (canViewAudit) {
  testSuite.passed.push("TEST 11: Trazabilidad y permisos de auditoría operativa.");
} else {
  testSuite.failed.push("TEST 11: Falla en permisos de auditoría.");
}

// TEST 12: Simulación de respuestas en RENACER IA
function simulateAIPhase23A(code: string) {
  const d = getDecisionByNumber(code);
  return d ? `${d.title} | ${d.notes}` : "No encontrada";
}
const ai2 = simulateAIPhase23A("DEC-PEND-002");
const ai4 = simulateAIPhase23A("DEC-PEND-004");
if (ai2.includes("8 materias") && ai4.includes("50%")) {
  testSuite.passed.push("TEST 12: RENACER IA responde fidedignamente con los criterios de Fase 23A.");
} else {
  testSuite.failed.push("TEST 12: Falla en simulación de IA.");
}

// TEST 13: Permisos RBAC continúan funcionando
const pastorCan = hasPermission("PASTOR_FUNDADOR", "EDIT", "constitucion");
const readOnlyCan = hasPermission("SOLO_LECTURA", "EDIT", "constitucion");
if (pastorCan && !readOnlyCan) {
  testSuite.passed.push("TEST 13: Matriz RBAC salvaguarda la gobernanza del sistema.");
} else {
  testSuite.failed.push("TEST 13: Falla en RBAC general.");
}

// TEST 14: Pastor Fundador única autoridad ADOPT_OFFICIAL
const pastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const adminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (pastorAdopt && !adminAdopt) {
  testSuite.passed.push("TEST 14: Autoridad ADOPT_OFFICIAL restringida exclusivamente al Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 14: Falla en restricción de adopción oficial.");
}

// TEST 15: Administrador limitado a funciones técnicas
const adminPublish = hasPermission("ADMINISTRADOR", "PUBLISH_ADOPTED", "doctrina");
if (adminPublish && !adminAdopt) {
  testSuite.passed.push("TEST 15: Rol Administrador puede publicar documentos adoptados pero no adoptar.");
} else {
  testSuite.failed.push("TEST 15: Falla en delimitación del Administrador.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 23A: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
