import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Livraison de Bois de Chauffage & Pellets | Frais & Délais | BonBois",
  description:
    "Modalités et délais de livraison de vos palettes de bois de chauffage et pellets. Livraison gratuite dès 150 € d'achat partout en France métropolitaine.",
  alternates: {
    canonical: "/livraison",
  },
};

export default function LivraisonPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Logistique & Transport</span>
        <h1 className="legal-title">Livraison et Expédition</h1>
        <p className="legal-intro">
          Chez <strong>BonBois</strong>, nous assurons un service de livraison
          sécurisé et rapide pour l&apos;ensemble de nos combustibles bois (bûches, pellets,
          briquettes) et poêles à bois, directement à votre domicile.
        </p>

        <section className="legal-section">
          <h2>1. Zone de livraison desservie</h2>
          <p>
            Nous livrons l&apos;ensemble de nos produits en <strong>{company.shippingArea}</strong> (hors îles non reliées par un pont, pour lesquelles un devis maritime préalable est requis).
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Tarifs et frais de livraison</h2>
          <p>
            Nos tarifs de livraison sont transparents et calculés automatiquement dans votre panier :
            <br />
            - <strong>Livraison GRATUITE</strong> pour toute commande d&apos;un montant supérieur ou égal à <strong>{company.freeShippingThreshold} € TTC</strong>.
            <br />
            - <strong>Forfait fixe de {company.standardShippingFee} € TTC</strong> pour les commandes d&apos;un montant inférieur à {company.freeShippingThreshold} €.
            <br />
            Aucun frais caché ni supplément de déchargement n&apos;est facturé lors de la validation de votre commande.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Délais de livraison</h2>
          <p>
            Dès confirmation et validation du paiement :
            <br />
            - Votre commande est préparée et conditionnée sous <strong>24 heures ouvrées</strong> ;
            <br />
            - Le transporteur achemine la palette jusqu&apos;à votre adresse sous un délai indicatif de <strong>{company.deliveryTime}</strong> (du lundi au vendredi).
            <br />
            Un e-mail de suivi vous est transmis dès la prise en charge de la marchandise par le transporteur.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Conditions de déchargement et accès camion</h2>
          <p>
            Les combustibles volumineux (palettes de bûches, palettes de pellets de 65 ou 66 sacs) sont livrés par camion porteur équipé d&apos;un <strong>hayon élévateur</strong> et d&apos;un <strong>transpalette</strong> :
            <br />
            - Le chauffeur dépose la palette au plus près de votre zone de stockage (devant votre garage, dans votre allée carrossable ou sous un abri) ;
            <br />
            - L&apos;accès doit être praticable pour un poids lourd (largeur de voie suffisante, sol stabilisé en dur, goudron ou béton). Le transpalette ne peut pas rouler sur l&apos;herbe meuble, la terre boueuse ou les graviers épais.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Réception et contrôle de la marchandise</h2>
          <p>
            Lors de la livraison, nous vous invitons à vérifier le bon état extérieur des palettes et des sacs en présence du chauffeur. En cas d&apos;avarie apparente constatée (sac percé, palette renversée), formulez des réserves précises et écrites sur le bon de livraison et avertissez notre service client sous 48h à{" "}
            <a href={`mailto:${company.email}`} style={{ textDecoration: "underline", color: "var(--color-wood)" }}>
              {company.email}
            </a>.
          </p>
        </section>

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/boutique"
            style={{
              padding: "12px 24px",
              background: "var(--color-wood)",
              color: "#ffffff",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            Découvrir la boutique
          </Link>
          <Link
            href="/retours"
            style={{
              padding: "12px 24px",
              background: "var(--color-bg-light)",
              color: "var(--color-text)",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            Politique de retours & remboursement
          </Link>
        </div>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}

