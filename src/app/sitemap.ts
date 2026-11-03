import { MetadataRoute } from 'next';
import { TREATMENTS } from '@/data/treatments';
import { TECHNOLOGIES } from '@/data/technologies';
import { SITE_URL, FULL_FACE_ROUTES, SITEMAP_EXCLUDED } from '@/lib/seo/site';

type Entry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const entry = (path: string, priority: number, changeFrequency: Entry['changeFrequency'] = 'monthly'): Entry => ({
    url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const routes: Entry[] = [
    entry('/', 1.0, 'weekly'),
    // Cluster Full Face: lista fixa (src/lib/seo/site.ts). O CEO confere 200 antes do deploy.
    ...FULL_FACE_ROUTES.map((r) => entry(r.path, r.priority, 'monthly')),
    entry('/tratamentos', 0.8, 'weekly'),
    ...TREATMENTS.map((t) => entry(`/tratamentos/${t.id}`, 0.7)),
    entry('/contato', 0.7),
    entry('/tecnologias', 0.5),
    ...TECHNOLOGIES.map((t) => entry(`/tecnologias/${t.id}`, 0.4)),
  ];

  const excluded = new Set<string>(SITEMAP_EXCLUDED.map((p) => `${SITE_URL}${p}`));
  const seen = new Set<string>();
  return routes.filter((r) => {
    if (excluded.has(r.url) || seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  });
}
