import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Calendar,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenFinancing: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenFinancing,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-[#1C1C1A] text-[#F7F4EE] border-t border-zinc-800 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top VIP newsletter strip */}
        <div className="pb-12 mb-12 border-b border-zinc-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B8B] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Tinaesthetics by Dr. Vo
            </span>
            <h3 className="font-serif text-2xl text-white font-medium">
              Join Our Patient Community
            </h3>
            <p className="text-xs text-zinc-400">
              Receive updates on seasonal injectable promotions, skin wellness tips, and flexible payment plan options.
            </p>
          </div>

          <div className="max-w-md w-full">
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#EAEFE9] bg-zinc-800/80 p-3 rounded-lg border border-zinc-700">
                <CheckCircle2 className="w-4 h-4 text-[#C59B8B]" />
                <span>Thank you for joining. Welcome to Tinaesthetics.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="bg-zinc-800/80 border border-zinc-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C59B8B] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#FCF9F3] hover:bg-[#EAE6DD] text-[#1C1C1A] text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3 h-3 text-[#795649]" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-zinc-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl tracking-[0.16em] text-[#FCF9F3] font-medium">
                TINAESTHETICS
              </span>
              <p className="text-xs uppercase tracking-[0.22em] text-[#C59B8B] font-medium">
                BY DR. TINA VO
              </p>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Personalized aesthetic and wellness care designed to help you look and feel your best. Practicing primary care and aesthetic medicine in Worcester, MA.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-zinc-400">
              <a 
                href="https://www.instagram.com/tinaestheticsbydrvo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#C59B8B] transition-colors flex items-center gap-1"
              >
                <Instagram className="w-4 h-4" />
                <span>@TinaestheticsByDrVo</span>
              </a>
              <span>•</span>
              <a 
                href="http://facebook.com/tinaestheticsbydrv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#C59B8B] transition-colors flex items-center gap-1"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider text-[#FCF9F3] uppercase text-xs font-semibold">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-dr-vo')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Meet Dr. Tina Vo (Provider)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('treatments')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Treatments & Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Before & After Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Pricing Guide ($13/unit)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('payment-plans-financing')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Payment Plans & Financing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('location-hours')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Location & Hours
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#C59B8B] transition-colors"
                >
                  Contact & Text Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider text-[#FCF9F3] uppercase text-xs font-semibold">
              Worcester Clinic
            </h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B8B] shrink-0 mt-0.5" />
                <span>
                  1086 Pleasant Street<br />
                  Worcester, MA 01602<br />
                  <span className="text-zinc-500 text-xs">Tatnuck / West Worcester</span>
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C59B8B] shrink-0 mt-0.5" />
                <div>
                  <p>Hours: Variable</p>
                  <a 
                    href="https://tinaesthetics.square.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#C59B8B] hover:underline text-xs inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>Book online via Square</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Booking & Inquiries */}
          <div className="space-y-4">
            <h4 className="font-serif text-base tracking-wider text-[#FCF9F3] uppercase text-xs font-semibold">
              Appointments & Contact
            </h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B8B]" />
                <a href="tel:8722229332" className="hover:text-[#FCF9F3] font-mono">
                  872-222-9332
                </a>
                <span className="text-xs text-zinc-500">(Text preferred)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B8B]" />
                <a href="mailto:DrVoAesthetics@gmail.com" className="hover:text-[#FCF9F3]">
                  DrVoAesthetics@gmail.com
                </a>
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://tinaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FCF9F3] hover:bg-[#EAE6DD] text-[#1C1C1A] text-xs font-semibold py-2.5 px-4 rounded text-center tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Square Online Booking</span>
              </a>
              <button
                onClick={onOpenFinancing}
                className="w-full border border-zinc-700 hover:border-[#C59B8B] text-zinc-300 hover:text-white text-xs font-medium py-2 px-4 rounded text-center transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-3.5 h-3.5 text-[#C59B8B]" />
                <span>Payment Plans & Calculator</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal & Medical Disclaimers */}
        <div className="pt-8 text-xs text-zinc-500 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-zinc-400">Clinical Notice:</strong> All aesthetic injectables, neurotoxins (Daxxify, Botox, Dysport, Xeomin), dermal fillers, and prescription GLP-1 weight loss programs are evaluated and administered by Dr. Tina Vo. Information on this website is for educational purposes and does not replace an in-person clinical consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800/60 text-zinc-500">
            <p>© {new Date().getFullYear()} Tinaesthetics by Dr. Vo. 1086 Pleasant Street, Worcester MA 01602.</p>
            <div className="flex items-center gap-6 text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#C59B8B]" /> UMass Medical School Alumni
              </span>
              <span>Primary Care & Aesthetics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
