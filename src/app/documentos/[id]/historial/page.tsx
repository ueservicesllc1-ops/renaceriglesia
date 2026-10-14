"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  getInstitutionalDocumentById,
  compareDocumentVersions,
  FullInstitutionalDocument,
  InstitutionalDocumentVersion,
} from "@/lib/institutional-document-service";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  History,
  GitCompare,
  BookOpen,
  Lock,
  User,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function DocumentHistoryPage({ params }: { params: { id: string } }) {
  const paramId = decodeURIComponent(params.id);
  const doc = getInstitutionalDocumentById(paramId);

  const [selectedVersionForView, setSelectedVersionForView] = useState<InstitutionalDocumentVersion | null>(
    doc?.versions[0] || null
  );

  const [compV1, setCompV1] = useState<string>(
    doc?.versions.length && doc.versions.length > 1 ? doc.versions[0].versionNumber : doc?.versions[0]?.versionNumber || "1.0"
  );
  const [compV2, setCompV2] = useState<string>(
    doc?.versions[doc.versions.length - 1]?.versionNumber || doc?.version || "1.0"
  );
  const [showComparison, setShowComparison] = useState(false);

  if (!doc) {
    return (
      <div className="p-12 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Documento no encontrado</h2>
        <Link href="/documentos" className="text-xs text-amber-400 underline">
          Volver a la biblioteca
        </Link>
      </div>
    );
  }

  const comparisonResult = showComparison ? compareDocumentVersions(doc.id, compV1, compV2) : null;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Cabecera */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/documentos/${doc.documentNumber}`}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Documento ({doc.documentNumber})</span>
        </Link>

        <span className="text-xs font-mono text-purple-300 bg-purple-950/40 border border-purple-800/60 px-3 py-1.5 rounded-xl font-bold">
          HISTORIAL INMUTABLE DE VERSIONES
        </span>
      </div>

      {/* Header del Documento */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#181335] via-[#0f0e26] to-[#070718] border border-slate-800 shadow-2xl space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-amber-400 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30">
            {doc.documentNumber}
          </span>
          <span className="text-xs font-mono font-bold text-purple-300">
            Versión Activa Actual: v{doc.version}
          </span>
        </div>
        <h1 className="text-2xl font-black text-white">{doc.title}</h1>
        <p className="text-xs text-slate-300">
          Registro cronológico y trazabilidad inmutable de todas las revisiones y cambios del documento.
        </p>
      </div>

      {/* Motor de Comparación de Versiones */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
        <h2 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2 font-mono">
          <GitCompare className="w-4 h-4 text-purple-400" />
          <span>COMPARAR DOS VERSIONES HISTÓRICAS:</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="space-y-1">
            <label className="text-slate-400 font-mono">Versión Base (V1):</label>
            <select
              value={compV1}
              onChange={(e) => setCompV1(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono focus:border-purple-400 focus:outline-none"
            >
              {doc.versions.map((v) => (
                <option key={v.id} value={v.versionNumber}>
                  v{v.versionNumber} ({v.status})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-slate-400 font-mono">Versión Comparada (V2):</label>
            <select
              value={compV2}
              onChange={(e) => setCompV2(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white font-mono focus:border-purple-400 focus:outline-none"
            >
              {doc.versions.map((v) => (
                <option key={v.id} value={v.versionNumber}>
                  v{v.versionNumber} ({v.status})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <Button
              variant="secondary"
              size="md"
              className="w-full"
              icon={<GitCompare className="w-4 h-4" />}
              onClick={() => setShowComparison(true)}
            >
              Ejecutar Comparación
            </Button>
          </div>
        </div>

        {/* Visualización de Diferencias (Diff) */}
        {showComparison && comparisonResult?.success && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
              <span className="font-bold text-white">
                Diferencias entre v{compV1} y v{compV2}
              </span>
              <button
                onClick={() => setShowComparison(false)}
                className="text-slate-400 hover:text-white"
              >
                Cerrar Comparación ✕
              </button>
            </div>

            <div className="space-y-1 font-mono text-xs max-h-80 overflow-y-auto p-3 bg-[#0a0f1d] rounded-xl border border-slate-900">
              {comparisonResult.diffLines?.map((line, idx) => (
                <div
                  key={idx}
                  className={`p-1 rounded ${
                    line.type === "add"
                      ? "bg-emerald-950/60 text-emerald-300"
                      : line.type === "remove"
                      ? "bg-rose-950/60 text-rose-300 line-through"
                      : "text-slate-400"
                  }`}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lista Cronológica de Versiones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Timeline (5 Columnas) */}
        <div className="lg:col-span-5 space-y-3">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 font-mono">
            Versiones Registradas ({doc.versions.length})
          </h3>

          {doc.versions.map((ver) => {
            const isSelected = selectedVersionForView?.id === ver.id;
            return (
              <div
                key={ver.id}
                onClick={() => setSelectedVersionForView(ver)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? "bg-[#1f193d] border-purple-500 shadow-lg"
                    : "bg-[#0f172a] border-slate-800 hover:border-slate-700 hover:bg-[#131e38]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-amber-400">
                    v{ver.versionNumber}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {ver.status}
                  </span>
                </div>
                <p className="text-xs font-semibold text-white leading-tight">
                  Motivo: "{ver.changeReason}"
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1 border-t border-slate-800/60">
                  <span>{ver.authorName}</span>
                  <span>{new Date(ver.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visor de Versión Seleccionada (7 Columnas - Read Only) */}
        <div className="lg:col-span-7">
          {selectedVersionForView ? (
            <div className="p-6 rounded-3xl bg-[#10192e] border border-slate-800 shadow-2xl space-y-4 sticky top-6">
              <div className="border-b border-slate-800/80 pb-3 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      v{selectedVersionForView.versionNumber}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                      INMUTABLE / SOLO LECTURA
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{selectedVersionForView.title}</h3>
                </div>
                <Lock className="w-4 h-4 text-purple-400" />
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200 font-mono whitespace-pre-line leading-relaxed max-h-96 overflow-y-auto">
                {selectedVersionForView.content}
              </div>

              <div className="text-[11px] text-slate-400 space-y-1 border-t border-slate-800 pt-3">
                <p>
                  <strong>Autor de versión:</strong> {selectedVersionForView.authorName} ({selectedVersionForView.authorRole})
                </p>
                <p>
                  <strong>Fecha de registro:</strong> {new Date(selectedVersionForView.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Motivo registrado:</strong> {selectedVersionForView.changeReason}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
