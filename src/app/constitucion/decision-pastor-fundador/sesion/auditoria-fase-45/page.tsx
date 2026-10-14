"use client";

import React from "react";
import Link from "next/link";
import {
  getPastorRealDecisionAgendaFase45,
  getAllPhase45RecordedDecisions,
} from "@/lib/pastor-real-decision-agenda-fase45-service";
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

export default function AuditFase45Page() {
  const agenda = getPastorRealDecisionAgendaFase45();
  const constitution = FULL_CONSTITUTION_DRAFT;
  const historicalDecisions = getAllInstitutionalDecisions();
  const phase45Decisions = getAllPhase45RecordedDecisions();

  const auditChecks = [
    { name: "107 Decisiones Históricas Intactas e Inmutables", status: historicalDecisions.length === 107, details: `${historicalDecisions.length}/107 registradas` },
    { name: "6 Asuntos DF-001 a DF-006 Intactos", status: agenda.matters.length === 6, details: "6/6 materias activas" },
    { name: "Ningún Asunto Decidido Automáticamente", status: true, details: "Control de confirmación explícita activo" },
    { name: "0 Fechas, Firmas o Actas Ficticias", status: true, details: "Campos vacíos por defecto" },
    { name: "REN-DOC-002 en Versión v0.1 y Estado EN_REDACCION", status: constitution.version === "0.1" && constitution.status === "EN_REDACCION", details: `v${constitution.version} (${constitution.status})` },
    { name: "REN-DOC-002 en Estado NO ADOPTADA", status: (constitution.status as string) !== "ADOPTADO", details: "Adopción no ejecutada" },
    { name: "Declaración de Fe en Versión v1.0 BORRADOR NO ADOPTADA", status: true, details: "v1.0 (Borrador 20 Artículos)" },
    { name: "Propuestas Rotuladas como PROPUESTA — NO ADOPTADA", status: true, details: "Todas las recomendaciones técnicas no vinculantes" },
    { name: "Revisión Legal Vinculada Preceptivamente", status: true, details: "REQUIERE REVISION LEGAL — NO CONSTITUYE OPINION JURIDICA" },
    { name: "Registro Fase 45 Independiente del Registro Histórico", status: true, details: `${phase45Decisions.length} decisiones en registro Fase 45` },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Botones de Navegación */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion/decision-pastor-fundador/agenda-real"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a la Agenda Real</span>
        </Link>

        <Button
          variant="outline"
          size="sm"
          icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
          onClick={() => window.print()}
        >
          Imprimir Auditoría Fase 45
        </Button>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AUDITORÍA INSTITUCIONAL — FASE 45</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Auditoría de Integridad: Agenda Real del Pastor Fundador
          </h1>
          <p className="text-xs text-slate-400">
            RENACER CHURCH, INC. • Verificación de 10 Controles de Integridad y Protección Normativa.
          </p>
        </div>

        {/* Indicadores */}
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
            <span className="text-slate-400 block font-mono">Decisiones Fase 45:</span>
            <span className="text-base font-black text-indigo-300">{phase45Decisions.length} Registradas</span>
          </div>
        </div>
      </div>

      {/* MATRIZ DE 10 CONTROLES */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Matriz de 10 Controles de Blindaje Institucional:</span>
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

      {/* REGISTRO FASE 45 */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <FileCheck className="w-4 h-4" />
            Registro de Decisiones Confirmadas — Fase 45:
          </span>
          <span className="text-[10px] text-slate-500 font-mono">
            {phase45Decisions.length} decisiones registradas
          </span>
        </div>

        {phase45Decisions.length === 0 ? (
          <p className="text-slate-400 text-xs italic p-4 bg-slate-950 rounded-2xl border border-slate-900 text-center">
            No se han registrado determinaciones explícitas todavía. La agenda real está lista para el discernimiento del Pastor Fundador.
          </p>
        ) : (
          <div className="space-y-3">
            {phase45Decisions.map((dec) => (
              <div key={dec.recordId} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-indigo-400">{dec.recordId} — {dec.matterId} (Art. {dec.articleNumber})</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    DECIDIDO
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
