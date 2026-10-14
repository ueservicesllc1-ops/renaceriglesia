// ============================================================================
// RENACER CHURCH MAESTRO — MODELO DE AUDITORÍA LEGAL Y ESTRUCTURAL (FASE 19)
// ============================================================================

export type ArticleLegalClassification =
  | "CONSTITUCION"
  | "CONSTITUCION_BYLAWS"
  | "ARTICLES_OF_INCORPORATION"
  | "MANUAL_REGLAMENTO"
  | "REVISION_LEGAL";

export interface LegalSourceCitation {
  agency: "STATE_OF_NEW_JERSEY" | "INTERNAL_REVENUE_SERVICE" | "LEGAL_PRECEDENT";
  title: string;
  codeOrUrl: string;
  consultedDate: string;
  summary: string;
}

export interface ConstitutionArticleAudit {
  articleNumber: number;
  chapterNumber: number;
  chapterRoman: string;
  chapterTitle: string;
  title: string;
  objective: string;
  subjectMatter: string;
  classification: ArticleLegalClassification;
  justification: string;
  relatedDocuments: string[];
  requiredReviewType: "LEGAL" | "CORPORATIVA" | "ESTATUTARIA" | "ECLESIAL" | "FINANCIERA" | "ADMINISTRATIVA" | "NINGUNA";
  decisionStatus: "DEFINIDO" | "PROPUESTO" | "PENDIENTE_DEFINIR";
  legalSources: LegalSourceCitation[];
  riskOrNotes?: string;
}

export interface ConstitutionAuditReport {
  documentNumber: "REN-DOC-002";
  title: string;
  totalArticlesAudited: number;
  classificationSummary: Record<ArticleLegalClassification, number>;
  articles: ConstitutionArticleAudit[];
  officialSourcesUsed: LegalSourceCitation[];
  pendingDecisionsByCategory: {
    spiritual: string[];
    ecclesial: string[];
    corporate: string[];
    legal: string[];
    administrative: string[];
    academic: string[];
  };
}
