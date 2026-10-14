"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { getAllInstitutionalDecisions } from "@/lib/decision-service";
import { searchRenacerKnowledge } from "@/lib/knowledge-search-service";
import { getSystemOverviewMetrics } from "@/lib/admin-service";
import { INITIAL_MASTER_CATALOG } from "@/lib/catalog-data";
import { useAuth } from "@/context/AuthContext";
import { useDocuments } from "@/context/DocumentContext";
import {
  BookOpen,
  Scale,
  GraduationCap,
  Award,
  Users,
  Bot,
  Shield,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  Layers,
  ArrowUpRight,
  FolderLock,
  Lock,
  Compass,
  FileSpreadsheet,
  History,
  Sparkles,
} from "lucide-react";

// Artículos de doctrina cargados de forma estática para búsqueda instantánea
const DOCTRINE_ARTICLES = [
  { number: "Art. 1", title: "Las Sagradas Escrituras", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 2", title: "Dios", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 3", title: "Jesucristo", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 4", title: "El Espíritu Santo", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 5", title: "La Creación y el Ser Humano", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 6", title: "La Salvación", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 7", title: "El Bautismo en Agua", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 8", title: "La Santa Cena del Señor", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 9", title: "El Bautismo en el Espíritu Santo", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 10", title: "Los Dones del Espíritu Santo", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 11", title: "La Santificación y Vida Cristiana", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 12", title: "La Iglesia", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 13", title: "El Ministerio y Liderazgo", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 14", title: "La Sanidad Divina", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 15", title: "La Mayordomía Cristiana", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 16", title: "El Matrimonio, la Familia y la Sexualidad", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 17", title: "La Segunda Venida de Cristo", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 18", title: "El Juicio Final y la Eternidad", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 19", title: "La Misión y Evangelismo", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
  { number: "Art. 20", title: "Autoridad y Adopción Doctrinal", category: "Doctrina", href: "/doctrina", status: "BORRADOR" },
];

export const MainDashboard: React.FC = () => {
  const { auditLogs } = useDocuments();
  const { user } = useAuth();
  const [globalSearch, setGlobalSearch] = useState("");
  const metrics = getSystemOverviewMetrics();

  const allDecisions = getAllInstitutionalDecisions();

  // Búsqueda global unificada con motor de conocimiento
  const searchResults = useMemo(() => {
    if (!globalSearch.trim() || globalSearch.length < 2) return [];

    const knowledgeHits = searchRenacerKnowledge(globalSearch, {
      maxResults: 8,
    });

    return knowledgeHits.map((h) => ({
      type:
        h.type === "DECISION_INSTITUCIONAL"
          ? "Decisión Institucional"
          : h.type === "DOCTRINA_ARTICULO"
          ? "Declaración de Fe"
          : "Documento Normativo",
      code: h.code,
      title: h.title,
      status: h.statusLabel,
      href: h.href,
      badgeColor:
        h.status === "OFICIAL_ADOPTADO"
          ? "bg-emerald-950 text-emerald-300 border-emerald-800"
          : h.status === "REQUIERE_REVISION_LEGAL"
          ? "bg-amber-950 text-amber-300 border-amber-800"
          : "bg-blue-950 text-blue-300 border-blue-800",
    }));
  }, [globalSearch]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Institucional */}
      <div className="relative overflow-hidden rounded-3xl p-8 bg-gradient-to-r from-[#121d3a] via-[#0d162a] to-[#070d18] border border-slate-800 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <span>🏛️</span>
              <span>SISTEMA CENTRAL DE GOBIERNO Y CONOCIMIENTO</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              RENACER CHURCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">MAESTRO</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Centro Institucional de Conocimiento, Documentación y Formación de RENACER
            </p>
            <p className="text-[11px] text-slate-400 font-mono">
              RENACER CHURCH, INC. • Paterson, New Jersey • Pastor Fundador: Luis Uchubanda Falconí
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/ia"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <Bot className="w-4 h-4" />
              <span>Consultar RENACER IA</span>
            </Link>
          </div>
        </div>

        {/* Buscador Global Grande y Visible */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span>¿Qué quieres consultar en RENACER?</span>
          </label>
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por título, contenido, código (ej: DEC-001, REN-DOC), doctrina, riesgos o palabras clave..."
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-950/90 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-amber-400 shadow-inner font-sans"
            />
          </div>

          {/* Resultados de Búsqueda en Vivo */}
          {searchResults.length > 0 && (
            <div className="p-3 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl space-y-2 mt-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                Resultados coincidentes ({searchResults.length}):
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {searchResults.map((res, idx) => (
                  <Link
                    key={idx}
                    href={res.href}
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/60 hover:bg-slate-800/60 transition-all flex items-center justify-between text-xs group"
                  >
                    <div className="space-y-0.5 min-w-0 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-amber-400 font-bold text-[11px]">{res.code}</span>
                        <span className="text-[10px] text-slate-400 truncate">{res.type}</span>
                      </div>
                      <p className="font-semibold text-white group-hover:text-amber-300 truncate text-[11px]">
                        {res.title}
                      </p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border shrink-0 ${res.badgeColor}`}>
                      {res.status}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Estados Clave de Documentos Maestros */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Doctrina */}
        <div className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-blue-400">REN-DOC-001</span>
            <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 text-[10px] font-bold font-mono">
              BORRADOR v1.0 • NO ADOPTADA
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Declaración de Fe (20 Artículos)</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Fundamento confesional pentecostal, cristocéntrico e inmutable.
          </p>
          <div className="pt-2">
            <Link href="/doctrina" className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <span>Ver 20 Artículos de Fe</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Constitución */}
        <div className="p-5 rounded-2xl bg-[#0f172a] border border-indigo-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-indigo-400">REN-DOC-002</span>
            <span className="px-2 py-0.5 rounded bg-blue-950 border border-blue-800 text-blue-300 text-[10px] font-bold font-mono">
              PLANIFICADO v0.1 • NO ADOPTADA
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Constitución de RENACER (48 Artículos)</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Carta Magna eclesiástica estructurada en 10 capítulos de gobierno.
          </p>
          <div className="pt-2">
            <Link href="/constitucion" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
              <span>Ver Estructura Constitucional</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Decisiones */}
        <div className="p-5 rounded-2xl bg-[#0f172a] border border-emerald-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono font-bold text-emerald-400">REGISTRO MAESTRO</span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px] font-bold font-mono">
              {metrics.totalDecisions} DEFINIDAS
            </span>
          </div>
          <h3 className="text-sm font-bold text-white">Decisiones Institucionales</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Acuerdos institucionales de gobierno, sucesión, fiduciaria y riesgos.
          </p>
          <div className="pt-2">
            <Link href="/decisiones" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
              <span>Explorar {metrics.totalDecisions} Decisiones</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ESTADO REAL DE RENACER (Métricas Dinámicas) */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
          <h2 className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono flex items-center gap-2">
            <span>📊</span>
            <span>ESTADO REAL DE RENACER CHURCH MAESTRO:</span>
          </h2>
          <Link
            href="/admin/documentos/inventario"
            className="text-[11px] font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            <span>Ver Inventario Auditado →</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-emerald-400 block uppercase">Completos:</span>
            <span className="text-lg font-black text-white">{metrics.completeDocumentsCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-amber-400 block uppercase">En Borrador:</span>
            <span className="text-lg font-black text-white">{metrics.draftDocumentsCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-blue-400 block uppercase">Planificados:</span>
            <span className="text-lg font-black text-white">{metrics.plannedDocumentsCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-purple-400 block uppercase">Pend. Redacción:</span>
            <span className="text-lg font-black text-white">{metrics.pendingDraftCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-emerald-300 block uppercase">Decisiones:</span>
            <span className="text-lg font-black text-white">{metrics.totalDecisions}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">Adoptados:</span>
            <span className="text-lg font-black text-white">{metrics.adoptedDocumentsCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-[10px] font-mono text-amber-300 block uppercase">Rev. Legal NJ:</span>
            <span className="text-lg font-black text-white">{metrics.legalReviewRequiredCount}</span>
          </div>
        </div>
      </div>

      {/* Cuadrícula Principal de Módulos y Secciones */}
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <span>📂</span>
          <span>CENTRO INSTITUCIONAL DE CONSULTA Y GOBIERNO</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Enciclopedia RENACER",
              desc: "Consultas unificadas de todo el conocimiento institucional.",
              href: "/enciclopedia",
              icon: <Layers className="w-5 h-5 text-cyan-400" />,
              badge: "Conocimiento",
            },
            {
              title: "Biblioteca Documental",
              desc: "Catálogo de 20 documentos institucionales en 10 niveles.",
              href: "/documentos",
              icon: <FolderLock className="w-5 h-5 text-amber-400" />,
              badge: "20 Docs",
            },
            {
              title: "Bylaws y Estatutos",
              desc: "Reglas fiduciarias y societarias de New Jersey.",
              href: "/constitucion/auditoria",
              icon: <Scale className="w-5 h-5 text-indigo-400" />,
              badge: "Legal NJ",
            },
            {
              title: "Seminario Bíblico",
              desc: "Programa ministerial de 104 clases y 8 módulos teológicos.",
              href: "/seminario",
              icon: <BookOpen className="w-5 h-5 text-purple-400" />,
              badge: "104 Clases",
            },
            {
              title: "Escuela de Discípulos",
              desc: "Formación básica y discipulado cristiano de 9 meses.",
              href: "/escuela-discipulos",
              icon: <GraduationCap className="w-5 h-5 text-emerald-400" />,
              badge: "9 Meses",
            },
            {
              title: "Escuela de Líderes",
              desc: "Capacitación de anfitriones y líderes celulares de 6 meses.",
              href: "/escuela-lideres",
              icon: <Award className="w-5 h-5 text-yellow-400" />,
              badge: "6 Meses",
            },
            {
              title: "Membresía Eclesial",
              desc: "Padrón de miembros activos, bautismos y derechos.",
              href: "/membresia",
              icon: <Users className="w-5 h-5 text-blue-400" />,
              badge: "Personas",
            },
            {
              title: "Credenciales y Ministros",
              desc: "Escalafón ministerial (Obrero, Licenciado, Ordenado).",
              href: "/credenciales",
              icon: <Award className="w-5 h-5 text-rose-400" />,
              badge: "3 Niveles",
            },
            {
              title: "Gobierno y Consejos",
              desc: "Pastor Fundador, Consejo de Gobierno y Consejo Ministerial.",
              href: "/gobierno",
              icon: <Shield className="w-5 h-5 text-amber-400" />,
              badge: "Gobierno",
            },
            {
              title: "Centro Legal RENACER",
              desc: "Incorporación en NJ, exención IRS 501(c)(3) y compliance.",
              href: "/centro-legal",
              icon: <Scale className="w-5 h-5 text-cyan-400" />,
              badge: "Legal",
            },
            {
              title: "Protección y Ética",
              desc: "Cero tolerancia al abuso y resguardo de la niñez.",
              href: "/proteccion",
              icon: <Lock className="w-5 h-5 text-teal-400" />,
              badge: "Seguridad",
            },
            {
              title: "Auditoría (Audit Log)",
              desc: "Trazabilidad inmutable de eventos y cambios del sistema.",
              href: "/auditoria",
              icon: <History className="w-5 h-5 text-indigo-300" />,
              badge: "Auditoría",
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-slate-700 hover:bg-[#131e38] transition-all group flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
              <div className="flex items-center text-[10px] font-bold text-amber-400/80 group-hover:text-amber-300 gap-1 pt-1">
                <span>Acceder</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bitácora de Auditoría en Vivo */}
      <div className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <History className="w-4 h-4 text-amber-400" />
            <span>Auditoría Institucional y Registro de Trazabilidad</span>
          </h3>
          <Link href="/auditoria" className="text-xs text-amber-400 hover:text-amber-300 font-semibold">
            Ver Registro Completo →
          </Link>
        </div>

        {auditLogs.length === 0 ? (
          <p className="text-xs text-slate-400 italic">
            El sistema de auditoría está activo. Cada cambio de estado, edición o consulta quedará registrado automáticamente.
          </p>
        ) : (
          <div className="space-y-2">
            {auditLogs.slice(0, 4).map((log) => (
              <div
                key={log.id}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-bold text-slate-200">{log.userName}</span>{" "}
                  <span className="text-slate-400">({log.userRole}):</span>{" "}
                  <span className="text-slate-300">{log.detail}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  {new Date(log.createdAt).toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
