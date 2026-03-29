import { motion } from 'motion/react';

export default function TrustSection() {
  return (
    <section className="py-20 px-4 bg-[#C41E3A] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight uppercase">
            Strategic <span className="text-red-200">Compliance</span> Partner in <span className="text-red-200">Dubai</span>
          </h2>
          <p className="text-red-50 text-lg font-medium max-w-2xl mx-auto">
            Your trusted partner for seamless UAE business compliance and documentation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group max-w-4xl mx-auto"
        >
          <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative mb-8">
            {/* Video from public/assets */}
            <video 
              src="/assets/bluemark_compressed).mp4" 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.open('https://maps.app.goo.gl/ENVCfMhY2uzK4dH89', '_blank')}
              className="inline-flex items-center gap-3 bg-white text-[#C41E3A] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-50 transition-all shadow-xl shadow-red-900/20 active:scale-95"
            >
              <span className="text-xl">📍</span>
              See Our Location
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
