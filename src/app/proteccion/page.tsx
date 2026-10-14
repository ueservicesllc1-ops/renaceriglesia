"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  AlertTriangle,
  FileText,
  Scale,
  Users,
  Building2,
  HeartHandshake,
  Lock,
  ExternalLink,
  ChevronRight,
  BookOpen,
  PhoneCall,
  UserCheck,
  Eye,
  Car,
  ClipboardList,
  Flame,
  Stethoscope,
  Laptop,
  CheckCircle2,
  UserX,
  Search,
} from "lucide-react";
import {
  SAFETY_MANUAL_DRAFT,
  SAFETY_FORMS_CATALOG,
} from "@/lib/safety-manual-full-draft";

export default function ProteccionPage() {
  const [activeTab, setActiveTab] = useState<
    "principios" | "titulos" | "protocolos" | "denuncias" | "emergencias" | "formularios" | "trazabilidad"
  >("principios");
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  const selectedTitle = SAFETY_MANUAL_DRAFT.titles[selectedTitleIndex];

  const filteredTitles = SAFETY_MANUAL_DRAFT.titles.filter(
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
                <span className="px-2.5 py-1 rounded bg-rose-600/20 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                  {SAFETY_MANUAL_DRAFT.documentNumber}
                </span>
                <span className="text-xs text-slate-400">Versión {SAFETY_MANUAL_DRAFT.version} • NIVEL 4 MANUAL INSTITUCIONAL</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">
                {SAFETY_MANUAL_DRAFT.title}
              </h1>
              <p className="text-slate-400 text-sm max-w-3xl mt-1">
                Marco normativo institucional eclesiástico de salvaguardas, prevención de abusos, regla de dos adultos, protección de menores y personas vulnerables, consejería pastoral, confidencialidad responsable, protocolos de emergencia médica/física, denuncias y preservación probatoria.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/documentos/REN-DOC-014"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium transition-colors shadow-lg shadow-rose-600/20"
              >
                <BookOpen className="w-4 h-4" />
                Ver Manual Completo (REN-DOC-014)
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Banner de Principio Incondicional */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/40 via-red-900/20 to-slate-900 border border-rose-500/30 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="text-xs md:text-sm text-rose-200/90 leading-relaxed">
              <strong className="text-rose-300 font-semibold">PRINCIPIO FUNDAMENTAL INCONDICIONAL:</strong> La dignidad de la persona humana creada a imagen de Dios y su seguridad física, emocional y espiritual prevalecen sobre toda consideración de jerarquía, conveniencia institucional o celo ministerial. <strong className="text-white">Ninguna doctrina, liderazgo, confidencialidad pastoral, mediación o procedimiento interno puede utilizarse para ocultar un presunto delito, impedir una denuncia o intimidar a una víctima.</strong>
            </div>
          </div>
        </div>

        {/* Navegación por Pestañas */}
        <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab("principios")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "principios"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            Principios & Salvaguardas
          </button>

          <button
            onClick={() => setActiveTab("titulos")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "titulos"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <FileText className="w-4 h-4" />
            32 Títulos Normativos (128 Artículos)
          </button>

          <button
            onClick={() => setActiveTab("protocolos")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "protocolos"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            Protocolos Operativos
          </button>

          <button
            onClick={() => setActiveTab("denuncias")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "denuncias"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            Ruta de Denuncia (10 Pasos)
          </button>

          <button
            onClick={() => setActiveTab("emergencias")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "emergencias"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            Emergencias Médicas y Físicas
          </button>

          <button
            onClick={() => setActiveTab("formularios")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "formularios"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            12 Formularios Oficiales
          </button>

          <button
            onClick={() => setActiveTab("trazabilidad")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
              activeTab === "trazabilidad"
                ? "bg-rose-600 text-white shadow-md shadow-rose-600/20"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
            }`}
          >
            <Scale className="w-4 h-4" />
            Trazabilidad & Parámetros
          </button>
        </div>

        {/* Tab 1: Principios & Salvaguardas */}
        {activeTab === "principios" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <UserX className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Tolerancia Cero al Abuso</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Incompatibilidad absoluta con cualquier forma de abuso físico, abuso sexual, explotación, abuso emocional grave, intimidación, manipulación espiritual o represalias contra denunciantes de buena fe.
                </p>
                <div className="text-xs text-rose-400/90 font-mono">Título III • Arts. 9 al 12</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Regla de Dos Adultos</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Estándar institucional que prohíbe el aislamiento intencional a solas de un adulto con un menor en aulas, vehículos o salas cerradas. Visibilidad abierta en ventanas y puertas.
                </p>
                <div className="text-xs text-blue-400/90 font-mono">Título V • Arts. 17 al 20</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Confidencialidad Responsable</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  El secreto pastoral no es absoluto. Cesa de inmediato ante sospecha fundada de abuso a menores, violencia, riesgo inminente de daño físico, o mandatos judiciales obligatorios.
                </p>
                <div className="text-xs text-purple-400/90 font-mono">Título VIII • Arts. 29 al 32</div>
              </div>
            </div>

            {/* Matriz de Deslinde y Límites Pastorales */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-rose-400" />
                Límites Estrictos de la Autoridad Pastoral y Ministerial
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-rose-400 uppercase">Sin Intrusión Profesional</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ningún ministro puede presentarse como médico, psiquiatra, psicólogo clínico, abogado o perito criminal si no posee la licencia civil correspondiente.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-amber-400 uppercase">Sin Coerción Espiritual</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Queda estrictamente prohibido usar la frase «Dios me dijo» o profecías personales para imponer decisiones sobre dinero, matrimonio, trabajo o salud.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-blue-400 uppercase">No Inmunidad Jerárquica</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Ningún cargo, incluido el Pastor Fundador, ostenta inmunidad ante reportes de presunto abuso o delitos. Nadie es juez exclusivo de su propia causa.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase">Primacía del Auxilio Civil</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    La oración jamás se utiliza como sustituto obligatorio del 911, paramédicos, tratamiento médico hospitalario o intervención policial ante delitos.
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
            <div className="lg:col-span-4 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  placeholder="Buscar en títulos o artículos..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="max-h-[600px] overflow-y-auto space-y-1.5 pr-1">
                {filteredTitles.map((t) => {
                  const originalIndex = SAFETY_MANUAL_DRAFT.titles.findIndex(
                    (orig) => orig.romanNumeral === t.romanNumeral
                  );
                  return (
                    <button
                      key={t.romanNumeral}
                      onClick={() => setSelectedTitleIndex(originalIndex)}
                      className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between ${
                        selectedTitleIndex === originalIndex
                          ? "bg-rose-600/15 border-rose-500 text-white shadow-sm"
                          : "bg-slate-900/40 border-slate-800/80 text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="text-[10px] font-mono text-rose-400 font-bold uppercase">
                          TÍTULO {t.romanNumeral}
                        </div>
                        <div className="text-xs font-semibold truncate text-slate-200">
                          {t.title}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 shrink-0 text-slate-500" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visualizador del Título Seleccionado */}
            <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-mono font-bold text-rose-400 uppercase">
                  TÍTULO {selectedTitle.romanNumeral}
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  {selectedTitle.title}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedTitle.description}
                </p>
                <span className="text-xs text-rose-400/80 font-mono mt-2 inline-block">
                  {selectedTitle.articles.length} Artículos normativos reglamentados
                </span>
              </div>

              <div className="space-y-6">
                {selectedTitle.articles.map((art) => (
                  <div
                    key={art.number}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-rose-400">
                        Artículo {art.number}. {art.title}
                      </span>
                    </div>
                    <div className="space-y-2 text-xs md:text-sm text-slate-300 leading-relaxed">
                      {art.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Protocolos Operativos */}
        {activeTab === "protocolos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-rose-400 font-bold">
                <Eye className="w-5 h-5" />
                Protección de Menores (Escuela Infantil y Juvenil)
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Check-in y check-out mediante credencial o código de entrega única a padres/tutores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Aulas con ventanas despejadas o puertas entreabiertas sin pestillos internos inaccesibles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Acompañamiento a baños en parejas de adultos sin ingresar a cubículos privados salvo auxilio asistido.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-blue-400 font-bold">
                <HeartHandshake className="w-5 h-5" />
                Límites en Oración y Contacto Físico
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Imposición de manos limitada estrictamente a cabeza, hombros o manos, en espacio visible y con consentimiento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Prohibición terminante de contacto físico en zonas íntimas o de carácter sugestivo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>En oración por menores, presencia obligatoria de padres, tutores o dos obreros capacitados.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-purple-400 font-bold">
                <Laptop className="w-5 h-5" />
                Salvaguardas en Canales Digitales y Redes Sociales
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Prohibición de chats privados individuales uno-a-uno entre adultos y menores sin copia o conocimiento de tutores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Grupos de mensajería (WhatsApp) administrados por canales institucionales con dos líderes adultos designados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Cero tolerancia al envío o recepción de material explícito, sexual o inapropiado.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-amber-400 font-bold">
                <Car className="w-5 h-5" />
                Transporte y Actividades Fuera del Edificio
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Autorización escrita firmada previa por padres/tutores para toda salida, campamento o excursión.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Conductores mayores con licencia vigente y seguro vehicular; prohibido transportar a un menor a solas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Separación estricta de dormitorios por sexo biológico y supervisión de cabañas/habitaciones.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: Ruta de Denuncia */}
        {activeTab === "denuncias" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                Procedimiento Institucional de Denuncia y Trámite en 10 Pasos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { paso: "Paso 1", titulo: "Recepción Inmediata del Reporte", desc: "Acogida del reporte por canales formales (REN-FORM-SAFE-001/003) sin revictimización ni descalificación." },
                  { paso: "Paso 2", titulo: "Escucha Activa y Protección Inicial", desc: "Entrevista en ambiente privado y seguro, garantizando apoyo emocional y medidas de contención." },
                  { paso: "Paso 3", titulo: "Salvaguarda Física de la Víctima", desc: "Prioridad a la seguridad física y psicológica inmediata; cese de cualquier contacto con el señalado." },
                  { paso: "Paso 4", titulo: "Documentación Rigurosa de Hechos", desc: "Registro cronológico, detallado y fidedigno sin emitir juicios precipitados ni alterar declaraciones." },
                  { paso: "Paso 5", titulo: "No Investigación Policial Amateur", desc: "Prohibición de realizar pesquisas clandestinas, interrogatorios hostiles o confrontaciones indebidas." },
                  { paso: "Paso 6", titulo: "Determinación de Deber de Denuncia", desc: "Verificación de obligaciones legales de notificación conforme a la legislación aplicable del Estado de NJ." },
                  { paso: "Paso 7", titulo: "Notificación a Autoridades Competentes", desc: "Llamado inmediato a líneas de protección infantil (CPS/DYFS) o cuerpos policiales cuando corresponda." },
                  { paso: "Paso 8", titulo: "Activación de Medidas Preventivas Internas", desc: "Separación temporal de funciones de servicio del señalado como medida cautelar sin prejuzgamiento." },
                  { paso: "Paso 9", titulo: "Preservación Estricta de Evidencia", desc: "Custodia inalterada de mensajes, correos, registros físicos, videos o testimonios documentados." },
                  { paso: "Paso 10", titulo: "Acompañamiento y Cierre Administrativo", desc: "Seguimiento pastoral y psicológico profesional a los afectados y archivo confidencial formal." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-rose-400 uppercase">{item.paso}</span>
                    </div>
                    <div className="text-xs font-bold text-white">{item.titulo}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-rose-400 uppercase tracking-wider">
                Garantía Absoluta contra Represalias
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Toda persona que presente un reporte de buena fe goza de plena protección institucional. Queda terminantemente prohibido imponer sanciones, remover privilegios de membresía, iniciar procesos disciplinarios intimidatorios o ejercer marginación social contra quien denuncie presuntos abusos o riesgos.
              </p>
            </div>
          </div>
        )}

        {/* Tab 5: Emergencias Médicas y Físicas */}
        {activeTab === "emergencias" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-red-400 font-bold">
                <Stethoscope className="w-5 h-5" />
                Emergencias Médicas y Asistencia Sanitaria
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Ante cualquier desvanecimiento, traumatismo grave, paro cardiorrespiratorio o crisis médica, la prioridad absoluta es la llamada al sistema de emergencias <strong className="text-white">911</strong>.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>La interrupción del servicio o culto es mandataria si la atención de la emergencia lo requiere.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>Provisión de primeros auxilios y uso de DEA/botiquines dentro del nivel de capacitación disponible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>Notificación inmediata a familiares y registro en REN-FORM-SAFE-004.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3 text-amber-400 font-bold">
                <Flame className="w-5 h-5" />
                Emergencias Físicas, Incendios y Evacuación
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Protocolo estandarizado de respuesta ante incendios, escapes de gas, amenazas climáticas severas o situaciones de riesgo estructural.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Activación de alarmas y evacuación ordenada hacia el Punto de Encuentro Seguro exterior.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Prioridad de evacuación de las aulas infantiles guiadas por maestros y ujieres designados.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Cooperación irrestricta con el cuerpo de bomberos y autoridades civiles.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 6: 12 Formularios Oficiales */}
        {activeTab === "formularios" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Catálogo de Formularios de Seguridad y Salvaguardas</h3>
                <p className="text-xs text-slate-400">Padrón normativo oficial de 12 formularios documentales reglamentados en REN-DOC-014</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-rose-600/20 text-rose-400 border border-rose-500/30 text-xs font-mono font-bold">
                12 Formularios Catalogados
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SAFETY_FORMS_CATALOG.map((f) => (
                <div key={f.code} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-400">{f.code}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">{f.frequency}</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-1">{f.title}</div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{f.purpose}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Responsable: <strong className="text-slate-400">{f.responsibleRole}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 7: Trazabilidad & Parámetros */}
        {activeTab === "trazabilidad" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Parámetros Pendientes de Definir */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <AlertTriangle className="w-5 h-5" />
                  Parámetros Marcados [PENDIENTE_DEFINIR]
                </div>
                <p className="text-xs text-slate-400">
                  Parámetros cuantitativos y temporales que no han sido formalmente legislados por el Pastor Fundador ni el Consejo:
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold">•</span>
                    <span>Frecuencia obligatoria de capacitaciones en salvaguardas (anual / semestral / bienal).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold">•</span>
                    <span>Duración de certificados de acreditación y renovación de voluntarios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold">•</span>
                    <span>Ratio numérico exacto de supervisor/niño por grupo etario en campamentos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold">•</span>
                    <span>Plazos cuantitativos de retención documental en el archivo institucional (coordinado con REN-DOC-019).</span>
                  </li>
                </ul>
              </div>

              {/* Asuntos que Requieren Revisión Legal */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-rose-400 font-bold">
                  <Scale className="w-5 h-5" />
                  Materias Marcadas [REQUIERE_REVISION_LEGAL]
                </div>
                <p className="text-xs text-slate-400">
                  Aspectos jurídicos subordinados a la legislación del Estado de New Jersey y leyes federales:
                </p>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-mono font-bold">•</span>
                    <span>Estatuto de Mandatory Reporting y alcance de líneas de protección infantil (DYFS/CPS).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-mono font-bold">•</span>
                    <span>Formularios de consentimiento informado, waivers de responsabilidad civil y autorizaciones de transporte.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-mono font-bold">•</span>
                    <span>Pólizas de seguro de responsabilidad civil general y vehicular aplicables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-mono font-bold">•</span>
                    <span>Verificación de antecedentes penales (Background Checks) y privacidad de registros sensibles.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Matriz de Decisiones Históricas Utilizadas */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white">
                Decisiones Institucionales Base Aplicadas
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-rose-400 font-bold">DEC-DEF-001</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Autoridad Doctrinal y Pastoral</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-rose-400 font-bold">DEC-DEF-004</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Veto Pastoral Constitucional</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-rose-400 font-bold">DEC-DEF-005</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Separación de Consejos</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-rose-400 font-bold">DEC-DEF-010</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Modelo de Células y Discipulado</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-rose-400 font-bold">DEC-DEF-011</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Integridad Ministerial y Transparencia</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-rose-400 font-bold">DEC-DEF-013</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Seguridad y Salvaguardas en Ministerios</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-rose-400 font-bold">DEC-DEF-019</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Custodia y Archivo Documental</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="font-mono text-amber-400 font-bold">DEC-PEND-010</span>
                  <p className="text-slate-400 text-[11px] mt-0.5">Regulaciones Específicas de Salvaguardas</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
