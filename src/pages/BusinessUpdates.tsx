import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllBusinessUpdates } from '../data/business-updates';
import { motion } from 'motion/react';
import { Calendar, Tag, Share2, ArrowRight, ArrowLeft, Search, Filter } from 'lucide-react';

export default function BusinessUpdates() {
  const navigate = useNavigate();
  const allUpdates = getAllBusinessUpdates();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(allUpdates.map(update => update.category).filter(Boolean))] as string[];

  const filteredUpdates = allUpdates.filter(update => {
    const matchesSearch = searchTerm === '' || 
      update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      update.content?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || update.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleBack = () => {
    navigate('/');
  };

  const handleUpdateClick = (id: string) => {
    navigate(`/business-update/${id}`);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-[#C41E3A] transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span className="font-bold">Back to Home</span>
            </button>
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
                Business <span className="text-[#C41E3A]">Updates</span>
              </h1>
              <div className="w-20 h-1.5 bg-[#C41E3A] mx-auto rounded-full" />
              <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium">
                Browse all our business updates, social media posts, and important announcements. Stay informed about the latest developments in the UAE business landscape.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search business updates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/20"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#C41E3A] focus:ring-2 focus:ring-[#C41E3A]/20 appearance-none"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-[#C41E3A]">{filteredUpdates.length}</span> of <span className="font-bold">{allUpdates.length}</span> business updates
                </p>
              </div>
            </div>
          </div>

          {filteredUpdates.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No updates found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUpdates.map((update, index) => (
                <motion.div
                  key={update.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
          )}

          {/* Info Box */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#C41E3A]/5 to-transparent rounded-3xl border border-[#C41E3A]/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-black text-gray-900 mb-2">Want More Updates?</h4>
                <p className="text-gray-600">
                  Follow us on social media for real-time business updates, news, and insights.
                </p>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#0077B5] text-white rounded-full font-bold hover:bg-[#005582] transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#1877F2] text-white rounded-full font-bold hover:bg-[#0D5DBD] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}