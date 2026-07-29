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
  },
  {
    title: 'Vision',
    subtitle: 'Global Excellence',
    description:
      'Setting the regional benchmark for Awwwards-grade design engineering, editorial storytelling, and sustainable business scalability.',
  },
  {
    title: 'Core Values',
    subtitle: 'Uncompromising Quality',
    description:
      'Rooted in creative mastery, strategic rigor, transparent collaboration, and absolute dedication to measurable return on investment.',
  },
];

const features = [
  {
    num: '01',
    title: 'Strategic Excellence',
    description:
      'Every campaign and platform is engineered from rigorous market intelligence tailored to high-growth regional sectors.',
  },
  {
    num: '02',
    title: 'UAE Market Mastery',
    description:
      'Deep expertise across Sharjah Free Zone, Dubai corporate hubs, and mainland regulatory landscapes.',
  },
  {
    num: '03',
    title: 'Bespoke Craftsmanship',
    description:
      'Zero reliance on generic templates. We build custom editorial visual systems that command market authority.',
  },
  {
    num: '04',
    title: 'ROI-Driven Execution',
    description:
      'Precision media buying and web optimization focused directly on client acquisition, brand equity, and revenue growth.',
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from('.about-pillar-card', {
        scrollTrigger: {
          trigger: '.about-pillars-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.about-feature-card', {
        scrollTrigger: {
          trigger: '.about-features-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="about" className="relative py-28 bg-warm-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-3">
            01 / Company Narrative
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
            Bridging Creative Mastery & Business Growth in the UAE
          </h2>
        </div>

        {/* Company Origin & Base Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
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
        <div className="about-pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="about-pillar-card bg-white rounded-2xl p-8 md:p-10 shadow-sm border-t-2 border-brass-gold hover:shadow-xl transition-all duration-300 group"
            >
              <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2 font-semibold">
                {pillar.subtitle}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest-green mb-4 group-hover:text-brass-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-charcoal/75 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* "Why Choose Us" 4-Pillar Metric Grid */}
        <div className="mb-24">
          <div className="flex flex-col items-start mb-12">
            <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-2">
              Competitive Advantage
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-forest-green">
              Why Leaders Choose Modern Media
            </h3>
          </div>

          <div className="about-features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="about-feature-card bg-white/60 backdrop-blur-sm border border-brass-gold/20 rounded-xl p-6 md:p-8 hover:bg-white hover:border-brass-gold transition-all duration-300"
              >
                <span className="font-mono text-xs text-brass-gold tracking-widest uppercase block mb-3 font-semibold">
                  {feature.num}
                </span>
                <h4 className="font-serif text-xl font-bold text-forest-green mb-3">
                  {feature.title}
                </h4>
                <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Editorial Quote Banner */}
      <div className="w-full bg-forest-green text-warm-ivory py-20 px-6 md:px-12 mt-12 border-y border-brass-gold/30 relative overflow-hidden">
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
