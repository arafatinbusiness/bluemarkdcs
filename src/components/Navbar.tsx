import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MoreVertical, X, Home, Phone, MapPin, MessageCircle, Briefcase, BookOpen, Info, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Call Us', path: '/contact', icon: <Phone size={20} /> },
    { name: 'Location', path: '/location', icon: <MapPin size={20} /> },
    { name: 'WhatsApp', path: 'https://wa.me/971000000000', icon: <MessageCircle size={20} />, external: true },
    { name: 'Our Services', path: '/#services', icon: <Briefcase size={20} /> },
    { name: 'Journals', path: '/journals', icon: <BookOpen size={20} /> },
    { name: 'About Us', path: '/about', icon: <Info size={20} /> },
    { name: 'Admin Login', path: '/admin-login', icon: <LogIn size={20} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (path: string, external?: boolean) => {
    setIsOpen(false);
    if (external) {
      window.open(path, '_blank');
    } else if (path.startsWith('/#')) {
      const element = document.getElementById(path.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(path);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 shadow-md border-b border-gray-100' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors overflow-hidden ${
              isScrolled ? 'bg-white' : 'bg-white shadow-sm border border-gray-100'
            }`}>
              <img 
                src="/assets/bluemark_logo.png" 
                alt="BlueMark Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tight transition-colors ${isScrolled ? 'text-[#C41E3A]' : 'text-[#C41E3A]'}`}>
                BlueMark
              </span>
              <span className={`text-xs font-medium transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-500'}`}>
                Documents Clearing Services LLC
              </span>
            </div>
          </Link>

          <button 
            onClick={toggleMenu}
            className={`p-3 rounded-2xl transition-all ${
              isScrolled 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100 shadow-sm'
            }`}
            aria-label="Menu"
          >
            <MoreVertical size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[101] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-xl text-gray-900">Menu</span>
                <button 
                  onClick={toggleMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-700" />
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto flex-grow pb-20">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path, item.external)}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-red-50 hover:text-[#C41E3A] transition-all text-gray-700 font-bold group"
                  >
                    <span className="text-gray-400 group-hover:text-[#C41E3A] transition-colors">
                      {item.icon}
                    </span>
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="p-5 bg-[#C41E3A] rounded-3xl text-white shadow-lg shadow-red-200">
                  <p className="text-xs font-bold opacity-80 mb-1 uppercase tracking-widest">Need help?</p>
                  <p className="font-black text-lg">+971 566 229 773</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
