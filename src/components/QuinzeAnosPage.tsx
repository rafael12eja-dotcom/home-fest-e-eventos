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
  "Olá! Gostaria de solicitar um orçamento para festa de 15 anos com a Home Fest & Eventos em Belo Horizonte."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const QuinzeAnosPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-white flex flex-col">
      <Header />

      <main className="flex-1 pt-28">

        {/* HERO 15 ANOS */}
        <section id="topo" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-festa-15-anos-bh.jpg"
              alt="Festa de 15 anos em Belo Horizonte com debutante, flores e mesa de doces decorada"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <div className="space-y-5 text-white bg-black/55 backdrop-blur-sm rounded-3xl border border-white/10 px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,.55)]">
                <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                  <Sparkles className="w-4 h-4" />
                  Festa de 15 anos em Belo Horizonte
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.55)] text-white">
                  Uma festa de 15 anos completa, sofisticada e acolhedora, com clima de casa e estrutura de buffet.
                </h1>

                <p className="text-sm md:text-lg text-[#FFEBD1] max-w-xl">
                  Da recepção ao jantar, a Home Fest & Eventos cuida de tudo: coquetel, estações gourmet, jantar Home Fest,
                  doces finos e serviço completo, para que você e sua família possam viver cada momento com tranquilidade.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1.5">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hf-btn hf-btn--primary hf-btn--hero inline-flex items-center justify-center gap-2 text-sm md:text-base"
                    aria-label="Solicitar orçamento para festa de 15 anos com a Home Fest & Eventos em Belo Horizonte"
                  >
                    <span>Solicitar orçamento para 15 anos</span>
                  </a>

                  <p className="text-xs md:text-sm text-[#FFE0BB] max-w-xs">
                    Atendemos festas de 15 anos em casas, salões de prédio, espaços de eventos e sítios em Belo Horizonte e região.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block flex-1" aria-hidden="true" />
          </div>
        </section>

        {/* DESTAQUES DO PACOTE */}
        <section className="bg-[#FFF8F0] border-b border-[#F1DFC5] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Experiência completa
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Tudo o que uma festa de 15 anos precisa para ser inesquecível.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                Construímos o projeto do evento junto com a família, unindo cardápios completos a um serviço acolhedor
                e organizado, com foco na experiência da debutante e dos convidados.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white border border-[#F1DFC5] rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,.05)] p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#3B2412]">
                  <Sparkles className="w-5 h-5 text-[#F3A93B]" />
                  <h3 className="font-semibold text-lg">Entrada, valsa e momentos especiais</h3>
                </div>
                <p className="text-sm text-[#6A4628]">
                  Organizamos os horários de coquetel, jantar e serviço para que as entradas, homenagens e momentos de pista aconteçam com fluidez.
                </p>
              </div>

              <div className="bg-white border border-[#F1DFC5] rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,.05)] p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#3B2412]">
                  <Users className="w-5 h-5 text-[#F3A93B]" />
                  <h3 className="font-semibold text-lg">Equipe completa e serviço contínuo</h3>
                </div>
                <p className="text-sm text-[#6A4628]">
                  Montamos a estrutura de equipe (cozinha, garçons, copeiras e coordenação) de acordo com o porte da sua festa,
                  garantindo serviço fluido do começo ao fim.
                </p>
              </div>

              <div className="bg-white border border-[#F1DFC5] rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,.05)] p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#3B2412]">
                  <Star className="w-5 h-5 text-[#F3A93B]" />
                  <h3 className="font-semibold text-lg">Cardápios personalizados</h3>
                </div>
                <p className="text-sm text-[#6A4628]">
                  Partimos dos cardápios oficiais Home Fest e fazemos ajustes finos conforme o gosto da debutante,
                  da família e do perfil de convidados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COQUETEL INICIAL */}
        <section className="bg-[#FFF7EC] border-y border-[#F1DFC5] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Coquetel de boas-vindas
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Coquetel reforçado para receber bem os convidados.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                Usamos a mesma base de coquetel dos eventos Home Fest, com variedade de salgados, doces e bebidas,
                adaptando a quantidade conforme a duração e o horário da festa de 15 anos.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white/90 border border-[#F1DFC5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.05)] p-6 md:p-7 flex flex-col gap-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] text-lg">
                  <UtensilsCrossed className="w-5 h-5 text-[#F3A93B]" />
                  Salgados
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Seleção com aproximadamente 12 tipos de salgados, podendo incluir:
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Coxinha, bolinha de queijo, croquete, quibe.</li>
                  <li>Mini pastéis, folhados, mini pizza e mini hambúrguer.</li>
                  <li>Opções assadas e fritas, sempre com renovação de bandejas.</li>
                </ul>
              </div>

              <div className="bg-white/90 border border-[#F1DFC5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.05)] p-6 md:p-7 flex flex-col gap-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] text-lg">
                  <CakeSlice className="w-5 h-5 text-[#F3A93B]" />
                  Doces e mesa de doces
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Estrutura de doces inspirada nos casamentos e eventos Home Fest, com:
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Seleção com 28 tipos de doces disponíveis, em que o cliente escolhe 7 sabores + 1 tipo de bombom.</li>
                  <li>Docinhos tradicionais (brigadeiro, beijinho, cajuzinho, moranguinho).</li>
                  <li>Doces especiais como camafeu, olho de sogra, trufas e bombons variados.</li>
                  <li>Montagem de mesa de doces com suporte para bolo e decoração parceira.</li>
                </ul>
              </div>

              <div className="bg-white/90 border border-[#F1DFC5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.05)] p-6 md:p-7 flex flex-col gap-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] text-lg">
                  <CupSoda className="w-5 h-5 text-[#F3A93B]" />
                  Bebidas não alcoólicas
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Serviço contínuo de bebidas, com equipe circulando pelo salão:
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Refrigerantes (tradicionais e zero).</li>
                  <li>Água mineral com e sem gás.</li>
                  <li>Sucos como laranja, abacaxi e maracujá.</li>
                </ul>
                <p className="text-xs text-[#8D6745]">
                  Bebidas alcoólicas podem ser levadas pela família, sem taxa de rolha. Montamos pontos de bar e taças conforme o projeto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JANTAR ESSENZIA / ESTAÇÕES */}
        <section className="bg-[#FBF0DD] border-b border-[#F1DFC5] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Jantar Home Fest & estações gourmet
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Cardápios Home Fest adaptados para o formato da festa de 15 anos.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                Trabalhamos com os cardápios oficiais de almoço e jantar Home Fest (Cardápios 1, 2, 3 e 4),
                ajustando o serviço para que o jantar aconteça no momento ideal da festa.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/95 border border-[#F1DFC5] shadow-[0_18px_48px_rgba(0,0,0,.06)] p-6 md:p-7 space-y-3">
                  <h3 className="font-serif text-xl text-[#3B2412]">
                    Jantar completo – quatro opções de cardápio
                  </h3>
                  <p className="text-sm text-[#6A4628]">
                    Você pode escolher entre os Cardápios 1, 2, 3 ou 4, que combinam:
                  </p>
                  <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                    <li>Dois tipos de arroz (branco, com alho e brócolis, com amêndoas ou castanhas).</li>
                    <li>Duas proteínas principais (como medalhão de filé, lombo, frango ao molho especial ou Coq au Vin).</li>
                    <li>Uma massa (penne, rondelli ou outra opção conforme o cardápio escolhido).</li>
                    <li>Saladas premium com folhas variadas, frutas, castanhas e molhos especiais.</li>
                  </ul>
                  <p className="text-xs text-[#8D6745]">
                    Os detalhes completos de cada cardápio são apresentados no momento do orçamento,
                    para que possamos montar a melhor combinação para o seu evento.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-white border border-[#F1DFC5] p-5 space-y-2">
                    <h3 className="font-semibold text-[#3B2412] text-sm">
                      Estações gourmet opcionais
                    </h3>
                    <p className="text-xs md:text-sm text-[#6A4628]">
                      Estações como mini-hambúrguer, massas, risotos ou mesas de antepastos podem ser adicionadas conforme o perfil da festa.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white border border-[#F1DFC5] p-5 space-y-2">
                    <h3 className="font-semibold text-[#3B2412] text-sm">
                      Late night / lanchinho da madrugada
                    </h3>
                    <p className="text-xs md:text-sm text-[#6A4628]">
                      Para festas mais longas, incluímos opções de lanchinhos finais (como mini-sanduíches ou caldos),
                      garantindo conforto até o encerramento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-[#3B2412] text-[#FFEBD1] p-6 md:p-7 space-y-4 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
                <h3 className="font-serif text-xl text-[#FFEBD1]">
                  Informações práticas
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Clock3 className="w-4 h-4 mt-0.5 text-[#F3A93B]" />
                    <p>
                      <span className="font-semibold">Duração média:</span> a partir de 5 horas de evento,
                      com ajustes conforme cerimônias, valsa e balada.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-0.5 text-[#F3A93B]" />
                    <p>
                      <span className="font-semibold">Equipe:</span> montamos o time conforme o número de convidados,
                      incluindo cozinha, auxiliares, garçons, copeira e coordenação geral.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-[#F3A93B]" />
                    <p>
                      <span className="font-semibold">Onde atendemos:</span> Belo Horizonte e região metropolitana,
                      em casas, salões de prédio, sítios e espaços de eventos.
                    </p>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto gap-2 rounded-full bg-[#D4AF37] text-[#3B2412] font-semibold text-sm md:text-base px-6 py-3 shadow-[0_12px_32px_rgba(0,0,0,.35)] hover:opacity-95 transition"
                    aria-label="Conversar pelo WhatsApp sobre festa de 15 anos com a Home Fest & Eventos"
                  >
                    <span>Falar com a equipe sobre 15 anos</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-[#FFF8F0] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
              Home Fest & Eventos
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
              Vamos desenhar juntos a festa de 15 anos dos sonhos, com acolhimento sofisticado e cardápio completo.
            </h2>
            <p className="text-sm md:text-base text-[#6A4628] max-w-3xl mx-auto mb-6">
              Conte para a gente o número de convidados, o local do evento e o que você imagina para esse dia.
              A partir daí, montamos uma proposta personalizada, alinhando cardápio, serviço e orçamento.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hf-btn hf-btn--primary inline-flex items-center justify-center gap-2 text-sm md:text-base"
                aria-label="Solicitar orçamento personalizado para festa de 15 anos com a Home Fest & Eventos"
              >
                <span>Solicitar orçamento de 15 anos</span>
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center text-xs md:text-sm font-medium text-[#6A4628] hover:text-[#3B2412] underline-offset-4 hover:underline"
              >
                Voltar para a página inicial
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QuinzeAnosPage;
