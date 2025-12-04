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
            <picture>
              <source srcSet="/hero/buffet-casamento-bh-home-fest-eventos.webp" type="image/webp" />
              <img
                src="/hero/buffet-casamento-bh-home-fest-eventos.jpg"
                alt="Buffet para casamento em BH – Home Fest & Eventos"
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
                  Casamento em Belo Horizonte
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.5)] text-white">
                  Buffet para Casamento em BH com experiência completa no seu espaço.
                </h1>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  Casamento com clima de casa, gastronomia autoral e serviço completo no seu espaço.
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
