import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
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
            FIND OUR <span className="text-blue-600">LOCATION</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Visit our office for a face-to-face consultation with our PRO experts. 
            We are conveniently located in the heart of Dubai.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="aspect-video bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl relative border border-gray-100">
              {/* Google Maps Embed */}
              <iframe 
                src="https://maps.google.com/maps?q=25.271106,55.334691&z=17&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="BlueMark Documents Clearing Services LLC Location"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col items-center gap-6 max-w-sm pointer-events-auto">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-blue-200">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <MapPin size={32} />
                    </motion.div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-black text-gray-900 mb-2">OUR HEADQUARTERS</h4>
                    <p className="text-gray-600 font-bold">Office No- 20, Capital City Business Centre</p>
                    <p className="text-gray-500 text-sm mt-2">Near Abu Bakker Al Siddiq Metro Station Exit 1, Deira, Dubai-UAE</p>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/qsrVmEDHa5nTJLjN7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white p-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 group"
                  >
                    <Navigation size={20} className="group-hover:rotate-45 transition-transform" />
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-tight">Contact <span className="text-blue-600">Details</span></h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-bold text-gray-900">+971 566 229 773 (Mobile)</p>
                    <p className="font-bold text-gray-900">04 834 6755 (Landline)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="font-bold text-gray-900">bluemarkdcs@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">Working <span className="text-blue-200">Hours</span></h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-blue-200 uppercase tracking-widest mb-1">Mon - Fri</p>
                    <p className="font-bold">08:00 AM - 06:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-blue-200 uppercase tracking-widest mb-1">Saturday</p>
                    <p className="font-bold">09:00 AM - 02:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-blue-200 uppercase tracking-widest mb-1">Sunday</p>
                    <p className="font-bold">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
