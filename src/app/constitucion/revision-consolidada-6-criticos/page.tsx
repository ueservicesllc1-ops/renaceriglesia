"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getConsolidatedSixCriticalDossier } from "@/lib/constitution-consolidated-six-critical-service";
import { Button } from "@/components/ui/Button";
import {
  FileText,
  ArrowLeft,
  Printer,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Layers,
  BookOpen,
  HelpCircle,
  Clock,
  CheckCircle2,
  FileQuestion,
  Lock,
  GitBranch,
  ShieldAlert,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function ConsolidatedSixCriticalPage() {
  const dossier = getConsolidatedSixCriticalDossier();
  const [selectedArticleDraft, setSelectedArticleDraft] = useState<number>(13);

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-2">
      {/* Botones de Navegación */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion/decision-pastor-fundador"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Cuaderno de Decisiones</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/constitucion/pendientes"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 border border-indigo-800 px-3.5 py-2 rounded-xl"
          >
            <span>Ver Panel General de Pendientes</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Informe Consolidado
          </Button>
        </div>
      </div>

      {/* Banner de Advertencia Solemne */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              REVISIÓN TÉCNICA CONSOLIDADA DE LOS SEIS EXPEDIENTES CRÍTICOS — FASE 41
            </strong>
            <span className="text-slate-300 text-[11px]">
              Auditoría cruzada de coherencia, armonización de autoridades y preparación para revisión legal. Ninguna propuesta constituye norma adoptada.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          ANÁLISIS CONSOLIDADO
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Scale className="w-3.5 h-3.5" />
            <span>INTEGRACIÓN ESTRUCTURAL DE LA CARTA MAGNA</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Revisión Consolidada: 6 Expedientes Críticos de la Constitución
          </h1>
          <p className="text-xs text-slate-400">
            RENACER CHURCH, INC. (Paterson, NJ) • Pastor Fundador: Luis Uchubanda Falconí • Artículos 13, 17, 22, 43, 46 y 47.
          </p>
        </div>

        {/* 5 Indicadores Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Estado Documental:</span>
            <span className="text-base font-black text-rose-400">{dossier.documentStatus}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Versión Oficial:</span>
            <span className="text-base font-black text-white">v{dossier.documentVersion}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Expedientes:</span>
            <span className="text-base font-black text-emerald-400">6/6 Completados</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Adopción:</span>
            <span className="text-base font-black text-slate-400">NO EJECUTADA</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 space-y-1">
            <span className="text-amber-400 block font-mono">Revisión Legal:</span>
            <span className="text-base font-black text-amber-300">Requerida (NJ)</span>
          </div>
        </div>
      </div>

      {/* PARTE 2 — MATRIZ MAESTRA DE LOS 6 ARTÍCULOS */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>PARTE 2 — MATRIZ MAESTRA DE LOS 6 EXPEDIENTES CRÍTICOS</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">ARTÍCULO</th>
              <th className="py-3 px-3">MATERIA</th>
              <th className="py-3 px-3">FUENTES</th>
              <th className="py-3 px-3">ELEMENTOS DEFINIDOS</th>
              <th className="py-3 px-3">LEGAL NJ</th>
              <th className="py-3 px-3">EXPEDIENTE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {dossier.masterMatrix.map((row) => (
              <tr key={row.articleNumber} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-mono font-bold text-indigo-400">Art. {row.articleNumber}</td>
                <td className="py-3 px-3 font-bold text-white max-w-xs">{row.matter}</td>
                <td className="py-3 px-3 font-mono text-[10px] text-slate-400">{row.sourceDecisions}</td>
                <td className="py-3 px-3 text-slate-300 text-[11px]">
                  <ul className="list-disc list-inside">
                    {row.definedElements.map((elem, i) => <li key={i}>{elem}</li>)}
                  </ul>
                </td>
                <td className="py-3 px-3 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300">
                    Revisión NJ
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  <Link
                    href={row.dossierPath}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-300 hover:text-white bg-indigo-950/60 border border-indigo-800 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    <span>Ver Ficha</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PARTE 3 — AUDITORÍA CRUZADA Y MATRIZ DE CONTRADICCIONES (15 PARES) */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <GitBranch className="w-4 h-4" />
          <span>PARTE 3 — AUDITORÍA CRUZADA DE COHERENCIA NORMATIVA (15 PARES COMPARADOS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dossier.crossConflicts.map((pair) => (
            <div key={pair.pairCode} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold text-xs">Artículos {pair.pairCode}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  pair.relationType === "NO_CONFLICT" ? "bg-emerald-950 border-emerald-800 text-emerald-300" :
                  pair.relationType === "COORDINACION_DIRECTA" ? "bg-indigo-950 border-indigo-800 text-indigo-300" :
                  pair.relationType === "REQUIERE_REVISION_LEGAL" ? "bg-amber-950 border-amber-800 text-amber-300" :
                  "bg-rose-950 border-rose-800 text-rose-300"
                }`}>
                  {pair.relationType}
                </span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">{pair.analysis}</p>
              <div className="pt-1 text-[10px] text-emerald-400 font-mono">
                <strong>Acción:</strong> {pair.actionProposed}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 4 — AUDITORÍA CONSOLIDADA DE AUTORIDADES */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>PARTE 4 — AUDITORÍA CONSOLIDADA DE AUTORIDADES INSTITUCIONALES</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">AUTORIDAD</th>
              <th className="py-3 px-3">TIPO</th>
              <th className="py-3 px-3">RESUMEN DE FACULTADES</th>
              <th className="py-3 px-3">ARTÍCULOS</th>
              <th className="py-3 px-3">ESTADO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {dossier.authoritiesAudit.map((auth, idx) => (
              <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-bold text-white max-w-xs">{auth.authorityName}</td>
                <td className="py-3 px-3 text-[10px] font-mono text-indigo-300">{auth.roleType}</td>
                <td className="py-3 px-3 text-slate-300 text-[11px]">{auth.powersSummary}</td>
                <td className="py-3 px-3 font-mono text-[10px] text-amber-300">{auth.relevantArticles}</td>
                <td className="py-3 px-3 font-mono text-[10px] text-emerald-400">{auth.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PARTE 12 & 13 — MATRIZ DE DEPENDENCIAS Y ASUNTOS PENDIENTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
            <Clock className="w-4 h-4" />
            <span>PARTE 13 — ASUNTOS QUE CONTINÚAN PENDIENTES (6 ARTÍCULOS)</span>
          </div>

          <div className="space-y-3">
            {dossier.pendingMatters.map((p) => (
              <div key={p.articleNumber} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-white font-mono">Art. {p.articleNumber}: {p.topic}</strong>
                  <span className="text-[10px] font-mono text-rose-400">PENDIENTE</span>
                </div>
                <p className="text-slate-300 text-[11px]">{p.whyPending}</p>
                <div className="pt-1 text-[10px] text-slate-500 font-mono">Decide: {p.decidingAuthority}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
            <Lock className="w-4 h-4" />
            <span>PARTE 12 — DEPENDENCIAS CRÍTICAS ENTRE ARTÍCULOS</span>
          </div>

          <div className="space-y-3">
            {dossier.dependencies.map((dep, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-indigo-400 font-bold">Art. {dep.originArticle} → Art. {dep.relatedArticle}</span>
                  <span className="text-[10px] font-mono text-indigo-300">{dep.dependencyType}</span>
                </div>
                <p className="text-slate-300 text-[11px]">{dep.description}</p>
                <div className="pt-1 text-[10px] text-emerald-400 font-mono">Acción: {dep.requiredAction}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTE 18 — CUESTIONARIO JURÍDICO CONSOLIDADO PARA EL ASESOR LEGAL DE NJ */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Scale className="w-4 h-4" />
          <span>PARTE 18 — CUESTIONARIO JURÍDICO CONSOLIDADO (PAQUETE EJECUTIVO NJ)</span>
        </div>

        <div className="space-y-3">
          {dossier.consolidatedAttorneyQuestions.map((q) => (
            <div key={q.questionId} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold">{q.questionId}: {q.category}</span>
                <span className="font-mono text-[10px] text-slate-500">Arts. {q.relatedArticles.join(", ")} • Doc: {q.affectedDocuments}</span>
              </div>
              <p className="text-slate-200 font-bold leading-relaxed">{q.questionText}</p>
              <div className="pt-2 border-t border-slate-900 text-[11px] space-y-0.5 text-slate-400 font-mono">
                <div><strong className="text-amber-400">Motivo:</strong> {q.consultationReason}</div>
                <div><strong className="text-rose-400">Riesgo:</strong> {q.riskIfNotDefined}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 17 — BORRADOR CONSOLIDADO DE LOS 6 ARTÍCULOS (NO ADOPTADO) */}
      <div className="p-6 rounded-3xl bg-[#141e38] border border-indigo-500/40 space-y-4 shadow-2xl text-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/30 pb-3">
          <div className="flex items-center gap-2 text-indigo-300 font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>PARTE 17 — BORRADOR CONSOLIDADO DE LOS 6 ARTÍCULOS (TEXTO DE TRABAJO)</span>
          </div>
          <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
            BORRADOR CONSOLIDADO — NO ADOPTADO
          </span>
        </div>

        {/* Pestañas de selección por artículo */}
        <div className="flex flex-wrap gap-2 pt-1">
          {dossier.draftArticlesConsolidated.map((draft) => (
            <button
              key={draft.articleNumber}
              onClick={() => setSelectedArticleDraft(draft.articleNumber)}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                selectedArticleDraft === draft.articleNumber
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Artículo {draft.articleNumber}
            </button>
          ))}
        </div>

        {/* Visor del texto del artículo seleccionado */}
        {(() => {
          const currentDraft = dossier.draftArticlesConsolidated.find((d) => d.articleNumber === selectedArticleDraft);
          if (!currentDraft) return null;

          return (
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-slate-300 font-bold">
                <span>{currentDraft.title}</span>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/60">
                  {currentDraft.proposalNotice}
                </span>
              </div>
              <pre className="whitespace-pre-wrap font-serif text-slate-200 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 leading-relaxed text-xs">
                {currentDraft.proposedDraftText}
              </pre>
            </div>
          );
        })()}

        <p className="text-[11px] text-amber-300/80 font-mono text-center pt-2">
          * Este texto integrado constituye un borrador de trabajo consolidado. El documento oficial REN-DOC-002 permanece inmutable en estado EN_REDACCION v0.1 (NO ADOPTADA).
        </p>
      </div>
    </div>
  );
}
