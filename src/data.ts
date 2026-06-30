import { Property, Agent, Testimonial, FaqItem } from './types';

export const agents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Sridhar Chidambaram',
    role: 'Principal Broker & Founder',
    phone: '+91 94421 82301',
    email: 'sridhar@primenest-demo.com',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Sridhar is a pioneer in Madurai’s luxury real estate landscape, specializing in ultra-high-net-worth acquisitions and marquee commercial deals in Anna Nagar and KK Nagar.'
  },
  {
    id: 'agent-2',
    name: 'Meenakshi Sundaram',
    role: 'VP of Investment Advisory',
    phone: '+91 94421 82302',
    email: 'meenakshi@primenest-demo.com',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80',
    bio: 'Meenakshi offers unparalleled legal counsel and structured portfolio growth planning. She guides NRIs and local developers through complex land acquisition processes.'
  }
];

export const properties: Property[] = [
  {
    id: 'prop-1',
    title: 'The Sovereign Estate Villa',
    type: 'Villa',
    price: '₹5.50 Cr',
    rawPrice: 55000000,
    location: 'Anna Nagar, Madurai',
    beds: 5,
    baths: 6,
    area: '6,200 sq.ft',
    status: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'An architectural marvel set in Madurai’s finest residential zip code. This luxury villa blends contemporary minimalism with traditional South-Indian central-courtyard cooling principles, featuring custom teakwood pillars, smart-automation, a temperature-controlled swimming pool, and an automated private theater.',
    features: ['Private Infinity Pool', 'Teakwood Interior Accents', 'Integrated Smart Automation', 'Double-Height Living Space', 'Gated Elite Community', '24/7 Premium Security'],
    agentId: 'agent-1',
    tag: 'Architectural Gem'
  },
  {
    id: 'prop-2',
    title: 'Aura Heights Penthouse',
    type: 'Apartment',
    price: '₹2.10 Cr',
    rawPrice: 21000000,
    location: 'KK Nagar, Madurai',
    beds: 3,
    baths: 4,
    area: '3,450 sq.ft',
    status: 'New Launch',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Breathtaking heights meet premium elegance. This single-apartment per-floor layout offers unobstructed panoramic vistas of the towering Meenakshi Amman Temple Gopurams. Styled with exquisite Italian marble, a fully-equipped designer kitchen, and a private wraparound skydeck.',
    features: ['Temple Gopuram View', 'Single Apartment Floor Layout', 'Italian Marble Flooring', 'Private Skydeck', 'Gym & Health Club Access', 'Ultra-Quiet Acoustic Glazing'],
    agentId: 'agent-2',
    tag: 'Skyline Luxury'
  },
  {
    id: 'prop-3',
    title: 'The Meridian Corporate Tower',
    type: 'Commercial Space',
    price: '₹12.50 Cr',
    rawPrice: 125000000,
    location: 'Near High Court Bench, Othakadai, Madurai',
    area: '14,500 sq.ft',
    status: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'An iconic commercial landmark standing proudly in Madurai’s high-growth legal and corporate district. Perfectly designed for MNC headquarters, premium corporate banking centers, or upscale car brand showrooms with double-height glass frontage and multi-level parking.',
    features: ['Double-Height Glass Facade', 'High-speed Capsule Elevators', '100% DG Power Backup', 'Ample Corporate Parking', 'Central VRV Air Conditioning', 'LEED-certified Green Structure'],
    agentId: 'agent-1',
    tag: 'Institutional Investment'
  },
  {
    id: 'prop-4',
    title: 'Alagar foothills Farm Retreat',
    type: 'Farm House',
    price: '₹3.85 Cr',
    rawPrice: 38500000,
    location: 'Alagar Kovil Road, Madurai',
    beds: 4,
    baths: 4,
    area: '8,200 sq.ft',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'Immerse your senses in pristine nature at the feet of Alagar Hills. This spectacular luxury country estate features premium mango groves, a traditional open-air courtyard architecture, stone-clad organic pathways, and modern resort-style wooden cabins for weekend guest escapes.',
    features: ['Scenic Foothills Landscape', 'Organic Mango Orchard', 'Heritage Styled Verandahs', 'Private Borewell & Pure Water', 'Solar Powered Grid Support', 'Guest Cottage Annex'],
    agentId: 'agent-2',
    tag: 'Elite Sanctuary'
  },
  {
    id: 'prop-5',
    title: 'Emerald Vista Gated Plot',
    type: 'Premium Plot',
    price: '₹95 Lakhs',
    rawPrice: 9500000,
    location: 'Thiruppalai, Madurai',
    area: '4,800 sq.ft',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Craft your bespoke architectural legacy on this pristine, perfectly leveled plot located in a premium gated enclave at Thiruppalai. The secure community offers wider internal blacktop avenues, underground electrical cabling, designer manicured gardens, and clubhouse privileges.',
    features: ['Elite Gated Enclave', '100% Clear Title Guaranteed', 'Underground Utility Lines', 'Clubhouse & Gym Access', '60-Feet Wide Internal Roads', 'Vaastu-Compliant Orientation'],
    agentId: 'agent-1',
    tag: 'Bespoke Grounding'
  },
  {
    id: 'prop-6',
    title: 'The Vaigai Riverfront Manor',
    type: 'Luxury Home',
    price: '₹4.40 Cr',
    rawPrice: 44000000,
    location: 'Kochadai, Madurai',
    beds: 4,
    baths: 5,
    area: '4,950 sq.ft',
    status: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80'
    ],
    description: 'An elegant oasis located along the calm sweeps of the Vaigai River. This custom-commissioned home maximizes light and ventilation through large custom glass panels, features a Zen terrace garden, private state-of-the-art yoga studio, and beautiful double-layer living setups.',
    features: ['Serene Riverfront Views', 'Designer Zen Sky-Garden', 'Private Fitness & Yoga Deck', 'High-Grade Acoustic Insulated Windows', 'Eco-friendly Rainwater Systems', 'Bespoke Handcrafted Millwork'],
    agentId: 'agent-2',
    tag: 'Riverfront Serenity'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajendran Alagarsamy',
    role: 'Managing Director',
    company: 'Saraswathi Tex Group',
    comment: 'PrimeNest redefined my expectation of Indian real estate brokerages. Sridhar’s deep local insights and discreet handling of our corporate showroom lease made the entire transaction effortless. Absolute world-class advisory.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Anjali Karthikeyan',
    role: 'Software Architect & NRI investor',
    company: 'San Jose, California',
    comment: 'Acquiring an estate plot while being miles away in the US was daunting. Meenakshi’s meticulous legal walkthroughs and clear drone-tracked development reports gave me 100% confidence. Clear deeds, zero surprises.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Dr. Vignesh Ramachandran',
    role: 'Chief Cardiologist',
    company: 'Madurai Heart & Lung Institute',
    comment: 'The Vaigai Riverfront Manor exceeded my architectural aspirations. PrimeNest curated options that exactly matched my strict requirements for privacy and light. They act more like lifestyle consultants than traditional brokers.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does PrimeNest verify properties before showcasing?',
    answer: 'Every property featured undergoes a strict 3-tier vetting process. We verify encumbrance certificates (EC), parent document history, land category approvals (DTCP/LPA), and physical boundaries with our expert on-board legal advisors. You only view conflict-free, 100% certified title deeds.'
  },
  {
    id: 'faq-2',
    question: 'Do you offer assistance with NRI real estate investments?',
    answer: 'Absolutely. Over 40% of our luxury clientele consists of NRIs. We provide remote portfolio consulting, detailed structural validation videos, legal power-of-attorney execution guides, repatriation compliance assistance, and end-to-end property management services.'
  },
  {
    id: 'faq-3',
    question: 'What is the current luxury market appreciation in Madurai?',
    answer: 'Key premium corridors such as Anna Nagar, KK Nagar, and Alagar Kovil Road are experiencing a robust annual appreciation of 8.5% to 12.5% due to expanding commercial corridors, proximity to the High Court, and scarcity of premium consolidated land parcels.'
  },
  {
    id: 'faq-4',
    question: 'Can I arrange for personalized private property tours?',
    answer: 'Yes, we specialize in high-end, discreet private viewings. Upon request, we arrange private chauffeur-driven luxury vehicle transport and coordinate with our principal consultants for detailed 1-on-1 walkthroughs at a time of your convenience.'
  }
];
