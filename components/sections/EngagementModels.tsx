'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const models = [
  {
    num: '01',
    title: 'Project-Based Engagements',
    tagline: 'Defined Scope & Fixed Milestones',
    description:
      'Ideal for companies with a specific, well-defined objective. We establish clear timelines, agreed milestones, and deliver turnkey solutions with zero scope ambiguity.',
    idealFor:
      'Brand Identity Launches, Custom Web Development, Go-To-Market Strategy Blueprints, and Organizational Role Architecture.',
    deliverableType: 'Comprehensive Project Package with Milestone Sign-offs',
    benefits: [
      'Fixed pricing with zero unexpected billable hours',
      'Dedicated project timeline with weekly milestone updates',
      'Complete ownership and transfer of all source files & assets',
    ],
  },
  {
    num: '02',
    title: 'Dedicated Monthly Retainers',
    tagline: 'Continuous Senior Strategic Advisory',
    description:
      'For expanding enterprises that require ongoing strategic guidance, performance media management, and continuous creative direction month after month.',
    idealFor:
      'Performance Media Buying & Optimization, Executive Social Media & Content Direction, and Ongoing HR Talent Advisory.',
    deliverableType: 'Dedicated Monthly Hours, Priority Turnaround & Bi-Weekly Reviews',
    benefits: [
      'Guaranteed priority availability of our principal consultants',
      'Continuous algorithmic and creative campaign optimization',
      'Seamless extension of your internal executive leadership team',
    ],
  },
  {
    num: '03',
    title: 'Executive Audits & Advisory',
    tagline: 'Diagnostic Review & Strategic Roadmap',
    description:
      'A high-intensity diagnostic evaluation of your company’s current marketing performance, web architecture, brand positioning, or talent structure.',
    idealFor:
      'Companies planning major expansions, brands experiencing stagnant marketing returns, or firms seeking an independent expert audit.',
    deliverableType: 'In-Depth Diagnostic Report & Actionable Remediation Blueprint',
    benefits: [
      'Rapid 2-week turnaround with immediate strategic clarity',
      'Unbiased, data-backed evaluation of current inefficiencies',
      'Actionable recommendations your team can execute immediately',
    ],
  },
];

const commitments = [
  {
    title: 'Direct Senior Involvement',
    description:
      'You collaborate directly with principal consultants from day one. We never pass your brand to junior account coordinators.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: '100% Bespoke Craftsmanship',
    description:
      'Every strategy, brand manual, and web platform is crafted specifically for your business goals. Zero generic templates or recycled formulas.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Strict Non-Disclosure & IP Protection',
    description:
      'We back every partnership with rigorous mutual NDAs. Your proprietary business data, strategic plans, and assets remain 100% confidential.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Milestone-Based Transparency',
    description:
      'Structured reporting and clear deliverables at every step. You always know what is being worked on, what is coming next, and where your budget goes.',
    icon: (
      <svg className="w-5 h-5 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function EngagementModels() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from('.engagement-card', {
        scrollTrigger: {
          trigger: '.engagement-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 35,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="engagement" className="py-16 md:py-20 bg-forest-green text-warm-ivory relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brass-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-warm-ivory/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-2">
            04 / Flexible Partnerships & Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-warm-ivory max-w-3xl leading-[1.15]">
            How We Partner With You
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-warm-ivory/80 max-w-2xl font-light leading-relaxed mt-4">
            We adapt to how your business operates. Whether you need a focused sprint, an ongoing advisory retainer, or an intensive audit, our engagements are transparent, milestone-driven, and focused on tangible outcomes.
          </p>
        </div>

        {/* 3-Card Engagement Models Grid with Balanced Spacing */}
        <div className="engagement-grid grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-14 md:mb-16 items-stretch">
          {models.map((model) => (
            <div
              key={model.num}
              className="engagement-card bg-warm-ivory/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 md:p-8 border border-brass-gold/25 hover:border-brass-gold hover:bg-warm-ivory/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-brass-gold tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-brass-gold/15 border border-brass-gold/30">
                    Model {model.num}
                  </span>
                  <span className="font-serif font-bold text-2xl text-brass-gold/40 group-hover:text-brass-gold transition-colors">
                    {model.num}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-warm-ivory mb-1.5 group-hover:text-brass-gold transition-colors">
                  {model.title}
                </h3>

                <span className="font-sans text-xs uppercase tracking-wider text-brass-gold block mb-3 font-medium">
                  {model.tagline}
                </span>

                <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 leading-relaxed font-light mb-4">
                  {model.description}
                </p>

                <div className="space-y-3 pt-3.5 border-t border-brass-gold/20 mb-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brass-gold block mb-0.5">
                      Best Suited For:
                    </span>
                    <p className="font-sans text-xs text-warm-ivory/70 font-light leading-relaxed">
                      {model.idealFor}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brass-gold block mb-0.5">
                      Delivery Structure:
                    </span>
                    <p className="font-sans text-xs text-warm-ivory/70 font-light leading-relaxed">
                      {model.deliverableType}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-brass-gold block mb-1">
                    Key Advantages:
                  </span>
                  {model.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-warm-ivory/80 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-gold mt-1.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brass-gold/20 mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-brass-gold hover:text-white font-semibold transition-colors"
                >
                  Discuss this model &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Client Commitments Strip */}
        <div className="pt-10 md:pt-12 border-t border-brass-gold/30">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-1.5 block">
              Agency Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-warm-ivory">
              Our Commitments to Every Client
            </h3>
            <p className="font-sans text-xs sm:text-sm md:text-base text-warm-ivory/70 font-light mt-2">
              As a dedicated consultancy based in Sharjah Publishing City Free Zone, we hold ourselves to uncompromised professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-brass-gold/20 hover:border-brass-gold transition-colors space-y-2.5"
              >
                <div className="w-9 h-9 rounded-full bg-brass-gold/15 border border-brass-gold/30 flex items-center justify-center">
                  {c.icon}
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-warm-ivory">
                  {c.title}
                </h4>
                <p className="font-sans text-xs text-warm-ivory/75 font-light leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
