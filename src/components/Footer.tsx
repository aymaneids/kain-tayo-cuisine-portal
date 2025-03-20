
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kainTayo-darkBrown text-white">
      <div className="container mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Kain Tayo</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Authentic Filipino cuisine bringing the comfort and flavors of 
              home-style Filipino cooking to your table.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://instagram.com/kaintayo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="inline-block text-sm text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-block text-sm text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="inline-block text-sm text-gray-300 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="inline-block text-sm text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-block text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>123 Filipino Street, Anytown, AT 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={18} className="flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@kaintayo.com" className="hover:text-white transition-colors">
                  info@kaintayo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-sm text-gray-300">
                <span>Monday - Thursday</span>
                <span>11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between text-sm text-gray-300">
                <span>Friday - Saturday</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-sm text-gray-300">
                <span>Sunday</span>
                <span>12:00 PM - 8:00 PM</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link to="/contact" className="inline-flex items-center space-x-2 text-sm font-medium text-kainTayo-gold hover:text-white transition-colors">
                <Clock size={16} />
                <span>View Full Hours</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Kain Tayo Filipino Cuisine. All rights reserved.
          </p>
          <div className="text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="px-2">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
