"use client";

import React, { useState } from "react";
import { useDocuments } from "@/context/DocumentContext";
import { DocumentViewer } from "@/components/documents/DocumentViewer";
import { DocumentEditor } from "@/components/documents/DocumentEditor";

export default function IdentidadPage() {
  const { getDocumentBySlug } = useDocuments();
  const [isEditing, setIsEditing] = useState(false);

  const doc = getDocumentBySlug("identidad-y-fundacion");

  if (!doc) {
    return (
      <div className="p-8 text-center text-slate-400">
        Documento fundacional no encontrado.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {isEditing ? (
        <DocumentEditor
          document={doc}
          onCancel={() => setIsEditing(false)}
          onSaveCompleted={() => setIsEditing(false)}
        />
      ) : (
        <DocumentViewer document={doc} onEditRequested={() => setIsEditing(true)} />
      )}
    </div>
  );
}
