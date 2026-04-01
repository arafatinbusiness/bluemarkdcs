import { useParams, useNavigate } from 'react-router-dom';
import { getBusinessUpdateById } from '../data/business-updates';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Tag, Share2, ArrowLeft, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function BusinessUpdateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const update = getBusinessUpdateById(id || '');

  if (!update) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Update Not Found</h1>
          <button 
            onClick={() => navigate('/business-updates')}
            className="text-blue-600 font-bold hover:underline"
          >
            Browse All Updates
          </button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate('/business-updates');
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = update.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#C41E3A] transition-colors mb-10"
          >
            <ArrowLeft size={20} />
            <span className="font-bold">Back to Updates</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-blue-100 border border-gray-100"
          >
            {/* Update Header */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={18} />
                  <span className="font-medium">{update.date}</span>
                </div>
                
                {update.category && (
                  <div className="flex items-center gap-2 text-[#C41E3A] font-bold">
                    <Tag size={18} />
                    <span>{update.category}</span>
                  </div>
                )}
                
                {update.socialMediaPlatform && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Share2 size={18} />
                    <span className="font-medium">Posted on {update.socialMediaPlatform}</span>
                  </div>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                {update.title}
              </h1>
              
              <div className="w-20 h-1.5 bg-[#C41E3A] mb-8 rounded-full" />
              
              <p className="text-xl text-gray-600 font-medium leading-relaxed">
                {update.excerpt}
              </p>
            </div>

            {/* Update Image */}
            <div className="mb-12 rounded-3xl overflow-hidden">
              <img 
                src={update.image} 
                alt={update.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Update Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-600 font-medium leading-relaxed mb-12"
              dangerouslySetInnerHTML={{ __html: update.content || '' }}
            />

            {/* Share Section */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-xl font-black text-gray-900 mb-3">Share This Update</h4>
                  <p className="text-gray-600">
                    Help others stay informed by sharing this business update.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-4 bg-[#1877F2] text-white rounded-2xl hover:bg-[#0D5DBD] transition-colors"
                  >
                    <Facebook size={24} />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors"
                  >
                    <Twitter size={24} />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-4 bg-[#0077B5] text-white rounded-2xl hover:bg-[#005582] transition-colors"
                  >
                    <Linkedin size={24} />
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="p-4 bg-gray-100 text-gray-700 rounded-2xl hover:bg-gray-200 transition-colors"
                  >
                    <Share2 size={24} />
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#C41E3A]/5 to-transparent rounded-3xl border border-[#C41E3A]/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl font-black text-gray-900 mb-3">Need Business Support?</h4>
                  <p className="text-gray-600 max-w-md">
                    Our team is ready to help you navigate business challenges and opportunities in the UAE.
                  </p>
                </div>
                <button
                  onClick={() => window.open('https://wa.me/971566229773', '_blank')}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-full font-bold text-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>

          {/* Related Updates */}
          <div className="mt-20">
            <h3 className="text-2xl font-black text-gray-900 mb-8">More Business Updates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Stay Updated</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Follow us on social media for real-time business news and insights.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-gray-500 hover:text-[#C41E3A] transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#C41E3A] transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#C41E3A] transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-[#C41E3A]/5 rounded-3xl border border-[#C41E3A]/20">
                <h4 className="font-bold text-gray-900 mb-2">Subscribe to Updates</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest business updates delivered directly to your inbox.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 bg-[#C41E3A] text-white rounded-full font-bold text-sm hover:bg-[#1a1a1a] transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}