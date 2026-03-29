import { Link } from 'react-router-dom';
import { JOURNALS } from '../constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Journals() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">
              OUR <span className="text-blue-600">JOURNALS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Stay updated with the latest news, regulations, and guides about 
              doing business and living in Dubai.
            </p>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-2xl mx-auto mb-16 relative">
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-blue-100/50 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold text-gray-900 pl-16"
            />
            <Search size={24} className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {JOURNALS.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 text-sm font-bold text-gray-700 shadow-sm">
                    <Calendar size={16} className="text-blue-600" />
                    {post.date}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 font-medium">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      to={`/journals/${post.id}`}
                      className="text-blue-600 font-black flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider text-sm"
                    >
                      Read Full Article
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
