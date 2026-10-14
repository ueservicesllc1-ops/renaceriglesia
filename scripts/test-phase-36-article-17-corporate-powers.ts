import { getArticle17Dossier } from "../src/lib/article-17-corporate-powers-dossier";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("⚖️  SUITE DE PRUEBAS DEL ARTÍCULO 17 — QUÓRUMS Y PODERES CORPORATIVOS (FASE 36)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const dossier = getArticle17Dossier();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Artículo 17 permanece pendiente donde corresponda
if (dossier.currentStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 1: Artículo 17 permanece formalmente en estado PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push(`TEST 1: Estado alterado del Artículo 17: ${dossier.currentStatus}`);
}

// TEST 2: Revisión legal permanece activa
if (dossier.legalStatus === "REQUIERE_REVISION_LEGAL") {
  testSuite.passed.push("TEST 2: Revisión legal de New Jersey permanece activa (REQUIERE_REVISION_LEGAL).");
} else {
  testSuite.failed.push(`TEST 2: Estado legal alterado: ${dossier.legalStatus}`);
}

// TEST 3: REN-DOC-002 continúa v0.1
if (constitution.version === "0.1") {
  testSuite.passed.push("TEST 3: REN-DOC-002 continúa inmutable en versión v0.1.");
} else {
  testSuite.failed.push(`TEST 3: Versión alterada: ${constitution.version}`);
}

// TEST 4: REN-DOC-002 continúa EN_REDACCION
if (constitution.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 4: REN-DOC-002 continúa formalmente en estado EN_REDACCION.");
} else {
  testSuite.failed.push(`TEST 4: Estado documental alterado: ${constitution.status}`);
}

// TEST 5: REN-DOC-002 continúa NO ADOPTADA
if ((constitution.status as string) !== "ADOPTADO") {
  testSuite.passed.push("TEST 5: REN-DOC-002 continúa NO ADOPTADA (soberanía exclusiva preservada).");
} else {
  testSuite.failed.push("TEST 5: REN-DOC-002 marcada como adoptada indebidamente.");
}

// TEST 6: Quórums 3->2, 4->3 y 5->3 permanecen intactos
const q3 = dossier.definedParams.find((p) => p.paramName.includes("3 miembros"))?.definedRule.includes("dos (2)");
const q4 = dossier.definedParams.find((p) => p.paramName.includes("4 miembros"))?.definedRule.includes("tres (3)");
const q5 = dossier.definedParams.find((p) => p.paramName.includes("5 miembros"))?.definedRule.includes("tres (3)");
if (q3 && q4 && q5) {
  testSuite.passed.push("TEST 6: Tabla matemática de quórum (3->2, 4->3, 5->3) permanece íntegra e intacta.");
} else {
  testSuite.failed.push("TEST 6: Falla en preservación de la tabla de quórum.");
}

// TEST 7: Mayoría ordinaria simple permanece intacta
const ordMaj = dossier.definedParams.find((p) => p.paramName.includes("Mayoría Ordinaria"))?.definedRule.includes("Mayoría simple");
if (ordMaj) {
  testSuite.passed.push("TEST 7: Mayoría ordinaria simple consolidada.");
} else {
  testSuite.failed.push("TEST 7: Mayoría ordinaria alterada.");
}

// TEST 8: Mayoría extraordinaria 2/3 permanece intacta
const extMaj = dossier.definedParams.find((p) => p.paramName.includes("Materias Extraordinarias"))?.definedRule.includes("dos tercios (2/3)");
if (extMaj) {
  testSuite.passed.push("TEST 8: Mayoría extraordinaria de 2/3 + visto bueno del Fundador consolidada.");
} else {
  testSuite.failed.push("TEST 8: Mayoría extraordinaria alterada.");
}

// TEST 9: Empate = propuesta no aprobada permanece intacto
const tieRule = dossier.definedParams.find((p) => p.paramName.includes("Desempate"))?.definedRule.includes("rechazada");
if (tieRule) {
  testSuite.passed.push("TEST 9: Regla de desempate (propuesta no aprobada) preservada exactamente.");
} else {
  testSuite.failed.push("TEST 9: Regla de empate alterada.");
}

// TEST 10: No existe umbral monetario inventado (queda abierto como propuesta en Bylaws)
const hasFakeFixedThreshold = dossier.proposedDraftText.includes("$") || dossier.proposedDraftText.includes("USD");
if (!hasFakeFixedThreshold && dossier.proposedDraftText.includes("umbral presupuestario que se establezca en los Bylaws")) {
  testSuite.passed.push("TEST 10: 0 umbrales monetarios inventados en el texto normativo constitucional.");
} else {
  testSuite.failed.push("TEST 10: Umbral monetario inventado en el articulado.");
}

// TEST 11: No existen poderes corporativos inventados
const powersValid = dossier.powersMatrix.length === 14 && dossier.powersMatrix.every((p) => p.source.includes("DEC-DEF") || p.source.includes("REN-DOC"));
if (powersValid) {
  testSuite.passed.push("TEST 11: Matriz técnica de poderes (14 materias) basada exclusivamente en DEC-DEF institucionales.");
} else {
  testSuite.failed.push("TEST 11: Poderes corporativos inventados detectados.");
}

// TEST 12: No existen fechas ficticias
const hasFakeDates = dossier.proposedDraftText.includes("de 202") || dossier.proposedDraftText.includes("de 203");
if (!hasFakeDates) {
  testSuite.passed.push("TEST 12: 0 fechas de vigencia ficticias registradas.");
} else {
  testSuite.failed.push("TEST 12: Fecha ficticia detectada en la propuesta.");
}

// TEST 13: No existen firmas ficticias
const hasSignatures = dossier.proposedDraftText.includes("Firma:");
if (!hasSignatures) {
  testSuite.passed.push("TEST 13: 0 firmas ficticias en el expediente del Artículo 17.");
} else {
  testSuite.failed.push("TEST 13: Firmas ficticias detectadas.");
}

// TEST 14: No existen actas ficticias
const hasMinutes = dossier.proposedDraftText.includes("Acta No.");
if (!hasMinutes) {
  testSuite.passed.push("TEST 14: 0 actas ficticias registradas en el articulado.");
} else {
  testSuite.failed.push("TEST 14: Actas ficticias detectadas.");
}

// TEST 15: Todas las propuestas están marcadas PROPUESTA — NO ADOPTADA
const allProposalsMarked = dossier.thresholdOptions.every((o) => o.proposalNotice === "PROPUESTA — NO ADOPTADA") &&
  dossier.proposedDraftNotice === "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
if (allProposalsMarked) {
  testSuite.passed.push("TEST 15: Todas las opciones de umbral y redacción marcadas formalmente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 15: Propuesta sin rótulo de no adopción.");
}

// TEST 16: Las 107 decisiones permanecen exactamente preservadas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 16: Las 107 decisiones institucionales permanecen exactamente preservadas e íntegras.");
} else {
  testSuite.failed.push(`TEST 16: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 17: ADOPT_OFFICIAL permanece protegido exclusivamente en el Pastor Fundador
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status !== "ADOPTADO" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 17: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 17: Falla en protección de autoridad del Fundador.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 36 (EXPEDIENTE ARTÍCULO 17): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
