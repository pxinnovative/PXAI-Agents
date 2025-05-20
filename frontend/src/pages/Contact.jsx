import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real scenario, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-darkbg text-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our AI agents? We're here to help you harness the power of AI for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-darkbg-lighter/50 rounded-xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-primary-900/40 border border-primary-600/30 rounded-lg p-6 text-center">
                <div className="text-primary-400 mb-4">
                  <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-darkbg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-darkbg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-darkbg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full bg-darkbg border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
          
          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-darkbg-lighter/50 rounded-xl p-8 border border-gray-800 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-900/30 p-3 rounded-lg mr-4">
                    <EnvelopeIcon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <p className="text-gray-400">info@pxaiagents.com</p>
                    <p className="text-gray-400">support@pxaiagents.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-900/30 p-3 rounded-lg mr-4">
                    <PhoneIcon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Call Us</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Mon-Fri: 9AM - 6PM ET</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-900/30 p-3 rounded-lg mr-4">
                    <MapPinIcon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Our Location</h3>
                    <p className="text-gray-400">123 AI Innovation Avenue</p>
                    <p className="text-gray-400">San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-darkbg-lighter/50 rounded-xl p-8 border border-gray-800"
            >
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM ET</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">10:00 AM - 3:00 PM ET</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-gray-400">Our AI agents are available 24/7 for automated support and interactions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
