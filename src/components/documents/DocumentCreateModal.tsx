"use client";

import React, { useState } from "react";
import { CreateDocumentInputSchema, CreateDocumentInput } from "@/schemas/institutional-document.schema";
import { createInstitutionalDocument, FullInstitutionalDocument } from "@/lib/institutional-document-service";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { X, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";

interface DocumentCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreated: (doc: FullInstitutionalDocument) => void;
}

export const DocumentCreateModal: React.FC<DocumentCreateModalProps> = ({ isOpen, onClose, onCreated }) => {
  const { user, currentRole } = useAuth();

  const [formData, setFormData] = useState<CreateDocumentInput>({
    title: "",
    documentNumber: "REN-DOC-",
    type: "GOBIERNO",
    category: "GOBIERNO",
    description: "",
    content: "# TÍTULO DEL DOCUMENTO\n\n### 1. Objetivo\nDescribir el propósito institucional...\n\n### 2. Alcance\nAplica a...",
    confidentiality: "INTERNO_CONGREGACION",
    documentTarget: "MANUAL",
    legalState: "NO_REQUIERE_REVISION_LEGAL",
    responsibleArea: "CONSEJO_GOBIERNO",
    initialVersion: "1.0",
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const validation = CreateDocumentInputSchema.safeParse(formData);
    if (!validation.success) {
      setErrorMsg(validation.error.errors[0]?.message || "Datos incompletos.");
      return;
    }

    const result = createInstitutionalDocument(formData, {
      id: user?.id || "usr-current",
      name: user?.displayName || "Administrador",
      role: currentRole,
    });

    if (!result.success || !result.document) {
      setErrorMsg(result.error || "No se pudo crear el documento.");
      return;
    }

    onCreated(result.document);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#10192e] border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <h2 className="text-lg font-black text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              <span>NUEVO DOCUMENTO INSTITUCIONAL</span>
            </h2>
            <p className="text-xs text-slate-400">
              Registro formal en la biblioteca documental de RENACER CHURCH MAESTRO
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-bold text-slate-300 font-mono">CÓDIGO (REN-DOC-XXX):</label>
              <input
                type="text"
                value={formData.documentNumber}
                onChange={(e) => setFormData({ ...formData, documentNumber: e.target.value.toUpperCase() })}
                placeholder="REN-DOC-021"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono focus:border-amber-400 focus:outline-none"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-300 font-mono">VERSIÓN INICIAL:</label>
              <input
                type="text"
                value={formData.initialVersion}
                onChange={(e) => setFormData({ ...formData, initialVersion: e.target.value })}
                placeholder="1.0"
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono focus:border-amber-400 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-300">TÍTULO DEL DOCUMENTO:</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Ej: Manual de Procedimientos de Tesorería"
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-300">DESCRIPCIÓN BREVE:</label>
            <textarea
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Descripción del propósito y alcance institucional..."
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-slate-300 font-mono">TIPO:</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:border-amber-400 focus:outline-none font-sans"
              >
                <option value="GOBIERNO">GOBIERNO</option>
                <option value="DOCTRINA">DOCTRINA</option>
                <option value="CONSTITUCION">CONSTITUCION</option>
                <option value="BYLAWS">BYLAWS</option>
                <option value="MEMBRESIA">MEMBRESIA</option>
                <option value="MINISTERIO">MINISTERIO</option>
                <option value="ACADEMICO_DISCIPULOS">ACADEMICO_DISCIPULOS</option>
                <option value="ACADEMICO_LIDERES">ACADEMICO_LIDERES</option>
                <option value="ACADEMICO_SEMINARIO">ACADEMICO_SEMINARIO</option>
                <option value="CREDENCIAL">CREDENCIAL</option>
                <option value="ETICA_CONDUCTA">ETICA_CONDUCTA</option>
                <option value="ADMINISTRATIVO_FINANZAS">ADMINISTRATIVO_FINANZAS</option>
                <option value="LEGAL">LEGAL</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-300 font-mono">CONFIDENCIALIDAD:</label>
              <select
                value={formData.confidentiality}
                onChange={(e) => setFormData({ ...formData, confidentiality: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:border-amber-400 focus:outline-none font-sans"
              >
                <option value="PUBLICO">PÚBLICO</option>
                <option value="INTERNO_CONGREGACION">INTERNO CONGREGACIÓN</option>
                <option value="CONFIDENCIAL_LIDERAZGO">CONFIDENCIAL LIDERAZGO</option>
                <option value="RESTRINGIDO_GOBIERNO">RESTRINGIDO GOBIERNO</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-300 font-mono">DESTINO NORMATIVO:</label>
              <select
                value={formData.documentTarget}
                onChange={(e) => setFormData({ ...formData, documentTarget: e.target.value as any })}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:border-amber-400 focus:outline-none font-sans"
              >
                <option value="MANUAL">MANUAL</option>
                <option value="REGLAMENTO">REGLAMENTO</option>
                <option value="SOP">SOP</option>
                <option value="CONSTITUCION">CONSTITUCIÓN</option>
                <option value="BYLAWS">BYLAWS</option>
                <option value="DOCTRINA">DOCTRINA</option>
                <option value="MULTICAPA">MULTICAPA</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-300">CONTENIDO INICIAL (MARKDOWN):</label>
            <textarea
              rows={6}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-mono text-xs focus:border-amber-400 focus:outline-none leading-relaxed"
              required
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
            <Button variant="secondary" size="sm" type="button" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="gold" size="sm" type="submit" icon={<CheckCircle2 className="w-4 h-4" />}>
              Crear Documento
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
