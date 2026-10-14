// ============================================================================
// RENACER CHURCH MAESTRO — MODELO DEL MANUAL DE GOBIERNO (REN-DOC-004)
// ============================================================================

export type ManualDecisionStatus = "DEFINIDO" | "PROPUESTO" | "PENDIENTE_DEFINIR";

export interface ManualSection {
  sectionNumber: string; // ej. "1.1", "2.3"
  title: string;
  summary: string;
  content: string;
  practicalProtocol?: string;
  decisionIds?: string[];
  dependencies?: string[];
  legalReviewRequired?: boolean;
  legalReviewNotes?: string;
  pendingDefinitionNotes?: string;
}

export interface ManualTitle {
  titleNumber: number;
  romanNumeral: string;
  title: string;
  summary: string;
  sections: ManualSection[];
}

export interface ResponsibilityMatrixRow {
  materia: string;
  pastorFundador: string;
  consejoGobierno: string;
  consejoMinisterial: string;
  asambleaGeneral: string;
  fundamento: string;
}

export interface DecisionWorkflow {
  id: string;
  name: string;
  description: string;
  steps: string[];
  decisionLevel: "ORDINARIA" | "EXTRAORDINARIA" | "MINISTERIAL" | "CONSTITUCIONAL";
}

export interface MasterGovernmentManualDocument {
  documentNumber: "REN-DOC-004";
  title: string;
  subtitle: string;
  organization: string;
  publicName: string;
  founder: string;
  version: string;
  status: "PLANIFICADO" | "BORRADOR" | "EN_REDACCION" | "EN_REVISION" | "ADOPTADO";
  hierarchyLevel: "NIVEL_4_MANUAL_INSTITUCIONAL";
  legalNotice: string;
  preamble: {
    title: string;
    content: string;
  };
  responsibilityMatrix: ResponsibilityMatrixRow[];
  decisionWorkflows: DecisionWorkflow[];
  titles: ManualTitle[];
}
