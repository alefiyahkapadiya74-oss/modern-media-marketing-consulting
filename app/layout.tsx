import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Modern Media & Marketing Consulting FZC | Premier UAE Creative Agency',
  description:
    'Modern Media & Marketing Consulting FZC is a luxury creative agency in Sharjah Publishing City Free Zone, UAE, providing strategic marketing, branding, web development, media buying, and executive HR consultancy.',
  keywords: [
    'Marketing Agency UAE',
    'Sharjah Publishing City Free Zone',
    'Modern Media Marketing Consulting FZC',
    'Branding Consultancy Dubai',
    'Web Development Agency UAE',
    'Media Buying Agency GCC',
    'Social Media Consultancy',
    'HR Consulting UAE',
  ],
  authors: [{ name: 'Modern Media & Marketing Consulting FZC' }],
  creator: 'Modern Media & Marketing Consulting FZC',
  publisher: 'Modern Media & Marketing Consulting FZC',
  openGraph: {
    title: 'Modern Media & Marketing Consulting FZC | Premier UAE Agency',
    description:
      'Architecting luxury digital experiences, strategic branding, media buying, and executive HR consultancy in Sharjah Publishing City Free Zone, UAE.',
    url: 'https://modernmedia.ae',
    siteName: 'Modern Media & Marketing Consulting FZC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Media & Marketing Consulting FZC',
    description:
      'Premier marketing, branding, web development, media buying, and HR consultancy in Sharjah Publishing City Free Zone, UAE.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Modern Media & Marketing Consulting FZC',
  description:
    'Premier marketing, branding, web development, media buying, and executive HR consultancy located in Sharjah Publishing City Free Zone, UAE.',
  url: 'https://modernmedia.ae',
  telephone: '+97160000000',
  email: 'info@modernmedia.ae',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sharjah Publishing City Free Zone',
    addressLocality: 'Sharjah',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.3094468,
    longitude: 55.4578148,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: ['United Arab Emirates', 'Dubai', 'Sharjah', 'Abu Dhabi', 'GCC'],
  knowsAbout: [
    'Marketing Consultancy',
    'Media Buying',
    'Brand Strategy',
    'Web Development',
    'Social Media Consultancy',
    'Design Consultancy',
    'HR Consulting',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} lenis lenis-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-warm-ivory text-charcoal min-h-screen selection:bg-brass-gold selection:text-white cursor-auto md:cursor-none">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
