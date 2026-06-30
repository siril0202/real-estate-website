import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Compass, Sparkles, PhoneCall, Check, Send } from 'lucide-react';

interface HeroProps {
  onBrowseProperties: () => void;
  onScheduleConsultation: () => void;
}

export default function Hero({ onBrowseProperties, onScheduleConsultation }: HeroProps) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setInquiryName('');
      setInquiryPhone('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#050b18]">
        {/* Cinematic property looping video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105"
          poster="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-luxury-home-with-swimming-pool-42250-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Luxury gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-[#050b18]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b18]/80 via-transparent to-[#050b18]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 lg:py-24">
        {/* Left column: Headings */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-xs tracking-widest text-[#F3E5AB] uppercase font-semibold">
              The Epitome of Madurai Living
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Find Your <br />
            <span className="text-gradient-gold">Dream Property</span> <br />
            In Madurai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-gray-300 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-8"
          >
            Premium residential and commercial properties carefully selected for modern living and investment opportunities. Explore elite villas, penthouses, and lands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-browse-btn"
              onClick={onBrowseProperties}
              className="group flex items-center justify-center gap-3 bg-gradient-gold text-[#050b18] font-sans font-bold tracking-widest text-xs uppercase px-8 py-4 rounded-sm shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
              Browse Properties
            </button>
            <button
              id="hero-consultation-btn"
              onClick={onScheduleConsultation}
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-sans font-bold tracking-widest text-xs uppercase px-8 py-4 rounded-sm transition-all duration-300 cursor-pointer"
            >
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/10 pt-8 mt-12 w-full max-w-lg"
          >
            <div>
              <p className="font-serif text-3xl font-bold text-white text-gradient-gold">₹150Cr+</p>
              <p className="font-sans text-xs text-gray-400 tracking-wider uppercase mt-1">Managed Assets</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-white text-gradient-gold">250+</p>
              <p className="font-sans text-xs text-gray-400 tracking-wider uppercase mt-1">Elite Families</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-white text-gradient-gold">100%</p>
              <p className="font-sans text-xs text-gray-400 tracking-wider uppercase mt-1">Verified Deeds</p>
            </div>
          </motion.div>
        </div>

        {/* Right column: Floating inquiry card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
        >
          <div
            id="floating-inquiry-card"
            className="w-full max-w-md bg-glass p-8 rounded-lg shadow-2xl border-luxury-gold-glow relative overflow-hidden"
          >
            {/* Elegant visual border top line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">VIP Priority Inquiry</h3>
                <p className="text-xs text-gray-400">Receive a call from our Principal broker within 10 min.</p>
              </div>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 font-medium mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 font-medium mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-gold hover:opacity-90 text-[#050b18] font-sans font-bold tracking-widest text-xs uppercase py-3.5 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Securing line...</span>
                ) : (
                  <>
                    <span>Request Callback</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 bg-[#050b18] flex flex-col items-center justify-center p-6 text-center z-25"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white mb-2">Request Secured</h4>
                  <p className="text-sm text-gray-300 max-w-xs">
                    Our Principal broker will contact you shortly. We appreciate your preference for PrimeNest.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
