import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Retours & Remboursements | Droit de rétractation 14 jours | BonBois",
  description:
    "Conditions de retour de vos palettes de bois et combustibles, droit de rétractation légal de 14 jours et modalités de remboursement chez BonBois.",
  alternates: {
    canonical: "/retours",
  },
};

export default function RetoursPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Garantie & Rétractation</span>
        <h1 className="legal-title">Retours et Remboursements</h1>
        <p className="legal-intro">
          Votre satisfaction est notre priorité. Conformément aux dispositions
          du Code de la consommation, retrouvez ici l&apos;ensemble des modalités
          concernant l&apos;exercice de votre droit de rétractation et les remboursements.
        </p>

        <section className="legal-section">
          <h2>1. Délai de rétractation légal (14 jours)</h2>
          <p>
            Vous disposez d&apos;un délai légal de <strong>{company.returnsDelayDays} jours francs</strong> à
            compter de la réception de votre commande pour nous informer de votre souhait de vous rétracter,
            sans avoir à justifier de motif ni à payer de pénalités.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Procédure pour effectuer un retour</h2>
          <p>
            Pour faire valoir votre droit de rétractation :
            <br />
            1. Adressez un e-mail à notre service client :{" "}
            <a href={`mailto:${company.email}`} style={{ textDecoration: "underline", color: "var(--color-wood)" }}>
              {company.email}
            </a>{" "}
            en indiquant votre nom, votre numéro de commande et les produits concernés.
            <br />
            2. Notre service client accusera réception de votre demande sous 24h ouvrées et vous communiquera les instructions de prise en charge ou l&apos;adresse de retour de nos dépôts.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. État des marchandises retournées</h2>
          <p>
            Pour être éligibles au remboursement intégral :
            <br />
            - Le bois de chauffage et les granulés doivent être retournés dans leur emballage ou conditionnement d&apos;origine intact (palettes cerclées ou bâchées, sacs fermés et non percés) ;
            <br />
            - Les produits doivent avoir été stockés dans un endroit sec, à l&apos;abri des intempéries et de l&apos;humidité ;
            <br />
            - Les poêles à bois doivent être non installés, complets avec tous leurs accessoires et notices dans leur emballage d&apos;origine.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Frais de retour</h2>
          <p>
            Conformément à la législation en vigueur, les frais directs de renvoi des marchandises restent à la charge du client en cas d&apos;exercice du droit de rétractation pour convenance personnelle.
            <br />
            En raison de la nature très pondéreuse et volumineuse des marchandises (palettes de 500 à 1 000 kg), nous pouvons organiser l&apos;enlèvement à domicile par notre transporteur partenaire sur devis préférentiel.
            <br />
            <em>(Si le retour résulte d&apos;une erreur de préparation de notre part ou d&apos;un produit avarié à la livraison, l&apos;enlèvement est pris en charge à 100 % par BonBois).</em>
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Délais et modalités de remboursement</h2>
          <p>
            Dès réception et inspection de la marchandise retournée dans nos entrepôts :
            <br />
            - Le remboursement intégral des sommes perçues (incluant les frais de livraison standard initiaux facturés) est exécuté sous <strong>14 jours maximum</strong> ;
            <br />
            - Le remboursement est réalisé automatiquement via le même mode de paiement utilisé lors de l&apos;achat (crédit sur la carte bancaire via Stripe, ou virement bancaire sur votre compte).
          </p>
        </section>

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link
            href="/contact"
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
            Contacter le support client
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
            Consulter les conditions de livraison
          </Link>
        </div>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}

