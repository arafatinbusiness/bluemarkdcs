import { useNavigate } from 'react-router-dom';
import { Send, Briefcase, BookOpen, MapPin, Plane, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative min-h-[90vh] lg:h-[850px] flex items-start lg:items-center bg-white overflow-hidden pb-12 lg:pb-0 pt-[55vh] lg:pt-0">
      {/* Mobile Background (Optimized for 767x1152 portrait image) */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden bg-black">
        {/* Blurred background for depth */}
        <img 
          src="/assets/hero.jpeg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-105" 
        />
        {/* Main image - centered and properly scaled for 767x1152 portrait */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/assets/hero.jpeg" 
            alt="BlueMark Documents Clearing Services Mobile Background" 
            className="h-full w-auto max-w-none object-contain"
          />
        </div>
        {/* Enhanced gradient overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
        {/* Side gradients to handle portrait image on landscape screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      {/* Desktop Background (Right Side Only to fix zoom) */}
      <div className="absolute top-0 right-0 bottom-0 w-[45%] z-0 hidden lg:block">
        <img 
          src="/assets/hero.jpeg" 
          alt="BlueMark Documents Clearing Services Desktop Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle fade to white on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-3xl w-full"
            >
              <h1 className="text-[32px] sm:text-[40px] md:text-[72px] lg:text-[80px] font-[900] text-white lg:text-[#1a1a1a] leading-[1.1] mb-6 md:mb-8 tracking-tighter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] lg:drop-shadow-none">
                <span className="text-[#C41E3A] normal-case">BlueMark</span>{' '}
                <span className="uppercase">Documents Clearing Services LLC</span>
              </h1>
              
              <p className="text-[14px] sm:text-[16px] md:text-[22px] text-white lg:text-[#666666] leading-[1.5] md:leading-[1.6] mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 font-bold md:font-semibold lg:font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] lg:drop-shadow-none px-2 sm:px-0">
                UAE Business, Visa, PRO and Government Paperwork Solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button 
                  onClick={() => handleNavigation('/apply')}
                  className="w-full sm:w-auto bg-[#C41E3A] text-white px-12 py-5 rounded-full font-black text-[16px] hover:bg-[#1a1a1a] transition-all duration-500 active:scale-95 shadow-2xl shadow-red-900/40 uppercase tracking-widest"
                >
                  Easy Apply
                </button>
                
                <button 
                  onClick={() => handleNavigation('/detailed-services')}
                  className="w-full sm:w-auto bg-white lg:bg-gray-100 text-[#1a1a1a] px-12 py-5 rounded-full font-black text-[16px] hover:bg-[#C41E3A] hover:text-white transition-all duration-500 active:scale-95 uppercase tracking-widest shadow-2xl shadow-black/10"
                >
                  Services
                </button>

                <button 
                  onClick={() => handleNavigation('/journals')}
                  className="w-full sm:w-auto bg-white lg:bg-gray-100 text-[#1a1a1a] px-12 py-5 rounded-full font-black text-[16px] hover:bg-[#C41E3A] hover:text-white transition-all duration-500 active:scale-95 uppercase tracking-widest shadow-2xl shadow-black/10"
                >
                  📚 Journals
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/30 lg:border-gray-100 grid grid-cols-3 gap-3 md:gap-4 text-white lg:text-[#1a1a1a]/40">
                <div className="flex flex-col items-center lg:flex-row lg:items-center gap-1 md:gap-2 lg:gap-3">
                  <Plane size={20} className="text-[#C41E3A] md:w-6 md:h-6 lg:w-8 lg:h-8" />
                  <span className="text-[6px] sm:text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] lg:drop-shadow-none text-center lg:text-left">PRO Service</span>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-center gap-1 md:gap-2 lg:gap-3">
                  <ClipboardList size={20} className="text-[#C41E3A] md:w-6 md:h-6 lg:w-8 lg:h-8" />
                  <span className="text-[6px] sm:text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] lg:drop-shadow-none text-center lg:text-left">Fast Processing</span>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-center gap-1 md:gap-2 lg:gap-3">
                  <Briefcase size={20} className="text-[#C41E3A] md:w-6 md:h-6 lg:w-8 lg:h-8" />
                  <span className="text-[6px] sm:text-[7px] md:text-[10px] font-black uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] lg:drop-shadow-none text-center lg:text-left">Expert Advisory</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
