import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { TECHNOLOGIES } from '@/data/technologies';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://institutooniface.com.br';

export const metadata: Metadata = {
  title: 'Tecnologias | Oni Face · Facial Boutique',
  description: 'Conheça as tecnologias de ponta utilizadas na Oni Face pela Dra. Vanessa Sanabria para estética facial em Uberlândia, MG. Segurança, precisão e eficácia.',
  alternates: { canonical: `${SITE_URL}/tecnologias` },
  openGraph: { url: `${SITE_URL}/tecnologias`, type: 'website' },
};

export default function TecnologiasPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Page Header */}
        <section className="section-sm bg-[#EDE7D9] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <AnimatedSection>
              <span className="eyebrow mb-4 block">Oni Face · Facial Boutique</span>
              <h1 className="text-display-sm max-w-2xl text-[#1A1714]">Tecnologias</h1>
              <p className="text-sm text-[#8A8278] max-w-xl mt-4 leading-relaxed font-light">
                Equipamentos selecionados com base em evidências clínicas, segurança e eficácia comprovada para os melhores resultados faciais.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Technology Cards */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TECHNOLOGIES.map((tech, idx) => (
                <AnimatedSection key={tech.id} delay={idx * 0.08}>
                  <TreatmentCard
                    id={tech.id}
                    name={tech.name}
                    category="Tecnologia"
                    subtitle={tech.headline}
                    href={`/tecnologias/${tech.id}`}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Criteria */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle
                eyebrow="Nossa Seleção"
                title="Como escolhemos nossas tecnologias"
                subtitle="Cada equipamento na Oni Face passa por uma seleção rigorosa baseada em critérios clínicos de alta performance e segurança."
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: 'Evidência clínica', text: 'Apenas equipamentos com estudos clínicos publicados e resultados comprovados para rejuvenescimento e pele são adotados na Oni Face.' },
                { title: 'Segurança', text: 'A segurança da sua face é inegociável. Todos os parâmetros são calibrados especificamente para a anatomia de cada paciente.' },
                { title: 'Eficácia real', text: 'Os resultados clínicos na nossa prática confirmam a escolha. Acompanhamos a evolução de cada paciente.' },
              ].map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 0.08}>
                  <div className="flex flex-col gap-4">
                    <span className="divider border-[#D9D2C4]" aria-hidden="true" />
                    <h3 className="font-heading text-xl text-[#1A1714]">{item.title}</h3>
                    <p className="text-sm text-[#8A8278] leading-relaxed font-light">{item.text}</p>
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
                eyebrow="Próximo passo"
                title="Saiba qual tecnologia é ideal para você"
                subtitle="Na avaliação com a Dra. Vanessa Sanabria, definimos os equipamentos mais adequados ao seu caso, seus objetivos e o momento atual da sua pele."
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
