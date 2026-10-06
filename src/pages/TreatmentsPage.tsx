import React, { useState, useMemo } from 'react';
import { PageId, TreatmentCategory, TreatmentItem } from '../types';
import { TREATMENTS } from '../data/treatments';
import { TreatmentDetailModal } from '../components/TreatmentDetailModal';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Info, 
  CreditCard,
  ChevronDown,
  Eye
} from 'lucide-react';

interface TreatmentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (treatmentId?: string) => void;
  onOpenFinancing: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenFinancing,
}) => {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedModalTreatment, setSelectedModalTreatment] = useState<TreatmentItem | null>(null);

  const filteredTreatments = useMemo(() => {
    if (activeCategory === 'all') return TREATMENTS;
    return TREATMENTS.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  const prePostGuidelines = [
    {
      title: 'Pre-Treatment Preparation (48–72 Hours Prior)',
      points: [
        'Avoid blood-thinning compounds: aspirin, ibuprofen (Advil/Motrin), vitamin E, ginseng, and high-dose omega-3 fish oil to reduce potential bruising.',
        'Refrain from alcohol consumption for 24 to 48 hours prior to cosmetic injections.',
        'Arrive with clean skin free of heavy makeup, tinted sunscreens, or heavy facial moisturizers.',
        'Notify Dr. Tina Vo of any history of cold sores prior to lip injections to receive prophylactic antiviral medication if needed.',
      ],
    },
    {
      title: 'Immediate Post-Treatment Care (First 24–48 Hours)',
      points: [
        'Keep treated areas clean; refrain from touching, rubbing, or massaging injection sites unless explicitly instructed.',
        'For neurotoxins: remain upright for 4 hours; do not lie flat or engage in vigorous inverted yoga/workouts.',
        'Avoid extreme heat: saunas, steam rooms, hot yoga, and direct intense sun exposure for 48 hours.',
        'Apply cold compresses gently if mild swelling or tender pin-point bruising occurs.',
      ],
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
          <Sparkles className="w-3.5 h-3.5 text-[#6C7A6D]" />
          <span>Curated Treatment Menu</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1C1A] font-medium tracking-tight">
          Aesthetic Procedures & Injections
        </h1>
        <p className="text-sm sm:text-base text-[#5C5A53] max-w-2xl mx-auto leading-relaxed">
          Every procedure is performed exclusively by <strong className="text-[#1C1C1A]">Dr. Tina Vo, MD</strong>. We combine anatomical precision, FDA-cleared products, and artistic balance to achieve effortless, natural refinement.
        </p>

        {/* Quick Links banner */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#795649] pt-2">
          <button
            onClick={() => onNavigate('pricing')}
            className="hover:underline flex items-center gap-1"
          >
            <span>View Full Pricing Guide</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('gallery')}
            className="hover:underline flex items-center gap-1"
          >
            <span>See Before & After Gallery</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <span>•</span>
          <button
            onClick={onOpenFinancing}
            className="hover:underline flex items-center gap-1"
          >
            <span>0% APR Payment Calculator</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {[
            { id: 'all', label: 'All Treatments' },
            { id: 'injectables', label: 'Cosmetic Injectables' },
            { id: 'skin', label: 'Skin & Collagen' },
            { id: 'wellness', label: 'Wellness & Metabolic' },
          ].map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as TreatmentCategory)}
                className={`py-2.5 px-5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#1C1C1A] text-white shadow-sm'
                    : 'bg-white border border-[#DDD8CE] text-[#5C5A53] hover:border-[#1C1C1A] hover:text-[#1C1C1A]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredTreatments.map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-[#E6E1D8] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Image & Tag */}
              <div 
                className="relative h-64 sm:h-72 bg-zinc-100 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedModalTreatment(treatment)}
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#FCF9F3]/95 backdrop-blur-sm text-[#1C1C1A] text-[11px] font-semibold px-3 py-1 rounded tracking-wider uppercase border border-[#E6E1D8]">
                  {treatment.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#1C1C1A]/85 backdrop-blur-sm text-[#FCF9F3] text-xs font-mono font-medium px-3 py-1.5 rounded">
                  {treatment.priceDisplay}
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-[#1C1C1A] text-xs uppercase tracking-wider font-semibold py-2 px-4 rounded shadow flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#795649]" /> Quick View Protocol
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 
                      onClick={() => setSelectedModalTreatment(treatment)}
                      className="font-serif text-2xl text-[#1C1C1A] font-medium cursor-pointer hover:text-[#795649] transition-colors"
                    >
                      {treatment.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#795649] font-medium mt-1">
                      {treatment.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#5C5A53] leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-4 bg-[#FAF7F2] rounded-xl border border-[#E8E3D8] text-xs">
                    <div>
                      <span className="text-[#86837A] block text-[10px] uppercase tracking-wider">Duration</span>
                      <span className="font-medium text-[#1C1C1A]">{treatment.specs.duration}</span>
                    </div>
                    <div>
                      <span className="text-[#86837A] block text-[10px] uppercase tracking-wider">Downtime</span>
                      <span className="font-medium text-[#1C1C1A]">{treatment.specs.downtime}</span>
                    </div>
                    <div>
                      <span className="text-[#86837A] block text-[10px] uppercase tracking-wider">
                        {treatment.specs.highlight1Label}
                      </span>
                      <span className="font-medium text-[#1C1C1A]">{treatment.specs.highlight1Value}</span>
                    </div>
                    <div>
                      <span className="text-[#86837A] block text-[10px] uppercase tracking-wider">
                        {treatment.specs.highlight2Label}
                      </span>
                      <span className="font-medium text-[#1C1C1A]">{treatment.specs.highlight2Value}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#4A4946]">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {treatment.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-[#5C5A53]">
                          <Check className="w-3.5 h-3.5 text-[#6C7A6D] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note */}
                  {treatment.note && (
                    <p className="text-[11px] text-[#86837A] italic bg-[#FAF7F2]/50 p-2.5 rounded border border-[#EDE8DE]">
                      {treatment.note}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#F0ECE4] flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(treatment.id)}
                    className="w-full sm:w-auto flex-1 bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3 px-5 rounded transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C59B8B]" />
                    <span>Book This Treatment</span>
                  </button>
                  <button
                    onClick={() => setSelectedModalTreatment(treatment)}
                    className="w-full sm:w-auto px-4 py-3 border border-[#DDD8CE] text-xs uppercase tracking-wider font-semibold text-[#4A4946] hover:text-[#1C1C1A] hover:border-[#1C1C1A] rounded transition-colors"
                  >
                    Details & Candidacy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMBINATION PROTOCOLS CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl border border-[#E6E1D8] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
                Tailored Combinations
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium">
                The Full Face Harmonization Blueprint
              </h2>
              <p className="text-sm text-[#5C5A53] leading-relaxed">
                Rather than treating isolated lines, Dr. Vo designs synergistic combination protocols that layer neurotoxin wrinkle prevention, micro-droplet dermal filler structural support, and microneedling skin texture refinement.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-white border border-[#E0DBD0] text-[#4A4946] text-xs px-3 py-1 rounded-full font-medium">
                  Tox + Lip Hydration
                </span>
                <span className="bg-white border border-[#E0DBD0] text-[#4A4946] text-xs px-3 py-1 rounded-full font-medium">
                  Cheek Lift + Marionette Support
                </span>
                <span className="bg-white border border-[#E0DBD0] text-[#4A4946] text-xs px-3 py-1 rounded-full font-medium">
                  Microneedling + PRP Glow
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenBooking('consultation')}
                className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded text-center transition-colors shadow"
              >
                Book Custom Assessment
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="w-full bg-white border border-[#DDD8CE] hover:border-[#1C1C1A] text-[#1C1C1A] text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded text-center transition-colors"
              >
                View Full Pricing & Bundles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRE & POST CARE GUIDELINES ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
            Patient Guide
          </span>
          <h2 className="font-serif text-3xl text-[#1C1C1A] font-medium">
            Pre & Post Treatment Instructions
          </h2>
          <p className="text-sm text-[#5C5A53]">
            Follow these clinical recommendations to minimize downtime, prevent bruising, and achieve pristine results.
          </p>
        </div>

        <div className="space-y-4">
          {prePostGuidelines.map((guide, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E6E1D8] overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-lg font-medium text-[#1C1C1A]">
                    {guide.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#795649] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#F5F2EB] animate-in fade-in">
                    <ul className="space-y-2.5">
                      {guide.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#5C5A53] leading-relaxed">
                          <Check className="w-4 h-4 text-[#6C7A6D] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Treatment Detail Modal */}
      <TreatmentDetailModal
        treatment={selectedModalTreatment}
        isOpen={Boolean(selectedModalTreatment)}
        onClose={() => setSelectedModalTreatment(null)}
        onBookTreatment={(id) => onOpenBooking(id)}
        onOpenFinancing={onOpenFinancing}
      />
    </div>
  );
};
