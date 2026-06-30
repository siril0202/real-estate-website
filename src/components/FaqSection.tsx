import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { faqs } from '../data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
              Informed Investment
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="font-sans text-gray-400 font-light text-base">
            Expert clarifications regarding premium land acquisitions, mother deed security verification, and transacting high-value real estate in Tamil Nadu.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0d1527]/60 backdrop-blur-md border border-white/5 hover:border-[#D4AF37]/20 rounded-md overflow-hidden transition-colors duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-white pr-4 flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#D4AF37] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37]/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-300 font-sans text-xs sm:text-sm font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra Help Call */}
        <div className="text-center mt-12 bg-white/5 p-6 rounded-sm border border-white/5 max-w-lg mx-auto">
          <p className="font-sans text-xs text-gray-400">
            Have a custom legal query about a specific land parcel survey number in Madurai?
          </p>
          <a
            href="#contact"
            className="text-xs text-[#D4AF37] hover:underline font-semibold tracking-wider uppercase mt-1.5 inline-block cursor-pointer"
          >
            Ask our Legal Representative Directly
          </a>
        </div>

      </div>
    </section>
  );
}
