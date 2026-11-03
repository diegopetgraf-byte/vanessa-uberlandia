import type { Metadata } from 'next';
import type { FullFacePage } from '@/data/fullFace';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://institutooniface.com.br').replace(/\/+$/, '');

/** Metadata das páginas Full Face e Sobre: title, description, canonical absoluto e Open Graph. */
export function fullFaceMetadata(page: FullFacePage, ogImage?: string): Metadata {
  const url = `${SITE_URL}${page.rota}`;
  const image = ogImage ?? page.heroImage ?? '/full-face-hero.webp';
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      type: 'article',
      locale: 'pt_BR',
      siteName: 'Instituto Oni Face',
      images: [{ url: imageUrl, alt: page.heroAlt ?? page.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [imageUrl],
    },
  };
}
