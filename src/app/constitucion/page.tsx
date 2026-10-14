"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FULL_CONSTITUTION_DRAFT } from "@/lib/constitution-full-draft";
import { getConstitutionTraceabilityMap } from "@/lib/constitution-traceability";
import { ArticleDecisionStatus } from "@/types/constitution";
import { Button } from "@/components/ui/Button";
import {
  ScrollText,
  ShieldCheck,
  Search,
  Printer,
  Scale,
  FileText,
  ChevronRight,
  Layers,
  BookOpen,
  AlertTriangle,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function ConstitutionPage() {
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"ARTICULOS" | "TRAZABILIDAD">("ARTICULOS");

  const constitution = FULL_CONSTITUTION_DRAFT;
  const currentChapter =
    constitution.chapters.find((c) => c.chapterNumber === selectedChapterNumber) ||
    constitution.chapters[0];

  const allArticles = constitution.chapters.flatMap((c) =>
    c.articles.map((a) => ({
      ...a,
      chapterNumber: c.chapterNumber,
      chapterTitle: c.title,
      roman: c.romanNumeral,
    }))
  );

  const filteredArticles = allArticles.filter((art) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = art.title.toLowerCase().includes(q);
      const matchText = (art.fullText || "").toLowerCase().includes(q);
      const matchNum = `artículo ${art.articleNumber}`.includes(q) || `art ${art.articleNumber}`.includes(q);
      if (!matchTitle && !matchText && !matchNum) return false;
    }
    return true;
  });

  const traceabilityMap = getConstitutionTraceabilityMap();

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Banner de Advertencia Institucional de No Adopción */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block">
              BORRADOR EN REDACCIÓN — REN-DOC-002 v0.1 (NO ADOPTADA)
            </strong>
            <span className="text-slate-300 text-[11px]">
              Este documento constituye el texto articulado en proceso de redacción de la Carta Magna de RENACER. No es la Constitución vigente ni sustituye Articles of Incorporation o Bylaws.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          EN_REDACCION
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
              <ScrollText className="w-3.5 h-3.5" />
              <span>CARTA MAGNA INSTITUCIONAL • REN-DOC-002</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">{constitution.title}</h1>
            <p className="text-xs text-slate-400">
              {constitution.organization} • Pastor Fundador: <strong>{constitution.founder}</strong> • Versión:{" "}
              <span className="font-mono text-indigo-300 font-bold">v{constitution.version}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex rounded-xl bg-slate-950 border border-slate-800 p-1">
              <button
                onClick={() => setViewMode("ARTICULOS")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors ${
                  viewMode === "ARTICULOS"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Articulado Completo (48)
              </button>
              <button
                onClick={() => setViewMode("TRAZABILIDAD")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors ${
                  viewMode === "TRAZABILIDAD"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Mapa de Trazabilidad
              </button>
            </div>

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

        {/* Métricas Reales de la Constitución */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <span className="text-slate-400 block font-mono">Estructura Total:</span>
            <span className="text-lg font-black text-white">14 Títulos • 48 Artículos</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
            <span className="text-emerald-400/90 block font-mono">Artículos Redactados:</span>
            <span className="text-lg font-black text-emerald-300">48 / 48 (100%)</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-800/40">
            <span className="text-amber-400/90 block font-mono">Revisión Legal NJ:</span>
            <span className="text-lg font-black text-amber-300">
              {traceabilityMap.filter((t) => t.legalReviewRequired).length} Artículos
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40">
            <span className="text-indigo-400/90 block font-mono">Decisiones Sustento:</span>
            <span className="text-lg font-black text-indigo-300">107 Decisiones</span>
          </div>
        </div>
      </div>

      {viewMode === "TRAZABILIDAD" ? (
        /* VISTA DE MAPA DE TRAZABILIDAD */
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>MAPA DE TRAZABILIDAD DE LA CONSTITUCIÓN (48 ARTÍCULOS)</span>
            </h2>
            <span className="text-[10px] font-mono text-slate-400">
              Fuente de Trazabilidad: 107 Decisiones Institucionales
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="py-2.5 px-3">ART.</th>
                  <th className="py-2.5 px-3">TÍTULO</th>
                  <th className="py-2.5 px-3">TÍTULO / CAPÍTULO</th>
                  <th className="py-2.5 px-3">DECISIONES</th>
                  <th className="py-2.5 px-3">TEXTO</th>
                  <th className="py-2.5 px-3">REV. LEGAL NJ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {traceabilityMap.map((item) => (
                  <tr key={item.articleNumber} className="hover:bg-slate-900/50">
                    <td className="py-2.5 px-3 font-mono font-bold text-indigo-400">
                      Art. {item.articleNumber}
                    </td>
                    <td className="py-2.5 px-3">
                      <strong className="text-white block">{item.title}</strong>
                    </td>
                    <td className="py-2.5 px-3 text-[11px] text-slate-400 font-mono">
                      {item.romanNumeral}: {item.chapterTitle}
                    </td>
                    <td className="py-2.5 px-3">
                      <div className="flex flex-wrap gap-1">
                        {item.decisionIds.map((id) => (
                          <Link
                            key={id}
                            href={`/decisiones/${id}`}
                            className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 text-[10px] font-mono hover:border-amber-500"
                          >
                            {id}
                          </Link>
                        ))}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px]">
                      <span className="text-emerald-400 font-bold">Redactado ({item.textLength} car.)</span>
                    </td>
                    <td className="py-2.5 px-3 font-mono">
                      {item.legalReviewRequired ? (
                        <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800 font-bold">
                          Revisión NJ
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-500">No requerida</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* VISTA DE ARTICULADO COMPLETO */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Índice de Capítulos (4 Columnas) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar en los 48 artículos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1 max-h-[700px] overflow-y-auto">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 py-1 font-mono">
                TÍTULOS DE LA CONSTITUCIÓN
              </div>
              {constitution.chapters.map((ch) => (
                <button
                  key={ch.chapterNumber}
                  onClick={() => {
                    setSelectedChapterNumber(ch.chapterNumber);
                    setSearchQuery("");
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between text-xs group ${
                    selectedChapterNumber === ch.chapterNumber && !searchQuery
                      ? "bg-indigo-600 text-white font-bold shadow-lg"
                      : "text-slate-300 hover:bg-slate-900"
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono opacity-80 block">{ch.romanNumeral}</span>
                    <span className="block truncate max-w-[200px]">{ch.title}</span>
                  </div>
                  <span className="text-[10px] font-mono opacity-75">{ch.articles.length} arts.</span>
                </button>
              ))}
            </div>
          </div>

          {/* Visor de Artículos Redactados (8 Columnas) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Preámbulo (si se visualiza el Capítulo 1) */}
            {selectedChapterNumber === 1 && !searchQuery && (
              <div className="p-6 rounded-3xl bg-[#0e1628] border border-indigo-900/50 shadow-xl space-y-3">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-indigo-400 font-mono uppercase tracking-widest">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{constitution.preamble.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-4">
                  {constitution.preamble.fullText}
                </p>
              </div>
            )}

            {/* Listado de Artículos */}
            <div className="space-y-4">
              {(searchQuery ? filteredArticles : currentChapter.articles).map((art) => (
                <div
                  key={art.articleNumber}
                  className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-indigo-400 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30">
                        ARTÍCULO {art.articleNumber}
                      </span>
                      <h3 className="text-sm font-bold text-white">{art.title}</h3>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {art.legalReviewRequired && (
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800 font-mono">
                          Revisión Legal NJ
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {art.decisionStatus}
                      </span>
                    </div>
                  </div>

                  {/* Texto Real Redactado */}
                  <div className="text-xs text-slate-200 leading-relaxed whitespace-pre-line bg-slate-950 p-4 rounded-2xl border border-slate-900 font-serif">
                    {art.fullText}
                  </div>

                  {/* Metadatos y Trazabilidad */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400 font-mono pt-1">
                    <div className="flex items-center gap-1.5">
                      <span>Decisiones que lo originan:</span>
                      {(art.decisionIds || []).map((decId) => (
                        <Link
                          key={decId}
                          href={`/decisiones/${decId}`}
                          className="text-amber-400 hover:text-amber-300 font-bold underline"
                        >
                          {decId}
                        </Link>
                      ))}
                    </div>

                    {art.legalReviewNotes && (
                      <span className="text-amber-400 italic">Nota: {art.legalReviewNotes}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
