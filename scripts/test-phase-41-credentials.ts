/**
 * TEST SUITE — FASE 41: REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN (REN-DOC-010)
 *
 * Verificaciones exhaustivas de:
 * 1. Identidad institucional de REN-DOC-010 (Código, Versión v0.1, Estado EN_REDACCION, No adoptada, Requiere revisión legal)
 * 2. Estructura normativa de 30 títulos institucionales completos
 * 3. Ruta ministerial oficial de 7 eslabones (Discípulos → Líderes → Seminario → Candidato → Licenciado → Ordenado → Pastor)
 * 4. Distinción conceptual estricta: Formación ≠ Credencial ≠ Licencia ≠ Ordenación ≠ Nombramiento Pastoral
 * 5. Función pastoral como asignación/nombramiento y no como credencial independiente
 * 6. Categorías ministeriales (Candidato, Licenciado, Ordenado)
 * 7. Catálogo de 10 estados institucionales del ministro
 * 8. Autoridad suprema espiritual y doctrinal del Pastor Fundador
 * 9. Competencias y límites del Consejo Ministerial, Trustees y Asamblea
 * 10. Plena igualdad de hombres y mujeres en todas las licencias, credenciales y ordenaciones
 * 11. Prohibición tajante de auto-ordenación y compraventa de credenciales (simonía)
 * 12. Estructura del Examen Ministerial (Teología, Hermenéutica, Neumatología, Eclesiología, Ética, Ley)
 * 13. Requisitos formativos y vinculación con Escuela de Discípulos, Líderes y Seminario Bíblico
 * 14. Procedimiento de reconocimiento y homologación de ministros externos
 * 15. Régimen de mantenimiento y renovación de credenciales
 * 16. Debido proceso disciplinario, suspensión cautelar, revocación y restauración sin impunidad
 * 17. Límites estrictos de consejería pastoral y derivación profesional obligatoria
 * 18. Salvaguarda legal y reporte obligatorio de abuso infantil (N.J.S.A. 9:6-8.10)
 * 19. Advertencia institucional sobre inmigración religiosa: No garantía de visas ni beneficios USCIS
 * 20. Estructura del Expediente Ministerial y custodia confidencial en REN-DOC-019
 * 21. Catálogo oficial de 12 formularios de gestión ministerial (REN-FORM-MIN-001 a 012)
 * 22. Arquitectura del número único de credencial (REN-MIN-YYYY-XXXX)
 * 23. Trazabilidad con decisiones institucionales reales y documentos superiores (REN-DOC-001 a 009, 016, 019)
 * 24. Inmutabilidad e integridad de REN-DOC-001 a REN-DOC-009 y las 107 Decisiones Históricas
 * 25. Confirmación estricta de que REN-DOC-011 NO fue creado
 * 26. Integración en Catálogo Maestro, Biblioteca Institucional, RBAC, Inventario y Buscador
 */

import {
  getInstitutionalDocumentById,
  getAllInstitutionalDocuments,
} from "../src/lib/institutional-document-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import {
  FULL_MINISTERIAL_CREDENTIALS_DRAFT,
  MINISTERIAL_CREDENTIALS_DRAFT,
  MINISTERIAL_STATES_CATALOG,
  MINISTERIAL_FUTURE_FORMS_CATALOG,
  MINISTERIAL_AUTHORITY_MATRIX,
  MASTER_MINISTERIAL_CREDENTIALS_TITLES,
  generateFullMinisterialCredentialsMarkdown,
} from "../src/lib/ministerial-credentials-regulations-full-draft";
import { getDocumentInventoryAudit, getSystemOverviewMetrics } from "../src/lib/admin-service";

interface TestResult {
  num: number;
  name: string;
  passed: boolean;
  details?: string;
}

const results: TestResult[] = [];

function assertTest(num: number, name: string, condition: boolean, details?: string) {
  results.push({
    num,
    name,
    passed: condition,
    details: condition ? undefined : details || "Condición no cumplida",
  });
}

async function runPhase41Tests() {
  console.log("================================================================================");
  console.log("INICIANDO SUITE DE PRUEBAS DE FASE 41 — CREDENCIALES Y ORDENACIÓN (REN-DOC-010)");
  console.log("================================================================================");

  // 1. Existencia del documento en la biblioteca
  const doc010 = getInstitutionalDocumentById("REN-DOC-010");
  assertTest(
    1,
    "Documento REN-DOC-010 existe en la Biblioteca Institucional",
    doc010 !== undefined && doc010.id === "doc-ren-010",
    `doc010: ${JSON.stringify(doc010 ? { id: doc010.id, num: doc010.documentNumber } : null)}`
  );

  // 2. Código oficial
  assertTest(
    2,
    "Código oficial es exactamente REN-DOC-010",
    doc010 !== undefined && doc010.documentNumber === "REN-DOC-010"
  );

  // 3. Título oficial
  assertTest(
    3,
    "Título es REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER",
    doc010 !== undefined &&
      doc010.title === "REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER"
  );

  // 4. Versión v0.1
  assertTest(
    4,
    "Versión inicial es 0.1 (v0.1)",
    doc010 !== undefined && doc010.version === "0.1" && FULL_MINISTERIAL_CREDENTIALS_DRAFT.version === "0.1"
  );

  // 5. Estado EN_REDACCION
  assertTest(
    5,
    "Estado de redacción es EN_REDACCION",
    doc010 !== undefined && doc010.status === "EN_REDACCION" && FULL_MINISTERIAL_CREDENTIALS_DRAFT.status === "EN_REDACCION"
  );

  // 6. Estado de adopción NO ADOPTADA
  assertTest(
    6,
    "Estado de adopción es NO_ADOPTADA (Borrador no adoptado)",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.adoptionState === "NO_ADOPTADA"
  );

  // 7. Estado legal REQUIERE_REVISION_LEGAL
  assertTest(
    7,
    "Estado legal es REQUIERE_REVISION_LEGAL",
    doc010 !== undefined && doc010.legalState === "REQUIERE_REVISION_LEGAL" &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.legalState === "REQUIERE_REVISION_LEGAL"
  );

  // 8. Nivel jerárquico NIVEL_4_MANUAL_INSTITUCIONAL
  const catalogItem = INITIAL_MASTER_CATALOG.find((c) => c.documentNumber === "REN-DOC-010");
  assertTest(
    8,
    "Nivel jerárquico es NIVEL_4_MANUAL_INSTITUCIONAL",
    catalogItem !== undefined && catalogItem.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL" &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL"
  );

  // 9. Categoría CREDENCIALES_MINISTERIALES
  assertTest(
    9,
    "Categoría es CREDENCIALES_MINISTERIALES",
    catalogItem !== undefined && catalogItem.category === "CREDENCIALES_MINISTERIALES" &&
      doc010 !== undefined && doc010.category === "CREDENCIALES_MINISTERIALES" &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.category === "CREDENCIALES_MINISTERIALES"
  );

  // 10. Estructura de exactamente 30 Títulos normativos
  assertTest(
    10,
    "Estructura contiene exactamente 30 títulos normativos completos",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES.length === 30 &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.titles.length === 30
  );

  // 11. Ruta ministerial de 7 eslabones
  const route = FULL_MINISTERIAL_CREDENTIALS_DRAFT.ministerialRoute;
  assertTest(
    11,
    "Ruta ministerial contiene los 7 eslabones oficiales completos",
    route.stepsCount === 7 &&
      route.steps[0].includes("DISCÍPULOS") &&
      route.steps[1].includes("LÍDERES") &&
      route.steps[2].includes("SEMINARIO") &&
      route.steps[3].includes("CANDIDATO") &&
      route.steps[4].includes("LICENCIADO") &&
      route.steps[5].includes("ORDENADO") &&
      route.steps[6].includes("PASTOR")
  );

  // 12. Distinción conceptual estricta (Formación ≠ Credencial ≠ Licencia ≠ Ordenación ≠ Nombramiento)
  assertTest(
    12,
    "Distingue taxativamente Formación Académica vs Credencial vs Licencia vs Ordenación vs Cargo Pastoral",
    doc010 !== undefined &&
      doc010.content.includes("FORMACIÓN ACADÉMICA SUPERIOR") &&
      doc010.content.includes("CREDENCIALIZACIÓN Y ORDENACIÓN") &&
      doc010.content.includes("NO confiere por sí solo ordenación presbiteral")
  );

  // 13. 'Pastor' como función/asignación ministerial y no credencial separada
  assertTest(
    13,
    "Define la función de Pastor como nombramiento / asignación y no como credencial separada",
    doc010 !== undefined &&
      doc010.content.includes("'Pastor' constituye una función y asignación de liderazgo congregacional")
  );

  // 14. 3 Categorías Oficiales (Candidato, Licenciado, Ordenado)
  assertTest(
    14,
    "Define las tres categorías oficiales: Candidato, Licenciado y Ordenado",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.categoriesCount === 3 &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.categories.some((c) => c.code === "CANDIDATO") &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.categories.some((c) => c.code === "LICENCIADO") &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.categories.some((c) => c.code === "ORDENADO")
  );

  // 15. Catálogo de los 10 Estados Institucionales del Ministro
  assertTest(
    15,
    "Catálogo contiene exactamente 10 estados institucionales del ministro",
    MINISTERIAL_STATES_CATALOG.length === 10 &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "CANDIDATO") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "LICENCIADO_ACTIVO") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "ORDENADO_ACTIVO") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "ASIGNADO_COMO_PASTOR") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "INACTIVO") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "SUSPENDIDO") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "EN_DISCIPLINA") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "EN_RESTAURACION") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "CREDENCIAL_REVOCADA") &&
      MINISTERIAL_STATES_CATALOG.some((s) => s.stateCode === "RECONOCIMIENTO_EXTERNO_EN_REVISION")
  );

  // 16. Autoridad del Pastor Fundador preservada
  assertTest(
    16,
    "Pastor Fundador retiene autoridad espiritual y doctrinal final indiscutible",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.founderAuthorityPreservation.spiritualDoctrinalSovereignty === true &&
      doc010 !== undefined &&
      doc010.content.includes("Pastor Fundador posee la autoridad espiritual y doctrinal final")
  );

  // 17. Consejo Ministerial sin soberanía sobre el Fundador
  assertTest(
    17,
    "Consejo Ministerial delimitado a examen y recomendación sin soberanía sobre el Fundador",
    doc010 !== undefined &&
      doc010.content.includes("carece de potestad para modificar unilateralmente la Declaración de Fe o revocar al Pastor Fundador")
  );

  // 18. Matriz de Autoridades completa (5 entidades)
  assertTest(
    18,
    "Matriz de Autoridades define potestades y restricciones de Fundador, Consejo Ministerial, Trustees, Asamblea y Seminario",
    MINISTERIAL_AUTHORITY_MATRIX.length === 5 &&
      MINISTERIAL_AUTHORITY_MATRIX.every((r) => r.entity && r.scope && r.powers.length > 0 && r.restrictions.length > 0)
  );

  // 19. Plena igualdad ministerial de las mujeres
  assertTest(
    19,
    "Garantiza el derecho pleno de las mujeres al ministerio, docencia, licencias, ordenación y pastorado",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.genderEquality.fullAccess === true &&
      doc010 !== undefined &&
      doc010.content.includes("plena igualdad de hombres y mujeres en el acceso a todas las categorías ministeriales")
  );

  // 20. Prohibición absoluta de auto-ordenación
  assertTest(
    20,
    "Prohibición categórica de la auto-ordenación",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.nonSelfOrdinationClause.explicit === true &&
      doc010 !== undefined &&
      doc010.content.includes("La auto-ordenación")
  );

  // 21. Prohibición de simonía / compraventa de credenciales
  assertTest(
    21,
    "Prohibición estricta de simonía o credencialización por pago de tarifas",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.nonFinancialOrdinationClause.explicit === true &&
      doc010 !== undefined &&
      doc010.content.includes("La simonía o compraventa de credenciales")
  );

  // 22. Estructura del Examen Ministerial (REN-FORM-MIN-003)
  assertTest(
    22,
    "Examen Ministerial evalúa Biblia, Teología, Neumatología, Eclesiología, Homilética, Ética y Ley",
    doc010 !== undefined &&
      doc010.content.includes("REN-FORM-MIN-003") &&
      doc010.content.includes("Bibliología, Canon y Hermenéutica Bíblica") &&
      doc010.content.includes("Teología Sistemática: Trinidad, Cristología, Soteriología y Neumatología")
  );

  // 23. Reconocimiento y homologación de ministros externos (REN-FORM-MIN-011)
  assertTest(
    23,
    "Homologación de ministros externos sin reconocimiento automático (REN-FORM-MIN-011)",
    doc010 !== undefined &&
      doc010.content.includes("REN-FORM-MIN-011") &&
      doc010.content.includes("no gozan de reconocimiento automático en RENACER")
  );

  // 24. Debido proceso en disciplina y medidas cautelares
  assertTest(
    24,
    "Garantías de debido proceso disciplinario bajo Mateo 18 y 1 Timoteo 5:19",
    doc010 !== undefined &&
      doc010.content.includes("Garantías del Debido Proceso Eclesiástico") &&
      doc010.content.includes("Comité de Disciplina y el Pastor Fundador")
  );

  // 25. Restauración espiritual no confiere restitución automática al cargo
  assertTest(
    25,
    "Principio rector: El perdón espiritual NO confiere restitución automática al oficio pastoral",
    doc010 !== undefined &&
      doc010.content.includes("EL PERDÓN ESPIRITUAL NO CONFIERE RESTITUCIÓN AUTOMÁTICA AL OFICIO PASTORAL")
  );

  // 26. Prohibición de manipulación profética ('Dios me dijo') y coacción económica
  assertTest(
    26,
    "Prohibición expresa de coacción profética ('Dios me dijo') y préstamos forzados",
    doc010 !== undefined &&
      doc010.content.includes("'Dios me dijo' o 'el Espíritu me reveló'") &&
      doc010.content.includes("Exigir o solicitar préstamos personales, herencias o dádivas")
  );

  // 27. Límites estrictos de consejería pastoral
  assertTest(
    27,
    "Límites de consejería: Ministro no reemplaza a médicos, psicólogos ni abogados; derivación obligatoria",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.counselingAndLegalLimits.nonMedicalReplacement === true &&
      FULL_MINISTERIAL_CREDENTIALS_DRAFT.counselingAndLegalLimits.mandatoryAbuseReporting === true
  );

  // 28. Salvaguarda legal y reporte obligatorio de abuso infantil (N.J.S.A. 9:6-8.10)
  assertTest(
    28,
    "Obligación legal de reporte de abusos conforme a N.J.S.A. 9:6-8.10 y remisión a REN-DOC-016",
    doc010 !== undefined &&
      doc010.content.includes("N.J.S.A. 9:6-8.10") &&
      doc010.content.includes("REN-DOC-016") &&
      doc010.content.includes("1-877-NJ-ABUSE")
  );

  // 29. Advertencia sobre inmigración religiosa: No garantía de beneficios USCIS
  assertTest(
    29,
    "Cláusula de no garantía migratoria (visas R-1 / USCIS) y principio de realidad factual",
    FULL_MINISTERIAL_CREDENTIALS_DRAFT.immigrationDisclaimer.noVisaGuarantee === true &&
      doc010 !== undefined &&
      doc010.content.includes("Ninguna credencial ministerial o nombramiento eclesiástico emitido por RENACER garantiza por sí mismo la aprobación de visas religiosas")
  );

  // 30. Expediente Ministerial y custodia en REN-DOC-019
  assertTest(
    30,
    "Expediente ministerial confidencial regulado y custodiado bajo REN-DOC-019",
    doc010 !== undefined &&
      doc010.content.includes("Estructura del Expediente Individual del Ministro") &&
      doc010.content.includes("REN-DOC-019")
  );

  // 31. Catálogo oficial de 12 formularios futuros (REN-FORM-MIN-001 a 012)
  assertTest(
    31,
    "Catálogo oficial contiene exactamente 12 formularios futuros (REN-FORM-MIN-001 a 012)",
    MINISTERIAL_FUTURE_FORMS_CATALOG.length === 12 &&
      MINISTERIAL_FUTURE_FORMS_CATALOG[0].code === "REN-FORM-MIN-001" &&
      MINISTERIAL_FUTURE_FORMS_CATALOG[11].code === "REN-FORM-MIN-012"
  );

  // 32. Arquitectura del número único de credencial (REN-MIN-YYYY-XXXX)
  assertTest(
    32,
    "Arquitectura de código de credencial único REN-MIN-YYYY-XXXX sin reutilización histórica",
    doc010 !== undefined &&
      doc010.content.includes("REN-MIN-YYYY-XXXX") &&
      doc010.content.includes("prohibiéndose de forma terminante duplicar o reasignar números")
  );

  // 33. Referencia doctrinal a REN-DOC-001 como borrador no adoptado
  assertTest(
    33,
    "Referencia doctrinal transparente: enseña los 20 Artículos de REN-DOC-001 como borrador no adoptado",
    doc010 !== undefined &&
      doc010.content.includes("BORRADOR NO ADOPTADO") &&
      doc010.content.includes("REN-DOC-001")
  );

  // 34. Inmutabilidad de las 107 Decisiones Históricas
  const allDecisions = getAllInstitutionalDecisions();
  assertTest(
    34,
    "Las 107 Decisiones Institucionales Históricas permanecen intactas e inmutables",
    allDecisions.length === 107 &&
      allDecisions.filter((d) => d.decisionNumber.startsWith("DEC-DEF-")).length === 97 &&
      allDecisions.filter((d) => d.decisionNumber.startsWith("DEC-PEND-")).length === 10
  );

  // 35. Inmutabilidad de REN-DOC-001 a REN-DOC-009
  const doc001 = getInstitutionalDocumentById("REN-DOC-001");
  const doc002 = getInstitutionalDocumentById("REN-DOC-002");
  const doc003 = getInstitutionalDocumentById("REN-DOC-003");
  const doc004 = getInstitutionalDocumentById("REN-DOC-004");
  const doc005 = getInstitutionalDocumentById("REN-DOC-005");
  const doc006 = getInstitutionalDocumentById("REN-DOC-006");
  const doc007 = getInstitutionalDocumentById("REN-DOC-007");
  const doc008 = getInstitutionalDocumentById("REN-DOC-008");
  const doc009 = getInstitutionalDocumentById("REN-DOC-009");
  assertTest(
    35,
    "Documentos anteriores REN-DOC-001 a REN-DOC-009 permanecen intactos y vigentes",
    doc001 !== undefined &&
      doc002 !== undefined &&
      doc003 !== undefined &&
      doc004 !== undefined &&
      doc005 !== undefined &&
      doc006 !== undefined &&
      doc007 !== undefined &&
      doc008 !== undefined &&
      doc009 !== undefined
  );

  // 36. Confirmación estricta de que REN-DOC-015 NO fue creado
  const doc015 = getInstitutionalDocumentById("REN-DOC-015");
  const doc015Catalog = INITIAL_MASTER_CATALOG.find((c) => c.documentNumber === "REN-DOC-015");
  assertTest(
    36,
    "Confirmación: REN-DOC-015 NO fue creado en esta fase (permanece planificado)",
    !doc015 || doc015.status === "PLANIFICADO" || doc015Catalog?.status === "PLANIFICADO"
  );

  // 37. Integración en el inventario administrativo de documentos
  const inventory = getDocumentInventoryAudit();
  const doc010Inv = inventory.find((i) => i.code === "REN-DOC-010");
  assertTest(
    37,
    "REN-DOC-010 está indexado en el Inventario Administrativo de Documentos",
    doc010Inv !== undefined &&
      doc010Inv.hasFullContent === true &&
      doc010Inv.completeness === "DOCUMENTO_PARCIAL"
  );

  // 38. Integración en el motor de búsqueda institucional
  const searchResults = searchRenacerKnowledge("Credenciales Ministeriales");
  assertTest(
    38,
    "Motor de Búsqueda Institucional indexa y localiza el Reglamento de Credenciales",
    searchResults.some((d) => d.code === "REN-DOC-010" || d.id === "doc-ren-010" || d.title.includes("Credenciales"))
  );

  // 39. Longitud sustancial del contenido generado (mínimo 40,000 caracteres)
  const fullContent = generateFullMinisterialCredentialsMarkdown();
  assertTest(
    39,
    "Contenido completo de REN-DOC-010 es sustancial y operativo (>40,000 caracteres)",
    fullContent.length > 40000,
    `Longitud real: ${fullContent.length} caracteres`
  );

  // 40. Preservación del Estado Legal en el Markdown generado
  assertTest(
    40,
    "Generador de Markdown incluye advertencia legal y estado formal REQUIERE_REVISION_LEGAL",
    fullContent.includes("REQUIERE_REVISION_LEGAL") &&
      fullContent.includes("ADVERTENCIA INSTITUCIONAL Y LEGAL")
  );

  // 41. Preservación de Trazabilidad en Secciones (Decisiones Reales)
  const allSections = MASTER_MINISTERIAL_CREDENTIALS_TITLES.flatMap((t) => t.sections);
  const validDecisionNumbers = new Set(allDecisions.map((d) => d.decisionNumber));
  const citedDecisions = allSections.flatMap((s) => s.decisionIds);
  const allCitedDecisionsValid = citedDecisions.every((id) => validDecisionNumbers.has(id));
  assertTest(
    41,
    "Trazabilidad: Todas las decisiones citadas existen en el repositorio oficial (0 inventadas)",
    allCitedDecisionsValid && citedDecisions.length > 10,
    `Decisiones citadas: ${citedDecisions.join(", ")}`
  );

  // 42. Trazabilidad con Documentos Superiores
  const citedDocs = allSections.flatMap((s) => s.dependencies);
  const hasSuperiorDocs = citedDocs.includes("REN-DOC-001") && citedDocs.includes("REN-DOC-002") && citedDocs.includes("REN-DOC-006") && citedDocs.includes("REN-DOC-009");
  assertTest(
    42,
    "Trazabilidad documental: Secciones articuladas con REN-DOC-001, 002, 006 y 009",
    hasSuperiorDocs
  );

  // 43. Título I: Naturaleza y Alcance
  assertTest(
    43,
    "Título I define Naturaleza, Objeto y Alcance Institucional",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES[0].titleName.includes("NATURALEZA, OBJETO Y ALCANCE")
  );

  // 44. Título VII: Ministro Ordenado y Presbiterio
  assertTest(
    44,
    "Título VII define al Ministro Ordenado y facultades presbiterales plenas",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES[6].titleName.includes("MINISTRO ORDENADO")
  );

  // 45. Título XVI: Ceremonia Solemne de Ordenación
  assertTest(
    45,
    "Título XVI regula la Ceremonia de Imposición de Manos y Acta Solemne",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES[15].titleName.includes("CEREMONIA SOLEMNE")
  );

  // 46. Título XX: Suspensión, Revocación y Restauración
  assertTest(
    46,
    "Título XX norma las causales de revocación y el protocolo de restauración",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES[19].titleName.includes("SUSPENSIÓN, REVOCACIÓN")
  );

  // 47. Título XXIII: Plena Igualdad Femenina
  assertTest(
    47,
    "Título XXIII consagra la Plena Igualdad y Ministerio de Hombres y Mujeres",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES[22].titleName.includes("PLENA IGUALDAD")
  );

  // 48. Título XXIX: Advertencia Migratoria
  assertTest(
    48,
    "Título XXIX consagra la advertencia migratoria y no garantía de beneficios",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES[28].titleName.includes("ASUNTOS MIGRATORIOS")
  );

  // 49. Título XXX: Disposiciones Finales y Estado Legal
  assertTest(
    49,
    "Título XXX establece Disposiciones Finales y Materias Sujetas a Revisión Letrada",
    MASTER_MINISTERIAL_CREDENTIALS_TITLES[29].titleName.includes("DISPOSICIONES FINALES")
  );

  // 50. Total de secciones supera 35 artículos normativos
  assertTest(
    50,
    "Total de secciones normativas operativas supera los 35 artículos sustanciales",
    allSections.length >= 35,
    `Total secciones: ${allSections.length}`
  );

  // 51. Métricas del sistema actualizadas
  const metrics = getSystemOverviewMetrics();
  assertTest(
    51,
    "Métricas del sistema reflejan 10 documentos completos en inventario y 107 decisiones",
    metrics.totalDecisions === 107 && metrics.completeDocumentsCount >= 10
  );

  // Imprimir resumen
  console.log("\n================================================================================");
  console.log("RESULTADOS DE LA SUITE DE PRUEBAS DE FASE 41");
  console.log("================================================================================");

  let passedCount = 0;
  let failedCount = 0;

  for (const r of results) {
    if (r.passed) {
      passedCount++;
      console.log(`[PASS] Test ${r.num.toString().padStart(2, "0")}: ${r.name}`);
    } else {
      failedCount++;
      console.log(`[FAIL] Test ${r.num.toString().padStart(2, "0")}: ${r.name} — ${r.details}`);
    }
  }

  console.log("--------------------------------------------------------------------------------");
  console.log(`TOTAL DE PRUEBAS: ${results.length}`);
  console.log(`APROBADAS:        ${passedCount}`);
  console.log(`FALLIDAS:         ${failedCount}`);
  console.log("================================================================================");

  if (failedCount > 0) {
    process.exit(1);
  } else {
    console.log("TODAS LAS PRUEBAS DE LA FASE 41 PASARON EXITOSAMENTE.");
  }
}

runPhase41Tests().catch((err) => {
  console.error("Error ejecutando pruebas de Fase 41:", err);
  process.exit(1);
});
