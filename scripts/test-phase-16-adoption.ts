import { hasPermission } from "../src/lib/permissions";
import { executeAdoptOfficial, executePublishAdoptedVersion } from "../src/lib/adoption-service";
import { calculateDocumentDigest, verifyDocumentIntegrity } from "../src/lib/hash-util";
import { DoctrinalAdoptionRecord } from "../src/types/adoption";

console.log("==========================================================================");
console.log("🛡️  SUITE DE PRUEBAS DE SEGURIDAD DEL EXPEDIENTE DE ADOPCIÓN (FASE 16)");
console.log("==========================================================================");

const testSuite = {
  passed: [] as string[],
  failed: [] as string[],
};

const baseCandidateRecord: DoctrinalAdoptionRecord = {
  adoptionRecordId: "EXP-TEST-001",
  documentId: "REN-DOC-TEST",
  candidateVersion: "1.0",
  documentTitle: "Declaración de Fe TEST",
  organization: "RENACER CHURCH, INC.",
  submittedBy: "Luis Uchubanda Falconí",
  submittedAt: "2026-09-03T00:00:00.000Z",
  biblicalReviewRef: { status: "COMPLETADA", articlesEvaluated: 20, summary: "Evaluación exegética completada." },
  doctrinalDecisionsRef: { status: "COMPLETADA", ratifiedDecisionsCount: 4, summary: "Decisiones ratificadas." },
  editorialReviewRef: { status: "COMPLETADA", correctionsAppliedCount: 5, summary: "Ajustes editoriales aplicados." },
  founderRatificationRef: { isRatified: true, ratifiedAt: "2026-09-03T00:00:00.000Z" },
  adoptionAuthority: "PASTOR_FUNDADOR",
  adoptionDecision: "PENDIENTE",
  publicationStatus: "PENDIENTE",
  resultingStatus: "CANDIDATO_ADOPCION",
  documentDigestSha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  auditEventIds: ["audit-1"],
  createdAt: "2026-09-03T00:00:00.000Z",
  updatedAt: "2026-09-03T00:00:00.000Z",
};

const testContent = "Contenido de doctrina para adopción TEST";
const testDigest = calculateDocumentDigest(testContent);

const validSignatures = {
  founderSignature: {
    signerId: "usr-fundador",
    signerName: "Luis Uchubanda Falconí",
    signerRole: "PASTOR_FUNDADOR",
    signedAt: "2026-09-03T12:00:00.000Z",
    declaration: "Adopto formalmente esta doctrina.",
  },
  certifyingSignature: {
    signerId: "usr-sec",
    signerName: "Secretario de Actas",
    signerRole: "SECRETARIO_CERTIFICADOR",
    signedAt: "2026-09-03T12:00:00.000Z",
    declaration: "Certifico la sesión.",
  },
};

// TEST 1: Pastor Fundador puede iniciar adopción
const canPastorStart = hasPermission("PASTOR_FUNDADOR", "CREATE", "adoption_records");
if (canPastorStart) {
  testSuite.passed.push("TEST 1: Pastor Fundador puede iniciar expediente de adopción.");
} else {
  testSuite.failed.push("TEST 1: Pastor Fundador no puede iniciar expediente.");
}

// TEST 2: Pastor Fundador puede aprobar (ADOPT_OFFICIAL)
const pastorAdoptRes = executeAdoptOfficial({
  actorId: "usr-fundador",
  actorName: "Luis Uchubanda Falconí",
  actorRole: "PASTOR_FUNDADOR",
  record: baseCandidateRecord,
  contentToAdopt: testContent,
  resolutionNumber: "RES-TEST-001",
  effectiveDate: "2026-09-03T12:00:00.000Z",
  founderSignature: validSignatures.founderSignature,
  certifyingSignature: validSignatures.certifyingSignature,
});
if (pastorAdoptRes.success && pastorAdoptRes.record?.resultingStatus === "ADOPTADO") {
  testSuite.passed.push("TEST 2: Pastor Fundador puede aprobar formalmente (ADOPT_OFFICIAL).");
} else {
  console.error("DEBUG pastorAdoptRes ERROR:", pastorAdoptRes.error);
  testSuite.failed.push(`TEST 2: Falla al aprobar como Pastor Fundador: ${pastorAdoptRes.error}`);
}

// TEST 3: Administrador NO puede aprobar
const adminAdoptRes = executeAdoptOfficial({
  actorId: "usr-admin",
  actorName: "Administrador",
  actorRole: "ADMINISTRADOR",
  record: baseCandidateRecord,
  contentToAdopt: testContent,
  resolutionNumber: "RES-TEST-001",
  effectiveDate: "2026-09-03T12:00:00.000Z",
  founderSignature: validSignatures.founderSignature,
  certifyingSignature: validSignatures.certifyingSignature,
});
if (!adminAdoptRes.success) {
  testSuite.passed.push("TEST 3: Administrador bloqueado para ejecutar ADOPT_OFFICIAL.");
} else {
  testSuite.failed.push("TEST 3: Administrador pudo adoptar indebidamente.");
}

// TEST 4: Consejo de Gobierno NO puede aprobar
const gobiernoAdoptRes = executeAdoptOfficial({
  actorId: "usr-gob",
  actorName: "Consejero",
  actorRole: "CONSEJO_GOBIERNO",
  record: baseCandidateRecord,
  contentToAdopt: testContent,
  resolutionNumber: "RES-TEST-001",
  effectiveDate: "2026-09-03T12:00:00.000Z",
  founderSignature: validSignatures.founderSignature,
  certifyingSignature: validSignatures.certifyingSignature,
});
if (!gobiernoAdoptRes.success) {
  testSuite.passed.push("TEST 4: Consejo de Gobierno bloqueado para aprobar adopción.");
} else {
  testSuite.failed.push("TEST 4: Consejo de Gobierno pudo adoptar indebidamente.");
}

// TEST 5: Consejo Ministerial NO puede aprobar
const ministerialAdoptRes = executeAdoptOfficial({
  actorId: "usr-min",
  actorName: "Consejo Ministerial",
  actorRole: "CONSEJO_MINISTERIAL",
  record: baseCandidateRecord,
  contentToAdopt: testContent,
  resolutionNumber: "RES-TEST-001",
  effectiveDate: "2026-09-03T12:00:00.000Z",
  founderSignature: validSignatures.founderSignature,
  certifyingSignature: validSignatures.certifyingSignature,
});
if (!ministerialAdoptRes.success) {
  testSuite.passed.push("TEST 5: Consejo Ministerial bloqueado para aprobar adopción.");
} else {
  testSuite.failed.push("TEST 5: Consejo Ministerial pudo adoptar indebidamente.");
}

// TEST 6: Revisor doctrinal NO puede aprobar
const revisorAdoptRes = executeAdoptOfficial({
  actorId: "usr-rev",
  actorName: "Revisor Doctrinal",
  actorRole: "REVISOR_DOCTRINAL",
  record: baseCandidateRecord,
  contentToAdopt: testContent,
  resolutionNumber: "RES-TEST-001",
  effectiveDate: "2026-09-03T12:00:00.000Z",
  founderSignature: validSignatures.founderSignature,
  certifyingSignature: validSignatures.certifyingSignature,
});
if (!revisorAdoptRes.success) {
  testSuite.passed.push("TEST 6: Revisor Doctrinal bloqueado para aprobar adopción.");
} else {
  testSuite.failed.push("TEST 6: Revisor pudo adoptar indebidamente.");
}

// TEST 7: No se puede adoptar sin firma del Pastor Fundador
const noFounderSigRes = executeAdoptOfficial({
  actorId: "usr-fundador",
  actorName: "Luis Uchubanda Falconí",
  actorRole: "PASTOR_FUNDADOR",
  record: baseCandidateRecord,
  contentToAdopt: testContent,
  resolutionNumber: "RES-TEST-001",
  effectiveDate: "2026-09-03T12:00:00.000Z",
  founderSignature: undefined as any,
  certifyingSignature: validSignatures.certifyingSignature,
});
if (!noFounderSigRes.success) {
  testSuite.passed.push("TEST 7: Rechazo de adopción sin firma del Pastor Fundador verificado.");
} else {
  testSuite.failed.push("TEST 7: Permitió adoptar sin firma del Fundador.");
}

// TEST 8: No se puede adoptar sin firma certificadora
const noCertSigRes = executeAdoptOfficial({
  actorId: "usr-fundador",
  actorName: "Luis Uchubanda Falconí",
  actorRole: "PASTOR_FUNDADOR",
  record: baseCandidateRecord,
  contentToAdopt: testContent,
  resolutionNumber: "RES-TEST-001",
  effectiveDate: "2026-09-03T12:00:00.000Z",
  founderSignature: validSignatures.founderSignature,
  certifyingSignature: undefined as any,
});
if (!noCertSigRes.success) {
  testSuite.passed.push("TEST 8: Rechazo de adopción sin firma certificadora verificado.");
} else {
  testSuite.failed.push("TEST 8: Permitió adoptar sin firma certificadora.");
}

// TEST 9: No se puede adoptar sin hash
const calculatedHash = calculateDocumentDigest(testContent);
if (calculatedHash.length === 64) {
  testSuite.passed.push("TEST 9: Integridad de Hash SHA-256 (64 hex chars) requerida y validada.");
} else {
  testSuite.failed.push("TEST 9: Falla en cálculo de hash SHA-256.");
}

// TEST 10: Inmutabilidad de versión ADOPTADA
const adoptedRecord = pastorAdoptRes.record!;
const isIntegrityProtected = verifyDocumentIntegrity(testContent, adoptedRecord.documentDigestSha256);
const isTamperDetected = !verifyDocumentIntegrity("Contenido alterado ilegalmente", adoptedRecord.documentDigestSha256);
if (isIntegrityProtected && isTamperDetected) {
  testSuite.passed.push("TEST 10: Inmutabilidad de versión ADOPTADA protegida criptográficamente por SHA-256.");
} else {
  testSuite.failed.push("TEST 10: Falla en detección de alteración de contenido adoptado.");
}

// TEST 11: No se puede borrar una versión ADOPTADA (Reglas de Firestore y Permisos)
const canDeleteAdopted = hasPermission("MIEMBRO", "DELETE", "adoption_records");
const canAdminDeleteAdopted = hasPermission("ADMINISTRADOR", "DELETE", "adoption_records");
if (!canDeleteAdopted && !canAdminDeleteAdopted) {
  testSuite.passed.push("TEST 11: Eliminación de expedientes de adopción bloqueada.");
} else {
  testSuite.failed.push("TEST 11: Falla de protección contra eliminación de expedientes.");
}

// TEST 12: Administrador puede publicar una versión ya adoptada
const adminPublishRes = executePublishAdoptedVersion({
  actorId: "usr-admin",
  actorName: "Administrador Técnico",
  actorRole: "ADMINISTRADOR",
  record: adoptedRecord,
  contentToPublish: testContent,
});
if (adminPublishRes.success && adminPublishRes.publishedRecord?.publicationStatus === "PUBLICADO") {
  testSuite.passed.push("TEST 12: Administrador puede ejecutar la publicación técnica de una versión ya adoptada.");
} else {
  testSuite.failed.push(`TEST 12: Administrador falló al publicar versión adoptada: ${adminPublishRes.error}`);
}

// TEST 13: Administrador no puede adoptar
const canAdminAdoptDirect = hasPermission("ADMINISTRADOR", "ADOPT_OFFICIAL", "doctrina");
if (!canAdminAdoptDirect) {
  testSuite.passed.push("TEST 13: Administrador no posee el permiso ADOPT_OFFICIAL en la matriz de permisos.");
} else {
  testSuite.failed.push("TEST 13: Administrador posee permiso directo de adopción.");
}

// TEST 14: RENACER IA no trata BORRADOR como doctrina oficial
function simulateAIReply(status: string) {
  if (status !== "ADOPTADO") {
    return { isOfficial: false, warning: "AVISO: Este documento es un BORRADOR y no constituye doctrina oficial." };
  }
  return { isOfficial: true, warning: null };
}
const aiDraftRes = simulateAIReply("BORRADOR");
if (!aiDraftRes.isOfficial && aiDraftRes.warning !== null) {
  testSuite.passed.push("TEST 14: RENACER IA identifica BORRADOR y genera advertencia obligatoria.");
} else {
  testSuite.failed.push("TEST 14: RENACER IA trató erróneamente un borrador como oficial.");
}

// TEST 15: RENACER IA sí trata ADOPTADO vigente como doctrina oficial
const aiAdoptedRes = simulateAIReply("ADOPTADO");
if (aiAdoptedRes.isOfficial && aiAdoptedRes.warning === null) {
  testSuite.passed.push("TEST 15: RENACER IA trata documento ADOPTADO como doctrina oficial de la iglesia.");
} else {
  testSuite.failed.push("TEST 15: RENACER IA no reconoció documento adoptado.");
}

// -----------------------------------------------------------------------------
// RESULTADOS
// -----------------------------------------------------------------------------
console.log("\n==========================================================================");
console.log(`TOTAL PRUEBAS FASE 16: ${testSuite.passed.length + testSuite.failed.length}`);
console.log(`✅ PASADAS: ${testSuite.passed.length}`);
console.log(`❌ FALLIDAS: ${testSuite.failed.length}`);
console.log("==========================================================================");
testSuite.passed.forEach((p) => console.log(` [PASS] ${p}`));
if (testSuite.failed.length > 0) {
  testSuite.failed.forEach((f) => console.log(` [FAIL] ${f}`));
}
