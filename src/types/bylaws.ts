// ============================================================================
// RENACER CHURCH MAESTRO — MODELO DE BYLAWS CORPORATIVOS (REN-DOC-003)
// ============================================================================

export type BylawDecisionStatus = "DEFINIDO" | "PROPUESTO" | "PENDIENTE_DEFINIR";

export interface BylawArticle {
  articleNumber: number;
  title: string;
  objective: string;
  expectedContent: string;
  fullText: string;
  decisionStatus: BylawDecisionStatus;
  decisionNotes?: string;
  decisionIds?: string[];
  legalReviewRequired?: boolean;
  legalReviewNotes?: string;
  pendingDefinitionNotes?: string;
  dependencies: string[]; // ['REN-DOC-001', 'REN-DOC-002', etc.]
}

export interface BylawTitle {
  titleNumber: number;
  romanNumeral: string;
  title: string;
  summary: string;
  articles: BylawArticle[];
}

export interface MasterBylawsDocument {
  documentNumber: "REN-DOC-003";
  title: string;
  organization: string;
  publicName: string;
  tagline: string;
  founder: string;
  version: string;
  status: "PLANIFICADO" | "BORRADOR" | "EN_REDACCION" | "EN_REVISION" | "ADOPTADO";
  legalNotice: string;
  preamble: {
    title: string;
    contentSummary: string;
    decisionStatus: BylawDecisionStatus;
    fullText: string;
  };
  titles: BylawTitle[];
}
