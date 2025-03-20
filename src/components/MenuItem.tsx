
import React from 'react';
import { motion } from 'framer-motion';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  image,
  featured = false,
  spicy = false,
  vegetarian = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row gap-4 p-4 md:p-6 rounded-xl ${featured ? 'bg-kainTayo-gold/10 border border-kainTayo-gold/20' : 'bg-white'} hover:shadow-md transition-all`}
    >
      {image && (
        <div className="flex-shrink-0 w-full md:w-28 h-28 mb-4 md:mb-0 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      )}
      
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-display font-semibold text-kainTayo-darkBrown group-hover:text-kainTayo-gold transition-colors">
              {name}
              {featured && (
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-kainTayo-gold text-white">
                  Popular
                </span>
              )}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              {spicy && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-kainTayo-red/10 text-kainTayo-red">
                  Spicy
                </span>
              )}
              {vegetarian && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-kainTayo-green/10 text-kainTayo-green">
                  Vegetarian
                </span>
              )}
            </div>
          </div>
          <span className="font-semibold text-kainTayo-brown whitespace-nowrap ml-2">
            {price}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
