// ============================================================================
// RENACER CHURCH MAESTRO — REGISTRO MAESTRO DE DECISIONES INSTITUCIONALES (FASE 25A)
// ============================================================================

export type DecisionStatus =
  | "DEFINIDA"
  | "PENDIENTE"
  | "NO_RESUELTA"
  | "DECIDIDA"
  | "EN_ANALISIS"
  | "PROPUESTA"
  | "RECHAZADA"
  | "SUPERADA"
  | "REQUIERE_REVISION_LEGAL";

export type DecisionState = "DEFINIDA" | "PENDIENTE" | "NO_RESUELTA";

export type DocumentState =
  | "NO_ASIGNADO"
  | "PLANIFICADO"
  | "EN_REDACCION"
  | "EN_REVISION"
  | "CANDIDATO_ADOPCION"
  | "ADOPTADO"
  | "SUPERADO"
  | "ARCHIVADO";

export type LegalState =
  | "NO_REQUIERE_REVISION_LEGAL"
  | "REQUIERE_REVISION_LEGAL"
  | "REVISION_LEGAL_EN_CURSO"
  | "REVISION_LEGAL_COMPLETADA";

export type DocumentTarget =
  | "ARTICLES"
  | "CONSTITUCION"
  | "BYLAWS"
  | "DOCTRINA"
  | "MANUAL"
  | "REGLAMENTO"
  | "SOP"
  | "MULTICAPA"
  | "PENDIENTE_DEFINIR";

export type DecisionCategory =
  | "DOCTRINAL"
  | "ECLESIOLOGICA"
  | "GOBIERNO"
  | "CORPORATIVA"
  | "LEGAL"
  | "FINANCIERA"
  | "MINISTERIAL"
  | "ACADEMICA"
  | "ADMINISTRATIVA"
  | "MEMBRESIA"
  | "DISCIPULADO"
  | "PROTECCION"
  | "CULTO"
  | "MISIONES"
  | "TECNOLOGIA"
  | "RIESGOS"
  | "SEGURIDAD";

export type DecisionAuthorityStatus = "DEFINIDA" | "PROPUESTA" | "PENDIENTE";

export interface DecisionOption {
  optionKey: string;
  title: string;
  description: string;
  pros?: string[];
  cons?: string[];
  isRecommended?: boolean;
}

export interface InstitutionalDecision {
  decisionId: string;
  decisionNumber: string; // ej: 'DEC-DEF-001', 'DEC-PEND-001', 'DEC-DEF-177'
  title: string;
  question: string;
  category: DecisionCategory;
  description: string;
  options?: DecisionOption[];
  recommendation?: {
    summary: string;
    source: "ANALISIS_BIBLICO" | "ANALISIS_INSTITUCIONAL" | "ANALISIS_ACADEMICO" | "ANALISIS_LEGAL" | "ANALISIS_ADMINISTRATIVO";
    justification: string;
  };
  decision?: string; // Texto de la decisión institucional
  decisionStatus: DecisionStatus; // Compatible con modelo histórico
  decisionState: DecisionState; // A. Estado de la decisión interna
  documentState: DocumentState; // B. Estado documental de incorporación
  legalState: LegalState; // C. Estado de revisión legal
  documentTarget: DocumentTarget; // D. Destino documental principal
  decisionAuthority: string; // ej: 'PASTOR_FUNDADOR', 'CONSEJO_GOBIERNO'
  authorityStatus: DecisionAuthorityStatus;
  decidedBy?: string;
  decidedAt?: string;
  rationale?: string;
  biblicalBasis?: string[];
  legalBasis?: string[];
  affectedDocuments: string[];
  dependencies?: string[];
  supersedesDecision?: string;
  supersededBy?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}
