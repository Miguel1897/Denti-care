// src/pages/Home.jsx
import React from "react";
import "../assets/css/HomeStyles.css";
import "../assets/css/GeneralStyles.css";

import IntroHome from "../components/IntroHome";
import AboutUsSection from "../components/AboutUsSection";
import ServicesSection from "../components/ServicesSection";
import BookSection from "../components/BookSection";
import ContactSection from "../components/ContactSection";

import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  // Solo pacientes ven estas secciones
  if (user?.role !== "paciente") {
    return null;
  }

  return (
    <>
      {/* Hero / Intro */}
      <section id="home" className="home-hero">
        <div className="home-hero-content">
          <IntroHome />
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section id="sobre-nosotros" className="section section-light">
        <div className="container">
          <h2 className="section-title">Sobre Nosotros</h2>
          <AboutUsSection />
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section section-light">
        <div className="container">
          <h2 className="section-title">Servicios</h2>
          <ServicesSection />
        </div>
      </section>

      {/* Agenda tu turno */}
      <section id="agenda-turno" className="section section-light">
        <div className="container">
          <h2 className="section-title">Agenda tu Turno</h2>
          <BookSection />
        </div>
      </section>

      {/* Contacto con fondo azul */}
      <section id="contacto" className="section section-blue">
        <div className="container">
          <h2 className="section-title text-light">Contáctanos</h2>
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default Home;

