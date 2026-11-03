/**
 * JSON-LD do Instituto Oni Face.
 * Entidades globais (Organization, WebSite, Dentist, Person) saem em um único @graph no layout.
 * Nada de aggregateRating nem Review: só dados reais de src/data/clinic.ts e de site.ts.
 */

import React from 'react';
import { CLINIC } from '@/data/clinic';
import {
  SITE_URL,
  SITE_NAME,
  SITE_ALTERNATE_NAMES,
  PROFESSIONAL,
  GEO,
  GOOGLE_MAPS_URL,
  ENTITY_IDS,
  absoluteUrl,
} from './site';

type Json = Record<string, unknown>;

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

const PHONE = `+${CLINIC.whatsapp}`;
const SAME_AS = [CLINIC.instagram];

/** "Segunda a Sexta: 09h às 19h" -> ["09:00", "19:00"] */
function parseHours(text: string): [string, string] | null {
  const m = text.match(/(\d{1,2})h(\d{2})?\s*às\s*(\d{1,2})h(\d{2})?/);
  if (!m) return null;
  const pad = (h: string, min?: string) => `${h.padStart(2, '0')}:${min ?? '00'}`;
  return [pad(m[1], m[2]), pad(m[3], m[4])];
}

function openingHours(): Json[] {
  const out: Json[] = [];
  const week = parseHours(CLINIC.hours.weekdays);
  if (week) {
    out.push({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: week[0],
      closes: week[1],
    });
  }
  const sat = parseHours(CLINIC.hours.saturday);
  if (sat) {
    out.push({ '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: sat[0], closes: sat[1] });
  }
  return out;
}

function postalAddress(): Json {
  return {
    '@type': 'PostalAddress',
    streetAddress: CLINIC.street,
    addressLocality: CLINIC.city,
    addressRegion: CLINIC.state,
    postalCode: CLINIC.zipCode.replace(/\./g, ''),
    addressCountry: 'BR',
  };
}

const CRO_IDENTIFIER = {
  '@type': 'PropertyValue',
  propertyID: PROFESSIONAL.cro.council,
  value: PROFESSIONAL.cro.number,
  name: PROFESSIONAL.cro.display,
};

/** Procedimentos faciais com página própria no site. */
const FACIAL_SERVICES = [
  'Full Face',
  'Harmonização facial',
  'Toxina botulínica',
  'Preenchimento facial com ácido hialurônico',
  'Preenchimento labial',
  'Bioestimuladores de colágeno',
  'Fios de sustentação',
  'Skinbooster',
];

export function generateOrganizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ENTITY_IDS.organization,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: absoluteUrl('/'),
    logo: { '@type': 'ImageObject', url: absoluteUrl('/marca/logo-oniface-quadrado.png'), width: 800, height: 800 },
    image: absoluteUrl('/og-oniface.jpg'),
    description:
      'Instituto Oni Face, da cirurgiã-dentista Dra. Vanessa Sanabria Bevilaqua (CRO-76320 MG): Full Face e harmonização facial em Uberlândia, MG.',
    sameAs: SAME_AS,
    founder: { '@id': ENTITY_IDS.professional },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
      areaServed: 'BR',
    },
  };
}

export function generateWebSiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ENTITY_IDS.website,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: absoluteUrl('/'),
    publisher: { '@id': ENTITY_IDS.organization },
    inLanguage: 'pt-BR',
  };
}

/** Clínica: Dentist (subtipo de MedicalBusiness e LocalBusiness). */
export function generateLocalBusinessSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalBusiness'],
    '@id': ENTITY_IDS.clinic,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: absoluteUrl('/'),
    description:
      'Consultório da cirurgiã-dentista Dra. Vanessa Sanabria Bevilaqua (CRO-76320 MG) para Full Face, harmonização facial, bioestimuladores, preenchimento e toxina botulínica em Uberlândia, MG.',
    image: [absoluteUrl(PROFESSIONAL.image), absoluteUrl('/og-oniface.jpg')],
    logo: absoluteUrl('/marca/logo-oniface-quadrado.png'),
    telephone: PHONE,
    address: postalAddress(),
    geo: { '@type': 'GeoCoordinates', latitude: GEO.latitude, longitude: GEO.longitude },
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: openingHours(),
    areaServed: {
      '@type': 'City',
      name: 'Uberlândia',
      containedInPlace: { '@type': 'State', name: 'Minas Gerais' },
    },
    sameAs: SAME_AS,
    parentOrganization: { '@id': ENTITY_IDS.organization },
    employee: { '@id': ENTITY_IDS.professional },
    founder: { '@id': ENTITY_IDS.professional },
    medicalSpecialty: 'Dentistry',
    availableService: FACIAL_SERVICES.map((name) => ({ '@type': 'MedicalProcedure', name })),
    knowsAbout: FACIAL_SERVICES,
  };
}

export function generatePersonSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': ENTITY_IDS.professional,
    name: PROFESSIONAL.name,
    alternateName: 'Dra. Vanessa Sanabria',
    givenName: PROFESSIONAL.givenName,
    familyName: PROFESSIONAL.familyName,
    honorificPrefix: 'Dra.',
    jobTitle: PROFESSIONAL.jobTitle,
    identifier: CRO_IDENTIFIER,
    url: absoluteUrl('/'),
    image: absoluteUrl(PROFESSIONAL.image),
    sameAs: SAME_AS,
    worksFor: { '@id': ENTITY_IDS.clinic },
    workLocation: { '@id': ENTITY_IDS.clinic },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Cirurgiã-dentista',
      occupationLocation: { '@type': 'City', name: 'Uberlândia' },
    },
    knowsAbout: FACIAL_SERVICES,
  };
}

/** @graph global usado no layout (uma vez por página). */
export function generateGlobalGraph(): Json {
  const strip = (node: Json): Json => {
    const { '@context': _ctx, ...rest } = node;
    void _ctx;
    return rest;
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      strip(generateOrganizationSchema()),
      strip(generateWebSiteSchema()),
      strip(generateLocalBusinessSchema()),
      strip(generatePersonSchema()),
    ],
  };
}

/**
 * FAQPage: o Google não mostra mais rich result de FAQ (maio de 2026).
 * Mantido para as páginas que já usam; não criar novos por causa do Google.
 */
export function generateFAQSchema(items: FAQItem[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}

export { SITE_URL };
