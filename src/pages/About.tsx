import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import TrustSection from '../components/TrustSection';
import PartnersSection from '../components/PartnersSection';
import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight"
          >
            ABOUT <span className="text-blue-600">OUR COMPANY</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Leading the way in professional document clearance and PRO services 
            in Dubai for over 15 years.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
      </section>

      <AboutSection />
      
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
              <h3 className="text-5xl font-black text-blue-600 mb-4">15k+</h3>
              <p className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Clients Served</p>
              <p className="text-gray-600 font-medium">Trusted by individuals and corporations alike.</p>
            </div>
            <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
              <h3 className="text-5xl font-black text-blue-600 mb-4">50+</h3>
              <p className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Expert PROs</p>
              <p className="text-gray-600 font-medium">Experienced professionals at your service.</p>
            </div>
            <div className="p-10 bg-gray-50 rounded-[3rem] border border-gray-100">
              <h3 className="text-5xl font-black text-blue-600 mb-4">99%</h3>
              <p className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-wide">Success Rate</p>
              <p className="text-gray-600 font-medium">Consistent results for all applications.</p>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
