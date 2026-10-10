import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique de confidentialité | BonBois",
  description:
    "Politique de protection des données personnelles et respect du RGPD sur le site BonBois. Traitement des commandes, sécurité et droits utilisateurs.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Données personnelles & RGPD</span>
        <h1 className="legal-title">Politique de confidentialité</h1>
        <p className="legal-intro">
          La société {company.legalName} (enseigne <strong>{company.name}</strong>)
          s&apos;engage à protéger la vie privée des utilisateurs de son site internet
          conformément au Règlement Général sur la Protection des Données (RGPD) et à la
          loi Informatique et Libertés.
        </p>

        <section className="legal-section">
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données est {company.legalName}, domiciliée au {company.addressLabel},
            joignable par e-mail à <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Données collectées</h2>
          <p>
            Dans le cadre de vos commandes et demandes de contact, nous collectons les informations
            suivantes : nom, prénom, adresse de livraison et de facturation, adresse e-mail,
            numéro de téléphone, ainsi que l&apos;historique de vos achats.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Finalités et base légale du traitement</h2>
          <p>
            Vos données sont collectées pour :
            <br />
            - La gestion, la préparation et la livraison de vos commandes de bois et combustibles (base contractuelle) ;
            <br />
            - L&apos;émission des factures et la comptabilité légale (obligation légale) ;
            <br />
            - Le service après-vente et le support client (intérêt légitime).
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Destinataires des données</h2>
          <p>
            Vos données sont uniquement transmises aux sous-traitants indispensables à l&apos;exécution du service :
            prestataires de paiement sécurisé (Stripe), transporteurs assurant la livraison sur palette, et hébergeur du site.
            Aucune donnée n&apos;est vendue ou cédée à des tiers à des fins publicitaires.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Sécurité et paiement</h2>
          <p>
            Les transactions bancaires sont chiffrées selon les protocoles SSL/TLS les plus stricts.
            BonBois ne stocke ni n&apos;a accès à vos coordonnées de carte bancaire complètes.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Durée de conservation</h2>
          <p>
            Les données de commande sont conservées pendant la durée nécessaire à la gestion de la relation client
            et aux obligations légales de conservation des pièces comptables (10 ans selon le Code de commerce).
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression, de limitation et de portabilité
            de vos données personnelles. Vous pouvez exercer ces droits à tout moment en adressant un e-mail à{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
            Vous avez également le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés - cnil.fr).
          </p>
        </section>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}
