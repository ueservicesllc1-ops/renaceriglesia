import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getDocumentInventoryAudit,
  DocumentInventoryItem,
} from "@/lib/admin-service";
import {
  ArrowLeft,
  FolderLock,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Scale,
  FileText,
  Clock,
  Shield,
  Layers,
} from "lucide-react";

export function generateStaticParams() {
  const inventory = getDocumentInventoryAudit();
  const params: { id: string }[] = [];
  inventory.forEach((item) => {
    params.push({ id: item.code });
    params.push({ id: item.id });
  });
  return params;
}

export default function DocumentInventoryDetailPage({ params }: { params: { id: string } }) {
  const inventory = getDocumentInventoryAudit();
  const paramId = decodeURIComponent(params.id);

  const item = inventory.find(
    (i) => i.code.toLowerCase() === paramId.toLowerCase() || i.id.toLowerCase() === paramId.toLowerCase()
  );

  if (!item) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Botón de Volver */}
      <Link
        href="/admin/documentos/inventario"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver al Inventario Documental</span>
      </Link>

      {/* Header de la Ficha Técnica */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121c38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-black text-amber-400 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30">
              {item.code}
            </span>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              Versión v{item.version}
            </span>
          </div>

          <span
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border ${
              item.documentState === "ADOPTADO"
                ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                : "bg-amber-950 border-amber-800 text-amber-300"
            }`}
          >
            {item.documentState === "ADOPTADO" ? "ADOPTADO OFICIAL" : `${item.documentState} • NO ADOPTADA`}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">{item.name}</h1>
        <p className="text-xs text-slate-400">
          Registro técnico y auditoría de contenido en la biblioteca institucional.
        </p>
      </div>

      {/* Grid de Estado de Auditoría */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">
            ESTADO DE CONTENIDO:
          </span>
          <span className="text-sm font-bold text-cyan-400">{item.completenessLabel}</span>
          <span className="text-[10px] text-slate-500 block font-mono">
            {item.hasFullContent ? "Contenido cargado en sistema" : "Pendiente de redacción integral"}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">
            ESTADO LEGAL (NEW JERSEY):
          </span>
          <span className="text-sm font-bold text-amber-300">{item.legalState}</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">
            ÁREA RESPONSABLE:
          </span>
          <span className="text-sm font-bold text-purple-300 font-mono">{item.responsibleArea}</span>
        </div>
      </div>

      {/* Detalles Técnicos */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono border-b border-slate-800 pb-3">
          METADATOS TÉCNICOS AUDITADOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Tipo Documental:</span>
            <strong className="text-white font-mono">{item.type}</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Categoría:</span>
            <strong className="text-white font-mono">{item.category}</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Fuente Primaria:</span>
            <strong className="text-white">{item.source}</strong>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Longitud del Contenido:</span>
            <strong className="text-white font-mono">{item.contentLength} caracteres</strong>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <Link
            href={item.href}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Abrir en Biblioteca Documental</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
