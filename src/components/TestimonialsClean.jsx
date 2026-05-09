import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ImageFallback = ({ name }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <div className="w-full h-full bg-gradient-to-br from-royal-blue to-medium-blue flex items-center justify-center text-white font-bold text-lg sm:text-xl">
      {initials}
    </div>
  );
};

const Testimonials = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const testimonials = [
    {
      name: 'Entrepreneur & Business Owner',
      company: '',
      position: '',
      content: 'Working with P.Sam completely transformed my mindset and business approach. Before coaching, I had ideas but lacked structure, direction, and profitability. Through his guidance, I learned how to build a sustainable business model, position my brand properly, and create systems that increased both impact and revenue. What stood out most was his ability to combine purpose, leadership, strategy, and wealth creation together. My confidence improved, my business became more organized, and I began attracting better opportunities and clients. I now operate with clarity, vision, and measurable growth.',
      rating: 5,
    },
    {
      name: 'Startup Founder',
      company: '',
      position: '',
      content: 'P.Sam\'s business consulting helped me move from confusion to clarity. I struggled with pricing, branding, customer retention, and turning my skills into consistent income. After implementing strategies from our sessions, my business became more structured, profitable, and scalable. Beyond profit, he helped me understand how to build a business that creates real impact and long-term legacy. Every coaching session was practical, insightful, and transformational.',
      rating: 5,
    },
  ];

  const additionalTestimonials = [
    {
      name: 'Alex Thompson',
      company: 'Digital Marketing Co.',
      position: 'Marketing Director',
      content: 'P.Sam\'s coaching approach is systematic and results-oriented. He helped me optimize our marketing funnels, improve conversion rates, and scale our digital presence. Our ROI increased by 200% within 3 months.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      company: 'E-commerce Solutions',
      position: 'Founder',
      content: 'P.Sam\'s business consulting helped me move from confusion to clarity. I struggled with pricing, branding, customer retention, and turning my skills into consistent income. After implementing strategies from our sessions, my business became more structured, profitable, and scalable.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Background Gradients - Optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-blue/25 to-light-blue/15"></div>
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-br from-sky-blue/40 to-medium-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-tl from-royal-blue/30 to-sky-blue/40 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3 sm:mb-4 md:mb-6">
              Client <span className="text-gold">Success Stories</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              Here's what our clients have to say about their transformation journey.
            </p>
          </motion.div>

          {/* Main Testimonials */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-6xl mx-auto mb-8 sm:mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/50 via-medium-blue/30 to-white/60 rounded-xl"></div>
                <div className="relative bg-white/70 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl p-4 sm:p-6 hover:border-sky-blue/70 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-1">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 to-sky-blue/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-royal-blue/20 to-medium-blue/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-sky-blue/30">
                        <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-royal-blue" />
                      </div>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 px-2 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-sky-blue/20">
                    {/* Client Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/35 to-sky-blue/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full blur-sm"></div>
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sky-blue/40">
                        {imageErrors[index] ? (
                          <ImageFallback name={testimonial.name} />
                        ) : (
                          <img 
                            src={`/images/testimonial-${index + 1}.jpg`} 
                            alt={`${testimonial.name} - ${testimonial.position} at ${testimonial.company}`}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(index)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-royal-blue font-semibold text-sm sm:text-base md:text-lg truncate">
                        {testimonial.name}
                      </div>
                      <div className="text-gold text-xs sm:text-sm truncate">
                        {testimonial.position}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm truncate">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Read More Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpandedTestimonial(expandedTestimonial === null ? 'show' : null)}
              className="text-royal-blue font-semibold hover:text-medium-blue transition-colors text-sm sm:text-base"
            >
              {expandedTestimonial === null ? 'Read More Testimonials' : 'Show Less'}
            </motion.button>
          </motion.div>

          {/* Additional Testimonials */}
          <AnimatePresence>
            {expandedTestimonial === 'show' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-6xl mx-auto mt-6">
                  {additionalTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative"
                    >
                      {/* Card Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/50 via-medium-blue/30 to-white/60 rounded-xl"></div>
                      <div className="relative bg-white/70 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl p-4 sm:p-6 hover:border-sky-blue/70 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-1">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-3 sm:mb-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 to-sky-blue/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full blur-sm"></div>
                            <div className="relative bg-gradient-to-br from-royal-blue/20 to-medium-blue/20 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-sky-blue/30">
                              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-royal-blue" />
                            </div>
                          </div>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex justify-center mb-3 sm:mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 px-2 italic">
                          "{testimonial.content}"
                        </p>

                        {/* Client Info */}
                        <div className="flex items-center space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-sky-blue/20">
                          {/* Client Photo */}
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/35 to-sky-blue/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full blur-sm"></div>
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-sky-blue/40">
                              {imageErrors[index + 2] ? (
                                <ImageFallback name={testimonial.name} />
                              ) : (
                                <img 
                                  src={`/images/testimonial-${index + 3}.jpg`} 
                                  alt={`${testimonial.name} - ${testimonial.position} at ${testimonial.company}`}
                                  className="w-full h-full object-cover"
                                  onError={() => handleImageError(index + 2)}
                                />
                              )}
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-royal-blue font-semibold text-sm sm:text-base md:text-lg truncate">
                              {testimonial.name}
                            </div>
                            <div className="text-gold text-xs sm:text-sm truncate">
                              {testimonial.position}
                            </div>
                            <div className="text-gray-600 text-xs sm:text-sm truncate">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
