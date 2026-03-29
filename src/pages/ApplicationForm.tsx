import { useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { User, Mail, Phone, FileText, Upload, Send, CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ApplicationForm() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === serviceId);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  if (!service && serviceId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-600 font-bold hover:underline"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-500 font-bold mb-8 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </button>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-blue-100 border border-gray-100"
              >
                <div className="text-center mb-12">
                  <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                    APPLICATION <span className="text-blue-600">FORM</span>
                  </h1>
                  <p className="text-gray-600 font-bold text-lg">
                    Applying for: <span className="text-blue-600">{service?.title || 'General Inquiry'}</span>
                  </p>
                  <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-black text-gray-700 ml-2 flex items-center gap-2">
                        <User size={16} className="text-blue-600" />
                        FULL NAME
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="Enter your full name" 
                        className="p-5 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-black text-gray-700 ml-2 flex items-center gap-2">
                        <Mail size={16} className="text-blue-600" />
                        EMAIL ADDRESS
                      </label>
                      <input 
                        required
                        type="email" 
                        placeholder="your@email.com" 
                        className="p-5 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-black text-gray-700 ml-2 flex items-center gap-2">
                        <Phone size={16} className="text-blue-600" />
                        PHONE NUMBER
                      </label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+971 00 000 0000" 
                        className="p-5 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-black text-gray-700 ml-2 flex items-center gap-2">
                        <FileText size={16} className="text-blue-600" />
                        PASSPORT NUMBER
                      </label>
                      <input 
                        required
                        type="text" 
                        placeholder="Enter passport number" 
                        className="p-5 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <label className="text-sm font-black text-gray-700 ml-2 flex items-center gap-2">
                      <Upload size={16} className="text-blue-600" />
                      PASSPORT COPY (IMAGE/PDF)
                    </label>
                    <div className="relative group">
                      <input 
                        required
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="p-10 border-4 border-dashed border-gray-100 rounded-[2rem] flex flex-col items-center justify-center gap-4 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-all">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                          <Upload size={32} />
                        </div>
                        <div className="text-center">
                          <p className="font-black text-gray-900">Click to upload or drag and drop</p>
                          <p className="text-gray-500 text-sm font-bold">PNG, JPG or PDF (MAX. 5MB)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-black text-gray-700 ml-2">ADDITIONAL NOTES</label>
                    <textarea 
                      rows={4} 
                      placeholder="Any specific requirements or questions?" 
                      className="p-5 bg-gray-50 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white p-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 group mt-4"
                  >
                    SUBMIT APPLICATION
                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[3rem] p-16 md:p-24 shadow-xl shadow-blue-100 border border-gray-100 text-center"
              >
                <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100">
                  <CheckCircle2 size={64} />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                  APPLICATION <span className="text-green-600">RECEIVED!</span>
                </h2>
                <p className="text-xl text-gray-600 font-bold mb-12 leading-relaxed">
                  Thank you for choosing Dubai Document Clearance. Our team will review your application 
                  and contact you within 24 hours.
                </p>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
                >
                  RETURN HOME
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
