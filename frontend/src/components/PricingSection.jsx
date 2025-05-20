import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from '@heroicons/react/24/solid';

const pricingPlans = [
  {
    name: 'Kickstart',
    price: '$39',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      '100 minutes of AI voice calling',
      'Inbound voice receptionist',
      'Up to 5 team members',
      'Email support',
      'Basic analytics',
      'Call recording'
    ]
  },
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'For growing businesses and teams',
    features: [
      '250 minutes of AI voice calling',
      'Inbound & outbound calling',
      'Up to 10 team members',
      'Priority email support',
      'Advanced analytics',
      'Call recording & transcription',
      'Workflow automation'
    ],
    highlighted: true
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For businesses managing multiple teams',
    features: [
      '600 minutes of AI voice calling',
      'Inbound & outbound calling',
      'Up to 50 team members',
      'Premium support',
      'Advanced analytics & reporting',
      'Custom AI voice training',
      'Advanced workflow automation',
      'API access'
    ]
  }
];

const PricingCard = ({ plan }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl overflow-hidden ${
        plan.highlighted 
          ? 'bg-gradient-to-b from-primary-900 to-darkbg-lighter border-2 border-primary-500 transform hover:-translate-y-2' 
          : 'bg-darkbg-lighter/50 border border-gray-800 transform hover:-translate-y-1'
      } transition-all duration-300 flex flex-col h-full`}
    >
      {plan.highlighted && (
        <div className="bg-primary-600 text-white text-center py-2 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          <span className="text-gray-400 ml-1">{plan.period}</span>
        </div>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className={`h-5 w-5 mr-2 mt-0.5 ${plan.highlighted ? 'text-primary-400' : 'text-secondary-500'}`} />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-8 pb-8">
        <a 
          href="#signup" 
          className={`block w-full text-center py-3 px-4 rounded-full font-medium transition-all duration-300 ${
            plan.highlighted 
              ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:shadow-primary-500/20' 
              : 'bg-darkbg/80 text-white border border-gray-700 hover:border-primary-500'
          }`}
        >
          Get Started
        </a>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-primary-900/10 to-darkbg-lighter/30 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkbg-lighter/50 to-darkbg/70 opacity-80"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundPosition: 'center',
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core voice AI technology.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400"
          >
            Need a custom plan? Contact our sales team for a tailored solution that fits your business needs.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
