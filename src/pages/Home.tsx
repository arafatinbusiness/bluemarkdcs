import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesOverview from '../components/ServicesOverview';
import TrustSection from '../components/TrustSection';
import CaptionSlider from '../components/CaptionSlider';
import JournalSection from '../components/JournalSection';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesOverview />
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
