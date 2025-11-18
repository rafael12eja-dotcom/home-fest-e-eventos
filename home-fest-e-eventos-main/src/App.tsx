// src/App.tsx
import React, { useEffect } from "react";

import { sendIndexNowPing } from "./indexnow-ping";

// Layout e sessões da Home One Page
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
import PartnersSection from "./components/PartnersSection";
import WhatsAppButton from "./components/WhatsAppButton";
import Modal from "./components/Modal";

// Contexto do modal (cardápios)
import { ModalProvider } from "./hooks/useModal";

// Páginas dedicadas de serviços
import BuffetInfantilPage from "./components/BuffetInfantilPage";
import ChurrascoPage from "./components/ChurrascoPage";
import AlmocoJantarPage from "./components/AlmocoJantarPage";
import FestaEscolarPage from "./components/FestaEscolarPage";
import QuinzeAnosPage from "./components/QuinzeAnosPage";

const App: React.FC = () => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  useEffect(() => {
    // Ping do IndexNow sempre que o app monta, usando a URL atual
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      if (currentUrl) {
        sendIndexNowPing([currentUrl]);
      }
    }

    
    // SEO básico por rota (title + meta description)
    const isBuffetInfantil = pathname === "/buffet-infantil-bh";
    const isChurrasco = pathname === "/buffet-churrasco-bh";
    const isAlmocoJantar = pathname === "/buffet-almoco-jantar-bh";
    const isFestaEscolar = pathname === "/festa-escolar-bh";
    const isQuinzeAnos = pathname === "/festa-15-anos-bh";

    const baseTitle = "Home Fest & Eventos";
    const baseSuffix = "Buffet e Home Fest em Belo Horizonte – MG";

    let title = `${baseTitle} | ${baseSuffix}`;
    let description = "Buffet infantil, churrasco, almoço e jantar e festas escolares em Belo Horizonte, com cardápios completos, serviço no local do evento e acolhimento sofisticado.";

    if (isBuffetInfantil) {
      title = "Buffet Infantil em Belo Horizonte | Home Fest & Eventos";
      description = "Buffet infantil em Belo Horizonte com cardápios completos, recreação e estrutura profissional para festas em casa, salões de prédio e escolas.";
    } else if (isChurrasco) {
      title = "Churrasco em domicílio em Belo Horizonte | Home Fest & Eventos";
      description = "Churrasco em domicílio em Belo Horizonte com carnes selecionadas, guarnições e equipe de churrasqueiro e garçom para casas, prédios, sítios e empresas.";
    } else if (isAlmocoJantar) {
      title = "Buffet Almoço e Jantar em Belo Horizonte | Home Fest & Eventos";
      description = "Buffet de almoço e jantar em Belo Horizonte com coquetel reforçado, pratos principais e serviço no seu espaço, em salões, empresas ou sítios.";
    } else if (isFestaEscolar) {
      title = "Festa escolar em Belo Horizonte | Home Fest & Eventos";
      description = "Festa escolar em Belo Horizonte com cardápio prático, serviço rápido e logística pensada para recreio, formaturas e eventos em escolas.";

    } else if (isQuinzeAnos) {
      title = "Festa de 15 anos em Belo Horizonte | Home Fest & Eventos";
      description = "Festa de 15 anos em Belo Horizonte com coquetel, jantar e serviço completo para debuts em casas, salões, sítios e espaços de eventos.";
    }

    document.title = title;


    const metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (metaDescription) {
      metaDescription.content = description;
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // JSON-LD dinâmico por rota (Service + BreadcrumbList)
    const existingServiceSchemas = document.querySelectorAll<HTMLScriptElement>(
      'script[data-hf-schema="service"]'
    );
    existingServiceSchemas.forEach((el) => el.parentNode?.removeChild(el));

    type ServiceSchema = Record<string, any>;
    const serviceSchemas: ServiceSchema[] = [];

    const baseBusiness = {
      "@type": "LocalBusiness",
      "name": "Home Fest & Eventos",
      "url": "https://homefesteeventos.com.br",
      "telephone": "+5531999186245",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belo Horizonte",
        "addressRegion": "MG",
        "addressCountry": "BR"
      }
    };

    const cityBH = {
      "@type": "City",
      "name": "Belo Horizonte",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belo Horizonte",
        "addressRegion": "MG",
        "addressCountry": "BR"
      }
    };

    if (isBuffetInfantil) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet infantil em domicílio em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/buffet-infantil-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet infantil em domicílio",
          "description": "Buffet infantil em domicílio em Belo Horizonte, com cardápio completo, equipe de apoio e estrutura de buffet para festas em casa, prédios e escolas."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://homefesteeventos.com.br/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Buffet Infantil em BH",
              "item": "https://homefesteeventos.com.br/buffet-infantil-bh"
            }
          ]
        }
      );
    } else if (isChurrasco) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet churrasco em domicílio em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/buffet-churrasco-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet churrasco em domicílio",
          "description": "Churrasco completo em domicílio em Belo Horizonte, com carnes selecionadas, acompanhamentos e equipe de churrasqueiro e garçom."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homefesteeventos.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Buffet Churrasco em BH", "item": "https://homefesteeventos.com.br/buffet-churrasco-bh" }
          ]
        }
      );
    } else if (isAlmocoJantar) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet almoço e jantar em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/buffet-almoco-jantar-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet almoço e jantar",
          "description": "Buffet de almoço e jantar para eventos com entradas, pratos principais, guarnições e serviço de buffet em casas, salões e empresas."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homefesteeventos.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Buffet Almoço e Jantar em BH", "item": "https://homefesteeventos.com.br/buffet-almoco-jantar-bh" }
          ]
        }
      );
    } else if (isFestaEscolar) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet para festa escolar em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/festa-escolar-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para festa escolar",
          "description": "Buffet para festas escolares em Belo Horizonte com opções para crianças, logística adaptada e serviço rápido em escolas."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homefesteeventos.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Festa Escolar em BH", "item": "https://homefesteeventos.com.br/festa-escolar-bh" }
          ]
        }
      );
    } else if (isQuinzeAnos) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet para festa de 15 anos em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/festa-15-anos-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para festa de 15 anos",
          "description": "Buffet completo para festa de 15 anos com coquetel, jantar e serviço para debuts em casas, salões e sítios."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homefesteeventos.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Festa de 15 anos em BH", "item": "https://homefesteeventos.com.br/festa-15-anos-bh" }
          ]
        }
      );
    }

    if (serviceSchemas.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-hf-schema", "service");
      script.text = JSON.stringify(serviceSchemas.length === 1 ? serviceSchemas[0] : serviceSchemas);
      document.head.appendChild(script);
    }
  }, [pathname]);

  // Rotas dedicadas para serviços específicos
  if (pathname === "/buffet-infantil-bh") {
    return (
      <>
        <BuffetInfantilPage />

      </>
    );
  }

  if (pathname === "/buffet-churrasco-bh") {
    return (
      <>
        <ChurrascoPage />

      </>
    );
  }

  if (pathname === "/buffet-almoco-jantar-bh") {
    return (
      <>
        <AlmocoJantarPage />

      </>
    );
  }


  if (pathname === "/festa-escolar-bh") {
    return (
      <>
        <FestaEscolarPage />

      </>
    );
  }


  if (pathname === "/festa-15-anos-bh") {
    return (
      <>
        <QuinzeAnosPage />

      </>
    );
  }

  // Home padrão One Page
  return (
    <ModalProvider>
      <div className="min-h-screen bg-[#FFF8F0] text-neutral-900 flex flex-col">
        <Header />
        <main className="pt-28 md:pt-32 lg:pt-40">
          {/* HERO */}
          <section id="inicio">
            <Hero />
          </section>

          {/* NÚMEROS / PROVA SOCIAL */}
          <section id="estatisticas">
            <Stats />
          </section>

          {/* PARCEIROS OFICIAIS */}
          <PartnersSection />

          {/* SOBRE / POSICIONAMENTO */}
          <section id="sobre">
            <About />
          </section>

          {/* COMO FUNCIONA / PLANEJE SUA FESTA */}
          <section id="planeje">
            <PlanYourParty />
          </section>

          {/* PORTFÓLIO / TIPOS DE FESTA EM CASA */}
          <section id="portfolio">
            <Portfolio />
          </section>

          {/* SERVIÇOS / CARDÁPIOS (MODAIS) */}
          <section id="servicos">
            <Services />
          </section>

          {/* DEPOIMENTOS */}
          <section id="depoimentos">
            <Testimonials />
          </section>

          {/* FAQ */}
          <section id="faq">
            <FAQ />
          </section>

          {/* CTA FINAL / CONTATO */}
          <section id="contato">
            <FinalCTA />
          </section>
        </main>

        <Footer />

        {/* Modal global para cardápios */}
        <Modal />
      </div>
    </ModalProvider>
  );
};

export default App;
