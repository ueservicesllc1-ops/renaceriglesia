import React from "react";
import { DocumentStatus } from "@/types";

interface StatusBadgeProps {
  status: DocumentStatus;
  size?: "sm" | "md" | "lg";
}

export const STATUS_CONFIG: Record<
  DocumentStatus,
  { label: string; bg: string; text: string; border: string; icon: string }
> = {
  BORRADOR: {
    label: "BORRADOR",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
    icon: "📝",
  },
  EN_REVISION: {
    label: "EN REVISIÓN",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30",
    icon: "🔍",
  },
  CAMBIOS_SOLICITADOS: {
    label: "CAMBIOS SOLICITADOS",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/30",
    icon: "⚠️",
  },
  APROBADO_INTERNAMENTE: {
    label: "APROBADO INTERNAMENTE",
    bg: "bg-purple-500/10",
    text: "text-purple-300",
    border: "border-purple-500/30",
    icon: "🛡️",
  },
  ADOPTADO: {
    label: "ADOPTADO (OFICIAL)",
    bg: "bg-emerald-500/15",
    text: "text-emerald-300",
    border: "border-emerald-500/40",
    icon: "✅",
  },
  ARCHIVADO: {
    label: "ARCHIVADO",
    bg: "bg-slate-500/10",
    text: "text-slate-400",
    border: "border-slate-500/30",
    icon: "📦",
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = "md" }) => {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.BORRADOR;

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-xs px-2.5 py-1 font-semibold tracking-wider",
    lg: "text-sm px-3.5 py-1.5 font-bold tracking-wider",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${config.bg} ${config.text} ${config.border} ${sizeClasses[size]}`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
};
