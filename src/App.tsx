// src/App.tsx
import React, { useEffect } from "react";
import SEO from "./components/SEO";

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
import BlogListPage from "./components/BlogListPage";
import BlogPostPage from "./components/BlogPostPage";
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
import AniversarioAdultoPage from "./components/AniversarioAdultoPage";
import CasamentoPage from "./components/CasamentoPage";
import ConfraternizacaoCorporativaPage from "./components/ConfraternizacaoCorporativaPage";

const App: React.FC = () => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";

  // Variáveis de rota
  const isBuffetInfantil = pathname === "/buffet-infantil-bh";
  const isChurrasco = pathname === "/buffet-churrasco-bh";
  const isAlmocoJantar = pathname === "/buffet-almoco-jantar-bh";
  const isFestaEscolar = pathname === "/festa-escolar-bh";
  const isQuinzeAnos = pathname === "/festa-15-anos-bh";
  const isAniversarioAdulto = pathname === "/aniversario-adulto-bh";
  const isCasamento = pathname === "/buffet-casamento-bh";
  const isConfraternizacaoCorporativa = pathname === "/confraternizacao-corporativa-bh";
  const isBlogList = pathname === "/blog";
  const isBlogPost = pathname.startsWith("/blog/");

  // Variáveis de SEO
  let title = "Home Fest & Eventos - Buffet em Domicílio em Belo Horizonte";
  let description = "Buffet completo em domicílio em BH: festas infantis, churrascos, almoços, jantares, eventos corporativos e celebrações. Equipe profissional e cardápio personalizado.";

  // Ajustar title e description por rota
  if (isBuffetInfantil) {
    title = "Buffet Infantil em BH - Home Fest & Eventos";
    description = "Buffet infantil completo em domicílio em Belo Horizonte. Festas em casa, salões e escolas com cardápio infantil, equipe profissional e estrutura completa.";
  } else if (isChurrasco) {
    title = "Buffet Churrasco em BH - Home Fest & Eventos";
    description = "Churrasco completo em domicílio em Belo Horizonte com carnes selecionadas, acompanhamentos e equipe de churrasqueiro e garçom.";
  } else if (isAlmocoJantar) {
    title = "Buffet Almoço e Jantar em BH - Home Fest & Eventos";
    description = "Buffet de almoço e jantar para eventos em Belo Horizonte com entradas, pratos principais, guarnições e serviço completo.";
  } else if (isFestaEscolar) {
    title = "Festa Escolar em BH - Home Fest & Eventos";
    description = "Buffet para festas escolares em Belo Horizonte com cardápio infantil, logística adaptada e serviço rápido.";
  } else if (isQuinzeAnos) {
    title = "Festa de 15 Anos em BH - Home Fest & Eventos";
    description = "Buffet completo para festa de 15 anos em Belo Horizonte com coquetel, jantar e serviço para debuts.";
  } else if (isAniversarioAdulto) {
    title = "Aniversário Adulto em BH - Home Fest & Eventos";
    description = "Buffet para aniversário de adultos em Belo Horizonte com cardápio personalizado e serviço completo.";
  } else if (isCasamento) {
    title = "Buffet para Casamento em BH - Home Fest & Eventos";
    description = "Buffet completo para casamento em Belo Horizonte com coquetel, jantar e serviço profissional.";
  } else if (isConfraternizacaoCorporativa) {
    title = "Confraternização Corporativa em BH - Home Fest & Eventos";
    description = "Buffet para confraternizações corporativas em Belo Horizonte com coquetel, almoço, jantar e serviço completo.";
  } else if (isBlogList) {
    title = "Blog - Home Fest & Eventos";
    description = "Dicas, ideias e inspirações para festas e eventos em Belo Horizonte.";
  }

  const seoData = { title, description };

  useEffect(() => {
    // Ping do IndexNow sempre que o app monta, usando a URL atual
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      if (currentUrl) {
        sendIndexNowPing([currentUrl]);
      }
    }


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


// Canonical e metatags sociais dinâmicas por rota
const baseUrl = "https://homefesteeventos.com.br";

let canonicalPath = "/";
if (isBuffetInfantil) {
  canonicalPath = "/buffet-infantil-bh";
} else if (isChurrasco) {
  canonicalPath = "/buffet-churrasco-bh";
} else if (isAlmocoJantar) {
  canonicalPath = "/buffet-almoco-jantar-bh";
} else if (isFestaEscolar) {
  canonicalPath = "/festa-escolar-bh";
} else if (isQuinzeAnos) {
  canonicalPath = "/festa-15-anos-bh";
} else if (isAniversarioAdulto) {
  canonicalPath = "/aniversario-adulto-bh";
} else if (isCasamento) {
  canonicalPath = "/buffet-casamento-bh";
} else if (isConfraternizacaoCorporativa) {
  canonicalPath = "/confraternizacao-corporativa-bh";
} else if (isBlogList) {
  canonicalPath = "/blog";
}

const canonicalUrl = `${baseUrl}${canonicalPath}`;

const canonicalLink = document.querySelector(
  'link[rel="canonical"]'
) as HTMLLinkElement | null;

if (canonicalLink) {
  canonicalLink.href = canonicalUrl;
} else {
  const linkEl = document.createElement("link");
  linkEl.rel = "canonical";
  linkEl.href = canonicalUrl;
  document.head.appendChild(linkEl);
}

const ogUrl = document.querySelector(
  'meta[property="og:url"]'
) as HTMLMetaElement | null;
if (ogUrl) {
  ogUrl.content = canonicalUrl;
}

const ogTitle = document.querySelector(
  'meta[property="og:title"]'
) as HTMLMetaElement | null;
if (ogTitle) {
  ogTitle.content = title;
}

const ogDescription = document.querySelector(
  'meta[property="og:description"]'
) as HTMLMetaElement | null;
if (ogDescription) {
  ogDescription.content = description;
}

const twitterTitle = document.querySelector(
  'meta[name="twitter:title"]'
) as HTMLMetaElement | null;
if (twitterTitle) {
  twitterTitle.content = title;
}

const twitterDescription = document.querySelector(
  'meta[name="twitter:description"]'
) as HTMLMetaElement | null;
if (twitterDescription) {
  twitterDescription.content = description;
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
    } else if (isAniversarioAdulto) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet para aniversário adulto em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/aniversario-adulto-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para aniversário adulto",
          "description": "Buffet para aniversário adulto em Belo Horizonte com diferentes formatos de serviço, gastronomia autoral e equipe completa para festas em casas, salões, sítios e empresas."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homefesteeventos.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Aniversário adulto em BH", "item": "https://homefesteeventos.com.br/aniversario-adulto-bh" }
          ]
        }
      );
    }


    else if (isCasamento) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet para casamento em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/buffet-casamento-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para casamento",
          "description": "Buffet completo para casamento em Belo Horizonte com coquetel, jantar, bebidas não alcoólicas e equipe presente em casas, salões, sítios e espaços de eventos."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homefesteeventos.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Buffet para casamento em Belo Horizonte", "item": "https://homefesteeventos.com.br/buffet-casamento-bh" }
          ]
        }
      );
    }


    else if (isConfraternizacaoCorporativa) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Confraternização corporativa em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/confraternizacao-corporativa-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para confraternização corporativa",
          "description": "Buffet completo para confraternizações corporativas em Belo Horizonte com coquetel, almoço, jantar e serviço de equipe no espaço da empresa ou em locais parceiros."
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://homefesteeventos.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Confraternização corporativa em Belo Horizonte", "item": "https://homefesteeventos.com.br/confraternizacao-corporativa-bh" }
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
  // Envolver todas as rotas com ModalProvider
  return (
    <ModalProvider>
      {(() => {
        if (pathname === "/buffet-infantil-bh") {
          return (
            <>
              <SEO {...seoData} />
              <BuffetInfantilPage />
            </>
          );
        }

  if (pathname === "/buffet-churrasco-bh") {
    return (
      <>
        <SEO {...seoData} />
<ChurrascoPage />

      </>
    );
  }

  if (pathname === "/buffet-almoco-jantar-bh") {
    return (
      <>
        <SEO {...seoData} />
<AlmocoJantarPage />

      </>
    );
  }


  if (pathname === "/festa-escolar-bh") {
    return (
      <>
        <SEO {...seoData} />
<FestaEscolarPage />

      </>
    );
  }


  if (pathname === "/festa-15-anos-bh") {
    return (
      <>
        <SEO {...seoData} />
<QuinzeAnosPage />

      </>
    );
  }

  if (pathname === "/aniversario-adulto-bh") {
    return (
      <>
        <SEO {...seoData} />
<AniversarioAdultoPage />

      </>
    );
  }



  if (pathname === "/buffet-casamento-bh") {
    return (
      <>
        <SEO {...seoData} />
<CasamentoPage />

      </>
    );
  }

  if (pathname === "/confraternizacao-corporativa-bh") {
    return (
      <>
        <SEO {...seoData} />
<ConfraternizacaoCorporativaPage />

      </>
    );
  }

  if (pathname === "/blog") {
    return (
      <>
        <SEO {...seoData} />
<BlogListPage />
      </>
    );
  }

  if (pathname.startsWith("/blog/")) {
    return (
      <>
        <SEO {...seoData} />
<BlogPostPage />
      </>
    );
  }

        // Home padrão One Page
        return (
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
        );
      })()}
    </ModalProvider>
  );
};

export default App;