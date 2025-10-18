// src/components/Products/Products.tsx
import React from "react";
import "./Product.css";

const Products: React.FC = () => {
  return (
    <section id="products" className="products">
      <div className="products__container">
        <h2 className="products__title">
          Our <span className="products__title--accent">Products</span>
        </h2>

        <div className="products__grid">
          {/* Supply2Ship Card */}
          <article className="product-card">
            <div className="product-card__image">
              <img
                src="/pexels-erik-mclean-5868633 2.svg"
                alt="Container ship at sunset"
              />
            </div>
            <div className="product-card__content">
              <h3 className="product-card__title">Supply2Ship</h3>
              <p className="product-card__subtitle">
                The Digital Marketplace for Marine Supplies.
              </p>
              <p className="product-card__description">
                Revolutionizing ship procurement with transparent pricing,
                verified suppliers, and real-time delivery tracking
              </p>
              <ul className="product-card__features">
                <li>• Order ship provisions & spares online</li>
                <li>• Compare live vendor quotes</li>
                <li>• Track deliveries to your berth</li>
              </ul>
              <a
                href="https://supply2ship.lovable.app"
                className="product-card__cta"
              >
                Explore Supply2Ship →
              </a>
            </div>
          </article>

          {/* HeyPorts Card */}
          <article className="product-card">
            <div className="product-card__image">
              <img
                src="/pexels-erik-mclean-5868633 2.svg"
                alt="Container ship at sunset"
              />
            </div>
            <div className="product-card__content">
              <h3 className="product-card__title">HeyPorts</h3>
              <p className="product-card__subtitle">
                The Seamless Travel & Crew Operations Platform
              </p>
              <p className="product-card__description">
                Empowering seafarers and port agents with verified hotels,
                transport, and compliance tools.
              </p>
              <ul className="product-card__features">
                <li>• Plan safe crew transfers</li>
                <li>• Book shore stays & cabs in minutes</li>
                <li>• Simplify agent coordination</li>
              </ul>
              <a
                href="https://hey-ports-connect.lovable.app/"
                className="product-card__cta"
              >
                Explore HeyPorts →
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Products;
