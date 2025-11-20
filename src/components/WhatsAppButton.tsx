import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/5531999186245"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Fale no WhatsApp"
  >
    {/* Botão principal */}
    <div className="relative flex items-center gap-3 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white px-5 py-4 rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      {/* Ícone */}
      <div className="relative">
        <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
      </div>
      
      {/* Texto */}
      <span className="hidden sm:inline font-semibold text-base whitespace-nowrap">
        Fale no WhatsApp
      </span>
      <span className="sm:hidden font-semibold text-sm">
        WhatsApp
      </span>
    </div>

    {/* Tooltip hover (desktop) */}
    <div className="hidden lg:block absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <div className="bg-hf-brown text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
        Tire suas dúvidas agora!
        <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-hf-brown" />
      </div>
    </div>
  </a>
);

export default WhatsAppButton;
