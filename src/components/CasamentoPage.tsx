import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Sparkles,
  CakeSlice,
  UtensilsCrossed,
  CupSoda,
  Clock3,
  MapPin,
  Users,
  Star,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de informações sobre o buffet para casamento da Home Fest & Eventos em Belo Horizonte."
);

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const CasamentoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-[#3B2412] flex flex-col">
      <Header />

      <main className="flex-1 pt-24 md:pt-28 lg:pt-32">
        {/* HERO CASAMENTO */}
        <section id="topo" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/buffet-casamento-bh.jpg"
              alt="Decoração de casamento com flores brancas e luzes aconchegantes"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.55)_0,_rgba(0,0,0,0.85)_55%,_rgba(0,0,0,0.9)_100%)]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-[1.35fr_minmax(0,1fr)] gap-10 items-center">
              <div className="space-y-5 md:space-y-6 text-white">
                <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-[#FBD9A2]">
                  <Sparkles className="w-4 h-4" />
                  <span>Buffet para casamento em Belo Horizonte</span>
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.55)]">
                  Casamento com clima de casa, gastronomia autoral e serviço completo no seu espaço.
                </h1>

                <p className="text-sm md:text-lg text-[#FFEBD1] max-w-xl">
                  A Home Fest &amp; Eventos leva estrutura de buffet, equipe e cardápio completo para casamentos em casas,
                  salões de prédio, sítios e espaços de eventos em Belo Horizonte e região. Você foca em viver o momento;
                  nós cuidamos da experiência dos convidados.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1.5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                    aria-label="Solicitar orçamento de buffet para casamento com a Home Fest & Eventos em Belo Horizonte"
                  >
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>Solicitar orçamento para casamento</span>
                  </a>

                  <a
                    href="#formatos"
                    className="hf-btn hf-btn--hero hf-btn-hero-secondary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <Star className="w-4 h-4" />
                    <span>Ver formatos de casamento</span>
                  </a>
                </div>

                <p className="text-xs md:text-sm text-[#FFE0BB] max-w-xs">
                  Atendemos mini weddings, casamentos intimistas e recepções pós-cerimônia em diferentes espaços.
                </p>
              </div>

              <div className="hidden lg:flex flex-col gap-4 bg-white/95 rounded-3xl shadow-[0_24px_65px_rgba(31,22,13,.45)] p-6 border border-white/60">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B47A3F]">
                  O QUE CUIDAMOS POR VOCÊ
                </p>
                <ul className="space-y-3 text-sm text-[#4B2E1A]">
                  <li className="flex gap-2">
                    <CakeSlice className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Coquetel de boas-vindas com petiscos, mini porções e mesa de antepastos.</span>
                  </li>
                  <li className="flex gap-2">
                    <UtensilsCrossed className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Jantar completo no estilo Home Fest, servido em travessas, ilhas ou empratado.</span>
                  </li>
                  <li className="flex gap-2">
                    <CupSoda className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Serviço contínuo de bebidas não alcoólicas com equipe circulando pelo salão.</span>
                  </li>
                  <li className="flex gap-2">
                    <Users className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Equipe treinada de cozinha, salão, recepção e coordenação de buffet.</span>
                  </li>
                  <li className="flex gap-2">
                    <Clock3 className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Tempo de atendimento planejado conforme o roteiro da cerimônia e da festa.</span>
                  </li>
                  <li className="flex gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-[#B47A3F]" />
                    <span>Atendimento em Belo Horizonte e região, em casas, salões, sítios e espaços de eventos.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FORMATOS DE CASAMENTO */}
        <section id="formatos" className="bg-[#FFF7EC] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Formatos de casamento que atendemos
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Casamentos intimistas, mini weddings e recepções no seu espaço.
              </h2>
              <p className="text-sm md:text-base text-[#6C4930] max-w-3xl">
                Cada casamento tem uma história, um tamanho e um ritmo. A Home Fest &amp; Eventos adapta o serviço de buffet
                ao seu projeto: do mini wedding em casa ao casamento em sítios e espaços de eventos, sempre com o mesmo padrão
                de acolhimento, organização e gastronomia autoral.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(46,33,21,.18)] p-6 border border-[#F4D3A7]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-1.5">
                  MINI WEDDINGS
                </p>
                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mb-2">
                  Casamentos intimistas em casa ou salão do prédio
                </h3>
                <p className="text-sm text-[#6C4930]">
                  Ideal para quem deseja reunir família e amigos próximos em um ambiente acolhedor, com jantar completo,
                  coquetel e serviço cuidadoso, sem abrir mão da sofisticação.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(46,33,21,.18)] p-6 border border-[#F4D3A7]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-1.5">
                  CASAMENTOS EM SÍTIOS
                </p>
                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mb-2">
                  Estrutura de buffet para casamentos ao ar livre
                </h3>
                <p className="text-sm text-[#6C4930]">
                  Levamos toda a operação de buffet para sítios e espaços abertos: montagem de estações, equipe completa,
                  logística de atendimento e cardápio adaptado ao clima do evento.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-[0_10px_35px_rgba(46,33,21,.18)] p-6 border border-[#F4D3A7]">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F] mb-1.5">
                  RECEPÇÕES PÓS-CERIMÔNIA
                </p>
                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mb-2">
                  Coquetel e jantar para celebrar depois do “sim”
                </h3>
                <p className="text-sm text-[#6C4930]">
                  Para casais que realizam a cerimônia em igreja ou cartório e recebem os convidados em outro espaço,
                  cuidamos do coquetel, jantar e serviço completo de buffet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE INCLUI O BUFFET DE CASAMENTO */}
        <section className="bg-[#FDF3E4] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                O que está incluído
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Buffet completo para casamento com cardápio autoral e equipe presente.
              </h2>
              <p className="text-sm md:text-base text-[#6C4930] max-w-3xl">
                O cardápio de casamento da Home Fest &amp; Eventos pode ser adaptado ao seu gosto e ao formato do evento,
                sempre com foco na experiência do convidado e no ritmo da festa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-[#3B2412]">
                  Coquetel de boas-vindas e estação de finger foods
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Petiscos e entradas em formato finger food para os convidados se servirem à vontade.</li>
                  <li>Mini porções quentes e frias que circulam pelo salão com a equipe de garçons.</li>
                  <li>Opções que podem incluir inspirações do cardápio Home Fest, conforme sua escolha.</li>
                </ul>

                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mt-6">
                  Jantar Home Fest para casamento
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Buffet de pratos principais e acompanhamentos com inspiração nos cardápios de almoço e jantar.</li>
                  <li>Opcional de serviço empratado para eventos mais formais, conforme o briefing do casal.</li>
                  <li>Equipe de cozinha, apoio e garçons organizada para manter o salão sempre abastecido.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-serif font-semibold text-[#3B2412]">
                  Serviço de bebidas não alcoólicas
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Refrigerantes tradicionais e zero.</li>
                  <li>Água mineral com e sem gás.</li>
                  <li>Sucos como laranja, abacaxi e maracujá.</li>
                </ul>
                <p className="text-xs text-[#8D6745]">
                  Bebidas alcoólicas podem ser fornecidas pelo casal, sem taxa de rolha. Auxiliamos na definição de quantidade
                  e na montagem dos pontos de bar e taças.
                </p>

                <h3 className="text-lg font-serif font-semibold text-[#3B2412] mt-6">
                  Equipe, estrutura de buffet e atendimento
                </h3>
                <ul className="list-disc list-inside text-sm text-[#6C4930] space-y-1.5">
                  <li>Equipe completa de cozinha, garçons, copeira e coordenação de buffet no dia.</li>
                  <li>Lounges, mesas de apoio e montagem de ilhas de buffet conforme o projeto do evento.</li>
                  <li>Planejamento de roteiro junto ao casal para integrar cerimônia, fotos e horários de serviço.</li>
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
                  Vamos conversar sobre o buffet do seu casamento?
                </h2>
                <p className="text-sm md:text-base text-[#FCE5BF] max-w-xl">
                  Conte como será o seu casamento, o número aproximado de convidados e o formato que você imagina. A partir
                  disso, montamos uma sugestão de cardápio e serviço Home Fest &amp; Eventos sob medida para o seu dia.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-sm md:text-base w-full"
                  aria-label="Falar com a equipe Home Fest sobre buffet para casamento"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Falar com a equipe Home Fest no WhatsApp</span>
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

export default CasamentoPage;
