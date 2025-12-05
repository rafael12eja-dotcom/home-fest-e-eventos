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
  let title = "Home Fest & Eventos | Buffet em Domicílio em Belo Horizonte";
  let description =
    "Buffet completo em domicílio em Belo Horizonte (BH) para festas infantis, aniversários, 15 anos, casamentos intimistas e eventos corporativos, com gastronomia premium e equipe profissional.";

  // Ajustar title e description por rota
  if (isBuffetInfantil) {
    title = "Buffet Infantil em Casa em BH - Home Fest & Eventos";
    description =
      "Buffet infantil completo em domicílio em Belo Horizonte, ideal para festa infantil em casa, salão ou escola, com cardápio infantil, salgados, doces, bebidas e recreação.";
  } else if (isChurrasco) {
    title = "Churrasco em Domicílio em BH - Home Fest & Eventos";
    description =
      "Churrasco completo em domicílio em Belo Horizonte, com cortes selecionados, acompanhamentos, equipe de churrasqueiro e serviço de buffet para festas em casa, sítio ou salão.";
  } else if (isAlmocoJantar) {
    title = "Buffet Almoço e Jantar em BH - Home Fest & Eventos";
    description =
      "Buffet de almoço e jantar para eventos em Belo Horizonte, com entradas, pratos principais, guarnições e serviço completo para festas de família, casamentos intimistas e eventos corporativos.";
  } else if (isFestaEscolar) {
    title = "Festa Escolar em BH - Home Fest & Eventos";
    description =
      "Buffet para festas escolares em Belo Horizonte com cardápio infantil, logística adaptada para escolas, serviço rápido e estrutura completa para eventos pedagógicos e comemorativos.";
  } else if (isQuinzeAnos) {
    title = "Festa de 15 Anos em BH - Home Fest & Eventos";
    description =
      "Buffet completo para festa de 15 anos em Belo Horizonte com coquetel, jantar, sobremesas e serviço especializado para debuts em casa, salões ou espaços de eventos.";
  } else if (isAniversarioAdulto) {
    title = "Aniversário Adulto em BH - Home Fest & Eventos";
    description =
      "Buffet para aniversário adulto em Belo Horizonte com cardápio personalizado, opções de coquetel, jantar ou churrasco e serviço completo em domicílio.";
  } else if (isCasamento) {
    title = "Buffet para Casamento em BH - Home Fest & Eventos";
    description =
      "Buffet completo para casamento em Belo Horizonte com serviço de mini wedding, casamento intimista em casa ou espaço próprio, com cardápio elegante e atendimento dedicado.";
  } else if (isConfraternizacaoCorporativa) {
    title = "Confraternização Corporativa em BH - Home Fest & Eventos";
    description =
      "Buffet para confraternizações corporativas em Belo Horizonte com opções de coffee break, coquetel, churrasco, almoço ou jantar em domicílio, no escritório ou em espaços parceiros.";
  } else if (isBlogList) {
    title = "Blog Home Fest & Eventos | Dicas de Festa em BH";
    description =
      "Blog da Home Fest & Eventos com dicas, ideias e inspirações para organizar festas e eventos em Belo Horizonte, em casa, sítio, salão ou espaço corporativo.";
  } else if (isBlogPost) {
    title = "Conteúdo Home Fest & Eventos | Dicas para Festa em BH";
    description =
      "Conteúdos exclusivos da Home Fest & Eventos sobre buffet em domicílio, cardápios, decoração e organização de festas em Belo Horizonte e região.";
  }

  const seoData = { title, description };

  useEffect(() => {
    // Ping do IndexNow sempre que o app monta ou a rota muda
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      if (currentUrl) {
        sendIndexNowPing([currentUrl]);
      }
    }

    if (typeof document === "undefined") {
      return;
    }

    // Meta description dinâmica
    const metaDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.content = description;
    }

    // Canonical, Open Graph e Twitter meta dinâmicos
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
    } else if (isBlogPost && typeof window !== "undefined") {
      // Mantém a URL completa do post de blog
      canonicalPath = window.location.pathname;
    }

    const canonicalUrl = `${baseUrl}${canonicalPath}`;

    let canonicalLink = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    const ogUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]'
    );
    if (ogUrl) {
      ogUrl.content = canonicalUrl;
    }

    const ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]'
    );
    if (ogTitle) {
      ogTitle.content = title;
    }

    const ogDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.content = description;
    }

    const twitterTitle = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:title"]'
    );
    if (twitterTitle) {
      twitterTitle.content = title;
    }

    const twitterDescription = document.querySelector<HTMLMetaElement>(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.content = description;
    }

    // JSON-LD dinâmico por rota (Service + BreadcrumbList)
    const existingServiceSchemas =
      document.querySelectorAll<HTMLScriptElement>(
        'script[data-hf-schema="service"]'
      );
    existingServiceSchemas.forEach((el) =>
      el.parentNode?.removeChild(el)
    );

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
          "description":
            "Buffet infantil em domicílio em Belo Horizonte com cardápio completo de salgados, doces e bebidas, recreação e estrutura para festas infantis em casa, salões e escolas."
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
              "name": "Buffet infantil em BH",
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
          "name": "Churrasco em domicílio em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/buffet-churrasco-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Churrasco em domicílio",
          "description":
            "Churrasco em domicílio em Belo Horizonte com cortes selecionados, acompanhamentos, equipe de churrasqueiro e serviço de buffet para festas em casa, sítios e salões de festas."
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
              "name": "Buffet churrasco em BH",
              "item": "https://homefesteeventos.com.br/buffet-churrasco-bh"
            }
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
          "description":
            "Buffet de almoço e jantar para eventos em Belo Horizonte com entradas, pratos principais, guarnições e serviço completo para festas de família, casamentos intimistas e eventos corporativos."
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
              "name": "Buffet almoço e jantar em BH",
              "item": "https://homefesteeventos.com.br/buffet-almoco-jantar-bh"
            }
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
          "description":
            "Buffet para festas escolares em Belo Horizonte com cardápio infantil, logística adaptada para escolas, serviço rápido e estrutura completa para eventos pedagógicos e comemorativos."
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
              "name": "Festa escolar em BH",
              "item": "https://homefesteeventos.com.br/festa-escolar-bh"
            }
          ]
        }
      );
    } else if (isQuinzeAnos) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Festa de 15 anos em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/festa-15-anos-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para festa de 15 anos",
          "description":
            "Buffet completo para festa de 15 anos em Belo Horizonte com coquetel, jantar, sobremesas e serviço especializado para debuts em casa, salões ou espaços de eventos."
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
              "name": "Festa de 15 anos em BH",
              "item": "https://homefesteeventos.com.br/festa-15-anos-bh"
            }
          ]
        }
      );
    } else if (isAniversarioAdulto) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Aniversário adulto com buffet em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/aniversario-adulto-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para aniversário adulto",
          "description":
            "Buffet para aniversário adulto em Belo Horizonte com cardápio personalizado, opções de coquetel, jantar ou churrasco e serviço completo em domicílio."
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
              "name": "Aniversário adulto em BH",
              "item": "https://homefesteeventos.com.br/aniversario-adulto-bh"
            }
          ]
        }
      );
    } else if (isCasamento) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Buffet para casamento em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/buffet-casamento-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para casamento",
          "description":
            "Buffet completo para casamento em Belo Horizonte com serviço de mini wedding, casamento intimista em casa ou espaço próprio, cardápio elegante e atendimento dedicado."
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
              "name": "Buffet para casamento em BH",
              "item": "https://homefesteeventos.com.br/buffet-casamento-bh"
            }
          ]
        }
      );
    } else if (isConfraternizacaoCorporativa) {
      serviceSchemas.push(
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Confraternização corporativa em Belo Horizonte",
          "url": "https://homefesteeventos.com.br/confraternizacao-corporativa-bh",
          "provider": baseBusiness,
          "areaServed": cityBH,
          "serviceType": "Buffet para confraternização corporativa",
          "description":
            "Buffet para confraternizações corporativas em Belo Horizonte com opções de coffee break, coquetel, churrasco, almoço ou jantar em domicílio, no escritório ou em espaços parceiros."
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
              "name": "Confraternização corporativa em BH",
              "item":
                "https://homefesteeventos.com.br/confraternizacao-corporativa-bh"
            }
          ]
        }
      );
    }

    if (serviceSchemas.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-hf-schema", "service");
      script.text = JSON.stringify(
        serviceSchemas.length === 1 ? serviceSchemas[0] : serviceSchemas
      );
      document.head.appendChild(script);
    }
  }, [pathname, title, description]);


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