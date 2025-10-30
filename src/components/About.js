import React, { useState } from "react";
import "../styles/About.css";
import advogadoImg from "../assets/about4.png";
import { FaWhatsapp } from "react-icons/fa"; 
function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Comprometimento e Respeito",
      content:
        "O comprometimento e o respeito com a demanda de cada cliente são fundamentais na minha atuação, seja por meio da conciliação ou pela via judicial. Sempre que possível, busco soluções não judiciais para reduzir custos e estresse, mas quando necessário, sigo pela via judicial para garantir resultados."
    },
    {
      title: "Consultoria Personalizada",
      content:
        "Ofereço soluções preventivas e corretivas, analisando cada caso rapidamente e apresentando as alternativas com seus prós e contras, para que você possa tomar a melhor decisão."
    },
    {
      title: "Atendimento Presencial ou Remoto",
      content:
        "As consultas podem ser realizadas no escritório ou de forma remota, via videoconferência, garantindo conforto, economia de tempo e facilidade de acesso."
    },
    {
      title: "Parcerias",
      content:
        "Conto com parcerias estratégicas com escritórios de advocacia e contabilidade na Grande São Paulo, especialmente no ABC, Osasco e Alphaville, para oferecer suporte completo em demandas específicas."
    },
    {
      title: "Visão Multidisciplinar",
      content:
        "Analiso cada caso de forma holística, considerando não apenas os aspectos legais, mas também os impactos pessoais, financeiros e emocionais, garantindo soluções completas e alinhadas aos objetivos do cliente."
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Coluna da imagem */}
        <div className="about-image">
          <img src={advogadoImg} alt="Dr. Hugo Barroso" />
        </div>

        {/* Coluna do texto */}
        <div className="about-text">
          <h2>SOBRE O ADVOGADO</h2>
          <p className="highlight">
            Sou Dr. Hugo Barroso, advogado com especialização em Direito de Família e Sucessões e em Direito Civil. Estou sempre me aprimorando para oferecer um atendimento humanizado e soluções eficazes para cada cliente.
          </p>

          {sections.map((section, index) => (
  <div key={index} className="accordion-item">
    <button
      className={`accordion-title ${openIndex === index ? "active" : ""}`}
      onClick={() => toggleSection(index)}
    >
      {section.title}
      <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9662;</span>
    </button>
    {openIndex === index && (
      <div className="accordion-content">
        <p>{section.content}</p>
      </div>
    )}
  </div>
))}


          <a
            href="https://wa.me/5511999999999" // ✅ Substitua pelo seu número
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contact"
          >
            <FaWhatsapp style={{ marginRight: "8px" }} size={24}/>
            FALE COMIGO
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
