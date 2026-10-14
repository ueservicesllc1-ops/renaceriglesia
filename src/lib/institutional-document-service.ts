export type {
  InstitutionalDocumentVersion,
  InstitutionalDocumentComment,
  CreateDocumentInput,
  UpdateDocumentInput,
} from "@/schemas/institutional-document.schema";

import {
  CreateDocumentInputSchema,
  CreateDocumentInput,
  UpdateDocumentInputSchema,
  UpdateDocumentInput,
  InstitutionalDocumentVersion,
  InstitutionalDocumentComment,
} from "@/schemas/institutional-document.schema";
import { generateFullConstitutionMarkdown } from "@/lib/constitution-full-draft";
import { generateFullBylawsMarkdown } from "@/lib/bylaws-full-draft";
import { generateFullGovernmentManualMarkdown } from "@/lib/government-manual-full-draft";
import { generateFullMembershipManualMarkdown } from "@/lib/membership-discipline-manual-full-draft";
import { generateFullMinistryLeadershipManualMarkdown } from "@/lib/ministry-leadership-manual-full-draft";
import { generateFullDisciplesProgramMarkdown } from "@/lib/disciples-school-program-full-draft";
import { generateFullLeadersProgramMarkdown } from "@/lib/leaders-school-program-full-draft";
import { generateFullSeminaryProgramMarkdown } from "@/lib/seminary-program-full-draft";
import { generateFullMinisterialCredentialsMarkdown } from "@/lib/ministerial-credentials-regulations-full-draft";
import { generateFullMinisterialEthicsMarkdown } from "@/lib/ministerial-ethics-code-full-draft";
import { generateFullCeremoniesManualMarkdown } from "@/lib/ceremonies-manual-full-draft";
import { generateFullFinancesManualMarkdown } from "@/lib/finances-manual-full-draft";
import { generateFullSafetyManualMarkdown } from "@/lib/safety-manual-full-draft";
import { generateFullMissionsManualMarkdown } from "@/lib/missions-manual-full-draft";
import { generateFullChildrenYouthManualMarkdown } from "@/lib/children-youth-manual-full-draft";
import { INITIAL_MASTER_CATALOG } from "@/lib/catalog-data";
import { MasterCatalogDocument } from "@/types/catalog";
import { recordAuditLog } from "@/lib/audit";
import { hasPermission } from "@/lib/permissions";
import { RoleType } from "@/types";

export interface FullInstitutionalDocument {
  id: string;
  documentNumber: string;
  title: string;
  type: string;
  category: string;
  description: string;
  content: string;
  status:
    | "NO_ASIGNADO"
    | "PLANIFICADO"
    | "EN_REDACCION"
    | "EN_REVISION"
    | "CANDIDATO_ADOPCION"
    | "ADOPTADO"
    | "SUPERADO"
    | "ARCHIVADO"
    | "BORRADOR";
  version: string;
  author: string;
  authorId: string;
  responsibleArea: string;
  confidentiality: "PUBLICO" | "INTERNO_CONGREGACION" | "CONFIDENCIAL_LIDERAZGO" | "RESTRINGIDO_GOBIERNO";
  documentTarget: string;
  legalState: string;
  createdAt: string;
  updatedAt: string;
  versions: InstitutionalDocumentVersion[];
  comments: InstitutionalDocumentComment[];
  tags: string[];
}

// Inicialización de la biblioteca institucional con los documentos oficiales de RENACER
const INITIAL_LIBRARY: FullInstitutionalDocument[] = [
  {
    id: "doc-ren-001",
    documentNumber: "REN-DOC-001",
    title: "Declaración de Fe y Doctrina de RENACER",
    type: "DOCTRINA",
    category: "DOCTRINA",
    description: "Los 20 Artículos Fundamentales de Fe que rigen la doctrina, teología y fe de RENACER CHURCH.",
    content: `# DECLARACIÓN DE FE Y DOCTRINA DE RENACER CHURCH\n\n**Estado:** BORRADOR v1.0 — NO ADOPTADA\n**Pastor Fundador:** Luis Uchubanda Falconí\n\n### Artículos Doctrinales:\n1. Las Sagradas Escrituras\n2. El Dios Trino\n3. Jesucristo\n4. El Espíritu Santo\n5. La Creación y la Caída del Hombre\n6. La Salvación por Gracia mediante la Fe\n7. El Bautismo en Agua por Inmersión\n8. La Santa Cena del Señor\n9. El Bautismo en el Espíritu Santo\n10. Los Dones del Espíritu Santo\n11. La Santificación\n12. La Iglesia y su Misión\n13. El Ministerio Pastoral y los Cinco Dones Ministeriales\n14. La Sanidad Divina\n15. La Mayordomía Cristiana y los Diezmos\n16. El Matrimonio y la Familia\n17. La Resurrección de los Muertos\n18. El Retorno Premilenial de Jesucristo\n19. El Juicio Final\n20. Cielos Nuevos y Tierra Nueva`,
    status: "BORRADOR",
    version: "1.0",
    author: "Luis Uchubanda Falconí",
    authorId: "usr-fundador-001",
    responsibleArea: "PASTOR_FUNDADOR",
    confidentiality: "PUBLICO",
    documentTarget: "DECLARACION_DOCTRINAL",
    legalState: "NO_REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-02T12:00:00.000Z",
    updatedAt: "2026-09-02T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-001-v1.0",
        versionNumber: "1.0",
        title: "Declaración de Fe y Doctrina de RENACER",
        content: `# DECLARACIÓN DE FE Y DOCTRINA DE RENACER CHURCH\n\n**Estado:** BORRADOR v1.0 — NO ADOPTADA`,
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Borrador de estructura en 20 artículos doctrinales",
        createdAt: "2026-09-02T12:00:00.000Z",
        status: "BORRADOR",
      },
    ],
    comments: [
      {
        id: "comm-001",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Documento en preparación formal como borrador base antes de su adopción oficial.",
        createdAt: "2026-09-02T12:00:00.000Z",
        versionNumber: "1.0",
        statusAtComment: "BORRADOR",
      },
    ],
    tags: ["doctrina", "declaracion-de-fe", "fundamento", "20-articulos"],
  },
  {
    id: "doc-ren-002",
    documentNumber: "REN-DOC-002",
    title: "Constitución de RENACER",
    type: "CONSTITUCION",
    category: "GOBIERNO",
    description: "Carta Magna eclesiástica estructurada en 14 títulos y 48 artículos de gobierno institucional.",
    content: generateFullConstitutionMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Luis Uchubanda Falconí",
    authorId: "usr-fundador-001",
    responsibleArea: "CONSEJO_GOBIERNO",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "CONSTITUCION",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-02T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-002-v0.1",
        versionNumber: "0.1",
        title: "Constitución de RENACER",
        content: generateFullConstitutionMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 48 artículos de la Constitución de RENACER (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-002",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Redacción preliminar completa de los 48 artículos vinculados a las decisiones institucionales. Requiere revisión legal previa a adopción.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["constitucion", "gobierno", "carta-magna", "estatutos", "48-articulos"],
  },
  {
    id: "doc-ren-003",
    documentNumber: "REN-DOC-003",
    title: "BYLAWS DE RENACER CHURCH, INC.",
    type: "BYLAWS",
    category: "CORPORATIVO",
    description: "Estatutos y reglamento corporativo legal estructurado en 18 títulos y 63 artículos de gobernanza para la entidad sin fines de lucro incorporada en New Jersey.",
    content: generateFullBylawsMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Asesoría Legal / Consejo de Gobierno",
    authorId: "usr-fundador-001",
    responsibleArea: "CONSEJO_GOBIERNO",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "BYLAWS_CORPORATIVOS",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-02T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-003-v0.1",
        versionNumber: "0.1",
        title: "BYLAWS DE RENACER CHURCH, INC.",
        content: generateFullBylawsMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 18 títulos y 63 artículos de los Bylaws Corporativos (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-003",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Borrador de Bylaws Corporativos redactado en 18 títulos y 63 artículos alineados con la Constitución y decisiones institucionales. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["bylaws", "corporativo", "new-jersey", "estatutos", "18-titulos", "63-articulos", "fiduciario"],
  },
  {
    id: "doc-ren-004",
    documentNumber: "REN-DOC-004",
    title: "MANUAL DE GOBIERNO DE RENACER",
    type: "MANUAL",
    category: "GOBIERNO",
    description: "Guía operativa, funcional, fiduciaria y administrativa del gobierno institucional estructurada en 21 títulos, matriz de responsabilidades y 9 flujos de decisión.",
    content: generateFullGovernmentManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Consejo de Gobierno / Pastor Fundador",
    authorId: "usr-fundador-001",
    responsibleArea: "CONSEJO_GOBIERNO",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL_INSTITUCIONAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-02T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-004-v0.1",
        versionNumber: "0.1",
        title: "MANUAL DE GOBIERNO DE RENACER",
        content: generateFullGovernmentManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 21 títulos, matriz de responsabilidades y 9 flujos de decisión del Manual de Gobierno (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-004",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Borrador de Manual de Gobierno institucional en 21 títulos con matriz de responsabilidades y flujos de decisión. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["gobierno", "manual", "operaciones", "fiduciario", "matriz-responsabilidades", "flujos-decision", "21-titulos"],
  },
  {
    id: "doc-ren-005",
    documentNumber: "REN-DOC-005",
    title: "MANUAL DE MEMBRESÍA, DISCIPLINA Y RESTAURACIÓN DE RENACER",
    type: "MANUAL",
    category: "MEMBRESIA_Y_DISCIPLINA",
    description: "Normativa operativa eclesial que regula el itinerario del creyente, bautismo, derechos, padrón, disciplina formativa y restauración espiritual en 21 títulos, tabla de estados, matriz de responsabilidades y 10 workflows.",
    content: generateFullMembershipManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial / Consejo de Gobierno",
    authorId: "usr-fundador-001",
    responsibleArea: "PASTORAL_Y_GOBIERNO",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL_INSTITUCIONAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-005-v0.1",
        versionNumber: "0.1",
        title: "MANUAL DE MEMBRESÍA, DISCIPLINA Y RESTAURACIÓN DE RENACER",
        content: generateFullMembershipManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 21 títulos, estados de membresía, matriz y 10 flujos de decisión del Manual de Membresía y Disciplina (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-005",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Borrador de Manual de Membresía, Disciplina y Restauración en 21 títulos con salvaguardas de debido proceso y protección contra abusos. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["membresia", "disciplina", "restauracion", "debido-proceso", "bautismo", "padron", "21-titulos", "10-workflows"],
  },
  {
    id: "doc-ren-006",
    documentNumber: "REN-DOC-006",
    title: "MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER",
    type: "MANUAL",
    category: "MINISTERIOS_Y_LIDERAZGO",
    description: "Normativa orgánica eclesial que regula la arquitectura de ministerios, funciones pastorales y de liderazgo, Familias de Grupo, límites éticos de autoridad, desarrollo de líderes en 7 pasos, Escuela de Líderes, matriz de liderazgo y 10 workflows.",
    content: generateFullMinistryLeadershipManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial / Consejo de Gobierno",
    authorId: "usr-fundador-001",
    responsibleArea: "PASTORAL_Y_SUPERVISION_MINISTERIAL",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL_INSTITUCIONAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-006-v0.1",
        versionNumber: "0.1",
        title: "MANUAL DE MINISTERIOS Y LIDERAZGO DE RENACER",
        content: generateFullMinistryLeadershipManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 21 títulos, catálogo de 18 áreas, matriz de liderazgo y 10 flujos de liderazgo (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-006",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Borrador de Manual de Ministerios y Liderazgo en 21 títulos, Familias de Grupo, límites de autoridad y metodología de desarrollo de líderes. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["ministerios", "liderazgo", "familias-de-grupo", "supervision", "discipulado", "escuela-de-lideres", "matriz-liderazgo", "workflows", "21-titulos"],
  },
  {
    id: "doc-ren-007",
    documentNumber: "REN-DOC-007",
    title: "PROGRAMA OFICIAL DE LA ESCUELA DE DISCÍPULOS DE RENACER",
    type: "PROGRAMA_ACADEMICO",
    category: "DISCIPULADO",
    description: "Programa curricular oficial de 9 meses estructurado en 3 niveles (Conociendo a Cristo, Creciendo en Cristo, Haciendo Discípulos), 27 módulos, perfiles de ingreso/egreso, matriz curricular y 7 formularios de gestión.",
    content: generateFullDisciplesProgramMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial",
    authorId: "usr-fundador-001",
    responsibleArea: "DIRECCION_DISCIPULADO_Y_FORMACION",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "PROGRAMA_ACADEMICO",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-007-v0.1",
        versionNumber: "0.1",
        title: "PROGRAMA OFICIAL DE LA ESCUELA DE DISCÍPULOS DE RENACER",
        content: generateFullDisciplesProgramMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 10 títulos, 27 módulos en 3 niveles, matriz curricular y perfiles de la Escuela de Discípulos (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-007",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Programa formativo inicial de 9 meses estructurado en 3 niveles de discipulado integral. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["discipulado", "escuela-de-discipulos", "9-meses", "3-niveles", "conociendo-a-cristo", "creciendo-en-cristo", "haciendo-discipulos", "matriz-curricular"],
  },
  {
    id: "doc-ren-008",
    documentNumber: "REN-DOC-008",
    title: "PROGRAMA OFICIAL DE LA ESCUELA DE LÍDERES DE RENACER",
    type: "PROGRAMA_ACADEMICO",
    category: "LIDERAZGO",
    description: "Programa formativo oficial de 6 meses (2 clases por semana) estructurado en 3 niveles bimestrales (Servidor, Carácter y Discipulado; Familias de Grupo y Multiplicación; Liderazgo Ministerial, Ética, Conflictos y Responsabilidad), 24 módulos analíticos, metodología de formación de formadores (7 pasos), matriz de competencias y 9 formularios de gestión.",
    content: generateFullLeadersProgramMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial",
    authorId: "usr-fundador-001",
    responsibleArea: "DIRECCION_LIDERAZGO_Y_MINISTERIOS",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "PROGRAMA_ACADEMICO",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-008-v0.1",
        versionNumber: "0.1",
        title: "PROGRAMA OFICIAL DE LA ESCUELA DE LÍDERES DE RENACER",
        content: generateFullLeadersProgramMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 12 títulos, 24 módulos en 3 niveles, matriz de competencias y filosofía de formación de formadores de la Escuela de Líderes (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-008",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Programa formativo de liderazgo siervo en 6 meses (2 clases/semana). Principio central: Formar Formadores (2 Timoteo 2:2). Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["liderazgo", "escuela-de-lideres", "6-meses", "3-niveles", "formar-formadores", "familias-de-grupo", "etica-ministerial", "resolucion-conflictos", "matriz-competencias"],
  },
  {
    id: "doc-ren-009",
    documentNumber: "REN-DOC-009",
    title: "PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER",
    type: "PROGRAMA_ACADEMICO",
    category: "FORMACION_MINISTERIAL",
    description: "Programa académico oficial del Seminario Bíblico RENACER estructurado en 1 año lectivo mínimo, 4 niveles formativos (Fundamentos Bíblicos y Teológicos; Espíritu Santo y Ministerio; Predicación, Enseñanza y Cuidado Pastoral; Ministerio y Sistema RENACER), 12 módulos mensuales (SEM-L1-M01 a SEM-L4-M03), 104 clases anuales, arquitectura de Libros del Maestro y del Estudiante, matriz de 14 competencias y 10 formularios de gestión académica.",
    content: generateFullSeminaryProgramMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial",
    authorId: "usr-fundador-001",
    responsibleArea: "DIRECCION_EDUCACION_TEOLOGICA_Y_SEMINARIO",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "PROGRAMA_ACADEMICO",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-009-v0.1",
        versionNumber: "0.1",
        title: "PROGRAMA OFICIAL DEL SEMINARIO BÍBLICO RENACER",
        content: generateFullSeminaryProgramMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 12 títulos, 4 niveles, 12 módulos analíticos, matriz curricular, matriz de 14 competencias y arquitectura académica de Libros del Maestro y Estudiante del Seminario Bíblico RENACER (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-009",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Programa académico formal del Seminario Bíblico RENACER (1 año / 4 niveles / 12 módulos / 104 clases). Establece formación ministerial integral, no confiere ordenación clerical automática (regulada por REN-DOC-010). Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["seminario-biblico", "teologia", "ministerio", "4-niveles", "12-modulos", "104-clases", "libros-maestro-estudiante", "hermeneutica", "homiletica", "neumatologia", "cuidado-pastoral", "etica-ministerial", "proyecto-final", "matriz-competencias"],
  },
  {
    id: "doc-ren-010",
    documentNumber: "REN-DOC-010",
    title: "REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER",
    type: "REGLAMENTO",
    category: "CREDENCIALES_MINISTERIALES",
    description: "Reglamento institucional que norma el discernimiento vocacional, evaluación de candidatos, examen teológico, concesión de licencias ministeriales, consagración presbiteral, mantenimiento de credenciales, disciplina y restauración ministerial en RENACER CHURCH.",
    content: generateFullMinisterialCredentialsMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial",
    authorId: "usr-fundador-001",
    responsibleArea: "CONSEJO_MINISTERIAL_Y_PASTORAL",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "REGLAMENTO",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-010-v0.1",
        versionNumber: "0.1",
        title: "REGLAMENTO DE CREDENCIALES MINISTERIALES, LICENCIAMIENTO Y ORDENACIÓN DE RENACER",
        content: generateFullMinisterialCredentialsMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 30 títulos normativos, ruta ministerial de 7 pasos, 10 estados institucionales, matriz de autoridades y 12 formularios oficiales de credenciales y ordenación de RENACER (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-010",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Reglamento oficial de credenciales y ordenación ministerial de RENACER. Distingue formación académica (REN-DOC-009) de ordenación presbiteral. Consagra plena igualdad de hombres y mujeres. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["credenciales", "ministerio", "licencia", "ordenacion", "pastores", "presbiterio", "examen-ministerial", "debido-proceso", "restauracion", "expediente-ministerial"],
  },
  {
    id: "doc-ren-011",
    documentNumber: "REN-DOC-011",
    title: "CÓDIGO DE ÉTICA MINISTERIAL Y CONDUCTA INSTITUCIONAL DE RENACER",
    type: "CODIGO_ETICA",
    category: "ETICA_Y_CONDUCTA",
    description: "Normativa institucional que consagra los más altos estándares bíblicos, morales, éticos y operativos para ministros, pastores, líderes, docentes y servidores de RENACER CHURCH. Regula la prevención del abuso espiritual, salvaguarda de menores, integridad patrimonial, límites de consejería pastoral, confidencialidad, redes sociales y protocolos restauradores.",
    content: generateFullMinisterialEthicsMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial",
    authorId: "usr-fundador-001",
    responsibleArea: "CONSEJO_MINISTERIAL_Y_PASTORAL",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-011-v0.1",
        versionNumber: "0.1",
        title: "CÓDIGO DE ÉTICA MINISTERIAL Y CONDUCTA INSTITUCIONAL DE RENACER",
        content: generateFullMinisterialEthicsMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 28 títulos normativos, catálogo de 10 formularios institucionales de ética, salvaguardas legales contra abuso espiritual y protección de menores de RENACER (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-011",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Código de Ética y Conducta Institucional de RENACER. Prohíbe taxativamente el abuso espiritual, manipulación profética y lucro privado indebido. Obliga al reporte mandatorio de abusos conforme a N.J.S.A. 9:6-8.10. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["etica", "conducta", "integridad", "abuso-espiritual", "proteccion-menores", "salvaguardas", "consejeria-pastoral", "finanzas", "debido-proceso", "restauracion"],
  },
  {
    id: "doc-ren-012",
    documentNumber: "REN-DOC-012",
    title: "MANUAL OFICIAL DE CEREMONIAS, ORDENANZAS Y ACTOS LITÚRGICOS DE RENACER",
    type: "MANUAL_CEREMONIAS",
    category: "CEREMONIAS_Y_ORDENANZAS",
    description: "Manual operativo que norma la preparación, desarrollo litúrgico, elementos, lenguaje pastoral, seguridad física y registro eclesiástico de las ordenanzas bíblicas (Bautismo en agua y Santa Cena) y actos pastorales solemnes de RENACER CHURCH, distinguiendo taxativamente el rito sagrado de los efectos legales civiles.",
    content: generateFullCeremoniesManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Pastor Fundador / Consejo Ministerial",
    authorId: "usr-fundador-001",
    responsibleArea: "CONSEJO_MINISTERIAL_Y_PASTORAL",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-012-v0.1",
        versionNumber: "0.1",
        title: "MANUAL OFICIAL DE CEREMONIAS, ORDENANZAS Y ACTOS LITÚRGICOS DE RENACER",
        content: generateFullCeremoniesManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 30 títulos normativos, ordenanzas bíblicas (bautismo y Santa Cena), actos pastorales, guiones litúrgicos, salvaguardas legales y catálogo de 12 formularios oficiales de RENACER (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-012",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Manual oficial de ceremonias y ordenanzas litúrgicas de RENACER. Distingue estrictamente las 2 ordenanzas de Jesucristo frente a los actos pastorales. Consagra plena igualdad de la mujer como oficiante y delimita efectos religiosos vs civiles. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["ceremonias", "ordenanzas", "bautismo", "santa-cena", "matrimonio", "presentacion-ninos", "funerales", "uncion", "imposicion-manos", "ordenacion", "comisionamiento"],
  },
  {
    id: "doc-ren-013",
    documentNumber: "REN-DOC-013",
    title: "MANUAL OFICIAL DE ADMINISTRACIÓN, FINANZAS Y MAYORDOMÍA DE RENACER",
    type: "ADMINISTRACION_FINANZAS",
    category: "ADMINISTRACION_FINANZAS",
    description: "Regulación integral de la mayordomía bíblica, diezmos, ofrendas voluntarias, presupuesto anual, tesorería corporativa, compras, compensación ministerial, fondos restringidos, benevolencia, prevención de fraude y controles internos de RENACER CHURCH, INC.",
    content: generateFullFinancesManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Luis Uchubanda Falconí / Comisión de Finanzas",
    authorId: "usr-fundador-001",
    responsibleArea: "ADMINISTRACION_GENERAL",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-013-v0.1",
        versionNumber: "0.1",
        title: "MANUAL OFICIAL DE ADMINISTRACIÓN, FINANZAS Y MAYORDOMÍA DE RENACER",
        content: generateFullFinancesManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 32 títulos normativos, mayordomía bíblica, principios de diezmos y ofrendas sin coerción, titularidad corporativa exclusiva de RENACER CHURCH, INC., ciclo presupuestario, tesorería, compras, prevención de fraude, fondos restringidos, benevolencia y catálogo de 15 formularios oficiales (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-013",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Manual oficial de administración y finanzas corporativas. Consagra la titularidad exclusiva patrimonial de RENACER CHURCH, INC., doble conteo de ofrendas, presupuesto anual, deslinde ministerial vs administrativo, prevención de fraude y salvaguardas legales/fiscales. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["finanzas", "mayordomia", "diezmos", "ofrendas", "presupuesto", "tesoreria", "compras", "benevolencia", "activos", "contabilidad", "control-interno"],
  },
  {
    id: "doc-ren-014",
    documentNumber: "REN-DOC-014",
    title: "MANUAL OFICIAL DE PROTECCIÓN, SEGURIDAD Y SALVAGUARDAS DE RENACER",
    type: "PROTECCION_SEGURIDAD_Y_SALVAGUARDAS",
    category: "PROTECCION_SEGURIDAD_Y_SALVAGUARDAS",
    description: "Marco institucional eclesiástico de salvaguardas, prevención de abusos, regla de dos adultos, protección de menores y personas vulnerables, consejería pastoral, confidencialidad responsable, protocolos de emergencia, denuncias, no represalias y preservación probatoria de RENACER CHURCH, INC.",
    content: generateFullSafetyManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Luis Uchubanda Falconí / Comisión de Protección y Salvaguardas",
    authorId: "usr-fundador-001",
    responsibleArea: "Comisión de Salvaguardas y Protección",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-014-v0.1",
        versionNumber: "0.1",
        title: "MANUAL OFICIAL DE PROTECCIÓN, SEGURIDAD Y SALVAGUARDAS DE RENACER",
        content: generateFullSafetyManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 32 títulos normativos, 128 artículos reglamentarios, principio de primacía de la dignidad humana y seguridad sobre la jerarquía o confidencialidad pastoral, tolerancia cero al abuso, regla de dos adultos, protocolos de emergencia médica y física, ruta de denuncia de 10 pasos, no represalias, preservación probatoria, quejas contra líderes y Pastor Fundador sin inmunidad personal, y catálogo de 12 formularios de seguridad oficiales (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-014",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Manual oficial de protección, seguridad y salvaguardas de RENACER. Establece la protección incondicional a menores, personas vulnerables y toda la congregación. Ninguna confidencialidad pastoral ni doctrina puede ser usada para encubrir delitos o impedir la intervención de autoridades civiles. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["proteccion", "salvaguardas", "seguridad", "menores", "regla-dos-adultos", "prevencion-abuso", "consejeria", "emergencias", "denuncias", "no-represalias"],
  },
  {
    id: "doc-ren-015",
    documentNumber: "REN-DOC-015",
    title: "MANUAL OFICIAL DE MISIONES, EVANGELISMO Y EXPANSIÓN DE RENACER",
    type: "MISIONES_EVANGELISMO",
    category: "MISIONES_EVANGELISMO",
    description: "Marco institucional para el evangelismo local y digital, seguimiento y discipulado de nuevos creyentes, plantación de nuevas obras, tipología congregacional, procesos de envío, comisionamiento, supervisión, seguridad, finanzas misioneras, salvaguardas y cooperación eclesial de RENACER CHURCH, INC.",
    content: generateFullMissionsManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Luis Uchubanda Falconí / Comisión de Misiones y Expansión",
    authorId: "usr-fundador-001",
    responsibleArea: "Dirección de Misiones y Evangelismo",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-015-v0.1",
        versionNumber: "0.1",
        title: "MANUAL OFICIAL DE MISIONES, EVANGELISMO Y EXPANSIÓN DE RENACER",
        content: generateFullMissionsManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 32 títulos normativos, 128 artículos reglamentarios, ruta de seguimiento de nuevos creyentes en 10 pasos, ruta de plantación de obras en 10 etapas, clasificación de 6 tipos de obra, 6 estados del misionero, proceso de envío en 12 pasos, comisionamiento pastoral, supervisión en campo, seguridad integral articulada con REN-DOC-014, salvaguardas de menores, igualdad ministerial de mujeres, finanzas con titularidad corporativa exclusiva de RENACER CHURCH, INC., prohibición de cuentas personales, ofrendas misioneras designadas, cooperación intereclesial sin cesión de soberanía, misiones humanitarias sin coacción, expediente misionero y catálogo de 12 formularios misioneros oficiales (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-015",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Manual oficial de misiones, evangelismo y expansión de RENACER. Establece el marco eclesiológico y operativo para la Gran Comisión: evangelismo, discipulado, plantación responsable, envío ordenado, supervisión, seguridad y transparencia financiera bajo la corporación RENACER CHURCH, INC. No constituye una denominación ni crea autoridades ajenas al orden pastoral establecido. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["misiones", "evangelismo", "expansion", "plantacion", "misioneros", "nuevas-obras", "discipulado", "comisionamiento", "envio", "apoyo-misionero", "humanitaria"],
  },
  {
    id: "doc-ren-016",
    documentNumber: "REN-DOC-016",
    title: "MANUAL OFICIAL DE MINISTERIO INFANTIL Y JUVENIL DE RENACER",
    type: "INFANTIL_JUVENIL",
    category: "INFANTIL_JUVENIL",
    description: "Marco institucional para el trabajo con niños, preadolescentes, adolescentes y jóvenes en transición, padres/tutores, maestros, servidores y voluntarios de RENACER CHURCH, INC. Establece la subordinación de toda actividad ministerial a la seguridad del menor (REN-DOC-014), regla de dos adultos, límites de contacto físico, prevención de abusos, discipulado formativo, consentimientos parentales y catálogo de 12 formularios oficiales.",
    content: generateFullChildrenYouthManualMarkdown(),
    status: "EN_REDACCION",
    version: "0.1",
    author: "Luis Uchubanda Falconí / Comisión de Ministerio Infantil y Juvenil",
    authorId: "usr-fundador-001",
    responsibleArea: "Dirección de Ministerio Infantil y Juvenil",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL",
    legalState: "REQUIERE_REVISION_LEGAL",
    createdAt: "2026-09-04T12:00:00.000Z",
    updatedAt: "2026-09-04T12:00:00.000Z",
    versions: [
      {
        id: "ver-doc-016-v0.1",
        versionNumber: "0.1",
        title: "MANUAL OFICIAL DE MINISTERIO INFANTIL Y JUVENIL DE RENACER",
        content: generateFullChildrenYouthManualMarkdown(),
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Redacción formal completa de los 32 títulos normativos, 128 artículos reglamentarios, principio de primacía absoluta de la seguridad del menor sobre metas ministeriales (articulado con REN-DOC-014), 5 etapas de desarrollo etario, discipulado formativo sin manipulación, evangelismo respetuoso sin coerción, rol activo de padres/tutores, perfil y evaluación de maestros/servidores, regla de dos adultos innegociable, límites de contacto físico pastoral, protocolos de emergencia y 911, gestión de medicamentos no informal, transporte seguro, campamentos con dormitorios segregados, comunicación institucional no privada con menores, consentimiento de uso de imagen, privacidad y protección de expedientes sensibles (RBAC), transición a la vida adulta, igualdad ministerial de la mujer, y catálogo de 12 formularios infantiles/juveniles oficiales (v0.1)",
        createdAt: "2026-09-04T12:00:00.000Z",
        status: "EN_REDACCION",
      },
    ],
    comments: [
      {
        id: "comm-016",
        authorId: "usr-fundador-001",
        authorName: "Luis Uchubanda Falconí",
        authorRole: "PASTOR_FUNDADOR",
        content: "Manual oficial de ministerio infantil y juvenil de RENACER. Establece el marco pedagógico, pastoral y de salvaguardas para la formación de niños, preadolescentes, adolescentes y jóvenes. Ningún objetivo ministerial está por encima de la seguridad y dignidad del menor. Subordinado operativamente a REN-DOC-014. Estado legal REQUIERE_REVISION_LEGAL.",
        createdAt: "2026-09-04T12:00:00.000Z",
        versionNumber: "0.1",
        statusAtComment: "EN_REDACCION",
      },
    ],
    tags: ["infantil", "juvenil", "ninos", "preadolescentes", "adolescentes", "jovenes", "salvaguardas", "padres", "maestros", "voluntarios", "discipulado", "dos-adultos", "campamentos"],
  },
  // Poblado del resto de documentos del catálogo maestro
  ...INITIAL_MASTER_CATALOG.filter(
    (c) => c.documentNumber !== "REN-DOC-001" && c.documentNumber !== "REN-DOC-002" && c.documentNumber !== "REN-DOC-003" && c.documentNumber !== "REN-DOC-004" && c.documentNumber !== "REN-DOC-005" && c.documentNumber !== "REN-DOC-006" && c.documentNumber !== "REN-DOC-007" && c.documentNumber !== "REN-DOC-008" && c.documentNumber !== "REN-DOC-009" && c.documentNumber !== "REN-DOC-010" && c.documentNumber !== "REN-DOC-011" && c.documentNumber !== "REN-DOC-012" && c.documentNumber !== "REN-DOC-013" && c.documentNumber !== "REN-DOC-014" && c.documentNumber !== "REN-DOC-015" && c.documentNumber !== "REN-DOC-016"
  ).map((cat) => ({
    id: `doc-${cat.documentNumber.toLowerCase()}`,
    documentNumber: cat.documentNumber,
    title: cat.title,
    type: cat.category,
    category: cat.category,
    description: cat.description,
    content: `# ${cat.title.toUpperCase()}\n\n**Código:** ${cat.documentNumber}\n**Jerarquía:** ${cat.hierarchyLevel}\n**Área Responsable:** ${cat.responsibleArea}\n**Requisito de Firma:** ${cat.signatureRequirement}\n\n### Descripción Institucional:\n${cat.description}`,
    status: cat.status as any,
    version: cat.version,
    author: cat.author,
    authorId: "usr-fundador-001",
    responsibleArea: cat.responsibleArea,
    confidentiality: cat.confidentiality,
    documentTarget: "MANUAL",
    legalState: cat.requiredReviews.includes("REVISION_LEGAL")
      ? "REQUIERE_REVISION_LEGAL"
      : "NO_REQUIERE_REVISION_LEGAL",
    createdAt: cat.createdAt,
    updatedAt: cat.updatedAt,
    versions: [
      {
        id: `ver-${cat.documentNumber.toLowerCase()}-v${cat.version}`,
        versionNumber: cat.version,
        title: cat.title,
        content: `# ${cat.title.toUpperCase()}\n\n${cat.description}`,
        authorId: "usr-fundador-001",
        authorName: cat.author,
        authorRole: "PASTOR_FUNDADOR",
        changeReason: "Registro inicial en catálogo institucional",
        createdAt: cat.createdAt,
        status: cat.status as any,
      },
    ],
    comments: [],
    tags: cat.tags,
  })),
];

// Variable en memoria reactiva para persistencia durante la sesión
let documentsStore: FullInstitutionalDocument[] = [...INITIAL_LIBRARY];

export function getAllInstitutionalDocuments(): FullInstitutionalDocument[] {
  return documentsStore;
}

export function getInstitutionalDocumentById(id: string): FullInstitutionalDocument | undefined {
  return documentsStore.find(
    (d) => d.id === id || d.documentNumber.toLowerCase() === id.toLowerCase()
  );
}

export function createInstitutionalDocument(
  input: CreateDocumentInput,
  author: { id: string; name: string; role: RoleType }
): { success: boolean; document?: FullInstitutionalDocument; error?: string } {
  // 1. Validar permisos: SOLO_LECTURA no puede crear
  if (author.role === "SOLO_LECTURA") {
    return { success: false, error: "El rol 'SOLO_LECTURA' no tiene permisos para crear documentos." };
  }

  // 2. Validar con Zod
  const validation = CreateDocumentInputSchema.safeParse(input);
  if (!validation.success) {
    return { success: false, error: validation.error.errors[0]?.message || "Datos de entrada inválidos." };
  }

  // 3. Comprobar que no exista código duplicado
  const exists = documentsStore.some(
    (d) => d.documentNumber.toLowerCase() === input.documentNumber.toLowerCase()
  );
  if (exists) {
    return { success: false, error: `Ya existe un documento registrado con el código ${input.documentNumber}.` };
  }

  const now = new Date().toISOString();
  const initialVersion = input.initialVersion || "1.0";

  const initialVersionRecord: InstitutionalDocumentVersion = {
    id: `ver-${input.documentNumber.toLowerCase()}-v${initialVersion}-${Date.now()}`,
    versionNumber: initialVersion,
    title: input.title,
    content: input.content,
    authorId: author.id,
    authorName: author.name,
    authorRole: author.role,
    changeReason: "Creación inicial del documento",
    createdAt: now,
    status: "BORRADOR",
  };

  const newDoc: FullInstitutionalDocument = {
    id: `doc-${Date.now()}`,
    documentNumber: input.documentNumber,
    title: input.title,
    type: input.type,
    category: input.category,
    description: input.description,
    content: input.content,
    status: "BORRADOR",
    version: initialVersion,
    author: author.name,
    authorId: author.id,
    responsibleArea: input.responsibleArea,
    confidentiality: input.confidentiality,
    documentTarget: input.documentTarget,
    legalState: input.legalState,
    createdAt: now,
    updatedAt: now,
    versions: [initialVersionRecord],
    comments: [],
    tags: [input.category.toLowerCase(), input.type.toLowerCase()],
  };

  documentsStore = [newDoc, ...documentsStore];

  recordAuditLog({
    userId: author.id,
    userName: author.name,
    userEmail: "institucional@renacerchurch.org",
    userRole: author.role,
    action: "DOCUMENT_CREATED",
    resource: "DOCUMENTOS",
    resourceId: newDoc.id,
    detail: `Creación de documento institucional ${newDoc.documentNumber}: "${newDoc.title}" (v${newDoc.version})`,
  });

  return { success: true, document: newDoc };
}

export function updateInstitutionalDocument(
  input: UpdateDocumentInput,
  author: { id: string; name: string; role: RoleType }
): { success: boolean; document?: FullInstitutionalDocument; error?: string } {
  // 1. Validar permisos
  if (author.role === "SOLO_LECTURA") {
    return { success: false, error: "El rol 'SOLO_LECTURA' no tiene permisos para editar documentos." };
  }

  // 2. Validar con Zod
  const validation = UpdateDocumentInputSchema.safeParse(input);
  if (!validation.success) {
    return { success: false, error: validation.error.errors[0]?.message || "Datos de edición inválidos." };
  }

  const docIndex = documentsStore.findIndex(
    (d) => d.id === input.docId || d.documentNumber.toLowerCase() === input.docId.toLowerCase()
  );
  if (docIndex === -1) {
    return { success: false, error: "Documento no encontrado." };
  }

  const currentDoc = documentsStore[docIndex];

  // 3. Proteger adopción automática: ningún update puede marcar ADOPTADO si no es PASTOR_FUNDADOR con ADOPT_OFFICIAL
  if (input.newStatus === "ADOPTADO" && !hasPermission(author.role, "ADOPT_OFFICIAL", "doctrina")) {
    return { success: false, error: "La adopción oficial está reservada con exclusividad al Pastor Fundador." };
  }

  const now = new Date().toISOString();

  // 4. Calcular nueva versión semántica
  const [major, minor] = currentDoc.version.split(".").map(Number);
  const newVersionNumber =
    input.versionBump === "major" ? `${major + 1}.0` : `${major}.${minor + 1}`;

  // 5. Marcar la versión previa como SUPERADA en el historial inmutable
  const updatedPreviousVersions = currentDoc.versions.map((v) =>
    v.versionNumber === currentDoc.version ? { ...v, status: "SUPERADO" as const } : v
  );

  // 6. Crear el snapshot de la nueva versión activa
  const newVersionSnapshot: InstitutionalDocumentVersion = {
    id: `ver-${currentDoc.documentNumber.toLowerCase()}-v${newVersionNumber}-${Date.now()}`,
    versionNumber: newVersionNumber,
    title: input.newTitle || currentDoc.title,
    content: input.newContent,
    authorId: author.id,
    authorName: author.name,
    authorRole: author.role,
    changeReason: input.changeReason,
    createdAt: now,
    status: input.newStatus || "EN_REDACCION",
  };

  const updatedDoc: FullInstitutionalDocument = {
    ...currentDoc,
    title: input.newTitle || currentDoc.title,
    content: input.newContent,
    version: newVersionNumber,
    status: input.newStatus || currentDoc.status,
    updatedAt: now,
    versions: [...updatedPreviousVersions, newVersionSnapshot],
  };

  documentsStore[docIndex] = updatedDoc;

  recordAuditLog({
    userId: author.id,
    userName: author.name,
    userEmail: "institucional@renacerchurch.org",
    userRole: author.role,
    action: "DOCUMENT_EDITED",
    resource: "DOCUMENTOS",
    resourceId: updatedDoc.id,
    detail: `Edición de ${updatedDoc.documentNumber}: nueva versión v${newVersionNumber} generada. Motivo: "${input.changeReason}"`,
  });

  return { success: true, document: updatedDoc };
}

export function addDocumentComment(
  docId: string,
  commentText: string,
  author: { id: string; name: string; role: RoleType }
): { success: boolean; comment?: InstitutionalDocumentComment; error?: string } {
  if (!commentText.trim()) {
    return { success: false, error: "El comentario no puede estar vacío." };
  }

  const doc = getInstitutionalDocumentById(docId);
  if (!doc) {
    return { success: false, error: "Documento no encontrado." };
  }

  const newComment: InstitutionalDocumentComment = {
    id: `comm-${Date.now()}`,
    authorId: author.id,
    authorName: author.name,
    authorRole: author.role,
    content: commentText.trim(),
    createdAt: new Date().toISOString(),
    versionNumber: doc.version,
    statusAtComment: doc.status,
  };

  doc.comments = [...doc.comments, newComment];

  recordAuditLog({
    userId: author.id,
    userName: author.name,
    userEmail: "institucional@renacerchurch.org",
    userRole: author.role,
    action: "COMMENT_ADDED",
    resource: "DOCUMENTOS",
    resourceId: doc.id,
    detail: `Comentario añadido en ${doc.documentNumber} (v${doc.version}): "${commentText.substring(0, 40)}..."`,
  });

  return { success: true, comment: newComment };
}

export function compareDocumentVersions(
  docId: string,
  v1Num: string,
  v2Num: string
): { success: boolean; v1?: InstitutionalDocumentVersion; v2?: InstitutionalDocumentVersion; diffLines?: { type: "same" | "add" | "remove"; text: string }[]; error?: string } {
  const doc = getInstitutionalDocumentById(docId);
  if (!doc) return { success: false, error: "Documento no encontrado." };

  const v1 = doc.versions.find((v) => v.versionNumber === v1Num);
  const v2 = doc.versions.find((v) => v.versionNumber === v2Num);

  if (!v1 || !v2) return { success: false, error: "Una o ambas versiones no existen en el historial." };

  const lines1 = v1.content.split("\n");
  const lines2 = v2.content.split("\n");

  const diffLines: { type: "same" | "add" | "remove"; text: string }[] = [];
  const max = Math.max(lines1.length, lines2.length);

  for (let i = 0; i < max; i++) {
    const l1 = lines1[i];
    const l2 = lines2[i];

    if (l1 === l2) {
      if (l1 !== undefined) diffLines.push({ type: "same", text: l1 });
    } else {
      if (l1 !== undefined) diffLines.push({ type: "remove", text: `- ${l1}` });
      if (l2 !== undefined) diffLines.push({ type: "add", text: `+ ${l2}` });
    }
  }

  return { success: true, v1, v2, diffLines };
}
