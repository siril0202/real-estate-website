import { useState, useEffect } from 'react';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Properties', target: 'properties' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Testimonials', target: 'testimonials' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050b18]/90 backdrop-blur-lg border-b border-[#D4AF37]/25 py-3.5 shadow-2xl'
          : 'bg-[#050b18]/50 backdrop-blur-md border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          id="navbar-logo"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rotate-45 bg-gradient-gold flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
            <span className="text-[#050b18] font-serif font-black text-base -rotate-45">P</span>
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-gradient-gold transition-colors duration-300">
              PRIME<span className="text-gradient-gold font-sans font-extrabold tracking-normal">NEST</span>
            </span>
            <p className="text-[9px] font-sans tracking-[0.25em] text-gray-400 uppercase font-medium">
              Properties
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div id="desktop-menu" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.target}
              id={`nav-item-${item.target}`}
              onClick={() => handleNavClick(item.target)}
              className={`font-sans text-sm tracking-wider uppercase transition-all duration-300 relative py-1 cursor-pointer hover:text-[#D4AF37] ${
                activeSection === item.target
                  ? 'text-[#D4AF37] font-medium'
                  : 'text-gray-300'
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-gold"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button */}
        <div id="navbar-action" className="hidden lg:flex items-center gap-4">
          <button
            id="nav-consultation-btn"
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 bg-transparent hover:bg-white/5 border border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 rounded-sm font-sans font-semibold tracking-wider text-xs uppercase transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            Inquire Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white hover:text-[#D4AF37] transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050b18]/95 backdrop-blur-xl border-b border-[#D4AF37]/25 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  id={`mobile-nav-item-${item.target}`}
                  onClick={() => handleNavClick(item.target)}
                  className={`text-left font-sans text-base tracking-widest uppercase py-2 border-b border-white/5 ${
                    activeSection === item.target
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                id="mobile-nav-consultation-btn"
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 bg-gradient-gold text-[#050b18] py-3 rounded-sm font-sans font-bold tracking-wider text-sm uppercase transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
