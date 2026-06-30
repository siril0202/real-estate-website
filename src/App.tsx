import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertiesSection from './components/PropertiesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import PropertyGallery from './components/PropertyGallery';
import AgentSection from './components/AgentSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Offset for sticky navbar
      const yOffset = -80;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Scroll spy to update active navigation item
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'properties', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 160; // Offset for trigger point

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-[#050b18] text-slate-100 flex flex-col relative overflow-hidden selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Background Atmospheric Elements */}
      <div className="absolute top-[5%] right-[-10%] w-[600px] h-[600px] bg-[#d4af37] opacity-[0.06] blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-15%] w-[500px] h-[500px] bg-blue-600 opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500 opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Sticky Premium Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow relative z-10">
        {/* Fullscreen Looping Hero Section */}
        <Hero
          onBrowseProperties={() => handleNavigate('properties')}
          onScheduleConsultation={() => handleNavigate('contact')}
        />

        {/* Curated Properties Search Listing & Modal Detail View */}
        <PropertiesSection />

        {/* Why Choose Us: Luxury Pillars Bento Layout */}
        <WhyChooseUs />

        {/* Signature Realty Services */}
        <ServicesSection />

        {/* Immersive Photo Gallery with Masonry & Lightbox Viewer */}
        <PropertyGallery />

        {/* Principal Realtor Advisors Profile & Calendar Booker */}
        <AgentSection />

        {/* Testimonials Deluxe Carousel */}
        <TestimonialsSection />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Geographical Cartography Blueprint Map Coordinates */}
        <MapSection />

        {/* Contact Leads Generation Form */}
        <ContactSection />
      </main>

      {/* Elegant Footer & Credit link for CodeWithSiril */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
