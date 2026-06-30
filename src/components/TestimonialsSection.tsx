import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto scroll testimonials every 8 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/5 blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
              Trusted Accolades
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
            Client <span className="text-gradient-gold">Endorsements</span>
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-[#0d1527]/60 backdrop-blur-md border border-white/5 p-8 md:p-14 rounded-lg shadow-2xl relative overflow-hidden">
          
          {/* Subtle Golden top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-gold" />
          
          {/* Large Quote icon backdrop */}
          <Quote className="absolute right-12 top-10 w-24 h-24 text-white/5 rotate-180 pointer-events-none shrink-0" />

          {/* Carousel Slide Area */}
          <div className="min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Gold Rating Stars */}
                <div className="flex gap-1.5">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="font-serif text-lg md:text-xl text-gray-200 leading-relaxed font-medium italic">
                  "{active.comment}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <img
                    src={active.image}
                    alt={active.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover border border-[#D4AF37]/30 shadow"
                  />
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">{active.name}</h4>
                    <p className="font-sans text-xs text-[#D4AF37] font-medium">{active.role}</p>
                    <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{active.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
              {/* Pagination Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx ? 'bg-[#D4AF37] w-6' : 'bg-white/10'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-sm bg-white/5 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/30 text-white hover:text-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-sm bg-white/5 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/30 text-white hover:text-[#D4AF37] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
