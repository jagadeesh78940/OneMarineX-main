// src/components/CTA/CTA.tsx
import React from "react";
import "./Cta.css";

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">
            Ready to Power Your Maritime Operations?
          </h2>
          <p className="cta__subtitle">
            Join the ecosystem that's transforming the
            <br />
            global shipping industry
          </p>
          <a href="#get-started" className="cta__button">
            Get Started with OneMarineX
          </a>
        </div>
        <div className="cta__image">
          <img src="/Frame 28.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
