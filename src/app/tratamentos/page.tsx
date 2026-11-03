import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, getTreatmentsByCategory, getTreatmentById, INDICATIONS } from '@/data/treatments';
import { ArrowRight, Sparkles } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://institutooniface.com.br';

export const metadata: Metadata = {
  title: 'Tratamentos faciais em Uberlândia MG | Full Face · Oni Face · Dra. Vanessa Sanabria',
  description: 'Toxina botulínica, preenchimento labial, bioestimuladores, blefaroplastia e protocolo Full Face completo em Uberlândia MG, Dra. Vanessa Sanabria na Oni Face Boutique · Âmbar Health Center.',
  keywords: ['Full Face Uberlândia', 'toxina botulínica Uberlândia', 'preenchimento labial Uberlândia', 'harmonização facial Uberlândia MG', 'blefaroplastia Uberlândia', 'bioestimuladores Uberlândia', 'tratamentos faciais Uberlândia'],
  alternates: { canonical: `${SITE_URL}/tratamentos` },
  openGraph: {
    url: `${SITE_URL}/tratamentos`,
    type: 'website',
    title: 'Tratamentos Full Face em Uberlândia MG | Oni Face · Dra. Vanessa Sanabria',
    description: 'Toxina botulínica, preenchimento, bioestimuladores e blefaroplastia. Protocolo Full Face completo com Dra. Vanessa Sanabria na Oni Face Boutique, Uberlândia MG.',
  },
};

export default function TratamentosPage() {
  // Only render the facial category as Oni Face is a facial boutique
  const category = 'facial';
  const treatments = getTreatmentsByCategory(category);

  // Filter out corporal indications to keep it strictly facial
  const facialIndications = INDICATIONS.filter(ind => 
    !ind.concern.toLowerCase().includes('corporal') && 
    !ind.concern.toLowerCase().includes('glúteos')
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Page header & Full Face Pitch */}
        <section className="section bg-[#EDE7D9] border-b border-[#D9D2C4] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-[0.35] pointer-events-none" />
          <div className="container-uniq relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Pitch Left */}
              <AnimatedSection direction="left" className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="eyebrow block">Conceito Oni Face</span>
                  <span className="text-[0.65rem] uppercase tracking-widest text-[#1B3A6B] font-semibold">
                    · Raciocínio Clínico Integrado
                  </span>
                </div>
                
                <h1 className="text-display-sm text-[#1A1714]">
                  Por que tratar o rosto como um todo?
                </h1>
                
                <div className="space-y-4 text-sm sm:text-base text-[#8A8278] leading-relaxed font-light">
                  <p>
                    A busca por suavizar apenas uma ruga ou tratar um sulco isoladamente é o caminho mais comum para a artificialidade. Na Oni Face, acreditamos que a verdadeira beleza e o rejuvenescimento elegante residem na <strong className="font-medium text-[#1B3A6B]">harmonia e na proporção global</strong>.
                  </p>
                  <p>
                    Nossos <strong className="font-medium text-[#B8965A]">Protocolos Full Face</strong> tratam a face de forma integrada. Ao invés de preencher rugas individuais, restabelecemos os pontos de sustentação óssea e os coxins de gordura perdidos com o tempo. 
                  </p>
                  <p>
                    Isso devolve o equilíbrio, o contorno natural e a leveza ao olhar, garantindo que a sua fisionomia se mantenha única e você se reconheça ao espelho com ainda mais autoestima.
                  </p>
                </div>
                
                <div className="pt-2">
                  <span className="divider border-[#D9D2C4]" aria-hidden="true" />
                  <p className="text-xs text-[#8A8278] mt-2 italic font-light">
                    Explore abaixo nossa seleção de procedimentos faciais de alta performance.
                  </p>
                </div>
              </AnimatedSection>

              {/* Photo Right */}
              <AnimatedSection delay={0.15} className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] max-w-sm mx-auto lg:mx-0 bg-[#D9D2C4] shadow-lg border border-white/20">
                  <img
                    src="/dra/dra-vanessa-sanabria-retrato.webp"
                    alt="Dra. Vanessa Sanabria, cirurgiã-dentista, Full Face e harmonização facial em Uberlândia MG"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* Category listing, Strictly Facial */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection className="mb-10">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="pill-label bg-[#EDE7D9] text-[#1B3A6B]">{CATEGORY_LABELS[category]}</span>
                </div>
                <h2 className="text-headline text-[#1A1714]">{CATEGORY_LABELS[category]}</h2>
                <p className="text-sm text-[#8A8278] max-w-2xl leading-relaxed font-light">
                  {CATEGORY_DESCRIPTIONS[category]}
                </p>
                <span className="divider mt-2 border-[#D9D2C4]" aria-hidden="true" />
              </div>
            </AnimatedSection>

            {/* Treatment Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {treatments.map((t, idx) => (
                <AnimatedSection key={t.id} delay={idx * 0.05}>
                  <TreatmentCard
                    id={t.id}
                    name={t.name}
                    category={CATEGORY_LABELS[t.category]}
                    subtitle={t.subtitle}
                    imageSrc={t.imageSrc}
                    href={`/tratamentos/${t.id}`}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Indicações section */}
        <section className="section bg-[#EDE7D9] border-t border-[#D9D2C4]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle
                eyebrow="Guia de Indicações"
                title="Encontre o tratamento ideal para o seu objetivo"
                subtitle="Selecione a sua principal queixa ou objetivo para explorar os procedimentos mais indicados."
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {facialIndications.map((ind, idx) => (
                <AnimatedSection key={ind.concern} delay={idx * 0.04}>
                  <div className="card-uniq p-6 h-full flex flex-col justify-between bg-white border-[#D9D2C4] hover:border-[#1B3A6B]/40 transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-[#1B3A6B]" />
                        <h3 className="font-heading text-base text-[#1A1714]">{ind.concern}</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#D9D2C4]/60">
                      {ind.treatments.map((id) => (
                        <Link
                          key={id}
                          href={`/tratamentos/${id}`}
                          className="pill-label bg-[#F7F3EC] text-[#3C3831] hover:bg-[#1B3A6B] hover:text-[#F7F3EC] transition-all border border-[#D9D2C4] text-[0.6875rem] min-h-[44px] px-3 flex items-center gap-1"
                        >
                          {getTreatmentById(id)?.name ?? id.replace(/-/g, ' ')}
                          <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Planejamento Personalizado"
                title="Não sabe por onde começar?"
                subtitle="Agende uma avaliação individualizada com a Dra. Vanessa Sanabria na Oni Face em Uberlândia, MG. Vamos desenhar juntas o protocolo facial perfeito para realçar a sua beleza natural."
                primaryLabel="Agendar Avaliação"
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
