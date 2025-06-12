import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaChartLine, FaAward } from "react-icons/fa";

const CertificationSection = ({ courseDetail }) => {
  const certificationPoints = [
    {
      icon: <FaCertificate className="text-white" />,
      title: "Recognized Certification",
      description: "IT Accurate training certification serves as proof of course completion, showcasing your proficiency in HR Business Analyst.",
    },
    {
      icon: <FaChartLine className="text-white" />,
      title: "Competitive Edge",
      description: "Our Business Analytics for HR certification equips you with valuable skills, making you more competitive in the HR analytics job market.",
    },
    {
      icon: <FaAward className="text-white" />,
      title: "100% Passing Guarantee",
      description: "We provide comprehensive guidance for global certifications including HR Analytics Certification with a passing guarantee.",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3 tracking-wider"
        >
          PROFESSIONAL CERTIFICATION
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-transparent bg-clip-text">
            {courseDetail.title.slice(5)} Certification
          </span>
        </motion.h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
        <div className="lg:w-1/2 space-y-8">
          {certificationPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 dark:border-indigo-500"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-500 dark:bg-indigo-600 flex items-center justify-center">
                    {point.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative max-w-7xl w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-lg dark:opacity-30"></div>
            <img
              src="./certificate.webp"
              alt="Certification"
              className="relative rounded-xl shadow-2xl border-4 border-white dark:border-zinc-700 w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CertificationSection;