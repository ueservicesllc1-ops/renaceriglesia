import { z } from "zod";

// Validaciones para Roles
export const RoleTypeSchema = z.enum([
  'ADMINISTRADOR',
  'PASTOR_FUNDADOR',
  'PASTOR',
  'CONSEJO_GOBIERNO',
  'CONSEJO_MINISTERIAL',
  'REVISOR_DOCTRINAL',
  'REVISOR_ACADEMICO',
  'REVISOR_LEGAL',
  'DOCENTE',
  'LIDER',
  'MIEMBRO',
  'ESTUDIANTE',
  'SOLO_LECTURA'
]);

// Validaciones para Estados de Documentos
export const DocumentStatusSchema = z.enum([
  'BORRADOR',
  'EN_REVISION',
  'CAMBIOS_SOLICITADOS',
  'APROBADO_INTERNAMENTE',
  'ADOPTADO',
  'ARCHIVADO'
]);

// Validaciones para Tipos de Documentos
export const DocumentTypeSchema = z.enum([
  'DOCTRINA',
  'CONSTITUCION',
  'BYLAWS',
  'GOBIERNO',
  'MEMBRESIA',
  'MINISTERIO',
  'ACADEMICO_DISCIPULOS',
  'ACADEMICO_LIDERES',
  'ACADEMICO_SEMINARIO',
  'CREDENCIAL',
  'ETICA_CONDUCTA',
  'ADMINISTRATIVO_FINANZAS',
  'CEREMONIA_ORDENANZA',
  'FORMACION_PASTORAL',
  'MINISTERIAL_INMIGRACION',
  'ARCHIVO_GENERAL',
  'LEGAL'
]);

// Esquema para Versión de Documento
export const DocumentVersionSchema = z.object({
  id: z.string(),
  versionNum: z.string().regex(/^\d+\.\d+$/, "El formato de versión debe ser MAYOR.MENOR (ej: 1.0, 1.1, 2.0)"),
  content: z.string().min(1, "El contenido no puede estar vacío"),
  authorId: z.string(),
  authorName: z.string(),
  changeNote: z.string().optional(),
  status: DocumentStatusSchema,
  createdAt: z.string(),
});

// Esquema para Comentario
export const DocumentCommentSchema = z.object({
  id: z.string(),
  authorId: z.string(),
  authorName: z.string(),
  authorRole: RoleTypeSchema,
  content: z.string().min(1, "El comentario no puede estar vacío"),
  createdAt: z.string(),
  parentId: z.string().optional(),
});

// Esquema para Revisión
export const DocumentReviewSchema = z.object({
  id: z.string(),
  reviewerId: z.string(),
  reviewerName: z.string(),
  reviewerRole: RoleTypeSchema,
  status: z.enum(['PENDIENTE', 'EN_CURSO', 'APROBADO', 'CAMBIOS_SOLICITADOS', 'RECHAZADO']),
  notes: z.string().optional(),
  completedAt: z.string().optional(),
  createdAt: z.string(),
});

// Esquema para Documento Principal
export const RenacerDocumentSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
  slug: z.string().min(3),
  docNumber: z.string().min(2),
  type: DocumentTypeSchema,
  category: z.string(),
  subcategory: z.string().optional(),
  status: DocumentStatusSchema,
  currentVersionNum: z.string(),
  content: z.string(),
  authorId: z.string(),
  authorName: z.string(),
  versions: z.array(DocumentVersionSchema).default([]),
  comments: z.array(DocumentCommentSchema).default([]),
  reviews: z.array(DocumentReviewSchema).default([]),
  references: z.array(z.any()).default([]),
  tags: z.array(z.string()).default([]),
  moduleKey: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

// Esquema para Importación JSON
export const ImportJsonMetaSchema = z.object({
  type: z.string().min(1),
  version: z.string().default("1.0"),
  date: z.string().optional(),
  author: z.string().optional(),
  description: z.string().optional(),
});

export const ImportJsonPayloadSchema = z.object({
  meta: ImportJsonMetaSchema,
  data: z.array(z.record(z.any())),
});
