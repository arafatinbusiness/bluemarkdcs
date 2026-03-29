import { useParams, useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-blue-100 border border-gray-100"
          >
            <div className="w-20 h-20 bg-[#C41E3A] rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-red-200 p-4">
              <img 
                src={service.icon} 
                alt={service.title}
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              {service.title} <span className="text-blue-600">DETAILS</span>
            </h1>
            
            <div className="w-20 h-1.5 bg-blue-600 mb-10 rounded-full" />

            <div className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed mb-12">
              <p className="text-xl text-gray-900 font-bold mb-6">{service.description}</p>
              <p>{service.details}</p>
              <p className="mt-6">
                Our dedicated team ensures that your {service.title} requirements are met with 
                the highest standards of professional excellence. We handle all interactions 
                with relevant UAE authorities, providing you with a seamless and stress-free experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <CheckCircle size={20} />
                  What's Included
                </h4>
                <ul className="text-blue-800 text-sm space-y-2 font-medium">
                  <li>• Document preparation & review</li>
                  <li>• Submission to relevant authorities</li>
                  <li>• Regular status updates</li>
                  <li>• Expert consultation</li>
                </ul>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                  <Clock size={20} />
                  Estimated Time
                </h4>
                <p className="text-green-800 text-sm font-medium">
                  Processing times vary depending on the specific requirements and government departments involved. 
                  Typically 3-7 working days.
                </p>
              </div>
            </div>

            <button 
              onClick={() => navigate(`/apply/${service.id}`)}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white p-6 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 group"
            >
              APPLY FOR THIS SERVICE
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
