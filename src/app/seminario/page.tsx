"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDocuments } from "@/context/DocumentContext";
import { AcademicBookViewer } from "@/components/academic/AcademicBookViewer";
import {
  GraduationCap,
  BookOpen,
  Layers,
  Sparkles,
  Award,
  ScrollText,
  FileText,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Calendar,
  Users,
  ChevronRight,
  ExternalLink,
  BookMarked,
  Flame,
  HeartHandshake,
  Workflow,
  ClipboardList
} from "lucide-react";
import {
  SEMINARY_LEVELS_DATA,
  SEMINARY_CURRICULAR_MATRIX,
  SEMINARY_COMPETENCY_MATRIX,
  SEMINARY_FUTURE_FORMS_CATALOG,
} from "@/lib/seminary-program-full-draft";

export default function SeminarioPage() {
  const { documents } = useDocuments();
  const [activeTab, setActiveTab] = useState<"programa" | "niveles" | "matrices" | "gestion" | "visor_libros">("programa");

  // Buscar documentos académicos en el estado
  const teacherDoc = documents.find(
    (d) => d.academicMetadata?.editionType === "LIBRO_MAESTRO"
  );
  const studentDoc = documents.find(
    (d) => d.academicMetadata?.editionType === "LIBRO_ALUMNO"
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#131d33] via-[#0f172a] to-[#090f1d] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono px-3 py-1 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 font-black text-sm">
              REN-DOC-009
            </span>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              SEMINARIO BÍBLICO RENACER • v0.1
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
              EN_REDACCION
            </span>
          </div>

          <Link
            href="/documentos/REN-DOC-009"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition shadow-lg shadow-purple-900/30"
          >
            <ScrollText className="w-4 h-4" />
            <span>Ver Documento Completo REN-DOC-009</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Programa Oficial del Seminario Bíblico RENACER
        </h1>
        <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
          Institución superior de educación teológica y capacitación ministerial de RENACER CHURCH. 
          Diseñado en <strong>1 año lectivo mínimo, 4 niveles formativos, 12 módulos mensuales (104 clases anuales)</strong>, 
          con arquitectura de Libros del Maestro y del Estudiante, matriz de 14 competencias y proyecto de graduación.
        </p>

        {/* Resumen Métricas Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Duración Oficial</p>
            <p className="text-base font-bold text-white">1 Año Mínimo (12 Meses)</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Niveles & Módulos</p>
            <p className="text-base font-bold text-white">4 Niveles • 12 Módulos</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Régimen de Clases</p>
            <p className="text-base font-bold text-white">104 Clases (2 por semana)</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Libros Independientes</p>
            <p className="text-base font-bold text-white">12 Maestro / 12 Alumno</p>
          </div>
        </div>
      </div>

      {/* Tabs de Navegación */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("programa")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "programa"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Workflow className="w-4 h-4" />
          <span>Arquitectura & Mapa Ministerial</span>
        </button>

        <button
          onClick={() => setActiveTab("niveles")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "niveles"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Los 4 Niveles & 12 Módulos</span>
        </button>

        <button
          onClick={() => setActiveTab("matrices")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "matrices"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <ClipboardList className="w-4 h-4" />
          <span>Matriz Curricular & Competencias</span>
        </button>

        <button
          onClick={() => setActiveTab("gestion")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "gestion"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Admisión, Docentes & Formularios</span>
        </button>

        <button
          onClick={() => setActiveTab("visor_libros")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "visor_libros"
              ? "bg-purple-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Visor de Libros Académicos</span>
        </button>
      </div>

      {/* Contenido de Tabs */}
      {activeTab === "programa" && (
        <div className="space-y-6">
          {/* Delimitación & Mapa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#101728] border border-purple-500/30 space-y-4">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                <Compass className="w-5 h-5 text-purple-400" />
                <span>MAPA FORMATIVO MINISTERIAL</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                El Seminario Bíblico RENACER se inserta en el mapa ministerial formal:
              </p>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
                <p className="text-blue-400">1. ESCUELA DE DISCÍPULOS (REN-DOC-007 — 9 meses)</p>
                <p className="pl-4 text-slate-500">↓</p>
                <p className="text-emerald-400">2. ESCUELA DE LÍDERES (REN-DOC-008 — 6 meses)</p>
                <p className="pl-4 text-slate-500">↓</p>
                <p className="text-purple-400 font-bold">3. SEMINARIO BÍBLICO RENACER (REN-DOC-009 — 1 año mínimo)</p>
                <p className="pl-4 text-slate-500">↓</p>
                <p className="text-amber-400">4. CANDIDATO MINISTERIAL</p>
                <p className="pl-4 text-slate-500">↓</p>
                <p className="text-amber-400">5. MINISTRO LICENCIADO (REN-DOC-010)</p>
                <p className="pl-4 text-slate-500">↓</p>
                <p className="text-amber-400">6. MINISTRO ORDENADO (REN-DOC-010)</p>
                <p className="pl-4 text-slate-500">↓</p>
                <p className="text-amber-400">7. PASTOR (Nombramiento oficial)</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#101728] border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>DELIMITACIÓN INSTITUCIONAL & NO ORDENACIÓN AUTOMÁTICA</span>
              </div>
              <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                <p>
                  <strong>SÍ proporciona:</strong> Formación teológica superior, exégesis bíblica, 
                  neumatología bíblica, homilética, cuidado pastoral y liderazgo ético.
                </p>
                <p className="p-3 rounded-xl bg-red-950/30 border border-red-800/40 text-red-200">
                  <strong>NO confiere automáticamente:</strong> Licencia ministerial, ordenación pastoral, 
                  credencial clerical ni cargo de pastor. La credencialización es un proceso distinto regulado 
                  exclusivamente por <strong>REN-DOC-010</strong>.
                </p>
                <p>
                  <strong>Inclusión Plena de Mujeres:</strong> El Seminario está abierto a hombres y mujeres 
                  sin distinción de sexo en todo el trayecto académico.
                </p>
                <p>
                  <strong>Límites de Consejería:</strong> El ministro no sustituye a médicos, psicólogos ni 
                  abogados. Es obligatoria la derivación profesional oportuna.
                </p>
              </div>
            </div>
          </div>

          {/* Arquitectura de 13 componentes por clase */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Estructura Oficial de Cada Clase (13 Componentes Obligatorios)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-xs">
              {[
                "1. Código",
                "2. Título",
                "3. Objetivo",
                "4. Texto Bíblico",
                "5. Introducción",
                "6. Desarrollo",
                "7. Explicación",
                "8. Aplicación",
                "9. Preguntas",
                "10. Actividad",
                "11. Tarea",
                "12. Evaluación",
                "13. Bibliografía",
              ].map((comp, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-center font-semibold text-slate-300">
                  {comp}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "niveles" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SEMINARY_LEVELS_DATA.map((lvl) => (
              <div key={lvl.levelId} className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-purple-600/30 text-purple-300 font-bold border border-purple-500/40">
                    NIVEL {lvl.levelNumber}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{lvl.duration}</span>
                </div>
                <h3 className="text-base font-bold text-white">{lvl.levelTitle}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{lvl.objective}</p>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Módulos del Nivel:</p>
                  {lvl.modules.map((m) => (
                    <div key={m.code} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-cyan-400">{m.code}</span>
                        <span className="text-xs text-slate-400">{m.classesCount} clases</span>
                      </div>
                      <h4 className="text-xs font-bold text-white">{m.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{m.theme}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "matrices" && (
        <div className="space-y-8">
          {/* Matriz Curricular */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-cyan-400" />
              Matriz Curricular Oficial (12 Módulos)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-300 border-collapse">
                <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Nivel</th>
                    <th className="p-3">Código</th>
                    <th className="p-3">Módulo</th>
                    <th className="p-3">Objetivos</th>
                    <th className="p-3">Competencias</th>
                    <th className="p-3">Práctica</th>
                    <th className="p-3">Evaluación</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {SEMINARY_CURRICULAR_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50">
                      <td className="p-3 font-semibold text-purple-400">{row.nivel}</td>
                      <td className="p-3 font-mono font-bold text-cyan-400">{row.codigo}</td>
                      <td className="p-3 font-bold text-white">{row.modulo}</td>
                      <td className="p-3 text-slate-300">{row.objetivos}</td>
                      <td className="p-3 text-slate-300">{row.competencias}</td>
                      <td className="p-3 text-slate-400">{row.practica}</td>
                      <td className="p-3 text-slate-400">{row.evaluacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Matriz de Competencias */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-400" />
              Matriz de las 14 Competencias Ministeriales Institucionales
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-300 border-collapse">
                <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Competencia</th>
                    <th className="p-3">Nivel I</th>
                    <th className="p-3">Nivel II</th>
                    <th className="p-3">Nivel III</th>
                    <th className="p-3">Nivel IV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {SEMINARY_COMPETENCY_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-white">{row.competencia}</td>
                      <td className="p-3 text-slate-300">{row.nivel1}</td>
                      <td className="p-3 text-slate-300">{row.nivel2}</td>
                      <td className="p-3 text-slate-300">{row.nivel3}</td>
                      <td className="p-3 text-slate-300">{row.nivel4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === "gestion" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                Requisitos Institucionales de Admisión
              </h3>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4">
                <li>Profesión sincera de fe en Jesucristo y bautismo en agua por inmersión.</li>
                <li>Membresía activa en plena comunión en RENACER CHURCH (REN-DOC-005).</li>
                <li>Haber completado la Escuela de Discípulos (REN-DOC-007) y Escuela de Líderes (REN-DOC-008).</li>
                <li>Testimonio moral intachable y evidencia clara de llamado ministerial.</li>
                <li>Recomendación escrita de su pastor de área y aprobación de entrevista vocacional.</li>
                <li>Aceptación irrestricta de la Declaración de Fe (REN-DOC-001) y orden normativo.</li>
                <li><strong>Excepciones:</strong> Reservadas al Pastor Fundador, debiendo quedar documentadas en expediente.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                Perfil Docente & Proyecto Final de Graduación
              </h3>
              <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <p>
                  <strong>Docentes:</strong> Ministros ordenados o teólogos con grado comprobado, 
                  testimonio irreprochable y fidelidad absoluta a REN-DOC-001. Nombrados por el Pastor Fundador y Consejo Ministerial.
                </p>
                <p>
                  <strong>Proyecto Final (SEM-L4-M03):</strong> El estudiante debe diseñar y defender un 
                  plan de plantación eclesial o revitalización ministerial integral que demuestre exégesis bíblica, 
                  homilética, ética y liderazgo antes de recibir el <em>Certificado de Finalización</em>.
                </p>
              </div>
            </div>
          </div>

          {/* Catálogo de Formularios */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              Catálogo de los 10 Formularios Académicos Oficiales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SEMINARY_FUTURE_FORMS_CATALOG.map((f) => (
                <div key={f.code} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold whitespace-nowrap">
                    {f.code}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{f.name}</h4>
                    <p className="text-[11px] text-slate-400">{f.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "visor_libros" && (
        <div className="space-y-6">
          {teacherDoc || studentDoc ? (
            <AcademicBookViewer
              teacherBookDoc={teacherDoc}
              studentBookDoc={studentDoc}
              subjectName={teacherDoc?.academicMetadata?.subjectName || "Teología Sistemática I"}
              subjectCode={teacherDoc?.academicMetadata?.subjectCode || "SBR-TEO-101"}
              levelName="Nivel 1 — Fundamentos Bíblicos"
            />
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#101728] border border-purple-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <span>12 LIBROS DEL MAESTRO (Independientes)</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Incluyen fundamentación doctrinal y teológica completa, respuestas modelo, 
                    recomendaciones pedagógicas de aula, rúbricas analíticas y criterios de calificación.
                  </p>
                </div>

                <div className="grid-cols-1 p-6 rounded-2xl bg-[#101728] border border-cyan-500/30 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                    <span>12 LIBROS DEL ESTUDIANTE (Independientes)</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Incluyen desarrollo de lecciones, ejercicios de aplicación práctica, textos bíblicos de estudio, 
                    tareas semanales y espacios de trabajo reflexivo.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
