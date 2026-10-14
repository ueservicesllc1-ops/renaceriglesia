// ============================================================================
// RENACER CHURCH MAESTRO — ARQUITECTURA ACADÉMICA DEL SEMINARIO BÍBLICO
// ============================================================================

import { DocumentStatus, DocumentVersion } from "./index";

export type AcademicLevel = "NIVEL_1" | "NIVEL_2" | "NIVEL_3" | "NIVEL_4";

export type BookEditionType = "LIBRO_MAESTRO" | "LIBRO_ALUMNO";

export interface PedagogicalSection {
  id: string;
  type:
    | "OBJETIVOS"
    | "INTRODUCCION"
    | "FUNDAMENTO_BIBLICO"
    | "DESARROLLO"
    | "EJEMPLOS"
    | "PREGUNTAS_DISCUSION"
    | "ACTIVIDADES_DINAMICAS"
    | "TAREAS"
    | "EVALUACION"
    | "RESPUESTAS_MAESTRO"
    | "NOTAS_PEDAGOGICAS"
    | "CRITERIOS_EVALUACION"
    | "ESPACIO_NOTAS_ALUMNO"
    | "MATERIAL_COMPLEMENTARIO";
  title: string;
  content: string; // Markdown / Texto estructurado
  isTeacherOnly?: boolean; // Visible únicamente en Libro del Maestro
}

export interface AcademicLesson {
  id: string;
  lessonNumber: number;
  unitNumber: number;
  title: string;
  estimatedHours?: number;
  sections: PedagogicalSection[];
}

export interface AcademicUnit {
  id: string;
  unitNumber: number;
  title: string;
  description?: string;
  lessons: AcademicLesson[];
}

export interface AcademicMetadata {
  subjectCode: string; // Ej: "SBR-TEO-101", "SBR-HER-201"
  subjectName: string; // Ej: "Teología Sistemática I", "Hermenéutica Bíblica"
  academicLevel: AcademicLevel;
  editionType: BookEditionType; // "LIBRO_MAESTRO" | "LIBRO_ALUMNO"
  linkedEditionDocId?: string; // ID del libro gemelo (Maestro <-> Alumno)
  totalUnits: number;
  totalLessons: number;
  units?: AcademicUnit[];
}

export interface AcademicSubject {
  id: string;
  code: string;
  name: string;
  level: AcademicLevel;
  description: string;
  totalUnits: number;
  totalLessons: number;
  teacherBookDocId?: string;
  studentBookDocId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
