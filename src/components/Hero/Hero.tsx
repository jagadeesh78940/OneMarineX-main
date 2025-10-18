// src/components/Hero/Hero.tsx
import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* Left copy */}
        <div className="hero__copy">
          <h1 className="hero__title">
            Digitizing Maritime Operations. From Ship to Shore
          </h1>
          <p className="hero__subtitle">
            OneMarineX connects vessels, ports, agents and seafarers through a
            unified digital ecosystem for supplies, logistics, and welfare.
          </p>

          {/* Feature cards */}
          <div className="hero__features">
            <article className="feature-card">
              <img src="/Group 26623.svg" alt="Supply2Ship icon" />
              <div className="feature-card__body">
                <h3 className="feature-card__title">Supply2Ship</h3>
                <p className="feature-card__text">
                  Nullam a lacinia ipsum, nec dignissim purus. Nulla
                </p>
                <a
                  className="feature-card__cta"
                  href="https://supply2ship.lovable.app"
                >
                  Explore Supply 2 Ship →
                </a>
              </div>
            </article>

            <article className="feature-card">
              <img src="/Group 26622.svg" alt="HeyPorts icon" />
              <div className="feature-card__body">
                <h3 className="feature-card__title">HeyPorts</h3>
                <p className="feature-card__text">
                  Nullam a lacinia ipsum, nec dignissim purus. Nulla
                </p>
                <a
                  className="feature-card__cta"
                  href="https://hey-ports-connect.lovable.app/"
                >
                  Explore HeyPorts →
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* Right single image */}
        <div className="hero__media">
          <img
            src="/GroupHERO.svg"
            alt="Maritime operations collage"
            className="hero__composite-image"
          />
        </div>
      </div>

      {/* Big banner image */}
      <div className="hero__banner">
        <img src="/Frame 28.svg" alt="Dock with colorful containers" />
      </div>
    </section>
  );
};

export default Hero;
