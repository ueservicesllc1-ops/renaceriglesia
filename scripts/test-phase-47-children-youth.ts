/**
 * TEST SUITE: FASE 47 — CREACIÓN REAL DE REN-DOC-016
 * MANUAL OFICIAL DE MINISTERIO INFANTIL Y JUVENIL DE RENACER
 * 
 * Verifica los 32 títulos normativos, 128 artículos reglamentarios,
 * el principio fundamental de subordinación absoluta a la seguridad del menor (REN-DOC-014),
 * la estructura de 5 etapas etarias (Primera Infancia, Niñez, Preadolescencia, Adolescencia, Juventud),
 * el discipulado pedagógico adaptado a menores sin homologación automática a adultos (REN-DOC-007),
 * el evangelismo respetuoso sin manipulación ni chantaje (REN-DOC-015),
 * el rol fundamental de padres y tutores, autorizaciones y consentimientos parentales,
 * el perfil y evaluación de maestros, servidores y voluntarios ([PENDIENTE_DEFINIR] tiempos, [REQUIERE_REVISION_LEGAL] background checks),
 * la regla de dos adultos innegociable y prohibición de aislamiento,
 * los límites de contacto físico pastoral y consejería pastoral sin intrusismo profesional médico/psicológico,
 * la detección, intervención y denuncia inmediata de abusos (911 / autoridades civiles, sin sigilo para encubrir delitos),
 * los protocolos de emergencia, gestión de medicamentos no informal y transporte seguro,
 * los campamentos con dormitorios estrictamente separados por sexo biológico y sin cohabitación adulto-menor,
 * la comunicación digital institucional sin chats privados adulto-menor y consentimiento de imagen,
 * la protección estricta de expedientes sensibles de menores (RBAC),
 * la integración en Familias de Grupo sin control de vida civil ni uso indebido del término "células",
 * el desarrollo de futuros líderes sin conferir credenciales ministeriales de REN-DOC-010,
 * la plena igualdad ministerial de las mujeres en liderazgo infantil y juvenil (REN-DOC-001, DEC-DEF-004),
 * el catálogo oficial de 12 formularios (REN-FORM-IJ-001 a 012),
 * las cláusulas PENDIENTE_DEFINIR y REQUIERE_REVISION_LEGAL,
 * el uso exclusivo de decisiones históricas reales (0 inventadas),
 * la integración en Catálogo Maestro, Biblioteca, Auditoría, Ruta (/infantil-juvenil y /documentos/REN-DOC-016),
 * y la preservación de REN-DOC-001 a 015, las 107 decisiones históricas y no creación de REN-DOC-017.
 */

import {
  CHILDREN_YOUTH_MANUAL_DRAFT,
  CHILDREN_YOUTH_FORMS_CATALOG,
  generateFullChildrenYouthManualMarkdown,
} from "../src/lib/children-youth-manual-full-draft";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import {
  getInstitutionalDocumentById,
  getAllInstitutionalDocuments,
} from "../src/lib/institutional-document-service";
import { getDocumentInventoryAudit } from "../src/lib/admin-service";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";

let passed = 0;
let failed = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    passed++;
    console.log(`  ✅ PASS: ${testName}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${testName}${detail ? ` — ${detail}` : ""}`);
  }
}

console.log("\n=======================================================");
console.log("INICIANDO SUITE DE PRUEBAS — FASE 47 (REN-DOC-016)");
console.log("=======================================================\n");

// 1. Identidad y Metadatos de REN-DOC-016
console.log("--- GRUPO 1: IDENTIDAD Y METADATOS INSTITUCIONALES ---");
assert(CHILDREN_YOUTH_MANUAL_DRAFT.documentNumber === "REN-DOC-016", "1. Código es REN-DOC-016");
assert(
  CHILDREN_YOUTH_MANUAL_DRAFT.title === "MANUAL OFICIAL DE MINISTERIO INFANTIL Y JUVENIL DE RENACER",
  "2. Nombre oficial es exacto"
);
assert(
  CHILDREN_YOUTH_MANUAL_DRAFT.shortTitle === "Manual de Ministerio Infantil y Juvenil",
  "3. Título corto es adecuado"
);
assert(CHILDREN_YOUTH_MANUAL_DRAFT.version === "0.1", "4. Versión es v0.1");
assert(CHILDREN_YOUTH_MANUAL_DRAFT.documentState === "EN_REDACCION", "5. DocumentState es EN_REDACCION");
assert(CHILDREN_YOUTH_MANUAL_DRAFT.decisionState === "DEFINIDA", "6. DecisionState es DEFINIDA");
assert(CHILDREN_YOUTH_MANUAL_DRAFT.adoptionState === "NO_ADOPTADA", "7. AdoptionState es NO_ADOPTADA (Borrador No Adoptado)");
assert(CHILDREN_YOUTH_MANUAL_DRAFT.legalState === "REQUIERE_REVISION_LEGAL", "8. LegalState es REQUIERE_REVISION_LEGAL");
assert(
  CHILDREN_YOUTH_MANUAL_DRAFT.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL",
  "9. Nivel jerárquico es NIVEL_4_MANUAL_INSTITUCIONAL"
);
assert(CHILDREN_YOUTH_MANUAL_DRAFT.category === "INFANTIL_JUVENIL", "10. Categoría es INFANTIL_JUVENIL");

// 2. Estructura de 32 Títulos y 128 Artículos
console.log("\n--- GRUPO 2: ESTRUCTURA NORMATIVA (32 TÍTULOS Y 128 ARTÍCULOS) ---");
assert(CHILDREN_YOUTH_MANUAL_DRAFT.titles.length === 32, "11. Contiene exactamente 32 títulos normativos");

const allArticles = CHILDREN_YOUTH_MANUAL_DRAFT.titles.flatMap((t) => t.articles);
assert(
  allArticles.length === 128,
  `12. Contiene exactamente 128 artículos reglamentarios (actual: ${allArticles.length})`
);

for (let i = 1; i <= 32; i++) {
  const t = CHILDREN_YOUTH_MANUAL_DRAFT.titles[i - 1];
  assert(
    t !== undefined && t.articles.length === 4,
    `13.${i}. Título ${i} (${t?.romanNumeral}) tiene 4 artículos reglamentados`
  );
}

// Helper para búsqueda textual en artículos
const getArtText = (num: number) => {
  const art = allArticles.find((a) => a.number === num);
  if (!art) return "";
  const deps = (art.dependencies || []).join(" ");
  return (art.title + " " + art.content.join(" ") + " " + deps).toLowerCase();
};

// 3. Principio Fundamental y Salvaguardas (REN-DOC-014)
console.log("\n--- GRUPO 3: PRINCIPIO FUNDAMENTAL Y SUBORDINACIÓN A REN-DOC-014 ---");
assert(CHILDREN_YOUTH_MANUAL_DRAFT.preamble.length > 200, "14. Preámbulo sustantivo y teológico presente");
assert(
  CHILDREN_YOUTH_MANUAL_DRAFT.preamble.includes("seguridad") &&
  CHILDREN_YOUTH_MANUAL_DRAFT.preamble.includes("dignidad") &&
  CHILDREN_YOUTH_MANUAL_DRAFT.preamble.includes("REN-DOC-014"),
  "15. Preámbulo consagra la primacía de la seguridad y salvaguarda del menor"
);

const art3Text = getArtText(3);
const art6Text = getArtText(6);
assert(
  art3Text.includes("seguridad") && (art3Text.includes("primacía") || art3Text.includes("ren-doc-014")),
  "16. Artículo 3 consagra la primacía absoluta de la protección del menor sobre fines ministeriales"
);
assert(
  art6Text.includes("ren-doc-014") && art6Text.includes("prioridad operativa"),
  "17. Artículo 6 establece la prioridad operativa de REN-DOC-014 ante cualquier conflicto"
);

// 4. Estructura de Edades (5 Etapas Etarias)
console.log("\n--- GRUPO 4: CLASIFICACIÓN ETARIA (5 ETAPAS) ---");
const art9Text = getArtText(9);
const art10Text = getArtText(10);
const art11Text = getArtText(11);
assert(
  art9Text.includes("primera infancia") &&
  art9Text.includes("niñez") &&
  art9Text.includes("preadolescencia") &&
  art9Text.includes("adolescencia") &&
  art9Text.includes("juventud"),
  "18. Artículo 9 define las 5 etapas etarias institucionales"
);
assert(
  art11Text.includes("pendiente_definir"),
  "19. Artículo 11 marca los rangos numéricos exactos de edad como [PENDIENTE_DEFINIR]"
);
assert(
  art10Text.includes("flexibilidad") && art10Text.includes("madurez"),
  "20. Artículo 10 regula la flexibilidad formativa según la madurez del menor"
);

// 5. Ministerio Infantil
console.log("\n--- GRUPO 5: MINISTERIO INFANTIL (TÍTULO IV) ---");
const art13Text = getArtText(13);
const art14Text = getArtText(14);
const art16Text = getArtText(16);
assert(
  art13Text.includes("enseñanza bíblica") && art13Text.includes("ren-doc-001"),
  "21. Artículo 13 establece enseñanza bíblica cristocéntrica y lúdica conforme a doctrina"
);
assert(
  art14Text.includes("adoración") && art14Text.includes("oración"),
  "22. Artículo 14 regula adoración y oración creativa adaptada a la niñez"
);
assert(
  art16Text.includes("participación familiar") || art16Text.includes("hogar"),
  "23. Artículo 16 norma la participación familiar y el refuerzo de la fe en el hogar"
);

// 6. Preadolescencia y Adolescencia
console.log("\n--- GRUPO 6: PREADOLESCENTES Y JÓVENES (TÍTULOS V Y VI) ---");
const art17Text = getArtText(17);
const art21Text = getArtText(21);
const art22Text = getArtText(22);
const art24Text = getArtText(24);
assert(
  art17Text.includes("preadolescencia") && (art17Text.includes("espacio propio") || art17Text.includes("pequeños")),
  "24. Artículo 17 define el acompañamiento diferenciado de la preadolescencia"
);
assert(
  art21Text.includes("apologética") && art21Text.includes("ren-doc-001"),
  "25. Artículo 21 estructura la apologética y madurez doctrinal juvenil"
);
assert(
  art22Text.includes("sexualidad") && art22Text.includes("ren-doc-001"),
  "26. Artículo 22 regula la enseñanza de sexualidad y relaciones conforme a doctrina RENACER"
);
assert(
  art24Text.includes("no injerencia") && art24Text.includes("padres"),
  "27. Artículo 24 prohíbe la injerencia en decisiones civiles, vocacionales o médicas privadas"
);

// 7. Discipulado y Evangelismo
console.log("\n--- GRUPO 7: DISCIPULADO Y EVANGELISMO (TÍTULOS VII Y VIII) ---");
const art25Text = getArtText(25);
const art26Text = getArtText(26);
const art29Text = getArtText(29);
const art30Text = getArtText(30);
assert(
  art25Text.includes("escuela de discípulos") && art25Text.includes("ren-doc-007"),
  "28. Artículo 25 articula el discipulado con Escuela de Discípulos (REN-DOC-007)"
);
assert(
  art26Text.includes("no equivalencia") && art26Text.includes("adultos"),
  "29. Artículo 26 prohíbe la homologación automática del discipulado infantil al certificado de adultos"
);
assert(
  art29Text.includes("ren-doc-015"),
  "30. Artículo 29 articula el evangelismo infantil/juvenil con REN-DOC-015"
);
assert(
  art30Text.includes("prohibición") && (art30Text.includes("coerción") || art30Text.includes("infierno")),
  "31. Artículo 30 prohíbe estrictamente la manipulación, miedo al infierno o coerción en evangelismo"
);

// 8. Padres, Tutores y Autorizaciones
console.log("\n--- GRUPO 8: PADRES, TUTORES Y AUTORIZACIONES (TÍTULOS IX Y X) ---");
const art33Text = getArtText(33);
const art36Text = getArtText(36);
const art37Text = getArtText(37);
const art39Text = getArtText(39);
assert(
  art33Text.includes("responsabilidad primaria") || art33Text.includes("alianza pastoral"),
  "32. Artículo 33 reconoce a los padres/tutores como responsables primarios"
);
assert(
  art36Text.includes("abuso") && art36Text.includes("ren-doc-014"),
  "33. Artículo 36 establece la obligación legal de protección ante abuso en el hogar"
);
assert(
  art37Text.includes("autorización escrita") && art37Text.includes("ren-form-ij-002"),
  "34. Artículo 37 exige autorización parental escrita y firmada"
);
assert(
  art39Text.includes("requiere_revision_legal"),
  "35. Artículo 39 marca requisitos notariales de autorizaciones como [REQUIERE_REVISION_LEGAL]"
);

// 9. Maestros, Voluntarios y Evaluación
console.log("\n--- GRUPO 9: MAESTROS Y VOLUNTARIOS (TÍTULOS XI, XII Y XIII) ---");
const art41Text = getArtText(41);
const art43Text = getArtText(43);
const art44Text = getArtText(44);
const art50Text = getArtText(50);
assert(
  art41Text.includes("perfil") && art41Text.includes("carácter"),
  "36. Artículo 41 exige perfil de carácter cristiano y solvencia doctrinal a maestros"
);
assert(
  art43Text.includes("no otorga autoridad pastoral") || (art43Text.includes("autoridad pastoral general") && art43Text.includes("ren-doc-010")),
  "37. Artículo 43 aclara que enseñar una clase no confiere autoridad pastoral general"
);
assert(
  art44Text.includes("pendiente_definir"),
  "38. Artículo 44 marca el tiempo previo de membresía para maestros como [PENDIENTE_DEFINIR]"
);
assert(
  art50Text.includes("requiere_revision_legal") && art50Text.includes("antecedentes"),
  "39. Artículo 50 marca la verificación legal de antecedentes penales como [REQUIERE_REVISION_LEGAL]"
);

// 10. Regla de Dos Adultos y Contacto Físico
console.log("\n--- GRUPO 10: DOS ADULTOS Y CONTACTO FÍSICO (TÍTULOS XIV Y XV) ---");
const art53Text = getArtText(53);
const art54Text = getArtText(54);
const art57Text = getArtText(57);
const art59Text = getArtText(59);
assert(
  art53Text.includes("regla de dos adultos") && art53Text.includes("ren-doc-014"),
  "40. Artículo 53 consagra la regla innegociable de dos adultos"
);
assert(
  art54Text.includes("prohibición de aislamiento") || art54Text.includes("a solas"),
  "41. Artículo 54 prohíbe el aislamiento entre un adulto y un menor"
);
assert(
  art57Text.includes("afecto") && (art57Text.includes("respetuoso") || art57Text.includes("público")),
  "42. Artículo 57 define los límites de afecto pastoral visible, público y respetuoso"
);
assert(
  art59Text.includes("prohibición") && (art59Text.includes("castigo físico") || art59Text.includes("inapropiadas")),
  "43. Artículo 59 prohíbe de forma absoluta castigo físico y conductas inapropiadas"
);

// 11. Consejería y Denuncia Obligatoria
console.log("\n--- GRUPO 11: CONSEJERÍA Y DENUNCIA DE ABUSO (TÍTULOS XVI Y XVII) ---");
const art61Text = getArtText(61);
const art63Text = getArtText(63);
const art65Text = getArtText(65);
const art66Text = getArtText(66);
assert(
  art61Text.includes("psicólogos") || art61Text.includes("médicos"),
  "44. Artículo 61 prohíbe presentarse como sustituto de profesionales de salud mental o médicos"
);
assert(
  art63Text.includes("derivación") && art63Text.includes("ren-doc-014"),
  "45. Artículo 63 obliga a la derivación pastoral y médica inmediata ante crisis graves"
);
assert(
  art65Text.includes("tolerancia cero") && art65Text.includes("abuso"),
  "46. Artículo 65 declara tolerancia cero ante cualquier forma de abuso hacia menores"
);
assert(
  art66Text.includes("prohibición de encubrimiento") && art66Text.includes("sigilo"),
  "47. Artículo 66 prohíbe usar la oración, sigilo o mediación interna para encubrir delitos"
);

// 12. Emergencias, Medicamentos y Transporte
console.log("\n--- GRUPO 12: EMERGENCIAS, MEDICAMENTOS Y TRANSPORTE (TÍTULOS XVIII, XIX Y XX) ---");
const art69Text = getArtText(69);
const art73Text = getArtText(73);
const art74Text = getArtText(74);
const art77Text = getArtText(77);
const art78Text = getArtText(78);
assert(
  art69Text.includes("911"),
  "48. Artículo 69 establece prioridad de alerta inmediata al 911 en emergencias graves"
);
assert(
  art73Text.includes("medicamento") && art73Text.includes("informal"),
  "49. Artículo 73 prohíbe la administración informal de medicamentos a menores"
);
assert(
  art74Text.includes("requiere_revision_legal"),
  "50. Artículo 74 marca el protocolo de prescripción de medicamentos como [REQUIERE_REVISION_LEGAL]"
);
assert(
  art77Text.includes("requiere_revision_legal") && art77Text.includes("conductor"),
  "51. Artículo 77 establece requisitos legales de conductores y seguros [REQUIERE_REVISION_LEGAL]"
);
assert(
  art78Text.includes("a solas") || art78Text.includes("segundo adulto"),
  "52. Artículo 78 prohíbe el traslado de menores a solas con un único conductor"
);

// 13. Campamentos, Alojamiento, Comunicación y Privacidad
console.log("\n--- GRUPO 13: CAMPAMENTOS, COMUNICACIÓN Y PRIVACIDAD (TÍTULOS XXI A XXV) ---");
const art81Text = getArtText(81);
const art85Text = getArtText(85);
const art90Text = getArtText(90);
const art93Text = getArtText(93);
const art98Text = getArtText(98);
assert(
  art81Text.includes("campamento") && art81Text.includes("ren-form-ij-011"),
  "53. Artículo 81 planifica campamentos bajo directrices de seguridad de REN-DOC-014 y REN-FORM-IJ-011"
);
assert(
  art85Text.includes("separación") && art85Text.includes("sexo"),
  "54. Artículo 85 exige segregación estricta de dormitorios por sexo biológico y prohíbe cohabitación adulto-menor"
);
assert(
  art90Text.includes("chats privados") || art90Text.includes("conversaciones privadas"),
  "55. Artículo 90 prohíbe mensajes y chats privados individuales entre adultos y menores"
);
assert(
  art93Text.includes("autorización") && art93Text.includes("ren-form-ij-006"),
  "56. Artículo 93 requiere consentimiento expreso de imagen (REN-FORM-IJ-006)"
);
assert(
  art98Text.includes("rbac") || art98Text.includes("control de acceso"),
  "57. Artículo 98 protege los expedientes de menores bajo control de acceso estricto (RBAC)"
);

// 14. Familias de Grupo, Liderazgo y Mujeres
console.log("\n--- GRUPO 14: FAMILIAS DE GRUPO, LIDERAZGO Y MUJERES (TÍTULOS XXVI A XXX) ---");
const art101Text = getArtText(101);
const art103Text = getArtText(103);
const art107Text = getArtText(107);
const art109Text = getArtText(109);
const art113Text = getArtText(113);
assert(
  art101Text.includes("familias de grupo") && art101Text.includes("ren-doc-006"),
  "58. Artículo 101 integra a niños y jóvenes en Familias de Grupo (sin usar 'células' como término principal)"
);
assert(
  art103Text.includes("no injerencia") || art103Text.includes("privados") || art103Text.includes("límites"),
  "59. Artículo 103 prohíbe injerencia en decisiones civiles, laborales, médicas o matrimoniales"
);
assert(
  art107Text.includes("ren-doc-010") && art107Text.includes("credenciales"),
  "60. Artículo 107 prohíbe que cargos juveniles otorguen credenciales pastorales de REN-DOC-010"
);
assert(
  art109Text.includes("igualdad") && art109Text.includes("mujeres"),
  "61. Artículo 109 consagra la plena igualdad de la mujer en ministerio infantil/juvenil conforme a DEC-DEF-004"
);
assert(
  art113Text.includes("disciplina") && art113Text.includes("formativa"),
  "62. Artículo 113 consagra la naturaleza restauradora y formativa de la disciplina"
);

// 15. Formación, Responsabilidades y Finanzas
console.log("\n--- GRUPO 15: RESPONSABILIDADES Y FINANZAS (TÍTULOS XXXI Y XXXII) ---");
const art125Text = getArtText(125);
const art126Text = getArtText(126);
const art127Text = getArtText(127);
assert(
  art125Text.includes("matriz") && art125Text.includes("pastor fundador"),
  "63. Artículo 125 define la matriz de responsabilidades subordinada a los órganos existentes"
);
assert(
  art126Text.includes("quejas") && art126Text.includes("represalias"),
  "64. Artículo 126 establece canal seguro de quejas y protección contra represalias"
);
assert(
  art127Text.includes("ren-doc-013") && art127Text.includes("fondos"),
  "65. Artículo 127 prohíbe lucro privado y asegura mayordomía financiera institucional (REN-DOC-013)"
);

// 16. Catálogo Oficial de 12 Formularios
console.log("\n--- GRUPO 16: CATÁLOGO OFICIAL DE 12 FORMULARIOS ---");
assert(CHILDREN_YOUTH_FORMS_CATALOG.length === 12, "66. Catálogo contiene exactamente 12 formularios");

const expectedForms = [
  "REN-FORM-IJ-001",
  "REN-FORM-IJ-002",
  "REN-FORM-IJ-003",
  "REN-FORM-IJ-004",
  "REN-FORM-IJ-005",
  "REN-FORM-IJ-006",
  "REN-FORM-IJ-007",
  "REN-FORM-IJ-008",
  "REN-FORM-IJ-009",
  "REN-FORM-IJ-010",
  "REN-FORM-IJ-011",
  "REN-FORM-IJ-012",
];

expectedForms.forEach((code, idx) => {
  const form = CHILDREN_YOUTH_FORMS_CATALOG.find((f) => f.code === code);
  assert(form !== undefined, `67.${idx + 1}. Formulario ${code} (${form?.title}) está catalogado oficialmente`);
});

// 17. Trazabilidad: Decisiones Históricas Reales
console.log("\n--- GRUPO 17: TRAZABILIDAD Y DECISIONES HISTÓRICAS REALES ---");
const usedDecisions = [
  "DEC-DEF-001",
  "DEC-DEF-004",
  "DEC-DEF-005",
  "DEC-DEF-010",
  "DEC-DEF-011",
  "DEC-DEF-013",
  "DEC-DEF-019",
  "DEC-PEND-010",
];

const allDecisions = getAllInstitutionalDecisions();
assert(allDecisions.length === 107, `68. Existen exactamente 107 decisiones históricas en el sistema (actual: ${allDecisions.length})`);

usedDecisions.forEach((decNumber, idx) => {
  const dec = allDecisions.find((d) => d.decisionNumber === decNumber);
  assert(dec !== undefined, `69.${idx + 1}. Decisión ${decNumber} es real y existente en el sistema`);
});

// 18. Integración en Catálogo Maestro y Biblioteca
console.log("\n--- GRUPO 18: INTEGRACIÓN EN CATÁLOGO MAESTRO Y SERVICIOS ---");
const catalogDoc = INITIAL_MASTER_CATALOG.find((c) => c.documentNumber === "REN-DOC-016");
assert(catalogDoc !== undefined, "70. REN-DOC-016 registrado en INITIAL_MASTER_CATALOG");
assert(catalogDoc?.category === "INFANTIL_JUVENIL", "71. Categoría de REN-DOC-016 en catálogo es INFANTIL_JUVENIL");
assert(catalogDoc?.status === "EN_REDACCION", "72. Estado de REN-DOC-016 en catálogo es EN_REDACCION");
assert(catalogDoc?.version === "0.1", "73. Versión en catálogo es 0.1");

const libDoc = getInstitutionalDocumentById("doc-ren-016");
assert(libDoc !== undefined, "74. REN-DOC-016 recuperable vía getInstitutionalDocumentById('doc-ren-016')");
assert(libDoc?.legalState === "REQUIERE_REVISION_LEGAL", "75. LegalState en biblioteca es REQUIERE_REVISION_LEGAL");
assert((libDoc?.content?.length || 0) > 5000, "76. Contenido Markdown de REN-DOC-016 generado y sustancial (>5000 caracteres)");

// 19. Generador Markdown Oficial
console.log("\n--- GRUPO 19: GENERADOR MARKDOWN OFICIAL ---");
const mdContent = generateFullChildrenYouthManualMarkdown();
assert(mdContent.includes("# REN-DOC-016"), "77. Markdown contiene encabezado principal # REN-DOC-016");
assert(mdContent.includes("BORRADOR — NO ADOPTADO"), "78. Markdown contiene advertencia BORRADOR — NO ADOPTADO");
assert(mdContent.includes("REQUIERE REVISIÓN LEGAL"), "79. Markdown contiene advertencia REQUIERE REVISIÓN LEGAL");
assert(mdContent.includes("CATÁLOGO OFICIAL DE FORMULARIOS"), "80. Markdown incluye sección de formularios");

// 20. Auditoría Administrativa
console.log("\n--- GRUPO 20: AUDITORÍA ADMINISTRATIVA ---");
const inventory = getDocumentInventoryAudit();
const auditItem16 = inventory.find((i) => i.code === "REN-DOC-016");
assert(auditItem16 !== undefined, "81. REN-DOC-016 auditado en el inventario administrativo");
assert(auditItem16?.completeness === "DOCUMENTO_PARCIAL", "82. Completeness de REN-DOC-016 es DOCUMENTO_PARCIAL (Borrador en Redacción)");
assert(auditItem16?.hasFullContent === true, "83. REN-DOC-016 marcado con hasFullContent === true");

// 21. Preservación de Documentos Anteriores (REN-DOC-001 a 015) y No Creación de REN-DOC-017
console.log("\n--- GRUPO 21: PRESERVACIÓN Y NO CREACIÓN DE REN-DOC-017 ---");
const docs1to15 = [
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
  "REN-DOC-012",
  "REN-DOC-013",
  "REN-DOC-014",
  "REN-DOC-015",
];

docs1to15.forEach((code, idx) => {
  const doc = getInstitutionalDocumentById(code);
  assert(doc !== undefined && doc.content.length > 500, `84.${idx + 1}. ${code} permanece intacto con contenido completo`);
});

const doc17 = getAllInstitutionalDocuments().find((d) => d.documentNumber === "REN-DOC-017");
assert(
  doc17 === undefined || doc17.status === "PLANIFICADO",
  "85. REN-DOC-017 NO ha sido creado sustantivamente (permanece no creado o PLANIFICADO en catálogo)"
);

console.log("\n=======================================================");
console.log(`RESUMEN DE PRUEBAS FASE 47:`);
console.log(`  Superadas: ${passed}`);
console.log(`  Fallidas:  ${failed}`);
console.log("=======================================================\n");

if (failed > 0) {
  process.exit(1);
} else {
  console.log("🎯 TODAS LAS PRUEBAS DE FASE 47 HAN SIDO SUPERADAS EXITOSAMENTE.\n");
}
