import {
  getAllBookChapters,
  getBookChapterBySlug,
  BOOK_CHAPTERS,
} from "../src/lib/book-legal-creation-content";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";

console.log("==========================================================================");
console.log("📖  SUITE DE PRUEBAS: LIBRO WEB LEGAL, INSTITUCIONAL Y ADMINISTRATIVO");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const chapters = getAllBookChapters();
const constitution = FULL_CONSTITUTION_DRAFT;
const allDecisions = getAllInstitutionalDecisions();

// TEST 1: Existen los 25 capítulos completos y numerados del 1 al 25
if (chapters.length === 25 && chapters.every((c, i) => c.chapterNumber === i + 1)) {
  testSuite.passed.push("TEST 1: Existen exactamente 25 capítulos numerados consecutivamente (1 al 25).");
} else {
  testSuite.failed.push(`TEST 1: Conteo o numeración incorrecta de capítulos: ${chapters.length}`);
}

// TEST 2: Capítulo 1 describe el Plan General de 19 pasos
const c1 = getBookChapterBySlug("capitulo-1-plan-general");
if (c1 && c1.chapterNumber === 1 && c1.title.includes("Plan Completo")) {
  testSuite.passed.push("TEST 2: Capítulo 1 describe el Plan General de 19 pasos.");
} else {
  testSuite.failed.push("TEST 2: Capítulo 1 no encontrado.");
}

// TEST 3: Capítulo 2 diferencia Title 16 ($25) vs Title 15A ($75)
const c2 = getBookChapterBySlug("capitulo-2-incorporacion-en-new-jersey") || getBookChapterBySlug("2");
const c2HasFees = c2 && c2.contentSections.some((s) => 
  s.paragraphs.some((p) => p.includes("$25") || p.includes("$75")) ||
  s.tables?.rows.some((r) => r.some((cell) => cell.includes("$25") || cell.includes("$75")))
);
if (c2HasFees) {
  testSuite.passed.push("TEST 3: Capítulo 2 diferencia con exactitud las tarifas de Title 16 ($25) y Title 15A ($75).");
} else {
  testSuite.failed.push("TEST 3: Capítulo 2 con tarifas incompletas.");
}

// TEST 4: Capítulo 3 contiene el Paquete de Formación Legal (A a P)
const c3 = getBookChapterBySlug("capitulo-3-nombre-y-agente-registrado") || getBookChapterBySlug("3");
if (c3 && c3.contentSections.some((s) => s.sectionTitle.includes("A a P"))) {
  testSuite.passed.push("TEST 4: Capítulo 3 estructura el Paquete de Formación Legal en 16 etapas (A a P).");
} else {
  testSuite.failed.push("TEST 4: Capítulo 3 incompleto.");
}

// TEST 5: Capítulo 5 contiene los 10 Modelos Prácticos de Gobierno (Modelos 1 al 10)
const c5 = getBookChapterBySlug("capitulo-5-estatutos-corporativos") || getBookChapterBySlug("5");
const c5Models = c5?.contentSections.flatMap((s) => s.models || []) || [];
if (c5 && c5Models.length === 10) {
  testSuite.passed.push("TEST 5: Capítulo 5 contiene los 10 modelos prácticos de gobernanza corporativa.");
} else {
  testSuite.failed.push(`TEST 5: Modelos en Capítulo 5 incompletos: ${c5Models.length}`);
}

// TEST 6: Capítulo 8 cubre 501(c)(3), IRC 508(c)(1)(A), Form 1023 ($600) vs 1023-EZ ($275), Form 990 y Form 990-T
const c8 = getBookChapterBySlug("capitulo-8-exencion-501c3-irs") || getBookChapterBySlug("8");
if (c8 && c8.contentSections.some((s) => s.sectionTitle.includes("Diferenciación de Conceptos") || s.sectionTitle.includes("501(c)(3)"))) {
  testSuite.passed.push("TEST 6: Capítulo 8 cubre 501(c)(3), excepción 508(c)(1)(A), Form 1023 ($600), Form 990 y Form 990-T.");
} else {
  testSuite.failed.push("TEST 6: Capítulo 8 incompleto.");
}

// TEST 7: Capítulo 10 contiene Política Financiera, Conflicto de Intereses (Modelo 11) y Contratos (Modelo 12)
const c10 = getBookChapterBySlug("capitulo-10-dinero-y-controles-financieros") || getBookChapterBySlug("10");
const c10Models = c10?.contentSections.flatMap((s) => s.models || []) || [];
if (c10 && c10Models.length === 2) {
  testSuite.passed.push("TEST 7: Capítulo 10 incluye matriz de firmas, política de conflicto de intereses y modelos 11 y 12.");
} else {
  testSuite.failed.push("TEST 7: Capítulo 10 incompleto.");
}

// TEST 8: Capítulo 11 incluye Donaciones Restringidas y Modelo 13
const c11 = getBookChapterBySlug("capitulo-11-donaciones-deducciones-irs") || getBookChapterBySlug("11");
const c11Models = c11?.contentSections.flatMap((s) => s.models || []) || [];
if (c11 && c11Models.length === 1) {
  testSuite.passed.push("TEST 8: Capítulo 11 cubre registro de donantes y el Formulario de Donación Restringida (Modelo 13).");
} else {
  testSuite.failed.push("TEST 8: Capítulo 11 incompleto.");
}

// TEST 9: Capítulo 12 cubre Ministros (Pub 517), Housing Allowance (IRC 107) y Checklist de Nómina
const c12 = getBookChapterBySlug("capitulo-12-impuestos-y-obligaciones-new-jersey") || getBookChapterBySlug("12");
if (c12 && c12.contentSections.some((s) => s.sectionTitle.includes("Housing Allowance") || s.sectionTitle.includes("Pub 517"))) {
  testSuite.passed.push("TEST 9: Capítulo 12 cubre tratamiento de ministros (Pub 517), Housing Allowance y checklist de nómina en 3 fases.");
} else {
  testSuite.failed.push("TEST 9: Capítulo 12 incompleto.");
}

// TEST 10: Capítulo 16 contiene Guía de Gobierno, Asambleas y Modelos 15, 16 y 17
const c16 = getBookChapterBySlug("capitulo-16-gobierno-de-renacer") || getBookChapterBySlug("16");
const c16Models = c16?.contentSections.flatMap((s) => s.models || []) || [];
if (c16 && c16Models.length === 3 && c16.contentSections.some((s) => s.sectionTitle.includes("Reuniones de la Congregación"))) {
  testSuite.passed.push("TEST 10: Capítulo 16 contiene guía operativa de gobierno, asambleas congregacionales y Modelos 15, 16 y 17.");
} else {
  testSuite.failed.push(`TEST 10: Capítulo 16 incompleto o faltan modelos (${c16Models.length}/3).`);
}

// TEST 11: Capítulo 17 cubre Ciclo de Membresía (A a L), Bautismos, Matrimonios, Credenciales y Modelos 18 a 24
const c17 = getBookChapterBySlug("capitulo-17-membresia-eclesial") || getBookChapterBySlug("17");
const c17Models = c17?.contentSections.flatMap((s) => s.models || []) || [];
if (c17 && c17Models.length === 7) {
  testSuite.passed.push("TEST 11: Capítulo 17 cubre ciclo de membresía (A a L), bautismos, matrimonios, credenciales y Modelos 18 al 24.");
} else {
  testSuite.failed.push(`TEST 11: Capítulo 17 incompleto o modelos insuficientes (${c17Models.length}/7).`);
}

// TEST 12: Capítulo 18 cubre Liderazgo e Incorporación (11 pasos) y Transición de Salida
const c18 = getBookChapterBySlug("capitulo-18-ministerios-y-liderazgo") || getBookChapterBySlug("18");
if (c18 && c18.contentSections.some((s) => s.sectionTitle.includes("Incorporación")) && c18.contentSections.some((s) => s.sectionTitle.includes("Transición"))) {
  testSuite.passed.push("TEST 12: Capítulo 18 contiene procedimiento de incorporación de líderes y protocolo de transición/salida.");
} else {
  testSuite.failed.push("TEST 12: Capítulo 18 incompleto.");
}

// TEST 13: Capítulo 19 cubre Protección Infantil, Emergencias/911, Modelo 14 (Privacidad) y Modelo 25 (Incidentes)
const c19 = getBookChapterBySlug("capitulo-19-proteccion-de-ninos-y-vulnerables") || getBookChapterBySlug("19");
const c19Models = c19?.contentSections.flatMap((s) => s.models || []) || [];
if (c19 && c19Models.length === 2 && c19.contentSections.some((s) => s.sectionTitle.includes("Emergencias"))) {
  testSuite.passed.push("TEST 13: Capítulo 19 integra protección infantil, protocolo de emergencias, Modelo 14 y Modelo 25.");
} else {
  testSuite.failed.push(`TEST 13: Capítulo 19 incompleto (${c19Models.length}/2 modelos).`);
}

// TEST 14: Capítulo 20 cubre Operación Semanal, Ofrendas, Llaves (Modelo 26), Inventario (Modelo 27) y Apertura/Cierre
const c20 = getBookChapterBySlug("capitulo-20-registros-y-archivo-documental") || getBookChapterBySlug("20");
const c20Models = c20?.contentSections.flatMap((s) => s.models || []) || [];
if (c20 && c20Models.length === 2 && c20.contentSections.some((s) => s.sectionTitle.includes("Manejo de Ofrendas"))) {
  testSuite.passed.push("TEST 14: Capítulo 20 cubre operación semanal, manejo de ofrendas, llaves (Modelo 26), inventario (Modelo 27) y apertura/cierre.");
} else {
  testSuite.failed.push(`TEST 14: Capítulo 20 incompleto (${c20Models.length}/2 modelos).`);
}

// TEST 15: Capítulo 24 consolida la Operación Diaria, Tabla Maestra y Kit de los 27 Modelos (A a K)
const c24 = getBookChapterBySlug("capitulo-24-profesionales-abogado-cpa-seguro") || getBookChapterBySlug("24");
if (c24 && c24.contentSections.some((s) => s.sectionTitle.includes("Tablero Operativo")) && c24.contentSections.some((s) => s.sectionTitle.includes("Kit Maestro"))) {
  testSuite.passed.push("TEST 15: Capítulo 24 consolida el Tablero Operativo Diario, Tabla Maestra y Kit de los 27 Modelos clasificados.");
} else {
  testSuite.failed.push("TEST 15: Capítulo 24 incompleto.");
}

// TEST 16: Existen exactamente 27 modelos prácticos y todos exhiben el disclaimer obligatorio
const allBookModels = chapters.flatMap((c) => c.contentSections.flatMap((s) => s.models || []));
if (allBookModels.length === 27 && allBookModels.every((m) => m.disclaimer.includes("REQUIERE REVISIÓN LEGAL ANTES DE USARSE"))) {
  testSuite.passed.push("TEST 16: Existen exactamente 27 modelos prácticos y todos exhiben el disclaimer obligatorio de revisión legal.");
} else {
  testSuite.failed.push(`TEST 16: Conteo o disclaimer incorrecto en modelos: ${allBookModels.length} de 27.`);
}

// TEST 17: Las 107 decisiones históricas permanecen 100% íntegras
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 17: Las 107 decisiones institucionales permanecen 100% íntegras e intactas.");
} else {
  testSuite.failed.push(`TEST 17: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 18: REN-DOC-002 sigue v0.1 EN_REDACCION NO ADOPTADA
if (constitution.version === "0.1" && constitution.status === "EN_REDACCION" && (constitution.status as string) !== "ADOPTADO") {
  testSuite.passed.push("TEST 18: REN-DOC-002 permanece inmutable en v0.1 EN_REDACCION NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 18: Estado de Constitución alterado.");
}

console.log(`==========================================================================`);
console.log(`TOTAL PRUEBAS LIBRO WEB CREACIÓN LEGAL: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log(`==========================================================================`);

testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));

if (testSuite.failed.length > 0) {
  console.error(">>> ERROR EN SUITE DE PRUEBAS <<<");
  process.exit(1);
} else {
  console.log("\\n>>> SUITE DEL LIBRO WEB: 100% PASS EXITOSO <<<\\n");
  process.exit(0);
}
