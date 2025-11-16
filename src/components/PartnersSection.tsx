// src/components/PartnersSection.tsx
import React from "react";

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
      className="bg-[#FFF8F0] py-16 md:py-20 border-y border-[#F1DFC5]"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* CABEÇALHO PREMIUM */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <p className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-[#B38B3C]">
            Parceiros selecionados
          </p>

          <h2
            id="hf-parceiros-titulo"
            className="font-serif text-2xl md:text-3xl text-[#3B2412]"
          >
            Marcas que somam ao padrão Home Fest
          </h2>

          <p className="mt-2 text-sm md:text-base text-[#5D3B23] max-w-2xl">
            Selecionamos parceiros que elevam cada detalhe da sua festa.{" "}
            <span className="font-semibold">
              Marcas de confiança que somam sabor, criatividade e qualidade
            </span>{" "}
            ao padrão Home Fest &amp; Eventos.
          </p>
        </div>

        {/* GRID DE LOGOS PREMIUM */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-stretch justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF8F0] rounded-3xl"
              aria-label={`Abrir o Instagram de ${partner.name}`}
            >
              <div className="relative h-[200px] md:h-[220px] w-full rounded-3xl bg-gradient-to-br from-white via-[#FFF7EC] to-[#F5E3C4] border border-[#E8D8C1] shadow-[0_16px_40px_rgba(0,0,0,.08)] group-hover:shadow-[0_22px_60px_rgba(0,0,0,.12)] transition-shadow flex flex-col items-center justify-center px-4">
                <div className="inline-flex items-center justify-center rounded-full border border-[#E4D2B8] bg-white/80 px-4 py-2 mb-3">
                  <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#B47A3F]">
                    Parceiro oficial
                  </span>
                </div>

                <img
                  src={partner.logo}
                  alt={`Parceiro Home Fest & Eventos: ${partner.name}`}
                  className="max-h-[140px] md:max-h-[160px] w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-150"
                  loading="lazy"
                  decoding="async"
                />

                <p className="mt-3 text-xs md:text-sm font-medium text-[#3B2412]">
                  {partner.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
