"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { getWhatsAppUrl } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

const FILTERS = ['Todos', 'Harmonização', 'Pele', 'Colágeno', 'Contorno', 'Corporal'];

const RESULTS = [
  { id: 1, category: 'Harmonização', before: '/galeria-2.jpg', after: '/galeria-3.jpg', label: 'Harmonização Facial Estratégica' },
  { id: 2, category: 'Pele', before: '/galeria-4.jpg', after: '/galeria-5.jpg', label: 'Revitalização e Qualidade Cutânea' },
  { id: 3, category: 'Colágeno', before: '/galeria-6.jpg', after: '/galeria-7.jpg', label: 'Bioestimulador de Colágeno' },
  { id: 4, category: 'Contorno', before: '/galeria-8.jpg', after: '/galeria-9.jpg', label: 'Contorno e Sustentação Mandibular' },
  { id: 5, category: 'Harmonização', before: '/galeria-10.png', after: '/galeria-11.jpg', label: 'Preenchimento e Proporção Labial' },
  { id: 6, category: 'Corporal', before: '/galeria-2.jpg', after: '/galeria-4.jpg', label: 'Bioestimuladores & Firmeza Corporal' },
];

const MASONRY_GALLERY = [
  { src: '/gallery-3.png', title: 'Atendimento Personalizado', desc: 'Escuta clínica aprofundada', span: 'col-span-2 row-span-2 aspect-[4/3] sm:aspect-[16/11]' },
  { src: '/gallery-1.png', title: 'Harmonia & Proporção', desc: 'Quiet Beauty FS', span: 'col-span-1 aspect-square' },
  { src: '/gallery-2.png', title: 'Refinamento & Detalhes', desc: 'Biomateriais nobres', span: 'col-span-1 aspect-square' },
  { src: '/gallery-4.png', title: 'Tecnologia & Ciência', desc: 'Estruturação avançada', span: 'col-span-1 aspect-square' },
  { src: '/gallery-5.png', title: 'Consultório Oscar Freire', desc: 'Privacidade e conforto', span: 'col-span-1 aspect-square' },
];

export default function ResultadosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const whatsappUrl = getWhatsAppUrl('geral');

  const filtered = activeFilter === 'Todos'
    ? RESULTS
    : RESULTS.filter(r => r.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAF8' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Page Header */}
        <section className="section-sm bg-[#F5F3EF] border-b border-[#EAE7E0]">
          <div className="container-uniq">
            <AnimatedSection>
              <span className="eyebrow mb-3 block">Clínica FS · Fabiana Sobral</span>
              <h1 className="text-display-sm max-w-2xl">Resultados & Evolução</h1>
              <p className="text-sm sm:text-base text-[#6B635B] max-w-xl mt-3 leading-relaxed font-light">
                Resultados que valorizam a naturalidade e preservam a identidade. Cada caso é único — assim como o plano de tratamento individual.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Clinical Notice */}
        <div className="bg-[rgba(107,30,46,0.05)] border-b border-[rgba(107,30,46,0.1)]">
          <div className="container-uniq py-3.5">
            <p className="text-xs text-[#6B1E2E] font-medium leading-relaxed">
              As imagens ilustram a evolução de protocolos individualizados. Os resultados variam de acordo com as características biológicas, anatomia e resposta tecidual de cada paciente.
            </p>
          </div>
        </div>

        {/* Masonry Atmosphere Gallery */}
        <section className="section-sm bg-[#FAFAF8] border-b border-[#EAE7E0]">
          <div className="container-uniq">
            <AnimatedSection className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#6B1E2E]" />
                <span className="eyebrow block">Galeria Clínica</span>
              </div>
              <h2 className="text-headline text-2xl sm:text-3xl">Ambiente e Filosofia de Cuidado</h2>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {MASONRY_GALLERY.map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.06} className={item.span}>
                  <div className="group relative overflow-hidden rounded-2xl bg-[#EAE7E0] h-full shadow-sm">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <p className="text-white font-heading text-base">{item.title}</p>
                        <p className="text-white/80 text-[0.6875rem] font-light">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Before / Evolution Cases */}
        <section className="section bg-[#FAFAF8]">
          <div className="container-uniq">

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrar resultados por categoria">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`btn py-2 px-5 text-xs transition-all ${
                    activeFilter === filter ? 'btn-wine' : 'btn-outline'
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Before/After Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((result, idx) => (
                <AnimatedSection key={result.id} delay={idx * 0.05}>
                  <article className="card-uniq overflow-hidden group hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="grid grid-cols-2 gap-1 bg-[#EAE7E0] p-1">
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#EAE7E0]">
                        <img
                          src={result.before}
                          alt={`${result.label} - Antes`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 left-2">
                          <span className="text-[0.55rem] font-semibold tracking-wide uppercase bg-[#1E1B18]/70 backdrop-blur-sm text-[#FAFAF8] px-2 py-0.5 rounded-full">
                            Antes
                          </span>
                        </div>
                      </div>
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#EAE7E0]">
                        <img
                          src={result.after}
                          alt={`${result.label} - Depois`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 left-2">
                          <span className="text-[0.55rem] font-semibold tracking-wide uppercase bg-[#6B1E2E]/90 backdrop-blur-sm text-[#FAFAF8] px-2 py-0.5 rounded-full">
                            Evolução
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#1E1B18] font-heading">{result.label}</p>
                        <span className="pill-label mt-2 inline-block text-[0.6rem]">{result.category}</span>
                      </div>
                    </div>
                  </article>
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
                eyebrow="Seu planejamento"
                title="Pronta para começar sua jornada?"
                subtitle="Agende sua avaliação presencial com Fabiana Sobral e descubra o plano de tratamento facial ou corporal ideal para o seu momento."
                primaryLabel="Agendar Avaliação"
                primaryHref={whatsappUrl}
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
