"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  getAllInstitutionalDocuments,
  FullInstitutionalDocument,
} from "@/lib/institutional-document-service";
import { DocumentCreateModal } from "@/components/documents/DocumentCreateModal";
import { useAuth } from "@/context/AuthContext";
import {
  BookOpen,
  Search,
  Plus,
  Printer,
  FileDown,
  History,
  Edit3,
  MessageSquare,
  ShieldCheck,
  AlertTriangle,
  Info,
  Layers,
  ArrowRight,
  FolderLock,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function DocumentosLibraryPage() {
  const { currentRole } = useAuth();
  const [documents, setDocuments] = useState<FullInstitutionalDocument[]>(
    getAllInstitutionalDocuments()
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<FullInstitutionalDocument | null>(
    documents[0] || null
  );

  const canCreate = currentRole !== "SOLO_LECTURA";

  const filteredDocs = documents.filter((doc) => {
    if (categoryFilter !== "ALL" && doc.category !== categoryFilter && doc.type !== categoryFilter) {
      return false;
    }
    if (statusFilter !== "ALL" && doc.status !== statusFilter) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        doc.title.toLowerCase().includes(q) ||
        doc.documentNumber.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.author.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleDocumentCreated = (newDoc: FullInstitutionalDocument) => {
    setDocuments(getAllInstitutionalDocuments());
    setSelectedDoc(newDoc);
  };

  const categories = Array.from(new Set(documents.map((d) => d.category)));

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121c35] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
              <FolderLock className="w-3.5 h-3.5" />
              <span>BIBLIOTECA DOCUMENTAL INSTITUCIONAL</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Documentos de RENACER CHURCH
            </h1>
            <p className="text-xs text-slate-400">
              Sistema integral de consulta, redacción, control de versiones y auditoría de documentos normativos.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {canCreate && (
              <Button
                variant="gold"
                size="sm"
                icon={<Plus className="w-4 h-4" />}
                onClick={() => setIsCreateModalOpen(true)}
              >
                Nuevo Documento
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
              onClick={() => window.print()}
            >
              Imprimir Biblioteca
            </Button>
          </div>
        </div>

        {/* Métricas Rápidas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
            <span className="text-slate-400 block font-mono">Total Documentos:</span>
            <span className="text-lg font-black text-white">{documents.length}</span>
          </div>
          <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-800/40">
            <span className="text-amber-400/80 block font-mono">Borradores en Progreso:</span>
            <span className="text-lg font-black text-amber-300">
              {documents.filter((d) => d.status === "BORRADOR").length}
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-blue-950/30 border border-blue-800/40">
            <span className="text-blue-400/80 block font-mono">Planificados:</span>
            <span className="text-lg font-black text-blue-300">
              {documents.filter((d) => d.status === "PLANIFICADO").length}
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
            <span className="text-emerald-400/80 block font-mono">Oficiales Adoptados:</span>
            <span className="text-lg font-black text-emerald-300">
              {documents.filter((d) => d.status === "ADOPTADO").length}
            </span>
          </div>
        </div>

        {/* Buscador y Filtros */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por código, título, autor o contenido..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 font-sans"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400 font-sans"
            >
              <option value="ALL">Todas las Categorías</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400 font-sans"
            >
              <option value="ALL">Todos los Estados</option>
              <option value="BORRADOR">BORRADOR</option>
              <option value="PLANIFICADO">PLANIFICADO</option>
              <option value="EN_REDACCION">EN_REDACCION</option>
              <option value="EN_REVISION">EN_REVISION</option>
              <option value="ADOPTADO">ADOPTADO</option>
              <option value="SUPERADO">SUPERADO</option>
              <option value="ARCHIVADO">ARCHIVADO</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Principal: Lista y Detalle */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lista de Documentos (7 Columnas) */}
        <div className="lg:col-span-7 space-y-3">
          {filteredDocs.map((doc) => {
            const isSelected = selectedDoc?.documentNumber === doc.documentNumber;
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-2.5 ${
                  isSelected
                    ? "bg-[#16223d] border-amber-500 shadow-xl"
                    : "bg-[#0f172a] border-slate-800 hover:border-slate-700 hover:bg-[#121c33]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-amber-400">{doc.documentNumber}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      v{doc.version}
                    </span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      doc.status === "ADOPTADO"
                        ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                        : "bg-amber-950 border-amber-800 text-amber-300"
                    }`}
                  >
                    {doc.status === "ADOPTADO" ? "ADOPTADO OFICIAL" : `${doc.status} • NO ADOPTADA`}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">{doc.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{doc.description}</p>

                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
                  <span>Área: <strong className="text-slate-300 font-mono">{doc.responsibleArea}</strong></span>
                  <span>Confidencialidad: <strong className="text-slate-300 font-mono">{doc.confidentiality}</strong></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ficha de Detalle y Acciones (5 Columnas) */}
        <div className="lg:col-span-5">
          {selectedDoc ? (
            <div className="p-6 rounded-3xl bg-[#10192e] border border-slate-800 shadow-2xl space-y-6 sticky top-6">
              <div className="border-b border-slate-800/80 pb-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-black text-amber-400">
                    {selectedDoc.documentNumber}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300">
                    Versión {selectedDoc.version}
                  </span>
                </div>
                <h2 className="text-lg font-black text-white">{selectedDoc.title}</h2>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedDoc.description}</p>
              </div>

              {/* Metadatos */}
              <div className="space-y-2 text-xs border-b border-slate-800/80 pb-4">
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Autor:</span>
                  <span className="font-bold text-slate-200">{selectedDoc.author}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Área Responsable:</span>
                  <span className="font-bold text-slate-200">{selectedDoc.responsibleArea}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Confidencialidad:</span>
                  <span className="font-mono font-bold text-amber-300">{selectedDoc.confidentiality}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Destino Normativo:</span>
                  <span className="font-mono font-bold text-violet-300">{selectedDoc.documentTarget}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Historial de Versiones:</span>
                  <span className="font-mono font-bold text-emerald-300">
                    {selectedDoc.versions.length} versiones registradas
                  </span>
                </div>
              </div>

              {/* Barra de Acciones Reales */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                  ACCIONES INSTITUCIONALES:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    href={`/documentos/${selectedDoc.documentNumber}`}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-amber-500 hover:text-amber-300 flex items-center justify-center gap-2 font-bold transition-all text-center"
                  >
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>VER / EDITAR</span>
                  </Link>

                  <Link
                    href={`/documentos/${selectedDoc.documentNumber}/historial`}
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-purple-500 hover:text-purple-300 flex items-center justify-center gap-2 font-bold transition-all text-center"
                  >
                    <History className="w-4 h-4 text-purple-400" />
                    <span>HISTORIAL ({selectedDoc.versions.length})</span>
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Modal de Creación */}
      <DocumentCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreated={handleDocumentCreated}
      />
    </div>
  );
}
