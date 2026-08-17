/**
 * JSON-LD Schema generators for Oni Face · Facial Boutique
 * SEO structured data for Google rich snippets
 */

import React from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';
const SITE_NAME = 'Oni Face · Facial Boutique';
const INSTAGRAM_URL = 'https://www.instagram.com/dravansanabria/';
const WHATSAPP = '+5534998031777';

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
 * Organization schema for Oni Face · Facial Boutique
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
    description: 'Dra. Vanessa Sanabria — Especialista em Full Face e gerenciamento do envelhecimento. Oni Face · Facial Boutique em Uberlândia, MG.',
    sameAs: [INSTAGRAM_URL],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: WHATSAPP,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    founders: [{
      '@type': 'Person',
      name: 'Dra. Vanessa Sanabria',
      jobTitle: 'Especialista em Full Face',
      image: toAbsoluteUrl('/professional.jpg'),
      sameAs: [INSTAGRAM_URL],
    }],
    areaServed: [
      { '@type': 'City', name: 'Uberlândia', containedInPlace: { '@type': 'State', name: 'Minas Gerais' } },
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
 * LocalBusiness + HealthAndBeautyBusiness schema — Uberlândia, MG
 */
export function generateLocalBusinessSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Clínica boutique de estética avançada especializada em Harmonização Facial, Preenchimentos e Bioestimuladores de Colágeno em Uberlândia, MG.',
    image: toAbsoluteUrl('/professional.jpg'),
    telephone: WHATSAPP,
    priceRange: '$$$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Dinheiro, Cartão de crédito, Cartão de débito, PIX',
    sameAs: [INSTAGRAM_URL],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Uberlândia',
      addressRegion: 'MG',
      postalCode: '38400-000',
      neighborhood: 'Centro',
      addressCountry: 'BR',
    },
    areaServed: [
      { '@type': 'City', name: 'Uberlândia' },
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
    ],
  };
}

/**
 * Person schema for Vanessa Sanabria
 */
export function generatePersonSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#vanessa-sanabria`,
    name: 'Dra. Vanessa Sanabria',
    givenName: 'Vanessa',
    familyName: 'Sanabria',
    jobTitle: 'Especialista em Full Face',
    url: `${SITE_URL}`,
    image: toAbsoluteUrl('/professional.jpg'),
    sameAs: [INSTAGRAM_URL],
    worksFor: { '@id': `${SITE_URL}/#organization` },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Especialista em Full Face',
      description: 'Foco em gerenciamento do envelhecimento, harmonização e blefaroplastia com naturalidade.',
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
