import React from "react";

export default function Hero() {
  /**
   * Auxiliar para rolar suavemente até o elemento de destino. Utiliza o
   * comportamento nativo do navegador para garantir animação suave e
   * respeitar o deslocamento do cabeçalho quando necessário. Caso o
   * elemento não seja encontrado, apenas atualiza o hash da URL.
   */
  const scrollTo = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = hash;
    }
  };

  return (
    <section id="topo" className="relative">
      {/* Imagem de fundo: reutilizamos hero.jpg para criar atmosfera elegante. */}
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
        {/* Véu e gradiente para melhorar contraste do texto sobre a foto */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,.35)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Conteúdo principal do herói */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="min-h-[78vh] md:min-h-[86vh] flex flex-col justify-center">
          {/* Headline otimizada para SEO com palavra-chave principal */}
          <h1 className="font-serif text-white drop-shadow-md leading-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              Buffet e Home Fest para festas em casa
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-3 text-white/95">
              Eventos Corporativos e Sociais com Exclusividade
            </span>
          </h1>
          <p className="mt-4 max-w-3xl text-white/90 text-base sm:text-lg md:text-xl">
            Transforme seu evento em uma experiência gastronômica inesquecível. Levamos estrutura completa e gastronomia autoral para festas em casa.
          </p>

          {/* Botão de ação */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contato"
              target="_blank"
              rel="noopener noreferrer"
              className="hf-btn hf-btn--primary hf-btn--hero"
              aria-label="Solicitar orçamento"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
