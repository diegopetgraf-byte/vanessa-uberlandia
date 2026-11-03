import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CTABanner } from '@/components/ui/CTABanner';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://institutooniface.com.br';

export const metadata: Metadata = {
  title: 'Oni Face · Boutique Facial | Filosofia e Conceito',
  description: 'Conheça o conceito da Oni Face em Uberlândia, MG. Um espaço boutique facial criado pela Dra. Vanessa Sanabria para valorizar sua beleza com naturalidade.',
  alternates: { canonical: `${SITE_URL}/a-uniq` },
  openGraph: { url: `${SITE_URL}/a-uniq`, type: 'website' },
};

export default function AUniqPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/oni-1.jpg" alt="Oni Face · Facial Boutique" className="w-full h-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-[#1A1714]/65" />
          </div>
          <div className="relative z-10 container-uniq pb-16">
            <span className="eyebrow text-[rgba(247,243,236,0.7)] mb-4 block">Oni Face</span>
            <h1 className="font-heading text-[#F7F3EC] leading-tight max-w-2xl font-light"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.025em' }}>
              Estética facial com propósito, harmonia e naturalidade.
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <span className="eyebrow mb-6 block">Nosso Conceito</span>
                <h2 className="text-headline mb-8 text-[#1A1714]">A origem e a proposta da Oni Face.</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="space-y-6 text-sm text-[#8A8278] leading-relaxed font-light">
                <p>Oni Face significa a face dos sonhos. E transformação está na essência de cada tratamento facial idealizado pela Dra. Vanessa Sanabria.</p>
                <p>Nascemos do desejo de criar uma experiência de cuidado diferente, que rompe com as padronizações clínicas. Na Oni Face, a escuta e a análise individualizada de cada traço são as ferramentas mais importantes para revelar a sua versão mais confiante e harmônica.</p>
                <p>Nosso ambiente boutique foi planejado para que você se sinta acolhida, segura e tranquila desde o primeiro contato.</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <AnimatedSection className="mb-14">
              <SectionTitle eyebrow="Nossa Filosofia" title="O que guia cada decisão" />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Estética Consciente', text: 'Os cuidados faciais são inseparáveis da saúde e autoestima. Cada tratamento é traçado com base na harmonia real da sua face.' },
                { title: 'Boutique Experience', text: 'A experiência dentro da clínica deve ser relaxante e exclusiva. Conforto, acolhimento e cuidado total em cada detalhe.' },
                { title: 'Naturalidade', text: 'O resultado idealizado é sempre a melhor versão do seu próprio rosto. Evitamos modismos que descaracterizam a sua identidade.' },
                { title: 'Gerenciamento Saudável', text: 'Envelhecer é um processo natural. Nosso papel é acompanhar e atenuar os efeitos do tempo com ciência, respeito e delicadeza.' },
                { title: 'Escuta Ativa', text: 'Não existem protocolos genéricos na Oni Face. Cada pessoa recebe uma abordagem exclusiva baseada em seus desejos e anatomia.' },
                { title: 'Precisão e Arte', text: 'Formação constante, uso de biomateriais de alta qualidade e olhar artístico apurado para resultados naturalmente sofisticados.' },
              ].map((value, idx) => (
                <AnimatedSection key={value.title} delay={idx * 0.07}>
                  <div className="flex flex-col gap-4">
                    <span className="divider border-[#D9D2C4]" aria-hidden="true" />
                    <h3 className="font-heading text-xl text-[#1A1714]">{value.title}</h3>
                    <p className="text-sm text-[#8A8278] leading-relaxed font-light">{value.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['/oni-1.jpg', '/oni-2.jpg', '/oni-3.jpg', '/oni-4.jpg'].map((src, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05}>
                  <div className="aspect-square overflow-hidden rounded-xl bg-[#D9D2C4]">
                    <img src={src} alt={`Espaço Oni Face`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Venha nos conhecer"
                title="Agende sua primeira consulta"
                subtitle="Venha conhecer pessoalmente o espaço e conversar com a Dra. Vanessa Sanabria sobre seus objetivos e o que faz sentido para a sua pele."
                primaryLabel="Agendar Avaliação"
                secondaryLabel="Ver Tratamentos"
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
