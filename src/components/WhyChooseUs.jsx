import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: 'Bespoke Strategy',
      description: 'We craft tailored solutions that align with your unique business goals and market position, ensuring maximum impact and sustainable growth.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our track record speaks for itself with measurable success stories across diverse industries and business models.',
    },
    {
      icon: Award,
      title: 'Expert Leadership',
      description: 'Led by industry veterans with decades of combined experience in strategic consulting and business transformation.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Gradients - Optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-blue/30 to-light-blue/20"></div>
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-sky-blue/40 to-medium-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-tl from-royal-blue/30 to-sky-blue/40 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-royal-blue mb-4 sm:mb-6">
              Why Choose <span className="text-gold">The Refinery</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We combine industry expertise with innovative approaches to deliver exceptional results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/50 via-medium-blue/30 to-white/60 rounded-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-sm border border-sky-blue/40 rounded-xl p-6 sm:p-8 hover:border-sky-blue/70 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Icon Gradient Background */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/40 to-medium-blue/20 w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto blur-sm"></div>
                    <div className="relative bg-gradient-to-br from-royal-blue/20 to-sky-blue/20 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto border border-sky-blue/30">
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-royal-blue" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-royal-blue mb-3 sm:mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
