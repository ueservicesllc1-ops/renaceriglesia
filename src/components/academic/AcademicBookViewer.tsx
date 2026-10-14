"use client";

import React, { useState } from "react";
import { RenacerDocument, BookEditionType, AcademicLesson, PedagogicalSection } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { useDocuments } from "@/context/DocumentContext";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { hasPermission } from "@/lib/permissions";
import {
  GraduationCap,
  BookOpen,
  UserCheck,
  FileText,
  Printer,
  Download,
  History,
  CheckCircle2,
  Lock,
  Eye,
  HelpCircle,
  Lightbulb,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";

interface AcademicBookViewerProps {
  teacherBookDoc?: RenacerDocument;
  studentBookDoc?: RenacerDocument;
  subjectName: string;
  subjectCode: string;
  levelName: string;
}

export const AcademicBookViewer: React.FC<AcademicBookViewerProps> = ({
  teacherBookDoc,
  studentBookDoc,
  subjectName,
  subjectCode,
  levelName,
}) => {
  const { currentRole } = useAuth();
  const { updateDocumentStatus } = useDocuments();

  // Selección de Edición: "LIBRO_MAESTRO" o "LIBRO_ALUMNO"
  const [activeEdition, setActiveEdition] = useState<BookEditionType>("LIBRO_MAESTRO");
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"lectura" | "historial" | "pedagogia">("lectura");

  const currentDoc = activeEdition === "LIBRO_MAESTRO" ? teacherBookDoc : studentBookDoc;
  const isTeacherEdition = activeEdition === "LIBRO_MAESTRO";

  const canEditAcademic = hasPermission(currentRole, "EDIT", "seminario");
  const canAdoptAcademic = hasPermission(currentRole, "ADOPT_OFFICIAL", "seminario");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header Institucional del Seminario Bíblico RENACER */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#131d33] via-[#0f1b38] to-[#0a1020] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5 text-xs text-purple-300 font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>Seminario Bíblico RENACER • {levelName}</span>
              <span>•</span>
              <span className="font-mono text-amber-300">{subjectCode}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">{subjectName}</h1>
          </div>

          <div className="flex items-center gap-2">
            {currentDoc && <StatusBadge status={currentDoc.status} size="lg" />}
          </div>
        </div>

        {/* Conmutador de Ediciones (LIBRO DEL MAESTRO vs LIBRO DEL ALUMNO) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1 no-print">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-950/90 border border-slate-800">
            <button
              onClick={() => setActiveEdition("LIBRO_MAESTRO")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isTeacherEdition
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              <UserCheck className="w-4 h-4 text-purple-300" />
              <span>LIBRO DEL MAESTRO</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-200 border border-purple-700/50">
                Con Respuestas y Guía
              </span>
            </button>

            <button
              onClick={() => setActiveEdition("LIBRO_ALUMNO")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !isTeacherEdition
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-900/40 border border-cyan-400/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
              }`}
            >
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>LIBRO DEL ALUMNO</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-200 border border-cyan-700/50">
                Ejercicios y Tareas
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5" />}
              onClick={handlePrint}
            >
              Imprimir Edición
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
              onClick={handlePrint}
            >
              Descargar PDF Académico
            </Button>
            {canAdoptAcademic && currentDoc && currentDoc.status !== "ADOPTADO" && (
              <Button
                variant="gold"
                size="sm"
                icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                onClick={() => updateDocumentStatus(currentDoc.id, "ADOPTADO")}
              >
                Adoptar Libro Oficial
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Contenido Académico Completo */}
      {currentDoc ? (
        <div className="p-8 rounded-3xl bg-[#101728] border border-slate-800 shadow-xl space-y-6 print-document-container">
          {/* Encabezado Oficial Académico para Impresión */}
          <div className="hidden print:block print-header">
            <div className="text-center space-y-1 mb-4">
              <h2 className="text-lg font-black tracking-wider uppercase text-blue-900">
                SEMINARIO BÍBLICO RENACER • {levelName}
              </h2>
              <p className="text-xs italic text-slate-600">RENACER CHURCH — Paterson, New Jersey</p>
              <p className="text-sm font-bold text-slate-800 uppercase mt-1">
                {subjectName} ({subjectCode})
              </p>
              <div className="inline-block mt-1 px-3 py-0.5 border border-blue-900 font-bold text-xs uppercase">
                {isTeacherEdition ? "EDICIÓN: LIBRO DEL MAESTRO" : "EDICIÓN: LIBRO DEL ALUMNO"}
              </div>
              <p className="text-xs font-mono text-slate-700 mt-1">
                Versión {currentDoc.currentVersionNum} • Estado: {currentDoc.status}
              </p>
            </div>
          </div>

          {/* Banner de Edición en Pantalla */}
          <div
            className={`p-4 rounded-2xl border flex items-center justify-between text-xs font-semibold ${
              isTeacherEdition
                ? "bg-purple-950/30 border-purple-500/30 text-purple-200"
                : "bg-cyan-950/30 border-cyan-500/30 text-cyan-200"
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>
                Visualizando: <strong>{isTeacherEdition ? "LIBRO DEL MAESTRO" : "LIBRO DEL ALUMNO"}</strong>
              </span>
            </div>
            <span className="font-mono text-[11px] opacity-80">
              Versión {currentDoc.currentVersionNum} • {currentDoc.docNumber}
            </span>
          </div>

          {/* Cuerpo del Texto Académico */}
          <article className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {currentDoc.content}
          </article>

          {/* Pie de Página */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <div>
              <span>Autor / Coordinador: </span>
              <strong className="text-slate-200">{currentDoc.authorName}</strong>
            </div>
            <div className="font-mono text-[11px]">
              Seminario Bíblico RENACER • Material Académico Oficial
            </div>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800 text-slate-400 space-y-2">
          <p className="font-semibold text-white">No se ha cargado esta edición académica todavía.</p>
          <p className="text-xs">El material se registrará mediante la estructura oficial del Seminario.</p>
        </div>
      )}
    </div>
  );
};
