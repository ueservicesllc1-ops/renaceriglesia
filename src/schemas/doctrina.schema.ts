import { z } from "zod";

/**
 * Esquema Zod de validación estricta para import-queue/doctrina.json
 */
export const DoctrinaItemSchema = z.object({
  title: z.string().min(3, "El título del artículo doctrinal debe tener al menos 3 caracteres"),
  slug: z.string().min(3, "El slug debe ser una cadena válida (ej: 'salvacion', 'bautismo')").optional(),
  docNumber: z.string().min(3, "El número de documento es obligatorio (ej: 'REN-DOC-001')"),
  category: z.string().default("Declaración de Fe y Doctrina"),
  subcategory: z.string().optional(),
  status: z.enum(["BORRADOR", "EN_REVISION", "APROBADO_INTERNAMENTE", "ADOPTADO"]).default("BORRADOR"),
  content: z.string().min(10, "El contenido doctrinal debe contener el texto del artículo"),
  biblicalReferences: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
});

export const DoctrinaMetaSchema = z.object({
  type: z.literal("doctrina"),
  documentType: z.literal("DOCTRINA").optional(),
  title: z.string().min(3, "El título de la declaración doctrinal es obligatorio"),
  organization: z.string().optional(),
  publicName: z.string().optional(),
  legalName: z.string().optional(),
  tagline: z.string().optional(),
  taglineEnglish: z.string().optional(),
  nature: z.string().optional(),
  author: z.string().min(3, "El autor del documento es obligatorio"),
  version: z.string().regex(/^\d+\.\d+$/, "La versión de metadatos debe ser formato MAYOR.MENOR (ej: '1.0')"),
  status: z.enum(["BORRADOR", "EN_REVISION", "APROBADO_INTERNAMENTE", "ADOPTADO"]).default("BORRADOR"),
  language: z.string().default("es"),
  date: z.string().optional(),
  createdAt: z.string().optional(),
  description: z.string().optional(),
}).passthrough();

export const DoctrinaImportSchema = z.object({
  meta: DoctrinaMetaSchema,
  data: z.array(DoctrinaItemSchema).length(20, "La Declaración de Fe debe contener exactamente los 20 artículos doctrinales definidos"),
});

export type DoctrinaImportPayload = z.infer<typeof DoctrinaImportSchema>;
