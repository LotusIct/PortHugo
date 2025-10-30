import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Themes from "../components/Themes";
import FAQ from "../components/FAQS";
import Contact from "../components/Contact";

// Imagens
import bannerImage from "../assets/artigos4.png";
import planejamentoImg from "../assets/Divórcio.png";
import impostosImg from "../assets/Guarda.png";
import regularizacaoImg from "../assets/Pensão.png";

function TributarioPage() {
  const services = [
    "Planejamento tributário para pessoas físicas e jurídicas.",
    "Consultoria sobre impostos e obrigações fiscais.",
    "Regularização de pendências tributárias junto à Receita Federal."
  ];

  const themes = [
    { title: "Planejamento Tributário", content: "Estratégias legais para reduzir a carga tributária.", image: planejamentoImg },
    { title: "Impostos e Obrigações", content: "Orientações sobre impostos federais, estaduais e municipais.", image: impostosImg },
    { title: "Regularização Fiscal", content: "Resolução de pendências e parcelamentos fiscais.", image: regularizacaoImg }
  ];

  const faqs = [
    { question: "Como reduzir legalmente os impostos?", answer: "Através de planejamento tributário, escolha do regime adequado e aproveitamento de benefícios fiscais." },
    { question: "Como regularizar débitos com a Receita Federal?", answer: "Analisamos os débitos e apresentamos parcelamento ou revisão conforme a legislação." },
    { question: "Preciso de acompanhamento contábil?", answer: "Sim, para manter a conformidade e otimizar tributos de forma segura." }
  ];

  return (
    <div>
      <Banner title="Direito Tributário" image={bannerImage} />
      <Services title="Serviços Prestados" description="Atuamos de forma estratégica no Direito Tributário, oferecendo segurança fiscal e planejamento eficiente para nossos clientes." services={services} whatsappNumber="5511999999999" />
      <Themes themes={themes} />
      <FAQ faqs={faqs} />
      <Contact />
    </div>
  );
}

export default TributarioPage;
