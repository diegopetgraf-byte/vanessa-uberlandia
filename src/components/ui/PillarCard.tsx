import { ReactNode } from 'react';
import { Check } from 'lucide-react';

interface PillarCardProps {
  numeral: string;
  title: string;
  description: string;
  items?: string[];
  icon?: ReactNode;
}

export const PillarCard = ({ numeral, title, description, items }: PillarCardProps) => (
  <div className="card-uniq p-7 sm:p-8 flex flex-col justify-between h-full bg-white border-[#EAE7E0] hover:border-[#6B1E2E]/40 hover:shadow-lg transition-all duration-300">
    <div>
      {/* Top Header: Modern Pillar Tag */}
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="text-[0.6875rem] font-sans font-semibold tracking-[0.18em] uppercase text-[#6B1E2E] bg-[rgba(107,30,46,0.08)] px-3 py-1 rounded-full">
          Pilar {numeral}
        </span>
        <span className="w-8 h-px bg-[#EAE7E0]" aria-hidden="true" />
      </div>

      {/* Title & Description */}
      <div className="space-y-3 mb-6">
        <h3 className="font-heading text-2xl sm:text-3xl text-[#1E1B18] font-normal tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[#6B635B] leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>

    {/* Items List */}
    {items && items.length > 0 && (
      <div className="pt-4 border-t border-[#EAE7E0]/70">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" role="list">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-[#3C3833] font-normal">
              <div className="w-3.5 h-3.5 rounded-full bg-[rgba(107,30,46,0.1)] flex items-center justify-center flex-shrink-0 text-[#6B1E2E]">
                <Check className="w-2.5 h-2.5" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
