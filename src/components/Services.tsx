'use client';

import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Precision Cuts',
    description: 'Masterfully crafted cuts tailored to your unique style and facial features. Our expert stylists combine technical precision with artistic vision.',
    priceRange: '$85 - $150',
    icon: '✂️',
  },
  {
    id: 2,
    title: 'Color Mastery',
    description: 'From subtle highlights to bold transformations, our color specialists use premium products to achieve stunning, long-lasting results.',
    priceRange: '$120 - $300',
    icon: '🎨',
  },
  {
    id: 3,
    title: 'Styling Excellence',
    description: 'Professional styling for special occasions or everyday elegance. Blow-outs, updos, and modern styling techniques.',
    priceRange: '$60 - $120',
    icon: '💫',
  },
  {
    id: 4,
    title: 'Treatments',
    description: 'Rejuvenating treatments to restore health and vitality to your hair. Deep conditioning, keratin treatments, and scalp therapy.',
    priceRange: '$90 - $250',
    icon: '🌿',
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience luxury hair services crafted by skilled professionals using only the finest products and techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-gold/20 transition-all duration-300 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10 ${
                hoveredService === service.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gold mb-2">{service.title}</h3>
                <div className="text-gold-light font-semibold text-lg mb-4">
                  {service.priceRange}
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark to-gold-light transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="sms:(949) 324-0301"
            className="inline-block bg-gradient-to-r from-gold-dark to-gold hover:from-gold to-gold-light text-black font-semibold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gold/50"
          >
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
}