import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ENCYCLOPEDIA_TOPICS,
  getEncyclopediaTopicBySlug,
} from "@/lib/knowledge-search-service";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Scale,
  FileText,
  Shield,
  GraduationCap,
} from "lucide-react";

export function generateStaticParams() {
  return ENCYCLOPEDIA_TOPICS.map((topic) => ({
    slug: topic.slug,
  }));
}

export default function EncyclopediaTopicPage({ params }: { params: { slug: string } }) {
  const paramSlug = decodeURIComponent(params.slug);
  const topic = getEncyclopediaTopicBySlug(paramSlug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Botón de Volver */}
      <Link
        href="/enciclopedia"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a la Enciclopedia</span>
      </Link>

      {/* Header del Tema */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#121c38] via-[#0d1629] to-[#070d18] border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono">
              ENCICLOPEDIA • {topic.category}
            </span>
          </div>
          <span className="text-[11px] font-mono text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-1 rounded-xl font-bold">
            CONOCIMIENTO INSTITUCIONAL
          </span>
        </div>

        <h1 className="text-3xl font-black text-white">{topic.title}</h1>
        <p className="text-xs text-slate-400">
          Compendio institucional consolidado a partir de la Declaración de Fe, Decisiones y Catálogo Normativo.
        </p>
      </div>

      {/* Resumen Institucional Construido desde Fuentes Reales */}
      <div className="p-8 rounded-3xl bg-[#0f172a] border border-slate-800 space-y-6 shadow-xl">
        <div className="space-y-3">
          <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
            SÍNTESIS INSTITUCIONAL DE RENACER:
          </h2>
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 text-sm text-slate-200 leading-relaxed font-sans">
            {topic.summary}
          </div>
        </div>

        {topic.doctrinalBasis && (
          <div className="space-y-2 border-t border-slate-800 pt-4">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>FUNDAMENTO DOCTRINAL Y BÍBLICO:</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              {topic.doctrinalBasis}
            </p>
          </div>
        )}

        {/* Advertencia de Estado Institucional */}
        <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-900/40 text-amber-300 text-xs flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-bold">Nota de Estado y Adopción:</strong>
            <p className="text-slate-300 leading-relaxed">{topic.statusNote}</p>
          </div>
        </div>

        {/* Fuentes y Relaciones Cruzadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-800 pt-6">
          {/* Decisiones Relacionadas */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>DECISIONES INSTITUCIONALES VINCULADAS:</span>
            </h3>
            <div className="space-y-2">
              {topic.decisions.map((d, idx) => (
                <Link
                  key={idx}
                  href={`/decisiones/${d.code}`}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/60 flex items-center justify-between text-xs transition-colors group block"
                >
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      {d.code}
                    </span>
                    <p className="text-white font-medium group-hover:text-emerald-300 transition-colors">
                      {d.title}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                    {d.state}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Documentos Relacionados */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>DOCUMENTOS NORMATIVOS VINCULADOS:</span>
            </h3>
            <div className="space-y-2">
              {topic.documents.map((doc, idx) => (
                <Link
                  key={idx}
                  href={`/documentos/${doc.code}`}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-blue-500/60 flex items-center justify-between text-xs transition-colors group block"
                >
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs font-bold text-amber-400 group-hover:text-amber-300">
                      {doc.code}
                    </span>
                    <p className="text-white font-medium group-hover:text-blue-300 transition-colors">
                      {doc.title}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                    {doc.status}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
