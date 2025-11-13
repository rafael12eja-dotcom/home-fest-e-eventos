// src/components/EventTypes.tsx
import React, { useState } from "react";

type Tipo = {
  id: string;
  title: string;
  img: string;
  desc: string;
  bullets: string[];
};

const TIPOS: Tipo[] = [
  {
    id: "infantil",
    title: "Buffet Infantil",
    img: "/infantil.jpg",
    desc: "Festa temática com cardápio lúdico, recreação e decoração base inclusa.",
    bullets: [
      "Cardápio infantil (salgados + mini docinhos)",
      "Bebidas não alcoólicas",
      "Decoração base do tema",
      "Brinquedão + espaço baby",
      "Equipe de coordenação e atendimento",
    ],
  },
  {
    id: "15anos",
    title: "15 Anos",
    img: "/15anos.jpg",
    desc: "Celebração sofisticada com menu autoral e ambientação elegante.",
    bullets: [
      "Coquetel volante e ilhas frias",
      "Jantar ou massas ao vivo (opcional)",
      "Bolo cenográfico + bolo verdadeiro",
      "Projeto de decoração base",
      "Supervisor de evento e equipe completa",
    ],
  },
  {
    id: "casamento",
    title: "Casamento",
    img: "/casamento.jpg",
    desc: "Cerimônia e recepção com serviço completo e curadoria de detalhes.",
    bullets: [
      "Finger foods na recepção dos noivos",
      "Jantar completo (4 opções de menu)",
      "Bebidas não alcoólicas",
      "Assessoria de salão + maître",
      "Mesa de café e petit fours",
    ],
  },
  {
    id: "churrasco",
    title: "Churrasco",
    img: "/churrasco.jpg",
    desc: "Cortes selecionados na brasa e acompanhamentos especiais.",
    bullets: [
      "Cortes bovinos, suínos e aves",
      "Acompanhamentos e farofas especiais",
      "Estação de saladas frescas",
      "Equipe de assadores e copeira",
      "Utensílios e louçaria inclusos",
    ],
  },
  {
    id: "boteco",
    title: "Comida de Boteco",
    img: "/boteco.jpg",
    desc: "Petiscos clássicos, apresentação impecável e clima descontraído.",
    bullets: [
      "Trio de pastéis artesanais",
      "Bolinho de mandioca com queijo",
      "Croquete especial e torresmo",
      "Estação de caldos (opcional)",
      "Serviço volante com equipe",
    ],
  },
  {
    id: "homefest",
    title: "Home Fest",
    img: "/homefest.jpg",
    desc: "Toda a estrutura do buffet na sua casa, com logística completa.",
    bullets: [
      "Montagem, serviço e desmontagem",
      "Cardápio sob medida pelo perfil do evento",
      "Louças/utensílios e limpeza básica",
      "Equipe completa (cozinha e salão)",
      "Atende de 50 a 200 convidados",
    ],
  },
  {
    id: "empresas",
    title: "Corporativo",
    img: "/empresas.jpg",
    desc: "Coffee breaks, almoços executivos e coquetéis para marcas.",
    bullets: [
      "Coffee break com opções quentes e frias",
      "Coquetel executivo e finger foods",
      "Buffet de almoço ou jantar",
      "Atendimento em sede ou off-site",
      "Nota fiscal e compliance",
    ],
  },
  {
    id: "escolar",
    title: "Festa Escolar",
    img: "/escolar.jpg",
    desc: "Soluções práticas e seguras para eventos escolares.",
    bullets: [
      "Lanches e sucos naturais",
      "Opção sem glúten/sem lactose (sob consulta)",
      "Equipe treinada para ambientes escolares",
      "Montagem rápida e organizada",
      "Higiene e segurança reforçadas",
    ],
  },
];

export default function EventTypes() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <section id="tipos" className="bg-[#0B0B0C] py-16 md:py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título e subtítulo */}
        <h2 className="section-title text-center">Nossos Serviços</h2>
        <p className="section-sub text-center">
          Do infantil ao corporativo — cardápios e experiências para cada ocasião.
        </p>

        {/* Grid de Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {TIPOS.map((t) => {
            const isOpen = open === t.id;
            return (
              <article
                key={t.id}
                id={t.id}
                className="bg-white rounded-3xl shadow-[0_14px_40px_-14px_rgba(0,0,0,.25)] overflow-hidden ring-1 ring-black/5 flex flex-col"
              >
                {/* Imagem */}
                <div className="aspect-[16/11] w-full overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-[22px] md:text-2xl text-[#111]">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-[15px] text-[#494949]">{t.desc}</p>

                  {/* Ações */}
                  <div className="card-actions mt-6">
                    <button
                      onClick={() => toggle(t.id)}
                      className="hf-btn hf-btn--outline"
                      aria-expanded={isOpen}
                      aria-controls={`saiba-${t.id}`}
                    >
                      {isOpen ? "Fechar detalhes" : "Saiba mais"}
                    </button>

                    <a
                      href="https://wa.me/5531999186245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hf-btn hf-btn--primary"
                    >
                      Orçamento via WhatsApp
                    </a>
                  </div>

                  {/* Painel expansível (Saiba mais) */}
                  <div
                    id={`saiba-${t.id}`}
                    className={`mt-5 rounded-2xl border border-[#E7DED1] bg-[#FBF6EE] px-5 transition-all duration-300 overflow-hidden ${
                      isOpen ? "py-5 opacity-100" : "py-0 opacity-0 h-0"
                    }`}
                  >
                    <h4 className="font-serif text-lg text-[#111] mb-2">
                      O que inclui o pacote padrão
                    </h4>
                    <ul className="space-y-2 text-[#3F3B37] text-[15px] leading-6">
                      {t.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-[6px] inline-block h-[6px] w-[6px] rounded-full bg-[#C19A4A]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 text-[13px] text-[#6F675E]">
                      *Itens e cardápios podem variar conforme o número de
                      convidados e a data escolhida. Consulte condições.
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
