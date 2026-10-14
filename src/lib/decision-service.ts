import { InstitutionalDecision, DecisionStatus, DecisionCategory } from "@/types/institutional-decision";
import { INITIAL_INSTITUTIONAL_DECISIONS } from "./decision-data";

export function getAllInstitutionalDecisions(): InstitutionalDecision[] {
  return INITIAL_INSTITUTIONAL_DECISIONS;
}

export function getDecisionByNumber(decisionNumber: string): InstitutionalDecision | undefined {
  return INITIAL_INSTITUTIONAL_DECISIONS.find((d) => d.decisionNumber === decisionNumber);
}

export function getDecisionById(decisionId: string): InstitutionalDecision | undefined {
  return INITIAL_INSTITUTIONAL_DECISIONS.find((d) => d.decisionId === decisionId || d.decisionNumber === decisionId);
}

export function getDecisionsByStatus(status: DecisionStatus): InstitutionalDecision[] {
  return INITIAL_INSTITUTIONAL_DECISIONS.filter((d) => d.decisionStatus === status);
}

export function getDecisionsByCategory(category: DecisionCategory): InstitutionalDecision[] {
  return INITIAL_INSTITUTIONAL_DECISIONS.filter((d) => d.category === category);
}

export function getDecisionsForDocument(docNumber: string): InstitutionalDecision[] {
  return INITIAL_INSTITUTIONAL_DECISIONS.filter((d) => d.affectedDocuments.includes(docNumber));
}

export function searchInstitutionalDecisions(query: string): InstitutionalDecision[] {
  const q = query.toLowerCase().trim();
  if (!q) return INITIAL_INSTITUTIONAL_DECISIONS;

  return INITIAL_INSTITUTIONAL_DECISIONS.filter((d) => {
    return (
      d.decisionNumber.toLowerCase().includes(q) ||
      d.title.toLowerCase().includes(q) ||
      d.question.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      (d.decision && d.decision.toLowerCase().includes(q)) ||
      (d.recommendation && d.recommendation.summary.toLowerCase().includes(q)) ||
      d.category.toLowerCase().includes(q) ||
      d.affectedDocuments.some((doc) => doc.toLowerCase().includes(q))
    );
  });
}
