// ============================================================================
// RENACER CHURCH MAESTRO — SISTEMA MAESTRO DE DOCUMENTACIÓN INSTITUCIONAL
// ============================================================================

export type DocumentHierarchyLevel =
  | "NIVEL_1_FUNDAMENTAL"
  | "NIVEL_2_CONSTITUCIONAL_CORPORATIVO"
  | "NIVEL_3_DOCTRINAL"
  | "NIVEL_4_MANUAL_INSTITUCIONAL"
  | "NIVEL_5_REGLAMENTO"
  | "NIVEL_6_PROGRAMA_ACADEMICO"
  | "NIVEL_7_PROCEDIMIENTO"
  | "NIVEL_8_FORMULARIO"
  | "NIVEL_9_CERTIFICADO_CREDENCIAL"
  | "NIVEL_10_REGISTRO_EXPEDIENTE";

export type DocumentCategory =
  | "FUNDAMENTAL"
  | "CORPORATIVO"
  | "DOCTRINA"
  | "GOBIERNO"
  | "MINISTERIAL"
  | "MEMBRESIA"
  | "DISCIPULADO"
  | "LIDERAZGO"
  | "ACADEMICO"
  | "FORMACION"
  | "FORMACION_MINISTERIAL"
  | "CREDENCIALES_MINISTERIALES"
  | "CREDENCIALES"
  | "FINANZAS"
  | "ADMINISTRACION"
  | "ADMINISTRACION_FINANZAS"
  | "PROTECCION"
  | "PROTECCION_SEGURIDAD_Y_SALVAGUARDAS"
  | "ETICA"
  | "ETICA_Y_CONDUCTA"
  | "CULTO"
  | "CEREMONIAS"
  | "CEREMONIAS_Y_ORDENANZAS"
  | "MISIONES"
  | "MISIONES_EVANGELISMO"
  | "INFANTIL"
  | "JUVENIL"
  | "INFANTIL_JUVENIL"
  | "EVANGELISMO"
  | "TECNOLOGIA"
  | "LEGAL"
  | "FORMULARIOS"
  | "CERTIFICADOS"
  | "REGISTROS"
  | "EXPEDIENTES";

export type MasterDocumentStatus =
  | "PLANIFICADO"
  | "EN_REDACCION"
  | "BORRADOR"
  | "EN_REVISION"
  | "CANDIDATO_APROBACION"
  | "APROBACION_PENDIENTE"
  | "ADOPTADO"
  | "SUPERADO"
  | "ARCHIVADO"
  | "RECHAZADO"
  | "DEVUELTO_REVISION";

export type ApprovalAuthorityStatus = "DEFINIDA" | "PROPUESTA" | "PENDIENTE_DEFINIR";

export type ApprovalAuthorityType =
  | "PASTOR_FUNDADOR"
  | "CONSEJO_GOBIERNO"
  | "CONSEJO_MINISTERIAL"
  | "DIRECCION_ACADEMICA"
  | "ADMINISTRACION_GENERAL"
  | "COMITE_ETICA_PROTECCION";

export type SignatureRequirementType =
  | "NO_SIGNATURE_REQUIRED"
  | "SINGLE_SIGNATURE"
  | "MULTIPLE_SIGNATURES"
  | "INSTITUTIONAL_RESOLUTION"
  | "DOCTRINAL_ADOPTION";

export type ReviewType =
  | "REVISION_BIBLICA"
  | "REVISION_DOCTRINAL"
  | "REVISION_ACADEMICA"
  | "REVISION_LEGAL"
  | "REVISION_ADMINISTRATIVA"
  | "REVISION_FINANCIERA"
  | "REVISION_PROTECCION";

export type DocumentRelationType =
  | "PADRE"
  | "HIJO"
  | "RELACIONADO"
  | "DERIVA_DE"
  | "COMPLEMENTA"
  | "SUSTITUYE";

export interface DocumentRelation {
  targetDocumentNumber: string;
  targetTitle: string;
  relationType: DocumentRelationType;
  description?: string;
}

export interface MasterCatalogDocument {
  documentId: string;
  documentNumber: string; // ej: 'REN-DOC-001'
  title: string;
  shortTitle: string;
  hierarchyLevel: DocumentHierarchyLevel;
  category: DocumentCategory;
  subcategory: string;
  description: string;
  owner: string; // Área responsable (ej: 'Pastor Fundador', 'Seminario')
  author: string;
  responsibleArea: string;
  status: MasterDocumentStatus;
  version: string;
  language: "es" | "en";
  confidentiality: "PUBLICO" | "INTERNO_CONGREGACION" | "CONFIDENCIAL_LIDERAZGO" | "RESTRINGIDO_GOBIERNO";
  
  approvalAuthority?: ApprovalAuthorityType;
  proposedApprovalAuthority?: ApprovalAuthorityType;
  approvalAuthorityStatus: ApprovalAuthorityStatus;
  
  signatureRequirement: SignatureRequirementType;
  requiredReviews: ReviewType[];
  
  // Relaciones documentales
  parentDocument?: string;
  relatedDocuments: DocumentRelation[];
  requiredFor?: string[];
  
  // Ciclo de vida y vigencia
  createdAt: string;
  updatedAt: string;
  adoptedAt?: string;
  effectiveDate?: string;
  supersedes?: string;
  supersededBy?: string;
  reviewFrequencyMonths: number;
  nextReviewDate?: string;
  
  // Integridad
  documentDigestSha256?: string;
  tags: string[];
}
