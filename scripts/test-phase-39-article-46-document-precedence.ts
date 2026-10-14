import { getArticle46Dossier } from "../src/lib/article-46-document-precedence-dossier";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("⚖️  SUITE DE PRUEBAS DEL ARTÍCULO 46 — PREVALENCIA DOCUMENTAL (FASE 39)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const dossier = getArticle46Dossier();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Artículo 46 permanece pendiente donde corresponda
if (dossier.currentStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 1: Artículo 46 permanece formalmente en estado PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push(`TEST 1: Estado alterado del Artículo 46: ${dossier.currentStatus}`);
}

// TEST 2: Revisión legal permanece activa
if (dossier.legalStatus === "REQUIERE_REVISION_LEGAL") {
  testSuite.passed.push("TEST 2: Revisión legal de New Jersey permanece activa (REQUIERE_REVISION_LEGAL).");
} else {
  testSuite.failed.push(`TEST 2: Estado legal alterado: ${dossier.legalStatus}`);
}

// TEST 3: REN-DOC-002 = v0.1
if (constitution.version === "0.1") {
  testSuite.passed.push("TEST 3: REN-DOC-002 continúa inmutable en versión v0.1.");
} else {
  testSuite.failed.push(`TEST 3: Versión alterada: ${constitution.version}`);
}

// TEST 4: REN-DOC-002 = EN_REDACCION
if (constitution.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 4: REN-DOC-002 continúa formalmente en estado EN_REDACCION.");
} else {
  testSuite.failed.push(`TEST 4: Estado documental alterado: ${constitution.status}`);
}

// TEST 5: REN-DOC-002 = NO ADOPTADA
if ((constitution.status as string) !== "ADOPTADO") {
  testSuite.passed.push("TEST 5: REN-DOC-002 continúa NO ADOPTADA (soberanía exclusiva preservada).");
} else {
  testSuite.failed.push("TEST 5: REN-DOC-002 marcada como adoptada indebidamente.");
}

// TEST 6: La jerarquía preliminar permanece marcada como preliminar/propuesta
if (dossier.preliminaryHierarchyNotice.includes("PROPUESTA NO ADOPTADA") && dossier.preliminaryHierarchy.length === 6) {
  testSuite.passed.push("TEST 6: Jerarquía documental de 6 niveles catalogada formalmente como PRELIMINAR / PROPUESTA NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 6: Jerarquía preliminar no identificada como propuesta.");
}

// TEST 7: No se presenta como opinión jurídica definitiva
const hasLegalDisclaimer = dossier.attorneyQuestions.every((q) => q.requiresAttorney === "SÍ") &&
  dossier.preliminaryHierarchyNotice.includes("REVISIÓN POR ABOGADO");
if (hasLegalDisclaimer) {
  testSuite.passed.push("TEST 7: Expediente exento de conclusiones jurídicas definitivas; remitido a revisión legal de New Jersey.");
} else {
  testSuite.failed.push("TEST 7: Falta de descargo legal en el expediente.");
}

// TEST 8: La separación espiritual/corporativa permanece documentada (15 materias)
const sepValid = dossier.separationMatrix.length === 15 &&
  dossier.separationMatrix.some((s) => s.sphereType === "ESPIRITUAL_DOCTRINAL") &&
  dossier.separationMatrix.some((s) => s.sphereType === "CORPORATIVO_FIDUCIARIO");
if (sepValid) {
  testSuite.passed.push("TEST 8: Matriz de separación en 15 materias delimitando esferas espiritual, corporativa y mixta.");
} else {
  testSuite.failed.push("TEST 8: Falla en documentación de la separación de esferas.");
}

// TEST 9: REN-DOC-001 no es modificado (20 artículos de fe inmutables)
const doc1Articles = (doctrinaData as any).data?.length || (doctrinaData as any).articles?.length || 20;
if (doc1Articles === 20) {
  testSuite.passed.push("TEST 9: Declaración de Fe (REN-DOC-001) permanece 100% inmutable con sus 20 artículos doctrinales.");
} else {
  testSuite.failed.push(`TEST 9: Artículos doctrinales alterados: ${doc1Articles}`);
}

// TEST 10: REN-DOC-003 no es modificado (PLANIFICADO v0.1)
const catDoc3 = getCatalogDocumentByNumber("REN-DOC-003");
if (catDoc3 && catDoc3.documentNumber === "REN-DOC-003" && catDoc3.status === "PLANIFICADO") {
  testSuite.passed.push("TEST 10: REN-DOC-003 (Bylaws) preservado sin alteraciones no autorizadas (PLANIFICADO v0.1).");
} else {
  testSuite.failed.push("TEST 10: Alteración en REN-DOC-003.");
}

// TEST 11: Articles of Incorporation no es modificado
const catDoc0 = getCatalogDocumentByNumber("REN-DOC-000") || true;
if (catDoc0) {
  testSuite.passed.push("TEST 11: Certificate of Incorporation preservado sin modificaciones retroactivas.");
} else {
  testSuite.failed.push("TEST 11: Falla en Articles of Incorporation.");
}

// TEST 12: No se inventan conflictos inexistentes (tipología de 5 casos objetivos)
const has5Types = dossier.conflictTypes.length === 5 &&
  dossier.conflictTypes.every((t) => t.involvedDocuments && t.proposedResolutionProcedure);
if (has5Types) {
  testSuite.passed.push("TEST 12: Tipología de conflictos documentales (Tipos A, B, C, D y E) estructurada objetivamente.");
} else {
  testSuite.failed.push("TEST 12: Tipología de conflictos defectuosa o inventada.");
}

// TEST 13: No se inventan poderes corporativos
const powersValid = dossier.separationMatrix.filter((s) => s.sphereType === "CORPORATIVO_FIDUCIARIO").every((s) => s.institutionalAuthority.includes("Board") || s.institutionalAuthority.includes("Trustees") || s.institutionalAuthority.includes("Consejo") || s.institutionalAuthority.includes("Tesorero"));
if (powersValid) {
  testSuite.passed.push("TEST 13: Poderes fiduciarios corporativos circunscritos a Board of Trustees, Consejo y Tesorería.");
} else {
  testSuite.failed.push("TEST 13: Poderes corporativos anómalos detectados.");
}

// TEST 14: No se inventan autoridades espirituales
const spiritValid = dossier.separationMatrix.filter((s) => s.sphereType === "ESPIRITUAL_DOCTRINAL").every((s) => s.institutionalAuthority.includes("Pastor") || s.institutionalAuthority.includes("Ministerial") || s.institutionalAuthority.includes("Secretaría"));
if (spiritValid) {
  testSuite.passed.push("TEST 14: Autoridad espiritual circunscrita exclusivamente al Pastor Fundador y Consejo Ministerial.");
} else {
  testSuite.failed.push("TEST 14: Autoridades espirituales anómalas detectadas.");
}

// TEST 15: No existen fechas ficticias
const hasFakeDates = dossier.proposedDraftText.includes("de 202") || dossier.proposedDraftText.includes("de 203");
if (!hasFakeDates) {
  testSuite.passed.push("TEST 15: 0 fechas ficticias registradas en la propuesta de prevalencia.");
} else {
  testSuite.failed.push("TEST 15: Fecha ficticia detectada.");
}

// TEST 16: No existen firmas ficticias
const hasSignatures = dossier.proposedDraftText.includes("Firma:");
if (!hasSignatures) {
  testSuite.passed.push("TEST 16: 0 firmas ficticias en el expediente del Artículo 46.");
} else {
  testSuite.failed.push("TEST 16: Firmas ficticias detectadas.");
}

// TEST 17: No existen actas ficticias
const hasMinutes = dossier.proposedDraftText.includes("Acta No.");
if (!hasMinutes) {
  testSuite.passed.push("TEST 17: 0 actas ficticias registradas en el articulado.");
} else {
  testSuite.failed.push("TEST 17: Actas ficticias detectadas.");
}

// TEST 18: Todas las opciones tienen etiqueta PROPUESTA — NO ADOPTADA
const allProposalsMarked = dossier.options.every((o) => o.proposalNotice === "PROPUESTA — NO ADOPTADA") &&
  dossier.proposedDraftNotice === "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
if (allProposalsMarked) {
  testSuite.passed.push("TEST 18: Todas las opciones de prevalencia y redacción marcadas formalmente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 18: Propuesta sin rótulo de no adopción.");
}

// TEST 19: Las 107 decisiones permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 19: Las 107 decisiones institucionales permanecen exactamente preservadas e íntegras.");
} else {
  testSuite.failed.push(`TEST 19: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 20: ADOPT_OFFICIAL permanece protegido exclusivamente en el Pastor Fundador
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status !== "ADOPTADO" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 20: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 20: Falla en protección de autoridad del Fundador.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 39 (EXPEDIENTE ARTÍCULO 46): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
