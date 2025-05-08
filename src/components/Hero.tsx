import React from 'react';
import { ArrowRight, CheckCircle, DollarSign } from 'lucide-react';

const Hero = () => {
  const benefits = [
    { icon: <DollarSign className="w-5 h-5" />, text: "Best market rates" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Verified buyers" },
    { icon: <ArrowRight className="w-5 h-5" />, text: "Quick transfers" }
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 z-0" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300 dark:bg-blue-700 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-300 dark:bg-purple-700 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-gray-700 rounded-full">
              Software License Marketplace
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Unused Licenses 
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Into Cash
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              SoftSell helps you resell your software licenses in minutes. Get top dollar for licenses you no longer need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all">
                Get a Quote
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 font-medium rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                How It Works
              </button>
            </div>
            
            
          </div>
          
          {/* Hero illustration/stats panel */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Average Returns</h3>
                <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                  Updated Daily
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Design Software</p>
                  <p className="text-2xl font-bold">70%</p>
                  <p className="text-xs text-green-600 dark:text-green-400">of original price</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Development Tools</p>
                  <p className="text-2xl font-bold">65%</p>
                  <p className="text-xs text-green-600 dark:text-green-400">of original price</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Productivity Suites</p>
                  <p className="text-2xl font-bold">55%</p>
                  <p className="text-xs text-green-600 dark:text-green-400">of original price</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Average Payout Time</p>
                  <p className="text-2xl font-bold">48h</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400">after verification</p>
                </div>
              </div>
              
              {/* Benefits */}
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full mr-3">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;