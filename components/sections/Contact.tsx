'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-warm-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-3">
            06 / Business Presence & Collaboration
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
            Corporate Presence & Future Collaboration
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-2xl font-light leading-relaxed mt-6">
            Headquartered in Sharjah Publishing City Free Zone, Modern Media & Marketing Consulting FZC is expanding its regional enterprise partnerships across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Coming Soon Portal & Corporate Vision */}
          <div className="lg:col-span-7 bg-forest-green text-warm-ivory rounded-3xl p-8 sm:p-12 border border-brass-gold/30 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brass-gold/10 blur-3xl pointer-events-none" />

            <div>
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brass-gold/40 bg-brass-gold/15 text-brass-gold text-xs tracking-widest uppercase font-semibold mb-8">
                <span className="w-2 h-2 rounded-full bg-brass-gold animate-pulse" />
                Client Intake Portal • Opening Q4 2026
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-warm-ivory mb-6 leading-snug">
                Pioneering the Next Era of UAE Media & Marketing Consultancy
              </h3>

              <p className="font-sans text-sm md:text-base text-warm-ivory/80 font-light leading-relaxed mb-8">
                As our agency expands its portfolio of regional corporate clients, our full strategic onboarding portal and direct digital intake suite are currently under development for a Q4 2026 rollout.
              </p>

              <div className="p-6 rounded-2xl bg-white/5 border border-brass-gold/20 backdrop-blur-sm space-y-2">
                <span className="font-mono text-xs text-brass-gold uppercase tracking-wider font-semibold block">
                  Future Enterprise Collaboration
                </span>
                <p className="font-sans text-xs md:text-sm text-warm-ivory/70 font-light leading-relaxed">
                  For institutional inquiries and executive engagements, our senior partners are reachable via official corporate correspondence below.
                </p>
              </div>
            </div>

            {/* Direct Email Channel */}
            <div className="pt-8 border-t border-brass-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-xs">
              <span className="text-warm-ivory/60 uppercase tracking-widest font-mono">
                Official Corporate Email
              </span>
              <a
                href="mailto:info@modernmedia.ae"
                className="font-mono text-sm text-brass-gold hover:text-white font-semibold transition-colors"
              >
                info@modernmedia.ae &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Location Hub & Interactive Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-brass-gold/20 shadow-xl space-y-6">
              <div className="flex items-center gap-3.5 border-b border-brass-gold/20 pb-5">
                <div className="w-10 h-10 rounded-xl border border-brass-gold bg-brass-gold/10 flex items-center justify-center text-brass-gold font-serif font-bold text-lg">
                  M&M
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-forest-green">
                    Headquarters
                  </h4>
                  <span className="font-sans text-xs text-brass-gold uppercase tracking-wider font-medium">
                    Sharjah Publishing City Free Zone
                  </span>
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm text-charcoal/80 font-light">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brass-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    Modern Media & Marketing Consulting FZC, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brass-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+97160000000" className="hover:text-brass-gold font-mono transition-colors">
                    +971 6 000 0000
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <svg className="w-5 h-5 text-brass-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-charcoal/60">
                    Monday – Friday: 9:00 AM – 6:00 PM GST
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Google Maps Embed Container */}
            <div className="bg-white rounded-3xl p-3 border border-brass-gold/20 shadow-lg overflow-hidden h-64">
              <iframe
                title="Sharjah Publishing City Free Zone Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.845561386121!2d55.4578148!3d25.3094468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4cd6cf059d%3A0x6b80bc9b3a0dfa3a!2sSharjah%20Publishing%20City%20Free%20Zone!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
