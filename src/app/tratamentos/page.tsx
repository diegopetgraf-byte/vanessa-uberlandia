import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { ALL_CATEGORIES, CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, getTreatmentsByCategory, INDICATIONS } from '@/data/treatments';
import { ArrowRight, Sparkles } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export const metadata: Metadata = {
  title: 'Tratamentos | Estética Facial e Corporal Avançada | Clínica FS',
  description: 'Conheça todos os tratamentos da Clínica FS Fabiana Sobral: Harmonização Facial, Preenchimentos, Bioestimuladores, Fios de Sustentação e Protocolos Corporais. Método Quiet Beauty FS — Jardins, São Paulo.',
  alternates: { canonical: `${SITE_URL}/tratamentos` },
  openGraph: { url: `${SITE_URL}/tratamentos`, type: 'website' },
};

export default function TratamentosPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Page header */}
        <section className="section-sm bg-[#F5F3EF] border-b border-[#EAE7E0]">
          <div className="container-uniq">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4">
                <span className="eyebrow block">Clínica FS · Fabiana Sobral</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-[#6B1E2E] font-semibold">
                  · Quiet Beauty FS
                </span>
              </div>
              <h1 className="text-display-sm max-w-2xl">Tratamentos</h1>
              <p className="text-sm text-[#9A9188] max-w-xl mt-4 leading-relaxed">
                Cada tratamento é planejado individualmente a partir da análise anatômica da sua estrutura, dos seus objetivos e do seu momento. Clique em cada procedimento para ver detalhes completos, duração, recuperação e dúvidas frequentes.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Category listing */}
        {ALL_CATEGORIES.map((category, catIdx) => {
          const treatments = getTreatmentsByCategory(category);

          return (
            <section key={category} className={`section ${catIdx % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-[#F5F3EF]'}`}>
              <div className="container-uniq">
                <AnimatedSection className="mb-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="pill-label">{CATEGORY_LABELS[category]}</span>
                    </div>
                    <h2 className="text-headline">{CATEGORY_LABELS[category]}</h2>
                    <p className="text-sm text-[#9A9188] max-w-2xl leading-relaxed">
                      {CATEGORY_DESCRIPTIONS[category]}
                    </p>
                    <span className="divider mt-2" aria-hidden="true" />
                  </div>
                </AnimatedSection>

                {/* Treatment Cards Grid with links to individual pages */}
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
          );
        })}

        {/* Indicações section with clickable links to treatment detail pages */}
        <section className="section bg-[#FAFAF8] border-t border-[#EAE7E0]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle
                eyebrow="Guia de Indicações"
                title="Encontre o tratamento ideal para o seu objetivo"
                subtitle="Selecione a sua principal queixa ou objetivo para explorar os procedimentos mais indicados."
              />
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INDICATIONS.map((ind, idx) => (
                <AnimatedSection key={ind.concern} delay={idx * 0.04}>
                  <div className="card-uniq p-6 h-full flex flex-col justify-between hover:border-[#6B1E2E]/40 transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-[#6B1E2E]" />
                        <h3 className="font-heading text-base text-[#1E1B18]">{ind.concern}</h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-[#EAE7E0]/60">
                      {ind.treatments.map((id) => (
                        <Link
                          key={id}
                          href={`/tratamentos/${id}`}
                          className="pill-label bg-[#F5F3EF] text-[#3C3833] hover:bg-[#6B1E2E] hover:text-[#FAFAF8] transition-all border border-[#EAE7E0] text-[0.6rem] capitalize flex items-center gap-1"
                        >
                          {id.replace(/-/g, ' ')}
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
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Planejamento Personalizado"
                title="Não sabe por onde começar?"
                subtitle="Agende uma avaliação presencial com Fabiana Sobral nos Jardins, São Paulo. Ela traçará um plano estratégico e individualizado com as melhores opções para o seu rosto e corpo."
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
