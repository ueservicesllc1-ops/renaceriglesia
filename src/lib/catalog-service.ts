import { MasterCatalogDocument, MasterDocumentStatus, DocumentCategory, DocumentHierarchyLevel } from "@/types/catalog";
import { INITIAL_MASTER_CATALOG } from "./catalog-data";
import { MasterCatalogDocumentSchema } from "@/schemas/catalog.schema";

let memoryCatalog: MasterCatalogDocument[] = [...INITIAL_MASTER_CATALOG];

/**
 * Obtiene todos los documentos registrados en el catálogo maestro.
 */
export function getAllCatalogDocuments(): MasterCatalogDocument[] {
  return memoryCatalog;
}

/**
 * Busca un documento por su número oficial (ej: 'REN-DOC-001') o ID.
 */
export function getCatalogDocumentByNumber(documentNumber: string): MasterCatalogDocument | undefined {
  return memoryCatalog.find(
    (doc) => doc.documentNumber.toUpperCase() === documentNumber.toUpperCase() || doc.documentId === documentNumber
  );
}

export interface CatalogSearchFilters {
  query?: string;
  category?: DocumentCategory;
  hierarchyLevel?: DocumentHierarchyLevel;
  status?: MasterDocumentStatus;
  owner?: string;
}

/**
 * Búsqueda avanzada de documentos por texto libre, categoría, nivel o estado.
 */
export function searchCatalogDocuments(filters: CatalogSearchFilters): MasterCatalogDocument[] {
  return memoryCatalog.filter((doc) => {
    if (filters.category && doc.category !== filters.category) return false;
    if (filters.hierarchyLevel && doc.hierarchyLevel !== filters.hierarchyLevel) return false;
    if (filters.status && doc.status !== filters.status) return false;
    if (filters.owner && !doc.owner.toLowerCase().includes(filters.owner.toLowerCase())) return false;

    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matchNumber = doc.documentNumber.toLowerCase().includes(q);
      const matchTitle = doc.title.toLowerCase().includes(q);
      const matchDesc = doc.description.toLowerCase().includes(q);
      const matchTags = doc.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchNumber && !matchTitle && !matchDesc && !matchTags) return false;
    }

    return true;
  });
}

/**
 * Obtiene las relaciones de un documento (Padres, Hijos, Complementos, Derivaciones).
 */
export function getDocumentRelationsTree(documentNumber: string): {
  parent?: MasterCatalogDocument;
  children: MasterCatalogDocument[];
  related: MasterCatalogDocument[];
} {
  const currentDoc = getCatalogDocumentByNumber(documentNumber);
  if (!currentDoc) return { children: [], related: [] };

  const parent = currentDoc.parentDocument ? getCatalogDocumentByNumber(currentDoc.parentDocument) : undefined;
  const children = memoryCatalog.filter((d) => d.parentDocument === currentDoc.documentNumber);
  
  const relatedNumbers = currentDoc.relatedDocuments.map((r) => r.targetDocumentNumber);
  const related = memoryCatalog.filter((d) => relatedNumbers.includes(d.documentNumber));

  return { parent, children, related };
}

/**
 * Valida y registra la transición de estado de un documento dentro del flujo institucional.
 */
export function validateStateTransition(
  currentStatus: MasterDocumentStatus,
  targetStatus: MasterDocumentStatus
): { isValid: boolean; error?: string } {
  // Prohibición estricta: PLANIFICADO nunca puede saltar directamente a ADOPTADO
  if (currentStatus === "PLANIFICADO" && targetStatus === "ADOPTADO") {
    return {
      isValid: false,
      error: "Transición Prohibida: Un documento PLANIFICADO debe pasar por BORRADOR, EN_REVISION y CANDIDATO_APROBACION antes de ser ADOPTADO.",
    };
  }

  // Si ya es ADOPTADO, no se puede modificar directamente
  if (currentStatus === "ADOPTADO" && targetStatus === "BORRADOR") {
    return {
      isValid: false,
      error: "Inmutabilidad: Un documento ADOPTADO no puede revertirse a BORRADOR. Debe generarse una nueva versión.",
    };
  }

  return { isValid: true };
}
