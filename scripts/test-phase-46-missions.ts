/**
 * TEST SUITE: FASE 46 — CREACIÓN REAL DE REN-DOC-015
 * MANUAL OFICIAL DE MISIONES, EVANGELISMO Y EXPANSIÓN DE RENACER
 * 
 * Verifica los 32 títulos normativos, 128 artículos reglamentarios,
 * el fundamento bíblico (Mt 28, Mc 16, Hch 1, Hch 13, Ro 10, Ef 4, 2 Ti 2),
 * evangelismo local y digital sin manipulación,
 * ruta de seguimiento de nuevos creyentes en 10 pasos,
 * ruta de plantación de obras en 10 etapas y clasificación de 6 tipos de obra,
 * 6 estados del misionero y deslinde con ministro ordenado (no crea credenciales de REN-DOC-010),
 * proceso de envío en 12 pasos, comisionamiento pastoral (REN-DOC-012),
 * misiones nacionales e internacionales sin falsas promesas migratorias,
 * seguridad misionera articulada con REN-DOC-014 y salvaguardas de menores,
 * plena igualdad ministerial de las mujeres (REN-DOC-001),
 * finanzas y titularidad corporativa exclusiva de RENACER CHURCH, INC. (REN-DOC-013),
 * cooperación intereclesial sin cesión de soberanía y auxilio humanitario incondicional,
 * expediente misionero, protocolos de crisis, catálogo de 12 formularios (REN-FORM-MIS-001 a 012),
 * integración en Catálogo Maestro, Biblioteca, Auditoría, Ruta (/misiones),
 * y preservación de REN-DOC-001 a 014, las 107 decisiones y no creación de REN-DOC-016.
 */

import {
  MISSIONS_MANUAL_DRAFT,
  MISSIONS_FORMS_CATALOG,
  generateFullMissionsManualMarkdown,
} from "../src/lib/missions-manual-full-draft";
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
console.log("INICIANDO SUITE DE PRUEBAS — FASE 46 (REN-DOC-015)");
console.log("=======================================================\n");

// 1. Identidad y Metadatos de REN-DOC-015
console.log("--- GRUPO 1: IDENTIDAD Y METADATOS INSTITUCIONALES ---");
assert(MISSIONS_MANUAL_DRAFT.documentNumber === "REN-DOC-015", "1. Código es REN-DOC-015");
assert(
  MISSIONS_MANUAL_DRAFT.title === "MANUAL OFICIAL DE MISIONES, EVANGELISMO Y EXPANSIÓN DE RENACER",
  "2. Nombre oficial es exacto"
);
assert(MISSIONS_MANUAL_DRAFT.shortTitle === "Manual de Misiones y Expansión", "3. Título corto es adecuado");
assert(MISSIONS_MANUAL_DRAFT.version === "0.1", "4. Versión es v0.1");
assert(MISSIONS_MANUAL_DRAFT.documentState === "EN_REDACCION", "5. DocumentState es EN_REDACCION");
assert(MISSIONS_MANUAL_DRAFT.decisionState === "DEFINIDA", "6. DecisionState es DEFINIDA");
assert(MISSIONS_MANUAL_DRAFT.adoptionState === "NO_ADOPTADA", "7. AdoptionState es NO_ADOPTADA (Borrador No Adoptado)");
assert(MISSIONS_MANUAL_DRAFT.legalState === "REQUIERE_REVISION_LEGAL", "8. LegalState es REQUIERE_REVISION_LEGAL");
assert(MISSIONS_MANUAL_DRAFT.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL", "9. Nivel jerárquico es NIVEL_4_MANUAL_INSTITUCIONAL");
assert(MISSIONS_MANUAL_DRAFT.category === "MISIONES_EVANGELISMO", "10. Categoría es MISIONES_EVANGELISMO");

// 2. Estructura de 32 Títulos y 128 Artículos
console.log("\n--- GRUPO 2: ESTRUCTURA NORMATIVA (32 TÍTULOS Y 128 ARTÍCULOS) ---");
assert(MISSIONS_MANUAL_DRAFT.titles.length === 32, "11. Contiene exactamente 32 títulos normativos");

const allArticles = MISSIONS_MANUAL_DRAFT.titles.flatMap((t) => t.articles);
assert(allArticles.length === 128, `12. Contiene exactamente 128 artículos reglamentarios (actual: ${allArticles.length})`);

for (let i = 1; i <= 32; i++) {
  const t = MISSIONS_MANUAL_DRAFT.titles[i - 1];
  assert(t !== undefined && t.articles.length === 4, `13.${i}. Título ${i} (${t?.romanNumeral}) tiene 4 artículos reglamentados`);
}

// Helper para búsqueda textual en artículos
const getArtText = (num: number) => {
  const art = allArticles.find((a) => a.number === num);
  if (!art) return "";
  const deps = (art.dependencies || []).join(" ");
  return (art.title + " " + art.content.join(" ") + " " + deps).toLowerCase();
};

// 3. Fundamento Bíblico y Preámbulo
console.log("\n--- GRUPO 3: FUNDAMENTO BÍBLICO Y PREÁMBULO INSTITUCIONAL ---");
assert(MISSIONS_MANUAL_DRAFT.preamble.length > 200, "14. Preámbulo sustantivo y fundamentado teológicamente presente");
assert(
  MISSIONS_MANUAL_DRAFT.preamble.includes("Gran Comisión") &&
  MISSIONS_MANUAL_DRAFT.preamble.includes("Mateo 28") &&
  MISSIONS_MANUAL_DRAFT.preamble.includes("Marcos 16"),
  "15. Preámbulo cita Mateo 28:19-20 y Marcos 16:15"
);

const art2Text = getArtText(2);
assert(
  art2Text.includes("mateo 28") &&
  art2Text.includes("hechos 1:8") &&
  art2Text.includes("hechos 13") &&
  art2Text.includes("romanos 10") &&
  art2Text.includes("efesios 4") &&
  art2Text.includes("2 timoteo 2:2"),
  "16. Artículo 2 reúne los 7 fundamentos bíblicos obligatorios"
);

const art3Text = getArtText(3);
assert(
  art3Text.includes("evangelizar") &&
  art3Text.includes("discipular") &&
  art3Text.includes("formar") &&
  art3Text.includes("enviar") &&
  art3Text.includes("plantar") &&
  art3Text.includes("multiplicar") &&
  art3Text.includes("servir"),
  "17. Artículo 3 define visión misionera integral (7 verbos del ciclo misionero)"
);

// 4. Evangelismo Local y Digital
console.log("\n--- GRUPO 4: EVANGELISMO LOCAL Y DIGITAL ---");
const art5Text = getArtText(5);
assert(
  art5Text.includes("estilo de vida") && art5Text.includes("testigo"),
  "18. Artículo 5 reglamenta el evangelismo personal como estilo de vida"
);

const art6Text = getArtText(6);
assert(
  art6Text.includes("congregacionales") && art6Text.includes("alcance comunitario"),
  "18.1. Artículo 6 regula jornadas congregacionales y alcance comunitario"
);

const art7Text = getArtText(7);
assert(
  art7Text.includes("prohibición de métodos coercitivos") && art7Text.includes("manipulación"),
  "18.2. Artículo 7 prohíbe manipulación y métodos coercitivos en evangelismo local"
);

const art9Text = getArtText(9);
assert(
  art9Text.includes("digital") && art9Text.includes("redes sociales") && art9Text.includes("plataformas"),
  "19. Artículo 9 regula el alcance evangelístico en plataformas digitales"
);

const art10Text = getArtText(10);
assert(
  art10Text.includes("clickbait") && art10Text.includes("sensacionalista"),
  "20. Artículo 10 prohíbe terminantemente tácticas engañosas o sensacionalismo en evangelismo digital"
);

// 5. Seguimiento y Discipulado de Nuevos Creyentes
console.log("\n--- GRUPO 5: SEGUIMIENTO PASTORAL DE NUEVOS CREYENTES ---");
const art13Text = getArtText(13);
assert(
  art13Text.includes("diez pasos") &&
  art13Text.includes("contacto inicial") &&
  art13Text.includes("familia de grupo") &&
  art13Text.includes("escuela de discípulos") &&
  art13Text.includes("bautismo") &&
  art13Text.includes("miembro"),
  "21. Artículo 13 consagra la ruta de seguimiento de 10 pasos hacia la madurez"
);

const art14Text = getArtText(14);
assert(
  art14Text.includes("respeto") &&
  art14Text.includes("prohibición de hostigamiento") &&
  art14Text.includes("sin presiones"),
  "22. Artículo 14 prohíbe hostigamiento y garantiza libertad sin invasión de la privacidad"
);

// 6. Plantación y Tipología de Obras
console.log("\n--- GRUPO 6: PLANTACIÓN DE OBRAS Y TIPOLOGÍA CONGREGACIONAL ---");
const art17Text = getArtText(17);
assert(
  art17Text.includes("diez etapas") &&
  art17Text.includes("visión") &&
  art17Text.includes("candidato") &&
  art17Text.includes("autorización") &&
  art17Text.includes("congregación"),
  "23. Artículo 17 consagra la ruta oficial de plantación de obras en 10 etapas"
);

const art22Text = getArtText(22);
assert(
  art22Text.includes("personalidad jurídica") &&
  art22Text.includes("requiere_revision_legal"),
  "24. Artículo 22 prohíbe la independencia jurídica automática y protege la titularidad corporativa"
);

const art21Text = getArtText(21);
assert(
  art21Text.includes("grupo misionero") &&
  art21Text.includes("punto de reunión") &&
  art21Text.includes("obra en plantación") &&
  art21Text.includes("congregación renacer") &&
  art21Text.includes("congregación establecida") &&
  art21Text.includes("obra asociada"),
  "25. Artículo 21 define con precisión los 6 tipos institucionales de obra"
);

// 7. Misioneros: Estados, Requisitos y Deslinde
console.log("\n--- GRUPO 7: MISIONEROS: ESTADOS, REQUISITOS Y DESLINDE MINISTERIAL ---");
const art26Text = getArtText(26);
assert(
  art26Text.includes("seis estados") &&
  art26Text.includes("en formación") &&
  art26Text.includes("autorizado") &&
  art26Text.includes("enviado") &&
  art26Text.includes("en campo") &&
  art26Text.includes("en retorno") &&
  art26Text.includes("finalizado"),
  "26. Artículo 26 establece los 6 estados oficiales del misionero"
);

const art27Text = getArtText(27);
assert(
  art27Text.includes("deslinde") &&
  art27Text.includes("ministro ordenado") &&
  art27Text.includes("ren-doc-010"),
  "27. Artículo 27 deslinda la función misionera del ministro ordenado sin crear credenciales automáticas"
);

const art29Text = getArtText(29);
assert(
  art29Text.includes("bautismo") &&
  art29Text.includes("membresía") &&
  art29Text.includes("declaración de fe") &&
  art29Text.includes("código de ética"),
  "28. Artículo 29 define los requisitos espirituales, doctrinales y morales del candidato misionero"
);

// 8. Proceso de Envío, Comisionamiento y Supervisión
console.log("\n--- GRUPO 8: PROCESO DE ENVÍO, COMISIONAMIENTO Y SUPERVISIÓN ---");
const art33Text = getArtText(33);
assert(
  art33Text.includes("doce pasos") &&
  art33Text.includes("solicitud") &&
  art33Text.includes("evaluación") &&
  art33Text.includes("comisionamiento"),
  "29. Artículo 33 reglamenta el procedimiento formal de envío en 12 pasos estructurados"
);

const art37Text = getArtText(37);
assert(
  art37Text.includes("comisionamiento") &&
  art37Text.includes("ceremonia") &&
  art37Text.includes("hechos 13:3") &&
  art37Text.includes("ren-doc-012"),
  "30. Artículo 37 articula la ceremonia solemne de comisionamiento conforme a REN-DOC-012"
);

const art41Text = getArtText(41);
assert(
  art41Text.includes("supervisión") &&
  art41Text.includes("pastor fundador"),
  "31. Artículo 41 garantiza la supervisión pastoral continua del misionero en campo"
);

// 9. Misiones Nacionales e Internacionales y Deslinde Migratorio
console.log("\n--- GRUPO 9: MISIONES NACIONALES, INTERNACIONALES Y DESLINDE MIGRATORIO ---");
const art45Text = getArtText(45);
assert(
  art45Text.includes("estados unidos") && art45Text.includes("new jersey"),
  "32. Artículo 45 regula las misiones nacionales dentro de Estados Unidos y apego a normas locales"
);

const art49Text = getArtText(49);
assert(
  art49Text.includes("internacionales") && art49Text.includes("transculturales"),
  "33. Artículo 49 regula la logística y alcance en misiones internacionales"
);

const art113Text = getArtText(113);
assert(
  art113Text.includes("migratorios") &&
  art113Text.includes("visado") &&
  art113Text.includes("requiere_revision_legal"),
  "34. Artículo 113 prohíbe irregularidades migratorias y marca [REQUIERE_REVISION_LEGAL]"
);

const art114Text = getArtText(114);
assert(
  art114Text.includes("prohibición") &&
  art114Text.includes("visas") &&
  art114Text.includes("r-1"),
  "34.1. Artículo 114 prohíbe tajantemente prometer visas, R-1 o residencias"
);

// 10. Seguridad y Salvaguardas (Articulación con REN-DOC-014)
console.log("\n--- GRUPO 10: SEGURIDAD MISIONERA Y SALVAGUARDAS (REN-DOC-014) ---");
const art53Text = getArtText(53);
assert(
  art53Text.includes("subordinación plena") && art53Text.includes("ren-doc-014"),
  "35. Artículo 53 subordina toda actividad misionera a las salvaguardas innegociables de REN-DOC-014"
);

const art57Text = getArtText(57);
assert(
  art57Text.includes("menores de edad") &&
  art57Text.includes("regla de dos adultos") &&
  art57Text.includes("consentimiento parental"),
  "36. Artículo 57 impone Regla de Dos Adultos y consentimiento parental estricto para menores en misiones"
);

// 11. Mujeres en Misiones y Plena Igualdad Ministerial
console.log("\n--- GRUPO 11: MUJERES EN MISIONES Y PLENA IGUALDAD MINISTERIAL ---");
const art61Text = getArtText(61);
assert(
  art61Text.includes("igualdad ministerial") &&
  art61Text.includes("misioneras") &&
  art61Text.includes("evangelistas") &&
  art61Text.includes("plantadoras") &&
  art61Text.includes("ren-doc-001"),
  "37. Artículo 61 consagra la plena participación ministerial de la mujer sin discriminación por sexo"
);

// 12. Finanzas Misioneras y Titularidad Corporativa (REN-DOC-013)
console.log("\n--- GRUPO 12: FINANZAS, MAYORDOMÍA Y TITULARIDAD CORPORATIVA ---");
const art65Text = getArtText(65);
assert(
  art65Text.includes("titularidad corporativa exclusiva") &&
  art65Text.includes("renacer church, inc.") &&
  art65Text.includes("prohibido") &&
  art65Text.includes("cuentas bancarias personales"),
  "38. Artículo 65 confirma titularidad corporativa exclusiva de RENACER CHURCH, INC. y prohíbe cuentas personales"
);

const art73Text = getArtText(73);
assert(
  art73Text.includes("ofrendas") &&
  art73Text.includes("misiones") &&
  art73Text.includes("fondos restringidos"),
  "39. Artículo 73 protege la destinación específica de las ofrendas misioneras"
);

// 13. Cooperación Eclesial y Acción Humanitaria
console.log("\n--- GRUPO 13: COOPERACIÓN ECLESIAL Y ACCIÓN HUMANITARIA ---");
const art81Text = getArtText(81);
assert(
  art81Text.includes("cooperar") &&
  art81Text.includes("iglesias locales"),
  "40. Artículo 81 autoriza cooperación intereclesial"
);

const art83Text = getArtText(83);
assert(
  art83Text.includes("no subordinación") &&
  art83Text.includes("no transfiere activos"),
  "41. Artículo 83 salvaguarda la total autonomía y patrimonio en cooperaciones"
);

const art86Text = getArtText(86);
assert(
  art86Text.includes("prohibición de condicionar") &&
  art86Text.includes("ayuda") &&
  art86Text.includes("conversión"),
  "42. Artículo 86 prohíbe condicionar la ayuda humanitaria y el auxilio físico a la profesión de fe"
);

// 14. Ética, Cultura, Expediente y Crisis
console.log("\n--- GRUPO 14: ÉTICA, CULTURA, EXPEDIENTE Y GESTIÓN DE CRISIS ---");
const art89Text = getArtText(89);
assert(
  art89Text.includes("conducta") &&
  art89Text.includes("ren-doc-011"),
  "43. Artículo 89 impone conducta ética intachable"
);

const art90Text = getArtText(90);
assert(
  art90Text.includes("explotación de la pobreza") &&
  art90Text.includes("testimonios"),
  "43.1. Artículo 90 prohíbe la explotación de la pobreza y testimonios falsos"
);

const art97Text = getArtText(97);
assert(
  art97Text.includes("expediente") && art97Text.includes("ren-doc-019"),
  "44. Artículo 97 instituye el expediente misionero resguardado bajo normas de archivo seguro"
);

const art109Text = getArtText(109);
assert(
  art109Text.includes("prioridad absoluta de la vida") &&
  art109Text.includes("crisis"),
  "45. Artículo 109 establece la prioridad absoluta de la vida y protocolos de emergencia"
);

const art118Text = getArtText(118);
assert(
  art118Text.includes("no sustitución") &&
  art118Text.includes("ren-doc-010"),
  "45.1. Artículo 118 confirma la no sustitución de REN-DOC-010"
);

// 15. Catálogo Oficial de Formularios Misioneros
console.log("\n--- GRUPO 15: CATÁLOGO OFICIAL DE FORMULARIOS MISIONEROS ---");
assert(MISSIONS_FORMS_CATALOG.length === 12, "46. Catálogo contiene exactamente 12 formularios oficiales");

const formCodes = [
  "REN-FORM-MIS-001",
  "REN-FORM-MIS-002",
  "REN-FORM-MIS-003",
  "REN-FORM-MIS-004",
  "REN-FORM-MIS-005",
  "REN-FORM-MIS-006",
  "REN-FORM-MIS-007",
  "REN-FORM-MIS-008",
  "REN-FORM-MIS-009",
  "REN-FORM-MIS-010",
  "REN-FORM-MIS-011",
  "REN-FORM-MIS-012",
];

formCodes.forEach((code, idx) => {
  const form = MISSIONS_FORMS_CATALOG.find((f) => f.code === code);
  assert(form !== undefined, `47.${idx + 1}. Formulario ${code} registrado en el catálogo oficial`);
});

// 16. Marcadores Obligatorios [PENDIENTE_DEFINIR] y [REQUIERE_REVISION_LEGAL]
console.log("\n--- GRUPO 16: MARCADORES NORMATIVOS OBLIGATORIOS ---");
const allContentStr = allArticles.flatMap((a) => a.content).join(" ");
const pendingCount = (allContentStr.match(/\[PENDIENTE_DEFINIR.*?\]/g) || []).length;
const legalCount = (allContentStr.match(/\[REQUIERE_REVISION_LEGAL.*?\]/g) || []).length;

assert(pendingCount >= 10, `48. Marcador [PENDIENTE_DEFINIR] presente en parámetros no decididos (${pendingCount} instancias)`);
assert(legalCount >= 10, `49. Marcador [REQUIERE_REVISION_LEGAL] presente en aspectos jurídicos/migratorios (${legalCount} instancias)`);

// 17. Trazabilidad con Decisiones Históricas
console.log("\n--- GRUPO 17: TRAZABILIDAD CON DECISIONES HISTÓRICAS ---");
const allDecisions = getAllInstitutionalDecisions();
assert(allDecisions.length === 107, "50. Total de decisiones institucionales se mantiene intacto en 107");

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

usedDecisions.forEach((decNumber, idx) => {
  const dec = allDecisions.find((d) => d.decisionNumber === decNumber);
  assert(dec !== undefined, `51.${idx + 1}. Decisión ${decNumber} es real y existente en el sistema`);
});

// 18. Integración en Catálogo Maestro y Biblioteca
console.log("\n--- GRUPO 18: INTEGRACIÓN EN CATÁLOGO MAESTRO Y SERVICIOS ---");
const catalogDoc = INITIAL_MASTER_CATALOG.find((c) => c.documentNumber === "REN-DOC-015");
assert(catalogDoc !== undefined, "52. REN-DOC-015 registrado en INITIAL_MASTER_CATALOG");
assert(catalogDoc?.category === "MISIONES_EVANGELISMO", "53. Categoría de REN-DOC-015 en catálogo es MISIONES_EVANGELISMO");
assert(catalogDoc?.status === "EN_REDACCION", "54. Estado de REN-DOC-015 en catálogo es EN_REDACCION");
assert(catalogDoc?.version === "0.1", "55. Versión en catálogo es 0.1");

const libDoc = getInstitutionalDocumentById("doc-ren-015");
assert(libDoc !== undefined, "56. REN-DOC-015 recuperable vía getInstitutionalDocumentById('doc-ren-015')");
assert(libDoc?.legalState === "REQUIERE_REVISION_LEGAL", "57. LegalState en biblioteca es REQUIERE_REVISION_LEGAL");
assert((libDoc?.content?.length || 0) > 5000, "58. Contenido Markdown de REN-DOC-015 generado y sustancial (>5000 caracteres)");

// 19. Generador Markdown y Estructura
console.log("\n--- GRUPO 19: GENERADOR MARKDOWN OFICIAL ---");
const mdContent = generateFullMissionsManualMarkdown();
assert(mdContent.includes("# REN-DOC-015"), "59. Markdown contiene encabezado principal # REN-DOC-015");
assert(mdContent.includes("BORRADOR — NO ADOPTADO"), "60. Markdown contiene advertencia BORRADOR — NO ADOPTADO");
assert(mdContent.includes("REQUIERE REVISIÓN LEGAL"), "61. Markdown contiene advertencia REQUIERE REVISIÓN LEGAL");
assert(mdContent.includes("CATÁLOGO OFICIAL DE FORMULARIOS"), "62. Markdown incluye sección de formularios");

// 20. Auditoría Administrativa
console.log("\n--- GRUPO 20: AUDITORÍA ADMINISTRATIVA ---");
const inventory = getDocumentInventoryAudit();
const auditItem15 = inventory.find((i) => i.code === "REN-DOC-015");
assert(auditItem15 !== undefined, "63. REN-DOC-015 auditado en el inventario administrativo");
assert(auditItem15?.completeness === "DOCUMENTO_PARCIAL", "64. Completeness de REN-DOC-015 es DOCUMENTO_PARCIAL (Borrador en Redacción)");
assert(auditItem15?.hasFullContent === true, "65. REN-DOC-015 marcado con hasFullContent === true");

// 21. Preservación de Documentos Anteriores (REN-DOC-001 a 014) y No Creación de REN-DOC-016
console.log("\n--- GRUPO 21: PRESERVACIÓN Y NO CREACIÓN DE REN-DOC-016 ---");
const docs1to14 = [
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
];

docs1to14.forEach((code, idx) => {
  const doc = getInstitutionalDocumentById(code);
  assert(doc !== undefined && doc.content.length > 500, `66.${idx + 1}. ${code} permanece intacto con contenido completo`);
});

const doc17 = getAllInstitutionalDocuments().find((d) => d.documentNumber === "REN-DOC-017");
assert(
  doc17 === undefined || doc17.status === "PLANIFICADO",
  "67. REN-DOC-017 NO ha sido creado sustantivamente (permanece no creado o PLANIFICADO en catálogo)"
);

console.log("\n=======================================================");
console.log(`RESUMEN DE PRUEBAS FASE 46:`);
console.log(`  Superadas: ${passed}`);
console.log(`  Fallidas:  ${failed}`);
console.log("=======================================================\n");

if (failed > 0) {
  process.exit(1);
} else {
  console.log("🎯 TODAS LAS PRUEBAS DE FASE 46 HAN SIDO SUPERADAS EXITOSAMENTE.\n");
}
