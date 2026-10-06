import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  ArrowRight, 
  Check, 
  HelpCircle,
  Clock,
  TrendingDown
} from 'lucide-react';

interface FinancingCalculatorProps {
  onOpenCherryModal: () => void;
}

export const FinancingCalculator: React.FC<FinancingCalculatorProps> = ({
  onOpenCherryModal,
}) => {
  const [budget, setBudget] = useState<number>(1400);
  const [termMonths, setTermMonths] = useState<number>(6);

  // Calculate monthly payment based on terms
  // 3 & 6 months: 0% APR
  // 12 months: 9.99% APR estimate
  // 24 months: 13.99% APR estimate
  const calculation = useMemo(() => {
    let apr = 0;
    if (termMonths === 12) apr = 0.0999;
    if (termMonths === 24) apr = 0.1399;

    let monthly = 0;
    let totalPaid = budget;

    if (apr === 0) {
      monthly = Math.round(budget / termMonths);
      totalPaid = budget;
    } else {
      // Standard amortization formula: M = P * [ i(1 + i)^n ] / [ (1 + i)^n – 1]
      const monthlyRate = apr / 12;
      monthly = Math.round(
        (budget * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
          (Math.pow(1 + monthlyRate, termMonths) - 1)
      );
      totalPaid = monthly * termMonths;
    }

    const interestPaid = Math.max(0, totalPaid - budget);

    return {
      monthly,
      aprPercent: apr === 0 ? '0% APR' : `${(apr * 100).toFixed(1)}% APR`,
      isZeroApr: apr === 0,
      totalPaid,
      interestPaid,
    };
  }, [budget, termMonths]);

  const presetBudgets = [650, 1200, 1800, 3200];

  return (
    <div className="bg-white rounded-2xl border border-[#E6E1D8] shadow-lg p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Decorative gradient badge */}
      <div className="absolute top-0 right-0 bg-[#C59B8B]/15 text-[#795649] text-[11px] font-semibold px-4 py-1.5 rounded-bl-xl tracking-wider uppercase flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5" /> Cherry Patient Financing Partner
      </div>

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#795649] mb-2">
          <span>0% APR Estimator</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium">
          Calculate Your Monthly Investment
        </h3>
        <p className="text-sm text-[#5C5A53] mt-1.5 leading-relaxed">
          Luxury aesthetic care shouldn’t require upfront lump sums. Break your treatment total into predictable monthly payments with zero hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
        {/* Left Form Controls: 7 cols */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider Header */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#4A4946]">
                Estimated Treatment Total
              </label>
              <div className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1C1A]">
                ${budget.toLocaleString()}
              </div>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={250}
              max={5000}
              step={50}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2.5 bg-[#E6E1D8] rounded-lg appearance-none cursor-pointer focus:outline-none"
            />

            <div className="flex justify-between text-[11px] text-[#86837A] mt-1.5 font-mono">
              <span>$250 (Mini-Tox / B12)</span>
              <span>$5,000 (Full Harmonization)</span>
            </div>

            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs text-[#86837A] self-center mr-1">Quick Presets:</span>
              {presetBudgets.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setBudget(val)}
                  className={`text-xs px-2.5 py-1 rounded border transition-all ${
                    budget === val
                      ? 'border-[#1C1C1A] bg-[#1C1C1A] text-white font-medium'
                      : 'border-[#DDD8CE] bg-[#FAF8F5] text-[#5C5A53] hover:border-[#A29F95]'
                  }`}
                >
                  ${val.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Term Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-2">
              Select Repayment Term
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { months: 3, label: '3 Months', sub: '0% APR', zero: true },
                { months: 6, label: '6 Months', sub: '0% APR', zero: true },
                { months: 12, label: '12 Months', sub: 'Low APR', zero: false },
                { months: 24, label: '24 Months', sub: 'Extended', zero: false },
              ].map((term) => {
                const isSelected = termMonths === term.months;
                return (
                  <button
                    key={term.months}
                    type="button"
                    onClick={() => setTermMonths(term.months)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center ${
                      isSelected
                        ? 'border-[#1C1C1A] bg-[#1C1C1A] text-white shadow'
                        : 'border-[#DDD8CE] bg-[#FAF8F5] text-[#4A4946] hover:border-[#8D6B5D]'
                    }`}
                  >
                    <span className="text-sm font-semibold">{term.label}</span>
                    <span
                      className={`text-[10px] mt-0.5 font-medium px-1.5 py-0.5 rounded ${
                        isSelected
                          ? term.zero ? 'bg-[#C59B8B] text-white' : 'bg-zinc-700 text-zinc-300'
                          : term.zero ? 'bg-[#EAEFE9] text-[#4E5C4F]' : 'text-zinc-500'
                      }`}
                    >
                      {term.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Micro trust bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#5C5A53]">
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#6C7A6D] shrink-0" />
              <span>Soft credit pull only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#6C7A6D] shrink-0" />
              <span>No pre-payment penalty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#6C7A6D] shrink-0" />
              <span>Instant 60s decision</span>
            </div>
          </div>
        </div>

        {/* Right Output Card: 5 cols */}
        <div className="lg:col-span-5 bg-[#FAF7F2] border border-[#E6E1D8] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-[#716E65]">
              <span className="uppercase tracking-wider font-semibold">Estimated Monthly</span>
              {calculation.isZeroApr && (
                <span className="bg-[#EAEFE9] text-[#445045] font-semibold text-[11px] px-2 py-0.5 rounded-full">
                  0% APR Qualified
                </span>
              )}
            </div>

            <div className="text-center py-2">
              <div className="font-serif text-4xl sm:text-5xl font-medium text-[#1C1C1A] tracking-tight">
                ${calculation.monthly}
                <span className="text-base sm:text-lg font-sans text-[#716E65] font-normal"> / mo</span>
              </div>
              <p className="text-xs text-[#716E65] mt-1 font-mono">
                for {termMonths} months • {calculation.aprPercent}
              </p>
            </div>

            <div className="border-t border-[#E8E3D8] pt-3 text-xs space-y-2 text-[#5C5A53]">
              <div className="flex justify-between">
                <span>Treatment Total:</span>
                <span className="font-medium text-[#1C1C1A]">${budget.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Interest Paid:</span>
                <span className="font-medium text-[#1C1C1A]">
                  {calculation.interestPaid === 0 ? '$0.00 (0% APR)' : `$${calculation.interestPaid.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t border-[#E8E3D8]/80 pt-2 text-[#1C1C1A]">
                <span>Total Repayment:</span>
                <span>${calculation.totalPaid.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={onOpenCherryModal}
              className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3.5 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 group"
            >
              <span>Check Cherry Pre-Approval</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C59B8B]" />
            </button>
            <p className="text-[11px] text-center text-[#86837A] leading-tight">
              Checking eligibility will not impact your credit score. Approval up to $10,000.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
