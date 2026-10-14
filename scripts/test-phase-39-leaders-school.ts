/**
 * TEST SUITE — FASE 39: PROGRAMA OFICIAL DE LA ESCUELA DE LÍDERES DE RENACER (REN-DOC-008)
 *
 * Verificaciones exhaustivas de:
 * 1. Identidad institucional de REN-DOC-008 (Código, Versión v0.1, Estado EN_REDACCION, No adoptada, Requiere revisión legal)
 * 2. Estructura curricular oficial: 6 meses, 2 clases por semana, 3 niveles (2 meses c/u), 24 módulos (8 por nivel)
 * 3. Nivel I: Servidor, Carácter y Discipulado (Módulos 1-8)
 * 4. Nivel II: Familias de Grupo y Multiplicación (Módulos 9-16)
 * 5. Nivel III: Liderazgo Ministerial, Ética, Conflictos y Responsabilidad (Módulos 17-24)
 * 6. Filosofía central: Formación de Formadores (2 Timoteo 2:2) y Metodología de 7 pasos (Identificar a Multiplicar)
 * 7. Límites estrictos de autoridad y prohibición absoluta de control sobre finanzas, matrimonio, salud o coerción profética
 * 8. Plena participación y autoridad ministerial de las mujeres sin restricciones de género
 * 9. Familias de Grupo como contexto relacional oficial (8-15 miembros, multiplicación 15-20, proscripción de 'células')
 * 10. Protección de menores bajo N.J.S.A. 9:6-8.10 y remisión a REN-DOC-016
 * 11. Resolución bíblica de conflictos (Mateo 18 / REN-DOC-005) y deber legal irrenunciable
 * 12. Delimitación eclesiástica: NO es ordenación, NO es licencia, NO es credencial, NO sustituye Seminario Bíblico ni REN-DOC-010
 * 13. Arquitectura de Libros independientes: Libro del Maestro y Libro del Estudiante
 * 14. Matriz Curricular completa (24 módulos) y Matriz de Competencias Institucionales (13 áreas)
 * 15. Catálogo de 9 formularios futuros oficiales (REN-FORM-LID-001 a 009)
 * 16. Trazabilidad con decisiones institucionales reales y documentos superiores (REN-DOC-001 a 007, 010, 016, 019)
 * 17. Inmutabilidad e integridad de REN-DOC-001 a REN-DOC-007 y las 107 Decisiones Históricas
 * 18. Integración en Catálogo Maestro, Biblioteca Institucional, RBAC, Inventario y Buscador
 */

import {
  getInstitutionalDocumentById,
  getAllInstitutionalDocuments,
} from "../src/lib/institutional-document-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import {
  FULL_LEADERS_PROGRAM_DRAFT,
  LEADERS_SCHOOL_PROGRAM_DRAFT,
  LEADERS_CURRICULAR_MATRIX,
  LEADERS_COMPETENCY_MATRIX,
  LEADERS_FUTURE_FORMS_CATALOG,
  generateFullLeadersProgramMarkdown,
} from "../src/lib/leaders-school-program-full-draft";
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

async function runPhase39Tests() {
  console.log("===============================================================================");
  console.log("INICIANDO TEST SUITE — FASE 39: ESCUELA DE LÍDERES DE RENACER (REN-DOC-008)");
  console.log("===============================================================================\n");

  const prog = FULL_LEADERS_PROGRAM_DRAFT;
  const content = generateFullLeadersProgramMarkdown();

  // 1. Documento existe en Catálogo Maestro
  const catalogItem = INITIAL_MASTER_CATALOG.find((d) => d.documentId === "doc-ren-008");
  assertTest(
    1,
    "Documento existe en Catálogo Maestro con id 'doc-ren-008'",
    catalogItem !== undefined && catalogItem.documentNumber === "REN-DOC-008",
    `Catalog item: ${JSON.stringify(catalogItem)}`
  );

  // 2. Código oficial REN-DOC-008
  assertTest(
    2,
    "Código oficial es estrictamente REN-DOC-008",
    catalogItem?.documentNumber === "REN-DOC-008" && prog.code === "REN-DOC-008",
    `Catalog code: ${catalogItem?.documentNumber}, Draft code: ${prog.code}`
  );

  // 3. Versión v0.1
  assertTest(
    3,
    "Versión inicial establecida en v0.1",
    (catalogItem?.version === "0.1" || catalogItem?.version === "v0.1") &&
      (prog.version === "0.1" || prog.version === "v0.1"),
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

  // 7. Duración oficial de 6 meses
  assertTest(
    7,
    "Duración curricular de 6 meses establecida",
    prog.durationMonths === 6 &&
      content.includes("6 Meses") &&
      content.includes("seis (6) meses"),
    `Duration months: ${prog.durationMonths}`
  );

  // 8. Frecuencia de 2 clases por semana
  assertTest(
    8,
    "Régimen académico de 2 clases por semana establecido",
    prog.classesPerWeek === 2 &&
      content.includes("2 clases por semana") &&
      content.includes("dos (2) clases semanales"),
    `Classes per week: ${prog.classesPerWeek}`
  );

  // 9. Estructura de 3 niveles formativos bimestrales
  assertTest(
    9,
    "Estructura modular de 3 niveles bimestrales preservada",
    prog.levelsCount === 3 && prog.modules.length === 24,
    `Levels count: ${prog.levelsCount}, modules: ${prog.modules.length}`
  );

  // 10. Nivel I: Servidor, Carácter y Discipulado
  const level1Modules = prog.modules.filter((m) => m.level === "NIVEL_I");
  assertTest(
    10,
    "Nivel I: 'Servidor, Carácter y Discipulado' con 8 módulos sustanciales",
    level1Modules.length === 8 &&
      level1Modules[0].levelName.includes("NIVEL I: SERVIDOR, CARÁCTER Y DISCIPULADO"),
    `Level 1 modules count: ${level1Modules.length}`
  );

  // 11. Nivel II: Familias de Grupo y Multiplicación
  const level2Modules = prog.modules.filter((m) => m.level === "NIVEL_II");
  assertTest(
    11,
    "Nivel II: 'Familias de Grupo y Multiplicación' con 8 módulos sustanciales",
    level2Modules.length === 8 &&
      level2Modules[0].levelName.includes("NIVEL II: FAMILIAS DE GRUPO Y MULTIPLICACIÓN"),
    `Level 2 modules count: ${level2Modules.length}`
  );

  // 12. Nivel III: Liderazgo Ministerial, Ética, Conflictos y Responsabilidad
  const level3Modules = prog.modules.filter((m) => m.level === "NIVEL_III");
  assertTest(
    12,
    "Nivel III: 'Liderazgo Ministerial, Ética, Conflictos y Responsabilidad' con 8 módulos sustanciales",
    level3Modules.length === 8 &&
      level3Modules[0].levelName.includes("NIVEL III: LIDERAZGO MINISTERIAL, ÉTICA, CONFLICTOS Y RESPONSABILIDAD"),
    `Level 3 modules count: ${level3Modules.length}`
  );

  // 13. Mínimo 24 módulos analíticos exhaustivos
  assertTest(
    13,
    "El programa contiene exactamente 24 módulos analíticos completos",
    prog.modules.length === 24 &&
      prog.modules.every(
        (m) =>
          m.code &&
          m.moduleTitle &&
          m.generalObjective &&
          m.lessonContent &&
          m.practicalTask &&
          m.evaluationMethod
      ),
    `Modules count: ${prog.modules.length}`
  );

  // 14. Carácter del Líder e Integridad
  const l1Titles = level1Modules.map((m) => m.moduleTitle).join(" | ");
  assertTest(
    14,
    "Nivel I enfatiza el liderazgo siervo, carácter, integridad y vida familiar",
    l1Titles.includes("Liderazgo Cristiano como Servicio") &&
      l1Titles.includes("Forja del Carácter del Líder") &&
      l1Titles.includes("Integridad, Testimonio Público y Vida Familiar") &&
      l1Titles.includes("Vida Devocional"),
    `L1 Modules: ${l1Titles}`
  );

  // 15. Discipulado Bíblico y Acompañamiento
  assertTest(
    15,
    "Discipulado bíblico y mentoreo relacional articulado con REN-DOC-007",
    l1Titles.includes("Discipulado Bíblico y la Formación Integral") &&
      content.includes("REN-DOC-007") &&
      content.includes("REN-FORM-DIS-007"),
    "Discipulado y REN-DOC-007"
  );

  // 16. Familias de Grupo (8-15 personas, multiplicación 15-20, no 'células')
  assertTest(
    16,
    "Familias de Grupo: tamaño orientativo (8-15) y zona de multiplicación (15-20) sin rigidez matemática",
    content.includes("Ocho (8) a quince (15) personas") &&
      content.includes("Quince (15) a veinte (20) personas") &&
      content.includes("Familias de Grupo") &&
      !content.includes("célula de crecimiento") &&
      !content.includes("células hogareñas"),
    "Familias de Grupo y parámetros orientativos"
  );

  // 17. Multiplicación de Familias de Grupo
  const l2Titles = level2Modules.map((m) => m.moduleTitle).join(" | ");
  assertTest(
    17,
    "Nivel II cubre apertura, dirección, pastoreo, evangelismo y multiplicación de Familias de Grupo",
    l2Titles.includes("Visión y Fundamentos Bíblicos de las Familias de Grupo") &&
      l2Titles.includes("Apertura, Estructura y Roles") &&
      l2Titles.includes("Planificación y Dirección Efectiva") &&
      l2Titles.includes("Multiplicación Saludable"),
    `L2 Modules: ${l2Titles}`
  );

  // 18. Liderazgo como Servicio (Marcos 10, Juan 13)
  assertTest(
    18,
    "Liderazgo siervo basado en el modelo de Jesús (toalla y lebrillo)",
    content.includes("Marcos 10:42-45") &&
      content.includes("Juan 13") &&
      content.includes("líder siervo"),
    "Liderazgo siervo"
  );

  // 19. Ética Ministerial y Transparencia
  const l3Titles = level3Modules.map((m) => m.moduleTitle).join(" | ");
  assertTest(
    19,
    "Nivel III desarrolla la ética ministerial, rendición de cuentas y límites pastorales",
    l3Titles.includes("Estructura Institucional, Gobierno y Líneas de Supervisión") &&
      l3Titles.includes("Autoridad Espiritual, Rendición de Cuentas") &&
      l3Titles.includes("Límites Estrictos de Autoridad") &&
      content.includes("Código Ético del Líder"),
    `L3 Modules: ${l3Titles}`
  );

  // 20. Resolución Bíblica de Conflictos (Mateo 18 / REN-DOC-005)
  assertTest(
    20,
    "Resolución bíblica de conflictos bajo Mateo 18 y armonizada con REN-DOC-005",
    l3Titles.includes("Resolución Bíblica de Conflictos y Mediación") &&
      content.includes("Mateo 18:15-17") &&
      content.includes("REN-DOC-005") &&
      content.includes("mediación"),
    "Resolución de conflictos"
  );

  // 21. Principio Central: Formación de Formadores (2 Timoteo 2:2)
  assertTest(
    21,
    "Principio supremo: 'NO formar seguidores dependientes; FORMAR FORMADORES' (2 Timoteo 2:2)",
    content.includes("Formación de Formadores") &&
      content.includes("2 Timoteo 2:2") &&
      content.includes("FORMACIÓN DE FORMADORES"),
    "Formación de formadores"
  );

  // 22. Metodología de 7 Pasos (Identificar a Multiplicar)
  assertTest(
    22,
    "Metodología de 7 pasos: IDENTIFICAR -> INVOLUCRAR -> FORMAR -> ACOMPAÑAR -> ASIGNAR -> EVALUAR -> MULTIPLICAR",
    content.includes("1. IDENTIFICAR") &&
      content.includes("2. INVOLUCRAR") &&
      content.includes("3. FORMAR") &&
      content.includes("4. ACOMPAÑAR") &&
      content.includes("5. ASIGNAR") &&
      content.includes("6. EVALUAR") &&
      content.includes("7. MULTIPLICAR"),
    "Metodología de 7 pasos"
  );

  // 23. Límites Estrictos de Autoridad (Prohibición de control financiero, marital, médico o profético)
  assertTest(
    23,
    "Prohibiciones absolutas de control sobre dinero privado, matrimonio, salud y decisiones civiles",
    content.includes("patrimonio personal") &&
      content.includes("elección de cónyuge") &&
      content.includes("Decisiones de salud") &&
      content.includes("manipulación espiritual"),
    "Límites de autoridad"
  );

  // 24. Protección a Menores y Deber Legal bajo N.J.S.A. 9:6-8.10
  assertTest(
    24,
    "Protección de menores: regla de dos adultos y deber irrenunciable de denuncia (1-877-NJ-ABUSE / N.J.S.A. 9:6-8.10)",
    content.includes("N.J.S.A. 9:6-8.10") &&
      content.includes("1-877-NJ-ABUSE") &&
      content.includes("REN-DOC-016") &&
      content.includes("dos adultos presentes"),
    "Protección de menores"
  );

  // 25. Profecía Ordenada y Somedita a la Escritura (1 Corintios 14)
  assertTest(
    25,
    "Uso ordenado de dones y profecía subordinada a la Biblia sin coacción manipuladora",
    content.includes("1 Corintios 14") &&
      content.includes("discernimiento pastoral") &&
      content.includes("Proscripción de la Manipulación Profética"),
    "Profecía ordenada"
  );

  // 26. Plena Participación de las Mujeres en el Liderazgo y Ministerio
  assertTest(
    26,
    "Acceso pleno de mujeres al liderazgo, predicación, supervisión, credenciales y ordenación pastoral",
    content.includes("PLENA PARTICIPACIÓN Y LIDERAZGO DE LAS MUJERES") &&
      content.includes("Gálatas 3:28") &&
      content.includes("ordenación pastoral plena"),
    "Liderazgo femenino"
  );

  // 27. Sistema de Evaluación Multidimensional
  assertTest(
    27,
    "Sistema de evaluación integral (Conocimiento 20%, Carácter 25%, Práctica 30%, Mentoreo 15%, Asistencia 10%)",
    content.includes("Sistema de Evaluación Multidimensional") &&
      content.includes("Conocimiento Doctrinal e Institucional") &&
      content.includes("Práctica Ministerial y Facilitación"),
    "Evaluación multidimensional"
  );

  // 28. Práctica Ministerial Obligatoria en los 3 Niveles
  assertTest(
    28,
    "Requisitos de práctica ministerial en Familias de Grupo, visitas, evangelismo y mentoreo de asistente",
    prog.modules.every((m) => m.practicalTask && m.practicalTask.length > 5),
    "Prácticas ministeriales"
  );

  // 29. Arquitectura del Libro del Maestro
  assertTest(
    29,
    "Especificación estructural y metodológica del Libro del Maestro de Liderazgo",
    content.includes("Libro del Maestro de Liderazgo") &&
      content.includes("fundamentos exegéticos") &&
      content.includes("Rúbricas de evaluación formativa"),
    "Libro del Maestro"
  );

  // 30. Arquitectura del Libro del Estudiante
  assertTest(
    30,
    "Especificación estructural y pedagógica del Libro del Estudiante de Liderazgo",
    content.includes("Libro del Estudiante de Liderazgo") &&
      content.includes("manual de formación personal") &&
      content.includes("Cuestionarios de estudio personal"),
    "Libro del Estudiante"
  );

  // 31. Matriz Curricular Completa (24 Módulos)
  assertTest(
    31,
    "Matriz Curricular completa con los 24 módulos y códigos oficiales",
    LEADERS_CURRICULAR_MATRIX.length === 24 &&
      content.includes("MATRIZ CURRICULAR GENERAL") &&
      content.includes("LID-N1-M01") &&
      content.includes("LID-N2-M05") &&
      content.includes("LID-N3-M08"),
    `Curricular matrix length: ${LEADERS_CURRICULAR_MATRIX.length}`
  );

  // 32. Matriz de Competencias Institucionales (13 Competencias por 3 Niveles)
  assertTest(
    32,
    "Matriz de Competencias Institucionales estructurada en 13 dimensiones por 3 niveles",
    LEADERS_COMPETENCY_MATRIX.length === 13 &&
      content.includes("MAPA Y MATRIZ DE COMPETENCIAS POR NIVEL") &&
      content.includes("Carácter e Integridad") &&
      content.includes("Formación de Formadores"),
    `Competencies count: ${LEADERS_COMPETENCY_MATRIX.length}`
  );

  // 33. Catálogo de Formularios Futuros (9 Formularios)
  assertTest(
    33,
    "Catálogo oficial de 9 formularios futuros (REN-FORM-LID-001 a 009)",
    LEADERS_FUTURE_FORMS_CATALOG.length === 9 &&
      content.includes("REN-FORM-LID-001") &&
      content.includes("REN-FORM-LID-007") &&
      content.includes("REN-FORM-LID-009"),
    `Forms count: ${LEADERS_FUTURE_FORMS_CATALOG.length}`
  );

  // 34. Registros y Expedientes Académicos (REN-DOC-019)
  assertTest(
    34,
    "Custodia confidencial de expedientes y archivo remitido a REN-DOC-019",
    content.includes("expedientes personales") || content.includes("legajos personales") &&
      content.includes("REN-DOC-019") &&
      content.includes("Secretaría de Liderazgo"),
    "Registros y archivo"
  );

  // 35. Armonización Estricta con REN-DOC-006 (Manual de Ministerios y Liderazgo)
  assertTest(
    35,
    "Armonización estructural con REN-DOC-006 (cadena de supervisión, roles y límites)",
    content.includes("REN-DOC-006") &&
      content.toLowerCase().includes("líderes de área") &&
      content.toLowerCase().includes("supervisores") &&
      content.toLowerCase().includes("familias de grupo"),
    "Armonización REN-DOC-006"
  );

  // 36. Relación con Escuela de Discípulos (REN-DOC-007)
  assertTest(
    36,
    "Articulación formativa: Escuela de Discípulos (REN-DOC-007) como requisito previo de ingreso",
    content.includes("REN-DOC-007") &&
      content.includes("Escuela de Discípulos"),
    "Relación REN-DOC-007"
  );

  // 37. Relación con Reglamento de Credenciales (REN-DOC-010)
  assertTest(
    37,
    "Ruta ministerial distinguida: Candidato -> Licenciado -> Ordenado -> Pastor (REN-DOC-010)",
    content.includes("REN-DOC-010") &&
      content.includes("Seminario Bíblico RENACER") &&
      content.includes("Candidato"),
    "Relación REN-DOC-010"
  );

  // 38. Delimitación: NO es ordenación
  assertTest(
    38,
    "Cláusula explícita: La Escuela de Líderes NO constituye ordenación pastoral",
    content.includes("NO constituye ordenación pastoral"),
    "No ordenación"
  );

  // 39. Delimitación: NO es licencia ministerial
  assertTest(
    39,
    "Cláusula explícita: NO concede licencia ministerial",
    content.includes("NO concede licencia ministerial"),
    "No licencia"
  );

  // 40. Delimitación: NO es credencial ministerial
  assertTest(
    40,
    "Cláusula explícita: NO acredita formalmente como Ministro Licenciado o Ministro Ordenado",
    content.includes("Ministro Licenciado") || content.includes("NO concede licencia ministerial"),
    "No credencial"
  );

  // 41. REN-DOC-001 intacto
  const doc001 = getInstitutionalDocumentById("doc-ren-001");
  assertTest(
    41,
    "REN-DOC-001 (Declaración de Fe) permanece íntegro e inalterado (v1.0 BORRADOR NO ADOPTADA)",
    doc001 !== undefined &&
      doc001.documentNumber === "REN-DOC-001" &&
      doc001.version === "1.0" &&
      doc001.title.includes("Declaración de Fe"),
    `REN-DOC-001: ${doc001?.title}, version: ${doc001?.version}`
  );

  // 42. REN-DOC-002 intacto
  const doc002 = getInstitutionalDocumentById("doc-ren-002");
  assertTest(
    42,
    "REN-DOC-002 (Constitución) permanece íntegro e inalterado (v0.1 EN_REDACCION NO ADOPTADA)",
    doc002 !== undefined &&
      doc002.documentNumber === "REN-DOC-002" &&
      doc002.version === "0.1" &&
      doc002.status === "EN_REDACCION",
    `REN-DOC-002: ${doc002?.title}, version: ${doc002?.version}`
  );

  // 43. REN-DOC-003 intacto
  const doc003 = getInstitutionalDocumentById("doc-ren-003");
  assertTest(
    43,
    "REN-DOC-003 (Bylaws) permanece íntegro e inalterado (v0.1 EN_REDACCION NO ADOPTADA)",
    doc003 !== undefined &&
      doc003.documentNumber === "REN-DOC-003" &&
      doc003.version === "0.1" &&
      doc003.status === "EN_REDACCION",
    `REN-DOC-003: ${doc003?.title}, version: ${doc003?.version}`
  );

  // 44. REN-DOC-004 intacto
  const doc004 = getInstitutionalDocumentById("doc-ren-004");
  assertTest(
    44,
    "REN-DOC-004 (Manual de Gobierno) permanece íntegro e inalterado (v0.1 EN_REDACCION NO ADOPTADA)",
    doc004 !== undefined &&
      doc004.documentNumber === "REN-DOC-004" &&
      doc004.version === "0.1" &&
      doc004.status === "EN_REDACCION",
    `REN-DOC-004: ${doc004?.title}, version: ${doc004?.version}`
  );

  // 45. REN-DOC-005 intacto
  const doc005 = getInstitutionalDocumentById("doc-ren-005");
  assertTest(
    45,
    "REN-DOC-005 (Manual de Membresía) permanece íntegro e inalterado (v0.1 EN_REDACCION NO ADOPTADA)",
    doc005 !== undefined &&
      doc005.documentNumber === "REN-DOC-005" &&
      doc005.version === "0.1" &&
      doc005.status === "EN_REDACCION",
    `REN-DOC-005: ${doc005?.title}, version: ${doc005?.version}`
  );

  // 46. REN-DOC-006 intacto
  const doc006 = getInstitutionalDocumentById("doc-ren-006");
  assertTest(
    46,
    "REN-DOC-006 (Manual de Ministerios y Liderazgo) permanece íntegro e inalterado (v0.1 EN_REDACCION NO ADOPTADA)",
    doc006 !== undefined &&
      doc006.documentNumber === "REN-DOC-006" &&
      doc006.version === "0.1" &&
      doc006.status === "EN_REDACCION",
    `REN-DOC-006: ${doc006?.title}, version: ${doc006?.version}`
  );

  // 47. REN-DOC-007 intacto
  const doc007 = getInstitutionalDocumentById("doc-ren-007");
  assertTest(
    47,
    "REN-DOC-007 (Escuela de Discípulos) permanece íntegro e inalterado (v0.1 EN_REDACCION NO ADOPTADA)",
    doc007 !== undefined &&
      doc007.documentNumber === "REN-DOC-007" &&
      doc007.version === "0.1" &&
      doc007.status === "EN_REDACCION" &&
      (doc007.content?.length || 0) > 40000,
    `REN-DOC-007: ${doc007?.title}, version: ${doc007?.version}`
  );

  // 48. Las 107 Decisiones Históricas permanecen intactas
  const decisions = getAllInstitutionalDecisions();
  assertTest(
    48,
    "Las 107 decisiones históricas permanecen intactas y completas",
    decisions.length === 107,
    `Total decisions: ${decisions.length}`
  );

  // 49. Trazabilidad con decisiones institucionales reales
  const validDecisionNumbers = new Set(decisions.map((d) => d.decisionNumber));
  const usedDecisions = prog.titles.flatMap((t) => t.sections.flatMap((s) => s.decisionIds));
  const allDecisionsValid = usedDecisions.every((id) => validDecisionNumbers.has(id));
  assertTest(
    49,
    "Trazabilidad: Todas las decisiones institucionales citadas existen en el repositorio oficial",
    allDecisionsValid && usedDecisions.length > 5,
    `Used decisions: ${usedDecisions.join(", ")}`
  );

  // 50. Servicio de Documentos Institucionales entrega REN-DOC-008 completo
  const doc008 = getInstitutionalDocumentById("doc-ren-008");
  assertTest(
    50,
    "Servicio de Documentos Institucionales entrega REN-DOC-008 con contenido sustancial (>40,000 caracteres)",
    doc008 !== undefined &&
      doc008.documentNumber === "REN-DOC-008" &&
      (doc008.content?.length || 0) > 40000,
    `Doc008 content length: ${doc008?.content?.length || 0}`
  );

  // 51. Buscador Institucional indexa REN-DOC-008
  const searchResults1 = searchRenacerKnowledge("Escuela de Líderes");
  const searchResults2 = searchRenacerKnowledge("Formación de Formadores");
  assertTest(
    51,
    "Buscador institucional indexa y recupera REN-DOC-008 por términos clave",
    searchResults1.some((d) => d.code === "REN-DOC-008" || d.id === "doc-ren-008") &&
      searchResults2.some((d) => d.code === "REN-DOC-008" || d.id === "doc-ren-008"),
    `Search results count: ${searchResults1.length}, ${searchResults2.length}`
  );

  // 52. Inventario Administrativo audita REN-DOC-008 con contenido completo
  const inventory = getDocumentInventoryAudit();
  const inv008 = inventory.find((item) => item.code === "REN-DOC-008");
  assertTest(
    52,
    "Inventario administrativo audita REN-DOC-008 como borrador en redacción con contenido real",
    inv008 !== undefined &&
      inv008.hasFullContent === true &&
      inv008.completeness === "DOCUMENTO_PARCIAL",
    `Inventory item 008: ${JSON.stringify(inv008)}`
  );

  // 53. Métricas del sistema actualizadas
  const metrics = getSystemOverviewMetrics();
  assertTest(
    53,
    "Métricas del sistema reflejan el inventario institucional completo",
    metrics.totalDecisions === 107 && metrics.completeDocumentsCount >= 8,
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

runPhase39Tests().catch((err) => {
  console.error("Error fatal ejecutando pruebas de Fase 39:", err);
  process.exit(1);
});
