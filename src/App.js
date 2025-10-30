import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Importa Routes e Route
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Artigos from "./components/Articles"; // Componente que mostra os cards resumidos
import ArticlesPage from "./pages/ArticlesPages"; // ✅ Nova página de artigos
import Areas from "./components/Areas";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Quote from "./components/Quote"
import FamiliaPage from "./pages/DireitoFamiliaPage";
import ImobiliarioPage from "./pages/ImobiliarioPage"
import TributarioPage from "./pages/TributarioPage"
import TrabalhistaPage from "./pages/TrabalhistaPage"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Areas />
            <About />
            <Artigos />
            <Quote/>
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/artigos" element={<ArticlesPage />} /> {/* ✅ Página completa de artigos */}
         <Route path="/direito-familia" element={<FamiliaPage />} />
         <Route path="/direito-imobiliario" element={<ImobiliarioPage />} />
<Route path="/direito-tributario" element={<TributarioPage />} />
<Route path="/direito-trabalhista" element={<TrabalhistaPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
