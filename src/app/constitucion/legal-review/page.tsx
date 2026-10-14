"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  getLegalReviewPackageMatters,
  getExecutiveDecisionMatrix,
  LegalReviewPackageMatter,
} from "@/lib/constitution-executive-package-service";
import { Button } from "@/components/ui/Button";
import {
  Scale,
  ArrowLeft,
  Printer,
  AlertTriangle,
  FileCheck2,
  Layers,
  BookOpen,
  HelpCircle,
  ShieldAlert,
  CheckCircle2,
  Building2,
  FileText,
} from "lucide-react";

export default function LegalReviewPackagePage() {
  const legalMatters = getLegalReviewPackageMatters();
  const executiveMatrix = getExecutiveDecisionMatrix();
  const [attorneyNotes, setAttorneyNotes] = useState<string>("");

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Botones de Navegación */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion/pendientes"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a las 6 Materias Pendientes</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/constitucion/decision-pastor-fundador"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-white transition-colors bg-amber-950/40 border border-amber-800 px-3.5 py-2 rounded-xl"
          >
            <span>Ver Paquete del Pastor Fundador</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Paquete Legal
          </Button>
        </div>
      </div>

      {/* Descargo de Responsabilidad Jurídica Obligatorio */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              DOCUMENTO PREPARATORIO PARA REVISIÓN POR ABOGADO • NO CONSTITUYE OPINIÓN LEGAL
            </strong>
            <span className="text-slate-300 text-[11px]">
              Este expediente recopila los antecedentes, preguntas estatutarias y delimitación institucional para ser sometido a consideración del asesor legal corporativo en el Estado de New Jersey.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          FASE 34 • PRE-LEGAL
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Scale className="w-3.5 h-3.5" />
            <span>EXPEDIENTE DE AUDITORÍA Y ASESORÍA JURÍDICA NJ</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Paquete de Revisión Legal — RENACER CHURCH
          </h1>
          <p className="text-xs text-slate-400">
            RENACER CHURCH, INC. (Paterson, NJ) • Pastor Fundador: Luis Uchubanda Falconí • Análisis comparativo y cuestionario técnico bajo la ley de corporaciones de New Jersey.
          </p>
        </div>

        {/* Resumen Institucional y de Identidad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
            <strong className="text-indigo-400 font-mono block">1. IDENTIDAD CORPORATIVA:</strong>
            <p className="text-slate-300 leading-relaxed">
              <strong>Corporación:</strong> RENACER CHURCH, INC.<br />
              <strong>Sede:</strong> Paterson, Passaic County, NJ.<br />
              <strong>Naturaleza:</strong> Entidad eclesiástica sin fines de lucro bajo <em>N.J.S.A. Title 16</em> / <em>IRS 501(c)(3)</em>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
            <strong className="text-amber-400 font-mono block">2. ARQUITECTURA DOCUMENTAL:</strong>
            <p className="text-slate-300 leading-relaxed">
              <strong>Articles of Inc.</strong> (Nacimiento corporativo)<br />
              <strong>Bylaws</strong> (Mecánica de Trustees/NJ)<br />
              <strong>Constitución</strong> (Carta Magna eclesial)<br />
              <strong>Declaración de Fe</strong> (20 Arts. Doctrinales)
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
            <strong className="text-emerald-400 font-mono block">3. ESTADO DEL EXPEDIENTE:</strong>
            <p className="text-slate-300 leading-relaxed">
              <strong>Constitución:</strong> v0.1 (EN_REDACCION)<br />
              <strong>Adopción:</strong> NO ADOPTADA (Soberanía exclusiva del Pastor Fundador).<br />
              <strong>Decisiones Indexadas:</strong> 107 Reales.
            </p>
          </div>
        </div>
      </div>

      {/* MATRIZ EJECUTIVA DE LAS 6 MATERIAS */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="space-y-0.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              <FileCheck2 className="w-4 h-4 text-indigo-400" />
              <span>MATRIZ EJECUTIVA DE DECISIÓN Y REVISIÓN LEGAL (6 MATERIAS)</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Delimitación entre lo definido, lo pendiente, el dictamen legal y la decisión institucional requerida.
            </p>
          </div>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800">
            6 Artículos Auditados
          </span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">ART.</th>
              <th className="py-3 px-3">MATERIA</th>
              <th className="py-3 px-3">DEFINIDO</th>
              <th className="py-3 px-3">PENDIENTE</th>
              <th className="py-3 px-3">REVISIÓN LEGAL NJ</th>
              <th className="py-3 px-3">DECISIÓN REQUERIDA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {executiveMatrix.map((row) => (
              <tr key={row.articleNumber} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-mono font-bold text-indigo-400">
                  Art. {row.articleNumber}
                </td>
                <td className="py-3 px-3 font-bold text-white">
                  {row.matterTitle}
                </td>
                <td className="py-3 px-3 text-slate-300 text-[11px] max-w-xs">
                  {row.whatIsDefined}
                </td>
                <td className="py-3 px-3 text-rose-300 text-[11px] font-mono">
                  {row.whatIsPending}
                </td>
                <td className="py-3 px-3 text-amber-300 text-[11px] max-w-xs">
                  {row.whatRequiresLegalReview}
                </td>
                <td className="py-3 px-3 text-slate-200 text-[11px] max-w-xs">
                  {row.requiredDecisionSummary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CUESTIONARIO Y EXPEDIENTE DETALLADO PARA EL ABOGADO DE NJ */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span>FICHAS TÉCNICAS DE CONSULTA JURÍDICA POR ARTÍCULO</span>
        </div>

        {legalMatters.map((m) => (
          <div
            key={m.articleNumber}
            className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono text-xs font-bold">
                  ARTÍCULO {m.articleNumber}
                </span>
                <h2 className="text-base font-bold text-white">{m.title}</h2>
              </div>
              <span className="text-[11px] font-mono text-amber-300 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                Ref. Legal: {m.njStatutoryReference}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Preguntas Específicas */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-2">
                <strong className="text-amber-400 font-mono flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>PREGUNTAS JURÍDICAS PARA EL ABOGADO:</span>
                </strong>
                <ul className="space-y-1.5 text-slate-200 list-disc list-inside">
                  {m.specificLegalQuestions.map((q, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Riesgos Identificados */}
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                <strong className="text-rose-400 font-mono flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>RIESGOS JURÍDICOS IDENTIFICADOS:</span>
                </strong>
                <ul className="space-y-1.5 text-rose-200 list-disc list-inside">
                  {m.identifiedRisks.map((r, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Separación: Qué requiere abogado vs Qué NO requiere */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-900/30 space-y-1">
                <strong className="text-emerald-400 font-mono block">
                  Materias que NO requieren intervención legal (Eclesiásticas):
                </strong>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {m.mattersNotRequiringLegalIntervention.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-amber-900/30 space-y-1">
                <strong className="text-amber-400 font-mono block">
                  Materias que SÍ requieren dictamen de abogado de NJ:
                </strong>
                <ul className="space-y-1 text-slate-300 list-disc list-inside">
                  {m.mattersRequiringLegalOpinion.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono pt-1">
              <span>Documentos a coordinar: </span>
              <strong className="text-indigo-300">{m.coordinatedDocuments.join(" • ")}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Espacio para Observaciones y Notas del Abogado */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">
          <FileText className="w-4 h-4 text-indigo-400" />
          <span>ESPACIO DE TRABAJO: OBSERVACIONES Y NOTAS DEL ASESOR LEGAL</span>
        </div>
        <p className="text-[11px] text-slate-400">
          Espacio interactivo para registrar apuntes, recomendaciones o dictámenes preliminares durante la sesión de revisión jurídica.
        </p>
        <textarea
          rows={5}
          value={attorneyNotes}
          onChange={(e) => setAttorneyNotes(e.target.value)}
          placeholder="Escriba aquí las notas u observaciones del abogado durante la consulta legal..."
          className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-sans leading-relaxed"
        />
      </div>
    </div>
  );
}
