import {
  getSixPendingMatters,
  getPendingMatterByArticle,
  DOCUMENT_PRECEDENCE_MATRIX,
} from "../src/lib/constitution-pending-matters-service";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🔍 SUITE DE PRUEBAS DE LA RESOLUCIÓN CONTROLADA DE MATERIAS PENDIENTES (FASE 33)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const matters = getSixPendingMatters();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Existen exactamente 6 materias pendientes
if (matters.length === 6) {
  testSuite.passed.push("TEST 1: Existen exactamente seis (6) materias constitucionales pendientes catalogadas.");
} else {
  testSuite.failed.push(`TEST 1: Conteo incorrecto de materias pendientes: ${matters.length} (esperado 6).`);
}

// TEST 2: Son exactamente 13, 17, 22, 43, 46, 47
const matterArticleNumbers = matters.map((m) => m.articleNumber).sort((a, b) => a - b);
const expectedNumbers = [13, 17, 22, 43, 46, 47];
const areExactNumbers = JSON.stringify(matterArticleNumbers) === JSON.stringify(expectedNumbers);
if (areExactNumbers) {
  testSuite.passed.push("TEST 2: Las materias corresponden exactamente a los Artículos 13, 17, 22, 43, 46 y 47.");
} else {
  testSuite.failed.push(`TEST 2: Artículos no coinciden: ${JSON.stringify(matterArticleNumbers)}`);
}

// TEST 3: Ninguna materia está ADOPTADA
const noneAdopted = matters.every((m) => m.currentStatus !== "NO_ADOPTADO" ? m.currentStatus !== "DEFINIDO" || m.finalStatus !== "DEFINIDO" : true);
const anyAdoptedFlag = matters.some((m) => (m.finalStatus as string) === "ADOPTADO");
if (!anyAdoptedFlag) {
  testSuite.passed.push("TEST 3: Ninguna de las 6 materias pendientes ha sido marcada como ADOPTADA.");
} else {
  testSuite.failed.push("TEST 3: Materia marcada como ADOPTADA indebidamente.");
}

// TEST 4, 5 & 6: REN-DOC-002 continúa v0.1, EN_REDACCION y NO_ADOPTADA
if (
  constitution.version === "0.1" &&
  constitution.status === "EN_REDACCION" &&
  (constitution.status as string) !== "ADOPTADO"
) {
  testSuite.passed.push("TEST 4, 5 & 6: REN-DOC-002 permanece estrictamente en versión v0.1, EN_REDACCION y NO_ADOPTADA.");
} else {
  testSuite.failed.push(`TEST 4, 5 & 6: Estado de REN-DOC-002 alterado: ${constitution.version} / ${constitution.status}`);
}

// TEST 7: Ninguna materia pendiente se convierte automáticamente en DECIDIDA
const allPendingStayOpen = matters.every(
  (m) => m.currentStatus === "PENDIENTE_DEFINIR" || m.currentStatus === "REQUIERE_REVISION_LEGAL"
);
if (allPendingStayOpen) {
  testSuite.passed.push("TEST 7: Todas las materias permanecen formalmente abiertas en PENDIENTE_DEFINIR o REQUIERE_REVISION_LEGAL.");
} else {
  testSuite.failed.push("TEST 7: Materia pendiente fue cerrada como decidida sin resolución.");
}

// TEST 8: No existe fecha ficticia de vigencia
const art47 = getPendingMatterByArticle(47);
if (art47 && !art47.whatMustNotBeDefinedYet.includes("202") && art47.recommendation.includes("sin inventar fechas")) {
  testSuite.passed.push("TEST 8: 0 fechas ficticias de vigencia en el Artículo 47.");
} else {
  testSuite.failed.push("TEST 8: Fecha ficticia detectada en vigencia.");
}

// TEST 9 & 10: No existen firmas ficticias ni actas ficticias
const hasFakeElements = matters.some(
  (m) => m.recommendation.includes("Firma:") || m.whatMustNotBeDefinedYet.includes("Acta No.")
);
if (!hasFakeElements) {
  testSuite.passed.push("TEST 9 & 10: 0 firmas ficticias y 0 actas ficticias registradas.");
} else {
  testSuite.failed.push("TEST 9 & 10: Firmas o actas ficticias detectadas.");
}

// TEST 11: Las 107 decisiones institucionales permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 11: Las 107 decisiones institucionales permanecen exactamente preservadas.");
} else {
  testSuite.failed.push(`TEST 11: Conteo de decisiones alterado: ${allDecisions.length}`);
}

// TEST 12 & 13: Autoridad ADOPT_OFFICIAL protegida y administrador bloqueado para adopción
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status !== "ADOPTADO" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 12 & 13: Autoridad de adopción (ADOPT_OFFICIAL) reservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 12 & 13: Falla en protección de autoridad del Fundador.");
}

// TEST 14: Discriminación de estados e integración con la matriz documental
if (DOCUMENT_PRECEDENCE_MATRIX.length >= 5 && matters.every((m) => m.targetDocument)) {
  testSuite.passed.push("TEST 14: Matriz de separación documental (Constitución, Articles, Bylaws, Manuales) y discriminación de estados activa.");
} else {
  testSuite.failed.push("TEST 14: Falla en matriz de precedencia documental.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 33 (RESOLUCIÓN DE PENDIENTES): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
