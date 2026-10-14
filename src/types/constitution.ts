// ============================================================================
// RENACER CHURCH MAESTRO — MODELO DE ARQUITECTURA CONSTITUCIONAL (REN-DOC-002)
// ============================================================================

export type ArticleDecisionStatus = "DEFINIDO" | "PROPUESTO" | "PENDIENTE_DEFINIR";

export interface ConstitutionArticle {
  articleNumber: number;
  title: string;
  objective: string;
  expectedContent: string;
  fullText?: string;
  decisionStatus: ArticleDecisionStatus;
  decisionNotes?: string;
  decisionIds?: string[];
  legalReviewRequired?: boolean;
  legalReviewNotes?: string;
  pendingDefinitionNotes?: string;
  dependencies: string[]; // Códigos de documentos dependientes (ej: 'REN-DOC-001', 'REN-DOC-003')
  relatedRegulations?: string[];
}

export interface ConstitutionChapter {
  chapterNumber: number;
  romanNumeral: string;
  title: string;
  summary: string;
  articles: ConstitutionArticle[];
}

export interface MasterConstitutionDocument {
  documentNumber: "REN-DOC-002";
  title: string;
  organization: string;
  publicName: string;
  tagline: string;
  founder: string;
  version: string;
  status: "PLANIFICADO" | "BORRADOR" | "EN_REDACCION" | "EN_REVISION" | "ADOPTADO";
  preamble: {
    title: string;
    contentSummary: string;
    fullText?: string;
    decisionStatus: ArticleDecisionStatus;
  };
  chapters: ConstitutionChapter[];
  legalNotice: string;
  createdAt?: string;
  updatedAt?: string;
}
