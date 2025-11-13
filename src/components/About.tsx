import React from "react";

/**
 * Seção "Sobre Nós".
 *
 * Esta versão remove referências externas e citações e descreve de forma clara
 * e envolvente como a Home Fest & Eventos transforma qualquer celebração em
 * uma experiência gastronômica memorável. Mantém-se o foco na combinação de
 * técnicas refinadas, ingredientes selecionados e serviço impecável, além de
 * reforçar o compromisso com cardápios personalizados e apresentações
 * primorosas.
 */
export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagem ilustrativa */}
        <div className="md:w-1/2 w-full">
          {/* Substituímos a imagem de "Sobre nós" para usar about.jpg enviada pelo cliente */}
          <picture>
            <source srcSet="/about.webp" type="image/webp" />
            <img
              src="/about.jpg"
              alt="Buffet Home Fest & Eventos - equipe especializada em festas em casa e eventos especiais"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              width="800"
              height="600"
              loading="lazy"
            />
          </picture>
        </div>
        {/* Texto */}
        <div className="md:w-1/2 w-full">
          <h2 className="font-serif text-4xl md:text-5xl text-[#111] mb-4">
            Sobre a Home Fest & Eventos – Buffet e Home Fest para festas em casa
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
            Home Fest & Eventos: Tradição que se Adapta ao Seu Espaço
            
            Há 25 anos, a Home Fest & Eventos transforma celebrações em experiências únicas, sempre com o cuidado e a dedicação que só o tempo e a prática aperfeiçoam. Nossa fundadora construiu uma história sólida no universo das festas, guiada por um princípio essencial: o evento perfeito acontece no lugar que faz sentido para você.
          </p>
          <p className="mt-4 text-lg md:text-xl text-neutral-700 leading-relaxed">
            Levamos o buffet completo até o espaço da sua escolha, seja uma casa aconchegante, um sítio, um salão ou até mesmo o seu próprio lar, oferecendo a estrutura, a equipe e o cardápio ideal para cada ocasião. Essa tradição nos permite personalizar cada detalhe, unindo praticidade, elegância e sabor em uma experiência que reflete a sua visão e estilo.
          </p>
          <p className="mt-4 text-lg md:text-xl text-neutral-700 leading-relaxed">
            Com a Home Fest & Eventos, celebrar é simples. Você escolhe o lugar, nós cuidamos de tudo.
          </p>
        </div>
      </div>
    </section>
  );
}