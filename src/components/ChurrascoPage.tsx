import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Flame,
  UtensilsCrossed,
  ShieldCheck,
  Clock3,
  Users,
  Sparkles,
} from "lucide-react";

const whatsappNumber = "5531999186245";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento de churrasco em domicílio com a Home Fest & Eventos em Belo Horizonte. Data aproximada: __ / Número de convidados: __ / Bairro: __."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const ChurrascoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-hf-cream text-hf-brown flex flex-col">
      <Header />

      <main className="flex-1 pt-28 md:pt-32 lg:pt-40 pb-20">
        {/* HERO */}
        <section
          id="topo"
          className="border-b border-hf-gold/15 bg-gradient-to-b from-[#2A1A10] via-[#3A2314] to-[#FDF4E7]"
        >
          <div className="max-w-6xl mx-auto px-6 py-10 md:py-14 lg:py-16 grid md:grid-cols-[1.2fr,0.9fr] gap-10 md:gap-12 items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-hf-gold/80">
                Churrasco em domicílio · Belo Horizonte e região
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                Churrasco em domicílio com experiência premium Home Fest
              </h1>
              <p className="text-[14px] md:text-base text-[#FCEEDC] max-w-xl leading-relaxed">
                A Home Fest &amp; Eventos leva para sua casa, apartamento, salão de festas ou sítio um churrasco
                completo com cortes selecionados, acompanhamentos e equipe profissional para que você aproveite a festa
                do início ao fim.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F3A93B] px-6 py-3 text-sm md:text-base font-semibold text-[#1F1209] shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:bg-[#FFBE55] hover:-translate-y-0.5 transition-all duration-300"
                  aria-label="Solicitar orçamento para churrasco em domicílio em BH"
                >
                  <Flame className="w-5 h-5" />
                  <span>Quero orçamento de churrasco</span>
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FAD7A2]/60 px-5 py-2.5 text-[13px] md:text-sm font-medium text-[#FCEEDC] bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span>Entenda como funciona</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 text-[12px] text-[#FDE9CB]/90">
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFDC80]" />
                  Carnes selecionadas e serviço de buffet
                </span>
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFDC80]" />
                  Equipe experiente em eventos
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 className="w-3.5 h-3.5 text-[#FFDC80]" />
                  Atendimento médio de 4 a 5 horas
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#F4D3A3]/60 shadow-[0_24px_60px_rgba(0,0,0,0.55)] bg-black/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#F8D19B22,transparent_55%)]" />
                <img
                  src="/hero-buffet-churrasco-bh.jpg"
                  alt="Churrasqueiro preparando carnes em domicílio em Belo Horizonte"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 md:-bottom-6 md:-right-4 rounded-2xl bg-black/75 border border-[#FAD7A2]/40 px-4 py-3 text-[11px] md:text-xs text-[#FFE7C3] shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
                <p className="font-semibold">Churrasco completo em casa</p>
                <p>Você recebe, a Home Fest cuida de todo o buffet.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE É */}
        <section
          id="sobre"
          className="max-w-6xl mx-auto px-6 pt-12 md:pt-14 pb-10 md:pb-14 space-y-6"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
              O churrasco perfeito para sua festa em casa
            </h2>
            <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
              O churrasco em domicílio da Home Fest &amp; Eventos foi pensado para quem deseja receber bem sem
              assumir a responsabilidade de preparar, servir e organizar tudo sozinho. Nós levamos o buffet completo
              até você, em Belo Horizonte e região, com cortes selecionados, acompanhamentos e equipe de atendimento.
            </p>
            <p className="text-[14px] md:text-[15px] text-hf-brown/80 leading-relaxed">
              É uma solução ideal para aniversários, encontros em família, confraternizações corporativas, reuniões de
              amigos e celebrações especiais em casas, apartamentos, salões de festa de condomínio ou sítios.
            </p>
          </div>
        </section>

        {/* O QUE ESTÁ INCLUSO */}
        <section
          id="incluso"
          className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
              O que está incluso no buffet de churrasco em domicílio
            </h2>
            <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
              O formato do serviço pode variar conforme o número de convidados e o tipo de evento, mas, em geral, o
              churrasco da Home Fest &amp; Eventos inclui:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Churrasqueiro e equipe de apoio
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Profissionais experientes para preparo das carnes, montagem dos pratos, reposição de buffet e cuidado
                com o serviço durante todo o evento.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Estrutura de churrasco e utensílios
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Churrasqueira (quando necessário), utensílios de preparo, facas, tábuas, utensílios de serviço e apoio
                ao buffet, sempre com atenção à segurança e à higiene.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <Users className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Serviço contínuo durante a festa
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Atendimento com fluidez, cortes servidos no ponto, reposição de carnes e acompanhamentos e cuidado com
                convidados, mantendo a festa organizada e aconchegante.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-hf-gold/15 flex items-center justify-center">
                  <Clock3 className="w-5 h-5 text-hf-gold" />
                </div>
                <h3 className="text-lg font-semibold text-hf-brown">
                  Duração média de 4 a 5 horas
                </h3>
              </div>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                O tempo de evento é definido conforme o porte da festa e a proposta escolhida, garantindo que todos os
                convidados sejam bem atendidos.
              </p>
            </div>
          </div>
        </section>

        {/* CARNES E ACOMPANHAMENTOS */}
        <section
          id="carnes-guarnicoes"
          className="bg-hf-cream/60 border-y border-hf-gold/15"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
                Carnes selecionadas e acompanhamentos completos
              </h2>
              <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
                Os cortes e acompanhamentos podem ser personalizados conforme o perfil do seu evento, mas normalmente
                trabalhamos com:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-[15px] font-semibold text-hf-brown mb-1.5">
                    Exemplos de carnes principais
                  </h3>
                  <ul className="list-disc list-inside text-[14px] text-hf-brown/85 space-y-1.5">
                    <li>Picanha bovina, contrafilé ou alcatra temperada.</li>
                    <li>Linguiça artesanal, tradicional ou toscana.</li>
                    <li>Frango marinado em ervas, sobrecoxa desossada ou coração de frango.</li>
                    <li>Cortes suínos selecionados, conforme cardápio combinado.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[15px] font-semibold text-hf-brown mb-1.5">
                    Exemplos de acompanhamentos
                  </h3>
                  <ul className="list-disc list-inside text-[14px] text-hf-brown/85 space-y-1.5">
                    <li>Arroz branco ou temperado.</li>
                    <li>Farofa especial da casa.</li>
                    <li>Vinagrete, maionese e molhos variados.</li>
                    <li>Pães, queijos e guarnições para complementar o churrasco.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 rounded-3xl bg-white/85 border border-hf-gold/20 p-6">
              <h3 className="text-lg font-semibold text-hf-brown">
                Adaptação ao seu público
              </h3>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                O cardápio é pensado para o perfil dos convidados – família, crianças, grupos de amigos, colaboradores
                de empresa – e pode considerar restrições alimentares, necessidades especiais e preferências de sabor.
              </p>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Na etapa de orçamento, nossa equipe orienta sobre quantidade de carnes, combinações de acompanhamentos
                e o melhor formato de serviço para o seu espaço.
              </p>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section
          id="diferenciais"
          className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
              Por que escolher o churrasco Home Fest em Belo Horizonte
            </h2>
            <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
              Mais do que levar um churrasco até sua casa, nós cuidamos de toda a operação de buffet, garantindo
              organização, acolhimento e uma experiência realmente especial para você e seus convidados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <h3 className="flex items-center gap-2 text-[15px] md:text-[16px] font-semibold text-hf-brown">
                <ShieldCheck className="w-5 h-5 text-hf-gold" />
                Equipe profissional
              </h3>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Time com experiência em eventos sociais e corporativos, acostumado a lidar com diferentes espaços e
                tamanhos de festa.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <h3 className="flex items-center gap-2 text-[15px] md:text-[16px] font-semibold text-hf-brown">
                <Flame className="w-5 h-5 text-hf-gold" />
                Operação organizada
              </h3>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Planejamento de horários, fluxo de serviço, preparo das carnes e reposição de acompanhamentos para
                evitar filas e esperas desnecessárias.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-6 space-y-3">
              <h3 className="flex items-center gap-2 text-[15px] md:text-[16px] font-semibold text-hf-brown">
                <Sparkles className="w-5 h-5 text-hf-gold" />
                Experiência completa
              </h3>
              <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                Você aproveita a festa com tranquilidade enquanto a equipe Home Fest cuida do que está por trás do
                buffet – preparo, serviço e organização.
              </p>
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section
          id="para-quem-e"
          className="bg-hf-cream/70 border-y border-hf-gold/15"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-8">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
                Para quem o churrasco em domicílio é ideal
              </h2>
              <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
                O churrasco em casa faz muito sentido para quem deseja uma festa aconchegante, sem abrir mão de
                estrutura profissional:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="rounded-3xl bg-white/85 border border-hf-gold/20 p-6 space-y-3">
                <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                  Quando é o formato ideal
                </h3>
                <ul className="space-y-2 text-[14px] text-hf-brown/85 leading-relaxed">
                  <li>Para aniversários em casa com família e amigos.</li>
                  <li>Para encontros informais com clima acolhedor.</li>
                  <li>Para confraternizações corporativas em espaços menores.</li>
                  <li>Para festas em sítios e casas de campo com estrutura simples.</li>
                </ul>
              </div>

              <div className="rounded-3xl bg-hf-cream/90 border border-hf-gold/20 p-6 space-y-3">
                <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                  Quando outro formato pode ser melhor
                </h3>
                <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                  Em alguns casos, outro tipo de buffet ou espaço de eventos pode ser mais adequado, por exemplo:
                </p>
                <ul className="space-y-2 text-[14px] text-hf-brown/85 leading-relaxed">
                  <li>Eventos com número muito alto de convidados em espaços muito reduzidos.</li>
                  <li>Locais com restrições rígidas de fumaça ou uso de churrasqueira.</li>
                  <li>Condomínios com limitações de horário muito curtas.</li>
                </ul>
                <p className="text-[14px] text-hf-brown/85 leading-relaxed mt-2">
                  Em caso de dúvida, nossa equipe orienta qual formato é mais seguro e confortável para o seu evento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA NA PRÁTICA */}
        <section
          id="como-funciona"
          className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-hf-brown">
              Como funciona o churrasco no dia da festa
            </h2>
            <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
              O passo a passo é sempre transparente e combinado com você desde o primeiro contato:
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-3">
              <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                <Users className="w-4 h-4 text-hf-gold" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-hf-brown">
                  1. Entendimento do evento
                </h3>
                <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                  Você nos conta o tipo de festa, número aproximado de convidados, local e horário. Com base nisso,
                  sugerimos o melhor formato de churrasco para o seu caso.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-hf-gold" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-hf-brown">
                  2. Definição de cardápio e estrutura
                </h3>
                <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                  Ajustamos cortes, acompanhamentos, tempo de serviço e tamanho da equipe conforme o número de
                  convidados, orçamento e necessidades específicas.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                <Clock3 className="w-4 h-4 text-hf-gold" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-hf-brown">
                  3. Chegada antecipada da equipe
                </h3>
                <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                  No dia do evento, a equipe chega com antecedência combinada para organizar equipamento, mise en place,
                  área de preparo e apoio ao buffet.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                <Flame className="w-4 h-4 text-hf-gold" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-hf-brown">
                  4. Serviço durante toda a festa
                </h3>
                <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                  As carnes são preparadas e servidas ao longo da festa, com reposição de acompanhamentos e atenção à
                  dinâmica dos convidados.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 w-8 h-8 rounded-full bg-hf-gold/15 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-hf-gold" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-hf-brown">
                  5. Encerramento e organização
                </h3>
                <p className="text-[14px] text-hf-brown/85 leading-relaxed">
                  Ao final, fazemos o fechamento do serviço de forma organizada, com cuidado com o espaço e com as
                  estruturas utilizadas.
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
              Perguntas frequentes sobre o churrasco em domicílio
            </h2>
            <p className="text-[14px] md:text-[15px] text-hf-brown/85 leading-relaxed">
              Algumas respostas que ajudam a entender melhor como funciona o serviço de churrasco da Home Fest &amp;
              Eventos:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Vocês levam a churrasqueira ou preciso fornecer?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Dependendo do local e da infraestrutura, podemos levar a churrasqueira ou utilizar a que você já possui.
                Essa decisão é alinhada na etapa de orçamento, sempre respeitando as normas do condomínio e as
                características do espaço.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Quantas horas de serviço estão incluídas?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Em média, o atendimento do churrasco varia de 4 a 5 horas, podendo ser ajustado conforme o porte da
                festa e o formato contratado. Tudo é descrito com clareza na proposta.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                Vocês atendem somente Belo Horizonte?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Atendemos Belo Horizonte e região, avaliando logística, deslocamento de equipe e viabilidade de
                atendimento. Informe bairro ou cidade no primeiro contato.
              </p>
            </div>

            <div className="rounded-3xl bg-white/80 border border-hf-gold/20 p-5 md:p-6">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-hf-brown">
                O cardápio pode ser adaptado?
              </h3>
              <p className="mt-2 text-[14px] text-hf-brown/85 leading-relaxed">
                Sim. Ajustamos cortes, acompanhamentos e formato de serviço de acordo com o perfil da festa, preferências
                dos convidados e possíveis restrições alimentares.
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
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-hf-gold/80">
                Orçamento de churrasco em domicílio · BH
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                Vamos planejar o churrasco da sua próxima festa?
              </h2>
              <p className="text-[14px] md:text-[15px] text-hf-cream/90 leading-relaxed">
                Envie data aproximada, número de convidados e bairro. Nossa equipe retorna com orientação e uma proposta
                personalizada para o seu evento em Belo Horizonte ou região.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-hf-gold px-7 py-3.5 text-[15px] font-semibold text-hf-brown shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:bg-[#FFBE55] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Flame className="w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChurrascoPage;
