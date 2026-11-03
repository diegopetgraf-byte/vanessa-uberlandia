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
import { getFullFacePage, FULL_FACE_SUBPAGES } from '@/data/fullFace';
import { MapaOniFace } from '@/components/MapaOniFace';
import { SobreAMarca } from '@/components/marca/SobreAMarca';
import { GoogleReviews } from '@/components/marca/GoogleReviews';
import { VideoReels } from '@/components/VideoReels';
import { getWhatsAppUrl } from '@/lib/utils';
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

/* ── Facial-only treatment images ── */
const TREATMENT_IMAGES: Record<string, string> = {
  'harmonizacao-facial': '/card_harmonizacao.jpg',
  'toxina-botulinica': '/card_facial_injectables.jpg',
  'preenchimento-labial': '/labial.jpeg',
  'bioestimuladores-de-colageno': '/bioestimuladores_final.jpg',
  'skinbooster': '/skinbooster_final.jpg',
};

/* Facial-only, Oni Face is a facial boutique */
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

const FULL_FACE_PILAR = getFullFacePage('full-face');

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
        <section id="home" className="relative overflow-hidden bg-[#1B3A6B]">
          {/* Pattern da marca (borboletas douradas) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{ backgroundImage: 'url(/marca/pattern-dourado.webp)', backgroundSize: '240px' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#142C52] via-[#1B3A6B]/80 to-transparent pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 container-uniq w-full py-14 sm:py-20 lg:py-24 lg:min-h-[calc(100vh-5rem)] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
              <div className="lg:col-span-7">
                {/* Eyebrow */}
                <motion.div
                  initial={false}
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
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="font-heading font-light text-[#F7F3EC] leading-[1.08] mb-4 sm:mb-6 max-w-3xl"
                  style={{ fontSize: 'clamp(2.4rem, 5vw, 4.75rem)', letterSpacing: '-0.03em' }}
                >
                  A face dos seus sonhos ainda deve parecer sua.
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-base sm:text-lg text-[rgba(247,243,236,0.88)] leading-relaxed max-w-xl font-light"
                >
                  Dedicadas aos <strong className="font-medium text-[#D9BE8C]">Protocolos Full Face</strong>. Um planejamento integrado e personalizado de estética avançada que une ciência, precisão e sensibilidade para valorizar a beleza que já existe em você.
                </motion.p>

                {/* Gold divider */}
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="origin-left h-px w-12 bg-[#B8965A] mt-6 mb-6"
                  aria-hidden="true"
                />

                {/* CTAs */}
                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4"
                >
                  <a href={whatsappFacialUrl} target="_blank" rel="noopener noreferrer" className="btn min-h-11 justify-center bg-[#D9BE8C] text-[#142C52] hover:bg-[#F7F3EC]">
                    Agendar avaliação
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <Link href="/#oni-face" className="btn btn-outline min-h-11 justify-center border-[rgba(247,243,236,0.45)] text-[#F7F3EC] hover:border-[#B8965A] hover:text-[#D9BE8C] hover:bg-transparent">
                    Conhecer a Oni Face
                  </Link>
                </motion.div>
              </div>

              {/* Retrato da Dra. Vanessa */}
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="lg:col-span-5 relative max-w-sm sm:max-w-md mx-auto lg:max-w-none w-full"
              >
                <img
                  src="/marca/forma-dourada.webp"
                  alt=""
                  aria-hidden="true"
                  className="absolute -left-8 -bottom-8 w-2/3 opacity-90 pointer-events-none select-none"
                />
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#142C52] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] ring-1 ring-[#B8965A]/40">
                  <img
                    src="/dra/dra-vanessa-sanabria-retrato.webp"
                    alt="Dra. Vanessa Sanabria Bevilaqua, cirurgiã-dentista do Instituto Oni Face em Uberlândia"
                    width={1024}
                    height={1536}
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ONI FACE MANIFESTO ── */}
        <section id="oni-face" className="section bg-[#F7F3EC] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.45] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left" className="lg:col-span-6">
                <span className="eyebrow mb-4 block">Conceito de Marca</span>
                <p className="pull-quote mb-6 text-2xl sm:text-3xl text-[#1A1714]">
                  "ONI significa a face dos sonhos. E transformação está no próprio nome de Vanessa. Na Oni Face, essas duas ideias se encontram."
                </p>
                <span className="divider mb-6" aria-hidden="true" />
                <Link href="/#dra-vanessa" className="btn btn-ghost text-xs inline-flex items-center gap-2 min-h-11">
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
                    Cada tratamento parte de uma leitura individual da face: das proporções, dos movimentos e, principalmente, daquilo que você deseja enxergar quando se olha no espelho.
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
                      Oni Face
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── A MARCA ── */}
        <SobreAMarca />

        {/* Full Face: chamada para a página pilar */}
        {FULL_FACE_PILAR && (
          <section id="full-face" aria-labelledby="home-full-face-titulo" className="section bg-[#EDE7D9] relative overflow-hidden">
            <div className="container-uniq relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <AnimatedSection className="lg:col-span-5 order-2 lg:order-1">
                  <Link
                    href="/full-face"
                    className="group block relative overflow-hidden rounded-2xl bg-[#D9D2C4] aspect-[4/5] max-w-md mx-auto lg:max-w-none shadow-[0_24px_60px_-28px_rgba(27,58,107,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B3A6B]"
                    aria-label="Conhecer o Full Face, escultura facial"
                  >
                    <img
                      src={FULL_FACE_PILAR.heroImage}
                      alt={FULL_FACE_PILAR.heroAlt ?? ''}
                      width={1024}
                      height={1536}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </Link>
                </AnimatedSection>
                <AnimatedSection delay={0.1} className="lg:col-span-7 order-1 lg:order-2">
                  <span className="eyebrow mb-3 block text-[#8A6A32]">Full Face</span>
                  <h2 id="home-full-face-titulo" className="text-headline text-[#1A1714] mb-4">
                    {FULL_FACE_PILAR.h1}
                  </h2>
                  <p className="font-heading italic text-xl sm:text-2xl leading-snug text-[#3C3831] mb-4">
                    {FULL_FACE_PILAR.lead}
                  </p>
                  <p className="text-base leading-relaxed text-[#3C3831] mb-7">
                    {FULL_FACE_PILAR.secoes[0]?.paragrafos[0]}
                  </p>
                  <Link href="/full-face" className="btn btn-wine min-h-11">
                    Conhecer o Full Face
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <ul className="mt-7 flex flex-wrap gap-2" aria-label="Páginas de Full Face">
                    {FULL_FACE_SUBPAGES.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={p.rota}
                          className="inline-flex items-center min-h-11 px-4 rounded-full border border-[#C4BAA8] bg-[#F7F3EC] text-[0.8125rem] text-[#3C3831] transition-colors hover:border-[#1B3A6B] hover:text-[#1B3A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B]"
                        >
                          {p.nomeCurto}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              </div>
            </div>
          </section>
        )}

        <VideoReels />

        {/* ── TERRITÓRIOS DE COMUNICAÇÃO (PILARES) ── */}
        <section id="pilares" className="section bg-[#EDE7D9] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.18] pointer-events-none" />
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
                  description: 'A face dos sonhos não é uma referência externa. É a melhor expressão da sua própria beleza, descoberta com olhar individual.',
                  items: ['Leitura facial profunda', 'Escuta genuína', 'Objetivos personalizados', 'Sem padronização'],
                },
                {
                  numeral: '02',
                  title: 'Transformação',
                  description: 'A borboleta representa evolução delicada e mudança consciente. Cada protocolo é desenhado para revelar, não para apagar.',
                  items: ['Protocolos completos', 'Precisão científica', 'Planejamento individual', 'Evolução progressiva'],
                },
                {
                  numeral: '03',
                  title: 'Individualidade',
                  description: 'Cada face possui sua arquitetura. Cada planejamento deve ser único, construído a partir da anatomia e identidade de cada pessoa.',
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
          <div className="absolute inset-0 bg-pattern opacity-[0.18] pointer-events-none" />
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
                { label: 'Escuta individual', text: 'Antes de qualquer técnica, existe uma conversa profunda para compreender expectativas, histórico e o que você deseja enxergar no espelho.' },
                { label: 'Olhar autoral', text: 'Cada estrutura facial é única: anatomia óssea, tônus muscular e proporções orientam todas as decisões, sem padronização.' },
                { label: 'Protocolo completo', text: 'O foco da Dra. Vanessa são protocolos faciais completos: tratamentos integrados, pensados para o rosto como um conjunto.' },
                { label: 'Naturalidade boutique', text: 'O objetivo não é que percebam o procedimento. É que percebam você: mais descansada, harmônica e confiante.' },
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
          <div className="absolute inset-0 bg-pattern opacity-[0.4] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <AnimatedSection direction="left" className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-[#D9D2C4] shadow-md">
                  <img
                    src="/professional.jpg"
                    alt="Dra. Vanessa Sanabria Bevilaqua, cirurgiã-dentista, Full Face e harmonização facial em Uberlândia MG"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {/* Floating credential */}
                <div className="absolute bottom-4 right-4 lg:-right-4 card-uniq px-5 py-3.5 max-w-[260px] shadow-lg bg-white">
                  <p className="font-heading text-lg text-[#1A1714] leading-tight">Dra. Vanessa Sanabria</p>
                  <p className="text-[0.6875rem] text-[#8A8278] mt-0.5 tracking-wide">Full Face · CRO-76320 MG</p>
                  <p className="text-[0.6875rem] text-[#B8965A] mt-0.5 tracking-wide font-semibold">Gerenciamento do envelhecimento</p>
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
                    Dra. Vanessa Sanabria se dedica aos protocolos Full Face e gerenciamento do envelhecimento com um olhar muito particular: ela não busca criar uma nova face para você. Ela busca revelar, com precisão e sensibilidade, a melhor expressão da face que você já tem.
                  </p>
                  <p>
                    O foco dela são protocolos faciais completos, pensados para o rosto como um conjunto. Na blefaroplastia, ela conduz a avaliação, o planejamento do olhar e o acompanhamento, junto com a equipe multidisciplinar.
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
                    { label: 'Blefaroplastia', sub: 'Planejamento do olhar' },
                    { label: 'Mentora', sub: 'Cursos & Imersões' },
                  ].map((c) => (
                    <div key={c.label} className="card-uniq px-4 py-3 bg-white">
                      <p className="font-heading text-base text-[#1A1714] leading-tight">{c.label}</p>
                      <p className="text-[0.6875rem] text-[#B8965A] mt-0.5 tracking-wide font-medium uppercase">{c.sub}</p>
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

        {/* ── AVALIAÇÕES DO GOOGLE ── */}
        <GoogleReviews />

        {/* ── TRATAMENTOS FACIAIS ── */}
        <section id="tratamentos" className="section bg-[#F7F3EC] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.18] pointer-events-none" />
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
                  className="w-11 h-11 rounded-full border border-[#D9D2C4] bg-white hover:border-[#1B3A6B] hover:text-[#1B3A6B] flex items-center justify-center transition-[color,background-color,border-color,box-shadow,transform,opacity,gap] cursor-pointer shadow-sm active:scale-95"
                  aria-label="Tratamento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollTreatmentsNext}
                  className="w-11 h-11 rounded-full border border-[#D9D2C4] bg-white hover:border-[#1B3A6B] hover:text-[#1B3A6B] flex items-center justify-center transition-[color,background-color,border-color,box-shadow,transform,opacity,gap] cursor-pointer shadow-sm active:scale-95"
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
          <div className="absolute inset-0 bg-pattern opacity-[0.18] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <AnimatedSection className="mb-12">
              <SectionTitle
                eyebrow="Sua Jornada"
                title="Do primeiro contato ao resultado"
                subtitle="Uma jornada estruturada e transparente, pensada para que você entenda cada etapa com segurança e confiança."
              />
            </AnimatedSection>

            <div className="relative">
              <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-[#D9D2C4] z-0" aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                {[
                  { num: '01', title: 'Escuta', text: 'Entendemos seus desejos, incômodos e o que você imagina enxergar quando se olha no espelho.' },
                  { num: '02', title: 'Avaliação', text: 'Leitura individual da face: anatomia, proporções, qualidade tecidual e movimento.' },
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
                      title: 'Raciocínio clínico Full Face',
                      desc: 'Como estruturar um plano de tratamento facial integrado que entrega alta fidelização de paciente e resultados elegantes.',
                    },
                    {
                      title: 'Gerenciamento do envelhecimento',
                      desc: 'Visão estratégica sobre como o tempo afeta a face, e como tratar com naturalidade, precisão e longevidade.',
                    },
                    {
                      title: 'Harmonização avançada',
                      desc: 'Anatomia, proporção e técnica para criar resultados harmônicos que pertencem à face de cada paciente.',
                    },
                    {
                      title: 'Mentorias individuais',
                      desc: 'Acompanhamento personalizado para profissionais que querem elevar seu padrão clínico e estético.',
                    },
                  ].map((course, idx) => (
                    <div key={course.title} className="card-uniq p-5 flex flex-col justify-between bg-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[rgba(27,58,107,0.08)] flex items-center justify-center flex-shrink-0">
                          <span className="text-[0.6875rem] font-bold text-[#1B3A6B]">{String(idx + 1).padStart(2, '0')}</span>
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

            {/* Galeria, fotos reais da clínica: grade sem buracos em 2 e 4 colunas */}
            <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[170px] sm:auto-rows-[220px] lg:auto-rows-[230px] gap-3 lg:gap-4">
              <AnimatedSection delay={0} className="col-span-2 row-span-2">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-4.jpg" alt="Painel com o logo Oni Face na recepção do Instituto Oni Face em Uberlândia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.05} className="">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-1.jpg" alt="Recepção do Instituto Oni Face com mesa de café e plantas, em Uberlândia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-2.jpg" alt="Corredor do Instituto Oni Face com escultura de rosto na parede" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-3.jpg" alt="Sala de atendimento do Instituto Oni Face com parede azul e logo dourado" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-6.jpg" alt="Lavabo do Instituto Oni Face com espelho dourado e plantas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.05} className="col-span-2">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-5.jpg" alt="Detalhe do Instituto Oni Face: difusor e espelho dourado sobre o mármore" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-9.jpg" alt="Sala de espera do Instituto Oni Face com escultura e o logo na parede" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-sm group">
                  <img src="/oni-7.jpg" alt="Corredor do Instituto Oni Face com sala de espera e arco azul, em Uberlândia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/85 via-[#1B3A6B]/20 to-transparent flex items-end p-5">
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

        <MapaOniFace titulo="Onde fica o Instituto Oni Face" />

      </main>

      <Footer />
    </div>
  );
}
