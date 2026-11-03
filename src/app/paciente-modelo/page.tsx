import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { getWhatsAppUrl } from '@/lib/utils';
import { ArrowRight, Sparkles, Gift, Calendar, MapPin, Star } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://institutooniface.com.br';

export const metadata: Metadata = {
  title: 'Paciente Modelo | Oni Face · Uberlândia, Conheça a Clínica',
  description:
    'Uma experiência exclusiva para quem quer conhecer a Oni Face de perto. Evento cocktail, Full Face ao vivo, e um sorteio especial para convidadas com convite físico. Uberlândia, MG.',
  alternates: { canonical: `${SITE_URL}/paciente-modelo` },
  // Diego, 13/10/2026: fora do menu, do sitemap e do Google.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    url: `${SITE_URL}/paciente-modelo`,
    type: 'website',
    title: 'Paciente Modelo · Oni Face',
    description: 'Conheça a Oni Face em um evento exclusivo. Estética Full Face ao vivo, ambiente da clínica, sorteio especial e um convite para entrar nesse universo.',
    images: [{ url: `${SITE_URL}/og-image.jpeg`, width: 1200, height: 630 }],
  },
};

const galleryImages = [
  { src: '/oni-0.png',  alt: 'Oni Face, Dra. Vanessa Sanabria' },
  { src: '/oni-1.jpg',  alt: 'Oni Face, Ambiente da clínica' },
  { src: '/oni-2.jpg',  alt: 'Oni Face, Espaço exclusivo' },
  { src: '/oni-3.jpg',  alt: 'Oni Face, Detalhes da boutique' },
  { src: '/oni-4.jpg',  alt: 'Oni Face, Interior' },
  { src: '/oni-5.jpg',  alt: 'Oni Face, Consultório' },
  { src: '/oni-6.jpg',  alt: 'Oni Face, Dra. Vanessa' },
  { src: '/oni-7.jpg',  alt: 'Oni Face, Equipamentos' },
  { src: '/oni-8.jpg',  alt: 'Oni Face, Experiência' },
  { src: '/oni-9.jpg',  alt: 'Oni Face, Boutique facial' },
  { src: '/oni-10.png', alt: 'Oni Face, A transformação que ainda parece você' },
];

const fullFaceItems = [
  {
    title: 'Leitura facial individualizada',
    desc: 'Cada rosto tem uma geometria única. O Full Face começa pelo diagnóstico preciso das proporções, simetrias e traços da sua identidade.',
  },
  {
    title: 'Protocolo de harmonização completa',
    desc: 'Combinação estratégica de toxina botulínica, preenchimentos e bioestimuladores para restaurar o equilíbrio facial com naturalidade.',
  },
  {
    title: 'Longevidade e preservação de identidade',
    desc: 'O objetivo não é mudar: é preservar a melhor versão do rosto que já é seu, por mais tempo e com mais qualidade.',
  },
  {
    title: 'Resultados progressivos e cumulativos',
    desc: 'Um planejamento de longo prazo que respeita o tempo do seu rosto e entrega transformação genuína, sessão após sessão.',
  },
];

export default function PacienteModeloPage() {
  const whatsappUrl = getWhatsAppUrl('paciente-modelo');

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-end">
          <div className="absolute inset-0">
            <img
              src="/paciente-modelo-hero.svg"
              alt="Oni Face · Paciente Modelo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/80 via-[#1A1714]/30 to-transparent" />
          </div>

          <div className="relative z-10 container-uniq pb-16 pt-32 sm:pb-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#B8965A] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B8965A]" />
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#B8965A]">
                  Oni Face · Convite Exclusivo
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#F7F3EC] leading-tight max-w-3xl">
                Paciente Modelo
              </h1>
              <p className="text-[#C4BAA8] text-base sm:text-lg font-light max-w-xl mt-4 leading-relaxed">
                Uma tarde dentro da Oni Face. Full Face ao vivo, o ambiente da boutique, e a chance de entrar para o nosso universo com condições únicas.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wine"
                >
                  Quero meu convite
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#o-evento"
                  className="btn btn-outline !border-[#F7F3EC]/30 !text-[#F7F3EC] hover:!border-[#B8965A] hover:!text-[#B8965A]"
                >
                  Saiba mais
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* O Evento */}
        <section id="o-evento" className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <span className="eyebrow mb-3 block">O Evento</span>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#1A1714] leading-snug">
                  Uma tarde que começa<br />
                  com um convite físico.
                </h2>
                <div className="mt-6 space-y-4 text-[#3C3831] text-sm sm:text-base font-light leading-relaxed">
                  <p>
                    O evento Paciente Modelo nasce de uma ideia simples: trazer mulheres cuidadosas para dentro da Oni Face, antes de qualquer decisão, para que possam conhecer o ambiente, a metodologia e a Dra. Vanessa de perto.
                  </p>
                  <p>
                    É uma tarde leve, com cocktails, demonstrações ao vivo de protocolos Full Face e conversa real sobre o que a estética médica pode (e não pode) fazer.
                  </p>
                  <p>
                    Quem chega com o <strong className="font-semibold text-[#1A1714]">convite físico</strong> participa de um sorteio exclusivo realizado na data impressa no convite.
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wine mt-8 inline-flex"
                >
                  Solicitar convite
                  <ArrowRight className="w-4 h-4" />
                </a>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Calendar, label: 'Data do evento', value: 'Convite físico com data impressa' },
                    { icon: MapPin, label: 'Localização', value: 'Âmbar Health Center · Uberlândia, MG' },
                    { icon: Sparkles, label: 'Formato', value: 'Cocktail + demonstração Full Face' },
                    { icon: Gift, label: 'Sorteio', value: 'Exclusivo para portadoras do convite físico' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="card-uniq p-5 bg-white border-[#D9D2C4]">
                      <div className="w-8 h-8 rounded-full bg-[#1B3A6B]/10 flex items-center justify-center text-[#1B3A6B] mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-[#8A8278] mb-1">{label}</p>
                      <p className="text-xs sm:text-sm text-[#1A1714] font-medium leading-snug">{value}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Gallery Masonry */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection className="text-center mb-10">
              <span className="eyebrow mb-2 block">A Clínica</span>
              <h2 className="font-heading text-3xl text-[#1A1714]">O ambiente que espera por você</h2>
              <p className="text-[#8A8278] text-sm mt-3 font-light max-w-lg mx-auto">
                Um espaço pensado para o encontro entre ciência e delicadeza, onde cada detalhe fala sobre cuidado.
              </p>
            </AnimatedSection>

            <div className="columns-2 sm:columns-3 gap-3 sm:gap-4">
              {galleryImages.map((img, i) => (
                <AnimatedSection key={img.src} delay={i * 0.04} className="break-inside-avoid mb-3 sm:mb-4">
                  <div className="overflow-hidden rounded-lg bg-[#D9D2C4] group">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Full Face Section */}
        <section className="section bg-[#1B3A6B]">
          <div className="container-uniq">
            <AnimatedSection className="text-center mb-12">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#B8965A] mb-3 block">
                Metodologia
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#F7F3EC] leading-snug">
                O que é o Full Face?
              </h2>
              <p className="text-[#A8B8D8] text-sm sm:text-base font-light max-w-2xl mx-auto mt-4 leading-relaxed">
                Full Face não é um procedimento isolado: é uma abordagem estratégica que trata o rosto como um todo: estrutura, volume, expressão e qualidade de pele em planejamento único e progressivo.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {fullFaceItems.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.08}>
                  <div className="p-6 rounded-xl border border-[#2C4F8A] bg-[#1A2E55] hover:border-[#B8965A]/40 transition-colors">
                    <span className="text-[#B8965A] text-xs font-semibold tracking-wider block mb-3">{`0${i + 1}`}</span>
                    <h3 className="font-heading text-base sm:text-lg text-[#F7F3EC] mb-2">{item.title}</h3>
                    <p className="text-[#A8B8D8] text-xs sm:text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4} className="mt-12 text-center">
              <p className="text-[#A8B8D8] text-sm font-light mb-6 max-w-lg mx-auto">
                No evento, você assiste a uma demonstração ao vivo de como a Dra. Vanessa pensa e planeja um protocolo Full Face, do diagnóstico à execução.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wine inline-flex"
              >
                Quero participar
                <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Sorteio / Draw Section */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <div className="card-uniq p-8 sm:p-12 bg-white border-[#D9D2C4] relative overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.04]"
                    style={{ background: '#B8965A', transform: 'translate(30%, -30%)' }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 mb-6">
                      <Gift className="w-5 h-5 text-[#B8965A]" />
                      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#B8965A]">
                        Sorteio Exclusivo
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-[#1A1714] mb-4 leading-snug">
                      O convite físico<br />vale mais do que parece.
                    </h2>
                    <p className="text-[#3C3831] text-sm sm:text-base font-light leading-relaxed mb-4">
                      Quem recebe o convite impresso da Oni Face e comparece ao evento com ele na data indicada, participa automaticamente do nosso sorteio, realizado ao vivo no mesmo dia.
                    </p>
                    <p className="text-[#8A8278] text-xs sm:text-sm font-light leading-relaxed mb-8">
                      O que está em jogo? Uma sessão de avaliação completa e um procedimento do protocolo Full Face. Surpresa garantida na data do convite.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wine"
                    >
                      Solicitar meu convite físico
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Social Proof / Tone */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection className="text-center mb-10">
              <span className="eyebrow mb-2 block">Por que a Oni Face?</span>
              <h2 className="font-heading text-3xl text-[#1A1714]">Uma clínica que pensa diferente</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Star,
                  title: 'Consulta diagnóstica real',
                  desc: 'Nenhum protocolo começa sem entender quem é você, o que seu rosto comunica e onde quer chegar.',
                },
                {
                  icon: Sparkles,
                  title: 'Resultado que ainda parece você',
                  desc: 'A Dra. Vanessa não trabalha com antes e depois genéricos, o objetivo é refinamento, nunca substituição.',
                },
                {
                  icon: Gift,
                  title: 'Ambiente boutique em Uberlândia',
                  desc: 'Um espaço pensado para exclusividade e silêncio, o oposto das clínicas de volume.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <AnimatedSection key={title}>
                  <div className="text-center p-6">
                    <div className="w-10 h-10 rounded-full bg-[#B8965A]/10 flex items-center justify-center text-[#B8965A] mx-auto mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base text-[#1A1714] mb-2">{title}</h3>
                    <p className="text-xs sm:text-sm text-[#8A8278] font-light leading-relaxed">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <CTABanner
              eyebrow="Vagas limitadas"
              title="Pronta para conhecer a Oni Face?"
              subtitle="Entre em contato pelo WhatsApp, solicite seu convite e reserve sua tarde na clínica. O sorteio acontece na data impressa, só para quem aparece."
              primaryLabel="Solicitar convite"
              primaryHref={whatsappUrl}
              variant="wine"
            />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
