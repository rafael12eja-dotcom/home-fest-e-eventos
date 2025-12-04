import React from "react";
import { Handshake, ExternalLink } from "lucide-react";

type Partner = {
  name: string;
  href: string;
  logo: string;
};

const partners: Partner[] = [
  {
    name: "Pastelaria Marília de Dirceu",
    href: "https://www.instagram.com/pastelariamariliadedirceu/",
    logo: "/partner-pastelaria-marilia-dirceu.png",
  },
  {
    name: "Yukai Cozinha Japonesa",
    href: "https://www.instagram.com/yukaicozinhajaponesa/",
    logo: "/partner-yukai-cozinha-japonesa.png",
  },
  {
    name: "Cima's Cake",
    href: "https://www.instagram.com/cimascake/",
    logo: "/partner-cimas-cake.png",
  },
];

const PartnersSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hf-parceiros-titulo"
      className="bg-gradient-to-b from-hf-offwhite to-hf-cream py-16 md:py-20 border-y-2 border-hf-gold/20 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-hf-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-hf-gold-dark/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
            <Handshake className="w-4 h-4 text-hf-gold" />
            <span className="text-sm font-semibold text-hf-gold tracking-wide">
              Nossos Parceiros
            </span>
          </div>

          <h2
            id="hf-parceiros-titulo"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-hf-brown mb-4"
          >
            Marcas que somam ao padrão Home Fest
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed">
            Selecionamos parceiros que elevam cada detalhe da sua festa.{" "}
            <strong className="text-hf-brown">
              Marcas de confiança que somam sabor, criatividade e qualidade
            </strong>{" "}
            ao padrão Home Fest &amp; Eventos.
          </p>
        </div>

        {/* Grid de parceiros */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-3xl p-8 md:p-10 border-2 border-hf-gold/15 shadow-premium hover:shadow-premium-lg hover:border-hf-gold/40 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-hf-gold focus-visible:ring-offset-4"
              aria-label={`Abrir o Instagram de ${partner.name}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Ícone de link externo */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-hf-gold/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-5 h-5 text-hf-gold" />
              </div>

              {/* Logo */}
              <div className="relative w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={`Parceiro Home Fest & Eventos: ${partner.name}`}
                  className="max-h-full max-w-full w-auto h-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Nome do parceiro */}
              <h3 className="text-center font-semibold text-lg text-hf-brown group-hover:text-hf-gold transition-colors duration-300">
                {partner.name}
              </h3>

              {/* Barra decorativa */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-hf-gold to-hf-gold-dark rounded-full group-hover:w-3/4 transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Mensagem adicional */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 italic">
            Parcerias estratégicas que garantem excelência em cada evento
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
