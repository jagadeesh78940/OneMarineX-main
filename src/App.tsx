// src/App.tsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Products from "./components/Product/Product";
import WhyOneMarineX from "./components/WhyOnemarineX/WhyOnemarinX";
import CTA from "./components/CTA/Cta";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <section id="about">
          <About />{" "}
        </section>
        <section id="products">
          <Products />{" "}
        </section>
        <section id="contact">
          {" "}
          <WhyOneMarineX />{" "}
        </section>
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default App;
