import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Themes from "../components/Themes";
import FAQ from "../components/FAQS";
import Contact from "../components/Contact"; // ✅ caminho corrigido

// Imagens
import bannerImage from "../assets/artigos4.png";
import divorcioImg from "../assets/Divórcio.png";
import guardaImg from "../assets/Guarda.png";
import pensaoImg from "../assets/Pensão.png";

function FamiliaPage() {
  const services = [
    "Atendimento humanizado e personalizado em Direito de Família.",
    "Acompanhamento de processos de divórcio, guarda e pensão alimentícia.",
    "Consultoria para acordos extrajudiciais e mediação familiar.",
  ];

  const themes = [
    {
      title: "Divórcio e Separação",
      content: "Orientações sobre divórcio consensual e litigioso...",
      image: divorcioImg
    },
    {
      title: "Guarda e Visitação",
      content: "Definição de guarda compartilhada ou unilateral...",
      image: guardaImg
    },
    {
      title: "Pensão Alimentícia",
      content: "Cálculo, revisão e execução de pensão...",
      image: pensaoImg
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo demora um divórcio consensual?",
      answer: "Normalmente entre 30 a 60 dias, dependendo da tramitação e da complexidade dos bens envolvidos."
    },
    {
      question: "Como posso solicitar guarda compartilhada?",
      answer: "É necessário entrar com pedido judicial ou acordo extrajudicial, sempre priorizando o melhor interesse da criança."
    },
    {
      question: "Posso revisar o valor da pensão alimentícia?",
      answer: "Sim, desde que haja mudança na situação financeira de quem paga ou de quem recebe a pensão."
    }
  ];

  return (
    <div>
      <Banner title="Direito de Família" image={bannerImage} />
      <Services
        title="Serviços Prestados"
        description="Oferecemos uma ampla gama de serviços jurídicos para atender suas necessidades em Direito de Família. Cada caso é tratado com atenção e empatia, garantindo soluções eficientes."
        services={services}
        whatsappNumber="5511999999999" // substitua pelo seu número
      />
      <Themes themes={themes} />
      <FAQ faqs={faqs} />
      <Contact />
    </div>
  );
}

export default FamiliaPage;
