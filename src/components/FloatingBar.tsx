import React from 'react';
import { Phone, MessageSquare, Calendar, CreditCard, ExternalLink } from 'lucide-react';

interface FloatingBarProps {
  onOpenBooking: () => void;
  onOpenFinancing: () => void;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({
  onOpenBooking,
  onOpenFinancing,
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col sm:flex-row items-end sm:items-center gap-2">
      {/* Mini quick contact pill for desktop & mobile */}
      <div className="bg-[#1C1C1A]/95 text-white backdrop-blur-md rounded-full shadow-2xl border border-zinc-800 p-1.5 flex items-center gap-1 sm:gap-2">
        <a
          href="tel:8722229332"
          className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
          title="Call Clinic: 872-222-9332"
          aria-label="Call clinic"
        >
          <Phone className="w-4 h-4 text-[#C59B8B]" />
        </a>

        <a
          href="sms:8722229332"
          className="p-2.5 rounded-full hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
          title="Text SMS (Preferred): 872-222-9332"
          aria-label="Text concierge"
        >
          <MessageSquare className="w-4 h-4 text-[#C59B8B]" />
        </a>

        <button
          onClick={onOpenFinancing}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
          title="Payment Plans & Calculator"
        >
          <CreditCard className="w-3.5 h-3.5 text-[#C59B8B]" />
          <span>Payment Plans</span>
        </button>

        <a
          href="https://tinaesthetics.square.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FCF9F3] hover:bg-[#ECE7DC] text-[#1C1C1A] text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full transition-all shadow flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5 text-[#795649]" />
          <span>Book on Square</span>
        </a>
      </div>
    </div>
  );
};
