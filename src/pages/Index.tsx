
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, UtensilsCrossed, Users, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import HeroSection from '../components/HeroSection';
import FeaturedDishes from '../components/FeaturedDishes';
import TestimonialSection from '../components/TestimonialSection';

const Index: React.FC = () => {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=2069&auto=format&fit=crop" 
                    alt="Kain Tayo Restaurant Interior" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute w-full h-full top-4 left-4 rounded-2xl border-2 border-kainTayo-gold z-0"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold text-kainTayo-gold">About Kain Tayo</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-kainTayo-darkBrown mt-2 mb-6">
                  Experience Authentic Filipino Flavors
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Kain Tayo" means "Let's Eat" in Filipino, and it's more than just our name—it's our invitation to you. 
                  At Kain Tayo, we're passionate about sharing the rich culinary heritage of the Philippines through 
                  authentic, home-style cooking that brings comfort with every bite.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our recipes have been passed down through generations, bringing you the true taste of Filipino 
                  hospitality. From savory adobo to sweet halo-halo, every dish is crafted with care using 
                  traditional techniques and fresh ingredients.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <UtensilsCrossed className="text-kainTayo-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-kainTayo-brown">Authentic Recipes</h3>
                      <p className="text-sm text-gray-600 mt-1">Traditional dishes made with love</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-kainTayo-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-kainTayo-brown">Central Location</h3>
                      <p className="text-sm text-gray-600 mt-1">Easy to find and accessible</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="text-kainTayo-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-kainTayo-brown">Warm Service</h3>
                      <p className="text-sm text-gray-600 mt-1">Filipino hospitality at its best</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="text-kainTayo-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-kainTayo-brown">Open Daily</h3>
                      <p className="text-sm text-gray-600 mt-1">Serving lunch and dinner</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/about" className="btn-primary bg-kainTayo-brown text-white hover:bg-kainTayo-brown/90">
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Featured Dishes */}
        <FeaturedDishes />
        
        {/* Testimonials */}
        <TestimonialSection />
        
        {/* Call to Action */}
        <section className="py-20 bg-kainTayo-cream relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-5"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1617726663169-791498ef987f?q=80&w=2070&auto=format&fit=crop')` 
            }}
          />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kainTayo-darkBrown mb-6">
                Ready to Experience Filipino Cuisine?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Join us at Kain Tayo for a memorable dining experience filled with authentic flavors and warm hospitality.
                Whether it's a family dinner, a catch-up with friends, or a special occasion, we're ready to serve you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/menu" className="btn-primary bg-kainTayo-gold text-kainTayo-darkBrown hover:bg-kainTayo-gold/90">
                  View Our Menu
                </Link>
                <Link to="/contact" className="btn-primary bg-kainTayo-brown text-white hover:bg-kainTayo-brown/90">
                  Make a Reservation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
