"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const addProductToCart = () => {
    for (let index = 0; index < quantity; index += 1) {
      addToCart({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.image,
      });
    }
  };

  return (
    <main className="product-page">
      <div className="product-page-container">
        <div className="product-page-breadcrumb">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <Link href="/boutique">Boutique</Link>
          <span>/</span>
          <span>{product.title}</span>
        </div>

        <div className="product-detail-layout">
          <div className="product-detail-image-wrap">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="product-detail-image"
              priority
            />
            {product.discount && (
              <span className="badge-discount">{product.discount}</span>
            )}
          </div>

          <div className="product-detail-content">
            <span className="product-category">{product.category}</span>
            <h1>{product.title}</h1>
            <div className="product-rating product-detail-rating">
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fa-solid fa-star ${index < Math.floor(product.rating || 0) ? "active" : ""}`}
                  ></i>
                ))}
              </div>
              {product.reviewsCount !== undefined && (
                <span className="reviews-count">
                  ({product.reviewsCount} avis)
                </span>
              )}
            </div>

            <div className="product-detail-price">
              {product.oldPrice && (
                <span className="old-price">
                  {product.oldPrice.toFixed(2)} €
                </span>
              )}
              <strong>{product.price.toFixed(2)} €</strong>
              <span className="product-stock-tag" style={{ color: "var(--color-success)", fontWeight: 700, fontSize: "0.85rem", marginLeft: "1rem", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <i className="fa-solid fa-circle-check"></i> En stock
              </span>
            </div>
            <p className="product-detail-description">
              Combustible rigoureusement sélectionné, séché et contrôlé. Prêt à être utilisé dès réception pour un rendement thermique maximal et une combustion propre.
            </p>

            <div className="product-reassurance-list" style={{ margin: "1.25rem 0", display: "grid", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-text)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fa-solid fa-truck" style={{ color: "var(--color-wood)" }}></i>
                <span>Livraison sur palette sous 24 à 72h ouvrées (Gratuite dès 150 €)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fa-solid fa-rotate-left" style={{ color: "var(--color-wood)" }}></i>
                <span>Droit de rétractation légal sous 14 jours</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="fa-solid fa-shield-halved" style={{ color: "var(--color-wood)" }}></i>
                <span>Paiement sécurisé par CB (Stripe), Virement bancaire ou Wero</span>
              </div>
            </div>

            <div className="product-purchase-row">
              <div className="quantity-control" aria-label="Quantité">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  aria-label="Diminuer la quantité"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="btn-detail-add-cart"
                onClick={addProductToCart}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                Ajouter au panier
              </button>
            </div>
            <Link href="/panier" className="product-cart-link">
              Voir le panier
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
