import React, { useEffect } from "react";
import { MENU_DATA, Menu } from "../data/menuData";

interface MenuModalProps {
  open: boolean;
  menuId: string | null;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ open, menuId, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !menuId) return null;

  const menu: Menu | undefined = MENU_DATA.find((m) => m.id === menuId);

  if (!menu) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-panel" role="dialog" aria-modal="true" aria-label="Cardápio não encontrado" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-serif font-bold">Cardápio não encontrado</h3>
            <button onClick={onClose} className="text-xl text-[#111] hover:text-[#C19A4A]">✕</button>
          </div>
          <p>O cardápio solicitado não está disponível no momento.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 z-[999]"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-label={menu.title}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-[#111] hover:text-[#C19A4A]"
          aria-label="Fechar modal"
          type="button"
        >
          ✕
        </button>

        {/* Título do Cardápio */}
        <h3 className="font-serif text-2xl sm:text-3xl text-[#111] mb-6 border-b pb-2 border-[#C19A4A]">
          {menu.title}
        </h3>

        {/* Seções do Cardápio */}
        {menu.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h4 className="font-serif text-xl text-[#C19A4A] mb-3">
              {section.title}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-[#444]">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-lg">
                  {item}
                </li>
              ))}
            </ul>
            {section.notes && section.notes.length > 0 && (
              <div className="mt-3 p-3 bg-[#FBF6EE] rounded-lg border border-[#C19A4A]/30">
                <p className="font-semibold text-[#111] mb-1">Observações:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-[#444]">
                  {section.notes.map((note, noteIndex) => (
                    <li key={noteIndex}>{note}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Rodapé de ações */}
        <div className="mt-8 pt-4 border-t border-[#C19A4A]/30 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
          <button
            onClick={onClose}
            className="hf-btn hf-btn--outline"
            type="button"
          >
            Fechar
          </button>
          <a
            href="#contato"
            className="hf-btn hf-btn--primary"
            target="_blank"
            rel="noopener noreferrer"
           aria-label="Chamar no WhatsApp">
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
