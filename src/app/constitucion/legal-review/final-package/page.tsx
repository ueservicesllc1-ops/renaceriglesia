"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getLegalReviewFinalPackage } from "@/lib/legal-review-final-package-service";
import { Button } from "@/components/ui/Button";
import {
  Scale,
  ArrowLeft,
  Printer,
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  FileText,
  CheckCircle2,
  ListFilter,
  Layers,
  HelpCircle,
  Clock,
  Lock,
  Calendar,
  ExternalLink,
  ShieldAlert,
  FolderOpen,
  FileCheck,
} from "lucide-react";

export default function LegalReviewFinalPackagePage() {
  const pkg = getLegalReviewFinalPackage();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const filteredQuestions =
    selectedCategory === "ALL"
      ? pkg.classifiedQuestions
      : pkg.classifiedQuestions.filter((q) => q.categoryCode === selectedCategory);

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-2">
      {/* Botones de Navegación y Exportación */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion/revision-consolidada-6-criticos"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Revisión Consolidada</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/constitucion/decision-pastor-fundador"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 border border-indigo-800 px-3.5 py-2 rounded-xl"
          >
            <span>Cuaderno de Decisiones</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Paquete Legal Oficial
          </Button>
        </div>
      </div>

      {/* Banner de Descargo Legal Solemne */}
      <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs space-y-2 shadow-xl">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400 shrink-0" />
          <strong className="font-bold text-sm uppercase tracking-wide">
            PAQUETE OFICIAL DE TRABAJO PREPARATORIO PARA REVISIÓN LEGAL (NEW JERSEY)
          </strong>
        </div>
        <p className="text-slate-200 text-xs leading-relaxed font-mono">
          {pkg.legalDisclaimer}
        </p>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ESTADO DE NEW JERSEY • NONPROFIT RELIGIOUS CORPORATION</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Expediente Maestro de Revisión Jurídica y Fiduciaria
          </h1>
          <p className="text-xs text-slate-400">
            {pkg.organizationLegalName} • Sede: {pkg.location} • Pastor Fundador: {pkg.founder}
          </p>
        </div>

        {/* 5 Indicadores Clave de Estado */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Estado Documental:</span>
            <span className="text-base font-black text-rose-400">{pkg.documentConstitutionStatus.status}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Versión Oficial:</span>
            <span className="text-base font-black text-white">v{pkg.documentConstitutionStatus.version}</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Expedientes Críticos:</span>
            <span className="text-base font-black text-emerald-400">6/6 Integrados</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 space-y-1">
            <span className="text-amber-400 block font-mono">Opinión Legal:</span>
            <span className="text-base font-black text-amber-300">Pendiente</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Adopción Oficial:</span>
            <span className="text-base font-black text-slate-400">{pkg.documentConstitutionStatus.adoption}</span>
          </div>
        </div>
      </div>

      {/* PARTE 2 — RESUMEN EJECUTIVO PARA EL ASESOR LEGAL */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <FileText className="w-4 h-4" />
          <span>PARTE 2 — RESUMEN EJECUTIVO PARA EL ABOGADO DE NEW JERSEY</span>
        </div>

        <div className="space-y-3 text-slate-300 leading-relaxed">
          <p>{pkg.executiveSummary.overview}</p>
          <p>{pkg.executiveSummary.documentHierarchy}</p>
          <p>{pkg.executiveSummary.sixCriticalMattersOverview}</p>

          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-2">
            <strong className="text-emerald-400 block font-mono text-xs uppercase">
              Alcance de la Revisión Legal Requerida:
            </strong>
            <ul className="space-y-1.5 text-slate-300">
              {pkg.executiveSummary.attorneyScopeOfWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-400 font-bold font-mono">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* PARTE 1 & 3 — ÍNDICE Y MAPA DOCUMENTAL */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <FolderOpen className="w-4 h-4" />
          <span>PARTE 3 — MAPA E ÍNDICE DOCUMENTAL INSTITUCIONAL</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">CÓDIGO</th>
              <th className="py-3 px-3">DOCUMENTO</th>
              <th className="py-3 px-3">PROPÓSITO</th>
              <th className="py-3 px-3">ÁMBITO</th>
              <th className="py-3 px-3">ESTADO</th>
              <th className="py-3 px-3">REVISIÓN LEGAL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {pkg.documentIndex.map((doc) => (
              <tr key={doc.code} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-mono font-bold text-indigo-400">{doc.code}</td>
                <td className="py-3 px-3 font-bold text-white max-w-xs">{doc.name}</td>
                <td className="py-3 px-3 text-slate-300 text-[11px]">{doc.purpose}</td>
                <td className="py-3 px-3 text-[10px] font-mono text-slate-400">{doc.scope}</td>
                <td className="py-3 px-3 font-mono text-[10px] text-amber-300">{doc.status}</td>
                <td className="py-3 px-3 font-mono text-[10px]">
                  {doc.legalReviewRequired ? (
                    <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 font-bold">
                      REQUERIDA
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      NO APLICA
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PARTE 4 — LOS 6 ASUNTOS CRÍTICOS PARA EL ABOGADO */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <Layers className="w-4 h-4" />
          <span>PARTE 4 — RESUMEN DE LOS SEIS ASUNTOS CRÍTICOS PARA EL ASESOR LEGAL</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pkg.criticalArticlesSummaries.map((art) => (
            <div key={art.articleNumber} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-2">
              <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                <span className="font-mono text-indigo-400 font-bold text-xs">
                  Artículo {art.articleNumber}: {art.matter}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950 border border-rose-800 text-rose-300">
                  {art.status}
                </span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                <strong>Problema Central:</strong> {art.coreIssue}
              </p>
              <div className="space-y-1 text-[11px] text-slate-400">
                <div><strong className="text-amber-400 font-mono text-[10px]">Riesgo a Revisar:</strong> {art.riskToReview}</div>
                <div><strong className="text-indigo-400 font-mono text-[10px]">Documentos Afectados:</strong> {art.affectedDocuments}</div>
              </div>
              <div className="pt-2 border-t border-slate-900 text-[10px] text-emerald-400 font-mono">
                <strong>Propuesta en Estudio:</strong> {art.existingProposal}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 5 — PREGUNTAS JURÍDICAS CONSOLIDADAS Y CLASIFICADAS */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-indigo-300 font-mono uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>PARTE 5 — PREGUNTAS JURÍDICAS CONSOLIDADAS POR MATERIA</span>
          </div>

          <div className="flex items-center gap-2">
            <ListFilter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 text-[11px] rounded-lg px-2.5 py-1 font-mono focus:outline-none focus:border-indigo-500"
            >
              <option value="ALL">Todas las Categorías ({pkg.classifiedQuestions.length})</option>
              <option value="A_CORPORATIVO">A. Corporativo</option>
              <option value="B_FIDUCIARIO">B. Fiduciario</option>
              <option value="C_GOBERNANZA">C. Gobernanza</option>
              <option value="D_MIEMBROS_VOTO">D. Miembros y Voto</option>
              <option value="E_SUCESION">E. Sucesión</option>
              <option value="F_PROPIEDAD">F. Propiedad</option>
              <option value="G_ENMIENDAS">G. Enmiendas</option>
              <option value="H_PREVALENCIA">H. Prevalencia</option>
              <option value="I_ADOPCION_VIGENCIA">I. Adopción y Vigencia</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          {filteredQuestions.map((q) => (
            <div key={q.questionId} className="p-4 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-indigo-400 font-bold text-xs">{q.questionId}: {q.categoryName}</span>
                <span className="text-[10px] font-mono text-slate-500">Arts. {q.relatedArticles.join(", ")} • Doc: {q.affectedDocuments}</span>
              </div>
              <p className="text-slate-200 font-bold text-xs leading-relaxed">{q.questionText}</p>
              <div className="pt-2 border-t border-slate-900 text-[11px] space-y-0.5 text-slate-400 font-mono">
                <div><strong className="text-amber-400">Motivo:</strong> {q.consultationReason}</div>
                <div><strong className="text-rose-400">Riesgo si no se define:</strong> {q.riskIfNotDefined}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 6 & 8 — RIESGOS A REVISAR Y DOCUMENTOS MODIFICABLES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
            <ShieldAlert className="w-4 h-4" />
            <span>PARTE 6 — MATRIZ DE RIESGOS A REVISAR</span>
          </div>

          <div className="space-y-3">
            {pkg.riskMatrix.map((r) => (
              <div key={r.riskId} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-white font-mono">{r.riskId}: {r.riskName}</strong>
                  <span className="text-[10px] font-mono text-rose-400 font-bold">{r.priority}</span>
                </div>
                <p className="text-slate-300 text-[11px]">{r.description}</p>
                <div className="pt-1 text-[10px] text-slate-500 font-mono flex justify-between">
                  <span>Doc: {r.document}</span>
                  <span className="text-amber-400">{r.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
            <FileCheck className="w-4 h-4" />
            <span>PARTE 8 — DOCUMENTOS CON POSIBLE MODIFICACIÓN</span>
          </div>

          <div className="space-y-3">
            {pkg.potentialModifications.map((mod, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-indigo-400 font-bold">{mod.documentCode}</span>
                  <span className="text-[10px] font-mono text-amber-300">{mod.status}</span>
                </div>
                <strong className="text-white text-xs block">{mod.documentTitle}</strong>
                <p className="text-slate-300 text-[11px]">{mod.possibleChange}</p>
                <div className="pt-1 text-[10px] text-slate-500 font-mono">Motivo: {mod.reason}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARTE 9 — CHECKLIST DE 19 PUNTOS PARA EL ASESOR LEGAL */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider border-b border-slate-800 pb-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>PARTE 9 — CHECKLIST DE REVISIÓN PARA EL ABOGADO DE NEW JERSEY (19 PUNTOS)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {pkg.checklist.map((item) => (
            <div key={item.itemNumber} className="p-3 rounded-2xl bg-slate-950 border border-slate-900 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-lg border border-slate-800 bg-slate-900 text-slate-500 flex items-center justify-center font-mono text-[10px] shrink-0">
                {item.itemNumber}
              </span>
              <span className="text-slate-300 text-[11px] leading-relaxed">{item.task}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PARTE 10 — ESTRUCTURA PARA REGISTRO DE RESPUESTA DEL ABOGADO */}
      <div className="p-6 rounded-3xl bg-[#141e38] border border-indigo-500/40 space-y-4 shadow-2xl text-xs">
        <div className="flex items-center justify-between border-b border-indigo-500/30 pb-2">
          <div className="flex items-center gap-2 text-indigo-300 font-mono font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>PARTE 10 — REGISTRO DE DICTAMEN LEGAL FORMAL (ESTRUCTURA DE RESPUESTA)</span>
          </div>
          <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300">
            PENDIENTE DE REVISIÓN LEGAL
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px] text-slate-400 border-b border-slate-900 pb-3">
            <div><strong>Fecha de Dictamen:</strong> {pkg.responseStructure[0].reviewDate}</div>
            <div><strong>Abogado Asignado:</strong> {pkg.responseStructure[0].attorneyName}</div>
            <div><strong>Firma / Bufete:</strong> {pkg.responseStructure[0].lawFirmName}</div>
          </div>

          <div className="space-y-1 text-slate-300 text-xs">
            <strong className="text-white block font-mono">Estado del Dictamen Escrito:</strong>
            <p className="text-slate-400 italic">
              * Esta sección se encuentra habilitada para asentar el dictamen formal por escrito una vez que el profesional del derecho matriculado en New Jersey remita sus observaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
