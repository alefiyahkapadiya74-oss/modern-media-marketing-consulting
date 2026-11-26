'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 'welcome',
    sender: 'ai',
    text: 'Marhaba! I am AIctor, the strategic advisory assistant for Modern Media & Marketing Consulting FZC. How may I assist you with our specialized consultancy services, our delivery methodology, or booking a consultation at our Sharjah Publishing City Free Zone office?',
    timestamp: 'Just now',
  },
];

const quickPrompts = [
  'What consultancy services do you provide?',
  'How do you deliver each service?',
  'What are your engagement models?',
  'Why choose Modern Media?',
  'Where is your headquarters located?',
];

export default function AIctorAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateAIResponse = (userText: string): string => {
    const lower = userText.toLowerCase();

    if (lower.includes('service') || lower.includes('offer') || lower.includes('what do you do') || lower.includes('provide')) {
      return 'Modern Media & Marketing Consulting FZC provides 7 specialized consultancy domains:\n\n1. Marketing Consultancy (GTM strategies, competitor benchmarks & ROI attribution)\n2. Media Buying & Acquisition (Paid search, programmatic & premium UAE outdoor)\n3. Brand Strategy & Identity (Editorial brand architecture, logos & corporate manuals)\n4. Web Development & Engineering (Custom Next.js, TypeScript & smooth scroll platforms)\n5. Social Media Consultancy (Executive thought leadership & content frameworks)\n6. Design Consultancy (Art direction, UI/UX audits & pitch deck design)\n7. HR Consulting & Talent Strategy (Role architecture, executive search & UAE labor guidance)\n\nYou can click any service card in our Services section to review full deliverables and execution steps!';
    }

    if (lower.includes('deliver') || lower.includes('methodology') || lower.includes('process') || lower.includes('how do you work') || lower.includes('step')) {
      return 'Our delivery framework is structured into 6 disciplined phases:\n\n1. Discovery & Vision Alignment — Mapping commercial targets and UAE market context\n2. Market Intelligence & Competitor Audit — Local competitive benchmarking across Sharjah, Dubai & Abu Dhabi\n3. Strategy & Blueprint Formulation — Defining visual systems, media mix, and technical architectures\n4. Precision Execution — Bespoke creative production and Next.js engineering\n5. Real-Time Optimization — Data attribution and iterative tuning\n6. Scalable Growth & Advisory — Ongoing support and milestone reviews';
    }

    if (lower.includes('model') || lower.includes('partner') || lower.includes('engagement') || lower.includes('pricing') || lower.includes('cost')) {
      return 'We offer 3 transparent ways to partner with us:\n\n• Project-Based Sprints: Defined scope, clear timeline, and fixed milestone pricing (perfect for brand launches, web development, or marketing blueprints).\n• Dedicated Monthly Retainers: Ongoing monthly strategic advisory, performance media management, or content leadership with direct senior access.\n• Executive Diagnostic Audits: A 2-week intensive review of your existing marketing, digital systems, or talent structure with an actionable remediation roadmap.';
    }

    if (lower.includes('why') || lower.includes('advantage') || lower.includes('new') || lower.includes('benefit')) {
      return 'Why clients choose Modern Media & Marketing Consulting FZC:\n\n• Direct Senior Leadership: You collaborate directly with principal consultants, never junior account managers.\n• 100% Bespoke Execution: We build custom architectures with zero boilerplate templates or shortcuts.\n• Strict Confidentiality: Every project is protected under comprehensive mutual NDAs.\n• Sharjah Free Zone Base: Deep regional familiarity combined with international design and engineering standards.';
    }

    if (lower.includes('where') || lower.includes('location') || lower.includes('sharjah') || lower.includes('address') || lower.includes('headquarter') || lower.includes('office')) {
      return 'Our corporate base is located at:\n\nSharjah Publishing City Free Zone, Sharjah, United Arab Emirates.\n\nWe provide strategic marketing and consultancy services for businesses across Sharjah, Dubai, Abu Dhabi, and the wider GCC region.';
    }

    if (lower.includes('contact') || lower.includes('consultation') || lower.includes('call') || lower.includes('email') || lower.includes('meeting') || lower.includes('book')) {
      return 'To request an introductory consultation, you can:\n\n1. Complete the Consultation Request Form in our Contact section below, selecting the specific service domains you require.\n2. Email our executive team directly at: consulting@modernmedia.ae\n\nOur senior partners review all briefs and respond within 24 business hours.';
    }

    return 'Thank you for your inquiry. Modern Media & Marketing Consulting FZC is a dedicated creative and business consultancy based in Sharjah Publishing City Free Zone, UAE. We provide marketing consultancy, media buying, brand strategy, bespoke web engineering, social media direction, design advisory, and HR talent consulting. How can we support your business goals?';
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAIResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Circular Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-forest-green text-warm-ivory border border-brass-gold shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          aria-label="Open AIctor Strategic Assistant"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-brass-gold animate-pulse" />
          <span className="font-serif font-bold text-sm tracking-wide text-brass-gold group-hover:text-white transition-colors">
            AIctor
          </span>
          <span className="hidden sm:inline font-sans text-xs text-warm-ivory/80 font-light border-l border-brass-gold/30 pl-3">
            Ask about Services & Methodology
          </span>
        </button>
      )}

      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[420px] h-[550px] max-h-[85vh] bg-forest-green text-warm-ivory rounded-3xl shadow-2xl border border-brass-gold/40 flex flex-col justify-between overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Top Panel Header */}
          <div className="p-4 sm:p-5 border-b border-brass-gold/20 flex items-center justify-between bg-black/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brass-gold/20 border border-brass-gold flex items-center justify-center text-brass-gold font-serif font-bold text-xs">
                AI
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-warm-ivory flex items-center gap-2">
                  AIctor
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brass-gold/20 text-brass-gold uppercase font-semibold">
                    Advisory
                  </span>
                </h4>
                <span className="text-[11px] font-sans text-warm-ivory/60 block">
                  Modern Media Consulting Assistant
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full border border-brass-gold/30 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-all cursor-pointer"
              aria-label="Close Assistant"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages Body */}
          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm font-sans leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-brass-gold text-forest-green font-medium'
                      : 'bg-white/10 text-warm-ivory border border-brass-gold/20 font-light'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] font-mono text-warm-ivory/40 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white/10 border border-brass-gold/20 w-16">
                <span className="w-1.5 h-1.5 rounded-full bg-brass-gold animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-brass-gold animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-brass-gold animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
          </div>

          {/* Quick Question Prompts Strip */}
          <div className="px-4 py-2 border-t border-brass-gold/15 bg-black/10 overflow-x-auto flex items-center gap-2 no-scrollbar">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-sans bg-white/5 border border-brass-gold/20 text-brass-gold hover:bg-brass-gold hover:text-forest-green transition-all cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form Box */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-brass-gold/20 bg-black/20 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask about our services or process..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="flex-1 bg-white/5 border border-brass-gold/30 rounded-xl px-3.5 py-2.5 text-xs text-warm-ivory placeholder-warm-ivory/40 focus:outline-none focus:border-brass-gold font-sans"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-xl bg-brass-gold text-forest-green flex items-center justify-center hover:bg-warm-ivory transition-colors cursor-pointer shrink-0 font-bold"
              aria-label="Send query"
            >
              &uarr;
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
