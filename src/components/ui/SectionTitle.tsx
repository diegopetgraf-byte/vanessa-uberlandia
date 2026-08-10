interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="eyebrow" aria-hidden="true">{eyebrow}</span>
      )}
      <h2 className="text-headline text-2xl sm:text-3xl md:text-4xl">{title}</h2>
      {subtitle && (
        <p className={`text-sm sm:text-base text-[#9A9188] leading-relaxed max-w-3xl font-light ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
