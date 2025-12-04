import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  PartyPopper,
  Sparkles,
  Baby,
  ShieldCheck,
  UtensilsCrossed,
  CupSoda,
  Clock3,
  MapPin,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento de buffet infantil em Belo Horizonte com a Home Fest & Eventos."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const BuffetInfantilPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-neutral-900 flex flex-col">
      <Header />

      <main className="flex-1 pt-28">
        {/* HERO BUFFET INFANTIL */}
        <section id="topo" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-buffet-infantil-bh.jpg"
              alt="Buffet infantil em Belo Horizonte com decoração colorida"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
	            <div className="flex-1">
	              {/* Ajuste de contraste e legibilidade */}
	              <div className="space-y-5 text-white bg-hf-brown/70 backdrop-blur-sm rounded-3xl px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,.55)] border-2 border-hf-gold/30">
	                <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-hf-gold-light">
	                  <PartyPopper className="w-4 h-4" />
	                  Buffet infantil em Belo Horizonte
	                </p>
	
		                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight drop-shadow-lg text-white">
	                  Festa infantil completa, no seu espaço, com clima de casa e estrutura de buffet.
	                </h1>
	
	                <p className="text-sm md:text-lg text-hf-cream max-w-xl">
	                  Ideal para quem quer comemorar em casa, no prédio ou no salão do condomínio, com cardápio infantil,
	                  equipe organizada e aquela atmosfera alegre que as crianças amam.
	                </p>
	
	                <div className="flex flex-col sm:flex-row gap-3 pt-2">
	                  <a
	                    href={whatsappLink}
	                    target="_blank"
	                    rel="noopener noreferrer"
	                    className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-base"
	                  >
	                    <Baby className="w-4 h-4" />
	                    <span>Orçamento infantil</span>
	                  </a>
	
	                  {/* Botão outline com contraste corrigido */}
	                  <a
	                    href="#detalhes"
	                    className="hf-btn hf-btn--outline hf-btn--hero inline-flex items-center justify-center gap-2 text-base bg-white/10 border-white/70 text-white hover:bg-white/20 hover:border-white"
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
                Para quem é a festa infantil Home Fest?
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Para famílias que querem comemorar em casa, com organização de buffet.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628]">
                Indicado para quem deseja receber família e amigos em casa, no salão do prédio ou no espaço da
                escola, com cardápio infantil completo, equipe treinada e condução profissional da festa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Clock3 className="w-4 h-4 text-[#F3A93B]" />
                  Duração de festa
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Festa infantil com duração média de 4 horas, ajustada ao horário do espaço e à idade das crianças.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <MapPin className="w-4 h-4 text-[#F3A93B]" />
                  Onde atendemos
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Atendemos Belo Horizonte e região, em casas, apartamentos, salões de festa, áreas comuns de
                  condomínio e escolas.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                  Clima de casa
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Você escolhe o tema e o espaço, nós levamos a estrutura de buffet, cardápio infantil e equipe
                  preparada para conduzir a festa com tranquilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDÁPIO / O QUE ESTÁ INCLUSO */}
        <section
          id="detalhes"
          className="bg-white py-16 md:py-20 border-y border-[#F2E4CF]"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                O que está incluso
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Cardápio infantil no formato coquetel, pensado para crianças e adultos.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                Utilizamos como base o cardápio oficial infantil da Home Fest &amp; Eventos, com salgados, doces e
                bebidas planejados para agradar as crianças e, ao mesmo tempo, acolher pais e convidados.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Salgados */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-1">
                  <UtensilsCrossed className="w-4 h-4 text-[#F3A93B]" />
                  Salgados
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Seleção de salgados clássicos de festa infantil, servidos ao longo do evento.
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Mini coxinha, bolinha de queijo e croquete de carne.</li>
                  <li>Mini quibe, enroladinho de salsicha e folhados variados.</li>
                  <li>
                    Itens especiais como mini hambúrguer, mini hot dog ou mini pizza podem ser incluídos conforme
                    a proposta da festa.
                  </li>
                </ul>
              </div>

              {/* Doces */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-1">
                  <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                  Doces
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Doces tradicionais de aniversário, com possibilidade de personalização de cores e detalhes.
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Brigadeiro, beijinho, cajuzinho e outras opções clássicas.</li>
                  <li>
                    Versões com confeitos coloridos, granulados especiais e apresentações diferenciadas.
                  </li>
                  <li>
                    Possibilidade de combinar o visual dos doces com o tema escolhido (cores, forminhas, toppers).
                  </li>
                </ul>
              </div>

              {/* Bebidas / Política */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-1">
                  <CupSoda className="w-4 h-4 text-[#F3A93B]" />
                  Bebidas e política de consumo
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Bebidas pensadas para crianças e adultos, com flexibilidade para o cliente levar itens extras.
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Refrigerantes tradicionais e zero (Coca-Cola, guaranás, entre outros).</li>
                  <li>Água mineral e água com gás.</li>
                  <li>
                    O cliente pode levar bebidas alcoólicas (como cerveja, vinho ou destilados), conforme política
                    combinada no contrato, sem taxa de rolha nas condições previamente alinhadas.
                  </li>
                </ul>
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
                Festa infantil com acolhimento sofisticado e foco nas crianças.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                A ideia é que você aproveite a festa junto com o seu filho, enquanto a equipe conduz o serviço,
                organiza o fluxo de cardápio e cuida dos detalhes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <ShieldCheck className="w-4 h-4 text-[#F3A93B]" />
                  Equipe treinada
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Profissionais acostumados com rotina de festa infantil, atentos à segurança e ao conforto das
                  crianças.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <PartyPopper className="w-4 h-4 text-[#F3A93B]" />
                  Clima de celebração
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Cardápio pensado para circular bem durante toda a festa, sem filas e sem interrupções na diversão
                  das crianças.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                  Personalização
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Possibilidade de alinhar tema, detalhes decorativos e ajustes de cardápio conforme o perfil da
                  família e da criança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-white py-16 md:py-20 border-t border-[#F2E4CF]">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412]">
              Quer receber o cardápio completo e os valores da festa infantil?
            </h2>
            <p className="text-sm md:text-base text-[#6A4628] max-w-2xl mx-auto">
              Envie a data da festa, o bairro, o tipo de espaço (casa, salão, escola) e o número aproximado de
              convidados. A partir disso, montamos a proposta ideal para a sua festa infantil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-base"
              >
                <Baby className="w-4 h-4" />
                <span>Solicitar orçamento infantil</span>
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

export default BuffetInfantilPage;
