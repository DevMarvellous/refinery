import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

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
      name: 'Sarah Chen',
      company: 'TechVentures Inc.',
      position: 'CEO',
      content: 'The Refinery transformed our business strategy completely. Within six Months, we saw a 150% increase in revenue and expanded into three new markets. Their insights are invaluable.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      company: 'Global Logistics Co.',
      position: 'Managing Director',
      content: 'Working with The Refinery was a game-changer. They helped us streamline operations and identify new revenue streams we hadn\'t considered. Professional, insightful, and results-driven.',
      rating: 5,
    },
    {
      name: 'Startup Founder',
      company: 'Consulting Client',
      position: 'Founder',
      content: "P.Sam's business consulting helped me move from confusion to clarity. I struggled with pricing, branding, customer retention, and turning my skills into consistent income. After implementing the strategies from our sessions, my business became more structured, profitable, and scalable. Every coaching session was practical, insightful, and transformational.",
      rating: 5,
    },
    {
      name: 'Brand Founder',
      company: 'Growth Program',
      position: 'Founder',
      content: 'Before joining the coaching program, I was passionate but lacked a clear business model. P.Sam helped me identify my strengths, structure my ideas, define my target audience, and position my business for growth. Within a short time, I saw improvements in my sales, visibility, confidence, and overall business organization.',
      rating: 5,
    },
    {
      name: 'Business Growth Client',
      company: 'Visionary Program',
      position: 'Entrepreneur',
      content: 'One of the biggest transformations I experienced from working with P.Sam was learning how to think like a visionary entrepreneur instead of just a hustler. He helped me create structure, improve execution, build leadership capacity, and develop strategies for profitability and expansion. His coaching goes beyond motivation — it provides practical systems.',
      rating: 5,
    },
    {
      name: 'Entrepreneur & Creative Leader',
      company: 'Scale-up Client',
      position: 'Creative Director',
      content: 'P.Sam helped me transform my business from something I was merely managing into something I could scale intentionally. I learned branding, business positioning, sales strategy, and wealth-building principles that changed my results completely. My business now has clearer direction, better systems, and increased profit.',
      rating: 5,
    },
    {
      name: 'Young Entrepreneur & Consultant',
      company: 'Brand & Monetization',
      position: 'Consultant',
      content: 'The coaching experience with P.Sam was life-changing. I gained clarity on my business structure, improved my communication and leadership skills, and learned how to monetize my knowledge effectively. I highly recommend his consulting to any entrepreneur serious about growth, impact, and long-term success.',
      rating: 5,
    },
  ];  
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Gradients - Optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-blue/25 to-light-blue/15"></div>
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-br from-sky-blue/40 to-medium-blue/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-36 h-36 sm:w-72 sm:h-72 bg-gradient-to-tl from-royal-blue/30 to-sky-blue/40 rounded-full blur-3xl"></div>
      
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
              Client <span className="text-gold">Success Stories</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Don't just take our word for it. Here's what our clients have to say about their transformation journey.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
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
                <div className="relative bg-white/70 backdrop-blur-sm border-2 border-sky-blue/50 rounded-xl p-6 sm:p-8 hover:border-sky-blue/70 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-1">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 to-sky-blue/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full blur-sm"></div>
                      <div className="relative bg-gradient-to-br from-royal-blue/20 to-medium-blue/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-sky-blue/30">
                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-royal-blue" />
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
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic px-2">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center space-x-3 sm:space-x-4 pt-4 sm:pt-6 border-t border-sky-blue/20">
                    {/* Client Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/35 to-sky-blue/20 w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-sm"></div>
                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-sky-blue/40">
                        {!imageErrors[index] ? (
                          <img 
                            src={`/images/testimonial-${index + 1}.jpg`} 
                            alt={`${testimonial.name} - ${testimonial.position} at ${testimonial.company}`}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(index)}
                          />
                        ) : (
                          <ImageFallback name={testimonial.name} />
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

          {/* Additional Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-light-blue/30 via-sky-blue/20 to-white/40 rounded-xl"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-royal-blue/20">
                <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/15 to-sky-blue/10 w-8 h-8 sm:w-12 sm:h-12 rounded-full mx-auto blur-sm"></div>
                    <div className="text-royal-blue text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 relative">500+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Businesses Transformed</div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/15 to-sky-blue/10 w-8 h-8 sm:w-12 sm:h-12 rounded-full mx-auto blur-sm"></div>
                    <div className="text-royal-blue text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 relative">98%</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Client Satisfaction</div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/15 to-sky-blue/10 w-8 h-8 sm:w-12 sm:h-12 rounded-full mx-auto blur-sm"></div>
                    <div className="text-royal-blue text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 relative">15+</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
