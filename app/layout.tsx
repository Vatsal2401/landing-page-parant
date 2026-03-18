import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sparq — Web Design & Development Studio',
  description:
    'A simpler, smarter way to grow your business online. We build landing pages, mobile apps, and full-stack products for ambitious businesses worldwide. Fast delivery. Fixed pricing.',
  openGraph: {
    title: 'Sparq — Web Design & Development Studio',
    description:
      'Landing pages, mobile apps & full-stack products — delivered in days, not months. Fixed pricing. Full code ownership.',
    url: 'https://sparq.studio',
    siteName: 'Sparq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparq — Web Design & Development Studio',
    description: 'Landing pages, mobile apps & full-stack products — delivered in days, not months.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
