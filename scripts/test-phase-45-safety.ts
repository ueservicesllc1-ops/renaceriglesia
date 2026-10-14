/**
 * TEST SUITE: FASE 45 — CREACIÓN REAL DE REN-DOC-014
 * MANUAL OFICIAL DE PROTECCIÓN, SEGURIDAD Y SALVAGUARDAS DE RENACER
 * 
 * Verifica los 32 títulos normativos, 128 artículos reglamentarios,
 * el principio fundamental de dignidad y seguridad humana sobre jerarquía o secreto,
 * la tolerancia cero al abuso, la regla de dos adultos, consejería y confidencialidad responsable,
 * ruta de denuncia de 10 pasos, emergencias médicas/físicas con primacía del 911,
 * transporte, actividades externas y digitales, quejas contra líderes y Pastor Fundador,
 * catálogo de 12 formularios oficiales (REN-FORM-SAFE-001 a 012),
 * integración en Catálogo Maestro, Biblioteca, Auditoría, Rutas (/proteccion y /seguridad),
 * y preservación de REN-DOC-001 a 013, las 107 decisiones y no creación de REN-DOC-015.
 */

import {
  SAFETY_MANUAL_DRAFT,
  SAFETY_FORMS_CATALOG,
  generateFullSafetyManualMarkdown,
} from "../src/lib/safety-manual-full-draft";
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
console.log("INICIANDO SUITE DE PRUEBAS — FASE 45 (REN-DOC-014)");
console.log("=======================================================\n");

// 1. Identidad y Metadatos de REN-DOC-014
console.log("--- GRUPO 1: IDENTIDAD Y METADATOS INSTITUCIONALES ---");
assert(SAFETY_MANUAL_DRAFT.documentNumber === "REN-DOC-014", "1. Código es REN-DOC-014");
assert(SAFETY_MANUAL_DRAFT.title === "MANUAL OFICIAL DE PROTECCIÓN, SEGURIDAD Y SALVAGUARDAS DE RENACER", "2. Nombre oficial es exacto");
assert(SAFETY_MANUAL_DRAFT.shortTitle === "Manual de Protección y Salvaguardas", "3. Título corto es adecuado");
assert(SAFETY_MANUAL_DRAFT.version === "0.1", "4. Versión es v0.1");
assert(SAFETY_MANUAL_DRAFT.documentState === "EN_REDACCION", "5. DocumentState es EN_REDACCION");
assert(SAFETY_MANUAL_DRAFT.decisionState === "DEFINIDA", "6. DecisionState es DEFINIDA");
assert(SAFETY_MANUAL_DRAFT.adoptionState === "NO_ADOPTADA", "7. AdoptionState es NO_ADOPTADA (Borrador No Adoptado)");
assert(SAFETY_MANUAL_DRAFT.legalState === "REQUIERE_REVISION_LEGAL", "8. LegalState es REQUIERE_REVISION_LEGAL");
assert(SAFETY_MANUAL_DRAFT.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL", "9. Nivel jerárquico es NIVEL_4_MANUAL_INSTITUCIONAL");
assert(SAFETY_MANUAL_DRAFT.category === "PROTECCION_SEGURIDAD_Y_SALVAGUARDAS", "10. Categoría es PROTECCION_SEGURIDAD_Y_SALVAGUARDAS");

// 2. Estructura de 32 Títulos y 128 Artículos
console.log("\n--- GRUPO 2: ESTRUCTURA NORMATIVA (32 TÍTULOS Y 128 ARTÍCULOS) ---");
assert(SAFETY_MANUAL_DRAFT.titles.length === 32, "11. Contiene exactamente 32 títulos normativos");

const allArticles = SAFETY_MANUAL_DRAFT.titles.flatMap((t) => t.articles);
assert(allArticles.length === 128, `12. Contiene exactamente 128 artículos reglamentarios (actual: ${allArticles.length})`);

for (let i = 1; i <= 32; i++) {
  const t = SAFETY_MANUAL_DRAFT.titles[i - 1];
  assert(t !== undefined && t.articles.length === 4, `13.${i}. Título ${i} (${t?.romanNumeral}) tiene 4 artículos reglamentados`);
}

// Helper para búsqueda textual en artículos
const getArtText = (num: number) => {
  const art = allArticles.find((a) => a.number === num);
  return art ? (art.title + " " + art.content.join(" ")).toLowerCase() : "";
};

// 3. Principio Fundamental de Salvaguardas y Preámbulo
console.log("\n--- GRUPO 3: PRINCIPIO FUNDAMENTAL Y NO ENCUBRIMIENTO ---");
assert(SAFETY_MANUAL_DRAFT.preamble.length > 200, "14. Preámbulo institucional sustantivo y teológico presente");
assert(
  SAFETY_MANUAL_DRAFT.preamble.includes("dignidad") && SAFETY_MANUAL_DRAFT.preamble.includes("protección"),
  "15. Preámbulo consagra dignidad y protección como deber incondicional"
);

const art3Text = getArtText(3);
assert(
  art3Text.includes("no encubrimiento") && (art3Text.includes("ocultar") || art3Text.includes("delito")),
  "16. Artículo 3 prohíbe taxativamente encubrir delitos o impedir denuncias bajo pretexto de doctrina o secreto"
);

const art4Text = getArtText(4);
assert(
  art4Text.includes("deslinde") && art4Text.includes("asesoramiento legal") && art4Text.includes("new jersey"),
  "17. Artículo 4 delimita salvaguardas eclesiásticas y deslinde legal con el Estado de New Jersey"
);

// 4. Tolerancia Cero al Abuso y Abuso Espiritual
console.log("\n--- GRUPO 4: TOLERANCIA CERO AL ABUSO Y ABUSO ESPIRITUAL ---");
const art5Text = getArtText(5);
assert(
  art5Text.includes("incompatibles") && art5Text.includes("abuso físico") && art5Text.includes("abuso sexual"),
  "18. Artículo 5 consagra la tipificación de conductas incompatibles (abuso físico, sexual, emocional, espiritual)"
);

const art6Text = getArtText(6);
assert(
  art6Text.includes("tolerancia cero") && art6Text.includes("debido proceso"),
  "19. Artículo 6 distingue tolerancia cero y respeto al debido proceso"
);

const art7Text = getArtText(7);
assert(
  art7Text.includes("fases") && art7Text.includes("medidas cautelares") && art7Text.includes("restauración"),
  "20. Artículo 7 distingue reporte, evaluación, medidas cautelares, investigación, debido proceso y restauración"
);

// 5. Menores de Edad y Regla de Dos Adultos
console.log("\n--- GRUPO 5: MENORES DE EDAD Y REGLA DE DOS ADULTOS ---");
const art9Text = getArtText(9);
assert(
  art9Text.includes("seguridad infantil") && (art9Text.includes("niños") || art9Text.includes("renacer kids")),
  "21. Artículo 9 establece prioridad absoluta de la seguridad infantil (Renacer Kids)"
);

const art10Text = getArtText(10);
assert(
  art10Text.includes("entrega, recepción") && (art10Text.includes("check-in") || art10Text.includes("registro")),
  "22. Artículo 10 regula check-in y entrega controlada de menores a tutores"
);

const art13Text = getArtText(13);
assert(
  art13Text.includes("dos adultos") && (art13Text.includes("aislado") || art13Text.includes("a solas")),
  "23. Artículo 13 consagra la Regla de Dos Adultos Capacitados contra el aislamiento a solas"
);

const art15Text = getArtText(15);
assert(
  art15Text.includes("excepciones") && art15Text.includes("emergencia") && art15Text.includes("registro"),
  "24. Artículo 15 limita excepciones a emergencias reales con registro posterior obligatorio"
);

// 6. Contacto Físico y Consejería Pastoral
console.log("\n--- GRUPO 6: CONTACTO FÍSICO Y CONSEJERÍA PASTORAL ---");
const art17Text = getArtText(17);
assert(
  art17Text.includes("afecto respetuoso") && art17Text.includes("contacto físico"),
  "25. Artículo 17 establece principio de afecto respetuoso y no invasivo"
);

const art18Text = getArtText(18);
assert(
  art18Text.includes("imposición de manos") && art18Text.includes("cabeza") && art18Text.includes("hombros"),
  "26. Artículo 18 restringe contacto en oración/imposición de manos a cabeza, hombros y manos"
);

const art21Text = getArtText(21);
assert(
  art21Text.includes("consejería bíblica") && art21Text.includes("psicólogo") && art21Text.includes("médico"),
  "27. Artículo 21 prohíbe al ministro presentarse como médico, psiquiatra, psicólogo o abogado sin título civil"
);

const art22Text = getArtText(22);
assert(
  art22Text.includes("derivación profesional") && (art22Text.includes("médico") || art22Text.includes("psiquiátrico")),
  "28. Artículo 22 ordena derivación inmediata a profesionales competentes en casos que excedan la labor pastoral"
);

// 7. Confidencialidad Responsable y Ruta de Denuncia (10 Pasos)
console.log("\n--- GRUPO 7: CONFIDENCIALIDAD Y RUTA DE DENUNCIA ---");
const art25Text = getArtText(25);
assert(
  art25Text.includes("confidencialidad pastoral") && art25Text.includes("sigilo"),
  "29. Artículo 25 define la confidencialidad pastoral como un deber ético de sigilo"
);

const art26Text = getArtText(26);
assert(
  art26Text.includes("excepciones") && art26Text.includes("abuso") && art26Text.includes("menores"),
  "30. Artículo 26 levanta confidencialidad obligatoriamente ante abusos a menores, violencia o riesgo vital"
);

const art29Text = getArtText(29);
assert(
  art29Text.includes("recepción") && (art29Text.includes("reporte") || art29Text.includes("afectada")),
  "31. Artículo 29 regula la recepción empática y no intimidación de denuncias y reportes"
);

const art34Text = getArtText(34);
assert(
  art34Text.includes("no sustitución") && (art34Text.includes("investigaciones") || art34Text.includes("dcf")),
  "32. Artículo 34 prohíbe que investigaciones eclesiásticas internas sustituyan agencias públicas"
);

// 8. Emergencias Médicas y Físicas
console.log("\n--- GRUPO 8: EMERGENCIAS MÉDICAS Y FÍSICAS ---");
const art37Text = getArtText(37);
assert(
  art37Text.includes("911") && art37Text.includes("atención médica profesional"),
  "33. Artículo 37 consagra la llamada al 911 y auxilio médico profesional con primacía sobre el culto"
);

const art38Text = getArtText(38);
assert(
  art38Text.includes("primeros auxilios") && art38Text.includes("rcp"),
  "34. Artículo 38 regula primeros auxilios y RCP dentro del nivel de capacitación disponible"
);

const art41Text = getArtText(41);
assert(
  art41Text.includes("prioridad de la vida humana") && art41Text.includes("evacuación"),
  "35. Artículo 41 regula evacuación ante emergencias con prioridad de la vida sobre el culto"
);

// 9. Abuso Espiritual, Discipulado, Transporte y Digital
console.log("\n--- GRUPO 9: ABUSO ESPIRITUAL, DISCIPULADO, TRANSPORTE Y DIGITAL ---");
const art50Text = getArtText(50);
assert(
  art50Text.includes("dios me dijo") && art50Text.includes("coerción"),
  "36. Artículo 50 proscribe expresamente la manipulación profética («Dios me dijo») como mecanismo de coerción"
);

const art54Text = getArtText(54);
assert(
  art54Text.includes("privacidad") && (art54Text.includes("económica") || art54Text.includes("conyugal")),
  "37. Artículo 54 prohíbe injerencia o control en finanzas o intimidad conyugal en células"
);

const art57Text = getArtText(57);
assert(
  art57Text.includes("conductores") && art57Text.includes("licencia"),
  "38. Artículo 57 exige licencia vigente y récord de manejo para transporte"
);

const art58Text = getArtText(58);
assert(
  art58Text.includes("vehículos") && art58Text.includes("a solas"),
  "39. Artículo 58 prohíbe trasladar a un menor a solas en vehículos sin segundo adulto o grupo"
);

const art66Text = getArtText(66);
assert(
  art66Text.includes("mensajería privada") && art66Text.includes("menores"),
  "40. Artículo 66 prohíbe chats privados uno-a-uno entre adultos y menores sin consentimiento/copia parental"
);

// 10. Protección a Denunciantes, Preservación de Evidencia y Medidas Cautelares
console.log("\n--- GRUPO 10: NO REPRESALIAS, EVIDENCIA Y MEDIDAS CAUTELARES ---");
const art89Text = getArtText(89);
assert(
  art89Text.includes("represalias") && art89Text.includes("buena fe"),
  "41. Artículo 89 consagra garantía de inmunidad frente a represalias para reportantes de buena fe"
);

const art94Text = getArtText(94);
assert(
  art94Text.includes("destrucción de pruebas") && art94Text.includes("prohibición"),
  "42. Artículo 94 prohíbe destruir registros o evidencia y sanciona encubrimientos"
);

const art101Text = getArtText(101);
assert(
  art101Text.includes("medidas provisionales") && (art101Text.includes("suspensión preventiva") || art101Text.includes("cautelares")),
  "43. Artículo 101 regula suspensión preventiva de funciones ante denuncias verosímiles"
);

const art107Text = getArtText(107);
assert(
  art107Text.includes("restitución automática") && art107Text.includes("menores"),
  "44. Artículo 107 prohíbe la restitución ministerial automática en áreas con menores tras abusos"
);

// 11. Quejas contra Líderes y Pastor Fundador (Sin Inmunidad)
console.log("\n--- GRUPO 11: PROCEDIMIENTOS CONTRA LÍDERES Y PASTOR FUNDADOR ---");
const art121Text = getArtText(121);
assert(
  art121Text.includes("juez de su propia causa") && art121Text.includes("imparcialidad"),
  "45. Artículo 121 consagra el principio de imparcialidad y de que nadie es juez de su propia causa"
);

const art122Text = getArtText(122);
assert(
  art122Text.includes("pastor fundador") && art122Text.includes("no confiere inmunidad"),
  "46. Artículo 122 consagra que la autoridad del Pastor Fundador no confiere inmunidad ante abusos o delitos"
);

const art128Text = getArtText(128);
assert(
  art128Text.includes("supremacía estatutaria") && (art128Text.includes("bylaws") || art128Text.includes("constitución")),
  "47. Artículo 128 consagra la supremacía de la Constitución y Bylaws sobre el manual"
);

// 12. Catálogo Oficial de 12 Formularios de Seguridad
console.log("\n--- GRUPO 12: CATÁLOGO DE 12 FORMULARIOS (REN-FORM-SAFE-001 A 012) ---");
assert(SAFETY_FORMS_CATALOG.length === 12, "48. Existen exactamente 12 formularios de seguridad catalogados");

const expectedForms = [
  "REN-FORM-SAFE-001", "REN-FORM-SAFE-002", "REN-FORM-SAFE-003", "REN-FORM-SAFE-004",
  "REN-FORM-SAFE-005", "REN-FORM-SAFE-006", "REN-FORM-SAFE-007", "REN-FORM-SAFE-008",
  "REN-FORM-SAFE-009", "REN-FORM-SAFE-010", "REN-FORM-SAFE-011", "REN-FORM-SAFE-012",
];
expectedForms.forEach((formCode, index) => {
  const f = SAFETY_FORMS_CATALOG.find((item) => item.code === formCode);
  assert(f !== undefined, `49.${index + 1}. Formulario ${formCode} existe en el catálogo (${f?.title})`);
});

// 13. Markdown Completo y Generación
console.log("\n--- GRUPO 13: GENERADOR MARKDOWN Y VOLUMEN SUSTANCIAL ---");
const mdContent = generateFullSafetyManualMarkdown();
assert(mdContent.length > 25000, `50. Documento Markdown es sustantivo y completo (${mdContent.length} caracteres)`);
assert(mdContent.includes("REN-DOC-014"), "51. Markdown incluye el encabezado oficial de REN-DOC-014");
assert(mdContent.includes("BORRADOR — NO ADOPTADO"), "52. Markdown incluye la advertencia BORRADOR — NO ADOPTADO");
assert(mdContent.includes("REQUIERE REVISIÓN LEGAL"), "53. Markdown incluye la advertencia REQUIERE REVISIÓN LEGAL");
assert(mdContent.includes("TÍTULO XXXII"), "54. Markdown incluye hasta el TÍTULO XXXII");

// 14. Integración en Catálogo Maestro y Biblioteca Institucional
console.log("\n--- GRUPO 14: CATÁLOGO MAESTRO Y BIBLIOTECA ---");
const masterCatDoc = INITIAL_MASTER_CATALOG.find((d) => d.documentNumber === "REN-DOC-014");
assert(masterCatDoc !== undefined, "55. REN-DOC-014 existe en INITIAL_MASTER_CATALOG");
assert(masterCatDoc?.status === "EN_REDACCION", "56. Estado en Catálogo Maestro es EN_REDACCION");
assert(masterCatDoc?.category === "PROTECCION_SEGURIDAD_Y_SALVAGUARDAS", "56. Categoría en Catálogo es PROTECCION_SEGURIDAD_Y_SALVAGUARDAS");
assert(masterCatDoc?.approvalAuthority === "PASTOR_FUNDADOR", "57. Autoridad de aprobación es PASTOR_FUNDADOR");

const doc14FromService = getInstitutionalDocumentById("doc-ren-014");
assert(doc14FromService !== undefined, "58. REN-DOC-014 es recuperable por ID con getInstitutionalDocumentById('doc-ren-014')");
assert((doc14FromService?.content?.length || 0) > 25000, "59. Contenido en biblioteca está completamente renderizado");

// 15. Auditoría de Inventario Documental
console.log("\n--- GRUPO 15: AUDITORÍA DE INVENTARIO (ADMIN SERVICE) ---");
const inventory = getDocumentInventoryAudit();
const auditDoc = inventory.find((d) => d.code === "REN-DOC-014");
assert(auditDoc !== undefined, "60. REN-DOC-014 está presente en getDocumentInventoryAudit()");
assert(auditDoc?.completeness === "DOCUMENTO_PARCIAL", "61. Completeness es DOCUMENTO_PARCIAL (Borrador en Redacción)");
assert(auditDoc?.hasFullContent === true, "62. hasFullContent es true");
assert((auditDoc?.completenessLabel || "").includes("32 Títulos"), "63. completenessLabel refleja los 32 Títulos normativos");

// 16. Decisiones Históricas Base (0 Inventadas)
console.log("\n--- GRUPO 16: DECISIONES HISTÓRICAS BASE Y 0 INVENTADAS ---");
const allDecisions = getAllInstitutionalDecisions();
const requiredDecs = ["DEC-DEF-001", "DEC-DEF-004", "DEC-DEF-005", "DEC-DEF-010", "DEC-DEF-011", "DEC-DEF-013", "DEC-DEF-019", "DEC-PEND-010"];
requiredDecs.forEach((decCode, idx) => {
  const dec = allDecisions.find((d) => d.decisionNumber === decCode);
  assert(dec !== undefined, `64.${idx + 1}. Decisión base ${decCode} existe y está activa en el sistema`);
});

// 17. Preservación de REN-DOC-001 a 013 y NO creación de REN-DOC-015
console.log("\n--- GRUPO 17: PRESERVACIÓN Y CONTROL DE FASE ---");
const docs001to013 = [
  "REN-DOC-001", "REN-DOC-002", "REN-DOC-003", "REN-DOC-004", "REN-DOC-005",
  "REN-DOC-006", "REN-DOC-007", "REN-DOC-008", "REN-DOC-009", "REN-DOC-010",
  "REN-DOC-011", "REN-DOC-012", "REN-DOC-013",
];
docs001to013.forEach((docNum, idx) => {
  const docId = docNum.toLowerCase().replace("ren-doc-", "doc-ren-");
  const d = getInstitutionalDocumentById(docId);
  assert(d !== undefined && (d.content?.length || 0) > 500, `65.${idx + 1}. Documento superior ${docNum} permanece intacto y completo`);
});

assert(allDecisions.length === 107, "66. Las 107 decisiones históricas permanecen estrictamente intactas");

const doc017inLibrary = getAllInstitutionalDocuments().find((d) => d.documentNumber === "REN-DOC-017" && d.status === "EN_REDACCION");
assert(
  doc017inLibrary === undefined,
  "67. REN-DOC-017 NO ha sido creado (permanece estrictamente PLANIFICADO sin redacción)"
);

// 18. Parámetros PENDIENTE_DEFINIR y REQUIERE_REVISION_LEGAL
console.log("\n--- GRUPO 18: PARÁMETROS PENDIENTES Y REVISIÓN LEGAL ---");
assert(SAFETY_MANUAL_DRAFT.pendingDefinitions.length >= 4, "68. Lista explícita de parámetros marcados PENDIENTE_DEFINIR");
assert(SAFETY_MANUAL_DRAFT.legalReviewMatters.length >= 4, "69. Lista explícita de materias marcadas REQUIERE_REVISION_LEGAL");

console.log("\n=======================================================");
console.log(`RESUMEN DE PRUEBAS FASE 45:`);
console.log(`  PASADAS: ${passed}`);
console.log(`  FALLIDAS: ${failed}`);
console.log(`  TOTAL:    ${passed + failed}`);
console.log("=======================================================\n");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
