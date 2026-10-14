import { z } from "zod";

export const DigitalSignatureSchema = z.object({
  signerId: z.string().min(1, "El ID del firmante es obligatorio"),
  signerName: z.string().min(2, "El nombre del firmante es obligatorio"),
  signerRole: z.string().min(2, "El rol del firmante es obligatorio"),
  signedAt: z.string().datetime({ message: "La fecha de firma debe ser una fecha ISO válida" }),
  signatureDigest: z.string().optional(),
  declaration: z.string().min(5, "La declaración formal de firma es obligatoria"),
});

export const DoctrinalAdoptionRecordSchema = z.object({
  adoptionRecordId: z.string().min(3, "El ID del expediente es obligatorio"),
  documentId: z.string().min(2, "El ID del documento es obligatorio"),
  candidateVersion: z.string().regex(/^\d+\.\d+$/, "La versión candidata debe ser formato MAYOR.MENOR (ej: '1.0')"),
  documentTitle: z.string().min(3, "El título del documento es obligatorio"),
  organization: z.string().min(2, "El nombre de la organización es obligatorio"),
  submittedBy: z.string().min(2, "El nombre del solicitante es obligatorio"),
  submittedAt: z.string().datetime({ message: "La fecha de envío debe ser ISO válida" }),

  biblicalReviewRef: z.object({
    status: z.enum(["COMPLETADA", "PENDIENTE"]),
    completedAt: z.string().optional(),
    articlesEvaluated: z.number().int().min(1),
    summary: z.string().min(3),
  }),

  doctrinalDecisionsRef: z.object({
    status: z.enum(["COMPLETADA", "PENDIENTE"]),
    ratifiedDecisionsCount: z.number().int().min(0),
    summary: z.string().min(3),
  }),

  editorialReviewRef: z.object({
    status: z.enum(["COMPLETADA", "PENDIENTE"]),
    correctionsAppliedCount: z.number().int().min(0),
    summary: z.string().min(3),
  }),

  founderRatificationRef: z.object({
    isRatified: z.boolean(),
    ratifiedAt: z.string().optional(),
  }),

  institutionalReviewRef: z
    .object({
      isReviewed: z.boolean(),
      reviewedBy: z.string().optional(),
      notes: z.string().optional(),
    })
    .optional(),

  adoptionAuthority: z.literal("PASTOR_FUNDADOR", {
    errorMap: () => ({ message: "La autoridad de adopción debe ser exclusivamente PASTOR_FUNDADOR" }),
  }),

  adoptionDecision: z.enum(["PENDIENTE", "APROBADO", "RECHAZADO", "DEVUELTO_REVISION"]),
  resolutionNumber: z.string().optional(),
  effectiveDate: z.string().optional(),

  founderSignature: DigitalSignatureSchema.optional(),
  certifyingSignature: DigitalSignatureSchema.optional(),

  publicationExecutor: z.string().optional(),
  publicationStatus: z.enum(["PENDIENTE", "PUBLICADO", "FALLIDO"]),
  resultingStatus: z.enum([
    "BORRADOR",
    "EN_REVISION",
    "CANDIDATO_ADOPCION",
    "APROBACION_PENDIENTE",
    "ADOPTADO",
    "SUPERADO",
    "RECHAZADO",
    "DEVUELTO_REVISION",
  ]),

  documentDigestSha256: z
    .string()
    .length(64, "El digest criptográfico SHA-256 debe contener exactamente 64 caracteres hexadecimales"),

  auditEventIds: z.array(z.string()).default([]),
  createdAt: z.string(),
  updatedAt: z.string(),
}).refine(
  (data) => {
    // Si el estado resultante es ADOPTADO, exigir decisión APROBADO, firmas, fecha y resolución
    if (data.resultingStatus === "ADOPTADO") {
      return (
        data.adoptionDecision === "APROBADO" &&
        data.founderSignature !== undefined &&
        data.certifyingSignature !== undefined &&
        data.resolutionNumber !== undefined &&
        data.effectiveDate !== undefined
      );
    }
    return true;
  },
  {
    message:
      "Para que el expediente quede en estado ADOPTADO, se requiere obligatoriamente: Decisión APROBADO, Firma del Pastor Fundador, Firma Certificadora, Número de Resolución y Fecha Efectiva.",
    path: ["resultingStatus"],
  }
);
