import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import ScrollTracking from "@/components/ScrollTracking";
import { Suspense } from "react";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://solaranlagen-lausanne.24hey.com'),
  alternates: {
    canonical: 'https://solaranlagen-lausanne.24hey.com',
  },
  title: {
    default: 'Solaranlagen Lausanne | Photovoltaik Installation & Offerten',
    template: '%s | Solaranlagen Lausanne',
  },
  description: 'Professionelle Solaranlagen und Photovoltaik-Installationen in Lausanne. Kostenlose Offerten, fachgerechte Montage, 25 Jahre Garantie. Jetzt kostenlosen Kostenvoranschlag anfordern!',
  keywords: ['Solaranlagen Lausanne', 'Photovoltaik Lausanne', 'Solaranlage Installation', 'Solar Waadt', 'Solaranlage Kosten Lausanne', 'Solartechnik'],
  authors: [{ name: 'Solaranlagen Lausanne' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://solaranlagen-lausanne.24hey.com',
    siteName: 'Solaranlagen Lausanne',
    title: 'Solaranlagen Lausanne | Photovoltaik Installation',
    description: 'Professionelle Solaranlagen und Photovoltaik-Installationen in Lausanne. Kostenlose Offerten, fachgerechte Montage, 25 Jahre Garantie.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solaranlagen Lausanne - Photovoltaik Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solaranlagen Lausanne | Photovoltaik Installation',
    description: 'Professionelle Solaranlagen und Photovoltaik-Installationen in Lausanne. Kostenlose Offerten, 25 Jahre Garantie.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  creator: 'Solaranlagen Lausanne',
  publisher: 'Solaranlagen Lausanne',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-CH" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <ScrollTracking />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
