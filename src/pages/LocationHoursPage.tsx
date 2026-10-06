import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Mail, 
  Navigation, 
  Car, 
  CheckCircle2, 
  ExternalLink, 
  Calendar,
  Building,
  ShieldCheck,
  Instagram
} from 'lucide-react';

interface LocationHoursPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const LocationHoursPage: React.FC<LocationHoursPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedRoute, setSelectedRoute] = useState<'boston' | 'providence' | 'local'>('boston');

  const routeGuides = {
    boston: {
      title: 'From Greater Boston & Metrowest',
      highway: 'Mass Pike (I-90 W) to I-290 W to Route 122 / Pleasant St',
      time: '~45–55 minutes from Route 128 / Newton',
      steps: [
        'Take I-90 West (Mass Pike) to Exit 106 for I-495 N toward Marlboro/Worcester.',
        'Merge onto I-290 West toward Worcester.',
        'Take Exit 21 for Route 122 / Highland Street / Pleasant Street corridor.',
        'Follow Route 122 (Pleasant Street) westbound toward Tatnuck. 1086 Pleasant Street will be on your left, with convenient on-site parking.',
      ],
    },
    providence: {
      title: 'From Providence & Blackstone Valley',
      highway: 'MA-146 North to I-290 to Route 122',
      time: '~40 minutes from Downtown Providence',
      steps: [
        'Follow MA-146 North toward Worcester.',
        'Merge onto I-290 East / Northbound toward Worcester.',
        'Take Exit 15 for Southbridge Street toward Route 122 (Pleasant Street).',
        'Head westbound on Pleasant Street toward 1086 Pleasant Street in Worcester MA 01602.',
      ],
    },
    local: {
      title: 'From Central Worcester & Tatnuck Neighborhood',
      highway: 'Pleasant Street Corridor (Route 122)',
      time: '5–10 minutes from Central Worcester / WPI',
      steps: [
        'Proceed along Pleasant Street (Route 122) heading toward Tatnuck Square.',
        '1086 Pleasant Street is located near June Street and Flagg Street in a quiet, accessible professional setting.',
        'Dedicated parking is available directly at the property.',
      ],
    },
  };

  return (
    <div className="space-y-20 sm:space-y-24 py-8">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
          <MapPin className="w-3.5 h-3.5 text-[#6C7A6D]" />
          <span>Worcester Practice Suite</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1C1A] font-medium tracking-tight">
          Location & Hours
        </h1>
        <p className="text-sm sm:text-base text-[#5C5A53] max-w-2xl mx-auto leading-relaxed">
          Conveniently located on Pleasant Street in Worcester, Massachusetts. Private, welcoming, and accessible with dedicated parking.
        </p>
      </section>

      {/* CORE DETAILS: LOCATION & SCHEDULE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Clinic Address Card: 6 cols */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E6E1D8] p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-[#1C1C1A] font-medium">
                    Tinaesthetics by Dr. Vo
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-[#795649] font-medium">
                    Pleasant Street Clinic
                  </p>
                </div>
              </div>

              <div className="text-sm text-[#4A4946] space-y-1 bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E3D8]">
                <p className="font-semibold text-[#1C1C1A]">Tinaesthetics by Dr. Vo</p>
                <p>1086 Pleasant Street</p>
                <p>Worcester, MA 01602</p>
              </div>

              <div className="space-y-2 text-xs text-[#5C5A53]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Free on-site parking available for clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Private, discrete, and welcoming clinical setting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6C7A6D]" />
                  <span>Convenient Tatnuck / West Worcester location</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0ECE4] flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=1086+Pleasant+Street+Worcester+MA+01602"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C59B8B]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://tinaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#DDD8CE] text-[#1C1C1A] hover:border-[#1C1C1A] text-xs uppercase tracking-wider font-semibold py-3 px-5 rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book on Square</span>
              </a>
            </div>
          </div>

          {/* Operating Hours & Direct Contact Card: 6 cols */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E6E1D8] p-8 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-[#1C1C1A] font-medium">
                    Hours & Scheduling
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-[#795649] font-medium">
                    Variable • Book Online
                  </p>
                </div>
              </div>

              {/* Notice */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E3D8] text-xs space-y-2 text-[#4A4946]">
                <p className="font-medium text-[#1C1C1A]">
                  Clinical hours are <strong>variable and by appointment</strong>.
                </p>
                <p className="leading-relaxed">
                  Appointments are booked in advance to ensure dedicated, unrushed one-on-one time with Dr. Tina Vo. Check our live calendar on Square for current availability, evening slots, and weekend openings.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2 text-[#1C1C1A]">
                  <Phone className="w-4 h-4 text-[#C59B8B]" />
                  <a href="tel:8722229332" className="hover:text-[#795649] font-mono font-medium">
                    872-222-9332
                  </a>
                  <span className="text-[11px] text-[#716E65] italic">(Text preferred)</span>
                </div>
                <div className="flex items-center gap-2 text-[#1C1C1A]">
                  <Mail className="w-4 h-4 text-[#C59B8B]" />
                  <a href="mailto:DrVoAesthetics@gmail.com" className="hover:text-[#795649]">
                    DrVoAesthetics@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#1C1C1A]">
                  <Instagram className="w-4 h-4 text-[#C59B8B]" />
                  <a 
                    href="https://www.instagram.com/tinaestheticsbydrvo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#795649]"
                  >
                    @TinaestheticsByDrVo
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0ECE4]">
              <a
                href="https://tinaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-wider font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <span>Check Live Availability on Square</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C59B8B]" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* DRIVING DIRECTIONS */}
      <section className="bg-[#FAF7F2] py-16 border-y border-[#E6E1D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#795649]">
              Directions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1C1A] font-medium">
              Directions to 1086 Pleasant Street
            </h2>
            <p className="text-sm text-[#5C5A53]">
              Select your starting route for simple directions to our Worcester clinic.
            </p>
          </div>

          {/* Route Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'boston', label: 'From Boston / Metrowest' },
              { id: 'providence', label: 'From Providence / RI' },
              { id: 'local', label: 'Local Worcester Area' },
            ].map((tab) => {
              const isSelected = selectedRoute === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedRoute(tab.id as any)}
                  className={`py-2.5 px-5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#1C1C1A] text-white shadow'
                      : 'bg-white border border-[#DDD8CE] text-[#5C5A53] hover:border-[#1C1C1A]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Route Content Box */}
          <div className="bg-white rounded-2xl border border-[#E6E1D8] p-6 sm:p-8 max-w-3xl mx-auto shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#F0ECE4]">
              <h3 className="font-serif text-xl font-medium text-[#1C1C1A]">
                {routeGuides[selectedRoute].title}
              </h3>
              <span className="text-xs font-mono text-[#795649]">
                {routeGuides[selectedRoute].time}
              </span>
            </div>

            <p className="text-xs font-semibold text-[#4A4946] uppercase tracking-wider">
              Vector: {routeGuides[selectedRoute].highway}
            </p>

            <ol className="space-y-3 pt-2 text-xs sm:text-sm text-[#5C5A53]">
              {routeGuides[selectedRoute].steps.map((st, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#DDD8CE] text-[#1C1C1A] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{st}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MAP VIEW CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#E6E1D8] overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8 border-b border-[#E6E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#795649]">
                Map Location
              </span>
              <h3 className="font-serif text-xl text-[#1C1C1A] font-medium">
                1086 Pleasant Street, Worcester, MA 01602
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=1086+Pleasant+Street+Worcester+MA+01602"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C1C1A] text-white text-xs uppercase tracking-wider font-semibold py-2.5 px-5 rounded hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5 self-start sm:self-auto"
            >
              <span>Get GPS Directions</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C59B8B]" />
            </a>
          </div>

          {/* Map Graphic */}
          <div className="relative h-80 sm:h-96 bg-[#FAF7F2] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(#1C1C1A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute w-full h-12 bg-[#EDE8DE] rotate-6 transform translate-y-6"></div>
            <div className="absolute w-14 h-full bg-[#E5DFD3] -rotate-12 transform translate-x-12"></div>
            
            <div className="relative z-10 bg-white p-5 rounded-2xl shadow-xl border border-[#E6E1D8] text-center max-w-xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#1C1C1A] text-[#FCF9F3] flex items-center justify-center mx-auto shadow">
                <MapPin className="w-5 h-5 text-[#C59B8B]" />
              </div>
              <h4 className="font-serif text-base font-medium text-[#1C1C1A]">
                Tinaesthetics by Dr. Vo
              </h4>
              <p className="text-xs text-[#5C5A53]">
                1086 Pleasant Street, Worcester MA 01602
              </p>
              <div className="pt-1">
                <span className="text-[10px] font-semibold bg-[#EAEFE9] text-[#445045] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Convenient On-Site Parking
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
