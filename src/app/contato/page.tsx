import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '@/lib/utils';
import { Instagram, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export const metadata: Metadata = {
  title: 'Contato | Oni Face · Facial Boutique | Uberlândia — MG',
  description: 'Fale com a Oni Face e a Dra. Vanessa Sanabria. Agende sua avaliação de estética facial exclusiva em Uberlândia, MG. WhatsApp: +55 34 99803-1777.',
  alternates: { canonical: `${SITE_URL}/contato` },
  openGraph: { url: `${SITE_URL}/contato`, type: 'website' },
};

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContatoPage() {
  const whatsappUrl = getWhatsAppUrl();

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
              <h1 className="text-display-sm max-w-3xl text-[#1A1714]">Contato & Localização</h1>
              <p className="text-sm sm:text-base text-[#8A8278] max-w-2xl mt-3 leading-relaxed font-light">
                Agende sua consulta individualizada e comece a desenhar o seu melhor planejamento de estética facial com a Dra. Vanessa Sanabria.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Actions Bar */}
        <section className="py-6 bg-[#F7F3EC] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wine"
                aria-label="Enviar mensagem pelo WhatsApp"
              >
                <WhatsAppIcon />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href="https://www.instagram.com/dravansanabria/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="Instagram @dravansanabria"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                @dravansanabria
              </a>
            </div>
          </div>
        </section>

        {/* Main Location & Info Card */}
        <section className="section bg-[#EDE7D9]">
          <div className="container-uniq">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Info Column */}
              <AnimatedSection className="lg:col-span-6">
                <div className="card-uniq p-8 sm:p-10 flex flex-col gap-6 bg-white border-[#D9D2C4]">
                  <div>
                    <span className="pill-label mb-3 inline-block bg-[rgba(27,58,107,0.08)] text-[#1B3A6B]">Facial Boutique</span>
                    <h2 className="font-heading text-3xl text-[#1A1714]">Uberlândia, MG</h2>
                    <p className="text-xs text-[#8A8278] tracking-wide mt-1">Atendimento Exclusivo com Hora Marcada</p>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#1B3A6B]/10 flex items-center justify-center flex-shrink-0 text-[#1B3A6B]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-[#8A8278] mb-1">Localização</p>
                        <p className="text-sm sm:text-base text-[#1A1714] font-medium leading-relaxed">
                          Condomínio Âmbar Health Center · Sala 38<br />
                          Jardim Karaíba · Uberlândia, MG<br />
                          <span className="text-[#8A8278] font-normal">CEP 38.411-217</span>
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+%C3%82mbar+Health+Center+Jardim+Kara%C3%ADba+Uberl%C3%A2ndia+MG+38411-217"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#1B3A6B] hover:text-[#B8965A] transition-colors"
                        >
                          Ver no Google Maps →
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#1B3A6B]/10 flex items-center justify-center flex-shrink-0 text-[#1B3A6B]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-[#8A8278] mb-1">Horário de Funcionamento</p>
                        <p className="text-xs sm:text-sm text-[#3C3831]">Segunda a Sexta: 09h às 19h</p>
                        <p className="text-xs text-[#8A8278]">Sábado: 09h às 13h (conforme disponibilidade e agendamento prévio)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-[#1B3A6B]/10 flex items-center justify-center flex-shrink-0 text-[#1B3A6B]">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-semibold tracking-wider uppercase text-[#8A8278] mb-1">Agendamentos & Informações</p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-[#1B3A6B] hover:text-[#2C4F8A] transition-colors"
                        >
                          {WHATSAPP_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wine flex-1 justify-center"
                    >
                      Agendar Avaliação
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Single Clinic Photo */}
              <AnimatedSection delay={0.15} className="lg:col-span-6">
                <div className="card-uniq overflow-hidden shadow-md border-[#D9D2C4]">
                  <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#D9D2C4] relative group">
                    <img
                      src="/2.jpg"
                      alt="Oni Face · Facial Boutique — Uberlândia, MG"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/75 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <p className="text-[#F7F3EC] font-heading text-xl sm:text-2xl">Oni Face Boutique</p>
                        <p className="text-[#F7F3EC]/85 text-xs sm:text-sm font-light mt-0.5">Uberlândia, MG</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between bg-white border-t border-[#D9D2C4]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#1B3A6B]" />
                      <span className="text-xs sm:text-sm text-[#3C3831] font-medium">Quiet Beauty · Exclusividade no atendimento</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-[#F7F3EC]">
          <div className="container-uniq">
            <AnimatedSection className="mb-10 text-center max-w-2xl mx-auto">
              <span className="eyebrow mb-2 block">Dúvidas Frequentes</span>
              <h2 className="text-headline text-[#1A1714]">Informações sobre sua consulta</h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'Como faço para agendar minha avaliação?',
                  a: `O agendamento é realizado diretamente pelo nosso WhatsApp oficial (${WHATSAPP_DISPLAY}). Nossa equipe responderá prontamente para encontrar o melhor dia e horário para o seu atendimento.`,
                },
                {
                  q: 'Onde fica a Oni Face?',
                  a: 'A Oni Face fica no Condomínio Âmbar Health Center, Sala 38, no Jardim Karaíba — Uberlândia, MG (CEP 38.411-217). Instruções detalhadas de acesso, estacionamento e recepção são enviadas junto com a confirmação do horário.',
                },
                {
                  q: 'Posso ir à consulta sem saber exatamente qual procedimento realizar?',
                  a: 'Com certeza. A consulta de avaliação com a Dra. Vanessa Sanabria é justamente o momento de escuta diagnóstica, onde analisamos as proporções do seu rosto, compreendemos seus objetivos e traçamos juntas o planejamento ideal.',
                },
              ].map((item, idx) => (
                <AnimatedSection key={item.q} delay={idx * 0.05}>
                  <div className="card-uniq p-6 bg-white border-[#D9D2C4]">
                    <h3 className="font-heading text-base sm:text-lg text-[#1A1714] mb-2">{item.q}</h3>
                    <p className="text-xs sm:text-sm text-[#8A8278] leading-relaxed font-light">{item.a}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
