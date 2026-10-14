"use client";

import React from "react";
import Link from "next/link";
import { getFounderDiscernmentSessionPackage } from "@/lib/founder-discernment-session-service";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  ArrowLeft,
  Printer,
  ShieldAlert,
  Scale,
  BookOpen,
  HelpCircle,
  Clock,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  FolderLock,
  Layers,
} from "lucide-react";

export default function FounderDiscernmentSessionDashboardPage() {
  const pkg = getFounderDiscernmentSessionPackage();

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-2">
      {/* Botones de Navegación y Acciones */}
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
            href="/constitucion/decision-pastor-fundador/sesion/auditoria"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-white transition-colors bg-emerald-950/40 border border-emerald-800 px-3.5 py-2 rounded-xl"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Auditoría de Integridad</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Sesión de Discernimiento
          </Button>
        </div>
      </div>

      {/* Advertencias Solemnes Obligatorias */}
      <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs space-y-2 shadow-xl">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <strong className="font-bold text-sm uppercase tracking-wide">
            FASE 44 — SESIÓN FORMAL DE DISCERNIMIENTO Y DECISIÓN DEL PASTOR FUNDADOR
          </strong>
        </div>
        <div className="space-y-1 text-slate-200 text-xs font-mono">
          <p>⚠️ <strong>{pkg.disclaimerNotice1}</strong></p>
          <p>⚠️ <strong>{pkg.disclaimerNotice2}</strong></p>
        </div>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCERNIMIENTO Y GOBIERNO INSTITUCIONAL</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Módulo de Sesión de Discernimiento del Pastor Fundador
          </h1>
          <p className="text-xs text-slate-400">
            Pastor Fundador: <strong className="text-white">{pkg.pastorFounder}</strong> • {pkg.churchLegalName} ({pkg.location}) • Análisis de los 6 Asuntos Críticos (DF-001 a DF-006).
          </p>
        </div>

        {/* 5 Indicadores Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Decisiones Históricas:</span>
            <span className="text-base font-black text-emerald-400">{pkg.historicalDecisionsCount}/107 Intactas</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Constitución:</span>
            <span className="text-base font-black text-rose-400">v0.1 En Redacción</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Declaración de Fe:</span>
            <span className="text-base font-black text-rose-400">v1.0 Borrador</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 space-y-1">
            <span className="text-amber-400 block font-mono">Asuntos en Sesión:</span>
            <span className="text-base font-black text-amber-300">6 Asuntos (DF-001..006)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Adopción Oficial:</span>
            <span className="text-base font-black text-slate-400">NO ADOPTADA</span>
          </div>
        </div>
      </div>

      {/* FLUJO INSTITUCIONAL DE DECISIÓN (DIAGRAMA CONCEPTUAL) */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Flujo Institucional Controlado de Decisión y Adopción:
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Diferenciación Estricta de 4 Conceptos</span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] font-mono text-center">
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
            1. Asunto
          </div>
          <span className="text-slate-600">→</span>
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
            2. Puntos Definidos
          </div>
          <span className="text-slate-600">→</span>
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
            3. Pendientes
          </div>
          <span className="text-slate-600">→</span>
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300">
            4. Opciones (Propuestas)
          </div>
          <span className="text-slate-600">→</span>
          <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-800 text-amber-300 font-bold">
            5. Discernimiento del Fundador
          </div>
          <span className="text-slate-600">→</span>
          <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-800 text-emerald-300 font-bold">
            6. Decisión Expresa
          </div>
          <span className="text-slate-600">→</span>
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400">
            7. Adopción Solemne (Etapa Posterior)
          </div>
        </div>
      </div>

      {/* GRILLA DE LOS 6 ASUNTOS (DF-001 A DF-006) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-emerald-400" />
            <span>Fichas de Asuntos para la Sesión del Fundador (6 Asuntos):</span>
          </h2>
          <span className="text-xs text-slate-500 font-mono">Seleccione una ficha para ingresar a la sesión</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pkg.matters.map((m) => (
            <div
              key={m.matterId}
              className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between hover:border-indigo-600/60 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
                    {m.matterId} — Artículo {m.articleNumber}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300">
                    {m.currentState}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-tight">{m.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{m.matterSummary}</p>

                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-900 space-y-1 text-[11px] font-mono text-slate-400">
                  <div><strong>Pendiente:</strong> {m.whatRemainsPending}</div>
                  <div><strong>Revisión Legal NJ:</strong> {m.legalReviewRequired ? "Requerida" : "No requerida"}</div>
                  <div><strong>Recomendación Técnica:</strong> <span className="text-emerald-400">{m.technicalRecommendationText}</span></div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  {m.recordedDecision.isExplicitlyEnteredByUser ? "Decisión Registrada" : "Pendiente de Sesión"}
                </span>

                <Link
                  href={`/constitucion/decision-pastor-fundador/sesion/${m.matterId.toLowerCase()}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-2 rounded-xl transition-colors shadow-lg"
                >
                  <span>Abrir Sesión de Discernimiento</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
