import type { Metadata } from 'next';

// Diego, 13/10/2026: fora do menu, do sitemap e do Google.
export const metadata: Metadata = {
  title: 'Resultados | Instituto Oni Face',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ResultadosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
