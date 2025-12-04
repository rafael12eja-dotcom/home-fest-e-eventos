import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="faq" className="bg-gradient-to-b from-white to-hf-cream py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-hf-gold" />
              <span className="text-sm font-semibold text-hf-gold tracking-wide">
                Dúvidas Frequentes
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-hf-brown mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossos serviços de buffet e catering para festas em casa
            </p>
          </div>

          {/* Accordion Premium */}
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  className={`hf-faq__item transition-all duration-300 ${isOpen ? 'scale-[1.02]' : ''}`}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="hf-faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <h3 
                      className="text-base md:text-lg flex-1 text-left"
                      itemProp="name"
                    >
                      {item.q}
                    </h3>

                    <ChevronDown
                      className={`hf-faq__icon ${isOpen ? 'hf-faq__icon--open' : ''}`}
                      size={24}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${idx}`}
                      className="hf-faq__a animate-fadeIn"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">{item.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-hf-gold/5 to-hf-gold-dark/5 border-2 border-hf-gold/20 rounded-3xl p-8 md:p-10">
            <MessageCircle className="w-12 h-12 text-hf-gold mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-semibold text-hf-brown mb-3">
              Não encontrou a resposta que procurava?
            </p>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas e criar um orçamento personalizado.
            </p>
            <a
              href="https://wa.me/5531999186245"
              target="_blank"
              rel="noopener noreferrer"
              className="hf-btn hf-btn--primary mx-auto group"
              aria-label="Chamar no WhatsApp"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Fale Conosco pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
