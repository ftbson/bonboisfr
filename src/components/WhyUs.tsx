"use client";

import { useEffect, useState, useRef } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
  active?: boolean;
}

const features: Feature[] = [
  {
    icon: "fa-solid fa-truck-fast",
    title: "Livraison rapide",
    description:
      "Livraison sur palette sous 24 à 72 heures ouvrées en France métropolitaine.",
    active: true,
  },
  {
    icon: "fa-solid fa-award",
    title: "Qualité supérieure",
    description: "Bois fendu séché au séchoir (< 20 % d'humidité), certifié et prêt à brûler.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Paiement sécurisé",
    description:
      "Carte bancaire (Stripe), virement bancaire ou Wero – transactions entièrement cryptées.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Service client",
    description:
      "Conseils personnalisés à votre écoute du lundi au samedi.",
  },
];

interface Stat {
  id: string;
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { id: "clients", target: 15000, suffix: "+", label: "CLIENTS SATISFAITS" },
  { id: "steres", target: 25000, suffix: "", label: "STÈRES LIVRÉS" },
  { id: "experience", target: 12, suffix: "", label: "ANS D'EXPÉRIENCE" },
  { id: "departments", target: 96, suffix: "", label: "DÉPARTEMENTS DESSERVIS" },
];

export default function WhyUs() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    clients: 0,
    steres: 0,
    experience: 0,
    departments: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const animateStats = () => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        clients: Math.floor(progress * 15000),
        steres: Math.floor(progress * 25000),
        experience: Math.floor(progress * 12),
        departments: Math.floor(progress * 96),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          clients: 15000,
          steres: 25000,
          experience: 12,
          departments: 96,
        });
      }
    }, intervalTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="whyus-section" ref={sectionRef}>
      <div className="whyus-container">
        {/* En-tête */}
        <div className="whyus-header">
          <h2 className="whyus-title">Pourquoi bonboisfr</h2>
          <p className="whyus-subtitle">
            Quatre promesses sur lesquelles vous pouvez compter.
          </p>
          <div className="whyus-line"></div>
        </div>

        {/* Grille d'avantages */}
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div
                className={`feature-icon-wrap ${
                  feature.active ? "active" : ""
                }`}
              >
                <i className={feature.icon}></i>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bannière statistique dynamique */}
        <div className="stats-banner">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">
                {counts[stat.id]?.toLocaleString("fr-FR") ?? 0}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
