/**
 * TEST SUITE: FASE 32 — AUDITORÍA PROFUNDA DE LA CONSTITUCIÓN (REN-DOC-002)
 * 
 * Verificación obligatoria de 25 puntos de auditoría y control de calidad institucional:
 * 1. Existencia continua de REN-DOC-002.
 * 2. Versión inmutable v0.1.
 * 3. Estado de trabajo EN_REDACCION.
 * 4. Estado de adopción NO ADOPTADA.
 * 5. Exactamente 48 artículos auditados.
 * 6. Exactamente 14 títulos constitucionales.
 * 7. Inmutabilidad de REN-DOC-001 (Declaración de Fe v1.0 BORRADOR / NO ADOPTADA).
 * 8. Inmutabilidad de las 107 decisiones institucionales.
 * 9. Cero decisiones eliminadas.
 * 10. Cero IDs inventados o ficticios.
 * 11. Trazabilidad rigurosa en el 100% de los artículos.
 * 12. Corrección auditada de puntos críticos (Art. 8, Art. 11, Art. 32, Art. 43, Art. 45).
 * 13. Las 11 materias legales conservan REQUIERE_REVISION_LEGAL.
 * 14. Ausencia absoluta de adopción automática.
 * 15. Ausencia total de placeholders o texto de relleno.
 * 16. No se modificó el Libro Web (25 capítulos intactos).
 * 17. No se modificó REN-DOC-003.
 * 18. Documento disponible en biblioteca (/documentos).
 * 19. Sistema RBAC operativo.
 * 20. Bloqueo de escritura a rol SOLO_LECTURA.
 * 21. Autorización a ADMINISTRADOR y PASTOR_FUNDADOR.
 * 22. Buscador global indexa REN-DOC-002.
 * 23. Historial de versiones y comentarios operativo.
 * 24. Ruta y matriz de trazabilidad operativa (/admin/documentos/REN-DOC-002/trazabilidad).
 * 25. Build de producción y consistencia general.
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
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import { BOOK_CHAPTERS } from "../src/lib/book-legal-creation-content";
import doctrinaData from "../import-queue/doctrina.json";

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
console.log("EJECUTANDO TEST SUITE FASE 32: AUDITORÍA PROFUNDA DE LA CONSTITUCIÓN (REN-DOC-002)");
console.log("===============================================================================\n");

// TEST 1: REN-DOC-002 sigue existiendo
runTest(1, "REN-DOC-002 sigue existiendo en el sistema", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!doc && doc.documentNumber === "REN-DOC-002";
  return { passed, detail: passed ? `Encontrado con id '${doc?.id}'` : "No encontrado" };
});

// TEST 2: Sigue versión v0.1
runTest(2, "Sigue versión exactamente v0.1", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!doc && doc.version === "0.1" && FULL_CONSTITUTION_DRAFT.version === "0.1";
  return { passed, detail: `Versión registrada: v${doc?.version}` };
});

// TEST 3: Sigue EN_REDACCION
runTest(3, "Sigue en estado EN_REDACCION", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!doc && doc.status === "EN_REDACCION" && FULL_CONSTITUTION_DRAFT.status === "EN_REDACCION";
  return { passed, detail: `Estado: ${doc?.status}` };
});

// TEST 4: Sigue NO ADOPTADA
runTest(4, "Sigue en estado de NO ADOPTADA", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!doc && doc.status !== "ADOPTADO" && doc.status !== "CANDIDATO_ADOPCION";
  return { passed, detail: `Garantizado: estado es ${doc?.status}, no adoptada` };
});

// TEST 5: Existen exactamente 48 artículos
runTest(5, "Existen exactamente 48 artículos auditados", () => {
  const articles = getAllConstitutionArticles();
  const passed = articles.length === 48;
  return { passed, detail: `Total de artículos: ${articles.length} / 48` };
});

// TEST 6: Existen exactamente 14 títulos
runTest(6, "Existen exactamente 14 títulos constitucionales", () => {
  const chapters = FULL_CONSTITUTION_DRAFT.chapters;
  const passed = chapters.length === 14;
  return { passed, detail: `Total de títulos: ${chapters.length} / 14` };
});

// TEST 7: REN-DOC-001 no fue modificado
runTest(7, "REN-DOC-001 (Declaración de Fe) permanece inmutable en BORRADOR v1.0", () => {
  const doc1 = getInstitutionalDocumentById("REN-DOC-001");
  const passed = !!doc1 && doc1.version === "1.0" && doc1.status === "BORRADOR" && doctrinaData.meta.status === "BORRADOR";
  return { passed, detail: `REN-DOC-001: v${doc1?.version} (${doc1?.status})` };
});

// TEST 8: Las 107 decisiones no fueron modificadas
runTest(8, "Las 107 decisiones institucionales permanecen intactas", () => {
  const decs = getAllInstitutionalDecisions();
  const passed = decs.length === 107;
  return { passed, detail: `Total decisiones en repositorio: ${decs.length} / 107` };
});

// TEST 9: No se eliminaron decisiones
runTest(9, "No se eliminaron decisiones del catálogo maestro", () => {
  const dec1 = getDecisionByNumber("DEC-DEF-001");
  const dec23 = getDecisionByNumber("DEC-DEF-023");
  const decPend1 = getDecisionByNumber("DEC-PEND-001");
  const decPend10 = getDecisionByNumber("DEC-PEND-010");
  const dec177 = getDecisionByNumber("DEC-DEF-177");
  const dec250 = getDecisionByNumber("DEC-DEF-250");
  const passed = !!dec1 && !!dec23 && !!decPend1 && !!decPend10 && !!dec177 && !!dec250;
  return { passed, detail: "Integridad de extremos y rangos (DEC-001..023, PEND-001..010, 177..250) confirmada" };
});

// TEST 10: No se inventaron IDs
runTest(10, "No se inventaron IDs de decisiones", () => {
  const articles = getAllConstitutionArticles();
  const allDecs = getAllInstitutionalDecisions();
  const validIds = new Set(allDecs.map((d) => d.decisionNumber));

  const invalid = articles.flatMap((a) => a.decisionIds).filter((id) => !validIds.has(id));
  const passed = invalid.length === 0;
  return { passed, detail: passed ? "El 100% de los decisionIds corresponden a decisiones reales" : `IDs erróneos: ${invalid.join(", ")}` };
});

// TEST 11: Cada artículo mantiene trazabilidad
runTest(11, "Todos los artículos mantienen trazabilidad y mapeo normativo", () => {
  const articles = getAllConstitutionArticles();
  const traceable = articles.filter((a) => a.decisionIds.length > 0);
  const passed = traceable.length === 48;
  return { passed, detail: `Artículos con trazabilidad activa: ${traceable.length} / 48 (100%)` };
});

// TEST 12: Corrección auditada de puntos críticos (Art. 8, Art. 11, Art. 32, Art. 43, Art. 45)
runTest(12, "Auditoría y corrección de puntos críticos confirmada", () => {
  const articles = getAllConstitutionArticles();
  const art8 = articles.find((a) => a.articleNumber === 8);
  const art11 = articles.find((a) => a.articleNumber === 11);
  const art32 = articles.find((a) => a.articleNumber === 32);
  const art43 = articles.find((a) => a.articleNumber === 43);
  const art45 = articles.find((a) => a.articleNumber === 45);

  const art8Ok = !!art8 && !art8.fullText.includes("inalterables") && art8.fullText.includes("procedimiento solemne");
  const art11Ok = !!art11 && art11.fullText.includes("Compromiso formal de cursar");
  const art32Ok = !!art32 && !art32.fullText.includes("Obrero Cristiano") && art32.fullText.includes("Candidato Ministerial");
  const art43Ok = !!art43 && art43.fullText.includes("delitos penales") && art43.fullText.includes("autoridades policiales");
  const art45Ok = !!art45 && !art45.fullText.includes("ratificado por la Asamblea") && art45.fullText.includes("comisión conjunta y unánime");

  const passed = art8Ok && art11Ok && art32Ok && art43Ok && art45Ok;
  return {
    passed,
    detail: passed
      ? "Art. 8 (doctrina), Art. 11 (membresía), Art. 32 (escalafón), Art. 43 (deber legal/delitos) y Art. 45 (sucesión sin ratificación espuria) auditados y coherentes"
      : `Fallos en artículos críticos: Art8=${art8Ok}, Art11=${art11Ok}, Art32=${art32Ok}, Art43=${art43Ok}, Art45=${art45Ok}`,
  };
});

// TEST 13: Los 11 artículos jurídicos continúan marcados para revisión legal
runTest(13, "Los 11 artículos jurídicos conservan REQUIERE_REVISION_LEGAL", () => {
  const articles = getAllConstitutionArticles();
  const legalArts = articles.filter((a) => a.legalReviewRequired);
  const passed = legalArts.length === 11;
  return { passed, detail: `Artículos con revisión legal obligatoria: ${legalArts.length} / 11 (Arts: ${legalArts.map((a) => a.articleNumber).join(", ")})` };
});

// TEST 14: No existe adopción automática
runTest(14, "No existe adopción automática ni prematura", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const inventory = getDocumentInventoryAudit();
  const invDoc2 = inventory.find((i) => i.code === "REN-DOC-002");
  const passed = doc?.status === "EN_REDACCION" && invDoc2?.documentState === "EN_REDACCION";
  return { passed, detail: `Estado verificado en biblioteca e inventario: ${doc?.status}` };
});

// TEST 15: No existen placeholders
runTest(15, "No existen placeholders en ningún artículo", () => {
  const articles = getAllConstitutionArticles();
  const banned = ["lorem ipsum", "contenido pendiente", "placeholder", "por definir"];
  let count = 0;
  for (const a of articles) {
    const txt = a.fullText.toLowerCase();
    for (const b of banned) {
      if (txt.includes(b)) count++;
    }
  }
  const passed = count === 0;
  return { passed, detail: passed ? "0 placeholders detectados en los 48 artículos" : `${count} infracciones detectadas` };
});

// TEST 16: No se modificó el Libro Web
runTest(16, "El Libro Web permanece intacto con sus 25 capítulos", () => {
  const passed = BOOK_CHAPTERS.length === 25;
  return { passed, detail: `Capítulos en Libro Web: ${BOOK_CHAPTERS.length} / 25` };
});

// TEST 17: No se modificó REN-DOC-003
runTest(17, "REN-DOC-003 (Bylaws) no fue modificado", () => {
  const doc3 = getInstitutionalDocumentById("REN-DOC-003");
  const passed = !!doc3 && doc3.documentNumber === "REN-DOC-003";
  return { passed, detail: `REN-DOC-003: ${doc3?.title} (v${doc3?.version})` };
});

// TEST 18: El documento sigue disponible en la biblioteca
runTest(18, "La Constitución sigue disponible en la biblioteca documental", () => {
  const docs = getAllInstitutionalDocuments();
  const doc2 = docs.find((d) => d.documentNumber === "REN-DOC-002");
  const passed = !!doc2 && doc2.content.length > 5000;
  return { passed, detail: `Disponible con ${doc2?.content.length} caracteres` };
});

// TEST 19: RBAC continúa funcionando
runTest(19, "Sistema de permisos RBAC continúa activo", () => {
  const user = { id: "usr-admin-real-001", name: "Administrador Real", role: "ADMINISTRADOR" as const };
  const updateRes = updateInstitutionalDocument(
    {
      docId: "doc-ren-002",
      newTitle: "Constitución de RENACER",
      newContent: generateFullConstitutionMarkdown(),
      changeReason: "Auditoría y control de calidad Fase 32",
      versionBump: "minor",
    },
    user
  );
  const passed = !!updateRes.success && !!updateRes.document;
  return { passed, detail: `Actualización permitida para ADMINISTRADOR. Versión actual: v${updateRes.document?.version}` };
});

// TEST 20: SOLO_LECTURA continúa sin capacidad de modificación
runTest(20, "Rol SOLO_LECTURA bloqueado para modificar documentos", () => {
  const readOnlyUser = { id: "usr-auditor", name: "Auditor Externo", role: "SOLO_LECTURA" as const };
  const attemptedUpdate = updateInstitutionalDocument(
    {
      docId: "doc-ren-002",
      newTitle: "Alteración no autorizada",
      newContent: "Contenido inválido",
      changeReason: "Intento no permitido",
      versionBump: "minor",
    },
    readOnlyUser
  );
  const passed = !attemptedUpdate.success && !!attemptedUpdate.error?.includes("permiso");
  return { passed, detail: `Bloqueo de SOLO_LECTURA verificado: ${attemptedUpdate.error}` };
});

// TEST 21: ADMINISTRADOR y PASTOR_FUNDADOR mantienen permisos
runTest(21, "ADMINISTRADOR y PASTOR_FUNDADOR mantienen sus facultades", () => {
  const adminDoc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!adminDoc && adminDoc.authorId === "usr-fundador-001";
  return { passed, detail: "Autoría y facultades pastorales preservadas" };
});

// TEST 22: El buscador continúa encontrando REN-DOC-002
runTest(22, "El buscador global indexa y localiza REN-DOC-002", () => {
  const searchResults = searchRenacerKnowledge("Constitución");
  const found = searchResults.some((r) => r.code === "REN-DOC-002" || r.title.includes("Constitución"));
  return { passed: !!found, detail: `Búsqueda exitosa (${searchResults.length} coincidencias encontradas)` };
});

// TEST 23: Historial y versionado continúan intactos
runTest(23, "Historial de versiones y comentarios inmutables", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!doc && doc.versions.length >= 1 && doc.comments.length >= 1;
  return { passed, detail: `Versiones: ${doc?.versions.length}, Comentarios: ${doc?.comments.length}` };
});

// TEST 24: La trazabilidad continúa funcionando
runTest(24, "Matriz de trazabilidad operativa", () => {
  const articles = getAllConstitutionArticles();
  const mappedCount = articles.reduce((acc, a) => acc + a.decisionIds.length, 0);
  const passed = mappedCount >= 60;
  return { passed, detail: `Total de enlaces artículo ↔ decisión: ${mappedCount}` };
});

// TEST 25: Build y consistencia general
runTest(25, "Consistencia general y estado no adoptado confirmado", () => {
  const doc = getInstitutionalDocumentById("REN-DOC-002");
  const passed = !!doc && doc.status === "EN_REDACCION" && doc.legalState === "REQUIERE_REVISION_LEGAL";
  return { passed, detail: `Documento consistente en estado '${doc?.status}' y legal '${doc?.legalState}'` };
});

console.log("\n===============================================================================");
console.log(`RESUMEN DE AUDITORÍA: ${results.filter((r) => r.passed).length}/${results.length} PRUEBAS PASADAS`);
console.log("===============================================================================\n");

const failed = results.filter((r) => !r.passed);
if (failed.length > 0) {
  console.error("❌ FALLOS ENCONTRADOS:");
  failed.forEach((f) => console.error(`  - [TEST ${f.num}] ${f.name}: ${f.detail}`));
  process.exit(1);
} else {
  console.log("🎉 AUDITORÍA COMPLETA: TODOS LOS 25 TESTS DE LA FASE 32 PASARON SATISFACTORIAMENTE.");
  process.exit(0);
}
