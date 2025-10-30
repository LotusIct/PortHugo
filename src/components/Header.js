import React from "react";
import { Link } from "react-router-dom"; // ✅ Importa Link do React Router
import "../styles/Header.css";
import logo from "../assets/logohbu3.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-text">Dr. Hugo Barroso Uelze</div>
      </div>
      <nav className="nav-menu">
        {/* Home agora é Link para a rota / */}
        <Link className="home-header animate-header" to="/">Home</Link>
        {/* Links de âncora continuam usando href */}
        <a className="animate-header" href="#about">Sobre</a>
        <a className="animate-header" href="#areas">Áreas de Atuação</a>
        <a className="animate-header" href="#articles">Artigos</a>
        <a href="#contact" className="button">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
