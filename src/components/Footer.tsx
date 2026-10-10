import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/company";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Colonne 1 : Brand, description & Réseaux sociaux */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <Image
              src="/img/logo.png"
              alt="BonBois"
              width={130}
              height={45}
            />
          </div>
          <p className="footer-description">
            Spécialiste de la vente et livraison de bois de chauffage sec, granulés
            de bois et poêles à bois de qualité supérieure en France métropolitaine.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Colonne 2 : Produits */}
        <div className="footer-col">
          <h4 className="footer-heading">PRODUITS</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/boutique?category=Bois de chauffage">Bois de chauffage</Link>
            </li>
            <li>
              <Link href="/boutique?category=Pellets de bois">Pellets de bois</Link>
            </li>
            <li>
              <Link href="/boutique?category=Bûches compressées">Briquettes de bois</Link>
            </li>
            <li>
              <Link href="/boutique?category=Bûches compressées">Bois densifié</Link>
            </li>
            <li>
              <Link href="/boutique?category=Poêle à bois">Poêles à bois</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Information */}
        <div className="footer-col">
          <h4 className="footer-heading">INFORMATIONS</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/livraison">Livraison & Frais</Link>
            </li>
            <li>
              <Link href="/retours">Retours & Remboursements</Link>
            </li>
            <li>
              <Link href="/paiement">Paiement sécurisé</Link>
            </li>
            <li>
              <Link href="/termes-et-conditions">
                Conditions Générales de Vente
              </Link>
            </li>
            <li>
              <Link href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/politique-cookies">Politique de cookies</Link>
            </li>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Support */}
        <div className="footer-col">
          <h4 className="footer-heading">SUPPORT</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/faq">FAQ & Conseils</Link>
            </li>
            <li>
              <Link href="/contact">Contactez-nous</Link>
            </li>
            <li>
              <Link href="/a-propos">À propos de BonBois</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 5 : Contact */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">CONTACT</h4>
          <ul className="contact-info-list">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>{company.addressLabel}</span>
            </li>
            <li>
              <i className="fa-solid fa-id-card"></i>
              <span>SIREN : {company.siren}</span>
            </li>
            <li>
              <i className="fa-solid fa-building"></i>
              <span>SIRET : {company.siret}</span>
            </li>
            <li>
              <i className="fa-solid fa-receipt"></i>
              <span>TVA : {company.tva}</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre du bas : Copyright & Moyens de paiement */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © 2026 {company.name} ({company.legalName}). Tous droits réservés. · SIREN : {company.siren} · SIRET : {company.siret} · TVA : {company.tva}
          </p>
          <div className="payment-icons">
            <span className="payment-card">VISA</span>
            <span className="payment-card">
              <i className="fa-brands fa-cc-mastercard"></i>
            </span>
            <span className="payment-card amex">AM EX</span>
            <span className="payment-card paypal">Virement</span>
            <span className="payment-card applepay">Wero</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
