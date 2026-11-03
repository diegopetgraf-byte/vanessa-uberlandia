import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/cormorant-garamond/300.css';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/dm-sans/300.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import { Providers } from '@/components/Providers';
import { SITE_URL, SITE_NAME } from '@/lib/seo/site';
import { JsonLd, generateGlobalGraph } from '@/lib/seo/schemas';

const OG_IMAGE = `${SITE_URL}/og.png`;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F3EC',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Instituto Oni Face | Full Face em Uberlândia, MG',
    template: '%s | Instituto Oni Face',
  },
  description:
    'Dra. Vanessa Sanabria Bevilaqua, cirurgiã-dentista (CRO-76320 MG): Full Face, harmonização facial natural e bioestimuladores em Uberlândia, MG.',
  applicationName: SITE_NAME,
  authors: [{ name: 'Dra. Vanessa Sanabria Bevilaqua', url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // Sem canonical aqui: cada página declara o seu (um canonical no layout seria herdado por todas).
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Instituto Oni Face | Full Face em Uberlândia, MG',
    description:
      'Full Face e harmonização facial natural em Uberlândia com a cirurgiã-dentista Dra. Vanessa Sanabria Bevilaqua, CRO-76320 MG. Âmbar Health Center.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Instituto Oni Face, Dra. Vanessa Sanabria Bevilaqua, Uberlândia, MG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Oni Face | Full Face em Uberlândia, MG',
    description:
      'Cirurgiã-dentista, Full Face e harmonização facial. A face dos seus sonhos ainda deve parecer sua. Uberlândia, MG.',
    images: [{ url: OG_IMAGE, alt: 'Instituto Oni Face' }],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Oni Face',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <JsonLd data={generateGlobalGraph()} />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
