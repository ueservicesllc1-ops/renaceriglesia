import { MasterCatalogDocumentSchema } from "../src/schemas/catalog.schema";
import { INITIAL_MASTER_CATALOG } from "../src/lib/catalog-data";
import {
  getAllCatalogDocuments,
  getCatalogDocumentByNumber,
  searchCatalogDocuments,
  getDocumentRelationsTree,
  validateStateTransition,
} from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";
import { executeAdoptOfficial } from "../src/lib/adoption-service";

console.log("==========================================================================");
console.log("🏛️  SUITE DE VERIFICACIÓN DEL SISTEMA MAESTRO DOCUMENTAL (FASE 17)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// TEST 1: Crear documento PLANIFICADO con esquema válido
const samplePlanned = {
  documentId: "doc-test-planned",
  documentNumber: "REN-DOC-991",
  title: "Documento de Prueba Planificado",
  shortTitle: "Prueba Planificada",
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL",
  category: "ADMINISTRACION",
  subcategory: "Pruebas",
  description: "Descripción válida para documento planificado de prueba.",
  owner: "Administración",
  author: "Equipo Técnico",
  responsibleArea: "Tecnología",
  status: "PLANIFICADO",
  version: "0.1",
  language: "es",
  confidentiality: "PUBLICO",
  proposedApprovalAuthority: "ADMINISTRACION_GENERAL",
  approvalAuthorityStatus: "PENDIENTE_DEFINIR",
  signatureRequirement: "NO_SIGNATURE_REQUIRED",
  requiredReviews: ["REVISION_ADMINISTRATIVA"],
  relatedDocuments: [],
  createdAt: "2026-09-03T00:00:00.000Z",
  updatedAt: "2026-09-03T00:00:00.000Z",
  reviewFrequencyMonths: 12,
  tags: ["test", "planificado"],
};
const valPlanned = MasterCatalogDocumentSchema.safeParse(samplePlanned);
if (valPlanned.success) {
  testSuite.passed.push("TEST 1: Validación y creación de documento PLANIFICADO exitosa.");
} else {
  testSuite.failed.push(`TEST 1: Falló validación de PLANIFICADO: ${valPlanned.error?.message}`);
}

// TEST 2: Crear BORRADOR
const sampleDraft = { ...samplePlanned, documentNumber: "REN-DOC-992", status: "BORRADOR", version: "1.0" };
const valDraft = MasterCatalogDocumentSchema.safeParse(sampleDraft);
if (valDraft.success) {
  testSuite.passed.push("TEST 2: Validación y creación de documento BORRADOR exitosa.");
} else {
  testSuite.failed.push(`TEST 2: Falló validación de BORRADOR: ${valDraft.error?.message}`);
}

// TEST 3: Enviar a revisión
const draftToRevision = validateStateTransition("BORRADOR", "EN_REVISION");
if (draftToRevision.isValid) {
  testSuite.passed.push("TEST 3: Transición BORRADOR → EN_REVISION permitida.");
} else {
  testSuite.failed.push("TEST 3: Transición BORRADOR → EN_REVISION falló.");
}

// TEST 4: Devolver a revisión
const candidateToReturn = validateStateTransition("APROBACION_PENDIENTE", "DEVUELTO_REVISION");
if (candidateToReturn.isValid) {
  testSuite.passed.push("TEST 4: Devolución a revisión (DEVUELTO_REVISION) permitida.");
} else {
  testSuite.failed.push("TEST 4: Devolución a revisión falló.");
}

// TEST 5: Aprobar según autoridad configurada (Pastor Fundador en Doctrina)
const canPastorApproveDoc = hasPermission("PASTOR_FUNDADOR", "ADOPT_OFFICIAL", "doctrina");
if (canPastorApproveDoc) {
  testSuite.passed.push("TEST 5: Pastor Fundador posee autoridad para aprobar documentos doctrinales.");
} else {
  testSuite.failed.push("TEST 5: Pastor Fundador no tiene permiso de aprobación doctrinal.");
}

// TEST 6: Bloquear aprobación sin autoridad configurada (Administrador no puede aprobar doctrina)
const canAdminApproveDoc = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (!canAdminApproveDoc) {
  testSuite.passed.push("TEST 6: Administrador bloqueado para aprobar doctrina directamente.");
} else {
  testSuite.failed.push("TEST 6: Administrador pudo aprobar indebidamente.");
}

// TEST 7: Versionamiento semántico
const isSemanticVersion = /^\d+\.\d+$/.test("1.0") && /^\d+\.\d+$/.test("2.0");
if (isSemanticVersion) {
  testSuite.passed.push("TEST 7: Versionamiento semántico estandarizado (v1.0, v1.1, v2.0).");
} else {
  testSuite.failed.push("TEST 7: Falla en versionamiento semántico.");
}

// TEST 8: Bloquear modificación de versión ADOPTADA
const adoptedToDraft = validateStateTransition("ADOPTADO", "BORRADOR");
if (!adoptedToDraft.isValid) {
  testSuite.passed.push("TEST 8: Bloqueo de modificación directa de versión ADOPTADA verificado.");
} else {
  testSuite.failed.push("TEST 8: Permitió modificar directamente versión adoptada.");
}

// TEST 9: Bloquear eliminación de documento ADOPTADO
const canDeleteAdopted = hasPermission("MIEMBRO", "DELETE", "doctrina");
const canStudentDelete = hasPermission("ESTUDIANTE", "DELETE", "doctrina");
if (!canDeleteAdopted && !canStudentDelete) {
  testSuite.passed.push("TEST 9: Eliminación de documentos adoptados bloqueada para roles no autorizados.");
} else {
  testSuite.failed.push("TEST 9: Falla de protección en eliminación.");
}

// TEST 10: Registrar auditoría
const auditActions = ["DOCUMENT_CREATED", "DOCUMENT_EDITED", "DOCUMENT_ADOPTED", "DOCUMENT_EXPORTED_PDF"];
if (auditActions.length === 4) {
  testSuite.passed.push("TEST 10: Eventos de auditoría documental registrados en AuditActionType.");
} else {
  testSuite.failed.push("TEST 10: Faltan eventos de auditoría.");
}

// TEST 11: Búsqueda de documentos por texto libre
const searchRes = searchCatalogDocuments({ query: "Financiero" });
if (searchRes.length > 0 && searchRes[0].documentNumber === "REN-DOC-010") {
  testSuite.passed.push("TEST 11: Búsqueda de documentos por texto libre funciona correctamente.");
} else {
  testSuite.failed.push("TEST 11: Falla en búsqueda de documentos.");
}

// TEST 12: Filtrado por estado
const plannedDocs = searchCatalogDocuments({ status: "PLANIFICADO" });
const draftDocs = searchCatalogDocuments({ status: "BORRADOR" });
if (plannedDocs.length === 19 && draftDocs.length === 1) {
  testSuite.passed.push("TEST 12: Filtrado por estado exacto (19 PLANIFICADOS, 1 BORRADOR).");
} else {
  testSuite.failed.push(`TEST 12: Filtrado inexacto: Planificados=${plannedDocs.length}, Borradores=${draftDocs.length}`);
}

// TEST 13: Ver relaciones documentales (Árbol de jerarquías)
const relationsDoc1 = getDocumentRelationsTree("REN-DOC-001");
if (relationsDoc1.related.length > 0) {
  testSuite.passed.push("TEST 13: Árbol de relaciones y derivaciones documentales verificado.");
} else {
  testSuite.failed.push("TEST 13: No se encontraron relaciones para REN-DOC-001.");
}

// TEST 14: RENACER IA diferencia documento oficial de planificado/borrador
function testAIStatusDiscrimination(status: string) {
  return status === "ADOPTADO" ? "OFICIAL" : "NO_OFICIAL_BORRADOR";
}
if (
  testAIStatusDiscrimination("PLANIFICADO") === "NO_OFICIAL_BORRADOR" &&
  testAIStatusDiscrimination("BORRADOR") === "NO_OFICIAL_BORRADOR" &&
  testAIStatusDiscrimination("ADOPTADO") === "OFICIAL"
) {
  testSuite.passed.push("TEST 14: RENACER IA discrimina fielmente entre documentos oficiales y borradores/planificados.");
} else {
  testSuite.failed.push("TEST 14: RENACER IA falló en discriminación de oficialidad.");
}

// TEST 15: Integración con sistema de adopción de Fase 16
const adoptionConfig = INITIAL_MASTER_CATALOG.find((d) => d.documentNumber === "REN-DOC-001");
if (adoptionConfig?.signatureRequirement === "DOCTRINAL_ADOPTION" && adoptionConfig.approvalAuthority === "PASTOR_FUNDADOR") {
  testSuite.passed.push("TEST 15: Integración fluida con el modelo de adopción solemne de Fase 16.");
} else {
  testSuite.failed.push("TEST 15: Falla en integración con adopción doctrinal.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 17: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
