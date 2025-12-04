import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

type ServiceItem = {
  href: string;
  label: string;
};

const SERVICE_ITEMS: ServiceItem[] = [
  { href: "/buffet-infantil-bh", label: "Buffet Infantil" },
  { href: "/festa-escolar-bh", label: "Festa Escolar" },
  { href: "/buffet-churrasco-bh", label: "Buffet Churrasco" },
  { href: "/buffet-almoco-jantar-bh", label: "Almoço e Jantar" },
  { href: "/festa-15-anos-bh", label: "15 Anos" },
  { href: "/aniversario-adulto-bh", label: "Aniversário Adulto" },
  { href: "/buffet-casamento-bh", label: "Casamento" },
  { href: "/confraternizacao-corporativa-bh", label: "Confraternização Corporativa" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Efeito de sombra / fundo ao rolar
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    setMobileOpen(false);
    if (typeof window === "undefined") return;

    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  const goToSection = (sectionId: string) => {
    setMobileOpen(false);
    if (typeof window === "undefined") return;

    const isHome = window.location.pathname === "/";
    const hash = `#${sectionId}`;

    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = hash;
      }
    } else {
      // Sempre traz para a Home com a âncora correta
      window.location.href = `/${hash}`;
    }
  };

  const goToBlog = () => {
    setMobileOpen(false);
    if (typeof window === "undefined") return;
    window.location.href = "/blog";
  };

  const goToService = (href: string) => {
    setMobileOpen(false);
    if (typeof window === "undefined") return;
    window.location.href = href;
  };

  const headerClasses = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
    scrolled
      ? "bg-hf-offwhite/98 shadow-[0_8px_32px_rgba(74,63,53,.12)] backdrop-blur-md"
      : "bg-hf-cream/95 shadow-[0_2px_12px_rgba(74,63,53,.06)] backdrop-blur-sm",
  ].join(" ");

  const navItemBase =
    "relative text-[15px] font-semibold tracking-wide text-hf-brown/80 px-3 py-2 rounded-full transition-all duration-200 hover:text-hf-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hf-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-32 py-5 md:h-32 md:py-5 lg:h-28 lg:py-1 flex items-center justify-between gap-4 relative">
          {/* LOGO */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goHome();
            }}
            className="inline-flex items-center gap-3 px-2 py-1.5 rounded-lg transition-transform duration-300 hover:scale-[1.02] focus:outline-none absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex-shrink-0" aria-label="Voltar para a página inicial Home Fest & Eventos"
          >
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/logo.png"
                alt="Home Fest & Eventos - Buffet e Home Fest para festas em casa"
                className="h-12 sm:h-12 md:h-10 lg:h-12 xl:h-12 2xl:h-12 w-auto drop-shadow-[0_8px_24px_rgba(217,164,65,.35)]"
                loading="eager"
                decoding="sync"
              />
            </picture>
          </a>

          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden lg:flex flex-1 items-center justify-center">
            <div className="inline-flex items-center gap-1.5">
              {/* Home */}
              <button
                type="button"
                onClick={goHome}
                className={`${navItemBase} after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-hf-gold after:transition-all after:duration-300 hover:after:w-3/4`}
              >
                Home
              </button>

              {/* Sobre */}
              <button
                type="button"
                onClick={() => goToSection("sobre")}
                className={`${navItemBase} after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-hf-gold after:transition-all after:duration-300 hover:after:w-3/4`}
              >
                Sobre
              </button>

              {/* Serviços - Dropdown */}
              <div
                className="relative"
                ref={servicesRef}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  className={`${navItemBase} inline-flex items-center gap-1.5 after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-hf-gold after:transition-all after:duration-300 hover:after:w-3/4`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  <span>Serviços</span>
                  <span
                    className={`transition-transform duration-200 text-[11px] ${servicesOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </button>

                {servicesOpen && (
                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 z-40">
                    <div className="min-w-[260px] rounded-2xl border border-hf-gold/40 bg-hf-cream/95 text-hf-brown shadow-[0_18px_45px_rgba(15,10,6,.26)] backdrop-blur-md overflow-hidden">
                      <div className="px-4 pt-3 pb-2 border-b border-hf-gold/20 bg-white/40">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-hf-gold">
                          Serviços Home Fest &amp; Eventos
                        </p>
                        <p className="mt-1 text-[12px] text-hf-brown/75">
                          Escolha o tipo de festa ideal para o seu evento.
                        </p>
                      </div>

                      <ul className="py-2">
                        {SERVICE_ITEMS.map((item) => (
                          <li key={item.href}>
                            <button
                              type="button"
                              onClick={() => goToService(item.href)}
                              className="w-full text-left px-4 py-2.5 text-[14px] text-hf-brown/90 hover:bg-white/70 hover:text-hf-brown font-medium transition-colors duration-150"
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Blog */}
              <button
                type="button"
                onClick={goToBlog}
                className={`${navItemBase} after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-hf-gold after:transition-all after:duration-300 hover:after:w-3/4`}
              >
                Blog
              </button>

              {/* Depoimentos */}
              <button
                type="button"
                onClick={() => goToSection("depoimentos")}
                className={`${navItemBase} after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-hf-gold after:transition-all after:duration-300 hover:after:w-3/4`}
              >
                Depoimentos
              </button>

              {/* FAQ */}
              <button
                type="button"
                onClick={() => goToSection("faq")}
                className={`${navItemBase} after:absolute after:left-1/2 after:-bottom-1.5 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-hf-gold after:transition-all after:duration-300 hover:after:w-3/4`}
              >
                Dúvidas frequentes
              </button>
            </div>
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden md:flex items-center justify-end">
            <button
              type="button"
              onClick={() => goToSection("contato")}
              className="inline-flex items-center justify-center h-11 px-5 md:px-6 rounded-full bg-hf-brown text-white text-sm font-semibold tracking-wide shadow-gold border border-hf-gold/60 hover:bg-hf-gold-dark hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              aria-label="Solicitar orçamento"
            >
              Contato / Orçamento
            </button>
          </div>

          {/* TOGGLE MOBILE */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-hf-gold/40 bg-white/80 p-2.5 text-hf-brown hover:text-hf-gold hover:bg-hf-cream-dark/70 shadow-sm transition-all duration-200"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} strokeWidth={2.4} /> : <Menu size={24} strokeWidth={2.4} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {mobileOpen && (
          <nav className="lg:hidden pb-5 animate-fadeIn">
            <div className="mt-1 rounded-3xl border-2 border-hf-gold/20 bg-gradient-to-b from-white/98 via-hf-offwhite/98 to-hf-cream/95 shadow-premium-lg backdrop-blur-md p-5">
              <p className="text-xs font-bold tracking-[0.24em] uppercase text-hf-gold mb-4 px-1">
                Menu de Navegação
              </p>

              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={goHome}
                  className="w-full text-left text-[15px] font-semibold rounded-2xl px-4 py-3 bg-white/95 text-hf-brown border border-hf-gold/15 hover:border-hf-gold hover:bg-hf-cream/90 hover:shadow-md transition-all duration-200"
                >
                  Home
                </button>

                {/* Bloco Serviços no mobile */}
                <div className="rounded-2xl bg-white/95 border border-hf-gold/20">
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-[13px] font-semibold text-hf-brown">
                      Serviços Home Fest &amp; Eventos
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-hf-gold">
                      Ver opções
                    </span>
                  </div>
                  <div className="border-t border-hf-gold/15 divide-y divide-hf-gold/10">
                    {SERVICE_ITEMS.map((service) => (
                      <button
                        key={service.href}
                        type="button"
                        onClick={() => goToService(service.href)}
                        className="w-full text-left px-4 py-3 text-[14px] text-hf-brown hover:bg-hf-cream/80 transition-colors duration-200"
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => goToSection("sobre")}
                  className="w-full text-left text-[15px] font-semibold rounded-2xl px-4 py-3 bg-white/95 text-hf-brown border border-hf-gold/15 hover:border-hf-gold hover:bg-hf-cream/90 hover:shadow-md transition-all duration-200"
                >
                  Sobre
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("depoimentos")}
                  className="w-full text-left text-[15px] font-semibold rounded-2xl px-4 py-3 bg-white/95 text-hf-brown border border-hf-gold/15 hover:border-hf-gold hover:bg-hf-cream/90 hover:shadow-md transition-all duration-200"
                >
                  Depoimentos
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("faq")}
                  className="w-full text-left text-[15px] font-semibold rounded-2xl px-4 py-3 bg-white/95 text-hf-brown border border-hf-gold/15 hover:border-hf-gold hover:bg-hf-cream/90 hover:shadow-md transition-all duration-200"
                >
                  Dúvidas frequentes
                </button>

                <button
                  type="button"
                  onClick={goToBlog}
                  className="w-full text-left text-[15px] font-semibold rounded-2xl px-4 py-3 bg-white/95 text-hf-brown border border-hf-gold/15 hover:border-hf-gold hover:bg-hf-cream/90 hover:shadow-md transition-all duration-200"
                >
                  Blog
                </button>
              </div>

              <div className="mt-5 pt-4 border-t border-hf-gold/20">
                <button
                  type="button"
                  onClick={() => goToSection("contato")}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-hf-brown text-white text-sm font-semibold tracking-wide h-11 px-6 shadow-gold hover:bg-hf-gold-dark hover:shadow-gold-lg hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="Solicitar orçamento"
                >
                  Contato / Orçamento
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;