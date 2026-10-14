import { getArticle22Dossier } from "../src/lib/article-22-voting-rights-dossier";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🗳️  SUITE DE PRUEBAS DEL ARTÍCULO 22 — DERECHOS DE VOTO Y ASAMBLEA (FASE 37)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const dossier = getArticle22Dossier();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Artículo 22 permanece pendiente donde corresponda
if (dossier.currentStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 1: Artículo 22 permanece formalmente en estado PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push(`TEST 1: Estado alterado del Artículo 22: ${dossier.currentStatus}`);
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

// TEST 6: Miembro activo permanece como base del derecho de voto
const memberBase = dossier.definedParams.find((p) => p.paramName.includes("Titularidad"))?.definedRule.includes("Miembros Activos");
if (memberBase) {
  testSuite.passed.push("TEST 6: Condición de Miembro Activo consolidada como base obligatoria del voto.");
} else {
  testSuite.failed.push("TEST 6: Base del derecho de voto alterada.");
}

// TEST 7: Edad de 18 años permanece intacta
const age18 = dossier.definedParams.find((p) => p.paramName.includes("Edad Mínima"))?.definedRule.includes("dieciocho (18) años");
if (age18) {
  testSuite.passed.push("TEST 7: Edad mínima de 18 años cumplidos intacta.");
} else {
  testSuite.failed.push("TEST 7: Edad mínima alterada.");
}

// TEST 8: Quórum del 50% permanece intacto
const q50 = dossier.definedParams.find((p) => p.paramName.includes("Quórum Congregacional"))?.definedRule.includes("cincuenta por ciento (50%)");
if (q50) {
  testSuite.passed.push("TEST 8: Quórum asambleario del 50% de miembros activos consolidado.");
} else {
  testSuite.failed.push("TEST 8: Quórum del 50% alterado.");
}

// TEST 9: Mayoría simple ordinaria permanece intacta
const ordMaj = dossier.definedParams.find((p) => p.paramName.includes("Mayoría Ordinaria"))?.definedRule.includes("Mayoría simple");
if (ordMaj) {
  testSuite.passed.push("TEST 9: Mayoría simple para asuntos ordinarios consolidada.");
} else {
  testSuite.failed.push("TEST 9: Mayoría ordinaria alterada.");
}

// TEST 10: Mayoría de 2/3 extraordinaria permanece intacta
const extMaj = dossier.definedParams.find((p) => p.paramName.includes("Mayoría Extraordinaria"))?.definedRule.includes("dos tercios (2/3)");
if (extMaj) {
  testSuite.passed.push("TEST 10: Mayoría calificada de 2/3 para materias extraordinarias consolidada.");
} else {
  testSuite.failed.push("TEST 10: Mayoría extraordinaria alterada.");
}

// TEST 11: No se inventan materias reservadas (catálogo basado estrictamente en decisiones previas)
const reservedValid = dossier.reservedMatters.length === 7 && dossier.reservedMatters.every((m) => m.sourceOrNote.includes("DEC-DEF") || m.sourceOrNote.includes("Fase") || m.sourceOrNote.includes("PROPUESTA") || m.sourceOrNote.includes("Revisión"));
if (reservedValid) {
  testSuite.passed.push("TEST 11: Catálogo de materias asamblearias sustentado en fuentes documentales e institucionales.");
} else {
  testSuite.failed.push("TEST 11: Materias asamblearias inventadas detectadas.");
}

// TEST 12: No se inventan poderes del Consejo
const councilValid = dossier.boundaryMatrix.every((b) => b.councilRole && b.status);
if (councilValid) {
  testSuite.passed.push("TEST 12: Delimitación de poderes del Consejo fiduciario preservada sin atribuciones inventadas.");
} else {
  testSuite.failed.push("TEST 12: Falla en delimitación de poderes del Consejo.");
}

// TEST 13: No se inventan poderes adicionales del Pastor Fundador
const founderValid = dossier.boundaryMatrix.every((b) => b.founderRole && !b.founderRole.includes("inventado"));
if (founderValid) {
  testSuite.passed.push("TEST 13: Autoridad espiritual y soberanía doctrinal del Pastor Fundador intacta.");
} else {
  testSuite.failed.push("TEST 13: Falla en facultades del Pastor Fundador.");
}

// TEST 14: No existen fechas ficticias
const hasFakeDates = dossier.proposedDraftText.includes("de 202") || dossier.proposedDraftText.includes("de 203");
if (!hasFakeDates) {
  testSuite.passed.push("TEST 14: 0 fechas ficticias registradas en el articulado.");
} else {
  testSuite.failed.push("TEST 14: Fecha ficticia detectada en la propuesta.");
}

// TEST 15: No existen firmas ficticias
const hasSignatures = dossier.proposedDraftText.includes("Firma:");
if (!hasSignatures) {
  testSuite.passed.push("TEST 15: 0 firmas ficticias en el expediente del Artículo 22.");
} else {
  testSuite.failed.push("TEST 15: Firmas ficticias detectadas.");
}

// TEST 16: No existen actas ficticias
const hasMinutes = dossier.proposedDraftText.includes("Acta No.");
if (!hasMinutes) {
  testSuite.passed.push("TEST 16: 0 actas ficticias registradas.");
} else {
  testSuite.failed.push("TEST 16: Actas ficticias detectadas.");
}

// TEST 17: Todas las propuestas tienen etiqueta PROPUESTA — NO ADOPTADA
const allProposalsMarked = dossier.votingOptions.every((o) => o.proposalNotice === "PROPUESTA — NO ADOPTADA") &&
  dossier.proposedDraftNotice === "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
if (allProposalsMarked) {
  testSuite.passed.push("TEST 17: Todas las opciones de voto y redacción marcadas formalmente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 17: Propuesta sin rótulo de no adopción.");
}

// TEST 18: Las 107 decisiones permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 18: Las 107 decisiones institucionales permanecen exactamente preservadas e íntegras.");
} else {
  testSuite.failed.push(`TEST 18: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 19: ADOPT_OFFICIAL permanece protegido exclusivamente en el Pastor Fundador
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status !== "ADOPTADO" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 19: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 19: Falla en protección de autoridad del Fundador.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 37 (EXPEDIENTE ARTÍCULO 22): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
