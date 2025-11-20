import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Sparkles,
  GlassWater,
  CakeSlice,
  CupSoda,
  UtensilsCrossed,
  Users,
  Clock3,
  MapPin,
  Star,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para aniversário adulto em Belo Horizonte com a Home Fest & Eventos."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const AniversarioAdultoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-neutral-900 flex flex-col">
      <Header />

      <main className="flex-1 pt-24 md:pt-28 lg:pt-32">
        {/* HERO */}
        <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/aniversario-adulto-hero-mobile.webp"
              type="image/webp"
            />
            <img
              src="/aniversario-adulto-hero-desktop.webp"
              alt="Brinde elegante em um aniversário adulto sofisticado"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </picture>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-10 h-full flex items-center">
            <div className="max-w-xl space-y-5 text-white bg-black/45 backdrop-blur-md rounded-3xl px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,.55)]">
              <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                <Sparkles className="w-4 h-4" />
                Aniversário adulto em Belo Horizonte
              </p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.55)]">
                Festa de aniversário adulto com buffet completo e clima de casa.
              </h1>

              <p className="text-sm md:text-lg text-[#FFEBD1]">
                A Home Fest & Eventos leva estrutura de buffet, equipe e gastronomia autoral para
                comemorações adultas em casa, salões de prédio, sítios e espaços de eventos em Belo Horizonte.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hf-btn hf-btn--hero hf-btn-hero-primary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                  aria-label="Solicitar orçamento para aniversário adulto com a Home Fest & Eventos em Belo Horizonte"
                >
                  <span>Solicitar orçamento para aniversário adulto</span>
                </a>

                <p className="text-xs md:text-sm text-[#FFE0BB] max-w-xs">
                  Atendemos aniversários adultos em diferentes formatos: coquetel, jantar, buffet completo e churrasco.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO + CONTEXTO */}
        <section className="bg-[#FFF7EC] border-t border-[#F1DFC5] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8 grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)] items-start">
            <div className="space-y-5">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Buffet para aniversário adulto em BH
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412]">
                Uma festa adulta com serviço profissional e aconchego de casa.
              </h2>
              <p className="text-[15px] md:text-[17px] text-[#5B3A22] leading-relaxed">
                Cada aniversário adulto tem um estilo: jantares intimistas, festas animadas com pista,
                comemorações ao ar livre ou encontros em família. A Home Fest & Eventos adapta cardápios,
                equipe e montagem para combinar com o jeito de cada anfitrião e o perfil dos convidados.
              </p>
              <p className="text-[15px] md:text-[17px] text-[#5B3A22] leading-relaxed">
                Cuidamos da gastronomia do início ao fim – das entradas ao último café – para que você possa
                aproveitar a festa com tranquilidade, sem se preocupar com cozinha, reposição ou serviço.
              </p>
            </div>

            <div className="space-y-4 bg-white/80 rounded-3xl border border-[#ECD2AE] shadow-[0_18px_45px_rgba(176,140,92,0.18)] p-5 md:p-6">
              <div className="flex items-center gap-3">
                <GlassWater className="w-8 h-8 text-[#B47A3F]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B47A3F]">
                    Para diferentes estilos de aniversários
                  </p>
                  <p className="text-sm text-[#3B2412]">
                    De encontros intimistas a festas maiores, em casa, salão, sítio ou empresa.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-[#5B3A22]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#B47A3F]" />
                  Coquetel adulto com finger foods, canapés e estações gourmets.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#B47A3F]" />
                  Jantar completo com pratos principais, acompanhamentos e sobremesas.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#B47A3F]" />
                  Churrasco elegante com cortes selecionados e serviço completo de buffet.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#B47A3F]" />
                  Formatos híbridos, unindo coquetel reforçado, jantar ou churrasco.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FORMATOS DE FESTA */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="max-w-3xl mb-10">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Formatos de aniversário adulto
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Escolha o formato que combina com a sua comemoração.
              </h2>
              <p className="text-[15px] md:text-[17px] text-[#5B3A22] leading-relaxed">
                Todos os formatos incluem cardápios pensados para adultos, serviço completo, montagem do buffet
                e atendimento cuidadoso aos convidados.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Coquetel Premium */}
              <div className="rounded-3xl border border-[#F0DEC2] bg-[#FFFAF2] p-5 shadow-[0_14px_36px_rgba(176,140,92,0.12)] flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#B47A3F] text-xs font-semibold tracking-[0.18em] uppercase">
                  <CupSoda className="w-4 h-4" />
                  Coquetel Premium
                </div>
                <p className="text-sm text-[#3B2412] font-semibold">
                  Ideal para aniversários mais descontraídos, com convidados em pé e clima de festa.
                </p>
                <ul className="mt-1 space-y-1.5 text-sm text-[#5B3A22]">
                  <li>Finger foods, canapés, mini porções e ilhas gourmets.</li>
                  <li>Atendimento volante com equipe de garçons.</li>
                  <li>Opção de estação de massas, tábua de frios ou mini sanduíches.</li>
                </ul>
              </div>

              {/* Jantar Completo */}
              <div className="rounded-3xl border border-[#F0DEC2] bg-[#FFFAF2] p-5 shadow-[0_14px_36px_rgba(176,140,92,0.12)] flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#B47A3F] text-xs font-semibold tracking-[0.18em] uppercase">
                  <UtensilsCrossed className="w-4 h-4" />
                  Jantar Completo
                </div>
                <p className="text-sm text-[#3B2412] font-semibold">
                  Para aniversários que pedem um clima mais intimista e acolhedor à mesa.
                </p>
                <ul className="mt-1 space-y-1.5 text-sm text-[#5B3A22]">
                  <li>Entradas, pratos principais e acompanhamentos no padrão Home Fest.</li>
                  <li>Serviço em ilha ou em serviço buffet.</li>
                  <li>Opções de cardápio alinhadas aos almoços e jantares Home Fest.</li>
                </ul>
              </div>

              {/* Churrasco Elegante */}
              <div className="rounded-3xl border border-[#F0DEC2] bg-[#FFFAF2] p-5 shadow-[0_14px_36px_rgba(176,140,92,0.12)] flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#B47A3F] text-xs font-semibold tracking-[0.18em] uppercase">
                  <Users className="w-4 h-4" />
                  Churrasco Elegante
                </div>
                <p className="text-sm text-[#3B2412] font-semibold">
                  Para aniversários ao ar livre, com clima descontraído e cortes selecionados.
                </p>
                <ul className="mt-1 space-y-1.5 text-sm text-[#5B3A22]">
                  <li>Carnes selecionadas, acompanhamentos completos e guarnições.</li>
                  <li>Churrasqueiro, auxiliares e equipe de salão.</li>
                  <li>Possibilidade de integrar coquetel de boas-vindas.</li>
                </ul>
              </div>

              {/* Buffet Completo */}
              <div className="rounded-3xl border border-[#F0DEC2] bg-[#FFFAF2] p-5 shadow-[0_14px_36px_rgba(176,140,92,0.12)] flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#B47A3F] text-xs font-semibold tracking-[0.18em] uppercase">
                  <CakeSlice className="w-4 h-4" />
                  Buffet Completo
                </div>
                <p className="text-sm text-[#3B2412] font-semibold">
                  Combinação de entradas, pratos principais, acompanhamentos e sobremesas.
                </p>
                <ul className="mt-1 space-y-1.5 text-sm text-[#5B3A22]">
                  <li>Opções inspiradas nos cardápios de almoço e jantar Home Fest.</li>
                  <li>Buffet montado no local com aquecedores, réchauds e apresentação elegante.</li>
                  <li>Equipe completa para atendimento durante toda a festa.</li>
                </ul>
              </div>

              {/* Drinks e coquetelaria */}
              <div className="rounded-3xl border border-[#F0DEC2] bg-[#FFFAF2] p-5 shadow-[0_14px_36px_rgba(176,140,92,0.12)] flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-[#B47A3F] text-xs font-semibold tracking-[0.18em] uppercase">
                  <GlassWater className="w-4 h-4" />
                  Drinks &amp; Coquetelaria
                </div>
                <p className="text-sm text-[#3B2412] font-semibold">
                  Opcional para aniversários que pedem uma experiência ainda mais completa.
                </p>
                <ul className="mt-1 space-y-1.5 text-sm text-[#5B3A22]">
                  <li>Drinks clássicos e autorais, com carta personalizada.</li>
                  <li>Montagem de bar, insumos e equipe especializada.</li>
                  <li>Integração com o cardápio escolhido para a festa.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INFORMAÇÕES PRÁTICAS */}
        <section className="bg-[#FFF7EC] border-t border-[#F1DFC5] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8 grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Informações práticas
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412]">
                O que está incluído no serviço de aniversário adulto.
              </h2>
              <ul className="mt-2 space-y-2.5 text-[15px] md:text-[16px] text-[#5B3A22]">
                <li className="flex items-start gap-2">
                  <Clock3 className="w-5 h-5 text-[#B47A3F] mt-0.5" />
                  <span>Duração média de serviço entre 4 e 6 horas, conforme o formato escolhido.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="w-5 h-5 text-[#B47A3F] mt-0.5" />
                  <span>Equipe completa de cozinha, montagem, atendimento e reposição.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#B47A3F] mt-0.5" />
                  <span>Atendimento em Belo Horizonte e região, em casas, prédios, sítios e empresas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-[#B47A3F] mt-0.5" />
                  <span>Montagem de buffet, louças de serviço e estrutura de apoio conforme o cardápio.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-white/90 rounded-3xl border border-[#ECD2AE] shadow-[0_18px_45px_rgba(176,140,92,0.18)] p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-serif font-semibold text-[#3B2412]">
                Como funciona o orçamento
              </h3>
              <p className="text-[15px] md:text-[16px] text-[#5B3A22] leading-relaxed">
                Ao solicitar o orçamento, alinhamos o formato de festa, o número de convidados, o local do evento
                e o estilo desejado. A partir disso, sugerimos os cardápios que melhor combinam com o seu aniversário
                adulto e enviamos a proposta detalhada.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#5B3A22] leading-relaxed">
                Também podemos adequar os cardápios oficiais Home Fest (almoço, jantar, churrasco e coquetel) para
                o seu evento, mantendo o padrão de qualidade e apresentação.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#3B2412] text-[#FFF7EC] text-sm md:text-base font-semibold px-6 py-3 shadow-[0_16px_40px_rgba(46,30,16,0.55)] hover:bg-[#2C1A0C] transition-colors"
              >
                Falar com a equipe Home Fest no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AniversarioAdultoPage;
