import { Inter, Instrument_Serif, Sora } from 'next/font/google';

import './globals.css';
import { site } from '@/config/site';
import { Providers } from '@/components/motion/Providers';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap', weight: ['300', '400', '500', '600', '700', '800'] });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'CRM for education',
    'admissions CRM',
    'lead management',
    'WhatsApp automation',
    'cohort management',
    'payment links and EMI',
    'counsellor CRM',
    'learner onboarding',
  ],
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description },
};

export const viewport = {
  themeColor: '#194cff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${instrument.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
