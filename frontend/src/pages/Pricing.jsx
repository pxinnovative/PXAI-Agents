import React from 'react';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';

const Pricing = () => {
  return (
    <div className="bg-darkbg text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Simple <span className="gradient-text">Pricing</span> Plans
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Choose the plan that fits your needs. All plans include our core voice AI technology.
        </p>
      </div>
      
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default Pricing;
