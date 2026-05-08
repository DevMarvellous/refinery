import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue via-sky-blue to-medium-blue"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-sky-blue/40 to-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-gold/20 to-sky-blue/40 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 border-t border-gold/20 py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">The Refinery</h3>
              <p className="text-gold font-semibold">Business Consult</p>
            </div>
            
            <div className="border-t border-gold/20 pt-6 mt-6">
              <p className="text-gray-300 text-sm mb-2">
                © {currentYear} The Refinery Business Consult. All rights reserved.
              </p>
              <p className="text-gold text-sm font-semibold">
                A Subsidiary of The Refinery
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
