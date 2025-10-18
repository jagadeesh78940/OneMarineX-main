// src/components/WhyOneMarineX/WhyOneMarineX.tsx
import React from "react";
import "./WhyOneMarineX.css";

const WhyOneMarineX: React.FC = () => {
  const features = [
    {
      icon: "/Discovery.svg",
      color: "coral",
      title: "Unified Maritime Ecosystem",
      description:
        "We're building a connected digital infrastructure that integrates ports, ships, vendors, and crew into one synchronized ecosystem — making maritime operations smarter, faster, and transparent.",
    },
    {
      icon: "/Star.svg",
      color: "blue",
      title: "AI-Powered Maritime Intelligence",
      description:
        "From procurement to compliance to crew experiences — AI drives insights, predictions, and automation that eliminate inefficiency and empower decision-making in real time.",
    },
    {
      icon: "/Shield.svg",
      color: "green",
      title: "Transparency at the core",
      description:
        "Every transaction, interaction, and document is verified, traceable, and auditable. No hidden charges, no manipulation — just pure trust across the maritime chain.",
    },
    {
      icon: "/Shield.svg",
      color: "green",
      title: "Global-Ready Digital Payments",
      description:
        "Our system bridges cross-border payments and digital credits — creating seamless financial flows between ports, vendors, and seafarers, powered by blockchain-backed security.",
    },
    {
      icon: "/Shield.svg",
      color: "green",
      title: "Built by Mariners, Engineered for Scale",
      description:
        "Born out of real sea experience and built with modern technology, OneMarineX merges domain expertise with engineering precision — to create solutions that actually work on deck, not just on paper.",
    },
    {
      icon: "/Shield.svg",
      color: "green",
      title: "Sustainable and Future-Proof",
      description:
        "By digitizing physical operations, reducing wastage, and optimizing routes and supplies, we make maritime logistics greener, leaner, and ready for the net-zero century.",
    },
  ];

  return (
    <section className="why">
      <div className="why__container">
        <div className="why__header">
          <h2 className="why__title">Why OneMarinex</h2>
          <a href="#contact" className="why__cta">
            Contact Us
          </a>
        </div>

        <div className="why__grid">
          {features.map((feature, index) => (
            <article key={index} className="why__card">
              <div className={`why__icon why__icon--${feature.color}`}>
                <div>
                  <img src={feature.icon} alt="" />{" "}
                </div>
              </div>
              <h3 className="why__card-title">{feature.title}</h3>
              <p className="why__card-description">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOneMarineX;
