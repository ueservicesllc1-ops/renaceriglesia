"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  getFounderDiscernmentSessionPackage,
  recordExplicitFounderDecision,
  DiscernmentSessionState,
} from "@/lib/founder-discernment-session-service";
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
  AlertCircle,
  FileText,
  Lock,
  ExternalLink,
} from "lucide-react";

export default function MatterDiscernmentSessionPage() {
  const params = useParams();
  const rawId = (params?.id as string)?.toUpperCase();
  const pkg = getFounderDiscernmentSessionPackage();

  const matter = pkg.matters.find(
    (m) => m.matterId === rawId || m.matterId.toLowerCase() === (params?.id as string)?.toLowerCase()
  );

  if (!matter) {
    return notFound();
  }

  // Estado del formulario controlado de decisión
  const [sessionDate, setSessionDate] = useState<string>(matter.recordedDecision.sessionDate || "");
  const [decisionText, setDecisionText] = useState<string>(matter.recordedDecision.founderDecisionText || "");
  const [rationale, setRationale] = useState<string>(matter.recordedDecision.rationaleOrFoundingBasis || "");
  const [selectedState, setSelectedState] = useState<DiscernmentSessionState>(matter.currentState);
  const [requiresLegalFiling, setRequiresLegalFiling] = useState<boolean>(matter.recordedDecision.requiresLegalFiling);
  const [postAction, setPostAction] = useState<string>(matter.recordedDecision.postDecisionAction || "");
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const handleSaveDecision = (e: React.FormEvent) => {
    e.preventDefault();
    if (!decisionText.trim()) {
      alert("Por favor ingrese el texto de la decisión expresa del Pastor Fundador.");
      return;
    }

    recordExplicitFounderDecision({
      matterId: matter.matterId,
      articleNumber: matter.articleNumber,
      sessionDate: sessionDate.trim(),
      decisionText: decisionText.trim(),
      rationale: rationale.trim(),
      state: selectedState,
      requiresLegalReview: requiresLegalFiling,
      postAction: postAction.trim(),
    });

    setSavedSuccess(true);
  };

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
            Imprimir Ficha {matter.matterId}
          </Button>
        </div>
      </div>

      {/* Advertencias Solemnes Obligatorias */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs space-y-1 shadow-lg">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <strong className="font-bold uppercase tracking-wide">
            {pkg.disclaimerNotice1}
          </strong>
        </div>
        <p className="text-[11px] text-slate-300 font-mono">
          {pkg.disclaimerNotice2}
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

          <span className="text-xs font-mono px-3 py-1 rounded-xl bg-amber-950/80 border border-amber-800 text-amber-300 font-bold">
            Estado: {matter.currentState}
          </span>
        </div>

        <h1 className="text-2xl font-black text-white tracking-tight">{matter.title}</h1>
        <p className="text-xs text-slate-300 leading-relaxed">{matter.matterSummary}</p>
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
            <span>Materia Específica Pendiente de Decisión:</span>
          </strong>
          <p className="text-slate-200 leading-relaxed font-bold">{matter.whatRemainsPending}</p>

          <div className="pt-2 border-t border-slate-900 space-y-1 text-slate-400 font-mono text-[11px]">
            <strong className="text-indigo-400 block text-[10px] uppercase">Revisión Legal Requerida en NJ:</strong>
            <ul className="list-disc list-inside space-y-1">
              {matter.attorneyQuestions.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* OPCIONES EXISTENTES (PROPUESTAS NO ADOPTADAS) */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <strong className="text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Alternativas y Opciones en Estudio (Propuestas No Adoptadas):</span>
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
              <p className="text-[11px] leading-relaxed">{opt.description}</p>
              <div className="pt-1 text-[10px] text-slate-400 font-mono">
                <strong>Consecuencia:</strong> {opt.consequences}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GUÍA DE DISCERNIMIENTO */}
      <div className="p-5 rounded-3xl bg-[#141e38] border border-indigo-500/30 space-y-2 text-xs shadow-xl">
        <strong className="text-indigo-300 font-mono uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Guía para el Discernimiento Pastoral:</span>
        </strong>
        <p className="text-slate-200 leading-relaxed">{matter.discernmentNotesPrompt}</p>
      </div>

      {/* FORMULARIO CONTROLADO DE REGISTRO DE DECISIÓN DEL PASTOR FUNDADOR */}
      <form onSubmit={handleSaveDecision} className="p-7 rounded-3xl bg-[#0f172a] border border-indigo-500/40 space-y-5 shadow-2xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Formulario de Registro: Decisión Expresa del Pastor Fundador ({matter.matterId})</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Registro Separado Fase 44</span>
        </div>

        {savedSuccess && (
          <div className="p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Decisión registrada formalmente en el registro de la Fase 44. No modifica el Registro de 107 decisiones históricas.</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-slate-300 font-mono font-bold block">
              Fecha de la Sesión (Solo si es real):
            </label>
            <input
              type="text"
              placeholder="Ej. YYYY-MM-DD (dejar en blanco si no ocurrió)"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-slate-300 font-mono font-bold block">
              Estado de la Materia:
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value as DiscernmentSessionState)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-indigo-500"
            >
              <option value="PENDIENTE_DEFINIR">PENDIENTE_DEFINIR</option>
              <option value="EN_DISCERNIMIENTO">EN_DISCERNIMIENTO</option>
              <option value="DECIDIDO">DECIDIDO</option>
              <option value="REQUIERE_REVISION_LEGAL">REQUIERE_REVISION_LEGAL</option>
              <option value="PROPUESTA_NO_ADOPTADA">PROPUESTA_NO_ADOPTADA</option>
              <option value="LISTO_PARA_ADOPCION">LISTO_PARA_ADOPCION</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-slate-300 font-mono font-bold block">
            Texto de la Decisión Expresa del Pastor Fundador:
          </label>
          <textarea
            rows={3}
            placeholder="Ingrese la determinación institucional adoptada por el Fundador..."
            value={decisionText}
            onChange={(e) => setDecisionText(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl p-3.5 text-xs font-mono focus:outline-none focus:border-indigo-500 leading-relaxed"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-slate-300 font-mono font-bold block">
            Fundamento Espiritual y Razón Institucional:
          </label>
          <textarea
            rows={2}
            placeholder="Fundamento bíblico o motivo pastoral..."
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl p-3.5 text-xs font-mono focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-slate-300 font-mono font-bold block">
              Acción Posterior Inmediata:
            </label>
            <input
              type="text"
              value={postAction}
              onChange={(e) => setPostAction(e.target.value)}
              placeholder="Ej. Asentar en Bylaws fiduciarios..."
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3.5 py-2 text-xs font-mono focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center gap-3 pt-6">
            <input
              type="checkbox"
              id="legalCheck"
              checked={requiresLegalFiling}
              onChange={(e) => setRequiresLegalFiling(e.target.checked)}
              className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-indigo-600 focus:ring-0"
            />
            <label htmlFor="legalCheck" className="text-slate-300 font-mono text-xs cursor-pointer">
              Requiere trámite o revisión legal en New Jersey
            </label>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[10px] text-slate-500 font-mono">
            * Requiere confirmación explícita del usuario autorizado.
          </span>

          <Button
            type="submit"
            variant="primary"
            size="sm"
            icon={<Save className="w-3.5 h-3.5" />}
          >
            Guardar Decisión de Sesión (Fase 44)
          </Button>
        </div>
      </form>
    </div>
  );
}
