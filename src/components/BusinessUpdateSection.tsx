import { useNavigate } from 'react-router-dom';
import { getLatestBusinessUpdates } from '../data/business-updates';
import { motion } from 'motion/react';
import { Calendar, Tag, Share2, ArrowRight } from 'lucide-react';

export default function BusinessUpdateSection() {
  const navigate = useNavigate();
  const updates = getLatestBusinessUpdates(3);

  const handleUpdateClick = (id: string) => {
    navigate(`/business-update/${id}`);
  };

  const handleViewAll = () => {
    navigate('/business-updates');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
            Business <span className="text-[#C41E3A]">Updates</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#C41E3A] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium">
            Latest news, social media updates, and important announcements from BlueMark DCS and the UAE business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleUpdateClick(update.id)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-900/20 transition-all cursor-pointer border border-gray-100 hover:border-[#C41E3A]/30"
            >
              {/* Update Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={update.image} 
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  {update.socialMediaPlatform && (
                    <div className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-bold flex items-center gap-1">
                      <Share2 size={12} />
                      {update.socialMediaPlatform}
                    </div>
                  )}
                </div>
              </div>

              {/* Update Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{update.date}</span>
                  </div>
                  {update.category && (
                    <div className="flex items-center gap-1 text-[#C41E3A] text-sm font-bold">
                      <Tag size={14} />
                      <span>{update.category}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#C41E3A] transition-colors line-clamp-2">
                  {update.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {update.excerpt}
                </p>

                <div className="flex items-center text-[#C41E3A] font-bold group-hover:gap-3 transition-all">
                  Read Update
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C41E3A] text-white rounded-full font-bold text-lg hover:bg-[#1a1a1a] transition-colors shadow-lg shadow-red-200"
          >
            View All Business Updates
            <ArrowRight size={20} />
          </button>
          <p className="mt-4 text-gray-500 text-sm">
            Stay updated with hundreds of business insights and social media posts
          </p>
        </div>
      </div>
    </section>
  );
}