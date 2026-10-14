/**
 * Genera src/data/site-index.json: un índice con TODO el texto visible de cada
 * "hoja" (página) del sistema, para que RENACER IA pueda responder
 * "en la hoja X dice esto sobre eso".
 *
 * Uso: node scripts/build-site-index.mjs   (se ejecuta solo en predev/prebuild)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "src", "app");
const OUT_DIR = path.join(ROOT, "src", "data");
const OUT_FILE = path.join(OUT_DIR, "site-index.json");

const MAX_LIB_BYTES = 70_000; // evita volcar archivos gigantes (ya indexados por otras vías)
const TAILWIND_RE =
  /(^|\s)(bg-|text-|border|px-|py-|p-\d|m[xytblr]?-\d|rounded|flex|grid|gap-|space-|hover:|focus:|items-|justify-|w-|h-|min-|max-|font-|tracking|leading|shadow|overflow|transition|col-span|lg:|md:|sm:|print:|cursor|opacity|animate|backdrop|from-|to-|via-|sticky|absolute|relative|fixed|inset|z-\d|top-|left-|right-|bottom-|truncate|whitespace|uppercase|italic|underline|block|inline|hidden|shrink)/;

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === "page.tsx") acc.push(full);
  }
  return acc;
}

function routeOf(file) {
  const rel = path.relative(APP_DIR, path.dirname(file)).split(path.sep).join("/");
  return "/" + rel.replace(/^\.$/, "");
}

function resolveImport(spec, fromFile) {
  let base;
  if (spec.startsWith("@/")) base = path.join(ROOT, "src", spec.slice(2));
  else if (spec.startsWith(".")) base = path.resolve(path.dirname(fromFile), spec);
  else return null;
  for (const ext of [".tsx", ".ts", "/index.tsx", "/index.ts"]) {
    if (fs.existsSync(base + ext)) return base + ext;
  }
  return null;
}

function cleanText(s) {
  return s
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&[a-z]+;/g, " ")
    .replace(/\\n/g, " ")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\s+/g, " ")
    .trim();
}

function looksLikeProse(s) {
  if (s.length < 12) return false;
  if (!/[a-záéíóúñ]/i.test(s)) return false;
  if (!/\s/.test(s)) return false;
  if (TAILWIND_RE.test(s) && s.split(/\s+/).every((t) => /^[\w:\/\[\]\-\.#%()!]+$/.test(t))) return false;
  if (/^(use client|import |export |const |return )/.test(s)) return false;
  if (/^[\w./@-]+$/.test(s)) return false;
  return true;
}

function extractTexts(source) {
  const items = [];
  const src = source
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/^\s*\/\/.*$/gm, " ")
    .replace(/^import[\s\S]*?;\s*$/gm, " ");

  // Texto JSX entre etiquetas
  for (const m of src.matchAll(/>([^<>{}=]{3,})</g)) {
    const t = cleanText(m[1]);
    if (/[a-záéíóúñ]{3,}/i.test(t) && !/^[\s\d.,:;•\-–—|/]+$/.test(t)) items.push(t);
  }
  // Expresiones de texto dentro de llaves: {"texto"}
  // Literales de cadena (", ', `)
  const lit = /"((?:[^"\\\n]|\\.){12,})"|'((?:[^'\\\n]|\\.){12,})'|`((?:[^`\\]|\\.){12,})`/g;
  for (const m of src.matchAll(lit)) {
    let t = m[1] ?? m[2] ?? m[3] ?? "";
    t = t.replace(/\$\{[^}]*\}/g, " ");
    t = cleanText(t);
    if (looksLikeProse(t)) items.push(t);
  }
  // Dedup preservando orden
  const seen = new Set();
  return items.filter((t) => (seen.has(t) ? false : (seen.add(t), true)));
}

function titleOf(source, route) {
  const h = source.match(/<h1[^>]*>\s*([^<{]{3,})/);
  if (h) return cleanText(h[1]);
  const seg = route.split("/").filter(Boolean).pop() || "Inicio";
  return seg.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());
}

function chunkify(items, max = 480) {
  const chunks = [];
  let cur = "";
  for (const t of items) {
    if (cur && cur.length + t.length > max) {
      chunks.push(cur);
      cur = "";
    }
    cur += (cur ? " \u2022 " : "") + t;
  }
  if (cur) chunks.push(cur);
  return chunks;
}

function collectDeps(file, depth = 0, seen = new Set()) {
  if (seen.has(file) || depth > 2) return [];
  seen.add(file);
  const out = [];
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(/from\s+["']([^"']+)["']/g)) {
    const dep = resolveImport(m[1], file);
    if (!dep || seen.has(dep)) continue;
    const rel = path.relative(ROOT, dep).split(path.sep).join("/");
    if (/-full-draft\.ts$/.test(rel)) continue; // ya indexados como documentos
    if (/(ui\/|layout\/|context\/|types\/|schemas\/|\/audit\.ts|firebase|permissions|hash-util|json-validator|versioning|b2-storage)/.test(rel)) continue;
    if (fs.statSync(dep).size > MAX_LIB_BYTES) continue;
    out.push(dep);
    out.push(...collectDeps(dep, depth + 1, seen));
  }
  return out;
}

const pages = [];
for (const file of walk(APP_DIR).sort()) {
  const route = routeOf(file);
  if (/\[[^\]]+\]/.test(route)) continue; // plantillas dinámicas
  const source = fs.readFileSync(file, "utf8");
  let items = extractTexts(source);
  for (const dep of collectDeps(file)) {
    items = items.concat(extractTexts(fs.readFileSync(dep, "utf8")));
  }
  const seen = new Set();
  items = items.filter((t) => (seen.has(t) ? false : (seen.add(t), true)));
  pages.push({ route, title: titleOf(source, route), chunks: chunkify(items) });
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), pages }, null, 0), "utf8");

const total = pages.reduce((n, p) => n + p.chunks.length, 0);
console.log(
  `site-index: ${pages.length} hojas, ${total} fragmentos, ${(fs.statSync(OUT_FILE).size / 1024).toFixed(0)} KB -> src/data/site-index.json`
);
