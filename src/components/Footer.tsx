"use client";

import Link from 'next/link';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '@/lib/utils';
import { Instagram, Facebook, MapPin } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { label: 'Quiet Beauty', href: '/#quiet-beauty' },
  { label: 'Tratamentos', href: '/tratamentos' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Fabiana Sobral', href: '/#fabiana' },
  { label: 'Instituto FS', href: '/#instituto-fs' },
  { label: 'Contato', href: '/contato' },
];

const treatmentLinks = [
  { label: 'Harmonização Facial', href: '/tratamentos/harmonizacao-facial' },
  { label: 'Preenchimento Facial', href: '/tratamentos/preenchimento-facial' },
  { label: 'Toxina Botulínica', href: '/tratamentos/toxina-botulinica' },
  { label: 'Bioestimuladores de Colágeno', href: '/tratamentos/bioestimuladores-de-colageno' },
  { label: 'Bioestimuladores Corporais', href: '/tratamentos/bioestimuladores-corporais' },
];

export const Footer = () => {
  const whatsappUrl = getWhatsAppUrl();
  const instagramUrl = 'https://www.instagram.com/drafabisobral/';
  const facebookUrl = 'https://www.facebook.com/drafabisobral/';
  const mapUrl = 'https://share.google/nf9qa9srGi9KlmysN';

  return (
    <footer className="bg-[#F5F3EF] border-t border-[#EAE7E0]" aria-label="Rodapé">
      <div className="container-uniq py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Brand Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <div>
              <img
                src="/logo-fabi.svg"
                alt="Dra. Fabiana Sobral — Quiet Beauty FS"
                className="h-9 md:h-11 w-auto object-contain mb-2"
              />
              <p className="text-[0.6875rem] font-medium tracking-[0.14em] uppercase text-[#9A9188]">
                Quiet Beauty FS · Estética Avançada
              </p>
            </div>

            <p className="text-sm text-[#6B635B] leading-relaxed max-w-md font-light">
              Biomédica especialista em estética avançada e criadora do método Quiet Beauty FS. Reestruturação facial e corporal com propósito, ciência e naturalidade.
            </p>

            <div className="space-y-1 text-xs text-[#3C3833]">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#6B1E2E] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#6B1E2E] flex-shrink-0" />
                <span>R. Oscar Freire, 2249 - Pinheiros, São Paulo - SP</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B1E2E] hover:text-[#8B3045] transition-colors"
                aria-label="WhatsApp Clínica FS"
              >
                <WhatsAppIcon />
                {WHATSAPP_DISPLAY}
              </a>
              <span className="text-[#D6D0C4]" aria-hidden="true">·</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B1E2E] hover:text-[#8B3045] transition-colors"
                aria-label="Instagram @drafabisobral"
              >
                <Instagram className="w-3.5 h-3.5" />
                @drafabisobral
              </a>
              <span className="text-[#D6D0C4]" aria-hidden="true">·</span>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B1E2E] hover:text-[#8B3045] transition-colors"
                aria-label="Facebook Dra. Fabiana Sobral"
              >
                <Facebook className="w-3.5 h-3.5" />
                Facebook
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[#1E1B18]">
              Navegação
            </h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#9A9188] hover:text-[#6B1E2E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="md:col-span-3 lg:col-span-4 space-y-3">
            <h3 className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-[#1E1B18]">
              Tratamentos em Destaque
            </h3>
            <ul className="space-y-2" role="list">
              {treatmentLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#9A9188] hover:text-[#6B1E2E] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#EAE7E0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[0.6875rem] text-[#9A9188] tracking-wide">
            © {new Date().getFullYear()} Clínica FS Fabiana Sobral · Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/#quiet-beauty" className="text-[0.6875rem] text-[#9A9188] hover:text-[#6B1E2E] transition-colors tracking-wide">
              Quiet Beauty FS
            </Link>
            <Link href="/contato" className="text-[0.6875rem] text-[#9A9188] hover:text-[#6B1E2E] transition-colors tracking-wide">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
