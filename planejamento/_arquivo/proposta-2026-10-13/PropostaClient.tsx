"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Shield, MapPin, Check, MessageCircle, HelpCircle } from "lucide-react";
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
      src="/header-logo.svg"
      alt="Oni Face · Facial Boutique"
      className="h-8 md:h-10 w-auto object-contain"
    />
  </div>
);

export default function PropostaClient() {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#F7F3EC" }}
    >
      {/* ── Top Bar (Inspired by saudeplena-df/proposta) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md shadow-[0_1px_0_0_#D9D2C4]">
        <div className="container-uniq flex items-center justify-between h-16 md:h-20">
          <Link href="/" onClick={handleLogoClick} className="cursor-pointer" aria-label="Oni Face Home">
            <Logo />
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#8A8278] sm:inline">
              Proposta Estratégica
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border-l border-[#D9D2C4] pl-4 text-xs font-semibold text-[#1B3A6B] hover:text-[#B8965A] transition-colors sm:pl-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Ver o site
            </Link>
          </div>
        </div>
      </header>
      <div className="h-16 md:h-20" aria-hidden="true" />

      <main className="flex-1">
        
        {/* ── HERO SECTION ── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/heroproposta.png"
              alt="Oni Face"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            {/* Soft gradient overlay representing the gold & dark palette theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714]/85 via-[#1A1714]/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/90 via-transparent to-[#1A1714]/20" />
          </div>

          <div className="relative z-10 container-uniq w-full py-20 md:py-28">
            <div className="max-w-3xl">
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-block text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-[#B8965A] mb-6"
              >
                PROPOSTA ESTRATÉGICA E ATIVO DIGITAL: ONI FACE
              </motion.span>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="font-heading font-light text-[#F7F3EC] leading-[1.08] mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4.25rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Sua presença digital de alta autoridade, construída com elegância e propósito.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-base sm:text-lg text-[rgba(247,243,236,0.88)] leading-relaxed mb-8 max-w-2xl font-light"
              >
                Uma estrutura digital própria para transformar a reputação e a técnica da Dra. Vanessa Sanabria em posicionamento premium, permitindo ser encontrada por quem procura exatamente o seu trabalho, mesmo antes de conhecer o seu nome.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#investimento"
                  className="btn btn-wine"
                >
                  Conhecer a Proposta
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={WA_QUESTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-[rgba(247,243,236,0.5)] text-[#F7F3EC] hover:border-[#F7F3EC] hover:bg-white/10"
                >
                  Tirar Dúvidas
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── PROBLEMA 01: FRAGMENTAÇÃO ── */}
        <section className="section bg-[#F7F3EC] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6">
                <AnimatedSection>
                  <span className="eyebrow mb-4 block">PROBLEMA 01: DISPERSÃO</span>
                  <h2 className="text-headline text-3xl sm:text-4xl text-[#1A1714] mb-6">
                    Hoje, sua trajetória profissional existe em vários lugares. Mas ainda não existe um lugar que conte a história inteira.
                  </h2>
                  <p className="text-sm sm:text-base text-[#8A8278] leading-relaxed font-light mb-4">
                    Quem procura por você encontra fragmentos: uma menção acadêmica aqui, um registro profissional ali, uma bio curta em redes sociais. Cada peça é verdadeira, mas nenhuma delas explica o conjunto do seu posicionamento.
                  </p>
                  <p className="text-sm sm:text-base text-[#8A8278] leading-relaxed font-light">
                    Não se trata de abandonar essas plataformas. Trata-se de ter uma fonte própria que dê contexto a todas elas, permitindo à paciente entender quem é você por completo.
                  </p>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-6">
                <AnimatedSection delay={0.15}>
                  <div className="card-soft p-8 md:p-10 bg-white border border-[#D9D2C4] rounded-2xl shadow-xs">
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {['Diretórios Médicos', 'Referências Acadêmicas', 'Perfis Profissionais', 'Redes Sociais', 'Fichas do CRO'].map((item) => (
                        <li key={item} className="rounded-full border border-[#D9D2C4] bg-[#FAF9F6] px-3.5 py-1.5 text-xs text-[#8A8278]">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="my-6 flex justify-center text-[#B8965A]" aria-hidden="true">
                      <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
                        <path d="M12 0 V32 M4 25 L12 33 L20 25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"></path>
                      </svg>
                    </div>
                    <div className="rounded-xl border border-[#B8965A]/40 bg-[#FAF9F6] p-6 text-center">
                      <p className="font-heading text-lg sm:text-xl text-[#1B3A6B]">Um endereço próprio</p>
                      <p className="mt-1 text-xs text-[#8A8278]">oniface.com.br: a fonte de verdade da sua atuação</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ── PROBLEMA 02: A ABORDAGEM FULL FACE ── */}
        <section className="section bg-[#EDE7D9] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <div className="max-w-3xl mb-12">
              <AnimatedSection>
                <span className="eyebrow mb-4 block">PROBLEMA 02: A ABORDAGEM</span>
                <h2 className="text-headline text-3xl sm:text-4xl text-[#1A1714] mb-6">
                  Protocolos Full Face ainda precisam ser explicados antes de serem escolhidos.
                </h2>
                <p className="text-sm sm:text-base text-[#8A8278] leading-relaxed font-light">
                  A maioria das pacientes sabe o que esperar de procedimentos isolados (como preenchimentos pontuais), mas desconhecem a abordagem integrada (Full Face). O site educa a paciente antes da consulta, de forma elegante e sutil, economizando tempo clínico e aumentando a aceitação dos planos de tratamento integrados.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#D9D2C4] bg-[#D9D2C4] sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "O que é um Protocolo Full Face?",
                  desc: "Explicação clara do conceito de rejuvenescimento e reestruturação integrada."
                },
                {
                  title: "Por que tratar o rosto de forma global?",
                  desc: "Apresentação dos benefícios de proporção e harmonia dinâmica em vez de perseguir rugas isoladas."
                },
                {
                  title: "Como funciona a consulta?",
                  desc: "O passo a passo da avaliação de alta performance, gerando segurança e alinhamento de expectativas."
                },
                {
                  title: "O que é avaliado dinamicamente?",
                  desc: "A análise dos vetores de envelhecimento e compartimentos de gordura profunda."
                },
                {
                  title: "Qual o papel do estímulo de colágeno?",
                  desc: "A base de sustentação tecidual que sustenta qualquer refinamento com injetáveis."
                },
                {
                  title: "Como os resultados são mantidos?",
                  desc: "Cronograma de acompanhamento e gerenciamento de longo prazo para prolongar a naturalidade."
                }
              ].map((item, idx) => (
                <AnimatedSection key={idx} className="bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between" delay={idx * 0.05}>
                  <div>
                    <span className="font-heading text-xs text-[#B8965A] font-bold block mb-2">{(idx + 1).toString().padStart(2, '0')}</span>
                    <h3 className="font-heading text-lg text-[#1A1714] mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#8A8278] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEMA 03: DESCOBERTA ── */}
        <section className="section bg-[#F7F3EC] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <div className="max-w-3xl mb-12">
              <AnimatedSection>
                <span className="eyebrow mb-4 block">PROBLEMA 03: DESCOBERTA</span>
                <h2 className="text-headline text-3xl sm:text-4xl text-[#1A1714] mb-6">
                  Ninguém pesquisa um nome que ainda não conhece.
                </h2>
                <p className="text-sm sm:text-base text-[#8A8278] leading-relaxed font-light">
                  Quem precisa de você hoje não digita o seu nome no buscador. Digita o problema que quer resolver ou a técnica que ouviu falar. Criamos páginas dedicadas para capturar essas buscas dinâmicas em Uberlândia, abrindo novas portas de entrada.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  category: "Quem busca a solução",
                  intro: "Sabe exatamente o que quer, mas não sabe com quem realizar:",
                  queries: [
                    "harmonização facial natural uberlândia",
                    "especialista em full face uberlândia",
                    "blefaroplastia sem cortes uberlândia",
                    "bioestimuladores de colágeno uberlândia"
                  ]
                },
                {
                  category: "Quem busca o problema",
                  intro: "Sente o incômodo, mas desconhece os tratamentos disponíveis:",
                  queries: [
                    "como tratar olhar cansado e flacidez",
                    "rugas ao redor dos olhos o que fazer",
                    "perda de volume no rosto com a idade",
                    "flacidez na pele do rosto tratamento"
                  ]
                },
                {
                  category: "Quem já ouviu falar",
                  intro: "Recebeu uma indicação, viu no Instagram e busca confirmação técnica:",
                  queries: [
                    "dra vanessa sanabria",
                    "oni face boutique uberlândia",
                    "clinica vanessa sanabria uberlandia",
                    "cro mg vanessa sanabria"
                  ]
                }
              ].map((column, colIdx) => (
                <AnimatedSection key={colIdx} className="card-uniq p-6 sm:p-8 bg-white border border-[#D9D2C4] flex flex-col justify-between" delay={colIdx * 0.05}>
                  <div>
                    <span className="text-[0.625rem] font-semibold tracking-wider text-[#B8965A] uppercase block mb-2">{column.category}</span>
                    <p className="text-xs text-[#8A8278] mb-4 font-light">{column.intro}</p>
                    <ul className="space-y-2">
                      {column.queries.map((q, qIdx) => (
                        <li key={qIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F7F3EC] border border-[#D9D2C4]/60">
                          <Search className="w-3.5 h-3.5 text-[#1B3A6B] flex-shrink-0" />
                          <span className="text-xs text-[#1A1714] font-light italic">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── A SOLUÇÃO ── */}
        <section className="section bg-[#EDE7D9] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <div className="max-w-3xl mb-12">
              <AnimatedSection>
                <span className="eyebrow mb-4 block">A SOLUÇÃO</span>
                <h2 className="text-headline text-3xl sm:text-4xl text-[#1A1714] mb-6">
                  Um site construído para ser encontrado e para converter desde o primeiro contato.
                </h2>
                <p className="text-sm sm:text-base text-[#8A8278] leading-relaxed font-light">
                  Nosso desenvolvimento não se limita a um layout genérico. Construímos código limpo e arquitetura de dados otimizada para buscadores.
                </p>
              </AnimatedSection>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Página por Procedimento",
                  desc: "Mecanismos de busca preferem páginas focadas. Criamos páginas individuais para Blefaroplastia, Toxina, Bioestimuladores e Fios."
                },
                {
                  title: "Dados Estruturados",
                  desc: "Marcação JSON-LD em Schema.org descrevendo sua especialidade, CRM e CRO, permitindo que o Google entenda seus dados de forma inteligível."
                },
                {
                  title: "Identidade Oni Face",
                  desc: "Estética refinada em tons de ouro fosco e azul royal, usando a tipografia elegante e os padrões de marca d'água no fundo das seções."
                },
                {
                  title: "SEO Técnico Impecável",
                  desc: "HTML semântico de verdade, sitemaps dinâmicos, canonical tags automáticas e ausência de travamentos de scripts."
                },
                {
                  title: "Otimização Mobile",
                  desc: "Velocidade de carregamento instantânea nos smartphones, onde ocorre mais de 80% das buscas de estética."
                },
                {
                  title: "Foco em Conversão",
                  desc: "Textos redigidos de forma fluida, livres de placeholders ou jargões agressivos, direcionando o fluxo ao agendamento no WhatsApp."
                }
              ].map((item, idx) => (
                <AnimatedSection key={idx} className="card-uniq p-6 bg-white border border-[#D9D2C4]" delay={idx * 0.05}>
                  <h3 className="font-heading text-lg text-[#1A1714] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#8A8278] leading-relaxed font-light">{item.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── O DIFERENCIAL ── */}
        <section className="section bg-[#F7F3EC] border-b border-[#D9D2C4]">
          <div className="container-uniq text-center">
            <AnimatedSection>
              <span className="eyebrow mb-4 block">O DIFERENCIAL</span>
              <h2 className="text-headline text-3xl sm:text-4xl text-[#1A1714] mb-6">
                A matéria-prima já existe.
              </h2>
              <p className="text-sm sm:text-base text-[#8A8278] leading-relaxed font-light max-w-xl mx-auto mb-10">
                Não estamos inventando um posicionamento. Estamos reunindo suas credenciais clínicas reais em uma única narrativa digital coerente de alta autoridade.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-8">
                {['Especialista em Full Face', 'Clínica de Estética Avançada', 'Gerenciamento do Envelhecimento', 'Consciência e Identidade Facial', 'Atendimento Boutique Exclusivo'].map((tag) => (
                  <span key={tag} className="inline-block rounded-full border border-[#D9D2C4] bg-white px-5 py-2.5 text-xs sm:text-sm text-[#3C3831] font-medium shadow-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-heading text-xl sm:text-2xl text-[#1B3A6B] italic max-w-xl mx-auto">
                "Uma face dos seus sonhos ainda deve parecer sua."
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── O QUE MUDA ── */}
        <section className="section bg-[#EDE7D9] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <div className="max-w-2xl mb-12">
              <AnimatedSection>
                <span className="eyebrow mb-4 block">CRONOGRAMA & MUDANÇA</span>
                <h2 className="text-headline text-3xl sm:text-4xl text-[#1A1714]">
                  Seis problemas concretos, seis mudanças reais.
                </h2>
              </AnimatedSection>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Fragmentação",
                  today: "Informações espalhadas em diferentes fichas online.",
                  after: "Um hub único centralizado no seu próprio domínio profissional."
                },
                {
                  title: "Propriedade",
                  today: "Dados e biografias limitados aos templates de terceiros.",
                  after: "Domínio e servidor próprios: total controle sobre o texto e imagem."
                },
                {
                  title: "Complexidade",
                  today: "Pacientes confusos ou pedindo apenas procedimentos avulsos.",
                  after: "Exposição didática e conceitual do método de tratamento integrado."
                },
                {
                  title: "Descoberta",
                  today: "Paciente precisa necessariamente digitar o seu nome para te achar.",
                  after: "Captura de buscas dinâmicas focadas em pálpebras, colágeno e volume."
                },
                {
                  title: "Autoridade",
                  today: "Qualificação técnica valiosa diluída no Instagram.",
                  after: "Uma presença profissional limpa, livre de dancinhas ou postagens descartáveis."
                },
                {
                  title: "Conversão",
                  today: "Tráfego disperso e sem caminho claro até o WhatsApp.",
                  after: "Design focado: descoberta, entendimento e canal direto de agendamento."
                }
              ].map((item, idx) => (
                <AnimatedSection key={idx} className="card-uniq p-6 sm:p-8 bg-white border border-[#D9D2C4]" delay={idx * 0.05}>
                  <h3 className="font-heading text-lg text-[#1A1714] mb-4">{item.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[0.6rem] font-bold uppercase tracking-wider text-[#8A8278]">Hoje</p>
                      <p className="mt-1 text-xs sm:text-sm text-[#8A8278]/90 font-light">{item.today}</p>
                    </div>
                    <div className="border-t border-[#D9D2C4]/60 pt-3">
                      <p className="text-[0.6rem] font-bold uppercase tracking-wider text-[#1B3A6B]">Com o site</p>
                      <p className="mt-1 text-xs sm:text-sm text-[#3C3831] font-medium">{item.after}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── VISÃO DE CONJUNTO ── */}
        <section className="section bg-[#F7F3EC] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <AnimatedSection>
                <span className="eyebrow mb-4 block">VISÃO DE CONJUNTO</span>
                <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl text-[#1A1714]">
                  O fluxo de captação digital Oni Face
                </h2>
              </AnimatedSection>
            </div>

            <ol className="max-w-2xl mx-auto space-y-6">
              {[
                { step: "01", title: "Busca Dinâmica", subtitle: "Descoberta", desc: "A paciente busca por uma solução para a pálpebra ou rejuvenescimento facial no Google." },
                { step: "02", title: "Pouso no Site", subtitle: "Entendimento", desc: "Chega em uma página boutique de alta velocidade que explica a abordagem da Dra. Vanessa." },
                { step: "03", title: "Leitura de Procedimentos", subtitle: "Profundidade", desc: "A paciente compreende por que o Protocolo Full Face e a blefaroplastia sem cortes trazem naturalidade." },
                { step: "04", title: "Trajetória Profissional", subtitle: "Confiança", desc: "A página institucional do perfil da doutora valida seu currículo, CRO e excelência anatômica." },
                { step: "05", title: "Clique no WhatsApp", subtitle: "Agendamento", desc: "Redirecionamento automático com mensagens pré-formatadas diretamente para a equipe." }
              ].map((item, idx) => (
                <AnimatedSection key={idx} className="flex gap-4 p-5 rounded-2xl border border-[#D9D2C4] bg-white items-start" delay={idx * 0.05}>
                  <span className="font-heading text-2xl leading-none text-[#B8965A] font-bold shrink-0">{item.step}</span>
                  <div>
                    <h3 className="font-heading text-lg text-[#1A1714]">{item.title}</h3>
                    <p className="text-[0.65rem] font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">{item.subtitle}</p>
                    <p className="text-xs sm:text-sm text-[#8A8278] leading-relaxed font-light">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </ol>
          </div>
        </section>

        {/* ── INVESTIMENTO ── */}
        <section id="investimento" className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <AnimatedSection>
                <span className="eyebrow mb-4 block">INVESTIMENTO</span>
                <h2 className="text-headline text-3xl sm:text-4xl text-[#1A1714] mb-4">Condições Comerciais</h2>
              </AnimatedSection>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              
              {/* Card 1: Setup & Launch */}
              <AnimatedSection className="card-uniq p-8 bg-white border border-[#D9D2C4] flex flex-col justify-between" delay={0.05}>
                <div>
                  <span className="eyebrow mb-4 block">Setup & Lançamento</span>
                  <p className="font-heading text-3xl sm:text-4xl text-[#1A1714] mb-2">6x R$ 597,90</p>
                  <p className="text-xs sm:text-sm text-[#1B3A6B] font-medium mb-6">ou R$ 3.199,00 à vista</p>
                  
                  <span className="divider border-[#D9D2C4]/60 mb-6 block" />
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      "Desenvolvimento do site completo (Next.js & Tailwind CSS)",
                      "Design responsivo sob medida para celulares e tablets",
                      "Criação das páginas dedicadas de procedimentos faciais",
                      "Implementação dos dados estruturados (Schemas SEO)",
                      "Configuração e publicação final sob domínio oficial",
                      "Primeiros 6 meses de manutenção inclusos gratuitamente"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3C3831]">
                        <Check className="w-4 h-4 text-[#B8965A] mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WA_ACCEPT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wine w-full justify-center"
                >
                  Aceitar Proposta
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </AnimatedSection>

              {/* Card 2: Maintenance */}
              <AnimatedSection className="card-uniq p-8 bg-white border border-[#D9D2C4] flex flex-col justify-between relative" delay={0.15}>
                <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-none bg-[#B8965A]/10 px-4 py-2 text-[0.625rem] font-semibold uppercase tracking-wider text-[#B8965A] border-b border-l border-[#D9D2C4]">
                  6 Primeiros Meses Inclusos
                </div>
                <div>
                  <span className="eyebrow mb-4 block">Manutenção Mensal</span>
                  <p className="font-heading text-3xl sm:text-4xl text-[#1A1714] mb-2">
                    R$ 197,90<span className="text-xs sm:text-sm text-[#8A8278] font-light"> /mês</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#8A8278] mb-6">Inicia a partir do 7º mês</p>
                  
                  <span className="divider border-[#D9D2C4]/60 mb-6 block" />
                  
                  <ul className="space-y-3 mb-8">
                    {[
                      "Hospedagem em nuvem de alta performance",
                      "Certificado de segurança SSL (HTTPS) renovado ativo",
                      "Gestão anual do registro de domínio",
                      "Monitoramento de segurança e backups periódicos",
                      "Atualizações pontuais de fotos ou textos de serviços",
                      "Suporte direto no WhatsApp com tempo de resposta ágil"
                    ].map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3C3831]">
                        <Check className="w-4 h-4 text-[#1B3A6B] mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WA_QUESTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full justify-center"
                >
                  Tirar Dúvidas
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </a>
              </AnimatedSection>

            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#EDE7D9] border-t border-[#D9D2C4] py-8">
        <div className="container-uniq flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" onClick={handleLogoClick} className="cursor-pointer" aria-label="Ir para o topo">
            <Logo />
          </Link>
          <p className="text-[0.6875rem] text-[#8A8278] font-light">
            © {new Date().getFullYear()} Oni Face. Desenvolvido por Diego Costa
          </p>
        </div>
      </footer>
    </div>
  );
}
