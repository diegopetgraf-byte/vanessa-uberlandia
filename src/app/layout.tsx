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
  themeColor: '#F7F3EC',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Oni Face · Facial Boutique | Dra. Vanessa Sanabria · Uberlândia, MG',
    template: '%s | Oni Face · Facial Boutique',
  },
  description: 'Dra. Vanessa Sanabria Bevilaqua — especialista em Full Face, harmonização facial, botox, preenchimento e blefaroplastia em Uberlândia MG. Oni Face Boutique · Âmbar Health Center.',
  keywords: ['Full Face Uberlândia', 'harmonização facial Uberlândia', 'botox Uberlândia MG', 'preenchimento labial Uberlândia', 'blefaroplastia Uberlândia', 'bioestimuladores de colágeno Uberlândia', 'tratamentos faciais Uberlândia', 'estética facial Uberlândia', 'Dra Vanessa Sanabria', 'Oni Face', 'protocolo facial completo', 'fillers Uberlândia', 'toxina botulínica Uberlândia'],
  authors: [{ name: 'Oni Face · Facial Boutique', url: SITE_URL }],
  creator: 'Oni Face · Facial Boutique',
  publisher: 'Oni Face · Facial Boutique',
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
    title: 'Oni Face · Facial Boutique | Dra. Vanessa Sanabria — Uberlândia, MG',
    description: 'Especialista em Full Face em Uberlândia MG — botox, preenchimento, bioestimuladores e blefaroplastia. Oni Face Boutique · Dra. Vanessa Sanabria Bevilaqua · CRO-76320 MG.',
    url: SITE_URL,
    siteName: 'Oni Face · Facial Boutique',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Oni Face · Facial Boutique — Dra. Vanessa Sanabria Bevilaqua — Uberlândia, MG',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oni Face · Facial Boutique | Dra. Vanessa Sanabria',
    description: 'Cirurgiã-Dentista especialista em harmonização facial. A face dos seus sonhos ainda deve parecer sua. Uberlândia, MG.',
    images: [{ url: OG_IMAGE, alt: 'Oni Face · Facial Boutique' }],
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
