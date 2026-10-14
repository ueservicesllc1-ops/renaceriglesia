"use client";

import React, { useState } from "react";
import { DoctrinalAdoptionRecord } from "@/types/adoption";
import { useAuth } from "@/context/AuthContext";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { AdoptionActTemplate } from "./AdoptionActTemplate";
import {
  ShieldCheck,
  FileCheck,
  Award,
  Lock,
  RotateCcw,
  XCircle,
  UploadCloud,
  CheckCircle2,
  FileText,
  History,
  AlertTriangle,
} from "lucide-react";

interface AdoptionRecordViewerProps {
  record: DoctrinalAdoptionRecord;
  onAdopt?: () => void;
  onReturn?: () => void;
  onReject?: () => void;
  onPublish?: () => void;
}

export const AdoptionRecordViewer: React.FC<AdoptionRecordViewerProps> = ({
  record,
  onAdopt,
  onReturn,
  onReject,
  onPublish,
}) => {
  const { currentRole } = useAuth();
  const [activeTab, setActiveTab] = useState<"expediente" | "acta" | "auditoria">("expediente");

  const isPastorFundador = currentRole === "PASTOR_FUNDADOR";
  const isAdmin = currentRole === "ADMINISTRADOR";
  const isAdopted = record.resultingStatus === "ADOPTADO";

  return (
    <div className="space-y-6">
      {/* Header del Expediente */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#131d33] via-[#0f1b38] to-[#0a1020] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Expediente Institucional de Adopción Doctrinal</span>
              <span>•</span>
              <span className="font-mono text-slate-300">{record.adoptionRecordId}</span>
            </div>
            <h1 className="text-2xl font-black text-white mt-1">{record.documentTitle}</h1>
            <p className="text-xs text-slate-400">
              Versión Candidata: <span className="font-mono font-bold text-amber-300">{record.candidateVersion}</span> •{" "}
              Organización: <span className="text-slate-300 font-semibold">{record.organization}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <StatusBadge status={record.resultingStatus as any} size="lg" />
          </div>
        </div>

        {/* Barra de Navegación de Pestañas */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab("expediente")}
              className={`px-4 py-1.5 rounded-xl font-bold transition-all ${
                activeTab === "expediente"
                  ? "bg-brand-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Dictamen y Soporte
            </button>
            <button
              onClick={() => setActiveTab("acta")}
              className={`px-4 py-1.5 rounded-xl font-bold transition-all ${
                activeTab === "acta"
                  ? "bg-brand-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Plantilla de Acta
            </button>
            <button
              onClick={() => setActiveTab("auditoria")}
              className={`px-4 py-1.5 rounded-xl font-bold transition-all ${
                activeTab === "auditoria"
                  ? "bg-brand-600 text-white shadow-md"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Integridad y Auditoría
            </button>
          </div>

          {/* Acciones por Rol */}
          <div className="flex items-center gap-2">
            {/* Solo Pastor Fundador puede Adoptar / Devolver / Rechazar */}
            {isPastorFundador && !isAdopted && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<RotateCcw className="w-3.5 h-3.5 text-amber-400" />}
                  onClick={onReturn}
                >
                  Devolver a Revisión
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  icon={<XCircle className="w-3.5 h-3.5" />}
                  onClick={onReject}
                >
                  Rechazar
                </Button>
                <Button
                  variant="gold"
                  size="sm"
                  icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                  onClick={onAdopt}
                >
                  Aprobar y Adoptar Doctrina
                </Button>
              </>
            )}

            {/* Administrador solo puede Publicar Técnicamente si ya fue Adoptado */}
            {isAdmin && isAdopted && record.publicationStatus !== "PUBLICADO" && (
              <Button
                variant="gold"
                size="sm"
                icon={<UploadCloud className="w-3.5 h-3.5" />}
                onClick={onPublish}
              >
                Publicar Versión Adoptada
              </Button>
            )}

            {isAdmin && !isAdopted && (
              <span className="text-[11px] text-amber-300/80 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20 font-semibold flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Adopción reservada exclusivamente al Pastor Fundador</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Contenido de las Pestañas */}
      {activeTab === "expediente" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Revisión Bíblica */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" />
                <span>Revisión Bíblica (Fase 9)</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold">
                {record.biblicalReviewRef.status}
              </span>
            </div>
            <p className="text-sm font-bold text-white">
              {record.biblicalReviewRef.articlesEvaluated} Artículos Evaluados
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {record.biblicalReviewRef.summary}
            </p>
          </div>

          {/* Tarjeta 2: Ratificación de Decisiones */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Decisiones Ratificadas (Fase 11)</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] font-bold">
                {record.doctrinalDecisionsRef.status}
              </span>
            </div>
            <p className="text-sm font-bold text-white">
              {record.doctrinalDecisionsRef.ratifiedDecisionsCount} Resoluciones Aprobadas
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {record.doctrinalDecisionsRef.summary}
            </p>
          </div>

          {/* Tarjeta 3: Revisión Editorial */}
          <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>Ajustes Editoriales (Fase 13)</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] font-bold">
                {record.editorialReviewRef.status}
              </span>
            </div>
            <p className="text-sm font-bold text-white">
              {record.editorialReviewRef.correctionsAppliedCount} Correcciones Aplicadas
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {record.editorialReviewRef.summary}
            </p>
          </div>
        </div>
      )}

      {activeTab === "acta" && <AdoptionActTemplate record={record} />}

      {activeTab === "auditoria" && (
        <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 space-y-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Sello Criptográfico e Inmutabilidad</span>
          </h2>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs">
            <p className="text-slate-400">Digest SHA-256 Calculado:</p>
            <p className="text-amber-300 font-bold break-all">{record.documentDigestSha256}</p>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            🔒 <strong>Garantía de Inmutabilidad:</strong> Al ser adoptado, el sistema bloquea cualquier alteración byte a byte. Cualquier modificación futura generará obligatoriamente una nueva versión de trabajo (v1.1 o v2.0) sin destruir este registro histórico.
          </p>
        </div>
      )}
    </div>
  );
};
