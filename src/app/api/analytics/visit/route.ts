import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { visits } from "@/lib/schema";

export const runtime = "nodejs";

function getCountryFromInfrastructure(request: Request): string {
  const countryHeaders = [
    "cf-ipcountry",
    "x-vercel-ip-country",
    "cloudfront-viewer-country",
    "x-appengine-country",
  ];

  for (const header of countryHeaders) {
    const value = request.headers.get(header)?.trim().toUpperCase();
    if (value && /^[A-Z]{2}$/.test(value)) return value;
  }

  return "UNKNOWN";
}

export async function POST(request: Request) {
  const country = getCountryFromInfrastructure(request);

  try {
    await db.insert(visits).values({ country });
  } catch (error) {
    console.error(
      "Impossible d'enregistrer la visite dans Turso.",
      error instanceof Error ? error.message : "Erreur inconnue",
    );
  }

  return new NextResponse(null, { status: 204 });
}
