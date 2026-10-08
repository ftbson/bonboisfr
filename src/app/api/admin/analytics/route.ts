import { count, desc } from "drizzle-orm";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { visits } from "@/lib/schema";

export const runtime = "nodejs";

export async function GET() {
  if (
    (await cookies()).get("admin_token")?.value !==
    "authenticated_admin_holz_session"
  ) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const [totals, countries] = await Promise.all([
      db.select({ total: count() }).from(visits),
      db
        .select({ country: visits.country, visits: count() })
        .from(visits)
        .groupBy(visits.country)
        .orderBy(desc(count()), visits.country),
    ]);

    return NextResponse.json(
      { totalVisits: totals[0]?.total ?? 0, countries },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error(
      "Impossible de charger les statistiques des visites.",
      error instanceof Error ? error.message : "Erreur inconnue",
    );
    return NextResponse.json(
      { error: "Impossible de charger les statistiques des visiteurs." },
      { status: 500 },
    );
  }
}
