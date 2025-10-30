import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logohbu3.png";

// Importando ícones do React Icons
import { FaInstagram, FaLinkedin, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Topo do rodapé */}
      <div className="footer-top">
        {/* Logo */}
        <div className="footer-logo-section">
          <img src={logo} alt="Logo Hugo Barroso Uelze" className="footer-logo" />
          <p className="footer-logo-text">Defendendo seus direitos com ética e excelência.</p>
        </div>

        {/* Links */}
        <div className="footer-links-section">
          <div className="footer-column">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#civil">Direito Civil</a></li>
              <li><a href="#trabalhista">Direito Trabalhista</a></li>
              <li><a href="#empresarial">Direito Empresarial</a></li>
              <li><a href="#familia">Direito de Família</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#atuacao">Áreas de Atuação</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          {/* Coluna de contato */}
          <div className="footer-column">
            <h4>Contato</h4>
            <ul>
  <li>
    <FaPhoneAlt /> 
    <a href="tel:+5521999999999">(21) 99999-9999</a>
  </li>
  <li>
    <FaEnvelope /> 
    <a href="mailto:contato@hugobarroso.com.br">contato@hugobarroso.com.br</a>
  </li>
  <li>
    <FaMapMarkerAlt /> 
    <a href="https://www.google.com/maps/search/?api=1&query=Rua+Exemplo,+123,+Rio+de+Janeiro" target="_blank" rel="noreferrer">
      Rua Exemplo, 123, Rio de Janeiro - RJ
    </a>
  </li>
  <li>
    <FaClock /> Seg-Sex: 09:00 - 18:00
  </li>
</ul>

            <div className="footer-socials">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Base do rodapé */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Hugo Barroso Uelze — Todos os direitos reservados.</p>
        <p className="footer-impact">"A justiça começa com uma boa defesa."</p>
      </div>
    </footer>
  );
}

export default Footer;
