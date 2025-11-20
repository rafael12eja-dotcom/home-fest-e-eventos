import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Briefcase,
  Users,
  UtensilsCrossed,
  CupSoda,
  Clock3,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de informações sobre buffet para confraternização corporativa com a Home Fest & Eventos em Belo Horizonte."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const ConfraternizacaoCorporativaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-[#3B2412] flex flex-col">
      <Header />

      <main className="flex-1 pt-24 md:pt-28 lg:pt-32">
        {/* HERO CONFRATERNIZAÇÃO CORPORATIVA */}
        <section className="relative w-full min-h-[480px] md:min-h-[520px] lg:min-h-[560px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/confraternizacao-corporativa-bh.jpg"
              alt="Confraternização corporativa com convidados conversando em ambiente elegante"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.35)_0,_rgba(0,0,0,0.8)_55%,_rgba(0,0,0,0.9)_100%)]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-24">
            <div className="grid lg:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 items-center">
              <div className="space-y-5 md:space-y-6 text-white">
                <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-[#FBD9A2]">
                  <Briefcase className="w-4 h-4" />
                  <span>Buffet para confraternização corporativa em Belo Horizonte</span>
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.55)]">
                  Confraternizações corporativas com clima acolhedor, buffet completo e equipe presente no seu espaço.
                </h1>

                <p className="text-sm md:text-lg text-[#FFEBD1] max-w-xl">
                  A Home Fest &amp; Eventos leva estrutura de buffet, cardápio autoral e serviço de equipe para eventos
                  corporativos em empresas, casas, salões de prédio e espaços de eventos em Belo Horizonte e região.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1.5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                    aria-label="Solicitar orçamento para confraternização corporativa com a Home Fest & Eventos"
                  >
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>Solicitar orçamento corporativo</span>
                  </a>

                  <a
                    href="#formatos"
                    className="hf-btn hf-btn--hero hf-btn-hero-secondary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Star className="w-4 h-4" />
                    <span>Ver formatos de eventos corporativos</span>
                  </a>
                </div>

                <p className="text-xs md:text-sm text-[#FFE0BB] max-w-xs">
                  Atendemos confraternizações de fim de ano, aniversários de empresa, eventos internos e encontros de equipes.
                </p>
              </div>

              <div className="hidden lg:flex flex-col gap-4 bg-white/95 rounded-3xl shadow-[0_24px_65px_rgba(31,22,13,.45)] p-6 border border-white/60">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B47A3F]">
                  PENSADO PARA EMPRESAS
                </p>
                <ul className="space-y-3 text-sm text-[#4B2E1A]">
                  <li className="flex gap-2">
                    <Users className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Buffet estruturado para receber equipes de diferentes tamanhos.</span>
                  </li>
                  <li className="flex gap-2">
                    <UtensilsCrossed className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Cardápios adaptáveis para coquetel, almoço, jantar ou eventos híbridos.</span>
                  </li>
                  <li className="flex gap-2">
                    <CupSoda className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Serviço contínuo de bebidas não alcoólicas durante o evento.</span>
                  </li>
                  <li className="flex gap-2">
                    <Clock3 className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Roteiro alinhado com discurso, premiações e momentos da empresa.</span>
                  </li>
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Atendimento em empresas, espaços de eventos, casas e sítios da região.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FORMATOS DE EVENTOS CORPORATIVOS */}
        <section id="formatos" className="bg-[#FFF7EC] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Formatos corporativos que atendemos
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Confraternizações, eventos internos e encontros de equipe com o conforto da sua empresa ou espaço escolhido.
              </h2>
              <p className="text-sm md:text-base text-[#6C4930] max-w-3xl">
                Montamos o serviço de buffet conforme o tipo de evento corporativo: desde um coquetel descontraído para equipes
                até almoços e jantares formais para convidados especiais da empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(46,33,21,.18)] p-6 border border-[#F4D3A7]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-1.5">
                  CONFRATERNIZAÇÕES INTERNAS
                </p>
                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mb-2">
                  Eventos para equipes dentro da empresa
                </h3>
                <p className="text-sm text-[#6C4930]">
                  Ideal para comemorações de metas, aniversários da empresa ou encontros de times, com buffet estruturado
                  no próprio espaço corporativo.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(46,33,21,.18)] p-6 border border-[#F4D3A7]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-1.5">
                  EVENTOS EM ESPAÇOS PARCEIROS
                </p>
                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mb-2">
                  Confraternizações em salões, casas e sítios
                </h3>
                <p className="text-sm text-[#6C4930]">
                  Levamos o buffet completo para espaços de eventos, casas e sítios, com serviço pensado para integrar
                  gastronomia, momentos de fala e lazer.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(46,33,21,.18)] p-6 border border-[#F4D3A7]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-1.5">
                  ENCONTROS ESPECIAIS
                </p>
                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mb-2">
                  Reuniões com convidados estratégicos
                </h3>
                <p className="text-sm text-[#6C4930]">
                  Para encontros com parceiros, clientes e diretoria, oferecemos sugestões de serviço mais formais,
                  com cardápios e atendimento alinhados à imagem da empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE INCLUI O BUFFET CORPORATIVO */}
        <section className="bg-[#FDF3E4] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                O que está incluído no buffet
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Estrutura completa de buffet para eventos corporativos.
              </h2>
              <p className="text-sm md:text-base text-[#6C4930] max-w-3xl">
                Adequamos o cardápio, o ritmo de serviço e a montagem do buffet ao objetivo do seu evento, sempre com foco
                na experiência dos convidados e da equipe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-[#3B2412]">
                  Coquetel, finger foods e opções para conversar em pé
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Petiscos e opções finger food para facilitar a circulação e as conversas.</li>
                  <li>Mini porções quentes e frias inspiradas no cardápio Home Fest.</li>
                  <li>Estações de buffet montadas em pontos estratégicos do ambiente.</li>
                </ul>

                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mt-6">
                  Almoços e jantares corporativos
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Buffet de pratos principais, acompanhamentos e saladas.</li>
                  <li>Serviço à francesa, em ilhas de buffet ou empratado, conforme o perfil do evento.</li>
                  <li>Equipe de cozinha e salão preparada para manter o fluxo do serviço sem interrupções.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-[#3B2412]">
                  Bebidas não alcoólicas para toda a equipe
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Refrigerantes tradicionais e zero.</li>
                  <li>Água mineral com e sem gás.</li>
                  <li>Sucos como laranja, abacaxi e maracujá.</li>
                </ul>
                <p className="text-xs text-[#8D6745]">
                  Bebidas alcoólicas podem ser fornecidas pela empresa, sem taxa de rolha. Podemos auxiliar na estimativa
                  de quantidade e na montagem de pontos de bar.
                </p>

                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mt-6">
                  Equipe, logística e atendimento
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Equipe completa de cozinha, garçons e apoio.</li>
                  <li>Briefing prévio para alinhar horários de discursos, brindes e entregas de premiações.</li>
                  <li>Montagem e desmontagem da estrutura de buffet nos horários combinados com a empresa.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="bg-[#1D1710] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 items-center">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#F4D3A7]">
                  Próximo passo
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-3">
                  Vamos planejar a confraternização corporativa da sua empresa?
                </h2>
                <p className="text-sm md:text-base text-[#FCE5BF] max-w-xl">
                  Conte o objetivo do evento, o número aproximado de participantes e o formato desejado. A Home Fest &amp;
                  Eventos monta uma proposta de buffet corporativo sob medida para a sua empresa.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-sm md:text-base w-full"
                  aria-label="Falar com a equipe Home Fest sobre buffet para confraternização corporativa"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Falar com a Home Fest no WhatsApp</span>
                </a>

                <a
                  href="/#contato"
                  className="hf-btn hf-btn--hero hf-btn-hero-secondary inline-flex items-center justify-center gap-2 text-sm md:text-base w-full"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Ver todas as formas de contato</span>
                </a>

                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 text-xs md:text-sm text-[#F4D3A7] hover:text-white mt-1"
                >
                  <span>Voltar para a página inicial</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConfraternizacaoCorporativaPage;
