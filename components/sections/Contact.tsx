'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';

const serviceOptions = [
  'Marketing Consultancy',
  'Media Buying',
  'Brand Strategy',
  'Web Development',
  'Social Media',
  'Design Consultancy',
  'HR Consulting',
];

const budgetRanges = ['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('$25k - $50k');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid business email is required';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-warm-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <span className="text-xs uppercase tracking-widest text-brass-gold font-mono font-semibold mb-3">
            06 / Connect With Us
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-forest-green max-w-3xl leading-[1.15]">
            Start Your Strategic Consultation
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/70 max-w-2xl font-light leading-relaxed mt-6">
            Partner with Modern Media & Marketing Consulting FZC to elevate your brand presence across the UAE and GCC region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Full Strategic Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-brass-gold/20 shadow-xl">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-brass-gold/10 border border-brass-gold flex items-center justify-center text-brass-gold mx-auto">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl font-bold text-forest-green">
                  Inquiry Received
                </h3>
                <p className="font-sans text-sm md:text-base text-charcoal/75 font-light leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Modern Media & Marketing Consulting FZC. A Senior Managing Partner will review your brief and contact you within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full border border-brass-gold text-brass-gold font-sans text-xs uppercase tracking-wider font-semibold hover:bg-brass-gold hover:text-white transition-all duration-300"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal & Business Info Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-mono font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tariq Al-Mansoori"
                      className={`w-full px-5 py-3.5 rounded-xl border font-sans text-sm focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-brass-gold/30 focus:border-brass-gold focus:ring-1 focus:ring-brass-gold'
                      }`}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-mono font-semibold mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tariq@company.ae"
                      className={`w-full px-5 py-3.5 rounded-xl border font-sans text-sm focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-brass-gold/30 focus:border-brass-gold focus:ring-1 focus:ring-brass-gold'
                      }`}
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-mono font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full px-5 py-3.5 rounded-xl border border-brass-gold/30 font-sans text-sm focus:outline-none focus:border-brass-gold focus:ring-1 focus:ring-brass-gold transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-mono font-semibold mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Al Habtoor Real Estate"
                      className={`w-full px-5 py-3.5 rounded-xl border font-sans text-sm focus:outline-none transition-all ${
                        errors.company
                          ? 'border-red-500 bg-red-50/50'
                          : 'border-brass-gold/30 focus:border-brass-gold focus:ring-1 focus:ring-brass-gold'
                      }`}
                    />
                    {errors.company && <span className="text-red-500 text-xs mt-1 block">{errors.company}</span>}
                  </div>
                </div>

                {/* Service Selection Multi-Select Pills */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-mono font-semibold mb-3">
                    Services Needed (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {serviceOptions.map((service) => {
                      const selected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                            selected
                              ? 'bg-forest-green text-warm-ivory border border-forest-green shadow-sm'
                              : 'bg-warm-ivory/60 text-charcoal/70 border border-brass-gold/20 hover:border-brass-gold'
                          }`}
                        >
                          {selected && '✓ '}
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range Selector */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-mono font-semibold mb-3">
                    Estimated Project Budget (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {budgetRanges.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`py-3 px-3 rounded-xl text-xs font-mono font-semibold text-center transition-all ${
                          selectedBudget === budget
                            ? 'bg-brass-gold text-white shadow-md'
                            : 'bg-warm-ivory/60 text-charcoal/70 border border-brass-gold/20 hover:border-brass-gold'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details Text Area */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-charcoal/80 font-mono font-semibold mb-2">
                    Project Scope & Objectives
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your business goals, target timeline, and specific deliverables..."
                    className="w-full px-5 py-3.5 rounded-xl border border-brass-gold/30 font-sans text-sm focus:outline-none focus:border-brass-gold focus:ring-1 focus:ring-brass-gold transition-all"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-forest-green text-warm-ivory font-sans text-xs uppercase tracking-wider font-semibold hover:bg-brass-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Strategic Brief &rarr;
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Location Hub & Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters Card */}
            <div className="bg-forest-green text-warm-ivory rounded-3xl p-8 sm:p-10 border border-brass-gold/30 shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-brass-gold/20 pb-4">
                <div className="w-10 h-10 rounded-xl border border-brass-gold bg-brass-gold/20 flex items-center justify-center text-brass-gold font-serif font-bold text-lg">
                  M&M
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-warm-ivory">
                    Headquarters
                  </h3>
                  <span className="font-sans text-xs text-brass-gold uppercase tracking-wider font-medium">
                    Sharjah Publishing City Free Zone
                  </span>
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm font-light">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@modernmedia.ae" className="hover:text-brass-gold transition-colors">
                    info@modernmedia.ae
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-brass-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+97160000000" className="hover:text-brass-gold transition-colors">
                    +971 6 000 0000
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <svg className="w-5 h-5 text-brass-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-warm-ivory/70">
                    Monday – Friday: 9:00 AM – 6:00 PM GST
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-brass-gold/20 flex items-center justify-between">
                <a
                  href="https://wa.me/97160000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brass-gold hover:text-white transition-colors"
                >
                  <span>Chat Direct via WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

            {/* Interactive Google Maps Embed Container */}
            <div className="bg-white rounded-3xl p-3 border border-brass-gold/20 shadow-lg overflow-hidden h-72">
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
