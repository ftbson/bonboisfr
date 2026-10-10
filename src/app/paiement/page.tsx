import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Moyens de Paiement Sécurisé | Carte Bancaire, Virement, Wero | BonBois",
  description:
    "Découvrez les options de paiement sécurisé sur BonBois : carte bancaire (Stripe, 3D Secure), virement bancaire et Wero. Chiffrement SSL 256 bits.",
  alternates: {
    canonical: "/paiement",
  },
};

export default function PaiementPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Sécurité des transactions</span>
        <h1 className="legal-title">Paiement 100 % Sécurisé</h1>
        <p className="legal-intro">
          Pour régler vos commandes de bois de chauffage et de granulés en toute sérénité,
          <strong> BonBois</strong> met à votre disposition des solutions de paiement reconnues,
          sécurisées et conformes aux normes européennes les plus strictes.
        </p>

        <section className="legal-section">
          <h2>1. Carte bancaire (Stripe)</h2>
          <p>
            Nous acceptons les principales cartes bancaires : <strong>Visa, MasterCard, American Express</strong> et cartes bancaires françaises.
            <br />
            - Le paiement est géré par la plateforme certifiée <strong>Stripe</strong> (PCI-DSS niveau 1, le niveau de sécurité le plus élevé de l&apos;industrie financière) ;
            <br />
            - La technologie <strong>3D Secure (DSP2)</strong> vérifie l&apos;identité du titulaire via l&apos;application bancaire mobile de votre établissement bancaire ;
            <br />
            - <strong>Confidentialité absolue :</strong> à aucun moment BonBois n&apos;a accès à vos coordonnées bancaires ni ne stocke les numéros de votre carte.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Virement bancaire</h2>
          <p>
            Le virement bancaire est idéal pour les commandes importantes ou les professionnels :
            <br />
            - Les coordonnées bancaires (IBAN et BIC) vous sont transmises sur l&apos;écran de confirmation et par e-mail récapitulatif ;
            <br />
            - Il vous suffit d&apos;indiquer la référence de commande dans l&apos;intitulé de votre virement ;
            <br />
            - Votre commande est préparée dès réception et validation des fonds sur notre compte professionnel.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Wero</h2>
          <p>
            Lorsque le service est activé, vous pouvez régler instantanément votre commande via l&apos;application européenne <strong>Wero</strong> directement depuis votre smartphone, sans avoir à saisir de numéro de carte.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Chiffrement SSL et sécurité des données</h2>
          <p>
            L&apos;intégralité des échanges de données sur le site BonBois ({company.domain}) est protégée par un certificat de chiffrement <strong>SSL/TLS (HTTPS)</strong> 256 bits, garantissant l&apos;inviolabilité de vos informations personnelles.
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
            Accéder à la boutique
          </Link>
          <Link
            href="/livraison"
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
            Modalités de livraison
          </Link>
        </div>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}

