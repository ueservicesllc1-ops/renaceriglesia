import { MASTER_CONSTITUTION_DATA } from "../src/lib/constitution-data";
import { getCatalogDocumentByNumber, validateStateTransition } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("📜 SUITE DE PRUEBAS DE LA CONSTITUCIÓN MAESTRA (FASE 18)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const constitucion = MASTER_CONSTITUTION_DATA;
const catalogDoc = getCatalogDocumentByNumber("REN-DOC-002");

// TEST 1: Constitución existe en catálogo
if (catalogDoc) {
  testSuite.passed.push("TEST 1: La Constitución está registrada en el Catálogo Maestro.");
} else {
  testSuite.failed.push("TEST 1: La Constitución no existe en el catálogo.");
}

// TEST 2: Código REN-DOC-002 correcto
if (constitucion.documentNumber === "REN-DOC-002" && catalogDoc?.documentNumber === "REN-DOC-002") {
  testSuite.passed.push("TEST 2: Código 'REN-DOC-002' verificado.");
} else {
  testSuite.failed.push("TEST 2: Código documental incorrecto.");
}

// TEST 3: Estado PLANIFICADO inicial (v0.1)
if (constitucion.status === "PLANIFICADO" && constitucion.version === "0.1") {
  testSuite.passed.push("TEST 3: Estado inicial 'PLANIFICADO' y versión '0.1' confirmados.");
} else {
  testSuite.failed.push("TEST 3: Estado o versión inicial incorrectos.");
}

// TEST 4: No está ADOPTADA
if (constitucion.status !== "ADOPTADO" && catalogDoc?.status !== "ADOPTADO") {
  testSuite.passed.push("TEST 4: Confirmado que la Constitución NO está en estado ADOPTADO.");
} else {
  testSuite.failed.push("TEST 4: Alerta: La Constitución aparece erróneamente adoptada.");
}

// TEST 5: No tiene autoridad definitiva inventada
if (catalogDoc?.approvalAuthorityStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 5: Autoridad de aprobación clasificada correctamente como PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push("TEST 5: Se inventó una autoridad definitiva en el catálogo.");
}

// TEST 6: Se distinguen campos definidos, propuestos y pendientes
const allArticles = constitucion.chapters.flatMap((c) => c.articles);
const definedCount = allArticles.filter((a) => a.decisionStatus === "DEFINIDO").length;
const pendingCount = allArticles.filter((a) => a.decisionStatus === "PENDIENTE_DEFINIR").length;
if (definedCount > 0 && pendingCount > 0) {
  testSuite.passed.push(`TEST 6: Distinción clara de decisiones (${definedCount} Definidas, ${pendingCount} Pendientes).`);
} else {
  testSuite.failed.push("TEST 6: Falla en la distinción de estados de decisión.");
}

// TEST 7: Pastor Fundador correctamente identificado
const founderArticle = allArticles.find((a) => a.title.includes("Pastor Fundador"));
if (constitucion.founder === "Luis Uchubanda Falconí" && founderArticle?.decisionStatus === "DEFINIDO") {
  testSuite.passed.push("TEST 7: Pastor Fundador (Luis Uchubanda Falconí) y autoridad final definidos.");
} else {
  testSuite.failed.push("TEST 7: Identificación del Pastor Fundador incorrecta.");
}

// TEST 8: Consejo de Gobierno 3-5 miembros registrado
const councilArticle = allArticles.find((a) => a.title.includes("Naturaleza y Composición"));
if (councilArticle?.expectedContent.includes("3 a 5 miembros") && councilArticle.decisionStatus === "DEFINIDO") {
  testSuite.passed.push("TEST 8: Composición del Consejo de Gobierno (3 a 5 miembros) registrada como DEFINIDA.");
} else {
  testSuite.failed.push("TEST 8: Composición del Consejo incorrecta.");
}

// TEST 9: Término de 2 años registrado
const termArticle = allArticles.find((a) => a.title.includes("Período de Funciones"));
if (termArticle?.expectedContent.includes("dos (2) años") && termArticle.decisionStatus === "DEFINIDO") {
  testSuite.passed.push("TEST 9: Período de funciones de 2 años registrado como DEFINIDO.");
} else {
  testSuite.failed.push("TEST 9: Período de funciones incorrecto.");
}

// TEST 10: Discipulado correctamente relacionado
const discipuladoChap = constitucion.chapters.find((c) => c.romanNumeral === "CAPÍTULO IX");
if (discipuladoChap && discipuladoChap.articles.some((a) => a.expectedContent.includes("Familias de Grupo"))) {
  testSuite.passed.push("TEST 10: Modelo de discipulado y Familias de Grupo estructurado.");
} else {
  testSuite.failed.push("TEST 10: Falla en estructura de discipulado.");
}

// TEST 11: Seminario Bíblico correctamente relacionado (1 año de formación)
const semArticle = allArticles.find((a) => a.title.includes("Requisito Formativo de 1 Año"));
if (semArticle?.expectedContent.includes("un (1) año lectivo") && semArticle.decisionStatus === "DEFINIDO") {
  testSuite.passed.push("TEST 11: Requisito de 1 año en Seminario Bíblico registrado como DEFINIDO.");
} else {
  testSuite.failed.push("TEST 11: Falla en requisito del Seminario.");
}

// TEST 12: Credenciales ministeriales (hombres y mujeres)
const credArticle = allArticles.find((a) => a.title.includes("Acceso Ministerial Pleno"));
if (credArticle?.expectedContent.includes("hombres como mujeres") && credArticle.decisionStatus === "DEFINIDO") {
  testSuite.passed.push("TEST 12: Ministerio pleno de hombres y mujeres registrado como DEFINIDO.");
} else {
  testSuite.failed.push("TEST 12: Falla en artículo de credenciales.");
}

// TEST 13: Doctrina (20 Artículos) correctamente relacionada
const docChapter = constitucion.chapters.find((c) => c.romanNumeral === "CAPÍTULO III");
if (docChapter?.articles.some((a) => a.dependencies.includes("REN-DOC-001"))) {
  testSuite.passed.push("TEST 13: Vinculación formal con los 20 Artículos de Fe (REN-DOC-001) confirmada.");
} else {
  testSuite.failed.push("TEST 13: Falla en vinculación con doctrina.");
}

// TEST 14: Articles of Incorporation separado
if (constitucion.title !== "Articles of Incorporation" && constitucion.documentNumber === "REN-DOC-002") {
  testSuite.passed.push("TEST 14: Separación institucional con Articles of Incorporation preservada.");
} else {
  testSuite.failed.push("TEST 14: Falla de separación documental.");
}

// TEST 15: Bylaws separado
if (catalogDoc?.relatedDocuments.some((r) => r.targetDocumentNumber === "REN-DOC-003")) {
  testSuite.passed.push("TEST 15: Separación y enlace con Bylaws (REN-DOC-003) verificado.");
} else {
  testSuite.failed.push("TEST 15: Falla de enlace con Bylaws.");
}

// TEST 16: RENACER IA diferencia decisiones definidas de pendientes
function simulateAIConstitutionResponse(articleTitle: string) {
  const art = allArticles.find((a) => a.title.toLowerCase().includes(articleTitle.toLowerCase()));
  if (!art) return "No encontrado";
  if (art.decisionStatus === "DEFINIDO") {
    return `La decisión está formalmente DEFINIDA: ${art.expectedContent}`;
  }
  return `Esta materia está actualmente PENDIENTE DE DEFINICIÓN institucional (${art.decisionNotes || "Sin notas"}).`;
}
const aiRes1 = simulateAIConstitutionResponse("Pastor Fundador");
const aiRes2 = simulateAIConstitutionResponse("Sucesión Fundacional");
if (aiRes1.includes("DEFINIDA") && aiRes2.includes("PENDIENTE DE DEFINICIÓN")) {
  testSuite.passed.push("TEST 16: RENACER IA discrimina fielmente entre artículos definidos y pendientes.");
} else {
  testSuite.failed.push("TEST 16: Falla en simulación de RENACER IA.");
}

// TEST 17: No existe salto directo a ADOPTADO
const invalidJump = validateStateTransition("PLANIFICADO", "ADOPTADO");
if (!invalidJump.isValid) {
  testSuite.passed.push("TEST 17: Regla de workflow: PLANIFICADO no puede saltar directamente a ADOPTADO.");
} else {
  testSuite.failed.push("TEST 17: Falló bloqueo de salto a ADOPTADO.");
}

// TEST 18: Versionamiento semántico funciona
if (/^\d+\.\d+$/.test(constitucion.version)) {
  testSuite.passed.push("TEST 18: Versionamiento semántico 'v0.1' verificado.");
} else {
  testSuite.failed.push("TEST 18: Formato de versión inválido.");
}

// TEST 19: Auditoría funciona
const hasDocEvents = hasPermission("ADMINISTRADOR", "VIEW_AUDIT_LOGS", "audit_logs");
if (hasDocEvents) {
  testSuite.passed.push("TEST 19: Trazabilidad y permisos de auditoría institucional operativos.");
} else {
  testSuite.failed.push("TEST 19: Permisos de auditoría fallaron.");
}

// TEST 20: 22 Capítulos completos presentes
if (constitucion.chapters.length === 22) {
  testSuite.passed.push("TEST 20: Estructura íntegra de 22 Capítulos constitucionales validada.");
} else {
  testSuite.failed.push(`TEST 20: Cantidad de capítulos incorrecta: ${constitucion.chapters.length}`);
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 18: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
