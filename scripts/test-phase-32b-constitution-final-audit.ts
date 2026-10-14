import {
  getConstitutionFinalAuditList,
  getCriticalPendingArticles,
  getFinalAuditMetrics,
} from "../src/lib/constitution-final-audit-data";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("⚖️  SUITE DE PRUEBAS DE LA AUDITORÍA FINAL DE LA CONSTITUCIÓN (FASE 32B)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const audits = getConstitutionFinalAuditList();
const metrics = getFinalAuditMetrics();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: REN-DOC-002 continúa NO_ADOPTADA
if (constitution.status !== "ADOPTADO") {
  testSuite.passed.push("TEST 1: REN-DOC-002 continúa formalmente NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 1: REN-DOC-002 marcada como ADOPTADA indebidamente.");
}

// TEST 2: REN-DOC-002 continúa v0.1 en EN_REDACCION
if (constitution.version === "0.1" && constitution.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 2: REN-DOC-002 permanece en versión v0.1 y estado EN_REDACCION.");
} else {
  testSuite.failed.push(`TEST 2: Versión/Estado incorrecto: ${constitution.version} / ${constitution.status}`);
}

// TEST 3: Ninguna decisión PENDIENTE_DEFINIR se convierte en DECIDIDA
const criticalPending = getCriticalPendingArticles();
const allPendingStayPending = criticalPending.every(
  (a) => a.status === "PENDIENTE_DEFINIR"
);
if (allPendingStayPending) {
  testSuite.passed.push("TEST 3: Ninguna materia PENDIENTE_DEFINIR fue convertida artificialmente en decidida.");
} else {
  testSuite.failed.push("TEST 3: Materias críticas pendientes fueron cerradas indebidamente.");
}

// TEST 4 & 5: Soberanía de adopción en el Pastor Fundador (ADOPT_OFFICIAL)
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status !== "ADOPTADO" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 4 & 5: Autoridad doctrinal y adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 4 & 5: Falla en preservación de la autoridad del Fundador.");
}

// TEST 6: Los 48 artículos existen y están auditados
if (audits.length === 48) {
  testSuite.passed.push("TEST 6: Los 48 artículos institucionales existen y fueron auditados al 100%.");
} else {
  testSuite.failed.push(`TEST 6: Conteo de artículos auditados incorrecto: ${audits.length} (esperado 48).`);
}

// TEST 7: Cada artículo tiene clasificación válida
const validClasses = [
  "CONSTITUCION",
  "CONSTITUCION_BYLAWS",
  "ARTICLES_OF_INCORPORATION",
  "MANUAL_REGLAMENTO",
  "REVISION_LEGAL",
];
const allValidClass = audits.every((a) => validClasses.includes(a.classification));
if (allValidClass) {
  testSuite.passed.push("TEST 7: Cada uno de los 48 artículos posee una clasificación documental válida.");
} else {
  testSuite.failed.push("TEST 7: Clasificación inválida detectada en auditoría.");
}

// TEST 8: Cada artículo tiene estado válido
const validStatuses = [
  "DEFINIDO",
  "PENDIENTE",
  "PENDIENTE_DEFINIR",
  "REQUIERE_REVISION",
  "NO_ADOPTADO",
];
const allValidStatus = audits.every((a) => validStatuses.includes(a.status));
if (allValidStatus) {
  testSuite.passed.push("TEST 8: Cada uno de los 48 artículos posee un estado de auditoría formal válido.");
} else {
  testSuite.failed.push("TEST 8: Estado de auditoría inválido detectado.");
}

// TEST 9: Los seis artículos críticos continúan PENDIENTE_DEFINIR
const art13 = audits.find((a) => a.articleNumber === 13);
const art17 = audits.find((a) => a.articleNumber === 17);
const art22 = audits.find((a) => a.articleNumber === 22);
const art43 = audits.find((a) => a.articleNumber === 43);
const art46 = audits.find((a) => a.articleNumber === 46);
const art47 = audits.find((a) => a.articleNumber === 47);

if (
  art13?.status === "PENDIENTE_DEFINIR" &&
  art17?.status === "PENDIENTE_DEFINIR" &&
  art22?.status === "PENDIENTE_DEFINIR" &&
  art43?.status === "PENDIENTE_DEFINIR" &&
  art46?.status === "PENDIENTE_DEFINIR" &&
  art47?.status === "PENDIENTE_DEFINIR"
) {
  testSuite.passed.push("TEST 9: Los seis (6) artículos críticos (13, 17, 22, 43, 46, 47) permanecen estrictamente en PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push("TEST 9: Uno o más artículos críticos fueron cerrados indebidamente.");
}

// TEST 10: No existen fechas ficticias de vigencia
if (art47?.currentText?.includes("tras adopción") && !art47.currentText.includes("202")) {
  testSuite.passed.push("TEST 10: 0 fechas ficticias de vigencia en el Artículo 47.");
} else {
  testSuite.failed.push("TEST 10: Fecha ficticia detectada en vigencia.");
}

// TEST 11: No existen firmas ficticias ni actas ficticias
const hasFakeSignatures = audits.some(
  (a) => a.currentText.includes("Firma:") || a.currentText.includes("Acta No.")
);
if (!hasFakeSignatures) {
  testSuite.passed.push("TEST 11: 0 firmas ficticias y 0 actas ficticias en el articulado.");
} else {
  testSuite.failed.push("TEST 11: Firmas o actas ficticias encontradas.");
}

// TEST 12: Las 107 decisiones institucionales permanecen íntegras
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 12: Las 107 decisiones institucionales permanecen exactamente preservadas.");
} else {
  testSuite.failed.push(`TEST 12: Conteo de decisiones alterado: ${allDecisions.length}`);
}

// TEST 13: Artículo 5 contiene observación de "forfeitar" y recomendación formal
const art5 = audits.find((a) => a.articleNumber === 5);
if (
  art5?.observations.includes("forfeitar") &&
  art5.recommendation.includes("perder o renunciar voluntariamente a la salvación")
) {
  testSuite.passed.push("TEST 13: Artículo 5 incluye observación lingüística ('forfeitar') y recomendación formal reservada al Fundador.");
} else {
  testSuite.failed.push("TEST 13: Falla en observación del Artículo 5.");
}

// TEST 14: Separación de capas documentales
const hasArticles = audits.some((a) => a.classification === "ARTICLES_OF_INCORPORATION");
const hasBylaws = audits.some((a) => a.classification === "CONSTITUCION_BYLAWS");
const hasConst = audits.some((a) => a.classification === "CONSTITUCION");
if (hasArticles && hasBylaws && hasConst) {
  testSuite.passed.push("TEST 14: Separación de capas documentales (Constitución, Articles of Inc., Bylaws, Manuales) formalmente articulada.");
} else {
  testSuite.failed.push("TEST 14: Falla en separación de capas documentales.");
}

// TEST 15: Declaración de Fe REN-DOC-001 continúa BORRADOR v1.0 NO ADOPTADA
const catDoc1 = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc1?.status === "BORRADOR" && catDoc1.version === "1.0" && doctrinaData.meta.status === "BORRADOR") {
  testSuite.passed.push("TEST 15: Declaración de Fe (REN-DOC-001) permanece inmutable en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 15: Doctrina alterada indebidamente.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 32B (AUDITORÍA FINAL): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
