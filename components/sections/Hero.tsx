'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from '@/components/ui/Button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.0 } });

      tl.fromTo(
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.2 }
      )
        .fromTo(
          '.hero-title-word',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          '-=0.4'
        )
        .fromTo(
          '.hero-ctas',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.3'
        )
        .fromTo(
          '.hero-scroll-indicator',
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          '-=0.2'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-20 text-center bg-warm-ivory overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brass-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-forest-green/5 blur-3xl pointer-events-none" />

      {/* Location / Agency Badge */}
      <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brass-gold/30 bg-brass-gold/5 text-brass-gold text-xs tracking-widest uppercase font-semibold mb-8 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-brass-gold animate-pulse" />
        Sharjah Publishing City Free Zone • UAE Premier Agency
      </div>

      {/* Main Editorial Headline */}
      <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-forest-green max-w-6xl leading-[1.08] mb-8">
        <span className="hero-title-word inline-block mr-3 md:mr-5">Architecting</span>
        <span className="hero-title-word inline-block italic font-normal text-brass-gold mr-3 md:mr-5">
          Luxury
        </span>
        <span className="hero-title-word inline-block mr-3 md:mr-5">Digital</span>
        <span className="hero-title-word inline-block">Experiences</span>
      </h1>

      {/* Subtitle Narrative */}
      <p className="hero-subtitle font-sans text-base sm:text-xl text-charcoal/80 max-w-3xl font-light leading-relaxed mb-12">
        Modern Media & Marketing Consulting FZC elevates visionary enterprises across the UAE through strategic brand architecture, high-impact media buying, bespoke web development, and executive HR consulting.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="hero-ctas flex flex-col sm:flex-row items-center gap-5">
        <Button href="#services" variant="primary">
          Explore Our Suite
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
        <Button href="#contact" variant="outline">
          Request Consultation
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator mt-24 flex flex-col items-center gap-3 text-charcoal/40 text-[11px] tracking-widest uppercase font-sans">
        <span>Scroll to Explore</span>
        <div className="w-5 h-9 rounded-full border border-charcoal/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-brass-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
