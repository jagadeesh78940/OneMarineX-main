// src/components/About/About.tsx
import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <span className="about__label">
            About <span className="about__label--accent">Us</span>
          </span>
        </div>

        <h2 className="about__title">
          Reimagining Maritime Operations for the Digital Era.
        </h2>

        <p className="about__description">
          OneMarineX is building the world's first integrated platform for ship
          supplies, port logistics, and crew experiences. By combining AI,
          verified vendors, and real-time port data, we make every voyage more
          efficient, transparent, and human-centered. With a global network of
          trusted port partners, smart digital workflows that eliminate manual
          delays, and a crew-centric approach designed by mariners for mariners,
          OneMarineX is redefining how the maritime world connects and operates.
        </p>
      </div>
    </section>
  );
};

export default About;
