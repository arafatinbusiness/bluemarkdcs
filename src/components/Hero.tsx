import { useNavigate } from 'react-router-dom';
import { Send, Briefcase, BookOpen, MapPin, Plane, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onShowDetailedServices?: () => void;
}

export default function Hero({ onShowDetailedServices }: HeroProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleServicesClick = () => {
    if (onShowDetailedServices) {
      onShowDetailedServices();
    } else {
      const element = document.getElementById('services');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:h-[850px] flex items-start lg:items-center bg-white overflow-hidden pb-12 lg:pb-0 pt-[40vh] lg:pt-0">
      {/* Mobile Background (Full Bleed) */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden bg-black">
        <img 
          src="/assets/hero.jpeg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-140 opacity-60"
        />
        <img 
          src="/assets/hero.jpeg" 
          alt="BlueMark Documents Clearing Services Mobile Background" 
          className="relative w-full h-full object-contain opacity-90 scale-115"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
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
              <h1 className="text-[40px] md:text-[72px] lg:text-[80px] font-[900] text-white lg:text-[#1a1a1a] leading-[1.1] mb-8 tracking-tighter uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] lg:drop-shadow-none">
                <span className="text-[#C41E3A]">BlueMark</span> Documents Clearing Services LLC
              </h1>
              
              <p className="text-[16px] md:text-[22px] text-white lg:text-[#666666] leading-[1.6] mb-12 max-w-2xl mx-auto lg:mx-0 font-semibold lg:font-medium drop-shadow-lg lg:drop-shadow-none">
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
                  onClick={handleServicesClick}
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
              <div className="mt-12 pt-8 border-t border-white/20 lg:border-gray-100 grid grid-cols-3 gap-4 text-white lg:text-[#1a1a1a]/40">
                <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-3">
                  <Plane size={24} className="text-[#C41E3A] lg:w-8 lg:h-8" />
                  <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] drop-shadow-md lg:drop-shadow-none text-center lg:text-left">Global Reach</span>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-3">
                  <ClipboardList size={24} className="text-[#C41E3A] lg:w-8 lg:h-8" />
                  <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] drop-shadow-md lg:drop-shadow-none text-center lg:text-left">Fast Processing</span>
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-3">
                  <Briefcase size={24} className="text-[#C41E3A] lg:w-8 lg:h-8" />
                  <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] drop-shadow-md lg:drop-shadow-none text-center lg:text-left">Expert Advisory</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
