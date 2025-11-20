import React from "react";
import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  tag: string;
  text: string;
};

const data: Testimonial[] = [
  {
    name: "Mariana Souza",
    tag: "Evento social",
    text: "Tive o privilégio de contratar a Home Fest para um evento especial e foi simplesmente impecável! Cada prato era uma obra de arte, tanto no sabor quanto na apresentação. Todos os convidados ficaram encantados. Recomendo de olhos fechados!",
  },
  {
    name: "Rodrigo Martins",
    tag: "Casamento",
    text: "Já participei de diversos eventos, mas a experiência gastronômica que tive com a Home Fest foi única. Atendimento de excelência, ingredientes de altíssima qualidade e um menu sofisticado. Sem dúvidas, a melhor escolha para quem busca requinte e sabor!",
  },
  {
    name: "Carla Almeida",
    tag: "Festa corporativa",
    text: "Desde o primeiro contato fui atendida com muita atenção e profissionalismo. No dia do evento, tudo superou minhas expectativas. O cardápio personalizado foi um grande diferencial e cada detalhe fez a diferença. Com certeza voltarei a contratar!",
  },
  {
    name: "Gustavo Martins",
    tag: "Celebração familiar",
    text: "Se você quer impressionar seus convidados com uma gastronomia refinada e um serviço impecável, não há escolha melhor! A Home Fest trouxe um toque de sofisticação ao meu evento que jamais esquecerei!",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-gradient-to-b from-hf-offwhite to-hf-cream py-16 md:py-24 px-5 md:px-8 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-hf-gold/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-hf-gold-dark/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
            <Quote className="w-4 h-4 text-hf-gold" />
            <span className="text-sm font-semibold text-hf-gold tracking-wide">
              Depoimentos
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-hf-brown mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Avaliações de clientes que contrataram nosso buffet para eventos em casa e em diferentes espaços
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {data.map((t, i) => (
            <article
              key={i}
              className="group relative bg-white rounded-3xl p-7 md:p-8 border-2 border-hf-gold/10 shadow-premium hover:shadow-premium-lg hover:border-hf-gold/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Ícone de aspas decorativo */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-hf-gold to-hf-gold-dark rounded-2xl flex items-center justify-center shadow-gold opacity-90 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-5" aria-label="5 estrelas">
                {[...Array(5)].map((_, idx) => (
                  <Star 
                    key={idx} 
                    className="w-5 h-5 fill-hf-gold text-hf-gold" 
                  />
                ))}
              </div>

              {/* Texto do depoimento */}
              <p className="text-neutral-700 leading-relaxed text-[15px] mb-6 flex-1 italic">
                "{t.text}"
              </p>

              {/* Divisor decorativo */}
              <div className="h-px bg-gradient-to-r from-transparent via-hf-gold/30 to-transparent mb-5" />

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hf-gold/20 to-hf-gold-dark/10 flex items-center justify-center text-hf-gold font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-hf-brown">
                    {t.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {t.tag}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-600 mb-6">
            Quer fazer parte dessa história de sucesso?
          </p>
          <a
            href="#contato"
            className="hf-btn hf-btn--primary mx-auto text-sm px-5 py-2.5"
            aria-label="Solicitar orçamento"
          >
            Solicite Seu Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
