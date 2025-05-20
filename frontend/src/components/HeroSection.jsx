import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Add the TIXAE script to the page
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.innerHTML = `
      (function() {
          window.VG_CONFIG = {
              ID: "yTRjJvPFwvwJT29",
              region: 'na', // 'eu' or 'na'corresponding to Europe and North America
              render: 'full-width', // popup or full-width
              // modalMode: true, // Set this to 'true' to open the widget in modal mode
              stylesheets: [
                  // Base TIXAE Agents CSS
                  "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
                  // Add your custom css stylesheets, Can also add relative URL ('/public/your-file.css)
              ],
              // (SHOULD BE REMOVED OR CHANGED, PROVIDED AS AN EXAMPLE TO USE)
              // user: {
              //     name: 'John Doe', // User's name
              //     email: 'johndoe@gmail.com', // User's email
              //     phone: '+1234567890', // User's phone number
              // }
              //
              // **
              // userID: 'USER_ID', // If you want to use your own user_id
              // autostart: true, // Whether to autostart the chatbot with the proactive message
          }
      })()
    `;
    
    // Append the script to the body only on the home page
    if (window.location.pathname === "/" || window.location.pathname === "") {
      document.body.appendChild(script);
      
      // Load the bundle
      const vgScript = document.createElement('script');
      vgScript.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      vgScript.defer = true;
      document.body.appendChild(vgScript);
    }
    
    // Clean up function
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="hero-gradient relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-900/20 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary-900/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            Intelligent <span className="gradient-text">AI Agents</span> for Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Leverage the power of artificial intelligence to automate tasks, gain insights, and enhance productivity. Our AI agents are designed to work seamlessly with your existing workflows.
          </p>
        </motion.div>
        
        {/* TIXAE Agents Widget Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative bg-darkbg/50 backdrop-blur-md border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto shadow-2xl glow-effect mb-10"
        >
          <div className="flex justify-center">
            <div style={{ width: '500px', height: '500px' }} id="VG_OVERLAY_CONTAINER">
              {/* Here is where TIXAE Agents renders the widget */}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 md:mt-20"
        >
          <a href="#features" className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300">
            Get Started Now
          </a>
          <p className="mt-4 text-sm text-gray-400">No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
