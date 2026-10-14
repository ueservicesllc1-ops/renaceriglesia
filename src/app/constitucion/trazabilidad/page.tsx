"use client";

import React from "react";
import Link from "next/link";
import { getConstitutionTraceabilityMap } from "@/lib/constitution-traceability";
import {
  ArrowLeft,
  Layers,
  ScrollText,
  Printer,
  Scale,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ConstitutionTraceabilityPage() {
  const traceabilityMap = getConstitutionTraceabilityMap();

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
          Imprimir Mapa
        </Button>
      </div>

      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>AUDITORÍA INTERNA DE TRAZABILIDAD</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Mapa de Trazabilidad de la Constitución
          </h1>
          <p className="text-xs text-slate-400">
            Relación exhaustiva entre los 48 Artículos de REN-DOC-002 y las 107 Decisiones Institucionales de origen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Artículos Totales:</span>
            <span className="text-xl font-black text-white">{traceabilityMap.length}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Con Texto Completo:</span>
            <span className="text-xl font-black text-emerald-400">
              {traceabilityMap.filter((t) => t.hasFullText).length}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Revisión Legal NJ:</span>
            <span className="text-xl font-black text-amber-400">
              {traceabilityMap.filter((t) => t.legalReviewRequired).length}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Estado del Documento:</span>
            <span className="text-xs font-bold font-mono text-amber-300 block pt-1">
              EN_REDACCION (v0.1)
            </span>
          </div>
        </div>
      </div>

      {/* Tabla Completa */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">ART.</th>
              <th className="py-3 px-3">TÍTULO</th>
              <th className="py-3 px-3">TÍTULO / CAPÍTULO</th>
              <th className="py-3 px-3">DECISIÓN ORIGEN</th>
              <th className="py-3 px-3">ESTADO TEXTO</th>
              <th className="py-3 px-3">REVISIÓN LEGAL NJ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {traceabilityMap.map((item) => (
              <tr key={item.articleNumber} className="hover:bg-slate-900/50">
                <td className="py-3 px-3 font-mono font-bold text-indigo-400">
                  Art. {item.articleNumber}
                </td>
                <td className="py-3 px-3">
                  <strong className="text-white block">{item.title}</strong>
                </td>
                <td className="py-3 px-3 text-[11px] text-slate-400 font-mono">
                  {item.romanNumeral}: {item.chapterTitle}
                </td>
                <td className="py-3 px-3">
                  <div className="flex flex-wrap gap-1">
                    {item.decisionIds.map((id) => (
                      <Link
                        key={id}
                        href={`/decisiones/${id}`}
                        className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300 text-[10px] font-mono hover:border-amber-500"
                      >
                        {id}
                      </Link>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-3 font-mono text-[11px]">
                  <span className="text-emerald-400 font-bold">Redactado ({item.textLength} car.)</span>
                </td>
                <td className="py-3 px-3 font-mono">
                  {item.legalReviewRequired ? (
                    <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800 font-bold">
                      Revisión NJ
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500">No requerida</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
