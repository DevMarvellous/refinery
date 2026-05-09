import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, Target, Users, Brain, TrendingUp, Award, Zap, Shield, Heart, Rocket } from 'lucide-react';

const PrivateCoaching = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const coachingSections = [
    {
      id: 'clarity-vision',
      title: 'Business Clarity & Vision Development',
      icon: Target,
      brief: 'Discover profitable ideas and clarify your purpose',
      content: [
        'Discover profitable business ideas',
        'Clarify their purpose and vision',
        'Define their target audience',
        'Build a mission-driven business structure',
        'Position themselves for long-term impact and wealth creation'
      ]
    },
    {
      id: 'business-model',
      title: 'Business Model Development',
      icon: TrendingUp,
      brief: 'Create sustainable business models and income systems',
      content: [
        'Create sustainable business models',
        'Understand how their business makes money',
        'Structure products and services',
        'Build scalable income systems',
        'Develop multiple streams of revenue'
      ]
    },
    {
      id: 'profit-revenue',
      title: 'Profit & Revenue Strategy',
      icon: Award,
      brief: 'Master pricing, profitability, and cash flow',
      content: [
        'Increase profitability',
        'Price products and services properly',
        'Create recurring income systems',
        'Build high-value offers',
        'Turn impact into income',
        'Develop sales strategies that generate consistent cash flow'
      ]
    },
    {
      id: 'personal-branding',
      title: 'Personal Branding & Positioning',
      icon: Star,
      brief: 'Build authority and credibility in your industry',
      content: [
        'Build a powerful personal brand',
        'Position themselves as authorities in their field',
        'Improve visibility and influence',
        'Create professional online presence',
        'Develop credibility and trust in their industry'
      ]
    },
    {
      id: 'sales-marketing',
      title: 'Sales & Marketing Coaching',
      icon: Rocket,
      brief: 'Master customer acquisition and conversion',
      content: [
        'Customer acquisition strategies',
        'Digital marketing systems',
        'Social media growth',
        'Content marketing',
        'Sales psychology',
        'Lead generation and conversion systems'
      ]
    },
    {
      id: 'structure-systems',
      title: 'Structure & Systems',
      icon: Shield,
      brief: 'Move from confusion to organized business systems',
      content: [
        'Business organization',
        'Operational systems',
        'Team structure',
        'Productivity systems',
        'Workflow management',
        'Strategic planning and execution'
      ]
    },
    {
      id: 'wealth-creation',
      title: 'Wealth Creation & Financial Intelligence',
      icon: TrendingUp,
      brief: 'Build generational wealth through business',
      content: [
        'Wealth-building principles',
        'Financial discipline',
        'Business finance management',
        'Asset creation',
        'Long-term financial growth',
        'Building businesses that create generational wealth'
      ]
    },
    {
      id: 'leadership-mindset',
      title: 'Leadership & Mindset Transformation',
      icon: Brain,
      brief: 'Develop entrepreneurial discipline and high-performance habits',
      content: [
        'Entrepreneurial discipline',
        'Leadership capacity',
        'Confidence and communication',
        'Visionary thinking',
        'Resilience and execution mindset',
        'High-performance habits'
      ]
    },
    {
      id: 'funding-capital',
      title: 'Grant, Funding & Capital Access Guidance',
      icon: Zap,
      brief: 'Access funding opportunities and investor partnerships',
      content: [
        'Understand funding opportunities',
        'Learn how to apply for grants',
        'Position their business for investors',
        'Prepare professional business documents',
        'Access growth opportunities and partnerships'
      ]
    },
    {
      id: 'ai-digital',
      title: 'AI & Digital Business Integration',
      icon: Zap,
      brief: 'Leverage modern technology for business growth',
      content: [
        'AI tools for business growth',
        'Automation systems',
        'Digital business strategies',
        'Online monetization',
        'Brand growth using modern technology'
      ]
    },
    {
      id: 'mentorship',
      title: 'Mentorship & Accountability',
      icon: Heart,
      brief: 'Personalized guidance and continuous support',
      content: [
        'Personalized mentorship',
        'Strategic business guidance',
        'Accountability systems',
        'Growth tracking',
        'Continuous support and direction'
      ]
    },
    {
      id: 'impact-legacy',
      title: 'Impact & Legacy Building',
      icon: Heart,
      brief: 'Build businesses that create lasting societal impact',
      content: [
        'Build businesses that solve problems',
        'Create meaningful societal impact',
        'Develop legacy-driven brands',
        'Build systems that outlive them',
        'Transform success into generational influence'
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-royal-blue mb-4">
            The Refinery <span className="text-gold italic font-serif">Private Entrepreneurship Coaching</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive transformation journey covering every aspect of building a high-impact, profitable business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-20">
          {coachingSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`border-b border-slate-100 transition-all duration-300 ${expandedSection === section.id ? 'bg-slate-50 rounded-xl px-4' : ''}`}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${expandedSection === section.id ? 'bg-navy text-gold' : 'bg-slate-100 text-navy group-hover:bg-navy/5'}`}>
                    <section.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy leading-tight">{section.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{section.brief}</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${expandedSection === section.id ? 'rotate-180 text-gold' : 'text-slate-300'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-14">
                      <div className="grid sm:grid-cols-1 gap-2">
                        {section.content.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0"></div>
                            <p className="text-sm text-slate-600">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Investment Card */}
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-white border-2 border-gold rounded-3xl p-8 shadow-2xl">
            <h4 className="text-navy font-bold text-xl mb-2">Monthly Investment</h4>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl font-bold text-navy">₦15,000</span>
              <span className="text-slate-400 font-medium">/ month</span>
            </div>
            <button
              onClick={() => window.open('https://forms.gle/UTuiYJ2enHoR8cKu5', '_blank')}
              className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-navy/20"
            >
              Apply for Private Coaching
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateCoaching;