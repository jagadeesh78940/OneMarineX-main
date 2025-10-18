// src/components/Footer/Footer.tsx
import React, { useState } from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left Section - Brand & Quick Links */}
        <div className="footer__left">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/Group 26619.svg" alt="" />
            </div>
            <span className="footer__brand-text">
              <span style={{ color: "#ff6b35" }}>One</span>
              <span style={{ color: "#ffffff" }}>MarineX</span>
            </span>
          </div>

          <p className="footer__tagline">From click to deck. Powered by AI</p>

          <div className="footer__links">
            <h3 className="footer__links-title">Quick Links</h3>
            <nav className="footer__nav">
              <a href="#home" className="footer__link">
                Home
              </a>
              <a href="#about" className="footer__link">
                About Us
              </a>
              <a href="#products" className="footer__link">
                Our Products
              </a>
              <a href="#contact" className="footer__link">
                Contact Us
              </a>
            </nav>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="footer__right">
          <h3 className="footer__newsletter-title">Newsletter</h3>
          <p className="footer__newsletter-subtitle">
            Stay updated with our newsletter
          </p>

          <form className="footer__form" onSubmit={handleSubmit}>
            <div className="footer__form-group">
              <label htmlFor="email" className="footer__label">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="footer__input"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="footer__submit">
              Subscribe →
            </button>
          </form>

          <p className="footer__disclaimer">
            By subscribing you agree with our privacy policy and provide consent
            to receive updates from out company.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <div className="footer__copyright">
            <span>© OneMarineX.</span>
            <div className="footer__social">
              <a
                href="#instagram"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#linkedin"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#facebook"
                className="footer__social-link"
                aria-label="Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__legal">
            <a href="#terms" className="footer__legal-link">
              Terms of Service
            </a>
            <a href="#privacy" className="footer__legal-link">
              Privacy Policy
            </a>
            <a href="#cookies" className="footer__legal-link">
              Cookie Setting
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
