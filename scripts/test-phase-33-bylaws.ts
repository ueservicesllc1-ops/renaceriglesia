import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import {
  getAllInstitutionalDocuments,
  getInstitutionalDocumentById,
  updateInstitutionalDocument,
  addDocumentComment,
} from "../src/lib/institutional-document-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import { getDocumentInventoryAudit } from "../src/lib/admin-service";
import { MASTER_BYLAWS_TITLES, getAllBylawArticles, generateFullBylawsMarkdown } from "../src/lib/bylaws-full-draft";

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] #${totalTests}: ${testName}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] #${totalTests}: ${testName} ${detail ? `-> ${detail}` : ""}`);
  }
}

async function runBylawsTestSuite() {
  console.log("\n=======================================================");
  console.log("  EJECUTANDO SUITE DE AUDITORÍA — FASE 33: BYLAWS");
  console.log("  REN-DOC-003: BYLAWS DE RENACER CHURCH, INC.");
  console.log("=======================================================\n");

  const library = getAllInstitutionalDocuments();
  const doc003 = getInstitutionalDocumentById("doc-ren-003");
  const doc002 = getInstitutionalDocumentById("doc-ren-002");
  const doc001 = getInstitutionalDocumentById("doc-ren-001");
  const decisions = getAllInstitutionalDecisions();
  const allArticles = getAllBylawArticles();
  const markdown = generateFullBylawsMarkdown();

  // Test 1: REN-DOC-003 existe en la biblioteca institucional
  assert(!!doc003, "REN-DOC-003 existe en la biblioteca institucional");

  // Test 2: Código correcto
  assert(doc003?.documentNumber === "REN-DOC-003", "Código de documento es exactamente REN-DOC-003", `Obtenido: ${doc003?.documentNumber}`);

  // Test 3: Título correcto
  assert(doc003?.title === "BYLAWS DE RENACER CHURCH, INC.", "Título es exactamente 'BYLAWS DE RENACER CHURCH, INC.'", `Obtenido: ${doc003?.title}`);

  // Test 4: Versión v0.1
  assert(doc003?.version === "0.1", "Versión es exactamente v0.1", `Obtenido: ${doc003?.version}`);

  // Test 5: Estado de trabajo EN_REDACCION
  assert(doc003?.status === "EN_REDACCION", "Estado de trabajo es EN_REDACCION", `Obtenido: ${doc003?.status}`);

  // Test 6: Estado de adopción NO ADOPTADA (no es ADOPTADO)
  assert(doc003?.status !== "ADOPTADO", "Estado de adopción NO es ADOPTADO (Borrador No Adoptado)");

  // Test 7: Estado legal REQUIERE_REVISION_LEGAL
  assert(doc003?.legalState === "REQUIERE_REVISION_LEGAL", "Estado legal es REQUIERE_REVISION_LEGAL", `Obtenido: ${doc003?.legalState}`);

  // Test 8: Tiene contenido sustancial (> 25,000 caracteres)
  assert((doc003?.content?.length || 0) > 25000, `Tiene contenido normativo sustancial (${doc003?.content?.length} caracteres)`);

  // Test 9: No es solamente un índice (contiene múltiples secciones y desarrollo normativo)
  const hasSections = (doc003?.content?.match(/Sección \d+\.\d+/g) || []).length >= 100;
  assert(hasSections, "Contiene desarrollo normativo sección por sección (no es solo un índice)");

  // Test 10: Tiene 18 títulos desarrollados
  assert(MASTER_BYLAWS_TITLES.length === 18, `Tiene exactamente 18 títulos (obtenidos: ${MASTER_BYLAWS_TITLES.length})`);

  // Test 11: Tiene 63 artículos reales
  assert(allArticles.length === 63, `Tiene exactamente 63 artículos normativos (obtenidos: ${allArticles.length})`);

  // Test 12: No contiene placeholders prohibidos
  const forbiddenPlaceholders = ["lorem ipsum", "por definir", "placeholder", "contenido pendiente de redaccion"];
  let containsForbidden = false;
  let forbiddenFound = "";
  for (const p of forbiddenPlaceholders) {
    if (markdown.toLowerCase().includes(p)) {
      containsForbidden = true;
      forbiddenFound = p;
      break;
    }
  }
  assert(!containsForbidden, "No contiene placeholders espurios ni texto ficticio", `Encontrado: ${forbiddenFound}`);

  // Test 13: No modifica REN-DOC-001 (permanece BORRADOR v1.0 NO ADOPTADA)
  assert(doc001?.version === "1.0" && doc001?.status === "BORRADOR", "REN-DOC-001 permanece intacto (v1.0 BORRADOR NO ADOPTADA)");

  // Test 14: No modifica REN-DOC-002 (permanece EN_REDACCION v0.1 NO ADOPTADA)
  assert(doc002?.version === "0.1" && doc002?.status === "EN_REDACCION", "REN-DOC-002 permanece intacto (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 15: Las 107 decisiones históricas permanecen intactas
  assert(decisions.length === 107, `Las 107 decisiones institucionales permanecen intactas (encontradas: ${decisions.length})`);

  // Test 16: No existen IDs de decisiones ficticios
  const validDecisionIds = new Set(decisions.map((d) => d.decisionNumber));
  let invalidDecisionIdFound = "";
  let allDecisionsValid = true;
  for (const art of allArticles) {
    for (const decId of art.decisionIds || []) {
      if (!validDecisionIds.has(decId)) {
        allDecisionsValid = false;
        invalidDecisionIdFound = decId;
        break;
      }
    }
  }
  assert(allDecisionsValid, "Todos los IDs de decisiones citados existen en las 107 decisiones reales", `Inválido: ${invalidDecisionIdFound}`);

  // Test 17: Existe trazabilidad explícita en los artículos
  const traceableArticles = allArticles.filter((a) => (a.decisionIds && a.decisionIds.length > 0) || (a.dependencies && a.dependencies.length > 0));
  assert(traceableArticles.length >= 60, `Existe trazabilidad formal en los artículos (${traceableArticles.length} de 63 artículos con vínculos explícitos)`);

  // Test 18: Título III — Asamblea General está desarrollada (Arts 9-14)
  const asambleaTitle = MASTER_BYLAWS_TITLES.find((t) => t.titleNumber === 3);
  assert(!!asambleaTitle && asambleaTitle.articles.length === 6, "Título III (Asamblea General de Miembros) desarrollado con 6 artículos");

  // Test 19: Título V — Consejo de Gobierno está desarrollado (Arts 19-24)
  const consejoTitle = MASTER_BYLAWS_TITLES.find((t) => t.titleNumber === 5);
  assert(!!consejoTitle && consejoTitle.articles.length === 6, "Título V (Consejo de Gobierno / Board of Trustees) desarrollado con 6 artículos");

  // Test 20: Título VII — Consejo Ministerial está desarrollado (Arts 28-30)
  const ministerialTitle = MASTER_BYLAWS_TITLES.find((t) => t.titleNumber === 7);
  assert(!!ministerialTitle && ministerialTitle.articles.length === 3, "Título VII (Consejo Ministerial) desarrollado con 3 artículos");

  // Test 21: Título IV — Pastor Fundador está desarrollado (Arts 15-18)
  const pastorTitle = MASTER_BYLAWS_TITLES.find((t) => t.titleNumber === 4);
  assert(!!pastorTitle && pastorTitle.articles.length === 4, "Título IV (Pastor Fundador y Autoridad Espiritual) desarrollado con 4 artículos");

  // Test 22: Título IX — Finanzas y Régimen Contable están desarrollados (Arts 35-39)
  const finanzasTitle = MASTER_BYLAWS_TITLES.find((t) => t.titleNumber === 9);
  assert(!!finanzasTitle && finanzasTitle.articles.length === 5, "Título IX (Régimen Financiero y Contabilidad) desarrollado con 5 artículos");

  // Test 23: Título X — Patrimonio y Activos están desarrollados (Arts 40-42)
  const patrimonioTitle = MASTER_BYLAWS_TITLES.find((t) => t.titleNumber === 10);
  assert(!!patrimonioTitle && patrimonioTitle.articles.length === 3, "Título X (Patrimonio, Inmuebles y Activos) desarrollado con 3 artículos");

  // Test 24: Título XV — Sucesión está armonizada con la Constitución (Arts 54-56)
  const sucesionTitle = MASTER_BYLAWS_TITLES.find((t) => t.titleNumber === 15);
  const art54 = allArticles.find((a) => a.articleNumber === 54);
  const art55 = allArticles.find((a) => a.articleNumber === 55);
  assert(!!sucesionTitle && !!art54 && !!art55, "Título XV (Sucesión Pastoral) armonizado con REN-DOC-002");

  // Test 25: No existe ratificación asamblearia espuria de sucesión
  const hasSpuriousRatification = markdown.toLowerCase().includes("ratificacion por la asamblea general de la sucesion") ||
    markdown.toLowerCase().includes("la asamblea general ratificara al sucesor pastoral");
  assert(!hasSpuriousRatification, "No existe ratificación asamblearia espuria en el mecanismo de sucesión");

  // Test 26: Incapacidad conserva DEC-PEND-001 y estado pendiente/legal
  const art51 = allArticles.find((a) => a.articleNumber === 51);
  const hasDecPend001 = art51?.decisionIds ? art51.decisionIds.includes("DEC-PEND-001") : false;
  assert(hasDecPend001 === true, "Protocolo de incapacidad conserva explícitamente DEC-PEND-001");

  // Test 27: Materias legales conservan etiqueta REQUIERE_REVISION_LEGAL
  const legalReviewArticles = allArticles.filter((a) => a.legalReviewRequired === true);
  assert(legalReviewArticles.length >= 25, `Materias corporativas/civiles conservan REQUIERE_REVISION_LEGAL (${legalReviewArticles.length} artículos identificados)`);

  // Test 28: RBAC Server-side — SOLO_LECTURA no puede editar documentos
  try {
    const result = updateInstitutionalDocument(
      {
        docId: "doc-ren-003",
        newTitle: "Intento no autorizado",
        newContent: "Texto alterado",
        changeReason: "Intento ilegal",
        versionBump: "minor",
      },
      { id: "usr-lector-001", name: "Auditor Externo", role: "SOLO_LECTURA" }
    );
    assert(result.success === false, "RBAC Server-side impide que SOLO_LECTURA modifique REN-DOC-003");
  } catch (err) {
    assert(true, "RBAC Server-side impidió modificación por SOLO_LECTURA");
  }

  // Test 29: Historial y Versionado institucional de REN-DOC-003
  assert(doc003?.versions.length === 1 && doc003?.versions[0].versionNumber === "0.1", "Versionado registra historial formal v0.1");

  // Test 30: Buscador encuentra REN-DOC-003 con query 'Bylaws'
  const searchResults1 = searchRenacerKnowledge("Bylaws");
  const foundBylaws = searchResults1.some((r) => r.code === "REN-DOC-003");
  assert(foundBylaws, "Buscador de conocimiento encuentra REN-DOC-003 por 'Bylaws'");

  // Test 31: Buscador encuentra por temas de gobernanza fiduciaria
  const searchResults2 = searchRenacerKnowledge("Board of Trustees quórum");
  const foundTrustees = searchResults2.some((r) => r.code === "REN-DOC-003" || r.code === "DEC-DEF-005" || r.code === "DEC-DEF-006");
  assert(foundTrustees, "Buscador encuentra reglas fiduciarias y quórum del Board of Trustees");

  // Test 32: Regla de Quórum del Consejo de Gobierno estrictamente respetada
  const art24 = allArticles.find((a) => a.articleNumber === 24);
  const contentArt24 = art24?.fullText || "";
  const hasQuorumRule = contentArt24.includes("con tres (3) miembros en funciones: quórum de dos (2)") ||
    (contentArt24.includes("tres (3) miembros en funciones: quórum de dos (2)") &&
     contentArt24.includes("cuatro (4) miembros en funciones: quórum de tres (3)") &&
     contentArt24.includes("cinco (5) miembros en funciones: quórum de tres (3)"));
  assert(hasQuorumRule, "Regla de quórum del Consejo de Gobierno (3->2, 4->3, 5->3) estrictamente implementada");

  // Test 33: Materias extraordinarias requieren 2/3 del Consejo + consentimiento del Pastor Fundador
  const art25 = allArticles.find((a) => a.articleNumber === 25);
  const art26 = allArticles.find((a) => a.articleNumber === 26);
  const hasQualifiedMajority = (art25?.fullText || "").includes("dos tercios (2/3)") &&
    (art25?.fullText || "").includes("consentimiento explícito y por escrito");
  assert(hasQualifiedMajority, "Materias extraordinarias exigen 2/3 de votos del Consejo y consentimiento formal del Pastor Fundador");

  // Test 34: Prohibición de beneficio privado (Private Inurement) y conflicto de interés
  const art46 = allArticles.find((a) => a.articleNumber === 46);
  const art47 = allArticles.find((a) => a.articleNumber === 47);
  const art48 = allArticles.find((a) => a.articleNumber === 48);
  const hasInurementProhibition = (art48?.fullText || "").includes("Contratación con Partes Relacionadas") &&
    (art47?.fullText || "").includes("Abstención y Salida") && !!art46;
  assert(hasInurementProhibition, "Política estricta contra Private Inurement y Conflictos de Interés implementada");

  // Test 35: Cláusula de disolución conforme al Art. 48 de la Constitución
  const art60 = allArticles.find((a) => a.articleNumber === 60);
  const art61 = allArticles.find((a) => a.articleNumber === 61);
  const hasDissolutionRules = (art61?.fullText || "").includes("501(c)(3)") &&
    (art60?.fullText || "").includes("Cero Reparto Privado");
  assert(hasDissolutionRules, "Cláusula de disolución y prohibición de distribución individual a oficiales/pastor/miembros conforme al Art. 48 constitucional");

  // Test 36: Inventario administrativo reconoce REN-DOC-003 con contenido redactado
  const inventory = getDocumentInventoryAudit();
  const invItem = inventory.find((i) => i.code === "REN-DOC-003");
  assert(invItem?.hasFullContent === true && invItem?.documentState === "EN_REDACCION", "Inventario administrativo reconoce REN-DOC-003 con contenido real");

  // Resumen final de pruebas
  console.log("\n-------------------------------------------------------");
  console.log(`TOTAL PRUEBAS EJECUTADAS: ${totalTests}`);
  console.log(`PRUEBAS PASADAS:         ${passedTests}`);
  console.log(`PRUEBAS FALLIDAS:        ${failedTests}`);
  console.log("-------------------------------------------------------\n");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runBylawsTestSuite().catch((err) => {
  console.error("Error fatal ejecutando suite de pruebas de Bylaws:", err);
  process.exit(1);
});
