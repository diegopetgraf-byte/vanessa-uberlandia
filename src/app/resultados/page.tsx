"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CTABanner } from '@/components/ui/CTABanner';
import { getWhatsAppUrl } from '@/lib/utils';
import { Camera } from 'lucide-react';

const FILTERS = ['Todos', 'Harmonização', 'Pele', 'Colágeno', 'Contorno'];

const RESULTS = [
  { id: 1, category: 'Harmonização', label: 'Harmonização Facial Estratégica', desc: 'Reestruturação e proporção anatômica individualizada (Full Face)' },
  { id: 2, category: 'Pele', label: 'Revitalização e Qualidade Cutânea', desc: 'Protocolo de hidratação profunda e viço tecidual' },
  { id: 3, category: 'Colágeno', label: 'Bioestimulador de Colágeno Facial', desc: 'Estímulo de colágeno progressivo e sustentação natural' },
  { id: 4, category: 'Contorno', label: 'Contorno e Sustentação Mandibular', desc: 'Definição sutil e elegante do ângulo da mandíbula' },
  { id: 5, category: 'Harmonização', label: 'Preenchimento e Proporção Labial', desc: 'Definição de contorno e volume labial anatômico' },
];

export default function ResultadosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const whatsappUrl = getWhatsAppUrl('geral');

  const filtered = activeFilter === 'Todos'
    ? RESULTS
    : RESULTS.filter(r => r.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F3EC' }}>
      <Header />
      <FloatingWhatsApp />
      <main className="flex-1">

        {/* Page Header */}
        <section className="section-sm bg-[#EDE7D9] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <AnimatedSection>
              <span className="eyebrow mb-3 block">Oni Face · Facial Boutique</span>
              <h1 className="text-display-sm max-w-2xl text-[#1A1714]">Resultados & Casos Clínicos</h1>
              <p className="text-sm sm:text-base text-[#8A8278] max-w-xl mt-3 leading-relaxed font-light">
                Resultados que valorizam a naturalidade e preservam a identidade. Cada caso é único — assim como o planejamento individualizado de cada paciente.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Clinical Notice */}
        <div className="bg-[rgba(27,58,107,0.04)] border-b border-[rgba(27,58,107,0.08)]">
          <div className="container-uniq py-3.5">
            <p className="text-xs text-[#1B3A6B] font-medium leading-relaxed">
              Em respeito às diretrizes éticas odontológicas e à privacidade das pacientes, registros fotográficos comparativos de antes e depois são apresentados detalhadamente durante a consulta presencial de avaliação na clínica.
            </p>
          </div>
        </div>

        {/* Subtle Placeholders Section */}
        <section className="section bg-[#F7F3EC]">
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
                  <article className="card-uniq overflow-hidden bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full border-[#D9D2C4]">
                    
                    {/* Subtle Camera Placeholder Box */}
                    <div className="p-4 bg-[#EDE7D9]/60">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Antes placeholder */}
                        <div className="aspect-[4/3] rounded-xl border border-dashed border-[#C4BAA8] bg-[#F7F3EC] flex flex-col items-center justify-center p-3 text-center gap-1.5">
                          <div className="w-7 h-7 rounded-full bg-white border border-[#D9D2C4] flex items-center justify-center shadow-xs">
                            <Camera className="w-3.5 h-3.5 text-[#8A8278]" />
                          </div>
                          <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#8A8278]">
                            Antes
                          </span>
                          <span className="text-[0.55rem] text-[#8A8278]/70 font-light">
                            Caso Clínico
                          </span>
                        </div>

                        {/* Evolução placeholder */}
                        <div className="aspect-[4/3] rounded-xl border border-dashed border-[#1B3A6B]/20 bg-[#1B3A6B]/[0.02] flex flex-col items-center justify-center p-3 text-center gap-1.5">
                          <div className="w-7 h-7 rounded-full bg-white border border-[#1B3A6B]/20 flex items-center justify-center shadow-xs">
                            <Camera className="w-3.5 h-3.5 text-[#1B3A6B]" />
                          </div>
                          <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#1B3A6B]">
                            Evolução
                          </span>
                          <span className="text-[0.55rem] text-[#1B3A6B]/70 font-light">
                            Oni Face
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="pill-label mb-2 inline-block text-[0.6rem] bg-[#EDE7D9] text-[#1B3A6B]">{result.category}</span>
                        <h3 className="text-base font-medium text-[#1A1714] font-heading">{result.label}</h3>
                        <p className="text-xs text-[#8A8278] mt-1 font-light leading-relaxed">{result.desc}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#D9D2C4] flex items-center justify-between">
                        <span className="text-[0.65rem] text-[#8A8278] font-light">Apresentado em consulta</span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[0.6875rem] font-semibold text-[#1B3A6B] hover:underline"
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
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <AnimatedSection>
              <CTABanner
                eyebrow="Seu planejamento individualizado"
                title="Pronta para começar sua jornada?"
                subtitle="Agende sua avaliação presencial com a Dra. Vanessa Sanabria em Uberlândia, MG e descubra o plano de tratamento facial ideal para o seu momento."
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
