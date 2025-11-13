import React from "react";
import { Mail, Phone, Instagram, Facebook } from "lucide-react"; // Importar ícones

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="bg-[#FBF6EE] py-20 md:py-28 px-5 md:px-8 border-t border-[#e9e1d6]"
    >
      <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[#111] mb-4">
            Transforme Sua Ideia em Festa
          </h2>
          <p className="text-[#555] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Solicite seu orçamento de forma rápida e sem compromisso. Nossa equipe está pronta para
            adaptar o cardápio e a logística ao seu espaço e estilo.
          </p>
        <a
          href="#contato"
          target="_blank"
          rel="noopener noreferrer"
          className="hf-btn hf-btn--primary text-lg md:text-xl px-9 py-4 mx-auto max-w-md"
         aria-label="Chamar no WhatsApp">
          Solicitar Orçamento via WhatsApp
        </a>
        <div className="mt-12 p-8 rounded-xl bg-white/50 backdrop-blur-sm shadow-xl border border-[#e9e1d6] max-w-md mx-auto">
          <h3 className="font-serif text-2xl text-[#111] mb-4">Fale Conosco</h3>
          <div className="flex flex-col space-y-4 text-left">
            <a
              href="#contato"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#444] hover:text-[#c19a4a] transition-colors font-medium"
             aria-label="Chamar no WhatsApp">
              <Phone className="w-5 h-5 text-[#c19a4a]" />
              (31) 99918-6245 (WhatsApp)
            </a>
            <a
              href="mailto:contato@homefesteeventos.com.br"
              className="flex items-center gap-3 text-[#444] hover:text-[#c19a4a] transition-colors font-medium"
             aria-label="Enviar e-mail">
              <Mail className="w-5 h-5 text-[#c19a4a]" />
              contato@homefesteeventos.com.br
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-[#e9e1d6]">
            <a
              href="https://instagram.com/homefesteventos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c19a4a] hover:text-[#a08040] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a
              href="https://facebook.com/homefesteventos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c19a4a] hover:text-[#a08040] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
