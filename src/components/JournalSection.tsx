import { Link } from 'react-router-dom';
import { JOURNALS } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function JournalSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              FEATURED <span className="text-blue-600">JOURNALS</span>
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto md:mx-0 rounded-full" />
          </div>
          <Link 
            to="/journals" 
            className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all bg-blue-50 px-6 py-3 rounded-2xl"
          >
            View All Posts
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {JOURNALS.slice(0, 4).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-gray-700 shadow-sm">
                  <Calendar size={14} className="text-blue-600" />
                  {post.date}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/journals/${post.id}`}
                    className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
