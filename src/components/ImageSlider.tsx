import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const IMAGES = [
  'https://picsum.photos/seed/dubai1/1920/1080',
  'https://picsum.photos/seed/dubai2/1920/1080',
  'https://picsum.photos/seed/dubai3/1920/1080',
  'https://picsum.photos/seed/dubai4/1920/1080',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            OUR <span className="text-blue-600">GALLERY</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={IMAGES[currentIndex]}
              alt={`Dubai Slide ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
