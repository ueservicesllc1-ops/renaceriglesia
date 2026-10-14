import React from "react";
import { RoleType } from "@/types";
import { ROLE_DISPLAY_NAMES } from "@/lib/permissions";

interface RoleBadgeProps {
  role: RoleType;
}

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role }) => {
  const getBadgeStyle = () => {
    switch (role) {
      case "PASTOR_FUNDADOR":
        return "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-yellow-300 border-amber-500/40";
      case "ADMINISTRADOR":
        return "bg-blue-500/20 text-blue-300 border-blue-500/40";
      case "PASTOR":
      case "CONSEJO_GOBIERNO":
      case "CONSEJO_MINISTERIAL":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";
      case "REVISOR_DOCTRINAL":
      case "REVISOR_ACADEMICO":
      case "REVISOR_LEGAL":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
      case "DOCENTE":
      case "LIDER":
        return "bg-teal-500/20 text-teal-300 border-teal-500/40";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/40";
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyle()}`}
    >
      <span>⚜️</span>
      <span>{ROLE_DISPLAY_NAMES[role] || role}</span>
    </span>
  );
};
