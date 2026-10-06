import React from 'react';
import { PageId } from '../types';
import { PRICING_CATEGORIES } from '../data/pricingData';
import { FinancingCalculator } from '../components/FinancingCalculator';
import { FAQSection } from '../components/FAQSection';
import { 
  Sparkles, 
  CreditCard, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Info,
  DollarSign,
  ExternalLink
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenFinancing: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenFinancing,
}) => {
  return (
    <div className="space-y-20 sm:space-y-24 py-8">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
          <DollarSign className="w-3.5 h-3.5 text-[#6C7A6D]" />
          <span>Transparent Medical Aesthetics</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1C1A] font-medium tracking-tight">
          Service Menu & Pricing Guide
        </h1>
        <p className="text-sm sm:text-base text-[#5C5A53] max-w-2xl mx-auto leading-relaxed">
          No mystery fees, pressure sales, or hidden charges. Upfront, transparent pricing for every procedure administered by <strong className="text-[#1C1C1A]">Dr. Tina Vo</strong> at 1086 Pleasant Street, Worcester, MA.
        </p>

        {/* Square Link */}
        <div className="pt-2">
          <a
            href="https://tinaesthetics.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#795649] hover:underline bg-[#FAF7F2] px-4 py-2 rounded-full border border-[#E8E3D8]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Directly on Square Live Calendar</span>
            <ExternalLink className="w-3 h-3 text-zinc-400" />
          </a>
        </div>
      </section>

      {/* PRICING CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {PRICING_CATEGORIES.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-[#E6E1D8] p-6 sm:p-10 shadow-sm space-y-6"
          >
            {/* Category Header */}
            <div className="border-b border-[#F0ECE4] pb-5 space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium">
                {cat.category}
              </h2>
              <p className="text-xs text-[#716E65]">
                {cat.description}
              </p>
            </div>

            {/* Items Table/List */}
            <div className="space-y-4">
              {cat.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#DDD8CE] transition-all"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg font-medium text-[#1C1C1A]">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="text-[10px] font-semibold bg-[#EAEFE9] text-[#445045] px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5C5A53] leading-relaxed">
                      {item.details}
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0 space-y-1 border-t sm:border-t-0 pt-3 sm:pt-0 border-[#E8E3D8]">
                    <div className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1C1A]">
                      {item.pricing}
                    </div>
                    {item.monthlyEstimate && (
                      <div className="text-[11px] font-mono text-[#795649]">
                        {item.monthlyEstimate}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* INTERACTIVE PAYMENT CALCULATOR HERE ON PRICING PAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FinancingCalculator onOpenCherryModal={onOpenFinancing} />
      </section>

      {/* PRICING & BOOKING FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection 
          title="Pricing & Booking FAQs" 
          subtitle="Answers to common questions regarding dosing, deposits, and payment plan qualification."
          defaultCategory="appointments-pricing" 
        />
      </section>

      {/* FINANCING CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C1C1A] text-[#FCF9F3] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B8B]">
              0% APR Payment Options
            </span>
            <h2 className="font-serif text-3xl font-medium">
              Prefer Monthly Installments?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We offer 3-month and 6-month 0% interest plans via Cherry, with soft credit checks that never impact your score. Calculate your custom monthly payment in seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={onOpenFinancing}
              className="bg-[#FCF9F3] hover:bg-[#EAE6DD] text-[#1C1C1A] text-xs uppercase tracking-wider font-semibold py-4 px-6 rounded transition-colors text-center flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4 text-[#795649]" />
              <span>Launch Financing Calc</span>
            </button>
            <a
              href="https://tinaesthetics.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-zinc-700 hover:border-zinc-500 text-white text-xs uppercase tracking-wider font-semibold py-4 px-6 rounded transition-colors text-center flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-[#C59B8B]" />
              <span>Book on Square</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
