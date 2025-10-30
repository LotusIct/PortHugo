import React, { useState } from "react";
import "../styles/ArticlesPage.css";

const allArticles = [
  {
    title: "Artigo 1 - Família",
    theme: "Direito de Família",
    desc: "Como funciona a guarda compartilhada atualmente.",
    author: "Dr. Hugo Barroso",
    date: "10/08/2025",
    pdf: "/pdfs/artigo-1-familia.pdf",
  },
  {
    title: "Artigo 2 - Família",
    theme: "Direito de Família",
    desc: "Pensão alimentícia: principais dúvidas.",
    author: "Dra. Hugo Barroso",
    date: "12/08/2025",
    pdf: "/pdfs/artigo-2-familia.pdf",
  },
  {
    title: "Artigo 3 - Família",
    theme: "Direito de Família",
    desc: "Divórcio consensual e litigioso.",
    author: "Dr. Hugo Barroso",
    date: "15/08/2025",
    pdf: "/pdfs/artigo-3-familia.pdf",
  },
  {
    title: "Artigo 1 - Civil",
    theme: "Direito Civil",
    desc: "Contratos: o que você precisa saber antes de assinar.",
    author: "Dra. Hugo Barroso",
    date: "08/08/2025",
    pdf: "/pdfs/artigo-1-civil.pdf",
  },
  {
    title: "Artigo 2 - Civil",
    theme: "Direito Civil",
    desc: "Responsabilidade civil em acidentes.",
    author: "Dr. Hugo Barroso",
    date: "11/08/2025",
    pdf: "/pdfs/artigo-2-civil.pdf",
  },
  {
    title: "Artigo 3 - Civil",
    theme: "Direito Civil",
    desc: "Como resolver disputas contratuais.",
    author: "Dra. Hugo Barroso",
    date: "14/08/2025",
    pdf: "/pdfs/artigo-3-civil.pdf",
  },
  {
    title: "Artigo 1 - Trabalhista",
    theme: "Direito Trabalhista",
    desc: "Principais direitos dos trabalhadores.",
    author: "Dr. Hugo Barroso",
    date: "09/08/2025",
    pdf: "/pdfs/artigo-1-trabalhista.pdf",
  },
  {
    title: "Artigo 2 - Trabalhista",
    theme: "Direito Trabalhista",
    desc: "Como lidar com rescisões e acordos.",
    author: "Dra. Hugo Barroso",
    date: "13/08/2025",
    pdf: "/pdfs/artigo-2-trabalhista.pdf",
  },
  {
    title: "Artigo 3 - Trabalhista",
    theme: "Direito Trabalhista",
    desc: "Jornada de trabalho e horas extras.",
    author: "Dr. Hugo Barroso",
    date: "16/08/2025",
    pdf: "/pdfs/artigo-3-trabalhista.pdf",
  },
];

function ArticlesPage() {
  const [selectedTheme, setSelectedTheme] = useState("Todos");

  const themes = ["Todos", "Direito de Família", "Direito Civil", "Direito Trabalhista"];

  const filteredArticles =
    selectedTheme === "Todos"
      ? allArticles
      : allArticles.filter((a) => a.theme === selectedTheme);

  // Agrupa os artigos por tema
  const groupedArticles = filteredArticles.reduce((acc, article) => {
    if (!acc[article.theme]) acc[article.theme] = [];
    acc[article.theme].push(article);
    return acc;
  }, {});

  return (
    <div className="articles-page">
      <div className="articles-banner">
        <h1>Artigos Jurídicos</h1>
        <p>Explore nossos artigos organizados por categoria</p> 
      </div>

      <div className="articles-filters">
        {themes.map((theme) => (
          <button
            key={theme}
            className={selectedTheme === theme ? "active" : ""}
            onClick={() => setSelectedTheme(theme)}
          >
            {theme}
          </button>
        ))}
      </div>

      <div className="articles-container">
        {Object.keys(groupedArticles).map((theme) => (
          <div key={theme} className="articles-theme-group">
            <h2>{theme}</h2>
            <div className="articles-list">
              {groupedArticles[theme].map((article, index) => (
                <div key={index} className="article-card">
                  <h3>{article.title}</h3>
                  <div className="article-meta">
                    <span className="article-author">{article.author}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <p>{article.desc}</p>
                  <a href={article.pdf} target="_blank" rel="noopener noreferrer">
                    <button className="btn-read-more">Leia Mais</button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesPage;
