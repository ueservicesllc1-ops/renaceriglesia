"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  AlertTriangle,
  Scale,
  BookOpen,
  ExternalLink,
  Search,
  Globe,
  Users,
  Building2,
  ShieldCheck,
  DollarSign,
  FileSpreadsheet,
  Layers,
  HeartHandshake,
  CheckCircle2,
  UserCheck,
  Plane,
  Heart,
} from "lucide-react";
import {
  MISSIONS_MANUAL_DRAFT,
  MISSIONS_FORMS_CATALOG,
} from "@/lib/missions-manual-full-draft";

export default function MisionesPage() {
  const [activeTab, setActiveTab] = useState<
    "principios" | "titulos" | "plantacion" | "envio" | "seguridad" | "finanzas" | "formularios" | "trazabilidad"
  >("principios");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  const selectedTitle = MISSIONS_MANUAL_DRAFT.titles[selectedTitleIndex];

  const filteredTitles = MISSIONS_MANUAL_DRAFT.titles.filter(
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
                <span className="px-2.5 py-1 rounded bg-teal-600/20 text-teal-400 border border-teal-500/30 text-xs font-mono font-bold">
                  {MISSIONS_MANUAL_DRAFT.documentNumber}
                </span>
                <span className="text-xs text-slate-400">
                  Versión {MISSIONS_MANUAL_DRAFT.version} • NIVEL 4 MANUAL INSTITUCIONAL
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {MISSIONS_MANUAL_DRAFT.title}
              </h1>
              <p className="text-slate-400 text-sm max-w-3xl mt-1">
                Marco normativo institucional para el evangelismo local y digital, discipulado de nuevos creyentes, plantación de obras, tipología congregacional, procesos de envío, comisionamiento, supervisión, seguridad, finanzas misioneras, salvaguardas y cooperación eclesial.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/documentos/REN-DOC-015"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium transition-colors shadow-lg shadow-teal-600/20"
              >
                <BookOpen className="w-4 h-4" />
                Ver Manual Completo (REN-DOC-015)
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Banner de Principio Misionero */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/40 via-cyan-900/20 to-slate-900 border border-teal-500/30 flex items-start gap-3">
            <Compass className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-teal-200/90 leading-relaxed">
              <span className="font-semibold text-teal-300">
                Principio Fundamental de Expansión Eclesiológica:
              </span>{" "}
              La expansión de RENACER es espiritual, ministerial y organizacional. No consiste en una mera suma de eventos o multiplicación territorial desprovista de doctrina, carácter y salvaguardas. La meta es{" "}
              <span className="text-white font-medium">formar discípulos que formen a otros discípulos</span> (Mateo 28:18-20; 2 Timoteo 2:2), bajo el gobierno legítimo pastoral y la titularidad patrimonial exclusiva de{" "}
              <span className="text-white font-medium">RENACER CHURCH, INC.</span>, sin constituir una denominación jerárquica.
            </div>
          </div>
        </div>

        {/* Navegación por pestañas */}
        <div className="border-b border-slate-800 flex overflow-x-auto gap-2 pb-px">
          {[
            { id: "principios", label: "Visión & Principios", icon: Globe },
            { id: "titulos", label: "Estructura Normativa (32 Títulos)", icon: Layers },
            { id: "plantacion", label: "Plantación & Tipos de Obra", icon: Building2 },
            { id: "envio", label: "Misioneros & Proceso de Envío", icon: Plane },
            { id: "seguridad", label: "Seguridad & Salvaguardas", icon: ShieldCheck },
            { id: "finanzas", label: "Finanzas & Mayordomía", icon: DollarSign },
            { id: "formularios", label: "12 Formularios Misioneros", icon: FileSpreadsheet },
            { id: "trazabilidad", label: "Trazabilidad & Decisiones", icon: HeartHandshake },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? "border-teal-500 text-teal-300 bg-teal-500/10"
                    : "border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Contenido según pestaña */}
        {activeTab === "principios" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">La Gran Comisión Integral</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Obediencia activa a Mateo 28:18-20, Marcos 16:15 y Hechos 1:8. El ciclo misionero abarca: Evangelizar, Discipular, Formar, Enviar, Plantar, Multiplicar y Servir integralmente a la comunidad.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Seguimiento Pastoral No Invasivo</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ruta pastoral de 10 pasos para consolidar nuevos creyentes: contacto inicial, registro voluntario, acogida, Grupo Familiar, Escuela de Discípulos, Bautismo, Membresía y Servicio, sin violar la privacidad familiar.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Plantación Ordenada de Obras</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ruta de 10 etapas desde la visión y evaluación de candidatos hasta la congregación establecida. Ninguna obra nace como entidad jurídica independiente sin autorización formal expresa.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Subordinación a Salvaguardas</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Articulación estricta con REN-DOC-014: Regla de Dos Adultos en misiones con menores, verificación de antecedentes, consentimiento parental firmado y prohibición de relajar normas de protección.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Finanzas y Titularidad Única</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Todos los fondos misioneros pertenecen a RENACER CHURCH, INC. Se prohíbe el uso de cuentas bancarias personales para recaudar dinero institucional. Ofrendas misioneras con destinación específica.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-base">Igualdad Ministerial y Ética</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Plena participación de mujeres en misiones, evangelismo, plantación y liderazgo (REN-DOC-001). Acción humanitaria desinteresada sin condicionar la ayuda física a la conversión religiosa.
              </p>
            </div>
          </div>
        )}

        {activeTab === "titulos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lista lateral de Títulos */}
            <div className="lg:col-span-4 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Buscar títulos o artículos..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="max-h-[600px] overflow-y-auto space-y-1.5 pr-1">
                {filteredTitles.map((t) => {
                  const realIndex = MISSIONS_MANUAL_DRAFT.titles.findIndex(
                    (orig) => orig.romanNumeral === t.romanNumeral
                  );
                  const isSelected = selectedTitleIndex === realIndex;
                  return (
                    <button
                      key={t.romanNumeral}
                      onClick={() => setSelectedTitleIndex(realIndex)}
                      className={`w-full text-left p-3 rounded-lg border transition-all text-xs ${
                        isSelected
                          ? "bg-teal-500/15 border-teal-500/40 text-teal-200"
                          : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-[10px] text-teal-400 mb-1">
                        <span>{t.romanNumeral}</span>
                        <span className="text-slate-500">{t.articles.length} arts.</span>
                      </div>
                      <div className="font-medium text-slate-200 truncate">{t.title}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detalle del Título seleccionado */}
            <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-xl p-6 space-y-6">
              {selectedTitle && (
                <>
                  <div className="border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
                      <span>{selectedTitle.romanNumeral}</span>
                      <span>•</span>
                      <span>{selectedTitle.articles.length} Artículos Normativos</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">{selectedTitle.title}</h2>
                    <p className="text-xs text-slate-400 mt-1">{selectedTitle.description}</p>
                  </div>

                  <div className="space-y-4">
                    {selectedTitle.articles.map((art) => (
                      <div
                        key={art.number}
                        className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-semibold text-xs md:text-sm text-teal-300">
                            Artículo {art.number}. {art.title}
                          </span>
                          <div className="flex flex-wrap items-center gap-1.5">
                            {art.dependencies?.map((dep) => (
                              <span
                                key={dep}
                                className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-mono"
                              >
                                {dep}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                          {art.content.map((p, pIdx) => (
                            <p key={pIdx}>
                              {p.includes("[PENDIENTE_DEFINIR]") || p.includes("[REQUIERE_REVISION_LEGAL]") ? (
                                <span>
                                  {p.split(/(\[PENDIENTE_DEFINIR\]|\[REQUIERE_REVISION_LEGAL\])/g).map(
                                    (chunk, cIdx) => {
                                      if (chunk === "[PENDIENTE_DEFINIR]") {
                                        return (
                                          <span
                                            key={cIdx}
                                            className="inline-block px-1.5 py-0.5 mx-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[10px] font-semibold"
                                          >
                                            PENDIENTE_DEFINIR
                                          </span>
                                        );
                                      }
                                      if (chunk === "[REQUIERE_REVISION_LEGAL]") {
                                        return (
                                          <span
                                            key={cIdx}
                                            className="inline-block px-1.5 py-0.5 mx-1 rounded bg-red-500/20 border border-red-500/40 text-red-300 font-mono text-[10px] font-semibold"
                                          >
                                            REQUIERE_REVISION_LEGAL
                                          </span>
                                        );
                                      }
                                      return chunk;
                                    }
                                  )}
                                </span>
                              ) : (
                                p
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === "plantacion" && (
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-teal-400" />
                Ruta Oficial de Plantación de Obras (10 Etapas)
              </h3>
              <p className="text-xs text-slate-400">
                Toda nueva obra de RENACER sigue un proceso gradual, supervisado y estructurado para garantizar su arraigo doctrinal, madurez espiritual y viabilidad organizativa.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                {[
                  { step: "1", title: "Visión & Exploración", desc: "Detección de necesidad espiritual y llamado pastoral." },
                  { step: "2", title: "Evaluación Territorial", desc: "Análisis demográfico, sociocultural y espiritual del área." },
                  { step: "3", title: "Candidato Plantador", desc: "Selección de liderazgo con madurez y testimonio probado." },
                  { step: "4", title: "Formación Especializada", desc: "Capacitación eclesiológica en la Escuela de Líderes/Seminario." },
                  { step: "5", title: "Autorización Formal", desc: "Aprobación del Pastor Fundador y Consejo Ministerial." },
                  { step: "6", title: "Equipo Núcleo", desc: "Conformación del equipo inicial de servicio y apoyo." },
                  { step: "7", title: "Misión & Evangelismo", desc: "Siembra activa, alcance comunitario y células de oración." },
                  { step: "8", title: "Grupo de Conexión", desc: "Reuniones regulares como Familia de Grupo en hogares/locales." },
                  { step: "9", title: "Obra en Plantación", desc: "Reuniones públicas regulares con supervisión pastoral directa." },
                  { step: "10", title: "Congregación Establecida", desc: "Estructura pastoral completa, autogestión y reconocimiento." },
                ].map((s) => (
                  <div key={s.step} className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 font-mono text-xs flex items-center justify-center font-bold">
                        {s.step}
                      </span>
                      <span className="font-semibold text-xs text-white truncate">{s.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Clasificación Institucional de Obras (6 Tipos)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: "1. Grupo Misionero",
                    desc: "Célula inicial de oración y evangelismo bajo dependencia de una congregación madre.",
                    status: "Dependencia Total",
                  },
                  {
                    name: "2. Punto de Reunión",
                    desc: "Lugar físico o virtual autorizado para cultos y predicación periódica.",
                    status: "Supervisión Directa",
                  },
                  {
                    name: "3. Obra en Plantación",
                    desc: "Comunidad en desarrollo con liderazgo asignado y cultos semanales formales.",
                    status: "Tutoría Ministerial",
                  },
                  {
                    name: "4. Congregación RENACER",
                    desc: "Obra local con membresía activa, ministerios operativos y liderazgo pastoral establecido.",
                    status: "Sede Local",
                  },
                  {
                    name: "5. Congregación Establecida",
                    desc: "Congregación con madurez institucional, sostenibilidad y capacidad de reproducir obras.",
                    status: "Sede Madura",
                  },
                  {
                    name: "6. Obra Asociada",
                    desc: "Ministerio o iglesia en cooperación fraternal bajo acuerdo eclesial formal [REQUIERE_REVISION_LEGAL].",
                    status: "Vínculo Fraternal",
                  },
                ].map((tipo) => (
                  <div key={tipo.name} className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-teal-300">{tipo.name}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400 font-mono">
                        {tipo.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{tipo.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "envio" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-teal-400" />
                Estados Institucionales del Misionero (6 Fases)
              </h3>
              <div className="space-y-2.5">
                {[
                  { state: "MISIONERO EN FORMACIÓN", desc: "Candidato en preparación doctrinal, ministerial y de salvaguardas." },
                  { state: "MISIONERO AUTORIZADO", desc: "Candidato aprobado formalmente por la Comisión y Pastor Fundador." },
                  { state: "MISIONERO ENVIADO", desc: "Comisionado pastoralmente en ceremonia solemne (REN-DOC-012)." },
                  { state: "MISIONERO EN CAMPO", desc: "Operando activamente en el territorio con reportes periódicos de avance." },
                  { state: "MISIONERO EN RETORNO", desc: "En fase de cierre, retorno ordenado, cuidado de salud y descanso." },
                  { state: "MISIONERO FINALIZADO", desc: "Misión concluida satisfactoriamente con reporte final y evaluación." },
                ].map((s) => (
                  <div key={s.state} className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-xs font-bold text-teal-300">{s.state}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Plane className="w-5 h-5 text-cyan-400" />
                Proceso de Envío Misionero (12 Pasos)
              </h3>
              <div className="space-y-1.5">
                {[
                  "1. Presentación y llamado vocacional.",
                  "2. Solicitud formal de servicio misionero (REN-FORM-MIS-001).",
                  "3. Evaluación integral del candidato (REN-FORM-MIS-002).",
                  "4. Entrevista pastoral con la Comisión y Pastor Fundador.",
                  "5. Formación académica y salvaguardas (REN-DOC-014).",
                  "6. Formulación del Plan Misionero (REN-FORM-MIS-003).",
                  "7. Evaluación de riesgos y seguridad (REN-FORM-MIS-004).",
                  "8. Presupuesto institucional aprobado (REN-FORM-MIS-007).",
                  "9. Autorización de envío (REN-FORM-MIS-005).",
                  "10. Acto solemne de Comisionamiento (REN-FORM-MIS-006).",
                  "11. Despliegue y establecimiento en campo.",
                  "12. Supervisión continua, reportes y contacto de emergencia.",
                ].map((step, idx) => (
                  <div key={idx} className="p-2 px-3 rounded bg-slate-900 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "seguridad" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-rose-400" />
                Salvaguardas Innegociables (REN-DOC-014)
              </h3>
              <p className="text-xs text-slate-400">
                Ninguna actividad misionera nacional o internacional justificará jamás la relajación de salvaguardas.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Regla de Dos Adultos:</strong> Obligatoria en todo momento cuando participen menores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Verificación de Antecedentes:</strong> Exigida a todo el equipo misionero antes del despliegue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Consentimiento Parental Firmado:</strong> Para todo menor de edad en viajes de alcance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong>Seguro de Evacuación Médica:</strong> En misiones internacionales complejas [REQUIERE_REVISION_LEGAL].</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-purple-400" />
                Mujeres en Misiones & Ética Ministerial
              </h3>
              <p className="text-xs text-slate-400">
                Conforme a la Declaración de Fe (REN-DOC-001) y Código de Ética (REN-DOC-011):
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Plena Igualdad Ministerial:</strong> Las mujeres pueden servir como misioneras, evangelistas, pastoras y plantadoras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Acción Humanitaria Libre de Coacción:</strong> El socorro alimentario o médico jamás se condiciona a la conversión.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Prohibición de Explotación:</strong> Prohibido usar la pobreza ajena para sensacionalismo audiovisual o recaudación deshonesta.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Sin Promesas Migratorias:</strong> RENACER no promete visas, residencias ni estatus legal [REQUIERE_REVISION_LEGAL].</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "finanzas" && (
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              Mayordomía y Transparencia Financiera Misionera (REN-DOC-013)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-teal-300">Titularidad Corporativa Exclusiva</h4>
                <p className="text-slate-400 leading-relaxed">
                  Todo recurso, donación, diezmo u ofrenda misionera ingresa y pertenece a la corporación <strong>RENACER CHURCH, INC.</strong> Jamás se utilizan cuentas bancarias personales de misioneros para administrar fondos de la obra.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-teal-300">Ofrendas Misioneras Designadas</h4>
                <p className="text-slate-400 leading-relaxed">
                  Los fondos recaudados bajo la designación misionera se aplican estrictamente a la manutención aprobada, pasajes, logística, labor comunitaria y emergencias, conforme a las políticas de fondos restringidos.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-teal-300">Rendición Periódica de Cuentas</h4>
                <p className="text-slate-400 leading-relaxed">
                  Todo misionero presenta reportes financieros documentados (REN-FORM-MIS-009) con comprobantes válidos, garantizando la debida diligencia y salvaguardas fiscales [REQUIERE_REVISION_LEGAL].
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "formularios" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Catálogo de Formularios Misioneros Oficiales</h3>
                <p className="text-xs text-slate-400">Padrón de 12 instrumentos administrativos para la operatividad de REN-DOC-015</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-xs font-bold">
                12 Formularios
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MISSIONS_FORMS_CATALOG.map((f) => (
                <div key={f.code} className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-teal-400">{f.code}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                      {f.retentionCategory}
                    </span>
                  </div>
                  <h4 className="font-semibold text-xs text-white">{f.title}</h4>
                  <p className="text-[11px] text-slate-400">{f.purpose}</p>
                  <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-800/60">
                    <span className="truncate max-w-[150px]">{f.responsibleRole}</span>
                    <span>{f.frequency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "trazabilidad" && (
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-teal-400" />
                Fundamentos Bíblicos y Decisiones Históricas
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Trazabilidad completa con las decisiones fundacionales de RENACER sin alteraciones ni invenciones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-teal-300">Bases Bíblicas del Manual</h4>
                <ul className="space-y-1 text-slate-300">
                  <li>• <strong>Mateo 28:18-20:</strong> La Gran Comisión de hacer discípulos a todas las naciones.</li>
                  <li>• <strong>Marcos 16:15:</strong> Predicación universal del evangelio a toda criatura.</li>
                  <li>• <strong>Hechos 1:8:</strong> Poder del Espíritu Santo para ser testigos en toda la tierra.</li>
                  <li>• <strong>Hechos 13:1-3:</strong> Modelo del envío misionero por la iglesia local.</li>
                  <li>• <strong>Romanos 10:14-15:</strong> La necesidad de predicar y la hermosura del envío.</li>
                  <li>• <strong>Efesios 4:11-13:</strong> Equipamiento de los santos para el servicio y edificación.</li>
                  <li>• <strong>2 Timoteo 2:2:</strong> Formación y multiplicación de discípulos idóneos.</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-teal-300">Decisiones Históricas Utilizadas</h4>
                <ul className="space-y-1.5 text-slate-300">
                  <li>• <span className="font-mono text-teal-400">DEC-DEF-001:</span> Declaración de Fe y Doctrina de RENACER.</li>
                  <li>• <span className="font-mono text-teal-400">DEC-DEF-004:</span> Autonomía eclesiástica y gobierno pastoral.</li>
                  <li>• <span className="font-mono text-teal-400">DEC-DEF-005:</span> Modelo de discipulado y Familias de Grupo.</li>
                  <li>• <span className="font-mono text-teal-400">DEC-DEF-010:</span> Titularidad patrimonial exclusiva de RENACER CHURCH, INC.</li>
                  <li>• <span className="font-mono text-teal-400">DEC-DEF-011:</span> Principios éticos y conducta ministerial.</li>
                  <li>• <span className="font-mono text-teal-400">DEC-DEF-013:</span> Plena inclusión ministerial de la mujer.</li>
                  <li>• <span className="font-mono text-teal-400">DEC-DEF-019:</span> Salvaguardas, protección de menores y personas vulnerables.</li>
                  <li>• <span className="font-mono text-amber-400">DEC-PEND-010:</span> Reglas cuantitativas de apoyo económico misionero [PENDIENTE_DEFINIR].</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
