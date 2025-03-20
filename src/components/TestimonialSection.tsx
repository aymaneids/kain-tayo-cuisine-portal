
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  image: string;
  date: string;
}

const TestimonialSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Santos",
      rating: 5,
      review: "Kain Tayo brings back memories of my grandmother's cooking. The Kare-Kare and Sinigang are absolutely authentic and delicious. It's like being transported back to the Philippines!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922&auto=format&fit=crop",
      date: "January 15, 2023"
    },
    {
      id: 2,
      name: "James Rodriguez",
      rating: 5,
      review: "I've tried Filipino food at many places, but Kain Tayo stands out for its authenticity and flavor. The sisig is crispy yet tender, and the halo-halo is the perfect end to a meal.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      date: "March 22, 2023"
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 4,
      review: "First time trying Filipino cuisine and I'm now a fan! The staff took time to explain the dishes and recommend options. The chicken adobo was incredible. Will definitely be back!",
      image: "https://images.unsplash.com/photo-1615473967657-9dc21773daa3?q=80&w=1968&auto=format&fit=crop",
      date: "May 10, 2023"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "fill-kainTayo-gold text-kainTayo-gold" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section className="py-20 bg-kainTayo-darkBrown text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-white">
            What Our Customers Say
          </h2>
          <p className="section-subtitle text-gray-300">
            Don't just take our word for it, see what our customers have to say about their dining experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.review}"</p>
              <p className="text-xs text-gray-400">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
