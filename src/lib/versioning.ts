import { DocumentStatus, DocumentVersion } from "@/types";
import * as diff from "diff";

/**
 * Incrementa el número de versión:
 * - 'minor': 1.0 -> 1.1 (correcciones, ajustes menores)
 * - 'major': 1.1 -> 2.0 (reestructuración completa, cambios doctrinales importantes)
 */
export function calculateNextVersion(currentVersion: string, changeType: 'minor' | 'major' = 'minor'): string {
  const parts = currentVersion.split('.');
  const major = parseInt(parts[0] || '1', 10);
  const minor = parseInt(parts[1] || '0', 10);

  if (changeType === 'major') {
    return `${major + 1}.0`;
  }
  return `${major}.${minor + 1}`;
}

export interface DiffPart {
  value: string;
  added?: boolean;
  removed?: boolean;
}

/**
 * Genera una comparación visual entre dos versiones de contenido de un documento
 */
export function compareDocVersions(oldContent: string, newContent: string): DiffPart[] {
  return diff.diffWords(oldContent, newContent);
}

/**
 * Crea un registro de versión histórica inmutable
 */
export function createVersionSnapshot(
  versionNum: string,
  content: string,
  authorId: string,
  authorName: string,
  status: DocumentStatus,
  changeNote?: string
): DocumentVersion {
  return {
    id: `ver-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    versionNum,
    content,
    authorId,
    authorName,
    status,
    changeNote: changeNote || 'Actualización de contenido',
    createdAt: new Date().toISOString(),
  };
}
