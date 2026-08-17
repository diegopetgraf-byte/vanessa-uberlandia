"use client";

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { PillarCard } from '@/components/ui/PillarCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { TREATMENTS } from '@/data/treatments';
import { getWhatsAppUrl } from '@/lib/utils';
import { ArrowRight, ArrowDown, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

/* ── Butterfly SVG — hero watermark ── */
const ButterflyHero = () => (
  <svg
    viewBox="0 0 200 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full butterfly-watermark"
    aria-hidden="true"
  >
    {/* Left upper wing */}
    <path
      d="M100 65 C80 30, 30 15, 8 40 C-8 60, 30 90, 100 65Z"
      fill="white"
    />
    {/* Left lower wing */}
    <path
      d="M100 65 C75 75, 35 100, 20 90 C5 80, 25 60, 100 65Z"
      fill="white"
      opacity="0.7"
    />
    {/* Right upper wing */}
    <path
      d="M100 65 C120 30, 170 15, 192 40 C208 60, 170 90, 100 65Z"
      fill="white"
    />
    {/* Right lower wing */}
    <path
      d="M100 65 C125 75, 165 100, 180 90 C195 80, 175 60, 100 65Z"
      fill="white"
      opacity="0.7"
    />
    {/* Body */}
    <ellipse cx="100" cy="65" rx="3.5" ry="22" fill="white" opacity="0.9" />
    {/* Antennae */}
    <path d="M97 46 C90 28, 82 18, 78 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    <path d="M103 46 C110 28, 118 18, 122 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    {/* Wing detail lines */}
    <path d="M100 65 C80 45, 50 35, 30 38" stroke="white" strokeWidth="0.5" opacity="0.4" />
    <path d="M100 65 C120 45, 150 35, 170 38" stroke="white" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

/* ── Facial-only treatment images ── */
const TREATMENT_IMAGES: Record<string, string> = {
  'harmonizacao-facial': '/card_harmonizacao.jpg',
  'toxina-botulinica': '/card_facial_injectables.jpg',
  'preenchimento-labial': '/labial.jpeg',
  'blefaroplastia': '',
  'bioestimuladores-de-colageno': '/bioestimuladores_final.jpg',
  'fios-de-sustentacao': '',
  'skinbooster': '/skinbooster_final.jpg',
  'lipo-de-papada': '',
};

/* Facial-only — Oni Face is a facial boutique */
const FACIAL_TREATMENT_IDS = [
  'harmonizacao-facial',
  'toxina-botulinica',
  'preenchimento-labial',
  'blefaroplastia',
  'bioestimuladores-de-colageno',
  'skinbooster',
  'fios-de-sustentacao',
  'lipo-de-papada',
];

export function HomeClient() {
  const whatsappGeneralUrl = getWhatsAppUrl('geral');
  const whatsappFacialUrl = getWhatsAppUrl('facial');
  const whatsappMentoriaUrl = getWhatsAppUrl('mentoria');

  // Treatments Carousel
  const [treatmentsRef, emblaTreatmentsApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 3800, stopOnInteraction: false })]
  );
  const scrollTreatmentsPrev = () => emblaTreatmentsApi && emblaTreatmentsApi.scrollPrev();
  const scrollTreatmentsNext = () => emblaTreatmentsApi && emblaTreatmentsApi.scrollNext();

  // Facial-only treatments list
  const facialTreatments = FACIAL_TREATMENT_IDS
    .map(id => TREATMENTS.find(t => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))
    .map(t => {
      const customImg = TREATMENT_IMAGES[t.id];
      const isPlaceholder = customImg === '';
      return {
        ...t,
        imageSrc: isPlaceholder ? undefined : (customImg || t.imageSrc),
        isPlaceholder,
      };
    });

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden">
          {/* Background image — newhero.png (light toned, cream + royal blue) */}
          <div className="absolute inset-0 z-0">
            <img
              src="/newhero.png"
              alt="Oni Face · Facial Boutique — Dra. Vanessa Sanabria Bevilaqua"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
            />
            {/* Subtle gradient overlay — left side for text legibility, preserves image on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1714]/60 via-[#1A1714]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/40 via-transparent to-transparent" />
            {/* Royal blue brand gradient tint for desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B]/50 via-[#1B3A6B]/20 to-transparent hidden lg:block opacity-75" />
          </div>

          {/* Butterfly watermark — top right, very subtle */}
          <div className="absolute top-16 right-8 md:right-16 z-10 w-32 md:w-48 opacity-[0.06] pointer-events-none" aria-hidden="true">
            <ButterflyHero />
          </div>

          <div className="relative z-10 container-uniq w-full flex flex-col items-start justify-end pb-10 sm:pb-14 pt-20 md:justify-center md:py-24 lg:py-28" style={{ minHeight: 'calc(100vh - 5rem)' }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 sm:mb-6"
            >
              <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-[rgba(247,243,236,0.8)] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B8965A]" />
                ONI FACE · FACIAL BOUTIQUE · UBERLÂNDIA, MG
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-light text-[#F7F3EC] leading-[1.08] mb-4 sm:mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.75rem)', letterSpacing: '-0.03em' }}
            >
              A face dos seus sonhos ainda deve parecer sua.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-[rgba(247,243,236,0.88)] leading-relaxed max-w-xl font-light mb-2 sm:mb-0"
            >
              Especialistas em <strong className="font-medium text-[#B8965A]">Protocolos Full Face</strong>. Um planejamento integrado e personalizado de estética avançada que une ciência, precisão e sensibilidade para valorizar a beleza que já existe em você.
            </motion.p>

            {/* Gold divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hidden sm:block origin-left h-px w-12 bg-[#B8965A] mt-6 mb-6"
              aria-hidden="true"
            />

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden sm:flex flex-wrap items-center gap-4"
            >
              <a href={whatsappFacialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                Agendar Avaliação
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link href="/#oni-face" className="btn btn-outline border-[rgba(247,243,236,0.45)] text-[#F7F3EC] hover:border-[#B8965A] hover:text-[#B8965A] hover:bg-transparent">
                Conhecer a Oni Face
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-4 h-4 text-[rgba(247,243,236,0.5)]" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── ONI FACE MANIFESTO ── */}
        <section id="oni-face" className="section bg-[#F7F3EC] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left" className="lg:col-span-6">
                <span className="eyebrow mb-4 block">Conceito de Marca</span>
                <p className="pull-quote mb-6 text-2xl sm:text-3xl text-[#1A1714]">
                  "ONI significa a face dos sonhos. E transformação está no próprio nome de Vanessa. Na Oni Face, essas duas ideias se encontram."
                </p>
                <span className="divider mb-6" aria-hidden="true" />
                <Link href="/#dra-vanessa" className="btn btn-ghost text-xs inline-flex items-center gap-2">
                  Conheça a Dra. Vanessa Sanabria
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.15} className="lg:col-span-6">
                <div className="space-y-4 text-sm sm:text-base text-[#8A8278] leading-relaxed font-light">
                  <p>
                    Não perseguimos rostos padronizados. Não buscamos transformar você em outra pessoa.
                  </p>
                  <p>
                    Cada tratamento parte de uma leitura individual da face — das proporções, dos movimentos e, principalmente, daquilo que você deseja enxergar quando se olha no espelho.
                  </p>
                  <p>
                    A transformação certa não apaga sua identidade. Ela a revela.
                  </p>
                  {/* Brand signature */}
                  <div className="pt-4 border-t border-[#D9D2C4]">
                    <p className="font-heading text-xl text-[#1A1714] italic">
                      "Transformar sem descaracterizar."
                    </p>
                    <p className="text-xs tracking-widest uppercase text-[#B8965A] mt-2 font-medium">
                      — Oni Face
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── TERRITÓRIOS DE COMUNICAÇÃO (PILARES) ── */}
        <section id="pilares" className="section bg-[#EDE7D9] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.035] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <AnimatedSection className="mb-10">
              <SectionTitle
                eyebrow="Territórios"
                title="O que nos move"
                subtitle="Quatro ideias que orientam cada tratamento, cada escolha, cada resultado na Oni Face."
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  numeral: '01',
                  title: 'Desejo',
                  description: 'A face dos sonhos não é uma referência externa. É a melhor expressão da sua própria beleza — descoberta com olhar individual.',
                  items: ['Leitura facial profunda', 'Escuta genuína', 'Objetivos personalizados', 'Sem padronização'],
                },
                {
                  numeral: '02',
                  title: 'Transformação',
                  description: 'A borboleta representa evolução delicada e mudança consciente. Cada protocolo é desenhado para revelar, não para apagar.',
                  items: ['Protocolos completos', 'Precisão científica', 'Resultados imediatos', 'Evolução progressiva'],
                },
                {
                  numeral: '03',
                  title: 'Individualidade',
                  description: 'Cada face possui sua arquitetura. Cada planejamento deve ser único — construído a partir da anatomia e identidade de cada pessoa.',
                  items: ['Análise anatômica', 'Planejamento exclusivo', 'Proporção preservada', 'Identidade respeitada'],
                },
                {
                  numeral: '04',
                  title: 'Boutique',
                  description: 'Menos clínica convencional. Mais exclusividade, atenção, curadoria e experiência individual em cada etapa da jornada.',
                  items: ['Experiência exclusiva', 'Atenção total', 'Curadoria de protocolos', 'Ambiente acolhedor'],
                },
              ].map((pillar, idx) => (
                <AnimatedSection key={pillar.numeral} delay={idx * 0.08}>
                  <PillarCard {...pillar} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section id="diferenciais" className="section bg-[#F7F3EC] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <AnimatedSection className="mb-10">
              <SectionTitle
                eyebrow="A Experiência Oni Face"
                title="Uma abordagem diferente"
                subtitle="Cuidado centrado em você, em todas as etapas da sua jornada facial."
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Escuta Individual', text: 'Antes de qualquer técnica, existe uma conversa profunda para compreender expectativas, histórico e o que você deseja enxergar no espelho.' },
                { label: 'Olhar Autoral', text: 'Cada estrutura facial é única: anatomia óssea, tônus muscular e proporções orientam todas as decisões — sem padronização.' },
                { label: 'Protocolo Completo', text: 'A especialidade da Dra. Vanessa são protocolos faciais completos — tratamentos integrados que entregam resultado imediato e satisfatório.' },
                { label: 'Naturalidade Boutique', text: 'O objetivo não é que percebam o procedimento. É que percebam você — mais descansada, harmônica e confiante.' },
              ].map((item, idx) => (
                <AnimatedSection key={item.label} delay={idx * 0.06}>
                  <div className="card-uniq p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="divider mb-4" aria-hidden="true" />
                      <h3 className="font-heading text-xl text-[#1A1714] mb-2">{item.label}</h3>
                      <p className="text-xs sm:text-sm text-[#8A8278] leading-relaxed font-light">{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── DRA. VANESSA SANABRIA ── */}
        <section id="dra-vanessa" className="section bg-[#EDE7D9] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.08] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <AnimatedSection direction="left" className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-[#D9D2C4] shadow-md">
                  <img
                    src="/professional.jpg"
                    alt="Dra. Vanessa Sanabria Bevilaqua — Especialista em Estética Facial"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {/* Floating credential */}
                <div className="absolute bottom-4 right-4 lg:-right-4 card-uniq px-5 py-3.5 max-w-[260px] shadow-lg bg-white">
                  <p className="font-heading text-lg text-[#1A1714] leading-tight">Dra. Vanessa Sanabria</p>
                  <p className="text-[0.65rem] text-[#8A8278] mt-0.5 tracking-wide">Especialista em Full Face</p>
                  <p className="text-[0.65rem] text-[#B8965A] mt-0.5 tracking-wide font-semibold">Gerenciamento do Envelhecimento</p>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection delay={0.15} className="lg:col-span-7">
                <span className="eyebrow mb-4 block">Sobre Dra. Vanessa Sanabria</span>
                <h2 className="text-headline mb-6">
                  Você vai sair daqui se reconhecendo ainda mais bonita.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#8A8278] leading-relaxed mb-8 font-light">
                  <p>
                    Dra. Vanessa Sanabria é especialista em protocolos Full Face e gerenciamento do envelhecimento com um olhar muito particular: ela não busca criar uma nova face para você. Ela busca revelar, com precisão e sensibilidade, a melhor expressão da face que você já tem.
                  </p>
                  <p>
                    Sua especialidade são protocolos faciais completos — tratamentos que entregam um resultado imediato, satisfatório e naturalmente bonito. Com foco especial em blefaroplastia e harmonia do terço superior, ela transforma o olhar sem que pareça tratado.
                  </p>
                  <p>
                    Além da clínica, ministra aulas e mentorias para profissionais que querem aprender a transformar faces com responsabilidade, técnica e olhar estético apurado.
                  </p>
                </div>

                {/* Credentials grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { label: 'CRO-76320 MG', sub: 'Registro Profissional' },
                    { label: 'Bucomaxilofacial', sub: 'Grad. em andamento' },
                    { label: 'Blefaroplastia', sub: 'Foco especializado' },
                    { label: 'Mentora', sub: 'Cursos & Imersões' },
                  ].map((c) => (
                    <div key={c.label} className="card-uniq px-4 py-3 bg-white">
                      <p className="font-heading text-base text-[#1A1714] leading-tight">{c.label}</p>
                      <p className="text-[0.65rem] text-[#B8965A] mt-0.5 tracking-wide font-medium uppercase">{c.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a href={whatsappGeneralUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── TRATAMENTOS FACIAIS ── */}
        <section id="tratamentos" className="section bg-[#F7F3EC] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.03] pointer-events-none" />
          <div className="container-uniq relative z-10">
            {/* Header with Title and Carousel Arrows */}
            <AnimatedSection className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="eyebrow mb-2 block">Assinatura Oni Face</span>
                <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl">Carro-Chefe: Protocolos Full Face</h2>
                <p className="text-sm sm:text-base text-[#8A8278] mt-2 font-light max-w-2xl">
                  Reestruturação e sustentação completa da face. Planejamentos integrados de alta precisão que combinam técnicas injetáveis de ponta para um rejuvenescimento harmônico e natural.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                <button
                  onClick={scrollTreatmentsPrev}
                  className="w-10 h-10 rounded-full border border-[#D9D2C4] bg-white hover:border-[#1B3A6B] hover:text-[#1B3A6B] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Tratamento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollTreatmentsNext}
                  className="w-10 h-10 rounded-full border border-[#D9D2C4] bg-white hover:border-[#1B3A6B] hover:text-[#1B3A6B] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Próximo tratamento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </AnimatedSection>

            {/* Treatments Carousel */}
            <div ref={treatmentsRef} className="overflow-hidden cursor-grab active:cursor-grabbing pb-2">
              <div className="flex gap-5">
                {facialTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    className="flex-none w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px]"
                  >
                    <TreatmentCard
                      id={treatment.id}
                      name={treatment.name}
                      subtitle={treatment.subtitle}
                      imageSrc={treatment.imageSrc}
                      href={`/tratamentos/${treatment.id}`}
                      showCategory={false}
                      compact={true}
                      isPlaceholder={treatment.isPlaceholder}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link */}
            <AnimatedSection className="mt-8 flex justify-center" delay={0.15}>
              <Link href="/tratamentos" className="btn btn-wine">
                Ver Todos os Tratamentos
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── JORNADA DO PACIENTE ── */}
        <section id="como-funciona" className="section bg-[#EDE7D9] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.035] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <AnimatedSection className="mb-12">
              <SectionTitle
                eyebrow="Sua Jornada"
                title="Do primeiro contato ao resultado"
                subtitle="Uma jornada estruturada e transparente — pensada para que você entenda cada etapa com segurança e confiança."
              />
            </AnimatedSection>

            <div className="relative">
              <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-[#D9D2C4] z-0" aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {[
                  { num: '01', title: 'Escuta', text: 'Entendemos seus desejos, incômodos e o que você imagina enxergar quando se olha no espelho.' },
                  { num: '02', title: 'Avaliação', text: 'Leitura individual da face — anatomia, proporções, qualidade tecidual e movimento.' },
                  { num: '03', title: 'Planejamento', text: 'Definimos juntos as prioridades e o protocolo mais adequado à sua face e ao seu momento.' },
                  { num: '04', title: 'Tratamento', text: 'Protocolos executados com precisão, biomateriais nobres e técnica suave.' },
                  { num: '05', title: 'Acompanhamento', text: 'Observamos a evolução e ajustamos a estratégia conforme a resposta da sua face.' },
                ].map((step, idx) => (
                  <AnimatedSection key={step.num} delay={idx * 0.06} className="flex flex-col items-center text-center gap-3">
                    <div className="timeline-number bg-[#EDE7D9]">{step.num}</div>
                    <h3 className="font-heading text-lg text-[#1A1714]">{step.title}</h3>
                    <p className="text-xs text-[#8A8278] leading-relaxed font-light">{step.text}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MENTORIA ── */}
        <section id="mentoria" className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left" className="lg:col-span-5">
                <span className="eyebrow mb-4 block">Educação & Mentoria</span>
                <h2 className="text-headline mb-4">
                  Para profissionais que querem dominar a face de ponta a ponta.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#8A8278] leading-relaxed mb-6 font-light">
                  <p>
                    Dra. Vanessa ministra cursos de imersão e mentorias individuais voltadas para profissionais habilitados que buscam desenvolver raciocínio clínico aprofundado em protocolos Full Face.
                  </p>
                  <p>
                    Aprenda a planejar tratamentos integrados complexos, combinando bioestimuladores, preenchimentos estratégicos e toxina com naturalidade e alta rentabilidade de consultório.
                  </p>
                </div>
                <a href={whatsappMentoriaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Falar sobre Cursos e Mentorias
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.15} className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Raciocínio Clínico Full Face',
                      desc: 'Como estruturar um plano de tratamento facial integrado que entrega alta fidelização de paciente e resultados elegantes.',
                    },
                    {
                      title: 'Gerenciamento do Envelhecimento',
                      desc: 'Visão estratégica sobre como o tempo afeta a face — e como tratar com naturalidade, precisão e longevidade.',
                    },
                    {
                      title: 'Harmonização Avançada',
                      desc: 'Anatomia, proporção e técnica para criar resultados harmônicos que pertencem à face de cada paciente.',
                    },
                    {
                      title: 'Mentorias Individuais',
                      desc: 'Acompanhamento personalizado para profissionais que querem elevar seu padrão clínico e estético.',
                    },
                  ].map((course, idx) => (
                    <div key={course.title} className="card-uniq p-5 flex flex-col justify-between bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[rgba(27,58,107,0.08)] flex items-center justify-center flex-shrink-0">
                          <span className="text-[0.6rem] font-bold text-[#1B3A6B]">{String(idx + 1).padStart(2, '0')}</span>
                        </div>
                        <h4 className="font-heading text-base text-[#1A1714]">{course.title}</h4>
                      </div>
                      <p className="text-xs text-[#8A8278] leading-relaxed font-light">{course.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── GALERIA MASONRY ── */}
        <section id="galeria" className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <AnimatedSection className="mb-10">
              <SectionTitle
                eyebrow="Oni Face · Uberlândia, MG"
                title="O espaço e a experiência"
                subtitle="Uma boutique criada para que sua transformação comece antes mesmo do procedimento."
              />
            </AnimatedSection>

            {/* Masonry grid — 11 images (0–10), alternating sizes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">

              {/* Row 1 — large hero spanning 2 cols */}
              <AnimatedSection delay={0} className="col-span-2 row-span-2">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/11] bg-[#D9D2C4] shadow-md h-full group">
                  <img src="/oni-0.png" alt="Dra. Vanessa Sanabria — Oni Face" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.05}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-1.jpg" alt="Oni Face — Ambiente" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-2.jpg" alt="Oni Face — Espaço" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-3.jpg" alt="Oni Face — Detalhes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.13}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-4.jpg" alt="Oni Face — Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              {/* Second large block spanning 2 cols */}
              <AnimatedSection delay={0.15} className="col-span-2">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9] bg-[#D9D2C4] shadow-md group">
                  <img src="/oni-5.jpg" alt="Oni Face — Consultório" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.18}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-6.jpg" alt="Oni Face — Dra. Vanessa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-7.jpg" alt="Oni Face — Equipamentos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.22}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-8.jpg" alt="Oni Face — Experiência" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.24}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-9.jpg" alt="Oni Face — Boutique" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>

              {/* Last vertical image */}
              <AnimatedSection delay={0.26} className="col-span-2 md:col-span-1">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-10.png" alt="Oni Face — A transformação que ainda parece você" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {/* Quote overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/80 via-[#1B3A6B]/20 to-transparent flex items-end p-5">
                    <p className="font-heading italic text-[#F7F3EC] text-base md:text-lg leading-snug" style={{ letterSpacing: '-0.01em' }}>
                      "A transformação que ainda parece você."
                    </p>
                  </div>
                </div>
              </AnimatedSection>

            </div>

            {/* CTA below gallery */}
            <AnimatedSection className="mt-8 flex justify-center" delay={0.2}>
              <a href={whatsappGeneralUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                Agendar Avaliação
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato-cta" className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Uberlândia, MG"
                title="A face dos seus sonhos começa pela sua."
                subtitle="Cada transformação na Oni Face parte da sua própria identidade. Ciência, sensibilidade e planejamento para resultados que parecem simplesmente seus. Agende uma avaliação com a Dra. Vanessa Sanabria."
                primaryLabel="Agendar pelo WhatsApp"
                primaryHref={whatsappGeneralUrl}
                secondaryLabel="Ver todos os tratamentos"
                secondaryHref="/tratamentos"
                variant="wine"
              />
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
