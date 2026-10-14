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

function assert(condition: any, testName: string, detail?: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  [PASS] #${totalTests}: ${testName}`);
  } else {
    failedTests++;
    console.error(`  [FAIL] #${totalTests}: ${testName} ${detail ? `-> ${detail}` : ""}`);
  }
}

async function runGovernmentManualAuditSuite() {
  console.log("\n=======================================================");
  console.log("  EJECUTANDO SUITE DE AUDITORÍA PROFUNDA — FASE 35");
  console.log("  AUDITORÍA REGLA POR REGLA DE REN-DOC-004");
  console.log("=======================================================\n");

  const library = getAllInstitutionalDocuments();
  const doc004 = getInstitutionalDocumentById("doc-ren-004");
  const doc003 = getInstitutionalDocumentById("doc-ren-003");
  const doc002 = getInstitutionalDocumentById("doc-ren-002");
  const doc001 = getInstitutionalDocumentById("doc-ren-001");
  const decisions = getAllInstitutionalDecisions();
  const allSections = getAllManualSections();
  const markdown = generateFullGovernmentManualMarkdown();

  // Test 1: REN-DOC-004 existe
  assert(!!doc004, "REN-DOC-004 existe en la biblioteca institucional");

  // Test 2: Código correcto
  assert(doc004?.documentNumber === "REN-DOC-004", "Código de documento es exactamente REN-DOC-004");

  // Test 3: Título correcto
  assert(doc004?.title === "MANUAL DE GOBIERNO DE RENACER", "Título es exactamente 'MANUAL DE GOBIERNO DE RENACER'");

  // Test 4: Versión v0.1
  assert(doc004?.version === "0.1", "Versión es exactamente v0.1");

  // Test 5: Estado de trabajo EN_REDACCION
  assert(doc004?.status === "EN_REDACCION", "Estado de trabajo es EN_REDACCION");

  // Test 6: Estado de adopción NO ADOPTADA
  assert(doc004?.status !== "ADOPTADO", "Estado de adopción NO es ADOPTADO (Borrador Técnico)");

  // Test 7: Estado legal REQUIERE_REVISION_LEGAL
  assert(doc004?.legalState === "REQUIERE_REVISION_LEGAL", "Estado legal es REQUIERE_REVISION_LEGAL");

  // Test 8: Contenido normativo sustancial (> 25,000 caracteres)
  assert((doc004?.content?.length || 0) > 25000, `Tiene contenido sustancial (${doc004?.content?.length} caracteres)`);

  // Test 9: No es solo un índice
  const hasSectionsCount = (doc004?.content?.match(/### Sección \d+\.\d+/g) || []).length;
  assert(hasSectionsCount >= 20, `Estructura desarrollada con ${hasSectionsCount} secciones operativas`);

  // Test 10: 21 Títulos estructurados
  assert(MASTER_GOVERNMENT_MANUAL_TITLES.length === 21, `Tiene exactamente 21 títulos (obtenidos: ${MASTER_GOVERNMENT_MANUAL_TITLES.length})`);

  // Test 11: 31 Secciones operativas
  assert(allSections.length === 31, `Tiene exactamente 31 secciones normativas (obtenidas: ${allSections.length})`);

  // Test 12: Matriz de responsabilidades contiene 12 materias
  assert(FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.length === 12, `Matriz con 12 materias institucionales completas`);

  // Test 13: 9 Flujos de decisión institucional (A al I)
  assert(FULL_GOVERNMENT_MANUAL_DRAFT.decisionWorkflows.length === 9, `9 Workflows de decisión institucional implementados`);

  // Test 14: Auditoría de Plazos — No existen plazos rígidos artificiales sin respaldo estatutario
  const sec81 = allSections.find((s) => s.sectionNumber === "8.1");
  const workflowA = FULL_GOVERNMENT_MANUAL_DRAFT.decisionWorkflows.find((w) => w.id === "WORKFLOW-A");
  const hasPrudentDeadlines =
    (sec81?.content || "").includes("antelación establecida por los instrumentos estatutarios aplicables") &&
    (workflowA?.steps[0] || "").includes("antelación razonable establecida por los reglamentos aplicables");
  assert(hasPrudentDeadlines, "Plazos formulados prudentemente conforme a los instrumentos estatutarios y legales aplicables");

  // Test 15: Auditoría de Cierre Notarial — No se exige notario de forma generalizada sin mandato
  const workflowB = FULL_GOVERNMENT_MANUAL_DRAFT.decisionWorkflows.find((w) => w.id === "WORKFLOW-B");
  const hasPrudentClosing = (workflowB?.steps[5] || "").includes(
    "Formalización y registro corporativo conforme a los requisitos legales y estatutarios aplicables en New Jersey"
  );
  assert(hasPrudentClosing, "Cierre extraordinario condicionado a los requisitos legales y estatutarios aplicables");

  // Test 16: Auditoría de Incapacidad — Evaluación médica encuadrada bajo DEC-PEND-001 y revisión legal
  const sec161 = allSections.find((s) => s.sectionNumber === "16.1");
  const hasIncapacityFramework =
    (sec161?.content || "").includes("DEC-PEND-001") &&
    (sec161?.content || "").includes("profesionales médicos legalmente autorizados") &&
    sec161?.legalReviewRequired === true;
  assert(hasIncapacityFramework, "Protocolo de incapacidad encuadrado bajo DEC-PEND-001 sin resolución prematura");

  // Test 17: Auditoría del Mecanismo de Contingencia — Sin autoridad independiente ni sustitución de órganos
  const sec151 = allSections.find((s) => s.sectionNumber === "15.1");
  const hasContingencyLimits =
    (sec151?.content || "").includes("no constituye un órgano de gobierno independiente") &&
    (sec151?.content || "").includes("no tiene facultades jurídicas propias") &&
    (sec151?.content || "").includes("no sustituye al Consejo de Gobierno, al Pastor Fundador ni al Consejo Ministerial");
  assert(hasContingencyLimits, "Mecanismo de contingencia delimitado estrictamente sin creación de órgano independiente");

  // Test 18: Matriz — Doctrina: Exclusiva del Fundador
  const matDoctrina = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Doctrina"));
  assert(
    matDoctrina?.pastorFundador.includes("Autoridad final") && matDoctrina?.asambleaGeneral.includes("Sin competencia"),
    "Matriz: Doctrina reservada con exclusividad al Pastor Fundador"
  );

  // Test 19: Matriz — Visión y Dirección Espiritual
  const matVision = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Visión"));
  assert(matVision?.pastorFundador.includes("Conducción principal"), "Matriz: Visión encabezada por el Pastor Fundador");

  // Test 20: Matriz — Selección de Trustees en 3 Pasos
  const matTrustees = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Selección de Consejeros"));
  assert(
    matTrustees?.pastorFundador.includes("Paso 1") &&
      matTrustees?.consejoGobierno.includes("Paso 2") &&
      matTrustees?.asambleaGeneral.includes("Paso 3"),
    "Matriz: Selección de Trustees en 3 pasos obligatorios"
  );

  // Test 21: Matriz — Finanzas Ordinarias
  const matFinanzas = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Finanzas Ordinarias"));
  assert(matFinanzas?.consejoGobierno.includes("mayoría simple"), "Matriz: Finanzas ordinarias por mayoría simple del Consejo");

  // Test 22: Matriz — Materias Extraordinarias (2/3 + Consentimiento)
  const matExtra = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Materias Extraordinarias"));
  assert(
    matExtra?.consejoGobierno.includes("2/3") && matExtra?.pastorFundador.includes("Consentimiento explícito"),
    "Matriz: Materias extraordinarias requieren 2/3 del Consejo y consentimiento del Pastor Fundador"
  );

  // Test 23: Matriz — Licenciamiento y Ordenación
  const matOrdenacion = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Licenciamiento"));
  assert(
    matOrdenacion?.consejoMinisterial.includes("Evaluación teológica") && matOrdenacion?.pastorFundador.includes("Imposición"),
    "Matriz: Ordenación con examen ministerial y decreto pastoral"
  );

  // Test 24: Matriz — Disciplina y Debido Proceso
  const matDisciplina = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Disciplina"));
  assert(matDisciplina?.asambleaGeneral.includes("Confidencialidad absoluta"), "Matriz: Disciplina con confidencialidad sin juicio asambleario");

  // Test 25: Matriz — Padrón y Habilitación
  const matPadron = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Padrón"));
  assert(matPadron?.consejoGobierno.includes("Custodia administrativa"), "Matriz: Padrón bajo custodia del Consejo de Gobierno");

  // Test 26: Matriz — Sucesión (designación previa)
  const matSuc1 = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find(
    (m) => m.materia.includes("Sucesión") && m.materia.includes("designación previa")
  );
  assert(matSuc1?.pastorFundador.includes("Designación exclusiva"), "Matriz: Sucesión con designación previa del Fundador");

  // Test 27: Matriz — Sucesión (vacancia imprevista sin designación)
  const matSuc2 = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find(
    (m) => m.materia.includes("Sucesión") && m.materia.includes("sin designación")
  );
  assert(
    matSuc2?.consejoGobierno.includes("Voto unánime") &&
      matSuc2?.consejoMinisterial.includes("Voto unánime") &&
      matSuc2?.asambleaGeneral.includes("Sin ratificación asamblearia"),
    "Matriz: Sucesión ante vacancia sin designación por Comisión Conjunta unánime sin ratificación asamblearia"
  );

  // Test 28: Matriz — Reformas a los Bylaws
  const matBylaws = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Bylaws"));
  assert(
    matBylaws?.consejoGobierno.includes("2/3") && matBylaws?.pastorFundador.includes("Consentimiento"),
    "Matriz: Reforma a Bylaws por 2/3 del Consejo y consentimiento pastoral"
  );

  // Test 29: Matriz — Disolución
  const matDisolucion = FULL_GOVERNMENT_MANUAL_DRAFT.responsibilityMatrix.find((m) => m.materia.includes("Disolución"));
  assert(
    matDisolucion?.consejoGobierno.includes("501(c)(3)"),
    "Matriz: Disolución y traspaso exclusivo a entidad 501(c)(3) cristiana"
  );

  // Test 30: Quórums del Consejo (3->2, 4->3, 5->3)
  const sec42 = allSections.find((s) => s.sectionNumber === "4.2");
  const quorumsText = sec42?.content || "";
  assert(
    quorumsText.includes("3 miembros activos: quórum de dos (2)") &&
      quorumsText.includes("4 miembros activos: quórum de tres (3)") &&
      quorumsText.includes("5 miembros activos: quórum de tres (3)"),
    "Quórums del Consejo de Gobierno (3->2, 4->3, 5->3) confirmados"
  );

  // Test 31: Quórum Asamblea 50%
  const sec61 = allSections.find((s) => s.sectionNumber === "6.1");
  assert((sec61?.content || "").includes("cincuenta por ciento (50%)"), "Quórum asambleario del 50% confirmado");

  // Test 32: Sin montos ficticios en dólares; DEC-PEND-003 preservada
  const sec92 = allSections.find((s) => s.sectionNumber === "9.2");
  const full92 = (sec92?.content || "") + " " + (sec92?.practicalProtocol || "") + " " + (sec92?.pendingDefinitionNotes || "");
  assert(
    full92.includes("PENDIENTE DE DEFINICIÓN conforme a DEC-PEND-003") || full92.includes("DEC-PEND-003"),
    "Umbrales cuantitativos financieros se mantienen pendientes conforme a DEC-PEND-003"
  );

  // Test 33: Prohibición de abuso de poder y manipulación espiritual
  const sec201 = allSections.find((s) => s.sectionNumber === "20.1");
  assert(
    (sec201?.content || "").includes("prohibido el uso de la investidura pastoral, profética o de liderazgo") &&
      (sec201?.content || "").includes("Dios me dijo que tienes que"),
    "Prohibición de coerción y manipulación espiritual confirmada"
  );

  // Test 34: Notificación policial y legal obligatoria ante abuso o delitos
  const sec142 = allSections.find((s) => s.sectionNumber === "14.2");
  const full142 = (sec142?.content || "") + " " + (sec142?.practicalProtocol || "");
  assert(
    full142.includes("deber legal irrenunciable de notificar de inmediato") && full142.includes("autoridades policiales"),
    "Deber irrenunciable de notificación penal y policial confirmado"
  );

  // Test 35: Trazabilidad formal en todas las secciones
  const traceableCount = allSections.filter(
    (s) => (s.decisionIds && s.decisionIds.length > 0) || (s.dependencies && s.dependencies.length > 0)
  ).length;
  assert(traceableCount === 31, `100% de las secciones (${traceableCount}/31) poseen trazabilidad formal`);

  // Test 36: Todos los IDs de decisiones son reales (0 falsos)
  const validDecisionIds = new Set(decisions.map((d) => d.decisionNumber));
  let invalidIdFound = "";
  let allValid = true;
  for (const s of allSections) {
    for (const decId of s.decisionIds || []) {
      if (!validDecisionIds.has(decId)) {
        allValid = false;
        invalidIdFound = decId;
        break;
      }
    }
  }
  assert(allValid, "Todos los IDs de decisiones corresponden a las 107 decisiones reales", `Inválido: ${invalidIdFound}`);

  // Test 37: RBAC Server-side — SOLO_LECTURA bloqueado
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
    assert(result.success === false, "RBAC Server-side bloquea edición a usuario SOLO_LECTURA");
  } catch (err) {
    assert(true, "RBAC Server-side bloqueó edición a usuario SOLO_LECTURA");
  }

  // Test 38: Buscador encuentra REN-DOC-004
  const searchResults = searchRenacerKnowledge("Manual de Gobierno");
  assert(searchResults.some((r) => r.code === "REN-DOC-004"), "Buscador indexa y localiza REN-DOC-004");

  // Test 39: REN-DOC-001 intacta
  assert(doc001?.version === "1.0" && doc001?.status === "BORRADOR", "REN-DOC-001 permanece intacta (v1.0 BORRADOR NO ADOPTADA)");

  // Test 40: REN-DOC-002 intacta
  assert(doc002?.version === "0.1" && doc002?.status === "EN_REDACCION", "REN-DOC-002 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 41: REN-DOC-003 intacta
  assert(doc003?.version === "0.1" && doc003?.status === "EN_REDACCION", "REN-DOC-003 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 42: 107 Decisiones históricas intactas
  assert(decisions.length === 107, `107 decisiones institucionales permanecen intactas (encontradas: ${decisions.length})`);

  // Test 43: Inventario administrativo reconoce REN-DOC-004 con contenido completo
  const inventory = getDocumentInventoryAudit();
  const invItem = inventory.find((i) => i.code === "REN-DOC-004");
  assert(
    invItem?.hasFullContent === true && invItem?.documentState === "EN_REDACCION",
    "Inventario administrativo reconoce REN-DOC-004 con contenido real"
  );

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

runGovernmentManualAuditSuite().catch((err) => {
  console.error("Error fatal ejecutando suite de auditoría del Manual de Gobierno:", err);
  process.exit(1);
});
