"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { productsData } from "@/data/products";

const poeleProducts = productsData.filter((p) => p.category === "Poêle à bois");

export default function Poele() {
  const { addToCart } = useCart();

  return (
    <section className="bestsellers-section">
      <div className="bestsellers-container">
        {/* En-tête */}
        <div className="bestsellers-header">
          <h2 className="bestsellers-title">Nos meilleurs poêles à bois</h2>
          <p className="bestsellers-subtitle">
            Soigneusement sélectionnés, testés et disponibles immédiatement.
          </p>
          <div className="bestsellers-line"></div>
        </div>

        {/* Grille de produits */}
        <div className="products-grid">
          {poeleProducts.map((product) => (
            <div key={product.id} className="product-card">
              {/* Image & Badge de réduction */}
              <Link
                href={`/boutique/${product.id}`}
                className="product-image-link"
                aria-label={`Voir ${product.title}`}
              >
                <div className="product-image-wrap">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="product-image"
                  />
                  {product.discount && (
                    <span className="badge-discount">{product.discount}</span>
                  )}
                </div>
              </Link>

              {/* Détails du produit */}
              <div className="product-info">
                <Link
                  href={`/boutique/${product.id}`}
                  className="product-detail-link"
                >
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>

                  {/* Avis */}
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa-solid fa-star ${
                            i < Math.floor(product.rating || 0) ? "active" : ""
                          }`}
                        ></i>
                      ))}
                    </div>
                    {product.reviewsCount !== undefined && (
                      <span className="reviews-count">
                        ({product.reviewsCount})
                      </span>
                    )}
                  </div>

                  {/* Prix */}
                  <div className="product-price-box">
                    {product.oldPrice && (
                      <span className="old-price">
                        {product.oldPrice.toFixed(2).replace(".", ",")} €
                      </span>
                    )}
                    <span className="current-price">
                      {product.price.toFixed(2).replace(".", ",")} €
                    </span>
                  </div>
                </Link>

                {/* Bouton d'ajout */}
                <button
                  className="btn-add-cart"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.title,
                      category: product.category,
                      price: product.price,
                      oldPrice: product.oldPrice,
                      image: product.image,
                    })
                  }
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}