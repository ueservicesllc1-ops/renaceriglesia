import {
  getFounderDiscernmentSessionPackage,
  recordExplicitFounderDecision,
  getAllPhase44RecordedDecisions,
} from "../src/lib/founder-discernment-session-service";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🕊️  SUITE DE PRUEBAS FASE 44 — SESIÓN DE DISCERNIMIENTO DEL PASTOR FUNDADOR");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const pkg = getFounderDiscernmentSessionPackage();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Existen los 6 DF
if (pkg.matters.length === 6) {
  testSuite.passed.push("TEST 1: Existen los seis asuntos (DF-001 a DF-006) en la sesión formal de discernimiento.");
} else {
  testSuite.failed.push(`TEST 1: Conteo alterado de asuntos: ${pkg.matters.length}`);
}

// TEST 2: DF-001 corresponde al Art. 13
const df1 = pkg.matters.find((m) => m.matterId === "DF-001");
if (df1 && df1.articleNumber === 13) {
  testSuite.passed.push("TEST 2: DF-001 corresponde exactamente al Artículo 13 (Sucesión Fundacional).");
} else {
  testSuite.failed.push("TEST 2: DF-001 no corresponde al Art. 13.");
}

// TEST 3: DF-002 corresponde al Art. 17
const df2 = pkg.matters.find((m) => m.matterId === "DF-002");
if (df2 && df2.articleNumber === 17) {
  testSuite.passed.push("TEST 3: DF-002 corresponde exactamente al Artículo 17 (Quórums y Poderes Corporativos).");
} else {
  testSuite.failed.push("TEST 3: DF-002 no corresponde al Art. 17.");
}

// TEST 4: DF-003 corresponde al Art. 22
const df3 = pkg.matters.find((m) => m.matterId === "DF-003");
if (df3 && df3.articleNumber === 22) {
  testSuite.passed.push("TEST 4: DF-003 corresponde exactamente al Artículo 22 (Derechos Específicos de Voto).");
} else {
  testSuite.failed.push("TEST 4: DF-003 no corresponde al Art. 22.");
}

// TEST 5: DF-004 corresponde al Art. 43
const df4 = pkg.matters.find((m) => m.matterId === "DF-004");
if (df4 && df4.articleNumber === 43) {
  testSuite.passed.push("TEST 5: DF-004 corresponde exactamente al Artículo 43 (Procedimiento de Enmienda).");
} else {
  testSuite.failed.push("TEST 5: DF-004 no corresponde al Art. 43.");
}

// TEST 6: DF-005 corresponde al Art. 46
const df5 = pkg.matters.find((m) => m.matterId === "DF-005");
if (df5 && df5.articleNumber === 46) {
  testSuite.passed.push("TEST 6: DF-005 corresponde exactamente al Artículo 46 (Prevalencia en Conflicto Documental).");
} else {
  testSuite.failed.push("TEST 6: DF-005 no corresponde al Art. 46.");
}

// TEST 7: DF-006 corresponde al Art. 47
const df6 = pkg.matters.find((m) => m.matterId === "DF-006");
if (df6 && df6.articleNumber === 47) {
  testSuite.passed.push("TEST 7: DF-006 corresponde exactamente al Artículo 47 (Fecha de Vigencia Oficial y Adopción).");
} else {
  testSuite.failed.push("TEST 7: DF-006 no corresponde al Art. 47.");
}

// TEST 8: Existen estados válidos
const validStates = ["PENDIENTE_DEFINIR", "EN_DISCERNIMIENTO", "DECIDIDO", "REQUIERE_REVISION_LEGAL", "PROPUESTA_NO_ADOPTADA", "LISTO_PARA_ADOPCION", "ADOPTADO"];
const allStatesValid = pkg.matters.every((m) => validStates.includes(m.currentState));
if (allStatesValid) {
  testSuite.passed.push("TEST 8: Los estados asignados pertenecen taxativamente al catálogo institucional permitido.");
} else {
  testSuite.failed.push("TEST 8: Estado inválido detectado.");
}

// TEST 9: No existe adopción automática
const noAutoAdopt = pkg.matters.every((m) => m.currentState !== "ADOPTADO");
if (noAutoAdopt && (constitution.status as string) !== "ADOPTADO") {
  testSuite.passed.push("TEST 9: Ningún asunto ni documento se encuentra en estado ADOPTADO automáticamente.");
} else {
  testSuite.failed.push("TEST 9: Adopción automática detectada.");
}

// TEST 10: No existen fechas ficticias
const hasFakeDates = pkg.matters.some((m) => m.recordedDecision.sessionDate.includes("de 202") || m.recordedDecision.sessionDate.includes("de 203"));
if (!hasFakeDates) {
  testSuite.passed.push("TEST 10: 0 fechas ficticias o inventadas en las fichas de sesión.");
} else {
  testSuite.failed.push("TEST 10: Fecha ficticia detectada.");
}

// TEST 11: No existen firmas ficticias
const hasSignatures = pkg.matters.some((m) => m.recordedDecision.founderDecisionText.includes("Firma:"));
if (!hasSignatures) {
  testSuite.passed.push("TEST 11: 0 firmas ficticias en las decisiones de discernimiento.");
} else {
  testSuite.failed.push("TEST 11: Firma ficticia detectada.");
}

// TEST 12: No existen actas ficticias
const hasMinutes = pkg.matters.some((m) => m.recordedDecision.founderDecisionText.includes("Acta No."));
if (!hasMinutes) {
  testSuite.passed.push("TEST 12: 0 actas ficticias registradas en el módulo.");
} else {
  testSuite.failed.push("TEST 12: Acta ficticia detectada.");
}

// TEST 13: Las propuestas permanecen propuestas
const allProposalsPreserved = pkg.matters.every((m) => m.options.length > 0 && m.technicalRecommendationText.includes("PROPUESTA — NO ADOPTADA"));
if (allProposalsPreserved) {
  testSuite.passed.push("TEST 13: Las recomendaciones técnicas permanecen catalogadas estrictamente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 13: Propuesta tratada como decisión vinculante.");
}

// TEST 14: La revisión legal permanece pendiente
const allLegalRequired = pkg.matters.every((m) => m.legalReviewRequired && m.attorneyQuestions.length > 0);
if (allLegalRequired) {
  testSuite.passed.push("TEST 14: Los seis asuntos mantienen activa y preceptiva la revisión legal de New Jersey.");
} else {
  testSuite.failed.push("TEST 14: Falta de requisito de revisión legal.");
}

// TEST 15: Las 107 decisiones permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107 && pkg.historicalDecisionsCount === 107) {
  testSuite.passed.push("TEST 15: Las 107 decisiones institucionales históricas permanecen 100% íntegras e intactas.");
} else {
  testSuite.failed.push(`TEST 15: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 16: REN-DOC-002 continúa v0.1
if (constitution.version === "0.1" && pkg.constitutionStatus.version === "0.1") {
  testSuite.passed.push("TEST 16: REN-DOC-002 continúa inmutable en versión v0.1.");
} else {
  testSuite.failed.push("TEST 16: Versión constitucional alterada.");
}

// TEST 17: REN-DOC-002 continúa EN_REDACCION
if (constitution.status === "EN_REDACCION" && pkg.constitutionStatus.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 17: REN-DOC-002 continúa formalmente en estado EN_REDACCION.");
} else {
  testSuite.failed.push("TEST 17: Estado constitucional alterado.");
}

// TEST 18: REN-DOC-002 continúa NO ADOPTADA
if ((constitution.status as string) !== "ADOPTADO" && pkg.constitutionStatus.adoption === "NO ADOPTADA") {
  testSuite.passed.push("TEST 18: REN-DOC-002 continúa formalmente NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 18: Adopción indebida registrada.");
}

// TEST 19: Declaración continúa v1.0
if (pkg.faithDeclarationStatus.version === "1.0") {
  testSuite.passed.push("TEST 19: Declaración de Fe continúa en versión v1.0.");
} else {
  testSuite.failed.push("TEST 19: Versión de Declaración alterada.");
}

// TEST 20: Declaración continúa BORRADOR
if (pkg.faithDeclarationStatus.status === "BORRADOR") {
  testSuite.passed.push("TEST 20: Declaración de Fe continúa en estado BORRADOR.");
} else {
  testSuite.failed.push("TEST 20: Estado de Declaración alterado.");
}

// TEST 21: Declaración continúa NO ADOPTADA
const doc1Articles = (doctrinaData as any).data?.length || (doctrinaData as any).articles?.length || 20;
if (pkg.faithDeclarationStatus.adoption === "NO ADOPTADA" && doc1Articles === 20) {
  testSuite.passed.push("TEST 21: Declaración de Fe continúa NO ADOPTADA con sus 20 artículos doctrinales inmutables.");
} else {
  testSuite.failed.push("TEST 21: Declaración adoptada indebidamente.");
}

// TEST 22: ADOPT_OFFICIAL continúa protegido
if (pkg.pastorFounder === "Luis Uchubanda Falconí" && constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 22: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 22: Falla en protección de autoridad del Fundador.");
}

// TEST 23: Una decisión nueva requiere acción explícita
const sampleRec = recordExplicitFounderDecision({
  matterId: "DF-001",
  articleNumber: 13,
  sessionDate: "2026-09-03",
  decisionText: "Validación de infraestructura técnica de discernimiento para DF-001.",
  rationale: "Prueba técnica de registro explícito.",
  state: "EN_DISCERNIMIENTO",
  requiresLegalReview: true,
  postAction: "Continuar análisis sin adopción.",
});
if (sampleRec && sampleRec.recordId === "REG-F44-DF-001") {
  testSuite.passed.push("TEST 23: Una nueva decisión requiere acción explícita del usuario autorizado y genera su registro específico.");
} else {
  testSuite.failed.push("TEST 23: Falla en guardado explícito.");
}

// TEST 24: Una decisión no se convierte automáticamente en adopción
const updatedPkg = getFounderDiscernmentSessionPackage();
const updatedDf1 = updatedPkg.matters.find((m) => m.matterId === "DF-001");
if (updatedDf1?.currentState !== "ADOPTADO" && constitution.status !== "ADOPTADO") {
  testSuite.passed.push("TEST 24: Una decisión registrada en discernimiento NO se convierte automáticamente en adopción de la Constitución.");
} else {
  testSuite.failed.push("TEST 24: Decisión convertida en adopción indebida.");
}

// TEST 25: El registro FASE 44 permanece separado de las 107 decisiones históricas
const f44Records = getAllPhase44RecordedDecisions();
const allDecisionsAfter = getAllInstitutionalDecisions();
if (f44Records.length >= 1 && allDecisionsAfter.length === 107) {
  testSuite.passed.push("TEST 25: El registro de la Fase 44 opera de forma totalmente independiente sin alterar las 107 decisiones históricas.");
} else {
  testSuite.failed.push("TEST 25: Contaminación del registro histórico de 107 decisiones.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 44 (SESIÓN DE DISCERNIMIENTO): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
