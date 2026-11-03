import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /_next/ fica liberado: o Google precisa do CSS e do JS para renderizar.
      // /proposta e /paciente-modelo ficam rastreáveis para o Google ler o noindex delas.
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
