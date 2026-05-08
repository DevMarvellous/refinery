import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Users, Award, Zap, Heart, Target, ArrowRight } from 'lucide-react';

const EntrepreneurshipTraining = () => {
  const training = [
    {
      title: 'The Roadmap',
      value: '₦10,000',
      description: 'Last month, I interviewed a 400-level student of University of Lagos who generated over ₦100 Million in revenue from one of his businesses while still in school. Interestingly, at the time of interview, he was preparing for his SIWES. In this powerful session, he shares:',
      highlights: [
        'His entrepreneurial journey',
        'How he started',
        'Business principles that helped him grow',
        'Mindset shifts that separated him from average thinking',
        'Lessons for young entrepreneurs and students',
        'This interview will challenge your limitations and expose you to new possibilities.'
      ],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Resilience Series',
      value: '₦10,000',
      description: 'I also had a deep conversation with the founder of Medichi Homes. At age 17, he became an orphan. Yet, despite the odds and difficult beginnings, he went on to build a real estate business valued at over ₦1 Billion. This session is filled with:',
      highlights: [
        'Lessons on resilience',
        'Vision and long-term thinking',
        'Faith and perseverance',
        'Business growth principles',
        'The mindset required to rise beyond limitations',
        'If you have ever doubted your future because of your background, this session will inspire you deeply.'
      ],
      icon: Heart,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '"The Audio That Changed My Life"',
      value: '₦100,000',
      description: 'There is a particular audio series I often describe as: "The audio that brought out the entrepreneur in me." Years ago, these audios were sold for over $50 per part, and they have transformed the lives of many people. These teachings helped reshape my mindset toward:',
      highlights: [
        'Wealth creation',
        'Vision',
        'Possibility',
        'Leadership',
        'Entrepreneurship',
        'Purpose and execution',
        'This is one of the most valuable resources in this entire package.'
      ],
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'My Personal Entrepreneurship Journey',
      value: '₦50,000',
      description: 'For the first time, I\'ll also be sharing a personal recording explaining:',
      highlights: [
        'How my entrepreneurial journey started',
        'The vision behind what I\'m building',
        'The mindset driving my mission',
        'My approach to building multi-billion-dollar businesses',
        'The principles guiding my life, business, and impact journey',
        'This session is raw, practical, visionary, and deeply personal.'
      ],
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="entrepreneurship-training" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-lg sm:text-xl md:text-2xl">
                🎯 ENTREPRENEURSHIP TRAINING 🎯
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Transform Your Entrepreneurial Journey
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            Access the same transformational materials and teachings that have shaped successful entrepreneurs. This is your opportunity to learn from proven systems and strategies that accelerate business growth and personal development.
          </p>
          
          <p className="text-sm sm:text-base text-gray-300 mt-3">
            Designed for serious entrepreneurs ready to scale their impact and income.
          </p>
        </motion.div>

        {/* Training Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <div className="grid gap-4 sm:gap-6">
            {training.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`bg-gradient-to-br ${program.color} w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}>
                      <program.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg sm:text-xl font-bold text-yellow-300">{program.title}</h4>
                      <span className="text-green-400 font-bold text-sm sm:text-base">{program.value}</span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base mb-3">{program.description}</p>
                    <ul className="space-y-1 sm:space-y-2">
                      {program.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-200 text-xs sm:text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-4 border-yellow-400 shadow-2xl">
            <p className="text-white text-lg sm:text-xl font-bold mb-4">
              Ready to Transform Your Entrepreneurial Future?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/YOUR_TRAINING_WHATSAPP', '_blank')}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Start Your Training Journey</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
            
            <p className="text-gray-200 text-sm sm:text-base mt-4">
              Join thousands of entrepreneurs who have transformed their businesses through our proven training systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EntrepreneurshipTraining;
