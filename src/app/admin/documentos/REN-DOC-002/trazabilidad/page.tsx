"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  getAllConstitutionArticles,
  FULL_CONSTITUTION_DRAFT,
  FlatConstitutionArticle,
} from "@/lib/constitution-full-draft";
import { getDecisionByNumber } from "@/lib/decision-service";
import { useAuth } from "@/context/AuthContext";
import {
  ArrowLeft,
  Search,
  Filter,
  ShieldCheck,
  Scale,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Printer,
  Layers,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ConstitutionTraceabilityPage() {
  const { currentRole } = useAuth();
  const articles = getAllConstitutionArticles();

  const [searchQuery, setSearchQuery] = useState("");
  const [chapterFilter, setChapterFilter] = useState<string>("ALL");
  const [legalFilter, setLegalFilter] = useState<string>("ALL");
  const [selectedArticle, setSelectedArticle] = useState<FlatConstitutionArticle | null>(null);

  const chapters = FULL_CONSTITUTION_DRAFT.chapters;

  const filteredArticles = articles.filter((art) => {
    if (chapterFilter !== "ALL" && art.chapterRoman !== chapterFilter) {
      return false;
    }
    if (legalFilter === "LEGAL_REQUIRED" && !art.legalReviewRequired) {
      return false;
    }
    if (legalFilter === "LEGAL_NOT_REQUIRED" && art.legalReviewRequired) {
      return false;
    }
    if (legalFilter === "PENDING" && !art.pendingDefinitionNotes) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        art.articleNumber.toString().includes(q) ||
        art.objective.toLowerCase().includes(q) ||
        art.chapterTitle.toLowerCase().includes(q) ||
        art.decisionIds.some((id) => id.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const legalReviewCount = articles.filter((a) => a.legalReviewRequired).length;
  const pendingCount = articles.filter((a) => a.pendingDefinitionNotes).length;
  const totalDecisionsLinked = Array.from(new Set(articles.flatMap((a) => a.decisionIds))).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <Link
                href="/admin/documentos/inventario"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> Volver al Inventario
              </Link>
              <span className="text-slate-600">/</span>
              <Link
                href="/documentos"
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                Biblioteca Documental
              </Link>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-2.5 py-1 text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md">
                REN-DOC-002
              </span>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Matriz de Trazabilidad Constitucional
              </h1>
            </div>
            <p className="text-sm text-slate-400">
              Vínculo estructural entre los 48 Artículos de la Constitución y las Decisiones Institucionales de RENACER CHURCH.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-950/40 text-amber-300 text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              BORRADOR EN REDACCIÓN (v0.1) • NO ADOPTADA
            </div>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Imprimir Matriz
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Total Artículos
              </span>
              <Layers className="w-4 h-4 text-sky-400" />
            </div>
            <p className="text-2xl font-bold text-white mt-1">48 / 48</p>
            <p className="text-xs text-slate-400 mt-0.5">14 Títulos organizados</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Decisiones Vinculadas
              </span>
              <BookOpen className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-emerald-300 mt-1">{totalDecisionsLinked}</p>
            <p className="text-xs text-slate-400 mt-0.5">Trazabilidad real sin inventar</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Revisión Legal Requerida
              </span>
              <Scale className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-amber-300 mt-1">{legalReviewCount}</p>
            <p className="text-xs text-slate-400 mt-0.5">Artículos de efecto civil/corporativo</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Pendientes de Definición
              </span>
              <Clock className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-indigo-300 mt-1">{pendingCount}</p>
            <p className="text-xs text-slate-400 mt-0.5">Cláusulas con reservas específicas</p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por artículo, título o decisión..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select
              value={chapterFilter}
              onChange={(e) => setChapterFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500"
            >
              <option value="ALL">Todos los Títulos (I al XIV)</option>
              {chapters.map((ch) => (
                <option key={ch.chapterNumber} value={ch.romanNumeral}>
                  {ch.romanNumeral} — {ch.title}
                </option>
              ))}
            </select>

            <select
              value={legalFilter}
              onChange={(e) => setLegalFilter(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500"
            >
              <option value="ALL">Todo el Universo Legal</option>
              <option value="LEGAL_REQUIRED">Requiere Revisión Legal</option>
              <option value="LEGAL_NOT_REQUIRED">Sin Revisión Legal Externa</option>
              <option value="PENDING">Pendiente de Definición</option>
            </select>
          </div>
        </div>

        {/* Table of 48 Articles & Traceability */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300 border-collapse">
              <thead className="bg-slate-900 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 w-16">Art.</th>
                  <th className="py-3.5 px-4 w-64">Título & Capítulo</th>
                  <th className="py-3.5 px-4">Objetivo Constitucional</th>
                  <th className="py-3.5 px-4 w-52">Decisiones Vinculadas</th>
                  <th className="py-3.5 px-4 w-44">Revisión Legal</th>
                  <th className="py-3.5 px-4 w-28 text-center">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredArticles.map((art) => (
                  <tr
                    key={art.articleNumber}
                    className="hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-amber-300">
                      #{art.articleNumber}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white text-sm">{art.title}</div>
                      <div className="text-[11px] text-slate-400">
                        {art.chapterRoman} — {art.chapterTitle}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="text-slate-300 line-clamp-2">{art.objective}</p>
                      <p className="text-[11px] text-slate-500 mt-1 italic line-clamp-1">
                        {art.fullText}
                      </p>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {art.decisionIds.map((decId) => {
                          const dec = getDecisionByNumber(decId);
                          return (
                            <span
                              key={decId}
                              title={dec ? `${dec.title} (${dec.decisionState})` : decId}
                              className="px-2 py-0.5 bg-slate-800 border border-slate-700 text-sky-300 rounded text-[10px] font-mono"
                            >
                              {decId}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      {art.legalReviewRequired ? (
                        <div className="flex flex-col gap-1">
                          <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                            <Scale className="w-3 h-3" /> REQUIERE REVISIÓN
                          </span>
                          <span className="text-[10px] text-slate-400 line-clamp-2">
                            {art.legalReviewNotes}
                          </span>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3 h-3" /> Régimen Eclesial Interno
                        </span>
                      )}
                      {art.pendingDefinitionNotes && (
                        <div className="mt-1 text-[10px] text-indigo-300">
                          ⏳ {art.pendingDefinitionNotes}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => setSelectedArticle(art)}
                        className="px-2.5 py-1 text-xs bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded text-slate-200 font-medium transition-colors"
                      >
                        Ver Texto
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal for full article view */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
              <div className="p-6 border-b border-slate-800 flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold">
                    {selectedArticle.chapterRoman} • ARTÍCULO {selectedArticle.articleNumber}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedArticle.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto">
                <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Objetivo Constitucional:
                  </h4>
                  <p className="text-sm text-slate-200">{selectedArticle.objective}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Texto Constitucional Redactado:
                  </h4>
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-sm text-slate-100 whitespace-pre-line leading-relaxed font-serif">
                    {selectedArticle.fullText}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <h5 className="text-[11px] font-semibold text-slate-400 uppercase">
                      Decisiones Relacionadas
                    </h5>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedArticle.decisionIds.map((id) => (
                        <span
                          key={id}
                          className="px-2 py-0.5 text-xs font-mono bg-sky-950 text-sky-300 border border-sky-800 rounded"
                        >
                          {id}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                    <h5 className="text-[11px] font-semibold text-slate-400 uppercase">
                      Documentos Conexos
                    </h5>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedArticle.dependencies.map((dep) => (
                        <span
                          key={dep}
                          className="px-2 py-0.5 text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-800 rounded"
                        >
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedArticle.legalReviewRequired && (
                  <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-lg">
                    <h5 className="text-xs font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                      <Scale className="w-3.5 h-3.5" /> Requiere Revisión Legal Obligatoria
                    </h5>
                    <p className="text-xs text-amber-200/90">
                      {selectedArticle.legalReviewNotes}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
                <Button
                  variant="outline"
                  onClick={() => setSelectedArticle(null)}
                  className="text-xs text-slate-300"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
