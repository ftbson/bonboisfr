import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Foire Aux Questions (FAQ) | Conseils Bois de Chauffage & Pellets | BonBois",
  description:
    "Toutes les réponses à vos questions sur notre bois de chauffage sec, nos granulés de bois, la livraison sur palette, le stockage et les commandes BonBois.",
  alternates: {
    canonical: "/faq",
  },
};

const faqItems = [
  {
    q: "Le bois de chauffage est-il réellement sec et prêt à brûler immédiatement ?",
    a: "Oui, absolument. Tous nos bois de chauffage (chêne, frêne, hêtre, charme) sont séchés artificiellement en séchoir professionnel ou naturellement sous abri pour garantir un taux d'humidité résiduelle strictement inférieur à 20 %. Cela vous assure un allumage facile, un pouvoir calorifique élevé et un encrassement minimal de votre conduit de cheminée.",
  },
  {
    q: "Quelles longueurs de bûches proposez-vous ?",
    a: "Nous proposons nos bûches coupées et fendues en plusieurs formats adaptés à tous les appareils de chauffage : 25 cm (idéal pour petits poêles modernes), 33 cm (format standard universel) et 50 cm (pour grands foyers ouverts et chaudières).",
  },
  {
    q: "Comment se déroule la livraison à domicile d'une palette ?",
    a: "La livraison s'effectue par camion porteur avec hayon élévateur et transpalette tout-terrain ou électrique. Le chauffeur dépose la palette au plus près de votre zone de stockage (devant votre garage ou sur votre allée), à condition que l'accès soit carrossable et sur sol dur.",
  },
  {
    q: "Quels sont les frais et les délais de livraison ?",
    a: "La livraison est GRATUITE pour toute commande d'un montant supérieur ou égal à 150 € TTC en France métropolitaine. Pour les commandes d'un montant inférieur, un forfait de 15 € TTC est appliqué. Les délais d'acheminement constatés sont de 24 à 72 heures ouvrées après préparation de commande.",
  },
  {
    q: "Comment sont conditionnés les granulés de bois (pellets) ?",
    a: "Nos granulés de bois haute performance sont livrés sur palette complète de 65 ou 66 sacs de 15 kg (soit environ 975 à 990 kg de combustible), hermétiquement protégés par une housse étanche.",
  },
  {
    q: "Quels sont les moyens de paiement acceptés ?",
    a: "Vous pouvez régler votre commande en toute sécurité par carte bancaire (Stripe avec protection 3D Secure), par virement bancaire ou via l'application Wero.",
  },
  {
    q: "Puis-je exercer mon droit de rétractation ?",
    a: "Oui, conformément à la réglementation, vous disposez d'un délai de 14 jours francs après réception pour demander le retour de vos produits intacts et non utilisés. Le remboursement est effectué sous 14 jours après retour.",
  },
];

export default function FaqPage() {
  return (
    <article className="legal-page">
      <div className="legal-container">
        <span className="section-subtitle">Aide & Conseils</span>
        <h1 className="legal-title">Foire Aux Questions (FAQ)</h1>
        <p className="legal-intro">
          Retrouvez les réponses aux questions les plus fréquemment posées par nos clients
          sur la sélection du bois, nos granulés, la livraison et nos services.
        </p>

        {faqItems.map((item, idx) => (
          <section key={idx} className="legal-section">
            <h2 style={{ fontSize: "1.1rem", color: "#111827", marginBottom: "0.5rem" }}>
              {item.q}
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>{item.a}</p>
          </section>
        ))}

        <div
          style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "var(--color-bg-light)",
            borderRadius: "16px",
            border: "1px solid rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--color-text)" }}>
            Vous avez une autre question ?
          </h3>
          <p style={{ color: "#64748b", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            Notre équipe se tient à votre entière disposition pour vous guider et vous conseiller.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
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
              Poser une question
            </Link>
            <Link
              href="/boutique"
              style={{
                padding: "12px 24px",
                background: "#ffffff",
                color: "var(--color-text)",
                border: "1px solid #d1d5db",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Voir nos produits
            </Link>
          </div>
        </div>

        <p className="legal-updated">
          Dernière mise à jour : 10 octobre 2026
        </p>
      </div>
    </article>
  );
}

