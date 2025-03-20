
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, MenuSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen clip-hero bg-gradient-to-b from-kainTayo-darkBrown via-kainTayo-brown to-kainTayo-darkBrown overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1619019187397-24ac086f21c6?q=80&w=2071&auto=format&fit=crop')` 
        }}
      />
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute top-1/3 right-[5%] w-32 h-32 rounded-full bg-kainTayo-gold/20 blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-1/4 left-[10%] w-40 h-40 rounded-full bg-kainTayo-red/10 blur-3xl"
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center min-h-screen pt-24 pb-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-kainTayo-gold/90 text-kainTayo-brown px-4 py-2 rounded-full inline-flex items-center space-x-2 mb-6"
          >
            <span className="text-sm font-medium">Authentic Filipino Cuisine</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
          >
            Kain Tayo!
            <span className="block text-kainTayo-gold">Let's Eat Together</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            Experience the comfort and authentic flavors of home-style Filipino cooking.
            From hearty classics to modern favorites, our dishes celebrate the rich 
            culinary heritage of the Philippines.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/menu" className="btn-primary bg-kainTayo-gold text-kainTayo-darkBrown hover:bg-kainTayo-gold/90 w-full sm:w-auto">
              <MenuSquare size={18} className="mr-2" />
              View Our Menu
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <MapPin size={18} className="mr-2" />
              Find Us
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-white/70 text-sm mb-2">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight size={24} className="text-white/70 transform rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
