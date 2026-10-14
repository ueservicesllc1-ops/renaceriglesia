"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  getConstitutionFinalAuditList,
  getFinalAuditMetrics,
  ConstitutionArticleAudit,
  ConstitutionArticleAuditStatus,
  ConstitutionArticleClassification,
  RiskLevel,
} from "@/lib/constitution-final-audit-data";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  AlertTriangle,
  FileCheck2,
  Filter,
  Search,
  Printer,
  Scale,
  ArrowLeft,
  Layers,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  Eye,
  X,
} from "lucide-react";

export default function ConstitutionFinalAuditPage() {
  const allAudits = getConstitutionFinalAuditList();
  const metrics = getFinalAuditMetrics();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [classFilter, setClassFilter] = useState<string>("ALL");
  const [riskFilter, setRiskFilter] = useState<string>("ALL");
  const [legalFilter, setLegalFilter] = useState<string>("ALL");
  const [selectedArticle, setSelectedArticle] = useState<ConstitutionArticleAudit | null>(null);

  const filteredAudits = allAudits.filter((item) => {
    if (statusFilter !== "ALL" && item.status !== statusFilter) return false;
    if (classFilter !== "ALL" && item.classification !== classFilter) return false;
    if (riskFilter !== "ALL" && item.riskLevel !== riskFilter) return false;
    if (legalFilter === "LEGAL_YES" && !item.legalReviewRequired) return false;
    if (legalFilter === "LEGAL_NO" && item.legalReviewRequired) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchNum = `artículo ${item.articleNumber}`.includes(q) || `art ${item.articleNumber}`.includes(q);
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchText = item.currentText.toLowerCase().includes(q);
      const matchObs = item.observations.toLowerCase().includes(q);
      if (!matchNum && !matchTitle && !matchText && !matchObs) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Botón Volver */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Constitución</span>
        </Link>

        <Button
          variant="outline"
          size="sm"
          icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
          onClick={() => window.print()}
        >
          Imprimir Dictamen de Auditoría
        </Button>
      </div>

      {/* Banner Solemne de No Adopción */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              FASE 32B — AUDITORÍA FINAL DE REN-DOC-002 (BORRADOR v0.1 • NO ADOPTADA)
            </strong>
            <span className="text-slate-300 text-[11px]">
              Revisión exhaustiva, control de riesgos, trazabilidad y separación de capas antes de cualquier procedimiento formal de consideración.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          EN_REDACCION
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>DICTAMEN TÉCNICO CONSTITUCIONAL</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Auditoría Final de los 48 Artículos
          </h1>
          <p className="text-xs text-slate-400">
            Control de calidad institucional de REN-DOC-002 • Trazabilidad con las 107 Decisiones • Identificación de materias pendientes y revisión legal en New Jersey.
          </p>
        </div>

        {/* 4 Indicadores Requeridos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Artículos Auditados:</span>
            <span className="text-xl font-black text-white">48 / 48 (100%)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 space-y-1">
            <span className="text-emerald-400 block font-mono">Artículos Adoptados:</span>
            <span className="text-xl font-black text-emerald-300">0 (No Adoptada)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-800/60 space-y-1">
            <span className="text-rose-400 block font-mono">Pendientes Críticos:</span>
            <span className="text-xl font-black text-rose-300">6 Artículos (13, 17, 22, 43, 46, 47)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-800/60 space-y-1">
            <span className="text-amber-400 block font-mono">Revisión Legal NJ:</span>
            <span className="text-xl font-black text-amber-300">{metrics.legalReviewCount} Artículos</span>
          </div>
        </div>

        {/* Filtros */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3">
          <div className="sm:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por artículo, título o texto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 font-sans"
            />
          </div>

          <div className="sm:col-span-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-sans"
            >
              <option value="ALL">Todo Estado</option>
              <option value="DEFINIDO">DEFINIDO</option>
              <option value="PENDIENTE_DEFINIR">PENDIENTE_DEFINIR (Crítico)</option>
              <option value="REQUIERE_REVISION">REQUIERE_REVISION</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-sans"
            >
              <option value="ALL">Toda Clasificación</option>
              <option value="CONSTITUCION">CONSTITUCIÓN</option>
              <option value="CONSTITUCION_BYLAWS">CONSTITUCIÓN / BYLAWS</option>
              <option value="ARTICLES_OF_INCORPORATION">ARTICLES OF INC.</option>
              <option value="MANUAL_REGLAMENTO">MANUAL / REGLAMENTO</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <select
              value={legalFilter}
              onChange={(e) => setLegalFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-sans"
            >
              <option value="ALL">Revisión Legal: Todo</option>
              <option value="LEGAL_YES">Revisión NJ: SÍ</option>
              <option value="LEGAL_NO">Revisión NJ: NO</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <select
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-sans"
            >
              <option value="ALL">Todo Riesgo</option>
              <option value="CRITICO">CRÍTICO</option>
              <option value="ALTO">ALTO</option>
              <option value="MEDIO">MEDIO</option>
              <option value="BAJO">BAJO</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabla de Auditoría de los 48 Artículos */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-slate-800">
          <span>{filteredAudits.length} de 48 artículos mostrados</span>
          <span>Norma: REN-DOC-002 v0.1 • 107 Decisiones Indexadas</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">ART.</th>
              <th className="py-3 px-3">TÍTULO INSTITUCIONAL</th>
              <th className="py-3 px-3">CLASIFICACIÓN</th>
              <th className="py-3 px-3">ESTADO</th>
              <th className="py-3 px-3">RIESGO</th>
              <th className="py-3 px-3">REV. LEGAL NJ</th>
              <th className="py-3 px-3 text-right">DETALLE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredAudits.map((item) => (
              <tr key={item.articleNumber} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-mono font-bold text-indigo-400">
                  Art. {item.articleNumber}
                </td>
                <td className="py-3 px-3">
                  <strong className="text-white block">{item.title}</strong>
                  <span className="text-[10px] text-slate-400 truncate max-w-sm block">
                    {item.observations}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {item.classification}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      item.status === "PENDIENTE_DEFINIR"
                        ? "bg-rose-950 border-rose-800 text-rose-300"
                        : item.status === "REQUIERE_REVISION"
                        ? "bg-amber-950 border-amber-800 text-amber-300"
                        : "bg-emerald-950 border-emerald-800 text-emerald-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      item.riskLevel === "CRITICO"
                        ? "bg-rose-950 border-rose-800 text-rose-300"
                        : item.riskLevel === "ALTO"
                        ? "bg-amber-950 border-amber-800 text-amber-300"
                        : item.riskLevel === "MEDIO"
                        ? "bg-blue-950 border-blue-800 text-blue-300"
                        : "bg-slate-900 border-slate-800 text-slate-400"
                    }`}
                  >
                    {item.riskLevel}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  {item.legalReviewRequired ? (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                      Revisión NJ
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500">No aplica</span>
                  )}
                </td>
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => setSelectedArticle(item)}
                    className="px-2.5 py-1.5 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-300 font-bold text-[11px] inline-flex items-center gap-1 transition-colors border border-indigo-500/30 font-mono"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ficha</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal / Ficha Técnica Detallada del Artículo */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-indigo-400 font-bold">
                  FICHA TÉCNICA DE AUDITORÍA • ARTÍCULO {selectedArticle.articleNumber}
                </span>
                <h3 className="text-base font-black text-white">{selectedArticle.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 space-y-1">
                <span className="font-bold text-slate-400 block font-mono">TEXTO ACTUAL:</span>
                <p className="text-slate-200 font-serif leading-relaxed">{selectedArticle.currentText}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-900">
                  <span className="text-slate-400 block font-mono text-[10px]">Clasificación:</span>
                  <strong className="text-white font-mono">{selectedArticle.classification}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-900">
                  <span className="text-slate-400 block font-mono text-[10px]">Estado de Auditoría:</span>
                  <strong className="text-indigo-400 font-mono">{selectedArticle.status}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-900">
                  <span className="text-slate-400 block font-mono text-[10px]">Nivel de Riesgo:</span>
                  <strong className="text-amber-400 font-mono">{selectedArticle.riskLevel}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-900">
                  <span className="text-slate-400 block font-mono text-[10px]">Revisión Legal NJ:</span>
                  <strong className="text-slate-200 font-mono">
                    {selectedArticle.legalReviewRequired ? "Requerida" : "No Requerida"}
                  </strong>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 space-y-1">
                <span className="font-bold text-amber-400 block font-mono">OBSERVACIÓN TÉCNICA:</span>
                <p className="text-slate-300">{selectedArticle.observations}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 space-y-1">
                <span className="font-bold text-emerald-400 block font-mono">RECOMENDACIÓN FINAL:</span>
                <p className="text-slate-300">{selectedArticle.recommendation}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-900 space-y-1">
                <span className="font-bold text-slate-400 block font-mono">TRAZABILIDAD INSTITUCIONAL:</span>
                <p className="text-slate-400">{selectedArticle.traceability}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {selectedArticle.relatedDecisionIds.map((id) => (
                    <Link
                      key={id}
                      href={`/decisiones/${id}`}
                      className="text-amber-400 hover:text-amber-300 font-bold underline font-mono text-[10px]"
                    >
                      {id}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <Button variant="outline" size="sm" onClick={() => setSelectedArticle(null)}>
                Cerrar Ficha
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
