'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects, Project } from '@/data/projects';
import CaseStudyModal from '@/components/portfolio/CaseStudyModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const categories = ['All Work', 'Brand Strategy', 'Web Development', 'Media Buying'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredProjects =
    activeCategory === 'All Work'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  useGSAP(
    () => {
      gsap.from('.portfolio-bento-card', {
        scrollTrigger: {
          trigger: '.portfolio-bento-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <section ref={containerRef} id="portfolio" className="py-28 bg-warm-ivory text-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-start mb-16">
            <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-3">
              04 / Featured Portfolio
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
              Showcasing Luxury Regional & International Work
            </h2>
            <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-2xl font-light leading-relaxed mt-6">
              Explore how we elevate high-profile enterprises across real estate, wealth management, luxury hospitality, and tech sectors.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 mb-16 border-b border-brass-gold/20 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-sans font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-forest-green text-warm-ivory shadow-md'
                    : 'bg-white text-charcoal/70 hover:bg-brass-gold/10 hover:text-forest-green border border-brass-gold/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Asymmetrical Bento Portfolio Grid */}
          <div className="portfolio-bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isLarge = index % 3 === 0;

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`portfolio-bento-card relative rounded-2xl overflow-hidden shadow-lg border border-brass-gold/20 cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:border-brass-gold min-h-[380px] flex flex-col justify-between p-8 text-warm-ivory bg-gradient-to-br ${
                    project.gradientBg
                  } ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
                >
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between relative z-10">
                    <span className="font-mono text-xs text-brass-gold tracking-widest uppercase font-semibold px-3 py-1 rounded-full bg-black/30 border border-brass-gold/30">
                      {project.category}
                    </span>
                    <span className="font-sans text-xs text-warm-ivory/60 font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="relative z-10 mt-auto pt-16">
                    <span className="font-sans text-xs uppercase tracking-widest text-brass-gold block mb-2 font-medium">
                      {project.client} • {project.industry}
                    </span>

                    <h3 className="font-serif text-2xl md:text-4xl font-bold text-warm-ivory mb-4 group-hover:text-brass-gold transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* ROI Highlight Badge */}
                    <div className="pt-4 border-t border-warm-ivory/15 flex items-center justify-between">
                      <span className="font-mono text-xs text-brass-gold font-bold">
                        {project.metrics[0].label}: {project.metrics[0].value}
                      </span>
                      <span className="font-sans text-xs text-warm-ivory/80 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View Case Study &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fullscreen Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
