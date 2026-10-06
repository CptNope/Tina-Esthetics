import { TreatmentItem } from '../types';

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'neurotoxin',
    category: 'injectables',
    tag: 'Wrinkle Relaxation & Prevention',
    title: 'Neurotoxin Injections (Daxxify, Botox®, Dysport®, Xeomin®)',
    subtitle: 'Daxxify • Botox • Dysport • Xeomin',
    priceDisplay: '$13 / unit',
    description: 'Precision smoothing of dynamic expression lines with facial mobility preservation. Targeted for forehead horizontal creases, glabellar “11s”, crow’s feet and jelly rolls, bunny lines (nose), lip flip, chin dimpling, neck bands, masseter facial slimming (jaw tension & bruxism), and hyperhidrosis (excessive sweating in underarms, hands, feet).',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxwWNVCyXGDIchuVakxdJOzkMzR2SF_tm07Xp4C0GvGx5v-oxlBWIKtzz_eSI_Hl3kmUYwnjBFjjZw9opRiN4HF2Vy-owQfBY3hSorY2GVUgjbrtjfM7O9oBsmzBEedT7aejKaq40pYS3zhZ_jL9NMlasm7L7uE0-PJO0CCjUtgBH__IhlQqN_HW1KXWm0of38tZGNQ8j1whE3GI_oc911Niu4kHg37uWhNxkrb5gsiPhoK4qZfGYS',
    specs: {
      duration: '15–30 min',
      downtime: 'Zero / Minimal',
      highlight1Label: 'Full Impact',
      highlight1Value: '14 Days',
      highlight2Label: 'Longevity',
      highlight2Value: '2–6 Months'
    },
    keyPoints: [
      'Injections based on units ($13/unit)',
      'Offers Daxxify, Botox, Dysport, and Xeomin',
      'Crows feet: 5–15 units | Masseters: 15–50 units',
      'Follow social media @TinaestheticsByDrVo for promotions'
    ],
    note: '*Avoid alcohol and NSAIDs (ibuprofen, Advil, Aleve) 24 hours prior to minimize bruising. Avoid strenuous exercise or lying down for 24 hours post-treatment.',
    squareServiceUrl: 'https://tinaesthetics.square.site/'
  },
  {
    id: 'dermal-fillers',
    category: 'injectables',
    tag: 'Contour, Hydration & Volume Restoration',
    title: 'Dermal Fillers (Hyaluronic Acid)',
    subtitle: 'Lips • Cheeks • Jawline • Chin',
    priceDisplay: 'Lips from $450 | Cheeks & Jawline from $750',
    description: 'Hyaluronic acid gel matrices naturally found in the body that help maintain deep hydration and volume. Used to enhance lip shape and symmetry, restore mid-face cheek support lost with aging or weight loss, soften deeper smile lines, and sculpt chin and jawline definition.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxVyd1CceBCfRmDuJGmIbIJjhPRtxOLOEtviiRQOehR5VT48IrTOb-tHH2MVwUP-b4s_f3I8MTZmaiaL0ord-qWmZ-wJVe7INjgiSANgE1Uozt6vJj56SjvZLPicPRNEznr0tEV1qAQ8rrJ0OOMyaIcfuPc4nFPSAPdiX8U5NFnuLMk50Fg2gn1Q1keXp3ZQZ_LH7br7Wzc1MCoXNcx2m9YO8RxdaNWwadpQRnhMimNmbkYMhaZJqx',
    specs: {
      duration: '30–45 min',
      downtime: 'Mild temporary swelling',
      highlight1Label: 'Settling Time',
      highlight1Value: '2 Full Weeks',
      highlight2Label: 'Longevity',
      highlight2Value: '9–18 Months'
    },
    keyPoints: [
      'Lips: Mini Plump $450 | Full Plump $650',
      'Cheeks: Starts at $750 (additional syringe $500 each)',
      'Jawline & Chin: Starts at $750 (additional syringe $500 each)',
      'Natural-looking, balanced facial harmony'
    ],
    note: '*Avoid scheduling filler within 2–4 weeks of major events. Avoid spicy foods, strenuous exercise, and excessive heat for 24 hours post-treatment.',
    squareServiceUrl: 'https://tinaesthetics.square.site/'
  },
  {
    id: 'microneedling',
    category: 'skin',
    tag: 'Skin Texture & Exosome Rejuvenation',
    title: 'Medical Microneedling (with V-Tech PDRN & Exosomes)',
    subtitle: 'Paired with V-Tech PDRN & Exosomes',
    priceDisplay: '$500 / Session • $1,350 for Series of 3',
    description: 'Minimally invasive skin rejuvenation creating controlled sterile micro-channels that trigger intrinsic collagen and elastin remodeling. Paired with V-Tech, an advanced skin-rejuvenation solution formulated with PDRN and exosome-derived ingredients to maximize renewal, hydration, pore tightening, and scar smoothing.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvDqYtDbfGa7V_U9YDqUtnUnl_eHcuVg5aVsLSO3VR8eNzOLZ18Lv5euJOPzTlzIjARjBsUH8m5RYSc16kK8eF6vzWjeldNd779dXpLhDyqu0hIvbKGCeFjM8y0K8hWzRJnw0RMoxftrnUw4PFscwN5e2JSnoL97fSHesDJIR9MT0XohdCvH5ScAgRwWr3wLDNpJhD6Am0b7Rddl40Dk72kbiin-26KSzjnGzP1ZEaWDuVZeXsc-yb',
    specs: {
      duration: '45–60 min (with numbing)',
      downtime: '1–3 days mild pinkness',
      highlight1Label: 'V-Tech Solution',
      highlight1Value: 'PDRN + Exosomes',
      highlight2Label: 'Recommended Series',
      highlight2Value: '3 Treatments (4-6 wks apart)'
    },
    keyPoints: [
      'Fades fine lines, acne scars & textural irregularities',
      'Enlarged pore reduction & hyperpigmentation softening',
      'High-potency prescription numbing cream for comfort',
      'Package of 3 saves $150 ($1,350 total)'
    ],
    note: '*Avoid direct sun exposure and follow all clinical aftercare instructions while skin heals.',
    squareServiceUrl: 'https://tinaesthetics.square.site/'
  },
  {
    id: 'prp',
    category: 'skin',
    tag: 'Autologous Cellular Growth Factors',
    title: 'PRP Rejuvenation (Platelet-Rich Plasma)',
    subtitle: 'Under-Eye & Scalp Rejuvenation',
    priceDisplay: '$500 per session',
    description: 'Regenerative treatment harnessing your body\'s own concentrated platelets and natural growth factors from a simple in-office blood sample. Centrifuged to isolate platelet-rich plasma and delicately injected to revitalize dark circles, crepey under-eye skin, and mild hollowness, or into the scalp to stimulate hair density and follicle health.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlsHuZ6qmCOtTLII9SkDKxZ2QGmHilnNOy0m0MYstKF2a_CL7bRvyD1s1lz2EpOw6abj3NNDvVCD9ZO2o2ppwfKqMGZ4dtodFSTdGVblF0k4t3Kyt7tPTMMINW0WlOF2tMvRCUNRdDJZjbIA7Pwpoa7D9TQxNzsEVd0E2-yWknYvwNFUslWKuTEZnPGq7nX94TeeoF0UI2CaW6v4v5Z19u9RSVj-QBLi6BMjpU3-nzt3bHKNA3Mk02',
    specs: {
      duration: '45–60 min',
      downtime: 'Mild temporary swelling',
      highlight1Label: 'Source',
      highlight1Value: '100% Autologous (Natural)',
      highlight2Label: 'Cadence',
      highlight2Value: '3 Sessions (4-6 wks apart)'
    },
    keyPoints: [
      'Under-Eye: Improves dark circles, crepey skin & hollowness',
      'Scalp: Targets hair thinning, shedding, density & follicle health',
      'No synthetic fillers or artificial chemicals',
      'Maintenance repeated every 3–6 months'
    ],
    note: '*Results develop gradually over several weeks as intrinsic collagen remodeling occurs.',
    squareServiceUrl: 'https://tinaesthetics.square.site/'
  },
  {
    id: 'weight-loss',
    category: 'wellness',
    tag: 'Medical Weight Loss & Metabolic Health',
    title: 'Medical Weight Loss Program (GLP-1 Therapy)',
    subtitle: 'Semaglutide • Tirzepatide Protocols',
    priceDisplay: 'Initial Consult $99 • Monthly from $300/mo',
    description: 'Evidence-based metabolic weight loss supervised by a primary care clinician and doctoral nurse practitioner. Utilizing once-weekly subcutaneous GLP-1 receptor agonists (Semaglutide / Tirzepatide) that slow digestion, reduce appetite, and sustain fullness, paired with comprehensive lifestyle guidance and ongoing monitoring.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuWqmqyvUrkVDaK_wiECKRuX0LXmoMk1-fZUwOhbj1sckGnNPqZqKl3hTJjbp2U4db1Pb3vlrplvn7Jh1ZSDtbiMT0E8-D74829bk0eItUkbDPXcstsmMQoxOFl0RqEzbBLk0cGQc8PrAKBCzeTfF2ew8scJ-XtFKhVFh4-w4iuOKpBDSxc-El_mfDJ9SRuJ6lxR9BWfMGVZE3LPi0jvNZP820iv7pv1gcrjIXpLZyFwyauRvF2pTW',
    specs: {
      duration: 'Weekly Injections / Monthly Follow-Ups',
      downtime: 'Zero',
      highlight1Label: 'Initial Consult',
      highlight1Value: '$99 (Credited to Month 1)',
      highlight2Label: 'Monthly Program',
      highlight2Value: 'Starting at $300 / mo'
    },
    keyPoints: [
      'Consult includes full lab review, lifestyle & wellness assessment',
      'Monthly fee includes medication & supplies (4 injections/month)',
      'Clinician support, optional weekly check-ins & weigh-ins',
      'Side effect management & individualized dosage titration'
    ],
    note: '*Initial $99 consult fee is 100% applied toward your first month if treatment is initiated.',
    squareServiceUrl: 'https://tinaesthetics.square.site/'
  },
  {
    id: 'vitamin-b12',
    category: 'wellness',
    tag: 'Energy, Metabolism & Cellular Vitality',
    title: 'Vitamin B12 Injections',
    subtitle: 'Energy • Metabolism • Cognitive Function',
    priceDisplay: 'Weekly (1ml): $25 • Monthly (3ml): $40',
    description: 'Quick intramuscular vitamin B12 injection administered into the upper arm to bypass digestive absorption. Delivers rapid cellular bio-availability to boost daily energy levels, fire up metabolic rate, sharpen focus and cognitive clarity, and support immune health, hair, skin, and nails.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHTK9E898Tn9ewjoVOGz7SXvXbw1xlIq6JPrq8rbUD_Ud8YGgr4k6jkctZZR_l6rWiHNVHut_1lVa8jpCDwEV3h9Njp5r9eAfCGstu5nIO8bF6xHVWmPQ9fp8tJHDrWkRNbEEBVb6KBOp2oERFePaJroR-4w_SPiBrIASi-46QZy-hbGpFLVn39HXRo0zWOrsdEY4C4QF9iiDVWb83gDHZ4TiUOQHylaPLHoXSZOW2OZC45mzvYxL1',
    specs: {
      duration: '5–10 min',
      downtime: 'Zero',
      highlight1Label: 'Delivery',
      highlight1Value: 'Intramuscular (Upper Arm)',
      highlight2Label: 'Pricing',
      highlight2Value: '$25 (1ml) / $40 (3ml)'
    },
    keyPoints: [
      'Elevates energy, metabolism & mood',
      'Supports immune function, hair, skin, and nails',
      'Administered in minutes with virtually zero downtime',
      'Easily added onto any cosmetic injectable appointment'
    ],
    note: '*Treatment frequency customized according to your individual wellness goals.',
    squareServiceUrl: 'https://tinaesthetics.square.site/'
  }
];
