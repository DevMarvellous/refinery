import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, Clock, Sparkles } from 'lucide-react';

const FloatingOffer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Show floating offer after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById('birthday-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 max-w-xs sm:max-w-sm"
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
          
          {/* Main floating card */}
          <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl border-2 border-yellow-400 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  <span className="text-black font-bold text-sm sm:text-base">Birthday Offer!</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Sparkles className="w-4 h-4 text-black animate-spin" />
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-black hover:bg-black/20 rounded p-1 transition-colors"
                  >
                    {isMinimized ? '📱' : '📉'}
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-black hover:bg-black/20 rounded p-1 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-3 sm:p-4">
                    {/* Urgency indicator */}
                    <div className="bg-red-600 rounded-lg p-2 sm:p-3 mb-3">
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-4 h-4 text-white" />
                        <span className="text-white font-bold text-xs sm:text-sm">OFFER ENDS SOON</span>
                      </div>
                      <div className="flex justify-center space-x-1 sm:space-x-2 mt-2">
                        <div className="bg-black/50 rounded px-1 sm:px-2 py-1">
                          <div className="text-yellow-300 font-bold text-xs sm:text-sm">{timeLeft.days}D</div>
                        </div>
                        <div className="bg-black/50 rounded px-1 sm:px-2 py-1">
                          <div className="text-yellow-300 font-bold text-xs sm:text-sm">{timeLeft.hours}H</div>
                        </div>
                        <div className="bg-black/50 rounded px-1 sm:px-2 py-1">
                          <div className="text-yellow-300 font-bold text-xs sm:text-sm">{timeLeft.minutes}M</div>
                        </div>
                      </div>
                    </div>

                    {/* Value proposition */}
                    <div className="text-center mb-3">
                      <div className="text-yellow-300 font-bold text-lg sm:text-xl">₦170,000+ VALUE</div>
                      <div className="text-white text-xs sm:text-sm">Pay What You Can!</div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={scrollToOffer}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-2 sm:py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                    >
                      Claim Your Spot
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Minimized state */}
            {isMinimized && (
              <div className="p-2 sm:p-3">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-yellow-300 font-bold text-xs sm:text-sm animate-pulse">
                      Limited Spots Left!
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile pulse animation */}
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingOffer;
