import { getAllInstitutionalDecisions, getDecisionByNumber } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("🔍 SUITE DE PRUEBAS DE AUDITORÍA MAESTRA DE 107 DECISIONES (FASE 26)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const allDecs = getAllInstitutionalDecisions();

// TEST 1: Existen exactamente 107 decisiones registradas
if (allDecs.length === 107) {
  testSuite.passed.push("TEST 1: El registro contiene exactamente 107 decisiones institucionales.");
} else {
  testSuite.failed.push(`TEST 1: Cantidad de decisiones incorrecta: ${allDecs.length} (esperado 107).`);
}

// TEST 2: Preservación de los rangos de decisiones (23 DEC-DEF base, 10 DEC-PEND, 74 DEC-DEF 177-250)
const baseDefIds = Array.from({ length: 23 }, (_, i) => `DEC-DEF-${String(i + 1).padStart(3, "0")}`);
const pendIds = Array.from({ length: 10 }, (_, i) => `DEC-PEND-${String(i + 1).padStart(3, "0")}`);
const newDefIds = Array.from({ length: 74 }, (_, i) => `DEC-DEF-${177 + i}`);

const allBaseDefPresent = baseDefIds.every((id) => allDecs.some((d) => d.decisionNumber === id));
const allPendPresent = pendIds.every((id) => allDecs.some((d) => d.decisionNumber === id));
const allNewDefPresent = newDefIds.every((id) => allDecs.some((d) => d.decisionNumber === id));

if (allBaseDefPresent && allPendPresent && allNewDefPresent) {
  testSuite.passed.push("TEST 2: Integridad total de rangos: 23 DEC-DEF base + 10 DEC-PEND + 74 DEC-DEF (177 a 250) presentes.");
} else {
  testSuite.failed.push("TEST 2: Faltan decisiones en los rangos esperados.");
}

// TEST 3: Ningún ID ni número duplicado en las 107 decisiones
const idSet = new Set(allDecs.map((d) => d.decisionId));
const numSet = new Set(allDecs.map((d) => d.decisionNumber));
if (idSet.size === 107 && numSet.size === 107) {
  testSuite.passed.push("TEST 3: 0 colisiones: 107 IDs y 107 números de decisión unívocos.");
} else {
  testSuite.failed.push(`TEST 3: Se detectaron duplicados: IDs=${idSet.size}, Códigos=${numSet.size}.`);
}

// TEST 4: El 100% de las decisiones tiene DecisionState válido (DEFINIDA, PENDIENTE o NO_RESUELTA)
const allHaveValidDecisionState = allDecs.every((d) => ["DEFINIDA", "PENDIENTE", "NO_RESUELTA"].includes(d.decisionState));
if (allHaveValidDecisionState) {
  testSuite.passed.push("TEST 4: El 100% de las 107 decisiones tiene un DecisionState válido.");
} else {
  testSuite.failed.push("TEST 4: Existen decisiones con DecisionState inválido.");
}

// TEST 5: Separación estricta de 4 dimensiones semánticas
const allHave4Dimensions = allDecs.every(
  (d) => d.decisionState && d.documentState && d.legalState && d.documentTarget
);
if (allHave4Dimensions) {
  testSuite.passed.push("TEST 5: El 100% de las decisiones cuenta con las 4 dimensiones semánticas independientes.");
} else {
  testSuite.failed.push("TEST 5: Hay decisiones incompletas en sus 4 dimensiones semánticas.");
}

// TEST 6: Ningún documento oficial ha sido marcado como ADOPTADO
const hasAdopted = allDecs.some((d) => d.documentState === "ADOPTADO");
if (!hasAdopted) {
  testSuite.passed.push("TEST 6: Ninguna decisión se ha convertido indebidamente en documento ADOPTADO.");
} else {
  testSuite.failed.push("TEST 6: Se detectaron decisiones con DocumentState = ADOPTADO.");
}

// TEST 7: REN-DOC-001 permanece estrictamente en BORRADOR v1.0
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc?.status === "BORRADOR" && catDoc.version === "1.0") {
  testSuite.passed.push("TEST 7: Declaración de Fe (REN-DOC-001) permanece inmutable en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 7: Modificación indebida en Doctrina.");
}

// TEST 8: REN-DOC-002 permanece estrictamente en PLANIFICADO v0.1
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
if (catConst?.status === "PLANIFICADO" && catConst.version === "0.1") {
  testSuite.passed.push("TEST 8: Constitución (REN-DOC-002) permanece inmutable en PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 8: Modificación indebida en Constitución.");
}

// TEST 9: Las 17 decisiones que requieren revisión legal están identificadas
const legalDecs = allDecs.filter((d) => d.legalState === "REQUIERE_REVISION_LEGAL");
if (legalDecs.length === 17) {
  testSuite.passed.push(`TEST 9: Las 17 decisiones que requieren revisión legal (${legalDecs.length}) están formalmente etiquetadas.`);
} else {
  testSuite.failed.push(`TEST 9: Conteo inesperado de decisiones con requerimiento legal: ${legalDecs.length} (esperado 17).`);
}

// TEST 10: LegalState no se convierte automáticamente en completada
const hasCompletedLegal = allDecs.some((d) => d.legalState === "REVISION_LEGAL_COMPLETADA");
if (!hasCompletedLegal) {
  testSuite.passed.push("TEST 10: Ninguna decisión fue marcada como REVISION_LEGAL_COMPLETADA sin dictamen formal.");
} else {
  testSuite.failed.push("TEST 10: Se detectó LegalState = REVISION_LEGAL_COMPLETADA.");
}

// TEST 11: Esquema Zod validado al 100% en las 107 decisiones
const allZodValid = allDecs.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
if (allZodValid) {
  testSuite.passed.push("TEST 11: Validación Zod 100% exitosa en las 107 decisiones.");
} else {
  testSuite.failed.push("TEST 11: Falló validación de esquema Zod.");
}

// TEST 12: Exclusividad RBAC del Pastor Fundador y separación de poderes
const canPastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const canAdminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (canPastorAdopt && !canAdminAdopt) {
  testSuite.passed.push("TEST 12: Soberanía de adopción reservada con exclusividad al Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 12: Falla en seguridad de permisos RBAC.");
}

// TEST 13: Inmutabilidad de los textos clave de Fundador, Sucesión y Riesgos
const d1 = getDecisionByNumber("DEC-DEF-001");
const dPend1 = getDecisionByNumber("DEC-PEND-001");
const d250 = getDecisionByNumber("DEC-DEF-250");
if (
  d1?.decision?.includes("RENACER CHURCH, INC.") &&
  dPend1?.notes?.includes("CRITERIOS DEFINIDOS (FASE 25A)") &&
  d250?.decision?.includes("formalmente DEFINIDAS")
) {
  testSuite.passed.push("TEST 13: Inmutabilidad textual y coherencia de contenido confirmadas en registros clave.");
} else {
  testSuite.failed.push("TEST 13: Modificación textual no autorizada.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 26: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
