import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, CheckCircle, Shield, Clock, Users, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDES = [
  {
    id: 1,
    title: "Professional Document Clearing Services",
    description: "Your trusted partner for all UAE government paperwork with 99% success rate",
    icon: <CheckCircle className="text-[#C41E3A]" size={48} />,
    color: "from-blue-50 to-white",
    borderColor: "border-blue-100",
    textColor: "text-blue-900"
  },
  {
    id: 2,
    title: "UAE Visa & Immigration Services",
    description: "Professional visa processing and immigration services for individuals and families",
    icon: <Globe className="text-[#C41E3A]" size={48} />,
    color: "from-green-50 to-white",
    borderColor: "border-green-100",
    textColor: "text-green-900"
  },
  {
    id: 3,
    title: "Business Setup & PRO Services",
    description: "Complete business setup solutions with dedicated PRO support across all Emirates",
    icon: <Shield className="text-[#C41E3A]" size={48} />,
    color: "from-purple-50 to-white",
    borderColor: "border-purple-100",
    textColor: "text-purple-900"
  },
  {
    id: 4,
    title: "Fast Processing & Expert Advisory",
    description: "Optimized workflows for rapid document processing with senior PRO consultation",
    icon: <Clock className="text-[#C41E3A]" size={48} />,
    color: "from-amber-50 to-white",
    borderColor: "border-amber-100",
    textColor: "text-amber-900"
  },
  {
    id: 5,
    title: "Global Reach & Local Expertise",
    description: "International standards with deep understanding of UAE regulatory landscape",
    icon: <Users className="text-[#C41E3A]" size={48} />,
    color: "from-rose-50 to-white",
    borderColor: "border-rose-100",
    textColor: "text-rose-900"
  },
  {
    id: 6,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance for all your documentation needs and queries",
    icon: <Phone className="text-[#C41E3A]" size={48} />,
    color: "from-indigo-50 to-white",
    borderColor: "border-indigo-100",
    textColor: "text-indigo-900"
  }
];

export default function CaptionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const currentSlide = SLIDES[currentIndex];

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            <span className="uppercase">Why Choose</span>{' '}
            <span className="text-[#C41E3A] normal-case">BlueMark</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#C41E3A] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium">
            Discover what makes us the preferred partner for UAE business documentation
          </p>
        </div>

        <div className="relative">
          {/* Main Slide Display */}
          <div className="mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${currentSlide.color} rounded-3xl p-8 md:p-12 border ${currentSlide.borderColor} shadow-xl`}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      {currentSlide.icon}
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${currentSlide.textColor}`}>
                      {currentSlide.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {currentSlide.description}
                    </p>
                  </div>
                  <div className="hidden md:block flex-shrink-0">
                    <Quote className="text-gray-300" size={64} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <button 
              onClick={prev}
              className="w-12 h-12 bg-[#C41E3A] text-white rounded-full flex items-center justify-center hover:bg-[#a3182e] transition-all shadow-lg active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#C41E3A] w-8' : 'bg-gray-300'}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-12 h-12 bg-[#C41E3A] text-white rounded-full flex items-center justify-center hover:bg-[#a3182e] transition-all shadow-lg active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* All Slides Preview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-2xl border transition-all ${index === currentIndex ? 'border-[#C41E3A] bg-red-50 shadow-md' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${index === currentIndex ? 'bg-[#C41E3A] text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {React.cloneElement(slide.icon, { size: 20 })}
                  </div>
                  <span className={`text-xs font-medium ${index === currentIndex ? 'text-[#C41E3A]' : 'text-gray-600'}`}>
                    {slide.title.split(' ')[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}