'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const pillars = [
  {
    title: 'Mission',
    subtitle: 'Strategic Intent',
    description:
      'Architecting transformative brand strategies, bespoke web platforms, and data-driven marketing campaigns for ambitious enterprises across the UAE and Gulf region.',
    icon: (
      <svg className="w-6 h-6 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    title: 'Vision',
    subtitle: 'Global Excellence',
    description:
      'Setting the regional benchmark for Awwwards-grade design engineering, editorial storytelling, and sustainable business scalability.',
    icon: (
      <svg className="w-6 h-6 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Core Values',
    subtitle: 'Uncompromising Quality',
    description:
      'Rooted in creative mastery, strategic rigor, transparent collaboration, and absolute dedication to measurable return on investment.',
    icon: (
      <svg className="w-6 h-6 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const features = [
  {
    num: '01',
    title: 'Strategic Excellence',
    description:
      'Every campaign and platform is engineered from rigorous market intelligence tailored to high-growth regional sectors.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'UAE Market Mastery',
    description:
      'Deep expertise across Sharjah Free Zone, Dubai corporate hubs, and mainland regulatory landscapes.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 5H12a2 2 0 00-2 2v.935" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Bespoke Craftsmanship',
    description:
      'Zero reliance on generic templates. We build custom editorial visual systems that command market authority.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'ROI-Driven Execution',
    description:
      'Precision media buying and web optimization focused directly on client acquisition, brand equity, and revenue growth.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Animate Main Narrative Header & Origin text
      gsap.from('.about-intro-text', {
        scrollTrigger: {
          trigger: '.about-intro-text',
          start: 'top 85%',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate Mission, Vision & Values Pillars Grid
      gsap.from('.about-pillar-card', {
        scrollTrigger: {
          trigger: '.about-pillars-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        stagger: 0.16,
        duration: 0.95,
        ease: 'power3.out',
      });

      // Animate "Why Leaders Choose Modern Media" Header & Paragraph
      gsap.from('.why-leaders-header', {
        scrollTrigger: {
          trigger: '.why-leaders-section',
          start: 'top 80%',
        },
        opacity: 0,
        y: 35,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Animate "Why Leaders Choose Modern Media" Feature Cards
      gsap.from('.about-feature-card', {
        scrollTrigger: {
          trigger: '.about-features-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        scale: 0.96,
        stagger: 0.14,
        duration: 0.9,
        ease: 'power3.out',
      });

      // Animate Quote Banner
      gsap.from('.about-quote-banner', {
        scrollTrigger: {
          trigger: '.about-quote-banner',
          start: 'top 85%',
        },
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="about" className="relative py-24 bg-warm-ivory text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-3">
            01 / Company Narrative
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
            Bridging Creative Mastery & Business Growth in the UAE
          </h2>
        </div>

        {/* Company Origin & Base Storytelling */}
        <div className="about-intro-text grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 font-serif text-2xl md:text-3xl text-forest-green/90 leading-relaxed">
            Headquartered in the prestige of <span className="text-brass-gold italic font-normal">Sharjah Publishing City Free Zone</span>, Modern Media & Marketing Consulting FZC serves as the premier strategic growth partner for visionary brands.
          </div>
          <div className="lg:col-span-6 font-sans text-base md:text-lg text-charcoal/80 font-light leading-relaxed space-y-6">
            <p>
              We redefine corporate communications by rejecting generic corporate marketing in favor of immersive, editorial storytelling. From luxury real estate developments and high-end hospitality to enterprise financial institutions and healthcare leaders, we engineer bespoke digital platforms and strategic media campaigns.
            </p>
            <p>
              Our multi-disciplinary team unites high-end brand strategy, performance media buying, bespoke full-stack web engineering, and executive HR consulting under a single unified standard of excellence.
            </p>
          </div>
        </div>

        {/* Mission, Vision & Values 3-Card Grid */}
        <div className="about-pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 items-stretch">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="about-pillar-card group relative bg-white rounded-3xl p-8 md:p-10 shadow-md border border-brass-gold/20 hover:border-brass-gold hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
            >
              {/* Animated Top Brass Gold Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brass-gold/30 group-hover:bg-brass-gold transition-colors duration-300" />

              {/* Radial Light Flare Backdrop */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brass-gold/5 rounded-full blur-2xl group-hover:bg-brass-gold/15 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header Icon & Subtitle */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold px-3 py-1 rounded-full bg-brass-gold/10 border border-brass-gold/30">
                    {pillar.subtitle}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-brass-gold/10 border border-brass-gold/30 flex items-center justify-center group-hover:bg-brass-gold group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    {pillar.icon}
                  </div>
                </div>

                {/* Pillar Title */}
                <h3 className="font-serif text-3xl font-bold text-forest-green mb-4 group-hover:text-brass-gold transition-colors">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="font-sans text-sm md:text-base text-charcoal/75 leading-relaxed font-light mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-4 border-t border-brass-gold/15 flex items-center justify-between text-xs text-brass-gold font-mono font-semibold mt-auto">
                <span>Core Pillar</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* "Why Leaders Choose Modern Media" Section */}
        <div className="why-leaders-section mb-20">
          <div className="why-leaders-header flex flex-col items-start mb-12">
            <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-2">
              Competitive Advantage
            </span>
            <h3 className="font-serif text-3xl md:text-5xl font-bold text-forest-green">
              Why Leaders Choose Modern Media
            </h3>
            <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-3xl font-light leading-relaxed mt-4">
              Visionary regional enterprises partner with Modern Media & Marketing Consulting FZC to bridge creative audacity with institutional strategy. We combine deep UAE market intelligence with bespoke execution to guarantee long-term brand equity and enterprise growth.
            </p>
          </div>

          <div className="about-features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="about-feature-card group relative bg-white/70 backdrop-blur-md border border-brass-gold/25 rounded-2xl p-6 md:p-8 hover:bg-white hover:border-brass-gold hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brass-gold/5 rounded-full blur-xl group-hover:bg-brass-gold/15 transition-all duration-300 pointer-events-none" />

                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-brass-gold tracking-widest uppercase font-semibold px-2.5 py-0.5 rounded-full bg-brass-gold/10 border border-brass-gold/30">
                    {feature.num}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-brass-gold/10 border border-brass-gold/30 flex items-center justify-center group-hover:bg-brass-gold group-hover:text-white transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                </div>

                <h4 className="font-serif text-xl font-bold text-forest-green mb-3 group-hover:text-brass-gold transition-colors">
                  {feature.title}
                </h4>
                <p className="font-sans text-xs md:text-sm text-charcoal/75 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Editorial Quote Banner */}
      <div className="about-quote-banner w-full bg-forest-green text-warm-ivory py-16 px-6 md:px-12 border-y border-brass-gold/30 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brass-gold/10 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-4">
            Agency Philosophy
          </span>
          <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl font-medium text-warm-ivory leading-[1.25]">
            “Empowering UAE Enterprises with <span className="italic font-normal text-brass-gold">Uncompromising Vision</span>, Strategic Precision, and Luxury Craftsmanship.”
          </blockquote>
          <span className="inline-block mt-8 font-sans text-xs uppercase tracking-widest text-brass-gold/80 font-semibold">
            Modern Media & Marketing Consulting FZC • Sharjah, UAE
          </span>
        </div>
      </div>
    </section>
  );
}
