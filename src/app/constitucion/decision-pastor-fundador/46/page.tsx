"use client";

import React from "react";
import Link from "next/link";
import { getArticle46Dossier } from "@/lib/article-46-document-precedence-dossier";
import { Button } from "@/components/ui/Button";
import {
  FileCode2,
  ArrowLeft,
  Printer,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Layers,
  BookOpen,
  HelpCircle,
  Clock,
  CheckCircle2,
  FileQuestion,
  FileText,
  Lock,
  GitBranch,
  ShieldAlert,
} from "lucide-react";

export default function Article46DossierPage() {
  const dossier = getArticle46Dossier();

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-2">
      {/* Botones de Navegación */}
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
            href="/constitucion/pendientes/46"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 border border-indigo-800 px-3.5 py-2 rounded-xl"
          >
            <span>Ver Ficha Técnica en Pendientes</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Expediente del Art. 46
          </Button>
        </div>
      </div>

      {/* Banner de Advertencia Solemne */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              EXPEDIENTE TÉCNICO INSTITUCIONAL — ARTÍCULO 46: PREVALENCIA EN CONFLICTO DOCUMENTAL
            </strong>
            <span className="text-slate-300 text-[11px]">
              Documento preparatorio sobre separación de esferas (espiritual vs corporativa), tipología de conflictos y jerarquía preliminar. No constituye adopción oficial.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          PENDIENTE_DEFINIR
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Scale className="w-3.5 h-3.5" />
            <span>ARMONIZACIÓN NORMATIVA Y PREVALENCIA INSTITUCIONAL</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Expediente Maestro: Prevalencia Documental (Art. 46)
          </h1>
          <p className="text-xs text-slate-400">
            RENACER CHURCH, INC. (Paterson, NJ) • Pastor Fundador: Luis Uchubanda Falconí • Fuentes: DEC-DEF-001, DEC-DEF-002, REN-DOC-001 y REN-DOC-002.
          </p>
        </div>

        {/* 4 Indicadores Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Estado Actual:</span>
            <span className="text-lg font-black text-rose-400">{dossier.currentStatus}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 space-y-1">
            <span className="text-amber-400 block font-mono">Revisión Legal:</span>
            <span className="text-lg font-black text-amber-300">Requerida (NJ)</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Doctrina de Fe:</span>
            <span className="text-lg font-black text-emerald-400">Primacía Absoluta</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Protocolo de Conflicto:</span>
            <span className="text-lg font-black text-indigo-400">12 Pasos Propuestos</span>
          </div>
        </div>
      </div>

      {/* PARTE 1 — INVENTARIO DE LA ESTRUCTURA DOCUMENTAL */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>PARTE 1 — INVENTARIO DE DOCUMENTOS INSTITUCIONALES DE RENACER</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {dossier.documentInventory.map((doc, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <strong className="text-white font-mono text-xs">{doc.documentName}</strong>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300">
                  {doc.documentCode}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed font-serif text-[11px]">{doc.primaryFunction}</p>
              <div className="pt-2 border-t border-slate-900 text-[10px] text-slate-400 flex flex-col gap-0.5 font-mono">
                <div><strong>Ámbito:</strong> {doc.jurisdictionScope}</div>
                <div><strong>Autoridad:</strong> {doc.governingAuthority}</div>
                <div><strong>Estado:</strong> {doc.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 2 — JERARQUÍA PRELIMINAR PROPUESTA */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-indigo-500/30 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-indigo-500/20 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 font-mono uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>PARTE 2 — JERARQUÍA PRELIMINAR DE TRABAJO (PROPUESTA NO ADOPTADA)</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
            PRELIMINAR / REQUIERE REVISIÓN LEGAL
          </span>
        </div>

        <div className="space-y-2">
          {dossier.preliminaryHierarchy.map((lvl) => (
            <div key={lvl.level} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold flex items-center justify-center shrink-0">
                  {lvl.level}
                </span>
                <div>
                  <strong className="text-white font-bold block">{lvl.layer}</strong>
                  <span className="text-slate-400 text-[11px]">{lvl.scope}</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded-lg border border-slate-800 shrink-0">
                {lvl.legalNature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 3 — TIPOS DE CONFLICTO DOCUMENTAL */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>PARTE 3 — TIPOLOGÍA DE CONFLICTOS DOCUMENTALES (TIPOS A, B, C, D y E)</span>
        </div>

        <div className="space-y-3">
          {dossier.conflictTypes.map((c) => (
            <div key={c.conflictCode} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold">{c.conflictCode}: {c.conflictName}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  c.legalReviewRequired ? "bg-amber-950 border-amber-800 text-amber-300" : "bg-slate-900 border-slate-800 text-slate-400"
                }`}>
                  {c.legalReviewRequired ? "Revisión Legal NJ" : "Resolución Interna"}
                </span>
              </div>
              <p className="text-slate-300 text-[11px]"><strong className="text-slate-400">Escenario:</strong> {c.exampleScenario}</p>
              <p className="text-emerald-300 text-[11px]"><strong className="text-emerald-400">Procedimiento Propuesto:</strong> {c.proposedResolutionProcedure}</p>
              <div className="pt-1 text-[10px] text-slate-500 font-mono">Documentos: {c.involvedDocuments}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 5 — MATRIZ DE SEPARACIÓN ENTRE ESFERA ESPIRITUAL Y CORPORATIVA */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-300 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>PARTE 5 — SEPARACIÓN DE ESFERAS: ESPIRITUAL vs CORPORATIVA (15 MATERIAS)</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">MATERIA</th>
              <th className="py-3 px-3">ESFERA</th>
              <th className="py-3 px-3">DOCUMENTO PRINCIPAL</th>
              <th className="py-3 px-3">AUTORIDAD</th>
              <th className="py-3 px-3">POSIBLE CONFLICTO</th>
              <th className="py-3 px-3">LEGAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {dossier.separationMatrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-bold text-white max-w-xs">{row.matter}</td>
                <td className="py-3 px-3 text-[10px] font-mono">
                  <span className={`px-2 py-0.5 rounded border ${
                    row.sphereType === "ESPIRITUAL_DOCTRINAL" ? "bg-emerald-950 border-emerald-800 text-emerald-300" :
                    row.sphereType === "CORPORATIVO_FIDUCIARIO" ? "bg-indigo-950 border-indigo-800 text-indigo-300" :
                    "bg-amber-950 border-amber-800 text-amber-300"
                  }`}>
                    {row.sphereType}
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-300 text-[11px]">{row.primaryDocument}</td>
                <td className="py-3 px-3 text-amber-300 text-[11px]">{row.institutionalAuthority}</td>
                <td className="py-3 px-3 text-slate-400 text-[11px]">{row.potentialConflict}</td>
                <td className="py-3 px-3 font-mono">
                  {row.legalReviewRequired ? (
                    <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                      Revisión NJ
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500">No aplica</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PARTE 6 — PROTOCOLO PROPUESTO EN 12 PASOS */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 font-mono uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>PARTE 6 — PROTOCOLO INSTITUCIONAL PROPUESTO DE 12 PASOS</span>
          </div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
            PROPUESTA — NO ADOPTADA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {dossier.resolutionProtocol.map((step) => (
            <div key={step.stepNumber} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold text-xs">Paso {step.stepNumber}: {step.stepName}</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">{step.description}</p>
              <div className="pt-1 text-[10px] text-slate-500 font-mono">Responsable: {step.responsibleRole}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 10 — OPCIONES INSTITUCIONALES EN ESTUDIO */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-white font-mono uppercase tracking-wider">
          <GitBranch className="w-4 h-4 text-amber-400" />
          <span>PARTE 10 — ALTERNATIVAS EN ESTUDIO PARA EL ARTÍCULO 46</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {dossier.options.map((opt) => (
            <div key={opt.optionCode} className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-2xl flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="px-2 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
                    {opt.optionCode}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
                    {opt.proposalNotice}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white">{opt.name}</h3>
                <p className="text-slate-300 leading-relaxed text-[11px]">{opt.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div>
                    <strong className="text-emerald-400 block font-mono text-[10px]">Ventajas:</strong>
                    <ul className="list-disc list-inside text-slate-300 text-[11px]">
                      {opt.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-rose-400 block font-mono text-[10px]">Riesgos:</strong>
                    <ul className="list-disc list-inside text-slate-300 text-[11px]">
                      {opt.risks.map((rsk, i) => <li key={i}>{rsk}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-900 space-y-1 text-[10px] text-slate-400">
                <div><strong>Impacto Corporativo:</strong> {opt.corporateImpact}</div>
                <div><strong>Revisión Legal:</strong> {opt.legalReviewNeed}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 11 — CUESTIONARIO JURÍDICO PARA EL ABOGADO DE NEW JERSEY */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Scale className="w-4 h-4" />
          <span>PARTE 11 — CUESTIONARIO JURÍDICO DEL ART. 46 (14 PREGUNTAS ESTATUTARIAS NJ)</span>
        </div>

        <div className="space-y-3">
          {dossier.attorneyQuestions.map((q) => (
            <div key={q.questionNumber} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold">Pregunta {q.questionNumber}:</span>
                <span className="font-mono text-[10px] text-slate-500">Doc: {q.affectedDocument}</span>
              </div>
              <p className="text-slate-200 font-bold leading-relaxed">{q.questionText}</p>
              <div className="pt-2 border-t border-slate-900 text-[11px] space-y-0.5 text-slate-400 font-mono">
                <div><strong className="text-amber-400">Motivo de Consulta:</strong> {q.consultationReason}</div>
                <div><strong className="text-rose-400">Riesgo si no se define:</strong> {q.riskIfNotDefined}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 12 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 46 */}
      <div className="p-6 rounded-3xl bg-[#141e38] border border-indigo-500/40 space-y-4 shadow-2xl text-xs">
        <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2">
          <div className="flex items-center gap-2 text-indigo-300 font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>PARTE 12 — PROPUESTA DE REDACCIÓN DEL ARTÍCULO 46</span>
          </div>
          <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
            {dossier.proposedDraftNotice}
          </span>
        </div>

        <pre className="whitespace-pre-wrap font-serif text-slate-200 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 leading-relaxed text-xs">
          {dossier.proposedDraftText}
        </pre>

        <p className="text-[11px] text-amber-300/80 font-mono text-center">
          * Esta redacción constituye una propuesta orientativa de trabajo. El texto oficial de REN-DOC-002 permanece inmutable en estado EN_REDACCION v0.1 (NO ADOPTADA).
        </p>
      </div>
    </div>
  );
}
