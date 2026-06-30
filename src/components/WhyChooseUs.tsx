import { motion } from 'motion/react';
import { Shield, Users, HelpCircle, CheckCircle, Scale, Sparkles, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: '100% Certified & Verified Properties',
      description: 'We guarantee pristine, dispute-free title deeds. Our rigorous legal division vets mother documents, encumbrances, and local approvals (DTCP/LPA) for every asset.',
      icon: Shield
    },
    {
      title: 'Discreet Elite Realtors & Advisory',
      description: 'Our advisors operate with absolute confidentiality, serving high-net-worth individuals, top corporate houses, and NRI clients with custom portfolios.',
      icon: Users
    },
    {
      title: 'Absolute Transparent Valuations',
      description: 'No hidden markup, no broker commissions hidden in pricing. You receive authentic local builder pricing sheets and transparent market valuation calculations.',
      icon: CheckCircle
    },
    {
      title: 'End-to-End Legal & Registration Support',
      description: 'Our in-house legal experts draft bespoke deeds, manage registration logistics, and handle all documentation details without causing any fatigue to you.',
      icon: Scale
    },
    {
      title: 'Strategic High-Growth Investment Guidance',
      description: 'We analyze Madurai’s infrastructure expansions (IT corridors, Metro tracks, judicial districts) to locate premium plots with maximum long-term compounding.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Artistic Visual Layout */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-lg overflow-hidden border border-[#D4AF37]/20 shadow-2xl group">
              {/* Image backdrop */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Luxury real estate design"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Glass overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-glass p-6 rounded-md border border-white/10 shadow-lg">
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#D4AF37] font-bold block mb-1">Our Standard</span>
                <h4 className="font-serif text-lg font-bold text-white mb-2">Architectural Excellence & Secure Wealth</h4>
                <p className="text-xs text-gray-300 font-sans font-light leading-relaxed">
                  Real estate in Madurai is not just land; it is a legacy passed down through generations. We secure it for you.
                </p>
              </div>
            </div>

            {/* Floating tiny accolades */}
            <div className="absolute -top-6 -left-6 bg-[#0d1527]/90 backdrop-blur-md border border-[#D4AF37]/30 p-4 rounded-sm shadow-xl hidden md:block">
              <span className="font-serif text-2xl font-bold text-gradient-gold">18+</span>
              <p className="text-[9px] font-sans tracking-wider uppercase text-gray-400">Years Vetting Legacy Titles</p>
            </div>
            
            <div className="absolute top-1/2 -right-12 bg-[#0d1527]/90 backdrop-blur-md border border-white/10 p-4 rounded-sm shadow-xl hidden md:block">
              <span className="font-serif text-2xl font-bold text-[#D4AF37]">₹150Cr+</span>
              <p className="text-[9px] font-sans tracking-wider uppercase text-gray-400">Transacted Portfolio</p>
            </div>
          </div>

          {/* Right: Pillars list */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
                Why PrimeNest Properties
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-gradient-gold">Luxury Pillars</span>
            </h2>
            
            <p className="font-sans text-gray-300 font-light text-sm md:text-base mb-10 leading-relaxed">
              We operate at the pinnacle of Madurai’s elite real estate sector, delivering a level of professional security and execution quality usually associated with top-tier international brokers.
            </p>

            {/* List of Features */}
            <div className="space-y-8 w-full">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 border border-[#D4AF37]/25">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-white mb-1.5 hover:text-[#D4AF37] transition-colors">
                        {feat.title}
                      </h3>
                      <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                        {feat.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
