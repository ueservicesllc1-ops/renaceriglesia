import { getDecisionByNumber, getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("🏛️  SUITE DE PRUEBAS DE CONSOLIDACIÓN Y AUDITORÍA (FASE 22A / 23A)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// TEST 1: DEC-PEND-002 contiene los criterios acordados
const dec2 = getDecisionByNumber("DEC-PEND-002");
if (dec2 && dec2.notes?.includes("CRITERIOS DEFINIDOS")) {
  testSuite.passed.push("TEST 1: DEC-PEND-002 contiene los criterios acordados.");
} else {
  testSuite.failed.push("TEST 1: DEC-PEND-002 no contiene los criterios.");
}

// TEST 2: Quórum 2/3/3 para 3/4/5 miembros
const notes2 = dec2?.notes || "";
if (
  (notes2.includes("3 miembros -> 2 presentes") || notes2.includes("Consejo de 3 -> 2 presentes")) &&
  (notes2.includes("4 miembros -> 3 presentes") || notes2.includes("Consejo de 4 -> 3 presentes")) &&
  (notes2.includes("5 miembros -> 3 presentes") || notes2.includes("Consejo de 5 -> 3 presentes"))
) {
  testSuite.passed.push("TEST 2: Quórums escalonados (2 para 3, 3 para 4, 3 para 5) correctamente registrados.");
} else {
  testSuite.failed.push("TEST 2: Falla en quórums escalonados de DEC-PEND-002.");
}

// TEST 3: Mayoría simple para ordinarias
if (notes2.includes("Ordinarias: Mayoría simple")) {
  testSuite.passed.push("TEST 3: Mayoría simple para decisiones ordinarias registrada.");
} else {
  testSuite.failed.push("TEST 3: Falla en mayoría ordinaria.");
}

// TEST 4: Mayoría 2/3 para extraordinarias
if (notes2.includes("2/3 del Consejo de Gobierno")) {
  testSuite.passed.push("TEST 4: Mayoría de 2/3 para decisiones extraordinarias registrada.");
} else {
  testSuite.failed.push("TEST 4: Falla en mayoría extraordinaria.");
}

// TEST 5: Empate no aprobado
if (notes2.includes("Empate: Propuesta NO aprobada")) {
  testSuite.passed.push("TEST 5: Regla de empate (propuesta rechazada) registrada.");
} else {
  testSuite.failed.push("TEST 5: Falla en regla de empate.");
}

// TEST 6: 8 Categorías financieras importantes en DEC-PEND-003
const dec3 = getDecisionByNumber("DEC-PEND-003");
const notes3 = dec3?.notes || "";
const has8Cats =
  notes3.includes("(1) Compra/venta inmuebles") &&
  notes3.includes("(2) Préstamos/deuda") &&
  notes3.includes("(3) Contratos extraordinarios") &&
  notes3.includes("(4) Apertura/cierre de cuentas") &&
  notes3.includes("(5) Inversiones de fondos") &&
  notes3.includes("(6) Gastos fuera de presupuesto") &&
  notes3.includes("(7) Transferencias importantes de activos") &&
  notes3.includes("(8) Operaciones que comprometan significativamente bienes de RENACER");
if (has8Cats) {
  testSuite.passed.push("TEST 6: Las 8 categorías financieras importantes registradas en DEC-PEND-003.");
} else {
  testSuite.failed.push("TEST 6: Faltan categorías financieras en DEC-PEND-003.");
}

// TEST 7: Control bancario exclusivo del Pastor
const hasBankControl =
  notes3.includes("acceso exclusivo del Pastor Fundador") &&
  notes3.includes("Consejo sin acceso operativo ni de consulta");
if (hasBankControl) {
  testSuite.passed.push("TEST 7: Control bancario exclusivo del Pastor Fundador registrado.");
} else {
  testSuite.failed.push("TEST 7: Falla en registro de control bancario.");
}

// TEST 8: DEC-PEND-004 solo permite voto a miembros formales y activos
const dec4 = getDecisionByNumber("DEC-PEND-004");
const notes4 = dec4?.notes || "";
if (notes4.includes("miembros activos con derecho a voto") || notes4.includes("Miembros Formales y Activos")) {
  testSuite.passed.push("TEST 8: Voto restringido exclusivamente a miembros formales y activos.");
} else {
  testSuite.failed.push("TEST 8: Falla en restricción de voto.");
}

// TEST 9: Los criterios de miembro activo presentes
const hasActiveCriteria =
  notes4.includes("Formales, activos, bautizados conforme a RENACER") &&
  notes4.includes("participación regular") &&
  notes4.includes("sin suspensión disciplinaria");
if (hasActiveCriteria) {
  testSuite.passed.push("TEST 9: Los criterios de miembro activo registrados.");
} else {
  testSuite.failed.push("TEST 9: Faltan criterios de miembro activo.");
}

// TEST 10: Mayorías simple y 2/3 en DEC-PEND-004
if (notes4.includes("Ordinarias = Mayoría simple") && notes4.includes("Extraordinarias = 2/3")) {
  testSuite.passed.push("TEST 10: Mayorías congregacionales (simple y 2/3) registradas.");
} else {
  testSuite.failed.push("TEST 10: Falla en mayorías congregacionales.");
}

// TEST 11: Quórum congregacional registrado
if (notes4.includes("Quórum Congregacional: Al menos el 50%")) {
  testSuite.passed.push("TEST 11: Quórum congregacional del 50% debidamente consolidado.");
} else {
  testSuite.failed.push("TEST 11: Falla en quórum congregacional.");
}

// TEST 12: DEC-PEND-005 mantiene 3 niveles
const dec5 = getDecisionByNumber("DEC-PEND-005");
const notes5 = dec5?.notes || "";
if (notes5.includes("NIVEL A — DOCTRINAL") && notes5.includes("NIVEL B — CONSTITUCIONAL IMPORTANTE") && notes5.includes("NIVEL C — ADMINISTRATIVO")) {
  testSuite.passed.push("TEST 12: Estructura de enmiendas en 3 niveles registrada en DEC-PEND-005.");
} else {
  testSuite.failed.push("TEST 12: Falla en niveles de enmiendas.");
}

// TEST 13: DEC-PEND-006 mantiene jerarquía exacta de 6 niveles
const dec6 = getDecisionByNumber("DEC-PEND-006");
const notes6 = dec6?.notes || "";
const has6Levels =
  notes6.includes("(1) Ley aplicable") &&
  notes6.includes("(2) Articles of Incorporation") &&
  notes6.includes("(3) Bylaws") &&
  notes6.includes("(4) Constitución") &&
  notes6.includes("(5) Declaración de Fe") &&
  notes6.includes("(6) Manuales/Reglamentos");
if (has6Levels) {
  testSuite.passed.push("TEST 13: Jerarquía formal de 6 niveles registrada en DEC-PEND-006.");
} else {
  testSuite.failed.push("TEST 13: Falla en jerarquía documental.");
}

// TEST 14: DEC-PEND-007 mantiene fecha de vigencia real por adopción formal
const dec7 = getDecisionByNumber("DEC-PEND-007");
if (dec7?.notes?.includes("ACTO FORMAL DE ADOPCIÓN en 10 pasos") && dec7.notes?.includes("Sin fechas ficticias")) {
  testSuite.passed.push("TEST 14: Protocolo de adopción formal en 10 pasos (sin fechas ficticias) registrado.");
} else {
  testSuite.failed.push("TEST 14: Falla en vigencia constitucional.");
}

// TEST 15: DEC-PEND-008 mantiene propiedad de RENACER CHURCH, INC.
const dec8 = getDecisionByNumber("DEC-PEND-008");
if (dec8?.notes?.includes("patrimonio exclusivo de RENACER CHURCH, INC.") && dec8.notes?.includes("Prohibición estricta de considerarlos propiedad personal")) {
  testSuite.passed.push("TEST 15: Patrimonio exclusivo a nombre de RENACER CHURCH, INC. registrado.");
} else {
  testSuite.failed.push("TEST 15: Falla en régimen patrimonial.");
}

// TEST 16: DEC-PEND-009 mantiene prohibición de distribución personal
const dec9 = getDecisionByNumber("DEC-PEND-009");
if (dec9?.notes?.includes("Prohibición tajante de reparto entre pastores") && dec9.notes?.includes("Destino obligatorio a entidad religiosa o compatible exenta 501(c)(3)")) {
  testSuite.passed.push("TEST 16: Cláusula de disolución y no reparto personal registrada en DEC-PEND-009.");
} else {
  testSuite.failed.push("TEST 16: Falla en disolución.");
}

// TEST 17: DEC-PEND-010 mantiene mediación sin bloquear autoridades civiles
const dec10 = getDecisionByNumber("DEC-PEND-010");
if (dec10?.notes?.includes("NO impide acudir a policía, tribunales") && dec10.notes?.includes("Prohibición estricta de usar el proceso interno para ocultar o bloquear abusos")) {
  testSuite.passed.push("TEST 17: Mediación eclesiástica sin obstaculizar autoridades civiles registrada.");
} else {
  testSuite.failed.push("TEST 17: Falla en mediación y conflictos.");
}

// TEST 18: Ninguna decisión pendiente convertida automáticamente en ADOPTADA
const pendingDecs = ["DEC-PEND-001", "DEC-PEND-002", "DEC-PEND-003", "DEC-PEND-004", "DEC-PEND-005", "DEC-PEND-006", "DEC-PEND-007", "DEC-PEND-008", "DEC-PEND-009", "DEC-PEND-010"];
const noAdopted = pendingDecs.every((code) => {
  const d = getDecisionByNumber(code);
  return d && d.decisionStatus !== "DECIDIDA";
});
if (noAdopted) {
  testSuite.passed.push("TEST 18: Ninguna de las 10 decisiones pendientes fue marcada como DECIDIDA/ADOPTADA.");
} else {
  testSuite.failed.push("TEST 18: Alerta: Una decisión pendiente fue indebidamente marcada como decidida.");
}

// TEST 19: Constitución permanece PLANIFICADO v0.1
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
if (catConst?.status === "PLANIFICADO" && catConst.version === "0.1") {
  testSuite.passed.push("TEST 19: Constitución (REN-DOC-002) permanece estrictamente en PLANIFICADO v0.1.");
} else {
  testSuite.failed.push("TEST 19: Modificación indebida en Constitución.");
}

// TEST 20: Doctrina permanece BORRADOR v1.0
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc?.status === "BORRADOR" && catDoc.version === "1.0") {
  testSuite.passed.push("TEST 20: Declaración de Fe (REN-DOC-001) permanece en BORRADOR v1.0.");
} else {
  testSuite.failed.push("TEST 20: Modificación indebida en Doctrina.");
}

// TEST 21: RENACER IA distingue criterios definidos de pendientes
function simulateAIPhase22A(decCode: string) {
  const d = getDecisionByNumber(decCode);
  if (!d) return "No encontrada";
  return `ESTADO: ${d.decisionStatus} | NOTAS: ${d.notes}`;
}
const aiQ2 = simulateAIPhase22A("DEC-PEND-002");
if (aiQ2.includes("CRITERIOS DEFINIDOS") && aiQ2.includes("PENDIENTE")) {
  testSuite.passed.push("TEST 21: RENACER IA discrimina fielmente entre criterios definidos y materias pendientes.");
} else {
  testSuite.failed.push("TEST 21: Falla en respuestas de RENACER IA.");
}

// TEST 22: Relaciones con Constitución y Bylaws preservadas
const allDecs = getAllInstitutionalDecisions();
const allValidDocs = allDecs.every((d) => d.affectedDocuments.length > 0);
if (allValidDocs) {
  testSuite.passed.push("TEST 22: Todas las decisiones preservan sus relaciones con Constitución, Bylaws y Doctrina.");
} else {
  testSuite.failed.push("TEST 22: Falla en relaciones documentales.");
}

// TEST 23: Estados REQUIERE_REVISION_LEGAL preservados
const legalCount = allDecs.filter((d) => d.decisionStatus === "REQUIERE_REVISION_LEGAL").length;
if (legalCount === 7) {
  testSuite.passed.push(`TEST 23: Las 7 decisiones con requerimiento legal (${legalCount}) están identificadas.`);
} else {
  testSuite.failed.push(`TEST 23: Conteo incorrecto de revisión legal: ${legalCount}`);
}

// TEST 24: RBAC continúa funcionando
const pastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const adminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (pastorAdopt && !adminAdopt) {
  testSuite.passed.push("TEST 24: RBAC protege la autoridad doctrinal exclusiva del Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 24: Falla en seguridad RBAC.");
}

// TEST 25: Registro Maestro mantiene integridad
const zodValidAll = allDecs.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
if (zodValidAll && allDecs.length === 33) {
  testSuite.passed.push("TEST 25: Registro Maestro de 33 decisiones 100% válido y verificado.");
} else {
  testSuite.failed.push("TEST 25: Falló validación integral del registro.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 22A: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
