"use client";

import React, { useState } from "react";
import { MASTER_CONSTITUTION_AUDIT, OFFICIAL_LEGAL_SOURCES } from "@/lib/constitution-audit-data";
import { ConstitutionArticleAudit, ArticleLegalClassification } from "@/types/constitution-audit";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import {
  ShieldAlert,
  ShieldCheck,
  Scale,
  FileText,
  Building2,
  BookOpen,
  Search,
  Filter,
  ExternalLink,
  Layers,
  AlertTriangle,
  Info,
  CheckCircle2,
  Clock,
  Printer,
} from "lucide-react";

export default function ConstitutionAuditPage() {
  const [selectedClassification, setSelectedClassification] = useState<ArticleLegalClassification | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<ConstitutionArticleAudit | null>(
    MASTER_CONSTITUTION_AUDIT.articles[0]
  );

  const audit = MASTER_CONSTITUTION_AUDIT;

  const filteredArticles = audit.articles.filter((art) => {
    if (selectedClassification !== "ALL" && art.classification !== selectedClassification) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = art.title.toLowerCase().includes(q);
      const matchJust = art.justification.toLowerCase().includes(q);
      const matchNum = `artículo ${art.articleNumber}`.includes(q) || `art ${art.articleNumber}`.includes(q);
      if (!matchTitle && !matchJust && !matchNum) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header de la Auditoría Legal */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Scale className="w-3.5 h-3.5" />
              <span>AUDITORÍA LEGAL Y ESTRUCTURAL • FASE 19</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Auditoría de los 48 Artículos Constitucionales
            </h1>
            <p className="text-xs text-slate-400">
              Evaluación canónica y corporativa conforme a las leyes de <strong>New Jersey (Title 15A)</strong> y normativas <strong>IRS 501(c)(3)</strong>.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
              onClick={() => window.print()}
            >
              Imprimir Informe
            </Button>
          </div>
        </div>

        {/* Resumen Cuantitativo por Clasificación */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs">
          <div
            onClick={() => setSelectedClassification("CONSTITUCION")}
            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
              selectedClassification === "CONSTITUCION"
                ? "bg-emerald-950/60 border-emerald-500 shadow-md"
                : "bg-emerald-950/20 border-emerald-900/40 hover:bg-emerald-950/40"
            }`}
          >
            <span className="text-emerald-400 font-bold block">🟢 Constitución:</span>
            <span className="text-xl font-black text-emerald-300">
              {audit.classificationSummary.CONSTITUCION} Artículos
            </span>
          </div>

          <div
            onClick={() => setSelectedClassification("CONSTITUCION_BYLAWS")}
            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
              selectedClassification === "CONSTITUCION_BYLAWS"
                ? "bg-amber-950/60 border-amber-500 shadow-md"
                : "bg-amber-950/20 border-amber-900/40 hover:bg-amber-950/40"
            }`}
          >
            <span className="text-amber-400 font-bold block">🟡 Const. + Bylaws:</span>
            <span className="text-xl font-black text-amber-300">
              {audit.classificationSummary.CONSTITUCION_BYLAWS} Artículos
            </span>
          </div>

          <div
            onClick={() => setSelectedClassification("ARTICLES_OF_INCORPORATION")}
            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
              selectedClassification === "ARTICLES_OF_INCORPORATION"
                ? "bg-blue-950/60 border-blue-500 shadow-md"
                : "bg-blue-950/20 border-blue-900/40 hover:bg-blue-950/40"
            }`}
          >
            <span className="text-blue-400 font-bold block">🔵 Articles (NJ):</span>
            <span className="text-xl font-black text-blue-300">
              {audit.classificationSummary.ARTICLES_OF_INCORPORATION} Artículos
            </span>
          </div>

          <div
            onClick={() => setSelectedClassification("MANUAL_REGLAMENTO")}
            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
              selectedClassification === "MANUAL_REGLAMENTO"
                ? "bg-orange-950/60 border-orange-500 shadow-md"
                : "bg-orange-950/20 border-orange-900/40 hover:bg-orange-950/40"
            }`}
          >
            <span className="text-orange-400 font-bold block">🟠 Manuales/SOP:</span>
            <span className="text-xl font-black text-orange-300">
              {audit.classificationSummary.MANUAL_REGLAMENTO} Artículos
            </span>
          </div>

          <div
            onClick={() => setSelectedClassification("REVISION_LEGAL")}
            className={`p-3 rounded-2xl border transition-all cursor-pointer ${
              selectedClassification === "REVISION_LEGAL"
                ? "bg-rose-950/60 border-rose-500 shadow-md"
                : "bg-rose-950/20 border-rose-900/40 hover:bg-rose-950/40"
            }`}
          >
            <span className="text-rose-400 font-bold block">🔴 Revisión Legal:</span>
            <span className="text-xl font-black text-rose-300">
              {audit.classificationSummary.REVISION_LEGAL} Artículos
            </span>
          </div>
        </div>
      </div>

      {/* Fuentes Oficiales Consultadas */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-3">
        <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <Scale className="w-4 h-4" />
          <span>FUENTES PRIMARIAS Y MARCO JURÍDICO APLICABLE</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {OFFICIAL_LEGAL_SOURCES.slice(0, 3).map((src, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="font-bold text-slate-200 block">{src.title}</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">{src.summary}</p>
              <span className="text-[10px] font-mono text-amber-400/80 block pt-1">{src.codeOrUrl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Buscador y Selector de Filtros */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedClassification("ALL")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                selectedClassification === "ALL" ? "bg-brand-600 text-white shadow" : "text-slate-400 hover:text-white"
              }`}
            >
              Todos (48)
            </button>
            <button
              onClick={() => setSelectedClassification("CONSTITUCION")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                selectedClassification === "CONSTITUCION"
                  ? "bg-emerald-700 text-white shadow"
                  : "text-slate-400 hover:text-emerald-300"
              }`}
            >
              🟢 Constitución (22)
            </button>
            <button
              onClick={() => setSelectedClassification("CONSTITUCION_BYLAWS")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                selectedClassification === "CONSTITUCION_BYLAWS"
                  ? "bg-amber-700 text-white shadow"
                  : "text-slate-400 hover:text-amber-300"
              }`}
            >
              🟡 Const. + Bylaws (12)
            </button>
            <button
              onClick={() => setSelectedClassification("ARTICLES_OF_INCORPORATION")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                selectedClassification === "ARTICLES_OF_INCORPORATION"
                  ? "bg-blue-700 text-white shadow"
                  : "text-slate-400 hover:text-blue-300"
              }`}
            >
              🔵 Articles (4)
            </button>
            <button
              onClick={() => setSelectedClassification("REVISION_LEGAL")}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                selectedClassification === "REVISION_LEGAL"
                  ? "bg-rose-700 text-white shadow"
                  : "text-slate-400 hover:text-rose-300"
              }`}
            >
              🔴 Revisión Legal (4)
            </button>
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por artículo o materia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-500 font-sans"
            />
          </div>
        </div>
      </div>

      {/* Grid Principal de Fichas de Auditoría */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lista de Fichas (7 Columnas) */}
        <div className="lg:col-span-7 space-y-3">
          {filteredArticles.map((art) => {
            const isSelected = selectedArticle?.articleNumber === art.articleNumber;
            return (
              <div
                key={art.articleNumber}
                onClick={() => setSelectedArticle(art)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? "bg-[#16223d] border-brand-500/70 shadow-lg"
                    : "bg-[#0f172a]/80 border-slate-800 hover:border-slate-700 hover:bg-[#121c33]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black text-amber-400">
                    Art. {art.articleNumber} • {art.chapterRoman}
                  </span>
                  <ClassificationBadge classification={art.classification} />
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">{art.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1">{art.justification}</p>
              </div>
            );
          })}
        </div>

        {/* Panel Lateral de Detalle Jurídico (5 Columnas) */}
        <div className="lg:col-span-5">
          {selectedArticle ? (
            <div className="p-6 rounded-3xl bg-[#10192e] border border-slate-800 shadow-2xl space-y-6 sticky top-6 text-xs">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-black text-amber-400">
                    Artículo {selectedArticle.articleNumber}
                  </span>
                  <ClassificationBadge classification={selectedArticle.classification} />
                </div>
                <h2 className="text-lg font-black text-white mt-1">{selectedArticle.title}</h2>
                <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                  {selectedArticle.chapterRoman} • {selectedArticle.chapterTitle}
                </span>
              </div>

              {/* Justificación Estructural */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                <strong className="text-slate-300 block uppercase tracking-wider font-mono text-[11px]">
                  DICTAMEN Y JUSTIFICACIÓN:
                </strong>
                <p className="text-slate-200 leading-relaxed bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                  {selectedArticle.justification}
                </p>
              </div>

              {/* Materia y Revisión Requerida */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Materia:</span>
                  <span className="font-bold text-slate-200">{selectedArticle.subjectMatter}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Tipo de Revisión:</span>
                  <span className="font-bold text-amber-300">{selectedArticle.requiredReviewType}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Estado de Decisión:</span>
                  <span className="font-bold text-slate-200 font-mono">{selectedArticle.decisionStatus}</span>
                </div>
              </div>

              {/* Notas de Riesgo si existen */}
              {selectedArticle.riskOrNotes && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 space-y-1">
                  <strong className="block text-[11px] uppercase font-mono flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span>Nota Legal de Advertencia:</span>
                  </strong>
                  <p className="text-[11px] leading-relaxed">{selectedArticle.riskOrNotes}</p>
                </div>
              )}

              {/* Documentos Relacionados */}
              {selectedArticle.relatedDocuments.length > 0 && (
                <div className="space-y-2 border-t border-slate-800/80 pt-4">
                  <strong className="text-slate-400 block uppercase font-mono text-[11px]">
                    DOCUMENTOS VINCULADOS:
                  </strong>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedArticle.relatedDocuments.map((doc, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-amber-300">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ClassificationBadge({ classification }: { classification: ArticleLegalClassification }) {
  switch (classification) {
    case "CONSTITUCION":
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px] font-bold font-mono">
          🟢 Constitución
        </span>
      );
    case "CONSTITUCION_BYLAWS":
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-800 text-amber-300 text-[10px] font-bold font-mono">
          🟡 Const. + Bylaws
        </span>
      );
    case "ARTICLES_OF_INCORPORATION":
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-800 text-blue-300 text-[10px] font-bold font-mono">
          🔵 Articles of Inc.
        </span>
      );
    case "MANUAL_REGLAMENTO":
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-orange-950 border border-orange-800 text-orange-300 text-[10px] font-bold font-mono">
          🟠 Manual/SOP
        </span>
      );
    case "REVISION_LEGAL":
      return (
        <span className="px-2.5 py-0.5 rounded-full bg-rose-950 border border-rose-800 text-rose-300 text-[10px] font-bold font-mono">
          🔴 Revisión Legal
        </span>
      );
  }
}
