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
    ? 'bg-[#1B3A6B]'
    : 'bg-[#EDE7D9] border border-[#D9D2C4]';
  const eyebrowColor = variant === 'wine' ? 'text-[#B8965A]' : 'text-[#B8965A]';
  const titleColor = variant === 'wine' ? 'text-[#F7F3EC]' : 'text-[#1A1714]';
  const subtitleColor = variant === 'wine' ? 'text-[#F7F3EC]/88' : 'text-[#8A8278]';
  const primaryBg = variant === 'wine'
    ? 'bg-[#D4B07A] text-[#1B3A6B] hover:bg-[#E0C392] hover:shadow-lg'
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
              className={`btn btn-outline text-xs min-h-11 ${
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
