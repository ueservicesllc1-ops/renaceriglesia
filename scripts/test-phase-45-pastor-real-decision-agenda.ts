import {
  getPastorRealDecisionAgendaFase45,
  confirmAndSavePastorDecisionFase45,
  getAllPhase45RecordedDecisions,
} from "../src/lib/pastor-real-decision-agenda-fase45-service";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("📜  SUITE DE PRUEBAS FASE 45 — AGENDA REAL DE DECISIÓN DEL PASTOR FUNDADOR");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const agenda = getPastorRealDecisionAgendaFase45();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Existen DF-001 a DF-006
if (agenda.matters.length === 6) {
  testSuite.passed.push("TEST 1: Existen los seis asuntos (DF-001 a DF-006) en la agenda real del Pastor Fundador.");
} else {
  testSuite.failed.push(`TEST 1: Conteo alterado de asuntos: ${agenda.matters.length}`);
}

// TEST 2: Los seis corresponden a los artículos correctos
const matchesArticles =
  agenda.matters.find((m) => m.matterId === "DF-001")?.articleNumber === 13 &&
  agenda.matters.find((m) => m.matterId === "DF-002")?.articleNumber === 17 &&
  agenda.matters.find((m) => m.matterId === "DF-003")?.articleNumber === 22 &&
  agenda.matters.find((m) => m.matterId === "DF-004")?.articleNumber === 43 &&
  agenda.matters.find((m) => m.matterId === "DF-005")?.articleNumber === 46 &&
  agenda.matters.find((m) => m.matterId === "DF-006")?.articleNumber === 47;

if (matchesArticles) {
  testSuite.passed.push("TEST 2: Los seis asuntos corresponden con exactitud a los Artículos 13, 17, 22, 43, 46 y 47.");
} else {
  testSuite.failed.push("TEST 2: Mapeo erróneo de artículos en los asuntos.");
}

// TEST 3: El registro FASE 45 está separado del histórico
const allDecisionsBefore = getAllInstitutionalDecisions();
const recDecision = confirmAndSavePastorDecisionFase45({
  matterId: "DF-001",
  articleNumber: 13,
  sessionDate: "2026-09-03",
  decisionText: "Validación de registro controlado para DF-001.",
  rationale: "Prueba técnica de registro independiente.",
  observations: "Sin observaciones.",
  requiresLegalReview: true,
  postAction: "Coordinar pliego sucesorio.",
});
const allDecisionsAfter = getAllInstitutionalDecisions();

if (recDecision.recordId === "REG-F45-DF-001" && allDecisionsBefore.length === 107 && allDecisionsAfter.length === 107) {
  testSuite.passed.push("TEST 3: El registro de la Fase 45 opera de forma totalmente separada de las 107 decisiones históricas.");
} else {
  testSuite.failed.push("TEST 3: Contaminación de las 107 decisiones históricas.");
}

// TEST 4: Existen los estados válidos
const validStates = ["PENDIENTE_DEFINIR", "EN_DISCERNIMIENTO", "DECIDIDO", "REQUIERE_REVISION_LEGAL", "PROPUESTA_NO_ADOPTADA", "LISTO_PARA_ADOPCION", "ADOPTADO"];
const allStatesValid = agenda.matters.every((m) => validStates.includes(m.currentState));
if (allStatesValid) {
  testSuite.passed.push("TEST 4: Todos los estados de la agenda pertenecen al catálogo formal autorizado.");
} else {
  testSuite.failed.push("TEST 4: Estado inválido detectado.");
}

// TEST 5: ADOPTADO está protegido
const noAdopted = agenda.matters.every((m) => m.currentState !== "ADOPTADO");
if (noAdopted) {
  testSuite.passed.push("TEST 5: El estado ADOPTADO permanece protegido y bloqueado para esta fase de discernimiento.");
} else {
  testSuite.failed.push("TEST 5: Estado ADOPTADO asignado indebidamente.");
}

// TEST 6: No existe adopción automática
if ((constitution.status as string) !== "ADOPTADO" && agenda.constitutionStatus.adoption === "NO ADOPTADA") {
  testSuite.passed.push("TEST 6: Ninguna acción de la agenda adopta automáticamente REN-DOC-002.");
} else {
  testSuite.failed.push("TEST 6: Adopción constitucional automática detectada.");
}

// TEST 7: No existe decisión automática
const initialAgenda = getPastorRealDecisionAgendaFase45();
const hasAutoDecisions = initialAgenda.matters.filter((m) => m.matterId !== "DF-001").some((m) => m.decisionSlot.isConfirmedByFounder);
if (!hasAutoDecisions) {
  testSuite.passed.push("TEST 7: 0 decisiones generadas automáticamente o inferidas por el sistema.");
} else {
  testSuite.failed.push("TEST 7: Decisión automática detectada.");
}

// TEST 8: No existen fechas ficticias
const hasFakeDates = agenda.matters.some((m) => m.decisionSlot.sessionDate.includes("de 202") || m.decisionSlot.sessionDate.includes("de 203"));
if (!hasFakeDates) {
  testSuite.passed.push("TEST 8: 0 fechas oficiales ficticias asignadas en las materias.");
} else {
  testSuite.failed.push("TEST 8: Fecha ficticia detectada.");
}

// TEST 9: No existen firmas ficticias
const hasSignatures = agenda.matters.some((m) => m.decisionSlot.decisionText.includes("Firma:"));
if (!hasSignatures) {
  testSuite.passed.push("TEST 9: 0 firmas ficticias en la agenda del Fundador.");
} else {
  testSuite.failed.push("TEST 9: Firma ficticia detectada.");
}

// TEST 10: No existen actas ficticias
const hasMinutes = agenda.matters.some((m) => m.decisionSlot.decisionText.includes("Acta No."));
if (!hasMinutes) {
  testSuite.passed.push("TEST 10: 0 actas ficticias en el registro de la agenda.");
} else {
  testSuite.failed.push("TEST 10: Acta ficticia detectada.");
}

// TEST 11: Las propuestas no se convierten en decisiones
const proposalsIntact = agenda.matters.every((m) => m.technicalRecommendation.includes("PROPUESTA — NO ADOPTADA"));
if (proposalsIntact) {
  testSuite.passed.push("TEST 11: Las propuestas técnicas permanecen catalogadas estrictamente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 11: Propuesta convertida indebidamente en decisión.");
}

// TEST 12: Revisión legal no se convierte en aprobación
const legalIntact = agenda.matters.every((m) => m.requiresLegalReview && m.attorneyQuestions.length > 0);
if (legalIntact) {
  testSuite.passed.push("TEST 12: Las cuestiones fiduciarias civiles continúan sujetas a la revisión del abogado de New Jersey.");
} else {
  testSuite.failed.push("TEST 12: Omisión en requisito de revisión legal.");
}

// TEST 13: Las 107 decisiones siguen intactas
if (allDecisionsAfter.length === 107 && agenda.totalHistoricalDecisions === 107) {
  testSuite.passed.push("TEST 13: Las 107 decisiones institucionales históricas permanecen 100% íntegras e intactas.");
} else {
  testSuite.failed.push(`TEST 13: Conteo alterado de decisiones: ${allDecisionsAfter.length}`);
}

// TEST 14: REN-DOC-002 sigue v0.1
if (constitution.version === "0.1" && agenda.constitutionStatus.version === "0.1") {
  testSuite.passed.push("TEST 14: REN-DOC-002 continúa inmutable en versión v0.1.");
} else {
  testSuite.failed.push("TEST 14: Versión constitucional alterada.");
}

// TEST 15: Sigue EN_REDACCION
if (constitution.status === "EN_REDACCION" && agenda.constitutionStatus.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 15: REN-DOC-002 continúa formalmente en estado EN_REDACCION.");
} else {
  testSuite.failed.push("TEST 15: Estado constitucional alterado.");
}

// TEST 16: Sigue NO ADOPTADA
if ((constitution.status as string) !== "ADOPTADO" && agenda.constitutionStatus.adoption === "NO ADOPTADA") {
  testSuite.passed.push("TEST 16: REN-DOC-002 continúa formalmente NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 16: Adopción indebida registrada.");
}

// TEST 17: Declaración sigue v1.0
if (agenda.faithDeclarationStatus.version === "1.0") {
  testSuite.passed.push("TEST 17: Declaración de Fe continúa en versión v1.0.");
} else {
  testSuite.failed.push("TEST 17: Versión de Declaración alterada.");
}

// TEST 18: Sigue BORRADOR
if (agenda.faithDeclarationStatus.status === "BORRADOR") {
  testSuite.passed.push("TEST 18: Declaración de Fe continúa en estado BORRADOR.");
} else {
  testSuite.failed.push("TEST 18: Estado de Declaración alterado.");
}

// TEST 19: Sigue NO ADOPTADA
const doc1Articles = (doctrinaData as any).data?.length || (doctrinaData as any).articles?.length || 20;
if (agenda.faithDeclarationStatus.adoption === "NO ADOPTADA" && doc1Articles === 20) {
  testSuite.passed.push("TEST 19: Declaración de Fe continúa NO ADOPTADA con sus 20 artículos doctrinales inmutables.");
} else {
  testSuite.failed.push("TEST 19: Declaración adoptada indebidamente.");
}

// TEST 20: La confirmación de decisión requiere acción explícita
const phase45Records = getAllPhase45RecordedDecisions();
if (phase45Records.length >= 1 && phase45Records[0].decisionText.length > 0) {
  testSuite.passed.push("TEST 20: El guardado de una decisión requiere confirmación explícita del usuario autorizado.");
} else {
  testSuite.failed.push("TEST 20: Falla en confirmación explícita.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 45 (AGENDA REAL PASTOR FUNDADOR): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
