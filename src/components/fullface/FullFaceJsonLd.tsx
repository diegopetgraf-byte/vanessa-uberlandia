import { JsonLd } from '@/lib/seo/schemas';
import { ENTITY_IDS, PROFESSIONAL, SITE_URL, absoluteUrl } from '@/lib/seo/site';
import type { FullFacePage } from '@/data/fullFace';

interface Crumb {
  name: string;
  path: string;
}

/** Trilha de navegação de uma página Full Face ou Sobre. */
export function fullFaceCrumbs(page: FullFacePage): Crumb[] {
  const crumbs: Crumb[] = [{ name: 'Início', path: '/' }];
  if (page.rota === '/full-face') {
    crumbs.push({ name: 'Full Face', path: '/full-face' });
  } else if (page.rota.startsWith('/full-face/')) {
    crumbs.push({ name: 'Full Face', path: '/full-face' });
    crumbs.push({ name: page.nomeCurto, path: page.rota });
  } else {
    crumbs.push({ name: page.nomeCurto, path: page.rota });
  }
  return crumbs;
}

/**
 * JSON-LD da página: MedicalWebPage (ou AboutPage na página Sobre) + BreadcrumbList.
 * Não há helper específico em src/lib/seo para estas páginas; os ids das entidades
 * vêm de src/lib/seo/site.ts para ligar à clínica e à profissional já declaradas.
 */
export function FullFaceJsonLd({ page }: { page: FullFacePage }) {
  const url = absoluteUrl(page.rota);
  const isSobre = page.slug === 'sobre';

  const webPage: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': isSobre ? ['AboutPage', 'ProfilePage'] : 'MedicalWebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    headline: page.h1,
    description: page.description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': ENTITY_IDS.website },
    about: isSobre ? { '@id': ENTITY_IDS.professional } : { '@id': ENTITY_IDS.clinic },
    publisher: { '@id': ENTITY_IDS.organization },
    reviewedBy: {
      '@type': 'Person',
      '@id': ENTITY_IDS.professional,
      name: PROFESSIONAL.name,
      jobTitle: PROFESSIONAL.jobTitle,
    },
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };
  // ProfilePage exige mainEntity: a pessoa do perfil, já declarada no layout com este @id.
  if (isSobre) webPage.mainEntity = { '@id': ENTITY_IDS.professional };
  if (!isSobre) webPage.audience = { '@type': 'PeopleAudience', audienceType: 'Paciente' };
  if (page.heroImage) {
    webPage.primaryImageOfPage = { '@type': 'ImageObject', url: absoluteUrl(page.heroImage) };
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: fullFaceCrumbs(page).map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.path === '/' ? `${SITE_URL}/` : absoluteUrl(c.path),
    })),
  };

  return <JsonLd data={[webPage, breadcrumb]} />;
}
