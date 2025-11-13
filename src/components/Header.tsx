import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  // O item "Cardápio" aponta para a seção de serviços (cardápio).
  { href: "#servicos", label: "Cardápio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // fecha menu mobile ao navegar
  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#F3EADD]/95 shadow-[0_6px_20px_rgba(0,0,0,.08)] backdrop-blur"
          : "bg-[#F7EFE6]/90 shadow-[0_2px_10px_rgba(0,0,0,.04)] backdrop-blur",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-28 flex items-center justify-between gap-4">
          {/* LOGO */}
          <a href="#topo" className="flex items-center gap-3" aria-label="Início">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img
                src="/logo.png"
                alt="Home Fest & Eventos - Buffet e Home Fest para festas em casa"
                className="h-28 w-auto drop-shadow-[0_5px_18px_rgba(212,175,55,.45)]"
                width="120"
                height="112"
                loading="eager"
                decoding="sync"
              />
            </picture>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="text-[18px] font-semibold text-neutral-800 px-4 py-2 rounded-full hover:bg-[#F5EBD9] hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contato"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-neutral-900 bg-gradient-to-r from-[#E9C779] via-[#D4AF37] to-[#e9c1a8] shadow-[0_8px_20px_rgba(212,175,55,.35)] hover:opacity-95 transition"
           aria-label="Chamar no WhatsApp">
            Solicitar Orçamento
          </a>

          {/* MENU MOBILE */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-neutral-900"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* NAV MOBILE */}
        {open && (
          <nav className="lg:hidden pb-4">
            <div className="grid gap-1.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  className="w-full text-left px-4 py-3 rounded-lg text-[18px] font-semibold text-neutral-800 hover:bg-[#F5EBD9] transition-colors"
                >
                  {item.label}
                </button>
              ))}

          <a
                href="#contato"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-neutral-900 bg-gradient-to-r from-[#E9C779] via-[#D4AF37] to-[#e9c1a8] shadow-[0_8px_20px_rgba(212,175,55,.35)] hover:opacity-95 transition"
               aria-label="Chamar no WhatsApp">
                Solicitar Orçamento
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
