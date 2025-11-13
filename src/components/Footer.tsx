import React from "react";
import { Mail, Phone, Instagram, Facebook } from "lucide-react"; // Importar ícones

export default function Footer() {
  const year = new Date().getFullYear();

  // Navegação principal e lista de serviços para o novo layout
  const navMain = [
    { href: "#servicos", label: "Cardápio" },
    { href: "#sobre", label: "Sobre" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato e orçamento" },
  ];
  const navServices = [
    { href: "#cafedamanha", label: "Café da Manhã" },
    { href: "#coffeebreak", label: "Coffee Break" },
    { href: "#almoco", label: "Almoço" },
    { href: "#jantar", label: "Jantar" }
  ];

  return (
    <footer className="bg-[#111111] text-[#EDE6DB] border-t border-[#C19A4A]/30">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        {/* Responsive grid: 1 column on mobile, 2 on small screens, 4 on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:grid-cols-4 gap-8">
          {/* Brand & description */}
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

          {/* Navigation links */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl text-white mb-4">Navegação</h4>
            {/* Grid with 2 columns on small screens to avoid long lists */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-4 gap-6 gap-2 text-[#CFC8BC]">
              {navMain.map((item) => (
                <li key={item.href} className="col-span-1">
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

          {/* Services links */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl text-white mb-4">Serviços</h4>
            {/* Grid with 2 columns on small screens */}
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:grid-cols-2 md:grid-cols-4 gap-6 gap-2 text-[#CFC8BC]">
              {navServices.map((item) => (
                <li key={item.href} className="col-span-1">
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & social icons */}
          <div className="flex flex-col">
            <h4 className="font-serif text-xl text-white mb-4">Contato e orçamento</h4>
            <ul className="space-y-3 text-[#CFC8BC]">
              <li>
                <a
                  href="#contato"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                 aria-label="Chamar no WhatsApp">
                  <Phone className="w-5 h-5 text-[#C19A4A]" />
                  (31) 99918-6245
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@homefesteeventos.com.br"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                 aria-label="Enviar e-mail">
                  <Mail className="w-5 h-5 text-[#C19A4A]" />
                  contato@homefesteeventos.com.br
                </a>
              </li>
            </ul>
            <div className="flex gap-6 mt-6 pt-4 border-t border-[#1f1f20]">
<a
  href="https://instagram.com/homefesteventos"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-400 transition"
>
  <Instagram className="w-6 h-6 text-[#C19A4A] hover:text-white" />
</a>
              <a
                href="https://facebook.com/homefesteventos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-[#C19A4A] hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#CFC8BC] text-center sm:text-left">
            © {year} Home Fest &amp; Eventos — Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-[#CFC8BC]">
            <a
              href="#servicos"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-[#C19A4A]"
            >
              Cardápio
            </a>
            <span className="hidden sm:inline opacity-40">•</span>
            <a
              href="#contato"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-[#C19A4A]"
            >
              Fale conosco
            </a>
            <span className="hidden sm:inline opacity-40">•</span>
            <a
              href="#topo"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-[#C19A4A]"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </div>
</footer>
  );
}
