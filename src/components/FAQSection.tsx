import React, { useState } from 'react';
import { FAQS, FAQItem } from '../data/caseStudies';
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  Phone,
  Search
} from 'lucide-react';

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  defaultCategory?: 'all' | 'neurotoxin' | 'fillers' | 'skin-wellness' | 'appointments-pricing';
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about neurotoxins, dermal fillers, skincare, and appointments with Dr. Tina Vo.",
  defaultCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'neurotoxin', label: 'Neurotoxin ($13/unit)' },
    { id: 'fillers', label: 'Dermal Fillers' },
    { id: 'skin-wellness', label: 'Skin & Weight Loss' },
    { id: 'appointments-pricing', label: 'Booking & Pricing' },
  ];

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
          <HelpCircle className="w-3.5 h-3.5 text-[#6C7A6D]" />
          <span>Patient Guidance</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
          {title}
        </h2>
        <p className="text-sm text-[#5C5A53] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Category Filter Pills & Search */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map(cat => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`py-2 px-4 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#1C1C1A] text-white shadow'
                    : 'bg-white border border-[#DDD8CE] text-[#5C5A53] hover:border-[#1C1C1A]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Optional Search bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. units, downtime, pricing)..."
            className="w-full bg-white border border-[#DDD8CE] rounded-full pl-10 pr-4 py-2 text-xs text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B] placeholder-zinc-400"
          />
        </div>
      </div>

      {/* Accordion Items */}
      <div className="space-y-3 pt-2">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-[#E6E1D8] text-center text-xs text-[#716E65]">
            No matching questions found for "{searchQuery}". You can text Dr. Vo directly at <strong>872-222-9332</strong>!
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E6E1D8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-[#1C1C1A] group-hover:text-[#795649] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E8E3D8] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#1C1C1A] text-white' : 'text-[#795649]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#5C5A53] leading-relaxed border-t border-[#F5F2EB] animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Need more help banner */}
      <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8E3D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C5A53]">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#795649]" />
          <span>Have an individual question about your facial anatomy or health history?</span>
        </div>
        <a
          href="sms:8722229332"
          className="font-semibold text-[#1C1C1A] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>Text Dr. Vo at 872-222-9332</span>
        </a>
      </div>
    </div>
  );
};
