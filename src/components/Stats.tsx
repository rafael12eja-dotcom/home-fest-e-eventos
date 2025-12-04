import React from "react";
import { TrendingUp, Users, BookOpen } from "lucide-react";

const stats = [
  { 
    value: "25+", 
    label: "Anos de Experiência",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Tradição e excelência"
  },
  { 
    value: "+500", 
    label: "Eventos Realizados",
    icon: <Users className="w-8 h-8" />,
    description: "Momentos inesquecíveis"
  },
  { 
    value: "+120", 
    label: "Opções de Menu",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Cardápios personalizados"
  },
];

export default function Stats() {
  return (
    <section id="estatisticas" className="bg-gradient-to-b from-hf-cream to-hf-offwhite py-16 md:py-20 px-5 md:px-8 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-hf-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hf-gold-dark/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 md:p-10 text-center border-2 border-hf-gold/15 shadow-premium hover:shadow-premium-lg hover:border-hf-gold/40 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Ícone */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-hf-gold/20 to-hf-gold-dark/10 rounded-2xl text-hf-gold mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {item.icon}
              </div>

              {/* Valor */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif bg-gradient-to-br from-hf-gold via-hf-gold-dark to-hf-brown bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-500">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-xl md:text-2xl font-semibold text-hf-brown mb-2">
                {item.label}
              </div>

              {/* Descrição */}
              <div className="text-sm text-neutral-600">
                {item.description}
              </div>

              {/* Barra decorativa inferior */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-hf-gold to-hf-gold-dark rounded-full group-hover:w-3/4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
