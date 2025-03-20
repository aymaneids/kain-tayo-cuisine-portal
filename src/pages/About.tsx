
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, UtensilsCrossed, Award, MapPin, ChefHat, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: <UtensilsCrossed size={24} className="text-kainTayo-gold" />,
      title: "Authentic Flavors",
      description: "We stay true to traditional Filipino recipes, using authentic ingredients and cooking methods to deliver a genuine taste experience."
    },
    {
      icon: <Users size={24} className="text-kainTayo-gold" />,
      title: "Filipino Hospitality",
      description: "We believe in treating every guest like family, offering warm, attentive service that makes everyone feel welcome and valued."
    },
    {
      icon: <Shield size={24} className="text-kainTayo-gold" />,
      title: "Quality Ingredients",
      description: "We carefully source fresh, high-quality ingredients to ensure every dish meets our standards of excellence."
    },
    {
      icon: <Clock size={24} className="text-kainTayo-gold" />,
      title: "Cultural Heritage",
      description: "We take pride in preserving and sharing Filipino culinary traditions, educating our customers about the rich food heritage of the Philippines."
    }
  ];
  
  const team = [
    {
      name: "Maria Garcia",
      role: "Head Chef & Owner",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2069&auto=format&fit=crop",
      bio: "With over 20 years of culinary experience, Maria has dedicated her career to perfecting traditional Filipino recipes while adding her own creative touches."
    },
    {
      name: "David Reyes",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2069&auto=format&fit=crop",
      bio: "David brings his expertise in modern culinary techniques while honoring the authentic flavors and methods that make Filipino cuisine unique."
    },
    {
      name: "Sofia Santos",
      role: "Restaurant Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922&auto=format&fit=crop",
      bio: "Sofia ensures every guest at Kain Tayo has an exceptional dining experience, from the moment they walk in to the moment they leave."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award size={40} className="text-kainTayo-gold" />,
      title: "Award-Winning Cuisine",
      description: "Recognized for excellence in Filipino cuisine, our recipes have earned accolades for their authentic flavors and innovative presentation."
    },
    {
      icon: <MapPin size={40} className="text-kainTayo-gold" />,
      title: "Prime Location",
      description: "Conveniently located in the heart of the city, Kain Tayo is easily accessible and offers a cozy atmosphere for any dining occasion."
    },
    {
      icon: <ChefHat size={40} className="text-kainTayo-gold" />,
      title: "Expert Chefs",
      description: "Our culinary team consists of skilled chefs who specialize in Filipino cuisine and have years of experience perfecting traditional recipes."
    },
    {
      icon: <Heart size={40} className="text-kainTayo-gold" />,
      title: "Community Focused",
      description: "We're dedicated to supporting our community through sourcing local ingredients and participating in cultural events that celebrate Filipino heritage."
    }
  ];
  
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-kainTayo-darkBrown text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1612447030982-7a79965a1eae?q=80&w=2070&auto=format&fit=crop')` 
            }}
          />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Our Story
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                Welcome to Kain Tayo Filipino Cuisine, where every dish tells a story of tradition, culture, and home.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-kainTayo-darkBrown mb-6">
                  From Family Kitchen to Your Table
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kain Tayo began in 2010 as a small family-owned restaurant with a big mission: to introduce the 
                  rich flavors of Filipino cuisine to our community. What started as a passion project quickly grew 
                  into a beloved local establishment as word spread about our authentic dishes and warm hospitality.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our recipes have been handed down through generations, preserving the traditional cooking methods 
                  that give Filipino food its unique character. From the savory adobo to the sweet halo-halo, 
                  every dish on our menu represents a piece of Filipino culinary heritage.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The name "Kain Tayo" translates to "Let's Eat" in Filipino—a phrase that embodies the 
                  communal and welcoming nature of Filipino dining culture. In the Philippines, food is meant 
                  to be shared, and meals are a time for connection and conversation. We've brought this 
                  spirit to our restaurant, creating a space where friends and families can gather around 
                  good food and create lasting memories.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="rounded-lg overflow-hidden shadow-md image-scale-hover">
                  <img 
                    src="https://images.unsplash.com/photo-1617726663169-791498ef987f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Filipino dish" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md image-scale-hover mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1626253925202-90c33fd9c2a1?q=80&w=2070&auto=format&fit=crop" 
                    alt="Filipino dish" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md image-scale-hover">
                  <img 
                    src="https://images.unsplash.com/photo-1631883631351-64f8e7a51aaf?q=80&w=2070&auto=format&fit=crop" 
                    alt="Restaurant interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md image-scale-hover mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop" 
                    alt="Filipino kitchen" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-kainTayo-cream">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kainTayo-darkBrown mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At Kain Tayo, our core values guide everything we do, from how we prepare our food to how we treat our guests.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-kainTayo-gold/10 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-kainTayo-darkBrown mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kainTayo-darkBrown mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Experience the difference that makes Kain Tayo a favorite destination for authentic Filipino cuisine.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 items-start bg-kainTayo-cream p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-kainTayo-darkBrown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/menu">
                <Button variant="default" size="lg" className="bg-kainTayo-gold hover:bg-kainTayo-gold/90 text-white">
                  Explore Our Menu
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Meet the Team */}
        <section className="py-16 bg-kainTayo-cream">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-kainTayo-darkBrown mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The passionate people behind Kain Tayo who bring Filipino cuisine and culture to life every day.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="h-64 image-scale-hover">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-kainTayo-darkBrown mb-1">
                      {member.name}
                    </h3>
                    <p className="text-kainTayo-gold font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
