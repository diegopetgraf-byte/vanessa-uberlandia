import { MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { CLINIC } from '@/data/clinic';

const MAPA_EMBED =
  'https://www.google.com/maps?q=Instituto+Oni+Face,+Uberl%C3%A2ndia&output=embed';

const MAPA_LINK =
  'https://www.google.com/maps/place/Instituto+Oni+Face/@-18.9521411,-48.2709401,1073m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94a4456bb49d3b5f:0x2630ef4a132e3023!8m2!3d-18.9521462!4d-48.2660692!16s%2Fg%2F11nw3gbtgl';

interface MapaOniFaceProps {
  /** Título da seção. Use `as` para manter a hierarquia de títulos da página. */
  titulo?: string;
  as?: 'h2' | 'h3';
  className?: string;
}

/**
 * Mapa do Instituto Oni Face com endereço ao lado e botão para o Google Maps.
 * Iframe com carregamento preguiçoso; endereço e horário vêm de src/data/clinic.ts.
 */
export function MapaOniFace({ titulo = 'Como chegar', as: Heading = 'h2', className = '' }: MapaOniFaceProps) {
  return (
    <section aria-labelledby="mapa-oni-face-titulo" className={`section bg-[#EDE7D9] ${className}`}>
      <div className="container-uniq">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="eyebrow mb-3 block text-[#8A6A32]">{CLINIC.city}, {CLINIC.state}</span>
            <Heading id="mapa-oni-face-titulo" className="text-headline text-[#1A1714] mb-5">
              {titulo}
            </Heading>

            <address className="not-italic space-y-4 text-[#3C3831]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1B3A6B] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-medium text-[#1A1714]">Instituto Oni Face</span>
                  <br />
                  {CLINIC.street}
                  <br />
                  {CLINIC.neighborhood}, {CLINIC.city}, {CLINIC.state}
                  <br />
                  <span className="text-[#6B645A]">CEP {CLINIC.zipCode}</span>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1B3A6B] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-[#3C3831]">
                  {CLINIC.hours.weekdays}
                  <br />
                  {CLINIC.hours.saturday}
                </p>
              </div>
            </address>

            <a
              href={MAPA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wine mt-7 self-start min-h-11"
            >
              Abrir no Google Maps
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-[#D9D2C4] bg-[#D9D2C4] shadow-sm h-[360px] sm:h-[420px] lg:h-full lg:min-h-[440px]">
              <iframe
                src={MAPA_EMBED}
                title="Mapa: Instituto Oni Face em Uberlândia"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
