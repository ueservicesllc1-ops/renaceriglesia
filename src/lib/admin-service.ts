import { UserProfile, RoleType } from "@/types";
import { getAllInstitutionalDecisions } from "@/lib/decision-service";
import { getAllInstitutionalDocuments } from "@/lib/institutional-document-service";
import { INITIAL_MASTER_CATALOG } from "@/lib/catalog-data";
import doctrinaData from "../../import-queue/doctrina.json";
import { recordAuditLog } from "@/lib/audit";

export interface SystemUser {
  id: string;
  email: string;
  displayName: string;
  role: RoleType;
  isActive: boolean;
  isBootstrapAdmin?: boolean;
  createdAt: string;
  lastLoginAt?: string;
}

export type DocumentCompletenessType =
  | "DOCUMENTO_COMPLETO"
  | "DOCUMENTO_PARCIAL"
  | "REGISTRO_DE_CATALOGO"
  | "CONTENIDO_PENDIENTE"
  | "DECISION_INSTITUCIONAL";

export interface DocumentInventoryItem {
  id: string;
  code: string;
  name: string;
  type: string;
  category: string;
  documentState: string;
  legalState: string;
  version: string;
  source: string;
  completeness: DocumentCompletenessType;
  completenessLabel: string;
  contentLength: number;
  hasFullContent: boolean;
  updatedAt: string;
  responsibleArea: string;
  href: string;
}

export interface SystemMetrics {
  totalUsers: number;
  adminUsers: number;
  totalDecisions: number;
  totalCatalogDocuments: number;
  completeDocumentsCount: number;
  partialDocumentsCount: number;
  pendingDraftCount: number;
  draftDocumentsCount: number;
  plannedDocumentsCount: number;
  adoptedDocumentsCount: number;
  legalReviewRequiredCount: number;
  pendingImportCount: number;
}

// 1. Repositorio de Usuarios del Sistema
let registeredUsers: SystemUser[] = [
  {
    id: "usr-admin-real-001",
    email: "ueservicesllc1@gmail.com",
    displayName: "Administrador Real",
    role: "ADMINISTRADOR",
    isActive: true,
    isBootstrapAdmin: true,
    createdAt: "2026-09-02T10:00:00.000Z",
    lastLoginAt: "2026-09-03T13:50:00.000Z",
  },
  {
    id: "usr-fundador-001",
    email: "luis.uchubanda@renacerchurch.org",
    displayName: "Luis Uchubanda Falconí",
    role: "PASTOR_FUNDADOR",
    isActive: true,
    createdAt: "2026-09-02T10:00:00.000Z",
    lastLoginAt: "2026-09-03T13:30:00.000Z",
  },
  {
    id: "usr-admin-antiguo",
    email: "admin@renacerchurch.org",
    displayName: "Cuenta Administrativa Anterior",
    role: "SOLO_LECTURA",
    isActive: false,
    isBootstrapAdmin: false,
    createdAt: "2026-09-02T10:00:00.000Z",
  },
  {
    id: "usr-secretaria-001",
    email: "secretaria@renacerchurch.org",
    displayName: "Secretaría General",
    role: "LIDER",
    isActive: true,
    createdAt: "2026-09-02T11:00:00.000Z",
  },
  {
    id: "usr-lector-001",
    email: "auditor.externo@renacerchurch.org",
    displayName: "Auditor Externo",
    role: "SOLO_LECTURA",
    isActive: true,
    createdAt: "2026-09-02T11:30:00.000Z",
  },
];

let isBootstrapClosed = true; // Por defecto ya existe un administrador activo

export function getRegisteredUsers(): SystemUser[] {
  return registeredUsers;
}

export function isBootstrapAvailable(): boolean {
  return !isBootstrapClosed && registeredUsers.filter((u) => u.role === "ADMINISTRADOR").length === 0;
}

export function executeAdminBootstrap(adminData: {
  email: string;
  displayName: string;
}): { success: boolean; user?: SystemUser; error?: string } {
  if (isBootstrapClosed || registeredUsers.some((u) => u.role === "ADMINISTRADOR")) {
    return {
      success: false,
      error: "El proceso de bootstrap administrativo ya ha sido completado y cerrado.",
    };
  }

  recordAuditLog({
    userId: "system-bootstrap",
    userName: "System Bootstrap Process",
    userEmail: adminData.email,
    userRole: "ADMINISTRADOR",
    action: "ADMIN_BOOTSTRAP_STARTED",
    resource: "administracion",
    detail: "Inicio del procedimiento seguro de bootstrap del primer administrador",
  });

  const newAdmin: SystemUser = {
    id: `usr-admin-${Date.now()}`,
    email: adminData.email.toLowerCase().trim(),
    displayName: adminData.displayName.trim(),
    role: "ADMINISTRADOR",
    isActive: true,
    isBootstrapAdmin: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
  };

  registeredUsers = [newAdmin, ...registeredUsers];
  isBootstrapClosed = true;

  recordAuditLog({
    userId: newAdmin.id,
    userName: newAdmin.displayName,
    userEmail: newAdmin.email,
    userRole: "ADMINISTRADOR",
    action: "ADMIN_CREATED",
    resource: "administracion",
    resourceId: newAdmin.id,
    detail: `Primer Administrador creado e indexado: ${newAdmin.email}`,
  });

  recordAuditLog({
    userId: newAdmin.id,
    userName: newAdmin.displayName,
    userEmail: newAdmin.email,
    userRole: "ADMINISTRADOR",
    action: "ADMIN_BOOTSTRAP_CLOSED",
    resource: "administracion",
    detail: "Canal de bootstrap cerrado permanentemente para prevenir creación no autorizada",
  });

  return { success: true, user: newAdmin };
}

// 2. Verificación de permisos Server-Side
export function verifyAdminPermission(role: RoleType): boolean {
  return role === "ADMINISTRADOR" || role === "PASTOR_FUNDADOR";
}

// 3. Auditoría e Inventario Real de Documentos y Fuentes
export function getDocumentInventoryAudit(): DocumentInventoryItem[] {
  const libraryDocs = getAllInstitutionalDocuments();
  const allDecisions = getAllInstitutionalDecisions();

  const inventory: DocumentInventoryItem[] = [];

  // A. Documentos de la Biblioteca y Catálogo
  for (const doc of libraryDocs) {
    let completeness: DocumentCompletenessType = "REGISTRO_DE_CATALOGO";
    let completenessLabel = "Registro de Catálogo";
    let hasFullContent = false;

    if (doc.documentNumber === "REN-DOC-001") {
      completeness = "DOCUMENTO_COMPLETO";
      completenessLabel = "Borrador Doctrinal Completo (20 Artículos)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-ID-001") {
      completeness = "DOCUMENTO_COMPLETO";
      completenessLabel = "Documento Fundacional Completo";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-002") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (48 Artículos • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-003") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (18 Títulos, 63 Artículos • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-004") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (21 Títulos, Matriz y Flujos • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-005") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (21 Títulos, Estados, Matriz y 10 Flujos • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-006") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (21 Títulos, 18 Áreas, Matriz y 10 Flujos • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-007") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (10 Títulos, 3 Niveles, 27 Módulos, Matriz Curricular • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-008") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (12 Títulos, 3 Niveles, 24 Módulos, Competencias • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-009") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (12 Títulos, 4 Niveles, 12 Módulos, Matriz y Competencias • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-010") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (30 Títulos, 7 Eslabones, 10 Estados, 12 Formularios • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-011") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (28 Títulos, Salvaguardas, 10 Formularios • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-012") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (30 Títulos, Ordenanzas, Guiones, 12 Formularios • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-013") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (32 Títulos, 128 Artículos, 15 Formularios • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-014") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (32 Títulos, 128 Artículos, 12 Formularios • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-015") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (32 Títulos, 128 Artículos, 12 Formularios • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber === "REN-DOC-016") {
      completeness = "DOCUMENTO_PARCIAL";
      completenessLabel = "Borrador en Redacción (32 Títulos, 128 Artículos, 12 Formularios • v0.1)";
      hasFullContent = true;
    } else if (doc.documentNumber.startsWith("REN-DOC-") && parseInt(doc.documentNumber.replace("REN-DOC-", "")) >= 17 && parseInt(doc.documentNumber.replace("REN-DOC-", "")) <= 20) {
      completeness = "CONTENIDO_PENDIENTE";
      completenessLabel = "Contenido Pendiente de Redacción";
      hasFullContent = false;
    } else if (doc.content && doc.content.length > 500) {
      completeness = "DOCUMENTO_COMPLETO";
      completenessLabel = "Contenido Redactado";
      hasFullContent = true;
    } else {
      completeness = "CONTENIDO_PENDIENTE";
      completenessLabel = "Contenido Pendiente de Redacción";
      hasFullContent = false;
    }

    inventory.push({
      id: doc.id,
      code: doc.documentNumber,
      name: doc.title,
      type: doc.type,
      category: doc.category,
      documentState: doc.status,
      legalState: doc.legalState,
      version: doc.version,
      source: "Biblioteca Institucional / Catálogo Maestro",
      completeness,
      completenessLabel,
      contentLength: doc.content?.length || 0,
      hasFullContent,
      updatedAt: doc.updatedAt,
      responsibleArea: doc.responsibleArea,
      href: `/documentos/${doc.documentNumber}`,
    });
  }

  return inventory;
}

// 4. Métricas Reales Dinámicas del Sistema
export function getSystemOverviewMetrics(): SystemMetrics {
  const inventory = getDocumentInventoryAudit();
  const decisions = getAllInstitutionalDecisions();
  const users = getRegisteredUsers();

  const completeDocs = inventory.filter((d) => d.hasFullContent).length;
  const partialDocs = inventory.filter((d) => d.completeness === "DOCUMENTO_PARCIAL").length;
  const pendingDraftDocs = inventory.filter((d) => d.completeness === "CONTENIDO_PENDIENTE").length;
  const draftDocs = inventory.filter((d) => d.documentState === "BORRADOR").length;
  const plannedDocs = inventory.filter((d) => d.documentState === "PLANIFICADO").length;
  const adoptedDocs = inventory.filter((d) => d.documentState === "ADOPTADO").length;
  const legalReqDocs = inventory.filter((d) => d.legalState === "REQUIERE_REVISION_LEGAL").length;

  return {
    totalUsers: users.length,
    adminUsers: users.filter((u) => u.role === "ADMINISTRADOR" || u.role === "PASTOR_FUNDADOR").length,
    totalDecisions: decisions.length,
    totalCatalogDocuments: inventory.length,
    completeDocumentsCount: completeDocs,
    partialDocumentsCount: partialDocs,
    pendingDraftCount: pendingDraftDocs,
    draftDocumentsCount: draftDocs,
    plannedDocumentsCount: plannedDocs,
    adoptedDocumentsCount: adoptedDocs,
    legalReviewRequiredCount: legalReqDocs,
    pendingImportCount: 0,
  };
}
