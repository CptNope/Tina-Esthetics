import { PatientCaseStudy } from '../types';

export const CASE_STUDIES: PatientCaseStudy[] = [
  {
    id: 'case-1',
    name: 'Elena R.',
    age: 34,
    roleSubtitle: 'Marketing Director, Worcester',
    themeTitle: 'The Preventative Refresh & Lip Glow',
    primaryFocus: 'Upper face tension lines, subtle lip hydration & symmetry',
    patientGoal: 'Wanted to soften forehead expression lines from laptop screen squinting without looking frozen, plus subtle lip shape refinement without duck lips.',
    protocol: '44 Units Dysport (Glabella, Forehead, Crow’s feet) + 0.6 mL Restylane Kysse lip architecture definition.',
    totalCost: 820,
    solution: 'Single afternoon visit, micro-cannula lip technique for zero bruising, natural mobility preserved.',
    monthlyPayment: '$136 / mo',
    promoDetails: '6 Months at 0% APR via Cherry',
    quote: 'Dr. Tina listened so carefully. My coworkers keep telling me I look well-rested, but nobody guessed I had anything done!',
    badges: ['0% APR Qualified', 'Natural Result', 'Same-Day Resume Work']
  },
  {
    id: 'case-2',
    name: 'Marcus K.',
    age: 46,
    roleSubtitle: 'Architect & Father of 2, Shrewsbury',
    themeTitle: 'Full Mid-Face Architecture & Masseter Slimming',
    primaryFocus: 'Deep nasolabial folds, tired mid-face volume loss, nocturnal jaw clenching',
    patientGoal: 'Restore structural cheekbone support lost over his 40s, relieve painful jaw clenching, and achieve a sharper, rested masculine jaw contour.',
    protocol: '2 Syringes Juvederm Voluma (Deep periosteal cheek support) + 50 Units Botox in Masseter muscles bilaterally.',
    totalCost: 1980,
    solution: 'Physician anatomical mapping; relieved TMJ clenching while restoring natural midface lifting vector.',
    monthlyPayment: '$165 / mo',
    promoDetails: '12 Months Low-Interest via Cherry',
    quote: 'The tension headaches are gone, and my face looks like it did a decade ago. Having a medical doctor inject makes all the difference in confidence.',
    badges: ['High Impact', 'TMJ Relief & Aesthetics', '12-Month Plan']
  },
  {
    id: 'case-3',
    name: 'Sophia T.',
    age: 29,
    roleSubtitle: 'Bride-to-be, Grafton',
    themeTitle: 'Bridal Skin Reset: Microneedling + PRP + Tox',
    primaryFocus: 'Acne scarring, uneven skin texture, bridal glow preparation',
    patientGoal: 'Smooth out persistent cheek texture and achieve luminous makeup-free radiance 4 months ahead of her wedding day.',
    protocol: 'Package of 3 Medical Microneedling sessions with Autologous PRP + preventative Crow’s Feet & Lip Flip 4 weeks before ceremony.',
    totalCost: 1420,
    solution: 'Structured 12-week bridal timeline with customized clinical serums and post-care collagen optimization.',
    monthlyPayment: '$236 / mo',
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
    treatment: 'Botox & Subtle Lip Hydration',
    rating: 5,
    date: 'Verified Patient • 2 weeks ago',
    comment: 'Dr. Tina is the gold standard. As someone terrified of looking overdone, she spent 30 minutes just analyzing my facial muscle movements before touching a needle. The results are undetectable except that I look 5 years younger.',
    verified: true
  },
  {
    id: 't-2',
    name: 'Daniel S.',
    location: 'Westborough, MA',
    treatment: 'Masseter Tox & B12 Injections',
    rating: 5,
    date: 'Verified Patient • 1 month ago',
    comment: 'I went to Dr. Vo for severe jaw clenching and tension. Not only is the clenching gone, but my lower face is contoured and slimmed. Her clinic is pristine, private, and exceptionally welcoming.',
    verified: true
  },
  {
    id: 't-3',
    name: 'Amara P.',
    location: 'Holden, MA',
    treatment: 'Microneedling + PRP Series',
    rating: 5,
    date: 'Verified Patient • 3 weeks ago',
    comment: 'The difference in my skin texture after the PRP microneedling series is mindblowing. Large pores around my nose are minimized and my stubborn dark spots faded significantly. Worth every penny!',
    verified: true
  },
  {
    id: 't-4',
    name: 'Rachel B.',
    location: 'Shrewsbury, MA',
    treatment: 'Medical Weight Loss & Body Wellness',
    rating: 5,
    date: 'Verified Patient • 2 months ago',
    comment: 'Dr. Vo monitors your lab work, energy levels, and nutrition closely. It feels like having a personal physician in your corner every step of the journey. I lost 24 lbs safely and sustainably.',
    verified: true
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'financing' | 'safety';
}

export const FAQS: FAQItem[] = [
  {
    category: 'general',
    question: 'Who will be administering my injections and treatments?',
    answer: 'Every single aesthetic injectable, consultation, and medical treatment at Tinaesthetics is administered exclusively by Dr. Tina Vo, MD. We do not delegate injections to physician assistants or nurse injectors. You receive physician-level anatomical expertise at every visit.'
  },
  {
    category: 'general',
    question: 'Will I look unnatural or "frozen"?',
    answer: 'Never. Dr. Vo’s core philosophy is conservative enhancement that respects your natural facial dynamics. We aim for people to notice your vibrant, rested appearance—not your filler or neurotoxin. Subtle, nuanced corrections always win.'
  },
  {
    category: 'general',
    question: 'Is there a consultation fee?',
    answer: 'Our private comprehensive consultation fee is $75. If you decide to proceed with any treatment during your visit or book within 30 days, the entire $75 is credited directly toward your procedure cost.'
  },
  {
    category: 'financing',
    question: 'How does Cherry Financing work?',
    answer: 'Cherry allows you to break your treatment cost into manageable monthly payments. Approval takes less than 60 seconds with no impact on your credit score (soft credit check only). We offer 0% APR promotional options for 3 and 6 months, as well as extended plans up to 24 months.'
  },
  {
    category: 'financing',
    question: 'Can I finance a package or combine treatments?',
    answer: 'Yes! You can finance any treatment total between $200 and $10,000, including combination protocols like neurotoxin + filler packages or multi-session microneedling series.'
  },
  {
    category: 'safety',
    question: 'How do I prepare for my injectable appointment?',
    answer: 'Avoid blood-thinning agents (aspirin, ibuprofen, vitamin E, high doses of fish oil, and alcohol) for 48–72 hours prior to your appointment to minimize bruising risks. Arrive with a clean face free of heavy makeup if possible.'
  }
];
