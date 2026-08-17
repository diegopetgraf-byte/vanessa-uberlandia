import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { TREATMENTS, getTreatmentById, CATEGORY_LABELS } from '@/data/treatments';
import { getWhatsAppUrl } from '@/lib/utils';
import { CheckCircle2, Clock, RefreshCw, Calendar, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/lib/seo/schemas';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const treatment = getTreatmentById(id);
  if (!treatment) return { title: 'Tratamento não encontrado' };

  return {
    title: `${treatment.name} | ${CATEGORY_LABELS[treatment.category]} | Oni Face`,
    description: treatment.description.slice(0, 155),
    alternates: { canonical: `${SITE_URL}/tratamentos/${id}` },
    openGraph: {
      title: `${treatment.name} | Oni Face · Facial Boutique`,
      description: treatment.subtitle,
      url: `${SITE_URL}/tratamentos/${id}`,
      type: 'article',
      images: [
        {
          url: treatment.imageSrc.startsWith('http') ? treatment.imageSrc : `${SITE_URL}${treatment.imageSrc}`,
          width: 1200,
          height: 630,
          alt: `${treatment.name} — Oni Face · Facial Boutique`,
        },
      ],
    },
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { id } = await params;
  const treatment = getTreatmentById(id);
  if (!treatment) notFound();

  const whatsappUrl = getWhatsAppUrl(treatment.name);
  const related = TREATMENTS.filter(t => t.category === treatment.category && t.id !== treatment.id).slice(0, 3);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: treatment.name,
    description: treatment.description,
    procedureType: CATEGORY_LABELS[treatment.category],
    bodyLocation: treatment.category === 'facial' ? 'Face' : 'Body',
    provider: {
      '@type': 'Organization',
      name: 'Oni Face · Facial Boutique',
      url: SITE_URL,
    },
  };

  const faqSchema = treatment.faqs && treatment.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  } : null;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />

      <JsonLd data={faqSchema ? [schemaData, faqSchema] : schemaData} />

      <main className="flex-1">

        {/* Breadcrumb Navigation */}
        <div className="bg-[#EDE7D9] border-b border-[#D9D2C4] py-3.5">
          <div className="container-uniq">
            <nav className="flex items-center gap-2 text-xs text-[#8A8278]" aria-label="Localização na página">
              <Link href="/" className="hover:text-[#1B3A6B] transition-colors">
                Início
              </Link>
              <span aria-hidden="true">›</span>
              <Link href="/tratamentos" className="hover:text-[#1B3A6B] transition-colors">
                Tratamentos
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-[#3C3831] font-medium">{treatment.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Text Left */}
              <AnimatedSection direction="left" className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="pill-label bg-[#F7F3EC] text-[#1B3A6B]">{CATEGORY_LABELS[treatment.category]}</span>
                  <span className="text-[0.65rem] uppercase tracking-widest text-[#B8965A] font-semibold">
                    Oni Face Boutique
                  </span>
                </div>
                
                <h1 className="text-display-sm mb-3 text-[#1A1714]">{treatment.name}</h1>
                <p className="text-subheadline text-[#8A8278] mb-6 leading-relaxed max-w-2xl font-light">
                  {treatment.subtitle}
                </p>

                {/* Quick Facts Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 max-w-2xl">
                  {treatment.duration && (
                    <div className="card-uniq p-3.5 bg-white/90 border-[#D9D2C4]">
                      <div className="flex items-center gap-1.5 text-[#1B3A6B] mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[0.65rem] font-semibold tracking-wider uppercase text-[#8A8278]">Duração</span>
                      </div>
                      <p className="text-xs font-medium text-[#3C3831]">{treatment.duration}</p>
                    </div>
                  )}

                  {treatment.recovery && (
                    <div className="card-uniq p-3.5 bg-white/90 border-[#D9D2C4]">
                      <div className="flex items-center gap-1.5 text-[#1B3A6B] mb-1">
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span className="text-[0.65rem] font-semibold tracking-wider uppercase text-[#8A8278]">Recuperação</span>
                      </div>
                      <p className="text-xs font-medium text-[#3C3831]">{treatment.recovery}</p>
                    </div>
                  )}

                  {treatment.durability && (
                    <div className="card-uniq p-3.5 bg-white/90 border-[#D9D2C4] col-span-2 sm:col-span-1">
                      <div className="flex items-center gap-1.5 text-[#1B3A6B] mb-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="text-[0.65rem] font-semibold tracking-wider uppercase text-[#8A8278]">Durabilidade</span>
                      </div>
                      <p className="text-xs font-medium text-[#3C3831]">{treatment.durability}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine">
                    Agendar Avaliação
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a href="#como-funciona" className="btn btn-outline">
                    Como Funciona
                  </a>
                </div>
              </AnimatedSection>

              {/* Image Right */}
              <AnimatedSection delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-md max-w-md mx-auto lg:max-w-none">
                  {treatment.imageSrc ? (
                    <img
                      src={treatment.imageSrc}
                      alt={treatment.name}
                      className="w-full h-full object-cover"
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#F7F3EC] to-[#D9D2C4]">
                      <span className="font-heading text-[8rem] text-[#C4BAA8] italic leading-none">ONI</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* Deep Description */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <span className="eyebrow mb-3 block">Sobre o Procedimento</span>
                <h2 className="text-headline mb-4 text-[#1A1714]">A ciência e a sensibilidade por trás de {treatment.name}</h2>
                <p className="text-base sm:text-lg text-[#8A8278] leading-relaxed mb-6 font-light">
                  {treatment.description}
                </p>
                <div className="card-stone p-6 rounded-xl border-l-4 border-[#1B3A6B] bg-[#EDE7D9]/40">
                  <p className="text-xs sm:text-sm text-[#3C3831] leading-relaxed italic">
                    "Na Oni Face, cada plano de tratamento é concebido sob a ótica da naturalidade consciente — entregando resultados que revelam a sua melhor versão sem que ninguém perceba que você fez um procedimento."
                  </p>
                  <p className="text-[0.65rem] text-[#8A8278] uppercase tracking-wider font-semibold mt-2">
                    — Dra. Vanessa Sanabria
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* How It Works (Steps) */}
        {treatment.howItWorks && treatment.howItWorks.length > 0 && (
          <section id="como-funciona" className="section bg-[#EDE7D9]">
            <div className="container-uniq">
              <AnimatedSection className="mb-10 text-center max-w-3xl mx-auto">
                <span className="eyebrow mb-3 block">Metodologia Oni Face</span>
                <h2 className="text-headline mb-3 text-[#1A1714]">Como funciona o atendimento</h2>
                <p className="text-sm sm:text-base text-[#8A8278] font-light">
                  Um fluxo estruturado e acolhedor, pensado para proporcionar máxima segurança, conforto e previsibilidade.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {treatment.howItWorks.map((step, idx) => (
                  <AnimatedSection key={step.title} delay={idx * 0.06}>
                    <div className="card-uniq p-5 sm:p-6 h-full flex flex-col justify-between bg-white border-[#D9D2C4]">
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#1B3A6B]/10 text-[#1B3A6B] flex items-center justify-center font-heading font-semibold text-sm mb-3">
                          0{idx + 1}
                        </div>
                        <h3 className="font-heading text-lg text-[#1A1714] mb-2">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-[#8A8278] leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits & Indications Grid */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              
              {/* Benefits */}
              <AnimatedSection direction="left">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#1B3A6B]" />
                  <h2 className="text-headline text-[#1A1714]">Principais Benefícios</h2>
                </div>
                <div className="space-y-3">
                  {treatment.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 card-stone rounded-xl bg-white border border-[#D9D2C4]">
                      <CheckCircle2 className="w-4 h-4 text-[#1B3A6B] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-xs sm:text-sm text-[#3C3831] leading-relaxed font-light">{benefit}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Indications */}
              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-2 mb-4">
                  <HelpCircle className="w-5 h-5 text-[#1B3A6B]" />
                  <h2 className="text-headline text-[#1A1714]">Para quem é indicado</h2>
                </div>
                <div className="space-y-3">
                  {treatment.indications.map((indication, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 card-stone rounded-xl bg-white border border-[#D9D2C4]">
                      <span className="w-2 h-2 rounded-full bg-[#B8965A] mt-2 flex-shrink-0" aria-hidden="true" />
                      <p className="text-xs sm:text-sm text-[#3C3831] leading-relaxed font-light">{indication}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* FAQs */}
        {treatment.faqs && treatment.faqs.length > 0 && (
          <section className="section bg-[#EDE7D9]">
            <div className="container-uniq">
              <AnimatedSection className="mb-10 text-center max-w-3xl mx-auto">
                <span className="eyebrow mb-3 block">Esclarecimentos</span>
                <h2 className="text-headline mb-3 text-[#1A1714]">Dúvidas Frequentes</h2>
                <p className="text-sm sm:text-base text-[#8A8278] font-light">
                  Respostas transparentes sobre {treatment.name}.
                </p>
              </AnimatedSection>

              <div className="max-w-3xl mx-auto space-y-3">
                {treatment.faqs.map((faq, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.04}>
                    <div className="card-uniq p-5 sm:p-6 bg-white border-[#D9D2C4]">
                      <h3 className="font-heading text-base sm:text-lg text-[#1A1714] mb-1.5">{faq.question}</h3>
                      <p className="text-xs sm:text-sm text-[#8A8278] leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Treatments */}
        {related.length > 0 && (
          <section className="section bg-[#F7F3EC]">
            <div className="container-uniq">
              <AnimatedSection className="mb-8 flex items-center justify-between">
                <div>
                  <span className="eyebrow mb-2 block">Sinergia e Combinação</span>
                  <h2 className="text-headline text-[#1A1714]">Tratamentos Relacionados</h2>
                </div>
                <Link href="/tratamentos" className="btn btn-ghost text-xs hidden sm:inline-flex text-[#1B3A6B]">
                  Ver catálogo completo <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((t, idx) => (
                  <AnimatedSection key={t.id} delay={idx * 0.06}>
                    <TreatmentCard
                      id={t.id}
                      name={t.name}
                      category={CATEGORY_LABELS[t.category]}
                      subtitle={t.subtitle}
                      imageSrc={t.imageSrc}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow={treatment.name}
                title={`Agende sua avaliação para ${treatment.name}`}
                subtitle="Uma consulta individualizada na Oni Face em Uberlândia, MG. Dra. Vanessa Sanabria analisará detalhadamente sua estrutura e objetivos para definir o protocolo ideal."
                primaryLabel="Agendar pelo WhatsApp"
                primaryHref={getWhatsAppUrl(treatment.name)}
                secondaryLabel="Conhecer todos os tratamentos"
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
