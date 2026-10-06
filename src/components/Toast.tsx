import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-top-3 fade-in duration-200">
      <div className="bg-[#1C1C1A] text-[#FCF9F3] text-xs py-3 px-4 rounded-xl shadow-2xl border border-zinc-700 flex items-center gap-3">
        <CheckCircle2 className="w-4 h-4 text-[#C59B8B] shrink-0" />
        <span className="font-medium">{message}</span>
        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-white p-0.5"
          aria-label="Close notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
