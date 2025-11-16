import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  {
    href: "#servicos",
    label: "Serviços",
    subItems: [
      { href: "/buffet-infantil-bh", label: "Buffet Infantil" },
      { href: "/buffet-almoco-jantar-bh", label: "Buffet Almoço e Jantar" },
      { href: "/buffet-churrasco-bh", label: "Churrasco" },
      { href: "/festa-escolar-bh", label: "Festa Escolar" },
      { href: "/festa-15-anos-bh", label: "Festa de 15 Anos" },
    ],
  },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setServicesOpen(false);

    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    window.location.href = href;
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#F3EADD]/95 shadow-[0_8px_26px_rgba(0,0,0,.08)] backdrop-blur"
          : "bg-[#F7EFE6]/90 shadow-[0_2px_10px_rgba(0,0,0,.04)] backdrop-blur",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-24 md:h-28 flex items-center justify-between gap-4">
          {/* LOGO */}
          <a
            href="/"
            className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-2xl"
            aria-label="Voltar para a página inicial Home Fest & Eventos"
          >
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/logo.png"
                alt="Home Fest & Eventos - Buffet e Home Fest para festas em casa"
                className="h-20 md:h-24 w-auto drop-shadow-[0_4px_14px_rgba(212,175,55,.45)]"
                width={120}
                height={112}
                loading="eager"
                decoding="sync"
              />
            </picture>
          </a>

          {
        
        /* NAV DESKTOP */
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            <div className="inline-flex items-center gap-8 rounded-full bg-white/70 border border-[#E8D8C1]/80 px-8 py-4 shadow-[0_16px_48px_rgba(0,0,0,.10)] backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const hasSub = !!item.subItems && item.subItems.length > 0;

                if (hasSub && item.label === "Serviços") {
                  return (
                    <div key={item.href} className="relative">
                      <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className={[
                          "inline-flex items-center gap-2 text-[13px] md:text-[14px] lg:text-[15px] font-semibold rounded-full px-5 py-2.5 lg:px-7 lg:py-3 border border-[#E4C9A3]/80 bg-[#FDF7EF]/90 shadow-sm hover:shadow-md transition-all duration-200",
                          servicesOpen
                            ? "bg-[#F5E2BF] text-[#3B2412] border-[#D4AF37]"
                            : "text-[#3B2412] hover:bg-[#F5EBD9] hover:text-neutral-900",
                        ].join(" ")}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={[
                            "w-4 h-4 text-[#B38B3C] transition-transform duration-200",
                            servicesOpen ? "rotate-180" : "",
                          ].join(" ")}
                          aria-hidden="true"
                        />
                      </button>

                      {/* SUBMENU ULTRA MODERNO */}
                      {servicesOpen && (
                        <div className="absolute left-1/2 top-full mt-4 -translate-x-1/2">
                          <div className="w-[520px] md:w-[560px] rounded-3xl bg-[#FFFAF3]/95 border border-[#E8D8C1]/80 shadow-[0_26px_80px_rgba(0,0,0,.18)] px-6 py-5 backdrop-blur-md">
                            <div className="flex flex-col gap-2 mb-4">
                              <p className="text-[11px] md:text-[12px] font-semibold tracking-[0.25em] uppercase text-[#B47A3F]">
                                Escolha o tipo de festa
                              </p>
                              <p className="text-[13px] text-[#6A4628]">
                                Clique no serviço para ver detalhes completos, cardápios e fotos.
                              </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {item.subItems.map((sub) => (
                                <button
                                  key={sub.href + sub.label}
                                  type="button"
                                  onClick={() => go(sub.href)}
                                  className="group/sub flex flex-col items-start gap-1.5 rounded-2xl border border-transparent bg-white/80 hover:bg-[#FFF7EC] hover:border-[#E0C69C] px-5 py-3.5 text-left transition-colors"
                                >
                                  <span className="text-[15px] font-semibold text-[#3B2412]">
                                    {sub.label}
                                  </span>
                                  <span className="text-[12px] text-[#8D6745] group-hover/sub:text-[#6A4628]">
                                    Ver página completa
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                // Itens simples (Sobre, Depoimentos, Contato)
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    className="inline-flex items-center justify-center rounded-full px-4 py-2 text-[13px] md:text-[14px] font-medium text-[#5A3A22] hover:text-[#2B1A10] hover:bg-[#F5E2BF]/80 hover:shadow-[0_6px_18px_rgba(0,0,0,.08)] transition-all duration-200"
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

/* CTA DESKTOP */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center justify-center rounded-full px-6 py-2.5 text-[13px] md:text-[14px] font-semibold bg-gradient-to-r from-[#D4AF37] to-[#F5E2BF] text-[#3B2412] shadow-[0_10px_30px_rgba(212,175,55,.45)] hover:shadow-[0_14px_40px_rgba(212,175,55,.55)] hover:opacity-95 transition-all duration-200"
            aria-label="Solicitar orçamento"
          >
            Solicitar Orçamento
          </a>

          {/* MENU MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-neutral-900"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* NAV MOBILE */}
        {open && (
          <nav className="lg:hidden pb-4">
            <div className="grid gap-1.5">
              {NAV_ITEMS.map((item) => {
                const hasSub = !!item.subItems && item.subItems.length > 0;

                if (hasSub && item.label === "Serviços") {
                  return (
                    <div
                      key={item.href}
                      className="rounded-2xl bg-white/80 border border-[#E8D8C1] p-3"
                    >
                      <button
                        type="button"
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className="w-full inline-flex items-center justify-between text-sm font-semibold text-[#3B2412]"
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={[
                            "w-4 h-4 text-[#B38B3C] transition-transform duration-200",
                            servicesOpen ? "rotate-180" : "",
                          ].join(" ")}
                          aria-hidden="true"
                        />
                      </button>

                      {servicesOpen && (
                        <div className="mt-3 grid gap-2">
                          {item.subItems.map((sub) => (
                            <button
                              key={sub.href + sub.label}
                              type="button"
                              onClick={() => go(sub.href)}
                              className="text-left text-[13px] rounded-xl px-3 py-2 bg-[#FFF7EC] text-[#4A2C18] hover:bg-[#F5E2BF] transition-colors"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    className="text-left text-sm rounded-2xl px-4 py-2 bg-white/70 text-[#4A2C18] hover:bg-[#F5EBD9] transition-colors"
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-1.5">
                <a
                  href="#contato"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] text-[#3B2412] text-sm font-semibold px-5 py-2.5 shadow-[0_8px_24px_rgba(212,175,55,.42)] hover:opacity-95 transition"
                  aria-label="Solicitar orçamento"
                  onClick={() => setOpen(false)}
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;