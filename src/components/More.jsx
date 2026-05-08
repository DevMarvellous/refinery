import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Brain, Lightbulb, ArrowRight, Target, Users, Sparkles } from 'lucide-react';

const More = ({ navigateToPage }) => {
  const platforms = [
    {
      id: 'marketing-academy',
      title: 'The Refinery Marketing Academy',
      description: 'Master the art and science of selling with our comprehensive sales training program. We teach you proven sales techniques and strategies that form the core foundation of business success, helping you convert prospects into loyal customers.',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-300',
      features: [
        'Sales Fundamentals Mastery',
        'Advanced Closing Techniques',
        'Customer Psychology Training',
        'Negotiation Skills Development',
        'Sales Pipeline Management'
      ],
      websiteUrl: 'https://academy.refinery.com',
    },
    {
      id: 'african-lab',
      title: 'The Refinery African Entrepreneurship Lab',
      description: 'Building tailored software solutions for African businesses by Africans who understand the system. We create websites, mobile apps, landing pages, and business systems specifically designed for the African market and its unique challenges.',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-300',
      features: [
        'Custom Website Development',
        'Mobile App Creation',
        'Landing Page Design',
        'Business System Integration',
        'African Market Optimization'
      ],
      websiteUrl: 'https://africalab.refinery.com',
    },
    {
      id: 'mind-forge',
      title: 'The Refinery Mind Forge',
      description: 'Transform your life through comprehensive mentorship and personal development training. We believe success starts from the mind - our programs help you develop the mindset, skills, and habits needed for personal and professional excellence.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-300',
      features: [
        'Mindset Development Training',
        'Personal Growth Mentorship',
        'Leadership Skills Building',
        'Habit Formation Coaching',
        'Self-Mastery Techniques'
      ],
      websiteUrl: 'https://mindforge.refinery.com',
    }
  ];

  const handleWebsiteVisit = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Gradients - Optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-blue/35 to-medium-blue/40"></div>
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-sky-blue/50 to-medium-blue/35 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-l from-royal-blue/40 to-sky-blue/50 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-royal-blue mb-4 sm:mb-6">
              Explore <span className="text-gold">The Refinery</span> Ecosystem
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Discover our diverse portfolio of specialized platforms, each designed to transform different aspects of business and personal growth. From marketing mastery to entrepreneurial empowerment and cognitive enhancement.
            </p>
          </motion.div>

          {/* Platform Cards */}
          <div className="space-y-8 sm:space-y-12">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative">
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgColor} rounded-2xl`}></div>
                  <div className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                      {/* Left Content */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* Icon and Title */}
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`relative flex-shrink-0`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-lg opacity-50`}></div>
                            <div className={`relative bg-gradient-to-br ${platform.color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center`}>
                              <platform.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </div>
                          </div>
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-royal-blue leading-tight">
                            {platform.title}
                          </h2>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                          {platform.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="font-semibold text-royal-blue text-base sm:text-lg">Core Services:</h3>
                          <div className="grid grid-cols-1 gap-1 sm:gap-2">
                            {platform.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Sparkles className={`w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${platform.color} text-transparent bg-clip-text flex-shrink-0`} />
                                <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                          onClick={() => handleWebsiteVisit(platform.websiteUrl)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`bg-gradient-to-r ${platform.color} text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 max-w-fit text-sm sm:text-base`}
                        >
                          <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Visit Website</span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.button>
                      </div>

                      {/* Right Content - Visual Element */}
                      <div className="flex items-center justify-center">
                        <div className={`relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center`}>
                          <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
                          <platform.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white relative z-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 sm:mt-20 text-center"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-sky-blue/10 rounded-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-royal-blue/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-royal-blue mb-3 sm:mb-4">
                  Join The Refinery Ecosystem
                </h2>
                <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                  Each platform is designed to complement the others, creating a comprehensive suite of solutions for your business and personal growth journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={() => navigateToPage('home')}
                    className="border-2 border-royal-blue text-royal-blue px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-royal-blue hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Back to Business Consult
                  </button>
                  <button
                    onClick={() => window.open('https://refinery.com', '_blank')}
                    className="bg-gradient-to-r from-royal-blue to-medium-blue text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    Explore Main Platform
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default More;
