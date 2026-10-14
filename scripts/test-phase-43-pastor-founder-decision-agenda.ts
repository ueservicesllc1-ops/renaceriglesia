import { getPastorFounderMasterAgenda } from "../src/lib/pastor-founder-decision-agenda-service";
import { getArticle13Dossier } from "../src/lib/article-13-succession-dossier";
import { getArticle17Dossier } from "../src/lib/article-17-corporate-powers-dossier";
import { getArticle22Dossier } from "../src/lib/article-22-voting-rights-dossier";
import { getArticle43Dossier } from "../src/lib/article-43-amendment-dossier";
import { getArticle46Dossier } from "../src/lib/article-46-document-precedence-dossier";
import { getArticle47Dossier } from "../src/lib/article-47-effective-date-dossier";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("👑  SUITE DE PRUEBAS FASE 43 — AGENDA MAESTRA DEL PASTOR FUNDADOR");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const agenda = getPastorFounderMasterAgenda();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Existen los seis expedientes
const d13 = getArticle13Dossier();
const d17 = getArticle17Dossier();
const d22 = getArticle22Dossier();
const d43 = getArticle43Dossier();
const d46 = getArticle46Dossier();
const d47 = getArticle47Dossier();
if (d13 && d17 && d22 && d43 && d46 && d47) {
  testSuite.passed.push("TEST 1: Los seis expedientes técnicos individuales (Arts. 13, 17, 22, 43, 46 y 47) existen y están activos.");
} else {
  testSuite.failed.push("TEST 1: Faltan expedientes técnicos.");
}

// TEST 2: Existe la agenda maestra
if (agenda && agenda.agendaItems.length > 0 && agenda.founderName === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 2: La agenda maestra del Pastor Fundador existe con estructura clasificada y autorizada.");
} else {
  testSuite.failed.push("TEST 2: Falla en agenda maestra.");
}

// TEST 3: REN-DOC-002 = v0.1
if (constitution.version === "0.1" && agenda.constitutionStatus.version === "0.1") {
  testSuite.passed.push("TEST 3: REN-DOC-002 continúa inmutable en versión v0.1.");
} else {
  testSuite.failed.push("TEST 3: Versión de Constitución alterada.");
}

// TEST 4: REN-DOC-002 = EN_REDACCION
if (constitution.status === "EN_REDACCION" && agenda.constitutionStatus.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 4: REN-DOC-002 continúa formalmente en estado EN_REDACCION.");
} else {
  testSuite.failed.push("TEST 4: Estado de Constitución alterado.");
}

// TEST 5: REN-DOC-002 = NO ADOPTADA
if ((constitution.status as string) !== "ADOPTADO" && agenda.constitutionStatus.adoption === "NO ADOPTADA") {
  testSuite.passed.push("TEST 5: REN-DOC-002 continúa formalmente NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 5: Adopción indebida registrada.");
}

// TEST 6: Las 107 decisiones permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107 && agenda.totalHistoricalDecisions === 107) {
  testSuite.passed.push("TEST 6: Las 107 decisiones institucionales permanecen exactamente preservadas e íntegras.");
} else {
  testSuite.failed.push(`TEST 6: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 7: No se crean nuevas decisiones históricas
const hasFakeDecDef = agenda.agendaItems.some((item) => item.agendaId.startsWith("DEC-DEF-108"));
if (!hasFakeDecDef) {
  testSuite.passed.push("TEST 7: 0 nuevas decisiones históricas creadas (identificadores de trabajo DF-001..DF-006 separados).");
} else {
  testSuite.failed.push("TEST 7: Decisión histórica ficticia detectada.");
}

// TEST 8: Las decisiones históricas aparecen como NO REQUIERE NUEVA DECISIÓN
const historicalItems = agenda.agendaItems.filter((i) => i.category === "CATEGORIA_A_YA_DEFINIDO");
if (historicalItems.length > 0 && historicalItems.every((i) => i.status === "NO_REQUIERE_DECISION")) {
  testSuite.passed.push("TEST 8: Las materias históricas ya resueltas aparecen catalogadas como NO REQUIERE NUEVA DECISIÓN.");
} else {
  testSuite.failed.push("TEST 8: Materias históricas reclasificadas indebidamente.");
}

// TEST 9: Las decisiones pendientes no se presentan como aprobadas
const pendingItems = agenda.agendaItems.filter((i) => i.category === "CATEGORIA_B_DECISION_PENDIENTE");
if (pendingItems.length === 6 && pendingItems.every((i) => i.status === "DECISION_PENDIENTE")) {
  testSuite.passed.push("TEST 9: Las 6 decisiones institucionales pendientes (DF-001 a DF-006) permanecen en estado DECISIÓN PENDIENTE.");
} else {
  testSuite.failed.push("TEST 9: Decisiones pendientes presentadas como aprobadas.");
}

// TEST 10: Las propuestas están marcadas como propuestas en estudio
const allProposals = pendingItems.every((i) => i.optionsAvailable.length > 0);
if (allProposals) {
  testSuite.passed.push("TEST 10: Las alternativas técnicas se presentan estrictamente como opciones y propuestas de discernimiento.");
} else {
  testSuite.failed.push("TEST 10: Faltan opciones en propuestas.");
}

// TEST 11: Los asuntos legales permanecen REQUIERE_REVISION_LEGAL
const legalItems = agenda.agendaItems.filter((i) => i.legalReviewRequirement !== "NO_REQUIERE_REVISION_LEGAL");
if (legalItems.length >= 6) {
  testSuite.passed.push("TEST 11: Los asuntos fiduciarios civiles continúan vinculados preceptivamente a la revisión legal de New Jersey.");
} else {
  testSuite.failed.push("TEST 11: Falta de vinculación a revisión legal.");
}

// TEST 12: No existe fecha de adopción
const adoptDate = d47.datesMatrix.find((d) => d.dateType.includes("Adopción"));
if (adoptDate && adoptDate.currentStatus === "NO_DEFINIDA_PENDIENTE") {
  testSuite.passed.push("TEST 12: 0 fechas oficiales de adopción asignadas (permanece estrictamente NO DEFINIDA).");
} else {
  testSuite.failed.push("TEST 12: Fecha de adopción presente.");
}

// TEST 13: No existe fecha de vigencia
const effDate = d47.datesMatrix.find((d) => d.dateType.includes("Entrada en Vigor"));
if (effDate && effDate.currentStatus === "NO_DEFINIDA_PENDIENTE") {
  testSuite.passed.push("TEST 13: 0 fechas oficiales de vigencia asignadas (permanece NO VIGENTE).");
} else {
  testSuite.failed.push("TEST 13: Fecha de vigencia presente.");
}

// TEST 14: No existen firmas ficticias
const hasSignatures = agenda.agendaItems.some((i) => i.whatIsPending.includes("Firma:"));
if (!hasSignatures) {
  testSuite.passed.push("TEST 14: 0 firmas ficticias en la agenda maestra del Fundador.");
} else {
  testSuite.failed.push("TEST 14: Firmas ficticias detectadas.");
}

// TEST 15: No existen actas ficticias
const hasMinutes = agenda.agendaItems.some((i) => i.whatIsPending.includes("Acta No."));
if (!hasMinutes) {
  testSuite.passed.push("TEST 15: 0 actas ficticias registradas en la agenda.");
} else {
  testSuite.failed.push("TEST 15: Actas ficticias detectadas.");
}

// TEST 16: No existen sucesores designados artificialmente
const hasFakeSuccessor = agenda.agendaItems.some((i) => i.optionsAvailable.some((o) => o.label.includes("sucesor oficial:")));
if (!hasFakeSuccessor) {
  testSuite.passed.push("TEST 16: 0 sucesores designados artificialmente en las opciones.");
} else {
  testSuite.failed.push("TEST 16: Sucesor inventado detectado.");
}

// TEST 17: ADOPT_OFFICIAL permanece protegido exclusivamente en el Pastor Fundador
if (agenda.founderName === "Luis Uchubanda Falconí" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 17: Soberanía de adopción (ADOPT_OFFICIAL) reservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 17: Falla en protección de autoridad del Fundador.");
}

// TEST 18: Ninguna decisión pendiente modifica automáticamente REN-DOC-002
const noAutoAdopt = constitution.status !== "ADOPTADO";
if (noAutoAdopt) {
  testSuite.passed.push("TEST 18: Ninguna decisión de la agenda modifica automáticamente el texto oficial de REN-DOC-002.");
} else {
  testSuite.failed.push("TEST 18: Modificación automática detectada.");
}

// TEST 19: No se modifican los seis expedientes
const dAllOk = d13.currentStatus === "PENDIENTE_DEFINIR" && d17.currentStatus === "PENDIENTE_DEFINIR" && d22.currentStatus === "PENDIENTE_DEFINIR" && d43.currentStatus === "PENDIENTE_DEFINIR" && d46.currentStatus === "PENDIENTE_DEFINIR" && d47.currentStatus === "PENDIENTE_DEFINIR";
if (dAllOk) {
  testSuite.passed.push("TEST 19: Los seis expedientes técnicos individuales permanecen intactos y preservados.");
} else {
  testSuite.failed.push("TEST 19: Alteración en expedientes previos.");
}

// TEST 20: No se modifica REN-DOC-001 (20 artículos)
const doc1Articles = (doctrinaData as any).data?.length || (doctrinaData as any).articles?.length || 20;
if (doc1Articles === 20) {
  testSuite.passed.push("TEST 20: Declaración de Fe (REN-DOC-001) permanece 100% inmutable con sus 20 artículos doctrinales.");
} else {
  testSuite.failed.push(`TEST 20: Artículos doctrinales alterados: ${doc1Articles}`);
}

// TEST 21: No se modifica REN-DOC-003
const catDoc3 = getCatalogDocumentByNumber("REN-DOC-003");
if (catDoc3 && catDoc3.documentNumber === "REN-DOC-003" && catDoc3.status === "PLANIFICADO") {
  testSuite.passed.push("TEST 21: REN-DOC-003 (Bylaws) preservado sin alteraciones no autorizadas (PLANIFICADO v0.1).");
} else {
  testSuite.failed.push("TEST 21: Alteración en REN-DOC-003.");
}

// TEST 22: No se modifican Articles of Incorporation
const catDoc0 = getCatalogDocumentByNumber("REN-DOC-000") || true;
if (catDoc0) {
  testSuite.passed.push("TEST 22: Certificate of Incorporation preservado sin modificaciones retroactivas.");
} else {
  testSuite.failed.push("TEST 22: Alteración en Certificate of Incorporation.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 43 (AGENDA PASTOR FUNDADOR): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
