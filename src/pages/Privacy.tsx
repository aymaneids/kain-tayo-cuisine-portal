
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Card, CardContent } from '@/components/ui/card';

const Privacy: React.FC = () => {
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
              Privacy Policy
            </h1>
            
            <Card className="mb-8 shadow-md">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mb-4">
                  Introduction
                </h2>
                <p className="text-gray-600 mb-4">
                  At Kain Tayo Filipino Cuisine, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or dine at our restaurant.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-4">
                  We may collect personal information such as your name, email address, phone number, and dining preferences when you make reservations, sign up for our newsletter, or contact us through our website.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-2">
                  The information we collect may be used to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                  <li>Process and confirm your reservations</li>
                  <li>Send you our newsletter (if you've subscribed)</li>
                  <li>Respond to your inquiries</li>
                  <li>Improve our website and services</li>
                  <li>Customize your experience on our website</li>
                </ul>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 mb-4">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience. These technologies help us understand how you interact with our site and allow us to improve our services.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Third-Party Services
                </h2>
                <p className="text-gray-600 mb-4">
                  We may use third-party services, such as analytics providers and social media platforms, which may collect information about your visits to our website. These third parties have their own privacy policies regarding the information we are required to provide to them.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Data Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We implement reasonable security measures to protect your personal information from unauthorized access or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Your Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  You have the right to access, correct, or delete your personal information. If you would like to exercise these rights or have any questions about our Privacy Policy, please contact us using the information provided below.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-gray-600 mb-4">
                  We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly.
                </p>
                
                <h2 className="text-2xl font-display font-semibold text-kainTayo-darkBrown mt-8 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our Privacy Policy, please contact us at:
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

export default Privacy;
