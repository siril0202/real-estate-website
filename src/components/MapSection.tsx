import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Sparkles, ExternalLink } from 'lucide-react';

interface MapMarker {
  name: string;
  type: string;
  coords: { x: string; y: string };
  price: string;
}

const mapMarkers: MapMarker[] = [
  { name: 'Sovereign Estate Villa', type: 'Villa', coords: { x: '55%', y: '40%' }, price: '₹5.50 Cr' },
  { name: 'Aura Heights Penthouse', type: 'Apartment', coords: { x: '62%', y: '50%' }, price: '₹2.10 Cr' },
  { name: 'Meridian Corporate Tower', type: 'Commercial', coords: { x: '45%', y: '30%' }, price: '₹12.50 Cr' },
  { name: 'Alagar Farm Retreat', type: 'Farm House', coords: { x: '35%', y: '15%' }, price: '₹3.85 Cr' },
  { name: 'Emerald Vista Enclave', type: 'Premium Plot', coords: { x: '25%', y: '35%' }, price: '₹95 Lakhs' },
  { name: 'Vaigai Riverfront Manor', type: 'Luxury Home', coords: { x: '42%', y: '58%' }, price: '₹4.40 Cr' }
];

export default function MapSection() {
  const [hoveredMarker, setHoveredMarker] = useState<MapMarker | null>(null);

  const handleOpenGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Madurai+Tamil+Nadu+India', '_blank');
  };

  return (
    <section id="map" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Border top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
              Prime Locations
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Elite Corridor <span className="text-gradient-gold">Cartography</span>
          </h2>
          <p className="font-sans text-gray-400 font-light text-base leading-relaxed">
            A curated geographical map showcasing our certified high-value real estate projects across Madurai’s key infrastructure zones. Hover over indicators for real-time valuation stats.
          </p>
        </div>

        {/* High-End Blueprint Map Placeholder Card */}
        <div className="relative w-full aspect-[21/9] min-h-[350px] bg-[#0d1527]/60 backdrop-blur-md border border-[#D4AF37]/25 rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 border-luxury-gold-glow">
          
          {/* Futuristic Grid Map Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-75" />
          
          {/* Abstract River Vaigai flowing through the map (elegant blue glow path) */}
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M -50,150 Q 300,100 500,200 T 1100,120 T 1700,220"
              fill="none"
              stroke="#0088FF"
              strokeWidth="14"
              strokeLinecap="round"
              className="blur-[2px]"
            />
            <path
              d="M -50,150 Q 300,100 500,200 T 1100,120 T 1700,220"
              fill="none"
              stroke="#55AAFF"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Compass layout indicator */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2.5 text-gray-500 font-mono text-[10px] tracking-wider bg-black/40 px-3.5 py-2 rounded-sm border border-white/5 backdrop-blur-sm z-10 select-none">
            <Compass className="w-4 h-4 text-[#D4AF37] animate-spin-slow" />
            <span>LAT: 9.9252° N | LON: 78.1198° E</span>
          </div>

          {/* Map Interactive Pins */}
          {mapMarkers.map((marker, idx) => (
            <div
              key={idx}
              className="absolute group/pin cursor-pointer"
              style={{ left: marker.coords.x, top: marker.coords.y }}
              onMouseEnter={() => setHoveredMarker(marker)}
              onMouseLeave={() => setHoveredMarker(null)}
            >
              {/* Pulsing indicator circle */}
              <div className="relative">
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#D4AF37]/35 animate-ping -left-1.5 -top-1.5" />
                <div className="relative w-3 h-3 rounded-full bg-gradient-gold border border-[#050b18] shadow shadow-[#D4AF37]/50" />
              </div>

              {/* Hover Box tooltip */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-48 bg-glass p-3 rounded shadow-2xl border border-[#D4AF37]/40 scale-0 group-hover/pin:scale-100 transition-all origin-bottom z-25 pointer-events-none">
                <span className="text-[9px] uppercase font-sans tracking-widest text-[#D4AF37] font-bold block mb-0.5">
                  {marker.type}
                </span>
                <h4 className="font-serif text-xs font-bold text-white leading-tight">{marker.name}</h4>
                <p className="font-sans text-xs text-gradient-gold font-bold mt-1.5">{marker.price}</p>
              </div>
            </div>
          ))}

          {/* Map Overlay Prompt (Centered UI) */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm bg-glass p-6 rounded-md border border-white/10 shadow-xl">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Madurai Core Corridor</h3>
            <p className="font-sans text-xs text-gray-300 leading-relaxed font-light mb-5">
              Including prestigious pockets in Anna Nagar, KK Nagar, Alagar Kovil Road and high-speed judicial districts.
            </p>
            <button
              onClick={handleOpenGoogleMaps}
              className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F3E5AB] text-[#050b18] font-sans font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-sm transition-all duration-300 cursor-pointer shadow-lg"
            >
              <span>Explore Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick instructions bottom right */}
          <p className="absolute bottom-6 right-6 text-[9px] font-mono tracking-widest text-gray-500 hidden md:block">
            * HOVER MARKERS TO HIGHLIGHT VERIFIED BLUEPRINTS
          </p>

        </div>

      </div>
    </section>
  );
}
