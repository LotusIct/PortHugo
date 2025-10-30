import React from "react";
import "../styles/Hero.css";
import advogadoImg from "../assets/advogado1.png"; // imagem do advogado

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Protegendo seus direitos com experiência e empatia</h1>
        <p>Atendimento personalizado em Direito Civil e Família.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Entre em Contato</a>
          <a href="#areas" className="btn-secondary">Áreas de Atuação</a>
        </div>
      </div>

      {/* A imagem ocupa a parte vermelha recortada */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${advogadoImg})` }}
      ></div>
    </section>
  );
}

export default Hero;
