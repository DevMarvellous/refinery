import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-16 lg:pt-20 bg-slate-50">
      {/* Subtle Pattern/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-navy"
            >
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-gold/10 text-gold-dark rounded-full border border-gold/20">
                Premium Business Consulting
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Refining Your <span className="text-navy-light">Strategy.</span>
                <br />
                <span className="text-gold italic font-serif">Maximizing Growth.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                The Refinery provides elite-level strategic oversight for ambitious entrepreneurs. We transform your vision into measurable success through proven methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 text-base"
                >
                  Book a Consultation
                </button>
              </div>
            </motion.div>

            {/* Right Content - CEO Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Minimalist Frame */}
                <div className="absolute -inset-4 border border-gold/30 rounded-2xl transform rotate-3"></div>
                <div className="absolute -inset-4 border border-navy/10 rounded-2xl transform -rotate-2"></div>
                
                <div className="relative bg-white p-2 rounded-xl shadow-2xl">
                  <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-[400px] md:h-[500px] rounded-lg overflow-hidden flex items-center justify-center bg-slate-100">
                    {!imageError ? (
                      <img 
                        src="/images/lead-consultant.jpg" 
                        alt="Lead Consultant" 
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-navy/20">
                        <User className="w-24 h-24 mb-4" />
                        <span className="font-bold text-lg">Lead Consultant</span>
                      </div>
                    )}
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 hidden sm:block">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Success Rate</p>
                        <p className="text-lg font-bold text-navy">96% Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
