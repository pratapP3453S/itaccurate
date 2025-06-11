import { motion } from 'framer-motion';
import { useLoaderData } from "react-router";
import FormComponent from "../ContactUs/FormComponent";
import WhatIs from './WhatIs';
import KeyFeatures from './KeyFeatures';
import TopicsSection from '../ContactUs/TopicsSection';
import UpcomingBatches from './UpcomingBatches';
import DemoBanner from './DemoBanner';
import RoadMap from './RoadMap';

function AboutCourse() {
  const courseDetail = useLoaderData();

  return (
<div className='relative bg-white dark:bg-gray-900 transition-colors duration-300'>
  {/* Hero Section - Now full width */}
<section className="relative flex flex-col md:flex-row items-center justify-center py-7 sm:py-11 md:py-16 lg:py-24 w-screen min-h-full overflow-hidden bg-gray-50 dark:bg-gray-900 mx-auto max-w-none px-0">
  {/* Enhanced Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/30 to-pink-500/20 dark:from-blue-600/30 dark:via-purple-700/40 dark:to-pink-600/30 backdrop-blur-sm z-0" />
  
  {/* Animated Grid Background */}
  <div className="absolute inset-0 opacity-30 dark:opacity-40 z-0">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE1MywxNjMsMTgzLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/20 dark:bg-purple-700/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl z-0 animate-float" />
  <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500/20 dark:bg-blue-700/30 rounded-full translate-x-1/3 translate-y-1/3 blur-xl z-0 animate-float-delay" />
  <div className="absolute top-1/4 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-pink-500/20 dark:bg-pink-600/30 rounded-full blur-xl z-0 animate-float" />
  <div className="absolute bottom-1/3 left-10 w-12 h-12 sm:w-16 sm:h-16 bg-indigo-500/20 dark:bg-indigo-600/30 rounded-full blur-xl z-0 animate-float-delay" />

  {/* Content Container */}
  <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16 w-full">
      {/* Text Section - Enhanced with Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 text-center md:text-left"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm mb-6 border border-gray-200 dark:border-gray-700"
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mr-2"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {courseDetail.category || 'Professional Course'}
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {courseDetail.title}
        </motion.h1>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4 text-blue-500 dark:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium">
              {courseDetail.detail.paragraph1}
            </p>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-4 text-purple-500 dark:text-purple-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div 
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium"
              dangerouslySetInnerHTML={{ __html: courseDetail.detail.paragraph2 }}
            />
          </div>

          {Array.isArray(courseDetail.detail.extras) && courseDetail.detail.extras.length > 0 && (
            <div className="pt-4 space-y-4">
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-bold">Course Highlights</h3>
              </div>
              <ul className="space-y-3 pl-2">
                {courseDetail.detail.extras.map((extra, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-500 dark:text-green-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{extra}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Form Section - Enhanced Card Design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-full md:w-[45%] flex items-center justify-center"
      >
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <h3 className="text-xl font-bold text-white">Enroll Now</h3>
            </div>
            <p className="text-blue-100 text-sm">Fill out the form to get started</p>
          </div>
          
          {/* Form Content */}
          <div className="p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FormComponent />
            </motion.div>
          </div>
          
          {/* Form Footer */}
          <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-4 text-center border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Your information is secure with us
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

  {/* Covering Topics Section */}
  <TopicsSection courseDetail={courseDetail} />

  {/* WhatIs Component */}
  <WhatIs />

  {/* Key Features Component */}
  <KeyFeatures />

  <UpcomingBatches />

  <DemoBanner />

  {/* {Array.isArray(courseDetail.roadMap) && courseDetail.roadMap > 0 && (<RoadMap />)} */}
  {courseDetail.roadMap ? (<RoadMap />) : ''}
  {/* <RoadMap /> */}
</div>
  );
}

export default AboutCourse;
