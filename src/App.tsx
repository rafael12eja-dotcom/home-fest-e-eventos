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
      let title = "Home Fest & Eventos | Buffet em domicílio BH";
      let description =
        "Festas em casa com estrutura completa, gastronomia autoral e equipe presente do início ao fim em Belo Horizonte.";

      // Canonical default
      let canonicalPath = isHome ? "/" : path;

      // Per-page SEO
      if (isBuffetInfantil) {
        title = "Buffet Infantil em BH | Home Fest & Eventos";
        description =
          "Festa infantil em domicílio com brincadeiras, monitores, decoração e buffet completo. Segurança e encanto para crianças.";
        canonicalPath = "/buffet-infantil-bh";
      } else if (isChurrasco) {
        title = "Buffet Churrasco em BH | Home Fest & Eventos";
        description =
          "Churrasco premium em casa com equipe completa, carnes selecionadas, acompanhamentos e serviço impecável.";
        canonicalPath = "/buffet-churrasco-bh";
      } else if (isAlmocoJantar) {
        title = "Buffet Almoço e Jantar em BH | Home Fest & Eventos";
        description =
          "Almoço ou jantar em domicílio com cardápios autorais, equipe dedicada e serviço elegante no seu espaço.";
        canonicalPath = "/buffet-almoco-jantar-bh";
      } else if (isFestaEscolar) {
        title = "Festa Escolar em BH | Home Fest & Eventos";
        description =
          "Festas escolares completas com recreação, alimentação e organização profissional para escolas e turmas.";
        canonicalPath = "/festa-escolar-bh";
      } else if (isQuinzeAnos) {
        title = "Festa de 15 Anos em BH | Home Fest & Eventos";
        description =
          "Celebração de 15 anos em casa ou no seu salão com buffet completo, decoração e experiência inesquecível.";
        canonicalPath = "/festa-15-anos-bh";
      } else if (isAniversarioAdulto) {
        title = "Aniversário Adulto em BH | Home Fest & Eventos";
        description =
          "Aniversário adulto com clima acolhedor, buffet completo e equipe presente do início ao fim no seu espaço.";
        canonicalPath = "/aniversario-adulto-bh";
      } else if (isCasamento) {
        title = "Casamento em Domicílio em BH | Home Fest & Eventos";
        description =
          "Casamento com clima de casa, gastronomia autoral e serviço completo no seu espaço. Elegância acessível.";
        canonicalPath = "/buffet-casamento-bh";
      } else if (isConfraternizacaoCorporativa) {
        title = "Confraternização Corporativa em BH | Home Fest & Eventos";
        description =
          "Confraternizações corporativas com clima acolhedor, buffet completo e equipe presente no seu espaço.";
        canonicalPath = "/confraternizacao-corporativa-bh";
      } else if (isBlogList) {
        title = "Blog Home Fest & Eventos | Dicas para festas em casa";
        description =
          "Conteúdos sobre festas em domicílio, ideias, cardápios e experiências Home Fest & Eventos.";
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