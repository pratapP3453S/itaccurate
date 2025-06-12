
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiUsers, FiLayers, FiBriefcase, FiAward } from 'react-icons/fi';
import FreeDemoForm from '../../ContactUs/FreeDemoForm';

function Banner() {
    const [showForm, setShowForm] = useState(false);
    // Feature cards data
    const features = [
        {
            icon: <FiUsers className="text-blue-600 dark:text-blue-400 text-xl sm:text-2xl" />,
            bgColor: "bg-blue-100 dark:bg-blue-900",
            title: "Expert Instructors",
            description: "Learn from industry professionals with years of practical experience."
        },
        {
            icon: <FiLayers className="text-purple-600 dark:text-purple-400 text-xl sm:text-2xl" />,
            bgColor: "bg-purple-100 dark:bg-purple-900",
            title: "Project-based Learning",
            description: "Gain hands-on experience by working on real-world projects."
        },
        {
            icon: <FiBriefcase className="text-green-600 dark:text-green-400 text-xl sm:text-2xl" />,
            bgColor: "bg-green-100 dark:bg-green-900",
            title: "Internship Opportunities",
            description: "Get placed in top companies with our internship programs."
        },
        {
            icon: <FiAward className="text-yellow-600 dark:text-yellow-400 text-xl sm:text-2xl" />,
            bgColor: "bg-yellow-100 dark:bg-yellow-900",
            title: "Certification Programs",
            description: "Earn recognized certifications to boost your career prospects."
        }
    ];

    const images = [
        {
            src: "./pic2.png",
            alt: "Character 1",
            size: "w-16 sm:w-20 md:w-24 lg:w-28",
            orbitRadius: "6rem", // Adjust for different screen sizes
            orbitRadiusSm: "8rem",
            orbitRadiusMd: "10rem",
            orbitRadiusLg: "12rem",
            initialAngle: 0
        },
        {
            src: "./pic2.png",
            alt: "Character 2",
            size: "w-16 sm:w-20 md:w-24 lg:w-28",
            orbitRadius: "6rem",
            orbitRadiusSm: "8rem",
            orbitRadiusMd: "10rem",
            orbitRadiusLg: "12rem",
            initialAngle: 60
        },
        {
            src: "./pic3.jpg",
            alt: "Character 3",
            size: "w-[11vh] sm:w-24 md:w-24 lg:w-32 h-[23vh] sm:h-[30vh] md:h-[37vh]",
            orbitRadius: "6rem",
            orbitRadiusSm: "8rem",
            orbitRadiusMd: "10rem",
            orbitRadiusLg: "12rem",
            initialAngle: 120
        },
        {
            src: "./pic3.jpg",
            alt: "Character 3",
            size: "w-[11vh] sm:w-24 md:w-24 lg:w-32 h-[23vh] sm:h-[30vh] md:h-[37vh]",
            orbitRadius: "6rem",
            orbitRadiusSm: "8rem",
            orbitRadiusMd: "10rem",
            orbitRadiusLg: "12rem",
            initialAngle: 180
        },
        {
            src: "./pic3.jpg",
            alt: "Character 3",
            size: "w-[11vh] sm:w-24 md:w-24 lg:w-32 h-[23vh] sm:h-[30vh] md:h-[37vh]",
            orbitRadius: "6rem",
            orbitRadiusSm: "8rem",
            orbitRadiusMd: "10rem",
            orbitRadiusLg: "12rem",
            initialAngle: 240
        },
        {
            src: "./pic3.jpg",
            alt: "Character 3",
            size: "w-[11vh] sm:w-24 md:w-24 lg:w-32 h-[23vh] sm:h-[30vh] md:h-[37vh]",
            orbitRadius: "6rem",
            orbitRadiusSm: "8rem",
            orbitRadiusMd: "10rem",
            orbitRadiusLg: "12rem",
            initialAngle: 300
        }
    ];

    return (

<div className="relative bg-white dark:bg-gray-900 transition-colors duration-300 pb-0 w-full">
  {showForm && <FreeDemoForm onClose={() => setShowForm(false)} />}

  {/* Banner Section */}
  <section className="flex flex-col-reverse md:flex-row items-center px-0 py-8 sm:py-12 md:py-20 sm:pt-28 pt-24 w-full gap-4 sm:gap-7 md:min-h-[70vh] relative overflow-visible">
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 opacity-40 dark:opacity-60 backdrop-blur-sm z-0" />

    {/* Left Text Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left w-full md:w-1/2 px-4 sm:px-6 lg:px-8 z-10 pt-7 md:ml-16"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
        LEARN WITH <span className="text-blue-600 dark:text-blue-400">IT ACCURATE</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 md:mb-8">
        FOR BEST JOB OPPORTUNITY
      </p>

      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#training-courses"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-blue-700 hoverhover:bg-blue-700 text-white font-medium sm:font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md text-sm sm:text-base"
        >
          📄 Explore Courses
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 font-medium sm:font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md text-sm sm:text-base"
          onClick={() => setShowForm(true)}
        >
          📧 Contact Now
        </motion.a>
      </div>
    </motion.div>

    {/* Right Image Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 mb-2 sm:mb-0 relative">
      <div className="relative w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] perspective-[800px] sm:perspective-[1000px]">
        <motion.div
          className="absolute inset-0 mt-[-20vh] md:mt-[-35vh]"
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => {
            const angle = image.initialAngle;
            const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 768;
            const radius = screenWidth < 640 ? 120 : screenWidth < 768 ? 150 : 200;

            return (
              <div
                key={index}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${image.size}`}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-xl shadow-lg border dark:border-gray-600"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  </section>

  {/* Feature Cards Section - Half Overlaid on Banner */}
  <div className="relative w-full md:-mt-16 lg:-mt-20 z-20">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.2), duration: 0.6 }}
            className="bg-white dark:bg-gradient-to-r dark:from-slate-700 dark:to-slate-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg sm:hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-2 sm:p-4 flex flex-col items-center text-center">
              <div className={`mb-3 sm:mb-4 p-2 sm:p-3 ${feature.bgColor} rounded-full`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>
    );
}

export default Banner;