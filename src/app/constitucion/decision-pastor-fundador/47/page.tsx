"use client";

import React from "react";
import Link from "next/link";
import { getArticle47Dossier } from "@/lib/article-47-effective-date-dossier";
import { Button } from "@/components/ui/Button";
import {
  CalendarClock,
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
  FileText,
  Lock,
  Calendar,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

export default function Article47DossierPage() {
  const dossier = getArticle47Dossier();

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
            href="/constitucion/pendientes/47"
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
            Imprimir Expediente del Art. 47
          </Button>
        </div>
      </div>

      {/* Banner de Advertencia Solemne */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <CalendarClock className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              EXPEDIENTE TÉCNICO INSTITUCIONAL — ARTÍCULO 47: FECHA DE VIGENCIA OFICIAL Y ADOPCIÓN
            </strong>
            <span className="text-slate-300 text-[11px]">
              Documento preparatorio sobre condiciones previas, diferenciación de fechas y flujo solemne de adopción. No constituye adopción oficial.
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
            <Calendar className="w-3.5 h-3.5" />
            <span>CONDICIONES SUSPENSIVAS, ADOPCIÓN Y ENTRADA EN VIGOR</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Expediente Maestro: Fecha de Vigencia y Adopción (Art. 47)
          </h1>
          <p className="text-xs text-slate-400">
            RENACER CHURCH, INC. (Paterson, NJ) • Pastor Fundador: Luis Uchubanda Falconí • Fuentes: DEC-DEF-001, DEC-DEF-002, REN-DOC-001 y REN-DOC-002.
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
            <span className="text-slate-400 block font-mono">Adopción Oficial:</span>
            <span className="text-lg font-black text-slate-400">NO ADOPTADA</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Vigencia Oficial:</span>
            <span className="text-lg font-black text-amber-400">NO VIGENTE</span>
          </div>
        </div>
      </div>

      {/* PARTE 1 — INVENTARIO DE ESTADOS DOCUMENTALES ACTUALES */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>PARTE 1 — ESTADOS DOCUMENTALES INSTITUCIONALES CONFIRMADOS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          {dossier.documentStatusInventory.map((doc, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold text-xs">{doc.code}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {doc.version}
                </span>
              </div>
              <strong className="text-white text-xs block">{doc.title}</strong>
              <div className="pt-2 border-t border-slate-900 text-[10px] flex justify-between font-mono">
                <span className="text-amber-400">{doc.status}</span>
                <span className="text-rose-400 font-bold">{doc.adoption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 2 — MATRIZ DIFERENCIADORA DE FECHAS */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Clock className="w-4 h-4" />
          <span>PARTE 2 — MATRIZ DIFERENCIADORA DE FECHAS INSTITUCIONALES (7 TIPOS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dossier.datesMatrix.map((d, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-white font-mono text-xs">{d.dateType}</strong>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  d.currentStatus === "REGISTRADA" ? "bg-emerald-950 border-emerald-800 text-emerald-300" : "bg-rose-950 border-rose-800 text-rose-300"
                }`}>
                  {d.currentStatus}
                </span>
              </div>
              <p className="text-amber-300 text-[11px] font-mono font-bold">{d.currentValue}</p>
              <div className="pt-2 border-t border-slate-900 text-[10px] text-slate-400 space-y-0.5 font-mono">
                <div><strong>Autoridad:</strong> {d.whoCanDetermine}</div>
                <div><strong>Documento:</strong> {d.registeringDocument}</div>
                <div><strong>Existencia:</strong> {d.whenItCanExist}</div>
                <div className="text-slate-500 italic pt-1">{d.notes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 5 — ESTADO CONSOLIDADO DE LOS SEIS ASUNTOS CRÍTICOS */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>PARTE 5 — ESTADO CONSOLIDADO DE LOS 6 ASUNTOS CRÍTICOS CONSTITUCIONALES</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">ARTÍCULO</th>
              <th className="py-3 px-3">MATERIA</th>
              <th className="py-3 px-3">ESTADO</th>
              <th className="py-3 px-3">REVISIÓN LEGAL</th>
              <th className="py-3 px-3">EXPEDIENTE</th>
              <th className="py-3 px-3">ADOPCIÓN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {dossier.sixCriticalMatters.map((m) => (
              <tr key={m.articleNumber} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-mono font-bold text-indigo-400">Art. {m.articleNumber}</td>
                <td className="py-3 px-3 font-bold text-white">{m.matter}</td>
                <td className="py-3 px-3 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-800 text-rose-300">
                    {m.status}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300">
                    {m.legalReview}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono text-[10px] text-emerald-400">COMPLETADO</td>
                <td className="py-3 px-3 font-mono text-[10px] text-rose-400 font-bold">NO ADOPTADA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PARTE 4 — CONDICIONES PREVIAS A LA ADOPCIÓN */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>PARTE 4 — CONDICIONES PREVIAS REQUERIDAS ANTES DE LA ADOPCIÓN OFICIAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dossier.preconditions.map((p) => (
            <div key={p.conditionCode} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold">{p.conditionCode}: {p.conditionName}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  p.classification === "DEFINIDA" ? "bg-emerald-950 border-emerald-800 text-emerald-300" :
                  p.classification === "REQUIERE_REVISION_LEGAL" ? "bg-amber-950 border-amber-800 text-amber-300" :
                  p.classification === "PENDIENTE" ? "bg-rose-950 border-rose-800 text-rose-300" :
                  "bg-slate-900 border-slate-800 text-slate-400"
                }`}>
                  {p.classification}
                </span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">{p.description}</p>
              <div className="pt-1 text-[10px] text-slate-500 font-mono">Requisito: {p.sourceOrRequirement}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 6 — FLUJO DE ADOPCIÓN PROPUESTO (11 PASOS) */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 font-mono uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>PARTE 6 — FLUJO DE ADOPCIÓN SOLEMNE PROPUESTO (11 PASOS — NO EJECUTADO)</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
            PROPUESTA — NO ADOPTADO
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {dossier.adoptionFlow.map((step) => (
            <div key={step.stepNumber} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <span className="font-mono text-indigo-400 font-bold text-xs">Paso {step.stepNumber}: {step.stepName}</span>
              <p className="text-slate-300 text-[11px] leading-relaxed">{step.description}</p>
              <div className="pt-1 text-[10px] text-slate-500 font-mono">Autoridad: {step.authority}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 8 — ANÁLISIS DE ALTERNATIVAS DE VIGENCIA */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-white font-mono uppercase tracking-wider">
          <CalendarClock className="w-4 h-4 text-amber-400" />
          <span>PARTE 8 — ALTERNATIVAS EN ESTUDIO PARA LA ENTRADA EN VIGOR</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {dossier.options.map((opt) => (
            <div key={opt.optionCode} className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-2xl flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="px-2 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
                    {opt.optionCode}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
                    {opt.proposalNotice}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white">{opt.name}</h3>
                <p className="text-slate-300 leading-relaxed text-[11px]">{opt.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-emerald-400 block font-mono text-[10px]">Ventajas:</strong>
                    <ul className="list-disc list-inside text-slate-300 text-[11px]">
                      {opt.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-rose-400 block font-mono text-[10px]">Riesgos:</strong>
                    <ul className="list-disc list-inside text-slate-300 text-[11px]">
                      {opt.risks.map((rsk, i) => <li key={i}>{rsk}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-900 space-y-1 text-[10px] text-slate-400">
                <div><strong>Impacto Corporativo:</strong> {opt.corporateImpact}</div>
                <div><strong>Revisión Legal:</strong> {opt.legalReviewNeed}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 11 — CUESTIONARIO JURÍDICO PARA EL ABOGADO DE NEW JERSEY */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Scale className="w-4 h-4" />
          <span>PARTE 11 — CUESTIONARIO JURÍDICO DEL ART. 47 (13 PREGUNTAS ESTATUTARIAS NJ)</span>
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

      {/* PARTE 12 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 47 */}
      <div className="p-6 rounded-3xl bg-[#141e38] border border-indigo-500/40 space-y-4 shadow-2xl text-xs">
        <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2">
          <div className="flex items-center gap-2 text-indigo-300 font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>PARTE 12 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 47</span>
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
