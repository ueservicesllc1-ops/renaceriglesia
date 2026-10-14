"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flame,
  AlertTriangle,
  FileText,
  Scale,
  Users,
  Heart,
  Droplets,
  Wine,
  Sparkles,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Shield,
  Cross,
  Clock,
  Compass,
} from "lucide-react";
import {
  CEREMONIES_MANUAL_DRAFT,
  CEREMONIES_TITLES_DATA,
  CEREMONIES_FORMS_CATALOG,
} from "@/lib/ceremonies-manual-full-draft";

export default function CeremoniasPage() {
  const [activeTab, setActiveTab] = useState<
    "titulos" | "ordenanzas" | "actos" | "guiones" | "formularios"
  >("ordenanzas");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);

  const selectedTitle = CEREMONIES_TITLES_DATA[selectedTitleIndex];

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
                  {CEREMONIES_MANUAL_DRAFT.documentNumber}
                </span>
                <span className="text-xs text-slate-400">Versión {CEREMONIES_MANUAL_DRAFT.version} • NIVEL 4 MANUAL INSTITUCIONAL</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {CEREMONIES_MANUAL_DRAFT.title}
              </h1>
              <p className="text-slate-400 text-sm max-w-3xl mt-1">
                Manual operativo institucional que norma la liturgia, ordenanzas bíblicas de Jesucristo y actos pastorales sagrados de RENACER CHURCH, delimitando el rito espiritual de los efectos jurídicos civiles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/documentos/REN-DOC-012"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-600/20"
              >
                <BookOpen className="w-4 h-4" />
                Ver Manual Completo
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Banner de Estado Legal */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-900 border border-amber-500/30 flex items-start gap-3">
            <Scale className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 font-semibold">ADVERTENCIA LITÚRGICA Y ESTADO LEGAL:</strong> Este manual permanece en estado <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-300">REQUIERE_REVISION_LEGAL</code> y <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-300">NO_ADOPTADA</code>. Ninguna ceremonia eclesiástica confiere efectos civiles vinculantes hasta que se cumplan las leyes de New Jersey y el dictamen letrado colegiado.
            </div>
          </div>
        </div>

        {/* Métricas y Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-blue-400">
              <Droplets className="w-6 h-6" />
              <span className="text-xs font-mono bg-blue-500/10 px-2 py-0.5 rounded">2 Ordenanzas</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Bautismo y Santa Cena</div>
              <p className="text-xs text-slate-400 mt-1">Inmersión de creyentes y Cena conmemorativa / comunión espiritual.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-purple-400">
              <Heart className="w-6 h-6" />
              <span className="text-xs font-mono bg-purple-500/10 px-2 py-0.5 rounded">10 Actos</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Liturgias Pastorales</div>
              <p className="text-xs text-slate-400 mt-1">Matrimonios (hombre-mujer), presentación de niños, funerales y unción.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-emerald-400">
              <Sparkles className="w-6 h-6" />
              <span className="text-xs font-mono bg-emerald-500/10 px-2 py-0.5 rounded">1 Cor 14:40</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Dones con Orden</div>
              <p className="text-xs text-slate-400 mt-1">Fluir carismático con discernimiento, decencia y subordinación bíblica.</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
            <div className="flex items-center justify-between text-amber-400">
              <FileText className="w-6 h-6" />
              <span className="text-xs font-mono bg-amber-500/10 px-2 py-0.5 rounded">12 Formularios</span>
            </div>
            <div className="mt-3">
              <div className="text-xl font-bold text-white">Serie REN-FORM-CER</div>
              <p className="text-xs text-slate-400 mt-1">Actas notariales eclesiásticas y libros de registro (REN-DOC-019).</p>
            </div>
          </div>
        </div>

        {/* Pestañas de Navegación */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("ordenanzas")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "ordenanzas"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Ordenanzas Bíblicas (2)
          </button>
          <button
            onClick={() => setActiveTab("actos")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "actos"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Actos Litúrgicos y Pastorales
          </button>
          <button
            onClick={() => setActiveTab("titulos")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "titulos"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Títulos Normativos ({CEREMONIES_TITLES_DATA.length})
          </button>
          <button
            onClick={() => setActiveTab("guiones")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "guiones"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Estructura de Guiones
          </button>
          <button
            onClick={() => setActiveTab("formularios")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === "formularios"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            Formularios y Actas ({CEREMONIES_FORMS_CATALOG.length})
          </button>
        </div>

        {/* Contenido de Pestañas */}
        {activeTab === "ordenanzas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bautismo */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <Droplets className="w-7 h-7" />
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase">Ordenanza I</span>
                  <h3 className="text-lg font-bold text-white">Bautismo en Agua por Inmersión</h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Instituido por Jesucristo en Mateo 28:19. Se administra exclusivamente a personas que hayan profesado fe personal y completado la preparación básica. Se realiza por <strong>inmersión total</strong> en la fórmula trinitaria.
              </p>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">Fórmula Trinitaria:</strong> "En el Nombre del Padre, y del Hijo, y del Espíritu Santo".
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">Exclusiones Doctrinales:</strong> Queda excluido el bautismo de infantes o personas sin uso de razón.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">Documentación:</strong> Solicitud (REN-FORM-CER-001) y Acta Notarial (REN-FORM-CER-002).
                </div>
              </div>
            </div>

            {/* Santa Cena */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-red-400">
                <Wine className="w-7 h-7" />
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase">Ordenanza II</span>
                  <h3 className="text-lg font-bold text-white">Santa Cena del Señor</h3>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Instituida por el Señor en 1 Corintios 11:23-26 como memorial sagrado y comunión espiritual. Los elementos del pan y del fruto de la vid son símbolos conmemorativos del sacrificio expiatorio en la cruz.
              </p>
              <div className="space-y-2 text-xs text-slate-400">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">No Transustanciación:</strong> Se rechaza la transformación física de los elementos; se afirma la comunión espiritual.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">Participantes:</strong> Creyentes bautizados en plena comunión espiritual tras autoexamen de conciencia.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">Frecuencia:</strong> Periodicidad litúrgica sujeta a definición pastoral [PENDIENTE_DEFINIR].
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "actos" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
                <Heart className="w-4 h-4" /> Matrimonio Cristiano
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pacto sagrado exclusivo entre un hombre y una mujer (Génesis 2:24). Requiere consejería prematrimonial y licencia civil previa de New Jersey.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Formularios: REN-FORM-CER-006 / 007</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Users className="w-4 h-4" /> Presentación de Niños
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicación pastoral y compromiso familiar (Lucas 2:22). No constituye bautismo ni confiere regeneración automática.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Formularios: REN-FORM-CER-004 / 005</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-slate-300 font-bold text-sm">
                <Cross className="w-4 h-4" /> Funerales y Memoriales
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Acompañamiento en el duelo y proclamación de la resurrección en Cristo (1 Tesalonicenses 4), sin juicios tajantes sobre destinos eternos.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Formularios: REN-FORM-CER-008</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" /> Oración por Enfermos
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Oración de fe bíblica. Se prohíbe culpar al enfermo, garantizar milagros automáticos o inducir a suspender tratamientos médicos.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Flame className="w-4 h-4" /> Unción con Aceite
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ministración conforme a Santiago 5:14-15. El aceite de oliva es símbolo del Espíritu Santo sin atributos mágicos ni superstición.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Formularios: REN-FORM-CER-009</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                <Compass className="w-4 h-4" /> Envío y Comisionamiento
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Imposición de manos y envío de misioneros y plantadores según Hechos 13:2-3. No constituye de por sí contrato laboral civil.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Formularios: REN-FORM-CER-012</div>
            </div>
          </div>
        )}

        {activeTab === "titulos" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-2">
              {CEREMONIES_TITLES_DATA.map((t, idx) => (
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

        {activeTab === "guiones" && (
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Estructura Estandarizada de Guiones Litúrgicos</h3>
              <p className="text-sm text-slate-400 mt-1">
                TÍTULO XXVII y XXVIII: Flexibilidad pastoral con rigor doctrinal en 12 componentes estandarizados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { step: "1", name: "Propósito", desc: "Fundamento bíblico del acto litúrgico." },
                { step: "2", name: "Preparación", desc: "Requisitos y verificación previa." },
                { step: "3", name: "Responsable", desc: "Ministro u oficiante habilitado." },
                { step: "4", name: "Elementos", desc: "Agua, pan, vino, aceite o anillos." },
                { step: "5", name: "Orden Sugerido", desc: "Secuencia litúrgica reverente." },
                { step: "6", name: "Textos Bíblicos", desc: "Pasajes canónicos de lectura." },
                { step: "7", name: "Declaraciones", desc: "Votos y compromisos ministeriales." },
                { step: "8", name: "Oración", desc: "Bendición y consagración pastoral." },
                { step: "9", name: "Participación", desc: "Intervención de la congregación." },
                { step: "10", name: "Registro", desc: "Suscripción de actas oficiales." },
                { step: "11", name: "Salvaguardas", desc: "Protección de menores y seguridad." },
                { step: "12", name: "Límites Legales", desc: "Separación religiosa vs civil." },
              ].map((g) => (
                <div key={g.step} className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400">
                    Fase {g.step}
                  </span>
                  <div className="text-xs font-bold text-white">{g.name}</div>
                  <p className="text-[11px] text-slate-400 leading-tight">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "formularios" && (
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white">Catálogo de Formularios y Actas Litúrgicas</h3>
              <p className="text-sm text-slate-400 mt-1">
                Serie oficial REN-FORM-CER-001 a REN-FORM-CER-012 para el registro y archivo eclesiástico (REN-DOC-019).
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
                  {CEREMONIES_FORMS_CATALOG.map((f) => (
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
