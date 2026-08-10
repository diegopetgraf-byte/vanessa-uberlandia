import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABanner } from '@/components/ui/CTABanner';
import { TECHNOLOGIES, getTechnologyById } from '@/data/technologies';
import { getWhatsAppUrl } from '@/lib/utils';
import { CheckCircle2, ChevronLeft } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TECHNOLOGIES.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tech = getTechnologyById(id);
  if (!tech) return { title: 'Tecnologia não encontrada' };

  return {
    title: `${tech.name} | Tecnologia UNIQ. Care Experience`,
    description: tech.headline,
    alternates: { canonical: `${SITE_URL}/tecnologias/${id}` },
    openGraph: { url: `${SITE_URL}/tecnologias/${id}`, type: 'website' },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const { id } = await params;
  const tech = getTechnologyById(id);
  if (!tech) notFound();

  const whatsappUrl = getWhatsAppUrl(tech.name);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Breadcrumb */}
        <div className="bg-[#F5F3EF] border-b border-[#EAE7E0] py-4">
          <div className="container-uniq">
            <nav className="flex items-center gap-2 text-xs text-[#9A9188]" aria-label="Localização na página">
              <Link href="/tecnologias" className="hover:text-[#6B1E2E] transition-colors flex items-center gap-1">
                <ChevronLeft className="w-3 h-3" aria-hidden="true" />
                Tecnologias
              </Link>
              <span aria-hidden="true">·</span>
              <span className="text-[#3C3833] font-medium">{tech.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <span className="pill-label mb-6 inline-block">Tecnologia UNIQ.</span>
                <h1 className="text-display-sm mb-4">{tech.name}</h1>
                <p className="text-subheadline text-[#9A9188] mb-8">{tech.headline}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                  Agendar {tech.name}
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#EAE7E0]">
                  {tech.imageSrc ? (
                    <img src={tech.imageSrc} alt={tech.name} className="w-full h-full object-cover" fetchPriority="high" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading text-[8rem] text-[#D6D0C4] italic leading-none">U</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <div className="max-w-2xl">
              <AnimatedSection>
                <span className="eyebrow mb-6 block">Sobre</span>
                <h2 className="text-headline mb-6">Como funciona o {tech.name}?</h2>
                <p className="text-sm text-[#9A9188] leading-relaxed">{tech.description}</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits + Indications */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimatedSection direction="left">
                <h2 className="text-headline mb-8">Benefícios</h2>
                <ul className="space-y-4" role="list">
                  {tech.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#6B1E2E] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-[#3C3833] leading-relaxed">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-headline mb-8">Indicado para</h2>
                <ul className="space-y-4" role="list">
                  {tech.indications.map((indication) => (
                    <li key={indication} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6B1E2E] mt-2 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm text-[#3C3833] leading-relaxed">{indication}</p>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection className="mb-10">
                <h2 className="text-headline">Perguntas Frequentes</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <FAQAccordion items={tech.faq} />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow={tech.name}
                title={`Descubra se o ${tech.name} é indicado para você`}
                subtitle="Agende uma avaliação com Fabiana Sobral. Ela analisa seu caso e recomenda o protocolo mais adequado."
                primaryLabel="Agendar Avaliação"
                secondaryLabel="Ver todas as tecnologias"
                secondaryHref="/tecnologias"
              />
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
