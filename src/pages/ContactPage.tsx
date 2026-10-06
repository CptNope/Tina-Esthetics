import React, { useState } from 'react';
import { PageId } from '../types';
import { TREATMENTS } from '../data/treatments';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Instagram
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onSuccessToast?: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBooking,
  onSuccessToast,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Neurotoxin Injections ($13/unit)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccessToast) {
      onSuccessToast('Message sent! Dr. Tina Vo will review your inquiry shortly.');
    }
  };

  return (
    <div className="space-y-20 sm:space-y-24 py-8">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAEFE9] text-[#445045] text-xs font-semibold tracking-wider uppercase border border-[#D5E0D4]">
          <MessageSquare className="w-3.5 h-3.5 text-[#6C7A6D]" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1C1C1A] font-medium tracking-tight">
          Contact Dr. Tina Vo
        </h1>
        <p className="text-sm sm:text-base text-[#5C5A53] max-w-2xl mx-auto leading-relaxed">
          Questions about treatments, dosing, or booking? Reach out directly via text, phone, email, or schedule through our live Square booking portal.
        </p>
      </section>

      {/* MAIN TWO-COLUMN CONTACT & FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Square Booking (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Square Appointment Booking Card */}
            <div className="bg-[#1C1C1A] text-[#FCF9F3] rounded-2xl p-7 shadow-lg space-y-4 border border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C59B8B]">
                <Calendar className="w-4 h-4" />
                <span>Square Online Booking</span>
              </div>
              <h3 className="font-serif text-2xl font-medium">
                Book Directly via Square
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                View real-time openings on Dr. Tina Vo's clinic calendar and select your preferred service and time slot instantly.
              </p>
              <div className="pt-2">
                <a
                  href="https://tinaesthetics.square.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#FCF9F3] hover:bg-[#EAE6DD] text-[#1C1C1A] text-xs uppercase tracking-wider font-semibold py-3.5 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <span>Open Square Booking</span>
                  <ExternalLink className="w-4 h-4 text-[#795649]" />
                </a>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="bg-white rounded-2xl border border-[#E6E1D8] p-7 space-y-5 shadow-sm">
              <h3 className="font-serif text-lg font-medium text-[#1C1C1A]">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-xs text-[#5C5A53]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1C1A] block">Phone & SMS (Text Preferred)</span>
                    <a href="tel:8722229332" className="text-[#795649] hover:underline font-mono">
                      872-222-9332
                    </a>
                    <span className="text-zinc-400 block text-[11px]">Text message preferred for fastest response</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1C1A] block">Email</span>
                    <a href="mailto:DrVoAesthetics@gmail.com" className="text-[#795649] hover:underline">
                      DrVoAesthetics@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649] shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1C1A] block">Instagram</span>
                    <a 
                      href="https://www.instagram.com/tinaestheticsbydrvo/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#795649] hover:underline"
                    >
                      @TinaestheticsByDrVo
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E6E1D8] flex items-center justify-center text-[#795649] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1C1A] block">Clinic Location</span>
                    <span>1086 Pleasant Street, Worcester, MA 01602</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note Card */}
            <div className="bg-[#FAF7F2] rounded-2xl border border-[#E8E3D8] p-5 text-xs text-[#5C5A53] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#1C1C1A] uppercase tracking-wider text-[11px]">
                <Clock className="w-4 h-4 text-[#6C7A6D]" />
                <span>Hours & Availability</span>
              </div>
              <p className="leading-relaxed">
                Hours are variable and by appointment. Please reserve through our live Square portal or send a text to <strong>872-222-9332</strong> to inquire about custom booking times.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E6E1D8] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-in fade-in">
                <div className="w-16 h-16 bg-[#EAEFE9] text-[#6C7A6D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-medium text-[#1C1C1A]">
                    Message Sent
                  </h3>
                  <p className="text-sm text-[#5C5A53] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1C1C1A]">{name}</strong>. Dr. Tina Vo will get back to you shortly via text or email.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#1C1C1A] text-white text-xs uppercase tracking-wider font-semibold py-3 px-6 rounded hover:bg-zinc-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#795649] block mb-1">
                    Send an Inquiry
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1C1A] font-medium">
                    Questions for Dr. Tina Vo?
                  </h2>
                  <p className="text-xs text-[#5C5A53] mt-1">
                    Fill out the form below or text us directly at 872-222-9332.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Elena Vance"
                        className="w-full bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="872-222-9332"
                        className="w-full bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="elena@example.com"
                      className="w-full bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                      Treatment of Interest
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B] focus:bg-white"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.priceDisplay})
                        </option>
                      ))}
                      <option value="Payment Plans">Payment Plans & Financing Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A4946] mb-1.5">
                      Your Goals or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Inquiring about lip filler mini plump vs full plump, or weight loss program availability."
                      className="w-full bg-[#FAF8F5] border border-[#DDD8CE] rounded-lg px-3.5 py-2.5 text-sm text-[#1C1C1A] focus:outline-none focus:border-[#C59B8B] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1C1C1A] hover:bg-[#343330] text-[#FCF9F3] text-xs uppercase tracking-widest font-semibold py-4 px-6 rounded-lg transition-all shadow hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#C59B8B]" />
                    <span>Send Message to Dr. Tina Vo</span>
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
