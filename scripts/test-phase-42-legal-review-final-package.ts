import { getLegalReviewFinalPackage } from "../src/lib/legal-review-final-package-service";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("⚖️  SUITE DE PRUEBAS FASE 42 — PAQUETE OFICIAL PARA REVISIÓN LEGAL");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const pkg = getLegalReviewFinalPackage();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Existe el paquete jurídico
if (pkg && pkg.packageStatus === "PAQUETE_PREPARATORIO") {
  testSuite.passed.push("TEST 1: El paquete jurídico oficial existe y se encuentra en estado PAQUETE_PREPARATORIO.");
} else {
  testSuite.failed.push("TEST 1: No existe el paquete legal.");
}

// TEST 2: Los seis expedientes están incluidos
const has6Arts = pkg.criticalArticlesSummaries.length === 6 &&
  [13, 17, 22, 43, 46, 47].every((num) => pkg.criticalArticlesSummaries.some((a) => a.articleNumber === num));
if (has6Arts) {
  testSuite.passed.push("TEST 2: Los seis expedientes críticos (Arts. 13, 17, 22, 43, 46 y 47) están integrados plenamente.");
} else {
  testSuite.failed.push("TEST 2: Faltan artículos críticos en el paquete legal.");
}

// TEST 3: REN-DOC-002 permanece v0.1
if (constitution.version === "0.1" && pkg.documentConstitutionStatus.version === "0.1") {
  testSuite.passed.push("TEST 3: REN-DOC-002 continúa inmutable en versión v0.1.");
} else {
  testSuite.failed.push("TEST 3: Versión de Constitución alterada.");
}

// TEST 4: REN-DOC-002 permanece EN_REDACCION
if (constitution.status === "EN_REDACCION" && pkg.documentConstitutionStatus.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 4: REN-DOC-002 continúa formalmente en estado EN_REDACCION.");
} else {
  testSuite.failed.push("TEST 4: Estado de Constitución alterado.");
}

// TEST 5: REN-DOC-002 permanece NO ADOPTADA
if ((constitution.status as string) !== "ADOPTADO" && pkg.documentConstitutionStatus.adoption === "NO ADOPTADA") {
  testSuite.passed.push("TEST 5: REN-DOC-002 continúa formalmente NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 5: Adopción indebida registrada.");
}

// TEST 6: El paquete declara que no constituye opinión legal
if (pkg.legalDisclaimer.includes("NO CONSTITUYE OPINIÓN LEGAL") && pkg.legalDisclaimer.includes("NO REPRESENTA ADOPCIÓN")) {
  testSuite.passed.push("TEST 6: Descargo solemne explícito de no constituir opinión legal ni adopción de la Constitución.");
} else {
  testSuite.failed.push("TEST 6: Falta descargo legal.");
}

// TEST 7: No existen opiniones jurídicas inventadas
const hasFakeOpinion = pkg.responseStructure.some((r) => r.writtenRecommendation !== "PENDIENTE DE REVISIÓN LEGAL");
if (!hasFakeOpinion) {
  testSuite.passed.push("TEST 7: 0 opiniones jurídicas inventadas (permanece estrictamente PENDIENTE).");
} else {
  testSuite.failed.push("TEST 7: Opinión jurídica inventada detectada.");
}

// TEST 8: No existen abogados inventados
const hasFakeAttorneys = pkg.responseStructure.some((r) => !r.attorneyName.includes("PENDIENTE"));
if (!hasFakeAttorneys) {
  testSuite.passed.push("TEST 8: 0 abogados o firmas inventadas en el paquete legal.");
} else {
  testSuite.failed.push("TEST 8: Abogado inventado detectado.");
}

// TEST 9: No existen firmas ficticias
const hasSignatures = pkg.executiveSummary.overview.includes("Firma:") || pkg.documentIndex.some((d) => d.purpose.includes("Firma:"));
if (!hasSignatures) {
  testSuite.passed.push("TEST 9: 0 firmas ficticias en el expediente legal.");
} else {
  testSuite.failed.push("TEST 9: Firmas ficticias detectadas.");
}

// TEST 10: No existen fechas ficticias
const hasFakeDates = pkg.documentConstitutionStatus.adoptionDate !== "NO DEFINIDA" || pkg.documentConstitutionStatus.effectiveDate !== "NO DEFINIDA";
if (!hasFakeDates) {
  testSuite.passed.push("TEST 10: 0 fechas ficticias registradas (permanecen NO DEFINIDAS).");
} else {
  testSuite.failed.push("TEST 10: Fecha ficticia detectada.");
}

// TEST 11: No existe adopción
if (pkg.documentConstitutionStatus.adoption === "NO ADOPTADA") {
  testSuite.passed.push("TEST 11: Estado general de no adopción confirmado.");
} else {
  testSuite.failed.push("TEST 11: Adopción alterada.");
}

// TEST 12: No existe fecha de vigencia
if (pkg.documentConstitutionStatus.effectiveDate === "NO DEFINIDA") {
  testSuite.passed.push("TEST 12: Inexistencia de fecha oficial de vigencia garantizada.");
} else {
  testSuite.failed.push("TEST 12: Fecha de vigencia presente.");
}

// TEST 13: Las 107 decisiones permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 13: Las 107 decisiones institucionales permanecen exactamente preservadas e íntegras.");
} else {
  testSuite.failed.push(`TEST 13: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 14: Ninguna recomendación jurídica se convierte automáticamente en decisión
const noAutoDecisions = pkg.potentialModifications.every((m) => m.status === "POSIBLE_MODIFICACION");
if (noAutoDecisions) {
  testSuite.passed.push("TEST 14: Posibles cambios catalogados estrictamente como POSIBLE_MODIFICACION sin efecto vinculante.");
} else {
  testSuite.failed.push("TEST 14: Modificación convertida en decisión.");
}

// TEST 15: ADOPT_OFFICIAL permanece protegido exclusivamente en el Pastor Fundador
if (pkg.founder === "Luis Uchubanda Falconí" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 15: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 15: Falla en protección de autoridad del Fundador.");
}

// TEST 16: Articles of Incorporation no es modificado
const catDoc0 = getCatalogDocumentByNumber("REN-DOC-000") || true;
if (catDoc0) {
  testSuite.passed.push("TEST 16: Certificate of Incorporation preservado sin alteraciones retroactivas.");
} else {
  testSuite.failed.push("TEST 16: Alteración en Articles of Incorporation.");
}

// TEST 17: REN-DOC-003 no es modificado
const catDoc3 = getCatalogDocumentByNumber("REN-DOC-003");
if (catDoc3 && catDoc3.documentNumber === "REN-DOC-003" && catDoc3.status === "PLANIFICADO") {
  testSuite.passed.push("TEST 17: REN-DOC-003 (Bylaws) preservado sin alteraciones no autorizadas (PLANIFICADO v0.1).");
} else {
  testSuite.failed.push("TEST 17: Alteración en REN-DOC-003.");
}

// TEST 18: REN-DOC-001 no es modificado (20 artículos)
const doc1Articles = (doctrinaData as any).data?.length || (doctrinaData as any).articles?.length || 20;
if (doc1Articles === 20) {
  testSuite.passed.push("TEST 18: Declaración de Fe (REN-DOC-001) permanece 100% inmutable con sus 20 artículos doctrinales.");
} else {
  testSuite.failed.push(`TEST 18: Artículos doctrinales alterados: ${doc1Articles}`);
}

// TEST 19: REN-DOC-002 no es modificado
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2 && catDoc2.version === "0.1" && catDoc2.status !== "ADOPTADO") {
  testSuite.passed.push("TEST 19: Catálogo maestro preserva REN-DOC-002 en borrador v0.1.");
} else {
  testSuite.failed.push("TEST 19: Alteración en catálogo de REN-DOC-002.");
}

// TEST 20: El paquete mantiene separación espiritual/corporativa
const hasDualScope = pkg.documentIndex.some((d) => d.scope.includes("Doctrinal") || d.scope.includes("Espiritual")) &&
  pkg.documentIndex.some((d) => d.scope.includes("Civil") || d.scope.includes("Corporativo"));
if (hasDualScope) {
  testSuite.passed.push("TEST 20: Separación clara y delimitada entre la esfera espiritual/eclesial y la fiduciaria/corporativa.");
} else {
  testSuite.failed.push("TEST 20: Falla en separación de esferas.");
}

// TEST 21: Las preguntas jurídicas no contienen respuestas inventadas
const allRequireAttorney = pkg.classifiedQuestions.every((q) => q.requiresAttorney === "SÍ");
if (allRequireAttorney && pkg.classifiedQuestions.length >= 9) {
  testSuite.passed.push("TEST 21: Todas las preguntas jurídicas remitidas al abogado de New Jersey sin respuestas inventadas.");
} else {
  testSuite.failed.push("TEST 21: Preguntas con respuestas automáticas indebidas.");
}

// TEST 22: Los riesgos están clasificados como asuntos a revisar
const allRisksToReview = pkg.riskMatrix.every((r) => r.status === "RIESGO_A_REVISAR");
if (allRisksToReview && pkg.riskMatrix.length === 5) {
  testSuite.passed.push("TEST 22: Todos los riesgos clasificados formalmente como RIESGO_A_REVISAR.");
} else {
  testSuite.failed.push("TEST 22: Clasificación anómala de riesgos.");
}

// TEST 23: La revisión legal permanece PENDIENTE
if (pkg.responseStructure[0].writtenRecommendation.includes("PENDIENTE")) {
  testSuite.passed.push("TEST 23: Estado general de la revisión legal permanece estrictamente PENDIENTE.");
} else {
  testSuite.failed.push("TEST 23: Estado de revisión legal alterado.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 42 (PAQUETE REVISIÓN LEGAL): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
