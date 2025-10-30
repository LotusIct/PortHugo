import React from "react";
import "../styles/Areas.css";
import { Link } from "react-router-dom";

// Importando imagens locais
import familiaImg from "../assets/familia1.png";
import imobiliarioImg from "../assets/imobiliario.png";
import tributarioImg from "../assets/tributário.png";
import trabalhistaImg from "../assets/familia.png";

function Areas() {
  const areas = [
    { 
      title: "Direito de Família",
      desc: "Divórcio, guarda e pensão alimentícia.",
      img: familiaImg,
      link: "/direito-familia"
    },
    {
      title: "Direito Imobiliário",
      desc: "Contratos e questões imobiliárias.",
      img: imobiliarioImg,
      link: "/imobiliario"
    },
    {
      title: "Direito Tributário",
      desc: "Planejamento tributário e impostos.",
      img: tributarioImg,
      link: "/tributario"
    },
    {
      title: "Direito Trabalhista",
      desc: "Relações de trabalho e direitos do trabalhador.",
      img: trabalhistaImg,
      link: "/trabalhista"
    },
  ];

  return (
    <section id="areas" className="areas">
      <h2>Áreas de Atuação</h2>
      <div className="areas-grid">
        {areas.map((area, index) => (
          <div className="area-card" key={index} style={{ backgroundImage: `url(${area.img})` }}>
            <div className="area-overlay">
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
              <Link to={area.link} className="btn-saiba-mais">Saiba Mais</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Areas;
