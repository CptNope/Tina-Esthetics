import React from 'react';
import { TreatmentItem } from '../types';
import { 
  X, 
  Calendar, 
  CreditCard, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Info
} from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: TreatmentItem | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTreatment: (id: string) => void;
  onOpenFinancing: () => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  isOpen,
  onClose,
  onBookTreatment,
  onOpenFinancing,
}) => {
  if (!isOpen || !treatment) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-[#FCF9F3] text-[#1C1C1A] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#E6E1D8] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 p-1.5 rounded-full hover:bg-[#EFEBE3] transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#795649] bg-[#EAEFE9] px-2.5 py-0.5 rounded-full mb-2">
              <Sparkles className="w-3 h-3 text-[#6C7A6D]" />
              <span>{treatment.tag}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium">
              {treatment.title}
            </h2>
            <div className="flex flex-wrap items-baseline gap-3 mt-1 text-xs">
              <span className="font-mono font-semibold text-[#795649] text-sm">
                {treatment.priceDisplay}
              </span>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-600 font-medium">
                Administered Exclusively by Dr. Tina Vo, MD
              </span>
            </div>
          </div>

          {/* Treatment Image Banner */}
          <div className="relative h-60 sm:h-72 rounded-xl overflow-hidden bg-zinc-200 border border-[#E6E1D8]">
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#1C1C1A]/85 backdrop-blur-sm text-white text-[11px] font-mono px-3 py-1 rounded">
              Downtime: {treatment.specs.downtime}
            </div>
          </div>

          {/* Clinical Overview */}
          <div className="space-y-2">
            <h4 className="font-serif text-base font-medium text-[#1C1C1A]">
              Clinical Overview & Mechanism
            </h4>
            <p className="text-sm text-[#5C5A53] leading-relaxed">
              {treatment.description}
            </p>
          </div>

          {/* Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E3D8] text-xs">
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">Duration</span>
              <span className="font-medium text-[#1C1C1A]">{treatment.specs.duration}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">Downtime</span>
              <span className="font-medium text-[#1C1C1A]">{treatment.specs.downtime}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">
                {treatment.specs.highlight1Label}
              </span>
              <span className="font-medium text-[#1C1C1A]">{treatment.specs.highlight1Value}</span>
            </div>
            <div>
              <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">
                {treatment.specs.highlight2Label}
              </span>
              <span className="font-medium text-[#1C1C1A]">{treatment.specs.highlight2Value}</span>
            </div>
          </div>

          {/* Key Patient Advantages */}
          <div className="space-y-2">
            <h4 className="font-serif text-base font-medium text-[#1C1C1A]">
              Key Patient Advantages
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C5A53]">
              {treatment.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#6C7A6D] shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Physician Note */}
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E3D8] text-xs space-y-1">
            <div className="flex items-center gap-2 font-semibold text-[#1C1C1A]">
              <ShieldCheck className="w-4 h-4 text-[#6C7A6D]" />
              <span>Dr. Tina Vo’s Clinical Approach</span>
            </div>
            <p className="text-[#5C5A53] leading-relaxed italic">
              "We avoid over-correction by starting with measured, foundational dosing. It is always easy to add subtle volume at a two-week follow-up if desired, ensuring your outcome remains completely natural."
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 border-t border-[#F0ECE4] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookTreatment(treatment.id);
              }}
              className="flex-1 bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C59B8B]" />
              <span>Schedule This Procedure</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenFinancing();
              }}
              className="border border-[#DDD8CE] hover:border-[#1C1C1A] text-[#1C1C1A] text-xs uppercase tracking-wider font-semibold py-3.5 px-5 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4 text-[#C59B8B]" />
              <span>0% APR Calculator</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
