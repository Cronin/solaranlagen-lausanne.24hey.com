import Script from 'next/script'
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
      
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-CPFVSVLPGP`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CPFVSVLPGP');
        `}
      </Script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <ScrollTracking />
        <Header />
        <main>{children}</main>
        <Footer />
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Solar Installation Lausanne",
  "url": "https://solaranlagen-lausanne.24hey.com",
  "logo": "https://solaranlagen-lausanne.24hey.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39 123 456 7890",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": [
      "en"
    ]
  }
})
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://solaranlagen-lausanne.24hey.com",
  "name": "Solar Installation Lausanne",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://solaranlagen-lausanne.24hey.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})
          }}
        />
            {/* Microsoft Clarity */}
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u1ur4kb2kq");
          `,
        }}
      />
</body>
    </html>
  );
}
