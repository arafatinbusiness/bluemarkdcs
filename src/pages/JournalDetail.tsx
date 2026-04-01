import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { getBlogPostById } from '../data/blog-posts';

export default function JournalDetail() {
  const { id } = useParams<{ id: string }>();
  
  // Find the blog post by ID
  const post = getBlogPostById(id || '');
  
  // If post not found, show 404
  if (!post) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <section className="pt-32 pb-20 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-black text-gray-900 mb-6">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/journals" 
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all bg-blue-50 px-6 py-3 rounded-2xl"
            >
              <ArrowLeft size={20} />
              Back to Journals
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/journals" 
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all mb-8"
          >
            <ArrowLeft size={20} />
            Back to Journals
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm font-bold text-gray-500 mb-6">
              <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-2xl">
                <Calendar size={16} className="text-blue-600" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-2xl">
                <BookOpen size={16} className="text-gray-600" />
                <span>5 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 font-medium leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="blog-content">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                {/* Default template for posts without content */}
                <section className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-12 mb-6 leading-snug">Introduction</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Setting up a business in Dubai can be a transformative opportunity for entrepreneurs and investors worldwide. 
                    With its strategic location, business-friendly policies, and world-class infrastructure, Dubai offers unparalleled 
                    advantages for both startups and established enterprises.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    This comprehensive guide will walk you through the essential steps, requirements, and considerations for 
                    establishing your business presence in Dubai in 2024.
                  </p>
                </section>

                {/* Default CTA Section */}
                <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-3xl mt-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-black mb-6">Need Professional Assistance?</h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                      Our team of experts can guide you through every step of the business setup process, ensuring compliance 
                      with all regulations and maximizing your chances of success.
                    </p>
                    <div className="mb-6 text-gray-300">
                      <p className="font-bold text-lg">📍 SF 18, Level 2, Dubai Shopping Centre, Besides City Centre Deira, Dubai, UAE</p>
                      <p className="mt-2 text-lg">📞 +971 56 622 9773 | ✉️ bluemarkdcs@gmail.com</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center justify-center bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all transform hover:scale-105"
                      >
                        Contact Our Experts
                      </Link>
                      <Link 
                        to="/detailed-services" 
                        className="inline-flex items-center justify-center bg-white text-gray-900 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all transform hover:scale-105"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </section>
              </>
            )}
          </article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-bold">Share this article:</span>
              <div className="flex gap-4">
                <button className="p-3 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors">
                  <Share2 size={20} className="text-gray-600" />
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