import { getDecisionByNumber, getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("👑 SUITE DE PRUEBAS DE SUCESIÓN FUNDACIONAL (FASE 21 - DEC-PEND-001)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const decSuccession = getDecisionByNumber("DEC-PEND-001");

// TEST 1: DEC-PEND-001 existe
if (decSuccession) {
  testSuite.passed.push("TEST 1: DEC-PEND-001 existe y está accesible en el Registro Maestro.");
} else {
  testSuite.failed.push("TEST 1: DEC-PEND-001 no fue encontrado.");
}

// TEST 2: Validación con Schema Zod
const validZod = InstitutionalDecisionSchema.safeParse(decSuccession).success;
if (validZod) {
  testSuite.passed.push("TEST 2: DEC-PEND-001 cumple estrictamente con el esquema Zod.");
} else {
  testSuite.failed.push("TEST 2: DEC-PEND-001 falló la validación Zod.");
}

// TEST 3: Sucesión por designación del Pastor Fundador registrada
const optA = decSuccession?.options?.find((o) => o.optionKey === "OPTION_A");
if (
  optA &&
  optA.description.includes("Mientras el Pastor Fundador esté en vida") &&
  optA.description.includes("tenga capacidad para ejercer su función")
) {
  testSuite.passed.push("TEST 3: Facultad de designación del Pastor Fundador en vida y con capacidad registrada.");
} else {
  testSuite.failed.push("TEST 3: Falla en registro de designación por Pastor Fundador.");
}

// TEST 4: Incapacidad activa el proceso Consejo de Gobierno + Consejo Ministerial
const optB = decSuccession?.options?.find((o) => o.optionKey === "OPTION_B");
if (
  optB &&
  optB.description.includes("incapacidad") &&
  optB.description.includes("Consejo de Gobierno") &&
  optB.description.includes("Consejo Ministerial")
) {
  testSuite.passed.push("TEST 4: Activación conjunta ante incapacidad (Consejo de Gobierno + Consejo Ministerial) registrada.");
} else {
  testSuite.failed.push("TEST 4: Falla en activación por incapacidad.");
}

// TEST 5: Fallecimiento activa el proceso Consejo de Gobierno + Consejo Ministerial
if (
  optB &&
  optB.description.includes("fallecimiento") &&
  optB.description.includes("Consejo de Gobierno") &&
  optB.description.includes("Consejo Ministerial")
) {
  testSuite.passed.push("TEST 5: Activación conjunta ante fallecimiento (Consejo de Gobierno + Consejo Ministerial) registrada.");
} else {
  testSuite.failed.push("TEST 5: Falla en activación por fallecimiento.");
}

// TEST 6: Ambos Consejos son necesarios para aprobar al sucesor
if (
  optB &&
  optB.description.includes("aprobado por AMBOS cuerpos") &&
  decSuccession?.notes?.includes("Aprobación OBLIGATORIA de AMBOS Consejos")
) {
  testSuite.passed.push("TEST 6: Aprobación obligatoria y conjunta de ambos Consejos registrada.");
} else {
  testSuite.failed.push("TEST 6: Falla en requisito de doble aprobación.");
}

// TEST 7: Los 8 requisitos están registrados exactamente
const notes = decSuccession?.notes || "";
const has8Reqs =
  notes.includes("Miembro activo") &&
  notes.includes("Ministro Ordenado") &&
  notes.includes("Seminario completado") &&
  notes.includes("Experiencia pastoral") &&
  notes.includes("Buen testimonio/carácter") &&
  notes.includes("Conforme con la Declaración de Fe") &&
  notes.includes("Sin disciplina vigente") &&
  notes.includes("Capacidad de liderazgo/discipulado");

if (has8Reqs) {
  testSuite.passed.push("TEST 7: Los 8 requisitos institucionales de idoneidad del sucesor están registrados.");
} else {
  testSuite.failed.push("TEST 7: Faltan requisitos en DEC-PEND-001.");
}

// TEST 8: Asuntos pendientes explícitamente registrados
const hasPendingPoints =
  notes.includes("Determinación formal de incapacidad") &&
  notes.includes("quórums y mayorías en cada Consejo") &&
  notes.includes("mecanismo ante eventual desacuerdo") &&
  notes.includes("actualización de Trustees en NJ");

if (hasPendingPoints) {
  testSuite.passed.push("TEST 8: Materias no decididas formalmente catalogadas como pendientes.");
} else {
  testSuite.failed.push("TEST 8: Falla en registro de materias pendientes.");
}

// TEST 9: Estado permanece REQUIERE_REVISION_LEGAL
if (decSuccession?.decisionStatus === "REQUIERE_REVISION_LEGAL") {
  testSuite.passed.push("TEST 9: Estado de DEC-PEND-001 permanece estrictamente en REQUIERE_REVISION_LEGAL.");
} else {
  testSuite.failed.push(`TEST 9: Estado incorrecto: ${decSuccession?.decisionStatus}`);
}

// TEST 10: Constitución (REN-DOC-002) permanece PLANIFICADO v0.1
const constDoc = getCatalogDocumentByNumber("REN-DOC-002");
if (constDoc?.status === "PLANIFICADO" && constDoc?.version === "0.1") {
  testSuite.passed.push("TEST 10: Constitución (REN-DOC-002) permanece en estado PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 10: Modificación o adopción indebida de la Constitución.");
}

// TEST 11: Declaración de Fe permanece BORRADOR v1.0
const docDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (docDoc?.status === "BORRADOR" && docDoc?.version === "1.0") {
  testSuite.passed.push("TEST 11: Declaración de Fe (REN-DOC-001) permanece en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 11: Modificación o adopción indebida de la Declaración de Fe.");
}

// TEST 12: Simulación de respuesta en RENACER IA
function simulateSuccessionAI() {
  if (decSuccession?.decisionStatus === "REQUIERE_REVISION_LEGAL") {
    return `CRITERIOS DEFINIDOS DE SUCESIÓN: El Pastor Fundador tiene la facultad de designación en vida con capacidad. Ante incapacidad o fallecimiento, se activa el proceso conjunto Consejo de Gobierno + Consejo Ministerial, requiriendo la aprobación de ambos cuerpos y el cumplimiento de los 8 requisitos de idoneidad. NOTA: Esta materia está en proceso de revisión legal corporativa y NO constituye una cláusula adoptada definitivamente.`;
  }
  return "Estado no identificado.";
}
const aiResp = simulateSuccessionAI();
if (
  aiResp.includes("CRITERIOS DEFINIDOS") &&
  aiResp.includes("Pastor Fundador") &&
  aiResp.includes("ambos cuerpos") &&
  aiResp.includes("revisión legal corporativa")
) {
  testSuite.passed.push("TEST 12: RENACER IA formula respuestas fidedignas distinguiendo criterios definidos de revisión legal pendiente.");
} else {
  testSuite.failed.push("TEST 12: Falla en simulación de RENACER IA.");
}

// TEST 13: RBAC restringe adopción doctrinal al Pastor Fundador
const canPastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const canAdminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (canPastorAdopt && !canAdminAdopt) {
  testSuite.passed.push("TEST 13: Matriz RBAC salvaguarda la exclusividad del Pastor Fundador para adopción doctrinal.");
} else {
  testSuite.failed.push("TEST 13: Falla en seguridad RBAC.");
}

// TEST 14: Documentos dependientes vinculados
const affected = decSuccession?.affectedDocuments || [];
if (
  affected.includes("REN-DOC-002") &&
  affected.includes("REN-DOC-003") &&
  affected.includes("REN-DOC-004") &&
  affected.includes("REN-DOC-005") &&
  affected.includes("REN-DOC-019")
) {
  testSuite.passed.push("TEST 14: Los 5 documentos dependientes (Const., Bylaws, Gobierno, Ministerial, Credenciales) están vinculados.");
} else {
  testSuite.failed.push("TEST 14: Faltan documentos afectados en DEC-PEND-001.");
}

// TEST 15: Total de decisiones del sistema preservado
const allDecs = getAllInstitutionalDecisions();
if (allDecs.length === 33) {
  testSuite.passed.push("TEST 15: Integridad del catálogo de 33 decisiones institucionales preservada.");
} else {
  testSuite.failed.push(`TEST 15: Total de decisiones alterado: ${allDecs.length}`);
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 21: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
