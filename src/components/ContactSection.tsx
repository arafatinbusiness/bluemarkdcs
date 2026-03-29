import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              GET IN <span className="text-[#C41E3A]">TOUCH</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#C41E3A] mb-8 rounded-full" />
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              Have questions about our services or need a custom quote? 
              Our team is ready to assist you with all your document clearance needs.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-red-100 text-[#C41E3A] rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-1">Our Office</h4>
                  <p className="text-gray-600">SF 18, Level 2, Dubai Shopping Centre</p>
                  <p className="text-gray-600">Besides City Centre Metro Exit 4, Deira, Dubai</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-red-100 text-[#C41E3A] rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600">+971 566 229 773</p>
                  <p className="text-gray-600">Available 24/7 for urgent inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-red-100 text-[#C41E3A] rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600">bluemarkdcs@gmail.com</p>
                  <p className="text-gray-600">Response within 2 business hours</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button 
                onClick={() => window.open('https://wa.me/971566229773', '_blank')}
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-200 active:scale-95"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </button>
              <button 
                onClick={() => window.open('tel:+971566229773', '_blank')}
                className="flex items-center gap-2 bg-[#C41E3A] text-white px-6 py-3 rounded-2xl font-bold hover:bg-[#a3182e] transition-all shadow-lg shadow-red-200 active:scale-95"
              >
                <Phone size={20} />
                Call Now
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/50"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="p-4 bg-white rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="p-4 bg-white rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Business Setup Inquiry" 
                  className="p-4 bg-white rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you today?" 
                  className="p-4 bg-white rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium resize-none"
                />
              </div>

              <button className="flex items-center justify-center gap-3 bg-[#C41E3A] text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-red-200 hover:bg-[#a3182e] transition-all active:scale-95 group mt-4">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
