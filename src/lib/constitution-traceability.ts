import { FULL_CONSTITUTION_DRAFT } from "./constitution-full-draft";
import { MasterConstitutionDocument, ConstitutionArticle } from "@/types/constitution";

export interface ConstitutionTraceabilityEntry {
  articleNumber: number;
  chapterNumber: number;
  chapterTitle: string;
  romanNumeral: string;
  title: string;
  decisionIds: string[];
  decisionStatus: string;
  legalReviewRequired: boolean;
  legalReviewNotes?: string;
  hasFullText: boolean;
  textLength: number;
  dependencies: string[];
}

export function getFullConstitutionDocument(): MasterConstitutionDocument {
  return FULL_CONSTITUTION_DRAFT;
}

export function getAllConstitutionArticles(): (ConstitutionArticle & {
  chapterNumber: number;
  chapterTitle: string;
  romanNumeral: string;
})[] {
  return FULL_CONSTITUTION_DRAFT.chapters.flatMap((c) =>
    c.articles.map((a) => ({
      ...a,
      chapterNumber: c.chapterNumber,
      chapterTitle: c.title,
      romanNumeral: c.romanNumeral,
    }))
  );
}

export function getConstitutionTraceabilityMap(): ConstitutionTraceabilityEntry[] {
  const articles = getAllConstitutionArticles();
  return articles.map((art) => ({
    articleNumber: art.articleNumber,
    chapterNumber: art.chapterNumber,
    chapterTitle: art.chapterTitle,
    romanNumeral: art.romanNumeral,
    title: art.title,
    decisionIds: art.decisionIds || [],
    decisionStatus: art.decisionStatus,
    legalReviewRequired: !!art.legalReviewRequired,
    legalReviewNotes: art.legalReviewNotes,
    hasFullText: !!art.fullText && art.fullText.length > 50,
    textLength: art.fullText ? art.fullText.length : 0,
    dependencies: art.dependencies,
  }));
}
