import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BirthdayOffer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date('2026-05-16T23:59:59');
      const now = new Date();
      const difference = deadline - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="birthday-offer" className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-2xl p-8 md:p-16 shadow-2xl text-white">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              🎉 MY BIRTHDAY ENTREPRENEURSHIP OFFER 🎉
            </h1>
            
            <p className="text-xl sm:text-2xl text-yellow-300 mb-8">
              A Special Transformation Opportunity — Available Till May 16th
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              In celebration of my birthday, I've decided to make available some of the most powerful entrepreneurial materials, conversations, and transformational teachings that have influenced my journey and the journeys of many others.
            </p>
            
            <p className="text-yellow-300 text-lg mb-8">
              This is more than content. This is an opportunity to expand your thinking, awaken the giant within you, and gain access to principles that can transform your next phase financially, mentally, and strategically.
            </p>
            
            <p className="text-gray-400 text-sm">
              Hosted by The Refinery
            </p>
          </motion.div>

          {/* What You'll Get */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8 text-center">
              🔥 WHAT YOU'LL GET ACCESS TO
            </h2>

            {/* Offer 1 */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">1. The DubemTheGreat Interview</h3>
              <p className="text-yellow-300 font-semibold mb-4">Value: ₦10,000</p>
              <p className="text-gray-300 mb-4">
                Last month, I interviewed a 400-level student of University of Lagos who generated over ₦100 Million in revenue from one of his businesses while still in school. Interestingly, at the time of interview, he was preparing for his SIWES. In this powerful session, he shares:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• His entrepreneurial journey</li>
                <li>• How he started</li>
                <li>• Business principles that helped him grow</li>
                <li>• Mindset shifts that separated him from average thinking</li>
                <li>• Lessons for young entrepreneurs and students</li>
              </ul>
              <p className="text-yellow-300 italic">
                This interview will challenge your limitations and expose you to new possibilities.
              </p>
            </div>

            {/* Offer 2 */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">2. The Medichi Homes Story</h3>
              <p className="text-yellow-300 font-semibold mb-4">Value: ₦10,000</p>
              <p className="text-gray-300 mb-4">
                I also had a deep conversation with the founder of Medichi Homes. At age 17, he became an orphan. Yet, despite the odds and difficult beginnings, he went on to build a real estate business valued at over ₦1 Billion. This session is filled with:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Lessons on resilience</li>
                <li>• Vision and long-term thinking</li>
                <li>• Faith and perseverance</li>
                <li>• Business growth principles</li>
                <li>• The mindset required to rise beyond limitations</li>
              </ul>
              <p className="text-yellow-300 italic">
                If you have ever doubted your future because of your background, this session will inspire you deeply.
              </p>
            </div>

            {/* Offer 3 */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">3. "The Audio That Changed My Life"</h3>
              <p className="text-yellow-300 font-semibold mb-4">Value: ₦100,000</p>
              <p className="text-gray-300 mb-4">
                There is a particular audio series I often describe as: "The audio that brought out the entrepreneur in me." Years ago, these audios were sold for over $50 per part, and they have transformed the lives of many people. These teachings helped reshape my mindset toward:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Wealth creation</li>
                <li>• Vision</li>
                <li>• Possibility</li>
                <li>• Leadership</li>
                <li>• Entrepreneurship</li>
                <li>• Purpose and execution</li>
              </ul>
              <p className="text-yellow-300 italic">
                This is one of the most valuable resources in this entire package.
              </p>
            </div>

            {/* Offer 4 */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">4. My Personal Entrepreneurship Journey</h3>
              <p className="text-yellow-300 font-semibold mb-4">Value: ₦50,000</p>
              <p className="text-gray-300 mb-4">
                For the first time, I'll also be sharing a personal recording explaining:
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• How my entrepreneurial journey started</li>
                <li>• The vision behind what I'm building</li>
                <li>• The mindset driving my mission</li>
                <li>• My approach to building multi-billion-dollar businesses</li>
                <li>• The principles guiding my life, business, and impact journey</li>
              </ul>
              <p className="text-yellow-300 italic">
                This session is raw, practical, visionary, and deeply personal.
              </p>
            </div>
          </motion.div>

          {/* Total Value & Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
              🎁 TOTAL VALUE: ₦170,000+
            </h2>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-8">
              SPECIAL BIRTHDAY ACCESS OFFER 🎉
            </h3>
            
            <p className="text-gray-300 text-lg mb-6">
              For the first 50 people only, you will have the opportunity to gain access to everything by paying <span className="text-yellow-400 font-bold">any reasonable amount you can afford</span>.
            </p>
            
            <p className="text-yellow-300 text-2xl font-bold mb-6">
              Yes, you read that correctly.
            </p>
            
            <p className="text-gray-300 text-lg mb-8">
              This is my way of giving more people access to transformational knowledge and entrepreneurial exposure that can positively shift their lives and future.
            </p>
            
                      </motion.div>

          {/* Who This Is For */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-6 text-center">
              THIS IS FOR PEOPLE WHO WANT TO:
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>• Think bigger</div>
              <div>• Build wealth</div>
              <div>• Start and scale businesses</div>
              <div>• Develop the right mindset</div>
              <div>• Learn from real builders</div>
              <div>• Unlock greater possibilities</div>
              <div className="col-span-2">• Enter their next phase intentionally</div>
            </div>
            
            <p className="text-gray-300 text-lg mt-8 text-center">
              If you are serious about growth, entrepreneurship, wealth creation, and transformation, this opportunity is for you.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-8">
              READY?
            </h2>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
              className="bg-yellow-400 text-black px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Tap link below and secure your access now</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayOffer;
