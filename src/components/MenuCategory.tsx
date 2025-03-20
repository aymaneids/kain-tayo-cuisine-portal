
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import MenuItem from './MenuItem';

interface Item {
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

interface MenuCategoryProps {
  title: string;
  description?: string;
  items: Item[];
  defaultOpen?: boolean;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
  title,
  description,
  items,
  defaultOpen = true
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-kainTayo-darkBrown">
            {title}
          </h2>
          <span className="ml-2 p-1 rounded-full bg-kainTayo-cream hover:bg-kainTayo-gold/20 transition-colors">
            {isOpen ? (
              <ChevronUp size={20} className="text-kainTayo-brown" />
            ) : (
              <ChevronDown size={20} className="text-kainTayo-brown" />
            )}
          </span>
        </button>
        {description && (
          <p className="mt-2 text-gray-600 max-w-3xl">
            {description}
          </p>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuCategory;
