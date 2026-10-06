import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (treatmentId?: string) => void;
  onOpenFinancing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  onOpenFinancing,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about-dr-vo', label: 'Provider' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'gallery', label: 'Results & Gallery' },
    { id: 'pricing', label: 'Pricing Guide' },
    { id: 'payment-plans-financing', label: 'Payment Plans' },
    { id: 'location-hours', label: 'Location & Hours' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCF9F3]/95 backdrop-blur-md border-b border-[#E6E1D8] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#1C1C1A] text-[#F7F4EE] text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-medium text-[#C59B8B]">
              <Sparkles className="w-3.5 h-3.5" /> Tinaesthetics by Dr. Vo
            </span>
            <span className="hidden md:inline text-zinc-500">•</span>
            <span className="hidden md:inline text-zinc-300">
              1086 Pleasant Street, Worcester MA 01602
            </span>
            <span className="hidden lg:inline text-zinc-500">•</span>
            <span className="hidden lg:inline text-zinc-400">
              Primary Care & Aesthetics
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a 
              href="tel:8722229332" 
              className="hover:text-[#C59B8B] transition-colors flex items-center gap-1 text-zinc-300"
            >
              <Phone className="w-3 h-3" /> 872-222-9332
            </a>
            <span className="text-zinc-600">|</span>
            <a 
              href="sms:8722229332" 
              className="hover:text-[#C59B8B] transition-colors flex items-center gap-1 text-zinc-300 font-semibold"
            >
              <MessageSquare className="w-3 h-3" /> Text Preferred
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex flex-col text-left group focus:outline-none"
            aria-label="Tinaesthetics Home"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] text-[#1C1C1A] font-medium group-hover:text-[#8D6B5D] transition-colors">
                TINAESTHETICS
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#716E65] font-medium">
                BY DR. TINA VO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B8B]"></span>
              <span className="text-[9px] uppercase tracking-wider text-[#A29F95] hidden sm:inline">
                WORCESTER, MA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-xs tracking-wider uppercase font-semibold transition-all relative flex items-center gap-1 ${
                    isActive
                      ? 'text-[#1C1C1A]'
                      : 'text-[#5C5A53] hover:text-[#1C1C1A]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] bg-[#EAEFE9] text-[#445045] px-1.5 py-0.2 rounded font-mono">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C59B8B] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://tinaesthetics.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold px-3 py-2 text-[#4A4946] hover:text-[#1C1C1A] border border-[#DDD8CE] hover:border-[#8D6B5D] rounded transition-colors flex items-center gap-1"
            >
              <span>Square Booking</span>
              <ExternalLink className="w-3 h-3 text-[#795649]" />
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded shadow-sm hover:shadow transition-all flex items-center gap-2 group"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C59B8B] group-hover:scale-110 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://tinaesthetics.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C1C1A] text-[#FCF9F3] text-[11px] font-semibold px-3 py-1.5 rounded sm:hidden"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1C1A] hover:bg-[#EFEBE3] rounded focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slideout Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FCF9F3] border-b border-[#E6E1D8] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="pt-2 pb-1 border-b border-[#ECE7DC] mb-2 flex items-center justify-between text-xs text-[#716E65]">
            <span className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C59B8B]" /> 1086 Pleasant St, Worcester
            </span>
            <a href="tel:8722229332" className="text-[#1C1C1A] font-semibold">872-222-9332</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left py-2.5 px-3 rounded text-xs uppercase tracking-wider font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EFEBE3] text-[#1C1C1A]'
                      : 'text-[#4A4946] hover:bg-[#F5F2EB]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="text-[9px] bg-[#EAEFE9] text-[#445045] px-1.5 py-0.2 rounded font-mono">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#A29F95]" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#ECE7DC] flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFinancing();
              }}
              className="w-full text-center py-2.5 text-xs uppercase tracking-wider font-semibold border border-[#DDD8CE] text-[#4A4946] rounded"
            >
              Payment Plans & Calculator
            </button>
            <a
              href="https://tinaesthetics.square.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-[#1C1C1A] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold rounded shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C59B8B]" />
              Book on Square (Live Calendar)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
