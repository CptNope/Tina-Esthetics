import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  ExternalLink,
  ChevronRight,
  Clock
} from 'lucide-react';

interface FinancingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast?: (msg: string) => void;
}

export const FinancingModal: React.FC<FinancingModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [estimatedAmount, setEstimatedAmount] = useState('1500');

  if (!isOpen) return null;

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    if (onSuccessToast) {
      onSuccessToast('Soft credit pre-qualification verified!');
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-[#FCF9F3] text-[#1C1C1A] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#E6E1D8] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 p-1.5 rounded-full hover:bg-[#EFEBE3] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#C59B8B] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cherry Patient Financing</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1C1A]">
                Check Pre-Approval
              </h3>
              <p className="text-xs text-[#5C5A53] mt-1">
                Fast 60-second eligibility check with <strong>no hard credit pull</strong> and no impact on your credit score.
              </p>
            </div>

            {/* Trust highlights */}
            <div className="grid grid-cols-2 gap-2 text-xs text-[#4A4946] bg-[#F7F4EE] p-3 rounded-xl border border-[#E6E1D8]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6C7A6D]" />
                <span>Soft inquiry only</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#6C7A6D]" />
                <span>Instant 60s decision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#6C7A6D]" />
                <span>0% APR options available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#6C7A6D]" />
                <span>256-bit Bank Grade Security</span>
              </div>
            </div>

            <form onSubmit={handleSubmitStep1} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rachel Sterling"
                  className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3.5 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1">
                  Mobile Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(508) 555-0143"
                  className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3.5 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                />
                <span className="text-[10px] text-zinc-500 mt-1 block">
                  A verification code will be sent via SMS to verify identity.
                </span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rachel@example.com"
                  className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3.5 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1">
                  Estimated Procedure Budget ($)
                </label>
                <input
                  type="number"
                  min={200}
                  max={10000}
                  step={50}
                  value={estimatedAmount}
                  onChange={(e) => setEstimatedAmount(e.target.value)}
                  className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3.5 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-widest font-semibold py-3 px-6 rounded-lg transition-all shadow flex items-center justify-center gap-2 group"
              >
                <span>Check Eligibility (Soft Check)</span>
                <ChevronRight className="w-4 h-4 text-[#C59B8B] group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        ) : (
          /* Step 2: Pre-Qualification simulation */
          <div className="space-y-6 text-center py-2">
            <div className="w-16 h-16 bg-[#EAEFE9] text-[#6C7A6D] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#6C7A6D]">
                Pre-Qualification Approved
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1C1A] mt-1">
                Estimated Limit: $3,500.00
              </h3>
              <p className="text-xs text-[#5C5A53] mt-1 max-w-sm mx-auto">
                Congratulations, {fullName || 'Patient'}! You qualify for 0% APR promotional financing at Tinaesthetics by Dr. Tina Vo.
              </p>
            </div>

            <div className="bg-[#FAF7F2] border border-[#E6E1D8] rounded-xl p-4 text-left text-xs space-y-2.5">
              <div className="flex justify-between items-center pb-2 border-b border-[#E8E3D8]">
                <span className="font-semibold text-[#1C1C1A]">3-Month 0% APR Plan</span>
                <span className="font-serif text-sm font-semibold text-[#1C1C1A]">${Math.round(Number(estimatedAmount || 1500) / 3)} / mo</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#E8E3D8]">
                <span className="font-semibold text-[#1C1C1A]">6-Month 0% APR Plan</span>
                <span className="font-serif text-sm font-semibold text-[#1C1C1A]">${Math.round(Number(estimatedAmount || 1500) / 6)} / mo</span>
              </div>
              <div className="flex justify-between items-center text-[#716E65]">
                <span>Down Payment Required:</span>
                <span className="font-semibold text-[#1C1C1A]">$0.00 today</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="https://withcherry.com/patient"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Finalize on Official Cherry Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C59B8B]" />
              </a>
              <button
                onClick={handleReset}
                className="w-full text-xs text-[#716E65] hover:text-[#1C1C1A] py-1 transition-colors"
              >
                Done / Return to website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
