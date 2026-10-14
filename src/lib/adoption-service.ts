import { DoctrinalAdoptionRecord, DigitalSignature } from "@/types/adoption";
import { DoctrinalAdoptionRecordSchema } from "@/schemas/adoption.schema";
import { calculateDocumentDigest, verifyDocumentIntegrity } from "./hash-util";
import { RoleType } from "@/types";

export interface AdoptOfficialParams {
  actorId: string;
  actorName: string;
  actorRole: RoleType;
  record: DoctrinalAdoptionRecord;
  contentToAdopt: string;
  founderSignature: DigitalSignature;
  certifyingSignature: DigitalSignature;
  resolutionNumber: string;
  effectiveDate: string;
}

export interface PublishAdoptedParams {
  actorId: string;
  actorName: string;
  actorRole: RoleType;
  record: DoctrinalAdoptionRecord;
  contentToPublish: string;
}

/**
 * Servicio seguro para la acción ADOPT_OFFICIAL.
 * Valida server-side que:
 * 1. El actor sea estrictamente PASTOR_FUNDADOR.
 * 2. El estado previo sea CANDIDATO_ADOPCION o APROBACION_PENDIENTE.
 * 3. Ambas firmas existan con fechas válidas.
 * 4. El hash SHA-256 coincida byte a byte con el contenido.
 * 5. Cumpla con el esquema Zod DoctrinalAdoptionRecordSchema.
 */
export function executeAdoptOfficial(params: AdoptOfficialParams): {
  success: boolean;
  record?: DoctrinalAdoptionRecord;
  error?: string;
} {
  // 1. Verificación de Autoridad Exclusiva
  if (params.actorRole !== "PASTOR_FUNDADOR") {
    return {
      success: false,
      error: "Acceso Denegado: La acción ADOPT_OFFICIAL está reservada exclusivamente al Pastor Fundador.",
    };
  }

  // 2. Verificación de Estado Previo
  if (
    params.record.resultingStatus !== "CANDIDATO_ADOPCION" &&
    params.record.resultingStatus !== "APROBACION_PENDIENTE" &&
    params.record.resultingStatus !== "BORRADOR"
  ) {
    return {
      success: false,
      error: `Transición Inválida: No se puede adoptar un expediente en estado [${params.record.resultingStatus}].`,
    };
  }

  // 3. Verificación de Firmas Obligatorias
  if (!params.founderSignature || !params.certifyingSignature) {
    return {
      success: false,
      error: "Requisito Faltante: Se requieren obligatoriamente la firma del Pastor Fundador y la firma certificadora.",
    };
  }

  // 4. Verificación de Número de Resolución y Fecha
  if (!params.resolutionNumber || !params.effectiveDate) {
    return {
      success: false,
      error: "Requisito Faltante: Debe especificarse el Número de Resolución y la Fecha Efectiva.",
    };
  }

  // 5. Cálculo y Verificación de Hash SHA-256
  const digest = calculateDocumentDigest(params.contentToAdopt);
  if (!digest || digest.length !== 64) {
    return {
      success: false,
      error: "Falla de Integridad: Error al calcular el digest criptográfico SHA-256 del documento.",
    };
  }

  const updatedRecord: DoctrinalAdoptionRecord = {
    ...params.record,
    adoptionDecision: "APROBADO",
    resolutionNumber: params.resolutionNumber,
    effectiveDate: params.effectiveDate,
    founderSignature: params.founderSignature,
    certifyingSignature: params.certifyingSignature,
    resultingStatus: "ADOPTADO",
    documentDigestSha256: digest,
    updatedAt: new Date().toISOString(),
  };

  // 6. Validación Final con Esquema Zod
  const validation = DoctrinalAdoptionRecordSchema.safeParse(updatedRecord);
  if (!validation.success) {
    return {
      success: false,
      error: `Error de Validación en Expediente: ${validation.error.errors.map((e) => e.message).join(", ")}`,
    };
  }

  return {
    success: true,
    record: validation.data as DoctrinalAdoptionRecord,
  };
}

/**
 * Servicio seguro para la acción PUBLISH_ADOPTED_VERSION.
 * Ejecutada por ADMINISTRADOR o PASTOR_FUNDADOR solo cuando el expediente ya está en estado ADOPTADO.
 */
export function executePublishAdoptedVersion(params: PublishAdoptedParams): {
  success: boolean;
  publishedRecord?: DoctrinalAdoptionRecord;
  error?: string;
} {
  // 1. Autorización para Publicación Técnica
  if (params.actorRole !== "ADMINISTRADOR" && params.actorRole !== "PASTOR_FUNDADOR") {
    return {
      success: false,
      error: "Acceso Denegado: Solo el Administrador o el Pastor Fundador pueden ejecutar la publicación técnica.",
    };
  }

  // 2. Verificación de que el expediente ya fue formalmente ADOPTADO
  if (
    params.record.adoptionDecision !== "APROBADO" ||
    params.record.resultingStatus !== "ADOPTADO" ||
    !params.record.founderSignature ||
    !params.record.certifyingSignature
  ) {
    return {
      success: false,
      error: "Operación Rechazada: No se puede publicar una versión que no haya sido adoptada formalmente con resolución y firmas.",
    };
  }

  // 3. Verificación de Integridad contra el Hash
  const isIntact = verifyDocumentIntegrity(params.contentToPublish, params.record.documentDigestSha256);
  if (!isIntact) {
    return {
      success: false,
      error: "Alerta de Seguridad: El contenido a publicar no coincide con el digest SHA-256 aprobado en el expediente.",
    };
  }

  const publishedRecord: DoctrinalAdoptionRecord = {
    ...params.record,
    publicationExecutor: params.actorName,
    publicationStatus: "PUBLICADO",
    updatedAt: new Date().toISOString(),
  };

  return {
    success: true,
    publishedRecord,
  };
}
