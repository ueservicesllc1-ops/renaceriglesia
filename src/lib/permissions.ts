import { RoleType } from "@/types";

export type PermissionAction =
  | 'VIEW'
  | 'CREATE'
  | 'EDIT'
  | 'DELETE'
  | 'COMMENT'
  | 'REQUEST_REVIEW'
  | 'REVIEW'
  | 'APPROVE_INTERNAL'
  | 'ADOPT_OFFICIAL'
  | 'PUBLISH_ADOPTED'
  | 'ARCHIVE'
  | 'EXPORT_PDF'
  | 'PRINT'
  | 'IMPORT_JSON'
  | 'MANAGE_USERS'
  | 'VIEW_AUDIT_LOGS'
  | 'MANAGE_LEGAL';

export type Resource =
  | 'doctrina'
  | 'constitucion'
  | 'bylaws'
  | 'gobierno'
  | 'membresia'
  | 'ministerios'
  | 'escuela_discipulos'
  | 'escuela_lideres'
  | 'seminario'
  | 'credenciales'
  | 'proteccion_etica'
  | 'finanzas'
  | 'ceremonias'
  | 'formacion_pastores'
  | 'documentacion_legal'
  | 'archivo_digital'
  | 'usuarios'
  | 'audit_logs'
  | 'import_queue'
  | 'centro_legal'
  | 'renacer_ia'
  | 'adoption_records';

export const ROLE_DISPLAY_NAMES: Record<RoleType, string> = {
  ADMINISTRADOR: 'Administrador del Sistema',
  PASTOR_FUNDADOR: 'Pastor Fundador (Luis Uchubanda Falconí)',
  PASTOR: 'Pastor',
  CONSEJO_GOBIERNO: 'Consejo de Gobierno',
  CONSEJO_MINISTERIAL: 'Consejo Ministerial',
  REVISOR_DOCTRINAL: 'Revisor Doctrinal',
  REVISOR_ACADEMICO: 'Revisor Académico',
  REVISOR_LEGAL: 'Revisor Legal',
  DOCENTE: 'Docente / Instructor',
  LIDER: 'Líder de Ministerio',
  MIEMBRO: 'Miembro',
  ESTUDIANTE: 'Estudiante',
  SOLO_LECTURA: 'Solo Lectura / Consulta',
};

/**
 * Matriz explícita de permisos por Capacidad y Recurso.
 * NINGÚN rol hereda permisos implícitos por un número; cada acción está definida de forma granular y explícita.
 * ADOPT_OFFICIAL está estrictamente reservado al PASTOR_FUNDADOR.
 */
const ROLE_PERMISSIONS_TABLE: Record<RoleType, Partial<Record<Resource, PermissionAction[]>>> = {
  ADMINISTRADOR: {
    doctrina: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'REVIEW', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    constitucion: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'REVIEW', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    bylaws: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'REVIEW', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    gobierno: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    membresia: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'ARCHIVE', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    ministerios: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'ARCHIVE', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    escuela_discipulos: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    escuela_lideres: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    seminario: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    credenciales: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    proteccion_etica: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    finanzas: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    ceremonias: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    formacion_pastores: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    documentacion_legal: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT', 'DELETE'],
    archivo_digital: ['VIEW', 'CREATE', 'EDIT', 'DELETE', 'EXPORT_PDF', 'PRINT'],
    usuarios: ['VIEW', 'CREATE', 'EDIT', 'DELETE', 'MANAGE_USERS'],
    audit_logs: ['VIEW', 'VIEW_AUDIT_LOGS'],
    import_queue: ['VIEW', 'CREATE', 'EDIT', 'IMPORT_JSON', 'DELETE'],
    centro_legal: ['VIEW', 'CREATE', 'EDIT', 'MANAGE_LEGAL', 'DELETE', 'PRINT', 'EXPORT_PDF'],
    renacer_ia: ['VIEW', 'COMMENT'],
    adoption_records: ['VIEW', 'CREATE', 'EDIT', 'PUBLISH_ADOPTED'],
  },

  PASTOR_FUNDADOR: {
    doctrina: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'REVIEW', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT'],
    constitucion: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'REVIEW', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT'],
    bylaws: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'REVIEW', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT'],
    gobierno: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'ARCHIVE', 'EXPORT_PDF', 'PRINT'],
    membresia: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    ministerios: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'ARCHIVE', 'EXPORT_PDF', 'PRINT'],
    escuela_discipulos: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    escuela_lideres: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    seminario: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    credenciales: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    proteccion_etica: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    finanzas: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    ceremonias: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    formacion_pastores: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    documentacion_legal: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED', 'EXPORT_PDF', 'PRINT'],
    archivo_digital: ['VIEW', 'CREATE', 'EDIT', 'EXPORT_PDF', 'PRINT'],
    usuarios: ['VIEW', 'CREATE', 'EDIT', 'MANAGE_USERS'],
    audit_logs: ['VIEW', 'VIEW_AUDIT_LOGS'],
    import_queue: ['VIEW', 'CREATE', 'EDIT', 'IMPORT_JSON'],
    centro_legal: ['VIEW', 'CREATE', 'EDIT', 'MANAGE_LEGAL', 'PRINT', 'EXPORT_PDF'],
    renacer_ia: ['VIEW', 'COMMENT'],
    adoption_records: ['VIEW', 'CREATE', 'EDIT', 'ADOPT_OFFICIAL', 'PUBLISH_ADOPTED'],
  },

  PASTOR: {
    doctrina: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'REVIEW', 'APPROVE_INTERNAL', 'EXPORT_PDF', 'PRINT'],
    constitucion: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    bylaws: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    gobierno: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    membresia: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    ministerios: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    escuela_discipulos: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'EXPORT_PDF', 'PRINT'],
    escuela_lideres: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'EXPORT_PDF', 'PRINT'],
    seminario: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'EXPORT_PDF', 'PRINT'],
    credenciales: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'EXPORT_PDF', 'PRINT'],
    proteccion_etica: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    finanzas: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    ceremonias: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    formacion_pastores: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    documentacion_legal: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    archivo_digital: ['VIEW', 'CREATE', 'EXPORT_PDF', 'PRINT'],
    usuarios: ['VIEW'],
    audit_logs: [],
    import_queue: ['VIEW'],
    centro_legal: ['VIEW', 'PRINT'],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  CONSEJO_GOBIERNO: {
    doctrina: ['VIEW', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'EXPORT_PDF', 'PRINT'],
    constitucion: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'EXPORT_PDF', 'PRINT'],
    bylaws: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'EXPORT_PDF', 'PRINT'],
    gobierno: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'EXPORT_PDF', 'PRINT'],
    finanzas: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'EXPORT_PDF', 'PRINT'],
    proteccion_etica: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'EXPORT_PDF', 'PRINT'],
    documentacion_legal: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'APPROVE_INTERNAL', 'ADOPT_OFFICIAL', 'EXPORT_PDF', 'PRINT'],
    centro_legal: ['VIEW', 'CREATE', 'EDIT', 'MANAGE_LEGAL', 'PRINT', 'EXPORT_PDF'],
    audit_logs: ['VIEW', 'VIEW_AUDIT_LOGS'],
    archivo_digital: ['VIEW', 'EXPORT_PDF', 'PRINT'],
    usuarios: ['VIEW'],
    membresia: ['VIEW', 'PRINT'],
    ministerios: ['VIEW', 'PRINT'],
    escuela_discipulos: ['VIEW', 'PRINT'],
    escuela_lideres: ['VIEW', 'PRINT'],
    seminario: ['VIEW', 'PRINT'],
    credenciales: ['VIEW', 'REVIEW', 'APPROVE_INTERNAL', 'PRINT'],
    ceremonias: ['VIEW', 'PRINT'],
    formacion_pastores: ['VIEW', 'PRINT'],
    import_queue: ['VIEW'],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  CONSEJO_MINISTERIAL: {
    doctrina: ['VIEW', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'EXPORT_PDF', 'PRINT'],
    credenciales: ['VIEW', 'COMMENT', 'REVIEW', 'APPROVE_INTERNAL', 'EXPORT_PDF', 'PRINT'],
    ceremonias: ['VIEW', 'COMMENT', 'REVIEW', 'EXPORT_PDF', 'PRINT'],
    formacion_pastores: ['VIEW', 'COMMENT', 'REVIEW', 'EXPORT_PDF', 'PRINT'],
    ministerios: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    proteccion_etica: ['VIEW', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    escuela_discipulos: ['VIEW', 'COMMENT', 'PRINT'],
    escuela_lideres: ['VIEW', 'COMMENT', 'PRINT'],
    seminario: ['VIEW', 'COMMENT', 'PRINT'],
    constitucion: ['VIEW', 'PRINT'],
    bylaws: ['VIEW', 'PRINT'],
    gobierno: ['VIEW', 'PRINT'],
    membresia: ['VIEW', 'PRINT'],
    finanzas: ['VIEW'],
    documentacion_legal: ['VIEW', 'PRINT'],
    archivo_digital: ['VIEW', 'PRINT'],
    usuarios: ['VIEW'],
    audit_logs: [],
    import_queue: ['VIEW'],
    centro_legal: ['VIEW'],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  REVISOR_DOCTRINAL: {
    doctrina: ['VIEW', 'EDIT', 'COMMENT', 'REVIEW', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    seminario: ['VIEW', 'COMMENT', 'REVIEW', 'PRINT'],
    escuela_discipulos: ['VIEW', 'COMMENT', 'REVIEW', 'PRINT'],
    escuela_lideres: ['VIEW', 'COMMENT', 'REVIEW', 'PRINT'],
    constitucion: ['VIEW', 'PRINT'],
    bylaws: ['VIEW', 'PRINT'],
    gobierno: ['VIEW', 'PRINT'],
    membresia: ['VIEW'],
    ministerios: ['VIEW'],
    credenciales: ['VIEW'],
    proteccion_etica: ['VIEW', 'COMMENT'],
    finanzas: [],
    ceremonias: ['VIEW', 'COMMENT'],
    formacion_pastores: ['VIEW', 'COMMENT'],
    documentacion_legal: [],
    archivo_digital: ['VIEW'],
    usuarios: [],
    audit_logs: [],
    import_queue: ['VIEW'],
    centro_legal: [],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  REVISOR_ACADEMICO: {
    seminario: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    escuela_discipulos: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    escuela_lideres: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    doctrina: ['VIEW', 'COMMENT', 'PRINT'],
    constitucion: ['VIEW'],
    bylaws: ['VIEW'],
    gobierno: ['VIEW'],
    membresia: ['VIEW'],
    ministerios: ['VIEW'],
    credenciales: ['VIEW', 'COMMENT'],
    proteccion_etica: ['VIEW'],
    finanzas: [],
    ceremonias: ['VIEW'],
    formacion_pastores: ['VIEW', 'COMMENT'],
    documentacion_legal: [],
    archivo_digital: ['VIEW'],
    usuarios: [],
    audit_logs: [],
    import_queue: ['VIEW'],
    centro_legal: [],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  REVISOR_LEGAL: {
    centro_legal: ['VIEW', 'CREATE', 'EDIT', 'MANAGE_LEGAL', 'PRINT', 'EXPORT_PDF'],
    documentacion_legal: ['VIEW', 'CREATE', 'EDIT', 'COMMENT', 'REVIEW', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    constitucion: ['VIEW', 'COMMENT', 'REVIEW', 'PRINT'],
    bylaws: ['VIEW', 'COMMENT', 'REVIEW', 'PRINT'],
    proteccion_etica: ['VIEW', 'COMMENT', 'REVIEW', 'PRINT'],
    finanzas: ['VIEW', 'COMMENT'],
    doctrina: ['VIEW', 'PRINT'],
    gobierno: ['VIEW', 'PRINT'],
    membresia: ['VIEW'],
    ministerios: ['VIEW'],
    escuela_discipulos: ['VIEW'],
    escuela_lideres: ['VIEW'],
    seminario: ['VIEW'],
    credenciales: ['VIEW'],
    ceremonias: ['VIEW'],
    formacion_pastores: ['VIEW'],
    archivo_digital: ['VIEW'],
    usuarios: [],
    audit_logs: [],
    import_queue: ['VIEW'],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  DOCENTE: {
    seminario: ['VIEW', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    escuela_discipulos: ['VIEW', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    escuela_lideres: ['VIEW', 'EDIT', 'COMMENT', 'REQUEST_REVIEW', 'EXPORT_PDF', 'PRINT'],
    doctrina: ['VIEW', 'COMMENT', 'PRINT'],
    constitucion: ['VIEW'],
    bylaws: ['VIEW'],
    gobierno: ['VIEW'],
    membresia: ['VIEW'],
    ministerios: ['VIEW'],
    credenciales: [],
    proteccion_etica: ['VIEW'],
    finanzas: [],
    ceremonias: ['VIEW'],
    formacion_pastores: [],
    documentacion_legal: [],
    archivo_digital: ['VIEW'],
    usuarios: [],
    audit_logs: [],
    import_queue: [],
    centro_legal: [],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  LIDER: {
    ministerios: ['VIEW', 'EDIT', 'COMMENT', 'EXPORT_PDF', 'PRINT'],
    membresia: ['VIEW', 'COMMENT', 'PRINT'],
    escuela_discipulos: ['VIEW', 'PRINT'],
    escuela_lideres: ['VIEW', 'COMMENT', 'PRINT'],
    doctrina: ['VIEW', 'PRINT'],
    constitucion: ['VIEW'],
    bylaws: ['VIEW'],
    gobierno: ['VIEW'],
    seminario: ['VIEW', 'PRINT'],
    credenciales: [],
    proteccion_etica: ['VIEW'],
    finanzas: [],
    ceremonias: ['VIEW', 'PRINT'],
    formacion_pastores: [],
    documentacion_legal: [],
    archivo_digital: ['VIEW'],
    usuarios: [],
    audit_logs: [],
    import_queue: [],
    centro_legal: [],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  MIEMBRO: {
    doctrina: ['VIEW', 'PRINT', 'EXPORT_PDF'],
    constitucion: ['VIEW', 'PRINT'],
    bylaws: ['VIEW', 'PRINT'],
    gobierno: ['VIEW'],
    membresia: ['VIEW'],
    ministerios: ['VIEW'],
    escuela_discipulos: ['VIEW'],
    escuela_lideres: ['VIEW'],
    seminario: ['VIEW'],
    ceremonias: ['VIEW'],
    proteccion_etica: ['VIEW'],
    credenciales: [],
    finanzas: [],
    formacion_pastores: [],
    documentacion_legal: [],
    archivo_digital: [],
    usuarios: [],
    audit_logs: [],
    import_queue: [],
    centro_legal: [],
    renacer_ia: ['VIEW'],
  },

  ESTUDIANTE: {
    escuela_discipulos: ['VIEW', 'COMMENT', 'PRINT'],
    escuela_lideres: ['VIEW', 'COMMENT', 'PRINT'],
    seminario: ['VIEW', 'COMMENT', 'PRINT'],
    doctrina: ['VIEW', 'PRINT'],
    constitucion: ['VIEW'],
    bylaws: ['VIEW'],
    gobierno: ['VIEW'],
    membresia: ['VIEW'],
    ministerios: ['VIEW'],
    ceremonias: ['VIEW'],
    proteccion_etica: ['VIEW'],
    credenciales: [],
    finanzas: [],
    formacion_pastores: [],
    documentacion_legal: [],
    archivo_digital: [],
    usuarios: [],
    audit_logs: [],
    import_queue: [],
    centro_legal: [],
    renacer_ia: ['VIEW', 'COMMENT'],
  },

  SOLO_LECTURA: {
    doctrina: ['VIEW', 'PRINT'],
    constitucion: ['VIEW', 'PRINT'],
    bylaws: ['VIEW', 'PRINT'],
    gobierno: ['VIEW'],
    membresia: ['VIEW'],
    ministerios: ['VIEW'],
    escuela_discipulos: ['VIEW'],
    escuela_lideres: ['VIEW'],
    seminario: ['VIEW'],
    ceremonias: ['VIEW'],
    proteccion_etica: ['VIEW'],
    credenciales: [],
    finanzas: [],
    formacion_pastores: [],
    documentacion_legal: [],
    archivo_digital: [],
    usuarios: [],
    audit_logs: [],
    import_queue: [],
    centro_legal: [],
    renacer_ia: ['VIEW'],
  },
};

/**
 * Función central de verificación de permisos granulares.
 * Consulta la matriz explícita de capacidades por rol y recurso.
 */
export function hasPermission(
  role: RoleType,
  action: PermissionAction,
  resource: Resource
): boolean {
  const roleRules = ROLE_PERMISSIONS_TABLE[role];
  if (!roleRules) return false;

  const allowedActions = roleRules[resource];
  if (!allowedActions) return false;

  return allowedActions.includes(action);
}

/**
 * Lanza error si el rol no tiene el permiso requerido (usado en Server Actions y API).
 */
export function assertPermission(
  role: RoleType,
  action: PermissionAction,
  resource: Resource
): void {
  if (!hasPermission(role, action, resource)) {
    throw new Error(
      `Acceso Denegado: El rol [${ROLE_DISPLAY_NAMES[role]}] no tiene autorización para realizar la acción [${action}] en el recurso [${resource}].`
    );
  }
}
