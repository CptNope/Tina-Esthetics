export type PageId = 
  | 'home' 
  | 'about-dr-vo' 
  | 'treatments' 
  | 'gallery'
  | 'pricing'
  | 'payment-plans-financing' 
  | 'location-hours' 
  | 'contact';

export type TreatmentCategory = 'all' | 'injectables' | 'skin' | 'wellness';

export interface TreatmentItem {
  id: string;
  category: 'injectables' | 'skin' | 'wellness';
  tag: string;
  title: string;
  subtitle: string;
  priceDisplay: string;
  description: string;
  image: string;
  specs: {
    duration: string;
    downtime: string;
    highlight1Label: string;
    highlight1Value: string;
    highlight2Label: string;
    highlight2Value: string;
  };
  keyPoints: string[];
  note: string;
  candidates?: string[];
  resultsLongevity?: string;
  squareServiceUrl?: string;
}

export interface PatientCaseStudy {
  id: string;
  name: string;
  age: number;
  roleSubtitle: string;
  themeTitle: string;
  primaryFocus: string;
  patientGoal: string;
  protocol: string;
  totalCost: number;
  solution: string;
  monthlyPayment: string;
  promoDetails: string;
  quote: string;
  badges: string[];
}

export interface GalleryItem {
  id: string;
  category: 'injectables' | 'skin' | 'wellness';
  title: string;
  patientProfile: string;
  treatment: string;
  procedureDetails: string;
  downtime: string;
  beforeImage: string;
  afterImage: string;
  resultsSummary: string;
  physicianNote: string;
}

export interface PricingCategory {
  category: string;
  description: string;
  items: {
    name: string;
    pricing: string;
    details: string;
    monthlyEstimate?: string;
    tag?: string;
  }[];
}
