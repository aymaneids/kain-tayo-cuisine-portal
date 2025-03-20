
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Card, CardContent } from '@/components/ui/card';

const Terms: React.FC = () => {
  return (
    <PageTransition>
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-kainTayo-darkBrown mb-8">
              Terms of Service
            </h1>
            
            <Card className="mb-8 shadow-md">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  Welcome to Kain Tayo Filipino Cuisine. These Terms of Service govern your use of our website and the services we provide. By accessing our website or using our services, you agree to these terms.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Use of Our Website
                </h2>
                <p className="text-gray-600 mb-2">
                  You may use our website for lawful purposes only. You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                  <li>Use our website in any way that breaches any applicable local, national, or international law or regulation</li>
                  <li>Use our website to send unsolicited commercial communications</li>
                  <li>Use our website to impersonate or attempt to impersonate Kain Tayo Filipino Cuisine, our employees, or any other person</li>
                  <li>Attempt to gain unauthorized access to our website, computer systems, or networks</li>
                </ul>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Reservations and Orders
                </h2>
                <p className="text-gray-600 mb-4">
                  When making a reservation or placing an order through our website, you agree to provide accurate and complete information. We reserve the right to refuse service or cancel reservations or orders at our discretion.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  The content on our website, including text, graphics, logos, images, and software, is the property of Kain Tayo Filipino Cuisine and is protected by copyright, trademark, and other intellectual property laws. You may not use our content for commercial purposes without our prior written consent.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  User-Generated Content
                </h2>
                <p className="text-gray-600 mb-4">
                  If you post content on our website or social media platforms, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display such content in connection with our services.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  Kain Tayo Filipino Cuisine shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Changes to These Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  We may revise these Terms of Service at any time without notice. By continuing to use our website after such changes, you agree to be bound by the revised terms.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Governing Law
                </h2>
                <p className="text-gray-600 mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the state where Kain Tayo Filipino Cuisine is located, without regard to its conflict of law provisions.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-gray-600">
                  <strong>Kain Tayo Filipino Cuisine</strong><br />
                  123 Main Street<br />
                  Anytown, ST 12345<br />
                  Phone: (555) 123-4567<br />
                  Email: info@kaintayo.com
                </p>
              </CardContent>
            </Card>
            
            <p className="text-gray-500 text-sm text-center">
              Last updated: June 15, 2023
            </p>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Terms;
