import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Themes from "../components/Themes";
import FAQ from "../components/FAQS";
import Contact from "../components/Contact";

// Imagens
import bannerImage from "../assets/artigos4.png";
import empregadoImg from "../assets/Divórcio.png";
import empresaImg from "../assets/Guarda.png";
import acordosImg from "../assets/Pensão.png";

function TrabalhistaPage() {
  const services = [
    "Assessoria em direitos trabalhistas para empregados e empregadores.",
    "Representação em processos de rescisão, férias, FGTS e horas extras.",
    "Consultoria para acordos e negociações trabalhistas."
  ];

  const themes = [
    { title: "Direitos do Empregado", content: "Garantia de direitos trabalhistas e segurança jurídica.", image: empregadoImg },
    { title: "Direitos do Empregador", content: "Orientações sobre obrigações e prevenção de passivos trabalhistas.", image: empresaImg },
    { title: "Acordos e Negociações", content: "Mediação e consultoria para acordos justos entre partes.", image: acordosImg }
  ];

  const faqs = [
    { question: "Como calcular horas extras?", answer: "Horas extras devem ser pagas com acréscimo legal, considerando jornada e adicionais." },
    { question: "Como funciona a rescisão de contrato?", answer: "Depende do tipo de rescisão; podemos orientar sobre cálculo e direitos de ambas as partes." },
    { question: "Como formalizar um acordo trabalhista?", answer: "Acordos devem ser documentados por escrito e homologados judicialmente quando necessário." }
  ];

  return (
    <div>
      <Banner title="Direito Trabalhista" image={bannerImage} />
      <Services title="Serviços Prestados" description="Atuamos com dedicação em todas as questões trabalhistas, defendendo direitos e prevenindo conflitos de forma segura." services={services} whatsappNumber="5511999999999" />
      <Themes themes={themes} />
      <FAQ faqs={faqs} />
      <Contact />
    </div>
  );
}

export default TrabalhistaPage;
