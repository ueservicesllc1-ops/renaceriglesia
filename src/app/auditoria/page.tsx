"use client";

import React, { useState } from "react";
import { useDocuments } from "@/context/DocumentContext";
import { FileCheck2, Search, Filter, ShieldCheck } from "lucide-react";
import { RoleBadge } from "@/components/ui/RoleBadge";

export default function AuditoriaPage() {
  const { auditLogs } = useDocuments();
  const [filterAction, setFilterAction] = useState<string>("ALL");
  const [searchFilter, setSearchFilter] = useState<string>("");

  const filteredLogs = auditLogs.filter((log) => {
    const matchesAction = filterAction === "ALL" || log.action === filterAction;
    const matchesSearch =
      searchFilter === "" ||
      log.userName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      log.detail.toLowerCase().includes(searchFilter.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesAction && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#131d33] to-[#0d1424] border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Trazabilidad y Transparencia Institucional</span>
          </div>
          <h1 className="text-2xl font-black text-white">AUDIT LOG (REGISTRO DE AUDITORÍA)</h1>
          <p className="text-xs text-slate-400">
            Registro cronológico inmutable de todas las acciones, cambios de estado y modificaciones del sistema.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
          Total eventos registrados: <strong className="text-white">{auditLogs.length}</strong>
        </div>
      </div>

      {/* Filtros */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs text-slate-300 font-semibold">Filtrar por Acción:</span>
          <select
            value={filterAction}
            onChange={(e) => setFilterAction(e.target.value)}
            className="bg-slate-800 text-xs px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 focus:outline-none"
          >
            <option value="ALL">Todas las acciones</option>
            <option value="AUTH_LOGIN">Inicios de sesión</option>
            <option value="DOC_UPDATE">Modificaciones de documentos</option>
            <option value="DOC_STATUS_CHANGE">Cambios de estado</option>
            <option value="COMMENT_ADDED">Comentarios</option>
            <option value="REVIEW_REQUESTED">Revisiones solicitadas</option>
            <option value="LEGAL_CHECKLIST_UPDATE">Centro legal</option>
            <option value="USER_ROLE_CHANGED">Cambios de rol</option>
          </select>
        </div>

        <div className="w-72">
          <input
            type="text"
            placeholder="Buscar por usuario o detalle..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
          />
        </div>
      </div>

      {/* Tabla de Auditoría */}
      <div className="rounded-2xl bg-[#101728] border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Fecha y Hora</th>
                <th className="px-5 py-3.5">Usuario</th>
                <th className="px-5 py-3.5">Rol</th>
                <th className="px-5 py-3.5">Acción</th>
                <th className="px-5 py-3.5">Recurso</th>
                <th className="px-5 py-3.5">Detalle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-400 italic">
                    No se encontraron registros de auditoría que coincidan con los filtros.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-800/40 transition-colors font-mono">
                    <td className="px-5 py-3 text-slate-400 text-[11px] whitespace-nowrap">
                      {new Date(log.createdAt).toLocaleString()}
                    </td>
                    <td className="px-5 py-3 font-semibold text-slate-200 font-sans">
                      {log.userName}
                    </td>
                    <td className="px-5 py-3">
                      <RoleBadge role={log.userRole} />
                    </td>
                    <td className="px-5 py-3">
                      <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20 text-[10px] font-bold">
                        {log.action}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-slate-400 uppercase">{log.resource}</td>
                    <td className="px-5 py-3 text-slate-300 font-sans text-xs">{log.detail}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
