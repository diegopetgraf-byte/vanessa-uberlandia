"use client";

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { PillarCard } from '@/components/ui/PillarCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { CTABanner } from '@/components/ui/CTABanner';
import { TREATMENTS } from '@/data/treatments';
import { googleReviews } from '@/data/reviews';
import { getWhatsAppUrl } from '@/lib/utils';
import { ArrowRight, ArrowDown, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TREATMENT_IMAGES: Record<string, string> = {
  'harmonizacao-facial': '/card_harmonizacao.jpg',
  'toxina-botulinica': '/card_facial_injectables.jpg',
  'preenchimento-labial': '/labial.jpeg',
  'preenchimento-facial': '/card_face_profile.png',
  'bioestimuladores-de-colageno': '/bioestimuladores_final.jpg',
  'bioestimuladores-corporais': '/card_bioestimuladores.jpg',
  'protocolos-flacidez': '/card_body_planning.jpg',
  'protocolos-gordura-localizada': '/planejamento-estetica-corporal-facial.webp',
  // ~30% placeholders with camera icon:
  'fios-de-sustentacao': '',
  'skinbooster': '',
  'protocolos-celulite': '',
  'lipo-de-papada': '',
};

// Curated sequence alternating between facial and corporal procedures
const MIXED_TREATMENT_IDS = [
  'harmonizacao-facial',
  'bioestimuladores-corporais',
  'preenchimento-labial',
  'protocolos-flacidez',
  'toxina-botulinica',
  'protocolos-gordura-localizada',
  'bioestimuladores-de-colageno',
  'protocolos-celulite',
  'preenchimento-facial',
  'lipo-de-papada',
  'skinbooster',
  'fios-de-sustentacao',
];

export function HomeClient() {
  const whatsappGeneralUrl = getWhatsAppUrl('geral');
  const whatsappFacialUrl = getWhatsAppUrl('facial');
  const whatsappCursosUrl = getWhatsAppUrl('cursos');

  // Treatments Carousel
  const [treatmentsRef, emblaTreatmentsApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 3800, stopOnInteraction: false })]
  );
  const scrollTreatmentsPrev = () => emblaTreatmentsApi && emblaTreatmentsApi.scrollPrev();
  const scrollTreatmentsNext = () => emblaTreatmentsApi && emblaTreatmentsApi.scrollNext();

  // Testimonials Carousel
  const [testimonialsRef, emblaTestimonialsApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const scrollTestimonialsPrev = () => emblaTestimonialsApi && emblaTestimonialsApi.scrollPrev();
  const scrollTestimonialsNext = () => emblaTestimonialsApi && emblaTestimonialsApi.scrollNext();

  // Ordered mixed treatments list
  const mixedTreatments = MIXED_TREATMENT_IDS
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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <FloatingWhatsApp />

      <main className="flex-1">

        {/* ── HERO ── */}
        <section id="home" className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png"
              alt="Clínica FS Fabiana Sobral — Estética Avançada"
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[#1E1B18]/65 sm:bg-[#1E1B18]/45" />
          </div>

          <div className="relative z-10 container-uniq w-full flex flex-col items-start justify-end pb-10 sm:pb-14 pt-20 md:justify-center md:py-24 lg:py-28" style={{ minHeight: 'calc(100vh - 5rem)' }}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4 sm:mb-6"
            >
              <span className="text-[0.6875rem] font-semibold tracking-[0.2em] uppercase text-[rgba(250,250,248,0.85)] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
                CLÍNICA FS · FABIANA SOBRAL · R. OSCAR FREIRE, 2249
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-light text-[#FAFAF8] leading-[1.08] mb-4 sm:mb-6 max-w-4xl"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '-0.03em' }}
            >
              Rejuvenescimento que preserva quem você é.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg text-[rgba(250,250,248,0.9)] leading-relaxed max-w-2xl font-light mb-2 sm:mb-0"
            >
              Uma abordagem personalizada de estética avançada que une ciência, estratégia e naturalidade para valorizar a beleza que já existe em você.
            </motion.p>

            {/* CTAs (Visible on desktop & tablet, hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden sm:flex flex-wrap items-center gap-4 mt-6 sm:mt-8"
            >
              <a href={whatsappFacialUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                Agendar Avaliação
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <Link href="/#quiet-beauty" className="btn btn-outline border-[rgba(250,250,248,0.5)] text-[#FAFAF8] hover:border-[#FAFAF8] hover:bg-white/10">
                Conheça o Quiet Beauty FS
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
                <ArrowDown className="w-4 h-4 text-[rgba(250,250,248,0.5)]" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── QUIET BEAUTY FS ── */}
        <section id="quiet-beauty" className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left" className="lg:col-span-6">
                <span className="eyebrow mb-4 block">Filosofia Exclusiva</span>
                <p className="pull-quote mb-6 text-2xl sm:text-3xl text-[#1E1B18]">
                  "A beleza não precisa ser transformada. Ela pode ser compreendida, valorizada e cuidada."
                </p>
                <span className="divider mb-6" aria-hidden="true" />
                <Link href="/#fabiana" className="btn btn-ghost text-xs inline-flex items-center gap-2">
                  Conheça a trajetória de Fabiana Sobral
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </AnimatedSection>

              <AnimatedSection delay={0.15} className="lg:col-span-6">
                <div className="space-y-4 text-sm sm:text-base text-[#6B635B] leading-relaxed font-light">
                  <p>
                    Fabiana Sobral desenvolveu o Quiet Beauty FS a partir de uma visão de estética que respeita a identidade, a proporção e o tempo de cada pessoa.
                  </p>
                  <p>
                    Mais do que escolher procedimentos isolados, cada tratamento começa com uma escuta genuína, análise minuciosa da anatomia e planejamento estratégico construído para criar resultados elegantes, progressivos e duradouros.
                  </p>
                  <p>
                    O objetivo nunca é criar um rosto padronizado, mas recuperar sustentação, vitalidade e harmonia com total naturalidade facial e corporal.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── PILARES ── */}
        <section id="pilares" className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection className="mb-10">
              <SectionTitle
                eyebrow="O Método"
                title="Os pilares do Quiet Beauty FS"
                subtitle="Uma abordagem de rejuvenescimento construída sobre princípios que guiam cada avaliação e tratamento."
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  numeral: '01',
                  title: 'Naturalidade',
                  description: 'Resultados percebidos pela aparência descansada e refinada — nunca pela artificialidade. O objetivo é revelar, não transformar.',
                  items: ['Proporção anatômica', 'Identidade preservada', 'Sutileza elegante', 'Sem exageros'],
                },
                {
                  numeral: '02',
                  title: 'Estratégia',
                  description: 'Nenhum procedimento é feito de forma isolada. Cada técnica é selecionada como parte de um plano individualizado e coerente.',
                  items: ['Avaliação diagnóstica', 'Planejamento personalizado', 'Técnica com propósito', 'Evolução progressiva'],
                },
                {
                  numeral: '03',
                  title: 'Ciência',
                  description: 'Base científica sólida, biomateriais de padrão internacional e tecnologia de ponta a serviço da longevidade cutânea.',
                  items: ['Base científica', 'Biomateriais de excelência', 'Protocolos validados', 'Segurança clínica'],
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
        <section id="diferenciais" className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <AnimatedSection className="mb-10">
              <SectionTitle
                eyebrow="A Experiência FS"
                title="Uma abordagem diferente"
                subtitle="Cuidado centrado no paciente em todas as etapas da jornada estética."
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Escuta Atenta', text: 'Antes da técnica, existe uma conversa profunda para compreender expectativas, histórico e rotina.' },
                { label: 'Olhar Individual', text: 'Cada estrutura é única: anatomia óssea, tônus muscular e proporções orientam todas as decisões.' },
                { label: 'Planejamento', text: 'Procedimentos são integrados como etapas de um cronograma estratégico de rejuvenescimento.' },
                { label: 'Elegância', text: 'O objetivo é valorizar a beleza que já existe em você — com discrição, sofisticação e propósito.' },
              ].map((item, idx) => (
                <AnimatedSection key={item.label} delay={idx * 0.06}>
                  <div className="card-uniq p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="divider mb-4" aria-hidden="true" />
                      <h3 className="font-heading text-xl text-[#1E1B18] mb-2">{item.label}</h3>
                      <p className="text-xs sm:text-sm text-[#6B635B] leading-relaxed font-light">{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONHEÇA A CLÍNICA (MASONRY LUXURY GALLERY) ── */}
        <section id="clinica" className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection className="mb-10">
              <SectionTitle
                eyebrow="Ambiente & Conforto"
                title="Conheça a Clínica FS"
                subtitle="Espaço acolhedor e discreto na Rua Oscar Freire, 2249 - Pinheiros, São Paulo — pensado para que sua experiência comece antes mesmo do tratamento."
              />
            </AnimatedSection>

            {/* Masonry / Staggered Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
              <AnimatedSection className="col-span-2 row-span-2" delay={0}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/11] bg-[#EAE7E0] shadow-md h-full">
                  <img
                    src="/gallery-3.png"
                    alt="Atendimento e ambiente Clínica FS"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#EAE7E0] shadow-sm">
                  <img
                    src="/gallery-2.png"
                    alt="Detalhes e elegância Clínica FS"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#EAE7E0] shadow-sm">
                  <img
                    src="/gallery-4.png"
                    alt="Espaço e consultório Oscar Freire"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#EAE7E0] shadow-sm">
                  <img
                    src="/gallery-5.png"
                    alt="Estrutura e conforto Clínica FS"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-[#EAE7E0] shadow-sm">
                  <img
                    src="/gallery-1.png"
                    alt="Harmonia e detalhes da Clínica FS"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection className="mt-8 flex justify-center" delay={0.2}>
              <a href={whatsappGeneralUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Agendar Avaliação na Oscar Freire
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FABIANA SOBRAL ── */}
        <section id="fabiana" className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <AnimatedSection direction="left" className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-[#EAE7E0] shadow-md">
                  <img
                    src="/fabiana-sobral.png"
                    alt="Dra. Fabiana Sobral — Biomédica, Especialista em Estética Avançada"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {/* Floating credential */}
                <div className="absolute bottom-4 right-4 lg:-right-4 card-uniq px-5 py-3.5 max-w-[250px] shadow-lg bg-white">
                  <p className="font-heading text-lg text-[#1E1B18] leading-tight">Fabiana Sobral</p>
                  <p className="text-[0.65rem] text-[#9A9188] mt-0.5 tracking-wide">Biomédica · Estética Avançada</p>
                  <p className="text-[0.65rem] text-[#6B1E2E] mt-0.5 tracking-wide font-semibold">Criadora do Quiet Beauty FS</p>
                </div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection delay={0.15} className="lg:col-span-7">
                <span className="eyebrow mb-4 block">Sobre Fabiana Sobral</span>
                <h2 className="text-headline mb-6">
                  Mais do que transformar: transformar a relação com a própria beleza.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#6B635B] leading-relaxed mb-8 font-light">
                  <p>
                    Fabiana Sobral construiu sua trajetória na estética a partir de uma visão que transcende procedimentos pontuais. Para ela, cuidar da beleza significa compreender cada pessoa, respeitar sua individualidade e construir estratégias capazes de acompanhar as transformações do tempo.
                  </p>
                  <p>
                    Sua abordagem une rigor técnico, tecnologia, planejamento e um olhar humano e atento para criar resultados elegantes, progressivos e naturais na estética facial e corporal.
                  </p>
                  <p>
                    Criadora do método <em>Quiet Beauty FS</em>, Fabiana também atua na formação de profissionais de excelência através do Instituto FS.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a href={whatsappGeneralUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <Link href="/#instituto-fs" className="btn btn-outline">
                    Conhecer o Instituto FS
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── TRATAMENTOS (CARROSSEL FACIAL + CORPORAL MISTURADOS) ── */}
        <section id="tratamentos" className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            
            {/* Header with Title and Carousel Arrows */}
            <AnimatedSection className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="eyebrow mb-2 block">Facial & Corporal</span>
                <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl">Tratamentos Personalizados</h2>
                <p className="text-sm sm:text-base text-[#6B635B] mt-2 font-light max-w-2xl">
                  Protocolos desenvolvidos para harmonizar e revitalizar com naturalidade e precisão científica.
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                <button
                  onClick={scrollTreatmentsPrev}
                  className="w-10 h-10 rounded-full border border-[#EAE7E0] bg-white hover:border-[#6B1E2E] hover:text-[#6B1E2E] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Tratamento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollTreatmentsNext}
                  className="w-10 h-10 rounded-full border border-[#EAE7E0] bg-white hover:border-[#6B1E2E] hover:text-[#6B1E2E] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Próximo tratamento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </AnimatedSection>

            {/* Treatments Carousel */}
            <div ref={treatmentsRef} className="overflow-hidden cursor-grab active:cursor-grabbing pb-2">
              <div className="flex gap-5">
                {mixedTreatments.map((treatment) => (
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
                Tratamentos Mais Procurados
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section id="como-funciona" className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <AnimatedSection className="mb-12">
              <SectionTitle
                eyebrow="Jornada do Paciente"
                title="Do primeiro contato ao resultado"
                subtitle="Uma jornada estruturada e transparente, pensada para que você entenda cada etapa com segurança."
              />
            </AnimatedSection>

            <div className="relative">
              <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-[#EAE7E0] z-0" aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {[
                  { num: '01', title: 'Escuta', text: 'Entendemos suas expectativas, incômodos e rotina — sem pressa e com atenção total.' },
                  { num: '02', title: 'Avaliação', text: 'Analisamos anatomia, proporções e qualidade tecidual facial e corporal.' },
                  { num: '03', title: 'Planejamento', text: 'Definimos juntas as prioridades e a estratégia mais adequada para você.' },
                  { num: '04', title: 'Tratamento', text: 'Procedimentos executados com biomateriais nobres, técnica suave e precisão.' },
                  { num: '05', title: 'Acompanhamento', text: 'Observamos a evolução e ajustamos a estratégia conforme a resposta biológica.' },
                ].map((step, idx) => (
                  <AnimatedSection key={step.num} delay={idx * 0.06} className="flex flex-col items-center text-center gap-3">
                    <div className="timeline-number bg-[#FAFAF8]">{step.num}</div>
                    <h3 className="font-heading text-lg text-[#1E1B18]">{step.title}</h3>
                    <p className="text-xs text-[#6B635B] leading-relaxed font-light">{step.text}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INSTITUTO FS ── */}
        <section id="instituto-fs" className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left" className="lg:col-span-5">
                <span className="eyebrow mb-4 block">Instituto FS</span>
                <h2 className="text-headline mb-4">
                  Para profissionais que querem ir além da técnica.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#6B635B] leading-relaxed mb-6 font-light">
                  <p>
                    O Instituto FS é a vertente educacional da Clínica FS, onde Fabiana Sobral compartilha o conhecimento, raciocínio clínico e metodologia que construiu ao longo da sua trajetória.
                  </p>
                  <p>
                    Cursos, imersões e mentorias voltados para profissionais habilitados que buscam aprimorar técnica e entregar resultados refinados.
                  </p>
                </div>
                <a href={whatsappCursosUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Falar sobre Cursos e Imersões
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.15} className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Residência em Harmonização',
                      desc: 'Programa intensivo de prática clínica e aperfeiçoamento anatômico.',
                    },
                    {
                      title: 'Bioestimuladores de Colágeno',
                      desc: 'Planejamento, indicação e aplicação de bioestimuladores faciais e corporais.',
                    },
                    {
                      title: 'Preenchimento Labial Avançado',
                      desc: 'Técnicas de refinamento labial para resultados naturais e simétricos.',
                    },
                    {
                      title: 'Treinamentos e Imersões FS',
                      desc: 'Experiências práticas voltadas ao desenvolvimento clínico de alto nível.',
                    },
                  ].map((course, idx) => (
                    <div key={course.title} className="card-uniq p-5 flex flex-col justify-between bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[rgba(107,30,46,0.08)] flex items-center justify-center flex-shrink-0">
                          <span className="text-[0.6rem] font-bold text-[#6B1E2E]">{String(idx + 1).padStart(2, '0')}</span>
                        </div>
                        <h4 className="font-heading text-base text-[#1E1B18]">{course.title}</h4>
                      </div>
                      <p className="text-xs text-[#6B635B] leading-relaxed font-light">{course.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS (GOOGLE REVIEWS CAROUSEL) ── */}
        <section id="depoimentos" className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <AnimatedSection className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionTitle
                eyebrow="Avaliações Verificadas"
                title="A experiência de quem já viveu o Quiet Beauty FS"
                subtitle="Depoimentos reais de pacientes atendidos por Fabiana Sobral."
                align="left"
              />
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  onClick={scrollTestimonialsPrev}
                  className="w-10 h-10 rounded-full border border-[#EAE7E0] bg-white hover:border-[#6B1E2E] hover:text-[#6B1E2E] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Avaliação anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollTestimonialsNext}
                  className="w-10 h-10 rounded-full border border-[#EAE7E0] bg-white hover:border-[#6B1E2E] hover:text-[#6B1E2E] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                  aria-label="Próxima avaliação"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </AnimatedSection>

            <div ref={testimonialsRef} className="overflow-hidden cursor-grab active:cursor-grabbing pb-2">
              <div className="flex gap-6">
                {googleReviews.map((review) => (
                  <div key={review.id} className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                    <TestimonialCard
                      text={review.texto}
                      author={review.nome}
                      rating={review.nota}
                      date={review.quando}
                      meta={review.meta}
                      verificado={review.verificado}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="contato-cta" className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Rua Oscar Freire, 2249 — Pinheiros, São Paulo"
                title="Sua beleza não precisa ser transformada."
                subtitle="Ela pode ser compreendida, valorizada e cuidada. Agende uma avaliação presencial e entenda o que faz sentido para você, para o seu rosto, corpo e momento."
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
