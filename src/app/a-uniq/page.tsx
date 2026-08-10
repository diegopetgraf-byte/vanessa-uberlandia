import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CTABanner } from '@/components/ui/CTABanner';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export const metadata: Metadata = {
  title: 'A Clínica FS | Nossa história e filosofia',
  description: 'Conheça a história da Clínica FS Fabiana Sobral, criada para redefinir a experiência estética com propósito, escuta e naturalidade. Jardins — São Paulo, SP.',
  alternates: { canonical: `${SITE_URL}/a-uniq` },
  openGraph: { url: `${SITE_URL}/a-uniq`, type: 'website' },
};

export default function AUniqPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/facade.jpg" alt="Clínica FS Fabiana Sobral" className="w-full h-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-[#1E1B18]/50" />
          </div>
          <div className="relative z-10 container-uniq pb-16">
            <span className="eyebrow text-[rgba(250,250,248,0.6)] mb-4 block">Clínica FS</span>
            <h1 className="font-heading text-[#FAFAF8] leading-tight max-w-2xl"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.025em' }}>
              Estética avançada com propósito e identidade.
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <span className="eyebrow mb-6 block">Nossa História</span>
                <h2 className="text-headline mb-8">A origin e o propósito da Clínica FS.</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="space-y-6 text-sm text-[#9A9188] leading-relaxed">
                <p>A Clínica FS nasceu da convicção de que a estética pode e deve ser vivida como uma experiência transformadora — não de aparência, mas de autoconhecimento, confiança e bem-estar.</p>
                <p>Fabiana Sobral criou a Clínica FS com o desejo de criar um espaço diferente: onde cada paciente é recebida como indivíduo único, onde o tempo de escuta é tão valioso quanto o tempo de tratamento, e onde a naturalidade nunca é negociável.</p>
                <p>O espaço físico foi pensado para que o ambiente comunique, antes de qualquer palavra, que você está em um lugar seguro. Um lugar feito para você.</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-[#F5F3EF]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle eyebrow="Nossos Valores" title="O que guia cada decisão" />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Saúde', text: 'Estética e saúde são insepáraveis. Cada protocolo é traçado com base no bem-estar real, não apenas na aparência.' },
                { title: 'Bem-estar', text: 'A experiência dentro da clínica deve ser tão boa quanto o resultado. Conforto, acolhimento e cuidado em cada detalhe.' },
                { title: 'Naturalidade', text: 'O resultado buscado é sempre a melhor versão natural do rosto de cada paciente. Jamais alterações que apagam a identidade.' },
                { title: 'Envelhecimento Saudável', text: 'Envelhecer é um processo natural e bonito. Nosso papel é acompanhá-lo com ciência, tecnologia e respeito.' },
                { title: 'Cuidado Personalizado', text: 'Não existem protocolos genéricos na Clínica FS. Cada pessoa recebe uma abordagem única, traçada especialmente para ela.' },
                { title: 'Excelência Técnica', text: 'Formação contínua, tecnologias validadas e rigor clínico são compromissos inegoçiáveis em cada procedimento.' },
              ].map((value, idx) => (
                <AnimatedSection key={value.title} delay={idx * 0.07}>
                  <div className="flex flex-col gap-4">
                    <span className="divider" aria-hidden="true" />
                    <h3 className="font-heading text-xl text-[#1E1B18]">{value.title}</h3>
                    <p className="text-sm text-[#9A9188] leading-relaxed">{value.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['/facade.jpg', '/interior.jpg', '/clinic-inside.jpg', '/interior-details.jpg'].map((src, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05}>
                  <div className="aspect-square overflow-hidden rounded-xl bg-[#EAE7E0]">
                    <img src={src} alt={`Interior da Clínica FS`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                eyebrow="Venha nos conhecer"
                title="Agende sua primeira consulta"
                subtitle="Venha conhecer pessoalmente o espaço e conversar com Fabiana Sobral sobre seus objetivos e o que faz sentido para você."
                primaryLabel="Agendar Avaliação"
                secondaryLabel="Ver Tratamentos"
                secondaryHref="/tratamentos"
              />
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
