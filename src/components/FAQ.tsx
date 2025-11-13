import React, { useState } from "react";

type QA = {
  q: string;
  a: string;
};

const faqs: QA[] = [
  {
    q: "Qual o valor mínimo para contratar o buffet?",
    a: "Os valores variam conforme o tipo de evento, número de convidados e cardápio escolhido. Entre em contato pelo WhatsApp para receber um orçamento personalizado sem compromisso. Atendemos desde eventos intimistas até grandes celebrações."
  },
  {
    q: "Com quanto tempo de antecedência devo fazer a reserva?",
    a: "Recomendamos 60 a 90 dias para garantir data e estrutura. Em alta temporada (mesversários/volta às aulas/férias/novembro-dezembro), quanto antes, melhor."
  },
  {
    q: "Vocês atendem fora da cidade?",
    a: "Sim! Atendemos toda a região metropolitana e cidades próximas. Para eventos em outras localidades, consulte-nos para verificar disponibilidade e condições especiais de deslocamento."
  },
  {
    q: "O buffet inclui garçons e estrutura completa?",
    a: "Sim, nosso serviço de catering inclui equipe completa de garçons, cozinheiros, utensílios, louças, mesas e toda a estrutura necessária para seu evento. Você não precisa se preocupar com nada além de aproveitar a celebração."
  },
  {
    q: "É possível personalizar o cardápio?",
    a: "Sim. Partimos do cardápio base e ajustamos conforme perfil do evento, restrições, preferências e orçamento. Trabalhamos com cardápios totalmente personalizados."
  },
  {
    q: "Vocês trabalham com restrições alimentares (vegano, sem glúten, etc)?",
    a: "Sim, atendemos todas as restrições alimentares incluindo opções veganas, vegetarianas, sem glúten, sem lactose e outras necessidades especiais. Informe-nos com antecedência para prepararmos um cardápio adequado."
  },
  {
    q: "Crianças de 0 a 5 anos pagam?",
    a: "Não consideramos como convidados pagantes até 5 anos e 11 meses, salvo exceções específicas acordadas no contrato."
  },
  {
    q: "Vocês oferecem degustação antes do evento?",
    a: "Sim! Para eventos de médio e grande porte, oferecemos degustação prévia do cardápio escolhido. Isso garante que você aprove todos os pratos antes do grande dia. Consulte condições e disponibilidade."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpen((curr) => (curr === idx ? null : idx));
  };

  // Schema.org JSON-LD para FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <>
      {/* Injetar Schema.org no head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="faq" className="bg-[#FFF9F0] py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título otimizado para SEO */}
          <h2 className="font-serif text-center text-4xl md:text-5xl text-[#111]">
            Perguntas Frequentes sobre Buffet e Home Fest
          </h2>
          <p className="text-center text-lg text-[#404040] mt-2 mb-10">
            Tire suas dúvidas sobre nossos serviços de buffet e catering para festas em casa
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_26px_-14px_rgba(0,0,0,.18)]"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <h3 
                      className="text-[17px] md:text-[18px] font-medium text-[#111]"
                      itemProp="name"
                    >
                      {item.q}
                    </h3>

                    <svg
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <div
                    id={`faq-panel-${idx}`}
                    className={`${isOpen ? "block" : "hidden"} px-5 md:px-6 pb-5 md:pb-6 text-[#3a3a3a] leading-relaxed`}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">{item.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#404040] mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <a
              href="#contato"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-neutral-900 bg-gradient-to-r from-[#E9C779] via-[#D4AF37] to-[#e9c1a8] shadow-[0_8px_20px_rgba(212,175,55,.35)] hover:opacity-95 transition"
             aria-label="Chamar no WhatsApp">
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
