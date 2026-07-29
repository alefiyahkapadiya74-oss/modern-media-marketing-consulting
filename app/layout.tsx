import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
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
  title: 'Modern Media & Marketing Consulting FZC | Premier UAE Agency',
  description:
    'Modern Media & Marketing Consulting FZC is a luxury creative agency in Sharjah Publishing City Free Zone, UAE, providing premium marketing, branding, web development, media buying, and HR consultancy.',
  keywords: [
    'Marketing Agency UAE',
    'Sharjah Publishing City Free Zone',
    'Modern Media Marketing Consulting FZC',
    'Branding Consultancy Dubai',
    'Web Development Agency UAE',
    'Media Buying Agency',
    'Social Media Consultancy',
    'HR Consulting UAE',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} lenis lenis-smooth`}>
      <body className="font-sans antialiased bg-warm-ivory text-charcoal min-h-screen selection:bg-brass-gold selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
