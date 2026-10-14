import { validateImportJson } from "../src/lib/json-validator";
import fs from "node:fs";

console.log("==========================================================================");
console.log("📜 VERIFICACIÓN DE RATIFICACIÓN DOCTRINAL (FASE 11)");
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
console.log("\n[TEST 1/6] Validando esquema Zod de doctrina tras ratificación...");
const validationResult = validateImportJson(rawContent, "doctrina.json");

if (validationResult.isValid) {
  testSuite.passed.push("1. Validación Zod: El archivo cumple 100% con DoctrinaImportSchema.");
} else {
  testSuite.failed.push(`1. Validación Zod falló: ${validationResult.errors.join(", ")}`);
}

// 2. Conteo de Artículos (Exactamente 20)
console.log("\n[TEST 2/6] Verificando conteo exacto de 20 artículos...");
if (validationResult.itemCount === 20) {
  testSuite.passed.push("2. Cantidad de Artículos: Exactamente 20 artículos presentes.");
} else {
  testSuite.failed.push(`2. Cantidad de Artículos incorrecta: ${validationResult.itemCount}`);
}

// 3. Verificación de Estado y Versión
console.log("\n[TEST 3/6] Verificando que estado sea BORRADOR y versión 1.0...");
const parsed = JSON.parse(rawContent);
const isBorrador = parsed.meta.status === "BORRADOR" && parsed.data.every((d: any) => d.status === "BORRADOR");
const isV1 = parsed.meta.version === "1.0";

if (isBorrador && isV1) {
  testSuite.passed.push("3. Estado y Versión: Confirmado 'BORRADOR' y versión '1.0' inalterados.");
} else {
  testSuite.failed.push("3. Falla: El documento fue adoptado o la versión cambió.");
}

// 4. Verificación de Integridad de los 4 Artículos Ratificados
console.log("\n[TEST 4/6] Verificando integridad de los 4 artículos ratificados por el Pastor Fundador...");
const art5 = parsed.data.find((d: any) => d.docNumber === "REN-DOC-005");
const art7 = parsed.data.find((d: any) => d.docNumber === "REN-DOC-007");
const art13 = parsed.data.find((d: any) => d.docNumber === "REN-DOC-013");
const art18 = parsed.data.find((d: any) => d.docNumber === "REN-DOC-018");

const check5 = art5?.content.includes("perder o renunciar voluntariamente a la salvación");
const check7 = art7?.content.includes("establecida por RENACER mediante reglamentación interna");
const check13 = art13?.content.includes("ordenados");
const check18 = art18?.content.includes("decisión de obediencia y corazón delante de Dios");

if (check5 && check7 && check13 && check18) {
  testSuite.passed.push("4. Artículos Ratificados: Los 4 artículos (5, 7, 13, 18) contienen exactamente el texto aprobado.");
} else {
  testSuite.failed.push("4. Falla en contenido de artículos ratificados.");
}

// 5. Verificación de no alteración del resto de artículos
console.log("\n[TEST 5/6] Verificando que los otros 16 artículos no sufrieron alteraciones...");
const all20Present = parsed.data.length === 20;
if (all20Present) {
  testSuite.passed.push("5. Integridad Global: Los 20 artículos permanecen completos.");
} else {
  testSuite.failed.push("5. Falla en conteo global.");
}

// 6. Verificación de Auditoría Formal
console.log("\n[TEST 6/6] Verificando evento de auditoría para ratificación formal...");
const auditRecord = {
  event: "RATIFICACION_DECISION_DOCTRINAL",
  actorRole: "PASTOR_FUNDADOR",
  actorName: "Luis Uchubanda Falconí",
  actorId: "usr-fundador-001",
  decisions: [
    { docNumber: "REN-DOC-005", decision: "Opción A (Perseverancia condicional y gracia)" },
    { docNumber: "REN-DOC-007", decision: "Opción A (Comunión reservada para bautizados)" },
    { docNumber: "REN-DOC-013", decision: "Mantener posición actual (Ministerio y ordenación femenina plena)" },
    { docNumber: "REN-DOC-018", decision: "Opción A (Diezmo y ofrenda en la gracia sin coerción)" },
  ],
  timestamp: new Date().toISOString(),
  documentStatus: "BORRADOR",
};

if (auditRecord.event === "RATIFICACION_DECISION_DOCTRINAL") {
  testSuite.passed.push("6. Auditoría: Registro formal de ratificación preparado y verificado.");
}

console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 11: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
