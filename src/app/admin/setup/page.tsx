"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  isBootstrapAvailable,
  executeAdminBootstrap,
  getRegisteredUsers,
} from "@/lib/admin-service";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  UserPlus,
} from "lucide-react";

export default function AdminSetupPage() {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const available = isBootstrapAvailable();
  const existingUsers = getRegisteredUsers();
  const adminUser = existingUsers.find((u) => u.role === "ADMINISTRADOR");

  const handleBootstrap = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const result = executeAdminBootstrap({
      email,
      displayName,
    });

    if (!result.success || !result.user) {
      setErrorMsg(result.error || "No se pudo completar el bootstrap.");
      return;
    }

    setSuccessMsg(`Administrador creado con éxito: ${result.user.email}. El canal de bootstrap ha sido cerrado.`);
  };

  return (
    <div className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-[#10192e] border border-slate-800 shadow-2xl space-y-6">
      <div className="text-center space-y-2 border-b border-slate-800 pb-6">
        <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-amber-400" />
        </div>
        <h1 className="text-xl font-black text-white">CONFIGURACIÓN INICIAL DE ADMINISTRADOR</h1>
        <p className="text-xs text-slate-400">
          Procedimiento de bootstrap seguro para el primer administrador de RENACER CHURCH MAESTRO.
        </p>
      </div>

      {!available ? (
        <div className="space-y-4 text-center">
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 text-left">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <strong className="block font-bold">BOOTSTRAP CERRADO Y SEGURO</strong>
              <span>El administrador del sistema ya ha sido configurado formalmente ({adminUser?.email || "admin@renacerchurch.org"}).</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Por estrictas políticas de seguridad institucional, esta ruta no permite la creación de nuevos administradores no autorizados.
          </p>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-5 py-2.5 rounded-xl font-mono transition-colors"
          >
            <span>Ir al Panel Administrativo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <form onSubmit={handleBootstrap} className="space-y-4 text-xs">
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <div className="space-y-1">
            <label className="font-bold text-slate-300">NOMBRE COMPLETO DEL ADMINISTRADOR:</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Ej: Administrador General"
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-300">CORREO ELECTRÓNICO INSTITUCIONAL:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@renacerchurch.org"
              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <Button variant="gold" size="sm" type="submit" icon={<UserPlus className="w-4 h-4" />}>
              Crear y Cerrar Bootstrap
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
