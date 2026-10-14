"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getPastorFounderMasterAgenda, MasterAgendaItemRow } from "@/lib/pastor-founder-decision-agenda-service";
import { Button } from "@/components/ui/Button";
import {
  FileCheck,
  Printer,
  Scale,
  ShieldCheck,
  AlertTriangle,
  BookOpen,
  HelpCircle,
  Clock,
  CheckCircle2,
  ListFilter,
  ExternalLink,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export default function PastorFounderMasterAgendaPage() {
  const agenda = getPastorFounderMasterAgenda();
  const [filterCategory, setFilterCategory] = useState<string>("ALL");
  const [filterArticle, setFilterArticle] = useState<string>("ALL");

  const filteredItems = agenda.agendaItems.filter((item) => {
    const matchesCategory =
      filterCategory === "ALL"
        ? true
        : filterCategory === "PENDING"
        ? item.status === "DECISION_PENDIENTE"
        : filterCategory === "DEFINED"
        ? item.status === "NO_REQUIERE_DECISION"
        : filterCategory === "LEGAL"
        ? item.legalReviewRequirement !== "NO_REQUIERE_REVISION_LEGAL"
        : true;

    const matchesArticle =
      filterArticle === "ALL" ? true : item.articleNumber.toString() === filterArticle;

    return matchesCategory && matchesArticle;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-2">
      {/* Botones de Navegación y Exportación */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/constitucion/revision-consolidada-6-criticos"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <span>← Volver a Revisión Consolidada</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/constitucion/legal-review/final-package"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-300 hover:text-white transition-colors bg-indigo-950/40 border border-indigo-800 px-3.5 py-2 rounded-xl"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Ver Paquete Legal NJ</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Agenda Maestra
          </Button>
        </div>
      </div>

      {/* Banner Solemne de No Adopción */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs flex items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <strong className="font-bold block uppercase tracking-wide">
              EXPEDIENTE MAESTRO DE DECISIONES INSTITUCIONALES DEL PASTOR FUNDADOR (FASE 43)
            </strong>
            <span className="text-slate-300 text-[11px]">
              Agenda estructurada para revisión y discernimiento ministerial. Esta fase no adopta la Constitución ni modifica el Registro Maestro de 107 decisiones.
            </span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-xl text-[10px] font-mono font-bold bg-amber-950/80 border border-amber-800 text-amber-300 shrink-0">
          AGENDA EN DISCERNIMIENTO
        </span>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="space-y-1 border-b border-slate-800/80 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOBERANÍA PASTORAL Y GOBIERNO INSTITUCIONAL</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Expediente Maestro de Decisiones: Pastor Fundador
          </h1>
          <p className="text-xs text-slate-400">
            Pastor Fundador: <strong className="text-white">{agenda.founderName}</strong> • {agenda.churchName} ({agenda.location}) • REN-DOC-002 v{agenda.constitutionStatus.version} ({agenda.constitutionStatus.status} - {agenda.constitutionStatus.adoption})
          </p>
        </div>

        {/* 5 Indicadores Clave de Control */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Decisiones Históricas:</span>
            <span className="text-base font-black text-emerald-400">{agenda.totalHistoricalDecisions} Intactas</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-900/40 space-y-1">
            <span className="text-amber-400 block font-mono">Decisiones Pendientes:</span>
            <span className="text-base font-black text-amber-300">{agenda.totalPendingPastorDecisions} Asuntos</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Ya Definidos:</span>
            <span className="text-base font-black text-white">No Requiere Re-decisión</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Revisión Legal NJ:</span>
            <span className="text-base font-black text-indigo-300">Preparada</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 block font-mono">Adopción Oficial:</span>
            <span className="text-base font-black text-slate-400">NO ADOPTADA</span>
          </div>
        </div>
      </div>

      {/* ENLACES RÁPIDOS A LOS 6 EXPEDIENTES INDIVIDUALES */}
      <div className="p-5 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-3 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Acceso Directo a los 6 Expedientes Técnicos Individuales:
          </span>
          <span className="text-[10px] text-slate-500 font-mono">Fases 35 a 40</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {[
            { num: 13, title: "Sucesión", path: "/constitucion/decision-pastor-fundador/13" },
            { num: 17, title: "Quórums Board", path: "/constitucion/decision-pastor-fundador/17" },
            { num: 22, title: "Voto Asamblea", path: "/constitucion/decision-pastor-fundador/22" },
            { num: 43, title: "Enmiendas", path: "/constitucion/decision-pastor-fundador/43" },
            { num: 46, title: "Prevalencia", path: "/constitucion/decision-pastor-fundador/46" },
            { num: 47, title: "Vigencia", path: "/constitucion/decision-pastor-fundador/47" },
          ].map((exp) => (
            <Link
              key={exp.num}
              href={exp.path}
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors text-center group"
            >
              <span className="text-indigo-400 font-mono font-bold block text-xs group-hover:text-white">
                Art. {exp.num}
              </span>
              <span className="text-[10px] text-slate-400 block truncate">{exp.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* BARRA DE FILTROS INTERACTIVOS */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <ListFilter className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 font-mono">Filtrar por Estado:</span>
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: "ALL", label: `Todos (${agenda.agendaItems.length})` },
              { id: "PENDING", label: `Decisión Pendiente (${agenda.totalPendingPastorDecisions})` },
              { id: "DEFINED", label: "Ya Definido" },
              { id: "LEGAL", label: "Requiere Legal NJ" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilterCategory(btn.id)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-colors ${
                  filterCategory === btn.id
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">Artículo:</span>
          <select
            value={filterArticle}
            onChange={(e) => setFilterArticle(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1 font-mono focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">Todos los Artículos</option>
            <option value="13">Art. 13 (Sucesión)</option>
            <option value="17">Art. 17 (Quórums)</option>
            <option value="22">Art. 22 (Voto)</option>
            <option value="43">Art. 43 (Enmienda)</option>
            <option value="46">Art. 46 (Prevalencia)</option>
            <option value="47">Art. 47 (Vigencia)</option>
          </select>
        </div>
      </div>

      {/* LISTADO DE ASUNTOS DE LA AGENDA MAESTRA */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <div
            key={item.agendaId}
            className={`p-6 rounded-3xl border shadow-xl space-y-4 text-xs ${
              item.status === "DECISION_PENDIENTE"
                ? "bg-[#0f172a] border-amber-500/40"
                : "bg-slate-950/70 border-slate-900"
            }`}
          >
            {/* Header del Asunto */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs">
                  {item.agendaId}
                </span>
                <span className="font-mono text-slate-400 font-bold">Artículo {item.articleNumber}:</span>
                <h3 className="text-sm font-bold text-white">{item.matter}</h3>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                    item.status === "DECISION_PENDIENTE"
                      ? "bg-amber-950 border-amber-800 text-amber-300 font-bold"
                      : "bg-emerald-950 border-emerald-800 text-emerald-300"
                  }`}
                >
                  {item.status === "DECISION_PENDIENTE" ? "DECISIÓN PENDIENTE DEL FUNDADOR" : "NO REQUIERE NUEVA DECISIÓN"}
                </span>

                <Link
                  href={item.dossierPath}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg transition-colors"
                >
                  <span>Expediente</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Formato Estructurado de la Decisión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div>
                  <strong className="text-emerald-400 font-mono text-[10px] block uppercase">
                    ¿Qué está ya definido?
                  </strong>
                  <p className="text-slate-300 text-[11px] leading-relaxed">{item.whatIsDefined}</p>
                </div>

                <div>
                  <strong className="text-amber-400 font-mono text-[10px] block uppercase">
                    ¿Qué falta definir por el Pastor Fundador?
                  </strong>
                  <p className="text-slate-200 text-[11px] leading-relaxed font-bold">{item.whatIsPending}</p>
                </div>

                <div>
                  <strong className="text-indigo-400 font-mono text-[10px] block uppercase">
                    ¿Por qué importa institucionalmente?
                  </strong>
                  <p className="text-slate-400 text-[11px] leading-relaxed">{item.whyItMatters}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 space-y-1.5">
                  <strong className="text-slate-400 font-mono text-[10px] block uppercase">
                    Información de Contexto y Fuentes:
                  </strong>
                  <div className="text-[11px] text-slate-400 space-y-0.5 font-mono">
                    <div><strong>Fuente Histórica:</strong> {item.sourceDecision}</div>
                    <div><strong>Documentos Afectados:</strong> {item.affectedDocuments}</div>
                    <div><strong>Revisión Legal NJ:</strong> {item.legalReviewRequirement}</div>
                  </div>
                </div>

                {item.optionsAvailable.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <strong className="text-indigo-300 font-mono text-[10px] block uppercase">
                      Alternativas en Estudio (Propuestas no adoptadas):
                    </strong>
                    {item.optionsAvailable.map((opt) => (
                      <div
                        key={opt.code}
                        className={`p-2.5 rounded-xl border text-[11px] space-y-0.5 ${
                          opt.recommendation
                            ? "bg-indigo-950/40 border-indigo-700/60 text-indigo-200"
                            : "bg-slate-950 border-slate-900 text-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <strong className="font-mono">{opt.code}: {opt.label}</strong>
                          {opt.recommendation && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-900 text-indigo-300 border border-indigo-700">
                              RECOMENDADA
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400">{opt.consequence}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Espacio para Registro de Futura Respuesta Real del Pastor Fundador */}
            {item.status === "DECISION_PENDIENTE" && (
              <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-dashed border-slate-800 space-y-1 text-[10px] font-mono text-slate-500">
                <div className="flex items-center justify-between text-slate-400 font-bold">
                  <span>REGISTRO DE RESPUESTA SOBERANA DEL PASTOR FUNDADOR:</span>
                  <span>ESTADO: PENDIENTE DE DETERMINACIÓN</span>
                </div>
                <p className="italic">
                  * Este registro se completará cuando el Pastor Fundador suscriba formalmente su determinación institucional.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
