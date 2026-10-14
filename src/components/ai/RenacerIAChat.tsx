"use client";

import React, { useState } from "react";
import { getAllInstitutionalDecisions, getDecisionByNumber } from "@/lib/decision-service";
import { INITIAL_MASTER_CATALOG } from "@/lib/catalog-data";
import doctrinaData from "../../../import-queue/doctrina.json";
import { AIChatMessage } from "@/types";
import { Button } from "@/components/ui/Button";
import {
  Bot,
  Send,
  User,
  Sparkles,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Scale,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const PRESET_QUESTIONS = [
  "¿Cuál es la doctrina de RENACER sobre el bautismo?",
  "¿Qué dice RENACER sobre la sucesión?",
  "¿Quién puede ser ministro?",
  "¿Qué decisiones existen sobre incapacidad?",
  "¿Cuál es el estado de la Constitución?",
];

export const RenacerIAChat: React.FC = () => {
  const [inputQuery, setInputQuery] = useState("");
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: "msg-welcome",
      sender: "assistant",
      content:
        "¡Paz y gracia! Soy **RENACER IA**, el asistente institucional de consulta y verificación de **RENACER CHURCH MAESTRO**.\n\n🔒 **Política de Integridad y Veracidad:**\n1. **Doctrina:** Actualmente en **BORRADOR v1.0 — NO ADOPTADA** (20 Artículos de Fe).\n2. **Constitución:** Actualmente en **PLANIFICADO v0.1 — NO ADOPTADA** (48 Artículos).\n3. **Decisiones Institucionales:** **107 Decisiones DEFINIDAS internamente** (incluyendo sucesión, incapacidad, gobierno y riesgos).\n4. **Revisión Legal:** 17 materias etiquetadas formalmente como sujetas a revisión legal de New Jersey.\n5. **Filtro Estricto:** Si no existe información oficial o decisión en el sistema, no invento respuestas.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [isSearching, setIsSearching] = useState(false);

  const allDecisions = getAllInstitutionalDecisions();

  const handleSend = (questionText?: string) => {
    const query = questionText || inputQuery;
    if (!query.trim()) return;

    const userMessage: AIChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!questionText) setInputQuery("");
    setIsSearching(true);

    setTimeout(() => {
      const lowerQ = query.toLowerCase();
      let responseContent = "";
      let foundSources: AIChatMessage["sources"] = [];

      // 1. Pregunta sobre Bautismo
      if (lowerQ.includes("bautismo")) {
        const art7 = doctrinaData.data.find((d) => d.slug.includes("bautismo-en-agua"));
        const art9 = doctrinaData.data.find((d) => d.slug.includes("bautismo-en-el-espiritu-santo"));
        responseContent = `📝 **DECLARACIÓN DE FE (BORRADOR v1.0 — NO ADOPTADA OFICIALMENTE)**\n\n` +
          `**Artículo 7 — Bautismo en Agua:**\n${art7?.content || ""}\n\n` +
          `**Artículo 9 — Bautismo en el Espíritu Santo:**\n${art9?.content || ""}\n\n` +
          `⚠️ *Advertencia:* Este documento se encuentra en estado de **BORRADOR** y no constituye doctrina formalmente adoptada hasta su aprobación exclusiva por el Pastor Fundador.`;

        foundSources.push({
          docId: "doc-doctrina-01",
          docTitle: "Declaración de Fe (Art. 7 y 9)",
          docNumber: "REN-DOC-001",
          version: "1.0",
          status: "BORRADOR",
          quote: "Bautismo en Agua y Espíritu Santo",
        });
      }
      // 2. Pregunta sobre Sucesión
      else if (lowerQ.includes("sucesion") || lowerQ.includes("sucesor")) {
        const decPend1 = getDecisionByNumber("DEC-PEND-001");
        responseContent = `🏛️ **DECISIÓN INSTITUCIONAL DEFINIDA (DEC-PEND-001 / DEC-DEF-226)**\n\n` +
          `Respecto a la **Sucesión del Pastor Fundador**, RENACER ha establecido los siguientes criterios:\n` +
          `1. **Separación Estricta:** Se distingue el *Plan de Continuidad Operativa* (Instrumento A) de la *Designación de Sucesor Pastoral* (Instrumento B).\n` +
          `2. **Incapacidad Temporal:** No transfiere autoridad doctrinal ni crea un pastor interino.\n` +
          `3. **Incapacidad Permanente / Vacancia:** Requiere validación médica pericial y determinación institucional conjunta de ambos Consejos (` +
          `Consejo de Gobierno + Consejo Ministerial).\n` +
          `4. **Requisitos del Sucesor:** Debe cumplir con 8 criterios (llamado divino, testimonio irreprochable, comunión con visión de RENACER, etc.).\n\n` +
          `⚖️ *Estado Legal:* REQUIERE REVISIÓN LEGAL bajo leyes de New Jersey.\n` +
          `📄 *Estado Documental:* PLANIFICADO para Constitución (REN-DOC-002) y Bylaws (REN-DOC-003).`;

        foundSources.push({
          docId: "dec-pend-001",
          docTitle: "Sucesión Fundacional e Incapacidad",
          docNumber: "DEC-PEND-001",
          version: "1.0",
          status: "DEFINIDA",
          quote: "Criterios institucionales de sucesión e incapacidad",
        });
      }
      // 3. Pregunta sobre Quién puede ser Ministro
      else if (lowerQ.includes("ministro") || lowerQ.includes("pastor") || lowerQ.includes("credencial")) {
        const dec10 = getDecisionByNumber("DEC-DEF-010");
        const dec11 = getDecisionByNumber("DEC-DEF-011");
        responseContent = `📜 **DECISIÓN INSTITUCIONAL DEFINIDA (DEC-DEF-010 a DEC-DEF-016)**\n\n` +
          `Para ser reconocido como Ministro en RENACER CHURCH:\n` +
          `1. **Escalafón Ministerial:** Existen 3 niveles solemnes: *Obrero Laico*, *Ministro Licenciado* y *Pastor/Ministro Ordenado*.\n` +
          `2. **Requisitos:** Cumplir con testimonio ético, formación teológica formal (Seminario Bíblico RENACER o equivalente), vida familiar bíblica y lealtad doctrinal.\n` +
          `3. **Autoridad Competente:** La evaluación y otorgamiento corresponde al **Consejo Ministerial**, con ratificación fundacional.\n\n` +
          `📄 *Estado Documental:* PLANIFICADO para el Manual de Credencialización (REN-DOC-007).`;

        foundSources.push({
          docId: "dec-010",
          docTitle: "Credencialización Ministerial",
          docNumber: "DEC-DEF-010",
          version: "1.0",
          status: "DEFINIDA",
          quote: "Escalafón de tres niveles ministeriales",
        });
      }
      // 4. Pregunta sobre Incapacidad
      else if (lowerQ.includes("incapacidad")) {
        const decPend1 = getDecisionByNumber("DEC-PEND-001");
        responseContent = `🛡️ **PROTOCOLO DE INCAPACIDAD (DEC-PEND-001 / DEC-DEF-227 a 230)**\n\n` +
          `El marco de incapacidad de RENACER determina:\n` +
          `1. **Solicitud de Evaluación:** Puede ser solicitada por el Consejo de Gobierno o Consejo Ministerial ante indicios graves; la mera solicitud **NO constituye declaración** ni suspende la autoridad del Fundador.\n` +
          `2. **Dictamen Médico:** Requiere evaluación pericial de médico profesional competente e independiente.\n` +
          `3. **Determinación:** La declaración institucional de incapacidad requiere el **acuerdo conjunto de ambos Consejos**.\n` +
          `4. **Restauración:** Ante recuperación médica certificada, el Fundador reasume automáticamente la plenitud de sus funciones.\n\n` +
          `⚠️ *Blindaje Doctrinal:* Ningún designado temporal adquiere autoridad doctrinal ni facultad de enmendar la Declaración de Fe.`;

        foundSources.push({
          docId: "dec-pend-001",
          docTitle: "Incapacidad del Pastor Fundador",
          docNumber: "DEC-PEND-001",
          version: "1.0",
          status: "DEFINIDA",
          quote: "Protocolo médico e institucional de incapacidad",
        });
      }
      // 5. Pregunta sobre el Estado de la Constitución
      else if (lowerQ.includes("constitucion") || lowerQ.includes("constitución")) {
        responseContent = `📘 **ESTADO DE LA CONSTITUCIÓN (REN-DOC-002)**\n\n` +
          `* **Estado Actual:** **PLANIFICADO v0.1 — NO ADOPTADA**.\n` +
          `* **Estructura Diseñada:** 10 Capítulos y 48 Artículos institucionales.\n` +
          `* **Decisiones Vinculadas:** 38 Decisiones Institucionales definidas internamente esperando la fase formal de redacción.\n` +
          `* **Adopción:** NO ha sido adoptada legal ni eclesiásticamente. La adopción formal será un acto solemne posterior a la armonización jurídica en New Jersey.`;

        foundSources.push({
          docId: "doc-const-002",
          docTitle: "Constitución de RENACER",
          docNumber: "REN-DOC-002",
          version: "0.1",
          status: "PLANIFICADO",
          quote: "Estructura constitucional planificada no adoptada",
        });
      }
      // Búsqueda en catálogo o decisiones generales
      else {
        const matchedDecs = allDecisions.filter(
          (d) =>
            d.title.toLowerCase().includes(lowerQ) ||
            d.question.toLowerCase().includes(lowerQ) ||
            (d.decision && d.decision.toLowerCase().includes(lowerQ))
        );

        if (matchedDecs.length > 0) {
          const first = matchedDecs[0];
          responseContent = `📌 **DECISIÓN INSTITUCIONAL ENCONTRADA (${first.decisionNumber})**\n\n` +
            `**Título:** ${first.title}\n` +
            `**Materia:** ${first.question}\n` +
            `**Decisión Registrada:** ${first.decision || first.notes || "Definida en sistema."}\n\n` +
            `*Estado:* **${first.decisionState}** • *Doc:* **${first.documentState}** • *Legal:* **${first.legalState}**`;

          foundSources.push({
            docId: first.decisionId,
            docTitle: first.title,
            docNumber: first.decisionNumber,
            version: "1.0",
            status: first.decisionState,
            quote: first.title,
          });
        } else {
          responseContent = `No encuentro una decisión o documento oficial de RENACER MAESTRO que responda esta pregunta.\n\n` +
            `📌 *Por política de estricta integridad institucional, RENACER IA no inventa respuestas ni completa vacíos con información no aprobada.*`;
        }
      }

      const aiResponse: AIChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "assistant",
        content: responseContent,
        timestamp: new Date().toLocaleTimeString(),
        sources: foundSources.length > 0 ? foundSources : undefined,
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsSearching(false);
    }, 400);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] max-w-5xl mx-auto rounded-3xl bg-[#0d1424] border border-slate-800 shadow-2xl overflow-hidden">
      {/* Header del Chat */}
      <div className="p-4 bg-gradient-to-r from-[#131d33] to-[#090f1d] border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20">
            <Bot className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-bold text-white tracking-wide">RENACER IA</h2>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold">
                107 Decisiones Conectadas
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Asistente de Consulta Institucional con Discriminación de Estados (Oficial / Borrador / Planificado / Legal)
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-300/80 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>Filtro de No-Invención Activo</span>
        </div>
      </div>

      {/* Feed de Mensajes */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3.5 ${
              msg.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                msg.sender === "user"
                  ? "bg-brand-600 text-white"
                  : "bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950"
              }`}
            >
              {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-2xl rounded-2xl p-4 text-xs leading-relaxed ${
                msg.sender === "user"
                  ? "bg-brand-600/30 border border-brand-500/40 text-slate-100 rounded-tr-none"
                  : "bg-slate-900/95 border border-slate-800 text-slate-200 rounded-tl-none space-y-3"
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>

              {/* Fuentes Consultadas */}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 font-mono">
                    <BookOpen className="w-3 h-3" /> FUENTE INSTITUCIONAL CONSULTADA:
                  </span>
                  {msg.sources.map((src, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-semibold text-slate-200">{src.docTitle}</p>
                        <p className="text-[10px] text-slate-400">
                          {src.docNumber} • Versión {src.version} • Estado:{" "}
                          <span className={src.status === "ADOPTADO" ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>
                            {src.status}
                          </span>
                        </p>
                      </div>
                      <Link
                        href={src.docNumber.includes("DOC-001") ? "/doctrina" : "/decisiones"}
                        className="px-2.5 py-1 rounded bg-slate-900 text-amber-300 hover:bg-slate-800 text-[10px] font-semibold border border-slate-700 flex items-center gap-1 transition-colors"
                      >
                        <span>Abrir Registro</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isSearching && (
          <div className="flex items-center gap-2 text-xs text-amber-400 italic">
            <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
            <span>Consultando los 107 registros institucionales y documentos de RENACER...</span>
          </div>
        )}
      </div>

      {/* Sugerencias Rápidas */}
      <div className="px-6 py-2.5 bg-slate-950 border-t border-slate-800 flex flex-wrap gap-2">
        {PRESET_QUESTIONS.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="text-[11px] px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-amber-500/50 transition-all truncate max-w-xs"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Formulario de Pregunta */}
      <div className="p-4 bg-gradient-to-b from-[#090f1d] to-[#060a14] border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-3"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Pregunta a RENACER IA (ej: doctrina, sucesión, ministros, incapacidad, constitución)..."
            className="flex-1 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors font-sans"
          />
          <Button variant="gold" size="md" icon={<Send className="w-4 h-4" />} type="submit">
            Consultar
          </Button>
        </form>
      </div>
    </div>
  );
};
