import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Baby,
  PartyPopper,
  Sparkles,
  ShieldCheck,
  UtensilsCrossed,
  CupSoda,
  Clock3,
  MapPin,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá, gostaria de um orçamento para buffet infantil em casa em BH. Data aproximada: __ / Número de convidados: __ / Bairro: __."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const BuffetInfantilPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0] text-neutral-900 flex flex-col">
      <Header />

      <main className="pt-28 md:pt-32 lg:pt-40 pb-20">
        {/* HERO */}
        <section className="border-b border-hf-gold/15 bg-gradient-to-b from-hf-cream/90 to-[#FFF8F0]">
          <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 space-y-5">
              <p className="text-xs font-semibold tracking-[0.28em] uppercase text-hf-gold">
                Buffet infantil em casa em Belo Horizonte
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-hf-brown leading-tight">
                Buffet infantil em casa com estrutura completa e clima de aconchego
              </h1>
              <p className="text-[15px] md:text-base text-hf-brown/80 max-w-xl leading-relaxed">
                A Home Fest &amp; Eventos leva o buffet até a sua casa, salão do prédio ou espaço de convivência
                em Belo Horizonte e região, com cardápio à vontade, equipe completa e uma operação pensada para
                espaços reais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm md:text-base font-semibold bg-hf-gold text-white shadow-[0_14px_40px_rgba(180,122,63,0.45)] hover:shadow-[0_18px_52px_rgba(180,122,63,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="Solicitar orçamento para buffet infantil em casa"
                >
                  <Baby className="w-5 h-5" />
                  <span>Quero um orçamento</span>
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-[15px] font-semibold border border-hf-gold/60 text-hf-brown hover:bg-hf-cream/60 transition-colors"
                >
                  <span>Entenda como funciona</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 text-[12px] text-hf-brown/75">
                <div className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-hf-vibrant-green" />
                  <span>Equipe especializada em festas infantis</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <UtensilsCrossed className="w-4 h-4 text-hf-gold" />
                  <span>Cardápio à vontade para crianças e adultos</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-hf-gold" />
                  <span>Atendimento em BH e região</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-hf-gold/15 via-hf-bright-yellow/10 to-hf-vibrant-green/15 blur-xl" />
                <div className="relative rounded-[32px] bg-white/90 border border-hf-gold/20 shadow-[0_22px_80px_rgba(0,0,0,0.12)] overflow-hidden p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-hf-gold/10 flex items-center justify-center">
                      <PartyPopper className="w-5 h-5 text-hf-gold" />
                    </div>
                    <div>
                      <p className="text-[12px] font-semibold tracking-[0.22em] uppercase text-hf-gold">
                        Festa infantil em casa
                      </p>
                      <p className="text-sm text-hf-brown/80">
                        Acolhimento de casa, operação de buffet profissional.
                      </p>
                    </div>
                  </div>

                  <div className="aspect-video rounded-3xl bg-[url('/infantil.webp')] bg-cover bg-center" />

                  <ul className="space-y-2 text-[13px] text-hf-brown/80">
                    <li className="flex gap-2">
                      <span className="text-hf-vibrant-green font-bold">•</span>
                      <span>Cardápio pensado para crianças, pais, avós e convidados especiais.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-hf-vibrant-green font-bold">•</span>
                      <span>Montagem adaptada ao seu espaço: casa, apartamento ou salão.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-hf-vibrant-green font-bold">•</span>
                      <span>Você aproveita a festa, a equipe Home Fest cuida do buffet.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE É */}
        <section
          id="sobre"
          className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-10 md:pb-14 space-y-6"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown mb-3">
              O que é um buffet infantil em casa com a Home Fest &amp; Eventos
            </h2>
            <p className="text-[15px] md:text-base text-hf-brown/85 leading-relaxed">
              Fazer a festa de aniversário em casa é o sonho de muitas famílias, mas a parte da cozinha,
              da louça e da organização costuma virar um problema. O buffet infantil em casa da Home Fest &amp;
              Eventos nasce justamente para resolver isso: nós levamos toda a estrutura de buffet até a sua
              residência, salão do prédio ou espaço de convivência, com cardápio infantil e adulto,
              equipe completa e serviço contínuo.
            </p>
            <p className="mt-3 text-[15px] md:text-base text-hf-brown/85 leading-relaxed">
              Você recebe em casa, com a sua decoração, o seu clima e o carinho da sua família, enquanto
              nossa equipe cuida de tudo o que envolve comida, bebida e atendimento aos convidados.
            </p>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section
          id="como-funciona"
          className="bg-white/70 border-y border-hf-gold/10"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
                Como funciona o buffet infantil em casa na prática
              </h2>
              <p className="text-[15px] md:text-base text-hf-brown/85 leading-relaxed">
                Cada festa é planejada de forma personalizada, mas o funcionamento segue um fluxo organizado
                para que você tenha segurança do começo ao fim:
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-hf-gold" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-hf-brown">
                      1. Briefing e definição do formato
                    </h3>
                    <p className="text-[14px] text-hf-brown/80 leading-relaxed">
                      Alinhamos data, horário, número de convidados (adultos e crianças), faixa etária,
                      restrições alimentares e o estilo da festa. A partir disso, indicamos o cardápio ideal
                      e a estrutura necessária.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-hf-gold" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-hf-brown">
                      2. Estudo do espaço
                    </h3>
                    <p className="text-[14px] text-hf-brown/80 leading-relaxed">
                      Você nos envia fotos e medidas aproximadas do local, e nossa equipe orienta a melhor
                      disposição para mesa de buffet, circulação de convidados e área das crianças.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                    <Clock3 className="w-4 h-4 text-hf-gold" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-hf-brown">
                      3. Preparação e chegada da equipe
                    </h3>
                    <p className="text-[14px] text-hf-brown/80 leading-relaxed">
                      No dia da festa, a equipe chega com antecedência para organizar cozinha, equipamentos,
                      montagem das ilhas ou mesas de serviço e apoio ao fluxo de convidados.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                    <UtensilsCrossed className="w-4 h-4 text-hf-gold" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-hf-brown">
                      4. Serviço durante todo o evento
                    </h3>
                    <p className="text-[14px] text-hf-brown/80 leading-relaxed">
                      Durante a festa, nossa equipe cuida da reposição do buffet, saída dos salgados,
                      finalização dos pratos, reposição das bebidas e atendimento aos convidados.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-hf-gold" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-hf-brown">
                      5. Encerramento e organização final
                    </h3>
                    <p className="text-[14px] text-hf-brown/80 leading-relaxed">
                      Ao final do evento, finalizamos o serviço, organizamos a área do buffet e deixamos o
                      ambiente pronto para você encerrar a festa com tranquilidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-hf-cream/70 border border-hf-gold/15 p-6 md:p-7 space-y-5">
              <h3 className="text-[15px] font-semibold tracking-[0.22em] uppercase text-hf-gold">
                Informação prática
              </h3>
              <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
                Cada festa infantil em casa é estruturada pensando no seu espaço e no conforto dos convidados.
                Trabalhamos com horários claros de chegada, montagem, serviço e encerramento, para você saber
                exatamente como será o dia da festa.
              </p>
              <div className="flex flex-wrap gap-3 text-[13px] text-hf-brown/80">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-hf-gold/20">
                  <Clock3 className="w-4 h-4 text-hf-gold" />
                  <span>Chegada com antecedência programada</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-hf-gold/20">
                  <Sparkles className="w-4 h-4 text-hf-gold" />
                  <span>Equipe discreta e organizada</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE ESTÁ INCLUSO */}
        <section
          id="incluso"
          className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
              O que está incluso no buffet infantil em casa
            </h2>
            <p className="text-[15px] md:text-base text-hf-brown/85 leading-relaxed">
              O formato pode variar conforme o cardápio escolhido, mas, de forma geral, o buffet infantil em casa
              com a Home Fest &amp; Eventos inclui:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Buffet salgado
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Cardápio com variedade de salgados pensados para crianças e adultos, com serviço à vontade e
                reposição contínua durante o evento.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Doces
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Seleção de doces clássicos de aniversário infantil, com possibilidade de personalização conforme
                o tema e as preferências da família.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <CupSoda className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Bebidas
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Opções de bebidas não alcoólicas, com serviço contínuo de refrigerantes, sucos e água, de acordo
                com o formato contratado.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Equipe e equipamentos de buffet
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Equipe de cozinha e atendimento, além de equipamentos necessários para aquecimento, fritura e
                montagem do serviço de buffet em casa.
              </p>
            </div>
          </div>
        </section>

        {/* VANTAGENS */}
        <section
          id="vantagens"
          className="bg-hf-cream/70 border-y border-hf-gold/10"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1.1fr,0.9fr] gap-10 md:gap-14 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
                Por que escolher a festa infantil em casa com buffet profissional
              </h2>
              <p className="text-[15px] md:text-base text-hf-brown/85 leading-relaxed">
                A festa infantil em casa com a Home Fest une o melhor dos dois mundos: o aconchego do seu espaço
                com a segurança de um buffet profissional.
              </p>

              <ul className="space-y-3 text-[14px] text-hf-brown/85 leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>
                    <strong>Conforto para as crianças</strong> – elas brincam em um ambiente conhecido,
                    com acesso fácil a brinquedos, quarto e área de lazer.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>
                    <strong>Proximidade da família</strong> – avós, padrinhos e convidados especiais vivem a festa
                    em um clima mais intimista e acolhedor.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>
                    <strong>Operação profissional</strong> – a equipe Home Fest cuida de forno, fogão, fritura,
                    reposição de mesa e atendimento; você aproveita a festa.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>
                    <strong>Cardápio pensado para todos</strong> – montamos o cardápio considerando crianças,
                    adultos e possíveis restrições alimentares.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>
                    <strong>Melhor aproveitamento do tempo</strong> – sem deslocamentos longos e sem levar e buscar
                    utensílios em buffet tradicional.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 md:p-7 space-y-4">
              <h3 className="text-[15px] font-semibold tracking-[0.22em] uppercase text-hf-gold">
                Clima de casa com resultado profissional
              </h3>
              <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
                A proposta da Home Fest &amp; Eventos é que você sinta que está recebendo amigos e familiares na
                sua casa, mas com todo o conforto e a segurança de ter um time experiente conduzindo o buffet.
              </p>
              <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
                Nosso foco é que você viva a festa, e não os bastidores da cozinha.
              </p>
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section
          id="para-quem-e"
          className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
              Para quem o buffet infantil em casa é ideal
            </h2>
            <p className="text-[15px] md:text-base text-hf-brown/85 leading-relaxed">
              O buffet infantil em casa é ideal para famílias que:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <ul className="space-y-3 text-[14px] text-hf-brown/85 leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>Valorizam a sensação de receber em casa, mas não querem se preocupar com a cozinha.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>Desejam uma festa mais intimista, com convidados realmente próximos.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>Preferem um ambiente conhecido para crianças pequenas.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>Buscam um serviço profissional que se adapte ao espaço que já possuem.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-hf-cream/80 border border-hf-gold/20 p-6 space-y-3">
              <h3 className="text-lg font-semibold text-hf-brown">
                E quando esse formato não é o mais indicado?
              </h3>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Em alguns casos, um salão infantil tradicional ou um espaço de eventos pode fazer mais sentido,
                por exemplo, quando:
              </p>
              <ul className="space-y-3 text-[14px] text-hf-brown/85 leading-relaxed">
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>O número de convidados é muito superior à capacidade do imóvel.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>A festa exige brinquedos de grande porte que dependem de pé-direito e área específica.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 text-hf-vibrant-green font-bold">•</span>
                  <span>O condomínio tem restrições muito rígidas de horário e circulação.</span>
                </li>
              </ul>
              <p className="mt-3 text-[14px] text-hf-brown/85 leading-relaxed">
                Em caso de dúvida, nossa equipe orienta com clareza, sempre com foco em segurança e conforto.
              </p>
            </div>
          </div>
        </section>

        {/* DEPOIMENTO */}
        <section
          id="depoimento"
          className="bg-[#FDF4E7] border-y border-hf-gold/10"
        >
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-hf-gold" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
                  Um exemplo real de festa infantil em casa
                </h2>
                <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
                  “Fizemos o aniversário de 5 anos da nossa filha no salão do prédio e foi a primeira vez que
                  não terminamos a festa exaustos. O buffet ficou por conta da Home Fest &amp; Eventos, que trouxe
                  tudo pronto, organizou a cozinha e atendeu todo mundo com muita educação. As crianças comeram super
                  bem e os adultos elogiaram demais o cardápio. Já não pensamos mais em outro formato.”
                </p>
                <p className="text-[13px] font-semibold text-hf-brown/75">
                  — Família Silva, festa infantil em casa em Belo Horizonte
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
              Dúvidas frequentes sobre o buffet infantil em casa
            </h2>
            <p className="text-[15px] md:text-base text-hf-brown/85 leading-relaxed">
              Se ainda ficou alguma dúvida, estas são algumas das perguntas que mais recebemos no dia a dia:
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Quantos convidados vocês atendem em festa infantil em casa?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Isso depende muito do espaço disponível. Em geral, trabalhamos com uma estimativa baseada na metragem,
                layout e áreas que podem ser usadas (sala, varanda, salão do prédio, área externa). No primeiro contato,
                nossa equipe orienta o limite recomendado com base nas suas informações.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Vocês levam todos os utensílios ou preciso emprestar algo?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                A parte de buffet, preparo e serviço é de responsabilidade da Home Fest. Em alguns formatos,
                podemos aproveitar itens da casa se você desejar, mas isso não é obrigatório. Tudo é combinado na
                proposta para ficar claro desde o início.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Quanto tempo antes da festa a equipe chega?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Normalmente chegamos com antecedência suficiente para preparar cozinha, equipamentos e montagem,
                variando conforme o cardápio e o tamanho do evento. Esse horário é detalhado no momento da contratação.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Vocês atendem somente em Belo Horizonte?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Atendemos Belo Horizonte e região, avaliando sempre distância, logística e viabilidade de equipe.
                Informe seu bairro ou cidade no primeiro contato para confirmarmos a disponibilidade.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Posso adaptar o cardápio para alergias ou restrições alimentares?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Sim. Conseguimos ajustar itens para convidados com restrições específicas, dentro das possibilidades
                técnicas e de segurança alimentar. É importante informar essas necessidades já no briefing inicial.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section
          id="contato"
          className="bg-gradient-to-br from-hf-brown via-hf-brown/95 to-[#2B1A10] text-white"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-10 items-center">
            <div className="flex-1 space-y-4">
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-hf-gold/80">
                Próximo passo
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                Pronto para planejar a sua festa infantil em casa?
              </h2>
              <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed max-w-xl">
                Se você quer um buffet infantil em casa com cardápio completo, equipe profissional e a essência
                acolhedora da Home Fest &amp; Eventos, envie uma mensagem agora e conte um pouco sobre a festa
                que está imaginando.
              </p>
            </div>

            <div className="flex-1 flex flex-col items-start md:items-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm md:text-base font-semibold bg-hf-gold text-hf-brown shadow-[0_18px_60px_rgba(180,122,63,0.7)] hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Falar com a Home Fest & Eventos no WhatsApp"
              >
                <Baby className="w-5 h-5" />
                <span>Quero um orçamento para festa infantil em casa</span>
              </a>
              <p className="text-[12px] text-white/75">
                Você pode enviar data aproximada, número de convidados e bairro. Nossa equipe responde com
                orientação e proposta personalizada.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BuffetInfantilPage;
