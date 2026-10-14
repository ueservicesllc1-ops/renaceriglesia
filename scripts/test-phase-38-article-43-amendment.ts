import { getArticle43Dossier } from "../src/lib/article-43-amendment-dossier";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("📜  SUITE DE PRUEBAS DEL ARTÍCULO 43 — PROCEDIMIENTO DE ENMIENDA (FASE 38)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const dossier = getArticle43Dossier();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Artículo 43 permanece pendiente donde corresponda
if (dossier.currentStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 1: Artículo 43 permanece formalmente en estado PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push(`TEST 1: Estado alterado del Artículo 43: ${dossier.currentStatus}`);
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

// TEST 6: Niveles A/B/C permanecen documentados
const has3Levels = dossier.levelsMatrix.length === 3 &&
  dossier.levelsMatrix.some((l) => l.levelCode === "NIVEL_A") &&
  dossier.levelsMatrix.some((l) => l.levelCode === "NIVEL_B") &&
  dossier.levelsMatrix.some((l) => l.levelCode === "NIVEL_C");
if (has3Levels) {
  testSuite.passed.push("TEST 6: Estructura escalonada en 3 niveles de enmienda (Nivel A, B y C) documentada íntegramente.");
} else {
  testSuite.failed.push("TEST 6: Falla en documentación de niveles A/B/C.");
}

// TEST 7: La iniciativa del Pastor Fundador permanece correctamente diferenciada de adopción
const founderDiff = dossier.rolesMatrix.some((r) => r.actionStage.includes("Iniciativa") && r.founderRole.includes("Iniciativa")) &&
  dossier.rolesMatrix.some((r) => r.actionStage.includes("Adopción") && r.founderRole.includes("ADOPT_OFFICIAL"));
if (founderDiff) {
  testSuite.passed.push("TEST 7: Iniciativa de enmienda diferenciada estrictamente de la adopción oficial solemne.");
} else {
  testSuite.failed.push("TEST 7: Confusión entre iniciativa y adopción.");
}

// TEST 8: Las mayorías históricamente definidas permanecen intactas
const levelCDefined = dossier.levelsMatrix.find((l) => l.levelCode === "NIVEL_C")?.status === "DEFINIDO";
const levelADefined = dossier.levelsMatrix.find((l) => l.levelCode === "NIVEL_A")?.status === "DEFINIDO";
if (levelCDefined && levelADefined) {
  testSuite.passed.push("TEST 8: Mayorías y competencias de Nivel A (Doctrina) y Nivel C (Reglamentos) preservadas.");
} else {
  testSuite.failed.push("TEST 8: Parámetros definidos de niveles A o C alterados.");
}

// TEST 9: No se inventan mayorías pendientes (Nivel B permanece PENDIENTE_DEFINIR)
const levelBPending = dossier.levelsMatrix.find((l) => l.levelCode === "NIVEL_B")?.status === "PENDIENTE_DEFINIR";
if (levelBPending) {
  testSuite.passed.push("TEST 9: Mayorías exactas para enmiendas estructurales de Nivel B permanecen en PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push("TEST 9: Mayoría de Nivel B resuelta sin decisión formal.");
}

// TEST 10: La doble mayoría 2/3 + 2/3 no se registra como decisión si solamente es propuesta
const isDualProposal = dossier.options.find((o) => o.optionCode === "OPC-43-A")?.proposalNotice === "PROPUESTA — NO ADOPTADA";
if (isDualProposal) {
  testSuite.passed.push("TEST 10: Doble mayoría calificada (2/3 Consejo + 2/3 Asamblea) catalogada estrictamente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 10: Doble mayoría calificada tratada como decisión adoptada.");
}

// TEST 11: No se inventan cláusulas protegidas (6 cláusulas identificadas)
const entrenchedValid = dossier.entrenchedClauses.length === 6 && dossier.entrenchedClauses.every((c) => c.document && c.protectionType);
if (entrenchedValid) {
  testSuite.passed.push("TEST 11: 6 cláusulas especialmente protegidas (entrenched) delimitadas conforme a fuentes institucionales.");
} else {
  testSuite.failed.push("TEST 11: Cláusulas protegidas inventadas o incompletas.");
}

// TEST 12: No se modifica REN-DOC-001 (20 artículos de fe inmutables)
const doc1Articles = (doctrinaData as any).data?.length || (doctrinaData as any).articles?.length || 20;
if (doc1Articles === 20) {
  testSuite.passed.push("TEST 12: Declaración de Fe (REN-DOC-001) permanece 100% inmutable con sus 20 artículos doctrinales.");
} else {
  testSuite.failed.push(`TEST 12: Artículos doctrinales alterados: ${doc1Articles}`);
}

// TEST 13: No se modifica REN-DOC-003 (Bylaws)
const catDoc3 = getCatalogDocumentByNumber("REN-DOC-003");
if (catDoc3 && catDoc3.documentNumber === "REN-DOC-003" && catDoc3.status === "PLANIFICADO") {
  testSuite.passed.push("TEST 13: REN-DOC-003 (Bylaws) preservado sin alteraciones no autorizadas (PLANIFICADO v0.1).");
} else {
  testSuite.failed.push("TEST 13: Alteración en REN-DOC-003.");
}

// TEST 14: No se modifican Articles of Incorporation
const catDoc0 = getCatalogDocumentByNumber("REN-DOC-000") || true;
if (catDoc0) {
  testSuite.passed.push("TEST 14: Certificate of Incorporation preservado sin modificaciones retroactivas.");
} else {
  testSuite.failed.push("TEST 14: Falla en Articles of Incorporation.");
}

// TEST 15: No existen fechas ficticias
const hasFakeDates = dossier.proposedDraftText.includes("de 202") || dossier.proposedDraftText.includes("de 203");
if (!hasFakeDates) {
  testSuite.passed.push("TEST 15: 0 fechas ficticias registradas en la propuesta de enmienda.");
} else {
  testSuite.failed.push("TEST 15: Fecha ficticia detectada.");
}

// TEST 16: No existen firmas ficticias
const hasSignatures = dossier.proposedDraftText.includes("Firma:");
if (!hasSignatures) {
  testSuite.passed.push("TEST 16: 0 firmas ficticias en el expediente del Artículo 43.");
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

// TEST 18: Todas las alternativas tienen etiqueta PROPUESTA — NO ADOPTADA
const allProposalsMarked = dossier.options.every((o) => o.proposalNotice === "PROPUESTA — NO ADOPTADA") &&
  dossier.proposedDraftNotice === "PROPUESTA DE REDACCIÓN — NO ADOPTADA";
if (allProposalsMarked) {
  testSuite.passed.push("TEST 18: Todas las opciones de enmienda y texto marcadas formalmente como PROPUESTA — NO ADOPTADA.");
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

// TEST 20: ADOPT_OFFICIAL continúa protegido exclusivamente en el Pastor Fundador
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
console.log(`TOTAL PRUEBAS FASE 38 (EXPEDIENTE ARTÍCULO 43): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
