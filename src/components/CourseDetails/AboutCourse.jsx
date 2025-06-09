// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useState, useRef } from 'react';
// import { FiUsers, FiLayers, FiBriefcase, FiAward, FiCheck, FiClock, FiCalendar, FiBook, FiDollarSign } from 'react-icons/fi';
// import { useLoaderData } from "react-router";
// import FormComponent from "../ContactUs/FormComponent";

// function AboutCourse() {
//   const data = useLoaderData();
//   const [activeTab, setActiveTab] = useState('Patch');
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacityBg = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

//   const pricingPlans = [
//     {
//       name: 'Patch',
//       price: '¥4,800',
//       duration: '12 months',
//       features: [
//         'Live Lectures by top faculties',
//         'DPPs with Video Solution',
//         'Regular Test with Discussion',
//         'Doubt Solving Sessions',
//         'Comprehensive Study Material'
//       ]
//     },
//     {
//       name: 'Infinity',
//       price: '¥7,000',
//       duration: '12 months',
//       features: [
//         'Everything in Patch plus',
//         'Recorded Lecture Access',
//         'Personalized Study Plan',
//         'Advanced Problem Sets',
//         'Mentorship Program'
//       ]
//     },
//     {
//       name: 'Infinity Pro',
//       price: '¥5,200',
//       duration: '12 months',
//       features: [
//         'Everything in Infinity plus',
//         'One-on-One Tutoring',
//         'Premium Study Materials',
//         'Priority Doubt Solving',
//         'Mock Interview Sessions'
//       ]
//     }
//   ];

//   const stats = [
//     { icon: <FiUsers className="w-6 h-6" />, value: "500+", label: "Students Enrolled" },
//     { icon: <FiAward className="w-6 h-6" />, value: "95%", label: "Success Rate" },
//     { icon: <FiBriefcase className="w-6 h-6" />, value: "50+", label: "Expert Faculty" },
//     { icon: <FiLayers className="w-6 h-6" />, value: "1000+", label: "Practice Problems" }
//   ];

//   const curriculum = [
//     {
//       subject: "Physics",
//       topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
//       duration: "120 hours"
//     },
//     {
//       subject: "Chemistry",
//       topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Analytical Chemistry"],
//       duration: "110 hours"
//     },
//     {
//       subject: "Mathematics",
//       topics: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry", "Probability"],
//       duration: "150 hours"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100" ref={containerRef}>
//       {/* Hero Section with Animated Background */}
//       <section className="relative h-screen max-h-[800px] flex items-center justify-center overflow-hidden">
//         {/* Animated Background Image */}
//         <motion.div 
//           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
//           style={{
//             y: yBg,
//             opacity: opacityBg
//           }}
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 dark:from-blue-900/80 dark:to-purple-900/80" />

//         {/* Content */}
//         <div className="container mx-auto px-6 relative z-10">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
//               Prayas JEE 2.0 2026
//             </h1>
//             <p className="text-xl md:text-2xl text-blue-100 mb-6">For Dropper JEE Aspirants</p>
//             <div className="flex flex-wrap justify-center gap-4 mb-8">
//               <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
//                 <FiCalendar className="mr-2" />
//                 <span>Starts: 09 Jun 2025</span>
//               </div>
//               <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
//                 <FiClock className="mr-2" />
//                 <span>Ends: 30 Jun 2026</span>
//               </div>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
//             >
//               Enroll Now
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="container mx-auto px-6 py-12">
//         {/* Stats Section */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
//         >
//           {stats.map((stat, index) => (
//             <div 
//               key={index}
//               className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
//             >
//               <div className="text-blue-600 dark:text-blue-400 mx-auto mb-3">
//                 {stat.icon}
//               </div>
//               <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
//             </div>
//           ))}
//         </motion.div>

//         {/* Course Details Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Left Column - Course Features */}
//           <div className="md:col-span-2 space-y-8">
//             {/* About Section */}
//             <motion.section
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
//             >
//               <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">About the Course</h2>
//               <p className="mb-4">{data.detail.paragraph1}</p>
//               <p className="mb-4">This comprehensive program is designed to help dropper students maximize their potential and achieve top ranks in JEE 2026. Our proven methodology combines rigorous academic training with strategic test-taking approaches.</p>

//               <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {[
//                   "Personalized learning plans",
//                   "Comprehensive study material",
//                   "Regular performance analysis",
//                   "Expert doubt resolution",
//                   "Mock test series",
//                   "Parent-teacher meetings"
//                 ].map((feature, index) => (
//                   <div key={index} className="flex items-start">
//                     <FiCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.section>

//             {/* Curriculum Section */}
//             <motion.section
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
//             >
//               <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Curriculum</h2>
//               <div className="space-y-6">
//                 {curriculum.map((subject, index) => (
//                   <div key={index} className="border-l-4 border-blue-500 pl-4">
//                     <div className="flex justify-between items-center mb-2">
//                       <h3 className="text-xl font-semibold">{subject.subject}</h3>
//                       <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
//                         {subject.duration}
//                       </span>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {subject.topics.map((topic, i) => (
//                         <span key={i} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
//                           {topic}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.section>

//             {/* Pricing Plans */}
//             <motion.section
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
//             >
//               <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Pricing Plans</h2>

//               <div className="flex flex-wrap gap-4 mb-6">
//                 {pricingPlans.map((plan) => (
//                   <button
//                     key={plan.name}
//                     onClick={() => setActiveTab(plan.name)}
//                     className={`px-6 py-3 rounded-lg transition-all ${
//                       activeTab === plan.name
//                         ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                         : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
//                     }`}
//                   >
//                     {plan.name}
//                   </button>
//                 ))}
//               </div>

//               {/* Active Plan Details */}
//               {pricingPlans.map((plan) => (
//                 <motion.div
//                   key={plan.name}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: activeTab === plan.name ? 1 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className={`${activeTab === plan.name ? 'block' : 'hidden'} space-y-6`}
//                 >
//                   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                     <div>
//                       <h3 className="text-2xl font-bold">{plan.name}</h3>
//                       <p className="text-gray-600 dark:text-gray-300">{plan.duration} program</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-3xl font-bold">{plan.price}</p>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">One-time payment</p>
//                     </div>
//                   </div>

//                   <ul className="space-y-3">
//                     {plan.features.map((feature, index) => (
//                       <li key={index} className="flex items-start">
//                         <FiCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg">
//                     Choose {plan.name} Plan
//                   </button>
//                 </motion.div>
//               ))}
//             </motion.section>
//           </div>

//           {/* Right Column - Form and Key Features */}
//           <div className="space-y-8">
//             {/* Form Component */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="sticky top-6"
//             >
//               <FormComponent />
//             </motion.div>

//             {/* Key Features */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-lg"
//             >
//               <h3 className="text-xl font-bold mb-4">Why Choose This Course?</h3>
//               <ul className="space-y-3">
//                 {[
//                   "Top 1% JEE Faculty",
//                   "Personalized Attention",
//                   "Comprehensive Study Material",
//                   "Regular Performance Tracking",
//                   "Flexible Learning Options",
//                   "Proven Results"
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-start">
//                     <FiCheck className="mt-1 mr-3 flex-shrink-0" />
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>

//             {/* Batch Details */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 1 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
//             >
//               <h3 className="text-xl font-bold mb-4 flex items-center">
//                 <FiBook className="mr-2 text-blue-600 dark:text-blue-400" />
//                 Batch Details
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Start Date</p>
//                   <p className="font-medium">June 9, 2025</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Class Schedule</p>
//                   <p className="font-medium">Mon-Fri: 4 PM - 7 PM</p>
//                   <p className="font-medium">Sat: Mock Tests</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500 dark:text-gray-400 text-sm">Medium</p>
//                   <p className="font-medium">English & Hindi</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <section className="bg-gray-100 dark:bg-gray-800 py-16">
//         <div className="container mx-auto px-6">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             What Our Students Say
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 quote: "This course transformed my preparation strategy. The faculty's approach to problem-solving is exceptional.",
//                 name: "Rahul Sharma",
//                 result: "JEE Advanced Rank: 487"
//               },
//               {
//                 quote: "The personalized attention and regular tests helped me identify my weak areas and improve systematically.",
//                 name: "Priya Patel",
//                 result: "JEE Advanced Rank: 1123"
//               },
//               {
//                 quote: "The study material is comprehensive and the doubt-solving sessions are incredibly helpful.",
//                 name: "Amit Kumar",
//                 result: "JEE Advanced Rank: 756"
//               }
//             ].map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
//               >
//                 <div className="mb-4 text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i}>★</span>
//                   ))}
//                 </div>
//                 <p className="italic mb-6">"{testimonial.quote}"</p>
//                 <div>
//                   <p className="font-bold">{testimonial.name}</p>
//                   <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.result}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default AboutCourse;















import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUsers, FiLayers, FiBriefcase, FiAward } from 'react-icons/fi';
import React from 'react'
import { useLoaderData } from "react-router"
import FormComponent from "../ContactUs/FormComponent";
import WhatIs from './WhatIs';

function AboutCourse() {
  const courseDetail = useLoaderData();
  return (
    <div className='relative bg-white dark:bg-gray-900 transition-colors duration-300 pb-0'>
      <section className="flex flex-col md:flex-row items-center px-4 sm:px-6 py-8 sm:py-12 md:py-20 sm:pt-28 pt-24 container mx-auto gap-2 md:h-full relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 opacity-40 dark:opacity-60 backdrop-blur-sm z-0" />
        <div className={`absolute opacity-15 bg-[url('${courseDetail.bgImage}')] inset-0 bg-cover bg-center`} />
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left w-full md:w-1/2 px-2 sm:px-4 z-10 md:ml-10 lg:ml-20 pt-7"
        >
          <h1 className='mb-5 text-3xl font-bold'>
            {courseDetail.title}
          </h1>
          <h1 className="font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            {courseDetail.detail.paragraph1}
          </h1>
          <h1 className="font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white" dangerouslySetInnerHTML={{ __html: courseDetail.detail.paragraph2 }} />
        </motion.div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-2 sm:px-4 z-10 mb-2 sm:mb-0 relative">
          <div className="relative w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] perspective-[800px] sm:perspective-[1000px]">
            <motion.div
              className=""
            >
              <FormComponent />
            </motion.div>
          </div>
        </div>


      </section>

      <section className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-12">
          All the topics will be covered in detail and also include:
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
          {courseDetail.coveringTopics.map((topic, index) => {
            const total = courseDetail.coveringTopics.length;

            // 🧠 Determine the longest title length
            const longestTitleLength = Math.max(...courseDetail.coveringTopics.map(t => t.title.length));

            // 🎯 Dynamically adjust size based on longest title
            let baseSize = 8; // base size in rem
            if (longestTitleLength > 20) baseSize = 10;
            else if (longestTitleLength > 15) baseSize = 9;
            else if (longestTitleLength > 10) baseSize = 8.5;
            const middleIndex = Math.floor(total / 2);

            // 🔄 Scale based on position
            let scale = 1;
            if (total % 2 === 1) {
              scale = 1.2 - 0.1 * Math.abs(index - middleIndex);
            } else {
              const leftMid = middleIndex - 1;
              const rightMid = middleIndex;
              if (index === leftMid || index === rightMid) scale = 1.15;
              else if (index === leftMid - 1 || index === rightMid + 1) scale = 1.05;
              else scale = 1;
            }

            return (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 2 + Math.random(),
                    ease: "easeInOut",
                  },
                }}
                className="relative flex flex-col items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 bg-gradient-to-br from-white/30 to-gray-200/20 dark:from-gray-800/50 dark:to-gray-700/30 shadow-md hover:shadow-lg transition-all duration-300 text-center px-4 py-4"
                style={{
                  width: `${baseSize}rem`,
                  height: `${baseSize}rem`,
                  transform: `scale(${scale})`,
                }}
              >
                <div className="text-4xl mb-2">{topic.icon}</div>
                <p className="text-sm font-medium break-words leading-tight">
                  {topic.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
      <WhatIs />
    </div>
  )
}

export default AboutCourse