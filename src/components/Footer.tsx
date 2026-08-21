"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '@/lib/utils';
import { Instagram, MapPin } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { label: 'Oni Face', href: '/#oni-face' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Dra. Vanessa', href: '/#dra-vanessa' },
  { label: 'Mentoria', href: '/#mentoria' },
  { label: 'Contato', href: '/contato' },
];

const treatmentLinks = [
  { label: 'Harmonização Facial', href: '/tratamentos/harmonizacao-facial' },
  { label: 'Blefaroplastia', href: '/tratamentos/blefaroplastia' },
  { label: 'Toxina Botulínica', href: '/tratamentos/toxina-botulinica' },
  { label: 'Preenchimento Labial', href: '/tratamentos/preenchimento-labial' },
  { label: 'Bioestimuladores de Colágeno', href: '/tratamentos/bioestimuladores-de-colageno' },
];

export const Footer = () => {
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl();
  const instagramUrl = 'https://www.instagram.com/dravansanabria/';

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#EDE7D9] border-t border-[#D9D2C4]" aria-label="Rodapé">
      <div className="container-uniq py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6">
            <div>
              <Link
                href="/"
                onClick={handleLogoClick}
                className="inline-flex cursor-pointer"
                aria-label="Ir para o topo"
              >
                {/* Uses the real footer-logo.svg */}
                <img
                  src="/footer-logo.svg"
                  alt="Oni Face · Vanessa Sanabria"
                  className="h-20 md:h-28 w-auto"
                  style={{ maxWidth: 400 }}
                />
              </Link>
            </div>

            <p className="text-sm sm:text-base text-[#8A8278] leading-relaxed max-w-md font-light">
              Dra. Vanessa Sanabria Bevilaqua — Cirurgiã-Dentista, especialista em Full Face e gerenciamento do envelhecimento. A transformação que ainda parece você.
            </p>


            <div className="space-y-2 text-xs sm:text-sm text-[#3C3831]">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Condom%C3%ADnio+%C3%82mbar+Health+Center+Jardim+Kara%C3%ADba+Uberl%C3%A2ndia+MG+38411-217"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2 text-[#8A8278] hover:text-[#1B3A6B] transition-colors"
                aria-label="Abrir endereço no Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#B8965A] flex-shrink-0 mt-0.5" />
                <span className="not-italic leading-relaxed">
                  Condomínio Âmbar Health Center · Sala 38<br />
                  Jardim Karaíba · Uberlândia, MG<br />
                  <span className="text-[#C4BAA8]">CEP 38.411-217</span>
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3A6B] hover:text-[#2C4F8A] transition-colors"
                aria-label="WhatsApp Oni Face"
              >
                <WhatsAppIcon />
                {WHATSAPP_DISPLAY}
              </a>
              <span className="text-[#C4BAA8]" aria-hidden="true">·</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3A6B] hover:text-[#2C4F8A] transition-colors"
                aria-label="Instagram @dravansanabria"
              >
                <Instagram className="w-4 h-4" />
                @dravansanabria
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h3 className="text-[0.75rem] sm:text-xs font-semibold tracking-[0.12em] uppercase text-[#1A1714]">
              Navegação
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8A8278] hover:text-[#1B3A6B] transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h3 className="text-[0.75rem] sm:text-xs font-semibold tracking-[0.12em] uppercase text-[#1A1714]">
              Tratamentos Faciais
            </h3>
            <ul className="space-y-3" role="list">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8A8278] hover:text-[#1B3A6B] transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#D9D2C4] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-[#8A8278] tracking-wide">
            &copy; {new Date().getFullYear()} Oni Face · Facial Boutique · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/#oni-face" className="text-xs text-[#8A8278] hover:text-[#1B3A6B] transition-colors tracking-wide">
              Conceito Oni Face
            </Link>
            <Link href="/contato" className="text-xs text-[#8A8278] hover:text-[#1B3A6B] transition-colors tracking-wide">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
