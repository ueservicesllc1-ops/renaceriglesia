"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DollarSign,
  AlertTriangle,
  FileText,
  Scale,
  Users,
  Building2,
  ShieldAlert,
  CreditCard,
  PieChart,
  Landmark,
  FileSpreadsheet,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  BookOpen,
  HeartHandshake,
  Lock,
  Receipt,
  Car,
  ClipboardList,
} from "lucide-react";
import {
  FINANCES_MANUAL_DRAFT,
  FINANCIAL_FORMS_CATALOG,
} from "@/lib/finances-manual-full-draft";

export default function FinanzasPage() {
  const [activeTab, setActiveTab] = useState<
    "principios" | "titulos" | "procedimientos" | "benevolencia" | "formularios" | "trazabilidad"
  >("principios");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);

  const selectedTitle = FINANCES_MANUAL_DRAFT.titles[selectedTitleIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header con advertencia institucional */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            Borrador en Redacción — No Adoptado Oficialmente
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                  {FINANCES_MANUAL_DRAFT.documentNumber}
                </span>
                <span className="text-xs text-slate-400">Versión {FINANCES_MANUAL_DRAFT.version} • NIVEL 4 MANUAL INSTITUCIONAL</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {FINANCES_MANUAL_DRAFT.title}
              </h1>
              <p className="text-slate-400 text-sm max-w-3xl mt-1">
                Manual oficial integral que norma la mayordomía bíblica, diezmos, ofrendas voluntarias, ciclo presupuestario, tesorería corporativa, inventario de activos, compras, prevención de fraude y controles internos de RENACER CHURCH, INC.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/documentos/REN-DOC-013"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors shadow-lg shadow-emerald-600/20"
              >
                <BookOpen className="w-4 h-4" />
                Ver Manual Completo
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Banner de Estado Legal y Contable */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-900 border border-amber-500/30 flex items-start gap-3">
            <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 font-semibold">ADVERTENCIA LEGAL Y CONTABLE:</strong> Este manual permanece en estado <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-300">REQUIERE_REVISION_LEGAL</code> y <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-300">NO_ADOPTADA</code>. No sustituye la asesoría tributaria, legal o contable profesional ni representa una determinación tributaria final del IRS o del Estado de New Jersey.
            </div>
          </div>
        </div>

        {/* Resumen de Principio Fundamental */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
          <div className="flex items-center gap-3 text-emerald-400 font-semibold text-base">
            <Landmark className="w-5 h-5" />
            Principio Fundamental de Titularidad Patrimonial Institucional
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Todo fondo económico, ofrenda, diezmo, activo mueble, equipo audiovisual, vehículo, donación o bien inmueble recibido, adquirido o mantenido para las actividades de la iglesia pertenece con exclusividad a la persona jurídica corporativa de <strong className="text-white font-semibold">RENACER CHURCH, INC.</strong> (DEC-DEF-008). Ningún pastor, oficial, ministro, líder, miembro o donante ostenta titularidad ni beneficio privado privativo.
          </p>
        </div>

        {/* Navegación por Pestañas */}
        <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("principios")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "principios"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            Principios & Mayordomía
          </button>

          <button
            onClick={() => setActiveTab("titulos")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "titulos"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <FileText className="w-4 h-4" />
            32 Títulos Normativos
          </button>

          <button
            onClick={() => setActiveTab("procedimientos")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "procedimientos"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <Lock className="w-4 h-4" />
            Controles & Procedimientos
          </button>

          <button
            onClick={() => setActiveTab("benevolencia")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "benevolencia"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            Fondo de Benevolencia
          </button>

          <button
            onClick={() => setActiveTab("formularios")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "formularios"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <Receipt className="w-4 h-4" />
            15 Formularios Oficiales
          </button>

          <button
            onClick={() => setActiveTab("trazabilidad")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "trazabilidad"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            Trazabilidad & Parámetros
          </button>
        </div>

        {/* Tab 1: Principios & Mayordomía */}
        {activeTab === "principios" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Diezmos bajo Gracia</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Práctica bíblica voluntaria de honra a Dios y sostén del ministerio. Se enseña como acto de gratitud y fidelidad bajo la gracia, jamás como un tributo coercitivo ni bajo amenazas espirituales.
                </p>
                <div className="text-xs text-emerald-400/90 font-mono">Declaración de Fe (Art. 15)</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Liberalidad sin Coerción</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Ofrendas libres y alegres (2 Corintios 9:7). Queda expresamente prohibido inducir al endeudamiento para ofrendar o excluir miembros por encontrarse en situación de vulnerabilidad económica.
                </p>
                <div className="text-xs text-blue-400/90 font-mono">Código de Ética (REN-DOC-011)</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">No Beneficio Privado</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Prohibición absoluta de apropiación indebida o enriquecimiento personal (inurement). Toda compensación pastoral es aprobada por el Consejo bajo parámetros de razonabilidad y capacidad institucional.
                </p>
                <div className="text-xs text-purple-400/90 font-mono">DEC-DEF-011 • IRC § 501(c)(3)</div>
              </div>
            </div>

            {/* Matriz de Autoridades */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                Matriz de Gobierno y Competencias Financieras
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase">Pastor Fundador</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Autoridad final en decisiones financieras extraordinarias formalmente reservadas en la Constitución (inmuebles, endeudamiento mayor, veto estatutario) (DEC-DEF-004).
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-blue-400 uppercase">Consejo de Gobierno</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Administración ordinaria, formulación y supervisión del presupuesto anual, aprobación de compras corporativas y custodia del patrimonio de RENACER CHURCH, INC.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase">Consejo Ministerial</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Funciones estrictamente espirituales, doctrinales y de comunión pastoral. No asume manejo de cuentas bancarias ni firma de contratos comerciales.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-purple-400 uppercase">Tesorería & Administración</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Custodia operativa de fondos, registro en libro mayor, conciliaciones bancarias mensuales, emisión de recibos y elaboración de reportes financieros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 32 Títulos Normativos */}
        {activeTab === "titulos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lista Lateral de Títulos */}
            <div className="lg:col-span-4 space-y-2 max-h-[700px] overflow-y-auto pr-2">
              {FINANCES_MANUAL_DRAFT.titles.map((title, idx) => (
                <button
                  key={title.romanNumeral}
                  onClick={() => setSelectedTitleIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                    selectedTitleIndex === idx
                      ? "bg-emerald-600/15 border-emerald-500 text-white"
                      : "bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                    TÍTULO {title.romanNumeral}
                  </span>
                  <div className="text-xs font-medium line-clamp-2 leading-relaxed">
                    {title.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Contenido del Título Seleccionado */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                  TÍTULO {selectedTitle.romanNumeral}
                </div>
                <h2 className="text-xl font-bold text-white mt-1">
                  {selectedTitle.title}
                </h2>
                <p className="text-slate-400 text-sm italic mt-1">
                  {selectedTitle.description}
                </p>
              </div>

              <div className="space-y-4">
                {selectedTitle.articles.map((art) => (
                  <div
                    key={art.number}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-emerald-300">
                        Artículo {art.number}. {art.title}
                      </span>
                      {art.requiresLegalReview && (
                        <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 text-[10px] font-mono">
                          REVISIÓN LEGAL
                        </span>
                      )}
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                      {art.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    {art.dependencies && art.dependencies.length > 0 && (
                      <div className="text-[11px] text-slate-500 font-mono">
                        Dependencias: {art.dependencies.join(", ")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Controles & Procedimientos */}
        {activeTab === "procedimientos" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Procedimiento de Doble Conteo */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center gap-3 text-emerald-400 font-bold text-base">
                  <Users className="w-5 h-5" />
                  Protocolo de Doble Conteo de Ofrendas (DEC-DEF-008)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Para garantizar la transparencia y proteger la honra de los servidores, el conteo en efectivo de los servicios se rige por un estricto protocolo de segregación:
                </p>
                <ol className="space-y-2 text-xs text-slate-400 list-decimal list-inside leading-relaxed">
                  <li><strong className="text-slate-200">Dos Personas No Relacionadas:</strong> El conteo debe ser efectuado por mínimo dos personas sin parentesco familiar ni conyugal.</li>
                  <li><strong className="text-slate-200">Traslado Seguro Inmediato:</strong> Los sobres y alfolíes se trasladan directamente al recinto de conteo con supervisión.</li>
                  <li><strong className="text-slate-200">Acta Oficial REN-FORM-FIN-005:</strong> Desglose exacto por denominación de billetes, monedas y cheques, firmada por ambos contadores.</li>
                  <li><strong className="text-slate-200">Depósito Bancario Corporativo:</strong> Custodia en bolsa sellada y depósito en la cuenta corporativa de RENACER CHURCH, INC.</li>
                </ol>
              </div>

              {/* Ciclo Presupuestario Anual */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center gap-3 text-blue-400 font-bold text-base">
                  <PieChart className="w-5 h-5" />
                  Ciclo Presupuestario Anual (8 Fases)
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  El presupuesto anual es la herramienta rectora de planeación financiera que alinea los recursos con la misión de la iglesia:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">1. Requerimientos</div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">2. Consolidación</div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">3. Revisión Consejo</div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">4. Aprobación Fundador</div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">5. Ejecución Trimestral</div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">6. Monitoreo Mensual</div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">7. Ajustes Justificados</div>
                  <div className="p-2 rounded bg-slate-950 border border-slate-800/80">8. Cierre & Evaluación</div>
                </div>
              </div>
            </div>

            {/* Prevención de Fraude y Fondos Restringidos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center gap-3 text-red-400 font-bold text-base">
                  <ShieldAlert className="w-5 h-5" />
                  Prevención de Fraude y Canal Whistleblower
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Cero tolerancia a la apropiación de fondos, facturas apócrifas, manipulación contable o desvío de donaciones. Se establece el formulario confidencial <code className="text-red-400">REN-FORM-FIN-012</code> para denuncias protegidas, con el compromiso de no encubrimiento y cooperación con las autoridades civiles si existiere delito.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                <div className="flex items-center gap-3 text-purple-400 font-bold text-base">
                  <Lock className="w-5 h-5" />
                  Intangibilidad de Fondos Restringidos
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Las donaciones designadas para misiones, construcción o auxilio humanitario no pueden ser desviadas para cubrir gastos operativos generales. La administración lleva subcuentas contables diferenciadas conforme a normas FASB/GAAP para entidades sin fines de lucro.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Fondo de Benevolencia */}
        {activeTab === "benevolencia" && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg">
              <HeartHandshake className="w-6 h-6" />
              Fondo de Ayuda Benevolente y Asistencia Social Pastoral (TÍTULO XV)
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              El Fondo de Benevolencia es un recurso sagrado de auxilio temporal y urgente para familias y miembros de la congregación que enfrentan situaciones imprevistas de enfermedad, calamidad doméstica o desempleo sobrevenido (Gálatas 6:10).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase">Dignidad e Imparcialidad</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Evaluación objetiva de la necesidad sin favoritismos, amiguismos ni discriminación. Tratamiento bajo estricta reserva y secreto pastoral.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase">Sin Coerción Espiritual</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Queda estrictamente prohibido condicionar la ayuda a la asistencia a cultos, exigencias de diezmar, sumisión obligatoria o control de decisiones personales.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase">Pago a Proveedores</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Siempre que sea factible, el auxilio se desembolsa directamente al arrendador, farmacia, supermercado o entidad de servicios públicos para maximizar la efectividad.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-mono">Formulario Asociado:</div>
                <div className="text-sm font-semibold text-white">REN-FORM-FIN-009 — Solicitud y Evaluación de Ayuda Benevolente</div>
              </div>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                Topes [PENDIENTE_DEFINIR]
              </span>
            </div>
          </div>
        )}

        {/* Tab 5: 15 Formularios Oficiales */}
        {activeTab === "formularios" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
              Catálogo oficial de los quince (15) formularios administrativos de RENACER CHURCH, INC. Los formatos completos serán codificados e integrados en fases documentales subsiguientes.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {FINANCIAL_FORMS_CATALOG.map((form) => (
                <div
                  key={form.code}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                        {form.code}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {form.frequency}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {form.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {form.purpose}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{form.responsibleRole}</span>
                    <span className="font-mono text-emerald-400/80">{form.retentionCategory}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Trazabilidad & Parámetros */}
        {activeTab === "trazabilidad" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Decisiones Institucionales Utilizadas (0 IDs Inventados)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {FINANCES_MANUAL_DRAFT.decisionsUsed.map((dec) => (
                  <div
                    key={dec}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    {dec}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Parámetros PENDIENTE_DEFINIR
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  {FINANCES_MANUAL_DRAFT.pendingDefinitions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-blue-400 flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  Materias REQUIERE_REVISION_LEGAL/CONTABLE
                </h3>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  {FINANCES_MANUAL_DRAFT.legalReviewMatters.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
