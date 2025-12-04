import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Definir o tipo do contexto
type ModalContextType = {
  isOpen: boolean;
  cardapioId: string | null;
  title: string | null;
  openModal: (cardapioId: string, title: string) => void;
  closeModal: () => void;
};

// 2. Criar o contexto
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// 3. Criar o Provider
type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardapioId, setCardapioId] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);

  const openModal = (id: string, modalTitle: string) => {
    setCardapioId(id);
    setTitle(modalTitle);
    setIsOpen(true);
    // Evita scroll do body
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setCardapioId(null);
    setTitle(null);
    // Restaura scroll do body
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  // Garantir que o scroll seja restaurado ao desmontar o componente
  React.useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, cardapioId, title, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 4. Criar o Hook customizado
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
