"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  BookOpen,
  FileText,
  Users,
  Award,
  GraduationCap,
  Sparkles,
  Scale,
  DollarSign,
  HeartHandshake,
  KeyRound,
  History,
  Database,
  BarChart3,
  Bot,
  FolderLock,
  Layers,
  FileCheck2,
  Lock,
  Compass,
  Home,
  Briefcase,
  FileSpreadsheet,
  CheckCircle2,
  FileCode,
  Sliders,
  Settings,
  X,
} from "lucide-react";
import clsx from "clsx";

interface ModuleGroup {
  title: string;
  items: {
    id: string;
    name: string;
    href: string;
    icon: React.ReactNode;
    badge?: string;
  }[];
}

const MODULE_GROUPS: ModuleGroup[] = [
  {
    title: "CONOCIMIENTO",
    items: [
      {
        id: "enciclopedia",
        name: "Enciclopedia RENACER",
        href: "/enciclopedia",
        icon: <Layers className="w-4 h-4 text-cyan-400" />,
      },
      {
        id: "documentos",
        name: "Documentos",
        href: "/documentos",
        icon: <FolderLock className="w-4 h-4 text-amber-400" />,
      },
      {
        id: "decisiones",
        name: "Decisiones Institucionales",
        href: "/decisiones",
        icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
        badge: "107",
      },
      {
        id: "doctrina",
        name: "Doctrina (20 Artículos)",
        href: "/doctrina",
        icon: <BookOpen className="w-4 h-4 text-blue-400" />,
        badge: "Borrador",
      },
      {
        id: "constitucion",
        name: "Constitución",
        href: "/constitucion",
        icon: <Scale className="w-4 h-4 text-indigo-400" />,
        badge: "Planificado",
      },
      {
        id: "bylaws",
        name: "Bylaws (Estatutos NJ)",
        href: "/constitucion/auditoria",
        icon: <FileText className="w-4 h-4 text-violet-400" />,
      },
      {
        id: "manuales",
        name: "Manuales",
        href: "/documentacion-ministerial",
        icon: <FileSpreadsheet className="w-4 h-4 text-teal-400" />,
      },
      {
        id: "reglamentos",
        name: "Reglamentos",
        href: "/proteccion",
        icon: <Lock className="w-4 h-4 text-rose-400" />,
      },
      {
        id: "sop",
        name: "SOP (Procedimientos)",
        href: "/admin",
        icon: <FileCode className="w-4 h-4 text-slate-400" />,
      },
    ],
  },
  {
    title: "FORMACIÓN",
    items: [
      {
        id: "discipulos",
        name: "Escuela de Discípulos",
        href: "/escuela-discipulos",
        icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
        badge: "9 meses",
      },
      {
        id: "lideres",
        name: "Escuela de Líderes",
        href: "/escuela-lideres",
        icon: <GraduationCap className="w-4 h-4 text-amber-400" />,
        badge: "6 meses",
      },
      {
        id: "seminario",
        name: "Seminario Bíblico RENACER",
        href: "/seminario",
        icon: <BookOpen className="w-4 h-4 text-purple-400" />,
        badge: "104 clases",
      },
      {
        id: "docentes",
        name: "Docentes y Pastores",
        href: "/formacion-pastores",
        icon: <Award className="w-4 h-4 text-yellow-400" />,
      },
      {
        id: "cursos",
        name: "Cursos Teológicos",
        href: "/seminario",
        icon: <Briefcase className="w-4 h-4 text-blue-400" />,
      },
      {
        id: "libros",
        name: "Libros y Archivo",
        href: "/archivo",
        icon: <FolderLock className="w-4 h-4 text-cyan-400" />,
      },
    ],
  },
  {
    title: "PERSONAS",
    items: [
      {
        id: "miembros",
        name: "Miembros",
        href: "/membresia",
        icon: <Users className="w-4 h-4 text-blue-400" />,
      },
      {
        id: "estudiantes",
        name: "Estudiantes",
        href: "/seminario",
        icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
      },
      {
        id: "ministros",
        name: "Ministros y Credenciales",
        href: "/credenciales",
        icon: <Award className="w-4 h-4 text-amber-400" />,
      },
      {
        id: "lideres_personas",
        name: "Líderes de Célula",
        href: "/escuela-lideres",
        icon: <HeartHandshake className="w-4 h-4 text-emerald-400" />,
      },
    ],
  },
  {
    title: "GOBIERNO",
    items: [
      {
        id: "pastor_fundador",
        name: "Pastor Fundador",
        href: "/identidad",
        icon: <Compass className="w-4 h-4 text-amber-400" />,
      },
      {
        id: "consejo_gobierno",
        name: "Consejo de Gobierno",
        href: "/gobierno",
        icon: <Shield className="w-4 h-4 text-blue-400" />,
      },
      {
        id: "consejo_ministerial",
        name: "Consejo Ministerial",
        href: "/ministerios",
        icon: <HeartHandshake className="w-4 h-4 text-purple-400" />,
      },
      {
        id: "autoridades",
        name: "Autoridades y Estructura",
        href: "/gobierno",
        icon: <Scale className="w-4 h-4 text-cyan-400" />,
      },
      {
        id: "sucesion",
        name: "Sucesión Institucional",
        href: "/decisiones",
        icon: <Award className="w-4 h-4 text-rose-400" />,
        badge: "DEC-001",
      },
      {
        id: "continuidad",
        name: "Continuidad del Fundador",
        href: "/decisiones",
        icon: <Shield className="w-4 h-4 text-emerald-400" />,
      },
    ],
  },
  {
    title: "LEGAL",
    items: [
      {
        id: "centro_legal",
        name: "Centro Legal RENACER",
        href: "/centro-legal",
        icon: <Scale className="w-4 h-4 text-indigo-400" />,
      },
      {
        id: "procesos_legales",
        name: "Procesos y Revisiones",
        href: "/versiones",
        icon: <History className="w-4 h-4 text-teal-400" />,
      },
      {
        id: "documentos_legales",
        name: "Documentos Legales",
        href: "/documents",
        icon: <FileText className="w-4 h-4 text-blue-400" />,
      },
    ],
  },
  {
    title: "INTELIGENCIA ARTIFICIAL",
    items: [
      {
        id: "renacer_ia",
        name: "RENACER IA",
        href: "/ia",
        icon: <Bot className="w-4 h-4 text-amber-300" />,
        badge: "Asistente",
      },
    ],
  },
  {
    title: "ADMINISTRACIÓN",
    items: [
      {
        id: "usuarios",
        name: "Usuarios y Accesos",
        href: "/usuarios",
        icon: <KeyRound className="w-4 h-4 text-slate-300" />,
      },
      {
        id: "roles",
        name: "Roles y Permisos RBAC",
        href: "/admin/doctrine/adoption",
        icon: <Lock className="w-4 h-4 text-rose-400" />,
      },
      {
        id: "auditoria",
        name: "Auditoría (Audit Log)",
        href: "/auditoria",
        icon: <FileCheck2 className="w-4 h-4 text-amber-300" />,
      },
      {
        id: "configuracion",
        name: "Configuración e Importación",
        href: "/importacion",
        icon: <Database className="w-4 h-4 text-emerald-400" />,
      },
    ],
  },
];

export const Sidebar: React.FC<{ open?: boolean; onClose?: () => void }> = ({ open = false, onClose }) => {
  const pathname = usePathname();

  return (
    <aside
      className={clsx(
        "w-[85vw] max-w-[20rem] lg:w-72 bg-[#090f1d] border-r border-slate-800/80 flex flex-col overflow-hidden select-none z-50 lg:z-30",
        "fixed inset-y-0 left-0 h-[100dvh] transition-transform duration-300 ease-out",
        "lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:shrink-0",
        open ? "translate-x-0 shadow-2xl shadow-black/60" : "-translate-x-full"
      )}
    >
      {/* Botón cerrar (solo móvil/tablet) */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar menú"
        className="lg:hidden absolute top-3 right-3 z-10 w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-300 active:scale-95"
      >
        <X className="w-5 h-5" />
      </button>
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 bg-gradient-to-b from-[#0e172e] to-[#090f1d]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            R
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-wide uppercase group-hover:text-amber-300 transition-colors">
              RENACER CHURCH
            </h1>
            <p className="text-[11px] font-semibold text-amber-400/90 tracking-wider">
              MAESTRO • SISTEMA CENTRAL
            </p>
          </div>
        </Link>
        <div className="mt-2.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 italic flex items-center gap-1.5">
          <span>🕊️</span>
          <span>&ldquo;Renacer, un nuevo inicio&rdquo;</span>
        </div>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {/* INICIO */}
        <Link
          href="/"
          className={clsx(
            "flex items-center gap-3 px-3 py-2.5 lg:py-2 rounded-xl text-sm lg:text-xs font-bold tracking-wide transition-all",
            pathname === "/"
              ? "bg-brand-600/30 text-brand-200 border border-brand-500/40 shadow-sm"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
          )}
        >
          <Home className="w-4 h-4 text-brand-400" />
          <span>INICIO (DASHBOARD)</span>
        </Link>

        {MODULE_GROUPS.map((group) => (
          <div key={group.title} className="space-y-1">
            <h2 className="px-3 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              {group.title}
            </h2>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={clsx(
                      "flex items-center justify-between px-3 py-2.5 lg:py-1.5 rounded-lg text-sm lg:text-xs transition-colors group",
                      isActive
                        ? "bg-brand-600/20 text-brand-300 border border-brand-500/30 font-medium"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    )}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {item.icon}
                      <span className="truncate">{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-amber-300/80 border border-slate-700">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / System Status */}
      <div className="p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-slate-800/80 bg-[#070b14] text-[11px] text-slate-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Paterson, NJ</span>
        </div>
        <span className="font-mono text-[10px] text-slate-400">v1.0.0</span>
      </div>
    </aside>
  );
};
