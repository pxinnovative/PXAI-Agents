import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon, CalendarIcon, ArrowsRightLeftIcon, BoltIcon, ChartBarIcon, ArrowsPointingOutIcon, ClockIcon, CpuChipIcon } from '@heroicons/react/24/outline';

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
    icon: <ArrowsPointingOutIcon className="h-8 w-8 text-primary-400" />,
    title: 'Easy Integration',
    description: 'Seamlessly integrate our AI agents with your existing tools and platforms, ensuring a smooth transition and minimal disruption to your operations.'
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-primary-400" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights from your data with our powerful analytics capabilities, helping you make data-driven decisions with confidence.'
  },
  {
    icon: <CpuChipIcon className="h-8 w-8 text-primary-400" />,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline complex workflows with intelligent AI agents that learn and adapt to your business processes.'
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-primary-400" />,
    title: '24/7 Availability',
    description: 'Our AI agents work around the clock, ensuring your business operations continue smoothly even outside regular working hours.'
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
