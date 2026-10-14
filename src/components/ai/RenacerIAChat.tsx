"use client";

import React, { useState, useEffect, useRef } from "react";
import { getAllInstitutionalDecisions, getDecisionByNumber } from "@/lib/decision-service";
import { INITIAL_MASTER_CATALOG } from "@/lib/catalog-data";
import { getAllInstitutionalDocuments } from "@/lib/institutional-document-service";
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
import { useAuth } from "@/context/AuthContext";
import {
  searchRenacerKnowledge,
  extractQuestionKeywords,
  normalizeText,
  SYSTEM_MODULES,
  KnowledgeSearchResult,
} from "@/lib/knowledge-search-service";

// Extrae el pasaje más relevante de un texto largo según las palabras clave
function extractPassage(content: string, keywords: string[], max = 650): string {
  const lines = content.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return "";
  let bestIdx = 0;
  let bestScore = -1;
  lines.forEach((line, i) => {
    const n = normalizeText(line);
    const s = keywords.reduce((acc, kw) => acc + (n.includes(kw) ? 1 : 0), 0);
    if (s > bestScore) {
      bestScore = s;
      bestIdx = i;
    }
  });
  let out = "";
  for (let i = bestIdx; i < lines.length && out.length < max; i++) {
    out += (out ? "\n" : "") + lines[i];
  }
  return out.length > max ? out.slice(0, max).trimEnd() + "…" : out;
}

// Renderiza **negritas** y *cursivas* sin mostrar asteriscos
function renderRich(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*\n]+\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) out.push(<strong key={i++} className="text-white font-semibold">{tok.slice(2, -2)}</strong>);
    else out.push(<em key={i++} className="text-slate-300">{tok.slice(1, -1)}</em>);
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const TYPE_LABEL: Record<string, string> = {
  DECISION_INSTITUCIONAL: "🏛️ Decisión institucional",
  DOCUMENTO_CATALOGO: "📄 Documento",
  DOCTRINA_ARTICULO: "📝 Doctrina",
  CONSTITUCION_ARTICULO: "📘 Constitución",
  MANUAL_SOP: "📑 Manual",
  MODULO_SISTEMA: "🧭 Sección",
};

function buildOverview(): string {
  const groups = new Map<string, string[]>();
  SYSTEM_MODULES.forEach((m) => {
    const arr = groups.get(m.group) || [];
    arr.push(`• **${m.name}** — ${m.description}`);
    groups.set(m.group, arr);
  });
  let out = "🧭 **Esto es todo lo que hay en RENACER MAESTRO y sobre lo que puedo responderte:**\n";
  groups.forEach((items, group) => {
    out += `\n**${group.toUpperCase()}**\n${items.join("\n")}\n`;
  });
  out += `\n💡 Pregúntame por cualquier tema (doctrina, sucesión, finanzas, seminario, membresía, ceremonias, ministros, constitución, seguridad, misiones…) o por un código como *DEC-DEF-001* o *REN-DOC-004*.`;
  return out;
}

const PRESET_QUESTIONS = [
  "¿Qué hay en el sistema?",
  "¿Cuál es la doctrina de RENACER sobre el bautismo?",
  "¿Qué dice RENACER sobre la sucesión?",
  "¿Quién puede ser ministro?",
  "¿Qué dice sobre los diezmos y finanzas?",
  "¿Cómo funciona el Seminario Bíblico?",
  "¿Qué decisiones existen sobre incapacidad?",
  "¿Cuál es el estado de la Constitución?",
];

export const RenacerIAChat: React.FC = () => {
  const { currentRole } = useAuth();
  const [inputQuery, setInputQuery] = useState("");
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: "msg-welcome",
      sender: "assistant",
      content:
        "¡Paz y gracia! Soy **RENACER IA**, el asistente institucional de **RENACER CHURCH MAESTRO**.\n\n🔎 Conozco **todo el contenido del sistema**: Doctrina (20 artículos), Constitución, Bylaws, las 107+ Decisiones Institucionales, todos los Manuales (gobierno, membresía, ministerios, ceremonias, finanzas, seguridad, misiones, infantil y juvenil), Escuelas, Seminario, Credenciales, Centro Legal y más.\n\n💡 Escribe *¿qué hay en el sistema?* para ver todas las secciones, o pregúntame por cualquier tema o código (ej. *DEC-DEF-001*, *REN-DOC-004*).\n\n🔒 **Integridad:** respondo solo con información registrada y siempre indico su estado (Oficial / Borrador / Planificado / Requiere revisión legal). Si no existe, no invento.",
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [isSearching, setIsSearching] = useState(false);

  const allDecisions = getAllInstitutionalDecisions();

  const feedRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Auto-scroll: al preguntar baja al final; al llegar la respuesta muestra su inicio
  useEffect(() => {
    const last = messages[messages.length - 1];
    if (!last) return;
    if (last.sender === "assistant" && messages.length > 1) {
      const el = feedRef.current?.querySelector<HTMLElement>(`[data-msg-id="${last.id}"]`);
      if (el && feedRef.current) {
        feedRef.current.scrollTo({ top: el.offsetTop - 12, behavior: "smooth" });
        return;
      }
    }
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isSearching]);

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

    setTimeout(async () => {
      // 1) Intenta con el modelo de lenguaje (RAG sobre todo el contenido de RENACER)
      try {
        const history = messages
          .filter((m) => m.id !== "msg-welcome")
          .slice(-8)
          .map((m) => ({ role: m.sender === "user" ? "user" : "assistant", content: m.content }));
        const res = await fetch("/api/ia", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: query, history, role: currentRole }),
        });
        const data = await res.json();
        if (data?.ok && data.answer) {
          setMessages((prev) => [
            ...prev,
            {
              id: `ai-${Date.now()}`,
              sender: "assistant",
              content: data.answer,
              timestamp: new Date().toLocaleTimeString(),
              sources: data.sources?.length ? data.sources : undefined,
            },
          ]);
          setIsSearching(false);
          return;
        }
      } catch {
        /* sin modelo disponible: contin\u00faa con el motor de reglas */
      }

      // 2) Respaldo: motor de b\u00fasqueda por reglas
      const lowerQ = normalizeText(query);
      const keywords = extractQuestionKeywords(query);
      let responseContent = "";
      let foundSources: AIChatMessage["sources"] = [];
      let isGeneral = false;
      let searchTopic = query;

      const asksOverview =
        /(que hay|que contiene|que tiene|que sabes|que puedes|todo lo que|modulos|secciones|paginas|menu|ayuda|como funciona|para que sirve)/.test(
          lowerQ
        ) && keywords.length <= 4;

      const meta: any = (doctrinaData as any).meta || {};
      const articles = doctrinaData.data;
      const asksIdentity =
        /(que es renacer|quien(es)? (es|son) renacer|que significa renacer|sobre renacer|acerca de renacer|hablame de renacer|cuentame de renacer|presentate|quien eres|que es esto|que es renacer church|historia de renacer|quienes somos|nuestra identidad)/.test(
          lowerQ
        );
      const asksCount = /(cuant[oa]s|numero de|cantidad de|total de)/.test(lowerQ);

      if (asksIdentity) {
        responseContent =
          `⛪ **${meta.publicName || "RENACER CHURCH"}** — *“${meta.tagline || "Renacer, un nuevo inicio"}”*\n\n` +
          `**Entidad legal:** ${meta.legalName || "RENACER CHURCH, INC."} (Paterson, New Jersey)\n` +
          `**Naturaleza:** ${meta.nature || "Iglesia cristiana evangélica pentecostal independiente/no denominacional."}\n` +
          `**Pastor Fundador:** ${meta.author || "Luis Uchubanda Falconí"}\n\n` +
          `**Base doctrinal:** Declaración de Fe en ${articles.length} artículos (BORRADOR v1.0 — NO ADOPTADA).\n` +
          `**Estructura institucional:** Constitución (planificada), Bylaws NJ, Consejo de Gobierno, Consejo Ministerial, escuelas de formación (Discípulos, Líderes), Seminario Bíblico, manuales ministeriales y ${getAllInstitutionalDecisions().length} decisiones institucionales registradas.\n\n` +
          `💡 Pregúntame por cualquier parte: doctrina, gobierno, sucesión, finanzas, ministerios, seminario, membresía, ceremonias…`;
        foundSources = [
          { docId: "ident", docTitle: "Identidad de RENACER", docNumber: "REN-DOC-001", version: "1.0", status: "BORRADOR", quote: "Identidad institucional", href: "/identidad" },
        ];
      } else if (/articulo\s*(\d{1,2})\b/.test(lowerQ) && articles[parseInt(lowerQ.match(/articulo\s*(\d{1,2})\b/)![1], 10) - 1]) {
        const n = parseInt(lowerQ.match(/articulo\s*(\d{1,2})\b/)![1], 10);
        const a: any = articles[n - 1];
        responseContent =
          `📝 **${a.title}** (Declaración de Fe — BORRADOR v1.0, NO ADOPTADA)\n\n${a.content}` +
          (a.biblicalReferences?.length ? `\n\n📖 **Fundamentos bíblicos:** ${a.biblicalReferences.join(" • ")}` : "");
        foundSources = [
          { docId: `art-${n}`, docTitle: a.title, docNumber: "REN-DOC-001", version: "1.0", status: "BORRADOR", quote: a.title, href: `/doctrina?articulo=${n}` },
        ];
      } else if (asksCount && /(doctrin|articulo|punto|fe\b|creenc)/.test(lowerQ)) {
        responseContent =
          `📝 La **Declaración de Fe y Doctrina de RENACER** tiene **${articles.length} artículos** (BORRADOR v1.0 — NO ADOPTADA):\n\n` +
          articles.map((a: any) => `• ${a.title}`).join("\n") +
          `\n\n💡 Pídeme cualquiera, por ejemplo: *artículo 9* o *qué dice sobre sanidad divina*.`;
        foundSources = [
          { docId: "doctrina", docTitle: "Declaración de Fe y Doctrina", docNumber: "REN-DOC-001", version: "1.0", status: "BORRADOR", quote: "20 artículos", href: "/doctrina" },
        ];
      } else if (asksCount && /(decision)/.test(lowerQ)) {
        const decs = getAllInstitutionalDecisions();
        const byCat = new Map<string, number>();
        decs.forEach((d) => byCat.set(d.category, (byCat.get(d.category) || 0) + 1));
        responseContent =
          `🏛️ Hay **${decs.length} decisiones institucionales** registradas:\n\n` +
          Array.from(byCat.entries()).map(([c, n]) => `• ${c}: ${n}`).join("\n");
        foundSources = [
          { docId: "decs", docTitle: "Decisiones Institucionales", docNumber: "DECISIONES", version: "1.0", status: "DEFINIDAS", quote: "Registro", href: "/decisiones" },
        ];
      } else if (asksCount && /(documento|manual|reglamento)/.test(lowerQ)) {
        const docs = getAllInstitutionalDocuments();
        responseContent =
          `📄 La biblioteca institucional tiene **${docs.length} documentos** con contenido y el catálogo maestro registra **${INITIAL_MASTER_CATALOG.length}**:\n\n` +
          docs.map((d) => `• ${d.documentNumber} — ${d.title} (${d.status})`).join("\n");
        foundSources = [
          { docId: "docs", docTitle: "Biblioteca de Documentos", docNumber: "DOCUMENTOS", version: "-", status: "BIBLIOTECA", quote: "Documentos", href: "/documentos" },
        ];
      } else if (asksCount && /(modulo|seccion|pagina)/.test(lowerQ)) {
        responseContent = `🧭 El sistema tiene **${SYSTEM_MODULES.length} secciones**.\n\n` + buildOverview();
      } else if (asksOverview) {
        responseContent = buildOverview();
      } else {
        // Detecta qu\u00e9 tipo de respuesta pide el usuario y limpia esas palabras del tema
        const wantsDoctrine = /(doctrin|creenc|ensena|ensenanza|posicion|declaracion de fe|biblic)/.test(lowerQ);
        const wantsDecision = /(decision|decisiones|acuerdo)/.test(lowerQ);
        const wantsDoc = /(manual|reglamento|documento|norma|politica|procedimiento)/.test(lowerQ);
        const topicQuery =
          query
            .replace(/\u00bf|\?/g, " ")
            .replace(
              /\b(doctrina|doctrinal|doctrinas|creencia|creencias|ense\u00f1anza|ense\u00f1a|posici\u00f3n|decisi\u00f3n|decisiones|acuerdo|manual|manuales|reglamento|reglamentos|documento|documentos|norma|pol\u00edtica|procedimiento|cu\u00e1l|cual|cu\u00e1les|qu\u00e9|que|dice|existe|existen|hay|sobre|acerca|respecto|renacer|church|es|son|la|el|los|las|de|del|en|por|favor|dime|explica|expl\u00edcame|h\u00e1blame)\b/gi,
              " "
            )
            .replace(/\s+/g, " ")
            .trim() || query;
        const topicKeywords = extractQuestionKeywords(topicQuery);
        isGeneral = true;
        searchTopic = topicQuery;

        const results = searchRenacerKnowledge(topicQuery, { userRole: currentRole, maxResults: 40 });
        const maxScore = results.length ? results[0].score : 0;
        const relevant = results.filter((r) => r.score >= maxScore * 0.3);

        const doctrine = relevant.filter((r) => r.type === "DOCTRINA_ARTICULO");
        const decisions = relevant.filter((r) => r.type === "DECISION_INSTITUCIONAL");
        const docs = relevant.filter(
          (r) => r.type === "DOCUMENTO_CATALOGO" || r.type === "CONSTITUCION_ARTICULO" || r.type === "MANUAL_SOP"
        );
        const modules = relevant.filter((r) => r.type === "MODULO_SISTEMA");

        if (relevant.length === 0) {
          responseContent =
            `No encuentro una decisi\u00f3n o documento oficial de RENACER MAESTRO que responda esta pregunta.\n\n` +
            `\ud83d\udca1 Escribe *\u00bfqu\u00e9 hay en el sistema?* para ver todo lo que puedo consultar.\n\n` +
            `\ud83d\udccc *Por pol\u00edtica de estricta integridad institucional, RENACER IA no inventa respuestas ni completa vac\u00edos con informaci\u00f3n no aprobada.*`;
        } else {
          const section = (title: string, r: KnowledgeSearchResult, max: number) =>
            `**${title}: ${r.title}** (${r.code})\n*Estado:* ${r.statusLabel}\n\n${
              extractPassage(r.content || r.snippet, topicKeywords, max) || r.snippet
            }`;

          const blocks: string[] = [];
          const used: KnowledgeSearchResult[] = [];

          // Orden seg\u00fan lo que se pregunt\u00f3: lo pedido primero, luego lo vinculado
          const order: ("doctrine" | "decision" | "doc")[] =
            wantsDecision && !wantsDoctrine
              ? ["decision", "doctrine", "doc"]
              : wantsDoc && !wantsDoctrine
              ? ["doc", "doctrine", "decision"]
              : ["doctrine", "decision", "doc"];

          order.forEach((kind, i) => {
            const primary = i === 0;
            if (kind === "doctrine" && doctrine[0]) {
              blocks.push(section("\ud83d\udcdd Doctrina", doctrine[0], primary ? 1400 : 450));
              used.push(doctrine[0]);
            } else if (kind === "decision" && decisions.length) {
              decisions.slice(0, primary ? 2 : 2).forEach((d) => {
                blocks.push(section("\ud83c\udfdb\ufe0f Decisi\u00f3n institucional", d, primary ? 900 : 450));
                used.push(d);
              });
            } else if (kind === "doc" && docs.length) {
              docs.slice(0, primary ? 2 : 1).forEach((d) => {
                blocks.push(section("\ud83d\udcc4 Documento / Manual", d, primary ? 900 : 450));
                used.push(d);
              });
            }
          });

          // Si no hubo nada en los 3 grupos, usa lo mejor que haya
          if (blocks.length === 0 && relevant[0]) {
            blocks.push(section("\ud83d\udcc4 Resultado", relevant[0], 900));
            used.push(relevant[0]);
          }

          responseContent =
            `Esto es lo que RENACER tiene registrado sobre **${topicQuery}**, vinculando doctrina, decisiones y documentos:\n\n` +
            blocks.join("\n\n\u2014\u2014\u2014\n\n");

          if (modules.length > 0) {
            responseContent +=
              `\n\n\ud83e\udded **D\u00f3nde verlo en el sistema:** ` +
              modules
                .slice(0, 3)
                .map((m) => `${m.title} (${m.href})`)
                .join(" \u2022 ");
          }

          if (used.some((r) => r.status !== "OFICIAL_ADOPTADO")) {
            responseContent +=
              `\n\n\u26a0\ufe0f *Advertencia:* lo citado est\u00e1 en estado de **BORRADOR / PLANIFICADO / DECISI\u00d3N INTERNA** y no constituye norma adoptada formalmente.`;
          }

          foundSources = [...used, ...modules.slice(0, 2)].map((r) => ({
            docId: r.id,
            docTitle: r.title,
            docNumber: r.code,
            version: r.version,
            status: r.status.replace(/_/g, " "),
            quote: r.snippet,
            href: r.href,
          }));
        }
      }

      // "En la hoja X dice esto": busca en el texto de todas las p\u00e1ginas del sistema
      if (isGeneral) {
        try {
          const res = await fetch(`/api/site-search?q=${encodeURIComponent(searchTopic)}`);
          const data: {
            results: { route: string; title: string; fragments: { text: string }[] }[];
          } = await res.json();
          const pages = (data.results || []).slice(0, 3);
          if (pages.length > 0) {
            const nothingElse = responseContent.startsWith("No encuentro");
            const lines = pages.map((p) => {
              const frag = p.fragments[0]?.text || "";
              const short = frag.length > 420 ? frag.slice(0, 420).trimEnd() + "\u2026" : frag;
              return `\ud83d\udccd **En la hoja \u00ab${p.title}\u00bb** (${p.route}) dice:\n${short}`;
            });
            const header = nothingElse
              ? `Esto es lo que dicen las hojas del sistema sobre **${searchTopic}**:\n\n`
              : `\n\n\u2014\u2014\u2014\n\n\ud83d\udcd1 **Qu\u00e9 dice cada hoja del sistema sobre esto:**\n\n`;
            responseContent = (nothingElse ? "" : responseContent) + header + lines.join("\n\n");
            const pageSources = pages.map((p) => ({
              docId: `hoja-${p.route}`,
              docTitle: `Hoja: ${p.title}`,
              docNumber: p.route,
              version: "-",
              status: "P\u00c1GINA DEL SISTEMA",
              quote: p.fragments[0]?.text?.slice(0, 160) || "",
              href: p.route,
            }));
            foundSources = [...(foundSources || []), ...pageSources];
          }
        } catch {
          /* si falla la b\u00fasqueda por hojas, se mantiene la respuesta base */
        }
      }

      const aiResponse: AIChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "assistant",
        content: responseContent,
        timestamp: new Date().toLocaleTimeString(),
        sources: foundSources && foundSources.length > 0 ? foundSources : undefined,
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsSearching(false);
    }, 400);
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-15rem)] min-h-[28rem] lg:h-[calc(100vh-10rem)] max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-[#0d1424] border border-slate-800 shadow-2xl overflow-hidden">
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
                Todo el sistema conectado
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
      <div ref={feedRef} className="relative flex-1 overflow-y-auto overscroll-contain p-3 sm:p-6 space-y-5 sm:space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            data-msg-id={msg.id}
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
              className={`max-w-[85%] sm:max-w-2xl min-w-0 rounded-2xl p-3 sm:p-4 text-xs sm:text-[13px] leading-relaxed ${
                msg.sender === "user"
                  ? "bg-brand-600/30 border border-brand-500/40 text-slate-100 rounded-tr-none"
                  : "bg-slate-900/95 border border-slate-800 text-slate-200 rounded-tl-none space-y-3"
              }`}
            >
              <div className="whitespace-pre-wrap">{renderRich(msg.content)}</div>

              {/* Fuentes Consultadas */}
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 font-mono">
                    <BookOpen className="w-3 h-3" /> FUENTE INSTITUCIONAL CONSULTADA:
                  </span>
                  {msg.sources.map((src, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2"
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
                        href={src.href || (src.docNumber.includes("DOC-001") ? "/doctrina" : "/decisiones")}
                        className="shrink-0 px-2.5 py-1.5 rounded bg-slate-900 text-amber-300 hover:bg-slate-800 text-[10px] font-semibold border border-slate-700 flex items-center gap-1 transition-colors"
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
            <span>Consultando todos los documentos, decisiones y secciones de RENACER...</span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Sugerencias Rápidas */}
      <div className="px-3 sm:px-6 py-2.5 bg-slate-950 border-t border-slate-800 flex gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible">
        {PRESET_QUESTIONS.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="shrink-0 text-[11px] px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-amber-500/50 transition-all whitespace-nowrap sm:truncate sm:max-w-xs"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Formulario de Pregunta */}
      <div className="p-3 sm:p-4 bg-gradient-to-b from-[#090f1d] to-[#060a14] border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Pregunta lo que sea del sistema..."
            className="flex-1 min-w-0 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors font-sans"
          />
          <Button variant="gold" size="md" icon={<Send className="w-4 h-4" />} type="submit">
            Consultar
          </Button>
        </form>
      </div>
    </div>
  );
};
