import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { MapaOniFace } from '@/components/MapaOniFace';
import { VideoReels } from '@/components/VideoReels';
import { FullFaceJsonLd, fullFaceCrumbs } from '@/components/fullface/FullFaceJsonLd';
import { CLINIC } from '@/data/clinic';
import { PROFESSIONAL } from '@/lib/seo/site';
import {
  FULL_FACE_AVISO,
  FULL_FACE_SUBPAGES,
  getFullFacePage,
  type FullFacePage,
} from '@/data/fullFace';

/** Link do WhatsApp da clínica (clinic.ts) com a mensagem da página. */
export function whatsappLink(mensagem: string): string {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

interface FullFaceArticleProps {
  page: FullFacePage;
  /** Retrato ao lado do título (página Sobre). */
  retrato?: { src: string; alt: string };
  /** Mostra o mapa antes do rodapé. */
  comMapa?: boolean;
  /** Mostra os vídeos logo depois do texto. */
  comVideos?: boolean;
}

const pad2 = (n: number) => String(n).padStart(2, '0');

export function FullFaceArticle({ page, retrato, comMapa = false, comVideos = false }: FullFaceArticleProps) {
  const crumbs = fullFaceCrumbs(page);
  const isPilar = page.slug === 'full-face';
  const isSub = page.rota.startsWith('/full-face/');
  const ctaUrl = whatsappLink(page.cta.mensagemWhatsapp);

  const relacionados = isPilar
    ? FULL_FACE_SUBPAGES
    : page.relacionados
        .map((slug) => getFullFacePage(slug))
        .filter((p): p is FullFacePage => Boolean(p));

  const temImagem = Boolean(page.heroImage);
  const temRetrato = Boolean(retrato);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EC]">
      <Header />
      <FloatingWhatsApp />
      <FullFaceJsonLd page={page} />

      <main id="conteudo" className="flex-1">
        {/* Trilha */}
        <div className="bg-[#EDE7D9] border-b border-[#D9D2C4]">
          <div className="container-uniq">
            <nav aria-label="Trilha de navegação" className="py-3">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-[#6B645A]">
                {crumbs.map((c, i) => {
                  const ultimo = i === crumbs.length - 1;
                  return (
                    <li key={c.path} className="flex items-center gap-2">
                      {ultimo ? (
                        <span aria-current="page" className="text-[#3C3831] font-medium">
                          {c.name}
                        </span>
                      ) : (
                        <>
                          <Link
                            href={c.path}
                            className="inline-flex items-center min-h-11 hover:text-[#1B3A6B] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B] rounded-sm"
                          >
                            {c.name}
                          </Link>
                          <span aria-hidden="true" className="text-[#A89D8C]">/</span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>

        {/* Abertura */}
        {temImagem ? (
          <section className="bg-[#EDE7D9] pb-12 sm:pb-16 lg:pb-20 pt-8 sm:pt-12">
            <div className="container-uniq">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 order-1">
                  <span className="eyebrow block mb-4 text-[#8A6A32]">Full Face · {CLINIC.city}</span>
                  <h1
                    className="font-heading font-light text-[#1A1714] leading-[1.05] mb-5"
                    style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.5rem)', letterSpacing: '-0.025em' }}
                  >
                    {page.h1}
                  </h1>
                  <span className="divider mb-6" aria-hidden="true" />
                  <p className="font-heading italic text-[#3C3831] leading-snug mb-8 max-w-xl" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.6rem)' }}>
                    {page.lead}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine min-h-11 justify-center">
                      Agendar avaliação
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <Link href="/full-face/planejamento" className="btn btn-outline min-h-11 justify-center">
                      Como eu planejo
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-7 order-2">
                  <div className="relative overflow-hidden rounded-2xl bg-[#D9D2C4] shadow-[0_24px_60px_-28px_rgba(27,58,107,0.45)] aspect-[4/5] sm:aspect-[3/2]">
                    <img
                      src={page.heroImage}
                      alt={page.heroAlt ?? ''}
                      width={1536}
                      height={1024}
                      fetchPriority="high"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-[10%_50%] sm:object-center"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#1B3A6B]/10 rounded-2xl pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-[#EDE7D9] pt-10 sm:pt-14 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden">
            <div className="container-uniq relative">
              <div className={`grid grid-cols-1 ${temRetrato ? 'lg:grid-cols-12 gap-10 lg:gap-14 items-center' : ''}`}>
                <div className={temRetrato ? 'lg:col-span-7 order-2 lg:order-1' : 'max-w-4xl'}>
                  {isSub ? (
                    <Link
                      href="/full-face"
                      className="eyebrow inline-flex items-center min-h-11 mb-2 text-[#8A6A32] hover:text-[#1B3A6B] underline-offset-4 hover:underline"
                    >
                      Full Face · Escultura facial
                    </Link>
                  ) : (
                    <span className="eyebrow block mb-4 text-[#8A6A32]">Instituto Oni Face · {CLINIC.city}</span>
                  )}
                  <h1
                    className="font-heading font-light text-[#1A1714] leading-[1.06] mb-5"
                    style={{ fontSize: 'clamp(2.3rem, 5vw, 4.25rem)', letterSpacing: '-0.025em' }}
                  >
                    {page.h1}
                  </h1>
                  <span className="divider mb-6" aria-hidden="true" />
                  <p className="font-heading italic text-[#3C3831] leading-snug max-w-3xl" style={{ fontSize: 'clamp(1.25rem, 2.1vw, 1.7rem)' }}>
                    {page.lead}
                  </p>
                  <div className="mt-8">
                    <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wine min-h-11">
                      Agendar avaliação
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                {retrato && (
                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-md mx-auto lg:max-w-none bg-[#D9D2C4] shadow-[0_24px_60px_-28px_rgba(27,58,107,0.45)]">
                      <img
                        src={retrato.src}
                        alt={retrato.alt}
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Seções do texto */}
        <section className="bg-[#F7F3EC] py-12 sm:py-16 lg:py-20">
          <div className="container-uniq">
            <div className="max-w-5xl mx-auto divide-y divide-[#D9D2C4]">
              {page.secoes.map((secao, i) => (
                <AnimatedSection key={secao.titulo} className="py-8 sm:py-10 first:pt-0 last:pb-0">
                  <article className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10">
                    <div className="md:col-span-5">
                      <span className="font-heading text-[#8A6A32] text-lg tabular-nums block mb-1" aria-hidden="true">
                        {pad2(i + 1)}
                      </span>
                      <h2 className="text-headline text-[#1A1714]" style={{ fontSize: 'clamp(1.55rem, 2.4vw, 2.15rem)' }}>
                        {secao.titulo}
                      </h2>
                    </div>
                    <div className="md:col-span-7 space-y-4 md:pt-8">
                      {secao.paragrafos.map((p) => (
                        <p key={p} className="text-base sm:text-[1.0625rem] leading-relaxed text-[#3C3831]">
                          {p}
                        </p>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {comVideos && <VideoReels tone="deep" />}

        {/* Mitos */}
        {page.mitos && page.mitos.length > 0 && (
          <section aria-labelledby="mitos-titulo" className="bg-[#EDE7D9] py-12 sm:py-16 lg:py-20">
            <div className="container-uniq">
              <div className="max-w-5xl mx-auto">
                <span className="eyebrow block mb-3 text-[#8A6A32]">Crença e resposta</span>
                <h2 id="mitos-titulo" className="text-headline text-[#1A1714] mb-8 sm:mb-10">
                  O que se acredita, e o que eu respondo
                </h2>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {page.mitos.map((mito, i) => {
                    const ultimoImpar = page.mitos!.length % 2 === 1 && i === page.mitos!.length - 1;
                    return (
                      <li key={mito.crenca} className={ultimoImpar ? 'md:col-span-2' : ''}>
                        <AnimatedSection delay={(i % 2) * 0.06} className="h-full">
                          <article className="h-full rounded-2xl bg-white border border-[#D9D2C4] p-6 sm:p-8 flex flex-col gap-5">
                            <div>
                              <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-[#6B645A] mb-2">
                                Crença {pad2(i + 1)}
                              </p>
                              <h3 className="font-heading text-[1.5rem] sm:text-[1.65rem] leading-tight text-[#1A1714]">
                                “{mito.crenca}”
                              </h3>
                            </div>
                            <div className="mt-auto border-t border-[#D9D2C4] pt-5 flex gap-3">
                              <span className="mt-2 h-px w-6 bg-[#B8965A] flex-shrink-0" aria-hidden="true" />
                              <div>
                                <p className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-[#1B3A6B] mb-1">
                                  Resposta
                                </p>
                                <p className="text-base leading-relaxed text-[#3C3831]">{mito.resposta}</p>
                              </div>
                            </div>
                          </article>
                        </AnimatedSection>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* Chamada para a avaliação */}
        <section className="bg-[#F7F3EC] py-12 sm:py-16">
          <div className="container-uniq">
            <AnimatedSection>
              <div className="rounded-2xl md:rounded-3xl bg-[#1B3A6B] px-4 py-10 sm:px-12 md:px-16 md:py-14 text-center">
                <span className="eyebrow block mb-3 text-[#D4B07A]">Avaliação facial completa</span>
                <h2 className="text-headline text-[#F7F3EC] mb-4">{page.cta.titulo}</h2>
                <p className="text-base leading-relaxed text-[#F7F3EC]/90 max-w-2xl mx-auto mb-7">
                  {page.cta.texto}
                </p>
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn min-h-11 px-4 sm:px-7 normal-case tracking-normal sm:uppercase sm:tracking-[0.06em] text-[0.8125rem] bg-[#F7F3EC] text-[#1B3A6B] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4B07A]"
                >
                  {page.cta.botao}
                  <ArrowUpRight className="hidden sm:block w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="sr-only">(abre o WhatsApp em nova aba)</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Links relacionados */}
        {relacionados.length > 0 && (
          <section aria-labelledby="relacionados-titulo" className="bg-[#F7F3EC] pb-12 sm:pb-16 lg:pb-20">
            <div className="container-uniq">
              <div className="max-w-5xl mx-auto">
                <h2 id="relacionados-titulo" className="text-headline text-[#1A1714] mb-6" style={{ fontSize: 'clamp(1.45rem, 2.2vw, 1.9rem)' }}>
                  {isPilar ? 'Leia também sobre Full Face' : 'Continue lendo'}
                </h2>
                <ul className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
                  {relacionados.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={r.rota}
                        className="group h-full flex flex-col justify-between gap-4 rounded-2xl bg-white border border-[#D9D2C4] p-6 transition-[border-color,box-shadow] duration-200 hover:border-[#1B3A6B]/40 hover:shadow-[0_8px_24px_rgba(27,58,107,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B3A6B]"
                      >
                        <div>
                          <p className="font-heading text-[1.35rem] leading-tight text-[#1A1714] mb-2">{r.nomeCurto}</p>
                          <p className="text-sm leading-relaxed text-[#6B645A]">{r.lead}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold tracking-wide text-[#1B3A6B]">
                          Ler
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {comMapa && <MapaOniFace titulo="Onde fica o Instituto Oni Face" />}

        <div className={comMapa ? 'bg-[#EDE7D9]' : 'bg-[#F7F3EC]'}>
          <div className="container-uniq">
            <p className="max-w-5xl mx-auto border-t border-[#D9D2C4] py-6 text-[0.8125rem] leading-relaxed text-[#6B645A]">
              {FULL_FACE_AVISO} {PROFESSIONAL.name}, {PROFESSIONAL.jobTitle.toLowerCase()}, {PROFESSIONAL.cro.display}.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
