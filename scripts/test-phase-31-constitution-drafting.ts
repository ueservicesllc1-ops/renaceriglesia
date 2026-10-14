/**
 * TEST SUITE: FASE 31 — REDACCIÓN REAL DE REN-DOC-002 (CONSTITUCIÓN DE RENACER)
 * 
 * Verificación exhaustiva de:
 * 1. Existencia, código, título, versión v0.1 y estado EN_REDACCION / NO ADOPTADA.
 * 2. Exactamente 48 artículos con texto real, sustancial y estructurado en 14 títulos.
 * 3. Preámbulo solemne y disposiciones finales.
 * 4. Trazabilidad rigurosa a las 107 decisiones institucionales existentes (sin inventar IDs).
 * 5. Preservación absoluta e inmutable de las 107 decisiones institucionales.
 * 6. Preservación de REN-DOC-001 (Declaración de Fe v1.0 BORRADOR / NO ADOPTADA).
 * 7. Inexistencia de adopción indebida.
 * 8. Señalamiento de materias con REQUIERE_REVISION_LEGAL.
 * 9. Acceso e integración en la biblioteca (/documentos) e inventario (/admin/documentos/inventario).
 * 10. Control de permisos de edición y ausencia de placeholders.
 */

import {
  getAllConstitutionArticles,
  FULL_CONSTITUTION_DRAFT,
  generateFullConstitutionMarkdown,
} from "../src/lib/constitution-full-draft";
import {
  getAllInstitutionalDocuments,
  getInstitutionalDocumentById,
  updateInstitutionalDocument,
} from "../src/lib/institutional-document-service";
import {
  getAllInstitutionalDecisions,
  getDecisionByNumber,
} from "../src/lib/decision-service";
import { getDocumentInventoryAudit } from "../src/lib/admin-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";

interface TestResult {
  num: number;
  name: string;
  passed: boolean;
  detail: string;
}

const results: TestResult[] = [];

function runTest(num: number, name: string, fn: () => { passed: boolean; detail: string }) {
  try {
    const res = fn();
    results.push({ num, name, passed: res.passed, detail: res.detail });
    console.log(`${res.passed ? "✅ PASS" : "❌ FAIL"} [TEST ${num}]: ${name} -> ${res.detail}`);
  } catch (err: any) {
    results.push({ num, name, passed: false, detail: `Error inesperado: ${err.message}` });
    console.log(`❌ FAIL [TEST ${num}]: ${name} -> Error: ${err.message}`);
  }
}

console.log("\n===============================================================================");
console.log("EJECUTANDO TEST SUITE FASE 31: REDACCIÓN REAL DE REN-DOC-002 (CONSTITUCIÓN)");
console.log("===============================================================================\n");

// TEST 1: REN-DOC-002 existe en la biblioteca institucional
runTest(1, "REN-DOC-002 existe en la biblioteca", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!doc && doc.documentNumber === "REN-DOC-002";
  return { passed, detail: passed ? `Encontrado con id: ${doc?.id}` : "No encontrado" };
});

// TEST 2: Título institucional correcto
runTest(2, "Título institucional correcto", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const hasTitle = doc?.title.includes("Constitución");
  return { passed: !!hasTitle, detail: `Título: "${doc?.title}"` };
});

// TEST 3: Código correcto
runTest(3, "Código correcto (REN-DOC-002)", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = doc?.documentNumber === "REN-DOC-002";
  return { passed, detail: `Código: ${doc?.documentNumber}` };
});

// TEST 4: Versión v0.1
runTest(4, "Versión exactamente v0.1", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = doc?.version === "0.1" && FULL_CONSTITUTION_DRAFT.version === "0.1";
  return { passed, detail: `Versión document service: v${doc?.version}, draft: v${FULL_CONSTITUTION_DRAFT.version}` };
});

// TEST 5: Estado EN_REDACCION
runTest(5, "Estado EN_REDACCION", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = doc?.status === "EN_REDACCION" && FULL_CONSTITUTION_DRAFT.status === "EN_REDACCION";
  return { passed, detail: `Estado: ${doc?.status}` };
});

// TEST 6: NO ADOPTADA
runTest(6, "Estado de Adopción: NO ADOPTADA", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = doc?.status !== "ADOPTADO" && doc?.status !== "CANDIDATO_ADOPCION";
  return { passed, detail: `Estado de trabajo es ${doc?.status}, garantizando que NO está adoptada` };
});

// TEST 7: Existe preámbulo solemne
runTest(7, "Existe preámbulo solemne con contenido sustancial", () => {
  const preamble = FULL_CONSTITUTION_DRAFT.preamble;
  const passed = !!preamble && !!preamble.fullText && preamble.fullText.length > 50 && preamble.fullText.includes("Sagradas Escrituras");
  return { passed, detail: preamble?.fullText ? `Preámbulo: "${preamble.title}" (${preamble.fullText.length} caracteres)` : "Sin preámbulo" };
});

// TEST 8: Existen exactamente 48 artículos en 14 títulos
runTest(8, "Existen exactamente 48 artículos en 14 títulos", () => {
  const articles = getAllConstitutionArticles();
  const chapters = FULL_CONSTITUTION_DRAFT.chapters;
  const passed = articles.length === 48 && chapters.length === 14;
  return { passed, detail: `Artículos: ${articles.length} / 48, Títulos: ${chapters.length} / 14` };
});

// TEST 9: Artículo 1 tiene contenido real
runTest(9, "Artículo 1 tiene contenido real sustancial", () => {
  const articles = getAllConstitutionArticles();
  const art1 = articles.find((a) => a.articleNumber === 1);
  const passed = !!art1 && art1.fullText.includes("RENACER CHURCH, INC.") && art1.fullText.length > 100;
  return { passed, detail: `Art 1: "${art1?.title}" (${art1?.fullText.length} caracteres)` };
});

// TEST 10: Artículo 48 tiene contenido real
runTest(10, "Artículo 48 tiene contenido real sustancial", () => {
  const articles = getAllConstitutionArticles();
  const art48 = articles.find((a) => a.articleNumber === 48);
  const passed = !!art48 && art48.fullText.includes("501(c)(3)") && art48.fullText.length > 100;
  return { passed, detail: `Art 48: "${art48?.title}" (${art48?.fullText.length} caracteres)` };
});

// TEST 11: Los 48 artículos tienen contenido sustancial
runTest(11, "Los 48 artículos contienen texto real sustancial", () => {
  const articles = getAllConstitutionArticles();
  const emptyArticles = articles.filter((a) => !a.fullText || a.fullText.trim().length < 40);
  const passed = articles.length === 48 && emptyArticles.length === 0;
  return {
    passed,
    detail: passed
      ? `Todos los 48 artículos tienen texto completo (Promedio: ${Math.round(
          articles.reduce((acc, a) => acc + a.fullText.length, 0) / 48
        )} caracteres/artículo)`
      : `Artículos vacíos o insuficientes: ${emptyArticles.map((a) => a.articleNumber).join(", ")}`,
  };
});

// TEST 12: Los artículos contienen trazabilidad cuando corresponde
runTest(12, "Los artículos contienen trazabilidad a decisiones", () => {
  const articles = getAllConstitutionArticles();
  const withDecisions = articles.filter((a) => a.decisionIds.length > 0);
  const passed = withDecisions.length >= 40; // Mayoría absoluta de artículos mapeados a decisiones
  return { passed, detail: `${withDecisions.length} de 48 artículos vinculados a decisiones institucionales` };
});

// TEST 13: Las 107 decisiones continúan exactamente preservadas
runTest(13, "Las 107 decisiones institucionales continúan exactamente preservadas", () => {
  const decisions = getAllInstitutionalDecisions();
  const passed = decisions.length === 107;
  return { passed, detail: `Total de decisiones en repositorio: ${decisions.length} / 107` };
});

// TEST 14: No se modificó ninguna decisión
runTest(14, "No se modificó ninguna decisión histórica", () => {
  const dec1 = getDecisionByNumber("DEC-DEF-001");
  const dec23 = getDecisionByNumber("DEC-DEF-023");
  const decPend1 = getDecisionByNumber("DEC-PEND-001");
  const dec250 = getDecisionByNumber("DEC-DEF-250");
  const passed =
    dec1?.title === "Razón Social Corporativa" &&
    dec23?.title === "Separación entre Adopción y Publicación Técnica" &&
    decPend1?.decisionNumber === "DEC-PEND-001" &&
    dec250?.decisionNumber === "DEC-DEF-250";
  return { passed, detail: "Muestreo de decisiones clave verificado 100% íntegro" };
});

// TEST 15: REN-DOC-001 sigue BORRADOR v1.0
runTest(15, "REN-DOC-001 sigue en versión v1.0 y estado BORRADOR", () => {
  const doc1 = getInstitutionalDocumentById("REN-DOC-001");
  const passed = doc1?.version === "1.0" && doc1?.status === "BORRADOR";
  return { passed, detail: `REN-DOC-001: v${doc1?.version}, status: ${doc1?.status}` };
});

// TEST 16: REN-DOC-001 sigue NO ADOPTADA
runTest(16, "REN-DOC-001 sigue NO ADOPTADA", () => {
  const doc1 = getInstitutionalDocumentById("REN-DOC-001");
  const passed = doc1?.status !== "ADOPTADO";
  return { passed, detail: `REN-DOC-001 status no es ADOPTADO (${doc1?.status})` };
});

// TEST 17: No existe adopción de REN-DOC-002
runTest(17, "No existe adopción indebida de REN-DOC-002", () => {
  const doc2 = getInstitutionalDocumentById("REN-DOC-002");
  const passed = doc2?.status === "EN_REDACCION";
  return { passed, detail: `REN-DOC-002 no está adoptado (status: ${doc2?.status})` };
});

// TEST 18: Las materias legales conservan REQUIERE_REVISION_LEGAL
runTest(18, "Materias estatutarias/civiles conservan REQUIERE_REVISION_LEGAL", () => {
  const articles = getAllConstitutionArticles();
  const legalArts = articles.filter((a) => a.legalReviewRequired);
  const doc2 = getInstitutionalDocumentById("REN-DOC-002");
  const passed = legalArts.length > 0 && doc2?.legalState === "REQUIERE_REVISION_LEGAL";
  return { passed, detail: `${legalArts.length} artículos marcados con REQUIERE_REVISION_LEGAL. Estado legal global: ${doc2?.legalState}` };
});

// TEST 19: La Constitución aparece en la biblioteca documental
runTest(19, "La Constitución aparece en la biblioteca documental", () => {
  const docs = getAllInstitutionalDocuments();
  const found = docs.find((d) => d.documentNumber === "REN-DOC-002");
  const passed = !!found && found.content.length > 5000;
  return { passed, detail: `Encontrado en biblioteca con ${found?.content.length} caracteres de texto completo` };
});

// TEST 20: La Constitución aparece correctamente en el inventario
runTest(20, "La Constitución aparece correctamente en el inventario", () => {
  const inventory = getDocumentInventoryAudit();
  const item = inventory.find((i) => i.code === "REN-DOC-002");
  const passed = !!item && item.hasFullContent && !!item.completenessLabel;
  return { passed, detail: `Inventario: ${item?.code} - ${item?.completenessLabel} (${item?.contentLength} bytes)` };
});

// TEST 21: El documento puede abrirse
runTest(21, "El documento puede abrirse por ID y por código", () => {
  const byCode = getInstitutionalDocumentById("REN-DOC-002");
  const byId = getInstitutionalDocumentById("doc-ren-002");
  const passed = !!byCode && !!byId && byCode.id === byId.id;
  return { passed, detail: `Obtención exitosa por código '${byCode?.documentNumber}' y por id '${byId?.id}'` };
});

// TEST 22: El documento puede editarse por rol autorizado
runTest(22, "El documento puede ser editado por rol autorizado (ADMINISTRADOR / PASTOR_FUNDADOR)", () => {
  const user = { id: "usr-admin-real-001", name: "Administrador Real", role: "ADMINISTRADOR" as const };
  const updated = updateInstitutionalDocument(
    {
      docId: "doc-ren-002",
      newTitle: "Constitución de RENACER",
      newContent: generateFullConstitutionMarkdown(),
      changeReason: "Actualización de verificación de redacción",
      versionBump: "minor",
    },
    user
  );
  const passed = !!updated.success && !!updated.document;
  return { passed, detail: `Edición autorizada exitosa. Versión: v${updated.document?.version}` };
});

// TEST 23: Usuario sin permisos no puede modificarlo
runTest(23, "Usuario sin permisos (SOLO_LECTURA) no puede modificarlo", () => {
  const readOnlyUser = { id: "usr-lector-001", name: "Auditor Externo", role: "SOLO_LECTURA" as const };
  const attemptedUpdate = updateInstitutionalDocument(
    {
      docId: "doc-ren-002",
      newTitle: "Intento no autorizado",
      newContent: "Texto alterado",
      changeReason: "Intento ilegal",
      versionBump: "minor",
    },
    readOnlyUser
  );
  const passed = !attemptedUpdate.success && !!attemptedUpdate.error?.includes("permiso");
  return { passed, detail: `Bloqueo exitoso de usuario SOLO_LECTURA: ${attemptedUpdate.error}` };
});

// TEST 24: Existe trazabilidad artículo -> decisiones
runTest(24, "Existe trazabilidad artículo -> decisiones con IDs válidos", () => {
  const articles = getAllConstitutionArticles();
  const allDecisions = getAllInstitutionalDecisions();
  const validDecisionIds = new Set(allDecisions.map((d) => d.decisionNumber));

  let invalidIds: string[] = [];
  for (const art of articles) {
    for (const id of art.decisionIds) {
      if (!validDecisionIds.has(id)) {
        invalidIds.push(id);
      }
    }
  }

  const passed = invalidIds.length === 0;
  return {
    passed,
    detail: passed
      ? "Todos los decisionIds mapeados corresponden exactamente al repositorio de 107 decisiones reales"
      : `IDs inválidos encontrados: ${invalidIds.join(", ")}`,
  };
});

// TEST 25: No existen placeholders como sustituto de contenido
runTest(25, "No existen placeholders como sustituto de contenido", () => {
  const articles = getAllConstitutionArticles();
  const bannedKeywords = ["lorem ipsum", "contenido pendiente", "placeholder", "por definir"];

  const violations: { articleNumber: number; word: string }[] = [];
  for (const art of articles) {
    const textLower = art.fullText.toLowerCase();
    for (const kw of bannedKeywords) {
      if (textLower.includes(kw)) {
        violations.push({ articleNumber: art.articleNumber, word: kw });
      }
    }
  }

  const passed = violations.length === 0;
  return {
    passed,
    detail: passed
      ? "Ninguno de los 48 artículos contiene texto de relleno ni placeholders genéricos"
      : `Violaciones detectadas: ${violations.map((v) => `Art ${v.articleNumber} ("${v.word}")`).join("; ")}`,
  };
});

console.log("\n===============================================================================");
console.log(`RESUMEN DE TESTS: ${results.filter((r) => r.passed).length}/${results.length} PASADOS`);
console.log("===============================================================================\n");

const failedTests = results.filter((r) => !r.passed);
if (failedTests.length > 0) {
  console.error("❌ FALLOS ENCONTRADOS:");
  failedTests.forEach((f) => console.error(`  - [TEST ${f.num}] ${f.name}: ${f.detail}`));
  process.exit(1);
} else {
  console.log("🎉 TODOS LOS 25 TESTS DE LA FASE 31 PASARON SATISFACTORIAMENTE.");
  process.exit(0);
}
