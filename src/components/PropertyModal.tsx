import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Bed, Bath, Maximize, Check, Phone, Mail, Award, Download, Send } from 'lucide-react';
import { Property, Agent } from '../types';
import { agents } from '../data';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [activeImage, setActiveImage] = useState<string>('');
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', msg: '' });

  if (!property) return null;

  const currentImage = activeImage || property.image;
  const assignedAgent = agents.find((a) => a.id === property.agentId) || agents[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-5xl bg-[#050b18] rounded-lg border border-[#D4AF37]/25 overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 bg-black/60 hover:bg-black/80 border border-[#D4AF37]/20 text-white hover:text-[#D4AF37] p-2 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Media & Specs */}
          <div className="lg:w-7/12 flex flex-col p-6 overflow-y-auto max-h-[45vh] lg:max-h-[90vh] border-b lg:border-b-0 lg:border-r border-white/10 scrollbar-thin">
            {/* Main Visual */}
            <div className="relative aspect-video w-full rounded-md overflow-hidden bg-black mb-4 group shadow-lg">
              <img
                src={currentImage}
                alt={property.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-gradient-gold text-[#050b18] text-xs font-bold font-sans tracking-widest uppercase px-3 py-1.5 rounded-sm shadow">
                {property.status}
              </span>
              <span className="absolute bottom-4 right-4 bg-black/75 text-white text-xs font-sans font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                {property.tag}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            {property.gallery && property.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {property.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`aspect-[4/3] rounded overflow-hidden border-2 transition-all cursor-pointer ${
                      currentImage === imgUrl ? 'border-[#D4AF37]' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Gallery view ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Headings */}
            <div className="mb-6">
              <span className="font-sans text-xs tracking-widest text-[#D4AF37] uppercase font-bold mb-2 block">
                {property.type}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Luxury Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-5 mb-6">
              {property.beds && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                    <Bed className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs uppercase tracking-wider font-sans font-medium">Beds</span>
                  </div>
                  <span className="font-serif text-lg text-white font-semibold">{property.beds} Bedrooms</span>
                </div>
              )}
              {property.baths && (
                <div className="text-center border-x border-white/10">
                  <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                    <Bath className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs uppercase tracking-wider font-sans font-medium">Baths</span>
                  </div>
                  <span className="font-serif text-lg text-white font-semibold">{property.baths} Bathrooms</span>
                </div>
              )}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                  <Maximize className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs uppercase tracking-wider font-sans font-medium">Area</span>
                </div>
                <span className="font-serif text-lg text-white font-semibold">{property.area}</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="font-serif text-lg font-bold text-white mb-3">Architectural Overview</h4>
              <p className="font-sans text-gray-300 text-sm leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Premium Features */}
            <div>
              <h4 className="font-serif text-lg font-bold text-white mb-3">Elite Amenities Included</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <span className="text-sm text-gray-300 font-sans font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form & Agent Profile */}
          <div className="lg:w-5/12 flex flex-col p-6 lg:p-8 bg-[#0d1527]/95 overflow-y-auto max-h-[45vh] lg:max-h-[90vh]">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-medium block mb-1">Invest Strategy</span>
              <p className="font-serif text-3xl font-bold text-gradient-gold">{property.price}</p>
              <span className="text-xs text-gray-400 font-sans block mt-1">Inclusive of premium community upkeep fees</span>
            </div>

            {/* Brochure download simulation */}
            <div className="bg-white/5 border border-[#D4AF37]/10 p-4 rounded-sm mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-serif font-bold text-white">E-Brochure (Premium PDF)</p>
                <p className="text-[10px] text-gray-400">Includes layouts & structural maps</p>
              </div>
              <button
                onClick={() => alert('Demo Download: High-resolution property blueprint PDF downloaded successfully.')}
                className="flex items-center gap-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 px-3.5 py-2 rounded-sm text-xs uppercase font-sans font-bold tracking-wider transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            </div>

            {/* Elite Agent Profile */}
            <div className="border-t border-white/10 pt-6 mb-6">
              <h4 className="font-serif text-sm font-bold text-white mb-4 uppercase tracking-wider">Assigned Realtor Advisory</h4>
              <div className="flex gap-4 items-center bg-white/5 p-4 rounded-sm border border-white/5">
                <img
                  src={assignedAgent.image}
                  alt={assignedAgent.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border border-[#D4AF37]/30 shadow"
                />
                <div>
                  <h5 className="font-serif text-base font-semibold text-white flex items-center gap-1.5">
                    {assignedAgent.name}
                    <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </h5>
                  <p className="text-xs text-[#D4AF37] font-medium">{assignedAgent.role}</p>
                  <p className="text-[10px] text-gray-400 font-sans mt-0.5">{assignedAgent.experience} experience</p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Form */}
            <div className="flex-grow flex flex-col justify-end">
              <div className="bg-[#050b18] border border-white/5 p-5 rounded-sm">
                <h4 className="font-serif text-base font-bold text-white mb-4">Request Private Escorted Tour</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-colors"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder={`I am interested in ${property.title}. Please provide scheduling dates.`}
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm px-4 py-2.5 text-xs text-white placeholder-gray-500 transition-colors h-16 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-gold hover:opacity-95 text-[#050b18] font-sans font-bold tracking-widest text-xs uppercase py-3 rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Secure Booking</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Success message simulation */}
            <AnimatePresence>
              {inquirySent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#050b18] flex flex-col items-center justify-center p-8 text-center z-30"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">Request Secured</h4>
                  <p className="text-sm text-gray-300 max-w-sm mb-4">
                    Thank you, {formData.name || 'valued customer'}. A VIP chauffeur and {assignedAgent.name} will coordinate your tour sequence.
                  </p>
                  <p className="text-xs text-gray-500">Auto-closing file...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
