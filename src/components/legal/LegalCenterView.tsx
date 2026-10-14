"use client";

import React from "react";
import { useDocuments } from "@/context/DocumentContext";
import { Scale, CheckCircle, Clock, FileText, ExternalLink, ShieldCheck, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const LegalCenterView: React.FC = () => {
  const { legalProcesses, toggleChecklistItem } = useDocuments();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#131d33] via-[#101b38] to-[#0d1424] border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-indigo-400 font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Centro de Cumplimiento Institucional</span>
          </div>
          <h1 className="text-2xl font-black text-white">CENTRO LEGAL RENACER</h1>
          <p className="text-xs text-slate-400">
            Administración de incorporación, registros estatales de New Jersey, IRS 501(c)(3), licencias y seguros.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            Jurisdicción: <strong className="text-indigo-300">State of New Jersey, USA</strong>
          </span>
        </div>
      </div>

      {/* Listado de Procesos Legales */}
      <div className="space-y-6">
        {legalProcesses.map((proc) => {
          const completedCount = proc.checklist.filter((i) => i.isCompleted).length;
          const totalCount = proc.checklist.length;
          const progressPercent = Math.round((completedCount / totalCount) * 100);

          return (
            <div
              key={proc.id}
              className="p-6 rounded-2xl bg-[#101728] border border-slate-800 shadow-xl space-y-6"
            >
              {/* Proceso Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-indigo-400 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40">
                      {proc.code}
                    </span>
                    <span className="text-slate-400">• Categoría: {proc.category}</span>
                  </div>
                  <h2 className="text-lg font-bold text-white mt-1">{proc.title}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">{proc.description}</p>
                </div>

                <div className="text-right">
                  <div className="text-xs font-bold text-indigo-300">
                    Progreso: {completedCount} de {totalCount} ({progressPercent}%)
                  </div>
                  <div className="w-48 h-2 rounded-full bg-slate-800 mt-1.5 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-brand-400 transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Checklist & Documentos Requeridos */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Checklist (2 columnas en desktop) */}
                <div className="lg:col-span-2 space-y-3">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Pasos del Proceso (Checklist Oficial)</span>
                  </h3>

                  <div className="space-y-2">
                    {proc.checklist.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleChecklistItem(proc.id, item.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer transition-all ${
                          item.isCompleted
                            ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-200"
                            : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={item.isCompleted}
                            readOnly
                            className="rounded border-slate-700 text-brand-600 focus:ring-brand-500 cursor-pointer"
                          />
                          <span className={item.isCompleted ? "line-through opacity-80" : "font-medium"}>
                            {item.title}
                          </span>
                        </div>

                        {item.isCompleted && item.completedBy && (
                          <span className="text-[10px] text-emerald-400/80 font-mono">
                            Completado por {item.completedBy}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentos Requeridos */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Documentación Requerida</span>
                  </h3>

                  <div className="space-y-2">
                    {proc.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs"
                      >
                        <div>
                          <p className="font-semibold text-slate-200">{doc.title}</p>
                          <span className="text-[10px] text-slate-400">
                            {doc.isRequired ? "Obligatorio" : "Opcional"}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                            doc.status === "SUBIDO"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </div>
                    ))}

                    {proc.officialSourceUrl && (
                      <a
                        href={proc.officialSourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-300 hover:text-indigo-200 text-xs flex items-center justify-between transition-colors"
                      >
                        <span>Fuente Oficial NJ.gov</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
