"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  getAllBookChapters,
  getBookChapterBySlug,
  BookChapter,
  LegalModel,
} from "@/lib/book-legal-creation-content";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Printer,
  ShieldAlert,
  Scale,
  ExternalLink,
  CheckCircle2,
  Clock,
  Sparkles,
  AlertTriangle,
  Info,
  CheckSquare,
  Square,
  List,
  FileCode,
  Copy,
  Check,
} from "lucide-react";

export default function BookChapterReaderPage() {
  const params = useParams();
  const rawSlug = params?.chapterSlug as string;
  const chapter = getBookChapterBySlug(rawSlug);
  const allChapters = getAllBookChapters();

  if (!chapter) {
    return notFound();
  }

  const currentIndex = allChapters.findIndex((c) => c.slug === chapter.slug);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  // Estado del checklist interactivo
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copiedModelId, setCopiedModelId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("renacer_book_checklist");
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleCheck = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    try {
      localStorage.setItem("renacer_book_checklist", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedModelId(id);
    setTimeout(() => setCopiedModelId(null), 2500);
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto py-2">
      {/* Barra Superior de Navegación del Lector */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Link
            href="/libro/creacion-legal"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
          >
            <List className="w-3.5 h-3.5" />
            <span>Índice del Libro</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {prevChapter && (
            <Link
              href={`/libro/creacion-legal/${prevChapter.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl"
              title={prevChapter.title}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cap. {prevChapter.chapterNumber}</span>
            </Link>
          )}

          {nextChapter && (
            <Link
              href={`/libro/creacion-legal/${nextChapter.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 border border-indigo-800 px-3 py-2 rounded-xl"
              title={nextChapter.title}
            >
              <span className="hidden sm:inline">Cap. {nextChapter.chapterNumber}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir
          </Button>
        </div>
      </div>

      {/* ENCABEZADO DEL CAPÍTULO */}
      <header className="space-y-4 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/80 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Capítulo {chapter.chapterNumber} de {allChapters.length}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="inline-flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{chapter.readTimeMinutes} min de lectura</span>
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
          {chapter.title}
        </h1>

        <p className="text-sm sm:text-base text-indigo-200/90 font-medium">
          {chapter.subtitle}
        </p>

        {/* Resumen Ejecutivo del Capítulo */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <span className="font-bold text-white uppercase text-[11px] tracking-wider block font-mono mb-1 text-indigo-300">
            Resumen del Capítulo:
          </span>
          {chapter.summary}
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL: SECCIONES */}
      <div className="space-y-8">
        {chapter.contentSections.map((sec) => (
          <div
            key={sec.sectionId}
            className="p-8 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-5 shadow-xl text-xs sm:text-sm text-slate-300 leading-relaxed"
          >
            <h2 className="text-lg sm:text-xl font-bold text-white border-b border-slate-800 pb-3 font-mono">
              {sec.sectionTitle}
            </h2>

            <div className="space-y-3.5">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* TABLAS FORMATEADAS */}
            {sec.tables && (
              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left border-collapse font-mono text-xs">
                  <thead>
                    <tr className="border-b border-slate-700 bg-slate-950 text-indigo-300">
                      {sec.tables.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-3 font-bold uppercase tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {sec.tables.rows.map((r, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors">
                        {r.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`p-3 ${
                              cIdx === 0
                                ? "font-bold text-white"
                                : cIdx === 1
                                ? "text-indigo-200"
                                : "text-slate-300"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* ALERTAS / CALLOUTS */}
            {sec.callouts && (
              <div className="space-y-3 pt-2">
                {sec.callouts.map((callout, cIdx) => (
                  <div
                    key={cIdx}
                    className={`p-4 rounded-2xl border text-xs space-y-1 ${
                      callout.type === "WARNING"
                        ? "bg-rose-950/20 border-rose-800/60 text-rose-200"
                        : callout.type === "IMPORTANT"
                        ? "bg-amber-950/20 border-amber-800/60 text-amber-200"
                        : "bg-indigo-950/20 border-indigo-800/60 text-indigo-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold font-mono uppercase text-xs">
                      {callout.type === "WARNING" ? (
                        <AlertTriangle className="w-4 h-4 text-rose-400" />
                      ) : (
                        <Info className="w-4 h-4 text-amber-400" />
                      )}
                      <span>{callout.title}</span>
                    </div>
                    <p className="leading-relaxed text-slate-300 text-[11px]">{callout.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* MODELOS PRÁCTICOS / DRAFTS FORMATEADOS */}
            {sec.models && sec.models.length > 0 && (
              <div className="space-y-4 pt-3">
                {sec.models.map((m) => (
                  <div
                    key={m.id}
                    className="rounded-2xl border border-slate-700/80 bg-slate-950/90 overflow-hidden shadow-2xl"
                  >
                    <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <FileCode className="w-4 h-4 text-indigo-400" />
                          <span className="font-bold text-white font-mono text-xs">{m.title}</span>
                        </div>
                        <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 border border-amber-700/80 text-amber-300 font-bold">
                          {m.disclaimer}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(m.id, m.content)}
                        icon={copiedModelId === m.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      >
                        {copiedModelId === m.id ? "¡Copiado!" : "Copiar Modelo"}
                      </Button>
                    </div>

                    <pre className="p-4 text-[11px] font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed bg-black/40">
                      {m.content}
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {/* CHECKLISTS INTERACTIVOS */}
            {sec.checklists && (
              <div className="space-y-2 pt-2">
                {sec.checklists.map((chk) => {
                  const isChecked = !!checkedItems[chk.id];
                  return (
                    <div
                      key={chk.id}
                      onClick={() => toggleCheck(chk.id)}
                      className={`p-3.5 rounded-2xl border flex items-center gap-3 cursor-pointer transition-colors ${
                        isChecked
                          ? "bg-emerald-950/30 border-emerald-700/60 text-emerald-200"
                          : "bg-slate-950 border-slate-900 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500 shrink-0" />
                      )}
                      <div className="space-y-0.5">
                        <span className={`text-xs font-mono ${isChecked ? "line-through text-slate-400" : "font-bold text-white"}`}>
                          {chk.label}
                        </span>
                        {chk.details && (
                          <p className="text-[10px] text-slate-400">{chk.details}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FUENTES OFICIALES CITADAS EN ESTE CAPÍTULO */}
      {chapter.officialSources && chapter.officialSources.length > 0 && (
        <div className="p-6 rounded-3xl bg-[#091122] border border-slate-800 space-y-3 text-xs shadow-xl">
          <div className="flex items-center gap-2 text-indigo-400 font-mono font-bold uppercase tracking-wider border-b border-slate-800 pb-2">
            <Scale className="w-4 h-4" />
            <span>Fuentes Oficiales Citadas en este Capítulo:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {chapter.officialSources.map((src, sIdx) => (
              <a
                key={sIdx}
                href={src.url}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500 hover:bg-slate-900 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-bold text-white group-hover:text-indigo-300 transition-colors block text-xs">
                    {src.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block">
                    {src.authority}
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* NAVEGACIÓN INFERIOR (ANTERIOR / SIGUIENTE) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800 no-print">
        {prevChapter ? (
          <Link
            href={`/libro/creacion-legal/${prevChapter.slug}`}
            className="w-full sm:w-auto p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-3 text-left group"
          >
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Capítulo Anterior</span>
              <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                Capítulo {prevChapter.chapterNumber}: {prevChapter.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link
            href={`/libro/creacion-legal/${nextChapter.slug}`}
            className="w-full sm:w-auto p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/80 hover:border-indigo-600 transition-colors flex items-center gap-3 text-right group ml-auto"
          >
            <div>
              <span className="text-[10px] uppercase font-mono text-indigo-400 block">Siguiente Capítulo</span>
              <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                Capítulo {nextChapter.chapterNumber}: {nextChapter.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors shrink-0" />
          </Link>
        ) : (
          <Link
            href="/libro/creacion-legal"
            className="w-full sm:w-auto p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800 hover:border-emerald-600 transition-colors flex items-center gap-3 text-right group ml-auto"
          >
            <div>
              <span className="text-[10px] uppercase font-mono text-emerald-400 block">Fin del Libro Web</span>
              <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                Volver al Índice General
              </span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors shrink-0" />
          </Link>
        )}
      </div>
    </div>
  );
}
