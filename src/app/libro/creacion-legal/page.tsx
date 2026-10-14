"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAllBookChapters, BookChapter } from "@/lib/book-legal-creation-content";
import { Button } from "@/components/ui/Button";
import {
  BookOpen,
  Search,
  Printer,
  ShieldAlert,
  Scale,
  ExternalLink,
  FileText,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Landmark,
  Building,
  ShieldCheck,
  FolderLock,
  Compass,
} from "lucide-react";

export default function BookLegalCreationIndexPage() {
  const chapters = getAllBookChapters();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChapters = chapters.filter((c) => {
    const q = searchQuery.toLowerCase();
    return (
      c.title.toLowerCase().includes(q) ||
      c.subtitle.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.chapterNumber.toString().includes(q)
    );
  });

  const categories = [
    { id: "ESTRUCTURA_LEGAL", label: "Estructura Legal y Constitución en NJ", icon: Landmark },
    { id: "DOCUMENTOS_FUNDACIONALES", label: "Documentos Fundacionales e Institucionales", icon: FileText },
    { id: "FINANZAS_Y_TRIBUTOS", label: "Finanzas, Tributación y 501(c)(3)", icon: Scale },
    { id: "GOBIERNO_Y_ADMINISTRACION", label: "Gobierno Eclesial y Membresía", icon: Compass },
    { id: "OPERACIONES_Y_PROTECCION", label: "Operaciones, Seguros y Protección Infantil", icon: ShieldCheck },
    { id: "CHECKLIST_Y_RECURSOS", label: "Checklists, Archivo y Recursos", icon: FolderLock },
  ];

  return (
    <div className="space-y-10 max-w-6xl mx-auto py-2">
      {/* Botones de Navegación y Utilidades */}
      <div className="flex flex-wrap items-center justify-between gap-3 no-print">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
        >
          <span>← Volver al Portal Principal</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/libro/creacion-legal/capitulo-1-plan-general"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl transition-colors shadow-lg"
          >
            <BookOpen className="w-4 h-4" />
            <span>Comenzar Lectura (Cap. 1)</span>
          </Link>

          <Button
            variant="outline"
            size="sm"
            icon={<Printer className="w-3.5 h-3.5 text-slate-300" />}
            onClick={() => window.print()}
          >
            Imprimir Índice
          </Button>
        </div>
      </div>

      {/* PORTADA DEL LIBRO WEB */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#101b38] via-[#091122] to-[#040812] border border-slate-800 shadow-2xl p-8 sm:p-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-widest font-mono">
          <BookOpen className="w-4 h-4" />
          <span>LIBRO WEB OFICIAL • RENACER CHURCH MAESTRO</span>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            RENACER CHURCH
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-200 tracking-wide">
            Guía de Creación Legal, Institucional y Administrativa
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed pt-2">
            Manual exhaustivo para la constitución formal en el Estado de New Jersey, cumplimiento federal del IRS,
            organización de la gobernanza espiritual, administración fiduciaria y gestión eclesiástica en Paterson, Passaic County.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400 font-mono border-t border-slate-800/80">
          <div><strong className="text-slate-200">21 Capítulos</strong> Temáticos</div>
          <div>•</div>
          <div><strong className="text-slate-200">New Jersey Law</strong> (Title 15A / 16)</div>
          <div>•</div>
          <div><strong className="text-slate-200">IRS Pub 1828 & 517</strong></div>
          <div>•</div>
          <div><strong className="text-slate-200">Checklist Interactivo</strong></div>
        </div>
      </div>

      {/* AVISO LEGAL Y DESCARGO DE RESPONSABILIDAD */}
      <div className="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs space-y-1 shadow-lg">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <strong className="font-bold uppercase tracking-wide">
            AVISO LEGAL IMPORTANTE
          </strong>
        </div>
        <p className="text-slate-300 leading-relaxed text-[11px] font-mono">
          Esta guía tiene fines informativos y de organización institucional. No sustituye asesoría legal, fiscal,
          contable, de seguros, zoning o laboral. Los requisitos pueden depender de las circunstancias específicas de RENACER CHURCH.
        </p>
      </div>

      {/* BARRA DE BÚSQUEDA DEL LIBRO */}
      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
        <Search className="w-5 h-5 text-slate-400 shrink-0" />
        <input
          type="text"
          placeholder="Buscar capítulo por título, tema, ley o palabra clave (ej. 501(c)(3), EIN, Housing, Zoning, Bylaws)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent text-slate-200 placeholder-slate-500 text-xs font-mono focus:outline-none"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs text-slate-400 hover:text-white px-2 font-mono"
          >
            Limpiar
          </button>
        )}
      </div>

      {/* ÍNDICE GENERAL POR CATEGORÍAS */}
      <div className="space-y-10">
        {categories.map((cat) => {
          const catChapters = filteredChapters.filter((c) => c.category === cat.id);
          if (catChapters.length === 0) return null;

          const IconComponent = cat.icon;

          return (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <IconComponent className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-bold text-white font-mono uppercase tracking-wide">
                  {cat.label}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catChapters.map((ch) => (
                  <Link
                    key={ch.slug}
                    href={`/libro/creacion-legal/${ch.slug}`}
                    className="p-6 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-indigo-600/70 transition-all duration-200 shadow-xl flex flex-col justify-between group space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-mono font-bold text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          Capítulo {ch.chapterNumber}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {ch.readTimeMinutes} min lectura
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {ch.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {ch.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs text-indigo-400 font-mono font-bold group-hover:text-indigo-300">
                      <span>Leer Capítulo</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* SECCIÓN: DOCUMENTOS DE RENACER */}
      <div className="p-8 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wide text-sm">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Documentos Oficiales e Institucionales de Renacer Church</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Bóveda Institucional</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <Link
            href="/doctrina"
            className="p-4 rounded-2xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors space-y-1 block"
          >
            <span className="text-indigo-400 font-mono font-bold block text-xs">REN-DOC-001</span>
            <strong className="text-white text-xs block">Declaración de Fe</strong>
            <span className="text-[11px] text-slate-400 block">20 Artículos Fundamentales de Fe</span>
          </Link>

          <Link
            href="/constitucion"
            className="p-4 rounded-2xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors space-y-1 block"
          >
            <span className="text-indigo-400 font-mono font-bold block text-xs">REN-DOC-002</span>
            <strong className="text-white text-xs block">Constitución de Renacer</strong>
            <span className="text-[11px] text-slate-400 block">Carta Magna Eclesial (v0.1 En Redacción)</span>
          </Link>

          <Link
            href="/documentos"
            className="p-4 rounded-2xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors space-y-1 block"
          >
            <span className="text-indigo-400 font-mono font-bold block text-xs">REN-DOC-003</span>
            <strong className="text-white text-xs block">Bylaws Corporativos</strong>
            <span className="text-[11px] text-slate-400 block">Estatutos Fiduciarios y de Gobierno</span>
          </Link>
        </div>
      </div>

      {/* SECCIÓN: FUENTES OFICIALES */}
      <div className="p-8 rounded-3xl bg-[#091122] border border-slate-800 space-y-4 shadow-xl text-xs">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-white font-mono font-bold uppercase tracking-wide text-sm">
            <Scale className="w-4 h-4 text-indigo-400" />
            <span>Fuentes Oficiales y Autoridades Gubernamentales</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">Enlaces de Referencia Gubernamental</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 text-[11px] font-mono">
          <a
            href="https://www.nj.gov/treasury/revenue/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors flex items-center justify-between text-slate-300 hover:text-white"
          >
            <span>NJ Division of Revenue</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>

          <a
            href="https://www.nj.gov/treasury/taxation/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors flex items-center justify-between text-slate-300 hover:text-white"
          >
            <span>NJ Division of Taxation</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>

          <a
            href="https://www.irs.gov/charities-non-profits"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors flex items-center justify-between text-slate-300 hover:text-white"
          >
            <span>IRS Charities & Nonprofits</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>

          <a
            href="https://www.patersonnj.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 hover:border-indigo-600 transition-colors flex items-center justify-between text-slate-300 hover:text-white"
          >
            <span>City of Paterson, NJ</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
