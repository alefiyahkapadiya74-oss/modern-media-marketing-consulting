export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 text-center">
      {/* Decorative Brand Accent Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brass-gold/30 bg-brass-gold/5 text-brass-gold text-xs tracking-widest uppercase font-medium mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-brass-gold animate-pulse" />
        Sharjah Publishing City Free Zone • UAE
      </div>

      {/* Main Luxury Heading */}
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-forest-green max-w-5xl leading-[1.1] mb-6">
        Architecting <span className="italic font-normal text-brass-gold">Luxury</span> Digital Experiences
      </h1>

      {/* Subtitle */}
      <p className="font-sans text-lg md:text-xl text-charcoal/80 max-w-2xl font-light leading-relaxed mb-10">
        Modern Media & Marketing Consulting FZC — A premier UAE consultancy elevating brands through high-impact marketing, strategic branding, bespoke web development, and executive HR consulting.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#services"
          className="px-8 py-4 rounded-full bg-forest-green text-warm-ivory font-medium hover:bg-forest-green-dark transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Explore Our Suite
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-full border border-brass-gold text-brass-gold hover:bg-brass-gold hover:text-white font-medium transition-all duration-300"
        >
          Request Consultation
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-32 flex flex-col items-center gap-3 text-charcoal/40 text-xs tracking-widest uppercase font-sans">
        <span>Scroll To Explore</span>
        <div className="w-5 h-9 rounded-full border border-charcoal/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-brass-gold rounded-full animate-bounce" />
        </div>
      </div>

      {/* Test Scroll Section for Lenis Physics */}
      <section id="services" className="w-full max-w-4xl mt-48 py-24 border-t border-brass-gold/20 text-left">
        <span className="text-xs uppercase tracking-widest text-brass-gold font-mono block mb-2">Foundation Verification</span>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-forest-green mb-4">
          Lenis Inertia & Design Tokens Verified
        </h2>
        <p className="font-sans text-charcoal/70 leading-relaxed">
          This section confirms that Playfair Display headings, Inter body typography, Deep Forest Green (#234038), Brass Gold (#B88A44), and Lenis smooth scrolling are active and performing smoothly.
        </p>
      </section>
    </main>
  );
}
