// ============================================================================
// RENACER CHURCH MAESTRO — DEFINICIÓN DE TIPOS GLOBALES
// ============================================================================

export type RoleType =
  | 'ADMINISTRADOR'
  | 'PASTOR_FUNDADOR'
  | 'PASTOR'
  | 'CONSEJO_GOBIERNO'
  | 'CONSEJO_MINISTERIAL'
  | 'REVISOR_DOCTRINAL'
  | 'REVISOR_ACADEMICO'
  | 'REVISOR_LEGAL'
  | 'DOCENTE'
  | 'LIDER'
  | 'MIEMBRO'
  | 'ESTUDIANTE'
  | 'SOLO_LECTURA';

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  role: RoleType;
  photoURL?: string;
  phoneNumber?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type DocumentType =
  | 'DOCTRINA'
  | 'CONSTITUCION'
  | 'BYLAWS'
  | 'GOBIERNO'
  | 'MEMBRESIA'
  | 'MINISTERIO'
  | 'ACADEMICO_DISCIPULOS'
  | 'ACADEMICO_LIDERES'
  | 'ACADEMICO_SEMINARIO'
  | 'CREDENCIAL'
  | 'ETICA_CONDUCTA'
  | 'ADMINISTRATIVO_FINANZAS'
  | 'CEREMONIA_ORDENANZA'
  | 'FORMACION_PASTORAL'
  | 'MINISTERIAL_INMIGRACION'
  | 'ARCHIVO_GENERAL'
  | 'LEGAL';

export type DocumentStatus =
  | 'BORRADOR'
  | 'EN_REVISION'
  | 'CAMBIOS_SOLICITADOS'
  | 'APROBADO_INTERNAMENTE'
  | 'ADOPTADO'
  | 'ARCHIVADO';

export interface DocumentVersion {
  id: string;
  versionNum: string; // "1.0", "1.1", "2.0"
  content: string;
  authorId: string;
  authorName: string;
  changeNote?: string;
  status: DocumentStatus;
  createdAt: string;
}

export interface DocumentComment {
  id: string;
  authorId: string;
  authorName: string;
  authorRole: RoleType;
  content: string;
  createdAt: string;
  parentId?: string; // Threading
}

export interface DocumentReview {
  id: string;
  reviewerId: string;
  reviewerName: string;
  reviewerRole: RoleType;
  status: 'PENDIENTE' | 'EN_CURSO' | 'APROBADO' | 'CAMBIOS_SOLICITADOS' | 'RECHAZADO';
  notes?: string;
  completedAt?: string;
  createdAt: string;
}

export interface DocumentCrossReference {
  id: string;
  targetDocId: string;
  targetDocTitle: string;
  relationType: 'BASADO_EN' | 'VER_TAMBIEN' | 'MODIFICA' | 'REGLAMENTA';
  notes?: string;
}

export interface RenacerDocument {
  id: string;
  title: string;
  slug: string;
  docNumber: string; // e.g. "DOC-DOC-001", "ART-005"
  type: DocumentType;
  category: string;
  subcategory?: string;
  status: DocumentStatus;
  currentVersionNum: string;
  content: string; // Markdown / Text
  authorId: string;
  authorName: string;
  versions: DocumentVersion[];
  comments: DocumentComment[];
  reviews: DocumentReview[];
  references: DocumentCrossReference[];
  tags: string[];
  moduleKey: string; // e.g. "doctrina", "seminario", "constitucion"
  academicMetadata?: import("./academic").AcademicMetadata;
  createdAt: string;
  updatedAt: string;
}

export * from "./academic";
export * from "./adoption";
export * from "./catalog";
export * from "./constitution";
export * from "./constitution-audit";
export * from "./institutional-decision";

// ----------------------------------------------------------------------------
// AUDITORÍA
// ----------------------------------------------------------------------------
export type AuditActionType =
  | 'AUTH_LOGIN'
  | 'AUTH_LOGOUT'
  | 'AUTH_LOGIN_FAILED'
  | 'DOC_CREATE'
  | 'DOC_UPDATE'
  | 'DOC_STATUS_CHANGE'
  | 'DOC_ARCHIVE'
  | 'DOC_DELETE'
  | 'REVIEW_REQUESTED'
  | 'REVIEW_COMPLETED'
  | 'COMMENT_ADDED'
  | 'JSON_IMPORT_PREVIEW'
  | 'JSON_IMPORT_APPROVED'
  | 'LEGAL_CHECKLIST_UPDATE'
  | 'USER_ROLE_CHANGED'
  | 'PERMISSION_DENIED'
  | 'DOCTRINE_ADOPTION_STARTED'
  | 'DOCTRINE_ADOPTION_REVIEWED'
  | 'DOCTRINE_ADOPTION_APPROVED'
  | 'DOCTRINE_VERSION_PUBLISHED'
  | 'DOCTRINE_VERSION_SUPERSEDED'
  | 'DOCTRINE_ADOPTION_RETURNED'
  | 'DOCTRINE_ADOPTION_REJECTED'
  | 'DOCUMENT_CREATED'
  | 'DOCUMENT_EDITED'
  | 'DOCUMENT_SUBMITTED_REVIEW'
  | 'DOCUMENT_REVIEWED'
  | 'DOCUMENT_RETURNED'
  | 'DOCUMENT_APPROVED'
  | 'DOCUMENT_REJECTED'
  | 'DOCUMENT_ADOPTED'
  | 'DOCUMENT_PUBLISHED'
  | 'DOCUMENT_SUPERSEDED'
  | 'DOCUMENT_ARCHIVED'
  | 'DOCUMENT_EXPORTED_PDF'
  | 'DECISION_CREATED'
  | 'DECISION_ANALYSIS_STARTED'
  | 'DECISION_PROPOSED'
  | 'DECISION_DECIDED'
  | 'DECISION_REJECTED'
  | 'DECISION_SUPERSEDED'
  | 'ADMIN_BOOTSTRAP_STARTED'
  | 'ADMIN_CREATED'
  | 'ADMIN_BOOTSTRAP_CLOSED'
  | 'DOCUMENT_IMPORTED'
  | 'CONSOLIDACION_DECISIONES_INSTITUCIONALES'
  | 'FASE_24A_SEMANTIC_STATUS_CORRECTION'
  | 'FASE_25A_FOUNDER_INCAPACITY_CONSOLIDATION'
  | 'FASE_25A_CONTINUATION_CONSOLIDATION';

export interface AuditLogEntry {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userRole: RoleType;
  action: AuditActionType;
  resource: string;
  resourceId?: string;
  detail: string; // Human-readable detail or JSON string
  ipAddress?: string;
  createdAt: string;
}

// ----------------------------------------------------------------------------
// CENTRO LEGAL
// ----------------------------------------------------------------------------
export type LegalProcessStatus =
  | 'PENDIENTE'
  | 'EN_PROGRESO'
  | 'COMPLETADO'
  | 'EN_ESPERA'
  | 'CANCELADO';

export interface LegalChecklistItem {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  completedAt?: string;
  completedBy?: string;
  evidenceUrl?: string;
  order: number;
}

export interface LegalRequiredDoc {
  id: string;
  title: string;
  description?: string;
  isRequired: boolean;
  fileUrl?: string;
  status: 'PENDIENTE' | 'SUBIDO' | 'VERIFICADO';
}

export interface LegalProcess {
  id: string;
  code: string; // "CONST-NJ", "IRS-501C3", "EIN", "NJ-REG"
  title: string;
  category: 'CONSTITUCION' | 'IRS' | 'NEW_JERSEY' | 'REGISTROS' | 'IMPUESTOS' | 'SEGUROS' | 'PERMISOS';
  description: string;
  status: LegalProcessStatus;
  responsible?: string;
  dueDate?: string;
  notes?: string;
  officialSourceUrl?: string;
  checklist: LegalChecklistItem[];
  documents: LegalRequiredDoc[];
  updatedAt: string;
}

// ----------------------------------------------------------------------------
// IMPORTACIÓN JSON
// ----------------------------------------------------------------------------
export type ImportStatus =
  | 'PENDIENTE'
  | 'VALIDANDO'
  | 'VALIDO'
  | 'INVALIDO'
  | 'PREVISUALIZADO'
  | 'APROBADO'
  | 'PUBLICADO'
  | 'FALLIDO';

export interface JsonImportQueueItem {
  id: string;
  filename: string;
  type: string;
  itemCount: number;
  status: ImportStatus;
  validationErrors: string[];
  rawContent: string;
  createdAt: string;
  approvedBy?: string;
  approvedAt?: string;
  publishedAt?: string;
}

// ----------------------------------------------------------------------------
// RENACER IA
// ----------------------------------------------------------------------------
export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  sources?: {
    docId: string;
    docTitle: string;
    docNumber: string;
    version: string;
    status: DocumentStatus | string;
    quote: string;
    isExternal?: boolean;
    href?: string;
    externalSourceUrl?: string;
  }[];
}
