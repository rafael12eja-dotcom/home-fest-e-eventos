import React, { useEffect, useRef } from "react";
import { X, Phone, MessageSquare } from "lucide-react";
import { useModal } from "../hooks/useModal";
import { CARDAPIO_COQUETEL_BASE, CARDAPIO_COQUETEL_ATUALIZADO, CARDAPIO_BRUNCH, CARDAPIO_ALMOCO_JANTAR, CARDAPIO_BOTECO, CARDAPIO_ESCOLAR, CARDAPIO_CHURRASCO, Section } from "../data/eventTypes";

// Mapeamento de IDs para os cardápios
const CARDAPIOS: { [key: string]: { title: string, sections: Section[] } } = {
  infantil: {
    title: "Cardápio Buffet Infantil",
    sections: CARDAPIO_COQUETEL_ATUALIZADO,
  },
  "15anos": {
    title: "Cardápio 15 Anos",
    sections: CARDAPIO_COQUETEL_ATUALIZADO,
  },
  casamento: {
    title: "Cardápio Casamento",
    sections: CARDAPIO_COQUETEL_ATUALIZADO,
  },
  churrasco: {
    title: "Cardápio Churrasco",
    sections: CARDAPIO_CHURRASCO,
  },
  boteco: {
    title: "Cardápio Comida de Boteco",
    sections: CARDAPIO_BOTECO,
  },
  empresas: {
    title: "Cardápio Corporativo",
    sections: CARDAPIO_COQUETEL_BASE,
  },
  escolar: {
    title: "Cardápio Festa Escolar",
    sections: CARDAPIO_ESCOLAR,
  },
  coquetel: {
    title: "Cardápio Coquetel (Base)",
    sections: CARDAPIO_COQUETEL_BASE,
  },
  brunch: {
    title: "Cardápio Festa Brunch",
    sections: CARDAPIO_BRUNCH,
  },
  "almoco-jantar": {
    title: "Cardápio Almoço ou Jantar Oficial",
    sections: CARDAPIO_ALMOCO_JANTAR,
  },
};

export default function Modal() {
  const { isOpen, cardapioId, title, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  // Fechar ao pressionar ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  // Fechar ao clicar fora
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  if (!isOpen || !cardapioId) return null;

  const cardapio = CARDAPIOS[cardapioId];
  if (!cardapio) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] transition-opacity duration-300"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white max-w-4xl w-full rounded-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[95vh] transition-transform duration-300 transform scale-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header do Modal */}
        <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-start sticky top-0 bg-white z-10">
          <div>
            <h2 id="modal-title" className="font-serif text-3xl md:text-4xl text-[#111] mb-1">
              {cardapio.title}
            </h2>
            <p className="text-lg text-neutral-600">
              {title}
            </p>
          </div>
          <button
            onClick={closeModal}
            className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-full bg-gray-50 hover:bg-gray-100 flex-shrink-0"
            aria-label="Fechar cardápio"
          >
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo do Cardápio (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1">
          {cardapio.sections.map((section, index) => (
            <div key={index} className="mb-8 border-b border-dashed border-gray-200 pb-6 last:border-b-0">
              <h3 className="font-serif text-2xl text-[#111] mb-4 flex items-center gap-2">
                {/* Ícone dinâmico baseado no título */}
                {section.title.includes("Salgados") && <span role="img" aria-label="Salgados">🧂</span>}
                {section.title.includes("Doces") && <span role="img" aria-label="Doces">🍬</span>}
                {section.title.includes("Bombons") && <span role="img" aria-label="Bombons">🍫</span>}
                {section.title.includes("Bolo") && <span role="img" aria-label="Bolo">🍰</span>}
                {section.title.includes("Infantil") && <span role="img" aria-label="Infantil">👧</span>}
                {section.title.includes("Bebidas") && <span role="img" aria-label="Bebidas">🥤</span>}
                {section.title.includes("Mesa de Café") && <span role="img" aria-label="Café">☕</span>}
                {section.title.includes("Prato Quente") && <span role="img" aria-label="Prato Quente">🍝</span>}
                {section.title.includes("Cardápio 1") && <span role="img" aria-label="Cardápio 1">🍽️</span>}
                {section.title.includes("Cardápio 2") && <span role="img" aria-label="Cardápio 2">🍽️</span>}
                {section.title.includes("Cardápio 3") && <span role="img" aria-label="Cardápio 3">🍽️</span>}
                {section.title.includes("Cardápio 4") && <span role="img" aria-label="Cardápio 4">🍽️</span>}
                {section.title}
              </h3>
              <ul className="space-y-3 text-neutral-700 text-base md:text-lg">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {/* Renderiza o item, permitindo negrito para destaque */}
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer do Modal com CTA */}
        <div className="p-6 md:p-8 bg-[#FBF6EE] border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 sticky bottom-0">
          <p className="text-neutral-700 font-medium text-center sm:text-left">
            Gostou do cardápio? Solicite um orçamento personalizado!
          </p>
          <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-3">
            <a
              href={`https://wa.me/(31) 99918-6245?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20o%20Cardápio%20de%20${title}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hf-btn hf-btn--primary flex items-center justify-center gap-2 w-full"
              onClick={closeModal}
            >
              <MessageSquare size={20} /> Orçamento WhatsApp
            </a>
            <a
              href="tel:(31) 99918-6245"
              className="hf-btn hf-btn--outline flex items-center justify-center gap-2 w-full"
              onClick={closeModal}
             aria-label="Ligar por telefone">
              <Phone size={20} /> Ligar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}