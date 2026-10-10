"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

type Customer = {
  firstName: string;
  lastName: string;
  country: string;
  streetAddress: string;
  whatsapp: string;
  email: string;
};

type WeroDetails = {
  enabled: boolean;
  recipientName?: string;
  phoneNumber?: string;
};

type BankTransferDetails = {
  enabled: boolean;
  accountName?: string;
  iban?: string;
  bic?: string;
};

type PaymentMethod = "stripe" | "wero" | "bank_transfer";

const emptyCustomer: Customer = {
  firstName: "",
  lastName: "",
  country: "France",
  streetAddress: "",
  whatsapp: "",
  email: "",
};

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, clearCart } =
    useCart();
  const [customer, setCustomer] = useState<Customer>(emptyCustomer);
  const [weroDetails, setWeroDetails] = useState<WeroDetails | null>(null);
  const [bankTransferDetails, setBankTransferDetails] =
    useState<BankTransferDetails | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("stripe");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const shippingCost = subtotal > 150 || cart.length === 0 ? 0 : 15;
  const grandTotal = subtotal + shippingCost;

  useEffect(() => {
    fetch("/api/wero")
      .then(async (response) => {
        if (!response.ok) throw new Error("Chargement Wero impossible");
        setWeroDetails(await response.json());
      })
      .catch(() => setWeroDetails({ enabled: false }));

    fetch("/api/bank-transfer")
      .then(async (response) => {
        if (!response.ok) throw new Error("Chargement bancaire impossible");
        setBankTransferDetails(await response.json());
      })
      .catch(() => setBankTransferDetails({ enabled: false }));
  }, []);

  const updateCustomer = (field: keyof Customer, value: string) =>
    setCustomer((current) => ({ ...current, [field]: value }));

  const checkout = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const checkoutRoutes: Record<PaymentMethod, string> = {
        stripe: "/api/checkout/stripe",
        wero: "/api/checkout/wero",
        bank_transfer: "/api/checkout/bank-transfer",
      };
      const response = await fetch(checkoutRoutes[paymentMethod], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer,
          items: cart.map(({ id, quantity }) => ({ id, quantity })),
        }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Une erreur est survenue.");
      if (paymentMethod === "stripe") {
        if (!data.url)
          throw new Error("L'URL de paiement Stripe est manquante.");
        window.location.assign(data.url);
        return;
      }

      if (paymentMethod === "wero") {
        setMessage(
          `Commande ${data.orderId} enregistrée. Envoyez ${data.grandTotal.toFixed(2)} € via Wero au ${data.weroDetails.phoneNumber}, au nom de ${data.weroDetails.recipientName}.`,
        );
      } else {
        const { accountName, iban, bic } = data.bankDetails;
        const details = [
          accountName && `Bénéficiaire : ${accountName}`,
          iban && `IBAN : ${iban}`,
          bic && `BIC : ${bic}`,
        ]
          .filter(Boolean)
          .join(" | ");
        setMessage(
          `Commande ${data.orderId} enregistrée. Effectuez le virement de ${data.grandTotal.toFixed(2)} €${details ? ` vers ${details}` : ". Contactez-nous pour obtenir les coordonnées bancaires"}. Référence : ${data.orderId}.`,
        );
      }
      clearCart();
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Une erreur est survenue.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="cart-page">
      <div className="cart-container">
        <h1 className="cart-page-title">Mon Panier</h1>
        {cart.length === 0 ? (
          <div className="empty-cart">
            {message && <p className="checkout-message">{message}</p>}
            <i className="fa-solid fa-basket-shopping empty-icon"></i>
            <h2>Votre panier est vide</h2>
            <p>Découvrez nos produits et faites votre choix.</p>
            <Link href="/boutique" className="btn-primary-cart">
              Retour à la boutique
            </Link>
          </div>
        ) : (
          <form className="cart-layout" onSubmit={checkout}>
            <div className="cart-items-section">
              <div className="cart-items-header">
                <span>Produit</span>
                <span>Prix</span>
                <span>Quantité</span>
                <span>Total</span>
                <span></span>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-info">
                    <div className="cart-item-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <p className="cart-item-category">{item.category}</p>
                      <h4 className="cart-item-title">{item.title}</h4>
                    </div>
                  </div>
                  <div className="cart-item-price">
                    {item.price.toFixed(2).replace(".", ",")} €
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    {(item.price * item.quantity).toFixed(2).replace(".", ",")}{" "}
                    €
                  </div>
                  <button
                    type="button"
                    className="btn-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Supprimer"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              ))}
              <div className="cart-actions-bottom">
                <button type="button" className="btn-clear" onClick={clearCart}>
                  Vider le panier
                </button>
                <Link href="/boutique" className="btn-continue">
                  <i className="fa-solid fa-arrow-left"></i> Continuer mes
                  achats
                </Link>
              </div>
              <section className="checkout-customer">
                <h2>Vos informations</h2>
                <div className="checkout-fields">
                  {(
                    [
                      ["firstName", "Prénom"],
                      ["lastName", "Nom"],
                      ["email", "Email"],
                      ["whatsapp", "Téléphone / WhatsApp"],
                      ["streetAddress", "Adresse de livraison"],
                      ["country", "Pays"],
                    ] as [keyof Customer, string][]
                  ).map(([field, label]) => (
                    <label key={field}>
                      {label}
                      <input
                        required
                        type={field === "email" ? "email" : "text"}
                        value={customer[field]}
                        onChange={(event) =>
                          updateCustomer(field, event.target.value)
                        }
                      />
                    </label>
                  ))}
                </div>
              </section>
            </div>
            <div className="cart-summary-card">
              <h3>Récapitulatif de la commande</h3>
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2).replace(".", ",")} €</span>
              </div>
              <div className="summary-row">
                <span>Livraison</span>
                <span>
                  {shippingCost === 0
                    ? "Gratuite"
                    : `${shippingCost.toFixed(2).replace(".", ",")} €`}
                </span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--color-wood)", marginTop: "-0.5rem", marginBottom: "0.5rem" }}>
                Livraison offerte dès 150 € d&apos;achat en France métropolitaine
              </p>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total (TTC)</span>
                <span>{grandTotal.toFixed(2).replace(".", ",")} €</span>
              </div>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="payment-method"
                    value="stripe"
                    checked={paymentMethod === "stripe"}
                    onChange={() => setPaymentMethod("stripe")}
                  />
                  Carte bancaire (Stripe)
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment-method"
                    value="wero"
                    checked={paymentMethod === "wero"}
                    disabled={!weroDetails?.enabled}
                    onChange={() => setPaymentMethod("wero")}
                  />
                  Wero
                  {!weroDetails?.enabled && " (indisponible)"}
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment-method"
                    value="bank_transfer"
                    checked={paymentMethod === "bank_transfer"}
                    disabled={!bankTransferDetails?.enabled}
                    onChange={() => setPaymentMethod("bank_transfer")}
                  />
                  Virement bancaire
                  {!bankTransferDetails?.enabled && " (indisponible)"}
                </label>
              </div>
              {paymentMethod === "wero" && weroDetails?.enabled ? (
                <div className="bank-transfer-details" role="status">
                  <strong>Coordonnées Wero</strong>
                  {weroDetails.recipientName && (
                    <p>
                      <span>Bénéficiaire</span> {weroDetails.recipientName}
                    </p>
                  )}
                  {weroDetails.phoneNumber && (
                    <p>
                      <span>Numéro</span> {weroDetails.phoneNumber}
                    </p>
                  )}
                  <p className="bank-transfer-reference">
                    Effectuez le paiement dans votre application Wero. Votre
                    commande restera en attente de vérification.
                  </p>
                </div>
              ) : paymentMethod === "wero" ? (
                <p className="checkout-message">
                  {weroDetails === null
                    ? "Chargement des coordonnées Wero..."
                    : "Le paiement Wero n'est pas encore configuré. Contactez-nous pour finaliser votre commande."}
                </p> 
              ) : paymentMethod === "bank_transfer" &&
                bankTransferDetails?.enabled ? (
                <div className="bank-transfer-details" role="status">
                  <strong>Coordonnées bancaires</strong>
                  {bankTransferDetails.accountName && (
                    <p>
                      <span>Bénéficiaire</span>{" "}
                      {bankTransferDetails.accountName}
                    </p>
                  )}
                  {bankTransferDetails.iban && (
                    <p>
                      <span>IBAN</span> {bankTransferDetails.iban}
                    </p>
                  )}
                  {bankTransferDetails.bic && (
                    <p>
                      <span>BIC</span> {bankTransferDetails.bic}
                    </p>
                  )}
                  <p className="bank-transfer-reference">
                    Indiquez la référence de commande lors du virement. Votre
                    commande restera en attente de réception des fonds.
                  </p>
                </div>
              ) : paymentMethod === "bank_transfer" ? (
                <p className="checkout-message">
                  {bankTransferDetails === null
                    ? "Chargement des coordonnées bancaires..."
                    : "Le virement bancaire n'est pas encore configuré. Contactez-nous pour finaliser votre commande."}
                </p>
              ) : null}
              {message && <p className="checkout-message">{message}</p>}
              <button
                className="btn-checkout"
                type="submit"
                disabled={
                  loading ||
                  (paymentMethod === "wero" && !weroDetails?.enabled) ||
                  (paymentMethod === "bank_transfer" &&
                    !bankTransferDetails?.enabled)
                }
              >
                {loading
                  ? "Traitement..."
                  : `Commander avec ${
                      paymentMethod === "stripe"
                        ? "Stripe"
                        : paymentMethod === "wero"
                          ? "Wero"
                          : "virement"
                    }`}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
