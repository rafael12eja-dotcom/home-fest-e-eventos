import React from "react";
import { Award, Heart, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16 md:py-24 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Imagem com decoração premium */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative">
              {/* Elemento decorativo de fundo */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-hf-gold/20 to-hf-gold-dark/10 rounded-3xl -z-10" />
              
              <picture>
                <source srcSet="/about-chef.png" type="image/png" />
                <img
                  src="/about-chef.png"
                  alt="Chef da Home Fest & Eventos apontando para o conteúdo"
                  className="w-full h-auto rounded-3xl shadow-premium-lg object-cover border-4 border-white"
                  width="800"
                  height="600"
                  loading="lazy"
                />
              </picture>

              {/* Badge flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-hf-gold via-hf-gold-dark to-hf-brown text-white rounded-2xl shadow-gold-lg p-6 max-w-[200px]">
                <Award className="w-8 h-8 mb-2" />
                <p className="font-bold text-2xl">25 Anos</p>
                <p className="text-sm opacity-90">de Experiência</p>
              </div>
            </div>
          </div>

          {/* Conteúdo textual */}
          <div className="lg:w-1/2 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
              <Heart className="w-4 h-4 text-hf-gold" />
              <span className="text-sm font-semibold text-hf-gold tracking-wide">
                Nossa História
              </span>
            </div>

            {/* Título */}
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-hf-brown mb-6 leading-tight">
              Tradição que se Adapta ao Seu Espaço
            </h2>

            {/* Texto principal */}
            <div className="space-y-5 text-lg text-neutral-700 leading-relaxed">
              <p>
                Há <strong className="text-hf-gold font-semibold">25 anos</strong>, a Home Fest & Eventos transforma celebrações em experiências únicas, sempre com o cuidado e a dedicação que só o tempo e a prática aperfeiçoam. Nossa fundadora construiu uma história sólida no universo das festas, guiada por um princípio essencial: <strong className="text-hf-brown">o evento perfeito acontece no lugar que faz sentido para você</strong>.
              </p>

              <p>
                Levamos o buffet completo até o espaço da sua escolha, seja uma casa aconchegante, um sítio, um salão ou até mesmo o seu próprio lar, oferecendo a estrutura, a equipe e o cardápio ideal para cada ocasião. Essa tradição nos permite personalizar cada detalhe, unindo praticidade, elegância e sabor em uma experiência que reflete a sua visão e estilo.
              </p>

              <div className="bg-gradient-to-r from-hf-cream to-hf-offwhite border-l-4 border-hf-gold rounded-r-2xl p-6 my-6">
                <p className="text-hf-brown font-medium text-xl italic flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-hf-gold flex-shrink-0 mt-1" />
                  <span>Com a Home Fest & Eventos, celebrar é simples. Você escolhe o lugar, nós cuidamos de tudo.</span>
                </p>
              </div>
            </div>

            {/* Destaques */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-hf-cream rounded-2xl border-2 border-hf-gold/20">
                <p className="text-3xl font-bold text-hf-gold mb-1">+500</p>
                <p className="text-sm text-neutral-600">Eventos Realizados</p>
              </div>
              <div className="text-center p-4 bg-hf-cream rounded-2xl border-2 border-hf-gold/20">
                <p className="text-3xl font-bold text-hf-gold mb-1">100%</p>
                <p className="text-sm text-neutral-600">Personalizado</p>
              </div>
              <div className="text-center p-4 bg-hf-cream rounded-2xl border-2 border-hf-gold/20">
                <p className="text-3xl font-bold text-hf-gold mb-1">⭐ 4.9</p>
                <p className="text-sm text-neutral-600">Avaliação Média</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
