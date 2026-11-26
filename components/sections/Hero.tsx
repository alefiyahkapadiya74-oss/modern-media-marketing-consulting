'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Hero3DCanvas from '@/components/hero/Hero3DCanvas';
import Button from '@/components/ui/Button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 25, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, delay: 0.1 }
      )
        .fromTo(
          '.hero-title-word',
          { opacity: 0, y: 50, rotateX: 20 },
          { opacity: 1, y: 0, rotateX: 0, stagger: 0.09 },
          '-=0.5'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          '-=0.4'
        )
        .fromTo(
          '.hero-ctas',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          '-=0.3'
        )
        .fromTo(
          '.hero-metrics-strip',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.2'
        )
        .fromTo(
          '.hero-scroll-indicator',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.1'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-6 md:px-12 pt-28 md:pt-32 pb-14 md:pb-16 text-center bg-warm-ivory overflow-hidden"
    >
      {/* Three.js Ambient 3D Geometric Canvas */}
      <Hero3DCanvas />

      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brass-gold/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Location & Industry Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-brass-gold/40 bg-white/70 backdrop-blur-md text-brass-gold text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brass-gold animate-pulse" />
          Sharjah Publishing City Free Zone • UAE Creative & Marketing Consultancy
        </div>

        {/* Editorial Playfair Display Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-forest-green max-w-5xl leading-[1.08] mb-6">
          <span className="hero-title-word inline-block mr-2.5 md:mr-4">Architecting</span>
          <span className="hero-title-word inline-block italic font-normal text-brass-gold mr-2.5 md:mr-4">
            Luxury
          </span>
          <span className="hero-title-word inline-block mr-2.5 md:mr-4">Digital</span>
          <span className="hero-title-word inline-block">Experiences</span>
        </h1>

        {/* Subtitle Narrative */}
        <p className="hero-subtitle font-sans text-base sm:text-lg md:text-xl text-charcoal/80 max-w-3xl font-light leading-relaxed mb-8 md:mb-10">
          Modern Media & Marketing Consulting FZC partners with forward-looking enterprises in the UAE. We deliver specialized marketing consultancy, precision media buying, bespoke Next.js web platforms, brand architecture, and executive HR talent strategy.
        </p>

        {/* Action Buttons */}
        <div className="hero-ctas flex flex-col sm:flex-row items-center gap-4 mb-10 md:mb-12">
          <Button href="#services" variant="primary">
            Explore Services Suite
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
          <Button href="#engagement" variant="outline">
            How We Partner
          </Button>
        </div>

        {/* Hero Trust Metrics Strip */}
        <div className="hero-metrics-strip grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6 border-t border-brass-gold/20 w-full max-w-4xl text-center">
          <div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-forest-green block">7 Core</span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-brass-gold font-medium">Service Domains</span>
          </div>
          <div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-forest-green block">Bespoke</span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-brass-gold font-medium">Execution Only</span>
          </div>
          <div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-forest-green block">Direct</span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-brass-gold font-medium">Senior Partner Lead</span>
          </div>
          <div>
            <span className="font-serif text-2xl md:text-3xl font-bold text-forest-green block">Sharjah</span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-brass-gold font-medium">Free Zone Base</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator mt-8 md:mt-10 flex flex-col items-center gap-2 text-charcoal/40 text-[10px] tracking-widest uppercase font-sans">
          <span>Scroll to Discover</span>
          <div className="w-4 h-8 rounded-full border border-charcoal/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-brass-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
