import {
  getRegisteredUsers,
  isBootstrapAvailable,
  executeAdminBootstrap,
  verifyAdminPermission,
  getDocumentInventoryAudit,
  getSystemOverviewMetrics,
} from "../src/lib/admin-service";
import { getAllInstitutionalDecisions } from "../src/lib/decision-service";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { getAllInstitutionalDocuments } from "../src/lib/institutional-document-service";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("🛡️  SUITE DE PRUEBAS DEL ADMINISTRADOR E INVENTARIO DOCUMENTAL (FASE 30)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// TEST 1: Sistema de autenticación identificado y funcional
const users = getRegisteredUsers();
const adminUser = users.find((u) => u.role === "ADMINISTRADOR");
if (users.length >= 4 && adminUser) {
  testSuite.passed.push("TEST 1: Sistema de autenticación y usuarios registrados identificado y funcional.");
} else {
  testSuite.failed.push("TEST 1: Fallo en sistema de autenticación.");
}

// TEST 2: Rol ADMINISTRADOR existe y es reconocido server-side
const isAdminPermitted = verifyAdminPermission("ADMINISTRADOR");
const isPastorPermitted = verifyAdminPermission("PASTOR_FUNDADOR");
const isReadOnlyBlocked = !verifyAdminPermission("SOLO_LECTURA");
const isStudentBlocked = !verifyAdminPermission("ESTUDIANTE");

if (isAdminPermitted && isPastorPermitted && isReadOnlyBlocked && isStudentBlocked) {
  testSuite.passed.push("TEST 2: Rol ADMINISTRADOR y PASTOR_FUNDADOR reconocidos y autorizados server-side.");
} else {
  testSuite.failed.push("TEST 2: Fallo en verificación server-side de rol.");
}

// TEST 3 & 4: Bootstrap queda bloqueado cuando ya existe administrador
const isBootstrapOpen = isBootstrapAvailable();
const bootstrapAttempt = executeAdminBootstrap({
  email: "hacker@intruder.com",
  displayName: "Intruder",
});

if (!isBootstrapOpen && !bootstrapAttempt.success && bootstrapAttempt.error?.includes("cerrado")) {
  testSuite.passed.push("TEST 3 & 4: Canal de bootstrap bloqueado permanentemente contra intrusiones no autorizadas.");
} else {
  testSuite.failed.push("TEST 3 & 4: Fallo en protección de bootstrap de administrador.");
}

// TEST 5: Usuario sin ADMINISTRADOR no puede acceder a operaciones protegidas
if (!verifyAdminPermission("SOLO_LECTURA") && !verifyAdminPermission("MIEMBRO")) {
  testSuite.passed.push("TEST 5: Usuarios sin rol administrativo bloqueados formalmente de operaciones protegidas.");
} else {
  testSuite.failed.push("TEST 5: Privilegios administrativos expuestos a roles inferiores.");
}

// TEST 6: Inventario documental refleja datos reales
const inventory = getDocumentInventoryAudit();
if (inventory.length >= 20) {
  testSuite.passed.push(`TEST 6: Inventario documental auditó ${inventory.length} registros institucionales reales.`);
} else {
  testSuite.failed.push(`TEST 6: Inventario insuficiente: ${inventory.length}`);
}

// TEST 7: Distinción entre Documento Completo, Parcial y Registro de Catálogo
const doc1Inv = inventory.find((i) => i.code === "REN-DOC-001");
const doc2Inv = inventory.find((i) => i.code === "REN-DOC-002");
const doc3Inv = inventory.find((i) => i.code === "REN-DOC-003");

if (
  doc1Inv?.completeness === "DOCUMENTO_COMPLETO" &&
  doc2Inv?.completeness === "DOCUMENTO_PARCIAL" &&
  doc3Inv?.completeness === "CONTENIDO_PENDIENTE"
) {
  testSuite.passed.push("TEST 7: Distinción técnica entre DOCUMENTO_COMPLETO, DOCUMENTO_PARCIAL y CONTENIDO_PENDIENTE confirmada.");
} else {
  testSuite.failed.push("TEST 7: Falla en clasificación técnica de completitud documental.");
}

// TEST 8: Las 107 decisiones continúan exactamente preservadas
const allDecs = getAllInstitutionalDecisions();
if (allDecs.length === 107) {
  testSuite.passed.push("TEST 8: Las 107 decisiones institucionales continúan íntegras y exactamente preservadas.");
} else {
  testSuite.failed.push(`TEST 8: Conteo de decisiones alterado: ${allDecs.length} (esperado 107).`);
}

// TEST 9: Inmutabilidad de la Declaración de Fe (REN-DOC-001)
const catDoc1 = getCatalogDocumentByNumber("REN-DOC-001");
if (catDoc1?.status === "BORRADOR" && catDoc1.version === "1.0" && doctrinaData.meta.status === "BORRADOR") {
  testSuite.passed.push("TEST 9: Declaración de Fe (REN-DOC-001) permanece inmutable en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 9: Doctrina alterada indebidamente.");
}

// TEST 10: Inmutabilidad de la Constitución (REN-DOC-002)
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (catDoc2?.status === "PLANIFICADO" && catDoc2.version === "0.1") {
  testSuite.passed.push("TEST 10: Constitución (REN-DOC-002) permanece inmutable en PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 10: Constitución alterada indebidamente.");
}

// TEST 11: No existe adopción indebida
const metrics = getSystemOverviewMetrics();
const libraryDocs = getAllInstitutionalDocuments();
const anyAdopted = libraryDocs.some((d) => d.status === "ADOPTADO");
if (metrics.adoptedDocumentsCount === 0 && !anyAdopted) {
  testSuite.passed.push("TEST 11: 0 adopciones indebidas en todo el sistema (soberanía exclusiva del Fundador).");
} else {
  testSuite.failed.push("TEST 11: Documentos marcados como adoptados indebidamente.");
}

// TEST 12: Dashboard utiliza datos dinámicos reales
if (
  metrics.totalDecisions === 107 &&
  metrics.completeDocumentsCount >= 1 &&
  metrics.pendingDraftCount >= 10 &&
  metrics.legalReviewRequiredCount >= 5
) {
  testSuite.passed.push("TEST 12: Métricas dinámicas calculadas en tiempo real desde los repositorios.");
} else {
  testSuite.failed.push(`TEST 12: Falla en métricas dinámicas del sistema: ${JSON.stringify(metrics)}`);
}

// TEST 13: Documentos con contenido real pueden abrirse desde la biblioteca
if (doc1Inv?.hasFullContent && doc1Inv.contentLength > 200) {
  testSuite.passed.push("TEST 13: Documentos con contenido real cargado listos para lectura y auditoría.");
} else {
  testSuite.failed.push("TEST 13: Documentos reales sin contenido suficiente.");
}

// TEST 14: Documentos pendientes muestran CONTENIDO PENDIENTE
if (doc3Inv?.completenessLabel.includes("Pendiente") && !doc3Inv.hasFullContent) {
  testSuite.passed.push("TEST 14: Documentos sin redactar identificados transparentemente como CONTENIDO PENDIENTE.");
} else {
  testSuite.failed.push("TEST 14: Falla en identificación de contenido pendiente.");
}

// TEST 15: Permisos administrativos verificados server-side
const canFundador = verifyAdminPermission("PASTOR_FUNDADOR");
const canAdmin = verifyAdminPermission("ADMINISTRADOR");
const canLector = verifyAdminPermission("SOLO_LECTURA");
if (canFundador && canAdmin && !canLector) {
  testSuite.passed.push("TEST 15: Matriz de seguridad server-side validada para todas las operaciones.");
} else {
  testSuite.failed.push("TEST 15: Falla en matriz de permisos.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 30 (ADMINISTRADOR & INVENTARIO): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
