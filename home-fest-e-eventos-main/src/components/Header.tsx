import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  // Serviços como botões diretos
  { href: "/buffet-infantil-bh", label: "Buffet Infantil" },
  { href: "/buffet-churrasco-bh", label: "Churrasco" },
  { href: "/buffet-almoco-jantar-bh", label: "Almoço e Jantar" },
  { href: "/festa-15-anos-bh", label: "15 Anos" },
  
  // Itens de navegação padrão
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <div className="h-24 md:h-32 lg:h-36 flex items-center justify-between gap-4">
          {/* LOGO */}
          <a
            href="/"
            className="flex-1 lg:flex-initial inline-flex items-center justify-center lg:justify-start gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-2xl"
            aria-label="Voltar para a página inicial Home Fest & Eventos"
          >
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/logo.png"
                alt="Home Fest & Eventos - Buffet e Home Fest para festas em casa"
                className="h-16 md:h-24 lg:h-28 xl:h-32 w-auto drop-shadow-[0_6px_20px_rgba(212,175,55,.5)]"
                width={120}
                height={112}
                loading="eager"
                decoding="sync"
              />
            </picture>
          </a>

          {/* NAV DESKTOP - Novo design: botões simétricos e elegantes */}
          <nav className="hidden lg:flex items-center flex-1 justify-center">
            <div className="inline-flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => go(item.href)}
                  className="text-[15px] font-bold rounded-full px-4 py-2.5 text-[#3B2412] transition-all duration-300 ease-out border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] hover:shadow-md hover:shadow-[#D4AF37]/20"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA DESKTOP - Mantido o design premium em ouro */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center justify-center rounded-full px-8 py-3.5 text-[15px] font-bold bg-gradient-to-br from-[#D4AF37] via-[#E8C76A] to-[#D4AF37] text-white border-2 border-[#C9A030] shadow-[0_16px_48px_rgba(212,175,55,.5),0_0_0_4px_rgba(212,175,55,.15)] hover:shadow-[0_20px_56px_rgba(212,175,55,.6),0_0_0_6px_rgba(212,175,55,.2)] hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out"
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
          <nav className="lg:hidden pb-6">
            <div className="bg-gradient-to-b from-white/95 to-[#FFFBF5]/95 rounded-3xl border-2 border-[#E8D8C1] shadow-[0_16px_48px_rgba(0,0,0,.12)] p-4">
              <p className="text-[11px] font-bold tracking-wider uppercase text-[#B47A3F] mb-3 px-2">Menu de Navegação</p>
              <div className="grid gap-2">
              {NAV_ITEMS.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => go(item.href)}
                    className="text-left text-[15px] font-bold rounded-2xl px-5 py-3.5 bg-white/80 text-[#3B2412] border-2 border-[#E8D8C1] hover:border-[#D4AF37] transition-all shadow-sm hover:shadow-md hover:scale-[1.02] hover:bg-white hover:shadow-[#D4AF37]/30"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t-2 border-[#E8D8C1]">
                <a
                  href="#contato"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] via-[#E8C76A] to-[#D4AF37] text-white text-[15px] font-bold px-6 py-4 border-2 border-[#C9A030] shadow-[0_12px_32px_rgba(212,175,55,.5)] hover:shadow-[0_16px_40px_rgba(212,175,55,.6)] hover:scale-[1.02] transition-all"
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
