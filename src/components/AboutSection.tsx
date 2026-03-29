import { CheckCircle2, Award, Target, Heart, User, Zap, Shield, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase">
            About <span className="text-[#C41E3A]">BlueMark</span> Documents Clearing Services
          </h2>
          <div className="w-20 h-1.5 bg-[#C41E3A] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium text-lg">
            Your Trusted Partner for UAE Government Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story & Leadership</h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                BlueMark Documents Clearing Services LLC was founded by <strong className="text-[#C41E3A]">Abdul Hakim</strong>, a visionary entrepreneur with many years of experience in UAE government services and document processing. Under his leadership, BlueMark has grown to become one of Dubai's most trusted document clearing agencies.
              </p>
              
              <p className="text-lg">
                Abdul Hakim's deep understanding of UAE government procedures like UAE Business set-up, Visa process, Ministry of labour and his commitment to customer satisfaction have been the driving forces behind our success. His hands-on approach ensures that every client receives personalized attention and expert guidance throughout their document processing journey.
              </p>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-br from-red-50 to-white rounded-3xl border border-red-100 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-[#C41E3A] text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <User size={36} />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Abdul Hakim</h4>
                  <p className="text-[#C41E3A] font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-600 italic">
                    "Our mission is to simplify the complex world of UAE government paperwork, making it accessible and stress-free for businesses and individuals alike."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Choose BlueMark</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 text-[#C41E3A] rounded-xl flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900">Expert Team</h4>
                </div>
                <p className="text-gray-600 text-sm">Professional staff with extensive experience in UAE government procedures</p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 text-[#C41E3A] rounded-xl flex items-center justify-center">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900">Fast Processing</h4>
                </div>
                <p className="text-gray-600 text-sm">Efficient document processing with minimal turnaround times</p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 text-[#C41E3A] rounded-xl flex items-center justify-center">
                    <Shield size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900">Reliable Service</h4>
                </div>
                <p className="text-gray-600 text-sm">Trusted by hundreds of satisfied clients across the UAE</p>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 text-[#C41E3A] rounded-xl flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900">24/7 Support</h4>
                </div>
                <p className="text-gray-600 text-sm">Round-the-clock assistance for all your documentation needs</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-red-100">
                <Target size={28} className="text-[#C41E3A] mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">To simplify the complex world of UAE government paperwork, making it accessible and stress-free for businesses and individuals alike.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-red-100">
                <Heart size={28} className="text-[#C41E3A] mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">To be the most trusted and preferred document clearing service provider in the UAE, recognized for excellence and reliability.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
