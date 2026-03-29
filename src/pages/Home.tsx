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

export default function Home() {
  const [showDetailedServices, setShowDetailedServices] = useState(false);

  const handleShowDetailedServices = () => {
    setShowDetailedServices(true);
    // Scroll to services section
    setTimeout(() => {
      const element = document.getElementById('detailed-services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleHideDetailedServices = () => {
    setShowDetailedServices(false);
    // Scroll back to services overview
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero onShowDetailedServices={handleShowDetailedServices} />
      
      {showDetailedServices ? (
        <div id="detailed-services">
          <DetailedServices onClose={handleHideDetailedServices} />
        </div>
      ) : (
        <ServicesOverview />
      )}
      
      <TrustSection />
      <CaptionSlider />
      <JournalSection />
      <AboutSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
