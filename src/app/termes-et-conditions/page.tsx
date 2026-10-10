import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) | BonBois",
  description:
    "Conditions Générales de Vente de BonBois (SARL Saminadin Réparation). Commandes, prix, livraison en France, droit de rétractation de 14 jours et garanties.",
  alternates: {
    canonical: "/termes-et-conditions",
  },
};

export default function TermsPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Cadre contractuel</span>
        <h1 className="legal-title">Conditions Générales de Vente</h1>
        <p className="legal-intro">
          Les présentes Conditions Générales de Vente (CGV) régissent les ventes
          de bois de chauffage, granulés, briquettes et poêles conclues sur le
          site <strong>BonBois</strong> ({company.domain}) édité par {company.legalName}.
        </p>

        <section className="legal-section">
          <h2>1. Vendeur et champ d’application</h2>
          <p>
            Le vendeur est la société {company.legalName}, exploitant l&apos;enseigne
            commerciale <strong>{company.name}</strong>, domiciliée au {company.addressLabel},
            immatriculée sous le SIREN {company.siren} (SIRET {company.siret}) – TVA : {company.tva}.
            Toute commande passée sur le site implique l&apos;adhésion pleine et entière de
            l&apos;acheteur aux présentes conditions sans réserve.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Produits et disponibilité</h2>
          <p>
            Les caractéristiques essentielles, photographies descriptives, conditionnements
            (palettes, sacs, stères, dimensions des bûches) et prix sont présentés sur
            chaque fiche produit. Les offres de produits et les prix sont valables tant qu&apos;ils
            sont visibles sur le site, dans la limite des stocks disponibles.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Prix et facturation</h2>
          <p>
            Tous les prix sont affichés en euros (€) Toutes Taxes Comprises (TTC), tenant compte
            de la TVA applicable en vigueur. Les frais de livraison sont expressément indiqués
            avant la validation définitive de la commande.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Modalités de paiement</h2>
          <p>
            Le règlement s&apos;effectue au choix de l&apos;acheteur par :
            <br />
            - <strong>Carte bancaire</strong> sécurisée via la passerelle de paiement Stripe
            (cartes Visa, MasterCard, etc.) ;
            <br />
            - <strong>Virement bancaire</strong> : les coordonnées bancaires (IBAN/BIC) sont
            transmises lors de la validation. La commande est traitée dès réception des fonds ;
            <br />
            - <strong>Wero</strong> : paiement instantané via le service Wero lorsque celui-ci est activé.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Livraison et conditions d’accès</h2>
          <p>
            La livraison est assurée en <strong>{company.shippingArea}</strong>.
            <br />
            - <strong>Frais :</strong> La livraison est <strong>gratuite</strong> pour toute
            commande d&apos;un montant supérieur ou égal à {company.freeShippingThreshold} € TTC.
            Pour les commandes d&apos;un montant inférieur, un forfait de livraison de {company.standardShippingFee} € TTC est appliqué.
            <br />
            - <strong>Délais :</strong> Les commandes sont préparées et livrées dans un délai
            indicatif de <strong>{company.deliveryTime}</strong> à compter de la confirmation
            du règlement.
            <br />
            - <strong>Accès :</strong> Les livraisons volumineuses sur palettes sont effectuées
            par camion équipé d&apos;un hayon et d&apos;un transpalette. L&apos;acheteur doit
            s&apos;assurer que la voie d&apos;accès et le lieu de déchargement sont carrossables,
            dégagés et adaptés au gabarit d&apos;un camion de livraison.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Droit de rétractation et retours (14 jours)</h2>
          <p>
            Conformément à l&apos;article L. 221-18 du Code de la consommation, le client consommateur
            dispose d&apos;un délai de <strong>14 jours francs</strong> à compter de la réception
            des biens pour exercer son droit de rétractation sans avoir à motiver sa décision.
            <br />
            - <strong>Notification :</strong> Le client doit notifier sa décision par e-mail à{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
            <br />
            - <strong>État des produits :</strong> Les marchandises doivent être retournées dans
            leur conditionnement d&apos;origine, propres, intactes et non utilisées (bois conservé
            au sec, sacs scellés).
            <br />
            - <strong>Frais de retour :</strong> Les frais directs de réexpédition des palettes ou
            sacs demeurent à la charge de l&apos;acheteur.
            <br />
            - <strong>Remboursement :</strong> Le remboursement intégral des sommes versées
            (incluant les frais de livraison standard initiaux) intervient sous 14 jours suivant
            la réception des marchandises retournées, via le même moyen de paiement que celui
            utilisé lors de la commande. Consultez également notre page{" "}
            <Link href="/retours" style={{ color: "var(--color-wood)", textDecoration: "underline" }}>
              Retours & Remboursements
            </Link>
            .
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Garanties légales et réclamations</h2>
          <p>
            Tous les produits bénéficient de la garantie légale de conformité (articles L. 217-4
            et suivants du Code de la consommation) et de la garantie contre les vices cachés
            (articles 1641 et suivants du Code civil).
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Service client et contact</h2>
          <p>
            Pour toute question ou suivi de commande :
            <br />
            - E-mail : <a href={`mailto:${company.email}`}>{company.email}</a>
            <br />
            - Téléphone : <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
            <br />
            - Courrier : {company.legalName} – {company.addressLabel}
          </p>
        </section>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}
