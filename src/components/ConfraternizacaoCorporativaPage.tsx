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
        
        <section id="topo" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <picture>
              <source srcSet="/hero/confraternizacao-corporativa-bh-home-fest-eventos.webp" type="image/webp" />
              <img
                src="/hero/confraternizacao-corporativa-bh-home-fest-eventos.jpg"
                alt="Confraternização corporativa em BH – Home Fest & Eventos"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <div className="space-y-5 text-white bg-black/55 backdrop-blur-[2px] rounded-3xl px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,.55)]">
                <p className="inline-flex items-center text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                  Confraternização Corporativa em Belo Horizonte
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.5)] text-white">
                  Confraternizações corporativas com clima acolhedor, buffet completo e equipe presente no seu espaço.
                </h1>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  Organizamos eventos corporativos em empresas, casas, salões de prédio e espaços de eventos em BH e região, com estrutura completa e equipe presente do início ao fim.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-3">
                  <a
                    href={whatsappLink}
                    className="inline-flex items-center justify-center rounded-full bg-[#D9A441] text-black font-semibold px-6 py-3 text-sm md:text-base shadow hover:brightness-95 transition"
                  >
                    Solicitar orçamento
                  </a>
                  <a
                    href="#formatos"
                    className="inline-flex items-center justify-center rounded-full border border-white/70 text-white font-semibold px-6 py-3 text-sm md:text-base hover:bg-white/10 transition"
                  >
                    Ver formatos
                  </a>
                </div>
              </div>
            </div>

            {/* CARD LATERAL */}
            <div className="w-full lg:w-[420px]">
              <div className="bg-white/95 rounded-3xl p-6 md:p-7 shadow-xl text-[#3B2412]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-3">
                  O que cuidamos por você
                </p>
                <ul className="space-y-3 text-sm md:text-base text-[#6A4628]">
                  <li className="flex gap-2"><span>•</span><span>Estrutura completa no seu espaço com equipe especializada.</span></li>
                  <li className="flex gap-2"><span>•</span><span>Cardápios autorais flexíveis para o seu estilo de celebração.</span></li>
                  <li className="flex gap-2"><span>•</span><span>Bebidas, louças, utensílios e logística inclusos.</span></li>
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
