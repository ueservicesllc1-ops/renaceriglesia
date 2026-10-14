import { z } from "zod";

export const InstitutionalDocumentCommentSchema = z.object({
  id: z.string().min(1),
  authorId: z.string().min(1),
  authorName: z.string().min(1),
  authorRole: z.string().min(1),
  content: z.string().min(1, "El comentario no puede estar vacío"),
  createdAt: z.string(),
  versionNumber: z.string(),
  statusAtComment: z.string(),
});

export const InstitutionalDocumentVersionSchema = z.object({
  id: z.string().min(1),
  versionNumber: z.string().regex(/^\d+\.\d+$/, "Formato de versión debe ser MAYOR.MENOR (ej. 1.0)"),
  title: z.string().min(3),
  content: z.string().min(1),
  authorId: z.string().min(1),
  authorName: z.string().min(1),
  authorRole: z.string().min(1),
  changeReason: z.string().min(3, "El motivo del cambio es obligatorio"),
  createdAt: z.string(),
  status: z.enum([
    "NO_ASIGNADO",
    "PLANIFICADO",
    "EN_REDACCION",
    "EN_REVISION",
    "CANDIDATO_ADOPCION",
    "ADOPTADO",
    "SUPERADO",
    "ARCHIVADO",
    "BORRADOR",
  ]),
});

export const CreateDocumentInputSchema = z.object({
  title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
  documentNumber: z
    .string()
    .regex(/^REN-DOC-\d{3}$/, "El código debe tener formato 'REN-DOC-XXX' (ej. REN-DOC-021)"),
  type: z.enum([
    "DOCTRINA",
    "CONSTITUCION",
    "BYLAWS",
    "GOBIERNO",
    "MEMBRESIA",
    "MINISTERIO",
    "ACADEMICO_DISCIPULOS",
    "ACADEMICO_LIDERES",
    "ACADEMICO_SEMINARIO",
    "CREDENCIAL",
    "ETICA_CONDUCTA",
    "ADMINISTRATIVO_FINANZAS",
    "CEREMONIA_ORDENANZA",
    "FORMACION_PASTORAL",
    "MINISTERIAL_INMIGRACION",
    "ARCHIVO_GENERAL",
    "LEGAL",
  ]),
  category: z.string().min(2, "La categoría es obligatoria"),
  description: z.string().min(5, "La descripción debe tener al menos 5 caracteres"),
  content: z.string().min(10, "El contenido inicial debe tener al menos 10 caracteres"),
  confidentiality: z.enum([
    "PUBLICO",
    "INTERNO_CONGREGACION",
    "CONFIDENCIAL_LIDERAZGO",
    "RESTRINGIDO_GOBIERNO",
  ]),
  documentTarget: z.enum([
    "ARTICLES",
    "CONSTITUCION",
    "BYLAWS",
    "DOCTRINA",
    "MANUAL",
    "REGLAMENTO",
    "SOP",
    "MULTICAPA",
    "PENDIENTE_DEFINIR",
  ]),
  legalState: z.enum([
    "NO_REQUIERE_REVISION_LEGAL",
    "REQUIERE_REVISION_LEGAL",
    "REVISION_LEGAL_EN_CURSO",
    "REVISION_LEGAL_COMPLETADA",
  ]),
  responsibleArea: z.string().min(2, "El área responsable es obligatoria"),
  initialVersion: z.string().regex(/^\d+\.\d+$/, "La versión debe tener formato MAYOR.MENOR (ej. 1.0)").default("1.0"),
});

export const UpdateDocumentInputSchema = z.object({
  docId: z.string().min(1),
  newTitle: z.string().min(3).optional(),
  newContent: z.string().min(1, "El contenido no puede estar vacío"),
  changeReason: z.string().min(3, "Debe especificar el motivo del cambio"),
  versionBump: z.enum(["minor", "major"]),
  newStatus: z.enum([
    "NO_ASIGNADO",
    "PLANIFICADO",
    "EN_REDACCION",
    "EN_REVISION",
    "CANDIDATO_ADOPCION",
    "ADOPTADO",
    "SUPERADO",
    "ARCHIVADO",
    "BORRADOR",
  ]).optional(),
});

export type InstitutionalDocumentComment = z.infer<typeof InstitutionalDocumentCommentSchema>;
export type InstitutionalDocumentVersion = z.infer<typeof InstitutionalDocumentVersionSchema>;
export type CreateDocumentInput = z.infer<typeof CreateDocumentInputSchema>;
export type UpdateDocumentInput = z.infer<typeof UpdateDocumentInputSchema>;
