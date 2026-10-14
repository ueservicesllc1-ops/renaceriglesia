"use client";

import React, { useState } from "react";
import { getAllInstitutionalDecisions } from "@/lib/decision-service";
import {
  InstitutionalDecision,
  DecisionState,
  DocumentState,
  LegalState,
  DocumentTarget,
} from "@/types/institutional-decision";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Scale,
  Search,
  BookOpen,
  ShieldCheck,
  AlertTriangle,
  Info,
  Printer,
  Layers,
  FileText,
} from "lucide-react";

export default function DecisionsPage() {
  const [decisionFilter, setDecisionFilter] = useState<DecisionState | "ALL">("ALL");
  const [legalFilter, setLegalFilter] = useState<LegalState | "ALL">("ALL");
  const [targetFilter, setTargetFilter] = useState<DocumentTarget | "ALL">("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDecision, setSelectedDecision] = useState<InstitutionalDecision | null>(
    getAllInstitutionalDecisions()[0]
  );

  const allDecisions = getAllInstitutionalDecisions();

  const filteredDecisions = allDecisions.filter((d) => {
    if (decisionFilter !== "ALL" && d.decisionState !== decisionFilter) return false;
    if (legalFilter !== "ALL" && d.legalState !== legalFilter) return false;
    if (targetFilter !== "ALL" && d.documentTarget !== targetFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = d.title.toLowerCase().includes(q);
      const matchQ = d.question.toLowerCase().includes(q);
      const matchNum = d.decisionNumber.toLowerCase().includes(q);
      const matchDesc = d.description.toLowerCase().includes(q);
      if (!matchTitle && !matchQ && !matchNum && !matchDesc) return false;
    }
    return true;
  });

  const totalDefinedDecisions = allDecisions.filter((d) => d.decisionState === "DEFINIDA").length;
  const totalPendingDecisions = allDecisions.filter((d) => d.decisionState === "PENDIENTE").length;
  const totalRequiresLegal = allDecisions.filter((d) => d.legalState === "REQUIERE_REVISION_LEGAL").length;
  const totalMultilayer = allDecisions.filter((d) => d.documentTarget === "MULTICAPA").length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#141e38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>GOBERNANZA Y SEMÁNTICA DOCUMENTAL • FASE 24A</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Registro Maestro de Decisiones Institucionales
            </h1>
            <p className="text-xs text-slate-400">
              Separación semántica estricta entre <strong>Decisión Interna</strong>, <strong>Estado Documental</strong>, <strong>Estado Legal</strong> y <strong>Destino Documental</strong> en <strong>RENACER CHURCH, INC.</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
              onClick={() => window.print()}
            >
              Imprimir Registro
            </Button>
          </div>
        </div>

        {/* Métricas de Decisiones */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs">
          <div
            onClick={() => { setDecisionFilter("DEFINIDA"); setLegalFilter("ALL"); }}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              decisionFilter === "DEFINIDA" && legalFilter === "ALL"
                ? "bg-emerald-950/60 border-emerald-500 shadow-md"
                : "bg-emerald-950/20 border-emerald-900/40 hover:bg-emerald-950/40"
            }`}
          >
            <span className="text-emerald-400 font-bold block">1. Decisiones Definidas:</span>
            <span className="text-2xl font-black text-emerald-300">{totalDefinedDecisions}</span>
          </div>

          <div
            onClick={() => { setLegalFilter("REQUIERE_REVISION_LEGAL"); setDecisionFilter("ALL"); }}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              legalFilter === "REQUIERE_REVISION_LEGAL"
                ? "bg-amber-950/60 border-amber-500 shadow-md"
                : "bg-amber-950/20 border-amber-900/40 hover:bg-amber-950/40"
            }`}
          >
            <span className="text-amber-400 font-bold block">2. Requieren Revisión Legal:</span>
            <span className="text-2xl font-black text-amber-300">{totalRequiresLegal}</span>
          </div>

          <div
            onClick={() => { setTargetFilter("MULTICAPA"); }}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              targetFilter === "MULTICAPA"
                ? "bg-blue-950/60 border-blue-500 shadow-md"
                : "bg-blue-950/20 border-blue-900/40 hover:bg-blue-950/40"
            }`}
          >
            <span className="text-blue-400 font-bold block">3. Destino Multicapa:</span>
            <span className="text-2xl font-black text-blue-300">{totalMultilayer}</span>
          </div>

          <div
            onClick={() => { setDecisionFilter("ALL"); setLegalFilter("ALL"); setTargetFilter("ALL"); }}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
              decisionFilter === "ALL" && legalFilter === "ALL" && targetFilter === "ALL"
                ? "bg-slate-950/80 border-slate-700 shadow-md"
                : "bg-slate-950/40 border-slate-800 hover:bg-slate-950/60"
            }`}
          >
            <span className="text-slate-400 font-bold block">Total Registradas:</span>
            <span className="text-2xl font-black text-white">{allDecisions.length}</span>
          </div>
        </div>
      </div>

      {/* Filtros y Buscador */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => { setDecisionFilter("ALL"); setLegalFilter("ALL"); setTargetFilter("ALL"); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                decisionFilter === "ALL" && legalFilter === "ALL" ? "bg-brand-600 text-white shadow" : "text-slate-400 hover:text-white"
              }`}
            >
              Todas ({allDecisions.length})
            </button>
            <button
              onClick={() => { setDecisionFilter("DEFINIDA"); setLegalFilter("ALL"); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                decisionFilter === "DEFINIDA" && legalFilter === "ALL" ? "bg-emerald-700 text-white shadow" : "text-slate-400 hover:text-emerald-300"
              }`}
            >
              Definidas ({totalDefinedDecisions})
            </button>
            <button
              onClick={() => { setLegalFilter("REQUIERE_REVISION_LEGAL"); setDecisionFilter("ALL"); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                legalFilter === "REQUIERE_REVISION_LEGAL" ? "bg-amber-700 text-white shadow" : "text-slate-400 hover:text-amber-300"
              }`}
            >
              Revisión Legal ({totalRequiresLegal})
            </button>
          </div>

          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por código, título o pregunta..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-brand-500 font-sans"
            />
          </div>
        </div>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lista de Decisiones */}
        <div className="lg:col-span-7 space-y-3">
          {filteredDecisions.map((dec) => {
            const isSelected = selectedDecision?.decisionNumber === dec.decisionNumber;
            return (
              <div
                key={dec.decisionId}
                onClick={() => setSelectedDecision(dec)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? "bg-[#16223d] border-brand-500/70 shadow-lg"
                    : "bg-[#0f172a]/80 border-slate-800 hover:border-slate-700 hover:bg-[#121c33]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-black text-amber-400">{dec.decisionNumber}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px] font-bold font-mono">
                      {dec.decisionState}
                    </span>
                    {dec.legalState === "REQUIERE_REVISION_LEGAL" && (
                      <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 text-[10px] font-bold font-mono">
                        REV. LEGAL
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">{dec.title}</h3>
                <p className="text-xs text-slate-400 italic line-clamp-1">"{dec.question}"</p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 font-mono">
                    Destino: {dec.documentTarget}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Doc: {dec.documentState}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel Lateral de Detalle */}
        <div className="lg:col-span-5">
          {selectedDecision ? (
            <div className="p-6 rounded-3xl bg-[#10192e] border border-slate-800 shadow-2xl space-y-6 sticky top-6 text-xs">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-black text-amber-400">
                    {selectedDecision.decisionNumber}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px] font-bold font-mono">
                      Decisión: {selectedDecision.decisionState}
                    </span>
                  </div>
                </div>
                <h2 className="text-lg font-black text-white mt-1">{selectedDecision.title}</h2>
                <div className="mt-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-amber-200/90 italic">
                  "{selectedDecision.question}"
                </div>
              </div>

              {/* Dimensiones Semánticas Separadas */}
              <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-950 border border-slate-800">
                <div>
                  <span className="text-slate-400 text-[10px] block">A. Estado Decisión:</span>
                  <strong className="text-emerald-400 font-mono">{selectedDecision.decisionState}</strong>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">B. Estado Documental:</span>
                  <strong className="text-blue-300 font-mono">{selectedDecision.documentState}</strong>
                </div>
                <div className="pt-1">
                  <span className="text-slate-400 text-[10px] block">C. Estado Legal:</span>
                  <strong className={selectedDecision.legalState === "REQUIERE_REVISION_LEGAL" ? "text-amber-400 font-mono" : "text-slate-300 font-mono"}>
                    {selectedDecision.legalState}
                  </strong>
                </div>
                <div className="pt-1">
                  <span className="text-slate-400 text-[10px] block">D. Destino Documental:</span>
                  <strong className="text-cyan-300 font-mono">{selectedDecision.documentTarget}</strong>
                </div>
              </div>

              {/* Contenido de la Decisión / Notas */}
              {selectedDecision.decision ? (
                <div className="space-y-2 border-t border-slate-800/80 pt-4">
                  <strong className="text-emerald-400 block uppercase tracking-wider font-mono text-[11px] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>DECISIÓN INSTITUCIONAL INTERNA:</span>
                  </strong>
                  <p className="text-slate-200 leading-relaxed bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-900/40">
                    {selectedDecision.decision}
                  </p>
                </div>
              ) : null}

              {selectedDecision.notes ? (
                <div className="space-y-2 border-t border-slate-800/80 pt-4">
                  <strong className="text-amber-400 block uppercase tracking-wider font-mono text-[11px] flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>CRITERIOS Y DETALLES INSTITUCIONALES:</span>
                  </strong>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 leading-relaxed">
                    {selectedDecision.notes}
                  </div>
                </div>
              ) : null}

              {/* Documentos Afectados */}
              {selectedDecision.affectedDocuments.length > 0 && (
                <div className="space-y-2 border-t border-slate-800/80 pt-4">
                  <strong className="text-slate-400 block uppercase font-mono text-[11px]">
                    DOCUMENTOS AFECTADOS:
                  </strong>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDecision.affectedDocuments.map((doc, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-amber-300">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-slate-800/80 pt-4">
                <a
                  href={`/decisiones/${selectedDecision.decisionNumber}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all text-center"
                >
                  <span>Abrir Ficha Completa ({selectedDecision.decisionNumber}) →</span>
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
