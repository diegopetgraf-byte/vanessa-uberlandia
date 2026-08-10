"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, Shield, Server, Lock, BarChart3, CheckCircle2, Sparkles, MessageCircle, AlertCircle, TrendingUp, Layers, Check } from "lucide-react";
import Link from "next/link";
import { DIEGO_WHATSAPP_DISPLAY, getDiegoWhatsAppUrl } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.12 },
  }),
};

const WA_ACCEPT = getDiegoWhatsAppUrl('aceitar');
const WA_QUESTIONS = getDiegoWhatsAppUrl('duvidas');

const Logo = () => (
  <div className="flex items-center">
    <img
      src="/logo-fabi.svg"
      alt="Dra. Fabiana Sobral — Quiet Beauty FS"
      className="h-8 md:h-10 w-auto object-contain"
    />
  </div>
);

export default function PropostaClient() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      {/* ── Top Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/95 backdrop-blur-sm shadow-[0_1px_0_0_#EAE7E0]">
        <div className="container-uniq flex items-center justify-between h-16 md:h-20">
          <Link href="/" aria-label="Fabiana Sobral Home">
            <Logo />
          </Link>
          <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-[#9A9188]">
            Proposta Estratégica
          </span>
        </div>
      </header>
      <div className="h-16 md:h-20" aria-hidden="true" />

      <main className="flex-1">
        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png"
              alt="Clínica FS Fabiana Sobral"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B18]/70 via-[#1E1B18]/60 to-[#1E1B18]/80" />
          </div>

          <div className="relative z-10 container-uniq w-full py-20 md:py-28">
            <div className="max-w-3xl">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-block text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#C9A96E] mb-6"
              >
                Proposta de Posicionamento & Ativo Digital · Fabiana Sobral
              </motion.span>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-heading font-light text-[#FAFAF8] leading-[1.08] mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Um posicionamento digital à altura do método Quiet Beauty FS.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-base sm:text-lg text-[rgba(250,250,248,0.88)] leading-relaxed mb-8 max-w-2xl font-light"
              >
                Construir presença orgânica consistente para que a Clínica FS seja encontrada em diferentes momentos da jornada de decisão de quem busca procedimentos estéticos de alto padrão em São Paulo.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href={WA_ACCEPT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wine"
                >
                  Aceitar Proposta
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={WA_QUESTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-[rgba(250,250,248,0.5)] text-[#FAFAF8] hover:border-[#FAFAF8] hover:bg-white/10"
                >
                  Tirar Dúvidas
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            O PROBLEMA INVISÍVEL
        ═══════════════════════════════════════ */}
        <section className="section bg-[#FAFAF8] border-b border-[#EAE7E0]">
          <div className="container-uniq">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <AnimatedBlock>
                <span className="eyebrow mb-3 block">Diagnóstico Estratégico</span>
                <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl mb-4">
                  O "Problema Invisível" da Presença Digital
                </h2>
              </AnimatedBlock>
            </div>

            {/* Central Insight Box */}
            <AnimatedBlock delay={0.1}>
              <div className="max-w-4xl mx-auto card-uniq p-8 sm:p-12 bg-white border-[#6B1E2E]/20 shadow-sm relative overflow-hidden">
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[rgba(107,30,46,0.03)] pointer-events-none" />
                
                <div className="space-y-6 text-sm sm:text-base text-[#3C3833] leading-relaxed font-light">
                  <p className="font-heading text-xl sm:text-2xl text-[#6B1E2E] font-normal leading-snug">
                    "O problema não é que você não tenha presença digital. Você tem."
                  </p>
                  <p className="text-[#6B635B]">
                    O problema é que sua presença hoje está concentrada principalmente em canais onde a pessoa precisa <strong className="font-semibold text-[#1E1B18]">já saber quem você é</strong> (como o seu perfil do Instagram).
                  </p>
                  <p className="text-[#6B635B]">
                    O Google funciona de outra maneira. No Google, a pessoa que está no momento de decisão não começa pesquisando:
                  </p>

                  <div className="p-4 bg-[#F5F3EF] rounded-xl border border-[#EAE7E0] text-xs sm:text-sm text-[#9A9188] italic">
                    "Onde está a Dra. Fabiana Sobral?"
                  </div>

                  <p className="text-[#1E1B18] font-medium pt-2">
                    Ela pesquisa diretamente pelas suas intenções e dores:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {[
                      '“Quem faz harmonização facial natural nos Jardins?”',
                      '“Onde fazer preenchimento labial nos Jardins?”',
                      '“Qual profissional faz bioestimulador de colágeno em São Paulo?”',
                      '“Quero rejuvenescer sem mudar meu rosto.”',
                    ].map((query, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#EAE7E0] shadow-xs">
                        <Search className="w-4 h-4 text-[#6B1E2E] flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-[#1E1B18] font-light italic">{query}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#EAE7E0]">
                    <p className="text-sm sm:text-base font-heading text-[#1E1B18]">
                      E é exatamente aí que existe uma demanda acontecendo no Google que hoje não está sendo capturada pela sua marca da forma que poderia.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            O CENÁRIO DOS CONCORRENTES & GOOGLE GAP
        ═══════════════════════════════════════ */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Contexto dos Jardins */}
              <AnimatedSection direction="left" className="lg:col-span-6 space-y-6">
                <div>
                  <span className="eyebrow mb-3 block">Análise de Mercado</span>
                  <h2 className="text-headline text-2xl sm:text-3xl">
                    Os concorrentes da região já estão se estruturando para essa busca.
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#6B635B] leading-relaxed font-light">
                  <p>
                    Clínicas estabelecidas na região dos Jardins e Pinheiros já utilizam arquitetura ampla de páginas por procedimento para capturar essas buscas.
                  </p>
                  <p>
                    A <strong>Skin Academy</strong>, por exemplo, possui unidade nos Jardins com uma estrutura extensa de conteúdo sobre procedimentos e temas estéticos. O <strong>IOA Jardins</strong> também possui páginas individuais dedicadas a harmonização facial, Botox, preenchimentos, lipo de papada, fios, Sculptra, Radiesse e bioestimuladores.
                  </p>
                  <p>
                    Mais do que palavras-chave genéricas, o mercado está capturando buscas por <em>problemas específicos</em> e <em>conceitos de naturalidade</em>.
                  </p>
                </div>
              </AnimatedSection>

              {/* Right Column: Google Gap Card */}
              <AnimatedSection delay={0.15} className="lg:col-span-6">
                <div className="card-uniq p-8 sm:p-10 bg-[#6B1E2E] text-white shadow-xl">
                  <span className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#C9A96E] mb-3 block">
                    Vantagem Competitiva Real
                  </span>
                  
                  <h3 className="font-heading text-2xl sm:text-3xl text-white mb-4 leading-tight">
                    Você já tem o que o concorrente não consegue comprar.
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {['Autoridade', 'Método Exclusivo', 'Resultados Reais', 'Experiência', 'Personalidade'].map((pill) => (
                      <div key={pill} className="bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-2 rounded-lg text-center">
                        <span className="text-xs font-medium text-white">{pill}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light border-t border-white/20 pt-4">
                    O que falta não é autoridade nem técnica. O que falta é transformar esses diferenciais em <strong>infraestrutura digital proprietária</strong> pronta para indexar, educar e converter.
                  </p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            COMPARATIVO: INSTAGRAM VS. GOOGLE VS. ECOSSISTEMA
        ═══════════════════════════════════════ */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto">
              <span className="eyebrow mb-3 block">Papel de Cada Canal</span>
              <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl">
                O Ecossistema Digital Completo
              </h2>
              <p className="text-sm sm:text-base text-[#6B635B] mt-2 font-light">
                Cada canal cumpre uma função essencial na jornada de decisão do paciente.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Instagram */}
              <AnimatedSection delay={0.05}>
                <div className="card-uniq p-7 h-full flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-[#9A9188] bg-[#F5F3EF] px-3 py-1 rounded-full mb-4 inline-block">
                      Instagram
                    </span>
                    <h3 className="font-heading text-xl text-[#1E1B18] mb-2">Relacionamento & Prova</h3>
                    <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed font-light">
                      Excelente para quem <strong>já conhece</strong> a Fabiana. Nutre a comunidade atual com rotina, autoridade diária e conexão pessoal.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#EAE7E0] mt-6">
                    <span className="text-[0.6875rem] text-[#9A9188]">Limite: Depende de algoritmo e audiência prévia.</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Google */}
              <AnimatedSection delay={0.1}>
                <div className="card-uniq p-7 h-full flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-[#6B1E2E] bg-[rgba(107,30,46,0.08)] px-3 py-1 rounded-full mb-4 inline-block">
                      Google
                    </span>
                    <h3 className="font-heading text-xl text-[#1E1B18] mb-2">Descoberta & Intenção</h3>
                    <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed font-light">
                      Estruturado para quem <strong>ainda não conhece</strong> a Fabiana, mas está ativamente buscando procedimentos na região dos Jardins.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#EAE7E0] mt-6">
                    <span className="text-[0.6875rem] text-[#6B1E2E] font-medium">Oportunidade: Pacientes em momento de compra.</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Novo Site */}
              <AnimatedSection delay={0.15}>
                <div className="card-uniq p-7 h-full flex flex-col justify-between bg-white border-[#6B1E2E]">
                  <div>
                    <span className="text-[0.65rem] font-bold tracking-widest uppercase text-[#FAFAF8] bg-[#6B1E2E] px-3 py-1 rounded-full mb-4 inline-block">
                      Novo Ecossistema Digital
                    </span>
                    <h3 className="font-heading text-xl text-[#1E1B18] mb-2">Autoridade & Conversão</h3>
                    <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed font-light">
                      <strong>Apresenta + Explica + É encontrado + Prova + Converte.</strong> Transforma buscas em agendamentos no WhatsApp.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#EAE7E0] mt-6">
                    <span className="text-[0.6875rem] text-[#1E7B48] font-medium">Resultado: Ativo proprietário perpétuo.</span>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ARQUITETURA INTELIGENTE DO SITE
        ═══════════════════════════════════════ */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection className="mb-12 text-center max-w-3xl mx-auto">
              <span className="eyebrow mb-3 block">Arquitetura de Conversão</span>
              <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl">
                A Função Estratégica de Cada Seção
              </h2>
              <p className="text-sm sm:text-base text-[#6B635B] mt-2 font-light">
                Não é apenas um layout bonito. Cada página cumpre uma etapa precisa de conversão e SEO.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Home', badge: 'Posicionamento', desc: 'Primeira impressão de sofisticação, credibilidade e elegância nos Jardins.' },
                { title: 'Quiet Beauty FS', badge: 'Propriedade de Marca', desc: 'Apresentação do método autoral, fugindo da harmonização padronizada.' },
                { title: 'Tratamentos', badge: 'Captura de Intenção', desc: 'Catálogo segmentado entre estética facial e protocolos corporais.' },
                { title: 'Páginas Individuais', badge: 'SEO & Google', desc: '12 páginas com profundidade clínica para rankeamento orgânico por procedimento.' },
                { title: 'Resultados', badge: 'Prova & Confiança', desc: 'Galeria de evolução e atmosfera que valida a naturalidade na prática.' },
                { title: 'Fabiana Sobral', badge: 'Autoridade Pessoal', desc: 'Apresentação da trajetória biomédica e visão humana do rejuvenescimento.' },
                { title: 'Instituto FS', badge: 'Autoridade & Cursos', desc: 'Vertente educacional para capturar profissionais e médicos para mentorias.' },
                { title: 'Contato & WhatsApp', badge: 'Conversão', desc: 'Roteamento com mensagens contextuais prontas para cada tipo de interesse.' },
              ].map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 0.04}>
                  <div className="card-uniq p-5 h-full bg-white flex flex-col justify-between">
                    <div>
                      <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#6B1E2E] bg-[rgba(107,30,46,0.08)] px-2.5 py-0.5 rounded-full mb-3 inline-block">
                        {item.badge}
                      </span>
                      <h3 className="font-heading text-lg text-[#1E1B18] mb-1.5">{item.title}</h3>
                      <p className="text-xs text-[#6B635B] leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Domain Availability Highlight */}
            <AnimatedSection delay={0.2} className="mt-10 max-w-xl mx-auto">
              <div className="card-uniq p-6 flex items-center gap-4 bg-white border-[#2E8B3E]/30 shadow-sm">
                <div className="w-11 h-11 rounded-full bg-[rgba(34,139,34,0.1)] flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#2E8B3E] animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-semibold text-[#1E1B18]">
                      harmonizacao-jardins.com.br
                    </p>
                    <span className="text-[0.6rem] bg-[#E8F5E9] text-[#1E7B48] font-bold px-2 py-0.5 rounded-full">
                      Disponível
                    </span>
                  </div>
                  <p className="text-xs text-[#6B635B] mt-0.5 font-light">
                    Domínio premium disponível para registro imediato no projeto da Clínica FS.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            INVESTIMENTO — PRICING
        ═══════════════════════════════════════ */}
        <section id="investimento" className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <AnimatedBlock>
                <span className="eyebrow mb-3 block">Condições Comerciais</span>
                <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl mb-4">
                  Investimento Transparente
                </h2>
                <p className="text-sm text-[#6B635B] leading-relaxed max-w-xl mx-auto font-light">
                  Compare o valor de um plano de tratamento na clínica com o retorno perpétuo de um ecossistema digital posicionado na Oscar Freire.
                </p>
              </AnimatedBlock>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              
              {/* Implementation Card */}
              <AnimatedBlock delay={0.1}>
                <div className="card-uniq p-8 md:p-10 h-full flex flex-col bg-white">
                  <span className="eyebrow mb-4">Implementação</span>
                  
                  <div className="mb-2">
                    <span
                      className="font-heading text-[#1E1B18]"
                      style={{
                        fontSize: "clamp(2.4rem, 4vw, 3.25rem)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                      }}
                    >
                      6x R$ 597,90
                    </span>
                  </div>
                  <p className="text-sm text-[#6B1E2E] font-medium mb-6">
                    ou R$ 3.199,00 à vista
                  </p>
                  
                  <span className="divider mb-6" />
                  
                  <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed mb-6 font-light">
                    Valor único para desenvolvimento, estruturação completa de conteúdo, imagens profissionais, 12 páginas de tratamentos, registro do domínio e publicação.
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Design exclusivo com identidade Quiet Beauty FS",
                      "12 páginas individuais completas de procedimentos",
                      "Registro do domínio harmonizacao-jardins.com.br",
                      "Estruturação de SEO e schemas para o Google",
                      "Carrossel com avaliações oficiais do Google",
                      "Primeiros 6 meses de manutenção inclusos gratuitamente",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3C3833]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#6B1E2E] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_ACCEPT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-wine w-full justify-center"
                  >
                    Aceitar Proposta
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </AnimatedBlock>

              {/* Monthly Card */}
              <AnimatedBlock delay={0.2}>
                <div className="relative card-uniq p-8 md:p-10 h-full flex flex-col overflow-hidden border-[#6B1E2E] bg-white">
                  <div className="absolute top-0 right-0 bg-[#6B1E2E] text-[#FAFAF8] text-[0.625rem] font-semibold tracking-[0.14em] uppercase px-4 py-1.5 rounded-bl-xl">
                    6 Meses Inclusos
                  </div>

                  <span className="eyebrow mb-4">Manutenção Mensal</span>
                  <div className="mb-2">
                    <span
                      className="font-heading text-[#1E1B18]"
                      style={{
                        fontSize: "clamp(2.4rem, 4vw, 3.25rem)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.1,
                      }}
                    >
                      R$ 197,90
                    </span>
                    <span className="text-sm text-[#9A9188] ml-2">/mês</span>
                  </div>
                  <p className="text-sm text-[#6B1E2E] font-medium mb-6">
                    A partir do 7º mês
                  </p>
                  <span className="divider mb-6" />
                  <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed mb-6 font-light">
                    Tudo o que seu consultório precisa para manter a presença digital ativa, rápida, segura e atualizada, sem nenhuma preocupação técnica.
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {[
                      "Hospedagem cloud de alta velocidade inclusa",
                      "Renovação anual do domínio gerenciada",
                      "Certificado SSL (HTTPS) mantido ativo",
                      "Monitoramento de disponibilidade e segurança",
                      "Otimização contínua de indexação no Google",
                      "Suporte e atualizações mensais de conteúdo e fotos",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3C3833]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#6B1E2E] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_QUESTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline border-[#6B1E2E] text-[#6B1E2E] w-full justify-center hover:bg-[#6B1E2E] hover:text-[#FAFAF8]"
                  >
                    Tirar Dúvidas
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </AnimatedBlock>
            </div>

            {/* Timeline */}
            <AnimatedBlock delay={0.3}>
              <div className="max-w-xl mx-auto mt-14">
                <p className="text-[0.65rem] font-semibold tracking-[0.16em] uppercase text-[#6B1E2E] mb-6 text-center">
                  Cronograma de Pagamento
                </p>

                <div className="relative pl-12 sm:pl-14">
                  <div
                    className="absolute left-[1.15rem] top-5 bottom-5 w-px bg-[#EAE7E0]"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col gap-5">
                    {/* Step 1 */}
                    <div className="relative">
                      <div className="absolute -left-12 sm:-left-14 top-4 z-10 w-9 h-9 rounded-full border-2 border-[#6B1E2E] bg-[#FAFAF8] flex items-center justify-center">
                        <span className="font-heading text-xs text-[#6B1E2E]">1</span>
                      </div>
                      <div className="card-uniq p-4 sm:p-5 bg-white">
                        <span className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase text-[#9A9188]">Contratação</span>
                        <h4 className="font-heading text-base text-[#1E1B18] mt-0.5">Implementação</h4>
                        <p className="text-base font-heading text-[#6B1E2E] font-medium mt-0.5">6x de R$ 597,90 <span className="text-xs font-sans text-[#6B635B]">(ou R$ 3.199 à vista)</span></p>
                        <p className="text-xs text-[#9A9188] mt-0.5">Desenvolvimento e publicação completa do site</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                      <div className="absolute -left-12 sm:-left-14 top-4 z-10 w-9 h-9 rounded-full border-2 border-[#6B1E2E] bg-[#6B1E2E] flex items-center justify-center">
                        <span className="font-heading text-xs text-[#FAFAF8]">2</span>
                      </div>
                      <div className="card-uniq p-4 sm:p-5 border-[#6B1E2E] bg-[rgba(107,30,46,0.03)]">
                        <span className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase text-[#6B1E2E]">Meses 1 a 6</span>
                        <h4 className="font-heading text-base text-[#1E1B18] mt-0.5">Manutenção & Hospedagem</h4>
                        <p className="text-base font-heading text-[#6B1E2E] font-semibold mt-0.5">Gratuito (Incluso)</p>
                        <p className="text-xs text-[#9A9188] mt-0.5">Hospedagem, domínio, SSL e suporte 100% cobertos</p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                      <div className="absolute -left-12 sm:-left-14 top-4 z-10 w-9 h-9 rounded-full border-2 border-[#6B1E2E] bg-[#FAFAF8] flex items-center justify-center">
                        <span className="font-heading text-xs text-[#6B1E2E]">3</span>
                      </div>
                      <div className="card-uniq p-4 sm:p-5 bg-white">
                        <span className="text-[0.6rem] font-semibold tracking-[0.14em] uppercase text-[#9A9188]">A partir do 7º mês</span>
                        <h4 className="font-heading text-base text-[#1E1B18] mt-0.5">Manutenção Mensal Contínua</h4>
                        <p className="text-base font-heading text-[#1E1B18] font-medium mt-0.5">R$ 197,90<span className="text-xs text-[#9A9188] font-sans font-normal">/mês</span></p>
                        <p className="text-xs text-[#9A9188] mt-0.5">Renovações, segurança, atualizações e suporte técnico</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            DIRECT CONTACT — DIEGO
        ═══════════════════════════════════════ */}
        <section className="section bg-[#6B1E2E] text-[#FAFAF8]">
          <div className="container-uniq">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedBlock>
                <span className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#C9A96E] mb-4 block">
                  Contato Direto do Desenvolvedor
                </span>
                <h2
                  className="font-heading text-[#FAFAF8] mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] whitespace-normal lg:whitespace-nowrap"
                  style={{
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  Vamos dar os retoques finais e colocar o site no ar?
                </h2>
                <p className="text-sm text-[rgba(250,250,248,0.8)] leading-relaxed max-w-xl mx-auto mb-8 font-light">
                  Envie uma mensagem direta no WhatsApp para aprovar a proposta ou esclarecer qualquer ponto do projeto.
                </p>
              </AnimatedBlock>

              <AnimatedBlock delay={0.15}>
                <div className="inline-flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/15 mb-8">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-heading text-xl text-white font-semibold">
                    D
                  </div>
                  <div>
                    <p className="text-base font-medium text-white">Diego Costa</p>
                    <p className="text-xs text-white/70">Desenvolvimento & Arquitetura Web</p>
                    <p className="text-sm font-semibold text-[#C9A96E] mt-1">{DIEGO_WHATSAPP_DISPLAY}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <a
                      href={WA_ACCEPT}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-white text-[#6B1E2E] hover:bg-[#FAFAF8] justify-center text-xs font-semibold"
                    >
                      Aceitar Proposta
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={WA_QUESTIONS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn border border-white/40 text-white hover:bg-white/10 justify-center text-xs"
                    >
                      Tirar Dúvidas
                    </a>
                  </div>
                </div>
              </AnimatedBlock>
            </div>
          </div>
        </section>
      </main>

      {/* ── Minimal Footer ── */}
      <footer className="bg-[#F5F3EF] border-t border-[#EAE7E0] py-6">
        <div className="container-uniq flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-[0.6875rem] text-[#9A9188]">
            Proposta de desenvolvimento web · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

function AnimatedBlock({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
}) {
  return (
    <motion.div
      initial={
        direction === "up"
          ? { opacity: 0, y: 28 }
          : direction === "left"
          ? { opacity: 0, x: -28 }
          : { opacity: 0 }
      }
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  );
}
