import React from "react";

/**
 * Seção de métricas. Inspirada nos números de destaque do site
 * buffetalehonorato.com.br, esta seção apresenta anos de experiência,
 * eventos realizados e opções de menu de forma visualmente equilibrada.
 */
const stats = [
  { value: "+10", label: "anos de experiência" },
  { value: "+2000", label: "eventos realizados" },
  { value: "+120", label: "opções de menu" },
];

export default function Stats() {
  return (
    <section id="estatisticas" className="bg-[#FBF6EE] py-16 md:py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl md:text-6xl font-extrabold font-serif text-[#D4AF37] drop-shadow-sm">
              {item.value}
            </div>
            <div className="mt-2 text-lg md:text-xl font-medium text-neutral-800">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}