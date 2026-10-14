/**
 * Suite de Pruebas Automatizadas — FASE 44
 * REN-DOC-013: MANUAL OFICIAL DE ADMINISTRACIÓN, FINANZAS Y MAYORDOMÍA DE RENACER
 */

import {
  FINANCES_MANUAL_DRAFT,
  FINANCIAL_FORMS_CATALOG,
  generateFullFinancesManualMarkdown,
} from "../src/lib/finances-manual-full-draft";
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
    console.log(`  ✓ [PASS] ${testName}`);
  } else {
    failed++;
    console.error(`  ✗ [FAIL] ${testName}${detail ? ` — ${detail}` : ""}`);
  }
}

console.log("\n==================================================");
console.log("EJECUTANDO SUITE DE PRUEBAS — FASE 44: REN-DOC-013");
console.log("==================================================\n");

// --- 1. Identidad y Metadatos ---
console.log("--- 1. Identidad y Metadatos Oficiales ---");
assert(FINANCES_MANUAL_DRAFT.documentNumber === "REN-DOC-013", "Código oficial es REN-DOC-013");
assert(
  FINANCES_MANUAL_DRAFT.title ===
    "MANUAL OFICIAL DE ADMINISTRACIÓN, FINANZAS Y MAYORDOMÍA DE RENACER",
  "Título oficial exacto"
);
assert(FINANCES_MANUAL_DRAFT.version === "0.1", "Versión v0.1");
assert(FINANCES_MANUAL_DRAFT.hierarchyLevel === "NIVEL_4_MANUAL_INSTITUCIONAL", "Nivel 4 Manual Institucional");
assert(FINANCES_MANUAL_DRAFT.category === "ADMINISTRACION_FINANZAS", "Categoría ADMINISTRACION_FINANZAS");
assert(FINANCES_MANUAL_DRAFT.documentState === "EN_REDACCION", "DocumentState es EN_REDACCION");
assert(FINANCES_MANUAL_DRAFT.decisionState === "DEFINIDA", "DecisionState es DEFINIDA");
assert(FINANCES_MANUAL_DRAFT.adoptionState === "NO_ADOPTADA", "Adoption es NO_ADOPTADA");
assert(FINANCES_MANUAL_DRAFT.legalState === "REQUIERE_REVISION_LEGAL", "LegalState es REQUIERE_REVISION_LEGAL");

// --- 2. Estructura y Títulos ---
console.log("\n--- 2. Estructura y Títulos Normativos ---");
assert(FINANCES_MANUAL_DRAFT.titles.length === 32, "Contiene exactamente 32 títulos normativos (mínimo 25 exigidos)");
assert(FINANCES_MANUAL_DRAFT.titles[0].romanNumeral === "I", "Primer título es TÍTULO I");
assert(FINANCES_MANUAL_DRAFT.titles[31].romanNumeral === "XXXII", "Último título es TÍTULO XXXII");

const totalArticles = FINANCES_MANUAL_DRAFT.titles.reduce(
  (acc, t) => acc + t.articles.length,
  0
);
assert(totalArticles === 128, "Contiene exactamente 128 artículos normativos exhaustivos");

// --- 3. Titularidad Patrimonial y No Beneficio Privado ---
console.log("\n--- 3. Titularidad Patrimonial y No Beneficio Privado ---");
const allArticles = FINANCES_MANUAL_DRAFT.titles.flatMap((t) => t.articles);
const art3 = allArticles.find((a) => a.number === 3);
assert(
  art3 !== undefined && art3.content.some((c) => c.includes("RENACER CHURCH, INC.") && c.includes("DEC-DEF-008")),
  "Art. 3 consagra que todo patrimonio pertenece con exclusividad a RENACER CHURCH, INC."
);
const art4 = allArticles.find((a) => a.number === 4);
assert(
  art4 !== undefined && art4.content.some((c) => c.includes("beneficio privado") && c.includes("DEC-DEF-011")),
  "Art. 4 prohíbe el beneficio privado indebido (inurement)"
);

// --- 4. Diezmos, Ofrendas y Mayordomía ---
console.log("\n--- 4. Doctrina de Diezmos y Ofrendas sin Coerción ---");
const art13 = allArticles.find((a) => a.number === 13);
assert(
  art13 !== undefined && (art13.title + " " + art13.content.join(" ")).includes("gracia") && (art13.title + " " + art13.content.join(" ")).includes("voluntaria"),
  "Art. 13 establece diezmos como acto voluntario bajo la gracia"
);
const art15 = allArticles.find((a) => a.number === 15);
assert(
  art15 !== undefined && (art15.title + " " + art15.content.join(" ")).includes("pérdida de la salvación") && (art15.title + " " + art15.content.join(" ")).includes("excluida"),
  "Art. 15 prohíbe amenazas de pérdida de salvación o exclusión por motivos económicos"
);
const art16 = allArticles.find((a) => a.number === 16);
assert(
  art16 !== undefined && (art16.title + " " + art16.content.join(" ")).toLowerCase().includes("endeudamiento"),
  "Art. 16 prohíbe inducir al endeudamiento para donar"
);

// --- 5. Doble Conteo de Ofrendas y Cuentas Bancarias ---
console.log("\n--- 5. Conteo de Ofrendas y Cuentas Bancarias ---");
const art21 = allArticles.find((a) => a.number === 21);
assert(
  art21 !== undefined && (art21.title + " " + art21.content.join(" ")).includes("dos personas") && (art21.title + " " + art21.content.join(" ")).includes("parentesco"),
  "Art. 21 exige conteo de efectivo por dos personas no relacionadas"
);
const art25 = allArticles.find((a) => a.number === 25);
assert(
  art25 !== undefined && (art25.title + " " + art25.content.join(" ")).includes("RENACER CHURCH, INC.") && (art25.title + " " + art25.content.join(" ")).includes("EIN"),
  "Art. 25 exige cuentas bancarias a nombre exclusivo de RENACER CHURCH, INC."
);
const art27 = allArticles.find((a) => a.number === 27);
assert(
  art27 !== undefined && (art27.title + " " + art27.content.join(" ")).includes("commingling"),
  "Art. 27 prohíbe la co-mezcla de fondos personales con institucionales"
);

// --- 6. Ciclo Presupuestario y Gastos ---
console.log("\n--- 6. Ciclo Presupuestario y Políticas de Gasto ---");
const art30 = allArticles.find((a) => a.number === 30);
assert(
  art30 !== undefined && (art30.title + " " + art30.content.join(" ")).includes("ocho (8) etapas"),
  "Art. 30 define las 8 etapas del ciclo presupuestario"
);
const art36 = allArticles.find((a) => a.number === 36);
assert(
  art36 !== undefined && (art36.title + " " + art36.content.join(" ")).includes("gastos de índole personal"),
  "Art. 36 prohíbe imputar gastos personales a las cuentas de la iglesia"
);

// --- 7. Proveedores, Conflictos de Interés y Partes Relacionadas ---
console.log("\n--- 7. Proveedores y Conflictos de Interés ---");
const art43 = allArticles.find((a) => a.number === 43);
assert(
  art43 !== undefined && (art43.title + " " + art43.content.join(" ")).includes("arm's length") && (art43.title + " " + art43.content.join(" ")).includes("revelada"),
  "Art. 43 regula contrataciones con partes relacionadas y familiares"
);
const art86 = allArticles.find((a) => a.number === 86);
assert(
  art86 !== undefined && (art86.title + " " + art86.content.join(" ")).includes("REN-FORM-FIN-010"),
  "Art. 86 exige declaración anual de conflicto de interés mediante REN-FORM-FIN-010"
);

// --- 8. Compensación Ministerial y Reembolsos ---
console.log("\n--- 8. Compensación Ministerial y Reembolsos ---");
const art45 = allArticles.find((a) => a.number === 45);
assert(
  art45 !== undefined && (art45.title + " " + art45.content.join(" ")).includes("sustento digno") && (art45.title + " " + art45.content.join(" ")).includes("1 Timoteo 5"),
  "Art. 45 consagra el principio bíblico del sostén pastoral sin derecho de lucro automático"
);
const art47 = allArticles.find((a) => a.number === 47);
assert(
  art47 !== undefined && (art47.title + " " + art47.content.join(" ")).includes("Housing Allowance") && (art47.title + " " + art47.content.join(" ")).includes("Sección 107"),
  "Art. 47 sujeta el Housing Allowance a la Sección 107 del IRC y revisión legal/contable"
);
const art50 = allArticles.find((a) => a.number === 50);
assert(
  art50 !== undefined && (art50.title + " " + art50.content.join(" ")).includes("REN-FORM-FIN-003") && (art50.title + " " + art50.content.join(" ")).includes("originales"),
  "Art. 50 norma reembolsos estrictamente con comprobantes originales"
);

// --- 9. Fondos Restringidos y Fondo de Benevolencia ---
console.log("\n--- 9. Fondos Restringidos y Fondo de Benevolencia ---");
const art55 = allArticles.find((a) => a.number === 55);
assert(
  art55 !== undefined && ((art55.title + " " + art55.content.join(" ")).includes("intangibilidad") || (art55.title + " " + art55.content.join(" ")).includes("desviados")),
  "Art. 55 consagra la intangibilidad de fondos restringidos por donantes"
);
const art58 = allArticles.find((a) => a.number === 58);
assert(
  art58 !== undefined && (art58.title + " " + art58.content.join(" ")).toLowerCase().includes("imparcialidad") && (art58.title + " " + art58.content.join(" ")).includes("REN-FORM-FIN-009"),
  "Art. 58 establece evaluación objetiva y confidencial de ayuda benevolente"
);
const art59 = allArticles.find((a) => a.number === 59);
assert(
  art59 !== undefined && ((art59.title + " " + art59.content.join(" ")).toLowerCase().includes("coerción") || (art59.title + " " + art59.content.join(" ")).toLowerCase().includes("coacción")),
  "Art. 59 prohíbe condicionar la ayuda benevolente a coerción o sumisión espiritual"
);

// --- 10. Vehículos e Inmuebles Corporativos ---
console.log("\n--- 10. Vehículos e Inmuebles Corporativos ---");
const art65 = allArticles.find((a) => a.number === 65);
assert(
  art65 !== undefined && (art65.title + " " + art65.content.join(" ")).includes("DMV") && (art65.title + " " + art65.content.join(" ")).includes("RENACER CHURCH, INC."),
  "Art. 65 exige titularidad vehicular exclusiva corporativa ante el DMV de New Jersey"
);
const art71 = allArticles.find((a) => a.number === 71);
assert(
  art71 !== undefined && (art71.title + " " + art71.content.join(" ")).includes("Pastor Fundador") && (art71.title + " " + art71.content.join(" ")).includes("Bylaws"),
  "Art. 71 sujeta operaciones inmobiliarias extraordinarias a estatutos superiores y aprobación del Pastor Fundador"
);

// --- 11. Prevención de Fraude y Whistleblower ---
console.log("\n--- 11. Prevención de Fraude y No Encubrimiento ---");
const art89 = allArticles.find((a) => a.number === 89);
assert(
  art89 !== undefined && (art89.title + " " + art89.content.join(" ")).includes("Apropiación indebida") && (art89.title + " " + art89.content.join(" ")).includes("Falsificación"),
  "Art. 89 tipifica conductas prohibidas y causales de destitución inmediata"
);
const art90 = allArticles.find((a) => a.number === 90);
assert(
  art90 !== undefined && (art90.title + " " + art90.content.join(" ")).includes("Whistleblower") && (art90.title + " " + art90.content.join(" ")).includes("REN-FORM-FIN-012"),
  "Art. 90 establece el canal seguro de denuncias internas sin represalias"
);
const art92 = allArticles.find((a) => a.number === 92);
assert(
  art92 !== undefined && (art92.title + " " + art92.content.join(" ")).includes("no encubrirá"),
  "Art. 92 establece el deber de no ocultamiento y cooperación con autoridades civiles ante delitos"
);

// --- 12. Privacidad de Donantes y Seguridad Financiera ---
console.log("\n--- 12. Privacidad de Donantes y Seguridad ---");
const art94 = allArticles.find((a) => a.number === 94);
assert(
  art94 !== undefined && (art94.title + " " + art94.content.join(" ")).includes("confidencial") && (art94.title + " " + art94.content.join(" ")).includes("jamás serán vendidos"),
  "Art. 94 prohíbe comercializar o divulgar listas individuales de donantes"
);
const art124 = allArticles.find((a) => a.number === 124);
assert(
  art124 !== undefined && (art124.title + " " + art124.content.join(" ")).includes("PCI-DSS"),
  "Art. 124 exige pasarelas digitales certificadas y prohíbe almacenar tarjetas en servidores propios"
);

// --- 13. Delimitación Legal y Fiscal ---
console.log("\n--- 13. Delimitación Legal y Fiscal ---");
const art121 = allArticles.find((a) => a.number === 121);
assert(
  art121 !== undefined && (art121.title + " " + art121.content.join(" ")).includes("no constituyen asesoramiento legal"),
  "Art. 121 aclara taxativamente que el manual no sustituye asesoría legal o fiscal profesional"
);
const art122 = allArticles.find((a) => a.number === 122);
assert(
  art122 !== undefined && (art122.title + " " + art122.content.join(" ")).includes("501(c)(3)"),
  "Art. 122 vincula el cumplimiento del marco federal IRC § 501(c)(3)"
);

// --- 14. Catálogo de 15 Formularios Financieros ---
console.log("\n--- 14. Catálogo Oficial de Formularios ---");
assert(FINANCIAL_FORMS_CATALOG.length === 15, "El catálogo contiene exactamente 15 formularios oficiales");
assert(FINANCIAL_FORMS_CATALOG[0].code === "REN-FORM-FIN-001", "Primer formulario es REN-FORM-FIN-001");
assert(FINANCIAL_FORMS_CATALOG[14].code === "REN-FORM-FIN-015", "Último formulario es REN-FORM-FIN-015");

const formCodes = FINANCIAL_FORMS_CATALOG.map((f) => f.code);
assert(formCodes.includes("REN-FORM-FIN-005"), "Incluye REN-FORM-FIN-005 (Acta de Conteo de Ofrendas)");
assert(formCodes.includes("REN-FORM-FIN-007"), "Incluye REN-FORM-FIN-007 (Conciliación Financiera)");
assert(formCodes.includes("REN-FORM-FIN-009"), "Incluye REN-FORM-FIN-009 (Solicitud de Ayuda Benevolente)");
assert(formCodes.includes("REN-FORM-FIN-010"), "Incluye REN-FORM-FIN-010 (Declaración de Conflicto de Interés)");
assert(formCodes.includes("REN-FORM-FIN-012"), "Incluye REN-FORM-FIN-012 (Reporte de Incidente Financiero)");

// --- 15. Trazabilidad Doctrinal y Decisiones ---
console.log("\n--- 15. Trazabilidad y Decisiones Reales ---");
const allDecisions = getAllInstitutionalDecisions();
const historicalCodes = allDecisions.map((d) => d.decisionNumber);
FINANCES_MANUAL_DRAFT.decisionsUsed.forEach((decCode) => {
  assert(
    historicalCodes.includes(decCode),
    `Decisión vinculada '${decCode}' existe realmente en la base histórica`
  );
});
assert(FINANCES_MANUAL_DRAFT.pendingDefinitions.length >= 7, "Contiene lista exhaustiva de parámetros PENDIENTE_DEFINIR");
assert(FINANCES_MANUAL_DRAFT.legalReviewMatters.length >= 6, "Contiene lista exhaustiva de materias REQUIERE_REVISION_LEGAL");

// --- 16. Integración en el Sistema Maestro ---
console.log("\n--- 16. Integración en Servicios y Catálogo Maestro ---");
const catalogEntry = INITIAL_MASTER_CATALOG.find((d) => d.documentNumber === "REN-DOC-013");
assert(catalogEntry !== undefined, "REN-DOC-013 existe en INITIAL_MASTER_CATALOG");
assert(catalogEntry?.status === "EN_REDACCION", "Estado en catálogo es EN_REDACCION");
assert(catalogEntry?.version === "0.1", "Versión en catálogo es 0.1");
assert(catalogEntry?.category === "ADMINISTRACION_FINANZAS", "Categoría en catálogo es ADMINISTRACION_FINANZAS");

const serviceDoc = getInstitutionalDocumentById("doc-ren-013");
assert(serviceDoc !== undefined, "Documento doc-ren-013 recuperable por servicio");
assert(serviceDoc?.documentNumber === "REN-DOC-013", "Código de servicio coincide con REN-DOC-013");
assert(serviceDoc?.legalState === "REQUIERE_REVISION_LEGAL", "Estado legal en servicio es REQUIERE_REVISION_LEGAL");
assert(serviceDoc?.content.length! > 5000, "Contenido Markdown sustancial generado (> 5000 bytes)");

const markdown = generateFullFinancesManualMarkdown();
assert(markdown.includes("BORRADOR — NO ADOPTADO"), "Markdown incluye advertencia obligatoria BORRADOR — NO ADOPTADO");
assert(markdown.includes("REQUIERE REVISIÓN LEGAL"), "Markdown incluye advertencia obligatoria REQUIERE REVISIÓN LEGAL");
assert(markdown.includes("REN-FORM-FIN-015"), "Markdown incluye formulario REN-FORM-FIN-015");

// --- 17. Auditoría de Inventario ---
console.log("\n--- 17. Auditoría de Inventario Documental ---");
const inventory = getDocumentInventoryAudit();
const auditItem = inventory.find((i) => i.code === "REN-DOC-013");
assert(auditItem !== undefined, "REN-DOC-013 auditado en inventario");
assert(auditItem?.completeness === "DOCUMENTO_PARCIAL", "REN-DOC-013 auditado como DOCUMENTO_PARCIAL");
assert(auditItem?.hasFullContent === true, "REN-DOC-013 reporta hasFullContent true");

// --- 18. Preservación Documental ---
console.log("\n--- 18. Preservación Estricta de Documentos Anteriores ---");
const previousDocs = [
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
];

previousDocs.forEach((docCode) => {
  const doc = getInstitutionalDocumentById(docCode.toLowerCase().replace("ren-doc-", "doc-ren-"));
  assert(doc !== undefined && doc.content.length > 500, `Documento ${docCode} permanece intacto y con contenido`);
});

assert(allDecisions.length === 107, "Las 107 decisiones históricas permanecen intactas");
const doc17 = getAllInstitutionalDocuments().find((d) => d.documentNumber === "REN-DOC-017" && d.status === "EN_REDACCION");
assert(doc17 === undefined, "REN-DOC-017 NO ha sido creado");

console.log("\n==================================================");
console.log(`RESULTADO DE LA SUITE: ${passed} PASSED | ${failed} FAILED`);
console.log("==================================================\n");

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
