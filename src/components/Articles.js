import React, { useState } from "react";
import "../styles/Articles.css";
import { Link } from "react-router-dom";
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
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
  {
    title: "Artigo 3 - Família",
    theme: "Direito de Família",
    desc: "Divórcio consensual e litigioso.",
    author: "Dr. Hugo Barroso",
    date: "15/08/2025",
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
  {
    title: "Artigo 1 - Civil",
    theme: "Direito Civil",
    desc: "Contratos: o que você precisa saber antes de assinar.",
    author: "Dra. Hugo Barroso",
    date: "08/08/2025",
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
  {
    title: "Artigo 2 - Civil",
    theme: "Direito Civil",
    desc: "Responsabilidade civil em acidentes.",
    author: "Dr. Hugo Barroso",
    date: "11/08/2025",
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
  {
    title: "Artigo 3 - Civil",
    theme: "Direito Civil",
    desc: "Como resolver disputas contratuais.",
    author: "Dra. Hugo Barroso",
    date: "14/08/2025",
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
  {
    title: "Artigo 1 - Trabalhista",
    theme: "Direito Trabalhista",
    desc: "Principais direitos dos trabalhadores.",
    author: "Dr. Hugo Barroso",
    date: "09/08/2025",
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
  {
    title: "Artigo 2 - Trabalhista",
    theme: "Direito Trabalhista",
    desc: "Como lidar com rescisões e acordos.",
    author: "Dra. Hugo Barroso",
    date: "13/08/2025",
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
  {
    title: "Artigo 3 - Trabalhista",
    theme: "Direito Trabalhista",
    desc: "Jornada de trabalho e horas extras.",
    author: "Dr. Hugo Barroso",
    date: "16/08/2025",
     pdf: "/pdfs/artigo-1-familia.pdf", 
  },
];

function Articles() {
  const [selectedTheme, setSelectedTheme] = useState("Todos");

  const themes = ["Todos", "Direito de Família", "Direito Civil", "Direito Trabalhista"];

  const filteredArticles =
    selectedTheme === "Todos"
      ? allArticles
      : allArticles.filter((a) => a.theme === selectedTheme);

  return (
    <section id="articles" className="articles">
      <div className="articles-header">
        <h2>Principais Artigos</h2>
        <div className="articles-buttons">
          {themes.map((theme) =>
            theme === "Todos" ? (
              <Link key={theme} to="/artigos">
                <button className={selectedTheme === theme ? "active" : ""}>
                  {theme}
                </button>
              </Link>
            ) : (
              <button
                key={theme}
                className={selectedTheme === theme ? "active" : ""}
                onClick={() => setSelectedTheme(theme)}
              >
                {theme}
              </button>
            )
          )}
        </div>
      </div>

      <div className="articles-list">
        {filteredArticles.map((article, index) => (
          <div className="article-card" key={index}>
            <h3>{article.title}</h3>
            <div className="article-meta">
              <span className="article-author">{article.author}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <p>{article.desc}</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="btn-read-more">Leia Mais</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Articles;
