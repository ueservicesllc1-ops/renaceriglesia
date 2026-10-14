"use client";

import React from "react";
import { DoctrinalAdoptionRecord } from "@/types/adoption";
import { ShieldCheck, FileCheck, Award, Lock } from "lucide-react";

interface AdoptionActTemplateProps {
  record?: DoctrinalAdoptionRecord;
}

export const AdoptionActTemplate: React.FC<AdoptionActTemplateProps> = ({ record }) => {
  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-[#0d1424] border border-amber-500/30 shadow-2xl text-slate-200 space-y-8 font-sans">
      {/* Encabezado Institucional */}
      <div className="text-center space-y-2 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Award className="w-4 h-4" />
          <span>RENACER CHURCH, INC. • PATERSON, NEW JERSEY</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
          RESOLUCIÓN MINISTERIAL DE ADOPCIÓN DOCTRINAL
        </h1>
        <p className="text-xs text-slate-400 font-mono">
          Expediente: <span className="text-amber-300 font-bold">{record?.adoptionRecordId || "EXP-DOC-2026-001"}</span> •{" "}
          Resolución: <span className="text-amber-300 font-bold">{record?.resolutionNumber || "[PENDIENTE DE SESIÓN]"}</span>
        </p>
      </div>

      {/* Visto y Considerando */}
      <div className="space-y-4 text-xs leading-relaxed text-slate-300">
        <div>
          <strong className="text-white uppercase font-mono tracking-wider">VISTO:</strong>
          <p className="mt-1">
            El Expediente Institucional contentivo de la <strong>Declaración de Fe y Doctrina de RENACER CHURCH</strong> (Versión {record?.candidateVersion || "1.0"}), integrado por los 20 Artículos Fundamentales de Fe.
          </p>
        </div>

        <div>
          <strong className="text-white uppercase font-mono tracking-wider">CONSIDERANDO:</strong>
          <ul className="list-disc list-inside mt-1 space-y-1.5 opacity-90">
            <li>Que las Sagradas Escrituras constituyen la única norma suprema, infalible e inerrante de fe y conducta para RENACER CHURCH.</li>
            <li>Que se ha completado la Revisión Bíblica Exegética y Editorial conforme a los protocolos institucionales de la iglesia.</li>
            <li>Que el Pastor Fundador ha ratificado las decisiones teológicas en ejercicio de su autoridad espiritual fundacional.</li>
            <li>Que se ha generado el sello de integridad criptográfica SHA-256 para custodiar la inmutabilidad del documento.</li>
          </ul>
        </div>
      </div>

      {/* Cuerpo Resolutivo */}
      <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 text-xs leading-relaxed">
        <h3 className="font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>PARTE RESOLUTIVA:</span>
        </h3>
        <p>
          <strong>ARTÍCULO PRIMERO: ADOPTAR</strong> oficialmente como <strong>DECLARACIÓN DE FE Y DOCTRINA OFICIAL DE RENACER CHURCH</strong> el contenido íntegro y los 20 Artículos de Fe de la versión {record?.candidateVersion || "1.0"}.
        </p>
        <p>
          <strong>ARTÍCULO SEGUNDO: DECLARAR</strong> su vigencia inmediata para toda la congregación, ministros, líderes, escuelas y el Seminario Bíblico RENACER.
        </p>
        <p>
          <strong>ARTÍCULO TERCERO: ORDENAR</strong> su custodia inmutable y permanente en el archivo digital central del sistema <strong>RENACER CHURCH MAESTRO</strong>.
        </p>
      </div>

      {/* Sello de Integridad SHA-256 */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Lock className="w-4 h-4 text-emerald-400" />
          <span>Sello Criptográfico SHA-256:</span>
        </div>
        <span className="text-amber-300 font-bold truncate max-w-md">
          {record?.documentDigestSha256 || "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"}
        </span>
      </div>

      {/* Protocolo de Firmas */}
      <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-xs">
        <div className="space-y-2">
          <div className="h-16 border-b border-dashed border-slate-700 flex items-end justify-center pb-1">
            <span className="text-slate-500 font-mono italic">
              {record?.founderSignature ? `[FIRMADO DIGITALMENTE POR: ${record.founderSignature.signerName}]` : "[Firma del Pastor Fundador]"}
            </span>
          </div>
          <p className="font-bold text-white">Luis Uchubanda Falconí</p>
          <p className="text-[11px] text-amber-400/90 font-semibold">Pastor Fundador • RENACER CHURCH, INC.</p>
        </div>

        <div className="space-y-2">
          <div className="h-16 border-b border-dashed border-slate-700 flex items-end justify-center pb-1">
            <span className="text-slate-500 font-mono italic">
              {record?.certifyingSignature ? `[FIRMADO DIGITALMENTE POR: ${record.certifyingSignature.signerName}]` : "[Firma del Ministro Certificador]"}
            </span>
          </div>
          <p className="font-bold text-white">
            {record?.certifyingSignature?.signerName || "[Nombre del Secretario / Ministro Certificador]"}
          </p>
          <p className="text-[11px] text-slate-400 font-semibold">Secretario de Actas / Ministro Certificador</p>
        </div>
      </div>
    </div>
  );
};
