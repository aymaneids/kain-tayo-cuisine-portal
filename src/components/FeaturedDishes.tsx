
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const FeaturedDishes: React.FC = () => {
  const featuredDishes: Dish[] = [
    {
      id: 1,
      name: "Chicken Adobo",
      description: "Tender chicken marinated and simmered in soy sauce, vinegar, garlic, and spices.",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1626253925202-90c33fd9c2a1?q=80&w=2070&auto=format&fit=crop",
      category: "Main Dishes"
    },
    {
      id: 2,
      name: "Pork Sisig",
      description: "Crispy chopped pork with onions, chili peppers, and citrus, served on a sizzling plate.",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1623594444059-fc8a82febd99?q=80&w=2070&auto=format&fit=crop",
      category: "Appetizers"
    },
    {
      id: 3,
      name: "Pancit Bihon",
      description: "Stir-fried rice noodles with meat and vegetables, seasoned with soy sauce and citrus.",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1625398407796-82650a8c9dd1?q=80&w=2070&auto=format&fit=crop",
      category: "Noodles & Rice"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-kainTayo-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-kainTayo-brown">
            Featured Dishes
          </h2>
          <p className="section-subtitle text-kainTayo-darkBrown/80">
            Our most popular and loved dishes that have been satisfying customers for years
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredDishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <div className="h-56 image-scale-hover">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-kainTayo-gold/20 text-kainTayo-brown text-xs font-medium mb-3">
                  {dish.category}
                </div>
                <h3 className="text-xl font-display font-semibold text-kainTayo-darkBrown mb-2">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-kainTayo-brown font-semibold">
                    {dish.price}
                  </span>
                  <Link 
                    to="/menu" 
                    className="text-kainTayo-gold hover:text-kainTayo-brown transition-colors flex items-center text-sm font-medium"
                  >
                    View Details
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link 
            to="/menu" 
            className="btn-primary bg-kainTayo-brown text-white hover:bg-kainTayo-brown/90"
          >
            View Full Menu
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
