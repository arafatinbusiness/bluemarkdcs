import { useNavigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { motion } from 'motion/react';

export default function ServicesOverview() {
  const navigate = useNavigate();

  const handleServiceClick = (id: string) => {
    navigate(`/service/${id}`);
  };

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
            Core <span className="text-[#C41E3A]">Service</span> Portfolio
          </h2>
          <div className="w-20 h-1.5 bg-[#C41E3A] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium">
            Comprehensive administrative solutions designed to facilitate 
            business growth and individual residency requirements in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {SERVICES.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleServiceClick(service.id)}
                className="group p-4 md:p-8 bg-[#250E09] rounded-2xl md:rounded-3xl border border-[#3a1a12] shadow-sm hover:shadow-xl hover:shadow-red-900/30 hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden flex flex-col items-center justify-center text-center"
              >
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#C41E3A]/20 rounded-bl-full -z-10 group-hover:bg-[#C41E3A]/30 transition-colors" />
                
                <div className="w-10 h-10 md:w-14 md:h-14 bg-[#C41E3A] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg shadow-red-200 group-hover:scale-110 transition-transform p-2">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                
                <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#C41E3A] transition-colors">
                  {service.title}
                </h3>
                
                <p className="hidden md:block text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="hidden md:flex items-center text-white font-bold gap-2 group-hover:gap-3 group-hover:text-[#C41E3A] transition-all">
                  Learn More
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
