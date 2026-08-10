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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8080';
const OG_IMAGE = `${SITE_URL}/og.png`;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAF8',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Clínica FS Fabiana Sobral | Estética Avançada em Jardins, São Paulo',
    template: '%s | Clínica FS Fabiana Sobral',
  },
  description: 'Fabiana Sobral — Biomédica, especialista em estética avançada e criadora do método Quiet Beauty FS. Reestruturação facial com propósito. Jardins — São Paulo, SP.',
  authors: [{ name: 'Clínica FS Fabiana Sobral', url: SITE_URL }],
  creator: 'Clínica FS Fabiana Sobral',
  publisher: 'Clínica FS Fabiana Sobral',
  alternates: { canonical: SITE_URL },
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
    title: 'Clínica FS Fabiana Sobral | Quiet Beauty FS — Estética Avançada SP',
    description: 'Harmonização Facial, Bioestimuladores de Colágeno e Estética Corporal. Método Quiet Beauty FS — Rejuvenescer sem deixar de ser você. Jardins, São Paulo.',
    url: SITE_URL,
    siteName: 'Clínica FS Fabiana Sobral',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Clínica FS Fabiana Sobral — Quiet Beauty FS — Jardins, São Paulo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica FS Fabiana Sobral | Quiet Beauty FS',
    description: 'Biomédica especialista em estética avançada. Reestruturação facial com propósito. Jardins — São Paulo, SP.',
    images: [{ url: OG_IMAGE, alt: 'Clínica FS Fabiana Sobral' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Clínica FS',
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
