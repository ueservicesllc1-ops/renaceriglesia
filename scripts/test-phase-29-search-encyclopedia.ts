import {
  searchRenacerKnowledge,
  extractQuestionKeywords,
  getEncyclopediaTopicBySlug,
  ENCYCLOPEDIA_TOPICS,
} from "../src/lib/knowledge-search-service";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🔍 SUITE DE PRUEBAS DEL BUSCADOR GLOBAL Y ENCICLOPEDIA (FASE 29)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// TEST 1: Búsqueda por título
const titleSearch = searchRenacerKnowledge("Sucesión Fundacional");
if (titleSearch.length > 0 && titleSearch.some((r) => r.title.toLowerCase().includes("sucesion") || r.title.toLowerCase().includes("sucesión") || r.title.toLowerCase().includes("fundador"))) {
  testSuite.passed.push("TEST 1: Búsqueda por título institucional exitosa.");
} else {
  testSuite.failed.push(`TEST 1: Fallo en búsqueda por título. Resultados: ${titleSearch.length}`);
}

// TEST 2: Búsqueda por contenido interno
const contentSearch = searchRenacerKnowledge("inmersión");
if (contentSearch.length > 0 && contentSearch.some((r) => r.content.toLowerCase().includes("inmersion") || r.content.toLowerCase().includes("inmersión"))) {
  testSuite.passed.push("TEST 2: Búsqueda por contenido interno exitosa (ej. 'inmersión').");
} else {
  testSuite.failed.push("TEST 2: Fallo en búsqueda por contenido interno.");
}

// TEST 3: Búsqueda por código de documento
const docSearch = searchRenacerKnowledge("REN-DOC-001");
if (docSearch.length > 0 && docSearch[0].code === "REN-DOC-001") {
  testSuite.passed.push("TEST 3: Búsqueda por código exacto de documento ('REN-DOC-001') devuelve máxima prioridad.");
} else {
  testSuite.failed.push("TEST 3: Fallo en búsqueda por código de documento.");
}

// TEST 4: Búsqueda por número de decisión
const decSearch = searchRenacerKnowledge("DEC-DEF-001");
if (decSearch.length > 0 && decSearch[0].code === "DEC-DEF-001") {
  testSuite.passed.push("TEST 4: Búsqueda por número de decisión ('DEC-DEF-001') exitosa.");
} else {
  testSuite.failed.push("TEST 4: Fallo en búsqueda por número de decisión.");
}

// TEST 5: Filtro por categoría y estado
const filteredSearch = searchRenacerKnowledge("RENACER", {
  category: "DOCTRINA",
  statusFilter: "BORRADOR_NO_ADOPTADA",
});
if (filteredSearch.length > 0 && filteredSearch.every((r) => r.status === "BORRADOR_NO_ADOPTADA")) {
  testSuite.passed.push("TEST 5: Filtrado estricto por categoría y estado institucional exitoso.");
} else {
  testSuite.failed.push("TEST 5: Fallo en filtrado.");
}

// TEST 6: Búsqueda por pregunta estructurada
const questionSearch = searchRenacerKnowledge("¿Cuál es la posición de RENACER sobre el bautismo?");
if (questionSearch.length > 0 && questionSearch.some((r) => r.title.toLowerCase().includes("bautismo") || r.content.toLowerCase().includes("bautismo"))) {
  testSuite.passed.push("TEST 6: Búsqueda por pregunta ('¿Cuál es la posición sobre el bautismo?') extrae palabras clave correctamente.");
} else {
  testSuite.failed.push("TEST 6: Fallo en búsqueda por pregunta.");
}

// TEST 7: Temas de la Enciclopedia con síntesis exclusivamente institucional
const topicBautismo = getEncyclopediaTopicBySlug("bautismo");
const topicSucesion = getEncyclopediaTopicBySlug("sucesion");
if (topicBautismo && topicSucesion && topicBautismo.decisions.length > 0 && topicBautismo.documents.length > 0) {
  testSuite.passed.push("TEST 7: Temas consolidados de la Enciclopedia con fuentes y relaciones directas validados.");
} else {
  testSuite.failed.push("TEST 7: Fallo en temas de enciclopedia.");
}

// TEST 8: Discriminación clara de estados (sin mezcla entre Decisión Definida y Documento Adoptado)
const dec001Result = searchRenacerKnowledge("DEC-DEF-001")[0];
if (dec001Result && dec001Result.status === "DECISION_DEFINIDA" && !dec001Result.statusLabel.includes("ADOPTADO OFICIAL")) {
  testSuite.passed.push("TEST 8: Separación semántica: 'DECISIÓN DEFINIDA' no se confunde con 'DOCUMENTO ADOPTADO'.");
} else {
  testSuite.failed.push("TEST 8: Confusión de estado en resultado de búsqueda.");
}

// TEST 9: Inmutabilidad de la Declaración de Fe (REN-DOC-001)
const catDoc1 = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc1?.status === "BORRADOR" && catDoc1.version === "1.0" && doctrinaData.meta.status === "BORRADOR") {
  testSuite.passed.push("TEST 9: Declaración de Fe (REN-DOC-001) permanece inmutable en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 9: Doctrina alterada indebidamente.");
}

// TEST 10: Inmutabilidad de la Constitución (REN-DOC-002) y 107 Decisiones
const allDecs = getAllInstitutionalDecisions();
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status === "PLANIFICADO" && catDoc2.version === "0.1" && allDecs.length === 107) {
  testSuite.passed.push("TEST 10: Constitución (REN-DOC-002) en PLANIFICADO v0.1 y exactamente 107 decisiones preservadas.");
} else {
  testSuite.failed.push("TEST 10: Falla en preservación constitucional o conteo de decisiones.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 29 (BUSCADOR & ENCICLOPEDIA): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
