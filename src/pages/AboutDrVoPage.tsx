import React from 'react';
import { PageId } from '../types';
import { FAQSection } from '../components/FAQSection';
import { 
  ShieldCheck, 
  Sparkles, 
  Award, 
  GraduationCap, 
  Heart, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Stethoscope, 
  ExternalLink,
  Phone,
  MessageSquare,
  Instagram
} from 'lucide-react';

interface AboutDrVoPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutDrVoPage: React.FC<AboutDrVoPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-20 sm:space-y-24 py-8">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column: 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E6E1D8] bg-white">
              <img
                src="https://static.wixstatic.com/media/28ae43_4c14dbd0adf64e4a8c77fee9f0fca020~mv2.png"
                alt="Dr. Tina Vo - Doctoral Nurse Practitioner & Aesthetic Injector"
                className="w-full h-[460px] sm:h-[520px] object-cover object-top"
              />
              <div className="p-6 bg-[#FAF7F2] border-t border-[#E6E1D8] text-center space-y-1">
                <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">Dr. Tina Vo</h3>
                <p className="text-xs uppercase tracking-wider text-[#795649] font-semibold">
                  Doctoral Nurse Practitioner • Aesthetic Injector
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-[#716E65] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C59B8B]" /> 1086 Pleasant Street, Worcester MA 01602
                </div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-[#E6E1D8] hidden sm:flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#795649]" />
              <div className="text-left text-xs">
                <div className="font-semibold text-[#1C1C1A]">UMass Medical School</div>
                <div className="text-zinc-500">Doctor of Nursing Practice (DNP)</div>
              </div>
            </div>
          </div>

          {/* Bio Text Column: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
              <Sparkles className="w-3.5 h-3.5 text-[#6C7A6D]" />
              <span>Meet Your Provider</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1A] leading-tight font-medium">
                Welcome to Tinaesthetics by Dr. Vo
              </h1>
              <p className="text-base text-[#795649] font-medium italic font-serif">
                "Personalized aesthetic and wellness care designed to help you look and feel your absolute best."
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#5C5A53] leading-relaxed">
              <p>
                Welcome! My name is <strong>Dr. Tina Vo</strong>, I am a Doctoral Nurse Practitioner and aesthetic injector. I graduated from <strong>UMass Medical School</strong> (UMass Chan Medical School). I currently practice both primary care and aesthetic medicine in Worcester, Massachusetts.
              </p>
              <p>
                I am deeply passionate about helping others feel confident, refreshed, and empowered. My clinical approach is centered around <strong>education, transparency, and personalized care</strong>, ensuring that every treatment plan is tailored to your individual anatomy, goals, and comfort.
              </p>
              <p>
                Whether you are seeking preventative neurotoxin smoothing, subtle lip and cheek contouring, exosome microneedling, PRP regeneration, or medically supervised weight loss, my goal is to create a welcoming experience where clients feel informed, supported, and naturally refreshed.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-[#E6E1D8] space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-xs text-[#1C1C1A] uppercase tracking-wider">
                  <Stethoscope className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Dual Clinical Practice</span>
                </div>
                <p className="text-xs text-[#5C5A53]">
                  Practicing in both primary care and aesthetic medicine for holistic wellness and medical safety.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E6E1D8] space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-xs text-[#1C1C1A] uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-[#C59B8B]" />
                  <span>Education & Transparency</span>
                </div>
                <p className="text-xs text-[#5C5A53]">
                  Clear guidance, unhurried consultations, and no high-pressure sales. Every dose is customized to you.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="https://tinaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-widest font-semibold py-4 px-8 rounded shadow transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C59B8B]" />
                <span>Book Online via Square</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="sms:8722229332"
                className="border border-[#DDD8CE] text-[#1C1C1A] text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#795649]" />
                <span>Text Us: 872-222-9332</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CREDENTIALS & CLINICAL APPROACH */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-[#E6E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
              Training & Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
              Education & Clinical Qualifications
            </h2>
            <p className="text-sm text-[#5C5A53]">
              Excellence built upon rigorous university doctoral training and evidence-based clinical practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#E6E1D8] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">
                UMass Medical School
              </h3>
              <p className="text-xs text-[#5C5A53] leading-relaxed">
                Graduated with a Doctor of Nursing Practice (DNP) from the prestigious UMass Chan Medical School in Worcester, MA, specializing in evidence-based care and clinical diagnostics.
              </p>
              <div className="pt-2 border-t border-[#F0ECE4] text-[11px] font-mono text-[#716E65]">
                • Doctoral Nurse Practitioner<br />
                • Licensed in Massachusetts
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E6E1D8] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649]">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">
                Primary Care & Aesthetics
              </h3>
              <p className="text-xs text-[#5C5A53] leading-relaxed">
                Active clinician in both primary care and cosmetic injectables. This dual background ensures in-depth clinical safety, health history evaluation, and vascular anatomy mastery.
              </p>
              <div className="pt-2 border-t border-[#F0ECE4] text-[11px] font-mono text-[#716E65]">
                • Dual Scope Practitioner<br />
                • Comprehensive health reviews
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E6E1D8] shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">
                Aesthetic Injector Certification
              </h3>
              <p className="text-xs text-[#5C5A53] leading-relaxed">
                Mastery in neurotoxins (Daxxify, Botox, Dysport, Xeomin), dermal fillers, V-Tech PDRN exosome microneedling, autologous PRP therapies, and GLP-1 weight loss protocols.
              </p>
              <div className="pt-2 border-t border-[#F0ECE4] text-[11px] font-mono text-[#716E65]">
                • Sterile private clinic<br />
                • 1086 Pleasant St, Worcester MA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A PERSONAL NOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E6E1D8] p-8 sm:p-12 shadow-md space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#795649]">
            <Heart className="w-4 h-4 text-[#C59B8B]" />
            <span>Our Patient Philosophy</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium leading-snug">
            "My goal is to create a welcoming experience where clients feel informed, supported, and naturally refreshed."
          </h2>

          <div className="space-y-4 text-sm text-[#5C5A53] leading-relaxed">
            <p>
              Aesthetic medicine should never feel intimidating or transactional. At Tinaesthetics, I spend time discussing your unique goals, answering every question honestly, and designing a treatment plan that fits both your lifestyle and your budget.
            </p>
            <p>
              I believe in conservative refinement: enhancing the features you love while honoring your unique beauty. Whether you're coming in for your first Botox treatment or exploring medical weight loss, you will always receive my undivided personal attention.
            </p>
          </div>

          <div className="pt-4 border-t border-[#F0ECE4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-serif text-lg font-medium text-[#1C1C1A]">Dr. Tina Vo</div>
              <div className="text-xs text-[#716E65]">Doctoral Nurse Practitioner • Founder, Tinaesthetics</div>
            </div>
            <a
              href="https://tinaesthetics.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C1C1A] text-white text-xs uppercase tracking-wider font-semibold py-2.5 px-5 rounded hover:bg-zinc-800 flex items-center gap-1.5"
            >
              <span>Schedule on Square</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* REUSABLE INTERACTIVE FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection title="Provider & Practice FAQs" subtitle="Common questions regarding Dr. Tina Vo's credentials, appointment expectations, and clinical standards." />
      </section>
    </div>
  );
};
