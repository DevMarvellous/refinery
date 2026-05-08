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
              MY BIRTHDAY ENTREPRENEURSHIP OFFER
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
                    <span className="text-white text-sm font-medium">{offer.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-slate-400 font-mono text-sm">
                <span>Ends in:</span>
                <span className="text-gold font-bold">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl relative">
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                In celebration of my birthday, I've decided to make available some of the most powerful entrepreneurial materials, conversations, and transformational teachings that have influenced my journey and the journeys of many others.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-yellow-300 font-semibold mt-4 max-w-3xl mx-auto px-2 sm:px-4">
                This is more than content. This is an opportunity to expand your thinking, awaken the giant within you, and gain access to principles that can transform your next phase financially, mentally, and strategically.
              </p>
              
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 text-slate-400 font-mono text-sm">
            <span>Ends in:</span>
            <span className="text-gold font-bold">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl relative">
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            In celebration of my birthday, I've decided to make available some of the most powerful entrepreneurial materials, conversations, and transformational teachings that have influenced my journey and the journeys of many others.
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-yellow-300 font-semibold mt-4 max-w-3xl mx-auto px-2 sm:px-4">
            This is more than content. This is an opportunity to expand your thinking, awaken the giant within you, and gain access to principles that can transform your next phase financially, mentally, and strategically.
          </p>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-slate-500 font-medium">Slots Taken</span>
              <span className="text-navy font-bold">65%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-gold h-full w-[65%]"></div>
            </div>
          </div>

          <div className="text-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
              className="bg-black text-yellow-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300"
            >
              Secure Access Now
            </motion.button>
          </div>
          <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-tighter">
            Available for the first 50 people only
          </p>
        </div>
      </div>
    </section>
  );
};

export default BirthdayOffer;