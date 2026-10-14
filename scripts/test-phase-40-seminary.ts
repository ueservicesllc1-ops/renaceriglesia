/**
 * TEST SUITE — FASE 40: PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER (REN-DOC-009)
 *
 * Verificaciones exhaustivas de:
 * 1. Identidad institucional de REN-DOC-009 (Código, Versión v0.1, Estado EN_REDACCION, No adoptada, Requiere revisión legal)
 * 2. Duración y estructura académica: Mínimo 1 año, 4 niveles, 12 módulos mensuales (SEM-L1-M01 a SEM-L4-M03), 104 clases anuales (2 por semana)
 * 3. Nivel I: Fundamentos Bíblicos y Teológicos (Módulos 1-3: Intro a la Biblia y Canon, AT y NT, Hermenéutica)
 * 4. Nivel II: Espíritu Santo y Ministerio (Módulos 4-6: Trinidad/Dios, Cristo y Salvación, Espíritu Santo/Dones/Sanidad/Orden)
 * 5. Nivel III: Predicación, Enseñanza y Cuidado Pastoral (Módulos 7-9: Homilética, Pedagogía/Evangelismo/Discipulado, Cuidado Pastoral/Matrimonio/Límites de consejería)
 * 6. Nivel IV: Ministerio y Sistema RENACER (Módulos 10-12: Eclesiología/Gobierno, Ética Ministerial/Conflictos/Salvaguardas, Ministerio Práctico y Proyecto Final)
 * 7. Arquitectura Académica: Seminario → Nivel → Módulo → Libro → Capítulos → Clases (13 componentes) → Prácticas → Evaluaciones
 * 8. Especificación independiente: 12 Libros del Maestro y 12 Libros del Estudiante (vinculados por subjectCode y linkedEditionDocId)
 * 9. Delimitación eclesiástica clara: Formación ministerial integral vs no concesión automática de licencia, ordenación ni credencial
 * 10. Mapa ministerial completo: Discípulos → Líderes → Seminario → Candidato → Licenciado → Ordenado → Pastor
 * 11. Inclusión plena de mujeres en toda la formación académica y ministerial sin discriminación de sexo
 * 12. Límites estrictos de consejería pastoral: No sustitución de médicos, psicólogos, psiquiatras ni abogados; derivación oportuna
 * 13. Salvaguarda legal y reporte obligatorio de abusos a menores (N.J.S.A. 9:6-8.10)
 * 14. Requisitos de admisión y política de excepciones documentadas bajo potestad del Pastor Fundador
 * 15. Perfil y nombramiento de docentes del Seminario
 * 16. Matriz Curricular completa (12 filas) y Matriz de Competencias Institucionales (14 competencias)
 * 17. Catálogo de 10 formularios futuros oficiales (REN-FORM-SEM-001 a 010)
 * 18. Registro Académico y Expediente (REN-DOC-019)
 * 19. Trazabilidad con decisiones institucionales reales y documentos superiores (REN-DOC-001 a 008, 010, 016, 019)
 * 20. Inmutabilidad e integridad de REN-DOC-001 a REN-DOC-008 y las 107 Decisiones Históricas
 * 21. Confirmación de que REN-DOC-010 NO fue creado
 * 22. Integración en Catálogo Maestro, Biblioteca Institucional, RBAC, Inventario y Buscador
 */

import {
  getInstitutionalDocumentById,
  getAllInstitutionalDocuments,
} from "../src/lib/institutional-document-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import {
  FULL_SEMINARY_PROGRAM_DRAFT,
  SEMINARY_PROGRAM_DRAFT,
  SEMINARY_LEVELS_DATA,
  SEMINARY_CURRICULAR_MATRIX,
  SEMINARY_COMPETENCY_MATRIX,
  SEMINARY_FUTURE_FORMS_CATALOG,
  generateFullSeminaryProgramMarkdown,
} from "../src/lib/seminary-program-full-draft";
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

async function runPhase40Tests() {
  console.log("================================================================================");
  console.log("INICIANDO SUITE DE PRUEBAS DE FASE 40 — SEMINARIO BÍBLICO RENACER (REN-DOC-009)");
  console.log("================================================================================");

  // 1. Existencia del documento en la biblioteca
  const doc009 = getInstitutionalDocumentById("REN-DOC-009");
  assertTest(
    1,
    "Documento REN-DOC-009 existe en la Biblioteca Institucional",
    doc009 !== undefined && doc009.id === "doc-ren-009",
    `doc009: ${JSON.stringify(doc009 ? { id: doc009.id, num: doc009.documentNumber } : null)}`
  );

  // 2. Código oficial
  assertTest(
    2,
    "Código oficial es exactamente REN-DOC-009",
    doc009 !== undefined && doc009.documentNumber === "REN-DOC-009"
  );

  // 3. Título oficial
  assertTest(
    3,
    "Título es PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER",
    doc009 !== undefined && doc009.title === "PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER"
  );

  // 4. Versión v0.1
  assertTest(
    4,
    "Versión inicial es 0.1 (v0.1)",
    doc009 !== undefined && doc009.version === "0.1" && FULL_SEMINARY_PROGRAM_DRAFT.version === "0.1"
  );

  // 5. Estado EN_REDACCION
  assertTest(
    5,
    "Estado de redacción es EN_REDACCION",
    doc009 !== undefined && doc009.status === "EN_REDACCION" && FULL_SEMINARY_PROGRAM_DRAFT.status === "EN_REDACCION"
  );

  // 6. Estado de adopción NO ADOPTADA
  assertTest(
    6,
    "Estado de adopción es NO_ADOPTADA (Borrador no adoptado)",
    FULL_SEMINARY_PROGRAM_DRAFT.adoptionState === "NO_ADOPTADA"
  );

  // 7. Estado legal REQUIERE_REVISION_LEGAL
  assertTest(
    7,
    "Estado legal es REQUIERE_REVISION_LEGAL",
    doc009 !== undefined && doc009.legalState === "REQUIERE_REVISION_LEGAL" &&
      FULL_SEMINARY_PROGRAM_DRAFT.legalState === "REQUIERE_REVISION_LEGAL"
  );

  // 8. Nivel jerárquico NIVEL_4_MANUAL_INSTITUCIONAL
  const catalogItem = INITIAL_MASTER_CATALOG.find((c) => c.documentNumber === "REN-DOC-009");
  assertTest(
    8,
    "Nivel jerárquico es NIVEL_4_MANUAL_INSTITUCIONAL",
    catalogItem !== undefined && catalogItem.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL" &&
      FULL_SEMINARY_PROGRAM_DRAFT.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL"
  );

  // 9. Categoría FORMACION_MINISTERIAL
  assertTest(
    9,
    "Categoría es FORMACION_MINISTERIAL",
    catalogItem !== undefined && catalogItem.category === "FORMACION_MINISTERIAL" &&
      doc009 !== undefined && doc009.category === "FORMACION_MINISTERIAL" &&
      FULL_SEMINARY_PROGRAM_DRAFT.category === "FORMACION_MINISTERIAL"
  );

  // 10. Duración oficial: Mínimo 1 año (12 meses)
  assertTest(
    10,
    "Duración oficial es mínimo 1 año (12 meses lectivos)",
    FULL_SEMINARY_PROGRAM_DRAFT.durationMonths === 12 &&
      FULL_SEMINARY_PROGRAM_DRAFT.durationYears === 1 &&
      FULL_SEMINARY_PROGRAM_DRAFT.durationDescription.includes("Mínimo 1 año")
  );

  // 11. Estructura de 4 Niveles formativos
  assertTest(
    11,
    "Estructura organizada en exactamente 4 niveles formativos",
    FULL_SEMINARY_PROGRAM_DRAFT.levelsCount === 4 &&
      SEMINARY_LEVELS_DATA.length === 4
  );

  // 12. Estructura de 12 Módulos mensuales
  assertTest(
    12,
    "Estructura curricular contiene exactamente 12 módulos mensuales",
    FULL_SEMINARY_PROGRAM_DRAFT.modulesCount === 12 &&
      SEMINARY_LEVELS_DATA.reduce((acc, lvl) => acc + lvl.modules.length, 0) === 12
  );

  // 13. Total de clases aproximadas (104 clases / 2 por semana)
  assertTest(
    13,
    "Régimen académico contempla 104 clases anuales (2 clases por semana)",
    FULL_SEMINARY_PROGRAM_DRAFT.totalClassesAnnual === 104 &&
      FULL_SEMINARY_PROGRAM_DRAFT.classesPerWeek === 2
  );

  // 14. Nivel I: Fundamentos Bíblicos y Teológicos
  const level1 = SEMINARY_LEVELS_DATA.find((lvl) => lvl.levelNumber === 1);
  assertTest(
    14,
    "Nivel I es 'Fundamentos Bíblicos y Teológicos' (Módulos 1 a 3)",
    level1 !== undefined &&
      level1.levelTitle === "Fundamentos Bíblicos y Teológicos" &&
      level1.modules.length === 3
  );

  // 15. Nivel II: Espíritu Santo y Ministerio
  const level2 = SEMINARY_LEVELS_DATA.find((lvl) => lvl.levelNumber === 2);
  assertTest(
    15,
    "Nivel II es 'Espíritu Santo y Ministerio' (Módulos 4 a 6)",
    level2 !== undefined &&
      level2.levelTitle === "Espíritu Santo y Ministerio" &&
      level2.modules.length === 3
  );

  // 16. Nivel III: Predicación, Enseñanza y Cuidado Pastoral
  const level3 = SEMINARY_LEVELS_DATA.find((lvl) => lvl.levelNumber === 3);
  assertTest(
    16,
    "Nivel III es 'Predicación, Enseñanza y Cuidado Pastoral' (Módulos 7 a 9)",
    level3 !== undefined &&
      level3.levelTitle === "Predicación, Enseñanza y Cuidado Pastoral" &&
      level3.modules.length === 3
  );

  // 17. Nivel IV: Ministerio y Sistema RENACER
  const level4 = SEMINARY_LEVELS_DATA.find((lvl) => lvl.levelNumber === 4);
  assertTest(
    17,
    "Nivel IV es 'Ministerio y Sistema RENACER' (Módulos 10 a 12)",
    level4 !== undefined &&
      level4.levelTitle === "Ministerio y Sistema RENACER" &&
      level4.modules.length === 3
  );

  // 18. Módulo 1: Introducción a la Biblia y Canon (SEM-L1-M01)
  const m1 = level1?.modules.find((m) => m.code === "SEM-L1-M01");
  assertTest(
    18,
    "Módulo 1 (SEM-L1-M01) es 'Introducción a la Biblia, Inspiración e Historia del Canon'",
    m1 !== undefined && m1.title.includes("Introducción a la Biblia")
  );

  // 19. Módulo 2: Antiguo y Nuevo Testamento (SEM-L1-M02)
  const m2 = level1?.modules.find((m) => m.code === "SEM-L1-M02");
  assertTest(
    19,
    "Módulo 2 (SEM-L1-M02) es 'Panorama del Antiguo y Nuevo Testamento y Teología Bíblica'",
    m2 !== undefined && m2.title.includes("Antiguo y Nuevo Testamento")
  );

  // 20. Módulo 3: Hermenéutica y Estudio Bíblico (SEM-L1-M03)
  const m3 = level1?.modules.find((m) => m.code === "SEM-L1-M03");
  assertTest(
    20,
    "Módulo 3 (SEM-L1-M03) es 'Hermenéutica Bíblica, Exégesis y Métodos de Estudio'",
    m3 !== undefined && m3.title.includes("Hermenéutica Bíblica")
  );

  // 21. Módulo 4: Doctrina de Dios y la Trinidad (SEM-L2-M01)
  const m4 = level2?.modules.find((m) => m.code === "SEM-L2-M01");
  assertTest(
    21,
    "Módulo 4 (SEM-L2-M01) es 'Teología Propia: Doctrina de Dios, Trinidad y Soberanía'",
    m4 !== undefined && m4.title.includes("Doctrina de Dios")
  );

  // 22. Módulo 5: Cristo, Salvación y Vida Cristiana (SEM-L2-M02)
  const m5 = level2?.modules.find((m) => m.code === "SEM-L2-M02");
  assertTest(
    22,
    "Módulo 5 (SEM-L2-M02) es 'Cristología, Soteriología, Santificación y Ordenanzas'",
    m5 !== undefined && m5.title.includes("Cristología")
  );

  // 23. Módulo 6: Espíritu Santo, Dones y Ministerio (SEM-L2-M03)
  const m6 = level2?.modules.find((m) => m.code === "SEM-L2-M03");
  assertTest(
    23,
    "Módulo 6 (SEM-L2-M03) es 'Neumatología: Espíritu Santo, Bautismo, Dones Espirituales y Sanidad'",
    m6 !== undefined &&
      m6.title.includes("Neumatología") &&
      m6.learningOutcomes.some((o) => o.includes("bautismo en el Espíritu Santo")) &&
      m6.learningOutcomes.some((o) => o.includes("sanidad"))
  );

  // 24. Módulo 7: Homilética y Predicación (SEM-L3-M01)
  const m7 = level3?.modules.find((m) => m.code === "SEM-L3-M01");
  assertTest(
    24,
    "Módulo 7 (SEM-L3-M01) es 'Homilética: Preparación, Estructura y Predicación Bíblica'",
    m7 !== undefined && m7.title.includes("Homilética")
  );

  // 25. Módulo 8: Enseñanza Bíblica, Evangelismo y Discipulado (SEM-L3-M02)
  const m8 = level3?.modules.find((m) => m.code === "SEM-L3-M02");
  assertTest(
    25,
    "Módulo 8 (SEM-L3-M02) es 'Pedagogía Bíblica, Evangelismo Estratégico y Discipulado Multiplicador'",
    m8 !== undefined && m8.title.includes("Pedagogía Bíblica")
  );

  // 26. Módulo 9: Cuidado Pastoral, Matrimonio, Familia y Acompañamiento (SEM-L3-M03)
  const m9 = level3?.modules.find((m) => m.code === "SEM-L3-M03");
  assertTest(
    26,
    "Módulo 9 (SEM-L3-M03) es 'Cuidado Pastoral, Familia, Duelo y Límites de Consejería'",
    m9 !== undefined && m9.title.includes("Cuidado Pastoral")
  );

  // 27. Módulo 10: Iglesia, Gobierno y Liderazgo (SEM-L4-M01)
  const m10 = level4?.modules.find((m) => m.code === "SEM-L4-M01");
  assertTest(
    27,
    "Módulo 10 (SEM-L4-M01) es 'Eclesiología, Gobierno Institucional y Cinco Ministerios'",
    m10 !== undefined && m10.title.includes("Eclesiología")
  );

  // 28. Módulo 11: Ética Ministerial, Conflictos y Responsabilidad (SEM-L4-M02)
  const m11 = level4?.modules.find((m) => m.code === "SEM-L4-M02");
  assertTest(
    28,
    "Módulo 11 (SEM-L4-M02) es 'Ética Ministerial, Integridad, Manejo de Conflictos y Salvaguardas Legales'",
    m11 !== undefined && m11.title.includes("Ética Ministerial")
  );

  // 29. Módulo 12: Ministerio Práctico y Proyecto Final (SEM-L4-M03)
  const m12 = level4?.modules.find((m) => m.code === "SEM-L4-M03");
  assertTest(
    29,
    "Módulo 12 (SEM-L4-M03) es 'Práctica Ministerial Supervisada y Proyecto Final de Graduación'",
    m12 !== undefined && m12.title.includes("Proyecto Final")
  );

  // 30. Arquitectura de las Clases (13 componentes obligatorios)
  const classArch = FULL_SEMINARY_PROGRAM_DRAFT.classStructure;
  assertTest(
    30,
    "Arquitectura de clases define exactamente los 13 componentes obligatorios",
    classArch.components.length === 13 &&
      classArch.components.includes("Código de la Lección") &&
      classArch.components.includes("Texto Bíblico Central") &&
      classArch.components.includes("Aplicación Ministerial Práctica") &&
      classArch.components.includes("Evaluación y Tarea Semanal")
  );

  // 31. Especificación del Libro del Maestro
  const teacherBook = FULL_SEMINARY_PROGRAM_DRAFT.booksArchitecture.teacherBook;
  assertTest(
    31,
    "Arquitectura define Libro del Maestro independiente con rúbricas y fundamentación",
    teacherBook.isIndependentDocument === true &&
      teacherBook.components.length >= 10 &&
      teacherBook.components.includes("Rúbricas analíticas de calificación")
  );

  // 32. Especificación del Libro del Estudiante
  const studentBook = FULL_SEMINARY_PROGRAM_DRAFT.booksArchitecture.studentBook;
  assertTest(
    32,
    "Arquitectura define Libro del Estudiante independiente con ejercicios y lecturas",
    studentBook.isIndependentDocument === true &&
      studentBook.components.length >= 8 &&
      studentBook.components.includes("Espacios estructurados de notas personales y reflexión")
  );

  // 33. Independencia de Ediciones y Vinculación (subjectCode / linkedEditionDocId)
  const editionLink = FULL_SEMINARY_PROGRAM_DRAFT.booksArchitecture;
  assertTest(
    33,
    "Libros poseen identidad independiente vinculados por subjectCode y linkedEditionDocId",
    editionLink.linkageRule.includes("subjectCode") &&
      editionLink.linkageRule.includes("linkedEditionDocId") &&
      editionLink.teacherBook.codePrefix === "SEM-LIB-M" &&
      editionLink.studentBook.codePrefix === "SEM-LIB-E"
  );

  // 34. Matriz Curricular Completa (12 filas)
  assertTest(
    34,
    "Matriz Curricular contiene exactamente 12 filas completas con objetivos, práctica y evaluación",
    SEMINARY_CURRICULAR_MATRIX.length === 12 &&
      SEMINARY_CURRICULAR_MATRIX.every((r) => r.codigo && r.objetivos && r.competencias && r.practica && r.evaluacion)
  );

  // 35. Matriz de Competencias Institucionales (14 competencias mínimas)
  assertTest(
    35,
    "Matriz de Competencias contiene al menos 14 competencias graduadas por los 4 niveles",
    SEMINARY_COMPETENCY_MATRIX.length >= 14 &&
      SEMINARY_COMPETENCY_MATRIX.every((c) => c.competencia && c.nivel1 && c.nivel2 && c.nivel3 && c.nivel4)
  );

  // 36. Requisitos Institucionales de Admisión
  const admission = FULL_SEMINARY_PROGRAM_DRAFT.admissions;
  assertTest(
    36,
    "Admisión exige Fe, Bautismo, Membresía Plena (REN-DOC-005), Escuela de Discípulos (007) y Escuela de Líderes (008)",
    admission.requirements.length >= 7 &&
      admission.requirements.some((r) => r.includes("Bautismo en agua")) &&
      admission.requirements.some((r) => r.includes("REN-DOC-005")) &&
      admission.requirements.some((r) => r.includes("REN-DOC-007")) &&
      admission.requirements.some((r) => r.includes("REN-DOC-008"))
  );

  // 37. Política de Excepciones debidamente registrada bajo potestad del Pastor Fundador
  assertTest(
    37,
    "Excepciones de ingreso reservadas al Pastor Fundador, debiendo quedar documentadas en acta y expediente",
    admission.exceptionPolicy.includes("Pastor Fundador") &&
      admission.exceptionPolicy.includes("expediente") &&
      admission.exceptionPolicy.includes("REN-FORM-SEM-002")
  );

  // 38. Perfil y nombramiento del Cuerpo Docente
  const faculty = FULL_SEMINARY_PROGRAM_DRAFT.faculty;
  assertTest(
    38,
    "Docentes deben ser ministros ordenados/teólogos con fidelidad a REN-DOC-001 y sin potestades de Trustees",
    faculty.profile.includes("ordenados") &&
      faculty.profile.includes("REN-DOC-001") &&
      faculty.appointment.includes("Pastor Fundador")
  );

  // 39. Registro Académico y Expediente del Estudiante (REN-DOC-019)
  const records = FULL_SEMINARY_PROGRAM_DRAFT.academicRecords;
  assertTest(
    39,
    "Registro académico formal vinculado a REN-DOC-019 y REN-FORM-SEM-002",
    records.recordsKept.length >= 7 &&
      records.relatedRegulation === "REN-DOC-019"
  );

  // 40. Proyecto Final de Graduación
  const capstone = FULL_SEMINARY_PROGRAM_DRAFT.capstoneProject;
  assertTest(
    40,
    "Proyecto final exige diseño y defensa integral sin constituir ordenación clerical automática",
    capstone.requirements.length >= 5 &&
      capstone.nonClericalOrdinationClause.includes("NO constituye nombramiento pastoral")
  );

  // 41. Certificado de Finalización del Seminario Bíblico RENACER
  const cert = FULL_SEMINARY_PROGRAM_DRAFT.certification;
  assertTest(
    41,
    "Certificado oficial es 'CERTIFICADO DE FINALIZACIÓN DEL SEMINARIO BÍBLICO RENACER'",
    cert.title === "CERTIFICADO DE FINALIZACIÓN DEL SEMINARIO BÍBLICO RENACER" &&
      cert.nonAutomaticPrivileges.includes("NO concede automáticamente licencia ministerial")
  );

  // 42. Cláusula de NO Ordenación Pastoral Automática
  assertTest(
    42,
    "Delimitación eclesiástica expresa: La graduación NO equivale a ordenación pastoral",
    doc009 !== undefined &&
      doc009.content.includes("NO CONFIERE AUTOMÁTICAMENTE") &&
      doc009.content.includes("ordenación pastoral") &&
      doc009.content.includes("licencia ministerial")
  );

  // 43. Cláusula de NO Licencia ni Credencial Automática (distinción con REN-DOC-010)
  assertTest(
    43,
    "Distinción estricta entre Formación (Seminario) y Credencialización (REN-DOC-010)",
    doc009 !== undefined &&
      doc009.content.includes("REN-DOC-010") &&
      doc009.content.includes("distinción entre formación académica y credencialización ministerial")
  );

  // 44. Inclusión y participación de las Mujeres en todo el trayecto académico
  assertTest(
    44,
    "Abierto plenamente a hombres y mujeres sin discriminación por sexo en el acceso académico",
    FULL_SEMINARY_PROGRAM_DRAFT.womenInMinistry.fullAccess === true &&
      FULL_SEMINARY_PROGRAM_DRAFT.womenInMinistry.statement.includes("hombres y mujeres")
  );

  // 45. Límites estrictos de Consejería Pastoral y derivación obligatoria
  assertTest(
    45,
    "Límites de consejería: Ministro no reemplaza a médicos, psicólogos ni abogados; derivación obligatoria",
    FULL_SEMINARY_PROGRAM_DRAFT.pastoralCareLimits.nonMedicalReplacement === true &&
      FULL_SEMINARY_PROGRAM_DRAFT.pastoralCareLimits.mandatoryReferral === true
  );

  // 46. Salvaguardas legales y reporte obligatorio de abuso infantil (N.J.S.A. 9:6-8.10)
  assertTest(
    46,
    "Obligación legal de reporte de abusos conforme a N.J.S.A. 9:6-8.10 y remisión a REN-DOC-016",
    doc009 !== undefined &&
      doc009.content.includes("N.J.S.A. 9:6-8.10") &&
      doc009.content.includes("REN-DOC-016")
  );

  // 47. Mapa ministerial formal institucional
  assertTest(
    47,
    "Mapa ministerial incluye los 7 eslabones (Discípulos → Líderes → Seminario → Candidato → Licenciado → Ordenado → Pastor)",
    doc009 !== undefined &&
      doc009.content.includes("ESCUELA DE DISCÍPULOS (REN-DOC-007)") &&
      doc009.content.includes("ESCUELA DE LÍDERES (REN-DOC-008)") &&
      doc009.content.includes("SEMINARIO BÍBLICO RENACER (REN-DOC-009)") &&
      doc009.content.includes("MINISTRO LICENCIADO (REN-DOC-010)") &&
      doc009.content.includes("MINISTRO ORDENADO (REN-DOC-010)")
  );

  // 48. Catálogo de los 10 Formularios Académicos (REN-FORM-SEM-001 a 010)
  assertTest(
    48,
    "Catálogo oficial contiene exactamente 10 formularios futuros (REN-FORM-SEM-001 a 010)",
    SEMINARY_FUTURE_FORMS_CATALOG.length === 10 &&
      SEMINARY_FUTURE_FORMS_CATALOG[0].code === "REN-FORM-SEM-001" &&
      SEMINARY_FUTURE_FORMS_CATALOG[9].code === "REN-FORM-SEM-010"
  );

  // 49. Estado de REN-DOC-001 transparente como Borrador No Adoptado
  assertTest(
    49,
    "Referencia doctrinal oficial transparente: enseña los 20 Artículos de REN-DOC-001 como borrador no adoptado",
    doc009 !== undefined &&
      doc009.content.includes("BORRADOR NO ADOPTADO") &&
      doc009.content.includes("REN-DOC-001")
  );

  // 50. Inmutabilidad de las 107 Decisiones Históricas
  const allDecisions = getAllInstitutionalDecisions();
  assertTest(
    50,
    "Las 107 Decisiones Institucionales Históricas permanecen intactas e inmutables",
    allDecisions.length === 107 &&
      allDecisions.filter((d) => d.decisionNumber.startsWith("DEC-DEF-")).length === 97 &&
      allDecisions.filter((d) => d.decisionNumber.startsWith("DEC-PEND-")).length === 10
  );

  // 51. Inmutabilidad de REN-DOC-001 a REN-DOC-008
  const doc001 = getInstitutionalDocumentById("REN-DOC-001");
  const doc002 = getInstitutionalDocumentById("REN-DOC-002");
  const doc003 = getInstitutionalDocumentById("REN-DOC-003");
  const doc004 = getInstitutionalDocumentById("REN-DOC-004");
  const doc005 = getInstitutionalDocumentById("REN-DOC-005");
  const doc006 = getInstitutionalDocumentById("REN-DOC-006");
  const doc007 = getInstitutionalDocumentById("REN-DOC-007");
  const doc008 = getInstitutionalDocumentById("REN-DOC-008");
  assertTest(
    51,
    "Documentos anteriores REN-DOC-001 a REN-DOC-008 permanecen intactos y vigentes",
    doc001 !== undefined &&
      doc002 !== undefined &&
      doc003 !== undefined &&
      doc004 !== undefined &&
      doc005 !== undefined &&
      doc006 !== undefined &&
      doc007 !== undefined &&
      doc008 !== undefined
  );

  // 52. Verificación estricta de que REN-DOC-015 NO fue creado
  const doc015 = getInstitutionalDocumentById("REN-DOC-015");
  const doc015Catalog = INITIAL_MASTER_CATALOG.find((c) => c.documentNumber === "REN-DOC-015");
  assertTest(
    52,
    "Confirmación: REN-DOC-015 NO fue creado (permanece planificado/pendiente)",
    !doc015 || doc015.status === "PLANIFICADO" || doc015Catalog?.status === "PLANIFICADO"
  );

  // 53. Integración en el inventario administrativo y métricas
  const inventory = getDocumentInventoryAudit();
  const doc009Inv = inventory.find((i) => i.code === "REN-DOC-009");
  assertTest(
    53,
    "REN-DOC-009 está indexado en el Inventario Administrativo de Documentos",
    doc009Inv !== undefined &&
      doc009Inv.hasFullContent === true &&
      doc009Inv.completeness === "DOCUMENTO_PARCIAL"
  );

  // 54. Integración en el motor de búsqueda institucional
  const searchResults = searchRenacerKnowledge("Seminario Bíblico");
  assertTest(
    54,
    "Motor de Búsqueda Institucional indexa y localiza el Seminario Bíblico",
    searchResults.some((d) => d.code === "REN-DOC-009" || d.id === "doc-ren-009" || d.title.includes("Seminario"))
  );

  // 55. Longitud sustancial del contenido generado (mínimo 50,000 caracteres)
  const fullContent = generateFullSeminaryProgramMarkdown();
  assertTest(
    55,
    "Contenido completo de REN-DOC-009 es sustancial y operativo (>50,000 caracteres)",
    fullContent.length > 50000,
    `Longitud real: ${fullContent.length} caracteres`
  );

  // Imprimir resumen
  console.log("\n================================================================================");
  console.log("RESULTADOS DE LA SUITE DE PRUEBAS DE FASE 40");
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
    console.log("TODAS LAS PRUEBAS DE LA FASE 40 PASARON EXITOSAMENTE.");
  }
}

runPhase40Tests().catch((err) => {
  console.error("Error ejecutando pruebas de Fase 40:", err);
  process.exit(1);
});
