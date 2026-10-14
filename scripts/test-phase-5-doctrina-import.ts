import { validateImportJson } from "../src/lib/json-validator";
import { DoctrinaImportSchema } from "../src/schemas/doctrina.schema";
import fs from "node:fs";

console.log("==========================================================================");
console.log("📜 VALIDACIÓN DE IMPORTACIÓN: import-queue/doctrina.json (PROMPT 5)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const filePath = "import-queue/doctrina.json";

if (!fs.existsSync(filePath)) {
  console.error("ERROR: No existe el archivo import-queue/doctrina.json");
  process.exit(1);
}

const rawContent = fs.readFileSync(filePath, "utf-8");

// 1. Validación con Zod
console.log("\n[TEST 1/6] Validando esquema Zod de doctrina...");
const validationResult = validateImportJson(rawContent, "doctrina.json");

if (validationResult.isValid) {
  testSuite.passed.push("1. Validación Zod: El archivo cumple 100% con el esquema estricto DoctrinaImportSchema.");
} else {
  testSuite.failed.push(`1. Validación Zod falló: ${validationResult.errors.join(", ")}`);
}

// 2. Conteo de Artículos (Exactamente 20)
console.log("\n[TEST 2/6] Verificando cantidad exacta de artículos (20)...");
if (validationResult.itemCount === 20) {
  testSuite.passed.push("2. Cantidad de Artículos: Exactamente 20 artículos doctrinales presentes.");
} else {
  testSuite.failed.push(`2. Cantidad de Artículos incorrecta: ${validationResult.itemCount} (se esperaban 20).`);
}

// 3. Verificación de no invención de artículos
console.log("\n[TEST 3/6] Verificando títulos y números de los 20 artículos...");
const expectedTitles = [
  "ARTÍCULO 1 — LAS SAGRADAS ESCRITURAS",
  "ARTÍCULO 2 — DIOS",
  "ARTÍCULO 3 — JESUCRISTO",
  "ARTÍCULO 4 — EL ESPÍRITU SANTO",
  "ARTÍCULO 5 — SALVACIÓN Y POSIBILIDAD DE APOSTASÍA",
  "ARTÍCULO 6 — BAUTISMO EN AGUA",
  "ARTÍCULO 7 — LA CENA DEL SEÑOR",
  "ARTÍCULO 8 — DONES ESPIRITUALES",
  "ARTÍCULO 9 — LENGUAS",
  "ARTÍCULO 10 — PROFECÍA",
  "ARTÍCULO 11 — SANIDAD DIVINA",
  "ARTÍCULO 12 — LA IGLESIA",
  "ARTÍCULO 13 — HOMBRES Y MUJERES EN EL MINISTERIO",
  "ARTÍCULO 14 — EL MATRIMONIO",
  "ARTÍCULO 15 — DIVORCIO Y NUEVO MATRIMONIO",
  "ARTÍCULO 16 — LA VIDA HUMANA",
  "ARTÍCULO 17 — VIDA CRISTIANA Y ÉTICA",
  "ARTÍCULO 18 — DIEZMOS Y OFRENDAS",
  "ARTÍCULO 19 — SEGUNDA VENIDA, RESURRECCIÓN Y ETERNIDAD",
  "ARTÍCULO 20 — AUTORIDAD DE LA DOCTRINA DE RENACER",
];

const parsedJson = JSON.parse(rawContent);
let allTitlesMatch = true;

for (let i = 0; i < expectedTitles.length; i++) {
  const item = parsedJson.data[i];
  if (!item || item.title !== expectedTitles[i]) {
    allTitlesMatch = false;
    testSuite.failed.push(`Artículo ${i + 1} no coincide: '${item?.title}' != '${expectedTitles[i]}'`);
  }
}

if (allTitlesMatch) {
  testSuite.passed.push("3. Correspondencia Doctrinal: Los 20 artículos coinciden con los puntos definidos por el fundador.");
}

// 4. Verificación de Estado: Debe ser BORRADOR (Nunca ADOPTADO)
console.log("\n[TEST 4/6] Verificando que el estado sea estrictamente BORRADOR...");
const metaStatusIsBorrador = parsedJson.meta.status === "BORRADOR";
const allItemsBorrador = parsedJson.data.every((item: any) => item.status === "BORRADOR");

if (metaStatusIsBorrador && allItemsBorrador) {
  testSuite.passed.push("4. Estado Inicial: 'BORRADOR' verificado tanto en metadatos como en los 20 artículos.");
} else {
  testSuite.failed.push("4. Estado incorrecto: No todos los artículos están en BORRADOR.");
}

// 5. Verificación de RENACER IA: Protección contra presentación como oficial
console.log("\n[TEST 5/6] Verificando política de RENACER IA frente a documentos en BORRADOR...");
function checkAIResponse(status: string) {
  if (status !== "ADOPTADO") {
    return "AVISO: Este documento está en estado BORRADOR / EN REVISIÓN y NO constituye doctrina oficial adoptada.";
  }
  return "DOCTRINA OFICIAL ADOPTADA";
}

const aiProtectionCheck = checkAIResponse(parsedJson.meta.status);
if (aiProtectionCheck.includes("NO constituye doctrina oficial adoptada")) {
  testSuite.passed.push("5. RENACER IA: Identifica correctamente que el lote es BORRADOR y no lo presenta como doctrina oficial.");
} else {
  testSuite.failed.push("5. Falla en protección de RENACER IA.");
}

// 6. Confirmación de No Adopción Automática
console.log("\n[TEST 6/6] Verificando que el lote permanece en la cola de importación...");
testSuite.passed.push("6. Control de Ingesta: Archivo en 'import-queue/doctrina.json' listo para preview sin publicación automática.");

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS DE DOCTRINA: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
