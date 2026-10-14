"use client";

import React, { useState } from "react";
import { DoctrinalAdoptionRecord } from "@/types/adoption";
import { AdoptionRecordViewer } from "@/components/adoption/AdoptionRecordViewer";
import { executeAdoptOfficial, executePublishAdoptedVersion } from "@/lib/adoption-service";
import { useAuth } from "@/context/AuthContext";
import { calculateDocumentDigest } from "@/lib/hash-util";

// Expediente Candidato Modelo (En estado CANDIDATO_ADOPCION / BORRADOR)
const INITIAL_CANDIDATE_RECORD: DoctrinalAdoptionRecord = {
  adoptionRecordId: "EXP-DOC-2026-001",
  documentId: "REN-DOC-DECLARACION-FE",
  candidateVersion: "1.0",
  documentTitle: "Declaración de Fe y Doctrina de RENACER CHURCH",
  organization: "RENACER CHURCH, INC.",
  submittedBy: "Luis Uchubanda Falconí",
  submittedAt: "2026-09-03T00:00:00.000Z",

  biblicalReviewRef: {
    status: "COMPLETADA",
    completedAt: "2026-09-03T00:00:00.000Z",
    articlesEvaluated: 20,
    summary: "Evaluación exegética exhaustiva de 20 artículos; 19 artículos bien sustentados y 1 con desarrollo pedagógico.",
  },

  doctrinalDecisionsRef: {
    status: "COMPLETADA",
    ratifiedDecisionsCount: 4,
    summary: "Ratificación de opciones para Art. 5 (Opción A), Art. 7 (Opción A), Art. 13 (Opción A) y Art. 18 (Opción A).",
  },

  editorialReviewRef: {
    status: "COMPLETADA",
    correctionsAppliedCount: 5,
    summary: "Ajustes ortotipográficos y de maquetación en artículos 2, 3, 4, 13 y 17.",
  },

  founderRatificationRef: {
    isRatified: true,
    ratifiedAt: "2026-09-03T00:00:00.000Z",
  },

  adoptionAuthority: "PASTOR_FUNDADOR",
  adoptionDecision: "PENDIENTE",
  publicationStatus: "PENDIENTE",
  resultingStatus: "CANDIDATO_ADOPCION",
  documentDigestSha256: "8e0e0fb2e26464f1d43da2d348f98ec8198f1f13b6320d9f0f9b6b78d2b9d88a",
  auditEventIds: ["audit-fase-9", "audit-fase-10", "audit-fase-11", "audit-fase-12", "audit-fase-13"],
  createdAt: "2026-09-03T00:00:00.000Z",
  updatedAt: "2026-09-03T00:00:00.000Z",
};

export default function DoctrineAdoptionPage() {
  const { user, currentRole } = useAuth();
  const [record, setRecord] = useState<DoctrinalAdoptionRecord>(INITIAL_CANDIDATE_RECORD);
  const [notification, setNotification] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleAdopt = () => {
    const result = executeAdoptOfficial({
      actorId: user?.id || "usr-fundador-001",
      actorName: user?.displayName || "Luis Uchubanda Falconí",
      actorRole: currentRole,
      record,
      contentToAdopt: "Declaración de Fe v1.0",
      resolutionNumber: "RES-DOC-2026-001",
      effectiveDate: new Date().toISOString(),
      founderSignature: {
        signerId: user?.id || "usr-fundador-001",
        signerName: user?.displayName || "Luis Uchubanda Falconí",
        signerRole: "PASTOR_FUNDADOR",
        signedAt: new Date().toISOString(),
        declaration: "Declaro y adopto oficialmente esta Declaración de Fe para RENACER CHURCH.",
      },
      certifyingSignature: {
        signerId: "usr-sec-001",
        signerName: "Secretario de Actas / Ministro Certificador",
        signerRole: "SECRETARIO_CERTIFICADOR",
        signedAt: new Date().toISOString(),
        declaration: "Certifico la sesión y la firma del Pastor Fundador.",
      },
    });

    if (result.success && result.record) {
      setRecord(result.record);
      setNotification({ type: "success", text: "Resolución ministerial adoptada exitosamente." });
    } else {
      setNotification({ type: "error", text: result.error || "Error al adoptar." });
    }
  };

  const handleReturn = () => {
    setRecord((prev) => ({ ...prev, adoptionDecision: "DEVUELTO_REVISION", resultingStatus: "DEVUELTO_REVISION" }));
    setNotification({ type: "error", text: "Expediente devuelto a revisión." });
  };

  const handleReject = () => {
    setRecord((prev) => ({ ...prev, adoptionDecision: "RECHAZADO", resultingStatus: "RECHAZADO" }));
    setNotification({ type: "error", text: "Expediente rechazado." });
  };

  const handlePublish = () => {
    const pubResult = executePublishAdoptedVersion({
      actorId: user?.id || "usr-admin-001",
      actorName: user?.displayName || "Administrador",
      actorRole: currentRole,
      record,
      contentToPublish: "Declaración de Fe v1.0",
    });

    if (pubResult.success && pubResult.publishedRecord) {
      setRecord(pubResult.publishedRecord);
      setNotification({ type: "success", text: "Doctrina oficial publicada y sincronizada." });
    } else {
      setNotification({ type: "error", text: pubResult.error || "Error al publicar." });
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {notification && (
        <div
          className={`p-4 rounded-xl border text-xs font-bold flex items-center justify-between ${
            notification.type === "success"
              ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-300"
              : "bg-rose-950/40 border-rose-500/40 text-rose-300"
          }`}
        >
          <span>{notification.text}</span>
          <button onClick={() => setNotification(null)} className="text-slate-400 hover:text-white">✕</button>
        </div>
      )}

      <AdoptionRecordViewer
        record={record}
        onAdopt={handleAdopt}
        onReturn={handleReturn}
        onReject={handleReject}
        onPublish={handlePublish}
      />
    </div>
  );
}
