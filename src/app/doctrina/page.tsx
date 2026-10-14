"use client";

import React, { useState, useEffect } from "react";
import doctrinaData from "../../../import-queue/doctrina.json";
import {
  BookOpen,
  Search,
  Printer,
  Shield,
  AlertTriangle,
  Info,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function DoctrinaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(doctrinaData.data[0]);

  useEffect(() => {
    const n = parseInt(new URLSearchParams(window.location.search).get("articulo") || "", 10);
    if (n >= 1 && n <= doctrinaData.data.length) {
      setSelectedArticle(doctrinaData.data[n - 1]);
    }
  }, []);

  const filteredArticles = doctrinaData.data.filter((art) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.content.toLowerCase().includes(q) ||
      art.subcategory.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Banner de Advertencia de No Adopción */}
      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 shadow-lg">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-300 uppercase tracking-wider font-mono">
              ESTADO: BORRADOR v1.0 • NO ADOPTADA
            </span>
          </div>
          <p className="text-amber-200/90 leading-relaxed">
            Este documento es un borrador y no representa todavía la doctrina oficialmente adoptada de RENACER. La facultad de adopción doctrinal formal reside con exclusividad en el Pastor Fundador (o su sucesor legítimo conforme al protocolo).
          </p>
        </div>
      </div>

      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121c38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest font-mono">
              <span>REN-DOC-001</span>
              <span>•</span>
              <span>DECLARACIÓN DE FE Y DOCTRINA</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Declaración de Fe de RENACER CHURCH
            </h1>
            <p className="text-xs text-slate-400">
              20 Artículos Fundamentales de Teología, Cristología, Pneumatología, Eclesiología y Escatología.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
              onClick={() => window.print()}
            >
              Imprimir Declaración
            </Button>
          </div>
        </div>

        {/* Buscador de Artículos */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar entre los 20 artículos doctrinales..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500 font-sans"
          />
        </div>
      </div>

      {/* Grid Principal de 20 Artículos */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lista de Artículos (5 Columnas) */}
        <div className="lg:col-span-5 space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
          {filteredArticles.map((art, idx) => {
            const isSelected = selectedArticle?.title === art.title;
            return (
              <div
                key={idx}
                onClick={() => setSelectedArticle(art)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-1.5 ${
                  isSelected
                    ? "bg-[#16223d] border-blue-500 shadow-lg"
                    : "bg-[#0f172a] border-slate-800 hover:border-slate-700 hover:bg-[#121c33]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 border border-blue-900 text-blue-300 font-mono">
                    {art.subcategory}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-amber-400">BORRADOR v1.0</span>
                </div>
                <h3 className="text-xs font-bold text-white leading-snug">{art.title}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-1 italic">
                  {art.content.replace(/\n/g, " ")}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visor de Detalle del Artículo (7 Columnas) */}
        <div className="lg:col-span-7">
          {selectedArticle ? (
            <div className="p-8 rounded-3xl bg-[#10192e] border border-slate-800 shadow-2xl space-y-6 sticky top-6">
              <div className="border-b border-slate-800/80 pb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    {selectedArticle.subcategory}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-bold font-mono">
                    BORRADOR NO ADOPTADO
                  </span>
                </div>
                <h2 className="text-xl font-black text-white">{selectedArticle.title}</h2>
              </div>

              {/* Contenido Teológico */}
              <div className="space-y-4 text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line bg-slate-950/80 p-6 rounded-2xl border border-slate-800/80 shadow-inner">
                {selectedArticle.content}
              </div>

              {/* Fundamentos Bíblicos */}
              {selectedArticle.biblicalReferences && selectedArticle.biblicalReferences.length > 0 && (
                <div className="space-y-2.5 border-t border-slate-800/80 pt-4">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>FUNDAMENTOS BÍBLICOS:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.biblicalReferences.map((ref, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-amber-300/90 font-semibold"
                      >
                        📖 {ref}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
