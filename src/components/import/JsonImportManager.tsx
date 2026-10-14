"use client";

import React, { useState } from "react";
import { useDocuments } from "@/context/DocumentContext";
import { validateImportJson, ValidationResult } from "@/lib/json-validator";
import { Button } from "@/components/ui/Button";
import {
  Database,
  UploadCloud,
  FileCheck,
  AlertTriangle,
  CheckCircle,
  Eye,
  FileText,
  Download,
  BookOpen,
} from "lucide-react";

export const JsonImportManager: React.FC = () => {
  const { importQueue, addJsonToQueue, approveAndPublishJson } = useDocuments();

  const [rawText, setRawText] = useState("");
  const [filename, setFilename] = useState("doctrina.json");
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [previewData, setPreviewData] = useState<any | null>(null);

  const handleValidate = () => {
    if (!rawText.trim()) return;
    const res = validateImportJson(rawText, filename);
    setValidationResult(res);
    if (res.isValid) {
      setPreviewData(res.data);
    } else {
      setPreviewData(null);
    }
  };

  const handleQueueForApproval = () => {
    if (!validationResult?.isValid) return;
    addJsonToQueue(filename, rawText, validationResult.data, validationResult.meta);
    setRawText("");
    setValidationResult(null);
    setPreviewData(null);
  };

  const loadDoctrinaTemplate = () => {
    const template = {
      meta: {
        type: "doctrina",
        version: "1.0",
        author: "Luis Uchubanda Falconí",
        date: "2026-09-03",
        description: "Declaración de Fe y Doctrina Oficial de RENACER CHURCH",
      },
      data: [
        {
          title: "Artículo 1 — Las Sagradas Escrituras",
          slug: "sagradas-escrituras",
          docNumber: "REN-DOC-001",
          category: "Declaración de Fe y Doctrina",
          subcategory: "Fundamentos Doctrinales",
          status: "BORRADOR",
          content: "Creemos que la Biblia es la Palabra inspirada, inerrante e infalible de Dios, norma suprema de fe y conducta...",
          biblicalReferences: ["2 Timoteo 3:16-17", "2 Pedro 1:20-21"],
          tags: ["biblia", "escrituras", "inerrancia", "doctrina"],
        },
        {
          title: "Artículo 2 — El Bautismo en Agua y las Ordenanzas",
          slug: "bautismo-en-agua",
          docNumber: "REN-DOC-002",
          category: "Declaración de Fe y Doctrina",
          subcategory: "Ordenanzas",
          status: "BORRADOR",
          content: "Creemos que el bautismo en agua por inmersión es un mandamiento del Señor Jesucristo para los creyentes...",
          biblicalReferences: ["Mateo 28:19", "Hechos 2:38", "Romanos 6:3-4"],
          tags: ["bautismo", "ordenanzas", "fe"],
        },
      ],
    };
    setRawText(JSON.stringify(template, null, 2));
    setFilename("doctrina.json");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#131d33] to-[#0d1424] border border-slate-800 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider">
            <Database className="w-4 h-4" />
            <span>Tubería de Ingesta y Control de Datos</span>
          </div>
          <h1 className="text-2xl font-black text-white">SISTEMA DE IMPORTACIÓN JSON</h1>
          <p className="text-xs text-slate-400">
            Valida esquemas con Zod, previsualiza artículos, aprueba manualmente y publica a Firestore.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          icon={<Download className="w-4 h-4" />}
          onClick={loadDoctrinaTemplate}
        >
          Cargar Estructura de doctrina.json
        </Button>
      </div>

      {/* Editor / Validador de JSON */}
      <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <label className="text-xs font-semibold text-slate-300">Archivo:</label>
            <input
              type="text"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-brand-500 font-mono"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              icon={<FileCheck className="w-4 h-4 text-emerald-400" />}
              onClick={handleValidate}
            >
              1. Validar Estructura Zod
            </Button>

            {validationResult?.isValid && (
              <Button
                variant="gold"
                size="sm"
                icon={<UploadCloud className="w-4 h-4" />}
                onClick={handleQueueForApproval}
              >
                2. Enviar a Cola de Aprobación
              </Button>
            )}
          </div>
        </div>

        <textarea
          rows={10}
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder={`Pega aquí el contenido de doctrina.json o cárgalo desde /import-queue/...\n{\n  "meta": { "type": "doctrina", "version": "1.0", "author": "..." },\n  "data": [ ... ]\n}`}
          className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 focus:outline-none focus:border-brand-500 leading-relaxed"
        />

        {/* Mensaje de Validación */}
        {validationResult && (
          <div
            className={`p-4 rounded-xl border text-xs flex items-start gap-3 ${
              validationResult.isValid
                ? "bg-emerald-950/30 border-emerald-500/40 text-emerald-200"
                : "bg-rose-950/30 border-rose-500/40 text-rose-200"
            }`}
          >
            {validationResult.isValid ? (
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
            )}
            <div className="space-y-1">
              <p className="font-bold">
                {validationResult.isValid
                  ? `Estructura JSON Válida: ${validationResult.itemCount} artículo(s) listos para previsualizar.`
                  : "Errores detectados en la estructura del JSON:"}
              </p>
              {validationResult.errors.map((err, idx) => (
                <p key={idx} className="font-mono text-[11px] opacity-90">
                  • {err}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Previsualización en Vivo de Artículos */}
        {previewData && (
          <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Previsualización de Documentos ({previewData.length}):</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {previewData.map((doc: any, i: number) => (
                <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono font-bold text-amber-300">{doc.docNumber}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-semibold">{doc.status || "BORRADOR"}</span>
                  </div>
                  <p className="font-bold text-white">{doc.title}</p>
                  <p className="text-slate-400 text-[11px] line-clamp-2">{doc.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Cola de Aprobación y Publicación */}
      <div className="p-6 rounded-2xl bg-[#101728] border border-slate-800 shadow-xl space-y-4">
        <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <span>📋</span> Lotes en Cola de Aprobación
        </h2>

        {importQueue.length === 0 ? (
          <p className="text-xs text-slate-400 italic">No hay archivos en cola de importación.</p>
        ) : (
          <div className="space-y-3">
            {importQueue.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <p className="text-xs font-bold text-slate-200 font-mono">{item.filename}</p>
                  <p className="text-[11px] text-slate-400">
                    Tipo: {item.type} • {item.itemCount} registros • Estado:{" "}
                    <span className={`font-bold ${item.status === 'PUBLICADO' ? 'text-emerald-300' : 'text-amber-300'}`}>
                      {item.status}
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {item.status !== "PUBLICADO" && (
                    <Button
                      variant="gold"
                      size="sm"
                      icon={<CheckCircle className="w-3.5 h-3.5" />}
                      onClick={() => approveAndPublishJson(item.id)}
                    >
                      Aprobar y Publicar en Base de Datos
                    </Button>
                  )}
                  {item.status === "PUBLICADO" && (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> Publicado y Disponible
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
