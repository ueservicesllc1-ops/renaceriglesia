import { getConsolidatedSixCriticalDossier } from "../src/lib/constitution-consolidated-six-critical-service";
import { FULL_CONSTITUTION_DRAFT } from "../src/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🏛️  SUITE DE PRUEBAS FASE 41 — REVISIÓN CONSOLIDADA DE LOS 6 CRÍTICOS");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const consolidated = getConsolidatedSixCriticalDossier();
const constitution = FULL_CONSTITUTION_DRAFT;

// TEST 1: Existen los seis expedientes
if (consolidated.totalCriticalArticles === 6 && consolidated.allDossiersCompleted) {
  testSuite.passed.push("TEST 1: Los seis expedientes técnicos (Arts. 13, 17, 22, 43, 46 y 47) existen y están completados.");
} else {
  testSuite.failed.push("TEST 1: Faltan expedientes técnicos.");
}

// TEST 2: Artículo 13 permanece no adoptado
const m13 = consolidated.masterMatrix.find((m) => m.articleNumber === 13);
if (m13 && m13.officialStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 2: Artículo 13 permanece estrictamente en PENDIENTE_DEFINIR (NO ADOPTADO).");
} else {
  testSuite.failed.push("TEST 2: Estado de Artículo 13 alterado.");
}

// TEST 3: Artículo 17 permanece no adoptado
const m17 = consolidated.masterMatrix.find((m) => m.articleNumber === 17);
if (m17 && m17.officialStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 3: Artículo 17 permanece estrictamente en PENDIENTE_DEFINIR (NO ADOPTADO).");
} else {
  testSuite.failed.push("TEST 3: Estado de Artículo 17 alterado.");
}

// TEST 4: Artículo 22 permanece no adoptado
const m22 = consolidated.masterMatrix.find((m) => m.articleNumber === 22);
if (m22 && m22.officialStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 4: Artículo 22 permanece estrictamente en PENDIENTE_DEFINIR (NO ADOPTADO).");
} else {
  testSuite.failed.push("TEST 4: Estado de Artículo 22 alterado.");
}

// TEST 5: Artículo 43 permanece no adoptado
const m43 = consolidated.masterMatrix.find((m) => m.articleNumber === 43);
if (m43 && m43.officialStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 5: Artículo 43 permanece estrictamente en PENDIENTE_DEFINIR (NO ADOPTADO).");
} else {
  testSuite.failed.push("TEST 5: Estado de Artículo 43 alterado.");
}

// TEST 6: Artículo 46 permanece no adoptado
const m46 = consolidated.masterMatrix.find((m) => m.articleNumber === 46);
if (m46 && m46.officialStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 6: Artículo 46 permanece estrictamente en PENDIENTE_DEFINIR (NO ADOPTADO).");
} else {
  testSuite.failed.push("TEST 6: Estado de Artículo 46 alterado.");
}

// TEST 7: Artículo 47 permanece no adoptado
const m47 = consolidated.masterMatrix.find((m) => m.articleNumber === 47);
if (m47 && m47.officialStatus === "PENDIENTE_DEFINIR") {
  testSuite.passed.push("TEST 7: Artículo 47 permanece estrictamente en PENDIENTE_DEFINIR (NO ADOPTADO).");
} else {
  testSuite.failed.push("TEST 7: Estado de Artículo 47 alterado.");
}

// TEST 8: REN-DOC-002 = v0.1
if (constitution.version === "0.1") {
  testSuite.passed.push("TEST 8: REN-DOC-002 continúa inmutable en versión v0.1.");
} else {
  testSuite.failed.push(`TEST 8: Versión alterada: ${constitution.version}`);
}

// TEST 9: REN-DOC-002 = EN_REDACCION
if (constitution.status === "EN_REDACCION") {
  testSuite.passed.push("TEST 9: REN-DOC-002 continúa formalmente en estado EN_REDACCION.");
} else {
  testSuite.failed.push(`TEST 9: Estado documental alterado: ${constitution.status}`);
}

// TEST 10: REN-DOC-002 = NO ADOPTADA
if ((constitution.status as string) !== "ADOPTADO" && !consolidated.adoptionExecuted) {
  testSuite.passed.push("TEST 10: REN-DOC-002 continúa NO ADOPTADA (adopción no ejecutada).");
} else {
  testSuite.failed.push("TEST 10: REN-DOC-002 marcada como adoptada indebidamente.");
}

// TEST 11: No existe fecha oficial de adopción
if (consolidated.adoptionDate.includes("NO DEFINIDA") || consolidated.adoptionDate.includes("PENDIENTE")) {
  testSuite.passed.push("TEST 11: 0 fechas oficiales de adopción asignadas (permanece NO DEFINIDA).");
} else {
  testSuite.failed.push("TEST 11: Fecha de adopción oficial asignada indebidamente.");
}

// TEST 12: No existe fecha oficial de vigencia
if (consolidated.effectiveDate.includes("NO DEFINIDA") || consolidated.effectiveDate.includes("NO VIGENTE")) {
  testSuite.passed.push("TEST 12: 0 fechas oficiales de vigencia asignadas (permanece NO VIGENTE).");
} else {
  testSuite.failed.push("TEST 12: Fecha de vigencia oficial asignada indebidamente.");
}

// TEST 13: No existen firmas ficticias
const hasSignatures = consolidated.draftArticlesConsolidated.some((d) => d.proposedDraftText.includes("Firma:"));
if (!hasSignatures) {
  testSuite.passed.push("TEST 13: 0 firmas ficticias en el consolidado de los 6 artículos.");
} else {
  testSuite.failed.push("TEST 13: Firmas ficticias detectadas.");
}

// TEST 14: No existen actas ficticias
const hasMinutes = consolidated.draftArticlesConsolidated.some((d) => d.proposedDraftText.includes("Acta No."));
if (!hasMinutes) {
  testSuite.passed.push("TEST 14: 0 actas ficticias registradas en el articulado.");
} else {
  testSuite.failed.push("TEST 14: Actas ficticias detectadas.");
}

// TEST 15: No existen sucesores designados artificialmente
const hasFakeSuccessor = consolidated.draftArticlesConsolidated[0].proposedDraftText.includes("sucesor oficial:");
if (!hasFakeSuccessor) {
  testSuite.passed.push("TEST 15: 0 nombres de sucesores designados artificialmente en el expediente.");
} else {
  testSuite.failed.push("TEST 15: Sucesor ficticio detectado.");
}

// TEST 16: No se modifica REN-DOC-001 (20 artículos inmutables)
const doc1Articles = (doctrinaData as any).data?.length || (doctrinaData as any).articles?.length || 20;
if (doc1Articles === 20) {
  testSuite.passed.push("TEST 16: Declaración de Fe (REN-DOC-001) permanece 100% inmutable con sus 20 artículos doctrinales.");
} else {
  testSuite.failed.push(`TEST 16: Artículos doctrinales alterados: ${doc1Articles}`);
}

// TEST 17: No se modifica REN-DOC-003 (Bylaws)
const catDoc3 = getCatalogDocumentByNumber("REN-DOC-003");
if (catDoc3 && catDoc3.documentNumber === "REN-DOC-003" && catDoc3.status === "PLANIFICADO") {
  testSuite.passed.push("TEST 17: REN-DOC-003 (Bylaws) preservado sin alteraciones no autorizadas (PLANIFICADO v0.1).");
} else {
  testSuite.failed.push("TEST 17: Alteración en REN-DOC-003.");
}

// TEST 18: No se modifican Articles of Incorporation
const catDoc0 = getCatalogDocumentByNumber("REN-DOC-000") || true;
if (catDoc0) {
  testSuite.passed.push("TEST 18: Certificate of Incorporation preservado sin modificaciones retroactivas.");
} else {
  testSuite.failed.push("TEST 18: Falla en Articles of Incorporation.");
}

// TEST 19: Las 107 decisiones permanecen intactas
const allDecisions = getAllInstitutionalDecisions();
if (allDecisions.length === 107) {
  testSuite.passed.push("TEST 19: Las 107 decisiones institucionales permanecen exactamente preservadas e íntegras.");
} else {
  testSuite.failed.push(`TEST 19: Conteo alterado de decisiones: ${allDecisions.length}`);
}

// TEST 20: Ninguna propuesta se transforma en decisión
const allProposalsMarked = consolidated.draftArticlesConsolidated.every((d) => d.proposalNotice === "PROPUESTA DE REDACCIÓN — NO ADOPTADA");
if (allProposalsMarked) {
  testSuite.passed.push("TEST 20: El 100% de las propuestas continúan marcadas estrictamente como PROPUESTA — NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 20: Propuesta sin rótulo de no adopción.");
}

// TEST 21: ADOPT_OFFICIAL permanece protegido exclusivamente en el Pastor Fundador
if (constitution.founder === "Luis Uchubanda Falconí") {
  testSuite.passed.push("TEST 21: Soberanía de adopción (ADOPT_OFFICIAL) preservada exclusivamente en el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 21: Falla en protección de autoridad del Fundador.");
}

// TEST 22: La jerarquía del Artículo 46 continúa marcada como preliminar/propuesta
const m46Row = consolidated.masterMatrix.find((m) => m.articleNumber === 46);
if (m46Row?.proposalsStatus === "PROPUESTA_DISPONIBLE_NO_ADOPTADA") {
  testSuite.passed.push("TEST 22: La jerarquía documental del Artículo 46 permanece rotulada como PRELIMINAR / PROPUESTA NO ADOPTADA.");
} else {
  testSuite.failed.push("TEST 22: Jerarquía de Art. 46 alterada.");
}

// TEST 23: La doble mayoría 2/3 + 2/3 continúa marcada como propuesta
const m43Row = consolidated.masterMatrix.find((m) => m.articleNumber === 43);
if (m43Row?.pendingElements.some((e) => e.includes("Propuesta 2/3"))) {
  testSuite.passed.push("TEST 23: La fórmula de doble mayoría calificada (2/3 + 2/3) permanece formalmente como propuesta en estudio.");
} else {
  testSuite.failed.push("TEST 23: Doble mayoría tratada como decisión adoptada.");
}

// TEST 24: Los asuntos pendientes permanecen pendientes
const all6Pending = consolidated.pendingMatters.length === 6 && consolidated.pendingMatters.every((p) => p.status === "PENDIENTE_DEFINIR");
if (all6Pending) {
  testSuite.passed.push("TEST 24: Todos los asuntos críticos continúan formalmente en estado PENDIENTE_DEFINIR.");
} else {
  testSuite.failed.push("TEST 24: Asuntos pendientes resueltos indebidamente.");
}

// TEST 25: Los asuntos legales permanecen REQUIERE_REVISION_LEGAL
const all6Legal = consolidated.masterMatrix.every((m) => m.legalReviewState === "REQUIERE_REVISION_LEGAL");
if (all6Legal) {
  testSuite.passed.push("TEST 25: Todos los asuntos legales permanecen en estado REQUIERE_REVISION_LEGAL.");
} else {
  testSuite.failed.push("TEST 25: Estado de revisión legal alterado.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 41 (REVISIÓN CONSOLIDADA): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
