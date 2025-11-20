import React from "react";
import {
  Sparkles,
  MapPin,
  Mail,
  Palette,
  Utensils,
  Music,
  Gift,
  Calendar,
  ArrowRight,
} from "lucide-react";

export default function PlanYourParty() {
  const steps = [
    { 
      id: "tema", 
      title: "Tema da Festa", 
      Icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    { 
      id: "local", 
      title: "Local e Data", 
      Icon: MapPin,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      id: "convites", 
      title: "Convites", 
      Icon: Mail,
      color: "from-green-500 to-emerald-500"
    },
    { 
      id: "decoracao", 
      title: "Decoração", 
      Icon: Palette,
      color: "from-orange-500 to-amber-500"
    },
    { 
      id: "comidas", 
      title: "Comidas e Bebidas", 
      Icon: Utensils,
      color: "from-hf-gold to-hf-gold-dark"
    },
    { 
      id: "musica", 
      title: "Música e Entretenimento", 
      Icon: Music,
      color: "from-red-500 to-rose-500"
    },
    { 
      id: "lembrancinhas", 
      title: "Lembrancinhas", 
      Icon: Gift,
      color: "from-indigo-500 to-purple-500"
    },
    { 
      id: "cronograma", 
      title: "Cronograma", 
      Icon: Calendar,
      color: "from-teal-500 to-cyan-500"
    },
  ];

  return (
    <section
      id="monte-festa"
      className="bg-gradient-to-b from-white to-hf-cream py-16 md:py-24 px-5 md:px-8 relative overflow-hidden"
      aria-label="Monte a Sua Festa"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-hf-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-hf-gold-dark/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-hf-gold" />
            <span className="text-sm font-semibold text-hf-gold tracking-wide">
              Planeje Seu Evento
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-hf-brown mb-4">
            Monte a Sua Festa Perfeita
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Transforme sua celebração em um momento inesquecível com nosso guia completo.
          </p>
          <p className="text-neutral-600 leading-relaxed max-w-4xl mx-auto">
            Aqui você encontrará dicas e orientações para organizar o evento perfeito — desde o tema até as lembrancinhas. Siga as etapas abaixo para definir cada detalhe.
          </p>
        </div>

        {/* Grid de etapas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map(({ id, title, Icon, color }, index) => (
            <div
              key={id}
              className="group relative bg-white rounded-3xl flex flex-col items-center text-center p-8 border-2 border-hf-gold/10 shadow-premium hover:shadow-premium-lg hover:border-hf-gold/30 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Número da etapa */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-hf-gold to-hf-gold-dark text-white rounded-full flex items-center justify-center font-bold text-lg shadow-gold">
                {index + 1}
              </div>

              {/* Ícone com gradiente */}
              <div className={`inline-flex items-center justify-center mx-auto justify-center w-16 h-16 bg-gradient-to-br ${color} rounded-2xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                <Icon className="w-8 h-8" strokeWidth={2.5} />
              </div>

              {/* Título */}
              <h3 className="font-semibold text-xl text-hf-brown group-hover:text-hf-gold transition-colors duration-300">
                {title}
              </h3>

              {/* Barra decorativa */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-hf-gold to-hf-gold-dark rounded-full group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contato"
            className="hf-btn hf-btn--primary text-base mx-auto group w-auto min-w-[280px] px-8 py-3.5"
            aria-label="Monte sua festa perfeita"
          >
            <span>Monte Sua Festa Perfeita</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
