import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import DetailedServices from '../components/DetailedServices';
import TrustSection from '../components/TrustSection';
import CaptionSlider from '../components/CaptionSlider';
import JournalSection from '../components/JournalSection';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function Home() {
  const [showDetailedServices, setShowDetailedServices] = useState(false);

  const handleShowDetailedServices = () => {
    setShowDetailedServices(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleHideDetailedServices = () => {
    setShowDetailedServices(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero onShowDetailedServices={handleShowDetailedServices} />
      
      <ServicesOverview />
      
      <TrustSection />
      <CaptionSlider />
      <JournalSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />

      {/* Detailed Services Modal/Overlay */}
      <AnimatePresence>
        {showDetailedServices && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleHideDetailedServices}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-4 top-4 bottom-4 lg:inset-x-8 lg:top-8 lg:bottom-8 bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">Detailed Services</h2>
                  <p className="text-gray-600">Browse our comprehensive service categories</p>
                </div>
                <button
                  onClick={handleHideDetailedServices}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close detailed services"
                >
                  <X size={24} className="text-gray-700" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <DetailedServices onClose={handleHideDetailedServices} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
