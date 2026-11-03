"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GOOGLE_PERFIL_URL, GOOGLE_REVIEWS, type GoogleReview } from '@/data/googleReviews';

/**
 * Carrossel das avaliações do Google (componente aprovado do site-perfeito,
 * nas cores da Oni Face). Sem número de avaliações nem nota média, a pedido
 * do Diego (03/11/2026). Gira sozinho a cada 6 s, pausa no hover e no foco,
 * e para de vez quando a pessoa toca, arrasta, rola, usa o teclado ou as setas.
 */
const TITULO = 'O que dizem as pacientes';
const LONG = 220;
const STAR = '#C9A45C';
const INTERVALO = 6000;

const GoogleG = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false" className="shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const Stars = ({ size = 16 }: { size?: number }) => (
  <span className="inline-flex items-center gap-0.5" role="img" aria-label="5 estrelas">
    {[0, 1, 2, 3, 4].map((n) => (
      <svg key={n} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill={STAR} d="M12 2.4l2.95 6.2 6.8.9-4.97 4.72 1.25 6.76L12 17.65l-6.03 3.33 1.25-6.76L2.25 9.5l6.8-.9z" />
      </svg>
    ))}
  </span>
);

const Card = ({ r, index, total }: { r: GoogleReview; index: number; total: number }) => {
  const [open, setOpen] = useState(false);
  const long = r.texto.length > LONG;
  const inicial = r.nome.trim().charAt(0).toUpperCase();
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`Avaliação ${index + 1} de ${total}`}
      data-card
      className="flex shrink-0 snap-start basis-[calc((100%-1.25rem)/1.15)] md:basis-[calc((100%-1.25rem)/2.2)] lg:basis-[calc((100%-2.5rem)/3)]"
    >
      <article className="relative flex w-full flex-col rounded-2xl bg-[#F7F3EC] p-6 md:p-7 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.55)]">
        <span aria-hidden="true" className="absolute right-6 top-3 font-heading text-6xl leading-none text-[#B8965A]/30">&ldquo;</span>
        <Stars />
        <blockquote
          className={`mt-5 whitespace-pre-line [overflow-wrap:anywhere] font-heading italic text-[#1A1714] ${
            r.texto.length < 110 ? 'text-2xl leading-snug' : 'text-lg leading-relaxed'
          } ${long && !open ? 'line-clamp-6' : ''}`}
        >
          {r.texto}
        </blockquote>
        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-2 inline-flex min-h-11 items-center self-start text-sm font-medium text-[#1B3A6B] underline underline-offset-4 decoration-[#B8965A]/60 hover:decoration-[#1B3A6B]"
          >
            {open ? 'Ler menos' : 'Ler mais'}
          </button>
        )}
        <div className="mt-auto pt-5">
          <hr className="border-0 border-t border-[#D9D2C4]" />
          <footer className="flex items-center gap-3 pt-4">
            <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1B3A6B] font-heading text-xl text-[#F7F3EC]">{inicial}</span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-medium text-[#1A1714]">{r.nome}</span>
              <span className="block text-xs text-[#8A8278]">{r.data}</span>
            </span>
            <GoogleG size={22} />
          </footer>
        </div>
      </article>
    </div>
  );
};

export const GoogleReviews = () => {
  const [reduced, setReduced] = useState(true);
  const paused = useRef(false);
  const stopped = useRef(false);
  const scroller = useRef<HTMLDivElement>(null);
  const total = GOOGLE_REVIEWS.length;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    if (!card) return;
    const w = card.offsetWidth + 20;
    const max = el.scrollWidth - el.clientWidth;
    let target = el.scrollLeft + dir * w;
    if (dir === 1 && el.scrollLeft >= max - 4) target = 0;
    if (dir === -1 && el.scrollLeft <= 4) target = max;
    el.scrollTo({ left: target, behavior: reduced ? 'auto' : 'smooth' });
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => { if (!paused.current && !stopped.current && !document.hidden) step(1); }, INTERVALO);
    return () => window.clearInterval(id);
  }, [reduced, step]);


  return (
    <section id="avaliacoes" className="section relative overflow-hidden scroll-mt-20 bg-[#1B3A6B]" aria-labelledby="avaliacoes-titulo">
      <div className="absolute inset-0 bg-pattern opacity-[0.22] pointer-events-none" aria-hidden="true" />
      <div className="container-uniq relative z-10">
        <AnimatedSection>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow mb-4 block text-[#D9BE8C]">Avaliações no Google</span>
              <h2 id="avaliacoes-titulo" className="text-headline text-[#F7F3EC] max-w-2xl">{TITULO}</h2>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => { stopped.current = true; step(-1); }} aria-label="Avaliação anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F3EC]/40 text-[#F7F3EC] transition-colors hover:border-[#D9BE8C] hover:text-[#D9BE8C]">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => { stopped.current = true; step(1); }} aria-label="Próxima avaliação" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F7F3EC]/40 text-[#F7F3EC] transition-colors hover:border-[#D9BE8C] hover:text-[#D9BE8C]">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-10">
          <div
            ref={scroller}
            tabIndex={0}
            role="region"
            aria-label={TITULO}
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
            onFocus={() => { paused.current = true; }}
            onBlur={() => { paused.current = false; }}
            onPointerDown={() => { stopped.current = true; }}
            onTouchStart={() => { stopped.current = true; }}
            onWheel={() => { stopped.current = true; }}
            onKeyDown={() => { stopped.current = true; }}
            className="scrollbar-hide flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto overscroll-x-contain scroll-smooth py-4 -my-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9BE8C] motion-reduce:scroll-auto"
          >
            {GOOGLE_REVIEWS.map((r, i) => <Card key={r.nome} r={r} index={i} total={total} />)}
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_PERFIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver as avaliações no Google Maps"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#F7F3EC] px-6 py-2 text-sm font-medium text-[#1B3A6B] shadow-[0_14px_32px_-16px_rgba(0,0,0,0.5)] transition-shadow hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.6)]"
          >
            <GoogleG size={22} />
            <span aria-hidden="true"><Stars size={16} /></span>
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
};
