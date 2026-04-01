import { useState } from 'react';
import { DETAILED_SERVICES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Briefcase, FileText, Building, Star, Scale, Phone, Mail } from 'lucide-react';

interface DetailedServicesProps {
  onClose?: () => void;
}

export default function DetailedServices({ onClose }: DetailedServicesProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const getCategoryIcon = (category: string) => {
    if (category.includes('Core & High-Demand')) return <Briefcase className="w-5 h-5" />;
    if (category.includes('Essential Processing')) return <FileText className="w-5 h-5" />;
    if (category.includes('Business Support')) return <Building className="w-5 h-5" />;
    if (category.includes('Specialized & Value-Added')) return <Star className="w-5 h-5" />;
    if (category.includes('Legal & Attestation')) return <Scale className="w-5 h-5" />;
    return <Briefcase className="w-5 h-5" />;
  };

  const handleServiceClick = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/971566229773', '_blank');
  };

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 uppercase">
            Our <span className="text-[#C41E3A]">Detailed</span> Services
          </h2>
          <div className="w-20 h-1.5 bg-[#C41E3A] rounded-full mx-auto" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-medium">
            Comprehensive administrative solutions designed to facilitate business growth and individual residency requirements in the UAE.
          </p>
        </div>

        {/* Mobile-friendly category tabs */}
        <div className="lg:hidden mb-6">
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {DETAILED_SERVICES.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === index
                    ? 'bg-[#C41E3A] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.category.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Categories Navigation */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 space-y-2">
              {DETAILED_SERVICES.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCategory(index);
                    setExpandedService(null);
                  }}
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
                className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="p-3 bg-[#C41E3A]/10 rounded-xl">
                    {getCategoryIcon(DETAILED_SERVICES[activeCategory].category)}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900">
                    {DETAILED_SERVICES[activeCategory].category}
                  </h3>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {DETAILED_SERVICES[activeCategory].services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`p-4 md:p-6 rounded-2xl border transition-all cursor-pointer ${
                        expandedService === index
                          ? 'bg-red-50 border-[#C41E3A] shadow-lg shadow-red-50'
                          : 'border-gray-100 hover:border-[#C41E3A]/30 hover:shadow-lg hover:shadow-red-50'
                      }`}
                      onClick={() => handleServiceClick(index)}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-[#C41E3A]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">
                            {service}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            Professional processing with guaranteed compliance and timely delivery
                          </p>
                          
                          {/* Expanded details */}
                          <AnimatePresence>
                            {expandedService === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mt-3"
                              >
                                <div className="pt-3 border-t border-gray-200">
                                  <p className="text-gray-600 text-sm mb-3">
                                    Our expert team handles all aspects of {service.toLowerCase()} with precision and efficiency, ensuring full compliance with UAE regulations.
                                  </p>
                                  <ul className="text-gray-500 text-sm space-y-1 mb-4">
                                    <li>• Document preparation & verification</li>
                                    <li>• Government department coordination</li>
                                    <li>• Regular progress updates</li>
                                    <li>• Timely completion guarantee</li>
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Single WhatsApp Contact Section */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-100">
                  <div className="bg-gradient-to-r from-[#C41E3A]/5 to-transparent p-6 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-[#C41E3A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle size={28} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-3">
                      Need Help with Any Service?
                    </h4>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Contact us directly on WhatsApp for instant assistance with any of our services. Our team is available to answer your questions and provide personalized solutions.
                    </p>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                    >
                      <MessageCircle size={24} />
                      Chat on WhatsApp
                    </button>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>+971 566 229 773</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>info@bluemarkdcs.com</span>
                      </div>
                    </div>
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
