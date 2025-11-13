import React from "react";
import {
  Sparkles,
  MapPin,
  Mail,
  Feather,
  Utensils,
  Music,
  Gift,
  Calendar,
} from "lucide-react";

/**
 * Seção "Monte a Sua Festa". Esta área ajuda o visitante a organizar
 * todos os detalhes de uma celebração, apresentando as etapas em
 * cartões ilustrados com ícones. A paleta de cores mantém tons
 * vibrantes e festivos já usados no site, com foco em rosa, dourado,
 * azul e branco. O componente foi projetado para ser inserido logo
 * abaixo da seção "Sobre nós" em App.tsx.
 */
export default function PlanYourParty() {
  const steps = [
    { id: "tema", title: "Tema da Festa", Icon: Sparkles },
    { id: "local", title: "Local e Data", Icon: MapPin },
    { id: "convites", title: "Convites", Icon: Mail },
    { id: "decoracao", title: "Decoração", Icon: Feather },
    { id: "comidas", title: "Comidas e Bebidas", Icon: Utensils },
    { id: "musica", title: "Música e Entretenimento", Icon: Music },
    { id: "lembrancinhas", title: "Lembrancinhas", Icon: Gift },
    { id: "cronograma", title: "Cronograma", Icon: Calendar },
  ];

  return (
    <section
      id="monte-festa"
      className="bg-[#FBF6EE] py-16 md:py-24 px-5 md:px-8"
      aria-label="Monte a Sua Festa"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#111]">
          Monte a Sua Festa
        </h2>
        <p className="mt-3 text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
          Transforme sua celebração em um momento inesquecível.
        </p>
        <p className="mt-4 mb-10 text-neutral-600 leading-relaxed max-w-4xl mx-auto">
          Aqui você encontrará dicas e orientações para organizar o evento perfeito —
          desde o tema até as lembrancinhas. Siga as etapas abaixo para definir
          cada detalhe e garantir que sua festa seja um sucesso.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ id, title, Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-[0_10px_24px_-12px_rgba(0,0,0,.15)] ring-1 ring-black/5 hover:shadow-[0_14px_28px_-12px_rgba(0,0,0,.2)] transition"
            >
              {/* Ícone com cor vibrante */}
              <Icon className="w-10 h-10 text-[#D4AF37]" />
              <h3 className="mt-4 font-semibold text-lg text-neutral-900">
                {title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          {/* Botão de chamada com largura automática e estilo moderno */}
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-neutral-900 text-lg bg-gradient-to-r from-[#EAD39A] via-[#D4AF37] to-[#e9c1a8] shadow-[0_8px_20px_rgba(212,175,55,.35)] hover:opacity-95 transition"
            aria-label="Monte sua festa perfeita"
          >
            Monte sua festa perfeita
          </a>
        </div>
      </div>
    </section>
  );
}