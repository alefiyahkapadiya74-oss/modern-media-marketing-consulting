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
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <section ref={containerRef} id="services" className="py-16 md:py-20 bg-warm-ivory text-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-start mb-10 md:mb-12">
            <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-2">
              02 / Specialized Services & Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
              Everything We Provide for UAE Enterprise Growth
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal/70 max-w-3xl font-light leading-relaxed mt-4">
              Modern Media & Marketing Consulting FZC offers 7 specialized consultancy domains. Every service is delivered with bespoke craftsmanship, senior-level attention, and zero generic shortcuts.
            </p>
          </div>

          {/* Asymmetrical Bento Grid with Balanced Spacing */}
          <div className="services-story-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((service, index) => {
              const isLarge = index === 0 || index === 3;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`service-story-card bg-white rounded-3xl p-6 sm:p-7 md:p-8 border border-brass-gold/20 shadow-md hover:border-brass-gold hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  {/* Subtle Background Accent Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brass-gold/5 blur-2xl group-hover:bg-brass-gold/15 transition-all duration-400 pointer-events-none" />

                  <div>
                    {/* Number Badge & Arrow */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-xs text-brass-gold tracking-widest font-semibold px-3 py-1 rounded-full bg-brass-gold/10 border border-brass-gold/30">
                        Domain {service.num}
                      </span>
                      <div className="w-9 h-9 rounded-full border border-brass-gold/30 flex items-center justify-center text-brass-gold group-hover:bg-brass-gold group-hover:text-white transition-all duration-300 shadow-sm">
                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest-green mb-2 group-hover:text-brass-gold transition-colors">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <span className="font-sans text-xs uppercase tracking-wider text-brass-gold block mb-3 font-medium">
                      {service.tagline}
                    </span>

                    {/* Short Description */}
                    <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Preview of Key Deliverables */}
                    <div className="space-y-1.5 mb-5">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal/50 block mb-1.5">
                        Core Deliverables Include:
                      </span>
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-sans text-charcoal/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-brass-gold mt-1.5 shrink-0" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                      {service.deliverables.length > 3 && (
                        <span className="text-[11px] font-mono text-brass-gold font-medium block pt-0.5">
                          + {service.deliverables.length - 3} more deliverables
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-brass-gold/15 flex items-center justify-between font-sans text-xs">
                    <span className="font-mono text-brass-gold font-semibold text-[11px]">
                      {service.executionSteps.length}-Step Delivery Path
                    </span>
                    <span className="text-forest-green font-semibold group-hover:text-brass-gold group-hover:translate-x-1 transition-all flex items-center gap-1 text-xs">
                      View Full Scope &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Service Detail Drawer */}
      <ServiceDetailDrawer
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </>
  );
}
