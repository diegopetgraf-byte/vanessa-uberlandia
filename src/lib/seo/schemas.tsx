/**
 * JSON-LD Schema generators for Clínica FS Fabiana Sobral
 * SEO structured data for Google rich snippets
 */

import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';
const SITE_NAME = 'Clínica FS Fabiana Sobral';
const INSTAGRAM_URL = 'https://www.instagram.com/drafabisobral/';
const FACEBOOK_URL = 'https://www.facebook.com/drafabisobral/';
const GOOGLE_MAP_URL = 'https://share.google/nf9qa9srGi9KlmysN';
const WHATSAPP = '+5511934678424';

function toAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Organization schema for Clínica FS Fabiana Sobral
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: toAbsoluteUrl('/og.png'),
      width: 1200,
      height: 630,
    },
    description: 'Fabiana Sobral — Biomédica, especialista em estética avançada e criadora do método Quiet Beauty FS. Reestruturação facial com propósito. R. Oscar Freire, 2249 - Pinheiros, São Paulo, SP.',
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: WHATSAPP,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    founders: [{
      '@type': 'Person',
      name: 'Fabiana Sobral',
      jobTitle: 'Biomédica, Especialista em Estética Avançada',
      image: toAbsoluteUrl('/fabiana-sobral.png'),
      sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
    }],
    areaServed: [
      { '@type': 'City', name: 'São Paulo', containedInPlace: { '@type': 'State', name: 'São Paulo' } },
    ],
  };
}

/**
 * WebSite schema
 */
export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/tratamentos` },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'pt-BR',
  };
}

/**
 * LocalBusiness + HealthAndBeautyBusiness schema — Pinheiros / Jardins, São Paulo
 */
export function generateLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Clínica de estética avançada especializada em Harmonização Facial, Bioestimuladores de Colágeno e Estética Corporal. Método Quiet Beauty FS. Fabiana Sobral — R. Oscar Freire, 2249 - Pinheiros, São Paulo, SP.',
    image: toAbsoluteUrl('/fabiana-sobral.png'),
    telephone: WHATSAPP,
    priceRange: '$$$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Dinheiro, Cartão de crédito, Cartão de débito, PIX',
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
    hasMap: GOOGLE_MAP_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Oscar Freire, 2249',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '05409-011',
      neighborhood: 'Pinheiros',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5558,
      longitude: -46.6811,
    },
    areaServed: [
      { '@type': 'City', name: 'São Paulo' },
    ],
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Harmonização Facial' },
      { '@type': 'MedicalProcedure', name: 'Toxina Botulínica' },
      { '@type': 'MedicalProcedure', name: 'Preenchimento Facial' },
      { '@type': 'MedicalProcedure', name: 'Preenchimento Labial' },
      { '@type': 'MedicalProcedure', name: 'Bioestimuladores de Colágeno' },
      { '@type': 'MedicalProcedure', name: 'Fios de Sustentação' },
      { '@type': 'MedicalProcedure', name: 'Skinbooster' },
      { '@type': 'MedicalProcedure', name: 'Lipo de Papada' },
      { '@type': 'MedicalProcedure', name: 'Bioestimuladores Corporais' },
    ],
  };
}

/**
 * Person schema for Fabiana Sobral
 */
export function generatePersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#fabiana-sobral`,
    name: 'Fabiana Sobral',
    givenName: 'Fabiana',
    familyName: 'Sobral',
    jobTitle: 'Biomédica, Especialista em Estética Avançada',
    url: `${SITE_URL}`,
    image: toAbsoluteUrl('/fabiana-sobral.png'),
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
    worksFor: { '@id': `${SITE_URL}/#organization` },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Biomédica Especialista em Estética Avançada',
      description: 'Criadora do método Quiet Beauty FS — abordagem de rejuvenescimento natural que preserva a identidade facial.',
    },
  };
}

/**
 * FAQ schema
 */
export function generateFAQSchema(items: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.url),
    })),
  };
}

/**
 * JSON-LD renderer component
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
