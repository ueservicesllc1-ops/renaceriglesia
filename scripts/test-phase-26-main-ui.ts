import { getAllInstitutionalDecisions, getDecisionByNumber } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import { hasPermission } from "../src/lib/permissions";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🖥️  SUITE DE PRUEBAS DE LA INTERFAZ PRINCIPAL (FASE 26 - DASHBOARD & UI)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const allDecs = getAllInstitutionalDecisions();

// TEST 1: 107 decisiones en el registro
if (allDecs.length === 107) {
  testSuite.passed.push("TEST 1: El registro contiene exactamente 107 decisiones institucionales reales.");
} else {
  testSuite.failed.push(`TEST 1: Total incorrecto de decisiones: ${allDecs.length} (esperado 107).`);
}

// TEST 2: No existen IDs ni números de decisión duplicados
const idSet = new Set(allDecs.map((d) => d.decisionId));
const numSet = new Set(allDecs.map((d) => d.decisionNumber));
if (idSet.size === 107 && numSet.size === 107) {
  testSuite.passed.push("TEST 2: 0 colisiones en identificadores y códigos numéricos de las 107 decisiones.");
} else {
  testSuite.failed.push("TEST 2: Se detectaron duplicados en decisiones.");
}

// TEST 3: REN-DOC-001 permanece en BORRADOR v1.0 (NO ADOPTADA)
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc?.status === "BORRADOR" && catDoc.version === "1.0" && doctrinaData.meta.status === "BORRADOR") {
  testSuite.passed.push("TEST 3: Declaración de Fe (REN-DOC-001) permanece inmutable en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 3: Estado inválido en Declaración de Fe.");
}

// TEST 4: REN-DOC-002 permanece en PLANIFICADO v0.1 (NO ADOPTADA)
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
if (catConst?.status === "PLANIFICADO" && catConst.version === "0.1") {
  testSuite.passed.push("TEST 4: Constitución de RENACER (REN-DOC-002) permanece inmutable en PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 4: Estado inválido en Constitución.");
}

// TEST 5: Ningún documento oficial adoptado
const hasAdopted = allDecs.some((d) => d.documentState === "ADOPTADO");
if (!hasAdopted) {
  testSuite.passed.push("TEST 5: Ninguna decisión se encuentra marcada con DocumentState = ADOPTADO.");
} else {
  testSuite.failed.push("TEST 5: Se detectaron decisiones adoptadas indebidamente.");
}

// TEST 6: Separación de 4 dimensiones semánticas
const allHave4Dims = allDecs.every((d) => d.decisionState && d.documentState && d.legalState && d.documentTarget);
if (allHave4Dims) {
  testSuite.passed.push("TEST 6: Separación estricta de DecisionState, DocumentState, LegalState y DocumentTarget preservada.");
} else {
  testSuite.failed.push("TEST 6: Fallo en dimensiones semánticas.");
}

// TEST 7: 20 Artículos de Fe en doctrina.json disponibles
if (doctrinaData.data.length === 20 && doctrinaData.data[0].slug.includes("sagradas-escrituras")) {
  testSuite.passed.push("TEST 7: Los 20 Artículos de Fe están íntegramente disponibles en import-queue/doctrina.json.");
} else {
  testSuite.failed.push("TEST 7: Fallo en carga de artículos doctrinales.");
}

// TEST 8: 20 Documentos en el Catálogo Maestro disponibles
if (INITIAL_MASTER_CATALOG.length === 20) {
  testSuite.passed.push("TEST 8: Los 20 documentos maestros del catálogo institucional están disponibles.");
} else {
  testSuite.failed.push(`TEST 8: Catálogo incompleto: ${INITIAL_MASTER_CATALOG.length} docs.`);
}

// TEST 9: Matriz RBAC protege adopción doctrinal
const canPastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const canAdminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
const canMemberAdopt = hasPermission("MIEMBRO", "ADOPT_OFFICIAL", "doctrina");
if (canPastorAdopt && !canAdminAdopt && !canMemberAdopt) {
  testSuite.passed.push("TEST 9: Matriz RBAC: permiso ADOPT_OFFICIAL reservado exclusivamente al Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 9: Falla en seguridad de permisos RBAC.");
}

// TEST 10: Esquema Zod 100% válido en las 107 decisiones
const allZodValid = allDecs.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
if (allZodValid) {
  testSuite.passed.push("TEST 10: El 100% de las 107 decisiones institucionales cumple con el esquema Zod.");
} else {
  testSuite.failed.push("TEST 10: Falla en validación Zod.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 26 (UI & DASHBOARD): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
