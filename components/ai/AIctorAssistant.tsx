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
    text: 'Marhaba! I am AIctor, the strategic AI assistant for Modern Media & Marketing Consulting FZC. How may I assist you with our executive services, regional methodology, or corporate base in Sharjah Publishing City Free Zone?',
    timestamp: 'Just now',
  },
];

const quickPrompts = [
  'What consultancy services do you offer?',
  'Explain your strategic methodology',
  'Where is your headquarters located?',
  'Which service is right for my brand?',
  'Tell me about your portfolio case studies',
];

export default function AIctorAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to latest chat message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateAIResponse = (userText: string): string => {
    const lower = userText.toLowerCase();

    if (lower.includes('service') || lower.includes('offer') || lower.includes('what do you do')) {
      return 'Modern Media & Marketing Consulting FZC offers a comprehensive suite of executive consultancy domains:\n\n• Marketing Consultancy & Growth Architecture\n• Performance Media Buying & Acquisition\n• Brand Strategy & Corporate Identity\n• Bespoke Web Development & Engineering\n• Social Media Consultancy & Reputation\n• Design Consultancy & Visual Identity\n• Executive HR Consulting & Organizational Strategy\n\nClick any service card in our Services section to explore our detailed executive scope!';
    }

    if (lower.includes('methodology') || lower.includes('process') || lower.includes('step')) {
      return 'Our strategic methodology guarantees analytical rigor and seamless execution:\n\n• Discovery & Vision Alignment\n• Market Intelligence & Competitor Audit\n• Brand Strategy & Architecture\n• Bespoke Digital & Media Execution\n• Continuous Optimization & Intelligence\n• Scalable Regional Enterprise Growth';
    }

    if (lower.includes('where') || lower.includes('location') || lower.includes('sharjah') || lower.includes('address') || lower.includes('headquarter')) {
      return 'Our official agency headquarters is located at:\n\nSharjah Publishing City Free Zone, Sharjah, United Arab Emirates.\n\nWe serve clients across Dubai, Sharjah, Abu Dhabi, and the broader GCC region!';
    }

    if (lower.includes('portfolio') || lower.includes('work') || lower.includes('case study') || lower.includes('client')) {
      return 'We partner with leading regional enterprises across Real Estate, Wealth Management, Hospitality, Retail, and Healthcare. Highlights include:\n\n• Al Habtoor Real Estate ($350M+ Sales Pipeline)\n• Apex Capital UAE (+240% Investor Inquiries)\n• Aura Hospitality (+310% VIP Reservations)\n\nView our full portfolio grid in the Work section!';
    }

    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('touch')) {
      return 'You can reach our senior executive team directly at:\n\n• Email: info@modernmedia.ae\n• Direct Phone: +971 6 000 0000\n• Base: Sharjah Publishing City Free Zone, UAE\n\nOur full online client intake portal launches in Q4 2026!';
    }

    if (lower.includes('right for my') || lower.includes('suggest') || lower.includes('recommend')) {
      return 'If you are looking to scale online lead acquisition, we recommend our combined Media Buying & Web Development suite. If you are launching a new enterprise in the UAE, our Brand Strategy & HR Consulting packages ensure complete market readiness!';
    }

    return `Thank you for asking about "${userText}". Modern Media & Marketing Consulting FZC is dedicated to architecting high-impact digital experiences and growth strategies for GCC enterprises. Explore our sections above or ask about our services, process, or headquarters!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    // Simulate realistic AI thought/typing delay
    setTimeout(() => {
      const aiReply = generateAIResponse(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <>
      {/* Floating Trigger Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-3 px-5 py-3 rounded-full bg-forest-green text-warm-ivory border border-brass-gold/40 shadow-2xl hover:bg-forest-green-dark transition-all duration-300 hover:scale-105 cursor-pointer"
          aria-label="Toggle AIctor Assistant"
        >
          {/* Animated Pulse Ring */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brass-gold" />
          </span>

          <span className="font-serif font-bold text-sm tracking-wide text-brass-gold">
            AIctor
          </span>
          <span className="hidden sm:inline-block font-sans text-xs font-light text-warm-ivory/80">
            • AI Assistant
          </span>
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[90vw] sm:w-[420px] max-h-[600px] bg-forest-green/95 text-warm-ivory rounded-3xl border border-brass-gold/40 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-5 border-b border-brass-gold/20 bg-forest-green flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-brass-gold bg-brass-gold/20 flex items-center justify-center text-brass-gold font-serif font-bold text-xs">
                AI
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-sm text-warm-ivory">
                  AIctor Strategic Assistant
                </span>
                <span className="font-sans text-[10px] text-brass-gold uppercase tracking-wider font-medium">
                  Modern Media & Marketing FZC
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full border border-brass-gold/30 flex items-center justify-center text-brass-gold hover:bg-brass-gold hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Display */}
          <div
            ref={chatContainerRef}
            className="p-5 overflow-y-auto max-h-[360px] space-y-4 font-sans text-xs sm:text-sm font-light leading-relaxed"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-4 rounded-2xl max-w-[85%] whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-brass-gold text-white rounded-br-none shadow-md'
                      : 'bg-warm-ivory/10 text-warm-ivory border border-brass-gold/20 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-warm-ivory/40 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 p-3 bg-warm-ivory/10 rounded-2xl w-fit border border-brass-gold/20">
                <span className="w-2 h-2 rounded-full bg-brass-gold animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-brass-gold animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-brass-gold animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-5 py-2 flex flex-wrap gap-1.5 border-t border-brass-gold/15 bg-forest-green-dark/40">
            {quickPrompts.slice(0, 3).map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(prompt)}
                className="text-[11px] font-sans px-3 py-1 rounded-full bg-brass-gold/10 border border-brass-gold/30 text-brass-gold hover:bg-brass-gold hover:text-white transition-all text-left truncate max-w-full"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-brass-gold/20 bg-forest-green flex items-center gap-2">
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask AIctor anything about our agency..."
              className="flex-1 bg-warm-ivory/10 border border-brass-gold/30 rounded-xl px-4 py-2.5 text-xs text-warm-ivory placeholder-warm-ivory/40 focus:outline-none focus:border-brass-gold transition-all"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-brass-gold text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-brass-gold-dark transition-all shrink-0"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
