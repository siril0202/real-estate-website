import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, MapPin, Send, Check, Sparkles, Building, UserCheck } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Villa');
  const [msg, setMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setMsg('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const businessInfo = {
    name: 'PrimeNest Properties',
    address: '12, Anna Nagar Main Road, Madurai, Tamil Nadu 625020',
    phone: '+91 94421 82300',
    email: 'hello@primenest-demo.com',
    hours: 'Monday - Saturday: 9:00 AM - 7:00 PM'
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Golden Line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Premium Brand details & Location card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
                  Corporate Office
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                Connect With <span className="text-gradient-gold">Our Office</span>
              </h2>
              <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed mb-10">
                Should you wish to list a signature property or request a curated private site tour of our exclusive holdings in Madurai, please do not hesitate to reach out to us.
              </p>

              {/* Office Coordinates */}
              <div className="space-y-6">
                
                {/* Brand Name */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">{businessInfo.name}</h4>
                    <p className="font-sans text-xs text-gray-400 uppercase tracking-wider mt-0.5">Licensed Real Estate Advisory</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-white">Headquarters</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed max-w-xs">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-white">Call Coordinates</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 mt-1">
                      {businessInfo.phone} <span className="text-gray-500 italic text-[11px] ml-2">(VIP Desk)</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-white">Digital Mail</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 mt-1 hover:text-[#D4AF37] transition-colors">
                      <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-white">Working Hours</h4>
                    <p className="font-sans text-xs sm:text-sm text-gray-300 mt-1">
                      {businessInfo.hours}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Note about Demo nature */}
            <div className="mt-12 p-4 bg-white/5 border border-white/5 rounded-sm">
              <p className="text-[10px] font-sans text-gray-500 uppercase tracking-widest leading-relaxed">
                * Note: This is a secure portfolio demonstration project. Contact actions simulate real real-time validations without collecting or writing to real databases.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#0d1527]/60 backdrop-blur-md border border-white/5 rounded-lg p-8 md:p-12 shadow-2xl border-luxury-gold-glow relative overflow-hidden">
              {/* Elegant Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />

              <h3 className="font-serif text-2xl font-bold text-white mb-2">VIP Portfolio Inquiry</h3>
              <p className="font-sans text-xs text-gray-400 mb-8">
                Submit your investment parameters and a principal advisor will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Srinivasan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 focus:bg-white/10 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 focus:bg-white/10 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98401 23456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 focus:bg-white/10 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all"
                    />
                  </div>
                </div>

                {/* Property Type of Interest */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                    Property Type of Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-sm py-3.5 px-4 rounded-sm focus:outline-none focus:ring-0"
                  >
                    <option value="Villa" className="bg-[#050b18] text-white">Luxury Villa</option>
                    <option value="Apartment" className="bg-[#050b18] text-white">Elite Apartment / Penthouse</option>
                    <option value="Premium Plot" className="bg-[#050b18] text-white">Gated Enclave Plot</option>
                    <option value="Commercial Space" className="bg-[#050b18] text-white">Commercial Office Space</option>
                    <option value="Farm House" className="bg-[#050b18] text-white">Heritage Farm House</option>
                    <option value="Luxury Home" className="bg-[#050b18] text-white">Bespoke House / Estate</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                    Investment Details & Message
                  </label>
                  <textarea
                    placeholder="Please specify any particular preferences, e.g., Vaastu direction, specific budget, target timing..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full bg-white/5 focus:bg-white/10 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-3.5 text-sm text-white placeholder-gray-600 transition-all h-28 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold hover:opacity-95 text-[#050b18] font-sans font-bold tracking-widest text-xs uppercase py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#D4AF37]/15"
                >
                  {isSubmitting ? (
                    <span>Securing Priority Line...</span>
                  ) : (
                    <>
                      <span>Secure Consultation Session</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Submission Ticket Confirmation Layer */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#050b18] flex flex-col items-center justify-center text-center p-8 md:p-12 z-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 border border-[#D4AF37]/35">
                      <UserCheck className="w-10 h-10 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-white mb-3">Priority Ticket Secured</h3>
                    <p className="text-sm text-gray-300 max-w-sm mb-6">
                      Your VIP consultation ticket has been logged. Our Principal broker Sridhar Chidambaram will coordinate details on your provided phone coordinates.
                    </p>
                    <div className="border border-[#D4AF37]/20 bg-[#050b18] px-6 py-3 rounded-sm text-xs font-mono text-gradient-gold uppercase tracking-widest">
                      REF ID: PN-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
