import React from "react";
import { Mail, Phone, Instagram, Facebook } from "lucide-react"; // Importar ícones

export default function Footer() {
  const year = new Date().getFullYear();

  // Navegação principal e lista de serviços para o novo layout
  const navMain = [
    { href: "#festas-em-casa", label: "Festas em Casa" },
    { href: "#sobre", label: "Sobre" },
    { href: "#catering", label: "Catering Corporativo" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato e Orçamento" },
  ];
  
  // Usaremos os links de serviços mais importantes para o rodapé
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
    <footer className="bg-[#111111] text-[#EDE6DB] border-t border-[#C19A4A]/30">
      {/* Top section: Main content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        {/* Responsive grid: 1 column on mobile, 2 on small screens, 4 on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Coluna 1: Brand & description */}
          <div className="flex flex-col">
            <a href="#topo" className="inline-flex items-center gap-3">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.png"
                  alt="Home Fest & Eventos - Buffet e Home Fest para festas em casa"
                  className="h-14 w-auto drop-shadow-[0_4px_18px_rgba(193,154,74,0.45)]"
                  width="60"
                  height="56"
                  loading="lazy"
                />
              </picture>
            </a>
            <p className="mt-4 text-[15px] leading-relaxed text-[#E4DED2] max-w-md">
              Experiências memoráveis com gastronomia autoral, serviço completo e
              curadoria de detalhes — do briefing ao brinde final.
            </p>
            <a
              href="https://wa.me/5531999186245"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex hf-btn hf-btn--primary w-max"
              aria-label="Chamar no WhatsApp">
              Solicitar Orçamento
            </a>
          </div>

          {/* Coluna 2: Navigation links */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-[#CFC8BC]">
              {navMain.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Services links */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-[#CFC8BC]">
              {navServices.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contact & social icons */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl text-white mb-4">Contato e Orçamento</h4>
            <ul className="space-y-3 text-[#CFC8BC]">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C19A4A]" />
                <a
                  href="https://wa.me/5531999186245"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chamar no WhatsApp"
                >
                  (31) 99918-6245
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C19A4A]" />
                <a
                  href="mailto:contato@homefesteeventos.com.br"
                  className="hover:text-white transition-colors"
                  aria-label="Enviar e-mail"
                >
                  contato@homefesteeventos.com.br
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6 pt-4 border-t border-[#1f1f20]">
              <a
                href="https://instagram.com/homefesteventos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#C19A4A] hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/homefesteventos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C19A4A] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: Copyright and Partners */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-col gap-3 sm:gap-2 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Copyright */}
          <p className="text-xs text-[#CFC8BC] text-center sm:text-left order-2 sm:order-1">
            © {year} Home Fest &amp; Eventos — Todos os direitos reservados.
          </p>
          
          {/* Parceiros */}
          <p className="text-[11px] sm:text-xs text-[#CFC8BC] text-center sm:text-right order-1 sm:order-2">
            Parceiros:&nbsp;
            {partners.map((partner, index) => (
              <span key={partner.href}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-4 decoration-[#C19A4A]"
                >
                  {partner.name}
                </a>
                {index < partners.length - 1 && (
                  <span className="opacity-60"> · </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
