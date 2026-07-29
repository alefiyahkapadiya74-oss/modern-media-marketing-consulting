'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-28 bg-forest-green text-warm-ivory relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brass-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-warm-ivory/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-3">
            05 / Executive Endorsements
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-warm-ivory max-w-3xl leading-[1.15]">
            Trusted by Premier UAE Industry Leaders
          </h2>
        </div>

        {/* Testimonial Carousel Card Container */}
        <div className="max-w-4xl mx-auto bg-warm-ivory/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-16 border border-brass-gold/30 shadow-2xl relative">
          {/* Rating Stars */}
          <div className="flex items-center gap-1 text-brass-gold mb-8">
            {[...Array(current.rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote Typography */}
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-ivory font-medium leading-[1.3] mb-10 transition-all duration-500">
            “{current.quote}”
          </blockquote>

          {/* Executive Profile Footer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-brass-gold/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-brass-gold bg-brass-gold/20 flex items-center justify-center text-brass-gold font-serif font-bold text-lg">
                {current.avatarInitial}
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-warm-ivory">
                  {current.author}
                </span>
                <span className="font-sans text-xs text-brass-gold font-medium">
                  {current.role} • {current.company}
                </span>
                <span className="font-sans text-[11px] text-warm-ivory/60">
                  {current.industry}
                </span>
              </div>
            </div>

            {/* Manual Controls & Pagination */}
            <div className="flex items-center gap-4 self-end sm:self-center">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-11 h-11 rounded-full border border-brass-gold/40 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-2 font-mono text-xs text-brass-gold font-semibold">
                <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="text-warm-ivory/40">/</span>
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-11 h-11 rounded-full border border-brass-gold/40 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-all duration-300 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
