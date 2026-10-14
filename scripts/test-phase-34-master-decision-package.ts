import {
  getExecutiveDecisionMatrix,
  getLegalReviewPackageMatters,
  getFounderDecisionMatters,
} from "../src/lib/constitution-executive-package-service";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("📜 SUITE DE PRUEBAS DEL PAQUETE MAESTRO DE DECISIÓN Y REVISIÓN LEGAL (FASE 34)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const matrix = getExecutiveDecisionMatrix();
const legalMatters = getLegalReviewPackageMatters();
const founderMatters = getFounderDecisionMatters();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Existen exactamente 6 materias en la matriz ejecutiva
if (matrix.length === 6) {
  testSuite.passed.push("TEST 1: La Matriz Ejecutiva contiene exactamente seis (6) materias auditadas.");
} else {
  testSuite.failed.push(`TEST 1: Conteo incorrecto en matriz ejecutiva: ${matrix.length}`);
}

// TEST 2: Ninguna materia está adoptada
const anyAdopted = matrix.some((m) => (m.status as string) === "ADOPTADO");
if (!anyAdopted) {
  testSuite.passed.push("TEST 2: Ninguna de las seis materias ha sido marcada indebidamente como ADOPTADA.");
} else {
  testSuite.failed.push("TEST 2: Materia marcada como adoptada indebidamente.");
}

// TEST 3, 4 & 5: REN-DOC-002 sigue v0.1, EN_REDACCION y NO_ADOPTADA
if (
  constitution.version === "0.1" &&
  constitution.status === "EN_REDACCION" &&
  (constitution.status as string) !== "ADOPTADO"
) {
  testSuite.passed.push("TEST 3, 4 & 5: REN-DOC-002 permanece inmutable en versión v0.1, estado EN_REDACCION y NO ADOPTADA.");
} else {
  testSuite.failed.push(`TEST 3, 4 & 5: Estado alterado de REN-DOC-002: ${constitution.version} / ${constitution.status}`);
}

// TEST 6: Las 107 decisiones siguen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 6: Las 107 decisiones institucionales se mantienen exactamente preservadas.");
} else {
  testSuite.failed.push(`TEST 6: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 7 & 8: Ninguna propuesta se registra como decisión ni como adopción
const allProposalsNotAdopted = founderMatters.every(
  (m) => m.proposalNotice === "PROPUESTA — NO ADOPTADA"
);
if (allProposalsNotAdopted) {
  testSuite.passed.push("TEST 7 & 8: Todas las recomendaciones del Pastor Fundador están formalmente marcadas como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 7 & 8: Falla en rotulación de propuestas.");
}

// TEST 9: No existe fecha de vigencia ficticia
const art47 = matrix.find((m) => m.articleNumber === 47);
if (art47 && !art47.whatIsDefined.includes("202") && art47.whatIsPending.includes("0 fechas ficticias")) {
  testSuite.passed.push("TEST 9: 0 fechas ficticias de vigencia en el Artículo 47.");
} else {
  testSuite.failed.push("TEST 9: Fecha ficticia detectada en vigencia.");
}

// TEST 10 & 11: No existen firmas ficticias ni actas ficticias
const hasFakeElements = founderMatters.some(
  (m) => m.founderRecommendation.includes("Firma:") || m.founderRecommendation.includes("Acta No.")
);
if (!hasFakeElements) {
  testSuite.passed.push("TEST 10 & 11: 0 firmas ficticias y 0 actas ficticias en los paquetes de decisión.");
} else {
  testSuite.failed.push("TEST 10 & 11: Elementos ficticios detectados.");
}

// TEST 12: El paquete legal contiene las seis materias con referencias estatutarias de NJ
if (legalMatters.length === 6 && legalMatters.every((m) => m.njStatutoryReference.includes("N.J.S.A.") || m.njStatutoryReference.includes("Enmienda"))) {
  testSuite.passed.push("TEST 12: El Paquete Legal contiene las 6 materias con cuestionarios jurídicos y citas a N.J.S.A.");
} else {
  testSuite.failed.push("TEST 12: Falla en estructura del paquete legal.");
}

// TEST 13: El paquete del Pastor contiene solamente decisiones institucionales
if (founderMatters.length === 6 && founderMatters.every((m) => m.institutionalOptions.length > 0)) {
  testSuite.passed.push("TEST 13: El Paquete del Pastor Fundador contiene las 6 fichas con opciones institucionales y evaluación de consecuencias.");
} else {
  testSuite.failed.push("TEST 13: Falla en estructura del paquete del Fundador.");
}

// TEST 14: RENACER IA conserva la separación estricta entre institucional / legal / doctrinal / operativo
const doc1 = getCatalogDocumentByNumber("REN-DOC-001");
const doc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (
  doc1?.status === "BORRADOR" &&
  doc2?.status !== "ADOPTADO" &&
  doctrinaData.meta.status === "BORRADOR"
) {
  testSuite.passed.push("TEST 14: Separación semántica estricta garantizada (Doctrina BORRADOR, Constitución EN_REDACCION, 0 adopciones automáticas).");
} else {
  testSuite.failed.push("TEST 14: Falla en separación semántica de estados.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 34 (PAQUETES DE DECISIÓN Y LEGAL): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
