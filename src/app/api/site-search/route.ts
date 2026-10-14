import { NextRequest, NextResponse } from "next/server";
import { searchSiteIndex } from "@/lib/site-index-search";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get("q") || "").trim();
  if (!q) return NextResponse.json({ results: [] });
  return NextResponse.json({ results: searchSiteIndex(q, 5) });
}
