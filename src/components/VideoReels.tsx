"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import { ONI_VIDEOS, type OniVideo } from '@/data/videos';

interface VideoReelsProps {
  videos?: OniVideo[];
  titulo?: string;
  className?: string;
  /** Fundo da seção. */
  tone?: 'cream' | 'deep';
}

/**
 * Vídeos verticais da Dra. Vanessa.
 * Celular e tablet: fileira com rolagem e scroll-snap. Desktop largo: grade.
 * O arquivo de vídeo só é pedido quando a pessoa toca no cartão (preload="none").
 * Popup com <dialog> nativo (modal): foco preso, ESC e clique fora fecham e pausam.
 */
export function VideoReels({
  videos = ONI_VIDEOS,
  titulo = 'Por dentro da avaliação',
  className = '',
  tone = 'cream',
}: VideoReelsProps) {
  const [atual, setAtual] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const gatilhoRef = useRef<HTMLButtonElement | null>(null);

  const fechar = useCallback(() => {
    const v = videoRef.current;
    if (v) v.pause();
    const d = dialogRef.current;
    if (d?.open) d.close();
  }, []);

  // Abre o modal quando um vídeo é escolhido; play é consequência direta do toque.
  useEffect(() => {
    if (atual === null) return;
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
    document.documentElement.style.overflow = 'hidden';
    const v = videoRef.current;
    if (v) {
      v.load();
      v.play().catch(() => {});
    }
  }, [atual]);

  // Ao fechar (ESC, botão ou clique fora): pausa, libera a rolagem e devolve o foco.
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => {
      videoRef.current?.pause();
      document.documentElement.style.overflow = '';
      setAtual(null);
      gatilhoRef.current?.focus();
    };
    d.addEventListener('close', onClose);
    return () => {
      d.removeEventListener('close', onClose);
      document.documentElement.style.overflow = '';
    };
  }, []);

  const video = atual !== null ? videos[atual] : null;
  const bg = tone === 'deep' ? 'bg-[#EDE7D9]' : 'bg-[#F7F3EC]';

  return (
    <section aria-labelledby="video-reels-titulo" className={`${bg} py-12 sm:py-16 ${className}`}>
      <div className="container-uniq">
        <h2 id="video-reels-titulo" className="text-headline text-[#1A1714] mb-6 sm:mb-8">
          {titulo}
        </h2>
      </div>

      {/* Fileira: rola na horizontal até xl; grade a partir de xl */}
      <div className="container-uniq">
        <ul
          className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory mx-[calc(-1*clamp(1.25rem,4vw,3.5rem))] px-[clamp(1.25rem,4vw,3.5rem)] scroll-px-[clamp(1.25rem,4vw,3.5rem)] pb-3 scrollbar-hide xl:grid xl:grid-cols-9 xl:overflow-visible xl:mx-0 xl:px-0 xl:pb-0"
          aria-label={titulo}
        >
          {videos.map((v, i) => (
            <li key={v.src} className="snap-start shrink-0 w-[58vw] max-w-[220px] sm:w-[200px] xl:w-auto xl:max-w-none">
              <button
                type="button"
                aria-label={v.alt}
                aria-haspopup="dialog"
                onClick={(e) => {
                  gatilhoRef.current = e.currentTarget;
                  setAtual(i);
                }}
                className="group relative block w-full aspect-[9/16] overflow-hidden rounded-2xl bg-[#1A1714] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B3A6B]"
              >
                <img
                  src={v.poster}
                  alt=""
                  width={v.width}
                  height={v.height}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/80 via-[#1A1714]/10 to-transparent" aria-hidden="true" />
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#F7F3EC]/90 text-[#1B3A6B] shadow-md transition-transform duration-200 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Play className="w-5 h-5 translate-x-[1px]" fill="currentColor" />
                </span>
                <span className="absolute left-0 right-0 bottom-0 p-3 text-[0.8125rem] xl:text-[0.75rem] leading-snug font-medium text-[#F7F3EC]" aria-hidden="true">
                  {v.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-label={video?.alt ?? 'Vídeo'}
        onClick={(e) => {
          if (e.target === e.currentTarget) fechar();
        }}
        className="m-auto p-0 bg-transparent max-w-[min(92vw,420px)] w-full overflow-visible backdrop:bg-[#1A1714]/85"
      >
        <div className="relative">
          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar vídeo"
            className="absolute -top-14 right-0 flex items-center justify-center w-11 h-11 rounded-full bg-[#F7F3EC] text-[#1A1714] shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4B07A]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          {video && (
            <video
              ref={videoRef}
              key={video.src}
              src={video.src}
              poster={video.poster}
              width={video.width}
              height={video.height}
              preload="none"
              playsInline
              controls
              aria-label={video.alt}
              className="block w-full h-auto max-h-[80vh] rounded-2xl bg-black object-contain"
            />
          )}
        </div>
      </dialog>
    </section>
  );
}
