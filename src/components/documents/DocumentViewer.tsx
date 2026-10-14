"use client";

import React, { useState } from "react";
import { RenacerDocument, DocumentStatus } from "@/types";
import { useAuth } from "@/context/AuthContext";
import { useDocuments } from "@/context/DocumentContext";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { compareDocVersions } from "@/lib/versioning";
import { hasPermission, ROLE_DISPLAY_NAMES } from "@/lib/permissions";
import {
  FileText,
  Edit3,
  MessageSquare,
  History,
  Printer,
  Download,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Share2,
} from "lucide-react";

interface DocumentViewerProps {
  document: RenacerDocument;
  onEditRequested: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ document, onEditRequested }) => {
  const { currentRole } = useAuth();
  const { updateDocumentStatus, addComment, requestReview } = useDocuments();

  const [activeTab, setActiveTab] = useState<"contenido" | "historial" | "revisiones" | "comentarios">("contenido");
  const [selectedVersionId, setSelectedVersionId] = useState<string>(document.versions[0]?.id || "");
  const [commentText, setCommentText] = useState("");
  const [selectedReviewer, setSelectedReviewer] = useState("REVISOR_DOCTRINAL");

  const canEdit = hasPermission(currentRole, "EDIT", document.moduleKey as any);
  const canAdopt = hasPermission(currentRole, "ADOPT_OFFICIAL", document.moduleKey as any);
  const canRequestReview = hasPermission(currentRole, "REQUEST_REVIEW", document.moduleKey as any);

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    // Dispara la impresión nativa formateada para PDF
    window.print();
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(document.id, commentText);
    setCommentText("");
  };

  // Comparación de versiones
  const currentVersion = document.versions[0];
  const comparedVersion = document.versions.find((v) => v.id === selectedVersionId) || currentVersion;
  const diffParts = compareDocVersions(comparedVersion.content, currentVersion.content);

  return (
    <div className="space-y-6">
      {/* Aviso institucional si el documento NO es oficial */}
      {document.status !== "ADOPTADO" && (
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3 text-amber-200">
          <ShieldAlert className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
          <div className="text-xs">
            <strong className="font-bold text-amber-300">AVISO DE ESTADO NO OFICIAL:</strong> Este documento se encuentra en estado{" "}
            <span className="font-bold uppercase tracking-wider">{document.status}</span>. Conforme a las políticas de RENACER CHURCH MAESTRO,{" "}
            <strong>NO constituye doctrina, norma o política oficial adoptada</strong> hasta su formal aprobación.
          </div>
        </div>
      )}

      {/* Header del Documento */}
      <div className="p-6 rounded-2xl bg-gradient-to-b from-[#131d33] to-[#0d1424] border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5 text-xs text-slate-400">
              <span className="font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-brand-300 font-bold">
                {document.docNumber}
              </span>
              <span>•</span>
              <span className="text-slate-300">{document.category}</span>
              <span>•</span>
              <span className="font-mono text-slate-400">Versión {document.currentVersionNum}</span>
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">{document.title}</h1>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge status={document.status} size="lg" />
          </div>
        </div>

        {/* Toolbar de Acciones */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 no-print">
          {/* Navegación por Pestañas */}
          <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab("contenido")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "contenido"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Contenido</span>
            </button>
            <button
              onClick={() => setActiveTab("historial")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "historial"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Historial ({document.versions.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("revisiones")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "revisiones"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Revisiones ({document.reviews.length})</span>
            </button>
            <button
              onClick={() => setActiveTab("comentarios")}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "comentarios"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Comentarios ({document.comments.length})</span>
            </button>
          </div>

          {/* Botones de Acción Documental */}
          <div className="flex items-center gap-2">
            {canEdit && (
              <Button
                variant="secondary"
                size="sm"
                icon={<Edit3 className="w-3.5 h-3.5 text-amber-400" />}
                onClick={onEditRequested}
              >
                Editar
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5" />}
              onClick={handlePrint}
            >
              Imprimir
            </Button>

            <Button
              variant="outline"
              size="sm"
              icon={<Download className="w-3.5 h-3.5" />}
              onClick={handleExportPDF}
            >
              PDF Oficial
            </Button>

            {/* Control de Estado según Permisos */}
            {canAdopt && document.status !== "ADOPTADO" && (
              <Button
                variant="gold"
                size="sm"
                icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                onClick={() => updateDocumentStatus(document.id, "ADOPTADO")}
              >
                Adoptar Oficialmente
              </Button>
            )}

            {canRequestReview && document.status === "BORRADOR" && (
              <Button
                variant="primary"
                size="sm"
                icon={<Send className="w-3.5 h-3.5" />}
                onClick={() => requestReview(document.id, selectedReviewer)}
              >
                Enviar a Revisión
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Contenido según Pestaña Activa */}
      {activeTab === "contenido" && (
        <div className="p-8 rounded-2xl bg-[#101728] border border-slate-800 shadow-xl print-document-container">
          {/* Encabezado Oficial de Impresión (oculto en pantalla, visible al imprimir) */}
          <div className="hidden print:block print-header">
            <div className="text-center space-y-1 mb-4">
              <h2 className="text-lg font-black tracking-wider uppercase text-blue-900">
                RENACER CHURCH, INC.
              </h2>
              <p className="text-xs italic text-slate-600">&ldquo;Renacer, un nuevo inicio&rdquo; • Paterson, New Jersey</p>
              <p className="text-xs font-mono font-bold text-slate-700">
                {document.docNumber} • Versión {document.currentVersionNum} • Estado: {document.status}
              </p>
            </div>
          </div>

          <article className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {document.content.includes("Artículos Doctrinales")
              ? document.content.split("\n").map((line, i) => {
                  const m = line.match(/^(\d{1,2})\.\s+(.+)$/);
                  return m ? (
                    <React.Fragment key={i}>
                      <a
                        href={`/doctrina?articulo=${m[1]}`}
                        className="text-blue-400 hover:text-blue-300 hover:underline cursor-pointer"
                      >
                        {line}
                      </a>
                      {"\n"}
                    </React.Fragment>
                  ) : (
                    <React.Fragment key={i}>{line}{"\n"}</React.Fragment>
                  );
                })
              : document.content}
          </article>

          {/* Pie de Página Oficial */}
          <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400">
            <div>
              <span>Autor: </span>
              <strong className="text-slate-300">{document.authorName}</strong>
            </div>
            <div>
              <span>Última modificación: </span>
              <span className="font-mono">{new Date(document.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* Pestaña: Historial de Versiones y Diff */}
      {activeTab === "historial" && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Comparar versión actual ({document.currentVersionNum}) contra:</span>
            <select
              value={selectedVersionId}
              onChange={(e) => setSelectedVersionId(e.target.value)}
              className="bg-slate-800 text-xs px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200"
            >
              {document.versions.map((v) => (
                <option key={v.id} value={v.id}>
                  Versión {v.versionNum} — {new Date(v.createdAt).toLocaleDateString()} ({v.changeNote || "Sin nota"})
                </option>
              ))}
            </select>
          </div>

          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span>🔍</span> Comparación Visual de Cambios (Diff)
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 font-mono text-xs leading-relaxed">
              {diffParts.map((part, index) => {
                if (part.added) {
                  return (
                    <span key={index} className="bg-emerald-950 text-emerald-300 px-1 py-0.5 rounded">
                      {part.value}
                    </span>
                  );
                }
                if (part.removed) {
                  return (
                    <span key={index} className="bg-rose-950 text-rose-300 line-through px-1 py-0.5 rounded">
                      {part.value}
                    </span>
                  );
                }
                return <span key={index} className="text-slate-300">{part.value}</span>;
              })}
            </div>
          </div>
        </div>
      )}

      {/* Pestaña: Revisiones */}
      {activeTab === "revisiones" && (
        <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Flujo de Revisión Colaborativa</h3>
          {document.reviews.length === 0 ? (
            <p className="text-xs text-slate-400 italic">No hay solicitudes de revisión activas para este documento.</p>
          ) : (
            <div className="space-y-3">
              {document.reviews.map((rev) => (
                <div key={rev.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-200">{rev.reviewerName}</p>
                    <p className="text-[11px] text-slate-400">Solicitado: {new Date(rev.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-semibold">
                    {rev.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pestaña: Comentarios */}
      {activeTab === "comentarios" && (
        <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Comentarios y Sugerencias</h3>

          <form onSubmit={handleCommentSubmit} className="space-y-3">
            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Escribe una observación, sugerencia doctrinal o comentario..."
              className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
            />
            <div className="flex justify-end">
              <Button variant="primary" size="sm" icon={<Send className="w-3.5 h-3.5" />}>
                Publicar Comentario
              </Button>
            </div>
          </form>

          <div className="space-y-3 pt-4 border-t border-slate-800">
            {document.comments.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No hay comentarios todavía.</p>
            ) : (
              document.comments.map((comment) => (
                <div key={comment.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <strong className="text-slate-200">{comment.authorName}</strong>
                    <span className="text-[11px] text-slate-400">{new Date(comment.createdAt).toLocaleTimeString()}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{comment.content}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
