"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Baby,
  AlertTriangle,
  Scale,
  BookOpen,
  ExternalLink,
  Search,
  ShieldCheck,
  Users,
  HeartHandshake,
  FileSpreadsheet,
  Layers,
  Heart,
  UserCheck,
  CheckCircle2,
  Lock,
  PhoneCall,
  Sparkles,
  Smile,
  Compass,
} from "lucide-react";
import {
  CHILDREN_YOUTH_MANUAL_DRAFT,
  CHILDREN_YOUTH_FORMS_CATALOG,
} from "@/lib/children-youth-manual-full-draft";

export default function InfantilJuvenilPage() {
  const [activeTab, setActiveTab] = useState<
    "principios" | "titulos" | "etapas" | "salvaguardas" | "padres" | "campamentos" | "formularios" | "trazabilidad"
  >("principios");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  const selectedTitle = CHILDREN_YOUTH_MANUAL_DRAFT.titles[selectedTitleIndex];

  const filteredTitles = CHILDREN_YOUTH_MANUAL_DRAFT.titles.filter(
    (t) =>
      t.romanNumeral.toLowerCase().includes(searchFilter.toLowerCase()) ||
      t.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      t.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      t.articles.some((a) =>
        a.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        a.content.some((c) => c.toLowerCase().includes(searchFilter.toLowerCase()))
      )
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header con advertencia institucional */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5" />
              BORRADOR — NO ADOPTADO
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              REQUIERE REVISIÓN LEGAL
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-sky-600/20 text-sky-400 border border-sky-500/30 text-xs font-mono font-bold">
                  {CHILDREN_YOUTH_MANUAL_DRAFT.documentNumber}
                </span>
                <span className="text-xs text-slate-400">
                  Versión {CHILDREN_YOUTH_MANUAL_DRAFT.version} • NIVEL 4 MANUAL INSTITUCIONAL
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {CHILDREN_YOUTH_MANUAL_DRAFT.title}
              </h1>
              <p className="text-slate-400 text-sm max-w-3xl mt-1">
                Marco normativo institucional para el discipulado formativo de niños, preadolescentes, adolescentes y jóvenes, alianza con padres/tutores, perfil de servidores, salvaguardas innegociables (REN-DOC-014), regla de dos adultos y transición a la vida adulta en RENACER CHURCH, INC.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/documentos/REN-DOC-016"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium transition-colors shadow-lg shadow-sky-600/20"
              >
                <BookOpen className="w-4 h-4" />
                Ver Manual Completo (REN-DOC-016)
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Banner de Principio Fundamental */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/40 via-indigo-900/20 to-slate-900 border border-sky-500/30 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-sky-200/90 leading-relaxed">
              <span className="font-semibold text-sky-300">
                Principio Fundamental de Salvaguarda:
              </span>{" "}
              El ministerio infantil y juvenil forma parte integral de la misión de RENACER. Sin embargo,{" "}
              <strong className="text-white">ningún objetivo ministerial está por encima de la seguridad y dignidad del menor</strong>. Ante cualquier conflicto entre una actividad ministerial y una medida de protección de{" "}
              <Link href="/documentos/REN-DOC-014" className="underline text-sky-300 hover:text-white">
                REN-DOC-014
              </Link>
              , prevalece siempre de manera absoluta la protección del menor.
            </div>
          </div>
        </div>

        {/* Métricas rápidas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Títulos Normativos</span>
              <Layers className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl font-bold text-white mt-1">32</div>
            <div className="text-[11px] text-slate-500 mt-0.5">TÍTULO I a XXXII</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Artículos Reglamentarios</span>
              <BookOpen className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl font-bold text-white mt-1">128</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Normas codificadas</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Etapas de Desarrollo</span>
              <Baby className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-bold text-white mt-1">5</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Infancia a Juventud</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Formularios Oficiales</span>
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white mt-1">12</div>
            <div className="text-[11px] text-slate-500 mt-0.5">REN-FORM-IJ-001 a 012</div>
          </div>
        </div>

        {/* Pestañas de navegación */}
        <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab("principios")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "principios"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Principios y Misión
          </button>
          <button
            onClick={() => setActiveTab("titulos")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "titulos"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            32 Títulos Normativos (128 Art.)
          </button>
          <button
            onClick={() => setActiveTab("etapas")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "etapas"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <Baby className="w-3.5 h-3.5" />
            5 Etapas Etarias
          </button>
          <button
            onClick={() => setActiveTab("salvaguardas")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "salvaguardas"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Salvaguardas & Dos Adultos
          </button>
          <button
            onClick={() => setActiveTab("padres")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "padres"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            Familia & Autorizaciones
          </button>
          <button
            onClick={() => setActiveTab("campamentos")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "campamentos"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Campamentos & Comunicación
          </button>
          <button
            onClick={() => setActiveTab("formularios")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "formularios"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            12 Formularios Oficiales
          </button>
          <button
            onClick={() => setActiveTab("trazabilidad")}
            className={`px-4 py-2.5 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
              activeTab === "trazabilidad"
                ? "bg-slate-900 text-sky-400 border-t-2 border-sky-400"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            Trazabilidad & Pendientes
          </button>
        </div>

        {/* TAB 1: PRINCIPIOS Y MISIÓN */}
        {activeTab === "principios" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  1. Primacía de la Seguridad del Menor
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ningún programa ministerial, campamento, presentación o meta de crecimiento puede comprometer la integridad física, psicológica, espiritual o sexual de un menor. En caso de duda o tensión, rigen los protocolos de protección de REN-DOC-014.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Users className="w-4 h-4" />
                  2. Alianza Fundamental con Padres
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Los padres y tutores legales son los principales educadores espirituales designados por Dios. La iglesia coopera, acompaña y apoya a la familia sin sustituir la patria potestad ni interferir en decisiones civiles o médicas privadas.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Smile className="w-4 h-4" />
                  3. Discipulado Formativo sin Manipulación
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  La enseñanza bíblica y el evangelismo se imparten con respeto a la edad y madurez. Queda terminantemente prohibida la coerción psicológica, el miedo al infierno como chantaje, la culpa o la presión para obtener decisiones forzadas.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Lock className="w-4 h-4" />
                  4. Regla Innegociable de Dos Adultos
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ningún servidor, maestro, líder o pastor puede permanecer a solas a puerta cerrada con un menor no emparentado. Toda interacción, clase, consejería o traslado requiere visibilidad y la presencia de al menos dos servidores autorizados.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  <UserCheck className="w-4 h-4" />
                  5. Igualdad Ministerial de la Mujer
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Conforme a la Declaración Doctrinal de RENACER (REN-DOC-001 y DEC-DEF-004), las mujeres tienen pleno acceso a dirigir ministerios infantiles y juveniles, enseñar, predicar y liderar sin restricciones por razón de género.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  6. Transición Progresiva y Saludable
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Los jóvenes en transición hacia la vida adulta son acompañados hacia su plena integración en las Familias de Grupo, la Escuela de Discípulos y el servicio congregacional, sin otorgar credenciales pastorales prematuras no reglamentadas.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                Articulación con el Ecosistema Documental de RENACER
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-001 (Doctrina):</span> Fundamento cristocéntrico, doctrina de salvación, santidad y dones espirituales con orden y discernimiento.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-005 (Membresía):</span> Disciplina formativa sin violencia, expulsión ni humillación pública hacia menores.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-006 (Liderazgo):</span> Perfil de maestros y coordinadores; designación funcional sin crear nuevas credenciales.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-007 (Escuela Discípulos):</span> Currículo adaptado pedagógicamente a niños y jóvenes sin homologación automática de adultos.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-010 (Credenciales):</span> Ningún cargo en ministerio juvenil confiere credencial pastoral automática.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-011 (Ética):</span> Conducta irreprochable de servidores, prevención de conflictos de interés y redes sociales seguras.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-014 (Protección):</span> Prioridad operativa absoluta en salvaguardas, regla de dos adultos y denuncia inmediata 911.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <span className="font-semibold text-sky-300">REN-DOC-015 (Misiones):</span> Participación de jóvenes en viajes y servicio social sin riesgos desproporcionados.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 32 TÍTULOS NORMATIVOS */}
        {activeTab === "titulos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lista lateral de títulos */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Buscar títulos o artículos..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
                {filteredTitles.map((title) => {
                  const originalIndex = CHILDREN_YOUTH_MANUAL_DRAFT.titles.findIndex(
                    (t) => t.romanNumeral === title.romanNumeral
                  );
                  const isSelected = selectedTitleIndex === originalIndex;

                  return (
                    <button
                      key={title.romanNumeral}
                      onClick={() => setSelectedTitleIndex(originalIndex)}
                      className={`w-full text-left p-3 rounded-lg text-xs transition-all border ${
                        isSelected
                          ? "bg-sky-950/50 border-sky-500/50 text-white shadow-md shadow-sky-950/50"
                          : "bg-slate-900/50 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold">
                        <span className="text-sky-400">{title.romanNumeral}</span>
                        <span className="text-[10px] text-slate-500">
                          {title.articles.length} art.
                        </span>
                      </div>
                      <div className="font-medium text-slate-200 mt-0.5 line-clamp-1">
                        {title.title}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {title.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detalle del título seleccionado */}
            <div className="lg:col-span-7 space-y-4">
              {selectedTitle ? (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-bold">
                      <span>{selectedTitle.romanNumeral}</span>
                      <span>•</span>
                      <span>{selectedTitle.articles.length} Artículos</span>
                    </div>
                    <h2 className="text-xl font-bold text-white mt-1">
                      {selectedTitle.title}
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      {selectedTitle.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {selectedTitle.articles.map((art) => (
                      <div
                        key={art.number}
                        className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-sky-300">
                            Artículo {art.number}. {art.title}
                          </h4>
                        </div>
                        <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                          {art.content.map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                        {art.dependencies && art.dependencies.length > 0 && (
                          <div className="pt-2 flex flex-wrap gap-1">
                            {art.dependencies.map((dep, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400"
                              >
                                {dep}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center text-slate-500 text-xs bg-slate-900/40 rounded-xl border border-slate-800">
                  Selecciona un título para examinar sus artículos normativos.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: 5 ETAPAS ETARIAS */}
        {activeTab === "etapas" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <Baby className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                RENACER estructura el trabajo formativo en <strong className="text-white">5 etapas institucionales</strong> adaptadas al desarrollo evolutivo, cognitivo y espiritual. Los rangos numéricos exactos permanecen <span className="text-amber-400 font-mono">[PENDIENTE_DEFINIR]</span> para permitir flexibilidad pastoral conforme al desarrollo de cada menor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-sky-400">Etapa A</div>
                <h4 className="text-sm font-bold text-white">Primera Infancia</h4>
                <div className="text-[11px] text-amber-400 font-mono">[PENDIENTE_DEFINIR]</div>
                <p className="text-xs text-slate-300">
                  Cuidado seguro, estímulo sensorial bíblico, canciones, oración de bendición y presentación al Señor conforme a REN-DOC-012.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-indigo-400">Etapa B</div>
                <h4 className="text-sm font-bold text-white">Niñez</h4>
                <div className="text-[11px] text-amber-400 font-mono">[PENDIENTE_DEFINIR]</div>
                <p className="text-xs text-slate-300">
                  Historias bíblicas, memorización de Escrituras, adoración creativa, comprensión del amor de Dios y valores morales.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400">Etapa C</div>
                <h4 className="text-sm font-bold text-white">Preadolescencia</h4>
                <div className="text-[11px] text-amber-400 font-mono">[PENDIENTE_DEFINIR]</div>
                <p className="text-xs text-slate-300">
                  Etapa puente: identidad en Cristo, amistades saludables, toma de decisiones, discernimiento y preparación para la adolescencia.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-400">Etapa D</div>
                <h4 className="text-sm font-bold text-white">Adolescencia</h4>
                <div className="text-[11px] text-amber-400 font-mono">[PENDIENTE_DEFINIR]</div>
                <p className="text-xs text-slate-300">
                  Apologética, pureza y sexualidad bíblica, vocación, servicio, pertenencia, desarrollo de talentos y testimonio cristiano.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-purple-400">Etapa E</div>
                <h4 className="text-sm font-bold text-white">Juventud</h4>
                <div className="text-[11px] text-amber-400 font-mono">[PENDIENTE_DEFINIR]</div>
                <p className="text-xs text-slate-300">
                  Transición a la vida adulta, estudios, trabajo, noviazgo con propósito, mayordomía, Escuela de Discípulos y liderazgo.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                Protocolo de Transición hacia la Vida Adulta
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                El paso del ministerio juvenil a la congregación general es un proceso formativo gradual. Los jóvenes mayores son integrados paulatinamente a las Familias de Grupo adultas, cursos formales de Escuela de Discípulos (REN-DOC-007) y responsabilidades ministeriales, sin crear rupturas ni exigir requisitos artificiales no institucionales.
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: SALVAGUARDAS & DOS ADULTOS */}
        {activeTab === "salvaguardas" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                  <Lock className="w-4 h-4" />
                  Regla Innegociable de Dos Adultos
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Nunca debe encontrarse un adulto a solas con un menor en un aula, oficina, vehículo o rincón sin visibilidad directa. Toda sesión de enseñanza, ensayo, consejería pastoral o actividad requiere siempre la presencia simultánea de al menos dos servidores habilitados o puertas transparentes con supervisión continua.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <Smile className="w-4 h-4" />
                  Límites de Contacto Físico Pastoral
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  El afecto pastoral debe ser visible, apropiado para la edad y respetuoso de la dignidad del menor (chocar manos, palmadas en el hombro, abrazos breves y públicos). Queda estrictamente prohibido sentar menores en el regazo, masajes, besos en la boca o cualquier contacto en zonas cubiertas por traje de baño.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                  <PhoneCall className="w-4 h-4" />
                  Ruta de Denuncia Obligatoria & 911
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ante sospecha fundada, relato o evidencia de abuso físico, emocional, sexual o negligencia grave, prevalece la seguridad. Queda terminantemente prohibido usar mediaciones internas, oración o sigilo pastoral para ocultar un delito. Se debe activar de inmediato la notificación a las autoridades civiles y servicios de emergencia (911).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  <Heart className="w-4 h-4" />
                  Consejería Pastoral y Límites de Competencia
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Los líderes juveniles ofrecen orientación espiritual, pero no son psicólogos clínicos, psiquiatras ni médicos. Casos de ideación suicida, depresión severa, trastornos alimentarios o violencia doméstica deben derivarse formalmente a profesionales de la salud y autoridades competentes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: FAMILIA & AUTORIZACIONES */}
        {activeTab === "padres" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  Consentimiento Parental Informado
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ningún menor puede participar en salidas, viajes, campamentos, transporte ministerial o bautismos sin la autorización firmada de sus padres o tutores legales (REN-FORM-IJ-002 y REN-FORM-IJ-004).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  Gestión Segura de Medicamentos
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Los servidores no pueden recetar ni administrar medicamentos de forma informal. Toda condición médica, alergia o medicación crónica debe registrarse en la ficha médica con receta original y autorización escrita previa.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  <Users className="w-4 h-4" />
                  Transporte Eclesiástico Seguro
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Se prohíbe el traslado de un menor a solas con un único conductor adulto. Los vehículos deben contar con pólizas de seguro vigentes y los conductores deben estar formalmente autorizados (REN-FORM-IJ-005).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CAMPAMENTOS & COMUNICACIÓN */}
        {activeTab === "campamentos" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Compass className="w-4 h-4" />
                  Distribución Segura de Dormitorios en Campamentos
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  En retiros y campamentos rige la separación estricta de cabañas/habitaciones por sexo biológico. Queda terminantemente prohibido que adultos compartan cama con menores o que un servidor duerma a solas en una habitación con un menor no emparentado.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <Lock className="w-4 h-4" />
                  Comunicación Digital Institucional y Redes
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Se prohíben chats privados secretos o individuales entre adultos y menores vía WhatsApp, Instagram u otras plataformas. Toda comunicación grupal debe incluir a padres o al menos a dos servidores adultos habilitados.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: 12 FORMULARIOS OFICIALES */}
        {activeTab === "formularios" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <FileSpreadsheet className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300 leading-relaxed">
                Catálogo institucional de los <strong className="text-white">12 Formularios Oficiales</strong> del Ministerio Infantil y Juvenil. En esta fase los formularios se encuentran <span className="text-emerald-400 font-mono">CATALOGADOS OFICIALMENTE</span> para preservar la estructura institucional.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CHILDREN_YOUTH_FORMS_CATALOG.map((form) => (
                <div
                  key={form.code}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-mono text-[11px] font-bold">
                      {form.code}
                    </span>
                    <span className="text-[10px] text-slate-500">{form.frequency}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{form.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {form.purpose}
                  </p>
                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Responsable: {form.responsibleRole}</span>
                    <span className="font-mono text-emerald-400">{form.retentionCategory}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: TRAZABILIDAD & PENDIENTES */}
        {activeTab === "trazabilidad" && (
          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Decisiones Institucionales Históricas Vinculadas
              </h3>
              <p className="text-xs text-slate-400">
                El Manual de Ministerio Infantil y Juvenil (REN-DOC-016) se fundamenta estrictamente en decisiones históricas preexistentes sin inventar identificadores:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-sky-400 font-bold">DEC-DEF-001:</span> Declaración de Fe y 20 Artículos Doctrinales.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-sky-400 font-bold">DEC-DEF-004:</span> Plena igualdad ministerial y ordenación de la mujer.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-sky-400 font-bold">DEC-DEF-005:</span> Modelo eclesiológico de Familias de Grupo.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-sky-400 font-bold">DEC-DEF-010:</span> Sistema de Formación y Escuela de Discípulos.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-sky-400 font-bold">DEC-DEF-011:</span> Escuela de Líderes y Capacitación Ministerial.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-sky-400 font-bold">DEC-DEF-013:</span> Código de Ética y Salvaguarda de Menores.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-sky-400 font-bold">DEC-DEF-019:</span> Manual de Protección, Salvaguardas y Regla de Dos Adultos.
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-amber-400 font-bold">DEC-PEND-010:</span> Protocolos específicos de verificación de antecedentes y salvaguardas legales.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/60 border border-amber-500/20 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  Cláusulas PENDIENTE_DEFINIR
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Se registran formalmente como pendientes de resolución por los órganos de gobierno: rangos etarios cuantitativos exactos, periodicidad exacta de capacitaciones y recertificaciones, y plazos de conservación documental.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/60 border border-red-500/20 space-y-3">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-xs uppercase tracking-wider">
                  <Scale className="w-4 h-4" />
                  Cláusulas REQUIERE_REVISION_LEGAL
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Requieren dictamen de asesoría jurídica colegiada en la jurisdicción aplicable: verificación de antecedentes penales (background checks), pólizas de seguro de transporte y campamentos, consentimientos médicos, derechos de imagen y privacidad de datos de menores.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
