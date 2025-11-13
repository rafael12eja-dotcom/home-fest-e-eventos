import React from "react";
import { useModal } from "../hooks/useModal"; // Hook para abrir o modal (será criado na fase 4)
// Importa os detalhes completos de cada tipo de evento. Esse dataset
// contém introdução e seções com listas de itens que serão exibidos no modal
import { EVENT_TYPES } from "../data/eventTypes";

type Item = {
  id: string;
  title: string;
  img: string;
  desc: string;
};

// Lista de tipos de festa exibida no portfólio.  As imagens usam o prefixo
// "portfolio-" para evitar conflito com fotos de serviços e são fornecidas
// pelo cliente. A seção Home Fest foi removida conforme solicitado.
const data: Item[] = [
  {
    id: "infantil",
    title: "Buffet Infantil",
    img: "/portfolio-infantil.jpg",
    desc: "Festa temática com cardápio lúdico e decoração inclusa."
  },
  {
    id: "15anos",
    title: "15 Anos",
    img: "/portfolio-15anos.jpg",
    desc: "Celebração inesquecível com menu elegante e ambientação especial."
  },
  {
    id: "casamento",
    title: "Casamento",
    img: "/portfolio-casamento.jpg",
    desc: "Cerimônia e recepção com gastronomia autoral e serviço completo."
  },
  {
    id: "churrasco",
    title: "Churrasco",
    img: "/portfolio-churrasco.jpg",
    desc: "Cortes selecionados na brasa, acompanhamentos e farofas especiais."
  },
  {
    id: "boteco",
    title: "Comida de Boteco",
    img: "/portfolio-boteco.jpg",
    desc: "Petiscos com apresentação sofisticada e tradição brasileira."
  },
  {
    id: "empresas",
    title: "Corporativo",
    img: "/portfolio-empresas.jpg",
    desc: "Soluções gastronômicas para eventos corporativos com pontualidade e requinte."
  },
  {
    id: "escolar",
    title: "Festa Escolar",
    img: "/portfolio-escolar.jpg",
    desc: "Evento escolar organizado, econômico e com cardápio infantil equilibrado."
  }
];

export default function Portfolio() {
  const { openModal } = useModal();

  return (
    <section
      id="portfolio"
      aria-label="Portfólio de serviços"
      className="bg-[#FBF6EE] px-5 md:px-8 py-6 md:py-8"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-[#111]">
          Portfólio de Eventos - Buffet e Home Fest
        </h2>
        <p className="text-lg text-[#404040] mt-2">
          Experiências gastronômicas para cada tipo de celebração
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl shadow-[0_10px_30px_-10px_rgba(0,0,0,.15)] overflow-hidden ring-1 ring-black/5 flex flex-col"
            >
              <div className="aspect-[16/11] w-full overflow-hidden">
                <picture>
                  <source srcSet={item.img.replace('.jpg', '.webp')} type="image/webp" />
                  <img
                    src={item.img}
                    alt={`${item.title} - Buffet Home Fest com cardápio personalizado para festas em casa`}
                    className="w-full h-full md:h-auto aspect-[4/3] object-cover rounded-xl shadow-sm"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-[#111] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#444] flex-1">{item.desc}</p>

                <div className="card-actions mt-6">
                  <button
                    onClick={() => openModal(item.id, item.title)}
                    className="hf-btn hf-btn--outline"
                    type="button"
                  >
                    Cardápio
                  </button>

                  <a
                    href="#contato"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hf-btn hf-btn--primary"
                   aria-label="Chamar no WhatsApp">
                    Orçamento via WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* O modal será renderizado globalmente pelo App.tsx */}
    </section>
  );
}
