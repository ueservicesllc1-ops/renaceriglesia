"use client";

import React from "react";
import Link from "next/link";
import {
  getPastorRealDecisionAgendaFase45,
  getAllPhase45RecordedDecisions,
} from "@/lib/pastor-real-decision-agenda-fase45-service";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  ArrowLeft,
  Printer,
  ShieldAlert,
  Scale,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Layers,
  Lock,
} from "lucide-react";

export default function PastorRealDecisionAgendaPage() {
  const agenda = getPastorRealDecisionAgendaFase45();
  const recordedDecisions = getAllPhase45RecordedDecisions();

  const totalDecided = recordedDecisions.length;
  const totalPending = agenda.totalMatters - totalDecided;
  const totalLegalPending = agenda.matters.filter((m) => m.requiresLegalReview).length;
  const totalPostActions = recordedDecisions.filter((d) => d.postAction.trim().length > 0).length;

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-2">
      {/* Botones de Navegación y Exportación */}
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
            href="/constitucion/decision-pastor-fundador/sesion/auditoria-fase-45"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white transition-colors bg-emerald-950/40 border border-emerald-800 px-3.5 py-2 rounded-xl"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Auditoría de Integridad Fase 45</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Agenda Real
          </Button>
        </div>
      </div>

      {/* Banner de Advertencia Solemne */}
      <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs space-y-2 shadow-xl">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <strong className="font-bold text-sm uppercase tracking-wide">
            FASE 45 — AGENDA REAL DE DECISIÓN DEL PASTOR FUNDADOR LUIS UCHUBANDA FALCONÍ
          </strong>
        </div>
        <p className="text-slate-200 text-xs font-mono leading-relaxed">
          ⚠️ <strong>{agenda.disclaimer}</strong>
        </p>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AGENDA EJECUTIVA DE DISCERNIMIENTO SOBERANO</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Agenda Real de Decisión del Pastor Fundador
          </h1>
          <p className="text-xs text-slate-400">
            Pastor Fundador: <strong className="text-white">{agenda.pastorFounder}</strong> • {agenda.churchLegalName} ({agenda.location}) • Formato Ejecutivo de 6 Asuntos (DF-001 a DF-006).
          </p>
        </div>

        {/* 5 Indicadores Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Decisiones Históricas:</span>
            <span className="text-base font-black text-emerald-400">{agenda.totalHistoricalDecisions}/107 Intactas</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Decisiones Tomadas:</span>
            <span className="text-base font-black text-white">{totalDecided} Asuntos</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 space-y-1">
            <span className="text-amber-400 block font-mono">Decisiones Pendientes:</span>
            <span className="text-base font-black text-amber-300">{totalPending} Asuntos</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Revisión Legal NJ:</span>
            <span className="text-base font-black text-indigo-300">{totalLegalPending} Asuntos</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Constitución:</span>
            <span className="text-base font-black text-slate-400">v0.1 NO ADOPTADA</span>
          </div>
        </div>
      </div>

      {/* ORDEN FORMAL DE LA SESIÓN */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Orden Formal de la Sesión de Decisión:
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Fase 45</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 pt-2 text-center font-mono text-[11px]">
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">1. Apertura</div>
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300">2. DF-001 (Art. 13)</div>
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300">3. DF-002 (Art. 17)</div>
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300">4. DF-003 (Art. 22)</div>
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300">5. DF-004 (Art. 43)</div>
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300">6. DF-005 (Art. 46)</div>
          <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300">7. DF-006 (Art. 47)</div>
        </div>
      </div>

      {/* LISTADO EJECUTIVO DE LOS 6 ASUNTOS (DF-001 A DF-006) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            <span>Agenda Ejecutiva de Asuntos (DF-001 a DF-006):</span>
          </h2>
          <span className="text-xs text-slate-500 font-mono">Haga clic en un asunto para registrar o consultar la decisión</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agenda.matters.map((m) => (
            <div
              key={m.matterId}
              className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between hover:border-indigo-600/60 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
                    {m.matterId} — Artículo {m.articleNumber}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded border ${
                      m.currentState === "DECIDIDO"
                        ? "bg-emerald-950 border-emerald-800 text-emerald-300 font-bold"
                        : "bg-amber-950 border-amber-800 text-amber-300"
                    }`}
                  >
                    {m.currentState}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-tight">{m.matterTitle}</h3>

                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5 text-[11px] text-slate-300">
                  <div><strong className="text-amber-400 font-mono text-[10px] uppercase">Falta Decidir:</strong> {m.whatNeedsDecision}</div>
                  <div><strong className="text-emerald-400 font-mono text-[10px] uppercase">Recomendación Técnica:</strong> <span className="italic">{m.technicalRecommendation}</span></div>
                  <div><strong className="text-indigo-400 font-mono text-[10px] uppercase">Revisión Legal NJ:</strong> {m.requiresLegalReview ? "REQUIERE REVISIÓN LEGAL — NO CONSTITUYE OPINIÓN JURÍDICA" : "No requerida"}</div>
                </div>

                {m.decisionSlot.isConfirmedByFounder && (
                  <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800 space-y-1 text-[11px] font-mono">
                    <strong className="text-emerald-300 block">✓ DECISIÓN CONFIRMADA POR EL FUNDADOR:</strong>
                    <p className="text-slate-200">{m.decisionSlot.decisionText}</p>
                    <div className="text-[10px] text-slate-400 flex justify-between pt-1">
                      <span>Fecha: {m.decisionSlot.sessionDate || "Sin fecha"}</span>
                      <span>Acción: {m.decisionSlot.postAction}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  {m.decisionSlot.isConfirmedByFounder ? "Decisión Registrada" : "Pendiente de Decisión"}
                </span>

                <Link
                  href={`/constitucion/decision-pastor-fundador/agenda-real/${m.matterId.toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-xl transition-colors shadow-lg"
                >
                  <span>{m.decisionSlot.isConfirmedByFounder ? "Consultar / Editar" : "Abrir Formulario de Decisión"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESUMEN FINAL DE LA SESIÓN (CALCULADO DEL REGISTRO REAL) */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Resumen de Estado de la Sesión (Registro Real):
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Calculado de los registros guardados</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
            <span className="text-slate-400 text-[10px] block">DECISIONES TOMADAS</span>
            <span className="text-lg font-black text-emerald-400">{totalDecided}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
            <span className="text-slate-400 text-[10px] block">DECISIONES PENDIENTES</span>
            <span className="text-lg font-black text-amber-400">{totalPending}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
            <span className="text-slate-400 text-[10px] block">REVISIÓN LEGAL PENDIENTE</span>
            <span className="text-lg font-black text-indigo-400">{totalLegalPending}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
            <span className="text-slate-400 text-[10px] block">ACCIONES POSTERIORES</span>
            <span className="text-lg font-black text-white">{totalPostActions}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
