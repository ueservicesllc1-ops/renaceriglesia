// ============================================================================
// RENACER CHURCH MAESTRO — MODELO DE EXPEDIENTE DE ADOPCIÓN DOCTRINAL
// ============================================================================

export type AdoptionStatus =
  | "BORRADOR"
  | "EN_REVISION"
  | "CANDIDATO_ADOPCION"
  | "APROBACION_PENDIENTE"
  | "ADOPTADO"
  | "SUPERADO"
  | "RECHAZADO"
  | "DEVUELTO_REVISION";

export type AdoptionDecision = "PENDIENTE" | "APROBADO" | "RECHAZADO" | "DEVUELTO_REVISION";

export interface DigitalSignature {
  signerId: string;
  signerName: string;
  signerRole: string; // 'PASTOR_FUNDADOR' | 'SECRETARIO_CERTIFICADOR'
  signedAt: string; // ISO 8601
  signatureDigest?: string;
  declaration: string;
}

export interface DoctrinalAdoptionRecord {
  adoptionRecordId: string;
  documentId: string;
  candidateVersion: string;
  documentTitle: string;
  organization: string;
  submittedBy: string;
  submittedAt: string;
  
  // Referencias a las fases previas de auditoría
  biblicalReviewRef: {
    status: "COMPLETADA" | "PENDIENTE";
    completedAt?: string;
    articlesEvaluated: number;
    summary: string;
  };
  doctrinalDecisionsRef: {
    status: "COMPLETADA" | "PENDIENTE";
    ratifiedDecisionsCount: number;
    summary: string;
  };
  editorialReviewRef: {
    status: "COMPLETADA" | "PENDIENTE";
    correctionsAppliedCount: number;
    summary: string;
  };
  founderRatificationRef: {
    isRatified: boolean;
    ratifiedAt?: string;
  };
  institutionalReviewRef?: {
    isReviewed: boolean;
    reviewedBy?: string;
    notes?: string;
  };

  // Datos solemnes de adopción
  adoptionAuthority: "PASTOR_FUNDADOR";
  adoptionDecision: AdoptionDecision;
  resolutionNumber?: string;
  effectiveDate?: string;
  
  // Firmas obligatorias
  founderSignature?: DigitalSignature;
  certifyingSignature?: DigitalSignature;
  
  // Publicación técnica
  publicationExecutor?: string;
  publicationStatus: "PENDIENTE" | "PUBLICADO" | "FALLIDO";
  resultingStatus: AdoptionStatus;
  
  // Integridad criptográfica
  documentDigestSha256: string;
  
  // Trazabilidad
  auditEventIds: string[];
  createdAt: string;
  updatedAt: string;
}
