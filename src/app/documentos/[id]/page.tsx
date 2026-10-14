"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllInstitutionalDocuments,
  getInstitutionalDocumentById,
  updateInstitutionalDocument,
  addDocumentComment,
  FullInstitutionalDocument,
} from "@/lib/institutional-document-service";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  BookOpen,
  Edit3,
  Save,
  MessageSquare,
  History,
  Printer,
  FileDown,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Bold,
  Italic,
  Heading,
  List,
  Quote,
} from "lucide-react";

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  const { user, currentRole } = useAuth();
  const paramId = decodeURIComponent(params.id);

  const initialDoc = getInstitutionalDocumentById(paramId);
  const [doc, setDoc] = useState<FullInstitutionalDocument | undefined>(initialDoc);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(doc?.content || "");
  const [editTitle, setEditTitle] = useState(doc?.title || "");
  const [changeReason, setChangeReason] = useState("");
  const [versionBump, setVersionBump] = useState<"minor" | "major">("minor");
  const [commentText, setCommentText] = useState("");
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);

  if (!doc) {
    return (
      <div className="p-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Documento no encontrado</h2>
        <Link href="/documentos" className="text-xs text-amber-400 underline">
          Volver a la biblioteca
        </Link>
      </div>
    );
  }

  const canEdit = currentRole !== "SOLO_LECTURA";

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError(null);
    setSaveSuccess(null);

    if (!changeReason.trim()) {
      setSaveError("Debe ingresar el motivo del cambio para el versionado inmutable.");
      return;
    }

    const result = updateInstitutionalDocument(
      {
        docId: doc.id,
        newTitle: editTitle,
        newContent: editContent,
        changeReason: changeReason.trim(),
        versionBump: versionBump,
      },
      {
        id: user?.id || "usr-current",
        name: user?.displayName || "Administrador",
        role: currentRole,
      }
    );

    if (!result.success || !result.document) {
      setSaveError(result.error || "No se pudo actualizar el documento.");
      return;
    }

    setDoc(result.document);
    setIsEditing(false);
    setChangeReason("");
    setSaveSuccess(`Nueva versión v${result.document.version} guardada e indexada en el historial.`);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const result = addDocumentComment(doc.id, commentText.trim(), {
      id: user?.id || "usr-current",
      name: user?.displayName || "Usuario",
      role: currentRole,
    });

    if (result.success && result.comment) {
      setDoc({ ...doc, comments: [...doc.comments, result.comment] });
      setCommentText("");
    }
  };

  const insertFormatting = (prefix: string, suffix: string = "") => {
    setEditContent((prev) => `${prev}\n${prefix}Texto formateado${suffix}`);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Botones de Cabecera y Navegación */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/documentos"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Biblioteca</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href={`/documentos/${doc.documentNumber}/historial`}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-purple-300 font-bold hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
          >
            <History className="w-4 h-4 text-purple-400" />
            <span>Historial ({doc.versions.length})</span>
          </Link>

          <button
            onClick={() => window.print()}
            className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-bold hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-4 h-4 text-slate-400" />
            <span>Imprimir</span>
          </button>

          {canEdit && !isEditing && (
            <Button
              variant="gold"
              size="sm"
              icon={<Edit3 className="w-4 h-4" />}
              onClick={() => {
                setEditContent(doc.content);
                setEditTitle(doc.title);
                setIsEditing(true);
              }}
            >
              Editar Documento
            </Button>
          )}
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 no-print shadow-lg">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{saveSuccess}</span>
        </div>
      )}

      {saveError && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 no-print shadow-lg">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{saveError}</span>
        </div>
      )}

      {/* Header del Documento */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-black text-amber-400 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30">
              {doc.documentNumber}
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              Versión v{doc.version}
            </span>
          </div>

          <span
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border ${
              doc.status === "ADOPTADO"
                ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                : "bg-amber-950 border-amber-800 text-amber-300"
            }`}
          >
            {doc.status === "ADOPTADO" ? "ADOPTADO OFICIAL" : `${doc.status} • NO ADOPTADA`}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">{doc.title}</h1>
        <p className="text-xs sm:text-sm text-slate-300">{doc.description}</p>
      </div>

      {/* Modo Edición vs Modo Lectura */}
      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-6 no-print">
          <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
            <div className="space-y-1">
              <label className="font-bold text-slate-300 text-xs">TÍTULO DEL DOCUMENTO:</label>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-400 focus:outline-none"
                required
              />
            </div>

            {/* Barra de Formato de Texto */}
            <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <button
                type="button"
                onClick={() => insertFormatting("**", "**")}
                className="p-2 rounded hover:bg-slate-900 text-slate-300 hover:text-white"
                title="Negrita"
              >
                <Bold className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => insertFormatting("*", "*")}
                className="p-2 rounded hover:bg-slate-900 text-slate-300 hover:text-white"
                title="Cursiva"
              >
                <Italic className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => insertFormatting("### ")}
                className="p-2 rounded hover:bg-slate-900 text-slate-300 hover:text-white"
                title="Encabezado"
              >
                <Heading className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => insertFormatting("- ")}
                className="p-2 rounded hover:bg-slate-900 text-slate-300 hover:text-white"
                title="Lista"
              >
                <List className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => insertFormatting("> ")}
                className="p-2 rounded hover:bg-slate-900 text-slate-300 hover:text-white"
                title="Cita"
              >
                <Quote className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-300 text-xs">CONTENIDO INSTITUCIONAL (MARKDOWN):</label>
              <textarea
                rows={16}
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono leading-relaxed focus:border-amber-400 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800 pt-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-amber-300 font-mono">TIPO DE SALTO DE VERSIÓN:</label>
                <select
                  value={versionBump}
                  onChange={(e) => setVersionBump(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:border-amber-400 focus:outline-none"
                >
                  <option value="minor">Versión Menor (+0.1: correcciones, adiciones menores)</option>
                  <option value="major">Versión Mayor (+1.0: reestructuración integral)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-amber-300 font-mono">MOTIVO OBLIGATORIO DEL CAMBIO:</label>
                <input
                  type="text"
                  value={changeReason}
                  onChange={(e) => setChangeReason(e.target.value)}
                  placeholder="Ej: Actualización de requisitos de quórum"
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <Button variant="secondary" size="sm" type="button" onClick={() => setIsEditing(false)}>
                Cancelar
              </Button>
              <Button variant="gold" size="sm" type="submit" icon={<Save className="w-4 h-4" />}>
                Guardar Nueva Versión
              </Button>
            </div>
          </div>
        </form>
      ) : (
        /* Modo Lectura / Visor */
        <div className="p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-6 print-container">
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line shadow-inner">
            {doc.content.includes("Artículos Doctrinales")
              ? doc.content.split("\n").map((line: string, i: number) => {
                  const m = line.match(/^(\d{1,2})\.\s+(.+)$/);
                  return m ? (
                    <a
                      key={i}
                      href={`/doctrina?articulo=${m[1]}`}
                      className="block text-blue-400 hover:text-blue-300 hover:underline cursor-pointer"
                    >
                      {line}
                    </a>
                  ) : (
                    <div key={i} className="min-h-[1em]">{line}</div>
                  );
                })
              : doc.content}
          </div>
        </div>
      )}

      {/* Sección de Comentarios Institucionales */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl no-print">
        <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 font-mono">
          <MessageSquare className="w-4 h-4 text-blue-400" />
          <span>COMENTARIOS Y OBSERVACIONES ({doc.comments.length}):</span>
        </h3>

        {doc.comments.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No hay comentarios registrados para este documento.</p>
        ) : (
          <div className="space-y-2.5">
            {doc.comments.map((comm) => (
              <div key={comm.id} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-200">
                    {comm.authorName} <span className="text-slate-500 font-mono">({comm.authorRole})</span>
                  </span>
                  <span className="text-slate-500 font-mono text-[10px]">
                    {new Date(comm.createdAt).toLocaleString()} • v{comm.versionNumber}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed">{comm.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Formulario de Comentario */}
        <form onSubmit={handleAddComment} className="pt-2 flex items-center gap-3">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Escribir una observación o comentario institucional..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-amber-400 focus:outline-none"
          />
          <Button variant="outline" size="sm" type="submit">
            Comentar
          </Button>
        </form>
      </div>
    </div>
  );
}
