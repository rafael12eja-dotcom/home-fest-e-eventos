import React from "react";
import { useModal } from "../hooks/useModal";
import { ArrowRight, Sparkles } from "lucide-react";

type Item = {
  id: string;
  title: string;
  img: string;
  desc: string;
};

const data: Item[] = [
  {
    id: "infantil",
    title: "Buffet Infantil",
    img: "/infantil.jpg",
    desc: "Festa infantil completa com buffet em casa e ambientação acolhedora."
  },
  {
    id: "15anos",
    title: "Festa de 15 Anos em Casa",
    img: "/aniversario-15-anos-home-fest-e-eventos.svg",
    desc: "Celebração de 15 anos com cardápio completo, mesa de doces e clima sofisticado no seu próprio espaço."
  },
  {
    id: "adulto",
    title: "Aniversário Adulto",
    img: "/portfolio-adulto.jpg",
    desc: "Celebrações intimistas ou animadas com cardápios flexíveis."
  },
  {
    id: "confraternizacao-corporativa",
    title: "Confraternização Corporativa",
    img: "/portfolio-empresas.jpg",
    desc: "Confraternizações corporativas com buffet completo e equipe presente no seu espaço."
  },
  {
    id: "casamento",
    title: "Casamento",
    img: "/portfolio-casamento.jpg",
    desc: "Cerimônia e recepção com gastronomia autoral e serviço completo."
  },
  {
    id: "boteco",
    title: "Comida de Boteco",
    img: "/portfolio-boteco.jpg",
    desc: "Petiscos com apresentação sofisticada e tradição brasileira."
  },
];

export default function Portfolio() {
  const { openModal } = useModal();

  return (
    <section
      id="portfolio"
      aria-label="Festas em Casa e Eventos Sociais"
      className="bg-gradient-to-b from-hf-offwhite to-hf-cream px-5 md:px-8 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-hf-gold" />
          <span className="text-sm font-semibold text-hf-gold tracking-wide">
            Nosso Portfólio
          </span>
        </div>

        {/* Título */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-hf-brown mb-4">
          Festas em Casa e Eventos Sociais
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          Seu evento inesquecível, com a estrutura de um buffet e o conforto do seu espaço.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Grid de cards premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {data.map((item, index) => (
            <article
              key={item.id}
              className="hf-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagem com overlay hover - renderiza apenas se existir imagem configurada */}
              {item.img && (
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <picture>
                    <source srcSet={item.img.replace('.jpg', '.webp')} type="image/webp" />
                    <img
                      src={item.img}
                      alt={`${item.title} em Belo Horizonte - Buffet Home Fest & Eventos`}
                      className="hf-card__img"
                      loading="lazy"
                    />
                  </picture>
                  {/* Overlay no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}

              {/* Conteúdo */}
              <div className="hf-card__body">
                <h3 className="hf-card__title">
                  {item.title}
                </h3>
                <p className="hf-card__desc">
                  {item.desc}
                </p>

                {/* Ações */}
                <div className="mt-4">
                  <button
                    onClick={() => openModal(item.id, item.title)}
                    className="hf-btn hf-btn--outline hf-btn--hero group/btn w-full justify-center text-sm"
                    type="button"
                  >
                    <span>Ver Cardápio</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}