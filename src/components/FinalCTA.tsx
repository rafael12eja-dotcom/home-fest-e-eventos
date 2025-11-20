import React from "react";
import { Mail, Phone, Instagram, Facebook, MessageCircle, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative bg-gradient-to-b from-hf-cream via-hf-offwhite to-white py-20 md:py-28 px-5 md:px-8 overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-hf-gold/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hf-gold-dark/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-hf-gold/10 border-2 border-hf-gold/30 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-hf-gold" />
            <span className="text-sm font-semibold text-hf-gold tracking-wide">
              Vamos Começar?
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-hf-brown mb-6 leading-tight">
            Transforme Sua Ideia em Festa
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Solicite seu orçamento de forma rápida e sem compromisso. Nossa equipe está pronta para adaptar o cardápio e a logística ao seu espaço e estilo.
          </p>

          {/* CTA Principal */}
          <a
            href="https://wa.me/5531999186245"
            target="_blank"
            rel="noopener noreferrer"
            className="hf-btn hf-btn--primary text-base mx-auto group px-8 py-3"
            aria-label="Chamar no WhatsApp"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>Solicitar Orçamento via WhatsApp</span>
          </a>
        </div>

        {/* Card de contato premium */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-premium-lg border-2 border-hf-gold/20 max-w-2xl mx-auto">
          {/* Elemento decorativo superior */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-hf-gold to-hf-gold-dark text-white rounded-2xl px-6 py-3 shadow-gold">
            <h3 className="font-serif text-xl md:text-2xl font-bold flex items-center gap-2">
              <Phone className="w-6 h-6" />
              Fale Conosco
            </h3>
          </div>

          {/* Informações de contato */}
          <div className="mt-8 space-y-5">
            <a
              href="https://wa.me/5531999186245"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-hf-cream/50 hover:bg-hf-cream border-2 border-hf-gold/20 hover:border-hf-gold/40 transition-all duration-300 group"
              aria-label="Chamar no WhatsApp"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hf-gold to-hf-gold-dark flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm text-neutral-500 font-medium">WhatsApp</div>
                <div className="text-lg font-semibold text-hf-brown">(31) 99918-6245</div>
              </div>
            </a>

            <a
              href="mailto:contato@homefesteeventos.com.br"
              className="flex items-center gap-4 p-4 rounded-2xl bg-hf-cream/50 hover:bg-hf-cream border-2 border-hf-gold/20 hover:border-hf-gold/40 transition-all duration-300 group"
              aria-label="Enviar e-mail"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hf-gold to-hf-gold-dark flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-sm text-neutral-500 font-medium">E-mail</div>
                <div className="text-base md:text-lg font-semibold text-hf-brown break-all">
                  contato@homefesteeventos.com.br
                </div>
              </div>
            </a>
          </div>

          {/* Redes sociais */}
          <div className="mt-8 pt-8 border-t-2 border-hf-gold/20">
            <p className="text-center text-sm text-neutral-600 mb-4 font-medium">
              Siga-nos nas redes sociais
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com/homefesteventos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-hf-gold/20 to-hf-gold-dark/10 border-2 border-hf-gold/30 flex items-center justify-center text-hf-gold hover:bg-hf-gold hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/homefesteventos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-hf-gold/20 to-hf-gold-dark/10 border-2 border-hf-gold/30 flex items-center justify-center text-hf-gold hover:bg-hf-gold hover:text-white hover:scale-110 hover:rotate-6 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Mensagem final */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 text-lg italic">
            "Seu evento perfeito está a um clique de distância"
          </p>
        </div>
      </div>
    </section>
  );
}
