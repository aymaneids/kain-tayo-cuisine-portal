
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'restaurant' | 'events';
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<'all' | 'food' | 'restaurant' | 'events'>('all');
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1626253925202-90c33fd9c2a1?q=80&w=2070&auto=format&fit=crop",
      alt: "Chicken Adobo",
      category: 'food'
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1617726663169-791498ef987f?q=80&w=2070&auto=format&fit=crop",
      alt: "Filipino Feast",
      category: 'food'
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1625398407796-82650a8c9dd1?q=80&w=2070&auto=format&fit=crop",
      alt: "Pancit",
      category: 'food'
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=2069&auto=format&fit=crop",
      alt: "Restaurant Interior",
      category: 'restaurant'
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1626265774643-f1f64a4604ad?q=80&w=2070&auto=format&fit=crop",
      alt: "Lechon",
      category: 'food'
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1631883631351-64f8e7a51aaf?q=80&w=2070&auto=format&fit=crop",
      alt: "Restaurant Seating",
      category: 'restaurant'
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1618711277188-4143831bb36f?q=80&w=2070&auto=format&fit=crop",
      alt: "Halo-Halo",
      category: 'food'
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1623594444059-fc8a82febd99?q=80&w=2070&auto=format&fit=crop",
      alt: "Sisig",
      category: 'food'
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
      alt: "Private Event",
      category: 'events'
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=2070&auto=format&fit=crop",
      alt: "Filipino Kitchen",
      category: 'restaurant'
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1612447030982-7a79965a1eae?q=80&w=2070&auto=format&fit=crop",
      alt: "Family Celebration",
      category: 'events'
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1515668236457-83c3b8764839?q=80&w=2070&auto=format&fit=crop",
      alt: "Birthday Party",
      category: 'events'
    }
  ];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-kainTayo-darkBrown text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1516211881327-e5120a941edc?q=80&w=2070&auto=format&fit=crop')` 
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
                Gallery
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                Take a visual journey through our food, restaurant, and special events.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'all' 
                    ? 'bg-kainTayo-brown text-white' 
                    : 'bg-kainTayo-cream/50 text-kainTayo-brown hover:bg-kainTayo-cream'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('food')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'food' 
                    ? 'bg-kainTayo-brown text-white' 
                    : 'bg-kainTayo-cream/50 text-kainTayo-brown hover:bg-kainTayo-cream'
                }`}
              >
                Food
              </button>
              <button
                onClick={() => setFilter('restaurant')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'restaurant' 
                    ? 'bg-kainTayo-brown text-white' 
                    : 'bg-kainTayo-cream/50 text-kainTayo-brown hover:bg-kainTayo-cream'
                }`}
              >
                Restaurant
              </button>
              <button
                onClick={() => setFilter('events')}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'events' 
                    ? 'bg-kainTayo-brown text-white' 
                    : 'bg-kainTayo-cream/50 text-kainTayo-brown hover:bg-kainTayo-cream'
                }`}
              >
                Events
              </button>
            </motion.div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer image-scale-hover"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Empty State */}
            {filteredImages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-gray-600">No images found for this category.</p>
              </motion.div>
            )}
          </div>
        </section>
        
        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-4xl max-h-[80vh] overflow-hidden rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
};

export default Gallery;
