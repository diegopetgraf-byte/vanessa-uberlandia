import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface TechnologyCardProps {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode;
}

export const TechnologyCard = ({ id, name, description, icon }: TechnologyCardProps) => (
  <Link
    href={`/tecnologias/${id}`}
    className="group card-uniq p-8 flex flex-col gap-6 cursor-pointer"
    aria-label={`Saiba mais sobre ${name}`}
  >
    <div className="w-12 h-12 rounded-full border border-[#6B1E2E] flex items-center justify-center text-[#6B1E2E] group-hover:bg-[#6B1E2E] group-hover:text-[#FAFAF8] transition-all duration-300">
      {icon || (
        <span className="font-heading text-lg italic">
          {name.charAt(0)}
        </span>
      )}
    </div>
    <div className="flex-1 space-y-2">
      <h3 className="font-heading text-2xl leading-snug text-[#1E1B18]">{name}</h3>
      <p className="text-xs text-[#9A9188] leading-relaxed">{description}</p>
    </div>
    <div className="flex items-center gap-2 text-[0.6875rem] font-medium tracking-wide uppercase text-[#6B1E2E] group-hover:gap-3 transition-all">
      Conhecer <ArrowRight className="w-3 h-3" />
    </div>
  </Link>
);
