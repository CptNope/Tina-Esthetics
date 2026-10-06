import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FinancingModal } from './components/FinancingModal';
import { FloatingBar } from './components/FloatingBar';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { AboutDrVoPage } from './pages/AboutDrVoPage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { GalleryPage } from './pages/GalleryPage';
import { PricingPage } from './pages/PricingPage';
import { LocationHoursPage } from './pages/LocationHoursPage';
import { FinancingPage } from './pages/FinancingPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingTreatmentId, setBookingTreatmentId] = useState<string | undefined>(undefined);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about-dr-vo',
        'treatments',
        'gallery',
        'pricing',
        'payment-plans-financing',
        'location-hours',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (treatmentId?: string) => {
    setBookingTreatmentId(treatmentId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingTreatmentId(undefined);
  };

  const handleOpenFinancing = () => {
    setIsFinancingOpen(true);
  };

  const handleCloseFinancing = () => {
    setIsFinancingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F3] text-[#1C1C1A] selection:bg-[#EAEFE9] selection:text-[#1C1C1A]">
      {/* Global Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
        onOpenFinancing={handleOpenFinancing}
      />

      {/* Main Screen View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenFinancing={handleOpenFinancing}
          />
        )}

        {currentPage === 'about-dr-vo' && (
          <AboutDrVoPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentPage === 'treatments' && (
          <TreatmentsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenFinancing={handleOpenFinancing}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenFinancing={handleOpenFinancing}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenFinancing={handleOpenFinancing}
          />
        )}

        {currentPage === 'payment-plans-financing' && (
          <FinancingPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onOpenCherryModal={handleOpenFinancing}
          />
        )}

        {currentPage === 'location-hours' && (
          <LocationHoursPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
            onSuccessToast={(msg) => setToastMessage(msg)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        onOpenFinancing={handleOpenFinancing}
      />

      {/* Floating Action Bar */}
      <FloatingBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenFinancing={handleOpenFinancing}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialTreatmentId={bookingTreatmentId}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      {/* Interactive Cherry Pre-Approval Modal */}
      <FinancingModal
        isOpen={isFinancingOpen}
        onClose={handleCloseFinancing}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
