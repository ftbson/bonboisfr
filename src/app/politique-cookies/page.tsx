import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Politique de Cookies | BonBois",
  description:
    "Information sur l'utilisation des cookies et traceurs sur le site BonBois. Cookies essentiels, panier d'achat et respect de votre vie privée.",
  alternates: {
    canonical: "/politique-cookies",
  },
};

export default function CookiesPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Respect de la vie privée</span>
        <h1 className="legal-title">Politique de Cookies</h1>
        <p className="legal-intro">
          La présente politique a pour objet de vous informer sur l&apos;usage des cookies
          et autres traceurs déposés lors de votre navigation sur le site BonBois.
        </p>

        <section className="legal-section">
          <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette
            ou smartphone) lors de la visite d&apos;un site internet. Il permet de mémoriser vos actions
            et préférences (telles que le contenu de votre panier d&apos;achat) pendant une durée déterminée.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Les cookies utilisés sur BonBois</h2>
          <p>
            Nous limitons strictement l&apos;utilisation des traceurs à ce qui est indispensable
            à la fourniture du service :
            <br />
            - <strong>Cookies techniques essentiels :</strong> nécessaires au bon fonctionnement de la boutique en ligne, notamment la conservation des produits ajoutés au panier (sauvegarde locale sécurisée), le maintien de session lors du paiement sécurisé Stripe, et la sécurité anti-fraude.
            <br />
            - <strong>Traceurs de performance anonymes :</strong> mesure d&apos;audience strictement limitée et anonymisée visant à améliorer l&apos;ergonomie du site et à détecter d&apos;éventuelles erreurs techniques de navigation.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Cookies publicitaires et tiers</h2>
          <p>
            BonBois ne commercialise aucune de vos données personnelles et ne dépose aucun cookie
            publicitaire intrusif ou de profilage comportemental sans votre consentement explicite.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Comment gérer et désactiver les cookies ?</h2>
          <p>
            Vous pouvez à tout moment configurer votre logiciel de navigation pour refuser tout ou partie
            des cookies. Sachez toutefois que la désactivation complète des cookies techniques indispensables
            peut empêcher l&apos;ajout d&apos;articles à votre panier d&apos;achat et la finalisation de vos commandes en ligne.
            <br />
            Pour paramétrer votre navigateur :
            <br />
            - <strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données des sites ;
            <br />
            - <strong>Mozilla Firefox :</strong> Options &gt; Vie privée et sécurité &gt; Cookies et données de sites ;
            <br />
            - <strong>Apple Safari :</strong> Préférences &gt; Confidentialité &gt; Bloquer tous les cookies ;
            <br />
            - <strong>Microsoft Edge :</strong> Paramètres &gt; Autorisations de site &gt; Cookies et données de site.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Contact</h2>
          <p>
            Pour toute question relative à l&apos;utilisation des cookies sur notre site, vous pouvez nous écrire à{" "}
            <a href={`mailto:${company.email}`} style={{ textDecoration: "underline", color: "var(--color-wood)" }}>
              {company.email}
            </a>.
          </p>
        </section>

        <div style={{ marginTop: "2.5rem" }}>
          <Link
            href="/politique-de-confidentialite"
            style={{
              padding: "10px 20px",
              background: "var(--color-wood)",
              color: "#ffffff",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Consulter notre politique de confidentialité
          </Link>
        </div>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}

