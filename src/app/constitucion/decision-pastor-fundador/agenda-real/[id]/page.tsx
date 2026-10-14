"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  getPastorRealDecisionAgendaFase45,
  confirmAndSavePastorDecisionFase45,
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
  Save,
  AlertTriangle,
  FileText,
  Lock,
  ExternalLink,
  X,
} from "lucide-react";

export default function MatterRealDecisionFormPage() {
  const params = useParams();
  const rawId = (params?.id as string)?.toUpperCase();
  const agenda = getPastorRealDecisionAgendaFase45();

  const matter = agenda.matters.find(
    (m) => m.matterId === rawId || m.matterId.toLowerCase() === (params?.id as string)?.toLowerCase()
  );

  if (!matter) {
    return notFound();
  }

  // Estado del formulario de decisión
  const [decisionText, setDecisionText] = useState<string>(matter.decisionSlot.decisionText || "");
  const [rationale, setRationale] = useState<string>(matter.decisionSlot.rationale || "");
  const [observations, setObservations] = useState<string>(matter.decisionSlot.observations || "");
  const [requiresLegalFiling, setRequiresLegalFiling] = useState<boolean>(matter.decisionSlot.requiresLegalFiling);
  const [postAction, setPostAction] = useState<string>(matter.decisionSlot.postAction || "");
  const [sessionDate, setSessionDate] = useState<string>(matter.decisionSlot.sessionDate || "");

  // Control del modal de confirmación explícita
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);

  const handleOpenModal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!decisionText.trim()) {
      alert("Por favor ingrese el texto de la decisión del Pastor Fundador.");
      return;
    }
    setShowConfirmationModal(true);
  };

  const handleConfirmDecision = () => {
    confirmAndSavePastorDecisionFase45({
      matterId: matter.matterId,
      articleNumber: matter.articleNumber,
      sessionDate: sessionDate.trim(),
      decisionText: decisionText.trim(),
      rationale: rationale.trim(),
      observations: observations.trim(),
      requiresLegalReview: requiresLegalFiling,
      postAction: postAction.trim(),
    });

    setShowConfirmationModal(false);
    setSaveSuccess(true);
  };

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

        <div className="flex items-center gap-2">
          <Link
            href={`/constitucion/decision-pastor-fundador/${matter.articleNumber}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 border border-indigo-800 px-3.5 py-2 rounded-xl"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ver Expediente del Art. {matter.articleNumber}</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Formulario
          </Button>
        </div>
      </div>

      {/* Advertencias Solemnes Obligatorias */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs space-y-1 shadow-lg">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <strong className="font-bold uppercase tracking-wide">
            CONTROL DE CONFIRMACIÓN EXPLÍCITA — FASE 45
          </strong>
        </div>
        <p className="text-[11px] text-slate-300 font-mono">
          La IA no decide. Las decisiones requieren acción explícita y no constituyen adopción de la Constitución.
        </p>
      </div>

      {/* Header del Asunto */}
      <div className="p-7 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
              {matter.matterId}
            </span>
            <span className="text-xs font-mono text-slate-400 font-bold">Artículo {matter.articleNumber}</span>
          </div>

          <span
            className={`text-xs font-mono px-3 py-1 rounded-xl border font-bold ${
              matter.currentState === "DECIDIDO"
                ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                : "bg-amber-950/80 border-amber-800 text-amber-300"
            }`}
          >
            Estado: {matter.currentState}
          </span>
        </div>

        <h1 className="text-2xl font-black text-white tracking-tight">{matter.matterTitle}</h1>
      </div>

      {/* PUNTOS YA DEFINIDOS vs PENDIENTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-xl">
          <strong className="text-emerald-400 font-mono uppercase tracking-wider flex items-center gap-2 text-xs border-b border-slate-800 pb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Puntos ya Definidos en Decisiones Históricas:</span>
          </strong>
          <ul className="space-y-1.5 text-slate-300">
            {matter.whatIsAlreadyDefined.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-xl">
          <strong className="text-amber-400 font-mono uppercase tracking-wider flex items-center gap-2 text-xs border-b border-slate-800 pb-2">
            <Clock className="w-4 h-4" />
            <span>Materia Específica que Falta Decidir:</span>
          </strong>
          <p className="text-slate-200 leading-relaxed font-bold">{matter.whatNeedsDecision}</p>

          <div className="pt-2 border-t border-slate-900 text-slate-400 font-mono text-[11px] space-y-1">
            <strong className="text-indigo-400 block text-[10px] uppercase">Revisión Legal Requerida en NJ:</strong>
            <ul className="list-disc list-inside space-y-0.5">
              {matter.attorneyQuestions.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* OPCIONES DISPONIBLES */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <strong className="text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Opciones Técnicas Disponibles (Propuestas No Adoptadas):</span>
          </strong>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
            PROPUESTA — NO ADOPTADA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {matter.options.map((opt) => (
            <div
              key={opt.optionCode}
              className={`p-4 rounded-2xl border space-y-2 ${
                opt.isTechnicalRecommendation
                  ? "bg-indigo-950/30 border-indigo-700/60 text-indigo-200"
                  : "bg-slate-950 border-slate-900 text-slate-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-xs">{opt.optionCode}: {opt.title}</span>
                {opt.isTechnicalRecommendation && (
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-900 text-indigo-300 border border-indigo-700 font-bold">
                    RECOMENDACIÓN TÉCNICA
                  </span>
                )}
              </div>
              <div className="space-y-1 text-[11px] text-slate-300">
                <p><strong>Establece:</strong> {opt.whatItEstablishes}</p>
                <p><strong>Resuelve:</strong> {opt.whatItResolves}</p>
                <p><strong>Consecuencia:</strong> {opt.consequences}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FORMULARIO DE DECISIÓN DEL PASTOR FUNDADOR */}
      <form onSubmit={handleOpenModal} className="p-7 rounded-3xl bg-[#0f172a] border border-indigo-500/40 space-y-5 shadow-2xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Formulario Ejecutivo de Decisión — Pastor Fundador ({matter.matterId})</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Registro Fase 45</span>
        </div>

        {saveSuccess && (
          <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Decisión registrada formalmente en el registro de la Fase 45.</span>
          </div>
        )}

        <div className="space-y-1.5">
          <label className="text-slate-300 font-mono font-bold block">
            Texto de la Decisión del Pastor Fundador:
          </label>
          <textarea
            rows={3}
            placeholder="Ingrese la decisión institucional expresa del Pastor Fundador..."
            value={decisionText}
            onChange={(e) => setDecisionText(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl p-3.5 text-xs font-mono focus:outline-none focus:border-indigo-500 leading-relaxed"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-slate-300 font-mono font-bold block">
            Fundamento Espiritual y Pastoral:
          </label>
          <textarea
            rows={2}
            placeholder="Fundamento bíblico o motivo pastoral..."
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl p-3.5 text-xs font-mono focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-slate-300 font-mono font-bold block">
            Observaciones Adicionales:
          </label>
          <input
            type="text"
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            placeholder="Observaciones adicionales..."
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-slate-300 font-mono font-bold block">
              Acción Posterior:
            </label>
            <input
              type="text"
              value={postAction}
              onChange={(e) => setPostAction(e.target.value)}
              placeholder="Ej. Asentar en Bylaws fiduciarios..."
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-300 font-mono font-bold block">
              Fecha Real de la Sesión (Solo si ocurrió):
            </label>
            <input
              type="text"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              placeholder="YYYY-MM-DD (dejar en blanco si no ocurrió)"
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="legalFiling"
            checked={requiresLegalFiling}
            onChange={(e) => setRequiresLegalFiling(e.target.checked)}
            className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-indigo-600 focus:ring-0"
          />
          <label htmlFor="legalFiling" className="text-slate-300 font-mono text-xs cursor-pointer">
            REQUIERE REVISIÓN LEGAL — NO CONSTITUYE OPINIÓN JURÍDICA
          </label>
        </div>

        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-mono">
            * Requiere confirmación explícita mediante ventana modal.
          </span>

          <Button
            type="submit"
            variant="primary"
            size="sm"
            icon={<Save className="w-3.5 h-3.5" />}
          >
            Registrar Decisión del Fundador
          </Button>
        </div>
      </form>

      {/* MODAL DE CONFIRMACIÓN EXPLÍCITA (CONTROL DE SEGURIDAD) */}
      {showConfirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 no-print">
          <div className="max-w-lg w-full bg-[#0f172a] border border-amber-500/50 rounded-3xl p-6 space-y-4 shadow-2xl text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-amber-300 font-mono font-bold">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <span>CONFIRMACIÓN EXPLÍCITA DE DECISIÓN</span>
              </div>
              <button
                onClick={() => setShowConfirmationModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-slate-200 leading-relaxed font-mono">
              <p className="font-bold text-white">
                Está a punto de registrar una DECISIÓN DEL PASTOR FUNDADOR ({matter.matterId}).
              </p>
              <p className="text-slate-300 text-[11px]">
                Esta acción no constituye automáticamente la adopción de la Constitución (REN-DOC-002 continúa v0.1 EN_REDACCION NO ADOPTADA).
              </p>
              <p className="text-amber-300 font-bold text-xs pt-2">
                ¿Confirma expresamente que esta es su decisión institucional?
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 text-[11px] text-slate-300 space-y-1 font-mono">
              <div><strong>Decisión:</strong> {decisionText}</div>
              {sessionDate && <div><strong>Fecha:</strong> {sessionDate}</div>}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowConfirmationModal(false)}
              >
                CANCELAR
              </Button>

              <Button
                variant="primary"
                size="sm"
                onClick={handleConfirmDecision}
              >
                CONFIRMAR DECISIÓN
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
