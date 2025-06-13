import React from 'react';
import { FiUser, FiPhone, FiArrowRight } from 'react-icons/fi';

function DemoBanner() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 md:-mt-5 mb-5">
      <div className="relative max-w-7xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-700 rounded-2xl shadow-xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-white/10" />
        
        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Left side - Title */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Book Your Free Demo Now!
              </h3>
              <p className="mt-1 text-blue-100 dark:text-blue-200">
                Limited slots available
              </p>
            </div>
            
            {/* Middle - Form fields */}
            <div className="flex-1 w-full md:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-20">
                    <FiUser className="text-gray-800 dark:text-white" />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/30 focus:border-white/50 focus:ring-2 focus:ring-white/30 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700/90"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-20">
                    <FiPhone className="text-gray-800 dark:text-white" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/30 focus:border-white/50 focus:ring-2 focus:ring-white/30 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700/90"
                  />
                </div>
              </div>
            </div>
            
            {/* Right side - Button */}
            <button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-gray-900 text-blue-600 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group flex items-center justify-center gap-2">
              <span>Book Demo Now!</span>
              <FiArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default DemoBanner;