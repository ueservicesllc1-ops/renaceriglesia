"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useDocuments } from "@/context/DocumentContext";
import { RoleType } from "@/types";
import { ROLE_DISPLAY_NAMES } from "@/lib/permissions";
import { RoleBadge } from "@/components/ui/RoleBadge";
import { Search, Bot, User, Bell, Sparkles, Menu } from "lucide-react";
import Link from "next/link";

const AVAILABLE_ROLES: RoleType[] = [
  "PASTOR_FUNDADOR",
  "ADMINISTRADOR",
  "PASTOR",
  "CONSEJO_GOBIERNO",
  "CONSEJO_MINISTERIAL",
  "REVISOR_DOCTRINAL",
  "REVISOR_ACADEMICO",
  "REVISOR_LEGAL",
  "DOCENTE",
  "LIDER",
  "MIEMBRO",
  "ESTUDIANTE",
  "SOLO_LECTURA",
];

export const Header: React.FC<{ onMenuClick?: () => void }> = ({ onMenuClick }) => {
  const { user, currentRole, switchRole } = useAuth();
  const { searchQuery, setSearchQuery } = useDocuments();

  const roleSelect = (
    <select
      value={currentRole}
      onChange={(e) => switchRole(e.target.value as RoleType)}
      className="bg-transparent text-xs font-semibold text-brand-300 focus:outline-none cursor-pointer max-w-[11rem]"
    >
      {AVAILABLE_ROLES.map((role) => (
        <option key={role} value={role} className="bg-slate-900 text-slate-200">
          {ROLE_DISPLAY_NAMES[role]}
        </option>
      ))}
    </select>
  );

  return (
    <header className="border-b border-slate-800/80 bg-[#090f1d]/90 backdrop-blur-md sticky top-0 z-20 pt-[env(safe-area-inset-top)] print:hidden">
      <div className="h-14 sm:h-16 px-3 sm:px-6 flex items-center gap-2 sm:gap-4">
        {/* Hamburguesa (móvil/tablet) */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Abrir menú"
          className="lg:hidden shrink-0 w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-200 active:scale-95 transition-transform"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Bar */}
        <div className="flex-1 min-w-0 max-w-xl">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Buscar en todo el sistema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors truncate"
            />
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* RENACER IA Quick Button */}
          <Link
            href="/renacer-ia"
            aria-label="RENACER IA"
            className="flex items-center gap-2 h-10 px-3 sm:px-3.5 rounded-lg bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 text-amber-300 hover:from-amber-500/30 hover:to-yellow-500/30 text-xs font-semibold shadow-sm transition-all active:scale-95"
          >
            <Bot className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">RENACER IA</span>
          </Link>

          {/* Role Switcher (tablet+) */}
          <div className="hidden md:flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="text-[11px] text-slate-400 font-medium hidden xl:inline">Rol Activo:</span>
            {roleSelect}
          </div>

          {/* User Card */}
          {user && (
            <div className="flex items-center gap-3 md:pl-3 md:border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-600 to-indigo-800 border border-brand-400/40 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                {user.displayName.charAt(0)}
              </div>
              <div className="hidden xl:block text-left">
                <p className="text-xs font-semibold text-slate-200 leading-tight">
                  {user.displayName}
                </p>
                <div className="mt-0.5">
                  <RoleBadge role={currentRole} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Selector de rol en móvil */}
      <div className="md:hidden px-3 pb-2 flex items-center gap-2 text-[11px] text-slate-400">
        <span className="font-medium">Rol activo:</span>
        {roleSelect}
      </div>
    </header>
  );
};
