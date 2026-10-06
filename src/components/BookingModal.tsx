import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { TREATMENTS } from '../data/treatments';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: string;
  onSuccessToast?: (msg: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTreatmentId,
  onSuccessToast,
}) => {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    initialTreatmentId || 'consultation'
  );
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9:00 AM – 12:00 PM)');
  const [patientStatus, setPatientStatus] = useState<'new' | 'returning'>('new');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update selected treatment if initialTreatmentId changes
  React.useEffect(() => {
    if (initialTreatmentId) {
      setSelectedTreatmentId(initialTreatmentId);
    }
  }, [initialTreatmentId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `TINA-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast(`Consultation request submitted successfully (#${ref})`);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const treatmentOptions = [
    { id: 'consultation', title: 'Aesthetic Consultation & Treatment Planning', price: 'Dosing assessment' },
    ...TREATMENTS.map(t => ({
      id: t.id,
      title: t.title,
      price: t.priceDisplay
    }))
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-[#FCF9F3] text-[#1C1C1A] rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#E6E1D8] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 p-1.5 rounded-full hover:bg-[#EFEBE3] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-[#EAEFE9] text-[#6C7A6D] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1C1A]">
                Appointment Request Received
              </h3>
              <p className="text-sm text-[#5C5A53] max-w-md mx-auto">
                Thank you, <strong className="text-[#1C1C1A]">{fullName || 'Valued Client'}</strong>. Dr. Tina Vo will review your preferred date and contact you directly via text message (872-222-9332) to finalize your visit.
              </p>
            </div>

            <div className="bg-[#F7F4EE] border border-[#E6E1D8] rounded-xl p-4 text-left max-w-md mx-auto text-xs space-y-2 font-mono">
              <div className="flex justify-between border-b border-[#E0DBD0] pb-1.5">
                <span className="text-zinc-500">Confirmation ID:</span>
                <span className="font-bold text-[#1C1C1A]">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#E0DBD0] pb-1.5">
                <span className="text-zinc-500">Provider:</span>
                <span className="text-[#1C1C1A]">Dr. Tina Vo (Doctoral Nurse Practitioner)</span>
              </div>
              <div className="flex justify-between border-b border-[#E0DBD0] pb-1.5">
                <span className="text-zinc-500">Service:</span>
                <span className="text-[#1C1C1A] truncate max-w-[200px]">
                  {treatmentOptions.find(t => t.id === selectedTreatmentId)?.title || 'Consultation'}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#E0DBD0] pb-1.5">
                <span className="text-zinc-500">Requested Timing:</span>
                <span className="text-[#1C1C1A]">{preferredDate || 'Earliest opening'} • {preferredTime}</span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-zinc-500">Location:</span>
                <span className="text-[#1C1C1A]">1086 Pleasant Street, Worcester MA 01602</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleReset}
                className="bg-[#1C1C1A] text-[#FCF9F3] text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded hover:bg-zinc-800 transition-colors"
              >
                Return to Clinic
              </button>
              <a
                href="https://tinaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#C59B8B] text-[#785446] hover:bg-[#F5E3E0]/40 text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Live Square Calendar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C59B8B] mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tinaesthetics by Dr. Vo</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1C1A]">
                Schedule with Dr. Tina Vo
              </h3>
              <p className="text-xs text-[#5C5A53] mt-1">
                Personalized aesthetic and wellness care in Worcester, MA. Injections and evaluations administered by Dr. Tina Vo.
              </p>
            </div>

            {/* Direct Square Banner */}
            <div className="bg-[#F7F4EE] border border-[#DDD8CE] rounded-lg p-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C59B8B]" />
                <span className="text-[#3C3B37]">Want instant live calendar booking?</span>
              </div>
              <a
                href="https://tinaesthetics.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#785446] hover:underline font-semibold flex items-center gap-1 shrink-0 ml-2"
              >
                <span>Book on Square</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Treatment Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                  Treatment / Service
                </label>
                <select
                  value={selectedTreatmentId}
                  onChange={(e) => setSelectedTreatmentId(e.target.value)}
                  className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                  required
                >
                  {treatmentOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.title} ({opt.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Status Pill */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                  Client Status
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPatientStatus('new')}
                    className={`py-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                      patientStatus === 'new'
                        ? 'border-[#1C1C1A] bg-[#1C1C1A] text-white'
                        : 'border-[#DDD8CE] bg-white text-[#5C5A53] hover:border-[#A29F95]'
                    }`}
                  >
                    First-Time Client
                  </button>
                  <button
                    type="button"
                    onClick={() => setPatientStatus('returning')}
                    className={`py-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                      patientStatus === 'returning'
                        ? 'border-[#1C1C1A] bg-[#1C1C1A] text-white'
                        : 'border-[#DDD8CE] bg-white text-[#5C5A53] hover:border-[#A29F95]'
                    }`}
                  >
                    Returning Client
                  </button>
                </div>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rachel Sterling"
                      className="w-full bg-white border border-[#DDD8CE] rounded-lg pl-9 pr-3 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                    Mobile Phone (Text SMS) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="872-222-9332"
                      className="w-full bg-white border border-[#DDD8CE] rounded-lg pl-9 pr-3 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rachel@example.com"
                    className="w-full bg-white border border-[#DDD8CE] rounded-lg pl-9 pr-3 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                  />
                </div>
              </div>

              {/* Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                  >
                    <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Midday (12:00 PM – 3:00 PM)">Midday (12:00 PM – 3:00 PM)</option>
                    <option value="Afternoon (3:00 PM – 6:00 PM)">Afternoon (3:00 PM – 6:00 PM)</option>
                    <option value="Evening / Flexible">Evening / Flexible</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                  Aesthetic Goals or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Interested in lip mini-plump or neurotoxin for frown lines. Questions about payment plans."
                  className="w-full bg-white border border-[#DDD8CE] rounded-lg px-3 py-2 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-widest font-semibold py-3.5 px-6 rounded-lg transition-all shadow hover:shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C59B8B]" />
                Request Appointment with Dr. Vo
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
