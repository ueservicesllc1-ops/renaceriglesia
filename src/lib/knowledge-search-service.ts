import { getAllInstitutionalDecisions } from "@/lib/decision-service";
import { getAllInstitutionalDocuments } from "@/lib/institutional-document-service";
import doctrinaData from "../../import-queue/doctrina.json";
import { INITIAL_MASTER_CATALOG } from "@/lib/catalog-data";
import { RoleType } from "@/types";

export type KnowledgeSourceType =
  | "DECISION_INSTITUCIONAL"
  | "DOCUMENTO_CATALOGO"
  | "DOCTRINA_ARTICULO"
  | "CONSTITUCION_ARTICULO"
  | "MANUAL_SOP";

export type KnowledgeStatusType =
  | "OFICIAL_ADOPTADO"
  | "BORRADOR_NO_ADOPTADA"
  | "PLANIFICADO_NO_ADOPTADA"
  | "DECISION_DEFINIDA"
  | "DECISION_PENDIENTE"
  | "REQUIERE_REVISION_LEGAL";

export interface KnowledgeSearchResult {
  id: string;
  code: string;
  title: string;
  type: KnowledgeSourceType;
  category: string;
  status: KnowledgeStatusType;
  statusLabel: string;
  version: string;
  snippet: string;
  content: string;
  href: string;
  score: number;
  confidentiality: "PUBLICO" | "INTERNO_CONGREGACION" | "CONFIDENCIAL_LIDERAZGO" | "RESTRINGIDO_GOBIERNO";
  relatedDocumentNumbers?: string[];
  relatedDecisionNumbers?: string[];
  tags: string[];
}

export interface SearchKnowledgeOptions {
  category?: string;
  statusFilter?: string;
  typeFilter?: string;
  userRole?: RoleType;
  maxResults?: number;
}

// Normalización de texto (elimina tildes, signos y minúsculas)
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Palabras vacías comunes en preguntas para extracción semántica
const STOP_WORDS = new Set([
  "cual", "que", "como", "cuando", "donde", "por", "para", "de", "la", "el", "los", "las", "un", "una", "unos", "unas",
  "es", "son", "sobre", "en", "y", "o", "a", "al", "del", "con", "se", "su", "sus", "renacer", "church", "posicion", "dice"
]);

export function extractQuestionKeywords(query: string): string[] {
  const clean = normalizeText(query).replace(/[¿?¡!.,;:]/g, " ");
  const words = clean.split(/\s+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w));
  return words;
}

// Verificación de permisos de confidencialidad
export function isAuthorizedForConfidentiality(
  confidentiality: "PUBLICO" | "INTERNO_CONGREGACION" | "CONFIDENCIAL_LIDERAZGO" | "RESTRINGIDO_GOBIERNO",
  role?: RoleType
): boolean {
  if (!role || role === "SOLO_LECTURA") {
    return confidentiality === "PUBLICO" || confidentiality === "INTERNO_CONGREGACION";
  }
  if (role === "ESTUDIANTE" || role === "MIEMBRO") {
    return confidentiality === "PUBLICO" || confidentiality === "INTERNO_CONGREGACION";
  }
  if (role === "LIDER" || role === "DOCENTE") {
    return confidentiality !== "RESTRINGIDO_GOBIERNO";
  }
  // PASTOR_FUNDADOR, CONSEJO_GOBIERNO, ADMINISTRADOR, REVISOR_LEGAL, etc.
  return true;
}

/**
 * Servicio Central de Búsqueda de Conocimiento Institucional de RENACER
 */
export function searchRenacerKnowledge(
  query: string,
  options: SearchKnowledgeOptions = {}
): KnowledgeSearchResult[] {
  const q = normalizeText(query);
  if (!q) return [];

  const keywords = extractQuestionKeywords(query);
  const results: KnowledgeSearchResult[] = [];

  const allDecisions = getAllInstitutionalDecisions();
  const allDocs = getAllInstitutionalDocuments();

  // 1. Indexar y buscar en Decisiones Institucionales (107)
  for (const dec of allDecisions) {
    const codeNorm = normalizeText(dec.decisionNumber);
    const titleNorm = normalizeText(dec.title);
    const questionNorm = normalizeText(dec.question);
    const decisionNorm = normalizeText(dec.decision || dec.description || "");
    const notesNorm = normalizeText(dec.notes || "");
    const catNorm = normalizeText(dec.category);

    let score = 0;

    // Coincidencia exacta o parcial de código
    if (codeNorm === q) score += 100;
    else if (codeNorm.includes(q)) score += 60;

    // Coincidencia en título
    if (titleNorm === q) score += 80;
    else if (titleNorm.includes(q)) score += 40;

    // Coincidencia en pregunta institucional
    if (questionNorm.includes(q)) score += 30;

    // Búsqueda por palabras y tokens
    const qTokens = q.split(/\s+/).filter((t) => t.length > 2);
    for (const token of qTokens) {
      if (titleNorm.includes(token)) score += 35;
      if (decisionNorm.includes(token)) score += 20;
      if (questionNorm.includes(token)) score += 15;
      if (notesNorm.includes(token)) score += 10;
    }

    // Búsqueda por palabras clave de pregunta
    for (const kw of keywords) {
      if (titleNorm.includes(kw)) score += 20;
      if (decisionNorm.includes(kw)) score += 15;
      if (questionNorm.includes(kw)) score += 12;
    }

    if (score > 0) {
      const isLegalReq = dec.legalState === "REQUIERE_REVISION_LEGAL";
      results.push({
        id: dec.decisionId,
        code: dec.decisionNumber,
        title: dec.title,
        type: "DECISION_INSTITUCIONAL",
        category: dec.category,
        status: isLegalReq ? "REQUIERE_REVISION_LEGAL" : "DECISION_DEFINIDA",
        statusLabel: isLegalReq ? "DEFINIDA • REQ. REVISIÓN LEGAL NJ" : "DEFINIDA • " + dec.documentState,
        version: "1.0",
        snippet: dec.decision ? dec.decision.substring(0, 160) + "..." : dec.question,
        content: dec.decision || dec.description || dec.notes || "",
        href: `/decisiones/${dec.decisionNumber}`,
        score: score,
        confidentiality: "INTERNO_CONGREGACION",
        relatedDocumentNumbers: dec.affectedDocuments,
        tags: [dec.category.toLowerCase(), dec.documentTarget.toLowerCase()],
      });
    }
  }

  // 2. Indexar y buscar en Artículos Doctrinales (20)
  doctrinaData.data.forEach((art, idx) => {
    const code = `ART-${idx + 1}`;
    const codeNorm = normalizeText(code);
    const titleNorm = normalizeText(art.title);
    const contentNorm = normalizeText(art.content);
    const catNorm = normalizeText(art.category);

    let score = 0;

    if (codeNorm === q) score += 90;
    if (titleNorm === q) score += 80;
    else if (titleNorm.includes(q)) score += 45;

    if (contentNorm.includes(q)) score += 30;
    if (catNorm.includes(q)) score += 10;

    const qTokens = q.split(/\s+/).filter((t) => t.length > 2);
    for (const token of qTokens) {
      if (titleNorm.includes(token)) score += 30;
      if (contentNorm.includes(token)) score += 15;
    }

    for (const kw of keywords) {
      if (titleNorm.includes(kw)) score += 18;
      if (contentNorm.includes(kw)) score += 12;
    }

    if (score > 0) {
      results.push({
        id: `doctrina-art-${idx + 1}`,
        code: code,
        title: art.title,
        type: "DOCTRINA_ARTICULO",
        category: "DOCTRINA",
        status: "BORRADOR_NO_ADOPTADA",
        statusLabel: "BORRADOR v1.0 • NO ADOPTADA",
        version: "1.0",
        snippet: art.content.substring(0, 160) + "...",
        content: art.content,
        href: "/doctrina",
        score: score,
        confidentiality: "PUBLICO",
        relatedDocumentNumbers: ["REN-DOC-001"],
        tags: art.tags || ["doctrina", "fe"],
      });
    }
  });

  // 3. Indexar y buscar en Documentos Institucionales
  for (const doc of allDocs) {
    const codeNorm = normalizeText(doc.documentNumber);
    const titleNorm = normalizeText(doc.title);
    const descNorm = normalizeText(doc.description);
    const contentNorm = normalizeText(doc.content);

    let score = 0;

    if (codeNorm === q) score += 100;
    else if (codeNorm.includes(q)) score += 55;

    if (titleNorm === q) score += 75;
    else if (titleNorm.includes(q)) score += 35;

    if (descNorm.includes(q)) score += 20;
    if (contentNorm.includes(q)) score += 15;

    const qTokens = q.split(/\s+/).filter((t) => t.length > 2);
    for (const token of qTokens) {
      if (titleNorm.includes(token)) score += 30;
      if (descNorm.includes(token)) score += 15;
      if (contentNorm.includes(token)) score += 10;
    }

    for (const kw of keywords) {
      if (titleNorm.includes(kw)) score += 12;
      if (contentNorm.includes(kw)) score += 8;
    }

    if (score > 0) {
      // Filtrar por confidencialidad
      if (!isAuthorizedForConfidentiality(doc.confidentiality, options.userRole)) {
        continue;
      }

      const isAdopted = doc.status === "ADOPTADO";
      results.push({
        id: doc.id,
        code: doc.documentNumber,
        title: doc.title,
        type: doc.type === "CONSTITUCION" ? "CONSTITUCION_ARTICULO" : "DOCUMENTO_CATALOGO",
        category: doc.category,
        status: isAdopted ? "OFICIAL_ADOPTADO" : doc.status === "PLANIFICADO" ? "PLANIFICADO_NO_ADOPTADA" : "BORRADOR_NO_ADOPTADA",
        statusLabel: isAdopted ? "OFICIAL ADOPTADO" : `${doc.status} v${doc.version} • NO ADOPTADA`,
        version: doc.version,
        snippet: doc.description.substring(0, 160) + "...",
        content: doc.content,
        href: `/documentos/${doc.documentNumber}`,
        score: score,
        confidentiality: doc.confidentiality,
        tags: doc.tags,
      });
    }
  }

  // Filtrar por categoría si se especifica
  let filtered = results;
  if (options.category && options.category !== "ALL" && options.category !== "TODOS") {
    const catF = normalizeText(options.category);
    filtered = filtered.filter((r) => normalizeText(r.category).includes(catF) || normalizeText(r.type).includes(catF));
  }

  // Filtrar por estado si se especifica
  if (options.statusFilter && options.statusFilter !== "ALL") {
    const filter = options.statusFilter;
    filtered = filtered.filter((r) => r.status === filter || r.statusLabel.includes(filter));
  }

  // Ordenar por relevancia descendente
  filtered.sort((a, b) => b.score - a.score);

  if (options.maxResults) {
    return filtered.slice(0, options.maxResults);
  }

  return filtered;
}

/**
 * Obtener todos los temas consolidados para la Enciclopedia
 */
export interface EncyclopediaTopic {
  slug: string;
  title: string;
  category: string;
  summary: string;
  doctrinalBasis?: string;
  decisions: { code: string; title: string; state: string }[];
  documents: { code: string; title: string; status: string }[];
  statusNote: string;
}

export const ENCYCLOPEDIA_TOPICS: EncyclopediaTopic[] = [
  {
    slug: "bautismo",
    title: "Bautismo en Agua y en el Espíritu Santo",
    category: "DOCTRINA",
    summary: "RENACER practica el bautismo en agua por inmersión en el nombre del Padre, del Hijo y del Espíritu Santo como testimonio público de fe, y cree en el bautismo en el Espíritu Santo con manifestación de dones.",
    doctrinalBasis: "Artículos 7 y 9 de la Declaración de Fe (REN-DOC-001 • BORRADOR v1.0 NO ADOPTADA). Fundamentos bíblicos: Mateo 28:19, Romanos 6:3-4, Hechos 2:1-4.",
    decisions: [
      { code: "DEC-DEF-022", title: "Doctrina Institucional de Bautismos y Ordenanzas", state: "DEFINIDA" },
      { code: "DEC-DEF-018", title: "Requisitos de Membresía y Bautismo", state: "DEFINIDA" },
    ],
    documents: [
      { code: "REN-DOC-001", title: "Declaración de Fe y Doctrina", status: "BORRADOR v1.0 • NO ADOPTADA" },
      { code: "REN-DOC-012", title: "Manual de Ceremonias y Ordenanzas", status: "PLANIFICADO v0.1 • NO ADOPTADA" },
    ],
    statusNote: "Información doctrinal y normativa registrada formalmente. Los documentos fuente se encuentran en estado BORRADOR / PLANIFICADO y no representan adopción canónica final.",
  },
  {
    slug: "sucesion",
    title: "Sucesión Fundacional e Incapacidad del Pastor Fundador",
    category: "GOBIERNO",
    summary: "Régimen institucional ante retiro, incapacidad temporal/permanente o fallecimiento del Pastor Fundador Luis Uchubanda Falconí. La sucesión no es hereditaria automática y preserva la estabilidad espiritual y jurídica de RENACER.",
    decisions: [
      { code: "DEC-DEF-001", title: "Sucesión Fundacional ante Retiro, Incapacidad o Fallecimiento", state: "DEFINIDA" },
      { code: "DEC-PEND-001", title: "Protocolo de Evaluación Médica y Continuidad ante Incapacidad", state: "DEFINIDA" },
      { code: "DEC-DEF-003", title: "Gobierno Provisional y Convocatoria de Sucesión", state: "DEFINIDA" },
    ],
    documents: [
      { code: "REN-DOC-002", title: "Constitución de RENACER", status: "EN_REDACCION v0.1 • NO ADOPTADA" },
      { code: "REN-DOC-003", title: "Bylaws Estatutarios de New Jersey", status: "PLANIFICADO v0.1 • NO ADOPTADA" },
    ],
    statusNote: "Decisiones institucionales formalmente definidas por el Pastor Fundador y el Consejo. Sujetos a revisión estatutaria de New Jersey.",
  },
  {
    slug: "consejo-gobierno",
    title: "Consejo de Gobierno y Autoridades",
    category: "GOBIERNO",
    summary: "Máximo órgano de gobierno administrativo, patrimonial y fiduciario de RENACER CHURCH, INC. en armonía con la autoridad pastoral fundacional y la legislación sin fines de lucro de New Jersey.",
    decisions: [
      { code: "DEC-DEF-002", title: "Composición y Quórum del Consejo de Gobierno", state: "DEFINIDA" },
      { code: "DEC-DEF-004", title: "Facultades Extraordinarias y Límites Fiduciarios", state: "DEFINIDA" },
    ],
    documents: [
      { code: "REN-DOC-002", title: "Constitución de RENACER", status: "EN_REDACCION v0.1 • NO ADOPTADA" },
      { code: "REN-DOC-004", title: "Manual de Gobierno y Organización", status: "PLANIFICADO v0.1 • NO ADOPTADA" },
    ],
    statusNote: "Estructura institucional aprobada sujeta a incorporación estatutaria.",
  },
  {
    slug: "santa-cena",
    title: "La Santa Cena y Ordenanzas",
    category: "DOCTRINA",
    summary: "Ordenanza instituida por Jesucristo celebrada periódicamente con los elementos del pan y el fruto de la vid como conmemoración de su sacrificio y anticipación de su retorno.",
    doctrinalBasis: "Artículo 8 de la Declaración de Fe. 1 Corintios 11:23-26, Lucas 22:19-20.",
    decisions: [
      { code: "DEC-DEF-022", title: "Celebración y Administración de Ordenanzas", state: "DEFINIDA" },
    ],
    documents: [
      { code: "REN-DOC-001", title: "Declaración de Fe", status: "BORRADOR v1.0 • NO ADOPTADA" },
    ],
    statusNote: "Fuente doctrinal en BORRADOR v1.0.",
  },
  {
    slug: "seminario",
    title: "Seminario Bíblico RENACER y Formación",
    category: "FORMACIÓN",
    summary: "Institución de educación teológica y ministerial de RENACER CHURCH para la capacitación bíblica sistemática de miembros, líderes, docentes y futuros ministros del evangelio.",
    decisions: [
      { code: "DEC-DEF-015", title: "Creación y Gobierno del Seminario Bíblico RENACER", state: "DEFINIDA" },
      { code: "DEC-DEF-016", title: "Programas Académicos y Niveles de Graduación", state: "DEFINIDA" },
    ],
    documents: [
      { code: "REN-DOC-009", title: "Programa Académico del Seminario Bíblico", status: "PLANIFICADO v0.1 • NO ADOPTADA" },
    ],
    statusNote: "Programa formativo planificado en el catálogo institucional.",
  },
];

export function getEncyclopediaTopicBySlug(slug: string): EncyclopediaTopic | undefined {
  const s = normalizeText(slug);
  return ENCYCLOPEDIA_TOPICS.find((t) => normalizeText(t.slug) === s || normalizeText(t.title).includes(s));
}
