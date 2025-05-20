import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darkbg/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-display font-bold text-xl">
              <span className="text-secondary-500">PX</span>
              <span className="text-primary-500"> AI-</span>
              <span className="text-primary-500">Agents</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <a href="https://px.tixaeagents.ai/" className="ml-3 bg-darkbg/80 hover:bg-primary-900/80 text-white font-medium rounded-full border border-primary-500 px-4 py-2 text-sm transition-colors duration-300">
              Login to PX-AI
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-darkbg/95 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <a href="https://px.tixaeagents.ai/" className="mt-4 block text-center w-full bg-darkbg/80 hover:bg-primary-900/80 text-white font-medium rounded-full border border-primary-500 px-4 py-2 text-sm transition-colors duration-300">
              Login to PX-AI
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
