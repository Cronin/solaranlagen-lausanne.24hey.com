import Hero from '@/components/Hero';
import USPSection from '@/components/USPSection';
import HowItWorks from '@/components/HowItWorks';
import FormContainer from '@/components/MultiStepForm/FormContainer';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function HomePage() {
  return (
    <>

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Solar Installation",
            "provider": {
              "@type": "Electrician",
              "name": "Solar Installation Lausanne"
            },
            "areaServed": {
              "@type": "City",
              "name": "Lausanne"
            }
          })
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://solaranlagen-lausanne.24hey.com"
              }
            ]
          })
        }}
      />

      <Hero />
      <USPSection />
      <HowItWorks />

      {/* Form Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="quote">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Kostenlose Offerte für Ihre Solaranlage in Lausanne
            </h2>
            <p className="text-xl text-gray-600">
              In wenigen Minuten erhalten Sie ein maßgeschneidertes Angebot von unserem Expertenteam
            </p>
          </div>
          <FormContainer />
        </div>
      </section>

      <TrustBadges />
      <Testimonials />
      <FAQ />

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ihre Solaranlage in Lausanne – jetzt kostenlosen Kostenvoranschlag anfordern
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Kontaktieren Sie uns per WhatsApp +41791234567 oder füllen Sie unten das Kontaktformular aus. Wir analysieren Ihr Dach und erstellen Ihnen eine unverbindliche Offerte.
          </p>
          <a href="#quote" className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-block">
            Jetzt kostenlose Offerte erhalten
          </a>
        </div>
      </section>
    </>
  );
}
