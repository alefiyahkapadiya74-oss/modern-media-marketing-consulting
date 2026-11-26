'use client';

import { useEffect, useState } from 'react';
import { Service } from '@/data/services';

interface ServiceDetailDrawerProps {
  service: Service | null;
  onClose: () => void;
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export default function ServiceDetailDrawer({
  service,
  onClose,
  onSelectServiceForContact,
}: ServiceDetailDrawerProps) {
  const [activeTab, setActiveTab] = useState<'deliverables' | 'how' | 'value'>('deliverables');

  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
      setActiveTab('deliverables');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

  if (!service) return null;

  const handleInquire = () => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(service.title);
    }
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-forest-green/70 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Click Outside Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Drawer Container */}
      <div className="relative w-full max-w-2xl bg-forest-green text-warm-ivory h-full shadow-2xl overflow-y-auto p-6 sm:p-10 md:p-12 border-l border-brass-gold/30 flex flex-col justify-between z-10 animate-in slide-in-from-right duration-500">
        <div>
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-brass-gold/20 pb-5 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brass-gold/40 bg-brass-gold/15 text-brass-gold text-xs font-mono font-semibold tracking-widest uppercase">
              Domain {service.num}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-brass-gold/40 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Close Service Details"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Title & Tagline */}
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-warm-ivory mb-2">
            {service.title}
          </h3>
          <p className="font-sans text-xs uppercase tracking-widest text-brass-gold mb-6 font-medium">
            {service.tagline}
          </p>

          {/* Core Narrative */}
          <p className="font-sans text-sm sm:text-base text-warm-ivory/85 leading-relaxed font-light mb-8">
            {service.fullDescription}
          </p>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-brass-gold/20 mb-8">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-brass-gold block mb-1">
                Ideal For
              </span>
              <p className="font-sans text-xs text-warm-ivory/80 font-light leading-relaxed">
                {service.whoItsFor}
              </p>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-brass-gold block mb-1">
                Typical Timeline / Model
              </span>
              <p className="font-sans text-xs text-warm-ivory/80 font-light leading-relaxed">
                {service.timeline}
              </p>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 border-b border-brass-gold/20 pb-4 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab('deliverables')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
                activeTab === 'deliverables'
                  ? 'bg-brass-gold text-forest-green'
                  : 'text-warm-ivory/70 hover:text-white bg-white/5'
              }`}
            >
              Deliverables ({service.deliverables.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('how')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
                activeTab === 'how'
                  ? 'bg-brass-gold text-forest-green'
                  : 'text-warm-ivory/70 hover:text-white bg-white/5'
              }`}
            >
              How We Deliver ({service.executionSteps.length} Steps)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('value')}
              className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all cursor-pointer ${
                activeTab === 'value'
                  ? 'bg-brass-gold text-forest-green'
                  : 'text-warm-ivory/70 hover:text-white bg-white/5'
              }`}
            >
              Benefits & Tools
            </button>
          </div>

          {/* Tab 1: Deliverables */}
          {activeTab === 'deliverables' && (
            <div className="space-y-3 mb-8 animate-in fade-in duration-200">
              <h4 className="font-serif text-lg font-bold text-brass-gold mb-3">
                Included Deliverables:
              </h4>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-warm-ivory/90 font-light">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-brass-gold/15">
                    <span className="w-5 h-5 rounded-full bg-brass-gold/20 border border-brass-gold flex items-center justify-center text-brass-gold text-[10px] font-mono shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tab 2: How We Deliver */}
          {activeTab === 'how' && (
            <div className="space-y-4 mb-8 animate-in fade-in duration-200">
              <h4 className="font-serif text-lg font-bold text-brass-gold mb-3">
                Step-by-Step Execution Path:
              </h4>
              <div className="space-y-4">
                {service.executionSteps.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-brass-gold/15 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-brass-gold font-bold">
                        Step 0{idx + 1}
                      </span>
                      <span className="text-warm-ivory font-serif font-semibold text-sm">
                        • {item.step}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 font-light leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Benefits & Tools */}
          {activeTab === 'value' && (
            <div className="space-y-6 mb-8 animate-in fade-in duration-200">
              <div>
                <h4 className="font-serif text-lg font-bold text-brass-gold mb-3">
                  Strategic Commercial Value:
                </h4>
                <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-warm-ivory/85 font-light">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-brass-gold mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-brass-gold mb-3">
                  Frameworks & Tools Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.toolsAndFrameworks.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-brass-gold/15 border border-brass-gold/30 text-brass-gold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="pt-6 border-t border-brass-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <button
            type="button"
            onClick={handleInquire}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brass-gold text-forest-green hover:bg-warm-ivory font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-lg cursor-pointer"
          >
            Inquire About This Service &rarr;
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto font-sans text-xs text-warm-ivory/60 hover:text-white transition-colors cursor-pointer text-center"
          >
            Back to All Services
          </button>
        </div>
      </div>
    </div>
  );
}
