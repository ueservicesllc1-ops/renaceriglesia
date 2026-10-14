"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  getSystemOverviewMetrics,
  getRegisteredUsers,
  SystemUser,
} from "@/lib/admin-service";
import { useAuth } from "@/context/AuthContext";
import {
  Shield,
  Users,
  FolderLock,
  CheckCircle2,
  AlertTriangle,
  Scale,
  FileText,
  History,
  Lock,
  ArrowRight,
  Database,
  Layers,
  Settings,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminDashboardPage() {
  const { currentRole, user } = useAuth();
  const metrics = getSystemOverviewMetrics();
  const users = getRegisteredUsers();

  const isAuthorized = currentRole === "ADMINISTRADOR" || currentRole === "PASTOR_FUNDADOR";

  if (!isAuthorized) {
    return (
      <div className="max-w-2xl mx-auto my-12 p-8 rounded-3xl bg-[#130f1c] border border-rose-900/60 text-center space-y-4 shadow-2xl">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
          <Lock className="w-6 h-6 text-rose-400" />
        </div>
        <h2 className="text-xl font-bold text-white">ACCESO ADMINISTRATIVO RESTRINGIDO</h2>
        <p className="text-xs text-slate-400 leading-relaxed">
          Esta área está reservada exclusivamente para usuarios con rol <strong>ADMINISTRADOR</strong> o <strong>PASTOR_FUNDADOR</strong>. Su rol actual ({currentRole}) no tiene privilegios suficientes.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl"
        >
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto py-2">
      {/* Header del Panel de Administración */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#181335] via-[#100f26] to-[#070718] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
              <Shield className="w-3.5 h-3.5" />
              <span>CENTRO DE CONTROL Y ADMINISTRACIÓN REAL</span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">
              Panel Administrativo de RENACER
            </h1>
            <p className="text-xs text-slate-400">
              Gestión de usuarios, control de roles, inventario técnico de documentos y supervisión del estado del Maestro.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/admin/documentos/inventario"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all font-mono"
            >
              <FolderLock className="w-4 h-4" />
              <span>Ver Inventario Documental</span>
            </Link>
          </div>
        </div>

        {/* Métricas Reales Dinámicas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Usuarios Registrados:</span>
            <span className="text-2xl font-black text-white">{metrics.totalUsers}</span>
            <span className="text-[10px] text-amber-400 block">({metrics.adminUsers} Administradores)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Decisiones Institucionales:</span>
            <span className="text-2xl font-black text-emerald-300">{metrics.totalDecisions}</span>
            <span className="text-[10px] text-emerald-400 block">(100% Preservadas)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Documentos en Catálogo:</span>
            <span className="text-2xl font-black text-blue-300">{metrics.totalCatalogDocuments}</span>
            <span className="text-[10px] text-blue-400 block">({metrics.completeDocumentsCount} con contenido real)</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
            <span className="text-slate-400 font-mono block">Requieren Revisión Legal:</span>
            <span className="text-2xl font-black text-amber-300">{metrics.legalReviewRequiredCount}</span>
            <span className="text-[10px] text-amber-400 block">(Estatutarias NJ)</span>
          </div>
        </div>
      </div>

      {/* Grid Principal: Usuarios y Desglose Documental */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Tabla de Usuarios Registrados (7 Columnas) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>USUARIOS DEL SISTEMA Y ROLES ({users.length})</span>
              </h2>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                Bootstrap Activo
              </span>
            </div>

            <div className="space-y-2.5">
              {users.map((u) => (
                <div
                  key={u.id}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <strong className="text-white">{u.displayName}</strong>
                      {u.isBootstrapAdmin && (
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          ROOT ADMIN
                        </span>
                      )}
                    </div>
                    <span className="text-slate-400 font-mono text-[11px] block">{u.email}</span>
                  </div>

                  <div className="text-right space-y-1">
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-amber-400 block">
                      {u.role}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {u.isActive ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumen del Estado Documental (5 Columnas) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2 border-b border-slate-800 pb-3">
              <FolderLock className="w-4 h-4 text-amber-400" />
              <span>ESTADO DOCUMENTAL REAL</span>
            </h2>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Documentos Completos:</span>
                <span className="font-mono font-bold text-emerald-400">{metrics.completeDocumentsCount}</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Documentos Parciales:</span>
                <span className="font-mono font-bold text-blue-400">{metrics.partialDocumentsCount}</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Contenido Pendiente de Redacción:</span>
                <span className="font-mono font-bold text-amber-400">{metrics.pendingDraftCount}</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Borradores en Progreso:</span>
                <span className="font-mono font-bold text-amber-300">{metrics.draftDocumentsCount}</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-300">Documentos Oficiales Adoptados:</span>
                <span className="font-mono font-bold text-slate-400">{metrics.adoptedDocumentsCount}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <Link
                href="/admin/documentos/inventario"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-amber-300 hover:border-amber-500/60 font-bold text-xs flex items-center justify-center gap-2 transition-colors block text-center"
              >
                <span>Explorar Inventario Técnico Completo →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
