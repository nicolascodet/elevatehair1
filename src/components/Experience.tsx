'use client';

import { useState, useEffect } from 'react';

const stats = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '1000+', label: 'Satisfied Clients' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5★', label: 'Average Rating' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'Absolutely transformed my look! The attention to detail and professionalism at Elevate is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    text: 'Best haircut I have ever received. The stylists really understand what works for your face shape.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    text: 'The color work here is incredible. My highlights look so natural and beautiful.',
    rating: 5,
  },
];

export default function Experience() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-6">
              The Elevate Experience
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Located in the heart of Southern California, Elevate Hair Salon represents the pinnacle of luxury hair care. Our team of master stylists brings decades of combined experience and continuous education in the latest techniques.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We believe that great hair is not just about the cut or color - it is about understanding your lifestyle, your personality, and your vision. Every service is a collaborative journey toward your perfect look.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gold/10 border border-gold/30 rounded-lg px-4 py-2">
                <span className="text-gold font-semibold">Certified Master Stylists</span>
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-lg px-4 py-2">
                <span className="text-gold font-semibold">Premium Products</span>
              </div>
              <div className="bg-gold/10 border border-gold/30 rounded-lg px-4 py-2">
                <span className="text-gold font-semibold">Luxury Environment</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gold/20 to-gold-dark/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gold mb-6 text-center">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gold mb-12">What Our Clients Say</h3>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gold/20">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 italic mb-6">
                &ldquo;{testimonials[currentTestimonial].text}&rdquo;
              </blockquote>
              <div className="text-gold font-semibold">
                - {testimonials[currentTestimonial].name}
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-gold' : 'bg-gold/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}