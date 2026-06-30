import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Bed, Bath, Maximize, SlidersHorizontal, RefreshCw, Sparkles, Compass } from 'lucide-react';
import { properties } from '../data';
import { Property } from '../types';
import PropertyModal from './PropertyModal';

export default function PropertiesSection() {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedBudget, setSelectedBudget] = useState<string>('All');
  const [selectedBeds, setSelectedBeds] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  // Filter Categories
  const propertyTypes = ['All', 'Villa', 'Apartment', 'Premium Plot', 'Commercial Space', 'Farm House', 'Luxury Home'];
  const locations = [
    'All',
    'Anna Nagar',
    'KK Nagar',
    'Othakadai',
    'Alagar Kovil Road',
    'Thiruppalai',
    'Kochadai'
  ];
  const statuses = ['All', 'For Sale', 'New Launch', 'Exclusive'];
  const budgets = [
    { label: 'All Budgets', value: 'All' },
    { label: 'Under ₹1 Cr', value: 'under-1' },
    { label: '₹1 Cr - ₹3 Cr', value: '1-3' },
    { label: '₹3 Cr - ₹5 Cr', value: '3-5' },
    { label: 'Over ₹5 Cr', value: 'over-5' }
  ];
  const bedsOptions = [
    { label: 'All Bedrooms', value: 'All' },
    { label: '3+ Bedrooms', value: '3' },
    { label: '4+ Bedrooms', value: '4' },
    { label: '5+ Bedrooms', value: '5' }
  ];

  // Filtering Logic
  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // Type Filter
      if (selectedType !== 'All' && prop.type !== selectedType) return false;

      // Status Filter
      if (selectedStatus !== 'All' && prop.status !== selectedStatus) return false;

      // Location Filter (fuzzy match)
      if (selectedLocation !== 'All' && !prop.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;

      // Beds Filter
      if (selectedBeds !== 'All') {
        const minBeds = parseInt(selectedBeds);
        if (!prop.beds || prop.beds < minBeds) return false;
      }

      // Budget Filter (using rawPrice)
      if (selectedBudget !== 'All') {
        const price = prop.rawPrice;
        if (selectedBudget === 'under-1') {
          if (price >= 10000000) return false;
        } else if (selectedBudget === '1-3') {
          if (price < 10000000 || price > 30000000) return false;
        } else if (selectedBudget === '3-5') {
          if (price < 30000000 || price > 50000000) return false;
        } else if (selectedBudget === 'over-5') {
          if (price < 50000000) return false;
        }
      }

      // Text Search Filter (fuzzy match Title, Description, Location, Tags)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(query);
        const matchesDesc = prop.description.toLowerCase().includes(query);
        const matchesLoc = prop.location.toLowerCase().includes(query);
        const matchesTag = prop.tag.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesLoc && !matchesTag) return false;
      }

      return true;
    });
  }, [selectedType, selectedBudget, selectedBeds, selectedLocation, selectedStatus, searchQuery]);

  const handleResetFilters = () => {
    setSelectedType('All');
    setSelectedBudget('All');
    setSelectedBeds('All');
    setSelectedLocation('All');
    setSelectedStatus('All');
    setSearchQuery('');
  };

  return (
    <section id="properties" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
              Exclusive Portfolio
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Curated <span className="text-gradient-gold">Luxury Estates</span>
          </h2>
          <p className="font-sans text-gray-300 font-light text-base md:text-lg leading-relaxed">
            Discover Madurai’s most sought-after residential development blueprints, plots, and elite commercial investments. Fully verified titles, zero-hassle paperwork.
          </p>
        </div>

        {/* Advanced Search Filter Bar */}
        <div id="advanced-search-block" className="bg-glass p-6 rounded-lg mb-12 shadow-xl border border-white/5">
          {/* Top Line search query */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword (e.g. pool, penthouse, riverfront, Anna Nagar...)"
                className="w-full bg-white/5 focus:bg-white/10 border border-white/10 focus:border-[#D4AF37] focus:outline-none rounded-sm pl-12 pr-4 py-3.5 text-sm text-white placeholder-gray-400 transition-all"
              />
            </div>
            <button
              onClick={() => setIsFilterExpanded(!isFilterExpanded)}
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] px-6 py-3.5 rounded-sm font-sans font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>{isFilterExpanded ? 'Hide Filters' : 'Refine Search'}</span>
            </button>
          </div>

          {/* Expanded Filters Panel */}
          <AnimatePresence>
            {(isFilterExpanded || true) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t border-white/5">
                  {/* Property Type Selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Property Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-xs py-2.5 px-3 rounded-sm focus:outline-none"
                    >
                      {propertyTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#050b18] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Budget Scale
                    </label>
                    <select
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-xs py-2.5 px-3 rounded-sm focus:outline-none"
                    >
                      {budgets.map((b) => (
                        <option key={b.value} value={b.value} className="bg-[#050b18] text-white">
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Bedrooms Selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Beds Allocation
                    </label>
                    <select
                      value={selectedBeds}
                      onChange={(e) => setSelectedBeds(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-xs py-2.5 px-3 rounded-sm focus:outline-none"
                    >
                      {bedsOptions.map((b) => (
                        <option key={b.value} value={b.value} className="bg-[#050b18] text-white">
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Prime Location
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-xs py-2.5 px-3 rounded-sm focus:outline-none"
                    >
                      {locations.map((l) => (
                        <option key={l} value={l} className="bg-[#050b18] text-white">
                          {l === 'All' ? 'All Locations' : l}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Status Selector */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">
                      Property Status
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 focus:border-[#D4AF37] text-white text-xs py-2.5 px-3 rounded-sm focus:outline-none"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s} className="bg-[#050b18] text-white">
                          {s === 'All' ? 'All Status' : s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Reset Filters Option */}
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset Search Parameters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Results Summary */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-gray-400">
            Showing <span className="text-[#D4AF37] font-semibold">{filteredProperties.length}</span> luxury properties
          </p>
          {filteredProperties.length === 0 && (
            <button
              onClick={handleResetFilters}
              className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
            >
              Clear filters and start over
            </button>
          )}
        </div>

        {/* Properties Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProperties.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredProperties.map((prop, idx) => (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group bg-[#0d1527]/60 backdrop-blur-md rounded-lg border border-white/5 hover:border-[#D4AF37]/35 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all duration-500 flex flex-col relative"
                >
                  {/* Badge & Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Status Badge */}
                    <span className="absolute top-4 left-4 bg-gradient-gold text-[#050b18] text-[9px] tracking-widest font-bold uppercase py-1.5 px-3 rounded-sm shadow-md">
                      {prop.status}
                    </span>
                    {/* Floating gold tag bottom */}
                    <span className="absolute bottom-4 right-4 bg-[#050b18]/95 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-sans font-medium px-3 py-1 rounded-sm backdrop-blur-sm shadow">
                      {prop.tag}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="font-sans text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold mb-1.5 block">
                      {prop.type}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-gradient-gold transition-colors duration-300">
                      {prop.title}
                    </h3>

                    {/* Price and Location */}
                    <div className="flex items-center justify-between mt-1 mb-4 pb-4 border-b border-white/5">
                      <p className="font-serif text-2xl font-bold text-[#D4AF37]">{prop.price}</p>
                      <div className="flex items-center gap-1 text-gray-400 text-xs max-w-[50%]">
                        <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                        <span className="truncate">{prop.location.split(',')[0]}</span>
                      </div>
                    </div>

                    {/* Specs info */}
                    <div className="grid grid-cols-3 gap-2 text-center text-gray-400 text-xs mb-6">
                      {prop.beds && (
                        <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5">
                          <Bed className="w-4 h-4 text-[#D4AF37] mb-1" />
                          <span className="font-semibold text-white">{prop.beds} Beds</span>
                        </div>
                      )}
                      {prop.baths && (
                        <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5">
                          <Bath className="w-4 h-4 text-[#D4AF37] mb-1" />
                          <span className="font-semibold text-white">{prop.baths} Baths</span>
                        </div>
                      )}
                      <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5 col-span-1">
                        <Maximize className="w-4 h-4 text-[#D4AF37] mb-1" />
                        <span className="font-semibold text-white truncate w-full px-0.5">{prop.area.split(' ')[0]} SF</span>
                      </div>
                    </div>

                    {/* View details action */}
                    <div className="mt-auto pt-2">
                      <button
                        onClick={() => setSelectedProperty(prop)}
                        className="w-full flex items-center justify-center gap-2 bg-white/5 group-hover:bg-gradient-gold text-white group-hover:text-[#050b18] border border-white/10 group-hover:border-transparent py-3 rounded-sm font-sans font-bold tracking-widest text-xs uppercase transition-all duration-300 cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        View Residence
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white/5 rounded-lg border border-white/5 max-w-xl mx-auto"
            >
              <SlidersHorizontal className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold text-white mb-2">No Matching Estates</h3>
              <p className="font-sans text-gray-400 text-sm max-w-sm mx-auto mb-6">
                We couldn’t find any properties matching your selected query parameters. Reset filters to explore our full certified portfolio.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-gradient-gold text-[#050b18] px-6 py-3 rounded-sm font-sans font-bold text-xs tracking-widest uppercase transition-all cursor-pointer"
              >
                View Full Catalog
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Wrapper */}
        {selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onClose={() => setSelectedProperty(null)}
          />
        )}
      </div>
    </section>
  );
}
