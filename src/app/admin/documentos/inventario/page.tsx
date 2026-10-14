"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  getDocumentInventoryAudit,
  DocumentInventoryItem,
} from "@/lib/admin-service";
import { useAuth } from "@/context/AuthContext";
import {
  FolderLock,
  Search,
  Filter,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Layers,
  ArrowRight,
  Printer,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function DocumentInventoryPage() {
  const { currentRole } = useAuth();
  const inventory = getDocumentInventoryAudit();

  const [searchQuery, setSearchQuery] = useState("");
  const [completenessFilter, setCompletenessFilter] = useState<string>("ALL");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [legalFilter, setLegalFilter] = useState<string>("ALL");

  const isAuthorized = currentRole === "ADMINISTRADOR" || currentRole === "PASTOR_FUNDADOR";

  const filteredItems = inventory.filter((item) => {
    if (completenessFilter !== "ALL" && item.completeness !== completenessFilter) {
      return false;
    }
    if (categoryFilter !== "ALL" && item.category !== categoryFilter && item.type !== categoryFilter) {
      return false;
    }
    if (legalFilter !== "ALL" && item.legalState !== legalFilter) {
      return false;
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        item.code.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.responsibleArea.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const categories = Array.from(new Set(inventory.map((i) => i.category)));

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Navegación y Botón Volver */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Panel Administrativo</span>
        </Link>

        <Button
          variant="outline"
          size="sm"
          icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
          onClick={() => window.print()}
        >
          Imprimir Inventario
        </Button>
      </div>

      {/* Header del Inventario */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121c38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest font-mono">
              <FolderLock className="w-3.5 h-3.5" />
              <span>AUDITORÍA TÉCNICA DOCUMENTAL</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Inventario Documental Real
            </h1>
            <p className="text-xs text-slate-400">
              Auditoría exhaustiva de todos los documentos: distinción estricta entre contenido completo, parcial y registros de catálogo.
            </p>
          </div>
        </div>

        {/* Filtros y Buscador */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          <div className="sm:col-span-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por código, nombre o área..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500 font-sans"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={completenessFilter}
              onChange={(e) => setCompletenessFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
            >
              <option value="ALL">Todo el Contenido</option>
              <option value="DOCUMENTO_COMPLETO">Documentos Completos</option>
              <option value="DOCUMENTO_PARCIAL">Documentos Parciales</option>
              <option value="CONTENIDO_PENDIENTE">Contenido Pendiente</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
            >
              <option value="ALL">Todas las Categorías</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <select
              value={legalFilter}
              onChange={(e) => setLegalFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-sans"
            >
              <option value="ALL">Todo Estado Legal</option>
              <option value="REQUIERE_REVISION_LEGAL">Revisión Legal NJ</option>
              <option value="NO_REQUIERE_REVISION_LEGAL">No Requiere Rev. Legal</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabla de Inventario */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-slate-800">
          <span>{filteredItems.length} registros auditados</span>
          <span>Base de datos: Catálogo Maestro & Biblioteca</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono">
              <th className="py-3 px-3">CÓDIGO</th>
              <th className="py-3 px-3">TÍTULO INSTITUCIONAL</th>
              <th className="py-3 px-3">CATEGORÍA</th>
              <th className="py-3 px-3">ESTADO DOC.</th>
              <th className="py-3 px-3">ESTADO CONTENIDO</th>
              <th className="py-3 px-3">REV. LEGAL</th>
              <th className="py-3 px-3 text-right">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-900/50 transition-colors">
                <td className="py-3 px-3 font-mono font-bold text-amber-400">
                  {item.code}
                </td>
                <td className="py-3 px-3">
                  <strong className="text-white block">{item.name}</strong>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Área: {item.responsibleArea} • v{item.version}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {item.category}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      item.documentState === "ADOPTADO"
                        ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                        : "bg-amber-950 border-amber-800 text-amber-300"
                    }`}
                  >
                    {item.documentState}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border font-mono ${
                      item.hasFullContent
                        ? "bg-emerald-950 border-emerald-800 text-emerald-300"
                        : item.completeness === "DOCUMENTO_PARCIAL"
                        ? "bg-blue-950 border-blue-800 text-blue-300"
                        : "bg-slate-900 border-slate-700 text-slate-400"
                    }`}
                  >
                    {item.completenessLabel}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono">
                  {item.legalState === "REQUIERE_REVISION_LEGAL" ? (
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                      Revisión NJ
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500">No aplica</span>
                  )}
                </td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    {item.code === "REN-DOC-002" && (
                      <Link
                        href="/admin/documentos/REN-DOC-002/trazabilidad"
                        className="px-2 py-1 rounded bg-amber-950/60 hover:bg-amber-900/60 border border-amber-800/60 text-amber-300 font-bold text-[10px] inline-flex items-center gap-1 transition-colors"
                      >
                        <Scale className="w-3 h-3" />
                        <span>Trazabilidad</span>
                      </Link>
                    )}
                    <Link
                      href={`/admin/documentos/inventario/${item.code}`}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 font-bold text-[11px] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Ficha</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
