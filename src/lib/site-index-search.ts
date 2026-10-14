import siteIndex from "@/data/site-index.json";
import { extractQuestionKeywords, normalizeText } from "@/lib/knowledge-search-service";

export interface SiteSearchPage {
  route: string;
  title: string;
  score: number;
  fragments: { text: string; score: number }[];
}

interface IndexPage {
  route: string;
  title: string;
  chunks: string[];
}

const PAGES = (siteIndex as { pages: IndexPage[] }).pages;

const NORMALIZED = PAGES.map((p) => ({
  page: p,
  titleNorm: normalizeText(p.title + " " + p.route),
  chunks: p.chunks.map((c) => ({ text: c, norm: normalizeText(c) })),
}));

/** Busca en el texto de todas las hojas del sistema y devuelve las m\u00e1s relevantes. */
export function searchSiteIndex(q: string, maxPages = 5): SiteSearchPage[] {
  const phrase = normalizeText(q).replace(/[\u00bf?\u00a1!.,;:()"]/g, " ").replace(/\s+/g, " ").trim();
  const keywords = extractQuestionKeywords(q);
  if (keywords.length === 0 && !phrase) return [];

  const scored: SiteSearchPage[] = [];
  for (const n of NORMALIZED) {
    const frags: { text: string; score: number }[] = [];
    for (const c of n.chunks) {
      let s = 0;
      if (phrase.length > 3 && c.norm.includes(phrase)) s += 25;
      let hits = 0;
      for (const kw of keywords) {
        if (c.norm.includes(kw)) {
          hits++;
          s += 6;
        }
      }
      if (hits >= 2) s += hits * 4;
      if (s > 0) frags.push({ text: c.text, score: s });
    }
    if (frags.length === 0) continue;
    frags.sort((a, b) => b.score - a.score);
    let pageScore = frags.slice(0, 3).reduce((acc, f) => acc + f.score, 0);
    for (const kw of keywords) if (n.titleNorm.includes(kw)) pageScore += 15;
    scored.push({ route: n.page.route, title: n.page.title, score: pageScore, fragments: frags.slice(0, 3) });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, maxPages);
}
