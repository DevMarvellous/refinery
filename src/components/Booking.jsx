import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';

const Booking = () => {
  const handleBookingClick = () => {
    // Placeholder URL for Google Form
    window.open('https://forms.google.com/example-form', '_blank');
  };

  return (
    <section id="booking" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Gradients - Optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-blue/35 to-medium-blue/40"></div>
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-sky-blue/50 to-medium-blue/35 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-l from-royal-blue/40 to-sky-blue/50 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Main CTA Content */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-royal-blue mb-4 sm:mb-6">
              Ready to <span className="text-gold">Refine Your Business?</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
              Take the first step towards transformative growth. Schedule your consultation during our exclusive window and let us help you unlock your business's full potential.
            </p>

            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-6 sm:mb-8"
            >
              {/* Card Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-blue/50 to-medium-blue/30 rounded-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-md border-2 border-royal-blue rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
                
                {/* Time Display Header */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <div className="bg-royal-blue/10 px-4 py-2 rounded-full flex items-center space-x-2 border border-royal-blue/20">
                    <Clock className="w-4 h-4 text-royal-blue" />
                    <span className="text-royal-blue font-bold">6:00 PM - 7:00 PM Daily</span>
                  </div>
                  <div className="bg-gold/10 px-4 py-2 rounded-full flex items-center space-x-2 border border-gold/20">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span className="text-gold font-bold">Focused 1:1 Attention</span>
                  </div>
                </div>

                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/40 to-sky-blue/25 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-lg"></div>
                    <div className="relative bg-gradient-to-br from-royal-blue/20 to-medium-blue/20 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border border-sky-blue/40">
                      <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-royal-blue" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/50 to-sky-blue/35 w-2 h-2 sm:w-3 sm:h-3 rounded-full blur-sm"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-royal-blue rounded-full relative"></div>
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">Strategic Business Analysis</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/50 to-sky-blue/35 w-2 h-2 sm:w-3 sm:h-3 rounded-full blur-sm"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-royal-blue rounded-full relative"></div>
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">Growth Opportunity Identification</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/50 to-sky-blue/35 w-2 h-2 sm:w-3 sm:h-3 rounded-full blur-sm"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-royal-blue rounded-full relative"></div>
                    </div>
                    <span className="text-gray-600 text-sm sm:text-base">Actionable Implementation Plan</span>
                  </div>
                </div>

                {/* Gold CTA Button */}
                <motion.button
                  onClick={handleBookingClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gold to-yellow-400 text-royal-blue px-8 py-4 sm:px-12 sm:py-6 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-400 hover:to-gold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center space-x-2 sm:space-x-3 mx-auto"
                >
                  <FileText className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span>Book Your Consultation</span>
                  <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </motion.button>

                <p className="text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8 italic">
                  Note: Exclusive 60-minute sessions dedicated to your business success.
                </p>
              </div>
            </motion.div>

            {/* Urgency/Exclusivity Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-sky-blue/5 rounded-xl"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-royal-blue/20">
                <p className="text-royal-blue font-semibold text-base sm:text-lg mb-2">
                  Limited Daily Availability
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  To ensure the highest quality of strategic guidance, we limit our consultations to our exclusive daily window. Secure your spot now to begin your refinement process.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
