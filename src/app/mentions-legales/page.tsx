import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Mentions légales | BonBois",
  description:
    "Mentions légales du site BonBois (SARL Saminadin Réparation). Éditeur, coordonnées, SIREN, TVA intracommunautaire et propriété intellectuelle.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function LegalNoticePage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Informations réglementaires</span>
        <h1 className="legal-title">Mentions légales</h1>
        <p className="legal-intro">
          Conformément aux dispositions de la loi pour la confiance dans l&apos;économie
          numérique (LCEN), vous trouverez ci-dessous les informations légales
          relatives à l&apos;éditeur et à l&apos;exploitation du site internet BonBois.
        </p>

        <section className="legal-section">
          <h2>1. Éditeur du site</h2>
          <p>
            <strong>Nom commercial :</strong> {company.name}
            <br />
            <strong>Raison sociale :</strong> {company.legalName}
            <br />
            <strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)
            <br />
            <strong>Activité enregistrée :</strong> {company.officialActivity}
            <br />
            <strong>Activité commerciale :</strong> {company.commercialActivity}
            <br />
            <strong>Siège social :</strong> {company.addressLabel}
            <br />
            <strong>SIREN :</strong> {company.siren}
            <br />
            <strong>SIRET :</strong> {company.siret}
            <br />
            <strong>Numéro de TVA intracommunautaire :</strong> {company.tva}
            <br />
            <strong>Code NAF/APE :</strong> {company.naf}
            <br />
            <strong>Adresse e-mail :</strong>{" "}
            <a href={`mailto:${company.email}`} style={{ textDecoration: "underline" }}>
              {company.email}
            </a>
            <br />
            <strong>Téléphone :</strong>{" "}
            <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication est le représentant légal de la société {company.legalName}.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Hébergement du site</h2>
          <p>
            Le site est hébergé sur une infrastructure cloud moderne garantissant
            la sécurité et la haute disponibilité des services.
            <br />
            <em>(Coordonnées précises de l&apos;hébergeur physique ou infogérant à confirmer par l&apos;exploitant).</em>
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (structure, textes,
            logos, photographies des combustibles et des poêles, graphismes) sont
            la propriété exclusive de BonBois et de ses partenaires. Toute
            reproduction, représentation, modification ou distribution, totale ou
            partielle, sans autorisation écrite préalable est strictement interdite.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Données personnelles et cookies</h2>
          <p>
            Le traitement de vos données personnelles est détaillé dans notre{" "}
            <a href="/politique-de-confidentialite" style={{ textDecoration: "underline", color: "var(--color-wood)" }}>
              Politique de confidentialité
            </a>
            . Pour la gestion des traceurs, consultez notre{" "}
            <a href="/politique-cookies" style={{ textDecoration: "underline", color: "var(--color-wood)" }}>
              Politique de cookies
            </a>
            .
          </p>
        </section>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}
