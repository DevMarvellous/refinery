import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'One-Off Business Consultation',
      price: '₦50,000',
      description: 'Intensive 1-hour session to solve your immediate business challenges',
      features: [
        '1-hour intensive consultation session',
        'Comprehensive business analysis',
        'Strategic roadmap development',
        'Actionable recommendations',
        '30-day follow-up support',
        'Priority email support',
        'Resource materials & templates'
      ],
      popular: false,
      buttonText: 'Book Your Session'
    },
    {
      name: 'Growth Partnership Plan',
      price: '₦100,000',
      description: 'Comprehensive growth program with multiple sessions and ongoing support',
      features: [
        'Initial 2-hour strategy session',
        'Monthly follow-up sessions (6 months)',
        'Advanced performance analytics',
        'Continuous optimization & scaling',
        'VIP priority support channel',
        'Access to exclusive resources',
        'Personal branding development',
        'Funding & investment guidance',
        'AI integration strategies',
        'Leadership coaching',
        'Legacy planning consultation'
      ],
      popular: true,
      buttonText: 'Start Growth Partnership',
      paymentPlan: 'Pay in 4 installments of ₦25,000 each'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Consultation Plan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Select the perfect partnership model for your business transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? 'ring-2 ring-blue-500 ring-offset-2'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.paymentPlan && (
                    <div className="mt-2">
                      <span className="text-sm sm:text-base text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                        {plan.paymentPlan}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Not sure which plan is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-500 font-semibold hover:text-blue-600 transition-colors text-sm sm:text-base"
          >
            Schedule a Free Discovery Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
