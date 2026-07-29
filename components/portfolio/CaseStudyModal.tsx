'use client';

import { useEffect } from 'react';
import { Project } from '@/data/projects';
import Button from '@/components/ui/Button';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-forest-green text-warm-ivory overflow-y-auto p-6 md:p-12 animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto flex flex-col justify-between min-h-full">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-brass-gold/20 pb-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-brass-gold tracking-widest uppercase font-semibold">
              Case Study • {project.category}
            </span>
            <span className="text-warm-ivory/40">•</span>
            <span className="font-sans text-xs text-warm-ivory/70">{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Case Study"
            className="w-11 h-11 rounded-full border border-brass-gold/40 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Hero Title & Client */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2 font-semibold">
            {project.client} • {project.industry}
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-warm-ivory mb-4">
            {project.title}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brass-gold font-light leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Quantitative Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 p-8 rounded-2xl bg-white/5 border border-brass-gold/30">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-serif text-3xl md:text-5xl font-bold text-brass-gold mb-2">
                {metric.value}
              </span>
              <span className="font-sans text-xs uppercase tracking-wider text-warm-ivory/80 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Strategy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-brass-gold border-b border-brass-gold/20 pb-3">
              The Client Challenge
            </h3>
            <p className="font-sans text-base text-warm-ivory/85 leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-brass-gold border-b border-brass-gold/20 pb-3">
              Agency Strategy & Execution
            </h3>
            <p className="font-sans text-base text-warm-ivory/85 leading-relaxed font-light">
              {project.strategy}
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-8 border-t border-brass-gold/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Button href="#contact" variant="secondary" onClick={onClose}>
            Request Similar Case Study Blueprint
          </Button>

          <span className="font-sans text-xs text-warm-ivory/60 uppercase tracking-widest font-mono">
            Modern Media & Marketing Consulting FZC • Sharjah, UAE
          </span>
        </div>
      </div>
    </div>
  );
}
