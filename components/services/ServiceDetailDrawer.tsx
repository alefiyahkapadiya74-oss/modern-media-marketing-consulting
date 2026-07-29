'use client';

import { useEffect } from 'react';
import { Service } from '@/data/services';
import Button from '@/components/ui/Button';

interface ServiceDetailDrawerProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailDrawer({ service, onClose }: ServiceDetailDrawerProps) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-forest-green/60 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Click Outside Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Drawer Card */}
      <div className="relative w-full max-w-2xl bg-forest-green text-warm-ivory h-full shadow-2xl overflow-y-auto p-8 md:p-12 border-l border-brass-gold/30 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-500">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between border-b border-brass-gold/20 pb-6 mb-8">
            <span className="font-mono text-xs text-brass-gold tracking-widest uppercase font-semibold">
              Service Overview • {service.num}
            </span>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-brass-gold/40 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-all duration-300"
              aria-label="Close Service Details"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-warm-ivory mb-2">
            {service.title}
          </h3>
          <p className="font-sans text-xs uppercase tracking-widest text-brass-gold mb-6 font-medium">
            {service.tagline}
          </p>

          {/* Detailed Narrative */}
          <p className="font-sans text-sm md:text-base text-warm-ivory/80 leading-relaxed font-light mb-10">
            {service.fullDescription}
          </p>

          {/* Deliverables List */}
          <div className="mb-10">
            <h4 className="font-serif text-xl font-bold text-brass-gold mb-4 border-b border-brass-gold/20 pb-2">
              Key Deliverables
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm text-warm-ivory/90 font-light">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass-gold mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Benefits */}
          <div className="mb-12">
            <h4 className="font-serif text-xl font-bold text-brass-gold mb-4 border-b border-brass-gold/20 pb-2">
              Strategic Outcomes
            </h4>
            <ul className="space-y-3 font-sans text-xs md:text-sm text-warm-ivory/90 font-light">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass-gold mt-2 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-brass-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            href="#contact"
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={onClose}
          >
            Inquire About This Service
          </Button>

          <span className="font-sans text-[11px] text-warm-ivory/60 uppercase tracking-widest font-mono">
            Sharjah Publishing City Free Zone • UAE
          </span>
        </div>
      </div>
    </div>
  );
}
