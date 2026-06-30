import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'Living' | 'Bedroom' | 'Outdoor' | 'Kitchen';
  title: string;
  image: string;
  subtitle: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'Outdoor',
    title: 'The Azure Infinity Pool',
    subtitle: 'Heated private lounge decks',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-2',
    category: 'Living',
    title: 'The Royal Atrium Salon',
    subtitle: 'Double-height ceiling and teak carvings',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-3',
    category: 'Bedroom',
    title: 'The Imperial Master Suite',
    subtitle: 'Plush walk-in closets & private balcony',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-4',
    category: 'Kitchen',
    title: 'Culinary Master Studio',
    subtitle: 'Premium built-in Miele equipment',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-5',
    category: 'Outdoor',
    title: 'Lush Courtyard Canopy',
    subtitle: 'Traditional South Indian breeze vents',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'g-6',
    category: 'Living',
    title: 'Private Home Theater Lounge',
    subtitle: 'Acoustic treatment by Bose labs',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  }
];

export default function PropertyGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Living', 'Bedroom', 'Outdoor', 'Kitchen'];

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
              Immersive Showcase
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Property <span className="text-gradient-gold">Visual Gallery</span>
          </h2>
          <p className="font-sans text-gray-400 font-light text-base md:text-lg">
            A visual overview of our bespoke craftsmanship, curated interiors, and exterior layouts designed for refined South Indian living.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-sm font-sans text-xs tracking-widest uppercase transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-gold text-[#050b18] border-transparent font-bold'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveLightboxIndex(idx)}
                className="break-inside-avoid relative rounded-lg overflow-hidden border border-white/5 hover:border-[#D4AF37]/40 cursor-zoom-in group shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#D4AF37] font-bold mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-300 font-sans font-light">{item.subtitle}</p>
                  
                  {/* Floating click prompt */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 text-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal Carousel */}
        <AnimatePresence>
          {activeLightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95">
              
              {/* Overlay background clickable */}
              <div className="absolute inset-0" onClick={() => setActiveLightboxIndex(null)} />

              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="absolute top-6 right-6 z-10 text-white/70 hover:text-white bg-white/5 border border-white/10 p-2.5 rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-6 text-white/70 hover:text-white bg-white/5 border border-white/10 p-3 rounded-full hover:bg-white/10 cursor-pointer z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl max-h-[80vh] z-10 flex flex-col items-center justify-center"
              >
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[70vh] object-contain rounded-md border border-[#D4AF37]/35 shadow-2xl"
                />
                
                {/* Caption below image */}
                <div className="text-center mt-4 max-w-xl">
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#D4AF37] font-bold">
                    {filteredItems[activeLightboxIndex].category}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white mt-1">
                    {filteredItems[activeLightboxIndex].title}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans mt-1">
                    {filteredItems[activeLightboxIndex].subtitle}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-6 text-white/70 hover:text-white bg-white/5 border border-white/10 p-3 rounded-full hover:bg-white/10 cursor-pointer z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
