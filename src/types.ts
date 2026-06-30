export interface Agent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  experience: string;
  bio: string;
}

export interface Property {
  id: string;
  title: string;
  type: 'Villa' | 'Apartment' | 'Premium Plot' | 'Commercial Space' | 'Farm House' | 'Luxury Home';
  price: string;
  rawPrice: number; // For filtering
  location: string;
  beds?: number;
  baths?: number;
  area: string;
  status: 'For Sale' | 'For Rent' | 'Exclusive' | 'New Launch';
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  agentId: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
