"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  ScrollText,
  FileText,
  Compass,
  CheckCircle2,
  Users,
  ExternalLink,
  Lock,
  Workflow,
  ClipboardList,
  AlertTriangle,
  Scale,
  Sparkles
} from "lucide-react";
import {
  MINISTERIAL_STATES_CATALOG,
  MINISTERIAL_FUTURE_FORMS_CATALOG,
  MINISTERIAL_AUTHORITY_MATRIX,
  FULL_MINISTERIAL_CREDENTIALS_DRAFT,
} from "@/lib/ministerial-credentials-regulations-full-draft";

export default function CredencialesPage() {
  const [activeTab, setActiveTab] = useState<"ruta" | "estados" | "autoridades" | "formularios">("ruta");
  const draft = FULL_MINISTERIAL_CREDENTIALS_DRAFT;

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Header Institucional */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#131d33] via-[#0f172a] to-[#090f1d] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono px-3 py-1 rounded-xl bg-amber-600/30 border border-amber-500/40 text-amber-300 font-black text-sm">
              REN-DOC-010
            </span>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              REGLAMENTO DE CREDENCIALES Y ORDENACIÓN • v0.1
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
              EN_REDACCION (NO ADOPTADA)
            </span>
          </div>

          <Link
            href="/documentos/REN-DOC-010"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition shadow-lg shadow-amber-900/30"
          >
            <ScrollText className="w-4 h-4" />
            <span>Ver Documento Completo REN-DOC-010</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">
          Reglamento de Credenciales Ministeriales, Licenciamiento y Ordenación de RENACER
        </h1>
        <p className="text-sm text-slate-300 max-w-4xl leading-relaxed">
          Marco normativo superior que regula el discernimiento vocacional, evaluación de candidatos, examen teológico, 
          otorgamiento de licencias, ordenación presbiteral, estados ministeriales y salvaguardas éticas de RENACER CHURCH.
        </p>

        {/* Resumen Métricas Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Ruta Ministerial</p>
            <p className="text-base font-bold text-white">7 Eslabones Oficiales</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Categorías y Estados</p>
            <p className="text-base font-bold text-white">3 Categorías • 10 Estados</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Títulos Normativos</p>
            <p className="text-base font-bold text-white">30 Títulos Oficiales</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <p className="text-xs text-slate-400">Formularios de Gestión</p>
            <p className="text-base font-bold text-white">12 Formularios (REN-FORM-MIN)</p>
          </div>
        </div>
      </div>

      {/* Tabs de Navegación */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab("ruta")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "ruta"
              ? "bg-amber-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Workflow className="w-4 h-4" />
          <span>Ruta Ministerial & Principios</span>
        </button>

        <button
          onClick={() => setActiveTab("estados")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "estados"
              ? "bg-amber-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Categorías & 10 Estados</span>
        </button>

        <button
          onClick={() => setActiveTab("autoridades")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "autoridades"
              ? "bg-amber-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Matriz de Autoridades & Salvaguardas</span>
        </button>

        <button
          onClick={() => setActiveTab("formularios")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "formularios"
              ? "bg-amber-600 text-white shadow-lg"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>12 Formularios Oficiales</span>
        </button>
      </div>

      {/* Contenido de Tabs */}
      {activeTab === "ruta" && (
        <div className="space-y-6">
          {/* Ruta Ministerial */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#101728] border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                <Compass className="w-5 h-5 text-amber-400" />
                <span>RUTA MINISTERIAL INSTITUCIONAL (7 ESLABONES)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Trayectoria secuencial y ordenada para el servicio en RENACER CHURCH:
              </p>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
                {draft.ministerialRoute.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">{idx + 1}.</span>
                    <span className={idx >= 3 ? "text-amber-200 font-semibold" : "text-slate-300"}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#101728] border border-purple-500/30 space-y-4">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-purple-400" />
                <span>PRINCIPIOS FUNDAMENTALES DE CREDENCIALIZACIÓN</span>
              </div>
              <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                <p>
                  <strong>No Auto-Ordenación:</strong> Ninguna persona puede auto-adjudicarse credenciales; 
                  toda consagración requiere examen formal y reconocimiento presbiteral.
                </p>
                <p>
                  <strong>Prohibición de Simonía:</strong> La credencial jamás podrá obtenerse mediante pago 
                  de tarifas, donaciones condicionadas o influencias económicas.
                </p>
                <p>
                  <strong>Plena Igualdad de Género:</strong> Las mujeres tienen acceso pleno e igualitario a todas 
                  las funciones, licencias, ordenaciones y asignaciones pastorales.
                </p>
                <p>
                  <strong>No Garantía Migratoria:</strong> La credencialización no garantiza visas (R-1), residencias 
                  ni beneficios de inmigración ante USCIS; se rige por el principio de realidad factual.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "estados" && (
        <div className="space-y-6">
          {/* Categorías */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {draft.categories.map((cat) => (
              <div key={cat.code} className="p-5 rounded-2xl bg-[#101728] border border-slate-800 space-y-2">
                <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-amber-600/30 text-amber-300 font-bold border border-amber-500/40">
                  {cat.code}
                </span>
                <h3 className="text-sm font-bold text-white">{cat.name}</h3>
                <p className="text-xs text-slate-300">{cat.nature}</p>
                <p className="text-[11px] text-slate-400">{cat.scope}</p>
              </div>
            ))}
          </div>

          {/* Tabla de 10 Estados */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Catálogo de los 10 Estados Institucionales del Ministro
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-300 border-collapse">
                <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Código</th>
                    <th className="p-3">Estado Institucional</th>
                    <th className="p-3">Descripción</th>
                    <th className="p-3">Facultades y Privilegios</th>
                    <th className="p-3">Restricciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {MINISTERIAL_STATES_CATALOG.map((st) => (
                    <tr key={st.stateCode} className="hover:bg-slate-900/50">
                      <td className="p-3 font-mono font-bold text-amber-400">{st.stateCode}</td>
                      <td className="p-3 font-bold text-white">{st.name}</td>
                      <td className="p-3 text-slate-300">{st.description}</td>
                      <td className="p-3 text-emerald-300">{st.privileges}</td>
                      <td className="p-3 text-slate-400">{st.restrictions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === "autoridades" && (
        <div className="space-y-6">
          {/* Matriz de Autoridades */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-cyan-400" />
              Matriz de Competencias y Límites de Autoridad Eclesiástica
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-300 border-collapse">
                <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
                  <tr>
                    <th className="p-3">Órgano / Autoridad</th>
                    <th className="p-3">Ámbito Eclesiástico</th>
                    <th className="p-3">Facultades Principales</th>
                    <th className="p-3">Restricciones y Límites</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {MINISTERIAL_AUTHORITY_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-amber-400">{row.entity}</td>
                      <td className="p-3 font-semibold text-white">{row.scope}</td>
                      <td className="p-3 text-slate-300">
                        <ul className="list-disc pl-3 space-y-1">
                          {row.powers.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="p-3 text-slate-400">
                        <ul className="list-disc pl-3 space-y-1">
                          {row.restrictions.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Salvaguardas Éticas y Legales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#101728] border border-red-900/30 space-y-3">
              <h4 className="text-sm font-bold text-red-300 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" />
                Salvaguardas de Protección Infantil (N.J.S.A. 9:6-8.10)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Todo ministro tiene el deber legal e irrenunciable de reportar de inmediato ante las autoridades policiales 
                y la línea estatal <strong>(1-877-NJ-ABUSE)</strong> cualquier sospecha de abuso a menores. La confidencialidad pastoral 
                jamás podrá ser utilizada para encubrir delitos o poner en riesgo a personas vulnerables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-400" />
                Límites Estrictos de Consejería Pastoral
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                El ministro no sustituye a profesionales médicos, psicólogos, psiquiatras ni abogados. 
                Es obligatoria la derivación profesional oportuna ante trastornos clínicos, violencia doméstica o controversias legales.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "formularios" && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              Catálogo Oficial de los 12 Formularios de Gestión Ministerial (REN-FORM-MIN)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MINISTERIAL_FUTURE_FORMS_CATALOG.map((f) => (
                <div key={f.code} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                      {f.code}
                    </span>
                    <span className="text-[10px] text-slate-400">{f.retentionPeriod}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white">{f.name}</h4>
                  <p className="text-[11px] text-slate-400">{f.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
