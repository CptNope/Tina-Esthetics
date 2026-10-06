import React from 'react';
import { PageId, TreatmentItem } from '../types';
import { TREATMENTS } from '../data/treatments';
import { CASE_STUDIES, TESTIMONIALS } from '../data/caseStudies';
import { GALLERY_ITEMS } from '../data/galleryData';
import { FinancingCalculator } from '../components/FinancingCalculator';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { 
  Sparkles, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin, 
  Award, 
  HeartHandshake, 
  CheckCircle2, 
  ChevronRight, 
  Stethoscope, 
  BadgeCheck, 
  Check, 
  ExternalLink 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (treatmentId?: string) => void;
  onOpenFinancing: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenFinancing,
}) => {
  const featuredCase = GALLERY_ITEMS[0];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Doctor / Provider Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4] mx-auto lg:mx-0">
                <BadgeCheck className="w-4 h-4 text-[#6C7A6D]" />
                <span>Doctoral Nurse Practitioner • Primary Care & Aesthetics</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-[#1C1C1A] leading-[1.12] tracking-tight">
                  Welcome to <br className="hidden sm:inline" />
                  <span className="italic font-normal font-serif text-[#795649]">Tinaesthetics by Dr. Vo</span>
                </h1>
                <p className="text-base sm:text-lg text-[#5C5A53] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Personalized aesthetic and wellness care designed to help you look and feel your best. Practiced with education, transparency, and clinical excellence by <strong className="text-[#1C1C1A] font-semibold">Dr. Tina Vo</strong> at 1086 Pleasant Street, Worcester, MA.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://tinaesthetics.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-widest font-semibold py-4 px-8 rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <Calendar className="w-4 h-4 text-[#C59B8B] group-hover:scale-110 transition-transform" />
                  <span>Book Online via Square</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="w-full sm:w-auto border border-[#DDD8CE] hover:border-[#1C1C1A] text-[#1C1C1A] bg-transparent hover:bg-white text-xs uppercase tracking-widest font-semibold py-4 px-7 rounded transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-4 h-4 text-[#C59B8B]" />
                </button>
              </div>

              {/* Trust Indicators / Badges */}
              <div className="pt-4 border-t border-[#E8E3D8] grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="font-serif text-2xl font-semibold text-[#1C1C1A]">$13 / unit</div>
                  <div className="text-[11px] text-[#716E65] uppercase tracking-wider mt-0.5">Neurotoxin</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-semibold text-[#1C1C1A]">UMass</div>
                  <div className="text-[11px] text-[#716E65] uppercase tracking-wider mt-0.5">Medical School DNP</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-semibold text-[#1C1C1A]">0% APR</div>
                  <div className="text-[11px] text-[#716E65] uppercase tracking-wider mt-0.5">Payment Plans</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Portrait & Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative frame */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#EAEFE9] to-[#F5E3E0] opacity-70 transform -rotate-1"></div>
                
                {/* Main Portrait Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-[#E6E1D8]">
                  <img
                    src="https://static.wixstatic.com/media/28ae43_4c14dbd0adf64e4a8c77fee9f0fca020~mv2.png"
                    alt="Dr. Tina Vo - Doctoral Nurse Practitioner & Aesthetic Injector"
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                  
                  {/* Floating credentials overlay */}
                  <div className="p-6 bg-white space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="font-serif text-xl font-medium text-[#1C1C1A]">
                          Dr. Tina Vo
                        </h2>
                        <p className="text-xs uppercase tracking-wider text-[#795649] font-semibold mt-0.5">
                          Doctoral Nurse Practitioner • Aesthetic Injector
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-[#FAF7F2] text-[#1C1C1A] px-2.5 py-1 rounded-full border border-[#E8E3D8] font-mono">
                        <MapPin className="w-3 h-3 text-[#C59B8B]" /> Worcester, MA
                      </span>
                    </div>

                    <p className="text-xs text-[#5C5A53] leading-relaxed">
                      "I am passionate about helping others feel confident, refreshed, and empowered. My approach is centered around education, transparency, and personalized care."
                    </p>

                    <div className="pt-2 border-t border-[#F0ECE4] flex items-center justify-between text-xs">
                      <button
                        onClick={() => onNavigate('about-dr-vo')}
                        className="text-[#795649] hover:text-[#1C1C1A] font-semibold inline-flex items-center gap-1 text-xs"
                      >
                        <span>Meet Dr. Tina & View Credentials</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href="https://tinaesthetics.square.site/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1C1C1A] text-white text-[11px] font-medium px-3 py-1.5 rounded hover:bg-zinc-800"
                      >
                        Book Visit
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#1C1C1A] text-white p-3 sm:p-4 rounded-xl shadow-lg border border-zinc-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C59B8B]/20 text-[#C59B8B] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white tracking-wide">1086 Pleasant St</div>
                    <div className="text-[11px] text-zinc-400">872-222-9332 (Text preferred)</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE CLINICAL PILLARS */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-[#E6E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
              The Tinaesthetics Approach
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
              Education, Transparency & Personalized Care
            </h2>
            <p className="text-sm text-[#5C5A53]">
              A welcoming experience where clients feel informed, supported, and naturally refreshed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Stethoscope,
                title: 'Primary Care & Aesthetics',
                desc: 'Graduated from UMass Medical School. Dual practice ensures comprehensive health understanding and safety.',
              },
              {
                icon: HeartHandshake,
                title: 'Natural Harmony',
                desc: 'Respecting your unique anatomy. We prioritize subtle refinement, lip hydration, and balanced features.',
              },
              {
                icon: ShieldCheck,
                title: 'Advanced Solutions',
                desc: 'Offers Daxxify, Botox, Dysport, Xeomin, hyaluronic fillers, and V-Tech PDRN exosome microneedling.',
              },
              {
                icon: Sparkles,
                title: 'Transparent Pricing',
                desc: 'Clear upfront costs ($13/unit neurotoxin, lip filler mini-plump $450) and flexible monthly payment plans.',
              },
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-xl border border-[#E6E1D8] shadow-sm hover:shadow transition-shadow space-y-3"
              >
                <div className="w-11 h-11 rounded-lg bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649]">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1C1C1A]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5C5A53] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TREATMENTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
              Curated Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
              Aesthetic & Wellness Services
            </h2>
            <p className="text-sm text-[#5C5A53] max-w-xl">
              Specialized aesthetic procedures tailored to your goals and comfort.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('pricing')}
              className="text-xs font-semibold uppercase tracking-wider text-[#795649] hover:underline"
            >
              Pricing Guide ($13/unit)
            </button>
            <button
              onClick={() => onNavigate('treatments')}
              className="text-xs font-semibold uppercase tracking-wider text-[#1C1C1A] hover:text-[#795649] flex items-center gap-1.5 border-b border-[#1C1C1A] pb-1 transition-colors"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.slice(0, 3).map((treatment) => (
            <div
              key={treatment.id}
              className="bg-white rounded-2xl border border-[#E6E1D8] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-zinc-100">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1C1C1A] text-[11px] font-semibold px-2.5 py-1 rounded tracking-wide uppercase border border-[#E6E1D8]">
                  {treatment.tag}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-lg font-medium text-[#1C1C1A] group-hover:text-[#795649] transition-colors">
                      {treatment.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-[#795649] font-mono">
                    {treatment.priceDisplay}
                  </p>
                  <p className="text-xs text-[#5C5A53] line-clamp-3 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#F0ECE4]">
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#716E65]">
                    <div>
                      <span className="text-zinc-400 block">Downtime</span>
                      <span className="font-medium text-[#1C1C1A]">{treatment.specs.downtime}</span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block">Duration</span>
                      <span className="font-medium text-[#1C1C1A]">{treatment.specs.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <a
                      href="https://tinaesthetics.square.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-[11px] uppercase tracking-wider font-semibold py-2.5 rounded text-center transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Book on Square</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                    <button
                      onClick={() => onNavigate('treatments')}
                      className="px-3 py-2 border border-[#DDD8CE] text-[11px] text-[#4A4946] hover:text-[#1C1C1A] rounded"
                      title="Learn More"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER SPOTLIGHT */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-[#E6E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#795649] block">
                Authentic Outcomes
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium leading-tight">
                Natural-Looking & Balanced Results
              </h2>
              <p className="text-sm text-[#5C5A53] leading-relaxed">
                We believe in undetectable enhancements that respect your natural anatomy. Drag the slider to observe how targeted micro-injections preserve dynamic facial expressiveness while softening resting tension lines.
              </p>

              <div className="space-y-2 text-xs text-[#4A4946]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Personalized dosing established in private consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Real Worcester clients treated by Dr. Tina Vo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Natural mobility and symmetry strictly preserved</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('gallery')}
                  className="bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3.5 px-6 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Results Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59B8B]" />
                </button>
                <a
                  href="https://tinaesthetics.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#DDD8CE] bg-white text-[#1C1C1A] text-xs uppercase tracking-wider font-semibold py-3.5 px-5 rounded hover:border-[#1C1C1A] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book on Square</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Slider */}
            <div className="lg:col-span-7">
              <div className="bg-white p-4 rounded-3xl border border-[#E6E1D8] shadow-md">
                <BeforeAfterSlider
                  beforeImage={featuredCase.beforeImage}
                  afterImage={featuredCase.afterImage}
                  className="h-80 sm:h-96 w-full"
                />
                <div className="pt-3 px-2 flex justify-between items-center text-xs text-[#716E65]">
                  <span className="font-medium text-[#1C1C1A]">{featuredCase.title}</span>
                  <span className="font-mono text-[11px] text-[#795649]">{featuredCase.treatment}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE 4-STEP PATIENT JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
            The Clinical Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
            Your Treatment Journey with Dr. Vo
          </h2>
          <p className="text-sm text-[#5C5A53]">
            From consultation to post-care follow-up, you receive personalized care centered around education and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: '01',
              title: 'Personalized Consultation',
              desc: 'Dr. Tina Vo evaluates your facial dynamics, health history, and aesthetic goals in an unhurried, comfortable setting.',
            },
            {
              num: '02',
              title: 'Tailored Treatment Plan',
              desc: 'We outline an individualized dosage strategy and transparent pricing ($13/unit for neurotoxin, lip mini-plump $450).',
            },
            {
              num: '03',
              title: 'Careful Injection Technique',
              desc: 'High-potency topical numbing and precision micro-needles ensure minimal discomfort, gentle delivery, and low bruising.',
            },
            {
              num: '04',
              title: 'Follow-Up & Settling',
              desc: 'Neurotoxins settle over 2 full weeks; fillers settle with gentle aftercare. Ongoing clinician support available by text.',
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E6E1D8] p-7 space-y-3 shadow-sm hover:shadow transition-shadow relative overflow-hidden"
            >
              <div className="font-serif text-3xl font-bold text-[#E6E1D8]">
                {step.num}
              </div>
              <h3 className="font-serif text-lg font-medium text-[#1C1C1A]">
                {step.title}
              </h3>
              <p className="text-xs text-[#5C5A53] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINANCING CALCULATOR EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinancingCalculator onOpenCherryModal={onOpenFinancing} />
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-[#1C1C1A] text-[#FCF9F3] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B8B]">
              Ready to Book?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              Schedule Your Appointment with Dr. Tina Vo
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Located at 1086 Pleasant Street, Worcester MA 01602. Text 872-222-9332 or reserve directly through our live Square calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://tinaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FCF9F3] hover:bg-[#EAE6DD] text-[#1C1C1A] text-xs uppercase tracking-widest font-semibold py-4 px-8 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C59B8B]" />
                <span>Book Live on Square</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#795649]" />
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="border border-zinc-700 hover:border-zinc-500 text-white text-xs uppercase tracking-widest font-semibold py-4 px-7 rounded transition-colors"
              >
                Contact & Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
