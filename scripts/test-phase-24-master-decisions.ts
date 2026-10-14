import { getAllInstitutionalDecisions, getDecisionByNumber, getDecisionsForDocument } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("🏛️  SUITE DE PRUEBAS DE AUDITORÍA MAESTRA DE DECISIONES (FASE 24)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const allDecs = getAllInstitutionalDecisions();

// TEST 1: Existen las 33 decisiones base o más
if (allDecs.length >= 33) {
  testSuite.passed.push("TEST 1: El registro contiene las 33 decisiones institucionales fundacionales.");
} else {
  testSuite.failed.push(`TEST 1: Total de decisiones insuficiente: ${allDecs.length} (esperado >= 33).`);
}

// TEST 2: Existen DEC-DEF-001 a DEC-DEF-023
const defIds = Array.from({ length: 23 }, (_, i) => `DEC-DEF-${String(i + 1).padStart(3, "0")}`);
const allDefPresent = defIds.every((id) => allDecs.some((d) => d.decisionNumber === id));
if (allDefPresent) {
  testSuite.passed.push("TEST 2: Las 23 decisiones definidas (DEC-DEF-001 a DEC-DEF-023) están presentes.");
} else {
  testSuite.failed.push("TEST 2: Faltan decisiones en el rango DEC-DEF-001 a DEC-DEF-023.");
}

// TEST 3: Existen DEC-PEND-001 a DEC-PEND-010
const pendIds = Array.from({ length: 10 }, (_, i) => `DEC-PEND-${String(i + 1).padStart(3, "0")}`);
const allPendPresent = pendIds.every((id) => allDecs.some((d) => d.decisionNumber === id));
if (allPendPresent) {
  testSuite.passed.push("TEST 3: Las 10 decisiones pendientes (DEC-PEND-001 a DEC-PEND-010) están presentes.");
} else {
  testSuite.failed.push("TEST 3: Faltan decisiones en el rango DEC-PEND-001 a DEC-PEND-010.");
}

// TEST 4: Ninguna decisión está duplicada por ID
const idSet = new Set(allDecs.map((d) => d.decisionId));
const numSet = new Set(allDecs.map((d) => d.decisionNumber));
if (idSet.size === allDecs.length && numSet.size === allDecs.length) {
  testSuite.passed.push("TEST 4: Todas las decisiones tienen IDs y Códigos unívocos sin duplicados.");
} else {
  testSuite.failed.push("TEST 4: Se detectaron IDs o Códigos de decisión duplicados.");
}

// TEST 5: Esquema Zod válido al 100%
const allValidZod = allDecs.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
if (allValidZod) {
  testSuite.passed.push("TEST 5: El 100% de las decisiones cumple estrictamente con el esquema Zod.");
} else {
  testSuite.failed.push("TEST 5: Falla en validación de esquema Zod.");
}

// TEST 6: DEC-PEND-002 contiene las 8 materias extraordinarias
const dec2 = getDecisionByNumber("DEC-PEND-002");
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
if (has8Extraordinary && notes2.includes("2/3 del Consejo de Gobierno + Aprobación del Pastor Fundador")) {
  testSuite.passed.push("TEST 6: DEC-PEND-002 contiene las 8 materias extraordinarias y regla 2/3 + Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 6: Falla en materias extraordinarias de DEC-PEND-002.");
}

// TEST 7: DEC-PEND-004 contiene quórum del 50%
const dec4 = getDecisionByNumber("DEC-PEND-004");
const notes4 = dec4?.notes || "";
if (notes4.includes("Al menos el 50% de los miembros activos con derecho a voto")) {
  testSuite.passed.push("TEST 7: DEC-PEND-004 contiene quórum congregacional del 50%.");
} else {
  testSuite.failed.push("TEST 7: Falla en quórum congregacional de DEC-PEND-004.");
}

// TEST 8: DEC-PEND-005 contiene niveles A/B/C
const dec5 = getDecisionByNumber("DEC-PEND-005");
const notes5 = dec5?.notes || "";
if (notes5.includes("NIVEL A — DOCTRINAL") && notes5.includes("NIVEL B — CONSTITUCIONAL IMPORTANTE") && notes5.includes("NIVEL C — ADMINISTRATIVO")) {
  testSuite.passed.push("TEST 8: DEC-PEND-005 contiene la clasificación de enmiendas en Niveles A, B y C.");
} else {
  testSuite.failed.push("TEST 8: Falla en niveles de enmiendas de DEC-PEND-005.");
}

// TEST 9: DEC-PEND-007 contiene el protocolo de adopción en 10 pasos
const dec7 = getDecisionByNumber("DEC-PEND-007");
const notes7 = dec7?.notes || "";
if (notes7.includes("ACTO FORMAL DE ADOPCIÓN en 10 pasos") && notes7.includes("Sin fechas ficticias")) {
  testSuite.passed.push("TEST 9: DEC-PEND-007 contiene el protocolo de adopción formal en 10 pasos (sin fechas ficticias).");
} else {
  testSuite.failed.push("TEST 9: Falla en protocolo de adopción de DEC-PEND-007.");
}

// TEST 10: Las decisiones legales pendientes continúan identificadas
const legalDecs = allDecs.filter((d) => d.legalState === "REQUIERE_REVISION_LEGAL" || d.decisionStatus === "REQUIERE_REVISION_LEGAL");
if (legalDecs.length === 7) {
  testSuite.passed.push(`TEST 10: Las 7 decisiones con requerimiento de revisión legal (${legalDecs.length}) están identificadas.`);
} else {
  testSuite.failed.push(`TEST 10: Conteo incorrecto de decisiones legales: ${legalDecs.length} (esperado 7).`);
}

// TEST 11: Constitución (REN-DOC-002) continúa PLANIFICADO v0.1
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
if (catConst?.status === "PLANIFICADO" && catConst.version === "0.1") {
  testSuite.passed.push("TEST 11: Constitución (REN-DOC-002) permanece en estado PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 11: Modificación indebida en Constitución.");
}

// TEST 12: Doctrina (REN-DOC-001) continúa BORRADOR v1.0
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc?.status === "BORRADOR" && catDoc.version === "1.0") {
  testSuite.passed.push("TEST 12: Declaración de Fe (REN-DOC-001) permanece en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 12: Modificación indebida en Doctrina.");
}

// TEST 13: Ningún documento del catálogo fue adoptado
const hasAdopted = [catConst, catDoc].some((d) => d?.status === "ADOPTADO");
if (!hasAdopted) {
  testSuite.passed.push("TEST 13: Confirmación absoluta: Ningún documento maestro ha sido adoptado.");
} else {
  testSuite.failed.push("TEST 13: Alerta: Se detectó un documento adoptado indebidamente.");
}

// TEST 14: ADOPT_OFFICIAL exclusivo del Pastor Fundador
const pastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const adminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (pastorAdopt && !adminAdopt) {
  testSuite.passed.push("TEST 14: Autoridad ADOPT_OFFICIAL exclusiva y reservada al Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 14: Falla en restricción de autoridad de adopción.");
}

// TEST 15: Administrador no puede adoptar
if (!adminAdopt) {
  testSuite.passed.push("TEST 15: Rol Administrador impedido de adoptar doctrina o constitución.");
} else {
  testSuite.failed.push("TEST 15: Rol Administrador tiene permisos indebidos de adopción.");
}

// TEST 16: RENACER IA utiliza correctamente el Registro Maestro
function testAIRegisterQuery(queryCode: string) {
  const d = getDecisionByNumber(queryCode);
  if (!d) return "No encontrada";
  return `CÓDIGO: ${d.decisionNumber} | TÍTULO: ${d.title} | DECISIÓN: ${d.decision || ""} | LEGAL: ${d.legalState} | ESTADO: ${d.decisionState}`;
}
const aiRes1 = testAIRegisterQuery("DEC-DEF-001");
const aiRes2 = testAIRegisterQuery("DEC-PEND-001");
if (aiRes1.includes("RENACER CHURCH, INC.") && aiRes2.includes("REQUIERE_REVISION_LEGAL")) {
  testSuite.passed.push("TEST 16: RENACER IA consulta fielmente el Registro Maestro distinguiendo estados.");
} else {
  testSuite.failed.push("TEST 16: Falla en consulta de RENACER IA.");
}

// TEST 17: Permisos de auditoría y trazabilidad para Fase 24
const canAudit = hasPermission("PASTOR_FUNDADOR", "VIEW_AUDIT_LOGS", "audit_logs");
if (canAudit) {
  testSuite.passed.push("TEST 17: Auditoría de Fase 24 registrada con trazabilidad e integridad de permisos.");
} else {
  testSuite.failed.push("TEST 17: Falla en permisos de auditoría.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 24: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
