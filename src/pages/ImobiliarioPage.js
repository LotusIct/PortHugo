import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Themes from "../components/Themes";
import FAQ from "../components/FAQS";
import Contact from "../components/Contact";

// Imagens
import bannerImage from "../assets/artigos4.png";
import contratosImg from "../assets/Divórcio.png";
import locacaoImg from "../assets/Guarda.png";
import vendaImg from "../assets/Pensão.png";

function ImobiliarioPage() {
  const services = [
    "Assessoria em contratos de compra e venda de imóveis.",
    "Consultoria em locação e administração imobiliária.",
    "Regularização de documentação e resolução de disputas imobiliárias."
  ];

  const themes = [
    { title: "Contratos Imobiliários", content: "Análise e elaboração de contratos de compra, venda e locação.", image: contratosImg },
    { title: "Locação de Imóveis", content: "Orientações sobre locação residencial e comercial.", image: locacaoImg },
    { title: "Venda e Compra de Imóveis", content: "Assessoria completa em transações imobiliárias.", image: vendaImg }
  ];

  const faqs = [
    { question: "Como elaborar um contrato seguro de locação?", answer: "Um contrato deve incluir cláusulas de responsabilidades, prazo, valor do aluguel e garantias, revisado por um advogado." },
    { question: "Quais documentos são necessários para compra de imóvel?", answer: "Certidões do imóvel, escritura, registro, e documentos pessoais do comprador e vendedor." },
    { question: "Como resolver conflitos com inquilinos?", answer: "Preferencialmente por mediação; se não houver acordo, ações judiciais podem ser necessárias." }
  ];

  return (
    <div>
      <Banner title="Direito Imobiliário" image={bannerImage} />
      <Services title="Serviços Prestados" description="Prestamos consultoria jurídica completa em todas as questões imobiliárias, garantindo segurança e transparência em todas as transações." services={services} whatsappNumber="5511999999999" />
      <Themes themes={themes} />
      <FAQ faqs={faqs} />
      <Contact />
    </div>
  );
}

export default ImobiliarioPage;
