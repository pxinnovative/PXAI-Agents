import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon, CalendarIcon, UserGroupIcon, ArrowsRightLeftIcon, BoltIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <PhoneIcon className="h-8 w-8 text-primary-400" />,
    title: 'Inbound & Outbound Calling',
    description: 'Our AI voice agents handle both inbound calls as a 24/7 virtual receptionist and outbound calls for sales and lead qualification.'
  },
  {
    icon: <BoltIcon className="h-8 w-8 text-primary-400" />,
    title: 'Lead Nurturing',
    description: 'Automated lead nurturing, follow-ups, and conversions to keep your sales pipeline active and growing without manual effort.'
  },
  {
    icon: <CalendarIcon className="h-8 w-8 text-primary-400" />,
    title: 'Smart Scheduling',
    description: 'Conversational call scheduling that seamlessly books appointments directly onto your team calendars without any conflicts.'
  },
  {
    icon: <ArrowsRightLeftIcon className="h-8 w-8 text-primary-400" />,
    title: 'Live Call Transfers',
    description: 'When needed, our AI agents can transfer calls to your team members in real-time, ensuring no important conversation gets missed.'
  },
  {
    icon: <UserGroupIcon className="h-8 w-8 text-primary-400" />,
    title: 'Unlimited AI Agents',
    description: 'Create unlimited AI agents for both inbound and outbound voice processes to scale your operations without adding staff.'
  },
  {
    icon: <LockClosedIcon className="h-8 w-8 text-primary-400" />,
    title: 'White-Labeled Calls',
    description: 'All calls can be white-labeled with your business name and brand voice, creating a seamless experience for your clients.'
  }
];

const FeatureCard = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-darkbg-lighter/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-900/20"
    >
      <div className="bg-darkbg/60 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-24 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            What Can <span className="gradient-text">PX AI-Agents</span> Do For You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Boost your business with our expert voice and conversation AI agents that handle calls and messages, and convert leads, while you focus on what matters most.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
