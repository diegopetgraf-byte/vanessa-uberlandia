/**
 * Fonte única da URL do site e dos dados de identidade usados em SEO.
 * Endereço e horário vêm de src/data/clinic.ts (não duplicar aqui).
 */

const PRODUCTION_URL = 'https://institutooniface.com.br';

/**
 * URL absoluta do site, sem barra final.
 * Ignora valores de ambiente que apontem para localhost ou que não sejam http(s),
 * para que canonical, sitemap e robots nunca saiam com localhost.
 */
function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim().replace(/\/+$/, '');
  if (!raw) return PRODUCTION_URL;
  if (!/^https?:\/\//.test(raw)) return PRODUCTION_URL;
  if (/localhost|127\.0\.0\.1|0\.0\.0\.0/.test(raw)) return PRODUCTION_URL;
  return raw;
}

export const SITE_URL = resolveSiteUrl();

/** Nome da ficha no Google Maps e do domínio. */
export const SITE_NAME = 'Instituto Oni Face';
/** Nomes que o site já usa e que devem ser entendidos como a mesma entidade. */
export const SITE_ALTERNATE_NAMES = ['Oni Face', 'Oni Face · Facial Boutique'];

export const PROFESSIONAL = {
  name: 'Dra. Vanessa Sanabria Bevilaqua',
  givenName: 'Vanessa',
  familyName: 'Sanabria Bevilaqua',
  jobTitle: 'Cirurgiã-dentista',
  /** Registro informado pelo Diego e já exibido no site (HomeClient). */
  cro: { council: 'CRO-MG', number: '76320', display: 'CRO-76320 MG' },
  image: '/professional.jpg',
} as const;

export const GEO = { latitude: -18.9521462, longitude: -48.2660692 } as const;

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Instituto+Oni+Face/@-18.9521411,-48.2709401,1073m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94a4456bb49d3b5f:0x2630ef4a132e3023!8m2!3d-18.9521462!4d-48.2660692!16s%2Fg%2F11nw3gbtgl';

export const ENTITY_IDS = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  clinic: `${SITE_URL}/#clinica`,
  professional: `${SITE_URL}/#dra-vanessa-sanabria`,
} as const;

/** Torna um caminho absoluto no domínio do site. */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean === '/' ? `${SITE_URL}/` : `${SITE_URL}${clean}`;
}

/**
 * Rotas novas do cluster Full Face (lista fixa, alinhada a src/data/fullFace.ts).
 * O CEO confere status 200 de cada uma antes do deploy.
 */
export const FULL_FACE_ROUTES = [
  { path: '/full-face', label: 'Full Face', priority: 0.95 },
  { path: '/full-face/resultado-natural', label: 'Resultado natural', priority: 0.8 },
  { path: '/full-face/mitos', label: 'Mitos', priority: 0.7 },
  { path: '/full-face/planejamento', label: 'Planejamento', priority: 0.8 },
  { path: '/full-face/aos-30', label: 'Aos 30', priority: 0.75 },
  { path: '/full-face/aos-40', label: 'Aos 40', priority: 0.75 },
  { path: '/full-face/aos-50', label: 'Aos 50', priority: 0.75 },
  { path: '/sobre', label: 'Sobre', priority: 0.8 },
] as const;

/** Rotas que nunca entram no sitemap (noindex ou restos do template). */
export const SITEMAP_EXCLUDED = ['/paciente-modelo', '/proposta', '/resultados'] as const;
