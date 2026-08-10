"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { getWhatsAppUrl } from '@/lib/utils';
import { Sparkles, Camera } from 'lucide-react';

const FILTERS = ['Todos', 'Harmonização', 'Pele', 'Colágeno', 'Contorno', 'Corporal'];

const RESULTS = [
  { id: 1, category: 'Harmonização', label: 'Harmonização Facial Estratégica', desc: 'Reestruturação e proporção anatômica individualizada' },
  { id: 2, category: 'Pele', label: 'Revitalização e Qualidade Cutânea', desc: 'Protocolo de hidratação profunda e viço tecidual' },
  { id: 3, category: 'Colágeno', label: 'Bioestimulador de Colágeno Facial', desc: 'Neocolagênese progressiva e sustentação natural' },
  { id: 4, category: 'Contorno', label: 'Contorno e Sustentação Mandibular', desc: 'Definição sutil sem aspecto masculinizado ou exagerado' },
  { id: 5, category: 'Harmonização', label: 'Preenchimento e Proporção Labial', desc: 'Hidratação e desenho labial com naturalidade' },
  { id: 6, category: 'Corporal', label: 'Bioestimuladores & Firmeza Corporal', desc: 'Tratamento de flacidez e refinamento de contorno' },
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
              <h1 className="text-display-sm max-w-2xl">Resultados & Casos Clínicos</h1>
              <p className="text-sm sm:text-base text-[#6B635B] max-w-xl mt-3 leading-relaxed font-light">
                Resultados que valorizam a naturalidade e preservam a identidade. Cada caso é único — assim como o planejamento individualizado de cada paciente.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Clinical Notice */}
        <div className="bg-[rgba(107,30,46,0.04)] border-b border-[rgba(107,30,46,0.08)]">
          <div className="container-uniq py-3.5">
            <p className="text-xs text-[#6B1E2E] font-medium leading-relaxed">
              Em respeito às diretrizes éticas biomédicas e à privacidade dos pacientes, registros fotográficos comparativos são apresentados detalhadamente durante a consulta presencial de avaliação na clínica.
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

        {/* Subtle Placeholders Section */}
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

            {/* Grid with subtle camera placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((result, idx) => (
                <AnimatedSection key={result.id} delay={idx * 0.05}>
                  <article className="card-uniq overflow-hidden bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
                    
                    {/* Subtle Camera Placeholder Box */}
                    <div className="p-4 bg-[#F5F3EF]">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Antes placeholder */}
                        <div className="aspect-[4/3] rounded-xl border border-dashed border-[#DCD7CD] bg-[#FAFAF8] flex flex-col items-center justify-center p-3 text-center gap-1.5">
                          <div className="w-7 h-7 rounded-full bg-white border border-[#EAE7E0] flex items-center justify-center shadow-xs">
                            <Camera className="w-3.5 h-3.5 text-[#9A9188]" />
                          </div>
                          <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#9A9188]">
                            Antes
                          </span>
                          <span className="text-[0.55rem] text-[#B0A89F] font-light">
                            Caso Clínico
                          </span>
                        </div>

                        {/* Evolução placeholder */}
                        <div className="aspect-[4/3] rounded-xl border border-dashed border-[#6B1E2E]/20 bg-[#6B1E2E]/[0.02] flex flex-col items-center justify-center p-3 text-center gap-1.5">
                          <div className="w-7 h-7 rounded-full bg-white border border-[#6B1E2E]/20 flex items-center justify-center shadow-xs">
                            <Camera className="w-3.5 h-3.5 text-[#6B1E2E]" />
                          </div>
                          <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#6B1E2E]">
                            Evolução
                          </span>
                          <span className="text-[0.55rem] text-[#6B1E2E]/70 font-light">
                            Quiet Beauty FS
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="pill-label mb-2 inline-block text-[0.6rem]">{result.category}</span>
                        <h3 className="text-base font-medium text-[#1E1B18] font-heading">{result.label}</h3>
                        <p className="text-xs text-[#6B635B] mt-1 font-light leading-relaxed">{result.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#EAE7E0] flex items-center justify-between">
                        <span className="text-[0.65rem] text-[#9A9188] font-light">Apresentado em consulta</span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[0.6875rem] font-semibold text-[#6B1E2E] hover:underline"
                        >
                          Agendar Análise →
                        </a>
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
                eyebrow="Seu planejamento individualizado"
                title="Pronta para começar sua jornada?"
                subtitle="Agende sua avaliação presencial com Fabiana Sobral na Oscar Freire e descubra o plano de tratamento facial ou corporal ideal para o seu momento."
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
