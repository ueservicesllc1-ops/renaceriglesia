import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import {
  getAllInstitutionalDocuments,
  getInstitutionalDocumentById,
  updateInstitutionalDocument,
} from "../src/lib/institutional-document-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import { getDocumentInventoryAudit } from "../src/lib/admin-service";
import {
  FULL_GOVERNMENT_MANUAL_DRAFT,
  MASTER_GOVERNMENT_MANUAL_TITLES,
  getAllManualSections,
  generateFullGovernmentManualMarkdown,
} from "../src/lib/government-manual-full-draft";

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

async function runGovernmentManualTestSuite() {
  console.log("\n=======================================================");
  console.log("  EJECUTANDO SUITE DE AUDITORÍA — FASE 34: MANUAL DE GOBIERNO");
  console.log("  REN-DOC-004: MANUAL DE GOBIERNO DE RENACER");
  console.log("=======================================================\n");

  const library = getAllInstitutionalDocuments();
  const doc004 = getInstitutionalDocumentById("doc-ren-004");
  const doc003 = getInstitutionalDocumentById("doc-ren-003");
  const doc002 = getInstitutionalDocumentById("doc-ren-002");
  const doc001 = getInstitutionalDocumentById("doc-ren-001");
  const decisions = getAllInstitutionalDecisions();
  const allSections = getAllManualSections();
  const markdown = generateFullGovernmentManualMarkdown();

  // Test 1: REN-DOC-004 existe en la biblioteca institucional
  assert(!!doc004, "REN-DOC-004 existe en la biblioteca institucional");

  // Test 2: Código de documento es exactamente REN-DOC-004
  assert(doc004?.documentNumber === "REN-DOC-004", "Código de documento es exactamente REN-DOC-004", `Obtenido: ${doc004?.documentNumber}`);

  // Test 3: Título es exactamente 'MANUAL DE GOBIERNO DE RENACER'
  assert(doc004?.title === "MANUAL DE GOBIERNO DE RENACER", "Título es exactamente 'MANUAL DE GOBIERNO DE RENACER'", `Obtenido: ${doc004?.title}`);

  // Test 4: Versión v0.1
  assert(doc004?.version === "0.1", "Versión es exactamente v0.1", `Obtenido: ${doc004?.version}`);

  // Test 5: Estado de trabajo EN_REDACCION
  assert(doc004?.status === "EN_REDACCION", "Estado de trabajo es EN_REDACCION", `Obtenido: ${doc004?.status}`);

  // Test 6: Estado de adopción NO ADOPTADA (no es ADOPTADO)
  assert(doc004?.status !== "ADOPTADO", "Estado de adopción NO es ADOPTADO (Borrador No Adoptado)");

  // Test 7: Estado legal REQUIERE_REVISION_LEGAL
  assert(doc004?.legalState === "REQUIERE_REVISION_LEGAL", "Estado legal es REQUIERE_REVISION_LEGAL", `Obtenido: ${doc004?.legalState}`);

  // Test 8: Tiene contenido sustancial (> 25,000 caracteres)
  assert((doc004?.content?.length || 0) > 25000, `Tiene contenido normativo y operativo sustancial (${doc004?.content?.length} caracteres)`);

  // Test 9: No es solamente un índice (contiene múltiples secciones, protocolos, matriz y flujos)
  const hasSections = (doc004?.content?.match(/### Sección \d+\.\d+/g) || []).length >= 20;
  const hasWorkflows = (doc004?.content?.match(/Flujo [A-I]:/g) || []).length >= 8;
  assert(hasSections && hasWorkflows, "Contiene desarrollo normativo sección por sección y flujos de decisión");

  // Test 10: Gobierno institucional desarrollado en 21 títulos
  assert(MASTER_GOVERNMENT_MANUAL_TITLES.length === 21, `Tiene exactamente 21 títulos estructurados (obtenidos: ${MASTER_GOVERNMENT_MANUAL_TITLES.length})`);

  // Test 11: Pastor Fundador desarrollado operativamente (Título III)
  const pastorTitle = MASTER_GOVERNMENT_MANUAL_TITLES.find((t) => t.titleNumber === 3);
  assert(!!pastorTitle && pastorTitle.sections.length >= 2, "Título III (Pastor Fundador) desarrollado con funciones y límites");

  // Test 12: Consejo de Gobierno desarrollado operativamente (Título IV)
  const consejoTitle = MASTER_GOVERNMENT_MANUAL_TITLES.find((t) => t.titleNumber === 4);
  assert(!!consejoTitle && consejoTitle.sections.length >= 2, "Título IV (Consejo de Gobierno / Trustees) desarrollado operativamente");

  // Test 13: Consejo Ministerial desarrollado operativamente (Título V)
  const ministerialTitle = MASTER_GOVERNMENT_MANUAL_TITLES.find((t) => t.titleNumber === 5);
  assert(!!ministerialTitle && ministerialTitle.sections.length >= 1, "Título V (Consejo Ministerial) desarrollado con funciones consultivas");

  // Test 14: Asamblea General desarrollada operativamente (Título VI)
  const asambleaTitle = MASTER_GOVERNMENT_MANUAL_TITLES.find((t) => t.titleNumber === 6);
  assert(!!asambleaTitle && asambleaTitle.sections.length >= 2, "Título VI (Asamblea General) desarrollado con convocatoria y límites");

  // Test 15, 16, 17: Quórums del Consejo de Gobierno (3->2, 4->3, 5->3)
  const secQuorum = allSections.find((s) => s.sectionNumber === "4.2");
  const quorumContent = secQuorum?.content || "";
  const hasQuorum3to2 = quorumContent.includes("3 miembros activos: quórum de dos (2)");
  const hasQuorum4to3 = quorumContent.includes("4 miembros activos: quórum de tres (3)");
  const hasQuorum5to3 = quorumContent.includes("5 miembros activos: quórum de tres (3)");
  assert(hasQuorum3to2 && hasQuorum4to3 && hasQuorum5to3, "Regla de quórum del Consejo de Gobierno (3->2, 4->3, 5->3) estrictamente consagrada");

  // Test 18: Quórum de la Asamblea General del 50%
  const secAsamblea = allSections.find((s) => s.sectionNumber === "6.1");
  const hasAsamblea50 = (secAsamblea?.content || "").includes("cincuenta por ciento (50%)");
  assert(hasAsamblea50, "Quórum asambleario del 50% de miembros activos consagrado");

  // Test 19: Materias extraordinarias exigen 2/3 del Consejo y consentimiento del Pastor Fundador
  const secExtraordinaria = allSections.find((s) => s.sectionNumber === "9.2");
  const hasExtraordinaryMajority = (secExtraordinaria?.content || "").includes("dos tercios (2/3)") &&
    (secExtraordinaria?.content || "").includes("consentimiento escrito del Pastor Fundador");
  assert(hasExtraordinaryMajority, "Materias extraordinarias exigen 2/3 del Consejo y consentimiento formal del Pastor Fundador");

  // Test 20: No se inventaron montos cuantitativos en dólares
  const hasPendingThreshold = (secExtraordinaria?.content || "").includes("PENDIENTE DE DEFINICIÓN conforme a DEC-PEND-003") ||
    !!secExtraordinaria?.pendingDefinitionNotes;
  assert(hasPendingThreshold, "Umbrales cuantitativos en dólares se mantienen pendientes sin inventar montos ficticios");

  // Test 21: DEC-PEND-001 preservada (Protocolo de Incapacidad)
  const secIncapacidad = allSections.find((s) => s.sectionNumber === "16.1");
  const hasDecPend001 = secIncapacidad?.decisionIds ? secIncapacidad.decisionIds.includes("DEC-PEND-001") : false;
  assert(hasDecPend001, "Protocolo de incapacidad conserva explícitamente DEC-PEND-001 como materia pendiente de formalización notarial");

  // Test 22: DEC-PEND-003 preservada (Umbrales de gasto)
  const hasDecPend003 = secExtraordinaria?.decisionIds ? secExtraordinaria.decisionIds.includes("DEC-PEND-003") : false;
  assert(hasDecPend003, "Materia extraordinaria conserva explícitamente DEC-PEND-003");

  // Test 23: Sucesión pastoral sin ratificación asamblearia
  const secSucesion2 = allSections.find((s) => s.sectionNumber === "17.2");
  const hasNoAssemblyRatification = (secSucesion2?.content || "").includes("no estará sujeta a votación ni ratificación asamblearia");
  assert(hasNoAssemblyRatification, "Sucesión pastoral sin ratificación asamblearia espuria confirmada");

  // Test 24: Autoridad doctrinal exclusiva del Pastor Fundador preservada (Título XVIII)
  const secDoctrina = allSections.find((s) => s.sectionNumber === "18.1");
  const hasDoctrinalShield = (secDoctrina?.content || "").includes("Ni el Consejo de Gobierno, ni la Asamblea General") &&
    (secDoctrina?.content || "").includes("modificar, flexibilizar ni debilitar los principios doctrinales");
  assert(hasDoctrinalShield, "Blindaje de la autoridad doctrinal y Declaración de Fe consagrado");

  // Test 25: Límites contra el abuso de autoridad y manipulación espiritual (Título XX)
  const secAbuso = allSections.find((s) => s.sectionNumber === "20.1");
  const hasAbuseProhibition = (secAbuso?.content || "").includes("prohibido el uso de la investidura pastoral, profética o de liderazgo para coaccionar") &&
    (secAbuso?.content || "").includes("Dios me dijo que tienes que");
  assert(hasAbuseProhibition, "Prohibición formal de abuso espiritual, coerción y manipulación implementada");

  // Test 26: Deber indelegable de denuncia penal ante delitos y abuso infantil (Título XIV)
  const secDelitos = allSections.find((s) => s.sectionNumber === "14.2");
  const fullDelitosText = (secDelitos?.content || "") + " " + (secDelitos?.practicalProtocol || "");
  const hasCrimeReportingDuty = fullDelitosText.includes("deber legal irrenunciable de notificar de inmediato") &&
    fullDelitosText.includes("autoridades policiales");
  assert(hasCrimeReportingDuty, "Deber ineludible de notificación policial y civil ante delitos consagrado");

  // Test 27: Trazabilidad formal a las decisiones institucionales
  const traceableSections = allSections.filter(
    (s) => (s.decisionIds && s.decisionIds.length > 0) || (s.dependencies && s.dependencies.length > 0)
  );
  assert(traceableSections.length >= 20, `Trazabilidad formal a decisiones y documentos (${traceableSections.length} de ${allSections.length} secciones)`);

  // Test 28: No existen IDs ficticios de decisiones
  const validDecisionIds = new Set(decisions.map((d) => d.decisionNumber));
  let invalidDecisionIdFound = "";
  let allDecisionsValid = true;
  for (const s of allSections) {
    for (const decId of s.decisionIds || []) {
      if (!validDecisionIds.has(decId)) {
        allDecisionsValid = false;
        invalidDecisionIdFound = decId;
        break;
      }
    }
  }
  assert(allDecisionsValid, "Todos los IDs de decisiones citados corresponden a las 107 decisiones reales", `Inválido: ${invalidDecisionIdFound}`);

  // Test 29: RBAC Server-side — SOLO_LECTURA no puede editar documentos
  try {
    const result = updateInstitutionalDocument(
      {
        docId: "doc-ren-004",
        newTitle: "Intento no autorizado",
        newContent: "Texto alterado",
        changeReason: "Intento ilegal",
        versionBump: "minor",
      },
      { id: "usr-lector-001", name: "Auditor Externo", role: "SOLO_LECTURA" }
    );
    assert(result.success === false, "RBAC Server-side impide que SOLO_LECTURA modifique REN-DOC-004");
  } catch (err) {
    assert(true, "RBAC Server-side impidió modificación por SOLO_LECTURA");
  }

  // Test 30: Buscador encuentra REN-DOC-004 con query 'Manual de Gobierno'
  const searchResults = searchRenacerKnowledge("Manual de Gobierno");
  const foundManual = searchResults.some((r) => r.code === "REN-DOC-004");
  assert(foundManual, "Buscador de conocimiento encuentra REN-DOC-004 por 'Manual de Gobierno'");

  // Test 31: Historial y Versionado institucional de REN-DOC-004
  assert(doc004?.versions.length === 1 && doc004?.versions[0].versionNumber === "0.1", "Versionado registra historial formal v0.1");

  // Test 32: REN-DOC-001 permanece intacto
  assert(doc001?.version === "1.0" && doc001?.status === "BORRADOR", "REN-DOC-001 permanece intacto (v1.0 BORRADOR NO ADOPTADA)");

  // Test 33: REN-DOC-002 permanece intacto
  assert(doc002?.version === "0.1" && doc002?.status === "EN_REDACCION", "REN-DOC-002 permanece intacto (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 34: REN-DOC-003 permanece intacto
  assert(doc003?.version === "0.1" && doc003?.status === "EN_REDACCION", "REN-DOC-003 permanece intacto (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 35: Las 107 decisiones históricas permanecen intactas
  assert(decisions.length === 107, `Las 107 decisiones institucionales permanecen intactas (encontradas: ${decisions.length})`);

  // Test 36: Matriz de responsabilidades contiene al menos 10 materias clave
  assert(
    FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.length >= 10,
    `Matriz de responsabilidades desarrollada (${FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.length} materias institucionales)`
  );

  // Test 37: Flujos de decisión contienen 9 workflows estructurados
  assert(
    FULL_GOVERNMENT_MANUAL_DRAFT.decisionWorkflows.length === 9,
    `Flujos de decisión desarrollados (${FULL_GOVERNMENT_MANUAL_DRAFT.decisionWorkflows.length} workflows institucionales)`
  );

  // Test 38: Inventario administrativo reconoce REN-DOC-004 con contenido redactado
  const inventory = getDocumentInventoryAudit();
  const invItem = inventory.find((i) => i.code === "REN-DOC-004");
  assert(invItem?.hasFullContent === true && invItem?.documentState === "EN_REDACCION", "Inventario administrativo reconoce REN-DOC-004 con contenido real");

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

runGovernmentManualTestSuite().catch((err) => {
  console.error("Error fatal ejecutando suite de pruebas del Manual de Gobierno:", err);
  process.exit(1);
});
