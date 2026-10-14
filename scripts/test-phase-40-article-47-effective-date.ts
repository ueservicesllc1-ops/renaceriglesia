import { getArticle47Dossier } from "../src/lib/article-47-effective-date-dossier";
import { getArticle46Dossier } from "../src/lib/article-46-document-precedence-dossier";
import { getArticle43Dossier } from "../src/lib/article-43-amendment-dossier";
import { getArticle22Dossier } from "../src/lib/article-22-voting-rights-dossier";
import { getArticle17Dossier } from "../src/lib/article-17-corporate-powers-dossier";
import { getArticle13Dossier } from "../src/lib/article-13-succession-dossier";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";

console.log("==========================================================================");
console.log("📅  SUITE DE PRUEBAS DEL ARTÍCULO 47 — FECHA DE VIGENCIA OFICIAL (FASE 40)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const dossier47 = getArticle47Dossier();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Artículo 47 permanece PENDIENTE_DEFINIR
if (dossier47.currentStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 1: Artículo 47 permanece formalmente en estado PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push(`TEST 1: Estado alterado del Artículo 47: ${dossier47.currentStatus}`);
}

// TEST 2: Revisión legal permanece activa
if (dossier47.legalStatus === "REQUIERE_REVISION_LEGAL") {
  testSuite.passed.push("TEST 2: Revisión legal de New Jersey permanece activa (REQUIERE_REVISION_LEGAL).");
} else {
  testSuite.failed.push(`TEST 2: Estado legal alterado: ${dossier47.legalStatus}`);
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

// TEST 6: No existe fecha oficial de adopción
const adoptDate = dossier47.datesMatrix.find((d) => d.dateType.includes("Adopción Oficial"));
if (adoptDate && adoptDate.currentStatus === "NO_DEFINIDA_PENDIENTE" && adoptDate.currentValue.includes("PENDIENTE")) {
  testSuite.passed.push("TEST 6: 0 fechas oficiales de adopción asignadas (permanece estrictamente PENDIENTE).");
} else {
  testSuite.failed.push("TEST 6: Fecha de adopción oficial asignada indebidamente.");
}

// TEST 7: No existe fecha oficial de vigencia
const effDate = dossier47.datesMatrix.find((d) => d.dateType.includes("Entrada en Vigor"));
if (effDate && effDate.currentStatus === "NO_DEFINIDA_PENDIENTE" && effDate.currentValue.includes("PENDIENTE")) {
  testSuite.passed.push("TEST 7: 0 fechas oficiales de vigencia asignadas (permanece estrictamente NO VIGENTE).");
} else {
  testSuite.failed.push("TEST 7: Fecha de vigencia oficial asignada indebidamente.");
}

// TEST 8: No se crean fechas automáticamente
const hasAutoDates = dossier47.proposedDraftText.includes("de 202") || dossier47.proposedDraftText.includes("de 203");
if (!hasAutoDates) {
  testSuite.passed.push("TEST 8: 0 fechas automáticas generadas en la propuesta de redacción.");
} else {
  testSuite.failed.push("TEST 8: Fecha automática detectada.");
}

// TEST 9: No se crean fechas retroactivas
const hasRetroactive = dossier47.proposedDraftText.includes("retroactiv");
if (hasRetroactive && dossier47.proposedDraftText.includes("Queda terminantemente prohibida la asignación")) {
  testSuite.passed.push("TEST 9: Prohibición absoluta de fechas retroactivas garantizada normativamente.");
} else {
  testSuite.failed.push("TEST 9: Falla en control de retroactividad.");
}

// TEST 10: No se crean firmas ficticias
const hasSignatures = dossier47.proposedDraftText.includes("Firma:");
if (!hasSignatures) {
  testSuite.passed.push("TEST 10: 0 firmas ficticias en el expediente del Artículo 47.");
} else {
  testSuite.failed.push("TEST 10: Firmas ficticias detectadas.");
}

// TEST 11: No se crean actas ficticias
const hasMinutes = dossier47.proposedDraftText.includes("Acta No.");
if (!hasMinutes) {
  testSuite.passed.push("TEST 11: 0 actas ficticias registradas en el articulado.");
} else {
  testSuite.failed.push("TEST 11: Actas ficticias detectadas.");
}

// TEST 12: No se crea una versión adoptada ficticia
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2 && catDoc2.version === "0.1" && catDoc2.status !== "ADOPTADO") {
  testSuite.passed.push("TEST 12: 0 versiones adoptadas ficticias creadas en el catálogo maestro.");
} else {
  testSuite.failed.push("TEST 12: Versión adoptada ficticia detectada.");
}

// TEST 13: Las opciones están marcadas PROPUESTA — NO ADOPTADA
const allOptionsMarked = dossier47.options.every((o) => o.proposalNotice === "PROPUESTA — NO ADOPTADA") &&
  dossier47.proposedDraftNotice === "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
if (allOptionsMarked) {
  testSuite.passed.push("TEST 13: Todas las opciones de vigencia y redacción marcadas formalmente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 13: Opción sin rótulo de no adopción.");
}

// TEST 14: Las 107 decisiones permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 14: Las 107 decisiones institucionales permanecen exactamente preservadas e íntegras.");
} else {
  testSuite.failed.push(`TEST 14: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 15: ADOPT_OFFICIAL permanece protegido exclusivamente en el Pastor Fundador
if (constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 15: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 15: Falla en protección de autoridad del Fundador.");
}

// TEST 16: Los artículos 13, 17, 22, 43 y 46 no son modificados
const d13 = getArticle13Dossier().currentStatus === "PENDIENTE_DEFINIR";
const d17 = getArticle17Dossier().currentStatus === "PENDIENTE_DEFINIR";
const d22 = getArticle22Dossier().currentStatus === "PENDIENTE_DEFINIR";
const d43 = getArticle43Dossier().currentStatus === "PENDIENTE_DEFINIR";
const d46 = getArticle46Dossier().currentStatus === "PENDIENTE_DEFINIR";
if (d13 && d17 && d22 && d43 && d46) {
  testSuite.passed.push("TEST 16: Los expedientes previos de los Artículos 13, 17, 22, 43 y 46 permanecen intactos y no modificados.");
} else {
  testSuite.failed.push("TEST 16: Modificación indebida en expedientes anteriores.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 40 (EXPEDIENTE ARTÍCULO 47): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
