'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Solaranlagen Lausanne –{' '}
              <span className="text-primary">professionelle Installation & kostenlose Offerten</span>
            </h1>
            <p className="text-lg text-gray-500 italic mb-4">
              Hochwertige Photovoltaik-Systeme mit fachgerechter Montage, 25 Jahren Garantie und WhatsApp-Support für Lausanne und Region Waadt.
            </p>
            <p className="text-base text-gray-600 mb-6">
              Wir installieren moderne Solaranlagen mit zertifizierten Technikern. Jedes System wird individuell auf Ihr Dach abgestimmt – für maximale Energieeffizienz und Kostenersparnisse.
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Erhalten Sie heute eine kostenlose Offerte. Unser Team analysiert Ihr Dach und erstellt ein maßgeschneidertes Angebot für Ihre Solaranlage in Lausanne.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">25 Jahre Garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Kostenlose Offerte</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">WhatsApp Support</span>
              </div>
            </div>

            {/* CTA */}
            <a href="#formular" className="btn-primary inline-block">
              Jetzt kostenlose Offerte anfordern
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-50 to-white">
              <Image
                src="/images/hero-solar-panels.webp"
                alt="Photovoltaik Solaranlagen - Professionelle Solar Panels auf Schweizer Haus"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-gray-600">156 Bewertungen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
