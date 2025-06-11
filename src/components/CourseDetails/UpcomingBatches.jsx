import React, { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiBookOpen, FiArrowRight } from 'react-icons/fi';

const initialDates = ['2025-06-12', '2025-06-19', '2025-06-26', '2025-07-01'];

function UpcomingBatches() {
  const [batchDates, setBatchDates] = useState([]);

  useEffect(() => {
    const today = new Date();

    const updatedDates = initialDates.map(dateStr => {
      const date = new Date(dateStr);
      const diffDays = Math.floor((today - new Date('2025-06-11')) / (1000 * 60 * 60 * 24));
      date.setDate(date.getDate() + diffDays);
      return date.toISOString().split('T')[0];
    });

    setBatchDates(updatedDates);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 min-h-screen transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Batches</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {batchDates.map((date, idx) => (
          <div
            key={idx}
            className="group relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
            
            {/* 3D effect border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 dark:group-hover:border-black/20 rounded-2xl transition-all duration-500" />
            
            {/* Card content */}
            <div className="relative h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-2xl shadow-md flex flex-col">
              {/* Course image with overlay */}
              <div className="relative overflow-hidden rounded-xl mb-4 h-32">
                <img
                  src={`https://source.unsplash.com/random/400x200/?course,education,${idx}`}
                  alt="Course"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-medium text-sm">
                  Batch {idx + 1}
                </span>
              </div>
              
              {/* Date with animated underline */}
              <div className="relative mb-3">
                <p className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
                  <FiCalendar className="text-blue-500 dark:text-blue-400" />
                  <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 w-0 group-hover:w-full transition-all duration-500" />
              </div>
              
              {/* Course details */}
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <p className="flex items-center gap-2">
                  <FiBookOpen className="text-purple-500 dark:text-purple-400" />
                  <span>Mon-Sat</span>
                </p>
                <p className="flex items-center gap-2">
                  <FiClock className="text-blue-500 dark:text-blue-400" />
                  <span>Flexible Timing</span>
                </p>
                <p>Weekdays Regular</p>
                <p>Duration: 1hr – 1:30hr</p>
              </div>
              
              {/* Button with hover effect */}
              <button className="mt-auto w-full relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Course Fees <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
              
              {/* Floating elements for 3D effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingBatches;