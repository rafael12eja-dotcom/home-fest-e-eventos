import React from "react";
import { useModal } from "../hooks/useModal"; // Hook para abrir o modal (será criado na fase 4)

/**
 * Lista de serviços oferecidos. Inspirado na seção de categorias
 * (CAFÉ DA MANHÃ, FINGER FOOD, COFFEE BREAK, ALMOÇO, JANTAR, CATERING) do site
 * de referência【868132981816042†L140-L161】, adaptamos os nomes e descrições para
 * o contexto da Home Fest & Eventos. Cada serviço possui uma imagem de
 * apoio disponível em /public.
 */
type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

// A lista de serviços foi ajustada para utilizar as fotos fornecidas pelo cliente.
// Cada item aponta para um arquivo em /public correspondente.
const services: Service[] = [
  {
    id: "cafedamanha",
    title: "Café da Manhã",
    description:
      "Comece seu evento com energia: seleção de pães artesanais, frutas, sucos e bebidas quentes.",
    // Imagem específica de café da manhã fornecida pelo cliente
    image: "cafedamanha.jpg",
  },
    {
    id: "coffeebreak",
    title: "Coffee Break",
    description:
      "Intervalo perfeito: cafés, chás, lanches leves e guloseimas para recarregar as energias.",
    // Imagem corporativa para coffee break
    image: "coffeebreak.jpg",
  },
  {
    id: "almoco",
    title: "Almoço",
    description:
      "Pratos completos com proteínas, massas e guarnições para um almoço memorável.",
    // Churrasco como símbolo de almoço reforçado
    image: "almoco.jpg",
  },
  {
    id: "jantar",
    title: "Jantar",
    description:
      "Um banquete noturno com opções elegantes, harmonização de vinhos e sobremesas especiais.",
    // Imagem elegante de jantar fornecida
    image: "jantar.jpg",
  },
  ];

export default function Services() {
  const { openModal } = useModal();

  // Função para determinar qual cardápio abrir
  const getCardapioId = (serviceId: string) => {
    switch (serviceId) {
      case "cafedamanha":
        return "brunch"; // Cardápio Festa Brunch
      case "almoco":
      case "jantar":
        return "almoco-jantar"; // Cardápio Almoço ou Jantar Oficial
      default:
        return "coquetel"; // Cardápio Coquetel para os demais (Finger Food, Coffee Break, Catering)
    }
  };

  return (
    <section id="servicos" className="bg-[#FBF6EE] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#111]">
          Serviços de Buffet e Catering para festas em casa
        </h2>
        <p className="text-lg text-[#404040] mt-2 mb-12">
          Cardápios personalizados e experiências gastronômicas para eventos corporativos e sociais
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_24px_-12px_rgba(0,0,0,.15)] ring-1 ring-black/5 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,.25)] transition"
            >
              <picture>
                <source srcSet={`/${s.id}.webp`} type="image/webp" />
                <img
                  src={`/${s.image}`}
                  alt={`${s.title} - Buffet Home Fest com cardápio personalizado para eventos corporativos e sociais`}
                  className="w-full h-56 md:h-auto aspect-[4/3] object-cover rounded-xl shadow-sm"
                  width="400"
                  height="300"
                  loading="lazy"
                />
              </picture>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-neutral-600 leading-relaxed flex-1">
                  {s.description}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => openModal(getCardapioId(s.id), s.title)}
                    className="hf-btn hf-btn--outline w-full"
                    type="button"
                  >
                    Cardápio
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}