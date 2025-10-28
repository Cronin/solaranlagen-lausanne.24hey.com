export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://solaranlagen-lausanne.24hey.com/#organization",
    "name": "Solaranlagen Lausanne",
    "alternateName": "Solar Lausanne",
    "url": "https://solaranlagen-lausanne.24hey.com",
    "logo": "https://solaranlagen-lausanne.24hey.com/logo.png",
    "image": [
      "https://solaranlagen-lausanne.24hey.com/logo.png",
      "https://solaranlagen-lausanne.24hey.com/og-image.jpg"
    ],
    "description": "Professionelle Solaranlagen und Photovoltaik-Installationen in Lausanne. Fachgerechte Montage, 25 Jahre Garantie, kostenlose Offerten für Hausbesitzer und Unternehmen.",
    "telephone": "+41791234567",
    "email": "info@solaranlagen-lausanne.24hey.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue de Lausanne 1",
      "addressLocality": "Lausanne",
      "postalCode": "1201",
      "addressRegion": "VD",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.5197",
      "longitude": "6.6323"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lausanne"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Vaud"
      }
    ],
    "priceRange": "€€",
    "currenciesAccepted": "CHF",
    "paymentAccepted": "Consultation Gratuite",
    "serviceType": ["Solar Installation", "Photovoltaik", "Solaranlage"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/solaranlagenlausanne",
      "https://www.linkedin.com/company/solaranlagenlausanne"
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://solaranlagen-lausanne.24hey.com/#quote",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Order",
        "name": "Kostenlose Solaranlage Offerte"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
