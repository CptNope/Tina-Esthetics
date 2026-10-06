import { PricingCategory } from '../types';

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    category: 'Neurotoxin Injections (Daxxify, Botox®, Dysport®, Xeomin®)',
    description: 'Muscle relaxers administered by Dr. Tina Vo to smooth skin, prevent/decrease wrinkles, decrease sweating, and relieve jaw tension ($13 / unit).',
    items: [
      {
        name: 'Neurotoxin Injections (Per Unit)',
        pricing: '$13 / unit',
        details: 'Dosing tailored to your goals. Offered brands include Daxxify, Botox, Dysport, and Xeomin. Follow @TinaestheticsByDrVo for promotions.',
        monthlyEstimate: 'From $35/mo with Cherry',
        tag: 'Standard Rate',
      },
      {
        name: 'Crow’s Feet & Jelly Rolls (Both Eyes)',
        pricing: '$65 – $195',
        details: 'Typically 5 – 15 units. Softens dynamic smile lines around the eyes.',
        monthlyEstimate: 'Pay in full or add-on',
      },
      {
        name: 'Glabella ("11s") & Forehead',
        pricing: '$260 – $520',
        details: 'Typically 20 – 40 units based on expressive muscle strength and desired mobility level.',
        monthlyEstimate: '$45 – $87 / mo (6-mo plan)',
        tag: 'Most Popular',
      },
      {
        name: 'Masseter Injections (Jawline Slimming & TMJ)',
        pricing: '$195 – $650',
        details: 'Typically 15 – 50 units. Decreases masseter muscle bulk, relieves clenching, and slims lower face.',
        monthlyEstimate: '$33 – $108 / mo (6-mo plan)',
        tag: 'Patient Favorite',
      },
      {
        name: 'Lip Flip / Bunny Lines / Chin Dimpling',
        pricing: '$52 – $130',
        details: 'Targeted micro-dosing (4 – 10 units) for subtle outward upper lip roll, nose creases, or pebbled chin.',
        monthlyEstimate: 'Pay in full or add-on',
      },
      {
        name: 'Hyperhidrosis (Sweat Reduction)',
        pricing: 'Custom by area ($13/unit)',
        details: 'Targeted for underarms, hands, feet, nape of neck, or under-breast to decrease excessive sweating.',
        monthlyEstimate: 'Flexible payment plans',
      },
    ],
  },
  {
    category: 'Hyaluronic Acid Dermal Fillers',
    description: 'Gel-like hyaluronic acid naturally found in the body that helps maintain hydration, restore lost volume, and soften facial contours.',
    items: [
      {
        name: 'Mini Plump (Lip Filler)',
        pricing: '$450',
        details: 'Subtle lip enhancement to refine lip border, hydrate, and add delicate symmetry without excessive volume.',
        monthlyEstimate: '$75 / mo (6-mo 0% APR)',
        tag: 'First-Timer Favorite',
      },
      {
        name: 'Full Plump (Lip Filler)',
        pricing: '$650',
        details: 'Comprehensive lip enhancement for enhanced shape, hydration, symmetry, and pillowy volume.',
        monthlyEstimate: '$108 / mo (6-mo 0% APR)',
        tag: 'Bestseller',
      },
      {
        name: 'Cheek Filler (Mid-Face Volume Restoration)',
        pricing: 'Starts at $750 (+$500/additional syringe)',
        details: 'Restores volume lost with aging or weight loss. Lifts structural support and softens deeper smile lines.',
        monthlyEstimate: '$125 / mo (6-mo 0% APR)',
        tag: 'High Impact',
      },
      {
        name: 'Jawline + Chin Contouring',
        pricing: 'Starts at $750 (+$500/additional syringe)',
        details: 'Improves facial balance, definition, and lateral contour while restoring youthful jawline structure.',
        monthlyEstimate: '$125 / mo (6-mo 0% APR)',
      },
    ],
  },
  {
    category: 'Medical Microneedling (with V-Tech PDRN & Exosomes)',
    description: 'Minimally invasive collagen induction paired with V-Tech (formulated with PDRN and exosome-derived ingredients) for texture, pores, and scars.',
    items: [
      {
        name: 'Single Microneedling Session + V-Tech',
        pricing: '$500 / session',
        details: 'Includes topical prescription numbing cream (45–60 min appointment) and V-Tech PDRN/exosome skin renewal solution.',
        monthlyEstimate: '$83 / mo (6-mo 0% APR)',
      },
      {
        name: 'Microneedling Series of 3 (Recommended)',
        pricing: '$1,350 package (Save $150)',
        details: 'Three comprehensive sessions spaced 4–6 weeks apart. Proven protocol for cumulative collagen remodeling.',
        monthlyEstimate: '$225 / mo (6-mo 0% APR)',
        tag: 'Best Value Series',
      },
    ],
  },
  {
    category: 'PRP Rejuvenation (Platelet-Rich Plasma)',
    description: 'Regenerative autologous treatment utilizing your own blood platelets and growth factors for natural skin & hair rejuvenation.',
    items: [
      {
        name: 'Under-Eye PRP Rejuvenation',
        pricing: '$500 / session',
        details: 'Injected into the delicate under-eye area to improve dark circles, fine lines, crepey skin texture, and mild hollowness.',
        monthlyEstimate: '$83 / mo (6-mo 0% APR)',
        tag: 'Natural Under-Eye',
      },
      {
        name: 'Scalp PRP (Hair Loss & Follicle Restoration)',
        pricing: '$500 / session',
        details: 'Injected into the scalp to target hair thinning, shedding, density, and follicle health. 3 sessions recommended.',
        monthlyEstimate: '$83 / mo (6-mo 0% APR)',
      },
    ],
  },
  {
    category: 'Physician-Supervised Medical Weight Loss (GLP-1)',
    description: 'Doctoral nurse practitioner led GLP-1 therapy (Semaglutide / Tirzepatide) with comprehensive lifestyle and metabolic monitoring.',
    items: [
      {
        name: 'Comprehensive Initial Weight Loss Consult',
        pricing: '$99 (Applied to 1st Month)',
        details: '1-on-1 evaluation, lifestyle & laboratory review, GLP-1 candidacy education. $99 is 100% applied toward your first month if initiated.',
        monthlyEstimate: 'Credited toward treatment',
        tag: '100% Credited',
      },
      {
        name: 'Monthly Weight Loss Protocol (GLP-1)',
        pricing: 'Starting at $300 / month',
        details: 'Includes medication and supplies (4 injections/month), clinician support, optional weekly weigh-ins/check-ins, and dosage titration.',
        monthlyEstimate: 'Auto-billed monthly',
        tag: 'Clinician Monitored',
      },
    ],
  },
  {
    category: 'Vitamin B12 Injections',
    description: 'Intramuscular injections administered into the upper arm to boost daily energy, metabolism, cognitive function, and immunity.',
    items: [
      {
        name: 'Weekly B12 Injection (1ml)',
        pricing: '$25 / injection',
        details: 'Quick upper-arm intramuscular delivery. Ideal for weekly energy boost and sustained metabolic support.',
        monthlyEstimate: 'Walk-in or add-on',
      },
      {
        name: 'Monthly B12 Injection (3ml)',
        pricing: '$40 / injection',
        details: 'High-potency monthly dose for long-lasting energy, mood elevation, and cellular health.',
        monthlyEstimate: 'Walk-in or add-on',
        tag: 'Popular Add-On',
      },
    ],
  },
];
