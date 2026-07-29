'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { services, Service } from '@/data/services';
import ServiceDetailDrawer from '@/components/services/ServiceDetailDrawer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from('.service-story-card', {
        scrollTrigger: {
          trigger: '.services-story-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 45,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <section ref={containerRef} id="services" className="py-28 bg-warm-ivory text-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-start mb-20">
            <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-3">
              02 / Strategic Suite & Storytelling
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
              Specialized Domains of Enterprise Growth
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-2xl font-light leading-relaxed mt-6">
              Our multidisciplinary consultancy combines market intelligence, bespoke digital engineering, performance media buying, and HR talent alignment.
            </p>
          </div>

          {/* Asymmetrical Bento Grid with Elevated Depth */}
          <div className="services-story-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const isLarge = index === 0 || index === 3;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`service-story-card bg-white rounded-3xl p-8 md:p-10 border border-brass-gold/20 shadow-md hover:border-brass-gold hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Subtle Background Accent Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brass-gold/5 blur-2xl group-hover:bg-brass-gold/15 transition-all duration-500 pointer-events-none" />

                  <div>
                    {/* Category Tag & Arrow */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-brass-gold tracking-widest font-semibold px-3.5 py-1 rounded-full bg-brass-gold/10 border border-brass-gold/30">
                        Executive Practice
                      </span>
                      <div className="w-11 h-11 rounded-full border border-brass-gold/30 flex items-center justify-center text-brass-gold group-hover:bg-brass-gold group-hover:text-white transition-all duration-300 shadow-sm">
                        <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest-green mb-3 group-hover:text-brass-gold transition-colors">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <span className="font-sans text-xs uppercase tracking-wider text-brass-gold block mb-4 font-medium">
                      {service.tagline}
                    </span>

                    {/* Short Description */}
                    <p className="font-sans text-sm md:text-base text-charcoal/75 font-light leading-relaxed mb-8">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 border-t border-brass-gold/15 flex items-center justify-between font-sans text-xs text-charcoal/60">
                    <span className="font-mono text-brass-gold font-semibold">
                      Full Executive Scope
                    </span>
                    <span className="font-semibold text-forest-green group-hover:text-brass-gold transition-colors flex items-center gap-1">
                      Explore Details &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expandable Detail Drawer */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
