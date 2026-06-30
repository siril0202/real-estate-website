import { motion } from 'motion/react';
import { ShoppingCart, BadgePercent, TrendingUp, ShieldCheck, Landmark, HeartHandshake, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Bespoke Buying Service',
      description: 'Gain off-market access to Madurai’s most coveted luxury villas, penthouses, and heritage farm estates tailored to your detailed blueprint requirements.',
      icon: ShoppingCart,
      tag: 'Aquisition'
    },
    {
      title: 'Elite Seller Representation',
      description: 'Leverage state-of-the-art cinematic marketing, premium brochures, and VIP networks to present your high-value property to qualified global investors.',
      icon: BadgePercent,
      tag: 'Divestment'
    },
    {
      title: 'Real Estate Investment Advisory',
      description: 'Discreet consultancy providing data-driven appreciation maps, high-yield commercial leasing layouts, and customized land-banking strategies.',
      icon: TrendingUp,
      tag: 'Growth'
    },
    {
      title: 'Discreet Legal & Vetting Solutions',
      description: 'Complete peace of mind with rigorous title vetting, mother deed verification, encumbrance auditing, and stamp-duty registration navigation.',
      icon: ShieldCheck,
      tag: 'Secured'
    },
    {
      title: 'Bespoke Private Home Finance',
      description: 'Private partnerships with premier financial institutions offering customized high-value credit structures at competitive elite interest rates.',
      icon: Landmark,
      tag: 'Leverage'
    },
    {
      title: 'End-to-End Asset Management',
      description: 'Comprehensive property upkeep, luxury leasing facilitation, tenant management, and regular security reporting for remote and NRI landlords.',
      icon: HeartHandshake,
      tag: 'Premium Support'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Golden Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-[#D4AF37]/30 px-3 py-1 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-sans text-[10px] tracking-widest text-[#F3E5AB] uppercase font-bold">
                Elite Offerings
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
              Signature <span className="text-gradient-gold">Realty Services</span>
            </h2>
          </div>
          <p className="font-sans text-gray-400 font-light text-sm md:text-base max-w-md lg:mb-2">
            PrimeNest provides highly personalized end-to-end real estate orchestration, transforming complex transactions into smooth, refined experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-[#0d1527]/60 backdrop-blur-md p-8 rounded-lg border border-white/5 hover:border-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/5 transition-all duration-500 relative flex flex-col"
              >
                {/* Gold tag overlay */}
                <div className="absolute top-6 right-8 text-[9px] uppercase tracking-widest font-sans text-gray-500 font-bold group-hover:text-[#D4AF37] transition-colors">
                  {srv.tag}
                </div>

                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded bg-gradient-gold flex items-center justify-center mb-6 shadow transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-[#050b18]" />
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {srv.title}
                </h3>
                
                <p className="font-sans text-gray-300 text-sm leading-relaxed font-light flex-grow">
                  {srv.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
