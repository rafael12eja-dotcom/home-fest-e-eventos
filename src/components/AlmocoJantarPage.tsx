import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  UtensilsCrossed,
  CakeSlice,
  CupSoda,
  Sparkles,
  Clock3,
  MapPin,
  Users,
  CheckCircle2,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de um orçamento para Buffet Almoço e Jantar da Home Fest & Eventos."
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
              alt="Mesa posta com pratos variados para almoço e jantar em Belo Horizonte"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-20 md:py-28 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <div className="space-y-5 text-white bg-black/55 backdrop-blur-md rounded-3xl px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,.55)]">
                <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                  <Sparkles className="w-4 h-4" />
                  Buffet Almoço e Jantar em Belo Horizonte
                </p>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.5)]">
                  Buffet Almoço e Jantar completo, com acolhimento sofisticado no seu espaço.
                </h1>

                <p className="text-sm md:text-lg text-[#FFF3D9] max-w-xl">
                  Uma combinação perfeita entre coquetel reforçado e cardápios completos Essenzia/Home Fest,
                  pensados para eventos em casa, empresas, salões de prédios, sítios e espaços de festa.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hf-btn hf-btn--primary hf-btn--hero inline-flex items-center justify-center gap-2 text-base"
                    aria-label="Solicitar orçamento de Buffet Almoço e Jantar pelo WhatsApp"
                  >
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>Solicitar orçamento</span>
                  </a>

                  <a
                    href="#coquetel"
                    className="hf-btn hf-btn--outline hf-btn--hero inline-flex items-center justify-center gap-2 text-base border-white/70 text-white hover:bg-white/10"
                  >
                    <span>Ver como funciona o cardápio</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block flex-1" aria-hidden="true" />
          </div>
        </section>

        {/* COQUETEL REFORÇADO */}
        <section
          id="coquetel"
          className="bg-[#FFF7EC] border-t border-[#F1DFC5] py-16 md:py-20"
        >
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Coquetel reforçado
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Primeiro, um coquetel reforçado completo para receber seus convidados.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                Utilizamos uma base de coquetel com{" "}
                <span className="font-semibold">12 tipos de salgados</span>,{" "}
                <span className="font-semibold">15 tipos de doces</span> e{" "}
                <span className="font-semibold">bebidas servidas à vontade</span>, ideal para
                casamentos intimistas, aniversários adultos, almoços/jantares em família e eventos corporativos.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Salgados */}
              <div className="bg-white/90 border border-[#F1DFC5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.08)] p-6 md:p-7 flex flex-col gap-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] text-lg">
                  <UtensilsCrossed className="w-5 h-5 text-[#F3A93B]" />
                  Salgados – escolha 12 tipos
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Uma seleção especial de 12 opções entre fritos, assados, frios e petit gourmet, escolhidos dentro
                  de um cardápio com mais de 60 possibilidades.
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Coxinha, bolinha de queijo, croquete de carne.</li>
                  <li>Mini quiche, canapés variados, mini sanduíches.</li>
                  <li>Opções como mini hambúrguer, mini hot dog ou mini pizza podem ser incluídas conforme o perfil do evento.</li>
                </ul>
              </div>

              {/* Doces */}
              <div className="bg-white/90 border border-[#F1DFC5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.08)] p-6 md:p-7 flex flex-col gap-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] text-lg">
                  <CakeSlice className="w-5 h-5 text-[#F3A93B]" />
                  Doces – escolha 15 tipos
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Seleção de doces clássicos e mini sobremesas em versão degustação. A base trabalha com 8 tipos,
                  mas podemos ampliar para 15 conforme o porte da festa.
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Brigadeiro, beijinho, cajuzinho, moranguinho, olho de sogra.</li>
                  <li>Mini trufas e mini tortas (limão, maracujá, morango).</li>
                  <li>Mini pudim e mini mousses (chocolate, maracujá, limão).</li>
                </ul>
                <p className="text-xs text-[#8D6745]">
                  Quantidade sugerida: cerca de <span className="font-semibold">5 unidades por pessoa</span>, ajustada conforme perfil do público.
                </p>
              </div>

              {/* Bebidas */}
              <div className="bg-white/90 border border-[#F1DFC5] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,.08)] p-6 md:p-7 flex flex-col gap-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] text-lg">
                  <CupSoda className="w-5 h-5 text-[#F3A93B]" />
                  Bebidas – servidas à vontade
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Serviço contínuo de bebidas durante todo o evento, com equipe treinada para circular entre os convidados.
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Refrigerantes: Coca-Cola comum e zero, Guaraná comum e zero.</li>
                  <li>Água mineral com e sem gás.</li>
                  <li>Sucos de laranja, abacaxi e maracujá.</li>
                </ul>
                <p className="text-xs text-[#8D6745]">
                  Bebidas alcoólicas podem ser levadas pelo cliente, sem taxa de rolha. Opções como gelo, vinho, gin e whisky
                  podem ser orçadas à parte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDÁPIOS COMPLETOS DE ALMOÇO E JANTAR */}
        <section className="bg-[#FBF0DD] border-y border-[#F1DFC5] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Cardápios de almoço e jantar
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Quatro sugestões de cardápio Essenzia/Home Fest para compor seu evento.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628] max-w-3xl">
                A partir do coquetel reforçado, você escolhe um dos cardápios completos abaixo para estruturar o almoço
                ou o jantar, sempre com possibilidade de ajustes conforme o perfil do evento.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Cardápio 1 */}
              <div className="bg-white/95 border border-[#F1DFC5] rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,.06)] p-6 md:p-7 space-y-3">
                <h3 className="font-serif text-xl text-[#3B2412]">
                  ️Cardápio 1 – Tradicional Elegante
                </h3>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Arroz branco.</li>
                  <li>Arroz com alho e brócolis.</li>
                  <li>Lombo ao molho de ervas finas.</li>
                  <li>Coq au Vin (peito de frango ao vinho com champignon).</li>
                  <li>Banana à moda holandesa.</li>
                  <li>Batata palha.</li>
                </ul>
                <p className="text-sm text-[#6A4628]">
                  <span className="font-semibold">Salada Especial:</span> 3 tipos de alface, rúcula, abacaxi, tomate seco,
                  castanha e molho cremoso de queijo.
                </p>
              </div>

              {/* Cardápio 2 */}
              <div className="bg-white/95 border border-[#F1DFC5] rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,.06)] p-6 md:p-7 space-y-3">
                <h3 className="font-serif text-xl text-[#3B2412]">
                  ️Cardápio 2 – Tropical Gourmet
                </h3>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Arroz branco.</li>
                  <li>Arroz com ervas e passas ou arroz com alho e brócolis.</li>
                  <li>Medalhão de frango ao molho de maracujá.</li>
                  <li>Filé fatiado ao molho madeira.</li>
                  <li>Penne ao molho quatro queijos.</li>
                </ul>
                <p className="text-sm text-[#6A4628]">
                  <span className="font-semibold">Salada Tropical:</span> 3 tipos de alface, rúcula, kani, manga ou abacaxi,
                  nozes e molho de shoyu e mel.
                </p>
              </div>

              {/* Cardápio 3 */}
              <div className="bg-white/95 border border-[#F1DFC5] rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,.06)] p-6 md:p-7 space-y-3">
                <h3 className="font-serif text-xl text-[#3B2412]">
                  ️Cardápio 3 – Gourmet Essencial
                </h3>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Arroz branco.</li>
                  <li>Arroz com amêndoas ou arroz com alho e brócolis.</li>
                  <li>Medalhão de filé.</li>
                  <li>Coq au Vin (peito de frango ao vinho com champignon).</li>
                  <li>Rondelli de espinafre.</li>
                </ul>
                <p className="text-sm text-[#6A4628]">
                  <span className="font-semibold">Salada Gourmet:</span> 3 tipos de alface, rúcula, figo em calda, damasco,
                  nozes e molho de queijo.
                </p>
              </div>

              {/* Cardápio 4 */}
              <div className="bg-white/95 border border-[#F1DFC5] rounded-3xl shadow-[0_18px_48px_rgba(0,0,0,.06)] p-6 md:p-7 space-y-3">
                <h3 className="font-serif text-xl text-[#3B2412]">
                  ️Cardápio 4 – Mediterrâneo Premium
                </h3>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Arroz branco.</li>
                  <li>Arroz com castanhas ou arroz com alho e brócolis.</li>
                  <li>Frango à Indiana (iscas de frango ao molho cremoso de curry com aspargos).</li>
                  <li>Filé fatiado ao molho funghi.</li>
                  <li>Penne ao molho napolitano.</li>
                </ul>
                <p className="text-sm text-[#6A4628]">
                  <span className="font-semibold">Salada Mediterrânea:</span> 3 tipos de alface, rúcula, abacaxi,
                  tomate seco, castanha e molho cremoso de queijo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-[#FFF7EC] py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start">
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                  Como funciona o Buffet Almoço e Jantar
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-1">
                  Gastronomia completa, equipe presente e clima de casa – em qualquer espaço.
                </h2>
                <p className="text-sm md:text-base text-[#6A4628]">
                  A Home Fest &amp; Eventos leva a estrutura de buffet até você: seja na sua casa, no salão do prédio,
                  na empresa, sítio, chácara ou espaço de eventos. Cuidamos do cardápio, da equipe e da apresentação
                  para que você possa aproveitar o encontro com os convidados.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-2xl bg-white border border-[#F1DFC5] p-4 space-y-1">
                    <div className="flex items-center gap-2 text-[#3B2412]">
                      <Clock3 className="w-4 h-4 text-[#F3A93B]" />
                      <h3 className="font-semibold text-sm">Tempo de evento</h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#6A4628]">
                      Definimos juntos o melhor formato de duração: somente almoço/jantar, coquetel + refeição,
                      recepção prolongada ou eventos em etapas.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F1DFC5] p-4 space-y-1">
                    <div className="flex items-center gap-2 text-[#3B2412]">
                      <Users className="w-4 h-4 text-[#F3A93B]" />
                      <h3 className="font-semibold text-sm">Equipe completa</h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#6A4628]">
                      Montamos a equipe conforme o porte do evento: cozinheira, auxiliares, garçons, copeira
                      e coordenação geral, quando necessário.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F1DFC5] p-4 space-y-1">
                    <div className="flex items-center gap-2 text-[#3B2412]">
                      <MapPin className="w-4 h-4 text-[#F3A93B]" />
                      <h3 className="font-semibold text-sm">Onde atendemos</h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#6A4628]">
                      Atendemos Belo Horizonte e região metropolitana, em casas, salões de prédios, empresas,
                      sítios e espaços locados.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white border border-[#F1DFC5] p-4 space-y-1">
                    <div className="flex items-center gap-2 text-[#3B2412]">
                      <CheckCircle2 className="w-4 h-4 text-[#F3A93B]" />
                      <h3 className="font-semibold text-sm">Personalização</h3>
                    </div>
                    <p className="text-xs md:text-sm text-[#6A4628]">
                      Adaptamos o cardápio às necessidades do seu evento: restrições alimentares, preferências de proteínas,
                      estilo mais informal ou mais clássico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#F1DFC5] rounded-3xl shadow-[0_22px_55px_rgba(0,0,0,.08)] p-6 md:p-7 space-y-4">
                <h3 className="font-serif text-xl text-[#3B2412]">
                  Como orçar seu Buffet Almoço e Jantar
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Para um orçamento assertivo, você pode enviar pelo WhatsApp:
                </p>
                <ul className="list-disc list-inside text-sm text-[#5B3B22] space-y-1">
                  <li>Data e horário do evento.</li>
                  <li>Local (bairro/cidade e tipo de espaço).</li>
                  <li>Quantidade aproximada de convidados (adultos e crianças).</li>
                  <li>Se prefere foco em almoço, jantar ou formato híbrido.</li>
                  <li>Se haverá bebidas alcoólicas e se o cliente levará ou deseja orçamento à parte.</li>
                </ul>
                <p className="text-sm text-[#6A4628]">
                  A partir dessas informações, montamos uma proposta personalizada com a combinação ideal de coquetel,
                  cardápio de almoço ou jantar e estrutura de serviço.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hf-btn hf-btn--primary w-full mt-2 inline-flex items-center justify-center gap-2"
                  aria-label="Solicitar orçamento de Buffet Almoço e Jantar"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>Solicitar orçamento para Buffet Almoço e Jantar</span>
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

export default AlmocoJantarPage;
