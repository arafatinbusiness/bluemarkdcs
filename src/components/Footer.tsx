import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <h4 className="text-2xl font-bold text-white mb-2">BlueMark</h4>
              <p className="text-gray-400 font-medium">Documents Clearing Services LLC</p>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              Your trusted partner for all UAE government paperwork and documentation services.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/18LzpGadFY/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C41E3A] transition-all">
                <img src="/assets/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/bluemarkdcs?igsh=NmNiZDl0d21wOTNn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C41E3A] transition-all">
                <img src="/assets/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/bluemarkdcs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C41E3A] transition-all">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@abdulhakimuae?si=mZa17rs6YUIeUB5Y" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C41E3A] transition-all">
                <img src="/assets/youtube.png" alt="YouTube" className="w-6 h-6" />
              </a>
              <a href="#" onClick={() => window.open('https://wa.me/971566229773', '_blank')} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C41E3A] transition-all">
                <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="tel:+971566229773" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#C41E3A] transition-all">
                <Phone size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 font-medium">
              <li><Link to="/" className="hover:text-[#C41E3A] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#C41E3A] transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="hover:text-[#C41E3A] transition-colors">Our Services</Link></li>
              <li><Link to="/journals" className="hover:text-[#C41E3A] transition-colors">Journals</Link></li>
              <li><Link to="/contact" className="hover:text-[#C41E3A] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="flex flex-col gap-6 text-gray-400 font-medium">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#C41E3A] shrink-0 mt-1" />
                <span>SF 18, Level 2, Dubai Shopping Centre, Besides City Centre Metro Exit 4, Deira, Dubai</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-[#C41E3A] shrink-0" />
                <span>+971 566 229 773</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-[#C41E3A] shrink-0" />
                <span>bluemarkdcs@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm font-medium">
          <p>© 2024 BlueMark Documents Clearing Services LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
