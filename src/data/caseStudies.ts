import { PatientCaseStudy } from '../types';

export const CASE_STUDIES: PatientCaseStudy[] = [
  {
    id: 'case-1',
    name: 'Elena R.',
    age: 34,
    roleSubtitle: 'Marketing Director, Worcester',
    themeTitle: 'Forehead Line Smoothing & Lip Mini-Plump',
    primaryFocus: 'Upper face tension lines, subtle lip hydration & symmetry',
    patientGoal: 'Wanted to soften forehead expression lines without looking frozen, plus subtle lip shape refinement without duck lips.',
    protocol: '30 Units Neurotoxin ($13/unit) + Lip Mini-Plump ($450).',
    totalCost: 840,
    solution: 'Single afternoon visit, personalized dosing preserving expressive mobility, micro-cannula lip technique.',
    monthlyPayment: '$140 / mo',
    promoDetails: '6 Months at 0% APR via Cherry',
    quote: 'Dr. Tina listened so carefully. My coworkers keep telling me I look well-rested, but nobody guessed I had anything done!',
    badges: ['0% APR Qualified', 'Natural Result', 'Same-Day Resume Work']
  },
  {
    id: 'case-2',
    name: 'Marcus K.',
    age: 46,
    roleSubtitle: 'Architect & Father of 2, Shrewsbury',
    themeTitle: 'Masseter Jaw Slimming & Cheek Volume Support',
    primaryFocus: 'Nocturnal jaw clenching, TMJ headaches, tired mid-face volume loss',
    patientGoal: 'Relieve painful jaw clenching, achieve a sculpted lower face, and restore youthful cheek structure.',
    protocol: 'Cheek filler ($750) + 40 Units Masseter Neurotoxin ($520).',
    totalCost: 1270,
    solution: 'Primary care clinician evaluation; relieved clenching while restoring natural midface support.',
    monthlyPayment: '$211 / mo',
    promoDetails: '6 Months 0% APR Plan',
    quote: 'The tension headaches are gone, and my jawline is contoured. Having Dr. Vo’s dual primary care and aesthetic background gave me complete confidence.',
    badges: ['TMJ Relief & Aesthetics', 'High Impact', '0% APR Qualified']
  },
  {
    id: 'case-3',
    name: 'Sophia T.',
    age: 29,
    roleSubtitle: 'Bride-to-be, Grafton',
    themeTitle: 'Bridal Skin Reset: Microneedling + V-Tech Exosomes',
    primaryFocus: 'Acne scarring, enlarged pores, bridal glow preparation',
    patientGoal: 'Smooth out persistent cheek texture and achieve luminous makeup-free radiance ahead of her wedding day.',
    protocol: 'Package of 3 Medical Microneedling sessions paired with V-Tech PDRN & exosome solution ($1,350).',
    totalCost: 1350,
    solution: 'Structured 12-week bridal timeline spaced 4 weeks apart with V-Tech cellular renewal solution.',
    monthlyPayment: '$225 / mo',
    promoDetails: '6 Months 0% APR via Cherry',
    quote: 'My skin tone was completely transformed for our wedding photos. My foundation went on like glass. Dr. Tina’s plan was flawless.',
    badges: ['Bridal Favorite', 'Texture Transformation', '0% APR Qualified']
  }
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Jessica M.',
    location: 'Worcester, MA',
    treatment: 'Botox ($13/unit) & Lip Mini-Plump',
    rating: 5,
    date: 'Verified Client • 2 weeks ago',
    comment: 'Dr. Tina is the gold standard in Worcester. She took the time to explain every single detail, never rushed me, and gave me the most natural lip results. The clinic at 1086 Pleasant St is spotless and calming.',
    verified: true
  },
  {
    id: 't-2',
    name: 'Daniel S.',
    location: 'Westborough, MA',
    treatment: 'Masseter Injections & Vitamin B12',
    rating: 5,
    date: 'Verified Client • 1 month ago',
    comment: 'I went to Dr. Vo for severe jaw clenching. Not only is the clenching and tension gone, but my lower face is contoured. Booking on Square was effortless.',
    verified: true
  },
  {
    id: 't-3',
    name: 'Amara P.',
    location: 'Holden, MA',
    treatment: 'Microneedling with V-Tech Exosomes',
    rating: 5,
    date: 'Verified Client • 3 weeks ago',
    comment: 'The difference in my skin texture after the 3-session V-Tech microneedling package is amazing. Enlarged pores around my nose tightened and my stubborn marks faded.',
    verified: true
  },
  {
    id: 't-4',
    name: 'Rachel B.',
    location: 'Shrewsbury, MA',
    treatment: 'Medical Weight Loss Program (GLP-1)',
    rating: 5,
    date: 'Verified Client • 2 months ago',
    comment: 'Dr. Vo reviews your lab work and lifestyle closely. Having a doctoral nurse practitioner monitoring you every step makes all the difference. The $99 consult was applied to my first month.',
    verified: true
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'neurotoxin' | 'fillers' | 'skin-wellness' | 'appointments-pricing';
}

export const FAQS: FAQItem[] = [
  {
    category: 'neurotoxin',
    question: 'What are neurotoxins and what brands does Dr. Vo offer?',
    answer: 'Neurotoxins are prescription muscle relaxers that soften skin, prevent and decrease wrinkles, decrease muscle tension (such as TMJ jaw clenching), and decrease sweating (hyperhidrosis). Dr. Tina Vo offers Daxxify, Botox®, Dysport®, and Xeomin®.'
  },
  {
    category: 'neurotoxin',
    question: 'What is the cost of neurotoxin injections?',
    answer: 'Injections are based on units at $13 per unit. Dosing is customized based on your individual facial muscle strength, treatment areas, and aesthetic goals. Follow our Instagram @TinaestheticsByDrVo for seasonal promotions!'
  },
  {
    category: 'neurotoxin',
    question: 'How many units will I need and what areas can be treated?',
    answer: 'Common treatment areas include forehead lines, glabella ("11s" between eyebrows), crow\'s feet & jelly rolls (5–15 units), bunny lines on the nose, lip flip, chin dimpling, neck bands, and masseters for jaw slimming & clenching (15–50 units). Exact dosing is finalized during your one-on-one consultation.'
  },
  {
    category: 'neurotoxin',
    question: 'When will I see results and how long does it last?',
    answer: 'You may notice decreased muscle movement within several days, but allow two full weeks (14 days) to evaluate the full impact. Results typically last 2 to 6 months, and most clients maintain their refreshed appearance with visits every 3 to 4 months.'
  },
  {
    category: 'neurotoxin',
    question: 'What should I do before and avoid after my neurotoxin injection?',
    answer: 'Prior to your visit, arrive with a clean face and avoid alcohol and NSAIDs (ibuprofen, Advil, Aleve) for 24 hours to minimize bruising. After injection, avoid vigorous exercise, bending over/forward, lying face down, tight hats/glasses compression, and facials for 24 hours.'
  },
  {
    category: 'neurotoxin',
    question: 'Who cannot receive neurotoxin injections?',
    answer: 'Individuals who have had an allergic reaction to neurotoxins, individuals with a history of neuromuscular disease (e.g. Myasthenia Gravis), and pregnant or breastfeeding individuals cannot receive treatment.'
  },
  {
    category: 'fillers',
    question: 'What are dermal fillers and what is the difference between Mini Plump and Full Plump?',
    answer: 'Dermal fillers are smooth gel-like substances made of hyaluronic acid (naturally occurring in the body) to restore hydration and volume. Mini Plump ($450) is designed for subtle hydration, shape enhancement, and first-time clients. Full Plump ($650) provides comprehensive volume, symmetry, and pillowy fullness.'
  },
  {
    category: 'fillers',
    question: 'How much are cheek, jawline, and chin fillers?',
    answer: 'Cheek filler starts at $750 (with additional syringes at $500 each) to restore mid-face support and soften smile lines. Jawline and chin filler also starts at $750 (additional syringes $500 each) to enhance profile definition and structural balance.'
  },
  {
    category: 'fillers',
    question: 'What is the aftercare and settling timeline for fillers?',
    answer: 'Mild temporary swelling and tenderness are normal and settle over the course of 2 weeks. Avoid scheduling filler within 2–4 weeks of major life events. Avoid spicy foods, strenuous workouts, alcohol, and excessive heat for 24 hours post-treatment. Cold compresses may be gently applied.'
  },
  {
    category: 'skin-wellness',
    question: 'What makes Medical Microneedling with V-Tech unique?',
    answer: 'We pair medical-grade microneedling with V-Tech, an advanced skin-rejuvenation solution formulated with PDRN (polydeoxyribonucleotide) and exosome-derived ingredients to accelerate collagen synthesis, tighten enlarged pores, and smooth acne scars. Pricing is $500 per session or $1,350 for a recommended series of 3 (saving $150).'
  },
  {
    category: 'skin-wellness',
    question: 'How does PRP (Platelet-Rich Plasma) Rejuvenation work?',
    answer: 'PRP utilizes your body\'s own concentrated natural growth factors isolated from a simple in-office blood draw. It is carefully injected into the under-eye area to revitalize dark circles, crepey skin, and mild hollowness, or into the scalp to stimulate hair density and follicle health ($500 per session; 3 sessions recommended).'
  },
  {
    category: 'skin-wellness',
    question: 'How does the Physician-Supervised Medical Weight Loss Program work?',
    answer: 'Our program begins with an initial comprehensive consult ($99), which reviews your metabolic labs, lifestyle, and wellness goals. If treatment is initiated, the $99 is 100% applied toward your first month! Monthly programs start at $300/month and include weekly GLP-1 medications (Semaglutide / Tirzepatide), all injection supplies, weekly check-ins, and clinician monitoring.'
  },
  {
    category: 'skin-wellness',
    question: 'What are Vitamin B12 injections and how much do they cost?',
    answer: 'Vitamin B12 is administered as a quick intramuscular injection in the upper arm to boost daily energy, metabolism, cognitive focus, and immune health. Weekly 1ml injections are $25, and high-potency monthly 3ml injections are $40.'
  },
  {
    category: 'appointments-pricing',
    question: 'Where is the clinic located and what are your hours?',
    answer: 'Tinaesthetics by Dr. Vo is located at 1086 Pleasant Street, Worcester, MA 01602 (in the Tatnuck / West Worcester area) with convenient on-site parking. Hours are variable and by appointment. You can view real-time openings and reserve directly on our live Square calendar.'
  },
  {
    category: 'appointments-pricing',
    question: 'How can I contact Dr. Vo or ask quick questions?',
    answer: 'You can text or call 872-222-9332 (text message is preferred for fastest response), email DrVoAesthetics@gmail.com, direct message on Instagram @TinaestheticsByDrVo, or book online at https://tinaesthetics.square.site/.'
  },
  {
    category: 'appointments-pricing',
    question: 'Do you offer payment plans and financing?',
    answer: 'Yes! We support flexible payment plans via Cherry financing, allowing you to split your treatment into comfortable monthly installments (including 0% APR promotional options). Checking your eligibility takes under 60 seconds with no impact on your credit score.'
  }
];
