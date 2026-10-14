import { z } from "zod";

export const LegalSourceCitationSchema = z.object({
  agency: z.enum(["STATE_OF_NEW_JERSEY", "INTERNAL_REVENUE_SERVICE", "LEGAL_PRECEDENT"]),
  title: z.string().min(3),
  codeOrUrl: z.string().min(3),
  consultedDate: z.string(),
  summary: z.string().min(5),
});

export const ConstitutionArticleAuditSchema = z.object({
  articleNumber: z.number().int().min(1).max(100),
  chapterNumber: z.number().int().min(1).max(30),
  chapterRoman: z.string().min(2),
  chapterTitle: z.string().min(3),
  title: z.string().min(3),
  objective: z.string().min(3),
  subjectMatter: z.string().min(3),
  classification: z.enum([
    "CONSTITUCION",
    "CONSTITUCION_BYLAWS",
    "ARTICLES_OF_INCORPORATION",
    "MANUAL_REGLAMENTO",
    "REVISION_LEGAL",
  ]),
  justification: z.string().min(10),
  relatedDocuments: z.array(z.string()).default([]),
  requiredReviewType: z.enum(["LEGAL", "CORPORATIVA", "ESTATUTARIA", "ECLESIAL", "FINANCIERA", "ADMINISTRATIVA", "NINGUNA"]),
  decisionStatus: z.enum(["DEFINIDO", "PROPUESTO", "PENDIENTE_DEFINIR"]),
  legalSources: z.array(LegalSourceCitationSchema).default([]),
  riskOrNotes: z.string().optional(),
});

export const ConstitutionAuditReportSchema = z.object({
  documentNumber: z.literal("REN-DOC-002"),
  title: z.string().min(3),
  totalArticlesAudited: z.number().int().min(48),
  classificationSummary: z.record(z.string(), z.number()),
  articles: z.array(ConstitutionArticleAuditSchema),
  officialSourcesUsed: z.array(LegalSourceCitationSchema),
  pendingDecisionsByCategory: z.object({
    spiritual: z.array(z.string()),
    ecclesial: z.array(z.string()),
    corporate: z.array(z.string()),
    legal: z.array(z.string()),
    administrative: z.array(z.string()),
    academic: z.array(z.string()),
  }),
});
