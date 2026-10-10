import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Livraison et Retours | BonBois",
  description:
    "Conditions et délais de livraison en France métropolitaine, frais de port, politique de retours sous 14 jours et modalités de remboursement chez BonBois.",
  alternates: {
    canonical: "/livraison-et-retours",
  },
};

export default function DeliveryReturnsPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Service client & logistique</span>
        <h1 className="legal-title">Livraison et retours</h1>
        <p className="legal-intro">
          Retrouvez toutes les informations relatives à l&apos;acheminement de vos palettes
          de bois, granulés et poêles, ainsi que les modalités de retour et de remboursement.
        </p>

        <section className="legal-section">
          <h2>1. Zones de livraison et délais</h2>
          <p>
            Nous assurons la livraison de vos combustibles dans toute la <strong>{company.shippingArea}</strong>.
            Les commandes sont préparées sous 24h et acheminées par transporteur spécialisé sous un délai indicatif
            de <strong>{company.deliveryTime}</strong>.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Frais de port</h2>
          <p>
            - <strong>Livraison offerte</strong> pour toute commande d&apos;un montant supérieur ou égal à <strong>{company.freeShippingThreshold} € TTC</strong>.
            <br />
            - Forfait de <strong>{company.standardShippingFee} € TTC</strong> pour toute commande inférieure à ce seuil.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Modalités de déchargement</h2>
          <p>
            Les livraisons de bois et pellets sont effectuées sur palettes au moyen d&apos;un camion avec hayon et transpalette.
            Le chauffeur dépose les palettes au plus près de votre lieu de stockage, sous réserve d&apos;une voie d&apos;accès carrossable
            et plane (sol dur et dégagé).
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Droit de rétractation (14 jours)</h2>
          <p>
            Vous disposez d&apos;un délai légal de <strong>{company.returnsDelayDays} jours francs</strong> à compter de la date de réception
            pour exercer votre droit de rétractation. Pour faire une demande, adressez un e-mail à{" "}
            <a href={`mailto:${company.email}`} style={{ textDecoration: "underline" }}>
              {company.email}
            </a>{" "}
            en mentionnant votre numéro de commande.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Remboursement</h2>
          <p>
            Dès réception et contrôle des produits retournés (palettes intactes, sacs fermés et conservés au sec), le remboursement
            intégral est déclenché sous 14 jours par le même moyen de paiement que celui utilisé lors de la commande (Stripe ou virement).
          </p>
        </section>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/livraison"
            style={{
              padding: "10px 20px",
              background: "var(--color-wood)",
              color: "#ffffff",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Consulter la page Livraison
          </Link>
          <Link
            href="/retours"
            style={{
              padding: "10px 20px",
              background: "var(--color-bg-light)",
              color: "var(--color-text)",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Consulter la page Retours
          </Link>
        </div>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}
