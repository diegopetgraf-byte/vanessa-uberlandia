/**
 * SEO das páginas Full Face (/full-face, /full-face/<slug> e /sobre).
 *
 * Uso na página (design):
 *   import { buildFullFaceMetadata, fullFacePageSchemas } from '@/lib/seo/fullFace';
 *   import { JsonLd } from '@/lib/seo/schemas';
 *   export const metadata = buildFullFaceMetadata(page);
 *   ...
 *   <JsonLd data={fullFacePageSchemas(page)} />
 *
 * `page` é um item de FULL_FACE_PAGES (src/data/fullFace.ts); só os campos abaixo são lidos.
 */

import type { Metadata } from 'next';
import { ENTITY_IDS, SITE_NAME, absoluteUrl } from './site';
import { generateBreadcrumbSchema, type BreadcrumbItem } from './schemas';

export interface FullFaceSeoInput {
  rota: string;
  title: string;
  description: string;
  h1?: string;
  nomeCurto?: string;
  heroImage?: string;
  heroAlt?: string;
  /** AAAA-MM-DD da última revisão do texto pela Dra. Vanessa. */
  lastReviewed?: string;
}

const PILLAR = { name: 'Full Face', url: '/full-face' };

/** Início > Full Face > Subpágina (ou Início > Sobre). */
export function fullFaceBreadcrumbs(page: FullFaceSeoInput): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ name: 'Início', url: '/' }];
  const label = page.nomeCurto || page.h1 || page.title;
  if (page.rota === PILLAR.url) {
    crumbs.push(PILLAR);
  } else if (page.rota.startsWith(`${PILLAR.url}/`)) {
    crumbs.push(PILLAR, { name: label, url: page.rota });
  } else {
    crumbs.push({ name: label, url: page.rota });
  }
  return crumbs;
}

/** MedicalWebPage (ou AboutPage em /sobre) ligada às entidades globais do layout. */
export function fullFaceWebPageSchema(page: FullFaceSeoInput): Record<string, unknown> {
  const url = absoluteUrl(page.rota);
  const isAbout = page.rota === '/sobre';
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': isAbout ? ['AboutPage', 'MedicalWebPage'] : 'MedicalWebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    headline: page.h1 || page.title,
    description: page.description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': ENTITY_IDS.website },
    publisher: { '@id': ENTITY_IDS.organization },
    author: { '@id': ENTITY_IDS.professional },
    reviewedBy: { '@id': ENTITY_IDS.professional },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    audience: { '@type': 'PeopleAudience', audienceType: 'Pacientes', geographicArea: { '@type': 'City', name: 'Uberlândia' } },
    about: isAbout
      ? { '@id': ENTITY_IDS.professional }
      : { '@type': 'MedicalProcedure', name: 'Full Face', procedureType: 'https://schema.org/NoninvasiveProcedure' },
    mainEntity: isAbout ? { '@id': ENTITY_IDS.professional } : undefined,
    specialty: 'https://schema.org/Dentistry',
  };
  if (page.heroImage) {
    node.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: absoluteUrl(page.heroImage),
      caption: page.heroAlt,
    };
  }
  if (page.lastReviewed) node.lastReviewed = page.lastReviewed;
  return JSON.parse(JSON.stringify(node));
}

/** Os dois blocos JSON-LD da página: MedicalWebPage + BreadcrumbList. */
export function fullFacePageSchemas(page: FullFaceSeoInput): Record<string, unknown>[] {
  const breadcrumb = generateBreadcrumbSchema(fullFaceBreadcrumbs(page));
  breadcrumb['@id'] = `${absoluteUrl(page.rota)}#breadcrumb`;
  return [fullFaceWebPageSchema(page), breadcrumb];
}

/** Metadata da página: title absoluto (sem o sufixo do template), canonical e OG. */
export function buildFullFaceMetadata(page: FullFaceSeoInput): Metadata {
  const url = absoluteUrl(page.rota);
  const image = absoluteUrl(page.heroImage || '/og.png');
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: 'website',
      images: [{ url: image, alt: page.heroAlt || page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}
