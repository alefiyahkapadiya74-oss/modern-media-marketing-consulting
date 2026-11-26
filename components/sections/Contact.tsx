'use client';

import { useState, FormEvent } from 'react';
import Logo from '@/components/ui/Logo';

const availableServices = [
  'Marketing Consultancy',
  'Media Buying & Acquisition',
  'Brand Strategy & Identity',
  'Web Development & Engineering',
  'Social Media Consultancy',
  'Design Consultancy',
  'HR Consulting & Talent Strategy',
];

const engagementOptions = [
  'Project-Based Sprint',
  'Monthly Strategic Retainer',
  'Executive Diagnostic Audit',
  'Not Sure / Open to Recommendation',
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('Project-Based Sprint');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-warm-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-2">
            05 / Direct Consultation & Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
            Start Your Strategic Collaboration
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-charcoal/70 max-w-3xl font-light leading-relaxed mt-3">
            We invite UAE founders, executives, and business leaders to discuss project requirements, strategic growth initiatives, or bespoke advisory engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-brass-gold/25 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-14 h-14 rounded-full bg-forest-green text-brass-gold flex items-center justify-center mx-auto shadow-md">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-green">
                  Consultation Request Received
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal/75 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <span className="font-semibold text-forest-green">{fullName}</span>. Your project brief has been recorded. Our principal consultants will review your scope and get in touch within 24 business hours.
                </p>
                <div className="pt-3 border-t border-brass-gold/20 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:consulting@modernmedia.ae?subject=Consultation Inquiry from ${encodeURIComponent(
                      fullName || 'Website Visitor'
                    )}&body=${encodeURIComponent(
                      `Name: ${fullName}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${phone}\nServices: ${selectedServices.join(
                        ', '
                      )}\nModel: ${selectedModel}\n\nProject Scope:\n${projectBrief}`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-green text-warm-ivory font-sans text-xs uppercase tracking-wider font-semibold hover:bg-brass-gold transition-colors"
                  >
                    Open in Your Email Client &rarr;
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setCompanyName('');
                      setEmail('');
                      setPhone('');
                      setProjectBrief('');
                      setSelectedServices([]);
                    }}
                    className="text-xs font-mono text-charcoal/60 hover:text-forest-green transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-green mb-1.5">
                    Request an Introductory Consultation
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal/65 font-light">
                    Select the service domains you require and share a brief overview of your business goals.
                  </p>
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-forest-green font-semibold mb-2">
                    1. Select Service Domains of Interest:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-forest-green text-warm-ivory border border-forest-green shadow-sm'
                              : 'bg-warm-ivory/60 text-charcoal/80 border border-brass-gold/30 hover:border-forest-green'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Engagement Model */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-forest-green font-semibold mb-2">
                    2. Preferred Engagement Structure:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {engagementOptions.map((model) => (
                      <button
                        key={model}
                        type="button"
                        onClick={() => setSelectedModel(model)}
                        className={`px-3 py-2 rounded-xl text-xs font-sans text-left transition-all cursor-pointer ${
                          selectedModel === model
                            ? 'bg-brass-gold/20 border-2 border-brass-gold text-forest-green font-semibold'
                            : 'bg-warm-ivory/40 border border-brass-gold/25 text-charcoal/70 hover:bg-warm-ivory'
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-forest-green font-semibold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Hashimi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brass-gold/30 bg-warm-ivory/30 focus:bg-white focus:outline-none focus:border-forest-green font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-forest-green font-semibold mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al Hashimi Holdings"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brass-gold/30 bg-warm-ivory/30 focus:bg-white focus:outline-none focus:border-forest-green font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-forest-green font-semibold mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.ae"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brass-gold/30 bg-warm-ivory/30 focus:bg-white focus:outline-none focus:border-forest-green font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-forest-green font-semibold mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brass-gold/30 bg-warm-ivory/30 focus:bg-white focus:outline-none focus:border-forest-green font-sans text-sm"
                    />
                  </div>
                </div>

                {/* Project Scope Description */}
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-forest-green font-semibold mb-1.5">
                    Project Scope & Key Objectives
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your company's immediate objectives, desired launch timeline, and any specific requirements..."
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brass-gold/30 bg-warm-ivory/30 focus:bg-white focus:outline-none focus:border-forest-green font-sans text-sm"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-forest-green text-warm-ivory hover:bg-brass-gold hover:text-white font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-md cursor-pointer"
                  >
                    Submit Consultation Request &rarr;
                  </button>
                  <span className="block mt-2 text-[11px] text-charcoal/50 font-sans">
                    All inquiries are covered by mutual confidentiality and non-disclosure standards.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Headquarters, Business Hub & Official Base */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-forest-green text-warm-ivory rounded-3xl p-6 sm:p-8 border border-brass-gold/30 shadow-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brass-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3.5 border-b border-brass-gold/20 pb-4">
                <Logo size="md" variant="light" />
              </div>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-warm-ivory/85 font-light">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brass-gold/15 border border-brass-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brass-gold block mb-0.5">
                      Corporate Free Zone Base
                    </span>
                    <span>
                      Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brass-gold/15 border border-brass-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brass-gold block mb-0.5">
                      General Correspondence
                    </span>
                    <a
                      href="mailto:consulting@modernmedia.ae"
                      className="hover:text-brass-gold font-mono transition-colors text-xs"
                    >
                      consulting@modernmedia.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brass-gold/15 border border-brass-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-brass-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-brass-gold block mb-0.5">
                      Consultancy Hours
                    </span>
                    <span className="text-xs">
                      Monday – Friday: 9:00 AM – 6:00 PM GST
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Partner Note */}
              <div className="pt-4 border-t border-brass-gold/20">
                <span className="font-mono text-[11px] text-brass-gold uppercase tracking-wider font-semibold block mb-1">
                  Direct Principal Access
                </span>
                <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light">
                  Every engagement is assessed and led directly by our principal strategists. We maintain selective client intake to guarantee undivided attention for each partner.
                </p>
              </div>
            </div>

            {/* Free Zone Strategic Advantage Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brass-gold/20 shadow-sm space-y-3">
              <span className="font-mono text-[11px] text-brass-gold uppercase tracking-wider font-semibold block">
                Regional UAE Jurisdiction
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-forest-green">
                Sharjah Publishing City Free Zone
              </h4>
              <p className="font-sans text-xs sm:text-sm text-charcoal/75 leading-relaxed font-light">
                Positioned strategically within the UAE’s premier creative and publishing free trade zone, we provide cross-emirate strategic support across Sharjah, Dubai, Abu Dhabi, and the broader GCC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
