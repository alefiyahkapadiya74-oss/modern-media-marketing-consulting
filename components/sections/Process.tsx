'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const steps = [
  {
    num: '01',
    title: 'Discovery & Vision Alignment',
    tagline: 'Step 01 / Phase One',
    description:
      'We conduct immersive stakeholder workshops to map business objectives, core brand identity, and growth milestones within the UAE market landscape.',
    deliverable: 'Strategic Vision Document & KPI Framework',
  },
  {
    num: '02',
    title: 'Market Research & Intelligence',
    tagline: 'Step 02 / Phase Two',
    description:
      'Comprehensive regional competitor benchmarking, target audience profiling, and high-value keyword/channel intelligence across the GCC.',
    deliverable: 'Market Intelligence Report & Audience Matrix',
  },
  {
    num: '03',
    title: 'Brand Strategy & Blueprint',
    tagline: 'Step 03 / Phase Three',
    description:
      'Architecting bespoke visual systems, media acquisition plans, and full-stack technical specifications designed for high market impact.',
    deliverable: 'Omnichannel Growth Blueprint & UX Architecture',
  },
  {
    num: '04',
    title: 'Precision Execution',
    tagline: 'Step 04 / Phase Four',
    description:
      'High-end creative production, Next.js web application engineering, and campaign deployment across programmatic media networks.',
    deliverable: 'Deployed Digital Assets & Live Campaign Suite',
  },
  {
    num: '05',
    title: 'Real-Time Optimization',
    tagline: 'Step 05 / Phase Five',
    description:
      'Continuous conversion rate optimization, A/B ad creative testing, and real-time media budget reallocation to maximize yield.',
    deliverable: 'Performance Analytics Dashboard & Tuning Logs',
  },
  {
    num: '06',
    title: 'Scalable Enterprise Growth',
    tagline: 'Step 06 / Phase Six',
    description:
      'Long-term retainer management, multi-channel scaling, employer branding, and executive quarterly growth reviews.',
    deliverable: 'Executive ROI Report & Expansion Roadmap',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Animate progress line fill based on scroll progress
      gsap.to('.process-progress-fill', {
        scrollTrigger: {
          trigger: '.process-steps-container',
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
        height: '100%',
        ease: 'none',
      });

      // Animate individual step cards on scroll
      gsap.utils.toArray<HTMLElement>('.process-step-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          opacity: 0,
          y: 35,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="process" className="py-16 md:py-20 bg-warm-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-2">
            03 / Our Methodology
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
            A Proven 6-Step Framework for Strategic Impact
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal/70 max-w-2xl font-light leading-relaxed mt-4">
            From initial discovery in Sharjah Free Zone to enterprise market dominance across the GCC, our disciplined workflow ensures measurable returns.
          </p>
        </div>

        {/* Vertical Split Layout with Pinned Line */}
        <div className="process-steps-container relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Pinned Intro Badge & Overview */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-4 hidden lg:block">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brass-gold/30 bg-brass-gold/10 text-brass-gold text-xs tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brass-gold animate-pulse" />
              Disciplined Agency Workflow
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest-green">
              Precision in Every Phase
            </h3>
            <p className="font-sans text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed">
              We eliminate guesswork with transparent milestones, rigorous quality assurance, and real-time reporting.
            </p>
          </div>

          {/* Right Column: 6 Methodology Steps with Vertical Progress Indicator */}
          <div className="lg:col-span-8 relative pl-5 md:pl-8">
            {/* Vertical Progress Bar Container */}
            <div className="absolute left-0 top-3 bottom-3 w-1 bg-brass-gold/20 rounded-full overflow-hidden">
              <div className="process-progress-fill w-full h-0 bg-brass-gold transition-all duration-100" />
            </div>

            {/* Step Cards List with Compact, Balanced Spacing */}
            <div className="space-y-4 sm:space-y-5">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="process-step-card bg-white rounded-2xl p-5 sm:p-7 md:p-8 border border-brass-gold/20 shadow-sm hover:border-brass-gold hover:shadow-xl transition-all duration-300 relative group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-brass-gold tracking-widest uppercase font-semibold">
                      {step.tagline}
                    </span>
                    <span className="font-serif font-bold text-2xl sm:text-3xl text-brass-gold/40 group-hover:text-brass-gold transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest-green mb-2 group-hover:text-brass-gold transition-colors">
                    {step.title}
                  </h4>

                  <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal/75 leading-relaxed font-light mb-4">
                    {step.description}
                  </p>

                  <div className="pt-3 border-t border-brass-gold/15 flex flex-col sm:flex-row sm:items-center justify-between font-sans text-xs gap-1">
                    <span className="text-charcoal/60">Key Deliverable:</span>
                    <span className="font-semibold text-forest-green font-mono">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
