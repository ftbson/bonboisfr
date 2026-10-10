import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import SiteFrame from "@/components/SiteFrame";
import { CartProvider } from "@/context/CartContext";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://bonbois.fr"),
  title: {
    default: "BonBois | Bois de chauffage sec, Granulés & Pellets de bois",
    template: "%s | BonBois",
  },
  description:
    "Vente en ligne et livraison de bois de chauffage sec prêt à l'emploi, granulés de bois (pellets), briquettes densifiées et poêles à bois. Livraison rapide à domicile.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BonBois | Bois de chauffage sec, Pellets & Combustibles bois",
    description:
      "Commandez votre bois de chauffage fendu et séché, granulés et poêles avec livraison rapide à domicile.",
    url: "https://bonbois.fr",
    siteName: "BonBois",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BonBois | Bois de chauffage sec, Pellets & Combustibles bois",
    description:
      "Vente et livraison de bois de chauffage, granulés et solutions de chauffage au bois.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Store", "OnlineStore"],
  name: company.name,
  legalName: company.legalName,
  image: "https://bonbois.fr/img/logo.png",
  url: company.domain,
  telephone: company.phoneRaw,
  email: company.email,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Credit Card, Bank Transfer, Wero",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3 IMPASSE de Lussan",
    postalCode: "31700",
    addressLocality: "Mondonville",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "Country",
    name: "France",
  },
  description: company.commercialActivity,
  vatID: company.tva,
  taxID: company.siren,
  identifier: [
    { "@type": "PropertyValue", name: "SIREN", value: company.siren },
    { "@type": "PropertyValue", name: "SIRET", value: company.siret },
  ],
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
