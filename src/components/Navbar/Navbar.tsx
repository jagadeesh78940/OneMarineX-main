// src/components/Navbar/Navbar.tsx
import React, { useEffect, useState } from "react";
import cn from "classnames";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onLinkClick = () => setOpen(false);

  return (
    <header className={cn("navbar", { "navbar--sticky": sticky })}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand" aria-label="One MarineX Home">
          <div className="navbar__logo">
            <img src="/Group 26619.svg" alt="" />
          </div>
          <span className="navbar__brand-text">
            <span style={{ color: "#ff6b35" }}>One</span>
            <span style={{ color: "#111827" }}>MarineX</span>
          </span>
        </a>

        <nav className="navbar__nav" role="navigation" aria-label="Primary">
          <ul className="navbar__links">
            <li>
              <a href="#home" className="navbar__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="navbar__link">
                Our Products
              </a>
            </li>
          </ul>
        </nav>

        <div className="navbar__cta-wrap">
          <a href="#contact" className="navbar__cta">
            Contacts Us →
          </a>

          <button
            className={cn("navbar__hamburger", { "is-open": open })}
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn("navbar__mobile", { "navbar__mobile--open": open })}
      >
        <a href="#home" className="navbar__mobile-link" onClick={onLinkClick}>
          Home
        </a>
        <a href="#about" className="navbar__mobile-link" onClick={onLinkClick}>
          About Us
        </a>
        <a
          href="#products"
          className="navbar__mobile-link"
          onClick={onLinkClick}
        >
          Our Products
        </a>
        <a href="#contact" className="navbar__mobile-cta" onClick={onLinkClick}>
          Contacts Us →
        </a>
      </div>
    </header>
  );
};

export default Navbar;
