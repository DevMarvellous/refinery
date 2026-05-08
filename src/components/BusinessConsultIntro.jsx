import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award, Zap, Shield, Star, ArrowRight } from 'lucide-react';

const BusinessConsultIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6">
            The Refinery <span className="text-gold italic font-serif">Business Consult</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Professional business consultation services designed to transform your challenges into opportunities and drive sustainable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessConsultIntro;
