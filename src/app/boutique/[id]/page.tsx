import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { productsData } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = productsData.find((item) => item.id === id);

  if (!product) {
    return { title: "Produit introuvable | BonBois" };
  }

  return {
    title: `${product.title} | BonBois`,
    description: `Achetez ${product.title} au meilleur prix (${product.price.toFixed(2)} €). Bois sec et combustibles de qualité, livraison rapide à domicile.`,
    alternates: {
      canonical: `/boutique/${product.id}`,
    },
    openGraph: {
      title: `${product.title} | BonBois`,
      description: `Achetez ${product.title} sur BonBois. Livraison rapide sur palette.`,
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = productsData.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: `https://bonbois.fr${product.image}`,
    description: `${product.title} - Combustible haute performance proposé par BonBois.`,
    category: product.category,
    offers: {
      "@type": "Offer",
      url: `https://bonbois.fr/boutique/${product.id}`,
      priceCurrency: "EUR",
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "BonBois",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: product.price >= 150 ? 0 : 15,
          currency: "EUR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "FR",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "d",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "FR",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/CustomerReturnFees",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetails product={product} />
    </>
  );
}
