import React, { useState } from 'react';
import { PageId } from '../types';
import { CASE_STUDIES } from '../data/caseStudies';
import { FinancingCalculator } from '../components/FinancingCalculator';
import { FAQSection } from '../components/FAQSection';
import { 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Check, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  UserCheck
} from 'lucide-react';

interface FinancingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenCherryModal: () => void;
}

export const FinancingPage: React.FC<FinancingPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenCherryModal,
}) => {
  return (
    <div className="space-y-20 sm:space-y-24 py-8">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
          <Sparkles className="w-3.5 h-3.5 text-[#6C7A6D]" />
          <span>Patient-First Payment Flexibility</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1C1A] font-medium tracking-tight">
          Flexible Payment Plans & 0% APR Financing
        </h1>
        <p className="text-sm sm:text-base text-[#5C5A53] max-w-2xl mx-auto leading-relaxed">
          Invest in your confidence without compromise. At Tinaesthetics, we partner with Cherry to offer transparent, affordable monthly options with <strong className="text-[#1C1C1A]">zero impact on your credit score to check</strong>.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-semibold uppercase tracking-wider text-[#795649]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#6C7A6D]" />
            <span>0% APR for 3 & 6 Months</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#6C7A6D]" />
            <span>Soft Credit Check Only</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#6C7A6D]" />
            <span>High 90%+ Approval Rate</span>
          </div>
        </div>
      </section>

      {/* CALCULATOR TOOL EMBED - CENTERPIECE ON FINANCING PAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinancingCalculator onOpenCherryModal={onOpenCherryModal} />
      </section>

      {/* 3 HOW IT WORKS STEPS */}
      <section className="bg-[#FAF7F2] py-16 sm:py-20 border-y border-[#E6E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
              Effortless Qualification
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
              How Cherry Financing Works
            </h2>
            <p className="text-sm text-[#5C5A53]">
              Three simple steps to unlock your personalized aesthetic treatment plan today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Apply in 60 Seconds',
                desc: 'Complete a brief 60-second digital application right from your phone or desktop. There is absolutely NO hard credit pull and zero hit to your credit score.',
              },
              {
                step: '02',
                title: 'Select Your Custom Terms',
                desc: 'Review your instant approval amount up to $10,000. Choose from 0% APR promotional periods (3 or 6 months) or extended low monthly payment schedules up to 24 months.',
              },
              {
                step: '03',
                title: 'Treat Today, Pay Over Time',
                desc: 'Receive your treatment by Dr. Tina Vo with complete peace of mind. Monthly installments are automatically managed through Cherry’s secure patient portal.',
              },
            ].map((s, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#E6E1D8] p-8 space-y-4 shadow-sm relative overflow-hidden"
              >
                <div className="font-serif text-4xl font-bold text-[#E6E1D8]">
                  {s.step}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">
                  {s.title}
                </h3>
                <p className="text-xs text-[#5C5A53] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <button
              onClick={onOpenCherryModal}
              className="bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-widest font-semibold py-4 px-8 rounded shadow transition-all inline-flex items-center gap-2"
            >
              <CreditCard className="w-4 h-4 text-[#C59B8B]" />
              <span>Check Cherry Pre-Approval Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* REAL PATIENT CASE STUDIES WITH FINANCING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
            Realistic Examples
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
            Patient Treatment Plans & Monthly Breakdowns
          </h2>
          <p className="text-sm text-[#5C5A53]">
            See how real clients structure full treatment packages into comfortable monthly installments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl border border-[#E6E1D8] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">
                      {cs.name} <span className="text-sm text-[#716E65] font-sans font-normal">({cs.age} yrs)</span>
                    </h3>
                    <p className="text-xs text-[#795649] font-medium">{cs.roleSubtitle}</p>
                  </div>
                  <span className="font-serif text-lg font-bold text-[#1C1C1A]">
                    {cs.monthlyPayment}
                  </span>
                </div>

                <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E3D8] space-y-1">
                  <div className="text-xs font-semibold text-[#1C1C1A]">{cs.themeTitle}</div>
                  <div className="text-[11px] text-[#716E65]">{cs.promoDetails}</div>
                </div>

                {/* Patient Goal */}
                <div className="text-xs space-y-1">
                  <span className="font-semibold text-[#4A4946] uppercase tracking-wider block text-[10px]">
                    Goal:
                  </span>
                  <p className="text-[#5C5A53] leading-relaxed">{cs.patientGoal}</p>
                </div>

                {/* Protocol */}
                <div className="text-xs space-y-1">
                  <span className="font-semibold text-[#4A4946] uppercase tracking-wider block text-[10px]">
                    Clinical Protocol:
                  </span>
                  <p className="text-[#1C1C1A] font-medium">{cs.protocol}</p>
                </div>

                {/* Patient Quote */}
                <div className="p-3 bg-[#FCF9F3] border-l-2 border-[#C59B8B] rounded-r text-xs italic text-[#5C5A53]">
                  "{cs.quote}"
                </div>
              </div>

              {/* Badges & Action */}
              <div className="pt-4 border-t border-[#F0ECE4] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {cs.badges.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] font-semibold bg-[#FAF7F2] text-[#4A4946] px-2 py-0.5 rounded border border-[#E6E1D8]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenCherryModal}
                  className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-2.5 rounded transition-colors text-center"
                >
                  Qualify for this Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINANCING FAQS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection 
          title="Frequently Asked Financing Questions"
          subtitle="Learn about Cherry financing qualification, 0% APR terms, and application speed."
          defaultCategory="appointments-pricing"
        />
      </section>
    </div>
  );
};
