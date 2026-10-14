import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import {
  getAllInstitutionalDocuments,
  getInstitutionalDocumentById,
  updateInstitutionalDocument,
} from "../src/lib/institutional-document-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import { getDocumentInventoryAudit } from "../src/lib/admin-service";
import {
  FULL_MINISTRY_LEADERSHIP_MANUAL_DRAFT,
  MASTER_MINISTRY_MANUAL_TITLES,
  MINISTRY_AREAS_CATALOG,
  LEADERSHIP_ROLE_MATRIX,
  MINISTRY_LEADERSHIP_WORKFLOWS,
  FUTURE_FORMS_CATALOG,
  getAllMinistryLeadershipManualSections,
  generateFullMinistryLeadershipManualMarkdown,
} from "../src/lib/ministry-leadership-manual-full-draft";

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

async function runMinistryLeadershipManualSuite() {
  console.log("\n=======================================================");
  console.log("  EJECUTANDO SUITE DE PRUEBAS — FASE 37");
  console.log("  REN-DOC-006: MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER");
  console.log("=======================================================\n");

  const library = getAllInstitutionalDocuments();
  const doc006 = getInstitutionalDocumentById("doc-ren-006");
  const doc005 = getInstitutionalDocumentById("doc-ren-005");
  const doc004 = getInstitutionalDocumentById("doc-ren-004");
  const doc003 = getInstitutionalDocumentById("doc-ren-003");
  const doc002 = getInstitutionalDocumentById("doc-ren-002");
  const doc001 = getInstitutionalDocumentById("doc-ren-001");
  const decisions = getAllInstitutionalDecisions();
  const allSections = getAllMinistryLeadershipManualSections();
  const markdown = generateFullMinistryLeadershipManualMarkdown();

  // Test 1: Existencia de REN-DOC-006
  assert(Boolean(doc006), "REN-DOC-006 existe en la biblioteca institucional");

  // Test 2: Código correcto
  assert(doc006?.documentNumber === "REN-DOC-006", "Código de documento es exactamente REN-DOC-006");

  // Test 3: Título oficial
  assert(
    doc006?.title === "MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER",
    "Título es exactamente 'MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER'"
  );

  // Test 4: Versión v0.1
  assert(doc006?.version === "0.1", "Versión es exactamente v0.1");

  // Test 5: Estado EN_REDACCION
  assert(doc006?.status === "EN_REDACCION", "Estado de trabajo es EN_REDACCION");

  // Test 6: Adopción NO ADOPTADA
  assert(doc006?.status !== "ADOPTADO", "Estado de adopción NO es ADOPTADO (Borrador No Adoptado)");

  // Test 7: Estado legal REQUIERE_REVISION_LEGAL
  assert(doc006?.legalState === "REQUIERE_REVISION_LEGAL", "Estado legal es REQUIERE_REVISION_LEGAL");

  // Test 8: Contenido sustancial
  assert((doc006?.content.length || 0) > 20000, `Tiene contenido sustancial (${doc006?.content.length} caracteres)`);

  // Test 9: Estructura en 21 títulos
  assert(
    FULL_MINISTRY_LEADERSHIP_MANUAL_DRAFT.titles.length === 21,
    `Tiene exactamente 21 títulos estructurados (obtenidos: ${FULL_MINISTRY_LEADERSHIP_MANUAL_DRAFT.titles.length})`
  );

  // Test 10: Catálogo de 18 áreas ministeriales
  assert(
    MINISTRY_AREAS_CATALOG.length === 18,
    `Catálogo comprende 18 áreas ministeriales (encontradas: ${MINISTRY_AREAS_CATALOG.length})`
  );

  // Test 11: Distinción entre áreas establecidas y estructuras propuestas
  const establishedCount = MINISTRY_AREAS_CATALOG.filter((a) => a.status === "AREA_MINISTERIAL_ESTABLECIDA").length;
  const proposedCount = MINISTRY_AREAS_CATALOG.filter((a) => a.status === "ESTRUCTURA_PROPUESTA").length;
  assert(
    establishedCount > 0 && proposedCount > 0 && establishedCount + proposedCount === 18,
    `Distinción formal entre áreas establecidas (${establishedCount}) y propuestas (${proposedCount})`
  );

  // Test 12: Pastor Fundador (rol y límites)
  const sec42 = allSections.find((s) => s.sectionNumber === "4.2");
  assert(
    Boolean(
      (sec42?.content || "").includes("PASTOR FUNDADOR") &&
        (sec42?.content || "").includes("Custodio doctrinal") &&
        (sec42?.content || "").includes("No asume por sí solo funciones exclusivas de administración fiduciaria")
    ),
    "Pastor Fundador definido como custodio doctrinal y visión sin facultades fiduciarias exclusivas del Consejo de Gobierno"
  );

  // Test 13: Pastores Asociados / Asignados
  assert(
    Boolean((sec42?.content || "").includes("PASTOR ASOCIADO / ASIGNADO") && (sec42?.content || "").includes("Ministro ordenado")),
    "Pastores asociados/asignados caracterizados como ministros ordenados con cuidado congregacional delegado"
  );

  // Test 14: Ministros (Licenciados y Ordenados)
  const sec51 = allSections.find((s) => s.sectionNumber === "5.1");
  assert(
    Boolean(
      (sec51?.content || "").includes("CANDIDATO MINISTERIAL") &&
        (sec51?.content || "").includes("MINISTRO LICENCIADO") &&
        (sec51?.content || "").includes("MINISTRO ORDENADO") &&
        (sec51?.content || "").includes("REN-DOC-010")
    ),
    "Ruta ministerial formal (Candidato -> Licenciado -> Ordenado -> Pastor) referenciando REN-DOC-010"
  );

  // Test 15: Líderes laicos y ruta de servicio
  const sec61 = allSections.find((s) => s.sectionNumber === "6.1");
  assert(
    Boolean(
      (sec61?.content || "").includes("MIEMBRO ACTIVO") &&
        (sec61?.content || "").includes("SERVIDOR") &&
        (sec61?.content || "").includes("LÍDER EN FORMACIÓN") &&
        (sec61?.content || "").includes("LÍDER") &&
        (sec61?.content || "").includes("SUPERVISOR") &&
        (sec61?.content || "").includes("LÍDER DE ÁREA")
    ),
    "Ruta laica de servicio progresivo (Miembro -> Servidor -> Líder en Formación -> Líder -> Supervisor -> Líder de Área)"
  );

  // Test 16: Líderes de Área
  const sec111 = allSections.find((s) => s.sectionNumber === "11.1");
  assert(
    Boolean((sec111?.content || "").includes("Supervisores") && (sec111?.content || "").includes("sector geográfico")),
    "Líderes de Área definidos para coordinación sectorial y supervisión de supervisores"
  );

  // Test 17: Supervisores (mentoría y no autoridad doctrinal)
  const sec101 = allSections.find((s) => s.sectionNumber === "10.1");
  const sec102 = allSections.find((s) => s.sectionNumber === "10.2");
  assert(
    Boolean(
      (sec101?.content || "").includes("tres (3) a cinco (5)") &&
        ((sec102?.title || "") + (sec102?.content || "")).includes("No es Autoridad Doctrinal ni Punitiva")
    ),
    "Supervisores establecidos para acompañar 3-5 líderes, excluyendo autoridad doctrinal o punitiva"
  );

  // Test 18: Familias de Grupo (término exclusivo)
  const sec81 = allSections.find((s) => s.sectionNumber === "8.1");
  assert(
    Boolean(
      (sec81?.content || "").includes("FAMILIAS DE GRUPO") &&
        (sec81?.content || "").includes("Queda proscrito el uso del vocablo 'células'")
    ),
    "Uso exclusivo de 'FAMILIAS DE GRUPO' y proscripción formal del vocablo 'células'"
  );

  // Test 19: Tamaño orientativo 8–15 personas
  const sec82 = allSections.find((s) => s.sectionNumber === "8.2");
  assert(
    Boolean((sec82?.content || "").includes("ocho (8) a quince (15) personas")),
    "Tamaño orientativo consagrado en 8 a 15 personas por grupo"
  );

  // Test 20: Multiplicación orientativa 15–20 sin rigidez
  assert(
    Boolean(
      (sec82?.content || "").includes("quince (15) a veinte (20) personas") &&
        (sec82?.content || "").includes("no una meta matemática rígida")
    ),
    "Multiplicación orientativa proyectada entre 15 y 20 personas sin rigidez matemática impuesta"
  );

  // Test 21: Metodología de Desarrollo de Líderes en 7 Pasos
  const sec121 = allSections.find((s) => s.sectionNumber === "12.1");
  assert(
    Boolean(
      (sec121?.content || "").includes("1. IDENTIFICAR") &&
        (sec121?.content || "").includes("2. INVOLUCRAR") &&
        (sec121?.content || "").includes("3. FORMAR") &&
        (sec121?.content || "").includes("4. ACOMPAÑAR") &&
        (sec121?.content || "").includes("5. ASIGNAR") &&
        (sec121?.content || "").includes("6. EVALUAR") &&
        (sec121?.content || "").includes("7. MULTIPLICAR")
    ),
    "Metodología formal de desarrollo de líderes en 7 pasos (Identificar a Multiplicar)"
  );

  // Test 22: Objetivo formativo de formar formadores
  const sec122 = allSections.find((s) => s.sectionNumber === "12.2");
  assert(
    Boolean(((sec122?.title || "") + (sec122?.content || "")).includes("No Seguidores, sino Formadores")),
    "Objetivo teológico claro: formar formadores y no acumular seguidores"
  );

  // Test 23: Escuela de Líderes (6 meses, 2 clases/semana, 3 niveles)
  const sec192 = allSections.find((s) => s.sectionNumber === "19.2");
  assert(
    Boolean(
      (sec192?.content || "").includes("seis (6) meses") &&
        (sec192?.content || "").includes("dos (2) clases por semana") &&
        (sec192?.content || "").includes("NIVEL I") &&
        (sec192?.content || "").includes("NIVEL II") &&
        (sec192?.content || "").includes("NIVEL III") &&
        (sec192?.content || "").includes("NO constituye por sí mismo credencial u ordenación")
    ),
    "Escuela de Líderes estructurada en 6 meses, 2 clases/semana, 3 niveles (Certificado != Ordenación)"
  );

  // Test 24: Plena participación de las mujeres en todo el ministerio
  const sec141 = allSections.find((s) => s.sectionNumber === "14.1");
  assert(
    Boolean(
      (sec141?.content || "").includes("Predicar y enseñar") &&
        (sec141?.content || "").includes("liderazgo y coordinación") &&
        (sec141?.content || "").includes("cuerpo diaconal y pastoral") &&
        (sec141?.content || "").includes("credenciales ministeriales oficiales") &&
        (sec141?.content || "").includes("ordenadas al sagrado ministerio")
    ),
    "Plena participación ministerial de las mujeres (predicación, enseñanza, liderazgo, credenciales y ordenación)"
  );

  // Test 25: Ministerios de hombres y mujeres sin carácter restrictivo
  const sec142 = allSections.find((s) => s.sectionNumber === "14.2");
  assert(
    Boolean((sec142?.content || "").includes("representan una limitación o confinamiento segregatorio")),
    "Ministerios específicos de hombres y mujeres definidos sin restricción para otras áreas"
  );

  // Test 26: Dones espirituales con orden y profecía libre de coerción
  const sec171 = allSections.find((s) => s.sectionNumber === "17.1");
  const sec172 = allSections.find((s) => s.sectionNumber === "17.2");
  assert(
    Boolean(
      (sec171?.content || "").includes("orden, decencia, edificación mutua") &&
        (sec172?.content || "").includes("subordinada absolutamente a la autoridad infalible de las Sagradas Escrituras") &&
        (sec172?.content || "").includes("terminantemente prohibido utilizar supuestas profecías")
    ),
    "Dones espirituales operan con orden bíblico y profecía subordinada a la Escritura y libre de coerción"
  );

  // Test 27: Protección infantil y denuncia obligatoria N.J.S.A. 9:6-8.10
  const sec152 = allSections.find((s) => s.sectionNumber === "15.2");
  assert(
    Boolean(
      (sec152?.content || "").includes("N.J.S.A. 9:6-8.10") &&
        (sec152?.content || "").includes("1-877-NJ-ABUSE") &&
        (sec152?.content || "").includes("retrasar la denuncia legal")
    ),
    "Deber irrenunciable de reporte inmediato de abuso a autoridades bajo N.J.S.A. 9:6-8.10"
  );

  // Test 28: Prohibición expresa de control financiero privado
  const sec21 = allSections.find((s) => s.sectionNumber === "2.1");
  assert(
    Boolean((sec21?.content || "").includes("dinero o patrimonio personal")),
    "Prohibición formal de control o coacción sobre el dinero o patrimonio privado"
  );

  // Test 29: Prohibición de control médico privado
  assert(
    Boolean((sec21?.content || "").toLowerCase().includes("decisiones médicas")),
    "Prohibición formal de injerencia en decisiones o tratamientos médicos privados"
  );

  // Test 30: Prohibición de control matrimonial y noviazgo
  assert(
    Boolean((sec21?.content || "").includes("cónyuge, noviazgos legítimos o asuntos íntimos")),
    "Prohibición formal de control o coacción en matrimonios o noviazgos"
  );

  // Test 31: Prohibición de control laboral o de empleo
  assert(
    Boolean((sec21?.content || "").includes("empleo, profesión secular")),
    "Prohibición formal de intromisión en la elección laboral o profesión"
  );

  // Test 32: Prohibición de fórmulas coercitivas ("Dios me dijo que tienes que...")
  const sec22 = allSections.find((s) => s.sectionNumber === "2.2");
  assert(
    Boolean((sec22?.content || "").includes("Dios me dijo que tienes que")),
    "Prohibición explícita de manipulación profética coercitiva ('Dios me dijo que tienes que...')"
  );

  // Test 33: Diferenciación del Consejo Ministerial
  const sec211 = allSections.find((s) => s.sectionNumber === "21.1");
  assert(
    Boolean((sec211?.content || "").includes("CONSEJO MINISTERIAL") && (sec211?.content || "").includes("doctrinales, examen de credenciales")),
    "Consejo Ministerial delimitado a asuntos doctrinales, examen, credenciales y formación"
  );

  // Test 34: Diferenciación del Consejo de Gobierno
  assert(
    Boolean((sec211?.content || "").includes("CONSEJO DE GOBIERNO") && (sec211?.content || "").includes("fiduciario y corporativo")),
    "Consejo de Gobierno delimitado a administración corporativa, patrimonial y fiduciaria"
  );

  // Test 35: Diferenciación de la Asamblea
  assert(
    Boolean((sec211?.content || "").includes("ASAMBLEA CONGREGACIONAL") && (sec211?.content || "").includes("sin intervenir en la gestión administrativa cotidiana")),
    "Asamblea delimitada a competencias constitucionales exclusivas sin administración ministerial diaria"
  );

  // Test 36: Matriz de Roles de Liderazgo (10 roles)
  assert(
    LEADERSHIP_ROLE_MATRIX.length === 10,
    `Matriz de liderazgo contiene exactamente 10 roles institucionales (obtenidos: ${LEADERSHIP_ROLE_MATRIX.length})`
  );

  // Test 37: 10 Workflows Operativos Implementados (A al J)
  assert(
    MINISTRY_LEADERSHIP_WORKFLOWS.length === 10,
    `Implementados exactamente 10 workflows operativos A al J (obtenidos: ${MINISTRY_LEADERSHIP_WORKFLOWS.length})`
  );

  // Test 38: Catálogo de 8 Formularios Futuros Registrados
  assert(
    FUTURE_FORMS_CATALOG.length === 8,
    `Catálogo de formularios futuros contiene 8 formatos (obtenidos: ${FUTURE_FORMS_CATALOG.length})`
  );

  // Test 39: Trazabilidad rigurosa en 100% de las secciones
  const sectionsWithoutTrace = allSections.filter((s) => !s.decisionIds || s.decisionIds.length === 0);
  assert(
    sectionsWithoutTrace.length === 0,
    `100% de las secciones (${allSections.length}/${allSections.length}) poseen trazabilidad formal de decisiones`
  );

  // Test 40: Cero IDs de decisiones ficticias
  const validDecisionNumbers = new Set(decisions.map((d) => d.decisionNumber));
  const allUsedNumbers = allSections.flatMap((s) => s.decisionIds);
  const invalidNumbers = allUsedNumbers.filter((num) => !validDecisionNumbers.has(num));
  assert(
    invalidNumbers.length === 0,
    `Todos los IDs de decisiones son reales (inválidos: ${invalidNumbers.length})`
  );

  // Test 41: RBAC Server-side bloquea edición a usuario SOLO_LECTURA
  try {
    const rbacUpdateResult = updateInstitutionalDocument(
      {
        docId: "doc-ren-006",
        newTitle: "Manual Alterado Ilegítimamente",
        newContent: "Texto alterado",
        changeReason: "Intento ilegal",
        versionBump: "minor",
      },
      { id: "usr-readonly-001", name: "Auditor Externo", role: "SOLO_LECTURA" }
    );
    assert(!rbacUpdateResult.success, "RBAC Server-side bloquea actualización a rol SOLO_LECTURA");
  } catch (err) {
    assert(true, "RBAC Server-side bloqueó edición a usuario SOLO_LECTURA");
  }

  // Test 42: Buscador indexa y localiza REN-DOC-006
  const searchResults = searchRenacerKnowledge("Liderazgo Familias de Grupo");
  const foundInSearch = searchResults.some((r) => r.code === "REN-DOC-006" || r.id === "doc-ren-006");
  assert(foundInSearch, "Buscador de conocimiento indexa y localiza REN-DOC-006 por términos clave");

  // Test 43: Inmutabilidad de REN-DOC-001
  assert(
    doc001?.version === "1.0" && doc001?.status === "BORRADOR",
    "REN-DOC-001 permanece intacta (v1.0 BORRADOR NO ADOPTADA)"
  );

  // Test 44: Inmutabilidad de REN-DOC-002
  assert(
    doc002?.version === "0.1" && doc002?.status === "EN_REDACCION",
    "REN-DOC-002 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)"
  );

  // Test 45: Inmutabilidad de REN-DOC-003
  assert(
    doc003?.version === "0.1" && doc003?.status === "EN_REDACCION",
    "REN-DOC-003 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)"
  );

  // Test 46: Inmutabilidad de REN-DOC-004
  assert(
    doc004?.version === "0.1" && doc004?.status === "EN_REDACCION",
    "REN-DOC-004 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)"
  );

  // Test 47: Inmutabilidad de REN-DOC-005
  assert(
    doc005?.version === "0.1" && doc005?.status === "EN_REDACCION",
    "REN-DOC-005 permanece intacta (v0.1 EN_REDACCION NO ADOPTADA)"
  );

  // Test 48: 107 decisiones institucionales intactas
  assert(
    decisions.length === 107,
    `107 decisiones institucionales permanecen intactas (encontradas: ${decisions.length})`
  );

  // Test 49: Inventario administrativo reconoce REN-DOC-006 con contenido real
  const adminAudit = getDocumentInventoryAudit();
  const doc006Audit = adminAudit.find((d) => d.code === "REN-DOC-006");
  assert(
    Boolean(doc006Audit?.hasFullContent && doc006Audit?.completeness === "DOCUMENTO_PARCIAL"),
    "Inventario administrativo reconoce REN-DOC-006 con contenido real cargado"
  );

  console.log("\n-------------------------------------------------------");
  console.log(`TOTAL PRUEBAS EJECUTADAS: ${totalTests}`);
  console.log(`PRUEBAS PASADAS:         ${passedTests}`);
  console.log(`PRUEBAS FALLIDAS:        ${failedTests}`);
  console.log("-------------------------------------------------------\n");

  if (failedTests > 0) {
    process.exit(1);
  }
}

runMinistryLeadershipManualSuite().catch((err) => {
  console.error("Error fatal ejecutando suite de pruebas:", err);
  process.exit(1);
});
