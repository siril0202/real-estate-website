import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Send, ExternalLink, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050b18] border-t border-white/5 pt-20 pb-8 relative overflow-hidden text-gray-400 font-sans">
      {/* Decorative Golden Line Top */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-gold" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
        
        {/* Column 1: Brand & Bio (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-lg">
              <Building2 className="w-5 h-5 text-[#050b18]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-gradient-gold transition-colors duration-300">
                Prime<span className="text-gradient-gold">Nest</span>
              </span>
              <p className="text-[9px] tracking-[0.25em] text-gray-500 uppercase font-medium">
                Properties
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
            Madurai’s premier digital property marketplace and principal real estate consultancy. We specialize in off-market luxury acquisitions, verified residential plots, and strategic commercial holdings.
          </p>
          {/* Licensed Badge */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/5 px-4 py-2 rounded-sm w-fit">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-300">DTCP & LPA Licensed Agent</span>
          </div>
        </div>

        {/* Column 2: Quick Links (2 cols) */}
        <div className="lg:col-span-2 space-y-6">
          <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-3.5 text-sm">
            {['home', 'properties', 'about', 'services', 'testimonials', 'contact'].map((target) => (
              <li key={target}>
                <button
                  onClick={() => onNavigate(target)}
                  className="hover:text-[#D4AF37] uppercase tracking-wider text-xs font-semibold transition-colors duration-300 cursor-pointer"
                >
                  {target === 'home' ? 'Home' : target}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services (2 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Key Services</h4>
          <ul className="space-y-3 text-sm font-light">
            <li><span className="hover:text-white transition-colors">Bespoke Buying & Sourcing</span></li>
            <li><span className="hover:text-white transition-colors">Elite Seller Mandates</span></li>
            <li><span className="hover:text-white transition-colors">Mother Deed Verification</span></li>
            <li><span className="hover:text-white transition-colors">NRI Real Estate Management</span></li>
            <li><span className="hover:text-white transition-colors">High-Yield Commercial Leasing</span></li>
            <li><span className="hover:text-white transition-colors">Custom Home Loan Placement</span></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Sign-up (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Newsletter subscription</h4>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Receive discreet off-market property alerts and upcoming development plans in Madurai.
          </p>

          <form onSubmit={handleSubscribe} className="relative mt-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-3 text-xs text-white placeholder-gray-500 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-sm bg-gradient-gold hover:opacity-90 text-[#050b18] flex items-center justify-center transition-opacity cursor-pointer"
              aria-label="Subscribe to newsletter"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {isSubscribed && (
            <p className="text-[11px] text-[#D4AF37] font-semibold">
              ✓ Subscribed. You are now placed on our exclusive digital mailing registry.
            </p>
          )}

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-9 h-9 rounded bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] flex items-center justify-center border border-white/5 transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] flex items-center justify-center border border-white/5 transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] flex items-center justify-center border border-white/5 transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded bg-white/5 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] flex items-center justify-center border border-white/5 transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>

      </div>

      {/* Bottom copy row & CodeWithSiril Credits */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>
          <p>© {currentYear} PrimeNest Properties. All Rights Reserved. DTCP License: LPA/MDU-2026/89.</p>
        </div>
        
        {/* DESIGNED & DEVELOPED BY CODEWITHSIRIL */}
        <div className="flex items-center gap-1 bg-white/5 border border-white/5 px-4 py-2 rounded-full shadow-inner">
          <span>Designed & Developed by</span>
          <a
            href="https://codewithsiril.site"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif font-bold text-gradient-gold hover:underline flex items-center gap-1 transition-all"
          >
            CodeWithSiril
            <ExternalLink className="w-3 h-3 text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
