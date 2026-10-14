import { NextRequest, NextResponse } from "next/server";
import {
  searchRenacerKnowledge,
  extractQuestionKeywords,
  normalizeText,
  KnowledgeSearchResult,
} from "@/lib/knowledge-search-service";
import { searchSiteIndex } from "@/lib/site-index-search";
import doctrinaData from "../../../../import-queue/doctrina.json";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const SYSTEM_PROMPT = `Eres RENACER IA, el asistente institucional de RENACER CHURCH, INC. (iglesia cristiana evangélica pentecostal independiente de Paterson, New Jersey; Pastor Fundador: Luis Uchubanda Falconí), dentro del sistema RENACER MAESTRO.

Tu trabajo: responder como un asistente conversacional experto (al estilo de ChatGPT o Gemini), claro, cálido y bien explicado, usando EXCLUSIVAMENTE la información de las FUENTES que se te entregan (documentos, decisiones institucionales, artículos de doctrina y el texto de las hojas del sistema).

Reglas:
1. Piensa y sintetiza: relaciona varias fuentes entre sí (doctrina + decisiones + manuales + hojas) y da una respuesta completa, no una lista de recortes.
2. Estructura: empieza con una respuesta directa en 1-3 frases; luego explica los puntos clave con viñetas o párrafos cortos; cierra con matices, estado de adopción o siguientes pasos si aplica.
3. Cita siempre de dónde sale cada afirmación con marcadores como [1], [2] que corresponden a las FUENTES numeradas. Menciona la hoja o documento por su nombre cuando ayude (por ejemplo: "según la hoja Finanzas [3]").
4. Indica el estado cuando sea relevante: si la fuente es BORRADOR, PLANIFICADO o NO ADOPTADA, dilo claramente; no la presentes como doctrina o norma oficial adoptada.
5. NO inventes datos, versículos, cifras, nombres ni políticas que no estén en las fuentes. Si las fuentes cubren solo una parte, responde esa parte y di expresamente qué no está registrado, sugiriendo en qué hoja del sistema revisar.
6. Si la pregunta no tiene relación con RENACER, responde brevemente que solo atiendes consultas sobre RENACER CHURCH y sugiere un tema relacionado.
7. Responde siempre en español, con tono pastoral respetuoso y profesional. Usa **negritas** para lo importante. No uses tablas.`;

function extractPassage(content: string, keywords: string[], max: number): string {
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
  for (let i = Math.max(0, bestIdx - 1); i < lines.length && out.length < max; i++) {
    out += (out ? "\n" : "") + lines[i];
  }
  return out.length > max ? out.slice(0, max).trimEnd() + "…" : out;
}

interface Source {
  n: number;
  kind: string;
  title: string;
  code: string;
  status: string;
  version: string;
  href: string;
  text: string;
}

function buildSources(question: string, history: { role: string; content: string }[], userRole?: string): Source[] {
  // Para preguntas de seguimiento, enriquece la b\u00fasqueda con la pregunta anterior
  const prevUser = [...history].reverse().find((m) => m.role === "user");
  const shortQ = question.trim().split(/\s+/).length <= 4;
  const query = shortQ && prevUser ? `${prevUser.content} ${question}` : question;

  const keywords = extractQuestionKeywords(query);
  const sources: Source[] = [];
  let n = 1;

  const results = searchRenacerKnowledge(query, { userRole: userRole as any, maxResults: 60 });
  const max = results.length ? results[0].score : 0;
  const relevant = results.filter((r) => r.score >= max * 0.25);

  const pick = (list: KnowledgeSearchResult[], count: number, chars: number, kind: string) => {
    list.slice(0, count).forEach((r) => {
      sources.push({
        n: n++,
        kind,
        title: r.title,
        code: r.code,
        status: r.statusLabel,
        version: r.version,
        href: r.href,
        text: extractPassage(r.content || r.snippet, keywords, chars),
      });
    });
  };

  pick(relevant.filter((r) => r.type === "DOCTRINA_ARTICULO"), 3, 1800, "Doctrina");
  pick(relevant.filter((r) => r.type === "DECISION_INSTITUCIONAL"), 4, 1200, "Decisión institucional");
  pick(
    relevant.filter((r) => r.type === "DOCUMENTO_CATALOGO" || r.type === "CONSTITUCION_ARTICULO" || r.type === "MANUAL_SOP"),
    3,
    1500,
    "Documento/Manual"
  );

  for (const p of searchSiteIndex(query, 4)) {
    sources.push({
      n: n++,
      kind: "Hoja del sistema",
      title: p.title,
      code: p.route,
      status: "Contenido de la página",
      version: "-",
      href: p.route,
      text: p.fragments
        .map((f) => f.text)
        .join(" … ")
        .slice(0, 1200),
    });
  }

  if (sources.length === 0) {
    // Contexto base institucional cuando no hay coincidencias
    const meta: any = (doctrinaData as any).meta || {};
    sources.push({
      n: n++,
      kind: "Identidad",
      title: "Identidad de RENACER",
      code: "REN-DOC-001",
      status: "BORRADOR v1.0",
      version: "1.0",
      href: "/identidad",
      text: `${meta.legalName} — ${meta.nature} Pastor Fundador: ${meta.author}. Lema: ${meta.tagline}. Declaraci\u00f3n de Fe de ${doctrinaData.data.length} art\u00edculos.`,
    });
  }
  return sources;
}

async function callGemini(apiKey: string, model: string, system: string, contents: any[]) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents,
      generationConfig: { temperature: 0.4, maxOutputTokens: 1800 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("") || "";
  if (!text) throw new Error("Respuesta vac\u00eda de Gemini");
  return text as string;
}

async function callOpenAI(apiKey: string, model: string, system: string, messages: any[]) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      max_tokens: 1800,
      messages: [{ role: "system", content: system }, ...messages],
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content || "";
  if (!text) throw new Error("Respuesta vac\u00eda de OpenAI");
  return text as string;
}

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "BAD_REQUEST" }, { status: 400 });
  }
  const question: string = String(body?.question || "").trim();
  const history: { role: string; content: string }[] = Array.isArray(body?.history) ? body.history.slice(-8) : [];
  if (!question) return NextResponse.json({ ok: false, reason: "EMPTY" }, { status: 400 });

  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;
  if (!geminiKey && !openaiKey) {
    return NextResponse.json({ ok: false, reason: "NO_API_KEY" });
  }

  const sources = buildSources(question, history, body?.role);
  const context = sources
    .map(
      (s) =>
        `[${s.n}] (${s.kind}) ${s.title} — c\u00f3digo/ruta: ${s.code} — estado: ${s.status}\n${s.text}`
    )
    .join("\n\n");

  const userTurn = `FUENTES DISPONIBLES (\u00fanica base permitida para responder):\n\n${context}\n\n---\nPREGUNTA DEL USUARIO: ${question}`;

  try {
    let answer: string;
    if (geminiKey) {
      const contents = [
        ...history.map((m) => ({ role: m.role === "user" ? "user" : "model", parts: [{ text: m.content }] })),
        { role: "user", parts: [{ text: userTurn }] },
      ];
      const models = Array.from(
        new Set([process.env.GEMINI_MODEL, "gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-3.5-flash-lite"].filter(Boolean) as string[])
      );
      let lastErr: any = null;
      answer = "";
      for (const model of models) {
        for (let attempt = 0; attempt < 2 && !answer; attempt++) {
          try {
            answer = await callGemini(geminiKey, model, SYSTEM_PROMPT, contents);
          } catch (e: any) {
            lastErr = e;
            const msg = String(e?.message || "");
            if (!/(503|429|500|timeout|fetch failed)/i.test(msg)) break; // error no recuperable con este modelo
            await new Promise((r) => setTimeout(r, 800));
          }
        }
        if (answer) break;
      }
      if (!answer) throw lastErr || new Error("Sin respuesta del modelo");
    } else {
      const messages = [
        ...history.map((m) => ({ role: m.role === "user" ? "user" : "assistant", content: m.content })),
        { role: "user", content: userTurn },
      ];
      answer = await callOpenAI(openaiKey!, process.env.OPENAI_MODEL || "gpt-4o-mini", SYSTEM_PROMPT, messages);
    }

    // Solo devolvemos como fuentes las citadas por el modelo (o todas si no cit\u00f3 ninguna)
    const cited = new Set<number>();
    for (const m of Array.from(answer.matchAll(/\[(\d{1,2}(?:\s*[,;\u2013-]\s*\d{1,2})*)\]/g))) {
      m[1].split(/[,;\u2013-]/).forEach((x: string) => {
        const v = parseInt(x.trim(), 10);
        if (!isNaN(v)) cited.add(v);
      });
    }
    const used = sources.filter((s) => cited.size === 0 || cited.has(s.n));

    return NextResponse.json({
      ok: true,
      answer,
      sources: used.map((s) => ({
        docId: `src-${s.n}`,
        docTitle: `[${s.n}] ${s.title}`,
        docNumber: s.code,
        version: s.version,
        status: s.status,
        quote: s.text.slice(0, 160),
        href: s.href,
      })),
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, reason: "MODEL_ERROR", detail: String(e?.message || e).slice(0, 300) });
  }
}
