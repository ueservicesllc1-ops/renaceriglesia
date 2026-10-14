"use client";

import React, { useState } from "react";
import { RenacerDocument } from "@/types";
import { useDocuments } from "@/context/DocumentContext";
import { Button } from "@/components/ui/Button";
import { calculateNextVersion } from "@/lib/versioning";
import { Save, X, ShieldAlert, AlertTriangle } from "lucide-react";

interface DocumentEditorProps {
  document: RenacerDocument;
  onCancel: () => void;
  onSaveCompleted: () => void;
}

export const DocumentEditor: React.FC<DocumentEditorProps> = ({
  document,
  onCancel,
  onSaveCompleted,
}) => {
  const { updateDocumentContent } = useDocuments();

  const [content, setContent] = useState(document.content);
  const [changeNote, setChangeNote] = useState("");
  const [changeType, setChangeType] = useState<"minor" | "major">("minor");

  const nextVer = calculateNextVersion(document.currentVersionNum, changeType);
  const isCurrentlyAdopted = document.status === "ADOPTADO";

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    updateDocumentContent(
      document.id,
      content,
      changeNote || (changeType === "major" ? "Revisión mayor de contenido" : "Ajustes de redacción y formato"),
      changeType
    );
    onSaveCompleted();
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Alerta de Preservación si el documento es ADOPTADO */}
      {isCurrentlyAdopted && (
        <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/40 flex items-start gap-3 text-blue-200">
          <ShieldAlert className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="text-xs">
            <strong className="font-bold text-blue-300">PRESERVACIÓN DE DOCTRINA/NORMA ADOPTADA:</strong> Este documento se encuentra actualmente en estado{" "}
            <span className="font-bold text-emerald-300">ADOPTADO (OFICIAL)</span>. Al guardar cambios, la versión oficial vigente{" "}
            <strong>quedará intacta e inmutable en el historial</strong>, y se creará una nueva versión de trabajo ({nextVer}) para su posterior revisión y aprobación.
          </div>
        </div>
      )}

      {/* Header del Editor */}
      <div className="p-6 rounded-2xl bg-gradient-to-b from-[#131d33] to-[#0d1424] border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Modo Edición y Versionado</span>
          <h2 className="text-xl font-bold text-white">{document.title}</h2>
          <p className="text-xs text-slate-400 mt-1">
            Versión actual: <span className="font-mono font-bold text-slate-200">{document.currentVersionNum}</span> →{" "}
            Nueva versión generada: <span className="font-mono font-bold text-amber-300">{nextVer}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" icon={<X className="w-4 h-4" />} onClick={onCancel} type="button">
            Cancelar
          </Button>
          <Button variant="gold" size="sm" icon={<Save className="w-4 h-4" />} type="submit">
            Guardar Nueva Versión ({nextVer})
          </Button>
        </div>
      </div>

      {/* Controles de Versión */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Tipo de Incremento de Versión:
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="radio"
                name="changeType"
                checked={changeType === "minor"}
                onChange={() => setChangeType("minor")}
                className="text-brand-500"
              />
              <span>Menor ({calculateNextVersion(document.currentVersionNum, "minor")}) — Formato o redacción</span>
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
              <input
                type="radio"
                name="changeType"
                checked={changeType === "major"}
                onChange={() => setChangeType("major")}
                className="text-amber-500"
              />
              <span>Mayor ({calculateNextVersion(document.currentVersionNum, "major")}) — Modificación estructural</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Motivo del Cambio (Registrado en Audit Log e Historial):
          </label>
          <input
            type="text"
            required
            value={changeNote}
            onChange={(e) => setChangeNote(e.target.value)}
            placeholder="Ej: Se añadieron referencias y se precisó la redacción"
            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {/* Editor de Texto Markdown */}
      <div className="rounded-2xl bg-[#101728] border border-slate-800 overflow-hidden shadow-xl">
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Editor de Contenido (Markdown)</span>
          <span className="text-[11px] text-emerald-400 font-mono">🔒 Inmutabilidad de versiones activada</span>
        </div>
        <textarea
          rows={18}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-6 bg-transparent text-sm text-slate-100 font-mono leading-relaxed focus:outline-none resize-y"
          placeholder="Escribe el contenido del documento..."
        />
      </div>
    </form>
  );
};
