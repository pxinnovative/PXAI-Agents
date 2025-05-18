import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChatBubbleLeftRightIcon, DocumentTextIcon, CpuChipIcon, CursorArrowRaysIcon, ShieldCheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary-400" />,
    title: 'Natural Conversations',
    description: 'Your visitors can have natural conversations with your website, just like talking to a human assistant.'
  },
  {
    icon: <DocumentTextIcon className="h-8 w-8 text-primary-400" />,
    title: 'Knowledge of Your Site',
    description: 'AgentsPX.ai learns from your website content, documents, and knowledge base to answer questions accurately.'
  },
  {
    icon: <CpuChipIcon className="h-8 w-8 text-primary-400" />,
    title: 'Advanced AI',
    description: 'Powered by cutting-edge large language models that understand context, follow-up questions, and user intent.'
  },
  {
    icon: <CursorArrowRaysIcon className="h-8 w-8 text-primary-400" />,
    title: 'Easy Integration',
    description: 'Implement on your website with just a few lines of code. No complex setup or technical knowledge required.'
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-primary-400" />,
    title: 'Privacy Focused',
    description: 'Your data stays yours. We prioritize security and privacy with encrypted communication and data storage.'
  },
  {
    icon: <DocumentDuplicateIcon className="h-8 w-8 text-primary-400" />,
    title: 'Custom Training',
    description: 'Train your AI assistant on your specific documents, FAQs, and knowledge base for more accurate responses.'
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
            What Can <span className="gradient-text">AgentsPX.ai</span> Do For You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Transform your website into an interactive experience that engages visitors and provides instant support.
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
