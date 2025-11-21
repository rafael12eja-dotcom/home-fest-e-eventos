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
    const isAniversarioAdulto = pathname === "/aniversario-adulto-bh";
    const isCasamento = pathname === "/buffet-casamento-bh";
    const isConfraternizacaoCorporativa = pathname === "/confraternizacao-corporativa-bh";
    const isBlogList = pathname === "/blog";
    const isBlogPost = pathname.startsWith("/blog/");

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
    else if (isAniversarioAdulto) {
      // SEO aniversário adulto já configurado acima

      title = "Aniversário adulto em Belo Horizonte | Home Fest & Eventos";
      description =
        "Buffet para aniversário adulto em Belo Horizonte com diferentes formatos: coquetel, jantar completo, buffet e churrasco elegante, com equipe completa e gastronomia autoral no conforto do seu espaço.";
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

    // Canonical
    const canonicalUrl = `https://homefesteeventos.com.br${pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Open Graph + Twitter
    const upsertMeta = (attr: "name" | "property", key: string, value: string) => {
      let m = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute(attr, key);
        document.head.appendChild(m);
      }
      m.content = value;
    };

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", pathname.startsWith("/blog/") ? "article" : "website");
    upsertMeta("property", "og:site_name", "Home Fest & Eventos");
    upsertMeta("property", "og:locale", "pt_BR");
    upsertMeta("property", "og:image", "https://homefesteeventos.com.br/og-cover.webp");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", "https://homefesteeventos.com.br/og-cover.webp");

    // LocalBusiness JSON-LD (site-wide)
    const lbId = "localbusiness-ld-json";
    if (!document.getElementById(lbId)) {
      const lbScript = document.createElement("script");
      lbScript.id = lbId;
      lbScript.type = "application/ld+json";
      lbScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Home Fest & Eventos",
        "url": "https://homefesteeventos.com.br/",
        "logo": "https://homefesteeventos.com.br/logo.png",
        "image": "https://homefesteeventos.com.br/og-cover.webp",
        "telephone": "+55 31 99918-6245",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Belo Horizonte",
          "addressRegion": "MG",
          "addressCountry": "BR"
        },
        "areaServed": "Belo Horizonte - MG",
        "priceRange": "$$",
        "sameAs": [
          "https://www.instagram.com/homefesteeventos"
        ]
      });
      document.head.appendChild(lbScript);
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

  if (pathname === "/aniversario-adulto-bh") {
    return (
      <>
        <AniversarioAdultoPage />

      </>
    );
  }



  if (pathname === "/buffet-casamento-bh") {
    return (
      <>
        <CasamentoPage />

      </>
    );
  }

  if (pathname === "/confraternizacao-corporativa-bh") {
    return (
      <>
        <ConfraternizacaoCorporativaPage />

      </>
    );
  }

  if (pathname === "/blog") {
    return (
      <>
        <BlogListPage />
      </>
    );
  }

  if (pathname.startsWith("/blog/")) {
    return (
      <>
        <BlogPostPage />
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