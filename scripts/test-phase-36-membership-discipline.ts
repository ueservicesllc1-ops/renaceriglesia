import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import {
  getAllInstitutionalDocuments,
  getInstitutionalDocumentById,
  updateInstitutionalDocument,
} from "../src/lib/institutional-document-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import { getDocumentInventoryAudit } from "../src/lib/admin-service";
import {
  FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT,
  MASTER_MEMBERSHIP_MANUAL_TITLES,
  getAllMembershipManualSections,
  generateFullMembershipManualMarkdown,
} from "../src/lib/membership-discipline-manual-full-draft";

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

async function runMembershipDisciplineManualSuite() {
  console.log("\n=======================================================");
  console.log("  EJECUTANDO SUITE DE PRUEBAS — FASE 36");
  console.log("  REN-DOC-005: MANUAL DE MEMBRESÍA, DISCIPLINA Y RESTAURACIÓN");
  console.log("=======================================================\n");

  const library = getAllInstitutionalDocuments();
  const doc005 = getInstitutionalDocumentById("doc-ren-005");
  const doc004 = getInstitutionalDocumentById("doc-ren-004");
  const doc003 = getInstitutionalDocumentById("doc-ren-003");
  const doc002 = getInstitutionalDocumentById("doc-ren-002");
  const doc001 = getInstitutionalDocumentById("doc-ren-001");
  const decisions = getAllInstitutionalDecisions();
  const allSections = getAllMembershipManualSections();
  const markdown = generateFullMembershipManualMarkdown();

  // Test 1: Existencia
  assert(Boolean(doc005), "REN-DOC-005 existe en la biblioteca institucional");

  // Test 2: Código
  assert(doc005?.documentNumber === "REN-DOC-005", "Código de documento es exactamente REN-DOC-005");

  // Test 3: Título
  assert(
    doc005?.title === "MANUAL DE MEMBRESÍA, DISCIPLINA Y RESTAURACIÓN DE RENACER",
    "Título es exactamente 'MANUAL DE MEMBRESÍA, DISCIPLINA Y RESTAURACIÓN DE RENACER'"
  );

  // Test 4: Versión
  assert(doc005?.version === "0.1", "Versión es exactamente v0.1");

  // Test 5: Estado de trabajo
  assert(doc005?.status === "EN_REDACCION", "Estado de trabajo es EN_REDACCION");

  // Test 6: Estado de adopción
  assert(doc005?.status !== "ADOPTADO", "Estado de adopción NO es ADOPTADO (Borrador No Adoptado)");

  // Test 7: Estado legal
  assert(doc005?.legalState === "REQUIERE_REVISION_LEGAL", "Estado legal es REQUIERE_REVISION_LEGAL");

  // Test 8: Contenido sustancial
  assert((doc005?.content.length || 0) > 20000, `Tiene contenido sustancial (${doc005?.content.length} caracteres)`);

  // Test 9: Estructura en 21 títulos
  assert(
    FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT.titles.length === 21,
    `Tiene exactamente 21 títulos estructurados (obtenidos: ${FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT.titles.length})`
  );

  // Test 10: Membresía y admisión
  const sec31 = allSections.find((s) => s.sectionNumber === "3.1");
  assert(
    Boolean(
      (sec31?.content || "").includes("profesado fe genuina") &&
        (sec31?.content || "").includes("bautizado en agua por inmersión") &&
        (sec31?.content || "").includes("Aceptar de manera voluntaria")
    ),
    "Requisitos esenciales de membresía desarrollados fielmente"
  );

  // Test 11: Bautismo en agua por inmersión
  const sec51 = allSections.find((s) => s.sectionNumber === "5.1");
  assert(
    Boolean(
      (sec51?.content || "").includes("inmersión") &&
        (sec51?.content || "").includes("Artículo 7 de la Declaración de Fe")
    ),
    "Bautismo en agua por inmersión desarrollado y vinculado a Declaración de Fe"
  );

  // Test 12: Registro oficial y padrón
  const sec61 = allSections.find((s) => s.sectionNumber === "6.1");
  assert(
    Boolean(
      (sec61?.content || "").includes("Registro Oficial de Miembros") &&
        (sec61?.content || "").includes("Secretario de la Iglesia")
    ),
    "Registro Oficial de Miembros bajo custodia del Secretario y supervisión del Consejo"
  );

  // Test 13: Miembro activo y derecho al voto
  const sec81 = allSections.find((s) => s.sectionNumber === "8.1");
  assert(
    Boolean(
      (sec81?.content || "").includes("mayores de dieciocho (18) años") &&
        (sec81?.content || "").includes("Miembros Activos en el Registro Oficial") &&
        (sec81?.content || "").includes("asistencia regular comprobable")
    ),
    "Definición y requisitos de Miembro Activo con derecho a voto"
  );

  // Test 14: Quórum asambleario 50%
  const sec82 = allSections.find((s) => s.sectionNumber === "8.2");
  assert(
    Boolean((sec82?.content || "").includes("cincuenta por ciento (50%)")),
    "Quórum asambleario del 50% de miembros activos consagrado"
  );

  // Test 15: Disciplina restauradora y bíblica
  const sec121 = allSections.find((s) => s.sectionNumber === "12.1");
  assert(
    Boolean(
      (sec121?.content || "").includes("pastoral, preventivo, protector y restaurador") &&
        (sec121?.content || "").includes("No constituye un instrumento de castigo punitivo")
    ),
    "Disciplina eclesial con finalidad pastoral, protectora y restauradora"
  );

  // Test 16: Debido proceso y presunción de buena fe
  const sec91 = allSections.find((s) => s.sectionNumber === "9.1");
  assert(
    Boolean((sec91?.content || "").includes("debido proceso, presunción de buena fe")),
    "Garantía de debido proceso y presunción de buena fe consagrada"
  );

  // Test 17: Distinción entre perdón espiritual y restitución a liderazgo
  const sec172 = allSections.find((s) => s.sectionNumber === "17.2");
  assert(
    Boolean(
      (sec172?.content || "").includes("perdón espiritual no confiere un derecho automático e inmediato al cargo")
    ),
    "Distinción estricta entre perdón espiritual y restitución al liderazgo"
  );

  // Test 18: Suspensión temporal diferenciada de pérdida de membresía
  const sec161 = allSections.find((s) => s.sectionNumber === "16.1");
  assert(
    Boolean(
      (sec161?.content || "").includes("medida cautelar y restauradora de carácter temporal") &&
        (sec161?.content || "").includes("privación provisional del derecho al voto")
    ),
    "Suspensión temporal diferenciada de la baja o pérdida definitiva de membresía"
  );

  // Test 19: Confidencialidad responsable (no absoluta)
  const sec142 = allSections.find((s) => s.sectionNumber === "14.2");
  assert(
    Boolean((sec142?.content || "").includes("confidencialidad eclesial NO es absoluta")),
    "Confidencialidad pastoral delimitada (no protege abusos ni delitos)"
  );

  // Test 20: Tolerancia cero ante abuso y violencia
  const sec151 = allSections.find((s) => s.sectionNumber === "15.1");
  assert(
    Boolean(
      (sec151?.content || "").includes("tolerancia cero absoluta ante el abuso sexual, abuso infantil, abuso físico")
    ),
    "Tolerancia cero ante abuso, violencia y explotación consagrada"
  );

  // Test 21: Notificación policial y legal obligatoria sin bloqueo eclesial (N.J.S.A. 9:6-8.10)
  assert(
    Boolean(
      (sec142?.content || "").includes("N.J.S.A. 9:6-8.10") &&
        (sec142?.practicalProtocol || "").includes("1-877-NJ-ABUSE") &&
        (sec142?.practicalProtocol || "").includes("sin retrasar la denuncia por trámites eclesiales")
    ),
    "Deber irrenunciable de denuncia policial e informe bajo N.J.S.A. 9:6-8.10"
  );

  // Test 22: Prohibición de control económico personal
  const sec12 = allSections.find((s) => s.sectionNumber === "1.2");
  assert(
    Boolean((sec12?.content || "").includes("finanzas individuales")),
    "Prohibición formal de control sobre la economía privada de los miembros"
  );

  // Test 23: Prohibición de control médico
  assert(
    Boolean((sec12?.content || "").includes("decisiones médicas privadas")),
    "Prohibición formal de injerencia en decisiones médicas privadas"
  );

  // Test 24: Prohibición de control matrimonial o de pareja
  const sec201 = allSections.find((s) => s.sectionNumber === "20.1");
  assert(
    Boolean((sec201?.content || "").includes("noviazgo, matrimonio o vida de pareja")),
    "Prohibición formal de control o coacción en el matrimonio o noviazgo"
  );

  // Test 25: Prohibición de obediencia absoluta y manipulación ("Dios me dijo")
  assert(
    Boolean((sec201?.content || "").includes("Dios me dijo que tienes que obedecerme")),
    "Prohibición de fórmulas coercitivas de manipulación espiritual"
  );

  // Test 26: Plena participación ministerial de las mujeres
  const sec32 = allSections.find((s) => s.sectionNumber === "3.2");
  assert(
    Boolean(
      (sec32?.content || "").includes("Las mujeres tienen plena y total participación en la vida ministerial")
    ),
    "Plena participación ministerial, liderazgo y diaconal de las mujeres sin discriminación"
  );

  // Test 27: Escuela de Discípulos (9 meses / 3 niveles)
  const sec111 = allSections.find((s) => s.sectionNumber === "11.1");
  assert(
    Boolean(
      (sec111?.content || "").includes("nueve (9) meses") &&
        (sec111?.content || "").includes("Nivel I: Conociendo a Cristo") &&
        (sec111?.content || "").includes("Nivel II: Creciendo en Cristo") &&
        (sec111?.content || "").includes("Nivel III: Haciendo Discípulos")
    ),
    "Escuela de Discípulos estructurada en 9 meses y 3 niveles pedagógicos"
  );

  // Test 28: Tabla de Estados de Membresía con 9 categorías
  assert(
    FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT.membershipStates.length === 9,
    `Tabla de Estados de Membresía con 9 categorías completas`
  );

  // Test 29: Matriz de Responsabilidades con 9 materias
  assert(
    FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT.responsibilityMatrix.length === 9,
    `Matriz de Responsabilidades con 9 materias institucionales completas`
  );

  // Test 30: 10 Flujos Operativos (Workflows A al J)
  assert(
    FULL_MEMBERSHIP_DISCIPLINE_MANUAL_DRAFT.operationalWorkflows.length === 10,
    `10 Workflows operativos y de decisión institucional implementados (A al J)`
  );

  // Test 31: Trazabilidad formal en todas las secciones
  const traceableCount = allSections.filter(
    (s) => (s.decisionIds && s.decisionIds.length > 0) || (s.dependencies && s.dependencies.length > 0)
  ).length;
  assert(
    traceableCount === allSections.length,
    `100% de las secciones (${traceableCount}/${allSections.length}) poseen trazabilidad formal`
  );

  // Test 32: Todos los IDs de decisiones son reales (0 falsos)
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

  // Test 33: RBAC Server-side — SOLO_LECTURA bloqueado
  try {
    const result = updateInstitutionalDocument(
      {
        docId: "doc-ren-005",
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

  // Test 34: Buscador indexa y encuentra REN-DOC-005
  const searchResults = searchRenacerKnowledge("Membresía");
  assert(searchResults.some((r) => r.code === "REN-DOC-005"), "Buscador indexa y localiza REN-DOC-005 por 'Membresía'");

  // Test 35: Historial de versiones registra v0.1
  assert(
    doc005?.versions.some((v) => v.versionNumber === "0.1"),
    "Historial de versiones registra versión inicial v0.1"
  );

  // Test 36: REN-DOC-001 intacta
  assert(doc001?.version === "1.0" && doc001?.status === "BORRADOR", "REN-DOC-001 permanece intacta (v1.0 BORRADOR NO ADOPTADA)");

  // Test 37: REN-DOC-002 intacta
  assert(doc002?.version === "0.1" && doc002?.status === "EN_REDACCION", "REN-DOC-002 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 38: REN-DOC-003 intacta
  assert(doc003?.version === "0.1" && doc003?.status === "EN_REDACCION", "REN-DOC-003 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 39: REN-DOC-004 intacta
  assert(doc004?.version === "0.1" && doc004?.status === "EN_REDACCION", "REN-DOC-004 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)");

  // Test 40: 107 Decisiones históricas intactas
  assert(decisions.length === 107, `107 decisiones institucionales permanecen intactas (encontradas: ${decisions.length})`);

  // Test 41: Inventario administrativo reconoce REN-DOC-005 con contenido completo
  const inventory = getDocumentInventoryAudit();
  const invItem = inventory.find((i) => i.code === "REN-DOC-005");
  assert(
    invItem?.hasFullContent === true && invItem?.documentState === "EN_REDACCION",
    "Inventario administrativo reconoce REN-DOC-005 con contenido real"
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

runMembershipDisciplineManualSuite().catch((err) => {
  console.error("Error fatal ejecutando suite de REN-DOC-005:", err);
  process.exit(1);
});
