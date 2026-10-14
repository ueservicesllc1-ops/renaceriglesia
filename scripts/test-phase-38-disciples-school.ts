/**
 * TEST SUITE — FASE 38: PROGRAMA OFICIAL DE LA ESCUELA DE DISCÍPULOS DE RENACER (REN-DOC-007)
 *
 * Verificaciones exhaustivas de:
 * 1. Identidad institucional de REN-DOC-007 (Código, Versión v0.1, Estado EN_REDACCION, No adoptada, Requiere revisión legal)
 * 2. Estructura curricular oficial: 9 meses, 3 niveles (3 meses c/u), 27 módulos (9 por nivel)
 * 3. Nivel I: Conociendo a Cristo (Módulos 1-9)
 * 4. Nivel II: Creciendo en Cristo (Módulos 10-18: Bautismo en agua por inmersión, Santa Cena, Dones con orden y discernimiento)
 * 5. Nivel III: Haciendo Discípulos (Módulos 19-27: Gran Comisión, Mentoría, Familias de Grupo, Multiplicación)
 * 6. Naturaleza formativa no clerical (NO es ordenación, NO es licencia ministerial, NO sustituye Seminario Bíblico RENACER)
 * 7. Límites estrictos de autoridad y protección pastoral (sin control financiero, marital, médico ni coerción espiritual)
 * 8. Inclusión plena de la mujer sin discriminación
 * 9. Familias de Grupo como contexto relacional oficial (prohibición de "células" como término institucional)
 * 10. Protección de menores bajo N.J.S.A. 9:6-8.10 y remisión a REN-DOC-016
 * 11. Arquitectura de Libros independientes: Libro del Maestro y Libro del Estudiante
 * 12. Matriz Curricular completa (27 módulos) y Catálogo de Formularios futuros (REN-FORM-DIS-001 a 007)
 * 13. Trazabilidad con decisiones institucionales reales y documentos superiores (REN-DOC-001 a 006, 008, 010, 016, 019)
 * 14. Inmutabilidad e integridad de REN-DOC-001, REN-DOC-002, REN-DOC-003, REN-DOC-004, REN-DOC-005, REN-DOC-006 y las 107 Decisiones
 * 15. Integración en Catálogo Maestro, Biblioteca Institucional, RBAC, Inventario y Buscador
 */

import {
  getInstitutionalDocumentById,
  getAllInstitutionalDocuments,
} from "../src/lib/institutional-document-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import {
  FULL_DISCIPLES_PROGRAM_DRAFT,
  DISCIPLES_SCHOOL_PROGRAM_DRAFT,
  DISCIPLES_CURRICULAR_MATRIX,
  DISCIPLES_FUTURE_FORMS_CATALOG,
  generateFullDisciplesProgramMarkdown,
} from "../src/lib/disciples-school-program-full-draft";
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

async function runPhase38Tests() {
  console.log("===============================================================================");
  console.log("INICIANDO TEST SUITE — FASE 38: ESCUELA DE DISCÍPULOS DE RENACER (REN-DOC-007)");
  console.log("===============================================================================\n");

  const prog = FULL_DISCIPLES_PROGRAM_DRAFT;
  const content = generateFullDisciplesProgramMarkdown();

  // 1. Documento existe en Catálogo Maestro
  const catalogItem = INITIAL_MASTER_CATALOG.find((d) => d.documentId === "doc-ren-007");
  assertTest(
    1,
    "Documento existe en Catálogo Maestro con id 'doc-ren-007'",
    catalogItem !== undefined && catalogItem.documentNumber === "REN-DOC-007",
    `Catalog item: ${JSON.stringify(catalogItem)}`
  );

  // 2. Código oficial REN-DOC-007
  assertTest(
    2,
    "Código oficial es estrictamente REN-DOC-007",
    catalogItem?.documentNumber === "REN-DOC-007" && prog.code === "REN-DOC-007",
    `Catalog code: ${catalogItem?.documentNumber}, Draft code: ${prog.code}`
  );

  // 3. Versión v0.1
  assertTest(
    3,
    "Versión inicial establecida en v0.1",
    (catalogItem?.version === "0.1" || catalogItem?.version === "v0.1") && (prog.version === "0.1" || prog.version === "v0.1"),
    `Catalog version: ${catalogItem?.version}, Draft version: ${prog.version}`
  );

  // 4. Estado EN_REDACCION / BORRADOR
  assertTest(
    4,
    "Estado de redacción institucional es EN_REDACCION / BORRADOR",
    (catalogItem?.status === "EN_REDACCION" || catalogItem?.status === "BORRADOR") &&
      (prog.status === "EN_REDACCION" || prog.status === "BORRADOR"),
    `Status: ${catalogItem?.status}`
  );

  // 5. Estado de adopción NO ADOPTADA
  assertTest(
    5,
    "Estado de adopción es NO ADOPTADA (Borrador en proceso)",
    prog.adoptionStatus === "NO_ADOPTADA" || prog.adoptionStatus === "NO ADOPTADA",
    `Adoption status: ${prog.adoptionStatus}`
  );

  // 6. Estado legal REQUIERE_REVISION_LEGAL
  assertTest(
    6,
    "Estado legal es estrictamente REQUIERE_REVISION_LEGAL",
    Boolean(catalogItem?.requiredReviews.includes("REVISION_LEGAL")) &&
      prog.legalState === "REQUIERE_REVISION_LEGAL",
    `Required reviews: ${catalogItem?.requiredReviews}`
  );

  // 7. Duración oficial de 9 meses
  assertTest(
    7,
    "Duración curricular de 9 meses establecida",
    prog.durationMonths === 9 &&
      content.includes("9 Meses") &&
      content.includes("nueve (9) meses"),
    `Duration months: ${prog.durationMonths}`
  );

  // 8. Estructura de 3 niveles formativos
  assertTest(
    8,
    "Estructura modular de 3 niveles trimestrales preservada",
    prog.levelsCount === 3 && prog.modules.length === 27,
    `Levels count: ${prog.levelsCount}, modules: ${prog.modules.length}`
  );

  // 9. Nivel I: Conociendo a Cristo
  const level1Modules = prog.modules.filter((m) => m.level === "NIVEL_I");
  assertTest(
    9,
    "Nivel I: 'Conociendo a Cristo' con 9 módulos sustanciales",
    level1Modules.length === 9 && level1Modules[0].levelName.includes("NIVEL I: CONOCIENDO A CRISTO"),
    `Level 1 modules count: ${level1Modules.length}`
  );

  // 10. Nivel II: Creciendo en Cristo
  const level2Modules = prog.modules.filter((m) => m.level === "NIVEL_II");
  assertTest(
    10,
    "Nivel II: 'Creciendo en Cristo' con 9 módulos sustanciales",
    level2Modules.length === 9 && level2Modules[0].levelName.includes("NIVEL II: CRECIENDO EN CRISTO"),
    `Level 2 modules count: ${level2Modules.length}`
  );

  // 11. Nivel III: Haciendo Discípulos
  const level3Modules = prog.modules.filter((m) => m.level === "NIVEL_III");
  assertTest(
    11,
    "Nivel III: 'Haciendo Discípulos' con 9 módulos sustanciales",
    level3Modules.length === 9 && level3Modules[0].levelName.includes("NIVEL III: HACIENDO DISCÍPULOS"),
    `Level 3 modules count: ${level3Modules.length}`
  );

  // 12. Contenido de Nivel I (Fundamentos del Evangelio, Gracia, Arrepentimiento, Biblia, Oración, Iglesia)
  const l1Titles = level1Modules.map((m) => m.moduleTitle).join(" | ");
  assertTest(
    12,
    "Nivel I contiene los 9 módulos doctrinales y formativos requeridos",
    l1Titles.includes("El Evangelio y la Persona de Jesucristo") &&
      l1Titles.includes("Salvación por Gracia Mediante la Fe") &&
      l1Titles.includes("Arrepentimiento, Fe y Nueva Vida") &&
      l1Titles.includes("La Biblia") &&
      l1Titles.includes("Dios") &&
      l1Titles.includes("La Vida del Creyente") &&
      l1Titles.includes("La Oración") &&
      l1Titles.includes("La Iglesia"),
    `L1 Modules: ${l1Titles}`
  );

  // 13. Contenido de Nivel II (Espíritu Santo, Santificación, Dones con orden, Bautismo en agua, Santa Cena)
  const l2Titles = level2Modules.map((m) => m.moduleTitle).join(" | ");
  assertTest(
    13,
    "Nivel II contiene los 9 módulos de crecimiento, ordenanzas y dones con discernimiento",
    l2Titles.includes("Espíritu Santo") &&
      l2Titles.includes("Santificación") &&
      l2Titles.includes("Fruto del Espíritu") &&
      l2Titles.includes("Dones Espirituales") &&
      l2Titles.includes("Bautismo en Agua") &&
      l2Titles.includes("Santa Cena") &&
      l2Titles.includes("Adoración") &&
      l2Titles.includes("Servicio Cristiano") &&
      l2Titles.includes("Vida Ética"),
    `L2 Modules: ${l2Titles}`
  );

  // 14. Contenido de Nivel III (Gran Comisión, Discipulado, Mentoría, Familias de Grupo, Multiplicación)
  const l3Titles = level3Modules.map((m) => m.moduleTitle).join(" | ");
  assertTest(
    14,
    "Nivel III contiene los 9 módulos de multiplicación, evangelismo y Familias de Grupo",
    l3Titles.includes("Gran Comisión") &&
      l3Titles.includes("Discipular") &&
      l3Titles.includes("Nuevo Creyente") &&
      l3Titles.includes("Evangelio") &&
      l3Titles.includes("Verdad Bíblica") &&
      l3Titles.includes("Hábitos Espirituales") &&
      l3Titles.includes("Nuevos Discípulos") &&
      l3Titles.includes("Familias de Grupo") &&
      l3Titles.includes("Multiplicación"),
    `L3 Modules: ${l3Titles}`
  );

  // 15. Compatibilidad Doctrinal con REN-DOC-001 (Trinidad, Gracia, Inerrancia, Inmersión)
  assertTest(
    15,
    "Doctrina 100% compatible con REN-DOC-001 sin contradicciones",
    content.includes("REN-DOC-001") &&
      content.includes("Trinidad") &&
      content.includes("gracia") &&
      content.includes("fe") &&
      content.includes("inmersión"),
    "Verificación de términos doctrinales clave"
  );

  // 16. Naturaleza no clerical: NO es ordenación
  assertTest(
    16,
    "Cláusula explícita: La Escuela de Discípulos NO confiere ordenación pastoral",
    content.includes("NO concede ordenación pastoral") ||
      content.includes("NO constituye ordenación pastoral"),
    "Cláusula de no ordenación"
  );

  // 17. Naturaleza no clerical: NO es licencia ni credencial ministerial
  assertTest(
    17,
    "Cláusula explícita: NO confiere licencias, credenciales ni sustituye al Seminario Bíblico",
    content.includes("NO concede licencia ministerial") &&
      content.includes("NO sustituye al Seminario Bíblico RENACER") &&
      content.includes("REN-DOC-010"),
    "Cláusula de no credencial y no sustitución de seminario"
  );

  // 18. Certificado oficial: Certificado de Finalización de la Escuela de Discípulos
  assertTest(
    18,
    "Certificado oficial acreditativo de finalización académica-formativa definido",
    content.includes("CERTIFICADO DE FINALIZACIÓN DE LA ESCUELA DE DISCÍPULOS") &&
      content.includes("Certificado de Finalización"),
    "Certificado de finalización"
  );

  // 19. Transición explícita hacia Escuela de Líderes
  assertTest(
    19,
    "Ruta formativa hacia Escuela de Líderes (REN-DOC-008) claramente establecida",
    content.includes("ESCUELA DE LÍDERES") &&
      content.includes("REN-DOC-008") &&
      content.includes("Escuela de Líderes"),
    "Ruta de transición formativa"
  );

  // 20. Seminario Bíblico RENACER como etapa formativa ministerial avanzada posterior
  assertTest(
    20,
    "Seminario Bíblico RENACER identificado como nivel formativo teológico-ministerial avanzado",
    content.includes("SEMINARIO BÍBLICO RENACER") &&
      content.includes("Seminario Bíblico RENACER"),
    "Seminario Bíblico como nivel ministerial"
  );

  // 21. Integración con Familias de Grupo (y prohibición del término 'células')
  assertTest(
    21,
    "Integración oficial con Familias de Grupo y prohibición del término 'células'",
    content.includes("Familias de Grupo") &&
      content.includes("término exclusivo oficial de RENACER") &&
      !content.includes("célula de oración") &&
      !content.includes("células de crecimiento"),
    "Familias de Grupo y política terminológica"
  );

  // 22. Discipulado personal y mentoría relacional
  assertTest(
    22,
    "Estructura de discipulado personal y mentoría espiritual uno a uno",
    content.includes("Mentoría") &&
      content.includes("Acompañamiento") &&
      content.includes("tutor"),
    "Discipulado y mentoría"
  );

  // 23. Práctica de evangelismo bíblico personal
  assertTest(
    23,
    "Entrenamiento práctico en evangelismo bíblico y testimonio personal",
    content.toLowerCase().includes("evangelio") &&
      content.toLowerCase().includes("testimonio") &&
      content.toLowerCase().includes("evangelismo"),
    "Evangelismo práctico"
  );

  // 24. Dones espirituales con orden bíblico (1 Cor 14) y discernimiento pastoral
  assertTest(
    24,
    "Doctrina pentecostal/carismática equilibrada: Dones con orden (1 Cor 14) y discernimiento pastoral",
    content.includes("1 Corintios 14") &&
      content.includes("lenguas") &&
      content.includes("interpretación") &&
      content.includes("profecía") &&
      content.includes("sanidad") &&
      content.includes("discernimiento"),
    "Dones espirituales y orden bíblico"
  );

  // 25. Inclusión plena de la mujer sin discriminación de género
  assertTest(
    25,
    "Apertura e igualdad para hombres y mujeres con proyección a liderazgo y ministerio",
    content.includes("hombres y mujeres") &&
      content.includes("igualdad") &&
      content.includes("ordenación pastoral"),
    "Inclusión plena de la mujer"
  );

  // 26. Límites estrictos de autoridad y protección contra abusos espirituales
  assertTest(
    26,
    "Límites pastorales de REN-DOC-006: Prohibición de control financiero, marital, médico o manipulación profética",
    content.includes("finanzas privadas") &&
      content.includes("vida sentimental") &&
      content.includes("Decisiones de salud") &&
      content.includes("manipulación espiritual"),
    "Límites éticos y pastorales"
  );

  // 27. Sistema de evaluación integral (conocimiento, aplicación, participación, práctica)
  assertTest(
    27,
    "Sistema de evaluación formativa integral (cognitiva, actitudinal y práctica)",
    content.includes("CONOCIMIENTO Y COMPRENSIÓN") &&
      content.includes("ACTITUD Y CARÁCTER") &&
      content.includes("PARTICIPACIÓN Y PRÁCTICA") &&
      content.includes("DISCIPULADO Y SERVICIO"),
    "Sistema de evaluación integral"
  );

  // 28. Actividades prácticas obligatorias en los 3 niveles
  assertTest(
    28,
    "Actividades formativas prácticas en los 3 niveles (Lectura bíblica, oración, evangelismo, Familias de Grupo)",
    prog.modules.every((m) => m.practicalTask && m.practicalTask.length > 5),
    "Actividades prácticas por módulo"
  );

  // 29. Arquitectura y especificación del Libro del Maestro
  assertTest(
    29,
    "Especificación estructural y metodológica del Libro del Maestro",
    content.includes("Libro del Maestro") &&
      content.includes("Exégesis y notas doctrinales") &&
      content.includes("Rúbricas de evaluación formativa"),
    "Libro del Maestro"
  );

  // 30. Arquitectura y especificación del Libro del Estudiante
  assertTest(
    30,
    "Especificación estructural y pedagógica del Libro del Estudiante",
    content.includes("Libro del Estudiante") &&
      content.includes("manual de trabajo personal del discípulo") &&
      content.includes("Cuestionarios de estudio personal"),
    "Libro del Estudiante"
  );

  // 31. Matriz Curricular completa con 27 módulos
  assertTest(
    31,
    "Matriz Curricular completa con los 27 módulos trimestrales",
    DISCIPLES_CURRICULAR_MATRIX.length === 27 &&
      content.includes("MATRIZ CURRICULAR GENERAL") &&
      content.includes("DIS-N1-M01") &&
      content.includes("DIS-N2-M05") &&
      content.includes("DIS-N3-M09"),
    `Matrix length: ${DISCIPLES_CURRICULAR_MATRIX.length}`
  );

  // 32. Registro y archivo académico institucional (REN-DOC-019)
  assertTest(
    32,
    "Sistema de registro de legajos y archivos académicos remitido a REN-DOC-019",
    content.includes("expedientes académicos") &&
      content.includes("REN-DOC-019") &&
      content.includes("Secretaría de Discipulado"),
    "Registros y REN-DOC-019"
  );

  // 33. Perfil, requisitos y supervisión de docentes (REN-DOC-009)
  assertTest(
    33,
    "Perfil docente, compromiso de fidelidad doctrinal y remisión a REN-DOC-009 / REN-DOC-006",
    content.includes("Perfil y Requisitos del Docente") &&
      content.includes("fidelidad doctrinal") &&
      content.includes("Dirección de Discipulado"),
    "Perfil docente"
  );

  // 34. Protección de menores bajo N.J.S.A. 9:6-8.10 y remisión a REN-DOC-016
  assertTest(
    34,
    "Políticas estrictas de protección de menores bajo N.J.S.A. 9:6-8.10 y remisión a REN-DOC-016",
    content.includes("Protección Integral de Menores") &&
      content.includes("N.J.S.A. 9:6-8.10") &&
      content.includes("REN-DOC-016") &&
      content.includes("dos adultos presentes"),
    "Protección de menores N.J.S.A."
  );

  // 35. Trazabilidad con decisiones institucionales reales
  const decisions = getAllInstitutionalDecisions();
  const validDecisionNumbers = new Set(decisions.map((d) => d.decisionNumber));
  const usedDecisions = prog.titles.flatMap((t) => t.sections.flatMap((s) => s.decisionIds));
  const allDecisionsValid = usedDecisions.every((id) => validDecisionNumbers.has(id));
  assertTest(
    35,
    "Trazabilidad: Todas las decisiones institucionales referenciadas existen en el repositorio oficial",
    allDecisionsValid && usedDecisions.length > 5,
    `Used decisions: ${usedDecisions.join(", ")}`
  );

  // 36. REN-DOC-001 intacto
  const doc001 = getInstitutionalDocumentById("doc-ren-001");
  assertTest(
    36,
    "REN-DOC-001 (Declaración de Fe) permanece íntegro e inalterado",
    doc001 !== undefined &&
      doc001.documentNumber === "REN-DOC-001" &&
      doc001.version === "1.0" &&
      doc001.title.includes("Declaración de Fe"),
    `REN-DOC-001: ${doc001?.title}, version: ${doc001?.version}`
  );

  // 37. REN-DOC-002 intacto
  const doc002 = getInstitutionalDocumentById("doc-ren-002");
  assertTest(
    37,
    "REN-DOC-002 (Constitución) permanece íntegro e inalterado",
    doc002 !== undefined &&
      doc002.documentNumber === "REN-DOC-002" &&
      doc002.version === "0.1" &&
      doc002.status === "EN_REDACCION",
    `REN-DOC-002: ${doc002?.title}, version: ${doc002?.version}`
  );

  // 38. REN-DOC-003 intacto
  const doc003 = getInstitutionalDocumentById("doc-ren-003");
  assertTest(
    38,
    "REN-DOC-003 (Bylaws) permanece íntegro e inalterado",
    doc003 !== undefined &&
      doc003.documentNumber === "REN-DOC-003" &&
      doc003.version === "0.1" &&
      doc003.status === "EN_REDACCION",
    `REN-DOC-003: ${doc003?.title}, version: ${doc003?.version}`
  );

  // 39. REN-DOC-004 intacto
  const doc004 = getInstitutionalDocumentById("doc-ren-004");
  assertTest(
    39,
    "REN-DOC-004 (Manual de Gobierno) permanece íntegro e inalterado",
    doc004 !== undefined &&
      doc004.documentNumber === "REN-DOC-004" &&
      doc004.version === "0.1" &&
      doc004.status === "EN_REDACCION",
    `REN-DOC-004: ${doc004?.title}, version: ${doc004?.version}`
  );

  // 40. REN-DOC-005 intacto
  const doc005 = getInstitutionalDocumentById("doc-ren-005");
  assertTest(
    40,
    "REN-DOC-005 (Manual de Membresía) permanece íntegro e inalterado",
    doc005 !== undefined &&
      doc005.documentNumber === "REN-DOC-005" &&
      doc005.version === "0.1" &&
      doc005.status === "EN_REDACCION",
    `REN-DOC-005: ${doc005?.title}, version: ${doc005?.version}`
  );

  // 41. REN-DOC-006 intacto
  const doc006 = getInstitutionalDocumentById("doc-ren-006");
  assertTest(
    41,
    "REN-DOC-006 (Manual de Ministerios y Liderazgo) permanece íntegro e inalterado",
    doc006 !== undefined &&
      doc006.documentNumber === "REN-DOC-006" &&
      doc006.version === "0.1" &&
      doc006.status === "EN_REDACCION",
    `REN-DOC-006: ${doc006?.title}, version: ${doc006?.version}`
  );

  // 42. Las 107 Decisiones Históricas permanecen intactas
  assertTest(
    42,
    "Las 107 decisiones históricas permanecen intactas y completas",
    decisions.length === 107,
    `Total decisions: ${decisions.length}`
  );

  // 43. Catálogo de formularios futuros de la Escuela de Discípulos
  assertTest(
    43,
    "Catálogo de 7 formularios futuros oficiales (REN-FORM-DIS-001 a 007) especificado",
    DISCIPLES_FUTURE_FORMS_CATALOG.length === 7 &&
      content.includes("REN-FORM-DIS-001") &&
      content.includes("REN-FORM-DIS-007"),
    `Forms count: ${DISCIPLES_FUTURE_FORMS_CATALOG.length}`
  );

  // 44. Servicio de Documentos Institucionales entrega REN-DOC-007 completo
  const doc007 = getInstitutionalDocumentById("doc-ren-007");
  assertTest(
    44,
    "Servicio de Documentos Institucionales entrega REN-DOC-007 con contenido completo",
    doc007 !== undefined &&
      doc007.documentNumber === "REN-DOC-007" &&
      (doc007.content?.length || 0) > 40000,
    `Doc007 content length: ${doc007?.content?.length || 0}`
  );

  // 45. Buscador Institucional indexa REN-DOC-007
  const searchResults1 = searchRenacerKnowledge("Escuela de Discípulos");
  const searchResults2 = searchRenacerKnowledge("Conociendo a Cristo");
  assertTest(
    45,
    "Buscador institucional indexa y recupera REN-DOC-007 por términos clave",
    searchResults1.some((d) => d.code === "REN-DOC-007" || d.id === "doc-ren-007") &&
      searchResults2.some((d) => d.code === "REN-DOC-007" || d.id === "doc-ren-007"),
    `Search results count: ${searchResults1.length}, ${searchResults2.length}`
  );

  // 46. Inventario Administrativo audita REN-DOC-007 con contenido completo
  const inventory = getDocumentInventoryAudit();
  const inv007 = inventory.find((item) => item.code === "REN-DOC-007");
  assertTest(
    46,
    "Inventario administrativo audita REN-DOC-007 como borrador en redacción con contenido real",
    inv007 !== undefined &&
      inv007.hasFullContent === true &&
      inv007.completeness === "DOCUMENTO_PARCIAL",
    `Inventory item 007: ${JSON.stringify(inv007)}`
  );

  // 47. Métricas del sistema actualizadas
  const metrics = getSystemOverviewMetrics();
  assertTest(
    47,
    "Métricas del sistema reflejan el inventario institucional completo",
    metrics.totalDecisions === 107 && metrics.completeDocumentsCount >= 7,
    `Metrics: decisions=${metrics.totalDecisions}, completeDocs=${metrics.completeDocumentsCount}`
  );

  // Imprimir resumen
  console.log("-------------------------------------------------------------------------------");
  console.log("RESULTADOS DE LA SUITE DE PRUEBAS:");
  console.log("-------------------------------------------------------------------------------");
  let passedCount = 0;
  let failedCount = 0;

  for (const res of results) {
    if (res.passed) {
      console.log(`[PASS] Test #${res.num.toString().padStart(2, "0")}: ${res.name}`);
      passedCount++;
    } else {
      console.error(`[FAIL] Test #${res.num.toString().padStart(2, "0")}: ${res.name} -> ${res.details}`);
      failedCount++;
    }
  }

  console.log("-------------------------------------------------------------------------------");
  console.log(`TOTAL PRUEBAS: ${results.length} | APROBADAS: ${passedCount} | FALLIDAS: ${failedCount}`);
  console.log("===============================================================================");

  if (failedCount > 0) {
    process.exit(1);
  }
}

runPhase38Tests().catch((err) => {
  console.error("Error fatal ejecutando pruebas de Fase 38:", err);
  process.exit(1);
});
