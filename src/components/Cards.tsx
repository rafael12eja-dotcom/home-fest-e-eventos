import React from "react";

/**
 * Cards.tsx — seção de serviços
 * - Visual alinhado ao seu layout (fundo bege, títulos elegantes, botões fluidos)
 * - Usa as classes utilitárias que já definimos em index.css (btn, btn-outline, btn-primary, card-actions, container-custom, section-title etc.)
 * - As imagens devem estar em /public com os nomes usados abaixo (ajuste se necessário)
 */

type Item = {
  id: string;
  title: string;
  description: string;
  img: string; // caminho relativo ao /public
  saibaMaisHref: string;
  whatsappHref: string;
};

const items: Item[] = [
  {
    id: "boteco",
    title: "Comida de Boteco Elegante",
    description:
      "Petiscos e pratos típicos de boteco com apresentação sofisticada e tradição brasileira.",
    img: "/boteco.jpg",
    saibaMaisHref: "#detalhes-boteco",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
  {
    id: "homefest",
    title: "Home Fest na Sua Casa",
    description:
      "Levamos toda estrutura e serviço para sua festa em casa com conforto total.",
    img: "/homefest.jpg",
    saibaMaisHref: "#detalhes-homefest",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
  {
    id: "empresas",
    title: "Confraternização de Empresas",
    description:
      "Eventos corporativos com cardápio executivo e serviço profissional.",
    img: "/empresas.jpg",
    saibaMaisHref: "#detalhes-empresas",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
  {
    id: "escolar",
    title: "Festa Escolar Infantil",
    description:
      "Festa temática para escolas com decoração inclusa e cardápio infantil.",
    img: "/escolar.jpg",
    saibaMaisHref: "#detalhes-escolar",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
  {
    id: "infantil",
    title: "Buffet Infantil",
    description:
      "Festa completa com decoração temática inclusa e cardápio especial para crianças.",
    img: "/infantil.jpg",
    saibaMaisHref: "#detalhes-infantil",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
  {
    id: "15anos",
    title: "15 Anos",
    description:
      "Celebração inesquecível com cardápio sofisticado e serviço impecável.",
    img: "/15anos.jpg",
    saibaMaisHref: "#detalhes-15anos",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
  {
    id: "casamento",
    title: "Casamento (Mini Wedding)",
    description:
      "Cerimônia intimista com gastronomia refinada e atendimento personalizado.",
    img: "/casamento.jpg",
    saibaMaisHref: "#detalhes-casamento",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
  {
    id: "churrasco",
    title: "Churrasco Premium",
    description:
      "Churrasco de alta qualidade com cortes nobres e acompanhamentos.",
    img: "/churrasco.jpg",
    saibaMaisHref: "#detalhes-churrasco",
    whatsappHref: "https://wa.me/(31) 99918-6245",
  },
];

const Cards: React.FC = () => {
  return (
    <section id="portfolio" className="container-custom px-5 md:px-8 py-14 md:py-20">
      <h2 className="section-title text-center">Nosso Portfólio</h2>
      <p className="section-sub text-center mb-10 md:mb-12">
        Confira alguns dos eventos que já realizamos com carinho e dedicação
      </p>

      <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="rounded-2xl overflow-hidden shadow-sm bg-[#F7EFE6] border border-black/5"
          >
            {/* Imagem */}
            <div className="aspect-[16/11] w-full overflow-hidden">
              <img
                src={item.img}
                alt={`${item.title} - Home Fest & Eventos em Belo Horizonte`}
                className="w-full h-full object-cover rounded-xl shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-6 md:p-7">
              <h3 className="text-[1.7rem] leading-tight font-semibold tracking-[-0.01em] text-black">
                {item.title}
              </h3>

              <p className="mt-3 text-[1.05rem] leading-relaxed text-neutral-800/90">
                {item.description}
              </p>

              <div className="card-actions">
                <a href={item.saibaMaisHref} className="btn btn-outline">
                  Saiba mais
                </a>

                <a
                  href={item.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Orçamento via WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Cards;
