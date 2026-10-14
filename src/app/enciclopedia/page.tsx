"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  searchRenacerKnowledge,
  ENCYCLOPEDIA_TOPICS,
  KnowledgeSearchResult,
} from "@/lib/knowledge-search-service";
import { useAuth } from "@/context/AuthContext";
import {
  Layers,
  Search,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Scale,
  CheckCircle2,
  FolderLock,
  Filter,
  Printer,
  Info,
  HelpCircle,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const ENCYCLOPEDIA_CATEGORIES = [
  "TODOS",
  "DOCTRINA",
  "GOBIERNO",
  "MINISTERIO",
  "FORMACIÓN",
  "MEMBRESÍA",
  "DISCIPULADO",
  "RIESGOS",
  "SEGURIDAD",
  "LEGAL",
  "DOCUMENTOS",
  "DECISIONES",
] as const;

type CategoryType = typeof ENCYCLOPEDIA_CATEGORIES[number];

export default function EnciclopediaPage() {
  const { currentRole } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryType>("TODOS");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [selectedEntry, setSelectedEntry] = useState<KnowledgeSearchResult | null>(null);

  // Resultados calculados mediante searchRenacerKnowledge
  const results = useMemo(() => {
    if (!searchQuery.trim()) {
      return searchRenacerKnowledge("RENACER", {
        category: activeCategory === "TODOS" ? undefined : activeCategory,
        statusFilter: statusFilter === "ALL" ? undefined : statusFilter,
        userRole: currentRole,
      });
    }
    return searchRenacerKnowledge(searchQuery, {
      category: activeCategory === "TODOS" ? undefined : activeCategory,
      statusFilter: statusFilter === "ALL" ? undefined : statusFilter,
      userRole: currentRole,
    });
  }, [searchQuery, activeCategory, statusFilter, currentRole]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121c38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest font-mono">
              <Layers className="w-3.5 h-3.5" />
              <span>ENCICLOPEDIA INSTITUCIONAL MAESTRA</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Enciclopedia RENACER
            </h1>
            <p className="text-xs text-slate-400">
              Centro unificado de conocimiento organizado en 11 categorías temáticas y búsqueda semántica tolerante.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
              onClick={() => window.print()}
            >
              Imprimir Vista
            </Button>
          </div>
        </div>

        {/* Buscador de Conocimiento */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por término, pregunta (ej: ¿cuál es la posición sobre el bautismo?), código o tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 font-sans"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
            >
              <option value="ALL">Todos los Estados Institucionales</option>
              <option value="OFICIAL_ADOPTADO">Oficial / Adoptado</option>
              <option value="BORRADOR_NO_ADOPTADA">Borrador (No adoptada)</option>
              <option value="PLANIFICADO_NO_ADOPTADA">Planificado (No adoptada)</option>
              <option value="DECISION_DEFINIDA">Decisión Definida</option>
              <option value="REQUIERE_REVISION_LEGAL">Requiere Revisión Legal NJ</option>
            </select>
          </div>
        </div>

        {/* Barra de 11 Categorías Temáticas */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {ENCYCLOPEDIA_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                activeCategory === cat
                  ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/30"
                  : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Temas Principales de la Enciclopedia (Acceso Directo) */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2 px-1">
          <Tag className="w-3.5 h-3.5 text-cyan-400" />
          <span>TEMAS CONSOLIDADOS DESTACADOS:</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {ENCYCLOPEDIA_TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/enciclopedia/${topic.slug}`}
              className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-cyan-500/60 hover:bg-[#131f3b] transition-all space-y-1.5 group block shadow-md"
            >
              <span className="text-[10px] font-mono font-bold text-cyan-400 block uppercase">
                {topic.category}
              </span>
              <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                {topic.title}
              </h3>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {topic.summary}
              </p>
              <div className="pt-2 text-[10px] font-bold text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Ver síntesis →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Resultados de la Búsqueda y Registros */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
          <span>{results.length} resultados encontrados</span>
          <span>Categoría: {activeCategory}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((entry) => (
            <div
              key={entry.id}
              onClick={() => setSelectedEntry(entry)}
              className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-cyan-500/50 hover:bg-[#131e38] transition-all cursor-pointer flex flex-col justify-between space-y-3 group shadow-md"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black text-amber-400">{entry.code}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      entry.status === "OFICIAL_ADOPTADO"
                        ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                        : entry.status === "REQUIERE_REVISION_LEGAL"
                        ? "bg-amber-950 border-amber-800 text-amber-300"
                        : "bg-blue-950 border-blue-800 text-blue-300"
                    }`}
                  >
                    {entry.statusLabel}
                  </span>
                </div>

                <h3 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {entry.title}
                </h3>
                <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                  {entry.snippet}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                {entry.relatedDocumentNumbers && entry.relatedDocumentNumbers.length > 0 && (
                  <div className="text-[10px] text-slate-400 font-mono">
                    <span>Relacionado con: </span>
                    <strong className="text-amber-300">{entry.relatedDocumentNumbers.join(", ")}</strong>
                  </div>
                )}
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                    {entry.category}
                  </span>
                  <span className="font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1">
                    <span>Abrir Fuente</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalle */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#10192e] border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-400">{selectedEntry.code}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                    {selectedEntry.category}
                  </span>
                </div>
                <h2 className="text-lg font-black text-white">{selectedEntry.title}</h2>
                <div className="text-[11px] font-mono text-amber-300">{selectedEntry.statusLabel}</div>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-200 leading-relaxed whitespace-pre-line bg-slate-950 p-4 rounded-2xl border border-slate-800">
              {selectedEntry.content}
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-4">
              <Link
                href={selectedEntry.href}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>Ir al registro oficial correspondiente →</span>
              </Link>
              <Button variant="secondary" size="sm" onClick={() => setSelectedEntry(null)}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
