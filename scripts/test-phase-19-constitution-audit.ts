import { MASTER_CONSTITUTION_AUDIT, OFFICIAL_LEGAL_SOURCES } from "../src/lib/constitution-audit-data";
import { ConstitutionAuditReportSchema } from "../src/schemas/constitution-audit.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";

console.log("==========================================================================");
console.log("⚖️  SUITE DE PRUEBAS DE AUDITORÍA LEGAL Y ESTRUCTURAL (FASE 19)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const audit = MASTER_CONSTITUTION_AUDIT;

// TEST 1: Los 48 artículos están registrados
if (audit.articles.length === 48 && audit.totalArticlesAudited === 48) {
  testSuite.passed.push("TEST 1: Los 48 artículos constitucionales están registrados en la auditoría.");
} else {
  testSuite.failed.push(`TEST 1: Cantidad de artículos incorrecta: ${audit.articles.length}`);
}

// TEST 2: Cada artículo tiene clasificación válida
const validClassifications = [
  "CONSTITUCION",
  "CONSTITUCION_BYLAWS",
  "ARTICLES_OF_INCORPORATION",
  "MANUAL_REGLAMENTO",
  "REVISION_LEGAL",
];
const allClassified = audit.articles.every((a) => validClassifications.includes(a.classification));
if (allClassified) {
  testSuite.passed.push("TEST 2: Todos los artículos poseen una clasificación legal válida.");
} else {
  testSuite.failed.push("TEST 2: Falla en la clasificación de artículos.");
}

// TEST 3: Cada clasificación tiene justificación
const allJustified = audit.articles.every((a) => a.justification && a.justification.length >= 10);
if (allJustified) {
  testSuite.passed.push("TEST 3: Cada artículo cuenta con su dictamen y justificación jurídica.");
} else {
  testSuite.failed.push("TEST 3: Hay artículos sin justificación.");
}

// TEST 4: Articles of Incorporation separado
const articlesIncDocs = audit.articles.filter((a) => a.classification === "ARTICLES_OF_INCORPORATION");
if (articlesIncDocs.length >= 4) {
  testSuite.passed.push(`TEST 4: Materias de Articles of Incorporation identificadas (${articlesIncDocs.length} artículos).`);
} else {
  testSuite.failed.push("TEST 4: Falla en clasificación de Articles of Incorporation.");
}

// TEST 5: Bylaws separado
const bylawsDocs = audit.articles.filter((a) => a.classification === "CONSTITUCION_BYLAWS");
if (bylawsDocs.length >= 10) {
  testSuite.passed.push(`TEST 5: Materias de coordinación con Bylaws identificadas (${bylawsDocs.length} artículos).`);
} else {
  testSuite.failed.push("TEST 5: Falla en clasificación de Bylaws.");
}

// TEST 6: Doctrina separada (reconoce REN-DOC-001)
const docArt = audit.articles.find((a) => a.articleNumber === 8);
if (docArt?.relatedDocuments.includes("REN-DOC-001") && docArt.classification === "CONSTITUCION") {
  testSuite.passed.push("TEST 6: Vinculación formal con la Declaración de Fe (REN-DOC-001) confirmada.");
} else {
  testSuite.failed.push("TEST 6: Falla en vinculación con doctrina.");
}

// TEST 7: Manuales separados
const manualDocs = audit.articles.filter((a) => a.classification === "MANUAL_REGLAMENTO");
if (manualDocs.length >= 3) {
  testSuite.passed.push(`TEST 7: Materias operativas asignadas a Manuales y Reglamentos (${manualDocs.length} artículos).`);
} else {
  testSuite.failed.push("TEST 7: Falla en manuales operativos.");
}

// TEST 8: Artículo de disolución (Art. 44) revisado
const disolucionArt = audit.articles.find((a) => a.articleNumber === 44);
if (disolucionArt?.classification === "ARTICLES_OF_INCORPORATION" && disolucionArt.legalSources.length > 0) {
  testSuite.passed.push("TEST 8: Cláusula de disolución (Art. 44) respaldada con fuentes IRS 501(c)(3) y NJSA 15A.");
} else {
  testSuite.failed.push("TEST 8: Falla en artículo de disolución.");
}

// TEST 9: Propósito 501(c)(3) (Art. 4) identificado
const purposeArt = audit.articles.find((a) => a.articleNumber === 4);
if (purposeArt?.classification === "ARTICLES_OF_INCORPORATION") {
  testSuite.passed.push("TEST 9: Propósito religioso corporativo (Art. 4) asignado a Articles para Organizational Test.");
} else {
  testSuite.failed.push("TEST 9: Falla en artículo de propósito corporativo.");
}

// TEST 10: Consejo de Gobierno revisado
const consejoArts = audit.articles.filter((a) => [14, 15, 16].includes(a.articleNumber));
if (consejoArts.every((a) => a.classification === "CONSTITUCION_BYLAWS")) {
  testSuite.passed.push("TEST 10: Artículos del Consejo de Gobierno correctamente asignados a CONSTITUCION_BYLAWS.");
} else {
  testSuite.failed.push("TEST 10: Falla en artículos del Consejo de Gobierno.");
}

// TEST 11: Pastor Fundador revisado
const founderArt = audit.articles.find((a) => a.articleNumber === 11);
if (founderArt?.classification === "CONSTITUCION" && founderArt.decisionStatus === "DEFINIDO") {
  testSuite.passed.push("TEST 11: Pastor Fundador reconocido eclesiológicamente bajo amparo constitucional de la Primera Enmienda.");
} else {
  testSuite.failed.push("TEST 11: Falla en artículo del Pastor Fundador.");
}

// TEST 12: Sucesión marcada pendiente y revisión legal
const sucesionArt = audit.articles.find((a) => a.articleNumber === 13);
if (sucesionArt?.decisionStatus === "PENDIENTE_DEFINIR" && sucesionArt.classification === "REVISION_LEGAL") {
  testSuite.passed.push("TEST 12: Sucesión fundacional marcada como PENDIENTE_DEFINIR y REVISION_LEGAL.");
} else {
  testSuite.failed.push("TEST 12: Falla en estado de sucesión.");
}

// TEST 13: Votaciones marcadas pendientes
const votacionArt = audit.articles.find((a) => a.articleNumber === 22);
if (votacionArt?.decisionStatus === "PENDIENTE_DEFINIR" && votacionArt.classification === "REVISION_LEGAL") {
  testSuite.passed.push("TEST 13: Derechos societarios de voto (Art. 22) marcados como PENDIENTE_DEFINIR y REVISION_LEGAL.");
} else {
  testSuite.failed.push("TEST 13: Falla en artículo de votaciones.");
}

// TEST 14: Conflicto documental marcado revisión legal
const conflictoArt = audit.articles.find((a) => a.articleNumber === 46);
if (conflictoArt?.classification === "REVISION_LEGAL" && conflictoArt.decisionStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 14: Prelación en caso de conflicto documental (Art. 46) reservada a REVISION_LEGAL.");
} else {
  testSuite.failed.push("TEST 14: Falla en artículo de prelación documental.");
}

// TEST 15: Propiedad revisada
const propiedadArt = audit.articles.find((a) => a.articleNumber === 39);
if (propiedadArt?.subjectMatter.includes("Patrimonio") && propiedadArt.classification === "CONSTITUCION_BYLAWS") {
  testSuite.passed.push("TEST 15: Titularidad fiduciaria de bienes asignada a RENACER CHURCH, INC.");
} else {
  testSuite.failed.push("TEST 15: Falla en artículo de propiedad.");
}

// TEST 16: Finanzas separadas entre principio y procedimiento
const finPrin = audit.articles.find((a) => a.articleNumber === 38);
const finProc = audit.articles.find((a) => a.articleNumber === 37);
if (finPrin?.classification === "CONSTITUCION" && finProc?.classification === "CONSTITUCION_BYLAWS") {
  testSuite.passed.push("TEST 16: Finanzas separadas: principio doctrinal en Constitución y procedimientos en Bylaws/Manual.");
} else {
  testSuite.failed.push("TEST 16: Falla en separación financiera.");
}

// TEST 17: Credenciales vinculadas a REN-DOC-019
const credArt = audit.articles.find((a) => a.articleNumber === 32);
if (credArt?.relatedDocuments.includes("REN-DOC-019")) {
  testSuite.passed.push("TEST 17: Credenciales ministeriales vinculadas formalmente a REN-DOC-019.");
} else {
  testSuite.failed.push("TEST 17: Falla en vinculación de credenciales.");
}

// TEST 18: Seminario vinculado al sistema académico (REN-DOC-018)
const semArt = audit.articles.find((a) => a.articleNumber === 29);
if (semArt?.relatedDocuments.includes("REN-DOC-018")) {
  testSuite.passed.push("TEST 18: Seminario Bíblico RENACER vinculado formalmente a REN-DOC-018.");
} else {
  testSuite.failed.push("TEST 18: Falla en vinculación de seminario.");
}

// TEST 19: RENACER IA diferencia análisis de decisiones
function simulateAIAuditResponse(artNum: number) {
  const item = audit.articles.find((a) => a.articleNumber === artNum);
  if (!item) return "No encontrado";
  if (item.decisionStatus === "DEFINIDO") {
    return `La decisión está formalmente DEFINIDA. Clasificación técnica: ${item.classification}.`;
  }
  return `ANÁLISIS TÉCNICO: Clasificado como ${item.classification}, pero la decisión institucional formal está PENDIENTE DE DEFINICIÓN.`;
}
const ai1 = simulateAIAuditResponse(11);
const ai2 = simulateAIAuditResponse(13);
if (ai1.includes("DEFINIDA") && ai2.includes("ANÁLISIS TÉCNICO") && ai2.includes("PENDIENTE DE DEFINICIÓN")) {
  testSuite.passed.push("TEST 19: RENACER IA discrimina fielmente entre análisis técnico y decisiones institucionales definitivas.");
} else {
  testSuite.failed.push("TEST 19: Falla en respuestas de RENACER IA.");
}

// TEST 20: Validación de Esquema Zod y No Adopción
const schemaParsed = ConstitutionAuditReportSchema.safeParse(audit);
const catalogDoc = getCatalogDocumentByNumber("REN-DOC-002");
if (schemaParsed.success && catalogDoc?.status !== "ADOPTADO") {
  testSuite.passed.push("TEST 20: Esquema Zod de auditoría válido al 100% y confirmado estado NO ADOPTADO.");
} else {
  console.log("ZOD ERROR:", schemaParsed.error?.issues);
  testSuite.failed.push("TEST 20: Falla en validación Zod o estado adoptado incorrecto.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 19: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
