
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  School,
  Clock3,
  UtensilsCrossed,
  CupSoda,
  ShieldCheck,
  Sparkles,
  MapPin,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento de festa escolar com a Home Fest & Eventos em Belo Horizonte."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const FestaEscolarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF7EC] text-neutral-900 flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO FESTA ESCOLAR */}
        <section className="relative">
          <div className="relative h-[320px] md:h-[420px] lg:h-[480px] overflow-hidden">
            <picture>
              <source srcSet="/hero-festa-escolar-bh.jpg" type="image/jpeg" />
              <img
                src="/hero-festa-escolar-bh.jpg"
                alt="Decoração de festa escolar com balões coloridos em sala de aula"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 -mt-40 md:-mt-48 pb-10 md:pb-16">
            <div className="grid lg:grid-cols-[3fr,2fr] gap-10 lg:gap-14 items-center">
              <div className="flex-1">
                <div className="space-y-5 text-white bg-black/55 border border-white/15 rounded-3xl px-5 py-6 md:px-7 md:py-7 shadow-[0_18px_45px_rgba(0,0,0,.55)]">
                  <p className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
                    <School className="w-4 h-4" />
                    Festa escolar em Belo Horizonte
                  </p>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,.5)]">
                    Festa escolar rápida, organizada e acolhedora para a sua turma.
                  </h1>

                  <p className="text-sm md:text-lg text-[#FFF3D9] max-w-xl">
                    Ideal para comemorações de aniversário na escola, com tempo enxuto,
                    cardápio pensado para as crianças e serviço que não atrapalha a rotina da sala.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hf-btn hf-btn--primary hf-btn--hero inline-flex items-center justify-center gap-2 text-base"
                    >
                      <School className="w-4 h-4" />
                      Solicitar orçamento para festa escolar
                    </a>
                    <a
                      href="#cardapio"
                      className="hf-btn hf-btn--ghost inline-flex items-center justify-center gap-2 text-base"
                    >
                      <UtensilsCrossed className="w-4 h-4" />
                      Ver cardápio sugerido
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-3xl bg-[#FFF7EC]/95 border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,.35)] px-7 py-6 text-sm text-[#4A2B16] space-y-3">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                    Pensado para a rotina da escola
                  </p>
                  <p>
                    A Home Fest & Eventos leva estrutura de buffet para dentro da escola com
                    equipe treinada, montagem rápida e cardápio servido de forma organizada,
                    respeitando os horários e as regras do colégio.
                  </p>
                  <p>
                    Indicado para aniversários em sala de aula, educação infantil e primeiros anos,
                    em escolas, creches e berçários de Belo Horizonte e região.
                  </p>
                  <div className="flex flex-col gap-2 text-xs text-[#6A4628] mt-2">
                    <p className="flex items-center gap-2">
                      <Clock3 className="w-4 h-4 text-[#F3A93B]" />
                      Duração média sugerida: cerca de 1h20 de festa.
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#F3A93B]" />
                      Atendemos escolas e colégios em Belo Horizonte e região.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-[#FFF7EC] py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Como funciona a festa escolar Home Fest?
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Uma festa rápida e completa, sem bagunçar a rotina da sala.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628]">
                Nós organizamos tudo para que a comemoração aconteça dentro do tempo combinado com a escola,
                com serviço ágil, cardápio prático de servir e limpeza facilitada após o parabéns.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <Clock3 className="w-4 h-4 text-[#F3A93B]" />
                  Tempo de festa enxuto
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Festa com duração próxima de 1h20, adaptada ao intervalo ou ao período definido pela escola,
                  para não atrapalhar a rotina pedagógica da turma.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <UtensilsCrossed className="w-4 h-4 text-[#F3A93B]" />
                  Cardápio prático de servir
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Opções de salgados e doces em porções fáceis de servir para as crianças, com bebidas planejadas
                  para o horário e a faixa etária.
                </p>
              </div>

              <div className="rounded-2xl border border-[#F1DFC5] bg-white shadow-sm p-5 flex flex-col gap-2">
                <h3 className="font-semibold flex items-center gap-2 text-[#3B2412]">
                  <ShieldCheck className="w-4 h-4 text-[#F3A93B]" />
                  Organização e cuidado
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Equipe acostumada com atendimento em escolas, seguindo regras internas do colégio,
                  orientações da coordenação e normas de segurança.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CARDÁPIO SUGERIDO */}
        <section id="cardapio" className="bg-[#FFF1E0] py-16 md:py-20 border-y border-[#F1DFC5]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="mb-10 text-center md:text-left">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
                Cardápio sugerido para festa escolar
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-3">
                Cardápio pensado para a escola, com foco nas crianças.
              </h2>
              <p className="text-sm md:text-base text-[#6A4628]">
                A base do cardápio é similar ao infantil, mas adaptada para o tempo reduzido da festa,
                a praticidade de servir e as orientações do espaço escolar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Salgados */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-1">
                  <UtensilsCrossed className="w-4 h-4 text-[#F3A93B]" />
                  Salgados
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Seleção de salgados em tamanho ideal para as crianças, servidos em bandejas ao longo da comemoração.
                </p>
                <ul className="text-sm text-[#6A4628] space-y-1 list-disc list-inside">
                  <li>Coxinha</li>
                  <li>Bolinha de queijo</li>
                  <li>Mini quibe ou croquete</li>
                  <li>Mini pizza</li>
                  <li>Mini hot dog ou mini hambúrguer</li>
                </ul>
              </div>

              {/* Doces */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-1">
                  <Sparkles className="w-4 h-4 text-[#F3A93B]" />
                  Doces
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Doces clássicos de aniversário, em quantidade planejada para a turma e personalizados conforme o tema.
                </p>
                <ul className="text-sm text-[#6A4628] space-y-1 list-disc list-inside">
                  <li>Brigadeiro</li>
                  <li>Beijinho</li>
                  <li>Cajuzinho</li>
                  <li>Moranguinho</li>
                  <li>Docinhos temáticos de acordo com o tema escolhido</li>
                </ul>
              </div>

              {/* Bebidas */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 font-semibold text-[#3B2412] mb-1">
                  <CupSoda className="w-4 h-4 text-[#F3A93B]" />
                  Bebidas
                </h3>
                <p className="text-sm text-[#6A4628]">
                  Bebidas adequadas ao horário da festa e à faixa etária da turma, com opção de sucos e refrigerantes.
                </p>
                <ul className="text-sm text-[#6A4628] space-y-1 list-disc list-inside">
                  <li>Água mineral</li>
                  <li>Suco ou refresco</li>
                  <li>Refrigerantes em lata ou garrafa (normal e zero, se desejado)</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white/80 border border-[#F1DFC5] px-5 py-4 text-xs md:text-sm text-[#6A4628]">
              <p>
                A montagem do cardápio pode ser ajustada de acordo com as orientações da escola (restrições, proibição de
                alguns itens, alimentos enviados pelos pais etc.). No orçamento, alinhamos todos esses detalhes com você.
              </p>
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section className="bg-[#FFF7EC] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-[#B47A3F]">
              Próximo passo
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-[#3B2412] mb-4">
              Vamos organizar a festa escolar da sua turma com acolhimento e praticidade?
            </h2>
            <p className="text-sm md:text-base text-[#6A4628] mb-6">
              Envie os dados da escola, horário pretendido e quantidade aproximada de alunos. Nós montamos o cardápio,
              estrutura e equipe ideais para a sua realidade e enviamos o orçamento detalhado pelo WhatsApp.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hf-btn hf-btn--primary inline-flex items-center justify-center gap-2 text-base"
            >
              <School className="w-4 h-4" />
              Solicitar orçamento de festa escolar
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FestaEscolarPage;
