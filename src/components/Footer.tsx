import React from "react";
import { Mail, Phone, Instagram, Facebook, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navMain = [
    { href: "#festas-em-casa", label: "Festas em Casa" },
    { href: "#sobre", label: "Sobre" },
    { href: "#catering", label: "Catering Corporativo" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato e Orçamento" },
  ];

  const navServices = [
    { href: "/buffet-infantil-bh", label: "Buffet Infantil" },
    { href: "/buffet-almoco-jantar-bh", label: "Almoço e Jantar" },
    { href: "/buffet-churrasco-bh", label: "Churrasco" },
    { href: "/festa-escolar-bh", label: "Festa Escolar" },
    { href: "/festa-15-anos-bh", label: "Festa de 15 Anos" },
  ];

  const partners = [
    {
      name: "Pastelaria Marília de Dirceu",
      href: "https://www.instagram.com/pastelariamariliadedirceu/",
    },
    {
      name: "Yukai Cozinha Japonesa",
      href: "https://www.instagram.com/yukaicozinhajaponesa/",
    },
    {
      name: "Cima's Cake",
      href: "https://www.instagram.com/cimascake/",
    },
    {
      name: "Boom Festas",
      href: "https://www.instagram.com/boomfestasoficial/",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-hf-brown to-[#3a3229] text-hf-cream border-t-4 border-hf-gold/30">
      {/* Seção principal */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Coluna 1: Brand */}
          <div className="flex flex-col lg:col-span-1">
            <a 
              href="#topo" 
              className="inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
            >
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.png"
                  alt="Home Fest & Eventos - Buffet e Home Fest para festas em casa"
                  className="h-24 w-auto drop-shadow-[0_10px_28px_rgba(0,0,0,0.55)] brightness-110"
                  width="60"
                  height="56"
                  loading="lazy"
                />
              </picture>
            </a>
            <p className="mt-5 text-[15px] leading-relaxed text-hf-cream/90 max-w-sm">
              Experiências memoráveis com gastronomia autoral, serviço completo e curadoria de detalhes — do briefing ao brinde final.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-hf-gold-light">
              <MapPin className="w-4 h-4" />
              <span>Belo Horizonte, MG</span>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-hf-gold rounded-full" />
              Navegação
            </h4>
            <ul className="space-y-3 text-hf-cream/80">
              {navMain.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-hf-gold-light transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-hf-gold rounded-full" />
              Serviços
            </h4>
            <ul className="space-y-3 text-hf-cream/80">
              {navServices.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-hf-gold-light transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-hf-gold rounded-full" />
              Contato
            </h4>
            <ul className="space-y-4 text-hf-cream/80">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-hf-gold mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="https://wa.me/5531999186245"
                  className="hover:text-hf-gold-light transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chamar no WhatsApp"
                >
                  (31) 99918-6245
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-hf-gold mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:contato@homefesteeventos.com.br"
                  className="hover:text-hf-gold-light transition-colors duration-300 break-all"
                  aria-label="Enviar e-mail"
                >
                  contato@homefesteeventos.com.br
                </a>
              </li>
            </ul>

            {/* Redes sociais */}
            <div className="flex gap-3 mt-6 pt-6 border-t border-hf-gold/20">
              <a
                href="https://instagram.com/homefesteventos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-hf-gold/10 border-2 border-hf-gold/30 flex items-center justify-center text-hf-gold hover:bg-hf-gold hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/homefesteventos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-hf-gold/10 border-2 border-hf-gold/30 flex items-center justify-center text-hf-gold hover:bg-hf-gold hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-12 pt-12 border-t border-hf-gold/20">
          <div className="bg-gradient-to-br from-hf-gold/10 to-hf-gold-dark/10 backdrop-blur-sm border-2 border-hf-gold/30 rounded-3xl p-8 md:p-10 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              Pronto para criar momentos inesquecíveis?
            </h3>
            <p className="text-hf-cream/80 text-lg mb-6 max-w-2xl mx-auto">
              Solicite um orçamento personalizado e descubra como podemos transformar seu evento em uma experiência única.
            </p>
            <a
              href="https://wa.me/5531999186245"
              target="_blank"
              rel="noopener noreferrer"
              className="hf-btn hf-btn--primary mx-auto px-8 py-3 text-base"
              aria-label="Chamar no WhatsApp"
            >
              Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hf-gold/20 bg-hf-brown/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-4 sm:gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-hf-cream/70 text-center sm:text-left order-2 sm:order-1">
            © {year} Home Fest &amp; Eventos — Todos os direitos reservados.
          </p>

          {/* Parceiros */}
          <p className="text-xs sm:text-sm text-hf-cream/70 text-center sm:text-right order-1 sm:order-2">
            Parceiros:&nbsp;
            {partners.map((partner, index) => (
              <span key={partner.href}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hf-gold-light underline underline-offset-4 decoration-hf-gold/50 transition-colors duration-300"
                >
                  {partner.name}
                </a>
                {index < partners.length - 1 && (
                  <span className="opacity-50"> · </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
