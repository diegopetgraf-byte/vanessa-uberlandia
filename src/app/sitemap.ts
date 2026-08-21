import { MetadataRoute } from 'next';
import { TREATMENTS } from '@/data/treatments';
import { TECHNOLOGIES } from '@/data/technologies';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,             lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/a-uniq`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/paciente-modelo`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tratamentos`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/tecnologias`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/resultados`,   lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/contato`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = TREATMENTS.map((t) => ({
    url: `${BASE_URL}/tratamentos/${t.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const technologyRoutes: MetadataRoute.Sitemap = TECHNOLOGIES.map((t) => ({
    url: `${BASE_URL}/tecnologias/${t.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...technologyRoutes];
}
