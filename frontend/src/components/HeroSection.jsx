import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MicrophoneIcon } from '@heroicons/react/24/solid';

const HeroSection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  
  const startRecording = () => {
    setIsRecording(true);
    
    // Simulate voice recording and AI response
    setTimeout(() => {
      setTranscript('How can I use voice AI for my business?');
      
      setTimeout(() => {
        setIsRecording(false);
        
        setTimeout(() => {
          setAiResponse("PX AI-Agents provides both inbound and outbound voice AI solutions for your business. Our assistant can handle calls 24/7, qualify leads, schedule appointments, and provide personalized client interactions.");
        }, 800);
      }, 2000);
    }, 1500);
  };
  
  const resetDemo = () => {
    setIsRecording(false);
    setTranscript('');
    setAiResponse('');
  };

  useEffect(() => {
    return () => resetDemo();
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
        
        {/* Voice assistant demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative bg-darkbg/50 backdrop-blur-md border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto shadow-2xl glow-effect mb-10"
        >
          <div className="min-h-[220px] flex flex-col items-center">
            {!transcript && !aiResponse && (
              <div className="text-center text-gray-400 mb-4">
                Click the microphone to ask a question
              </div>
            )}
            
            {transcript && (
              <div className="bg-darkbg-lighter rounded-xl p-4 mb-4 w-full text-left">
                <div className="text-sm text-gray-400 mb-1">You asked:</div>
                <p className="text-white">{transcript}</p>
              </div>
            )}
            
            {aiResponse && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary-900/30 border border-primary-700/30 rounded-xl p-4 my-2 w-full text-left"
              >
                <div className="text-sm text-primary-400 mb-1">PX AI-Agents:</div>
                <p className="text-white">{aiResponse}</p>
              </motion.div>
            )}
          </div>
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <button
              onClick={isRecording ? resetDemo : startRecording}
              className="relative group"
              aria-label="Start voice recording"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur-sm transition-all duration-500 ${isRecording ? 'opacity-100 scale-110' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'}`}></div>
              
              <div className={`relative flex items-center justify-center h-16 w-16 rounded-full ${isRecording ? 'bg-primary-700' : 'bg-darkbg-lighter group-hover:bg-darkbg'} border-2 border-gray-700 transition-all duration-300`}>
                <MicrophoneIcon className={`h-7 w-7 ${isRecording ? 'text-white animate-pulse' : 'text-primary-400 group-hover:text-primary-300'}`} />
                
                {isRecording && (
                  <div className="absolute -inset-4 rounded-full border-2 border-primary-500 opacity-50 pulse-ring"></div>
                )}
              </div>
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 md:mt-20"
        >
          <a href="#pricing" className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300">
            Get Started Now
          </a>
          <p className="mt-4 text-sm text-gray-400">No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
