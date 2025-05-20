import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Sign up & set up',
    description: 'Create your account and configure your virtual voice agents with your business information and preferences.'
  },
  {
    number: '02',
    title: 'Train your agents',
    description: 'Upload your business information, FAQs, product details, and client data to train your AI voice agents.'
  },
  {
    number: '03',
    title: 'Customize workflows',
    description: 'Set up automated workflows for both inbound and outbound calling, including scheduling and follow-ups.'
  },
  {
    number: '04',
    title: 'Launch & analyze',
    description: 'Activate your voice AI agents and monitor their performance through our comprehensive analytics dashboard.'
  }
];

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-darkbg-lighter relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How <span className="gradient-text">PX AI-Agents</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get up and running with AI voice agents for your business in just four simple steps
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex">
                <div className="mr-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary-500 opacity-80">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute left-4 top-14 bottom-0 w-px bg-gradient-to-b from-primary-500/30 to-transparent h-16 md:h-20 hidden md:block"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#demo" className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300">
              See PX AI-Agents in Action
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
