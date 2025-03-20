
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1000);
  };
  
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-kainTayo-darkBrown text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop')` 
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
                Contact Us
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                Get in touch with us for reservations, catering, or any questions.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-display font-bold text-kainTayo-darkBrown mb-8">
                  How to Reach Us
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-kainTayo-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-kainTayo-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-kainTayo-brown text-lg mb-1">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        123 Filipino Street<br />
                        Anytown, AT 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-kainTayo-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-kainTayo-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-kainTayo-brown text-lg mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">
                        (123) 456-7890
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-kainTayo-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-kainTayo-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-kainTayo-brown text-lg mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@kaintayo.com" className="hover:text-kainTayo-gold transition-colors">
                          info@kaintayo.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-kainTayo-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={24} className="text-kainTayo-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-kainTayo-brown text-lg mb-1">
                        Opening Hours
                      </h3>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex justify-between">
                          <span>Monday - Thursday</span>
                          <span>11:00 AM - 9:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Friday - Saturday</span>
                          <span>11:00 AM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sunday</span>
                          <span>12:00 PM - 8:00 PM</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-display font-bold text-kainTayo-darkBrown mb-8">
                  Send Us a Message
                </h2>
                
                <form 
                  onSubmit={handleSubmit}
                  className="bg-kainTayo-cream/30 p-6 rounded-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kainTayo-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kainTayo-gold focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kainTayo-gold focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kainTayo-gold focus:border-transparent bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="reservation">Reservation</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kainTayo-gold focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={formStatus === 'success'}
                      className="btn-primary bg-kainTayo-brown text-white hover:bg-kainTayo-brown/90 w-full flex items-center justify-center"
                    >
                      {formStatus === 'success' ? (
                        <>
                          <CheckCircle size={18} className="mr-2" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                    
                    {formStatus === 'error' && (
                      <div className="mt-4 p-3 bg-red-100 text-red-600 rounded-md flex items-center">
                        <AlertCircle size={18} className="mr-2" />
                        There was an error sending your message. Please try again.
                      </div>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="pb-16 pt-8 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-display font-bold text-kainTayo-darkBrown mb-4">
                Find Us
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We're conveniently located in the heart of the city, easily accessible by public transportation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg h-[400px] w-full"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215175847354!2d-73.98651542392696!3d40.757977171237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710072148072!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kain Tayo Restaurant Location"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Contact;
