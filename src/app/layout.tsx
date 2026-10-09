import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import SiteFrame from "@/components/SiteFrame";
import { CartProvider } from "@/context/CartContext";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://bonbois.fr"),
  title: {
    default: "BonBois | Réparation et produits électroniques grand public",
    template: "%s | BonBois",
  },
  description:
    "SARL Saminadin Réparation – réparation de produits électroniques grand public, bois de chauffage et produits associés sur BonBois.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BonBois | SARL Saminadin Réparation",
    description:
      "Réparation de produits électroniques grand public et offre de produits de chauffage et de qualité.",
    url: "https://bonbois.fr",
    siteName: "BonBois",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BonBois | SARL Saminadin Réparation",
    description:
      "Réparation de produits électroniques grand public et solutions de chauffage.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.legalName,
  legalName: company.legalName,
  image: "https://bonbois.fr/img/logo.png",
  url: company.domain,
  telephone: "",
  email: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 IMPASSE de Lussan",
    postalCode: "31700",
    addressLocality: "Mondonville",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  areaServed: "FR",
  description: company.activity,
  naics: "953220",
  industry: company.activity,
  vatID: company.tva,
  taxID: company.siren,
  identifier: [
    { "@type": "PropertyValue", name: "SIREN", value: company.siren },
    { "@type": "PropertyValue", name: "SIRET", value: company.siret },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="shortcut icon" href="/img/log.png" type="image/x-icon" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <CartProvider>
          <SiteFrame>{children}</SiteFrame>
        </CartProvider>
      </body>
    </html>
  );
}
