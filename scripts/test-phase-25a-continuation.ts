import { getAllInstitutionalDecisions, getDecisionByNumber } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";

console.log("==========================================================================");
console.log("🛡️  SUITE DE PRUEBAS DE CONSOLIDACIÓN FASE 25A (DECISIONES 177 A 250)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const allDecs = getAllInstitutionalDecisions();

// TEST 1: Total de decisiones registradas (107 = 33 base + 74 nuevas)
if (allDecs.length === 107) {
  testSuite.passed.push("TEST 1: El registro maestro contiene exactamente 107 decisiones (33 previas + 74 de 177 a 250).");
} else {
  testSuite.failed.push(`TEST 1: Cantidad de decisiones incorrecta: ${allDecs.length} (esperado 107).`);
}

// TEST 2: Todas las decisiones 177 a 250 están presentes
const ids177_250 = Array.from({ length: 74 }, (_, i) => `DEC-DEF-${177 + i}`);
const all177Present = ids177_250.every((id) => allDecs.some((d) => d.decisionNumber === id));
if (all177Present) {
  testSuite.passed.push("TEST 2: Todas las decisiones en el rango DEC-DEF-177 a DEC-DEF-250 están presentes.");
} else {
  testSuite.failed.push("TEST 2: Faltan decisiones en el rango 177 a 250.");
}

// TEST 3: No existen IDs ni números de decisión duplicados
const idSet = new Set(allDecs.map((d) => d.decisionId));
const numSet = new Set(allDecs.map((d) => d.decisionNumber));
if (idSet.size === 107 && numSet.size === 107) {
  testSuite.passed.push("TEST 3: Integridad total: 0 identificadores ni códigos duplicados en las 107 decisiones.");
} else {
  testSuite.failed.push(`TEST 3: Se detectaron duplicados: IDs=${idSet.size}, Números=${numSet.size}.`);
}

// TEST 4: Decisiones 177 a 250 tienen DecisionState DEFINIDA
const all177Defined = ids177_250.every((id) => {
  const d = getDecisionByNumber(id);
  return d?.decisionState === "DEFINIDA";
});
if (all177Defined) {
  testSuite.passed.push("TEST 4: El 100% de las decisiones 177 a 250 tienen DecisionState = DEFINIDA.");
} else {
  testSuite.failed.push("TEST 4: Hay decisiones de 177 a 250 sin estado DEFINIDA.");
}

// TEST 5: Decisiones con requerimiento legal identificadas
const legalDecs = allDecs.filter((d) => d.legalState === "REQUIERE_REVISION_LEGAL");
if (legalDecs.length >= 14) {
  testSuite.passed.push(`TEST 5: Las decisiones que requieren revisión legal (${legalDecs.length}) mantienen LegalState = REQUIERE_REVISION_LEGAL.`);
} else {
  testSuite.failed.push(`TEST 5: Conteo inesperado de decisiones con revisión legal: ${legalDecs.length}.`);
}

// TEST 6: Ninguna decisión pasa a documento ADOPTADO
const hasAdoptedDoc = allDecs.some((d) => d.documentState === "ADOPTADO");
if (!hasAdoptedDoc) {
  testSuite.passed.push("TEST 6: Ninguna decisión institucional se ha marcado indebidamente como ADOPTADO.");
} else {
  testSuite.failed.push("TEST 6: Se detectaron decisiones con DocumentState = ADOPTADO.");
}

// TEST 7: REN-DOC-001 permanece en BORRADOR v1.0
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc?.status === "BORRADOR" && catDoc.version === "1.0") {
  testSuite.passed.push("TEST 7: Doctrina (REN-DOC-001) permanece inmutable en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 7: Modificación indebida en Doctrina.");
}

// TEST 8: REN-DOC-002 permanece en PLANIFICADO v0.1
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
if (catConst?.status === "PLANIFICADO" && catConst.version === "0.1") {
  testSuite.passed.push("TEST 8: Constitución (REN-DOC-002) permanece inmutable en PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 8: Modificación indebida en Constitución.");
}

// TEST 9: Revisiones semanales de riesgos (DEC-DEF-177 y 178)
const d177 = getDecisionByNumber("DEC-DEF-177");
const d178 = getDecisionByNumber("DEC-DEF-178");
if (d177?.decision?.includes("frecuencia semanal") && d178?.decision?.includes("log de auditoría")) {
  testSuite.passed.push("TEST 9: Revisiones semanales y registro formal en log de auditoría registrados (DEC 177, 178).");
} else {
  testSuite.failed.push("TEST 9: Falla en DEC 177 o 178.");
}

// TEST 10: Falta de avance, plazos y escalamiento (DEC-DEF-179, 180, 181)
const d179 = getDecisionByNumber("DEC-DEF-179");
const d180 = getDecisionByNumber("DEC-DEF-180");
const d181 = getDecisionByNumber("DEC-DEF-181");
if (d179?.decision?.includes("alerta amarilla") && d180?.decision?.includes("14 días") && d181?.decision?.includes("escala formalmente")) {
  testSuite.passed.push("TEST 10: Alerta por falta de avance, umbral de 14 días y escalamiento registrados (DEC 179-181).");
} else {
  testSuite.failed.push("TEST 10: Falla en DEC 179-181.");
}

// TEST 11: Revisión institucional extraordinaria y acta formal (DEC-DEF-182, 183)
const d182 = getDecisionByNumber("DEC-DEF-182");
const d183 = getDecisionByNumber("DEC-DEF-183");
if (d182 && d183?.decision?.includes("Acta o Resolución")) {
  testSuite.passed.push("TEST 11: Convocatoria extraordinaria y formalización en Acta/Resolución registradas (DEC 182, 183).");
} else {
  testSuite.failed.push("TEST 11: Falla en DEC 182, 183.");
}

// TEST 12: Modificación de planes y reevaluación obligatoria (DEC-DEF-184, 185)
const d184 = getDecisionByNumber("DEC-DEF-184");
const d185 = getDecisionByNumber("DEC-DEF-185");
if (d184 && d185?.decision?.includes("reevaluación técnica inmediata")) {
  testSuite.passed.push("TEST 12: Modificación justificada y reevaluación técnica obligatoria registradas (DEC 184, 185).");
} else {
  testSuite.failed.push("TEST 12: Falla en DEC 184, 185.");
}

// TEST 13: Versionado de criterios y prohibición de sobrescritura (DEC-DEF-186, 187, 188)
const d186 = getDecisionByNumber("DEC-DEF-186");
const d188 = getDecisionByNumber("DEC-DEF-188");
if (d186?.decision?.includes("incrementará la versión") && d188?.decision?.includes("prohibida la sobrescritura")) {
  testSuite.passed.push("TEST 13: Versionado de criterios y estricta prohibición de sobrescritura registrados (DEC 186-188).");
} else {
  testSuite.failed.push("TEST 13: Falla en DEC 186-188.");
}

// TEST 14: Riesgos residuales y umbrales de riesgo CRÍTICO (DEC-DEF-189, 190, 191)
const d189 = getDecisionByNumber("DEC-DEF-189");
const d191 = getDecisionByNumber("DEC-DEF-191");
if (d189 && d191?.decision?.includes("comprometa la continuidad institucional")) {
  testSuite.passed.push("TEST 14: Gestión de riesgo residual y definición taxativa de riesgo CRÍTICO registradas (DEC 189-191).");
} else {
  testSuite.failed.push("TEST 14: Falla en DEC 189-191.");
}

// TEST 15: Protocolo de riesgo crítico, respuesta en 24h y auditoría alta (DEC-DEF-192, 194, 195)
const d192 = getDecisionByNumber("DEC-DEF-192");
const d194 = getDecisionByNumber("DEC-DEF-194");
const d195 = getDecisionByNumber("DEC-DEF-195");
if (d192 && d194?.decision?.includes("24 horas") && d195?.decision?.includes("severidad ALTA")) {
  testSuite.passed.push("TEST 15: Activación de protocolo crítico, contención en 24h y auditoría de severidad ALTA registradas (DEC 192-195).");
} else {
  testSuite.failed.push("TEST 15: Falla en DEC 192-195.");
}

// TEST 16: Desactivación, análisis post-incidente y evidencia objetiva para cierre (DEC-DEF-196, 198, 199, 200)
const d196 = getDecisionByNumber("DEC-DEF-196");
const d199 = getDecisionByNumber("DEC-DEF-199");
const d200 = getDecisionByNumber("DEC-DEF-200");
if (d196 && d199?.decision?.includes("evidencia documental verificable") && d200?.decision?.includes("prohibido el cierre")) {
  testSuite.passed.push("TEST 16: Criterios de desactivación, análisis post-incidente y exigencia de evidencia objetiva de cierre registrados (DEC 196-200).");
} else {
  testSuite.failed.push("TEST 16: Falla en DEC 196-200.");
}

// TEST 17: Causales de reapertura justificada y custodia inmutable (DEC-DEF-202, 203, 204)
const d202 = getDecisionByNumber("DEC-DEF-202");
const d204 = getDecisionByNumber("DEC-DEF-204");
if (d202?.decision?.includes("Nuevos hechos o evidencias") && d204?.decision?.includes("ARCHIVADO bajo custodia criptográfica")) {
  testSuite.passed.push("TEST 17: Causales de reapertura motivada y custodia criptográfica inmutable registradas (DEC 202-204).");
} else {
  testSuite.failed.push("TEST 17: Falla en DEC 202-204.");
}

// TEST 18: Separación funcional de roles (Ejecución vs Seguimiento vs Autoridad) (DEC-DEF-206, 207, 208, 209)
const d206 = getDecisionByNumber("DEC-DEF-206");
const d209 = getDecisionByNumber("DEC-DEF-209");
if (d206?.decision?.includes("incompatibilidad funcional estricta") && d209?.decision?.includes("Consejo de Gobierno") && d209?.decision?.includes("Consejo Ministerial")) {
  testSuite.passed.push("TEST 18: Separación funcional estricta entre ejecutor, auditor y autoridad competente registrada (DEC 206-209).");
} else {
  testSuite.failed.push("TEST 18: Falla en DEC 206-209.");
}

// TEST 19: Posición del Pastor Fundador sin sobrecarga operativa rutinaria (DEC-DEF-211, 212, 213)
const d211 = getDecisionByNumber("DEC-DEF-211");
const d212 = getDecisionByNumber("DEC-DEF-212");
const d213 = getDecisionByNumber("DEC-DEF-213");
if (d211?.decision?.includes("no asume responsabilidad operativa directa") && d213?.decision?.includes("calificado como CRÍTICO")) {
  testSuite.passed.push("TEST 19: Liderazgo espiritual fundacional preservado sin sobrecarga operativa rutinaria (DEC 211-213).");
} else {
  testSuite.failed.push("TEST 19: Falla en DEC 211-213.");
}

// TEST 20: Mínimo privilegio, 4 niveles de confidencialidad y hash SHA-256 (DEC-DEF-216, 217, 218, 220, 221)
const d216 = getDecisionByNumber("DEC-DEF-216");
const d217 = getDecisionByNumber("DEC-DEF-217");
const d220 = getDecisionByNumber("DEC-DEF-220");
const d221 = getDecisionByNumber("DEC-DEF-221");
if (d216 && d217?.decision?.includes("4 niveles") && d220?.decision?.includes("SHA-256") && d221?.decision?.includes("Append-only")) {
  testSuite.passed.push("TEST 20: Mínimo privilegio, 4 niveles de confidencialidad, trazabilidad SHA-256 y base append-only registrados (DEC 216-221).");
} else {
  testSuite.failed.push("TEST 20: Falla en DEC 216-221.");
}

// TEST 21: Articulación con DEC-PEND-001 y blindaje doctrinal inmutable (DEC-DEF-226, 227, 230)
const d226 = getDecisionByNumber("DEC-DEF-226");
const d230 = getDecisionByNumber("DEC-DEF-230");
if (d226 && d230?.decision?.includes("inmutables y congeladas")) {
  testSuite.passed.push("TEST 21: Articulación de continuidad con DEC-PEND-001 y blindaje doctrinal inmutable registrados (DEC 226-230).");
} else {
  testSuite.failed.push("TEST 21: Falla en DEC 226-230.");
}

// TEST 22: Supervisión legal bajo NJ, cumplimiento 501(c)(3) y seguros (DEC-DEF-236, 238, 243)
const d236 = getDecisionByNumber("DEC-DEF-236");
const d238 = getDecisionByNumber("DEC-DEF-238");
const d243 = getDecisionByNumber("DEC-DEF-243");
if (d236 && d238?.decision?.includes("501(c)(3)") && d243?.decision?.includes("responsabilidad civil general")) {
  testSuite.passed.push("TEST 22: Supervisión legal corporativa de NJ, salvaguarda 501(c)(3) y pólizas D&O registradas (DEC 236-243).");
} else {
  testSuite.failed.push("TEST 22: Falla en DEC 236-243.");
}

// TEST 23: Consolidación final de decisiones 177 a 250 (DEC-DEF-250)
const d250 = getDecisionByNumber("DEC-DEF-250");
if (d250?.decisionState === "DEFINIDA" && d250.decision?.includes("formalmente DEFINIDAS")) {
  testSuite.passed.push("TEST 23: Consolidación formal de las decisiones 177 a 250 en RENACER MAESTRO completada (DEC 250).");
} else {
  testSuite.failed.push("TEST 23: Falla en DEC 250.");
}

// TEST 24: Esquema Zod 100% válido en las 107 decisiones
const allZodValid = allDecs.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
if (allZodValid) {
  testSuite.passed.push("TEST 24: El 100% de las 107 decisiones cumple estrictamente con el esquema Zod.");
} else {
  testSuite.failed.push("TEST 24: Falla en validación Zod de decisiones.");
}

// TEST 25: Exclusividad RBAC del Pastor Fundador y separación de poderes
const canPastorAdopt = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const canAdminAdopt = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (canPastorAdopt && !canAdminAdopt) {
  testSuite.passed.push("TEST 25: Matriz RBAC protege la soberanía doctrinal con exclusividad del Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 25: Falla en seguridad RBAC.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 25A (CONTINUACIÓN): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
