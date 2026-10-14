"use client";

import React from "react";
import Link from "next/link";
import { getArticle17Dossier } from "@/lib/article-17-corporate-powers-dossier";
import { Button } from "@/components/ui/Button";
import {
  Scale,
  ArrowLeft,
  Printer,
  AlertTriangle,
  Building2,
  ShieldCheck,
  Layers,
  BookOpen,
  HelpCircle,
  Clock,
  CheckCircle2,
  FileQuestion,
  FileText,
  DollarSign,
  TrendingUp,
  Percent,
} from "lucide-react";

export default function Article17DossierPage() {
  const dossier = getArticle17Dossier();

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
            href="/constitucion/pendientes/17"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 border border-indigo-800 px-3.5 py-2 rounded-xl"
          >
            <span>Ver Ficha Técnica en Pendientes</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Expediente del Art. 17
          </Button>
        </div>
      </div>

      {/* Banner de Advertencia Solemne */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              EXPEDIENTE TÉCNICO INSTITUCIONAL — ARTÍCULO 17: QUÓRUMS Y PODERES CORPORATIVOS
            </strong>
            <span className="text-slate-300 text-[11px]">
              Documento preparatorio sobre el Consejo de Gobierno, umbrales financieros y gobernanza de Trustees. No constituye adopción oficial.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          PENDIENTE_DEFINIR
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Scale className="w-3.5 h-3.5" />
            <span>GOBERNANZA CORPORATIVA Y FIDUCIARIA DE NEW JERSEY</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Expediente Maestro: Quórums, Mayorías y Poderes (Art. 17)
          </h1>
          <p className="text-xs text-slate-400">
            RENACER CHURCH, INC. (Paterson, NJ) • Pastor Fundador: Luis Uchubanda Falconí • Fuentes: DEC-DEF-002, DEC-DEF-004 y REN-DOC-002.
          </p>
        </div>

        {/* 4 Indicadores Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Estado Actual:</span>
            <span className="text-lg font-black text-rose-400">{dossier.currentStatus}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 space-y-1">
            <span className="text-amber-400 block font-mono">Revisión Legal:</span>
            <span className="text-lg font-black text-amber-300">Requerida (NJ)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Regla de Quórum:</span>
            <span className="text-lg font-black text-emerald-400">3→2 / 4→3 / 5→3</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Mayoría Extraordinaria:</span>
            <span className="text-lg font-black text-amber-400">2/3 + Fundador</span>
          </div>
        </div>
      </div>

      {/* PARTE 1 — INVENTARIO DE LO YA DEFINIDO INSTITUCIONALMENTE */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>PARTE 1 — INVENTARIO DE REGLAS INSTITUCIONALES DEFINIDAS (CONSEJO DE GOBIERNO)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {dossier.definedParams.map((param, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-white font-mono text-xs">{param.paramName}</strong>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">
                  {param.status}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed font-serif">{param.definedRule}</p>
              <div className="pt-2 border-t border-slate-900 text-[10px] text-slate-400 flex justify-between font-mono">
                <span>Fuente: {param.sourceDecision}</span>
                <span>{param.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 4 — MATRIZ TÉCNICA DE PODERES INSTITUCIONALES */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>PARTE 4 — MATRIZ TÉCNICA DE PODERES Y QUÓRUMS (14 MATERIAS)</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">MATERIA</th>
              <th className="py-3 px-3">ÓRGANO COMPETENTE</th>
              <th className="py-3 px-3">MAYORÍA</th>
              <th className="py-3 px-3">QUÓRUM</th>
              <th className="py-3 px-3">NIVEL</th>
              <th className="py-3 px-3">ESTADO</th>
              <th className="py-3 px-3">LEGAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {dossier.powersMatrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-bold text-white max-w-xs">{row.matter}</td>
                <td className="py-3 px-3 text-slate-300 text-[11px]">{row.competentBody}</td>
                <td className="py-3 px-3 text-amber-300 font-mono text-[11px]">{row.requiredMajority}</td>
                <td className="py-3 px-3 text-indigo-300 font-mono text-[11px]">{row.requiredQuorum}</td>
                <td className="py-3 px-3 font-mono text-[10px] text-slate-400">{row.authorityLevel}</td>
                <td className="py-3 px-3 font-mono">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                    row.status === "DEFINIDO" ? "bg-emerald-950 border-emerald-800 text-emerald-300" : "bg-rose-950 border-rose-800 text-rose-300"
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  {row.legalReviewRequired ? (
                    <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                      Revisión NJ
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500">No aplica</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PARTE 5 — ANÁLISIS DE ALTERNATIVAS DE UMBRAL ECONÓMICO */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-white font-mono uppercase tracking-wider">
          <DollarSign className="w-4 h-4 text-amber-400" />
          <span>PARTE 5 — ALTERNATIVAS EN ESTUDIO PARA EL UMBRAL ECONÓMICO</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {dossier.thresholdOptions.map((opt) => (
            <div key={opt.optionCode} className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-2xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="px-2.5 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
                    {opt.optionCode}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
                    {opt.proposalNotice}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">{opt.name}</h3>
                <p className="text-slate-300 leading-relaxed">{opt.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-emerald-400 block font-mono">Ventajas:</strong>
                    <ul className="list-disc list-inside text-slate-300">
                      {opt.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-rose-400 block font-mono">Riesgos:</strong>
                    <ul className="list-disc list-inside text-slate-300">
                      {opt.risks.map((rsk, i) => <li key={i}>{rsk}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-900 space-y-1 text-[11px] text-slate-400">
                <div><strong>Impacto Corporativo:</strong> {opt.corporateImpact}</div>
                <div><strong>Revisión Legal:</strong> {opt.legalReviewNeed}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 6 — CUESTIONARIO JURÍDICO PARA EL ASESOR LEGAL DE NJ */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Scale className="w-4 h-4" />
          <span>PARTE 6 — CUESTIONARIO JURÍDICO DEL ART. 17 (13 PREGUNTAS ESTATUTARIAS NJ)</span>
        </div>

        <div className="space-y-3">
          {dossier.attorneyQuestions.map((q) => (
            <div key={q.questionNumber} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold">Pregunta {q.questionNumber}:</span>
                <span className="font-mono text-[10px] text-slate-500">Doc: {q.affectedDocument}</span>
              </div>
              <p className="text-slate-200 font-bold leading-relaxed">{q.questionText}</p>
              <div className="pt-2 border-t border-slate-900 text-[11px] space-y-0.5 text-slate-400 font-mono">
                <div><strong className="text-amber-400">Motivo de Consulta:</strong> {q.consultationReason}</div>
                <div><strong className="text-rose-400">Riesgo si no se define:</strong> {q.riskIfNotDefined}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 7 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 17 */}
      <div className="p-6 rounded-3xl bg-[#141e38] border border-indigo-500/40 space-y-4 shadow-2xl text-xs">
        <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2">
          <div className="flex items-center gap-2 text-indigo-300 font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>PARTE 7 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 17</span>
          </div>
          <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
            {dossier.proposedDraftNotice}
          </span>
        </div>

        <pre className="whitespace-pre-wrap font-serif text-slate-200 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 leading-relaxed text-xs">
          {dossier.proposedDraftText}
        </pre>

        <p className="text-[11px] text-amber-300/80 font-mono text-center">
          * Esta redacción constituye una propuesta orientativa de trabajo. El texto oficial de REN-DOC-002 permanece inmutable en estado EN_REDACCION v0.1 (NO ADOPTADA).
        </p>
      </div>
    </div>
  );
}
