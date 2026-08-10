import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { SectionTitle } from '@/components/ui/SectionTitle';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export const metadata: Metadata = {
  title: 'Fabiana Sobral | Biomédica, Especialista em Estética Avançada',
  description: 'Conheça Fabiana Sobral, biomédica, especialista em estética avançada e criadora do método Quiet Beauty FS. Reestruturação facial com propósito — Jardins, São Paulo, SP.',
  alternates: { canonical: `${SITE_URL}/dra-marcelle` },
  openGraph: { url: `${SITE_URL}/dra-marcelle`, type: 'website' },
};

export default function DraMarcellePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Hero */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimatedSection direction="left">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#EAE7E0] max-w-lg">
                  <img
                    src="/fabiana-sobral.png"
                    alt="Dra. Fabiana Sobral — Biomédica Especialista em Estética Avançada"
                    className="w-full h-full object-cover object-top"
                    fetchPriority="high"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <span className="eyebrow mb-6 block">Fabiana Sobral</span>
                <h1 className="text-display-sm mb-4">Quiet Beauty FS.</h1>
                <p className="pull-quote text-[#9A9188] mb-8 max-w-md">
                  "Rejuvenescer sem deixar de ser você. É isso que orienta cada decisão do meu trabalho."
                </p>
                <span className="divider mb-8 block" aria-hidden="true" />
                <div className="space-y-2 text-xs text-[#9A9188] tracking-wide">
                  <p><span className="font-medium text-[#3C3833]">Especialidade:</span> Estética Avançada — Facial e Corporal</p>
                  <p><span className="font-medium text-[#3C3833]">Método:</span> Quiet Beauty FS</p>
                  <p><span className="font-medium text-[#3C3833]">Atuação:</span> Jardins — São Paulo, SP</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <span className="eyebrow mb-6 block">Trajetória</span>
                <h2 className="text-headline mb-8">Uma carreira dedicada à beleza natural</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="space-y-6 text-sm text-[#9A9188] leading-relaxed">
                <p>Fabiana Sobral construiu sua trajetória profissional a partir de uma visão de estética que respeita a individualidade, a proporção e o tempo de cada pessoa.</p>
                <p>Biomédica, especialista em estética avançada, desenvolveu sua própria abordagem de rejuvenescimento facial e corporal — o método Quiet Beauty FS — centrado na escuta, no planejamento individual e na naturalidade dos resultados.</p>
                <p>Além da clínica, atua na formação de profissionais através do Instituto FS, onde compartilha técnica, raciocínio clínico e metodologia com médicos, biomédicos e dentistas habilitados.</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle eyebrow="Filosofia" title="Quiet Beauty" />
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="space-y-6 text-sm text-[#9A9188] leading-relaxed">
                  <p>O método <em>Quiet Beauty FS</em> é o pilar que orienta toda a abordagem de Fabiana Sobral. É a beleza que não precisa se anunciar, que existe em harmonia com quem você é.</p>
                  <p>Na prática, isso significa que cada procedimento é planejado de forma a ser percebido apenas pelo bem-estar, pela aparelência descansada e pela confiança que transmite — não pelo procedimento em si.</p>
                  <p>A harmonia facial não é um padrão a ser seguido. É uma proporção a ser descoberta e valorizada em cada rosto individual.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Planejamento Individual', text: 'Cada rosto é único. Cada plano de tratamento também.' },
                    { title: 'Naturalidade', text: 'O resultado perfeito é aquele que ninguém consegue identificar.' },
                    { title: 'Confiança', text: 'Um rosto harmonioso transmite bem-estar e segurança naturalmente.' },
                    { title: 'Longevidade', text: 'Tratamentos que trabalham juntos para resultados que duram.' },
                  ].map((item) => (
                    <div key={item.title} className="card-stone p-5 rounded-xl">
                      <h3 className="font-heading text-lg text-[#1E1B18] mb-2">{item.title}</h3>
                      <p className="text-xs text-[#9A9188] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Education placeholder */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection className="mb-12">
              <SectionTitle eyebrow="Formação" title="Educação e Especialização" />
            </AnimatedSection>
            <AnimatedSection>
              <div className="max-w-xl mx-auto space-y-6">
                {[
                  { label: 'Graduação', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.' },
                  { label: 'Especialização em Harmonização Facial', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                  { label: 'Formações Complementares', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.' },
                  { label: 'Atualização Contínua', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-2 py-4 border-b border-[#EAE7E0]">
                    <p className="text-xs font-semibold tracking-wide uppercase text-[#3C3833] sm:w-64 flex-shrink-0">{item.label}</p>
                    <p className="text-sm text-[#9A9188]">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Agende sua avaliação"
                title="Converse com Fabiana Sobral"
                subtitle="Uma avaliação individual e sem pressa. Entendemos o seu rosto, os seus objetivos e construímos juntas o melhor caminho."
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
