import Link from 'next/link';
import { ArrowRight, Camera } from 'lucide-react';

export interface TreatmentCardProps {
  id: string;
  name: string;
  category?: string;
  subtitle: string;
  imageSrc?: string;
  href?: string;
  showCategory?: boolean;
  compact?: boolean;
  isPlaceholder?: boolean;
}

export const TreatmentCard = ({
  id,
  name,
  category,
  subtitle,
  imageSrc,
  href,
  showCategory = true,
  compact = false,
  isPlaceholder = false,
}: TreatmentCardProps) => {
  const linkHref = href || `/tratamentos/${id}`;
  const hasImage = Boolean(imageSrc) && !isPlaceholder;

  return (
    <Link
      href={linkHref}
      className="group card-uniq overflow-hidden flex flex-col h-full cursor-pointer hover:shadow-xl hover:border-[#6B1E2E]/40 transition-all duration-300 bg-white"
    >
      {/* Image / Placeholder */}
      <div className={`relative overflow-hidden ${compact ? 'aspect-[16/11]' : 'aspect-[4/3] sm:aspect-[3/4]'} bg-[#F2EFE9]`}>
        {hasImage ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2.5 p-6 bg-gradient-to-b from-[#F5F3EF] to-[#EBE7DF] text-[#9A9188] border border-dashed border-[#DCD6CA]/70 m-1 rounded-xl">
            <div className="w-11 h-11 rounded-full bg-white/80 shadow-sm border border-[#EAE7E0] flex items-center justify-center text-[#6B1E2E]/60 group-hover:text-[#6B1E2E] group-hover:scale-110 transition-all duration-300">
              <Camera className="w-5 h-5" />
            </div>
            <div className="text-center">
              <span className="text-[0.65rem] font-medium tracking-wider uppercase text-[#6B635B] block">
                Foto em breve
              </span>
              <span className="text-[0.55rem] tracking-widest uppercase text-[#9A9188]">
                Quiet Beauty FS
              </span>
            </div>
          </div>
        )}

        {/* Optional Category Pill */}
        {showCategory && category && hasImage && (
          <div className="absolute top-3 left-3">
            <span className="pill-label bg-white/90 backdrop-blur-sm shadow-sm">{category}</span>
          </div>
        )}

        {hasImage && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-2 ${compact ? 'p-4 sm:p-5' : 'p-5'} flex-1 justify-between`}>
        <div>
          <h3 className={`font-heading ${compact ? 'text-lg sm:text-xl' : 'text-xl'} leading-snug text-[#1E1B18] group-hover:text-[#6B1E2E] transition-colors`}>
            {name}
          </h3>
          <p className="text-xs text-[#6B635B] leading-relaxed line-clamp-2 mt-1.5 font-light">
            {subtitle}
          </p>
        </div>

        <div className="pt-3 border-t border-[#EAE7E0]/60 flex items-center justify-between mt-auto">
          <span
            className="inline-flex items-center gap-1.5 text-[0.6875rem] font-medium tracking-wide uppercase text-[#6B1E2E] group-hover:gap-2.5 transition-all"
            aria-label={`Saiba mais sobre ${name}`}
          >
            Explorar procedimento <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  );
};
