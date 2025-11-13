import React from "react";

type Testimonial = {
  name: string;
  tag: string;
  text: string;
};

const data: Testimonial[] = [
  {
    name: "Mariana Souza",
    tag: "Evento social",
    text:
      "Tive o privilégio de contratar a Home Fest para um evento especial e foi simplesmente impecável! Cada prato era uma obra de arte, tanto no sabor quanto na apresentação. Todos os convidados ficaram encantados. Recomendo de olhos fechados!",
  },
  {
    name: "Rodrigo Martins",
    tag: "Casamento",
    text:
      "Já participei de diversos eventos, mas a experiência gastronômica que tive com a Home Fest foi única. Atendimento de excelência, ingredientes de altíssima qualidade e um menu sofisticado. Sem dúvidas, a melhor escolha para quem busca requinte e sabor!",
  },
  {
    name: "Carla Almeida",
    tag: "Festa corporativa",
    text:
      "Desde o primeiro contato fui atendida com muita atenção e profissionalismo. No dia do evento, tudo superou minhas expectativas. O cardápio personalizado foi um grande diferencial e cada detalhe fez a diferença. Com certeza voltarei a contratar!",
  },
  {
    name: "Gustavo Martins",
    tag: "Celebração familiar",
    text:
      "Se você quer impressionar seus convidados com uma gastronomia refinada e um serviço impecável, não há escolha melhor! A Home Fest trouxe um toque de sofisticação ao meu evento que jamais esquecerei!",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[#FBF6EE] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="font-serif text-center text-4xl md:text-5xl text-[#111]">
          Depoimentos sobre a experiência com a Home Fest & Eventos
        </h2>
        <p className="text-center text-lg text-[#404040] mt-2 mb-12">
          Avaliações de clientes que contrataram nosso buffet para eventos em casa e em diferentes espaços
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((t, i) => (
            <article
              key={i}
              className="bg-white rounded-3xl shadow-[0_10px_30px_-12px_rgba(0,0,0,.18)] ring-1 ring-black/5 p-7"
            >
              {/* estrelas */}
              <div className="mb-4 text-[#EDBF64]" aria-label="5 estrelas">
                {"★★★★★"}
              </div>

              <p className="text-[#2d2d2d] leading-relaxed">{`“${t.text}”`}</p>

              <hr className="my-6 border-black/10" />

              <div>
                <div className="font-semibold text-[#111]">{t.name}</div>
                <div className="text-sm text-[#6b6b6b]">{t.tag}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
