// src/components/EventTypes.tsx
import React, { useState } from "react";
import { useModal } from "../hooks/useModal";

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
    img: "/portfolio-infantil.webp",
    desc: "Festa infantil em casa, salão ou escola com cardápio completo, lanchinho personalizado e recreação sob medida.",
    bullets: [
      "Cardápio infantil com lanchinho + aparador",
      "Doces e torta verdadeira servidos após o parabéns",
      "Bebidas não alcoólicas à vontade",
      "Opção de recreação e pinturinha facial",
      "Sugestão de cardápio com possibilidade de personalização",
    ],
  },
  {
    id: "15anos",
    title: "Festa de 15 Anos em Casa",
    img: "/aniversario-15-anos-home-fest-e-eventos.svg",
    desc: "Festa de 15 anos em casa em Belo Horizonte com buffet completo, mesa de doces, ambientação elegante e produção Home Fest & Eventos.",
    bullets: [
      "Cardápio em formato coquetel ou refeição completa, conforme o perfil da debutante",
      "Doces finos, bolo cenográfico opcional e mesa de sobremesas decorada",
      "Opção de drinks sem álcool, mocktails e serviço de copeira",
      "Decoração personalizada de acordo com o estilo da debutante e da família",
      "Pacote base com possibilidade de ajustes em conjunto com a família, sempre com atendimento em BH e região",
    ],
  },
  {
    id: "casamento",
    title: "Casamento Intimista",
    img: "/portfolio-casamento.webp",
    desc: "Casamento intimista com almoço ou jantar refinado, serviço completo e clima acolhedor.",
    bullets: [
      "Uso dos 4 cardápios oficiais de almoço e jantar Essenzia",
      "Entrada, prato principal e acompanhamentos bem equilibrados",
      "Serviço completo de salão e cozinha",
      "Mesa de doces e café opcional",
      "Cardápio base sugerido com ajustes conforme o perfil do casal",
    ],
  },
  {
    id: "churrasco",
    title: "Churrasco em Domicílio",
    img: "/portfolio-churrasco.webp",
    desc: "Churrasco em domicílio com seleção de carnes, acompanhamentos e serviço especializado.",
    bullets: [
      "Carnes tradicionais e cortes especiais a definir com o cliente",
      "Acompanhamentos, saladas e farofas",
      "Equipe de churrasqueiros e atendimento de salão",
      "Estrutura pensada para casas, coberturas e sítios",
      "Cardápio base com liberdade para troca de itens",
    ],
  },
  {
    id: "boteco",
    title: "Comida de Boteco",
    img: "/portfolio-boteco.webp",
    desc: "Petiscos de boteco com apresentação premium para aniversários, empresas e encontros entre amigos.",
    bullets: [
      "Seleção de petiscos quentes e frios",
      "Porções e mini pratos inspirados em boteco tradicional",
      "Pode ser combinado com mesa de doces ou sobremesas",
      "Ideal para eventos descontraídos e corporativos informais",
      "Cardápio sugerido com possibilidade de personalização",
    ],
  },
  {
    id: "adulto",
    title: "Festa Adulto",
    img: "/portfolio-adulto.webp",
    desc: "Festa adulta com combinações de coquetel, boteco, churrasco ou jantar, conforme o perfil dos convidados.",
    bullets: [
      "Formatos flexíveis: coquetel, boteco, churrasco ou refeição completa",
      "Possibilidade de incluir mesa de doces e café",
      "Bebidas não alcoólicas incluídas; bar de drinks sob consulta",
      "Indicado para aniversários, bodas e reuniões de família",
      "Cardápio planejado em conjunto com o anfitrião",
    ],
  },
  {
    id: "empresas",
    title: "Corporativo",
    img: "/portfolio-empresas.webp",
    desc: "Soluções gastronômicas para empresas: coffee breaks, coquetéis, almoços e jantares executivos.",
    bullets: [
      "Coffee break completo para reuniões e treinamentos",
      "Coquetel com finger foods e mini porções",
      "Almoço e jantar com cardápios Essenzia",
      "Atendimento em sedes, auditórios e espaços de eventos",
      "Organização pensada para rotina e logística corporativa",
    ],
  },
  {
    id: "escolar",
    title: "Festa Escolar",
    img: "/portfolio-escolar.webp",
    desc: "Festa escolar com lanchinho, aparador infantil e doces na medida certa, respeitando o ambiente escolar.",
    bullets: [
      "Lanchinho montado conforme faixa etária",
      "Aparador com sucos, pipoca, chips e guloseimas",
      "Doces clássicos em quantidade adequada",
      "Equipe acostumada com rotina de escolas",
      "Cardápio ajustável às orientações da escola e dos responsáveis",
    ],
  },
];

export default function EventTypes() {
  const [open, setOpen] = useState<string | null>(null);
  const { openModal } = useModal();

  const toggle = (id: string) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  const getMenuIdByTipo = (id: string): string | null => {
    switch (id) {
      case "infantil":
        return "infantil";
      case "15anos":
        return "15anos";
      case "casamento":
        return "casamento";
      case "boteco":
        return "boteco";
      case "empresas":
        return "empresas";
      case "escolar":
        return "escolar";
      default:
        return null;
    }
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
                  <div className="card-actions mt-6 flex flex-wrap gap-2">
                    {getMenuIdByTipo(t.id) && (
                      <button
                        type="button"
                        onClick={() => openModal(getMenuIdByTipo(t.id) as string, t.title)}
                        className="hf-btn hf-btn--primary"
                      >
                        Ver cardápio
                      </button>
                    )}

                    <button
                      onClick={() => toggle(t.id)}
                      className="hf-btn hf-btn--outline"
                      aria-expanded={isOpen}
                      aria-controls={`saiba-${t.id}`}
                      type="button"
                    >
                      {isOpen ? "Fechar detalhes" : "Saiba mais"}
                    </button>

                    <a
                      href="https://wa.me/5531999186245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hf-btn hf-btn--ghost"
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
