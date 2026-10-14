"use client";

import React from "react";
import Link from "next/link";
import {
  getSixPendingMatters,
  DOCUMENT_PRECEDENCE_MATRIX,
  PendingMatterDetail,
} from "@/lib/constitution-pending-matters-service";
import { Button } from "@/components/ui/Button";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Scale,
  Layers,
  FileQuestion,
  FileText,
  Clock,
  ShieldCheck,
  Printer,
  ShieldAlert,
  FolderLock,
} from "lucide-react";

export default function ConstitutionPendingMattersPage() {
  const matters = getSixPendingMatters();

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Botón Volver */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Texto Constitucional</span>
        </Link>

        <Button
          variant="outline"
          size="sm"
          icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
          onClick={() => window.print()}
        >
          Imprimir Dictamen de Materias Pendientes
        </Button>
      </div>

      {/* Banner de Advertencia Institucional */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              FASE 33 — ANÁLISIS CONTROLADO DE LAS 6 MATERIAS PENDIENTES (REN-DOC-002 v0.1 • NO ADOPTADA)
            </strong>
            <span className="text-slate-300 text-[11px]">
              Este módulo presenta el análisis técnico de las materias no resueltas. Ninguna materia ha sido adoptada ni convertida automáticamente en decidida.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          6 PENDIENTES
        </span>
      </div>

      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest font-mono">
            <FileQuestion className="w-3.5 h-3.5" />
            <span>RESOLUCIÓN CONTROLADA DE MATERIAS CRÍTICAS</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Las 6 Materias Pendientes de la Constitución
          </h1>
          <p className="text-xs text-slate-400">
            Delimitación estricta entre lo decidido, lo pendiente, la revisión legal en New Jersey y la asignación a las capas documentales correspondientes.
          </p>
        </div>

        {/* Resumen Métrico */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Total Materias:</span>
            <span className="text-xl font-black text-white">6 Artículos Críticos</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-800/60 space-y-1">
            <span className="text-rose-400 block font-mono">Estado Actual:</span>
            <span className="text-xl font-black text-rose-300">PENDIENTE_DEFINIR</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-800/60 space-y-1">
            <span className="text-amber-400 block font-mono">Revisión Legal NJ:</span>
            <span className="text-xl font-black text-amber-300">6 / 6 Requeridas</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 space-y-1">
            <span className="text-emerald-400 block font-mono">Estado de Adopción:</span>
            <span className="text-xl font-black text-emerald-300">0 Adoptadas</span>
          </div>
        </div>
      </div>

      {/* Grid de las 6 Tarjetas de Materias Pendientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matters.map((matter) => (
          <div
            key={matter.id}
            className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-xl space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                  ARTÍCULO {matter.articleNumber}
                </span>

                <span
                  className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold font-mono border ${
                    matter.riskLevel === "CRITICO"
                      ? "bg-rose-950 border-rose-800 text-rose-300"
                      : "bg-amber-950 border-amber-800 text-amber-300"
                  }`}
                >
                  Riesgo: {matter.riskLevel}
                </span>
              </div>

              <h2 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                {matter.matterTitle}
              </h2>

              <div className="space-y-1 text-[11px] text-slate-400">
                <div className="flex items-center justify-between border-b border-slate-800/80 py-1">
                  <span>Estado:</span>
                  <strong className="text-rose-400 font-mono">{matter.currentStatus}</strong>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 py-1">
                  <span>Revisión Legal NJ:</span>
                  <strong className="text-amber-300 font-mono">SÍ (Requerida)</strong>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800/80 py-1">
                  <span>Capa Destino:</span>
                  <strong className="text-slate-200 font-mono">{matter.targetDocument}</strong>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-slate-500 font-mono block">Decisiones Relacionadas:</span>
                <div className="flex flex-wrap gap-1">
                  {matter.relatedDecisionIds.map((id) => (
                    <span
                      key={id}
                      className="px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-400 text-[10px] font-mono"
                    >
                      {id}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <Link
                href={`/constitucion/pendientes/${matter.articleNumber}`}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20"
              >
                <span>Ver Análisis Exhaustivo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Matriz General de Prevalencia y Separación Documental */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>MATRIZ GENERAL DE PREVALENCIA Y JERARQUÍA DOCUMENTAL</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Delimitación técnica de funciones, límites de autoridad y prevención de conflictos jurídicos.
            </p>
          </div>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
            Sujeta a Revisión Legal NJ
          </span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">DOCUMENTO / CAPA</th>
              <th className="py-3 px-3">FUNCIÓN INSTITUCIONAL</th>
              <th className="py-3 px-3">AUTORIDAD</th>
              <th className="py-3 px-3">LÍMITES</th>
              <th className="py-3 px-3">CONFLICTO POSIBLE</th>
              <th className="py-3 px-3">DICTAMEN LEGAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {DOCUMENT_PRECEDENCE_MATRIX.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-mono font-bold text-indigo-300">
                  {item.documentName}
                </td>
                <td className="py-3 px-3 text-slate-300">
                  {item.layerFunction}
                </td>
                <td className="py-3 px-3 text-amber-300 font-mono">
                  {item.authority}
                </td>
                <td className="py-3 px-3 text-slate-400">
                  {item.limits}
                </td>
                <td className="py-3 px-3 text-rose-300 text-[11px]">
                  {item.possibleConflict}
                </td>
                <td className="py-3 px-3 text-slate-300 font-mono text-[11px]">
                  {item.legalReviewNotes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
