import {
  getAllInstitutionalDocuments,
  getInstitutionalDocumentById,
  createInstitutionalDocument,
  updateInstitutionalDocument,
  addDocumentComment,
  compareDocumentVersions,
} from "../src/lib/institutional-document-service";
import { CreateDocumentInputSchema, UpdateDocumentInputSchema } from "../src/schemas/institutional-document.schema";
import { getCatalogDocumentByNumber } from "../src/lib/catalog-service";
import { hasPermission } from "../src/lib/permissions";
import doctrinaData from "../import-queue/doctrina.json";

console.log("==========================================================================");
console.log("📄 SUITE DE PRUEBAS DEL SISTEMA REAL DE DOCUMENTOS (FASE 28)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

// TEST 1: Crear documento válido con Zod y registrarlo
const newDocInput = {
  title: "Reglamento Interno del Consejo Pastoral",
  documentNumber: "REN-DOC-099",
  type: "GOBIERNO" as const,
  category: "GOBIERNO",
  description: "Normativa interna para sesiones y acuerdos del consejo pastoral.",
  content: "# REGLAMENTO INTERNO\n\n### 1. Sesiones Ordinarias\nSe realizarán mensualmente.",
  confidentiality: "INTERNO_CONGREGACION" as const,
  documentTarget: "REGLAMENTO" as const,
  legalState: "NO_REQUIERE_REVISION_LEGAL" as const,
  responsibleArea: "CONSEJO_MINISTERIAL",
  initialVersion: "1.0",
};

const createRes = createInstitutionalDocument(newDocInput, {
  id: "usr-admin-test",
  name: "Administrador Test",
  role: "ADMINISTRADOR",
});

if (createRes.success && createRes.document?.documentNumber === "REN-DOC-099") {
  testSuite.passed.push("TEST 1: Creación de documento con validación Zod y versionado inicial exitosa.");
} else {
  testSuite.failed.push(`TEST 1: Fallo al crear documento: ${createRes.error}`);
}

// TEST 2: Impedir códigos duplicados
const duplicateRes = createInstitutionalDocument(newDocInput, {
  id: "usr-admin-test",
  name: "Administrador Test",
  role: "ADMINISTRADOR",
});

if (!duplicateRes.success && duplicateRes.error?.includes("Ya existe")) {
  testSuite.passed.push("TEST 2: Bloqueo estricto de códigos de documento duplicados confirmado.");
} else {
  testSuite.failed.push("TEST 2: Se permitió crear código duplicado.");
}

// TEST 3: Editar documento y generar nueva versión menor (v1.1)
const updateRes = updateInstitutionalDocument(
  {
    docId: "REN-DOC-099",
    newContent: "# REGLAMENTO INTERNO MODIFICADO\n\n### 1. Sesiones Ordinarias\nSe realizarán quincenalmente.",
    changeReason: "Actualización de frecuencia de sesiones ordinarias",
    versionBump: "minor",
  },
  {
    id: "usr-admin-test",
    name: "Administrador Test",
    role: "ADMINISTRADOR",
  }
);

if (updateRes.success && updateRes.document?.version === "1.1") {
  testSuite.passed.push("TEST 3: Edición con salto de versión menor (v1.0 -> v1.1) exitosa.");
} else {
  testSuite.failed.push(`TEST 3: Fallo en actualización de versión: ${updateRes.error}`);
}

// TEST 4: Conservar versión anterior en historial inmutable
const updatedDoc = getInstitutionalDocumentById("REN-DOC-099");
const prevVersion = updatedDoc?.versions.find((v) => v.versionNumber === "1.0");
const newVersion = updatedDoc?.versions.find((v) => v.versionNumber === "1.1");

if (prevVersion && prevVersion.status === "SUPERADO" && newVersion && newVersion.changeReason.includes("Actualización")) {
  testSuite.passed.push("TEST 4: Versión anterior v1.0 archivada inmutablemente como SUPERADO y nueva versión v1.1 activa.");
} else {
  testSuite.failed.push("TEST 4: No se preservó la versión histórica.");
}

// TEST 5: Comparar versiones (Diff)
const diffRes = compareDocumentVersions("REN-DOC-099", "1.0", "1.1");
if (diffRes.success && diffRes.diffLines && diffRes.diffLines.length > 0) {
  testSuite.passed.push("TEST 5: Motor de comparación de versiones (Diff) ejecutado correctamente.");
} else {
  testSuite.failed.push("TEST 5: Fallo en comparación de versiones.");
}

// TEST 6: Agregar comentario sin alterar el contenido del documento
const commentRes = addDocumentComment("REN-DOC-099", "Revisión técnica aprobada por el área ministerial.", {
  id: "usr-rev-01",
  name: "Revisor Ministerial",
  role: "REVISOR_DOCTRINAL",
});

const docWithComment = getInstitutionalDocumentById("REN-DOC-099");
if (commentRes.success && docWithComment?.comments.length === 1 && docWithComment.version === "1.1") {
  testSuite.passed.push("TEST 6: Comentario agregado al documento sin alterar su contenido ni versión.");
} else {
  testSuite.failed.push("TEST 6: Fallo al agregar comentario.");
}

// TEST 7: Impedir que SOLO_LECTURA cree o edite documentos
const readonlyCreateRes = createInstitutionalDocument(
  {
    ...newDocInput,
    documentNumber: "REN-DOC-098",
  },
  {
    id: "usr-read-only",
    name: "Usuario Lectura",
    role: "SOLO_LECTURA",
  }
);

const readonlyUpdateRes = updateInstitutionalDocument(
  {
    docId: "REN-DOC-099",
    newContent: "Contenido no autorizado",
    changeReason: "Intento no autorizado",
    versionBump: "minor",
  },
  {
    id: "usr-read-only",
    name: "Usuario Lectura",
    role: "SOLO_LECTURA",
  }
);

if (!readonlyCreateRes.success && !readonlyUpdateRes.success) {
  testSuite.passed.push("TEST 7: Seguridad RBAC: rol SOLO_LECTURA bloqueado para creación y edición.");
} else {
  testSuite.failed.push("TEST 7: Fallo en protección de rol SOLO_LECTURA.");
}

// TEST 8: Impedir adopción automática sin exclusividad del Pastor Fundador
const illegalAdoptRes = updateInstitutionalDocument(
  {
    docId: "REN-DOC-099",
    newContent: "Intento de auto-adopción",
    changeReason: "Adopción sin permisos",
    versionBump: "major",
    newStatus: "ADOPTADO",
  },
  {
    id: "usr-admin-test",
    name: "Administrador Test",
    role: "ADMINISTRADOR",
  }
);

if (!illegalAdoptRes.success && illegalAdoptRes.error?.includes("Pastor Fundador")) {
  testSuite.passed.push("TEST 8: Bloqueo de adopción oficial automática sin permiso exclusivo del Pastor Fundador.");
} else {
  testSuite.failed.push("TEST 8: Se permitió auto-adopción indebida.");
}

// TEST 9: Inmutabilidad de la Declaración de Fe (REN-DOC-001)
const doc1 = getInstitutionalDocumentById("REN-DOC-001");
const catDoc1 = getCatalogDocumentByNumber("REN-DOC-001");
if (doc1?.status === "BORRADOR" && catDoc1?.status === "BORRADOR" && doctrinaData.meta.status === "BORRADOR") {
  testSuite.passed.push("TEST 9: Declaración de Fe (REN-DOC-001) permanece en BORRADOR v1.0 (No adoptada).");
} else {
  testSuite.failed.push("TEST 9: Doctrina alterada indebidamente.");
}

// TEST 10: Inmutabilidad de la Constitución (REN-DOC-002)
const doc2 = getInstitutionalDocumentById("REN-DOC-002");
const catDoc2 = getCatalogDocumentByNumber("REN-DOC-002");
if (doc2?.status === "PLANIFICADO" && catDoc2?.status === "PLANIFICADO") {
  testSuite.passed.push("TEST 10: Constitución (REN-DOC-002) permanece en PLANIFICADO v0.1 (No adoptada).");
} else {
  testSuite.failed.push("TEST 10: Constitución alterada indebidamente.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 28 (SISTEMA DE DOCUMENTOS): ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
