import { motion } from 'framer-motion';
import { useLoaderData } from "react-router";
import FormComponent from "../ContactUs/FormComponent";
import WhatIs from './WhatIs';
import KeyFeatures from './KeyFeatures';
import TopicsSection from '../ContactUs/TopicsSection';

function AboutCourse() {
  const courseDetail = useLoaderData();

  return (
<div className='relative bg-white dark:bg-gray-900 transition-colors duration-300'>
  {/* Hero Section - Now full width */}
  <section className="relative flex flex-col md:flex-row items-center justify-center py-7 sm:py-11 md:py-16 lg:py-24 w-screen min-h-full overflow-hidden bg-gray-50 dark:bg-gray-900 mx-auto max-w-none px-0">
    {/* Gradient Overlay with Enhanced Effects */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-30 dark:from-blue-600 dark:via-purple-700 dark:to-pink-600 dark:opacity-40 backdrop-blur-md z-0" />
    <div
      className="absolute inset-0 opacity-10 dark:opacity-20 bg-cover bg-center z-0 transition-opacity duration-500"
      style={{ backgroundImage: `url('${courseDetail.bgImage}')` }}
    />

    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/20 dark:bg-purple-700/30 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl z-0" />
    <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500/20 dark:bg-blue-700/30 rounded-full translate-x-1/3 translate-y-1/3 blur-xl z-0" />

    {/* Content Container - Still constrained to max-w-7xl */}
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 w-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            className="text-xl sm:text-2xl lg:text-4xl font-extrabold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {courseDetail.title}
          </motion.h1>
          <motion.h2
            className="text-base sm:text-md lg:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {courseDetail.detail.paragraph1}
          </motion.h2>
          <motion.h2
            className="text-base sm:text-md lg:text-lg font-semibold mb-4 sm:mb-6 text-gray-800 dark:text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: courseDetail.detail.paragraph2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative z-10 w-full md:w-1/2 flex items-center justify-center md:mr-[-14vh]"
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <motion.div
              className=""
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FormComponent />
            </motion.div>
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
</div>
  );
}

export default AboutCourse;
