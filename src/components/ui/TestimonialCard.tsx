import { CheckCircle } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  rating?: number;
  date?: string;
  meta?: string;
  verificado?: boolean;
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const TestimonialCard = ({
  text,
  author,
  rating = 5,
  date = '8 meses atrás',
  meta,
  verificado = true,
}: TestimonialCardProps) => {
  const initial = author.charAt(0).toUpperCase();

  return (
    <article className="card-uniq p-6 sm:p-7 flex flex-col justify-between h-full bg-white border-[#D9D2C4] hover:border-[#1B3A6B]/30 transition-all duration-300">
      
      <div>
        {/* Top bar: Google Logo, Stars & Verified */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#EAE7E0]/60">
          <div className="flex items-center gap-2">
            <GoogleIcon />
            <span className="text-[0.6875rem] font-medium text-[#6B635B] tracking-wide">
              Avaliação no Google
            </span>
          </div>

          {verificado && (
            <div className="flex items-center gap-1 text-[0.625rem] text-[#1E7B48] font-medium bg-[#E8F5E9] px-2 py-0.5 rounded-full">
              <CheckCircle className="w-3 h-3 text-[#1E7B48]" />
              <span>Verificada</span>
            </div>
          )}
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-3" aria-label={`${rating} de 5 estrelas`}>
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-[#F4B400]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review text */}
        <p className="text-xs sm:text-sm text-[#3C3833] leading-relaxed font-light mb-6">
          "{text}"
        </p>
      </div>

      {/* Author footer */}
      <div className="flex items-center gap-3 pt-3 border-t border-[#EAE7E0]/60">
        <div className="w-8 h-8 rounded-full bg-[#EDE7D9] border border-[#D9D2C4] flex items-center justify-center font-heading font-semibold text-sm text-[#1B3A6B] flex-shrink-0">
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-[#1E1B18] truncate">{author}</p>
          <div className="flex items-center gap-1.5 text-[0.625rem] text-[#9A9188] truncate">
            {meta && <span>{meta}</span>}
            {meta && <span>·</span>}
            <span>{date}</span>
          </div>
        </div>
      </div>

    </article>
  );
};
