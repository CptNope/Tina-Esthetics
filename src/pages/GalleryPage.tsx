import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/galleryData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Clock, 
  Check, 
  Eye, 
  Heart,
  HelpCircle
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenFinancing: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenFinancing,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'injectables' | 'skin' | 'wellness'>('all');
  const [selectedCase, setSelectedCase] = useState<GalleryItem>(GALLERY_ITEMS[0]);

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-20 sm:space-y-24 py-8">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
          <Sparkles className="w-3.5 h-3.5 text-[#6C7A6D]" />
          <span>Real Clinical Results</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1C1A] font-medium tracking-tight">
          Before & After Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#5C5A53] max-w-2xl mx-auto leading-relaxed">
          Witness authentic, conservative patient outcomes administered exclusively by <strong className="text-[#1C1C1A]">Dr. Tina Vo, MD</strong>. All photos are un-retouched and taken under standardized clinical lighting.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'injectables', label: 'Injectables & Tox' },
            { id: 'skin', label: 'Skin & Collagen' },
          ].map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`py-2.5 px-5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                  isSelected
                    ? 'bg-[#1C1C1A] text-white shadow-sm'
                    : 'bg-white border border-[#DDD8CE] text-[#5C5A53] hover:border-[#1C1C1A]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* FEATURED INTERACTIVE COMPARISON SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E6E1D8] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#F0ECE4]">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#795649] block">
                Interactive Spotlight
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium mt-1">
                {selectedCase.title}
              </h2>
              <p className="text-xs text-[#716E65] mt-0.5">
                {selectedCase.patientProfile} • Procedure: <span className="text-[#1C1C1A] font-medium">{selectedCase.treatment}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#795649] bg-[#FAF7F2] px-3 py-1 rounded border border-[#E8E3D8]">
                Downtime: {selectedCase.downtime}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Slider on Left (7 cols) */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={selectedCase.beforeImage}
                afterImage={selectedCase.afterImage}
                className="h-[380px] sm:h-[460px] w-full"
              />
            </div>

            {/* Case Details on Right (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#4A4946] block">
                  Clinical Protocol Details:
                </span>
                <p className="text-xs text-[#5C5A53] leading-relaxed">
                  {selectedCase.procedureDetails}
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8E3D8] space-y-2 text-xs">
                <span className="font-semibold text-[#1C1C1A] block">Outcome Summary:</span>
                <p className="text-[#5C5A53] leading-relaxed">
                  {selectedCase.resultsSummary}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#E6E1D8] space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-[#1C1C1A]">
                  <ShieldCheck className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Physician Perspective:</span>
                </div>
                <p className="text-[#716E65] italic">
                  "{selectedCase.physicianNote}"
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenBooking}
                  className="flex-1 bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3.5 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#C59B8B]" />
                  <span>Book Similar Transformation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#795649]">
            Case Library
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium">
            Explore All Patient Cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const isSelected = selectedCase.id === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between ${
                  isSelected 
                    ? 'border-[#1C1C1A] ring-2 ring-[#1C1C1A]/10 shadow-md' 
                    : 'border-[#E6E1D8] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Before / After side-by-side images */}
                <div className="grid grid-cols-2 gap-0.5 bg-zinc-200 h-64 sm:h-72 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} Before`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#1C1C1A]/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                      Before
                    </span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img
                      src={item.afterImage}
                      alt={`${item.title} After`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-[#795649]/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase">
                      After
                    </span>
                  </div>
                </div>

                {/* Case Info */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-[#795649] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#E8E3D8] shrink-0">
                        {item.treatment.split('(')[0]}
                      </span>
                    </div>

                    <p className="text-xs text-[#716E65]">
                      {item.patientProfile} • Downtime: {item.downtime}
                    </p>

                    <p className="text-xs text-[#5C5A53] leading-relaxed line-clamp-3">
                      {item.resultsSummary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedCase(item);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                      className="text-xs uppercase tracking-wider font-semibold text-[#795649] hover:text-[#1C1C1A] flex items-center gap-1.5"
                    >
                      <span>Compare with Slider</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="bg-[#1C1C1A] text-[#FCF9F3] text-[11px] uppercase tracking-wider font-semibold py-2 px-3.5 rounded hover:bg-zinc-800 transition-colors"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLINICAL INTEGRITY NOTICE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-2xl border border-[#E6E1D8] p-6 sm:p-8 text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-[#6C7A6D] mx-auto" />
          <h3 className="font-serif text-xl text-[#1C1C1A] font-medium">
            Our Commitment to Authentic Clinical Photography
          </h3>
          <p className="text-xs text-[#5C5A53] leading-relaxed max-w-xl mx-auto">
            We do not use beauty filters, facial slimming software, or manipulated angles. Every photo represents real patients treated in our Worcester medical suite with informed consent.
          </p>
        </div>
      </section>
    </div>
  );
};
