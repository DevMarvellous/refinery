import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ArrowRight } from 'lucide-react';

const SpecialOfferButton = ({ navigateToPage }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-royal-blue/5 to-medium-blue/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Gift className="text-gold w-4 h-4" />
            <span className="text-gold font-bold text-xs uppercase tracking-widest">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            🎉 Special Birthday <span className="text-gold italic font-serif">Entrepreneurship Offer</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access transformational entrepreneurial materials worth ₦300,000 at a special birthday price. Limited spots available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gold">₦300,000</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">Total Value</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-navy">Pay What You Can</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-tighter">Special Price</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateToPage('special')}
            className="bg-gradient-to-r from-royal-blue to-medium-blue text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>View Special Offer</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
          
          <p className="text-slate-500 text-sm mt-4">
            Available until May 16th • First 50 people only
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOfferButton;
