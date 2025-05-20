import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CTASection from '../components/CTASection';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-darkbg text-white pt-24">
      {/* Hero section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          About <span className="gradient-text">PX AI-Agents</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          We're on a mission to transform how businesses operate through intelligent AI agents that enhance productivity and drive growth.
        </p>
      </div>
      
      {/* Our story section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                PX AI-Agents was founded in 2023 by a team of AI researchers and business process experts who saw the potential of bringing artificial intelligence to everyday business operations.
              </p>
              <p className="text-gray-300 mb-6">
                We believed that the future of business would be driven by intelligent automation. With advances in natural language processing and machine learning, we created a platform that enables businesses to deploy AI agents for various tasks.
              </p>
              <p className="text-gray-300">
                Our team has grown to include experts in AI, business operations, and customer experience, all working together to make AI agents an essential part of modern business strategy.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1606765962248-7ff407b51667" 
                alt="AI and technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkbg to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our values section */}
      <section className="py-16 md:py-24 bg-darkbg-lighter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            At PX AI-Agents, we're guided by a set of core principles that drive everything we do.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-darkbg p-8 rounded-xl border border-gray-800">
              <div className="bg-primary-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">
                We push the boundaries of what's possible with AI and web technology to create new and better ways for people to interact online.
              </p>
            </div>
            
            <div className="bg-darkbg p-8 rounded-xl border border-gray-800">
              <div className="bg-primary-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Privacy</h3>
              <p className="text-gray-400">
                We believe in creating technology that respects user privacy and gives people control over their data and interactions.
              </p>
            </div>
            
            <div className="bg-darkbg p-8 rounded-xl border border-gray-800">
              <div className="bg-primary-900/30 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-400">
                We're committed to making technology that's accessible to everyone, breaking down barriers and creating more inclusive digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default About;
