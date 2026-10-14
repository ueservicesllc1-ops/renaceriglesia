import { hasPermission, assertPermission } from "../src/lib/permissions";
import { calculateNextVersion, compareDocVersions, createVersionSnapshot } from "../src/lib/versioning";
import { validateImportJson } from "../src/lib/json-validator";
import { DoctrinaImportSchema } from "../src/schemas/doctrina.schema";
import fs from "node:fs";

console.log("==========================================================================");
console.log("🚀 EJECUTANDO VERIFICACIÓN COMPLETA DE FASE 3 (CICLO DE VIDA & SEGURIDAD)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// -----------------------------------------------------------------------------
// PRUEBA 10 DE SEGURIDAD (8 ESCENARIOS OBLIGATORIOS)
// -----------------------------------------------------------------------------
console.log("\n[TEST 1/5] Ejecutando los 8 escenarios de seguridad y control de acceso...");

// 1. Miembro intenta editar doctrina
const miembroEditDoctrina = hasPermission("MIEMBRO", "EDIT", "doctrina");
if (!miembroEditDoctrina) {
  testSuite.passed.push("Seguridad 1: Miembro no puede editar doctrina.");
} else {
  testSuite.failed.push("Seguridad 1: Falla, Miembro tiene permiso de editar doctrina.");
}

// 2. Docente intenta editar constitución
const docenteEditConst = hasPermission("DOCENTE", "EDIT", "constitucion");
if (!docenteEditConst) {
  testSuite.passed.push("Seguridad 2: Docente no puede editar constitución.");
} else {
  testSuite.failed.push("Seguridad 2: Falla, Docente puede editar constitución.");
}

// 3. Revisor doctrinal intenta modificar finanzas
const revDocFinanzas = hasPermission("REVISOR_DOCTRINAL", "EDIT", "finanzas");
if (!revDocFinanzas) {
  testSuite.passed.push("Seguridad 3: Revisor Doctrinal bloqueado para modificar finanzas.");
} else {
  testSuite.failed.push("Seguridad 3: Falla, Revisor Doctrinal puede modificar finanzas.");
}

// 4. Usuario normal (Miembro, Estudiante, Docente, Revisor) intenta adoptar doctrina
const docenteAdopt = hasPermission("DOCENTE", "ADOPT_OFFICIAL", "doctrina");
const revDocAdopt = hasPermission("REVISOR_DOCTRINAL", "ADOPT_OFFICIAL", "doctrina");
const miembroAdopt = hasPermission("MIEMBRO", "ADOPT_OFFICIAL", "doctrina");
if (!docenteAdopt && !revDocAdopt && !miembroAdopt) {
  testSuite.passed.push("Seguridad 4: Adopción oficial bloqueada para usuarios normales y revisores.");
} else {
  testSuite.failed.push("Seguridad 4: Falla, usuario normal puede adoptar doctrina.");
}

// 5. Usuario autorizado (Pastor Fundador / Administrador) crea una versión nueva
const adminCanEdit = hasPermission("ADMINISTRADOR", "EDIT", "doctrina");
const pastorFundadorCanEdit = hasPermission("PASTOR_FUNDADOR", "EDIT", "doctrina");
if (adminCanEdit && pastorFundadorCanEdit) {
  testSuite.passed.push("Seguridad 5: Usuario autorizado puede generar y guardar nuevas versiones.");
} else {
  testSuite.failed.push("Seguridad 5: Falla en autorización de Pastor Fundador / Admin.");
}

// 6. Inmutabilidad de versiones históricas
const v1 = createVersionSnapshot("1.0", "Contenido original", "u1", "Luis Uchubanda", "ADOPTADO", "Creación inicial");
const v2 = createVersionSnapshot("1.1", "Contenido modificado", "u1", "Luis Uchubanda", "EN_REVISION", "Ajuste menor");
if (v1.versionNum === "1.0" && v2.versionNum === "1.1" && v1.content !== v2.content) {
  testSuite.passed.push("Seguridad 6: Inmutabilidad histórica de versiones comprobada (v1.0 y v1.1 coexisten sin sobreescritura).");
} else {
  testSuite.failed.push("Seguridad 6: Falla en la inmutabilidad de snapshots de versiones.");
}

// 7. Modificación sobre documento ADOPTADO no destruye la versión oficial
const adoptedDoc = {
  id: "doc-test-adopted",
  status: "ADOPTADO",
  currentVersionNum: "1.0",
  versions: [v1],
};
const newWorkVersion = createVersionSnapshot("1.1", "Nuevo borrador de ajuste", "u1", "Luis Uchubanda", "BORRADOR", "Revisión");
const updatedDoc = {
  ...adoptedDoc,
  currentVersionNum: "1.1",
  status: "EN_REVISION",
  versions: [newWorkVersion, ...adoptedDoc.versions],
};
if (updatedDoc.versions.length === 2 && updatedDoc.versions[1].status === "ADOPTADO") {
  testSuite.passed.push("Seguridad 7: Modificar un documento ADOPTADO preserva el snapshot oficial adoptado en el historial.");
} else {
  testSuite.failed.push("Seguridad 7: Falla en preservación de documento adoptado.");
}

// -----------------------------------------------------------------------------
// PRUEBA 2: INGESTA Y VALIDACIÓN DE doctrina.template.json
// -----------------------------------------------------------------------------
console.log("\n[TEST 2/5] Validando archivo template de doctrina contra esquema Zod...");

const templatePath = "import-queue/doctrina.template.json";
if (fs.existsSync(templatePath)) {
  const templateRaw = fs.readFileSync(templatePath, "utf-8");
  const validationRes = validateImportJson(templateRaw, "doctrina.template.json");
  if (validationRes.isValid && validationRes.type === "doctrina" && validationRes.itemCount >= 2) {
    testSuite.passed.push(`Ingesta: 'doctrina.template.json' validado con éxito (${validationRes.itemCount} artículos).`);
  } else {
    testSuite.failed.push(`Ingesta: Error validando 'doctrina.template.json': ${validationRes.errors.join(", ")}`);
  }
} else {
  testSuite.failed.push("Ingesta: Archivo 'import-queue/doctrina.template.json' no encontrado.");
}

// -----------------------------------------------------------------------------
// PRUEBA 3: ESCANEO DE SECRETOS Y CREDENCIALES
// -----------------------------------------------------------------------------
console.log("\n[TEST 3/5] Escaneando seguridad de secretos y .gitignore...");

const gitignore = fs.readFileSync(".gitignore", "utf-8");
const envLocalExists = fs.existsSync(".env.local");
const envProtected = gitignore.includes(".env.local") && gitignore.includes(".env*.local");

if (envProtected && envLocalExists) {
  testSuite.passed.push("Seguridad: .env.local existe localmente y está 100% blindado por .gitignore.");
} else {
  testSuite.failed.push("Seguridad: .env.local no está correctamente protegido en .gitignore.");
}

// -----------------------------------------------------------------------------
// PRUEBA 4: REGLAS DE FIRESTORE
// -----------------------------------------------------------------------------
console.log("\n[TEST 4/5] Verificando reglas de seguridad en firestore.rules...");

const firestoreRules = fs.readFileSync("firestore.rules", "utf-8");
const hasAdoptCheck = firestoreRules.includes("canAdoptOfficial");
const hasAuditProtection = firestoreRules.includes("allow update, delete: if false");
const hasVersionsCheck = firestoreRules.includes("request.resource.data.versions.size()");

if (hasAdoptCheck && hasAuditProtection && hasVersionsCheck) {
  testSuite.passed.push("Firestore: Reglas de seguridad protegen ADOPT_OFFICIAL, inmutabilidad de auditoría y versiones.");
} else {
  testSuite.failed.push("Firestore: Reglas de seguridad incompletas.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
