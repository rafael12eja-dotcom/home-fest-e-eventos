import React from "react";
import { Flame, Coffee, Utensils, Croissant, Sparkles, ArrowRight } from "lucide-react";
import { useModal } from "../hooks/useModal";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: "cafedamanha",
    title: "Café da Manhã",
    description: "Mesa com pães artesanais, frutas frescas, sucos e opções quentes para começar o dia com leveza e energia.",
    image: "cafedamanha.jpg",
    icon: <Croissant className="w-6 h-6" />,
  },
  {
    id: "coffeebreak",
    title: "Coffee Break",
    description: "Cafés, chás e lanches selecionados, com doces e salgados ideais para pausas rápidas e momentos de recarregar a equipe.",
    image: "coffeebreak.jpg",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    id: "almoco-jantar",
    title: "Almoço e Jantar",
    description: "Buffet completo com entrada, pratos principais e acompanhamentos preparados pela equipe Home Fest para qualquer ocasião.",
    image: "almoco-jantar.jpg",
    icon: <Utensils className="w-6 h-6" />,
  },
];

export default function Services() {
  const { openModal } = useModal();

  const scrollToService = (serviceId: string) => {
    if (typeof document === "undefined") return;
    const element = document.getElementById(`service-${serviceId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getCardapioId = (serviceId: string) => {
    switch (serviceId) {
      case "cafedamanha":
        return "brunch";
      case "almoco-jantar":
        return "almoco-jantar";
      default:
        return "coquetel";
    }
  };

  return (
    <section id="servicos" className="bg-gradient-to-b from-hf-cream to-hf-offwhite py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-hf-gold" />
            <span className="text-sm font-semibold text-hf-gold tracking-wide">
              Nossos Serviços
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-hf-brown mb-4">
            Catering e Serviços Corporativos
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Soluções gastronômicas completas para eventos empresariais, reuniões e feiras.
          </p>

          {/* Navegação rápida */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => scrollToService(service.id)}
                className="px-5 py-2.5 rounded-full border-2 border-hf-gold/30 bg-white text-sm font-semibold text-hf-brown hover:bg-hf-gold hover:text-white hover:border-hf-gold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-stretch">
          {services.map((s, index) => (
            <article
              key={s.id}
              id={`service-${s.id}`}
              className="hf-card group h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Imagem */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <picture>
                  <source srcSet={`/${s.id}.webp`} type="image/webp" />
                  <img
                    src={`/${s.image}`}
                    alt={`${s.title} em Belo Horizonte - Home Fest & Eventos`}
                    className="hf-card__img"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                </picture>
                {/* Ícone flutuante */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center text-hf-gold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="hf-card__body">
                <h3 className="hf-card__title text-xl md:text-2xl">
                  {s.title}
                </h3>
                <p className="hf-card__desc line-clamp-3 min-h-[72px]">
                  {s.description}
                </p>

                <button
                  onClick={() => openModal(getCardapioId(s.id), s.title)}
                  className="hf-btn hf-btn--outline group/btn"
                  type="button"
                >
                  <span>Ver Cardápio</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}

          {/* Card especial - Churrasco */}
          <article className="hf-card group bg-gradient-to-br from-hf-gold/5 to-hf-gold-dark/5">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <picture>
                <source srcSet="/portfolio-churrasco.webp" type="image/webp" />
                <img
                  src="/portfolio-churrasco.jpg"
                  alt="Churrasco em Belo Horizonte com buffet completo"
                  className="hf-card__img"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </picture>
              {/* Badge especial */}
              <div className="absolute top-4 right-4 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <Flame className="w-5 h-5" />
                <span className="text-sm font-bold">Destaque</span>
              </div>
            </div>

            <div className="hf-card__body">
              <h3 className="hf-card__title text-xl md:text-2xl flex items-center gap-2">
                <Flame className="w-6 h-6 text-orange-500" />
                Churrasco
              </h3>
              <p className="hf-card__desc line-clamp-3 min-h-[72px]">
                Cortes selecionados, acompanhamentos e serviço completo da Home Fest, ideal para eventos em casa, empresas ou sítios.
              </p>

              <button
                type="button"
                onClick={() => openModal("churrasco", "Churrasco")}
                className="hf-btn hf-btn--primary group/btn"
              >
                <span>Ver Cardápio Completo</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
