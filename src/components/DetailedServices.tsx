import { useState } from 'react';
import { DETAILED_SERVICES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Briefcase, FileText, Building, Star, Scale } from 'lucide-react';

interface DetailedServicesProps {
  onClose?: () => void;
}

export default function DetailedServices({ onClose }: DetailedServicesProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Core & High-Demand')) return <Briefcase className="w-5 h-5" />;
    if (category.includes('Essential Processing')) return <FileText className="w-5 h-5" />;
    if (category.includes('Business Support')) return <Building className="w-5 h-5" />;
    if (category.includes('Specialized & Value-Added')) return <Star className="w-5 h-5" />;
    if (category.includes('Legal & Attestation')) return <Scale className="w-5 h-5" />;
    return <Briefcase className="w-5 h-5" />;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 uppercase">
              Our <span className="text-[#C41E3A]">Detailed</span> Services
            </h2>
            <div className="w-20 h-1.5 bg-[#C41E3A] rounded-full" />
            <p className="mt-4 text-gray-600 max-w-2xl font-medium">
              Comprehensive administrative solutions designed to facilitate business growth and individual residency requirements in the UAE.
            </p>
          </div>
          
          {onClose && (
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close detailed services"
            >
              <X size={24} className="text-gray-700" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-2">
              {DETAILED_SERVICES.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl text-left transition-all ${
                    activeCategory === index
                      ? 'bg-[#C41E3A] text-white shadow-lg shadow-red-200'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    activeCategory === index ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {getCategoryIcon(category.category)}
                  </div>
                  <div className="flex-1">
                    <span className="font-bold text-sm">{category.category}</span>
                  </div>
                  <ChevronRight size={18} className={activeCategory === index ? 'text-white' : 'text-gray-400'} />
                </button>
              ))}
            </div>
          </div>

          {/* Services Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-[#C41E3A]/10 rounded-xl">
                    {getCategoryIcon(DETAILED_SERVICES[activeCategory].category)}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    {DETAILED_SERVICES[activeCategory].category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {DETAILED_SERVICES[activeCategory].services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group p-6 rounded-2xl border border-gray-100 hover:border-[#C41E3A]/30 hover:shadow-lg hover:shadow-red-50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center group-hover:bg-[#C41E3A] transition-colors">
                            <div className="w-2 h-2 rounded-full bg-[#C41E3A] group-hover:bg-white transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg group-hover:text-[#C41E3A] transition-colors">
                              {service}
                            </h4>
                            <p className="text-gray-500 text-sm mt-1">
                              Professional processing with guaranteed compliance and timely delivery
                            </p>
                          </div>
                        </div>
                        <button className="px-6 py-2 bg-[#C41E3A] text-white rounded-full font-bold text-sm hover:bg-[#1a1a1a] transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="bg-gradient-to-r from-[#C41E3A]/5 to-transparent p-6 rounded-2xl">
                    <h4 className="font-bold text-gray-900 text-lg mb-3">Need Custom Service?</h4>
                    <p className="text-gray-600 mb-4">
                      Don't see exactly what you need? Our team can create a customized service package tailored to your specific requirements.
                    </p>
                    <button className="px-8 py-3 bg-[#C41E3A] text-white rounded-full font-bold hover:bg-[#1a1a1a] transition-colors">
                      Request Custom Service
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}