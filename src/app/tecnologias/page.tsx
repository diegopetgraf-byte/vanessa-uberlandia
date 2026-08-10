import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { TreatmentCard } from '@/components/ui/TreatmentCard';
import { TECHNOLOGIES } from '@/data/technologies';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export const metadata: Metadata = {
  title: 'Tecnologias | Clínica FS Fabiana Sobral',
  description: 'Conheça as tecnologias utilizadas na Clínica FS Fabiana Sobral para tratamentos faciais e corporais. Selecionadas com base em evidência clínica, segurança e eficácia — Jardins, São Paulo.',
  alternates: { canonical: `${SITE_URL}/tecnologias` },
  openGraph: { url: `${SITE_URL}/tecnologias`, type: 'website' },
};

export default function TecnologiasPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Page Header */}
        <section className="section-sm bg-[#F5F3EF] border-b border-[#EAE7E0]">
          <div className="container-uniq">
            <AnimatedSection>
              <span className="eyebrow mb-4 block">Clínica FS Fabiana Sobral</span>
              <h1 className="text-display-sm max-w-2xl">Tecnologias</h1>
              <p className="text-sm text-[#9A9188] max-w-xl mt-4 leading-relaxed">
                Equipamentos selecionados com base em evidências clínicas, segurança e eficácia comprovada para os melhores resultados.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Technology Cards */}
        <section className="section bg-[#FAFAF8]">
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
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle
                eyebrow="Nossa Seleção"
                title="Como escolhemos nossas tecnologias"
                subtitle="Cada equipamento na UNIQ. passa por uma seleção rigorosa baseada em critérios clínicos e de segurança."
              />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: 'Evidência Clínica', text: 'Apenas equipamentos com estudos clínicos publicados e resultados comprovados são adotados na UNIQ.' },
                { title: 'Segurança', text: 'A segurança do paciente é inegociável. Todos os parâmetros são calibrados por profissional especializada.' },
                { title: 'Eficácia Real', text: 'Os resultados clínicos na nossa prática confirmam a escolha. Acompanhamos a evolução de cada paciente.' },
              ].map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 0.08}>
                  <div className="flex flex-col gap-4">
                    <span className="divider" aria-hidden="true" />
                    <h3 className="font-heading text-xl text-[#1E1B18]">{item.title}</h3>
                    <p className="text-sm text-[#9A9188] leading-relaxed">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Próximo passo"
                title="Saiba qual tecnologia é ideal para você"
                subtitle="Na avaliação com Fabiana Sobral, definimos os equipamentos mais adequados ao seu caso, seus objetivos e o momento atual da sua pele."
                primaryLabel="Agendar Avaliação"
              />
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
