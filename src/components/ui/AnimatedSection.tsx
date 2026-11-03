"use client";

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Revelação ao entrar na tela (padrão motion-design, 13/10/2026).
 * O HTML do servidor nasce VISÍVEL (sem opacity:0): sem JS, com JS lento ou para robôs,
 * o conteúdo aparece normalmente. Depois de hidratar, só o que está fora da tela recebe
 * a animação de entrada (Web Animations API, uma vez). Movimento reduzido: nada anima.
 * A API (children, className, delay, direction) é a mesma de antes.
 */

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'none';
}

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function observeOnce(el: Element, cb: () => void): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    cb();
    return () => {};
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const fn = callbacks.get(entry.target);
          callbacks.delete(entry.target);
          obs.unobserve(entry.target);
          fn?.();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );
  }
  callbacks.set(el, cb);
  sharedObserver.observe(el);
  const obs = sharedObserver;
  return () => {
    callbacks.delete(el);
    obs.unobserve(el);
  };
}

export const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof el.animate !== 'function') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) return;

    const from =
      direction === 'up' ? 'translate3d(0, 24px, 0)'
      : direction === 'left' ? 'translate3d(-24px, 0, 0)'
      : 'none';

    el.style.opacity = '0';
    return observeOnce(el, () => {
      el.style.opacity = '';
      el.animate(
        [
          { opacity: 0, transform: from },
          { opacity: 1, transform: 'none' },
        ],
        {
          duration: 640,
          delay: Math.min(delay, 0.18) * 1000,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'backwards',
        },
      );
    });
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
