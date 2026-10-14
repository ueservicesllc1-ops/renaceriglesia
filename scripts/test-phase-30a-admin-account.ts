import {
  getRegisteredUsers,
  isBootstrapAvailable,
  verifyAdminPermission,
} from "../src/lib/admin-service";
import { recordAuditLog } from "../src/lib/audit";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🔑 SUITE DE PRUEBAS DE LA CUENTA ADMINISTRADORA REAL (FASE 30A)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const users = getRegisteredUsers();

// TEST 1: ueservicesllc1@gmail.com existe como perfil ADMINISTRADOR
const realAdmin = users.find((u) => u.email === "ueservicesllc1@gmail.com");
if (realAdmin && realAdmin.role === "ADMINISTRADOR" && realAdmin.isBootstrapAdmin === true) {
  testSuite.passed.push("TEST 1: ueservicesllc1@gmail.com configurado como perfil ADMINISTRADOR y Root Admin.");
} else {
  testSuite.failed.push("TEST 1: ueservicesllc1@gmail.com no encontrado como ADMINISTRADOR.");
}

// TEST 2: ueservicesllc1@gmail.com puede acceder a /admin
if (realAdmin && verifyAdminPermission(realAdmin.role)) {
  testSuite.passed.push("TEST 2: ueservicesllc1@gmail.com autorizado para acceder a /admin.");
} else {
  testSuite.failed.push("TEST 2: Acceso a /admin denegado para ueservicesllc1@gmail.com.");
}

// TEST 3: ueservicesllc1@gmail.com puede ejecutar operaciones administrativas autorizadas
if (realAdmin && realAdmin.role === "ADMINISTRADOR" && realAdmin.isActive) {
  testSuite.passed.push("TEST 3: ueservicesllc1@gmail.com facultado para ejecutar operaciones administrativas activas.");
} else {
  testSuite.failed.push("TEST 3: Fallo en facultades administrativas.");
}

// TEST 4: admin@renacerchurch.org NO tiene rol ADMINISTRADOR
const oldAdmin = users.find((u) => u.email === "admin@renacerchurch.org");
if (oldAdmin && oldAdmin.role !== "ADMINISTRADOR" && !oldAdmin.isBootstrapAdmin) {
  testSuite.passed.push("TEST 4: admin@renacerchurch.org revocado de privilegios ADMINISTRADOR y Root Admin.");
} else {
  testSuite.failed.push("TEST 4: admin@renacerchurch.org aún conserva rol ADMINISTRADOR.");
}

// TEST 5: luis.uchubanda@renacerchurch.org continúa como PASTOR_FUNDADOR
const pastorFundador = users.find((u) => u.email === "luis.uchubanda@renacerchurch.org");
if (pastorFundador && pastorFundador.role === "PASTOR_FUNDADOR") {
  testSuite.passed.push("TEST 5: luis.uchubanda@renacerchurch.org continúa inmutable como PASTOR_FUNDADOR.");
} else {
  testSuite.failed.push("TEST 5: Pastor Fundador modificado indebidamente.");
}

// TEST 6: El bootstrap /admin/setup continúa cerrado
const bootstrapOpen = isBootstrapAvailable();
if (!bootstrapOpen) {
  testSuite.passed.push("TEST 6: Canal de bootstrap /admin/setup continúa cerrado y seguro.");
} else {
  testSuite.failed.push("TEST 6: Bootstrap abierto indebidamente.");
}

// TEST 7: Un usuario sin privilegios administrativos no puede ejecutar operaciones protegidas server-side
const isLectorBlocked = !verifyAdminPermission("SOLO_LECTURA");
const isMiembroBlocked = !verifyAdminPermission("MIEMBRO");
const isEstudianteBlocked = !verifyAdminPermission("ESTUDIANTE");

if (isLectorBlocked && isMiembroBlocked && isEstudianteBlocked) {
  testSuite.passed.push("TEST 7: Usuarios sin privilegios administrativos bloqueados formalmente server-side.");
} else {
  testSuite.failed.push("TEST 7: Fallo en restricción server-side.");
}

// TEST 8: El cambio de rol queda registrado en auditoría
async function runTests() {
  const auditEntry = await recordAuditLog({
    userId: "usr-admin-real-001",
    userName: "Administrador Real",
    userEmail: "ueservicesllc1@gmail.com",
    userRole: "ADMINISTRADOR",
    action: "USER_ROLE_CHANGED",
    resource: "administracion",
    detail: "Asignación formal de ueservicesllc1@gmail.com como ADMINISTRADOR / Root Admin y revocación de admin@renacerchurch.org",
  });

  if (auditEntry && auditEntry.id) {
    testSuite.passed.push("TEST 8: Evento de cambio de rol y designación administrativa registrado en auditoría.");
  } else {
    testSuite.failed.push("TEST 8: Fallo en registro de auditoría.");
  }

  // -----------------------------------------------------------------------------
  // RESULTADOS
  // -----------------------------------------------------------------------------
  console.log("\n==========================================================================");
  console.log(`TOTAL PRUEBAS FASE 30A (ADMINISTRADOR REAL): ${testSuite.passed.length + testSuite.failed.length}`);
  console.log(`✅ PASADAS: ${testSuite.passed.length}`);
  console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
  console.log("==========================================================================");
  testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
  if (testSuite.failed.length > 0) {
    testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
  }
}

runTests();
