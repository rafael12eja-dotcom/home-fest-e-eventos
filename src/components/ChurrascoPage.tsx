import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Flame, UtensilsCrossed, ShieldCheck, Clock3, Users, Sparkles } from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento de churrasco em domicílio com a Home Fest & Eventos em Belo Horizonte."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const ChurrascoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-white flex flex-col">
      <Header />

      <main className="flex-1 pt-28">
        {/* HERO CHURRASCO */}
        <section id="topo" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-buffet-churrasco-bh.jpg"
              alt="Churrasco em domicílio com buffet completo em Belo Horizonte"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <div className="space-y-5 text-white bg-black/55 backdrop-blur-md rounded-3xl px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,.55)]">
                <p className="inline-flex items-center text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                  Churrasco em Belo Horizonte
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.5)] text-white">
                  Churrasco completo no seu espaço, com equipe, cortes selecionados e serviço de buffet.
                </h1>
                <p className="text-sm md:text-lg text-[#FFF3D9] max-w-xl">
                  Ideal para aniversários, confraternizações e encontros em família, com toda a estrutura de churrasco
                  em domicílio sem que você precise se preocupar com preparo, serviço ou limpeza.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-base"
                  >
                    <Flame className="w-4 h-4" />
                    <span>Orçamento churrasco</span>
                  </a>
                  <a
                    href="#detalhes"
                    className="hf-btn hf-btn--hero hf-btn-hero-secondary inline-flex items-center justify-center gap-2 text-base"
                  >
                    <span>Ver tudo o que está incluso</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block flex-1" aria-hidden="true" />
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="bg-[#FFF7EC] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Para quem é
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Churrasco em casa com padrão de buffet profissional.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628]">
                Perfeito para famílias, grupos de amigos e empresas que desejam receber em casa, no prédio ou no sítio,
                com cortes selecionados, equipe completa e serviço organizado do início ao fim.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Clock3 className="w-4 h-4 text-[#F3A93B]" />
                  Tempo de evento
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Churrasco com duração média de 4 a 5 horas, ajustado conforme o perfil do evento e do local.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Users className="w-4 h-4 text-[#F3A93B]" />
                  Tamanho dos grupos
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Indicado para eventos a partir de cerca de 30 convidados, com adaptação de quantidades por número de pessoas.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                  Formato flexível
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Pode ser usado para aniversários adultos, churrasco em família, eventos corporativos informais
                  e celebrações especiais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE ESTÁ INCLUSO / CARDÁPIO */}
        <section id="detalhes" className="bg-white py-16 md:py-20 border-y border-[#F2E4CF]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                O que está incluido
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Estrutura completa de churrasco em domicílio.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                Utilizamos como base o cardápio oficial de churrasco da Home Fest & Eventos, com carnes principais,
                acompanhamentos, entradas e serviço organizado de bebidas, sempre ajustado ao seu evento.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Coluna 1 – Carnes e acompanhamentos */}
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-2">
                    <UtensilsCrossed className="w-4 h-4 text-[#F3A93B]" />
                    Carnes principais
                  </h3>
                  <p className="text-sm text-[#6A4628] mb-2">
                    Cortes selecionados, preparados ao vivo pela equipe, com ponto ajustado ao gosto dos convidados.
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                    <li>Picanha bovina, contrafilé ou alcatra temperada.</li>
                    <li>Linguiça artesanal (tradicional e toscana).</li>
                    <li>Coração de frango e frango grelhado com ervas.</li>
                    <li>Lombo suíno ao molho especial, conforme cardápio combinado.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-2">
                    <UtensilsCrossed className="w-4 h-4 text-[#F3A93B]" />
                    Acompanhamentos
                  </h3>
                  <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                    <li>Arroz branco ou temperado.</li>
                    <li>Farofa especial da casa.</li>
                    <li>Vinagrete, maionese e molhos variados.</li>
                    <li>Pães, queijos e guarnições para complementar o churrasco.</li>
                  </ul>
                </div>
              </div>

              {/* Coluna 2 – Entradas, saladas e bebidas */}
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-2">
                    <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                    Entradas e saladas
                  </h3>
                  <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                    <li>Mesa com pães, pastas, antepastos e frios.</li>
                    <li>Saladas frescas com folhas, legumes e itens sazonais.</li>
                    <li>Opções de petiscos de boteco, conforme o formato do evento.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#F3A93B]" />
                    Bebidas e política de consumo
                  </h3>
                  <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                    <li>Refrigerantes e água mineral (com e sem gás) conforme combinado.</li>
                    <li>
                      Possibilidade de o cliente levar cervejas, vinhos ou destilados, de acordo com a política
                      praticada pela Home Fest &amp; Eventos.
                    </li>
                    <li>
                      Serviço organizado de reposição de bebidas durante todo o evento, evitando filas e copos vazios.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="bg-[#FFF7EC] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Diferenciais Home Fest & Eventos
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Churrasco com acolhimento sofisticado e operação completa.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                Mais do que preparar as carnes, cuidamos da experiência de receber bem, com equipe treinada, montagem,
                serviço e apoio na finalização da festa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <ShieldCheck className="w-4 h-4 text-[#F3A93B]" />
                  Equipe completa
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Churrasqueiro, auxiliares e equipe de atendimento, ajustados ao porte do evento.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <Flame className="w-4 h-4 text-[#F3A93B]" />
                  Operação organizada
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Cortes preparados com planejamento, evitando esperas e desperdícios, mantendo o fluxo de serviço
                  constante.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                  Experiência completa
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Montagem, serviço, apoio na finalização da festa e orientação prévia sobre estrutura necessária
                  (churrasqueira, espaço, pontos de apoio).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-white py-16 md:py-20 border-t border-[#F2E4CF]">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412]">
              Quer receber o cardápio completo e os valores para o seu churrasco?
            </h2>
            <p className="text-sm md:text-base text-[#6A4628] max-w-2xl mx-auto">
              Envie a data do evento, o bairro, o tipo de espaço (casa, salão, sítio) e o número aproximado de convidados.
              A partir disso, montamos a melhor proposta de churrasco em domicílio para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-base"
              >
                <Flame className="w-4 h-4" />
                <span>Solicitar orçamento churrasco</span>
              </a>
              <a
                href="#topo"
                className="hf-btn hf-btn--outline hf-btn--hero inline-flex items-center justify-center gap-2 text-base"
              >
                <span>Voltar ao topo</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChurrascoPage;
