import { getWhatsAppUrl } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'stone' | 'wine';
  titleClassName?: string;
}

export const CTABanner = ({
  eyebrow = 'Comece sua jornada',
  title,
  subtitle,
  primaryLabel = 'Agendar Avaliação',
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = 'stone',
  titleClassName = '',
}: CTABannerProps) => {
  const whatsappUrl = primaryHref || getWhatsAppUrl();

  const bg = variant === 'wine'
    ? 'bg-[#6B1E2E]'
    : 'bg-[#F5F3EF] border border-[#EAE7E0]';
  const eyebrowColor = variant === 'wine' ? 'text-[#FAFAF8]/80' : 'text-[#6B1E2E]';
  const titleColor = variant === 'wine' ? 'text-[#FAFAF8]' : 'text-[#1E1B18]';
  const subtitleColor = variant === 'wine' ? 'text-[#FAFAF8]/90' : 'text-[#6B635B]';
  const primaryBg = variant === 'wine'
    ? 'bg-[#FAFAF8] text-[#6B1E2E] hover:bg-white hover:shadow-lg'
    : 'btn-wine';

  return (
    <section className={`rounded-2xl md:rounded-3xl px-6 sm:px-12 md:px-16 py-10 md:py-14 ${bg}`}>
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
        {eyebrow && <span className={`eyebrow text-xs ${eyebrowColor}`}>{eyebrow}</span>}
        <h2 className={`text-headline text-2xl sm:text-3xl md:text-4xl ${titleColor} ${titleClassName}`}>{title}</h2>
        {subtitle && <p className={`text-sm sm:text-base leading-relaxed max-w-2xl font-light ${subtitleColor}`}>{subtitle}</p>}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn ${primaryBg}`}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          {secondaryLabel && secondaryHref && (
            <a
              href={secondaryHref}
              className={`btn btn-outline text-xs ${
                variant === 'wine'
                  ? 'border-white/40 text-white hover:border-white hover:bg-white/10'
                  : ''
              }`}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
