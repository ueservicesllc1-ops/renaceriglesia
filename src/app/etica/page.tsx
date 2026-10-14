"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  FileText,
  Scale,
  Users,
  Lock,
  HeartHandshake,
  CheckCircle2,
  DollarSign,
  UserCheck,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import {
  MINISTERIAL_ETHICS_DRAFT,
  ETHICS_TITLES_DATA,
  ETHICS_FORMS_CATALOG,
} from "@/lib/ministerial-ethics-code-full-draft";

export default function EticaPage() {
  const [activeTab, setActiveTab] = useState<
    "titulos" | "salvaguardas" | "finanzas" | "proceso" | "formularios"
  >("titulos");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);

  const selectedTitle = ETHICS_TITLES_DATA[selectedTitleIndex];

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
                <span className="px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold">
                  {MINISTERIAL_ETHICS_DRAFT.documentNumber}
                </span>
                <span className="text-xs text-slate-400">Versión {MINISTERIAL_ETHICS_DRAFT.version} • NIVEL 4 MANUAL INSTITUCIONAL</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {MINISTERIAL_ETHICS_DRAFT.title}
              </h1>
              <p className="text-slate-400 text-sm max-w-3xl mt-1">
                Normativa institucional que consagra los más altos estándares bíblicos, morales, relacionales y operativos para ministros, pastores, líderes, docentes y servidores de RENACER CHURCH.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/documentos/REN-DOC-011"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-600/20"
              >
                <BookOpen className="w-4 h-4" />
                Ver Documento Completo
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Banner de Estado Legal */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-900 border border-amber-500/30 flex items-start gap-3">
            <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 font-semibold">ADVERTENCIA INSTITUCIONAL Y ESTADO LEGAL:</strong> Este documento se encuentra en estado <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-300">REQUIERE_REVISION_LEGAL</code> y <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-300">NO_ADOPTADA</code>. No constituye aún normativa vinculante civil ni eclesiástica formal hasta la resolución solemne del Pastor Fundador y el dictamen letrado colegiado.
            </div>
          </div>
        </div>

        {/* Métricas y Pilares Fundamentales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-blue-400">
              <Shield className="w-6 h-6" />
              <span className="text-xs font-mono bg-blue-500/10 px-2 py-0.5 rounded">28 Títulos</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Normativa Integral</div>
              <p className="text-xs text-slate-400 mt-1">Cuerpo normativo con 40 artículos operativos estructurados.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-red-400">
              <AlertCircle className="w-6 h-6" />
              <span className="text-xs font-mono bg-red-500/10 px-2 py-0.5 rounded">Tolerancia Cero</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Abuso Espiritual</div>
              <p className="text-xs text-slate-400 mt-1">Prohibición estricta de coacción profética ("Dios me dijo") y venganzas de púlpito.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-emerald-400">
              <HeartHandshake className="w-6 h-6" />
              <span className="text-xs font-mono bg-emerald-500/10 px-2 py-0.5 rounded">N.J.S.A. 9:6-8.10</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Protección Infantil</div>
              <p className="text-xs text-slate-400 mt-1">Reporte mandatorio a autoridades; sin secreto pastoral ante delitos.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-purple-400">
              <FileText className="w-6 h-6" />
              <span className="text-xs font-mono bg-purple-500/10 px-2 py-0.5 rounded">10 Formularios</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Serie REN-FORM-ETH</div>
              <p className="text-xs text-slate-400 mt-1">Instrumentos para adhesión, conflictos de interés y debido proceso.</p>
            </div>
          </div>
        </div>

        {/* Pestañas de Navegación */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("titulos")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "titulos"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Títulos Normativos ({ETHICS_TITLES_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab("salvaguardas")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "salvaguardas"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Salvaguardas y Protección
          </button>
          <button
            onClick={() => setActiveTab("finanzas")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "finanzas"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Integridad Patrimonial y Conflictos
          </button>
          <button
            onClick={() => setActiveTab("proceso")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "proceso"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Debido Proceso y Restauración
          </button>
          <button
            onClick={() => setActiveTab("formularios")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "formularios"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Formularios Oficiales ({ETHICS_FORMS_CATALOG.length})
          </button>
        </div>

        {/* Contenido de las Pestañas */}
        {activeTab === "titulos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Lista de Títulos */}
            <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-2">
              {ETHICS_TITLES_DATA.map((t, idx) => (
                <button
                  key={t.titleNumber}
                  onClick={() => setSelectedTitleIndex(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all flex items-start justify-between gap-2 ${
                    selectedTitleIndex === idx
                      ? "bg-blue-950/40 border-blue-500 text-white"
                      : "bg-slate-900/50 border-slate-800/80 text-slate-300 hover:bg-slate-900 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <div className="text-xs font-mono font-bold text-blue-400">
                      {t.titleNumber}
                    </div>
                    <div className="text-sm font-medium leading-snug mt-0.5 line-clamp-1">
                      {t.titleName}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 shrink-0 mt-1" />
                </button>
              ))}
            </div>

            {/* Detalle del Título Seleccionado */}
            <div className="lg:col-span-8 p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold">
                  {selectedTitle.titleNumber}
                </span>
                <h2 className="text-xl font-bold text-white mt-2">
                  {selectedTitle.titleName}
                </h2>
                <p className="text-sm text-slate-400 mt-1 italic">
                  {selectedTitle.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-3 text-xs text-slate-400">
                  <span><strong>Decisiones:</strong> {selectedTitle.decisions.join(", ")}</span>
                  <span>•</span>
                  <span><strong>Superiores:</strong> {selectedTitle.superiorDocRefs.join(", ")}</span>
                </div>
              </div>

              <div className="space-y-4">
                {selectedTitle.articles.map((art) => (
                  <div key={art.number} className="p-4 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-blue-300">
                        Artículo {art.number}. {art.title}
                      </h3>
                      {art.requiresLegalReview && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Revisión Legal
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {art.content}
                    </p>
                    <div className="text-xs text-slate-500 font-mono">
                      Decisiones de respaldo: [{art.decisionRefs.join(", ")}]
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "salvaguardas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white">Prohibición de Abuso Espiritual</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                El Código de Ética (TÍTULO VI) tipifica como falta gravísima cualquier intento de controlar la vida íntima, económica o conyugal de los miembros mediante manipulación profética ("Dios me dijo"), amenazas de castigo divino o aislamiento de redes familiares.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                <li>Prohibición de venganzas privadas desde el púlpito.</li>
                <li>Prohibición de control de finanzas o decisiones médicas privadas.</li>
                <li>Protección irrestricta a informantes de buena fe.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-emerald-400">
                <Shield className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white">Protección a Menores (N.J.S.A. 9:6-8.10)</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Conforme al TÍTULO VIII, la seguridad infantil tiene prioridad absoluta. Rige la <strong>Regla de Dos Adultos Capacitados</strong> en toda actividad y la obligación de denuncia inmediata ante el 1-877-NJ-ABUSE y autoridades policiales.
              </p>
              <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-xs text-red-300">
                <strong>INAPLICABILIDAD DEL SECRETO PASTORAL:</strong> El sigilo ministerial no puede ser invocado jamás para ocultar delitos o abusos contra menores.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <Users className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white">Límites de Consejería Pastoral</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                El ministro pastoral no sustituye a médicos, psiquiatras, psicólogos clínicos ni abogados. Ante ideación suicida, cuadros clínicos graves o patologías, existe el deber ético e inexcusable de derivación a facultativos habilitados.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-purple-400">
                <Sparkles className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white">Plena Igualdad de Hombres y Mujeres</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                El TÍTULO XXIII ratifica que hombres y mujeres están sujetos al mismo estándar ético y cuentan con igual derecho al ejercicio del ministerio, docencia, liderazgo, ordenación y pastorado conforme a las Escrituras.
              </p>
            </div>
          </div>
        )}

        {activeTab === "finanzas" && (
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Mayordomía, Patrimonio y Conflictos de Interés</h3>
              <p className="text-sm text-slate-400 mt-1">
                Regulaciones consagradas en los Títulos XI, XII, XIII y XIV de REN-DOC-011 en armonía con los Bylaws de RENACER CHURCH, INC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <DollarSign className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Propiedad Corporativa</h4>
                <p className="text-xs text-slate-400">
                  Todos los diezmos, ofrendas y activos pertenecen exclusivamente a RENACER CHURCH, INC. Se prohíbe el desvío a cuentas personales o el enriquecimiento privado indebido.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <Scale className="w-5 h-5 text-blue-400" />
                <h4 className="text-sm font-bold text-white">Deber de Revelación</h4>
                <p className="text-xs text-slate-400">
                  Cualquier interés comercial, contrato con familiares o negocio potencial debe declararse formalmente vía REN-FORM-ETH-002, debiendo el implicado abstenerse de votar.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-white">Prohibición de Cohecho</h4>
                <p className="text-xs text-slate-400">
                  Queda prohibido solicitar préstamos forzados, dádivas o favores valiéndose de la posición pastoral para alterar decisiones eclesiásticas.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "proceso" && (
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Régimen de 10 Etapas de Denuncias y Debido Proceso</h3>
              <p className="text-sm text-slate-400 mt-1">
                Garantías procesales institucionales bajo el principio bíblico de 1 Timoteo 5:19 y Mateo 18 (TÍTULO XXIII y XXIV).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { step: "1", title: "Recepción", desc: "Presentación escrita formal con testigos o pruebas." },
                { step: "2", title: "Registro", desc: "Inscripción en REN-FORM-ETH-003/004 confidencial." },
                { step: "3", title: "Medida Cautelar", desc: "Separación preventiva ante riesgo grave." },
                { step: "4", title: "Admisibilidad", desc: "Evaluación previa de mérito y verosimilitud." },
                { step: "5", title: "Notificación", desc: "Traslado formal de cargos al imputado." },
                { step: "6", title: "Descargos", desc: "Derecho a comparecer y aportar pruebas." },
                { step: "7", title: "Deliberación", desc: "Instrucción formal del Consejo Ministerial." },
                { step: "8", title: "Dictamen", desc: "Elevación de conclusiones al Pastor Fundador." },
                { step: "9", title: "Resolución", desc: "Emisión de acta en REN-FORM-ETH-007." },
                { step: "10", title: "Ejecución", desc: "Archivo confidencial (REN-DOC-019) y disciplina." },
              ].map((s) => (
                <div key={s.step} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">
                    Etapa {s.step}
                  </span>
                  <div className="text-xs font-bold text-white">{s.title}</div>
                  <p className="text-[11px] text-slate-400 leading-tight">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-300 leading-relaxed">
              <strong>PRINCIPIO SUPREMO DE RESTAURACIÓN:</strong> El perdón espiritual restaura la comunión de fe pero <strong>NO confiere restitución automática al oficio pastoral</strong>. Toda reintegración exige tiempo prudencial, fruto observable y anuencia del Pastor Fundador sin poner en riesgo a las víctimas.
            </div>
          </div>
        )}

        {activeTab === "formularios" && (
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white">Catálogo de Formularios de Ética y Salvaguardas</h3>
              <p className="text-sm text-slate-400 mt-1">
                Serie oficial REN-FORM-ETH-001 a REN-FORM-ETH-010 para la gestión del expediente ético ministerial.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2.5 px-3">Código</th>
                    <th className="py-2.5 px-3">Nombre del Formulario</th>
                    <th className="py-2.5 px-3">Propósito</th>
                    <th className="py-2.5 px-3">Ocasión</th>
                    <th className="py-2.5 px-3">Custodia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {ETHICS_FORMS_CATALOG.map((f) => (
                    <tr key={f.code} className="hover:bg-slate-800/30">
                      <td className="py-2.5 px-3 font-mono font-bold text-blue-400">{f.code}</td>
                      <td className="py-2.5 px-3 font-medium text-white">{f.name}</td>
                      <td className="py-2.5 px-3 text-slate-300">{f.purpose}</td>
                      <td className="py-2.5 px-3 text-slate-400">{f.frequencyOrTrigger}</td>
                      <td className="py-2.5 px-3 text-slate-400 font-mono">{f.custodyDoc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
