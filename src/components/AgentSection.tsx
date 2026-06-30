import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Mail, Phone, CalendarCheck, Check, Sparkles, Send } from 'lucide-react';
import { agents } from '../data';
import { Agent } from '../types';

export default function AgentSection() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultName || !consultPhone || !selectedAgent) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConsultName('');
      setConsultPhone('');
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedAgent(null);
      }, 3000);
    }, 1200);
  };

  return (
    <section id="agents" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative background border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
              Elite Representatives
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-gradient-gold">Principal Advisors</span>
          </h2>
          <p className="font-sans text-gray-400 font-light text-base md:text-lg leading-relaxed">
            Professional consultants dedicated to secure asset matching, complete legal safety, and wealth management in Madurai’s core upscale communities.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group bg-[#0d1527]/60 backdrop-blur-md rounded-lg border border-white/5 hover:border-[#D4AF37]/30 p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all duration-500 relative overflow-hidden"
            >
              {/* Premium Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/15 group-hover:border-[#D4AF37] transition-colors duration-500 shadow-lg">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Premium badge */}
                <div className="absolute -bottom-1 right-1/2 translate-x-1/2 bg-gradient-gold text-[#050b18] text-[9px] font-sans font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Award className="w-3 h-3 shrink-0" />
                  <span>{agent.experience}</span>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-serif text-2xl font-bold text-white mb-1.5 flex items-center justify-center gap-2">
                {agent.name}
              </h3>
              <p className="font-sans text-xs text-[#D4AF37] uppercase tracking-widest font-semibold mb-4">
                {agent.role}
              </p>

              {/* Bio */}
              <p className="font-sans text-gray-300 text-sm leading-relaxed font-light mb-6 flex-grow max-w-sm">
                {agent.bio}
              </p>

              {/* Contacts info */}
              <div className="w-full border-t border-white/10 pt-6 mb-6 space-y-3">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{agent.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-300">
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{agent.email}</span>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedAgent(agent)}
                className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-gradient-gold text-white hover:text-[#050b18] py-3 rounded-sm font-sans font-bold tracking-widest text-xs uppercase transition-all duration-300 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                Schedule Consultation
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal booking box */}
        <AnimatePresence>
          {selectedAgent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedAgent(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Dialog Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-[#050b18] border border-[#D4AF37]/25 w-full max-w-md p-8 rounded-lg shadow-2xl z-10 overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Consultation with {selectedAgent.name.split(' ')[0]}
                </h3>
                <p className="text-xs text-gray-400 mb-6 font-sans">
                  Private 1-on-1 strategic scheduling for luxury estates in Madurai.
                </p>

                <form onSubmit={handleBookConsultation} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-2.5 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1.5">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 94421 XXXXX"
                      value={consultPhone}
                      onChange={(e) => setConsultPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-2.5 text-xs text-white"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedAgent(null)}
                      className="w-1/2 bg-white/5 hover:bg-white/10 text-white font-sans text-xs uppercase tracking-wider py-3 rounded-sm font-semibold transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-1/2 bg-gradient-gold text-[#050b18] font-sans text-xs uppercase tracking-widest py-3 rounded-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Booking...</span>
                      ) : (
                        <>
                          <span>Secure slot</span>
                          <Send className="w-3 h-3" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-[#050b18] flex flex-col items-center justify-center text-center p-6"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                        <Check className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-white mb-2">Slot Requested</h4>
                      <p className="text-xs text-gray-300 max-w-xs">
                        Thank you. {selectedAgent.name}’s assistant will call you to lock in the calendar hour.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
