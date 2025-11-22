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
import { getBlogPostBySlug } from "./data/blogApi";
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
    const runSeo = async () => {
      if (typeof window === "undefined") return;

      // IndexNow ping
      const currentUrl = window.location.href;
      if (currentUrl) {
        sendIndexNowPing([currentUrl]);
      }

      const siteUrl = "https://homefesteeventos.com.br";
      const path = window.location.pathname || "/";

      // Route flags
      const isHome = path === "/" || path === "";
      const isBuffetInfantil = path === "/buffet-infantil-bh";
      const isChurrasco = path === "/buffet-churrasco-bh";
      const isAlmocoJantar = path === "/buffet-almoco-jantar-bh";
      const isFestaEscolar = path === "/festa-escolar-bh";
      const isQuinzeAnos = path === "/festa-15-anos-bh";
      const isAniversarioAdulto = path === "/aniversario-adulto-bh";
      const isCasamento = path === "/buffet-casamento-bh";
      const isConfraternizacaoCorporativa = path === "/confraternizacao-corporativa-bh";
      const isBlogList = path === "/blog";
      const isBlogPost = path.startsWith("/blog/");

      // Title & description defaults
      let title = "Home Fest & Eventos BH – Buffet em Domicílio, Churrasco, Almoço e Festas em Casa";
      let description =
        "Buffet em domicílio em BH com gastronomia premium, equipe completa e eventos personalizados em casa. Infantil, adulto, churrasco, almoço, jantar e corporativo.";

      // Canonical default
      let canonicalPath = isHome ? "/" : path;

      // Per-page SEO
      if (isBuffetInfantil) {
        title = "Buffet Infantil em Casa BH | Festa Infantil em Domicílio – Home Fest";
        description =
          "Buffet infantil em casa em BH com estrutura completa, recreação, monitores e cardápio premium. Festa infantil em domicílio com conforto e segurança.";
        canonicalPath = "/buffet-infantil-bh";
      } else if (isChurrasco) {
        title = "Churrasco em Domicílio BH | Buffet Churrasco Premium em Casa";
        description =
          "Churrasco em domicílio em BH com churrasqueiro, cortes premium, acompanhamentos e equipe completa no seu espaço.";
        canonicalPath = "/buffet-churrasco-bh";
      } else if (isAlmocoJantar) {
        title = "Almoço e Jantar em Domicílio BH | Buffet em Casa – Home Fest";
        description =
          "Almoço e jantar em domicílio em BH com cardápios autorais, serviço completo e equipe presente no seu espaço.";
        canonicalPath = "/buffet-almoco-jantar-bh";
      } else if (isFestaEscolar) {
        title = "Festa Escolar em BH | Buffet Completo para Escolas – Home Fest";
        description =
          "Festa escolar em BH com buffet completo, recreação e organização profissional para escolas, turmas e formaturas.";
        canonicalPath = "/festa-escolar-bh";
      } else if (isQuinzeAnos) {
        title = "Festa de 15 Anos em BH | Buffet em Domicílio – Home Fest";
        description =
          "Festa de 15 anos em BH com buffet em domicílio, cardápio completo, equipe dedicada e experiência memorável no seu espaço.";
        canonicalPath = "/festa-15-anos-bh";
      } else if (isAniversarioAdulto) {
        title = "Aniversário Adulto em Domicílio BH | Buffet em Casa Completo";
        description =
          "Aniversário adulto em domicílio em BH com buffet completo, almoço, jantar ou churrasco no conforto da sua casa.";
        canonicalPath = "/aniversario-adulto-bh";
      } else if (isCasamento) {
        title = "Casamento Intimista em BH | Buffet de Casamento em Domicílio";
        description =
          "Casamento intimista em BH com buffet em domicílio, gastronomia autoral e serviço completo no seu espaço.";
        canonicalPath = "/buffet-casamento-bh";
      } else if (isConfraternizacaoCorporativa) {
        title = "Confraternização Corporativa em BH | Buffet em Domicílio";
        description =
          "Confraternização corporativa em BH com buffet em domicílio, cardápio premium e equipe completa no seu espaço.";
        canonicalPath = "/confraternizacao-corporativa-bh";
      } else if (isBlogList) {
        title = "Blog Home Fest BH | Buffet em Domicílio, Festas em Casa e Ideias de Eventos";
        description =
          "Blog com dicas de festas em casa, buffet em domicílio BH, cardápios, organização de eventos e inspirações Home Fest.";
        canonicalPath = "/blog";
      }

      // Blog post SEO (async)
      if (isBlogPost) {
        const slug = path.split("/").filter(Boolean).pop() || "";
        try {
          const post = await getBlogPostBySlug(slug);
          if (post) {
            title = `${post.title} | Blog Home Fest & Eventos`;
            description = post.excerpt || description;
            canonicalPath = `/blog/${post.slug}`;
          }
        } catch (e) {
          // fallback mantém defaults
        }
      }

      // Helpers to upsert meta tags
      const upsertMeta = (
        attr: "name" | "property",
        key: string,
        value: string
      ) => {
        let m = document.querySelector(
          `meta[${attr}="${key}"]`
        ) as HTMLMetaElement | null;
        if (!m) {
          m = document.createElement("meta");
          m.setAttribute(attr, key);
          document.head.appendChild(m);
        }
        m.content = value;
      };

      // Apply title & description
      document.title = title;
      upsertMeta("name", "description", description);

      // Canonical
      const canonicalUrl = `${siteUrl}${canonicalPath}`;

// Per-page Service Schema (updates on navigation)
const serviceId = "service-ld-json";
const serviceMap: Record<string, any> = {
  "/buffet-infantil-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Buffet infantil em domicílio",
    name: "Buffet Infantil em Casa em BH",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/buffet-infantil-bh`,
  },
  "/buffet-churrasco-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Churrasco em domicílio",
    name: "Churrasco em Domicílio em BH",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/buffet-churrasco-bh`,
  },
  "/buffet-almoco-jantar-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Almoço e jantar em domicílio",
    name: "Almoço e Jantar em Domicílio BH",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/buffet-almoco-jantar-bh`,
  },
  "/aniversario-adulto-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Aniversário adulto em domicílio",
    name: "Aniversário Adulto em Casa com Buffet em BH",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/aniversario-adulto-bh`,
  },
  "/buffet-casamento-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Casamento intimista em domicílio",
    name: "Casamento Intimista em BH com Buffet em Domicílio",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/buffet-casamento-bh`,
  },
  "/confraternizacao-corporativa-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Confraternização corporativa em domicílio",
    name: "Confraternização Corporativa em Domicílio BH",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/confraternizacao-corporativa-bh`,
  },
  "/festa-escolar-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Festa escolar",
    name: "Festa Escolar em BH com Buffet Completo",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/festa-escolar-bh`,
  },
  "/festa-15-anos-bh": {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Festa de 15 anos",
    name: "Festa de 15 Anos em BH com Buffet em Domicílio",
    areaServed: "Belo Horizonte",
    provider: { "@id": "https://homefesteeventos.com.br/#organization" },
    url: `${siteUrl}/festa-15-anos-bh`,
  },
};

const serviceSchema = serviceMap[path];
const existingService = document.getElementById(serviceId);
if (existingService) existingService.remove();
if (serviceSchema) {
  const serviceScript = document.createElement("script");
  serviceScript.id = serviceId;
  serviceScript.type = "application/ld+json";
  serviceScript.text = JSON.stringify(serviceSchema);
  document.head.appendChild(serviceScript);
}
      let canonical = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;

      // Open Graph
      upsertMeta("property", "og:site_name", "Home Fest & Eventos");
      upsertMeta("property", "og:title", title);
      upsertMeta("property", "og:description", description);
      upsertMeta("property", "og:url", canonicalUrl);
      upsertMeta("property", "og:type", isBlogPost ? "article" : "website");
      upsertMeta("property", "og:locale", "pt_BR");
      upsertMeta(
        "property",
        "og:image",
        "https://homefesteeventos.com.br/og-cover.webp"
      );

      // Twitter
      upsertMeta("name", "twitter:card", "summary_large_image");
      upsertMeta("name", "twitter:title", title);
      upsertMeta("name", "twitter:description", description);
      upsertMeta(
        "name",
        "twitter:image",
        "https://homefesteeventos.com.br/og-cover.webp"
      );

      // LocalBusiness JSON-LD (site-wide, once)
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
          "priceRange": "$$"
        });
        document.head.appendChild(lbScript);
      }
    };

    runSeo();
  }, [pathname]);
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