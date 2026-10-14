import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllInstitutionalDecisions, getDecisionById, getDecisionByNumber } from "@/lib/decision-service";
import {
  CheckCircle2,
  Scale,
  ShieldCheck,
  AlertTriangle,
  Info,
  ArrowLeft,
  BookOpen,
  FileText,
  Clock,
  Layers,
} from "lucide-react";

export function generateStaticParams() {
  const allDecisions = getAllInstitutionalDecisions();
  const params: { id: string }[] = [];
  
  allDecisions.forEach((d) => {
    params.push({ id: d.decisionId });
    params.push({ id: d.decisionNumber });
  });

  return params;
}

export default function DecisionDetailPage({ params }: { params: { id: string } }) {
  const allDecisions = getAllInstitutionalDecisions();
  const paramId = decodeURIComponent(params.id);

  const decision =
    getDecisionById(paramId) ||
    getDecisionByNumber(paramId) ||
    allDecisions.find((d) => d.decisionNumber.toLowerCase() === paramId.toLowerCase()) ||
    allDecisions.find((d) => d.decisionId.toLowerCase() === paramId.toLowerCase());

  if (!decision) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      {/* Botón de Volver */}
      <Link
        href="/decisiones"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al Registro Maestro de Decisiones</span>
      </Link>

      {/* Header de la Decisión */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-black text-amber-400 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30">
              {decision.decisionNumber}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              {decision.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-emerald-950 border border-emerald-800 text-emerald-300">
              {decision.decisionState}
            </span>
            {decision.legalState === "REQUIERE_REVISION_LEGAL" && (
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-amber-950 border border-amber-800 text-amber-300 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                <span>Revisión Legal NJ</span>
              </span>
            )}
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">{decision.title}</h1>
        <p className="text-sm text-slate-300 italic">"{decision.question}"</p>
      </div>

      {/* Grid de 4 Dimensiones Semánticas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">1. DECISION STATE:</span>
          <span className="text-sm font-bold text-emerald-400">{decision.decisionState}</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">2. DOCUMENT STATE:</span>
          <span className="text-sm font-bold text-blue-400">{decision.documentState} (No adoptado)</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">3. LEGAL STATE:</span>
          <span className="text-sm font-bold text-amber-300">{decision.legalState}</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">4. DOCUMENT TARGET:</span>
          <span className="text-sm font-bold text-violet-400">{decision.documentTarget}</span>
        </div>
      </div>

      {/* Contenido Completo de la Decisión */}
      <div className="p-8 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-6 shadow-xl">
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
            ACUERDO INSTITUCIONAL ADOPTADO:
          </h2>
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-sm text-slate-100 leading-relaxed font-sans whitespace-pre-line">
            {decision.decision || decision.description || "Definido formalmente en el sistema."}
          </div>
        </div>

        {decision.notes && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              NOTAS INSTITUCIONALES / ALCANCE OPERATIVO:
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {decision.notes}
            </p>
          </div>
        )}

        {/* Fundamentos Bíblicos y Legales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800 pt-4">
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fundamentos Bíblicos:</span>
            </h3>
            {decision.biblicalBasis && decision.biblicalBasis.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {decision.biblicalBasis.map((b, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 font-mono text-xs">
                    📖 {b}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">No requiere cita bíblica específica.</p>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5" />
              <span>Fundamentos Legales / Estatutarios:</span>
            </h3>
            {decision.legalBasis && decision.legalBasis.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {decision.legalBasis.map((l, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-indigo-300 font-mono text-xs">
                    ⚖️ {l}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">Ámbito exclusivamente eclesiástico interno.</p>
            )}
          </div>
        </div>

        {/* Documentos Afectados */}
        {decision.affectedDocuments && decision.affectedDocuments.length > 0 && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              DOCUMENTOS DESTINO VINCULADOS:
            </h3>
            <div className="flex flex-wrap gap-2">
              {decision.affectedDocuments.map((docNum, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs font-bold">
                  📄 {docNum}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
