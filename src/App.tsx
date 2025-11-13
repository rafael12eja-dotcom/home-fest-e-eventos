// src/App.tsx
import React, { useEffect } from "react";

import { sendIndexNowPing } from "./indexnow-ping";
// Componentes (mantenha os caminhos exatamente como estão na sua pasta)
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import PlanYourParty from "./components/PlanYourParty";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; // Novo componente Modal
import { ModalProvider } from "./hooks/useModal"; // Novo Provider de Modal

/**
 * IMPORTANTE:
 * - Este App não possui nenhum título/descrição soltos.
 * - Cada seção é renderizada UMA ÚNICA VEZ.
 * - Os ids seguem o menu do Header para rolagem por âncora.
 */
export default function App() {
  useEffect(() => {
    sendIndexNowPing([
      "https://homefesteeventos.com.br/",
      "https://homefesteeventos.com.br/#cardapio",
      "https://homefesteeventos.com.br/#sobre",
      "https://homefesteeventos.com.br/#servicos",
      "https://homefesteeventos.com.br/#depoimentos",
      "https://homefesteeventos.com.br/#contato"
    ]);
  }, []);

  return (
    <ModalProvider>
      <Header />
      {/* padding-top para não sobrepor o header */}
      <main className="pt-24">
        {/* Hero do topo */}
        <section id="topo">
          <Hero />
        </section>
        {/* Estatísticas de destaque */}
        <Stats />
        {/* Sobre nós */}
        <About />

        {/* Monte a Sua Festa: seção interativa abaixo de Sobre Nós */}
        <PlanYourParty />

        {/* Cardápio / Serviços */}
        <section id="servicos">
          <Services />
        </section>
        {/* Portfólio (lista de tipos de festa) */}
        <section id="portfolio">
          <Portfolio />
        </section>
        {/* Depoimentos */}
        <section id="depoimentos">
          <Testimonials />
        </section>
        {/* FAQ */}
        <FAQ />
        {/* CTA final / Contato */}
        <section id="contato">
          <FinalCTA />
        </section>
      </main>
      <Footer />
      <Modal /> {/* Renderiza o modal globalmente */}
    </ModalProvider>
  );
}
