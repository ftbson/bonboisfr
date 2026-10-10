"use client";

import { useState } from "react";

import { company } from "@/lib/company";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      question: "Quelles essences de bois BonBois propose-t-il ?",
      answer:
        "Nous proposons principalement des bois durs à haut pouvoir calorifique : chêne, hêtre, charme et frêne. Ces essences brûlent longtemps et de manière homogène, ce qui les rend idéales pour les poêles, cheminées et foyers fermés.",
    },
    {
      question: "Le bois est-il sec et prêt à l'emploi ?",
      answer:
        "Oui, l'ensemble de notre bois de chauffage est séché en séchoir (taux d'humidité résiduelle inférieur à 20 %) et utilisable dès la livraison pour une combustion optimale et sans fumée excessive.",
    },
    {
      question: "Quelles longueurs de bûches sont disponibles ?",
      answer:
        "Nos bûches sont coupées de manière standard en 25 cm, 33 cm ou 50 cm, ce qui est idéal pour la majorité des poêles, inserts et cheminées modernes.",
    },
    {
      question: "Comment se déroule la livraison à domicile ?",
      answer:
        "Nous livrons vos palettes de bois directement chez vous sous 24 à 72 heures ouvrées. Le déchargement s'effectue au transpalette au plus près de votre espace de stockage accessible en camion.",
    },
    {
      question: "Quels sont les frais de livraison ?",
      answer:
        "La livraison est gratuite pour toute commande d'un montant supérieur ou égal à 150 € TTC en France métropolitaine. Pour les commandes inférieures à 150 €, un forfait de livraison de 15 € TTC est appliqué.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* COLONNE GAUCHE: FAQ */}
          <div className="faq-column">
            <span className="section-subtitle">INFORMATIONS & QUESTIONS</span>
            <h2 className="section-title">FOIRE AUX QUESTIONS</h2>

            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openFaq === index ? "active" : ""}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                    <i
                      className={`fa-solid fa-chevron-${openFaq === index ? "up" : "down"}`}
                    ></i>
                  </button>
                  <div
                    className="faq-answer-wrapper"
                    style={{
                      maxHeight: openFaq === index ? "200px" : "0",
                      opacity: openFaq === index ? 1 : 0,
                    }}
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Encadré Coordonnées directes */}
            <div
              className="direct-contact-box"
              style={{
                marginTop: "2.5rem",
                padding: "1.5rem",
                borderRadius: "16px",
                background: "var(--color-bg-light)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--color-text)" }}>
                Nos coordonnées
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#4b5563", marginBottom: "0.5rem" }}>
                <i className="fa-solid fa-location-dot" style={{ color: "var(--color-wood)", width: "20px" }}></i>
                {company.addressLabel}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#4b5563", marginBottom: "0.5rem" }}>
                <i className="fa-solid fa-envelope" style={{ color: "var(--color-wood)", width: "20px" }}></i>
                <a href={`mailto:${company.email}`} style={{ color: "inherit", textDecoration: "underline" }}>
                  {company.email}
                </a>
              </p>
              <p style={{ fontSize: "0.9rem", color: "#4b5563" }}>
                <i className="fa-solid fa-phone" style={{ color: "var(--color-wood)", width: "20px" }}></i>
                <a href={`tel:${company.phoneRaw}`} style={{ color: "inherit" }}>
                  {company.phone}
                </a>
              </p>
            </div>
          </div>

          {/* SÉPARATEUR VERTICAL */}
          <div className="vertical-divider"></div>

          {/* COLONNE DROITE: FORMULAIRE */}
          <div className="form-column">
            <span className="section-subtitle">CONTACTEZ-NOUS</span>
            <h2 className="section-title">
              N&apos;hésitez pas à nous contacter pour toute question.
            </h2>

            {isSubmitted ? (
              <div
                className="contact-success-box"
                style={{
                  padding: "2rem",
                  background: "#f0fdf4",
                  border: "1px solid var(--color-success)",
                  borderRadius: "16px",
                  color: "#166534",
                  marginTop: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  <i className="fa-solid fa-circle-check" style={{ marginRight: "8px" }}></i>
                  Message envoyé avec succès !
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Merci {formData.name}. Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais à l&apos;adresse <strong>{formData.email}</strong>.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-grid">
                  <div>
                    <label htmlFor="contact-name" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4b5563", display: "block", marginBottom: "4px" }}>
                      Nom et prénom *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="input-underline"
                      placeholder="Votre nom complet"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4b5563", display: "block", marginBottom: "4px" }}>
                      Adresse e-mail *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="input-underline"
                      placeholder="votre.email@exemple.fr"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4b5563", display: "block", marginBottom: "4px" }}>
                      Téléphone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="input-underline"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4b5563", display: "block", marginBottom: "4px" }}>
                      Sujet de votre demande
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className="input-underline"
                      placeholder="Livraison, devis, information..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <label htmlFor="contact-message" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#4b5563", display: "block", marginBottom: "4px" }}>
                    Votre message *
                  </label>
                  <textarea
                    id="contact-message"
                    className="input-underline textarea"
                    placeholder="Précisez votre demande ou vos questions concernant nos produits et services..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-contact">
                  ENVOYER LE MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
