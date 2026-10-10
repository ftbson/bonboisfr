import { Suspense } from "react";
import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Boutique | Bois de chauffage, Pellets, Briquettes & Poêles",
  description:
    "Découvrez notre sélection complète de bois de chauffage sec sur palette, granulés de bois (pellets), briquettes densifiées et poêles à bois avec livraison à domicile.",
  alternates: {
    canonical: "/boutique",
  },
};

export default function BoutiquePage() {
  return (
    <main className="shop-page-wrapper">
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-wood)",
              fontWeight: 600,
            }}
          >
            <p>Chargement des produits...</p>
          </div>
        }
      >
        <ShopGrid />
      </Suspense>
    </main>
  );
}

