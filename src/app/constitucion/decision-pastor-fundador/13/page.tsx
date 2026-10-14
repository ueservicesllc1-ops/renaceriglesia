"use client";

import React from "react";
import Link from "next/link";
import { getArticle13Dossier } from "@/lib/article-13-succession-dossier";
import { Button } from "@/components/ui/Button";
import {
  Crown,
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
  UserCheck,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

export default function Article13DossierPage() {
  const dossier = getArticle13Dossier();

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
            href="/constitucion/pendientes/13"
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
            Imprimir Expediente del Art. 13
          </Button>
        </div>
      </div>

      {/* Banner de Advertencia Solemne */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              EXPEDIENTE TÉCNICO INSTITUCIONAL — ARTÍCULO 13: SUCESIÓN DEL PASTOR FUNDADOR
            </strong>
            <span className="text-slate-300 text-[11px]">
              Documento preparatorio para el discernimiento del Pastor Fundador Luis Uchubanda Falconí y posterior revisión legal en New Jersey. No constituye adopción.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          PENDIENTE_DEFINIR
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1b170e] via-[#12110c] to-[#070d18] border border-amber-900/40 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-amber-900/30 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>CONTINUIDAD MINISTERIAL Y GOBIERNO TEOCRÁTICO</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Expediente Maestro: Sucesión del Pastor Fundador (Art. 13)
          </h1>
          <p className="text-xs text-amber-200/70">
            RENACER CHURCH, INC. • Pastor Fundador: Luis Uchubanda Falconí • Fuentes: DEC-DEF-001, DEC-PEND-001, DEC-DEF-177 y REN-DOC-002.
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
            <span className="text-slate-400 block font-mono">Materia Sujeta a:</span>
            <span className="text-lg font-black text-white">ADOPT_OFFICIAL</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Propuesta Técnica:</span>
            <span className="text-lg font-black text-slate-300">NO ADOPTADA</span>
          </div>
        </div>
      </div>

      {/* PARTE 1 — AUTORIDAD ACTUAL EN 4 DIMENSIONES */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4" />
          <span>PARTE 1 — DELIMITACIÓN DE AUTORIDAD DEL PASTOR FUNDADOR</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {dossier.authorities.map((auth, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="text-amber-300 font-mono text-sm">{auth.title}</strong>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                  {auth.category}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">{auth.scope}</p>
              <div className="pt-2 border-t border-slate-900 text-[11px] space-y-1 text-slate-400">
                <div><strong>Relación con el Consejo:</strong> {auth.relationshipWithCouncil}</div>
                <div><strong>Relación con la Congregación:</strong> {auth.relationshipWithCongregation}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 2 — EVENTOS QUE REQUIEREN SUCESIÓN */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Stethoscope className="w-4 h-4" />
          <span>PARTE 2 — EVENTOS INSTITUCIONALES QUE ACTIVAN SUCESIÓN O TRANSICIÓN</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          {dossier.events.map((evt) => (
            <div key={evt.eventId} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-indigo-400 text-xs">{evt.eventId}</span>
                <span className="font-bold text-white text-xs">{evt.eventType}</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">{evt.description}</p>
              <div className="pt-2 border-t border-slate-900 space-y-1 text-[10px] text-slate-400">
                <div><strong className="text-emerald-400">Protocolo Definido:</strong> {evt.currentDefinedProtocol}</div>
                <div><strong className="text-rose-400">Puntos Pendientes:</strong> {evt.pendingElements}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 5 — TABLA DE ESCENARIOS */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Clock className="w-4 h-4 text-indigo-400" />
          <span>PARTE 5 — MATRIZ DE ESCENARIOS, AUTORIDAD Y DURACIÓN</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">ESCENARIO</th>
              <th className="py-3 px-3">QUIÉN ACTÚA</th>
              <th className="py-3 px-3">AUTORIDAD EJERCIDA</th>
              <th className="py-3 px-3">DURACIÓN</th>
              <th className="py-3 px-3">DECISIÓN</th>
              <th className="py-3 px-3">LEGAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {dossier.scenarios.map((sc, idx) => (
              <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-bold text-white max-w-xs">{sc.scenarioName}</td>
                <td className="py-3 px-3 text-slate-300 text-[11px]">{sc.whoActs}</td>
                <td className="py-3 px-3 text-slate-400 text-[11px]">{sc.exercisedAuthority}</td>
                <td className="py-3 px-3 text-indigo-300 font-mono text-[11px]">{sc.duration}</td>
                <td className="py-3 px-3 font-mono">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                    sc.decisionStatus === "DEFINIDO" ? "bg-emerald-950 border-emerald-800 text-emerald-300" : "bg-rose-950 border-rose-800 text-rose-300"
                  }`}>
                    {sc.decisionStatus}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                    Revisión NJ
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PARTE 4 — MATERIAS PENDIENTES */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-rose-950/60 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-rose-400 font-mono uppercase tracking-wider border-b border-rose-900/40 pb-2">
          <FileQuestion className="w-4 h-4" />
          <span>PARTE 4 — MATERIAS QUE PERMANECEN ABIERTAS (PENDIENTE_DEFINIR)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {dossier.pendingMattersList.map((item) => (
            <div key={item.letter} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <div className="flex items-center justify-between">
                <strong className="text-amber-400 font-mono">Inciso {item.letter}: {item.item}</strong>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 border border-rose-800 text-rose-300">
                  {item.status}
                </span>
              </div>
              <p className="text-slate-300 text-[11px]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 6 — OPCIONES INSTITUCIONALES EN ESTUDIO */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-white font-mono uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>PARTE 6 — OPCIONES INSTITUCIONALES EN ESTUDIO</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {dossier.options.map((opt) => (
            <div key={opt.optionCode} className="p-6 rounded-3xl bg-[#0f172a] border border-amber-900/30 space-y-4 shadow-2xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="px-2.5 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs">
                    {opt.optionCode}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
                    {opt.proposalBadge}
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
                <div><strong>Impacto Espiritual:</strong> {opt.spiritualImpact}</div>
                <div><strong>Impacto Corporativo:</strong> {opt.corporateImpact}</div>
                <div><strong>Revisión Legal:</strong> {opt.mattersRequiringAttorney}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 7 — PREGUNTAS PARA EL ABOGADO DE NEW JERSEY */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Scale className="w-4 h-4" />
          <span>PARTE 7 — CUESTIONARIO JURÍDICO PARA EL ASESOR LEGAL DE NEW JERSEY</span>
        </div>

        <ul className="space-y-2 text-slate-200 list-disc list-inside bg-slate-950 p-4 rounded-2xl border border-slate-900">
          {dossier.njAttorneyQuestions.map((q, idx) => (
            <li key={idx} className="leading-relaxed">{q}</li>
          ))}
        </ul>
      </div>

      {/* PARTE 9 — PROPUESTA DE REDACCIÓN SUGERIDA (NO ADOPTADA) */}
      <div className="p-6 rounded-3xl bg-[#141e38] border border-indigo-500/40 space-y-4 shadow-2xl text-xs">
        <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2">
          <div className="flex items-center gap-2 text-indigo-300 font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>PARTE 9 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 13</span>
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
