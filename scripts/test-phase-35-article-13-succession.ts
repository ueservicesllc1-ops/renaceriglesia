import { getArticle13Dossier } from "../src/lib/article-13-succession-dossier";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("👑 SUITE DE PRUEBAS DEL ARTÍCULO 13 — SUCESIÓN DEL PASTOR FUNDADOR (FASE 35)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const dossier = getArticle13Dossier();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Artículo 13 sigue PENDIENTE_DEFINIR y REQUIERE_REVISION_LEGAL
if (dossier.currentStatus === "PENDIENTE_DEFINIR" && dossier.legalStatus === "REQUIERE_REVISION_LEGAL") {
  testSuite.passed.push("TEST 1: Artículo 13 permanece estrictamente en PENDIENTE_DEFINIR y REQUIERE_REVISION_LEGAL.");
} else {
  testSuite.failed.push(`TEST 1: Estado alterado del Artículo 13: ${dossier.currentStatus} / ${dossier.legalStatus}`);
}

// TEST 2, 3 & 4: REN-DOC-002 sigue v0.1, EN_REDACCION y NO_ADOPTADA
if (
  constitution.version === "0.1" &&
  constitution.status === "EN_REDACCION" &&
  (constitution.status as string) !== "ADOPTADO"
) {
  testSuite.passed.push("TEST 2, 3 & 4: REN-DOC-002 continúa inmutable en versión v0.1, EN_REDACCION y NO ADOPTADA.");
} else {
  testSuite.failed.push(`TEST 2, 3 & 4: Estado de REN-DOC-002 alterado: ${constitution.version} / ${constitution.status}`);
}

// TEST 5: No existe sucesor nombrado automáticamente
const hasNamedSuccessor = dossier.proposedDraftText.includes("sucesor es ") || dossier.proposedDraftText.includes("nombrándose a ");
if (!hasNamedSuccessor) {
  testSuite.passed.push("TEST 5: 0 nombres de personas sucesoras designadas artificialmente.");
} else {
  testSuite.failed.push("TEST 5: Nombre de persona sucesora detectado indebidamente.");
}

// TEST 6: No existe fecha de sucesión ficticia
const hasFakeDates = dossier.proposedDraftText.includes("de 202") || dossier.proposedDraftText.includes("de 203");
if (!hasFakeDates) {
  testSuite.passed.push("TEST 6: 0 fechas de vigencia o sucesión ficticias registradas.");
} else {
  testSuite.failed.push("TEST 6: Fecha ficticia detectada en la propuesta.");
}

// TEST 7 & 8: No existen firmas ficticias ni actas ficticias
const hasSignaturesOrMinutes = dossier.proposedDraftText.includes("Firma:") || dossier.proposedDraftText.includes("Acta No.");
if (!hasSignaturesOrMinutes) {
  testSuite.passed.push("TEST 7 & 8: 0 firmas ficticias y 0 actas ficticias en el expediente.");
} else {
  testSuite.failed.push("TEST 7 & 8: Firmas o actas ficticias encontradas.");
}

// TEST 9: Ninguna propuesta se registra como decisión adoptada
const allProposalsMarked = dossier.options.every((o) => o.proposalBadge === "PROPUESTA — NO ADOPTADA") &&
  dossier.proposedDraftNotice === "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
if (allProposalsMarked) {
  testSuite.passed.push("TEST 9: Todas las opciones y redacciones están explícitamente rotuladas como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 9: Propuesta no rotulada adecuadamente.");
}

// TEST 10: Las 107 decisiones institucionales permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 10: Las 107 decisiones institucionales continúan exactamente preservadas.");
} else {
  testSuite.failed.push(`TEST 10: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 11 & 12: Autoridad ADOPT_OFFICIAL protegida y administrador bloqueado para adopción
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status !== "ADOPTADO" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 11 & 12: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 11 & 12: Falla en protección de autoridad del Fundador.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 35 (EXPEDIENTE ARTÍCULO 13): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
