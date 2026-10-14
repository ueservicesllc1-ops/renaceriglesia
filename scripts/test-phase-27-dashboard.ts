import { getAllInstitutionalDecisions, getDecisionByNumber, getDecisionById } from "../src/lib/decision-service";
import { InstitutionalDecisionSchema } from "../src/schemas/institutional-decision.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import { hasPermission } from "../src/lib/permissions";
import { generateStaticParams } from "../src/app/decisiones/[id]/page";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🏛️  SUITE DE PRUEBAS DEL DASHBOARD Y RUTAS PRINCIPALES (FASE 27)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const allDecs = getAllInstitutionalDecisions();

// TEST 1: 107 decisiones reales en el sistema
if (allDecs.length === 107) {
  testSuite.passed.push("TEST 1: El registro maestro contiene exactamente 107 decisiones reales.");
} else {
  testSuite.failed.push(`TEST 1: Total de decisiones incorrecto: ${allDecs.length} (esperado 107).`);
}

// TEST 2: Static params para /decisiones/[id] cubren todas las decisiones
const staticParams = generateStaticParams();
if (staticParams.length >= 214) {
  testSuite.passed.push(`TEST 2: generateStaticParams() genera ${staticParams.length} rutas estáticas para /decisiones/[id].`);
} else {
  testSuite.failed.push(`TEST 2: Rutas estáticas insuficientes: ${staticParams.length}`);
}

// TEST 3: Resolución de decisiones clave en /decisiones/[id]
const d1 = getDecisionByNumber("DEC-DEF-001");
const dPend1 = getDecisionByNumber("DEC-PEND-001");
const d177 = getDecisionByNumber("DEC-DEF-177");
const d250 = getDecisionByNumber("DEC-DEF-250");
if (d1 && dPend1 && d177 && d250) {
  testSuite.passed.push("TEST 3: Resolución individual exitosa para DEC-001, DEC-PEND-001, DEC-177 y DEC-250.");
} else {
  testSuite.failed.push("TEST 3: Falla en resolución de decisiones clave.");
}

// TEST 4: Estado inmutable de Doctrina (REN-DOC-001)
const catDoc = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc?.status === "BORRADOR" && catDoc.version === "1.0" && doctrinaData.meta.status === "BORRADOR") {
  testSuite.passed.push("TEST 4: Declaración de Fe (REN-DOC-001) permanece en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 4: Doctrina marcada indebidamente.");
}

// TEST 5: Estado inmutable de Constitución (REN-DOC-002)
const catConst = getCatalogDocumentByNumber("REN-DOC-002");
if (catConst?.status === "PLANIFICADO" && catConst.version === "0.1") {
  testSuite.passed.push("TEST 5: Constitución (REN-DOC-002) permanece en PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 5: Constitución marcada indebidamente.");
}

// TEST 6: Ningún documento oficial adoptado
const hasAdopted = allDecs.some((d) => d.documentState === "ADOPTADO");
if (!hasAdopted) {
  testSuite.passed.push("TEST 6: Ninguna decisión se encuentra marcada como documento ADOPTADO.");
} else {
  testSuite.failed.push("TEST 6: Hay decisiones con DocumentState = ADOPTADO.");
}

// TEST 7: 20 Artículos de Fe en import-queue/doctrina.json
if (doctrinaData.data.length === 20 && doctrinaData.data[19].title.includes("AUTORIDAD DE LA DOCTRINA")) {
  testSuite.passed.push("TEST 7: Los 20 Artículos de Fe están íntegros y listos para consulta.");
} else {
  testSuite.failed.push("TEST 7: Falla en artículos doctrinales.");
}

// TEST 8: 20 Documentos en el Catálogo Maestro
if (INITIAL_MASTER_CATALOG.length === 20) {
  testSuite.passed.push("TEST 8: Catálogo Documental cuenta con 20 documentos institucionales en 10 niveles.");
} else {
  testSuite.failed.push("TEST 8: Falla en catálogo documental.");
}

// TEST 9: Permiso ADOPT_OFFICIAL exclusivo del Pastor Fundador
const canPastor = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
const canAdmin = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (canPastor && !canAdmin) {
  testSuite.passed.push("TEST 9: Soberanía de adopción preservada con exclusividad para el Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 9: Falla en matriz RBAC.");
}

// TEST 10: Validación Zod 100% en las 107 decisiones
const allZod = allDecs.every((d) => InstitutionalDecisionSchema.safeParse(d).success);
if (allZod) {
  testSuite.passed.push("TEST 10: El 100% de las 107 decisiones cumple con el esquema Zod.");
} else {
  testSuite.failed.push("TEST 10: Falló validación de esquema Zod.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 27 (DASHBOARD & RUTAS): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
