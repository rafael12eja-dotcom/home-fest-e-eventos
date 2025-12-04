import React from "react";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <section id="topo" className="relative overflow-hidden">
      {/* Imagem de fundo com overlay premium */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet="/hero.webp" type="image/webp" />
          <img
            src="/hero.jpg"
            alt="Buffet para festas em casa - Home Fest & Eventos"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
          />
        </picture>
        {/* Overlay gradiente sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-b from-hf-brown/70 via-hf-brown/50 to-hf-brown/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center py-20">
          {/* Badge premium */}
          <div className="inline-flex items-center gap-2 bg-hf-gold/20 backdrop-blur-md border-2 border-hf-gold/40 rounded-full px-5 py-2.5 mb-6 w-fit">
            <Sparkles className="w-5 h-5 text-hf-gold-light" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Experiências Gastronômicas Exclusivas
            </span>
          </div>

          {/* Headline principal */}
          <h1 className="font-serif text-white drop-shadow-2xl leading-[1.1] max-w-5xl">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-hf-cream to-white bg-clip-text text-transparent animate-fadeIn">
              Buffet e Home Fest
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-hf-cream/95 animate-fadeIn animation-delay-200">
              para festas em casa
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-3xl text-white/95 text-lg sm:text-xl md:text-2xl leading-relaxed font-light animate-fadeIn animation-delay-400">
            Transforme seu evento em uma <strong className="font-semibold text-hf-gold-light">experiência gastronômica inesquecível</strong>.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fadeIn animation-delay-600">
            <a
              href="#contato"
              className="hf-btn hf-btn--primary hf-btn--hero group"
              aria-label="Solicitar orçamento"
            >
              <span>Solicitar Orçamento</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <button
              onClick={() => scrollTo("#servicos")}
              className="hf-btn hf-btn--outline hf-btn--hero bg-white/10 backdrop-blur-md border-white/40 text-white hover:bg-white hover:text-hf-brown hover:border-white"
              aria-label="Ver serviços"
            >
              Ver Serviços
            </button>
          </div>

          {/* Social proof sutil */}
          <div className="mt-12 flex flex-wrap items-center gap-8 text-white/80 text-sm animate-fadeIn animation-delay-800">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-hf-gold border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-hf-gold-light border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-hf-gold-dark border-2 border-white" />
              </div>
              <span className="font-medium">+500 eventos realizados</span>
            </div>
            <div className="h-6 w-px bg-white/30" />
            <span className="font-medium">⭐ 4.9/5 avaliação média</span>
          </div>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-hf-cream to-transparent" />
    </section>
  );
}
