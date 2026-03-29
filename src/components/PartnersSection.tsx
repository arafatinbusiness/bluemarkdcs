import { motion } from 'motion/react';

const PARTNERS = [
  { name: 'Dubai Economy', logo: '/assets/dubai_economy.png' },
  { name: 'Amer Center', logo: '/assets/amer_center.png' },
  { name: 'Tasheel Centre', logo: '/assets/Tasheel_Centre.png' },
  { name: 'ICP Smart Service (Federal Authority)', logo: '/assets/federal.png' },
  { name: 'Dubai Health Authority', logo: '/assets/Dubai Health Authority.png' },
  { name: 'Dubai Court', logo: '/assets/Dubai _Court.jpg' },
  { name: 'Dubai Police', logo: '/assets/Dubai-police-logo.jpeg' },
  { name: 'RTA (Road and Transport Authority)', logo: '/assets/rtalogo.jpeg' },
];

export default function PartnersSection() {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase">
            Our <span className="text-[#C41E3A]">Partners</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#C41E3A] mx-auto rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto font-medium">
            Trusted by leading government authorities across the UAE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="h-24 flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-600 font-medium mt-4">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
