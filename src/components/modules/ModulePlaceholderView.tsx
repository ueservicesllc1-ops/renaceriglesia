"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Database, FileText, Sparkles, Shield, ArrowRight, Upload } from "lucide-react";
import Link from "next/link";

interface ModulePlaceholderProps {
  number: string;
  name: string;
  category: string;
  description: string;
  expectedJson: string;
  details: string[];
}

export const ModulePlaceholderView: React.FC<ModulePlaceholderProps> = ({
  number,
  name,
  category,
  description,
  expectedJson,
  details,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#131d33] via-[#0f172a] to-[#090f1d] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono px-3 py-1 rounded-xl bg-brand-600/30 border border-brand-500/40 text-brand-300 font-black text-sm">
            MÓDULO {number}
          </span>
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">{name}</h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">{description}</p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link href="/importacion">
            <Button variant="gold" size="sm" icon={<Upload className="w-4 h-4" />}>
              Importar Datos para este Módulo ({expectedJson})
            </Button>
          </Link>
          <Link href="/renacer-ia">
            <Button variant="outline" size="sm" icon={<Sparkles className="w-4 h-4" />}>
              Consultar con RENACER IA
            </Button>
          </Link>
        </div>
      </div>

      {/* Características Preparadas en la Arquitectura */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span>🛡️</span> Capacidades Arquitecturales Listas
          </h2>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-brand-400 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
          <h2 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Integración por Archivos JSON</span>
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Este módulo se poblará automáticamente en cuanto coloques el archivo{" "}
            <strong className="text-emerald-300 font-mono">/import-queue/{expectedJson}</strong> en la raíz del proyecto.
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400">
            <code>
              {`// Formato esperado en /import-queue/${expectedJson}
{
  "meta": { "type": "${expectedJson.replace('.json', '')}", "version": "1.0" },
  "data": [ /* Estructura preparada */ ]
}`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};
