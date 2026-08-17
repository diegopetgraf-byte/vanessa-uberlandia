import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { SectionTitle } from '@/components/ui/SectionTitle';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export const metadata: Metadata = {
  title: 'Dra. Vanessa Sanabria | Especialista em Estética Facial',
  description: 'Conheça a Dra. Vanessa Sanabria, especialista em gerenciamento do envelhecimento, harmonização e blefaroplastia. Oni Face · Facial Boutique em Uberlândia, MG.',
  alternates: { canonical: `${SITE_URL}/dra-marcelle` },
  openGraph: { url: `${SITE_URL}/dra-marcelle`, type: 'website' },
};

export default function DraMarcellePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Hero */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimatedSection direction="left">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#D9D2C4] max-w-lg shadow-md">
                  <img
                    src="/professional.jpg"
                    alt="Dra. Vanessa Sanabria — Especialista em Estética Facial"
                    className="w-full h-full object-cover object-top"
                    fetchPriority="high"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <span className="eyebrow mb-6 block">Dra. Vanessa Sanabria</span>
                <h1 className="text-display-sm mb-4 text-[#1A1714]">Consciência e Identidade Facial.</h1>
                <p className="pull-quote text-[#8A8278] mb-8 max-w-md font-light">
                  "A face dos seus sonhos ainda deve parecer sua. Minha missão é realçar o que há de melhor em você."
                </p>
                <span className="divider mb-8 block border-[#D9D2C4]" aria-hidden="true" />
                <div className="space-y-2 text-xs text-[#8A8278] tracking-wide">
                  <p><span className="font-medium text-[#3C3831]">Especialidade:</span> Especialista em Full Face & Rejuvenescimento</p>
                  <p><span className="font-medium text-[#3C3831]">Método:</span> Naturalidade & Proporções Individuais (Full Face)</p>
                  <p><span className="font-medium text-[#3C3831]">Atuação:</span> Uberlândia, MG · CRO-76320 MG</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <span className="eyebrow mb-6 block">Trajetória</span>
                <h2 className="text-headline mb-8 text-[#1A1714]">Dedicação à ciência da estética e bem-estar</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="space-y-6 text-sm text-[#8A8278] leading-relaxed font-light">
                <p>A Dra. Vanessa Sanabria Bevilaqua construiu sua trajetória profissional com foco no rejuvenescimento facial e harmonização avançada, respeitando a anatomia natural de cada pessoa.</p>
                <p>Especialista em estética facial, ela desenvolveu sua própria abordagem de atendimento na Oni Face, com foco em planejar protocolos integrados e valorizar o terço médio e superior da face com precisão técnica.</p>
                <p>Além do consultório em Uberlândia, ela ministra aulas e mentorias para profissionais habilitados na área da estética facial, compartilhando sua visão clínica diferenciada.</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle eyebrow="Filosofia" title="Transformação Sem Descaracterizar" />
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="space-y-6 text-sm text-[#8A8278] leading-relaxed font-light">
                  <p>A beleza da face está nas suas proporções individuais e na expressividade. Não acreditamos em fórmulas prontas ou rostos padronizados de consultório.</p>
                  <p>Nossos tratamentos integrados agem devolvendo a sustentação e o volume corretos onde a pele perdeu sustentação com o tempo, sem alterar as suas expressões naturais.</p>
                  <p>O resultado ideal é aquele que faz você se reconhecer ao espelho, sentindo-se com o olhar descansado, a pele revigorada e amando-se um pouco mais a cada dia.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Planejamento Único', text: 'Cada face tem uma arquitetura própria. Cada planejamento é exclusivo.' },
                    { title: 'Naturalidade', text: 'Preservamos seus traços e expressões fundamentais em cada procedimento.' },
                    { title: 'Autocuidado', text: 'Proporcionamos uma experiência de acolhimento e valorização pessoal.' },
                    { title: 'Longevidade', text: 'Gerenciamento do tempo com protocolos progressivos de alta durabilidade.' },
                  ].map((item) => (
                    <div key={item.title} className="card-stone p-5 rounded-xl bg-white border border-[#D9D2C4]">
                      <h3 className="font-heading text-lg text-[#1A1714] mb-2">{item.title}</h3>
                      <p className="text-xs text-[#8A8278] leading-relaxed font-light">{item.text}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <AnimatedSection className="mb-12">
              <SectionTitle eyebrow="Formação" title="Destaque Clínico e Científico" />
            </AnimatedSection>
            <AnimatedSection>
              <div className="max-w-xl mx-auto space-y-6">
                {[
                  { label: 'CRO-76320 MG', value: 'Registro de Cirurgiã-Dentista no estado de Minas Gerais' },
                  { label: 'Especialista em Full Face', value: 'Formação e prática clínica com foco em reestruturação facial e rejuvenescimento integrado' },
                  { label: 'Pós-Graduanda em Bucomaxilofacial', value: 'Especialização em andamento voltada à anatomia cirúrgica e facial' },
                  { label: 'Mentoria & Ensino', value: 'Ministra imersões práticas para o desenvolvimento clínico de profissionais habilitados' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-2 py-4 border-b border-[#D9D2C4]">
                    <p className="text-xs font-semibold tracking-wide uppercase text-[#3C3831] sm:w-64 flex-shrink-0">{item.label}</p>
                    <p className="text-sm text-[#8A8278] font-light">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Agende sua avaliação"
                title="Converse com a Dra. Vanessa Sanabria"
                subtitle="Uma avaliação individual e atenciosa em Uberlândia, MG. Vamos entender o seu rosto e construir o melhor caminho para você se sentir ainda melhor."
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
