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
        {/* HERO BUFFET INFANTIL - NOVO DESIGN */}
        <section id="topo" className="relative overflow-hidden bg-gradient-to-b from-[#FFF7EC] to-white">
          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
            {/* Conteúdo à esquerda */}
            <div className="flex-1 z-10">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-hf-vibrant-green/15 text-hf-vibrant-green px-4 py-2 rounded-full border border-hf-vibrant-green/30">
                  <PartyPopper className="w-4 h-4" />
                  <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">
                    Buffet infantil em Belo Horizonte
                  </span>
                </div>

                {/* Título principal com fonte Varela Round */}
                <h1 className="font-varela text-4xl md:text-5xl lg:text-6xl leading-tight text-[#3B2412]">
                  Festa infantil completa, no seu espaço!
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-[#6A4628] max-w-xl leading-relaxed">
                  Com clima de casa, estrutura de buffet, cardápio infantil delicioso e equipe organizada para conduzir a festa com tranquilidade.
                </p>

                {/* Botões CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded-full"
                  >
                    <Baby className="w-5 h-5" />
                    <span>Solicitar orçamento</span>
                  </a>

                  <a
                    href="#detalhes"
                    className="inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded-full border-2 border-[#B47A3F] text-[#3B2412] hover:bg-[#B47A3F]/10 transition-colors"
                  >
                    <span>Ver detalhes</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Ilustração à direita */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/hero-infantil-illustration.png"
                alt="Ilustração de festa infantil com animais felizes, balões e decoração colorida"
                className="w-full max-w-md md:max-w-lg drop-shadow-lg"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="bg-white py-16 md:py-24 border-b border-[#F2E4CF]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-12 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-2">
                Para quem é
              </p>
              <h2 className="font-varela text-3xl md:text-4xl text-[#3B2412] mb-4">
                A festa infantil perfeita para sua família
              </h2>
              <p className="text-base md:text-lg text-[#6A4628] max-w-3xl">
                Indicado para famílias que desejam comemorar em casa, no apartamento, salão do prédio ou espaço da escola, com cardápio infantil completo, equipe treinada e condução profissional da festa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Duração */}
              <div className="rounded-3xl border-2 border-[#F1DFC5] bg-gradient-to-br from-white to-[#FFF7EC] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hf-vibrant-green/15 flex items-center justify-center">
                    <Clock3 className="w-6 h-6 text-hf-vibrant-green" />
                  </div>
                  <h3 className="font-varela text-xl text-[#3B2412]">
                    Duração
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Festa infantil com duração média de 4 horas, ajustada ao horário do espaço e à idade das crianças.
                </p>
              </div>

              {/* Card 2: Onde atendemos */}
              <div className="rounded-3xl border-2 border-[#F1DFC5] bg-gradient-to-br from-white to-[#FFF7EC] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hf-bright-yellow/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#F3A93B]" />
                  </div>
                  <h3 className="font-varela text-xl text-[#3B2412]">
                    Onde atendemos
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Atendemos Belo Horizonte e região, em casas, apartamentos, salões de festa, áreas comuns de condomínio e escolas.
                </p>
              </div>

              {/* Card 3: Clima de casa */}
              <div className="rounded-3xl border-2 border-[#F1DFC5] bg-gradient-to-br from-white to-[#FFF7EC] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hf-vibrant-green/15 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-hf-vibrant-green" />
                  </div>
                  <h3 className="font-varela text-xl text-[#3B2412]">
                    Clima de casa
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Você escolhe o tema e o espaço, nós levamos a estrutura de buffet, cardápio infantil e equipe preparada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDÁPIO / O QUE ESTÁ INCLUSO */}
        <section
          id="detalhes"
          className="bg-[#FFF7EC] py-16 md:py-24"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-12 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-2">
                O que está incluso
              </p>
              <h2 className="font-varela text-3xl md:text-4xl text-[#3B2412] mb-4">
                Cardápio infantil completo e delicioso
              </h2>
              <p className="text-base md:text-lg text-[#6A4628] max-w-3xl">
                Utilizamos como base o cardápio oficial infantil da Home Fest &amp; Eventos, com salgados, doces e bebidas planejados para agradar as crianças e, ao mesmo tempo, acolher pais e convidados.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Salgados */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-hf-vibrant-green/15 flex items-center justify-center flex-shrink-0">
                    <UtensilsCrossed className="w-5 h-5 text-hf-vibrant-green" />
                  </div>
                  <h3 className="font-varela text-2xl text-[#3B2412]">
                    Salgados
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Seleção de salgados clássicos de festa infantil, servidos ao longo do evento.
                </p>
                <ul className="space-y-2 text-sm text-[#5B3B22]">
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Mini coxinha, bolinha de queijo e croquete de carne.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Mini quibe, enroladinho de salsicha e folhados variados.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Itens especiais como mini hambúrguer, mini hot dog ou mini pizza.</span>
                  </li>
                </ul>
              </div>

              {/* Doces */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-hf-bright-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[#F3A93B]" />
                  </div>
                  <h3 className="font-varela text-2xl text-[#3B2412]">
                    Doces
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Doces tradicionais de aniversário, com possibilidade de personalização de cores e detalhes.
                </p>
                <ul className="space-y-2 text-sm text-[#5B3B22]">
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Brigadeiro, beijinho, cajuzinho e outras opções clássicas.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Versões com confeitos coloridos e granulados especiais.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Possibilidade de combinar o visual com o tema escolhido.</span>
                  </li>
                </ul>
              </div>

              {/* Bebidas */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-hf-vibrant-green/15 flex items-center justify-center flex-shrink-0">
                    <CupSoda className="w-5 h-5 text-hf-vibrant-green" />
                  </div>
                  <h3 className="font-varela text-2xl text-[#3B2412]">
                    Bebidas
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Bebidas pensadas para crianças e adultos, com flexibilidade para o cliente levar itens extras.
                </p>
                <ul className="space-y-2 text-sm text-[#5B3B22]">
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Refrigerantes tradicionais e zero.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Água mineral e água com gás.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-hf-vibrant-green font-bold">•</span>
                    <span>Política de bebidas alcoólicas conforme combinado no contrato.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="bg-white py-16 md:py-24 border-b border-[#F2E4CF]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-12 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-2">
                Diferenciais Home Fest &amp; Eventos
              </p>
              <h2 className="font-varela text-3xl md:text-4xl text-[#3B2412] mb-4">
                Festa infantil com acolhimento sofisticado
              </h2>
              <p className="text-base md:text-lg text-[#6A4628] max-w-3xl">
                A ideia é que você aproveite a festa junto com o seu filho, enquanto a equipe conduz o serviço, organiza o fluxo de cardápio e cuida dos detalhes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Diferencial 1 */}
              <div className="rounded-3xl bg-gradient-to-br from-[#FFF7EC] to-white border-2 border-[#F1DFC5] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hf-vibrant-green/15 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-hf-vibrant-green" />
                  </div>
                  <h3 className="font-varela text-xl text-[#3B2412]">
                    Equipe treinada
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Profissionais acostumados com rotina de festa infantil, atentos à segurança e ao conforto das crianças.
                </p>
              </div>

              {/* Diferencial 2 */}
              <div className="rounded-3xl bg-gradient-to-br from-[#FFF7EC] to-white border-2 border-[#F1DFC5] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hf-bright-yellow/20 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#F3A93B]" />
                  </div>
                  <h3 className="font-varela text-xl text-[#3B2412]">
                    Serviço personalizado
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Cada festa é única. Adaptamos o cardápio, decoração e dinâmica conforme o perfil e necessidades da sua família.
                </p>
              </div>

              {/* Diferencial 3 */}
              <div className="rounded-3xl bg-gradient-to-br from-[#FFF7EC] to-white border-2 border-[#F1DFC5] shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hf-vibrant-green/15 flex items-center justify-center">
                    <PartyPopper className="w-6 h-6 text-hf-vibrant-green" />
                  </div>
                  <h3 className="font-varela text-xl text-[#3B2412]">
                    Clima de celebração
                  </h3>
                </div>
                <p className="text-base text-[#6A4628] leading-relaxed">
                  Transformamos seu espaço em um ambiente alegre, acolhedor e seguro para as crianças se divertirem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-r from-hf-vibrant-green/10 to-hf-bright-yellow/10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="font-varela text-3xl md:text-4xl text-[#3B2412] mb-4">
              Pronto para organizar a festa infantil perfeita?
            </h2>
            <p className="text-lg text-[#6A4628] mb-8 max-w-2xl mx-auto">
              Entre em contato conosco pelo WhatsApp e solicite um orçamento personalizado para a festa do seu filho.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded-full"
            >
              <Baby className="w-5 h-5" />
              <span>Solicitar orçamento infantil</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BuffetInfantilPage;
