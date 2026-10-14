import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSixPendingMatters,
  getPendingMatterByArticle,
} from "@/lib/constitution-pending-matters-service";
import {
  ArrowLeft,
  AlertTriangle,
  Scale,
  ShieldAlert,
  CheckCircle2,
  FileQuestion,
  Layers,
  BookOpen,
  Info,
  Clock,
} from "lucide-react";

export function generateStaticParams() {
  const matters = getSixPendingMatters();
  return matters.map((m) => ({
    id: m.articleNumber.toString(),
  }));
}

export default function PendingMatterDetailPage({ params }: { params: { id: string } }) {
  const articleNum = parseInt(params.id, 10);
  const matter = getPendingMatterByArticle(articleNum);

  if (!matter) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Botón Volver */}
      <Link
        href="/constitucion/pendientes"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl no-print"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a las 6 Materias Pendientes</span>
      </Link>

      {/* Banner de Advertencia */}
      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              MATERIA EN ANÁLISIS — ARTÍCULO {matter.articleNumber} (PENDIENTE_DEFINIR • NO ADOPTADA)
            </strong>
            <span className="text-slate-300 text-[11px]">
              Esta ficha contiene el análisis técnico y jurídico institucional. Ningún acuerdo ha sido adoptado ni modificado automáticamente.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-rose-950/80 border border-rose-800 text-rose-300 shrink-0">
          {matter.currentStatus}
        </span>
      </div>

      {/* Header de la Materia */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-black text-indigo-400 px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
              ARTÍCULO {matter.articleNumber}
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              Capa Destino: {matter.targetDocument}
            </span>
          </div>

          <span
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border ${
              matter.riskLevel === "CRITICO"
                ? "bg-rose-950 border-rose-800 text-rose-300"
                : "bg-amber-950 border-amber-800 text-amber-300"
            }`}
          >
            Nivel de Riesgo: {matter.riskLevel}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">{matter.matterTitle}</h1>
        <p className="text-xs text-slate-400">
          Decisiones de origen:{" "}
          {matter.relatedDecisionIds.map((d) => (
            <Link
              key={d}
              href={`/decisiones/${d}`}
              className="text-amber-400 font-mono font-bold underline mr-2"
            >
              {d}
            </Link>
          ))}
        </p>
      </div>

      {/* ANÁLISIS EXHAUSTIVO EN 8 DIMENSIONES */}
      <div className="space-y-6 text-xs">
        {/* A. LO QUE YA ESTÁ DECIDIDO */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-emerald-900/50 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono uppercase tracking-wider text-xs border-b border-emerald-900/40 pb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>A. LO QUE YA ESTÁ DECIDIDO INSTITUCIONALMENTE</span>
          </div>
          <ul className="space-y-2 text-slate-200 list-disc list-inside">
            {matter.definedCriteria.map((c, idx) => (
              <li key={idx} className="leading-relaxed">
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* B. LO QUE ESTÁ PENDIENTE DE DECISIÓN */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-rose-900/50 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-rose-400 font-bold font-mono uppercase tracking-wider text-xs border-b border-rose-900/40 pb-2">
            <FileQuestion className="w-4 h-4" />
            <span>B. LO QUE ESTÁ PENDIENTE DE DECISIÓN</span>
          </div>
          <ul className="space-y-2 text-slate-200 list-disc list-inside">
            {matter.pendingQuestions.map((q, idx) => (
              <li key={idx} className="leading-relaxed">
                {q}
              </li>
            ))}
          </ul>
        </div>

        {/* C. LO QUE REQUIERE REVISIÓN LEGAL */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-amber-900/50 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-amber-400 font-bold font-mono uppercase tracking-wider text-xs border-b border-amber-900/40 pb-2">
            <Scale className="w-4 h-4" />
            <span>C. LO QUE REQUIERE REVISIÓN LEGAL (NEW JERSEY / FEDERAL)</span>
          </div>
          <p className="text-slate-200 leading-relaxed bg-slate-950 p-3.5 rounded-2xl border border-slate-900">
            {matter.legalReviewNotes}
          </p>
        </div>

        {/* D, E, F, G: SEPARACIÓN DE CAPAS DOCUMENTALES */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-indigo-400 font-bold font-mono uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
            <Layers className="w-4 h-4" />
            <span>D, E, F, G. SEPARACIÓN DE CAPAS DOCUMENTALES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <strong className="text-indigo-300 font-mono block">D. Pertenece a Constitución:</strong>
              <p className="text-slate-300">{matter.whatBelongsToConstitution}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <strong className="text-blue-300 font-mono block">E. Pertenece a Bylaws (REN-DOC-003):</strong>
              <p className="text-slate-300">{matter.whatBelongsToBylaws}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <strong className="text-purple-300 font-mono block">F. Pertenece a Articles of Incorporation:</strong>
              <p className="text-slate-300">{matter.whatBelongsToArticles}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <strong className="text-emerald-300 font-mono block">G. Pertenece a Manuales / Reglamentos:</strong>
              <p className="text-slate-300">{matter.whatBelongsToManuals}</p>
            </div>
          </div>
        </div>

        {/* H. LO QUE NO DEBE DEFINIRSE TODAVÍA */}
        <div className="p-6 rounded-3xl bg-[#1a0f1c] border border-rose-950 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-rose-400 font-bold font-mono uppercase tracking-wider text-xs border-b border-rose-900/40 pb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>H. LO QUE NO DEBE DEFINIRSE TODAVÍA (PROHIBICIONES Y LÍMITES)</span>
          </div>
          <p className="text-rose-200 leading-relaxed font-bold">
            {matter.whatMustNotBeDefinedYet}
          </p>
        </div>

        {/* OPCIONES, RECOMENDACIÓN Y PROPUESTA NO ADOPTADA */}
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 text-slate-300 font-bold font-mono uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
            <BookOpen className="w-4 h-4" />
            <span>OPCIONES TÉCNICAS Y RECOMENDACIÓN FINAL</span>
          </div>

          <div className="space-y-2">
            <span className="font-bold text-slate-400 block font-mono">OPCIONES INSTITUCIONALES EN ESTUDIO:</span>
            <ul className="space-y-1.5 list-disc list-inside text-slate-300">
              {matter.options.map((opt, idx) => (
                <li key={idx}>{opt}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-800/60 space-y-1">
            <strong className="text-indigo-300 font-mono block">RECOMENDACIÓN TÉCNICA:</strong>
            <p className="text-slate-200 leading-relaxed">{matter.recommendation}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 text-center space-y-1">
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest block">
              ESTADO DEL ARTÍCULO: {matter.finalStatus}
            </span>
            <p className="text-[11px] text-slate-400">
              Cualquier propuesta generada permanece formalmente como <strong>PROPUESTA — NO ADOPTADA</strong> sujeta a la soberanía exclusiva del Pastor Fundador y revisión legal en New Jersey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
