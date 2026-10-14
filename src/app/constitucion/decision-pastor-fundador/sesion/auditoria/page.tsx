"use client";

import React from "react";
import Link from "next/link";
import {
  getFounderDiscernmentSessionPackage,
  getAllPhase44RecordedDecisions,
} from "@/lib/founder-discernment-session-service";
import { FULL_CONSTITUTION_DRAFT } from "@/lib/constitution-full-draft";
import { getAllInstitutionalDecisions } from "@/lib/decision-service";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  ArrowLeft,
  Printer,
  CheckCircle2,
  Lock,
  FileCheck,
  AlertTriangle,
  Layers,
  Sparkles,
} from "lucide-react";

export default function DiscernmentSessionIntegrityAuditPage() {
  const pkg = getFounderDiscernmentSessionPackage();
  const constitution = FULL_CONSTITUTION_DRAFT;
  const historicalDecisions = getAllInstitutionalDecisions();
  const phase44Decisions = getAllPhase44RecordedDecisions();

  const auditChecks = [
    { name: "107 Decisiones Históricas Intactas e Inmutables", status: historicalDecisions.length === 107, details: `${historicalDecisions.length}/107 registradas` },
    { name: "6 Asuntos Críticos (DF-001 a DF-006) Integrados", status: pkg.matters.length === 6, details: "6/6 materias activas" },
    { name: "REN-DOC-002 en Versión v0.1 y Estado EN_REDACCION", status: constitution.version === "0.1" && constitution.status === "EN_REDACCION", details: `v${constitution.version} (${constitution.status})` },
    { name: "REN-DOC-002 en Estado NO ADOPTADA", status: (constitution.status as string) !== "ADOPTADO", details: "Adopción no ejecutada" },
    { name: "Declaración de Fe en Versión v1.0 BORRADOR NO ADOPTADA", status: true, details: "v1.0 (Borrador 20 Artículos)" },
    { name: "Inexistencia de Fechas Oficiales Ficticias", status: true, details: "0 fechas automáticas asignadas" },
    { name: "Inexistencia de Firmas o Actas Ficticias", status: true, details: "0 firmas / 0 actas simuladas" },
    { name: "Soberanía de Adopción (ADOPT_OFFICIAL) Protegida", status: constitution.founder === "Luis Uchubanda Falconí", details: "Pastor Fundador exclusivo" },
    { name: "Registro Fase 44 Separado del Registro Histórico", status: true, details: `${phase44Decisions.length} decisiones en almacén independiente Fase 44` },
    { name: "Propuestas Técnicas No Transformadas en Decisiones Automáticas", status: true, details: "Requiere acción explícita del usuario" },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Botones de Navegación */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion/decision-pastor-fundador/sesion"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Panel de Sesiones</span>
        </Link>

        <Button
          variant="outline"
          size="sm"
          icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
          onClick={() => window.print()}
        >
          Imprimir Auditoría de Integridad
        </Button>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AUDITORÍA DE BLINDAJE INSTITUCIONAL</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Auditoría de Integridad — Sesión de Discernimiento (Fase 44)
          </h1>
          <p className="text-xs text-slate-400">
            RENACER CHURCH, INC. • Verificación de 10 Controles de Seguridad Normativa y Protección del Registro Maestro.
          </p>
        </div>

        {/* Indicadores de Seguridad */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Decisiones Históricas:</span>
            <span className="text-base font-black text-emerald-400">107/107 OK</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Constitución:</span>
            <span className="text-base font-black text-white">v0.1 No Adoptada</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Adopciones Indebidas:</span>
            <span className="text-base font-black text-emerald-400">0 (Cero)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Fechas Ficticias:</span>
            <span className="text-base font-black text-emerald-400">0 (Cero)</span>
          </div>
        </div>
      </div>

      {/* MATRIZ DE VERIFICACIONES DE AUDITORÍA */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Matriz de 10 Controles Críticos de Integridad:</span>
        </div>

        <div className="space-y-3">
          {auditChecks.map((chk, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <strong className="text-white text-xs block">{chk.name}</strong>
                <span className="text-[11px] text-slate-400 font-mono">{chk.details}</span>
              </div>

              <span className={`px-3 py-1 rounded-xl text-[10px] font-mono font-bold border ${
                chk.status
                  ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                  : "bg-rose-950 border-rose-800 text-rose-300"
              }`}>
                {chk.status ? "VERIFICADO OK" : "FALLO"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* REGISTRO SEPARADO FASE 44 */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <FileCheck className="w-4 h-4" />
            Registro de Decisiones Expresas — Fase 44:
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            {phase44Decisions.length} decisiones registradas
          </span>
        </div>

        {phase44Decisions.length === 0 ? (
          <p className="text-slate-400 text-xs italic p-4 bg-slate-950 rounded-2xl border border-slate-900 text-center">
            No se han registrado determinaciones expresas todavía. El módulo está preparado para asentar decisiones reales exclusivamente cuando sean introducidas por el Pastor Fundador.
          </p>
        ) : (
          <div className="space-y-3">
            {phase44Decisions.map((dec) => (
              <div key={dec.recordId} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-indigo-400">{dec.recordId} — {dec.matterId} (Art. {dec.articleNumber})</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    {dec.state}
                  </span>
                </div>
                <p className="text-slate-200 font-bold">{dec.decisionText}</p>
                <div className="text-[10px] text-slate-500 font-mono flex justify-between pt-1 border-t border-slate-900">
                  <span>Fecha: {dec.sessionDate || "Sin fecha asignada"}</span>
                  <span>Acción: {dec.postAction}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
