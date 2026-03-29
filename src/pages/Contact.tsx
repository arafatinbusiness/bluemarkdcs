import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { motion } from 'motion/react';

export default function Contact() {
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
            CONTACT <span className="text-blue-600">US</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            We are here to help you with all your document clearance needs. 
            Reach out to us today for a free consultation.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
      </section>

      <ContactSection />
      
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl relative">
            {/* Placeholder for Google Map */}
            <img 
              src="https://picsum.photos/seed/map/1920/800" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Icons.MapPin size={24} />
                  </motion.div>
                </div>
                <div className="text-center">
                  <h4 className="font-black text-gray-900">OUR HEADQUARTERS</h4>
                  <p className="text-gray-600 text-sm font-bold">Sheikh Zayed Road, Dubai</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import * as Icons from 'lucide-react';
