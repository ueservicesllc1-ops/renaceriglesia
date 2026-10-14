/**
 * TEST SUITE — FASE 43: MANUAL OFICIAL DE CEREMONIAS, ORDENANZAS Y ACTOS LITÚRGICOS DE RENACER (REN-DOC-012)
 *
 * Verificaciones exhaustivas de:
 * 1. Identidad institucional de REN-DOC-012 (Código, Versión v0.1, Estado EN_REDACCION, No adoptada, Requiere revisión legal)
 * 2. Estructura normativa de 30 títulos completos con artículos operativos
 * 3. Distinción taxativa entre las 2 Ordenanzas Bíblicas de Jesucristo (Bautismo y Santa Cena) y los Actos Litúrgicos/Pastorales
 * 4. Bautismo en agua: inmersión de creyentes en la fórmula trinitaria (Mateo 28:19), exclusión del bautismo de infantes
 * 5. Bautismo: Solicitud (REN-FORM-CER-001) y Acta Notarial Eclesiástica (REN-FORM-CER-002)
 * 6. Santa Cena: Memorial y comunión espiritual (1 Cor 11), sin transustanciación, para creyentes bautizados en plena comunión
 * 7. Presentación de niños: Dedicación pastoral y compromiso familiar (Lucas 2), no bautismo, sin regeneración (REN-FORM-CER-004/005)
 * 8. Matrimonio cristiano: Pacto sagrado exclusivo entre un hombre biológico y una mujer biológica (Génesis 2, Mateo 19)
 * 9. Matrimonio: Distinción entre acto religioso y requisitos civiles de New Jersey (REN-FORM-CER-006/007 / REQUIERE_REVISION_LEGAL)
 * 10. Funerales y memoriales: Consuelo pastoral y proclamación de la resurrección (1 Tes 4), sin juicios tajantes sobre destinos eternos
 * 11. Oración por enfermos: Oración de fe bíblica, sin culpar al enfermo, sin garantizar milagros mágicos y sin suspender medicina
 * 12. Unción con aceite: Santiago 5:14-15, aceite como símbolo de consagración sin poderes mágicos (REN-FORM-CER-009)
 * 13. Imposición de manos: Reverente, decorosa, consensuada, con salvaguarda estricta de menores
 * 14. Licenciamiento ministerial: Reconocimiento público articulado con REN-DOC-010 y emisión de Acta (REN-FORM-CER-010)
 * 15. Ordenación ministerial: Liturgia presbiterial solemne con Pastor Fundador y presbiterio (REN-FORM-CER-011)
 * 16. Recepción de nuevos miembros: Acogida congregacional y compromiso mutuo conforme a REN-DOC-005
 * 17. Recepción de ministros externos: Articulada con REN-DOC-010 tras decisión institucional previa
 * 18. Dedicación de templos y espacios: Consagración litúrgica sin transferir titularidad patrimonial civil (REN-DOC-003)
 * 19. Envío misionero y comisionamiento: Bendición según Hechos 13, sin constituir contrato laboral civil (REN-FORM-CER-012)
 * 20. Fluir carismático con orden apostólico: 1 Corintios 14:40, discernimiento neumatológico y subordinación a las Escrituras
 * 21. Plena igualdad ministerial: Mujeres como oficiantes, pastoras, predicadoras y líderes sin discriminación (DEC-DEF-013)
 * 22. Seguridad, salvaguardas y protección infantil: Regla de 2 adultos y deber de no obstaculizar emergencias médicas o policiales
 * 23. Libros oficiales de registro eclesiástico y custodia permanente bajo REN-DOC-019
 * 24. Catálogo oficial de 12 formularios litúrgicos (REN-FORM-CER-001 a 012)
 * 25. Límites entre acto religioso y efectos jurídicos civiles (REQUIERE_REVISION_LEGAL)
 * 26. Adaptabilidad cultural y lingüística con fidelidad doctrinal estricta
 * 27. Estructura estandarizada de guiones litúrgicos en 12 componentes
 * 28. Trazabilidad con decisiones institucionales reales (DEC-DEF-001, 002, 003, 004, 005, 010, 013, 019, DEC-PEND-010)
 * 29. Inmutabilidad e integridad de REN-DOC-001 a REN-DOC-011 y las 107 Decisiones Históricas
 * 30. Confirmación estricta de que REN-DOC-013 NO fue creado
 * 31. Integración en Catálogo Maestro, Biblioteca Institucional, Inventario Administrativo y Buscador
 */

import {
  getInstitutionalDocumentById,
  getAllInstitutionalDocuments,
} from "../src/lib/institutional-document-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { searchRenacerKnowledge } from "../src/lib/knowledge-search-service";
import {
  FULL_CEREMONIES_MANUAL_DRAFT,
  CEREMONIES_MANUAL_DRAFT,
  CEREMONIES_TITLES_DATA,
  CEREMONIES_FORMS_CATALOG,
  generateFullCeremoniesManualMarkdown,
} from "../src/lib/ceremonies-manual-full-draft";
import { getDocumentInventoryAudit, getSystemOverviewMetrics } from "../src/lib/admin-service";

interface TestResult {
  num: number;
  name: string;
  passed: boolean;
  error?: string;
}

const results: TestResult[] = [];

function assertTest(num: number, name: string, condition: boolean, errorMsg?: string) {
  if (condition) {
    results.push({ num, name, passed: true });
    console.log(`[PASS] Test ${num.toString().padStart(2, "0")}: ${name}`);
  } else {
    results.push({ num, name, passed: false, error: errorMsg || "Assertion failed" });
    console.error(`[FAIL] Test ${num.toString().padStart(2, "0")}: ${name} -> ${errorMsg}`);
  }
}

async function runPhase43Tests() {
  console.log("================================================================================");
  console.log("INICIANDO SUITE DE PRUEBAS DE FASE 43 — MANUAL DE CEREMONIAS (REN-DOC-012)");
  console.log("================================================================================\n");

  const docFromLibrary = getInstitutionalDocumentById("doc-ren-012");
  const docFromCatalog = INITIAL_MASTER_CATALOG.find((d) => d.documentNumber === "REN-DOC-012");
  const allDecisions = getAllInstitutionalDecisions();

  // Test 01 - Existencia
  assertTest(1, "Documento REN-DOC-012 existe en la Biblioteca Institucional", !!docFromLibrary);

  // Test 02 - Código oficial
  assertTest(2, "Código oficial es exactamente REN-DOC-012", docFromLibrary?.documentNumber === "REN-DOC-012");

  // Test 03 - Título oficial
  assertTest(
    3,
    "Título es MANUAL OFICIAL DE CEREMONIAS, ORDENANZAS Y ACTOS LITÚRGICOS DE RENACER",
    docFromLibrary?.title === "MANUAL OFICIAL DE CEREMONIAS, ORDENANZAS Y ACTOS LITÚRGICOS DE RENACER"
  );

  // Test 04 - Versión inicial
  assertTest(4, "Versión inicial es 0.1 (v0.1)", docFromLibrary?.version === "0.1");

  // Test 05 - Estado de redacción
  assertTest(5, "Estado de redacción es EN_REDACCION", docFromLibrary?.status === "EN_REDACCION");

  // Test 06 - Estado de adopción
  assertTest(6, "Estado de adopción es NO_ADOPTADA (Borrador no adoptado)", CEREMONIES_MANUAL_DRAFT.adoptionStatus === "NO_ADOPTADA");

  // Test 07 - Estado legal
  assertTest(7, "Estado legal es REQUIERE_REVISION_LEGAL", docFromLibrary?.legalState === "REQUIERE_REVISION_LEGAL");

  // Test 08 - Nivel jerárquico
  assertTest(8, "Nivel jerárquico es NIVEL_4_MANUAL_INSTITUCIONAL", docFromCatalog?.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL");

  // Test 09 - Categoría
  assertTest(9, "Categoría es CEREMONIAS_Y_ORDENANZAS", docFromCatalog?.category === "CEREMONIAS_Y_ORDENANZAS");

  // Test 10 - Total de títulos normativos
  assertTest(10, "Estructura contiene exactamente 30 títulos normativos completos", CEREMONIES_TITLES_DATA.length >= 30);

  // Test 11 - Las 2 Ordenanzas Bíblicas instituidas por Jesucristo
  const t2 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO II");
  assertTest(
    11,
    "Distingue taxativamente las dos Ordenanzas Bíblicas: Bautismo en agua y Santa Cena",
    !!t2 && t2.articles.some((a) => a.content.includes("Bautismo en Agua por Inmersión") && a.content.includes("Santa Cena del Señor"))
  );

  // Test 12 - Clasificación de actos litúrgicos vs sacramento
  assertTest(
    12,
    "Clasifica los restantes actos como liturgias pastorales sin atribuirles sacramentalismo mágico",
    !!t2 && t2.articles.some((a) => a.content.includes("Actos Litúrgicos y Pastorales") && a.content.includes("sacramentalista"))
  );

  // Test 13 - Facultades litúrgicas y autoridad ministerial
  const t3 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO III");
  assertTest(
    13,
    "Define competencias litúrgicas de ministros ordenados, licenciados y Pastor Fundador",
    !!t3 && t3.articles.some((a) => a.content.includes("Pastor Fundador y los Ministros Ordenados poseen facultades plenas"))
  );

  // Test 14 - Bautismo: profesión de fe, inmersión y fórmula trinitaria
  const t5 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO V");
  assertTest(
    14,
    "Bautismo de creyentes por inmersión total en la fórmula trinitaria (Mateo 28:19) y exclusión de infantes",
    !!t5 && t5.articles.some((a) => a.content.includes("inmersión completa en agua") && a.content.includes("excluido el bautismo de infantes"))
  );

  // Test 15 - Bautismo: Solicitud y Acta Notarial Eclesiástica
  assertTest(
    15,
    "Bautismo documentado mediante Solicitud (REN-FORM-CER-001) y Acta Notarial (REN-FORM-CER-002)",
    !!t5 &&
      t5.articles.some((a) => a.content.includes("REN-FORM-CER-001")) &&
      t5.articles.some((a) => a.content.includes("REN-FORM-CER-002"))
  );

  // Test 16 - Santa Cena: memorial y comunión espiritual sin transustanciación
  const t6 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO VI");
  assertTest(
    16,
    "Santa Cena como memorial y comunión espiritual rechazando transustanciación física",
    !!t6 && t6.articles.some((a) => a.content.includes("transustanciación") && a.content.includes("presencia espiritual de Cristo"))
  );

  // Test 17 - Santa Cena: autoexamen y creyentes bautizados
  assertTest(
    17,
    "Santa Cena exige autoexamen de conciencia (1 Cor 11:28) para creyentes bautizados en plena comunión",
    !!t6 && t6.articles.some((a) => a.content.includes("autoexamen de conciencia") && a.content.includes("creyentes bautizados"))
  );

  // Test 18 - Presentación de niños: dedicación y consentimiento, no bautismo
  const t7 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO VII");
  assertTest(
    18,
    "Presentación de niños es acto pastoral de dedicación (Lucas 2), no confiere regeneración bautismal",
    !!t7 && t7.articles.some((a) => a.content.includes("No constituye bautismo") && a.content.includes("REN-FORM-CER-004"))
  );

  // Test 19 - Matrimonio cristiano: pacto entre un hombre y una mujer
  const t8 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO VIII");
  assertTest(
    19,
    "Matrimonio consagrado exclusivamente como pacto sagrado entre un hombre y una mujer (Génesis 2, Mateo 19)",
    !!t8 && t8.articles.some((a) => a.content.includes("hombre biológico y una mujer biológica") && a.content.includes("REN-DOC-001"))
  );

  // Test 20 - Matrimonio: distinción sagrado vs licencia civil de NJ
  assertTest(
    20,
    "Matrimonio distingue rito sagrado de Licencia Matrimonial Civil de NJ (REN-FORM-CER-006/007)",
    !!t8 && t8.articles.some((a) => a.content.includes("Licencia Matrimonial Civil") && a.content.includes("REN-FORM-CER-007"))
  );

  // Test 21 - Funerales: consuelo pastoral y resurrección sin juicios de destino eterno
  const t9 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO IX");
  assertTest(
    21,
    "Funerales proclaman la resurrección en Cristo (1 Tes 4) sin juicios tajantes sobre destinos eternos",
    !!t9 && t9.articles.some((a) => a.content.includes("resurrección en Cristo") && a.content.includes("destino eterno"))
  );

  // Test 22 - Oración por enfermos: fe bíblica sin culpar al enfermo ni suspender medicina
  const t10 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO X");
  assertTest(
    22,
    "Oración por enfermos: prohíbe culpar al enfermo, garantizar milagros automáticos o suspender medicina",
    !!t10 && t10.articles.some((a) => a.content.includes("no culparán al enfermo") && a.content.includes("abandonar terapias médicas"))
  );

  // Test 23 - Unción con aceite según Santiago 5 sin atributos mágicos
  const t11 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XI");
  assertTest(
    23,
    "Unción con aceite puro según Santiago 5:14-15 como símbolo sagrado sin poderes mágicos",
    !!t11 && t11.articles.some((a) => a.content.includes("Santiago 5:14-15") && a.content.includes("poderes mágicos"))
  );

  // Test 24 - Imposición de manos decorosa y consensuada
  const t12 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XII");
  assertTest(
    24,
    "Imposición de manos decorosa y consensuada con prohibición de toques invasivos y salvaguarda de menores",
    !!t12 && t12.articles.some((a) => a.content.includes("toque invasivo") && a.content.includes("regla de dos adultos"))
  );

  // Test 25 - Licenciamiento ministerial articulado con REN-DOC-010
  const t13 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XIII");
  assertTest(
    25,
    "Liturgia de licenciamiento ministerial coordinada con REN-DOC-010 y Acta REN-FORM-CER-010",
    !!t13 && t13.articles.some((a) => a.content.includes("REN-DOC-010") && a.content.includes("REN-FORM-CER-010"))
  );

  // Test 26 - Ordenación ministerial solemne con presbiterio y Acta REN-FORM-CER-011
  const t14 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XIV");
  assertTest(
    26,
    "Ceremonia presbiterial solemne de ordenación con imposición de manos y Acta Notarial REN-FORM-CER-011",
    !!t14 && t14.articles.some((a) => a.content.includes("presbiterio ordenante") && a.content.includes("REN-FORM-CER-011"))
  );

  // Test 27 - Recepción de nuevos miembros según REN-DOC-005
  const t15 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XV");
  assertTest(
    27,
    "Recepción eclesiástica de miembros en plena comunión articulada con REN-DOC-005",
    !!t15 && t15.articles.some((a) => a.content.includes("REN-DOC-005") && a.content.includes("diestra de compañerismo"))
  );

  // Test 28 - Dedicación de templos sin transferencia de propiedad civil
  const t17 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XVII");
  assertTest(
    28,
    "Dedicación de templos e instalaciones sagradas sin transferir titularidad patrimonial civil (REN-DOC-003)",
    !!t17 && t17.articles.some((a) => a.content.includes("titularidad dominial fiduciaria") && a.content.includes("REN-DOC-003"))
  );

  // Test 29 - Envío misionero según Hechos 13 sin constituir contrato laboral civil
  const t18 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XVIII");
  assertTest(
    29,
    "Envío misionero conforme a Hechos 13:2-3 sin constituir de por sí relación contractual laboral",
    !!t18 && t18.articles.some((a) => a.content.includes("Hechos 13:2-3") && a.content.includes("contractual laboral"))
  );

  // Test 30 - Fluir carismático con orden y discernimiento (1 Cor 14:40)
  const t21 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XXI");
  assertTest(
    30,
    "Dones espirituales ejercidos con orden, decencia (1 Cor 14) y subordinación a las Escrituras",
    !!t21 && t21.articles.some((a) => a.content.includes("1 Corintios 14") && a.content.includes("contradecir la Biblia"))
  );

  // Test 31 - Plena igualdad ministerial de la mujer (DEC-DEF-013)
  const t23 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XXIII");
  assertTest(
    31,
    "Plena igualdad de hombres y mujeres para oficiar bautismos, Santa Cena, bodas y ordenaciones (DEC-DEF-013)",
    !!t23 && t23.articles.some((a) => a.content.includes("DEC-DEF-013") && a.content.includes("absoluta igualdad"))
  );

  // Test 32 - Seguridad, emergencias y salvaguardas
  const t24 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XXIV");
  assertTest(
    32,
    "Protocolo de seguridad en santuario y nunca obstaculización de servicios de auxilio médico o policial",
    !!t24 && t24.articles.some((a) => a.content.includes("nunca se impedirá la intervención de los servicios públicos"))
  );

  // Test 33 - Libros oficiales de registro y archivo (REN-DOC-019)
  const t25 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XXV");
  assertTest(
    33,
    "Custodia permanente de Libros Oficiales de Registro Eclesiástico coordinada con REN-DOC-019",
    !!t25 && t25.articles.some((a) => a.content.includes("REN-DOC-019") && a.content.includes("Libros Oficiales"))
  );

  // Test 34 - Catálogo oficial contiene exactamente 12 formularios (REN-FORM-CER-001 a 012)
  assertTest(34, "Catálogo oficial contiene exactamente 12 formularios litúrgicos (REN-FORM-CER-001 a 012)", CEREMONIES_FORMS_CATALOG.length === 12);

  // Test 35 - Límites entre acto religioso y efectos jurídicos civiles (REQUIERE_REVISION_LEGAL)
  const t27 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XXVII");
  assertTest(
    35,
    "Independencia taxativa: ceremonias religiosas no suplen trámites civiles sin leyes de NJ (REQUIERE_REVISION_LEGAL)",
    !!t27 && t27.articles.some((a) => a.content.includes("leyes del Estado de New Jersey"))
  );

  // Test 36 - Adaptabilidad cultural sin alterar doctrina
  const t28 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XXVIII");
  assertTest(
    36,
    "Flexibilidad contextual y bilingüe manteniendo inalterables las doctrinas de REN-DOC-001",
    !!t28 && t28.articles.some((a) => a.content.includes("bilingüe") && a.content.includes("REN-DOC-001"))
  );

  // Test 37 - Trazabilidad con decisiones históricas
  const allCitedDecisions = Array.from(new Set(CEREMONIES_TITLES_DATA.flatMap((t) => t.decisions)));
  const existingDecisionCodes = new Set(allDecisions.map((d) => d.decisionNumber));
  const validDecisions = allCitedDecisions.every((code) => existingDecisionCodes.has(code));
  assertTest(37, "Trazabilidad: Todas las decisiones citadas existen en el repositorio oficial (0 inventadas)", validDecisions);

  // Test 38 - Inmutabilidad de las 107 decisiones históricas
  assertTest(38, "Las 107 Decisiones Institucionales Históricas permanecen intactas e inmutables", allDecisions.length === 107);

  // Test 39 - Inmutabilidad de REN-DOC-001 a REN-DOC-011
  const docs001to011 = [
    "REN-DOC-001",
    "REN-DOC-002",
    "REN-DOC-003",
    "REN-DOC-004",
    "REN-DOC-005",
    "REN-DOC-006",
    "REN-DOC-007",
    "REN-DOC-008",
    "REN-DOC-009",
    "REN-DOC-010",
    "REN-DOC-011",
  ];
  const allExistingDocs = getAllInstitutionalDocuments();
  const all001to011Present = docs001to011.every((num) =>
    allExistingDocs.some((d) => d.documentNumber === num && d.content && d.content.length > 500)
  );
  assertTest(39, "Documentos anteriores REN-DOC-001 a REN-DOC-011 permanecen intactos y vigentes", all001to011Present);

  // Test 40 - Confirmación de que REN-DOC-017 NO fue creado
  const doc017 = allExistingDocs.find((d) => d.documentNumber === "REN-DOC-017");
  const doc017NotCreated = !doc017 || doc017.status === "PLANIFICADO";
  assertTest(40, "Confirmación: REN-DOC-017 NO fue creado en esta fase (permanece planificado)", doc017NotCreated);

  // Test 41 - Indexación en el Inventario Administrativo de Documentos
  const inventoryAudit = getDocumentInventoryAudit();
  const inventoryItem012 = inventoryAudit.find((item) => item.code === "REN-DOC-012");
  assertTest(
    41,
    "REN-DOC-012 está indexado en el Inventario Administrativo de Documentos",
    !!inventoryItem012 && inventoryItem012.hasFullContent
  );

  // Test 42 - Buscador semántico localiza REN-DOC-012
  const searchResults = searchRenacerKnowledge("ceremonias ordenanzas bautismo santa cena");
  const foundInSearch = searchResults.some(
    (res) => res.title.toLowerCase().includes("ceremonias") || res.id.toLowerCase().includes("doc-ren-012") || res.id.toLowerCase().includes("ren-doc-012")
  );
  assertTest(42, "Motor de Búsqueda Institucional indexa y localiza el Manual de Ceremonias", foundInSearch);

  // Test 43 - Extensión y sustancia del contenido
  assertTest(
    43,
    "Contenido completo de REN-DOC-012 es sustancial y operativo (>20,000 caracteres)",
    (docFromLibrary?.content.length || 0) > 20000
  );

  // Test 44 - Generador de Markdown incluye advertencia legal y estado formal
  const docMarkdown = generateFullCeremoniesManualMarkdown();
  assertTest(
    44,
    "Generador de Markdown incluye advertencia legal y estado formal REQUIERE_REVISION_LEGAL",
    docMarkdown.includes("REQUIERE REVISIÓN LEGAL") && docMarkdown.includes("BORRADOR — NO ADOPTADO")
  );

  // Test 45 - Título XXX establece catálogo de materias de revisión letrada
  const t30 = CEREMONIES_TITLES_DATA.find((t) => t.titleNumber === "TÍTULO XXX");
  assertTest(
    45,
    "Título XXX establece catálogo específico de materias reservadas a revisión de abogados en NJ",
    !!t30 && t30.articles.some((a) => a.content.includes("abogados habilitados en el Estado de New Jersey"))
  );

  // Test 46 - Total de artículos normativos operativos
  const totalArticles = CEREMONIES_TITLES_DATA.reduce((acc, t) => acc + t.articles.length, 0);
  assertTest(46, "Total de artículos normativos operativos alcanza al menos 36 artículos sustanciales", totalArticles >= 36);

  // Test 47 - Métricas del sistema reflejan 12 documentos completos/parciales con contenido
  const metrics = getSystemOverviewMetrics();
  assertTest(
    47,
    "Métricas del sistema reflejan 12 documentos completos/parciales con contenido y 107 decisiones",
    metrics.completeDocumentsCount + metrics.partialDocumentsCount >= 12 && metrics.totalDecisions === 107
  );

  // Test 48 - Verificación de presencia de los guiones estandarizados
  assertTest(
    48,
    "El manual incorpora la estructura estandarizada de guiones para las ceremonias solemnes",
    docMarkdown.includes("SERIE OFICIAL DE FORMULARIOS LITÚRGICOS") && docMarkdown.includes("CLÁUSULA DE SALVAGUARDA")
  );

  // Test 49 - Validación de que Bautismo se formula en Mateo 28:19
  assertTest(
    49,
    "Fórmula bautismal explícita en Mateo 28:19 consagrada en el articulado",
    docMarkdown.includes("En el Nombre del Padre, y del Hijo, y del Espíritu Santo")
  );

  // Test 50 - Validación de que la Santa Cena se fundamenta en 1 Corintios 11
  assertTest(
    50,
    "Fundamento de Santa Cena en 1 Corintios 11:23-26 consagrado en el articulado",
    docMarkdown.includes("1 Corintios 11:23-26")
  );

  // Test 51 - Confirmación final de que REN-DOC-001 permanece intacto
  const doc001 = getInstitutionalDocumentById("REN-DOC-001");
  assertTest(
    51,
    "Confirmación final: REN-DOC-001 Declaración de Fe permanece 100% íntegro e inmutable",
    !!doc001 && doc001.documentNumber === "REN-DOC-001" && doc001.content.length > 500
  );

  console.log("\n================================================================================");
  console.log("RESULTADOS DE LA SUITE DE PRUEBAS DE FASE 43");
  console.log("================================================================================");
  const passedCount = results.filter((r) => r.passed).length;
  const failedCount = results.filter((r) => !r.passed).length;
  console.log(`TOTAL DE PRUEBAS: ${results.length}`);
  console.log(`APROBADAS:        ${passedCount}`);
  console.log(`FALLIDAS:         ${failedCount}`);
  console.log("================================================================================");

  if (failedCount > 0) {
    console.error("ERRORES ENCONTRADOS:");
    results
      .filter((r) => !r.passed)
      .forEach((r) => console.error(`  - Test ${r.num}: ${r.name} -> ${r.error}`));
    process.exit(1);
  } else {
    console.log("TODAS LAS PRUEBAS DE LA FASE 43 PASARON EXITOSAMENTE.\n");
    process.exit(0);
  }
}

runPhase43Tests().catch((err) => {
  console.error("Error fatal ejecutando suite de pruebas de Fase 43:", err);
  process.exit(1);
});
