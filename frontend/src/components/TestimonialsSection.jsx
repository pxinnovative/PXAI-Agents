import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    content: "PX AI-Agents has completely transformed how we handle customer calls. Our AI agents qualify leads 24/7, and we've seen a 45% increase in booked appointments.",
    author: "Michael Chen",
    position: "Marketing Director, TechVision Inc."
  },
  {
    content: "Since implementing PX AI-Agents for our agency, we've been able to justify higher fees to clients while providing better service through automated outbound follow-ups.",
    author: "Sarah Rodriguez",
    position: "CEO, Growth Marketing Partners"
  },
  {
    content: "The client retention rate for our agency has improved dramatically since we added PX AI-Agents. Our clients love that their callers never have to wait on hold.",
    author: "David Patel",
    position: "Founder, DigitalEdge Agency"
  },
  {
    content: "The white-labeled call feature is a game-changer for our business. Customers have no idea they're talking to an AI, and our team only gets involved when absolutely necessary.",
    author: "Jennifer Thompson",
    position: "Operations Manager, Premier Services"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1567400358510-f027b3196d5b" 
          alt="Corporate building" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-darkbg/90"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Businesses</span> Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our customers are saying about their experience with PX AI-Agents
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-darkbg/60 backdrop-blur-md border border-gray-800 rounded-xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
            </div>
            <div className="flex items-center">
              <div className="bg-primary-800/50 h-12 w-12 rounded-full flex items-center justify-center text-primary-300 font-bold text-xl">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="font-bold text-white">{testimonials[currentIndex].author}</p>
                <p className="text-gray-400">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="bg-darkbg/50 hover:bg-primary-900/50 border border-gray-700 rounded-full p-2 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-8 bg-primary-500' : 'w-2 bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="bg-darkbg/50 hover:bg-primary-900/50 border border-gray-700 rounded-full p-2 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
