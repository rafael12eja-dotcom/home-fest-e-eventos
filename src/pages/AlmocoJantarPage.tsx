import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  UtensilsCrossed,
  Sparkles,
  Clock3,
  MapPin,
  Users,
  CupSoda,
  ShieldCheck,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento de buffet de almoço ou jantar com a Home Fest & Eventos em Belo Horizonte."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const AlmocoJantarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-neutral-900 flex flex-col">
      <Header />

      <main className="flex-1 pt-28">
        {/* HERO ALMOÇO E JANTAR */}
        <section id="topo" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-almoco-jantar-bh.jpg"
              alt="Buffet de almoço e jantar servido em evento em Belo Horizonte"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-24 md:py-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 text-white">
              <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                <UtensilsCrossed className="w-4 h-4" />
                Buffet almoço e jantar em Belo Horizonte
              </p>

              <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.6)]">
                Almoço e jantar completos no seu espaço, com cardápios Essenzia/Home Fest.
              </h1>

              <p className="mt-4 text-sm md:text-lg text-[#FFEBD6] max-w-xl">
                Ideal para aniversários, casamentos íntimos, formaturas, eventos corporativos e celebrações em casa,
                no salão do prédio ou em sítios, com serviço de buffet completo e acolhimento sofisticado.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A454] px-6 py-3 text-sm md:text-base font-semibold shadow-[0_14px_40px_rgba(0,0,0,.45)] hover:opacity-95 transition"
                  aria-label="Solicitar orçamento de buffet almoço e jantar pelo WhatsApp"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Solicitar orçamento de almoço ou jantar</span>
                </a>

                <a
                  href="#cardapios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5D9A8] bg-white/5 px-6 py-3 text-sm md:text-base font-semibold hover:bg-white/10 transition"
                >
                  Ver cardápios oficiais
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs md:text-sm text-[#FFEBD6]/90">
                <p className="flex items-center gap-2">
                  <Clock3 className="w-4 h-4 text-[#F3A93B]" />
                  <span>Eventos de almoço e jantar com duração média entre 4 e 6 horas.</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#F3A93B]" />
                  <span>Atendimento em Belo Horizonte e região metropolitana.</span>
                </p>
              </div>
            </div>

            <div className="hidden lg:block flex-1" aria-hidden="true" />
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="bg-[#FFF7EC] py-16 md:py-20 border-b border-[#F1DFC5]">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Para quem é o buffet de almoço e jantar Home Fest?
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Para quem quer receber como em casa, com cardápio de evento completo.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628]">
                Indicado para famílias e empresas que desejam oferecer uma refeição completa, com serviço de buffet,
                estrutura de aquecimento e equipe profissional, sem abrir mão do clima acolhedor do próprio espaço.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Users className="w-4 h-4 text-[#F3A93B]" />
                  Eventos familiares
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Ideal para aniversários adultos, bodas, batizados, 15 anos intimistas e almoços de família em casas
                  e salões de prédio.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                  Casamentos e celebrações especiais
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Perfeito para casamentos pequenos e médios, mini weddings e eventos com cerimônia seguida de almoço
                  ou jantar.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <CupSoda className="w-4 h-4 text-[#F3A93B]" />
                  Eventos corporativos
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Reuniões de equipe, premiações, encontros com clientes e almoços de relacionamento, com cardápios
                  adaptados ao perfil da empresa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA O SERVIÇO */}
        <section className="bg-[#FFF1E0] py-16 md:py-20 border-b border-[#F1DFC5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left max-w-3xl">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Como funciona
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Estrutura de buffet completa, com serviço pensado para o ritmo do seu evento.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628]">
                A Home Fest & Eventos leva para o seu espaço estrutura de apoio, equipe para serviço de mesa e buffet,
                além de todo o planejamento de horários de entrada, pratos principais e sobremesas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <Clock3 className="w-4 h-4 text-[#F3A93B]" />
                  Ritmo do serviço
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Definimos com você os melhores horários para coquetel, pratos principais e sobremesas, integrando o
                  cardápio à programação do evento (entrada dos noivos, discursos, homenagens etc.).
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <ShieldCheck className="w-4 h-4 text-[#F3A93B]" />
                  Equipe e estrutura
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Montagem de buffet quente, apoio de cozinha, equipe de garçons e auxiliares, ajustados ao porte do
                  evento e ao espaço disponível.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 flex flex-col gap-2">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412]">
                  <MapPin className="w-4 h-4 text-[#F3A93B]" />
                  Onde atendemos
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Casas, coberturas, salões de prédio, sítios, espaços de eventos e empresas em Belo Horizonte e região
                  metropolitana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDÁPIOS OFICIAIS */}
        <section id="cardapios" className="bg-[#FFF7EC] py-16 md:py-20 border-b border-[#F1DFC5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left max-w-3xl">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Cardápios oficiais Essenzia/Home Fest
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Quatro opções de cardápio de almoço e jantar, pensadas para eventos completos.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628]">
                Trabalhamos com os quatro cardápios oficiais Essenzia/Home Fest, que combinam arroz, proteínas
                principais, massas e saladas especiais. A escolha é feita junto com você no momento do orçamento.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 space-y-2">
                  <h3 className="font-serif text-xl text-[#3B2412]">Cardápio 1</h3>
                  <p className="text-sm text-[#6A4628]">
                    Combinação clássica com duas opções de arroz, lombo com molho de ervas, Coq au Vin e acompanhamentos
                    quentes, além de salada fresca com folhas, frutas e molho cremoso de queijo.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 space-y-2">
                  <h3 className="font-serif text-xl text-[#3B2412]">Cardápio 2</h3>
                  <p className="text-sm text-[#6A4628]">
                    Medalhão de frango com molho de maracujá, filé ao molho madeira, opções de arroz e penne ao molho
                    quatro queijos, com salada que combina folhas, frutas e nozes.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 space-y-2">
                  <h3 className="font-serif text-xl text-[#3B2412]">Cardápio 3</h3>
                  <p className="text-sm text-[#6A4628]">
                    Medalhão de filé, Coq au Vin, arroz com amêndoas ou alho e brócolis e rondelli de espinafre, com
                    salada premium com frutas secas e molho de queijo.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-[#F1DFC5] shadow-sm p-5 space-y-2">
                  <h3 className="font-serif text-xl text-[#3B2412]">Cardápio 4</h3>
                  <p className="text-sm text-[#6A4628]">
                    Frango à indiana, filé ao molho funghi, arroz branco e opção com castanhas ou alho e brócolis,
                    penne ao molho napolitano e salada com folhas, frutas e castanhas.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs md:text-sm text-[#8D6745] max-w-3xl">
              No orçamento, detalhamos cada cardápio com todos os itens e ajustamos a quantidade conforme o número de
              convidados, o horário do evento e o estilo desejado.
            </p>
          </div>
        </section>

        {/* FAQ RÁPIDO */}
        <section className="bg-[#FFF1E0] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-8 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Dúvidas frequentes sobre almoço e jantar
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Como funciona o buffet de almoço e jantar na prática?
              </h2>
            </div>

            <div className="space-y-6 text-sm md:text-base text-[#6A4628]">
              <div className="rounded-2xl bg-white border border-[#F1DFC5] p-5 space-y-2">
                <h3 className="font-semibold text-[#3B2412]">
                  O cardápio pode ser adaptado para restrições alimentares?
                </h3>
                <p>
                  Sim. No momento do orçamento, você nos informa restrições e preferências (vegetariano, sem glúten,
                  sem lactose etc.) e indicamos adaptações possíveis dentro de cada cardápio.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] p-5 space-y-2">
                <h3 className="font-semibold text-[#3B2412]">Vocês levam toda a estrutura de buffet?</h3>
                <p>
                  Levamos rechauds, utensílios de serviço, estrutura para buffet quente e equipe. Itens como mesas,
                  toalhas e estrutura de salão podem ser combinados conforme o local do evento.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-[#F1DFC5] p-5 space-y-2">
                <h3 className="font-semibold text-[#3B2412]">Qual é o número mínimo de convidados?</h3>
                <p>
                  O mínimo pode variar conforme o dia da semana e o tipo de evento. Envie os dados pelo WhatsApp e nós
                  indicamos a melhor configuração de cardápio e serviço para o seu caso.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A454] px-8 py-3 text-sm md:text-base font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,.35)] hover:opacity-95 transition"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Conversar com a equipe sobre o seu evento</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AlmocoJantarPage;
