import type { MetadataRoute } from "next";
import { productsData } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bonbois.fr";

  const staticPages = [
    "",
    "/boutique",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/termes-et-conditions",
    "/politique-de-confidentialite",
    "/politique-cookies",
    "/livraison",
    "/retours",
    "/livraison-et-retours",
    "/paiement",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages = productsData.map((product) => ({
    url: `${baseUrl}/boutique/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
