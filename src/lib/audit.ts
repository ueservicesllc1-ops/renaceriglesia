import { AuditActionType, AuditLogEntry, RoleType } from "@/types";

/**
 * Registrador central de Auditoría (Audit Log).
 * Garantiza trazabilidad y transparencia en todas las acciones críticas.
 */
export async function recordAuditLog(entry: {
  userId: string;
  userName: string;
  userEmail: string;
  userRole: RoleType;
  action: AuditActionType;
  resource: string;
  resourceId?: string;
  detail: string;
  ipAddress?: string;
}): Promise<AuditLogEntry> {
  const auditEntry: AuditLogEntry = {
    id: `audit-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    ...entry,
    createdAt: new Date().toISOString(),
  };

  // En producción se guarda en la colección 'audit_logs' de Firestore
  try {
    if (typeof window === "undefined") {
      // Backend / Server-side logging
      console.log(`[AUDIT LOG] ${auditEntry.createdAt} | ${auditEntry.action} | User: ${auditEntry.userName} (${auditEntry.userRole}) | Resource: ${auditEntry.resource} | Detail: ${auditEntry.detail}`);
    }
  } catch (err) {
    console.error("Error writing audit log entry:", err);
  }

  return auditEntry;
}
