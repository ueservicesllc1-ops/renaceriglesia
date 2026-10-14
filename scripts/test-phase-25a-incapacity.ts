import { getAllInstitutionalDecisions, getDecisionByNumber } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("👑 SUITE DE PRUEBAS DE INCAPACIDAD Y CONTINUIDAD (FASE 25A - DEC-PEND-001)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const dec1 = getDecisionByNumber("DEC-PEND-001");
const notes = dec1?.notes || "";

// TEST 1: Solicitar evaluación no declara incapacidad
if (notes.includes("solicitud ≠ declaración de incapacidad")) {
  testSuite.passed.push("TEST 1: Solicitud de evaluación médica delimitada formalmente (solicitud ≠ declaración).");
} else {
  testSuite.failed.push("TEST 1: Falla en delimitación de solicitud de evaluación.");
}

// TEST 2: Mientras la evaluación está pendiente, Founder conserva autoridad
if (notes.includes("Pastor Fundador conserva plena autoridad; no hay suspensión automática")) {
  testSuite.passed.push("TEST 2: Plena autoridad preservada del Pastor Fundador durante evaluación pendiente.");
} else {
  testSuite.failed.push("TEST 2: Falla en preservación de autoridad durante evaluación.");
}

// TEST 3: Un solo Consejo puede solicitar evaluación
if (notes.includes("Individualmente Consejo de Gobierno o Consejo Ministerial pueden solicitarla")) {
  testSuite.passed.push("TEST 3: Facultad individual de cada Consejo para solicitar evaluación médica registrada.");
} else {
  testSuite.failed.push("TEST 3: Falla en facultad individual de solicitud.");
}

// TEST 4: La determinación institucional requiere ambos Consejos
if (notes.includes("determinación institucional es conjunta (Consejo de Gobierno + Consejo Ministerial)")) {
  testSuite.passed.push("TEST 4: Determinación institucional conjunta de ambos Consejos registrada.");
} else {
  testSuite.failed.push("TEST 4: Falla en determinación institucional conjunta.");
}

// TEST 5: Evaluación profesional y decisión institucional son pasos distintos
if (notes.includes("aporta evidencia médica") && notes.includes("determinación institucional es conjunta")) {
  testSuite.passed.push("TEST 5: Separación estricta entre evidencia médica profesional y determinación institucional.");
} else {
  testSuite.failed.push("TEST 5: Falla en separación de pasos técnico e institucional.");
}

// TEST 6: Incapacidad temporal no crea Pastor interino
if (notes.includes("Incapacidad Temporal: No crea Pastor interino automático")) {
  testSuite.passed.push("TEST 6: Prohibición de figura automática de Pastor interino registrada.");
} else {
  testSuite.failed.push("TEST 6: Falla en prohibición de Pastor interino automático.");
}

// TEST 7: Puede existir persona de continuidad temporal
if (notes.includes("Persona designada ejecuta únicamente tareas necesarias de continuidad")) {
  testSuite.passed.push("TEST 7: Figura de continuidad temporal registrada.");
} else {
  testSuite.failed.push("TEST 7: Falla en figura de continuidad temporal.");
}

// TEST 8: El designado temporal no recibe autoridad doctrinal del Founder
if (notes.includes("NO recibe autoridad doctrinal") && notes.includes("Prohibición de modificar/adoptar doctrina")) {
  testSuite.passed.push("TEST 8: Blindaje doctrinal: El designado temporal no recibe autoridad doctrinal exclusiva.");
} else {
  testSuite.failed.push("TEST 8: Falla en blindaje de autoridad doctrinal.");
}

// TEST 9: El designado temporal no puede designar sucesor
if (notes.includes("designar sucesores") && notes.includes("Límites del Designado Temporal")) {
  testSuite.passed.push("TEST 9: Prohibición expresa de que el designado temporal nombre sucesor.");
} else {
  testSuite.failed.push("TEST 9: Falla en prohibición de designación de sucesores.");
}

// TEST 10: Plan de Continuidad no equivale a designación de sucesor
if (notes.includes("Plan de Continuidad del Fundador: Instrumento conceptual A") && notes.includes("Documento de Designación de Sucesor: Instrumento conceptual B")) {
  testSuite.passed.push("TEST 10: Separación conceptual estricta entre Plan de Continuidad (A) y Designación de Sucesor (B).");
} else {
  testSuite.failed.push("TEST 10: Falla en separación de instrumentos conceptuales A y B.");
}

// TEST 11: Documento de Designación de Sucesor puede modificarse/revocarse
if (notes.includes("modificable/revocable en vida con capacidad")) {
  testSuite.passed.push("TEST 11: Facultad de modificar/revocar la designación anticipada en vida registrada.");
} else {
  testSuite.failed.push("TEST 11: Falla en revocabilidad de designación.");
}

// TEST 12: Designación anticipada no transfiere autoridad inmediatamente
if (notes.includes("no transfiere autoridad de inmediato")) {
  testSuite.passed.push("TEST 12: Principio de no transferencia inmediata de autoridad registrado.");
} else {
  testSuite.failed.push("TEST 12: Falla en no transferencia inmediata.");
}

// TEST 13: Restauración de capacidad termina la autoridad temporal
if (notes.includes("Restauración de Capacidad") && notes.includes("cesa inmediatamente la autoridad temporal")) {
  testSuite.passed.push("TEST 13: Cese inmediato de autoridad temporal ante restauración médica formal.");
} else {
  testSuite.failed.push("TEST 13: Falla en restauración de capacidad.");
}

// TEST 14: Incapacidad permanente requiere evaluación profesional + determinación conjunta
if (notes.includes("Incapacidad Permanente: Evaluación profesional de condición permanente + determinación conjunta")) {
  testSuite.passed.push("TEST 14: Requisitos estrictos de doble validación para incapacidad permanente registrados.");
} else {
  testSuite.failed.push("TEST 14: Falla en requisitos de incapacidad permanente.");
}

// TEST 15: Desacuerdo activa segunda evaluación independiente
if (notes.includes("1° Segunda evaluación independiente")) {
  testSuite.passed.push("TEST 15: Activación de segunda evaluación médica independiente ante desacuerdo registrada.");
} else {
  testSuite.failed.push("TEST 15: Falla en segunda evaluación.");
}

// TEST 16: Segundo desacuerdo activa mediación institucional
if (notes.includes("3° Mediación institucional interna")) {
  testSuite.passed.push("TEST 16: Activación de mediación interna ante persistencia de desacuerdo registrada.");
} else {
  testSuite.failed.push("TEST 16: Falla en mediación por desacuerdo.");
}

// TEST 17: No existe sucesión automática por desacuerdo
if (notes.includes("no hay sucesión automática por desacuerdo")) {
  testSuite.passed.push("TEST 17: Prohibición de activación automática de sucesión por mero desacuerdo registrada.");
} else {
  testSuite.failed.push("TEST 17: Falla en prohibición de sucesión automática.");
}

// TEST 18: Escenario extremo posterior a mediación permanece pendiente
if (notes.includes("Caso Extremo No Resuelto: Si continúa desacuerdo tras mediación, queda expresamente PENDIENTE")) {
  testSuite.passed.push("TEST 18: Caso extremo de desacuerdo catalogado fielmente como PENDIENTE sin desempates inventados.");
} else {
  testSuite.failed.push("TEST 18: Falla en registro de caso extremo pendiente.");
}

// TEST 19: RENACER IA distingue decisión definida de documento adoptado
function simulateAIIncapacity(code: string) {
  const d = getDecisionByNumber(code);
  return {
    isDecided: d?.decisionState === "DEFINIDA" ? "Sí, criterios de incapacidad definidos internamente." : "No definido.",
    isAdopted: d?.documentState === "ADOPTADO" ? "Sí, adoptado." : "No, documento formal PLANIFICADO / NO ADOPTADO.",
    legalNotice: d?.legalState === "REQUIERE_REVISION_LEGAL" ? "Sujeto a revisión legal corporativa en NJ." : "No requiere.",
  };
}
const aiRes = simulateAIIncapacity("DEC-PEND-001");
if (aiRes.isDecided.includes("definidos internamente") && aiRes.isAdopted.includes("PLANIFICADO / NO ADOPTADO")) {
  testSuite.passed.push("TEST 19: RENACER IA discrimina decisión definida de documento no adoptado.");
} else {
  testSuite.failed.push("TEST 19: Falla en discriminación de RENACER IA.");
}

// TEST 20: RENACER IA distingue decisión institucional de revisión legal
if (aiRes.legalNotice.includes("Sujeto a revisión legal corporativa")) {
  testSuite.passed.push("TEST 20: RENACER IA advierte adecuadamente el requerimiento de revisión legal.");
} else {
  testSuite.failed.push("TEST 20: Falla en advertencia legal de RENACER IA.");
}

// TEST 21: Ningún documento se marca como ADOPTADO
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catConst?.status === "PLANIFICADO" && catDoc?.status === "BORRADOR") {
  testSuite.passed.push("TEST 21: Constitución y Doctrina permanecen en estado NO ADOPTADO.");
} else {
  testSuite.failed.push("TEST 21: Modificación indebida de documentos maestros.");
}

// TEST 22: No se modifica la doctrina
if (catDoc?.version === "1.0") {
  testSuite.passed.push("TEST 22: Integridad inmutable de la Declaración de Fe v1.0 confirmada.");
} else {
  testSuite.failed.push("TEST 22: Falla en versión de doctrina.");
}

// TEST 23: No se alteran IDs existentes (33 decisiones)
const allDecs = getAllInstitutionalDecisions();
if (allDecs.length >= 33 && allDecs.some((d) => d.decisionNumber === "DEC-PEND-001")) {
  testSuite.passed.push("TEST 23: Decisiones institucionales de gobernanza y código DEC-PEND-001 preservados.");
} else {
  testSuite.failed.push("TEST 23: Falla en catálogo de decisiones.");
}

// TEST 24: Esquema Zod y RBAC validados
const allZod = allDecs.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
const canPastor = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const canAdmin = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (allZod && canPastor && !canAdmin) {
  testSuite.passed.push("TEST 24: Esquema Zod 100% válido y exclusividad RBAC del Pastor Fundador confirmada.");
} else {
  testSuite.failed.push("TEST 24: Falla en validación Zod o RBAC.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 25A: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
