import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiUser, FiPhone, FiBookOpen, FiMail } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export default function FreeDemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    // email: '',
    course: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [hovered, setHovered] = useState(false);

  const courses = [
    "SAP", "Salesforce", "AWS", "DevOps", 
    "Python", "AI & ML", "Data Analytics", 
    "Business Analytics", "ServiceNow", "HR Training"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', course: '' });
    }, 5000);
  };

  return (
    <section className="w-full max-w-md mx-auto my-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full opacity-10"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-100 dark:bg-purple-900 rounded-full opacity-10"
        />

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4"
          >
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Free Demo</span>
          </motion.h2>

          <AnimatePresence>
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200 p-4 rounded-lg mb-4 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full mb-2">
                  <FiCheck className="text-xl text-green-600 dark:text-green-300" />
                </div>
                <h3 className="font-semibold mb-1">Thank you!</h3>
                <p className="text-sm">We'll contact you shortly.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                      <FiUser className="mr-2 text-blue-500" /> Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                      <FiPhone className="mr-2 text-blue-500" /> Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="Your phone number"
                    />
                  </div>
{/* 
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                      <FiMail className="mr-2 text-blue-500" /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="your@email.com"
                    />
                  </div> */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center">
                      <FaGraduationCap className="mr-2 text-blue-500" /> Course
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a course</option>
                      {courses.map(course => (
                        <option key={course} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <motion.button
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  whileHover={{ scale: 1.02, boxShadow: "0 5px 15px -3px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium py-3 px-4 rounded-lg shadow-md relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Book Demo <FiArrowRight className={`ml-2 transition-transform ${hovered ? 'translate-x-1' : ''}`} />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
            We respect your privacy. No spam, guaranteed.
          </p>
        </div>
      </motion.div>
    </section>
  );
}


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FiArrowRight, FiCheck, FiUser, FiPhone, FiBookOpen, FiMail } from 'react-icons/fi';
// import { FaGraduationCap } from 'react-icons/fa';

// export default function FreeDemoForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     // email: '',
//     course: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   // Demo courses data with icons
//   const courses = [
//     { name: "SAP", icon: "📊" },
//     { name: "Salesforce", icon: "☁️" },
//     { name: "AWS", icon: "🌩️" },
//     { name: "DevOps", icon: "🔄" },
//     { name: "Python", icon: "🐍" },
//     { name: "AI & ML", icon: "🧠" },
//     { name: "Data Analytics", icon: "📈" },
//     { name: "Business Analytics", icon: "💼" },
//     { name: "ServiceNow", icon: "⏱️" },
//     { name: "HR Training", icon: "👥" },
//     { name: "Share Market", icon: "📉" },
//     { name: "Data Engineering", icon: "🛠️" }
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setFormData({ name: '', phone: '', course: '' });
//     }, 5000);
//   };

//   return (
//     <section className="w-full max-w-6xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="relative"
//       >
//         {/* Floating decorative elements */}
//         <motion.div 
//           animate={{ 
//             y: [0, -15, 0],
//             rotate: [0, 5, 0]
//           }}
//           transition={{ 
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="absolute -top-8 -left-8 text-6xl opacity-20 dark:opacity-10"
//         >
//           🎓
//         </motion.div>
//         <motion.div 
//           animate={{ 
//             y: [0, 15, 0],
//             rotate: [0, -5, 0]
//           }}
//           transition={{ 
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 0.5
//           }}
//           className="absolute -bottom-8 -right-8 text-6xl opacity-20 dark:opacity-10"
//         >
//           ✨
//         </motion.div>

//         <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 relative z-10">
//           {/* Glowing border effect */}
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 dark:opacity-10 rounded-2xl pointer-events-none"></div>
          
//           <div className="md:flex">
//             {/* Form side with animated background */}
//             <div className="md:w-full p-8 md:p-10 relative overflow-hidden">
//               <div className="absolute inset-0 overflow-hidden">
//                 <motion.div 
//                   animate={{
//                     x: [0, 100, 0],
//                     y: [0, 50, 0],
//                     rotate: [0, 5, 0]
//                   }}
//                   transition={{
//                     duration: 30,
//                     repeat: Infinity,
//                     ease: "linear"
//                   }}
//                   className="absolute -left-20 -top-20 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full opacity-10 blur-xl"
//                 ></motion.div>
//                 <motion.div 
//                   animate={{
//                     x: [0, -100, 0],
//                     y: [0, -50, 0],
//                     rotate: [0, -5, 0]
//                   }}
//                   transition={{
//                     duration: 25,
//                     repeat: Infinity,
//                     ease: "linear",
//                     delay: 0.5
//                   }}
//                   className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-100 dark:bg-purple-900 rounded-full opacity-10 blur-xl"
//                 ></motion.div>
//               </div>

//               <div className="relative z-10">
//                 <div className="text-center mb-8">
//                   <motion.h2 
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2"
//                   >
//                     Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Free Demo</span>
//                   </motion.h2>
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                     className="text-gray-600 dark:text-gray-300 max-w-md mx-auto"
//                   >
//                     Get expert guidance and kickstart your career today!
//                   </motion.p>
//                 </div>

//                 <AnimatePresence>
//                   {submitted ? (
//                     <motion.div
//                       key="success"
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200 p-6 rounded-xl mb-8 text-center"
//                     >
//                       <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full mb-4">
//                         <FiCheck className="text-2xl text-green-600 dark:text-green-300" />
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2">Thank you for your enquiry!</h3>
//                       <p>Our education counselor will contact you shortly to schedule your free demo session.</p>
//                     </motion.div>
//                   ) : (
//                     <motion.form
//                       key="form"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6 }}
//                       onSubmit={handleSubmit}
//                       className="space-y-6"
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.01 }}
//                         className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
//                       >
//                         <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium flex items-center" htmlFor="name">
//                           <FiUser className="mr-2 text-blue-500" /> Your Name
//                         </label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
//                           required
//                           placeholder="John Doe"
//                         />
//                       </motion.div>
                      
//                       <motion.div
//                         whileHover={{ scale: 1.01 }}
//                         className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
//                       >
//                         <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium flex items-center" htmlFor="phone">
//                           <FiPhone className="mr-2 text-blue-500" /> Phone Number
//                         </label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
//                           required
//                           placeholder="+1 234 567 8900"
//                         />
//                       </motion.div>
                      
//                       {/* <motion.div
//                         whileHover={{ scale: 1.01 }}
//                         className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
//                       >
//                         <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium flex items-center" htmlFor="email">
//                           <FiMail className="mr-2 text-blue-500" /> Email Address
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
//                           required
//                           placeholder="your@email.com"
//                         />
//                       </motion.div> */}
                      
//                       <motion.div
//                         whileHover={{ scale: 1.01 }}
//                         className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"
//                       >
//                         <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium flex items-center" htmlFor="course">
//                           <FaGraduationCap className="mr-2 text-blue-500" /> Select a Course
//                         </label>
//                         <select
//                           id="course"
//                           name="course"
//                           value={formData.course}
//                           onChange={handleChange}
//                           className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white appearance-none"
//                           required
//                         >
//                           <option value="">-- Select Your Desired Course --</option>
//                           {courses.map((course) => (
//                             <option key={course.name} value={course.name}>
//                               {course.icon} {course.name}
//                             </option>
//                           ))}
//                         </select>
//                       </motion.div>
                      
//                       <motion.button
//                         onHoverStart={() => setHovered(true)}
//                         onHoverEnd={() => setHovered(false)}
//                         whileHover={{ 
//                           scale: 1.02,
//                           boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
//                         }}
//                         whileTap={{ scale: 0.98 }}
//                         type="submit"
//                         className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg relative overflow-hidden group"
//                       >
//                         <span className="relative z-10 flex items-center justify-center">
//                           Book Free Demo Now 
//                           <motion.span
//                             animate={{
//                               x: hovered ? 5 : 0
//                             }}
//                             transition={{ type: "spring", stiffness: 500 }}
//                           >
//                             <FiArrowRight className="ml-2" />
//                           </motion.span>
//                         </span>
//                         <motion.span 
//                           initial={{ opacity: 0 }}
//                           animate={{ 
//                             opacity: hovered ? 1 : 0,
//                             x: hovered ? 0 : 100
//                           }}
//                           transition={{ duration: 0.3 }}
//                           className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"
//                         ></motion.span>
//                       </motion.button>
//                     </motion.form>
//                   )}
//                 </AnimatePresence>

//                 <motion.div 
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.8 }}
//                   className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400"
//                 >
//                   <p>100% free with no obligation. We respect your privacy.</p>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }