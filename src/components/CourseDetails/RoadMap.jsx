// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLoaderData } from "react-router-dom";

// export default function RoadMap() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const roadmapData = useLoaderData();

//   return (
//     <section className="relative w-full px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 inline-block">
//             Roadmap to Learn {roadmapData.whatIs.name}
//           </h2>
//         </div>

//         {/* Background Curve Line */}
//         <div className="absolute inset-0 top-1/2 transform -translate-y-1/2 pointer-events-none z-0 hidden md:block">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <defs>
//               <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#3b82f6" />
//                 <stop offset="50%" stopColor="#8b5cf6" />
//                 <stop offset="100%" stopColor="#ec4899" />
//               </linearGradient>
//             </defs>
//             <path 
//               d="M0,50 
//                  C10,10 20,90 30,50
//                  C40,10 50,90 60,50
//                  C70,10 80,90 90,50
//                  C100,10 100,90 100,50" 
//               stroke="url(#gradient)" 
//               strokeWidth="1.5" 
//               fill="none"
//               strokeDasharray="4 4"
//               opacity="0.3"
//             />
//           </svg>
//         </div>

//         {/* Roadmap Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 relative z-10">
//           {roadmapData.roadMap.map((module, index) => {
//             const row = Math.floor(index / 4);
//             const isEvenRow = row % 2 === 0;
//             const positionInRow = index % 4;
//             const delay = index * 0.1;

//             const alignmentClass = isEvenRow 
//               ? positionInRow % 2 === 0 ? "md:mt-0" : "md:mt-16" 
//               : positionInRow % 2 === 0 ? "md:mt-16" : "md:mt-0";

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay }}
//                 className={`relative flex flex-col items-center text-center ${alignmentClass}`}
//               >
//                 {/* Main Icon Button */}
//                 <motion.div
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                   onMouseEnter={() => setActiveIndex(activeIndex === index ? null : index)}
//                   onMouseLeave={() => setActiveIndex(null)}
//                   className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-gradient-to-tr ${module.color} text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer`}
//                 >
//                   {module.icon}
//                   <div className="absolute -inset-2 rounded-full border-2 border-white/30 animate-ping opacity-0 hover:opacity-100 transition-opacity"></div>
//                 </motion.div>

//                 {/* Title & Description */}
//                 <div className="mt-4 px-2">
//                   <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//                     {module.title}
//                   </h3>
//                   <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
//                     {module.description}
//                   </p>
//                 </div>

//                 {/* Expandable Detail */}
//                 <AnimatePresence>
//                   {activeIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10, scale: 0.9 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: -10, scale: 0.9 }}
//                       className="absolute top-full mt-2 w-[90vw] max-w-sm bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 text-left backdrop-blur-sm z-50"
//                     >
//                       <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-t border-l border-gray-200 dark:border-gray-700"></div>
//                       <h4 className="font-semibold text-base mb-2 flex items-center">
//                         <span className={`bg-gradient-to-r ${module.color} rounded-full w-5 h-5 flex items-center justify-center text-white mr-2 text-sm`}>
//                           {module.icon}
//                         </span>
//                         {module.title} Details
//                       </h4>
//                       <ul className="space-y-2">
//                         {module.items.map((item, i) => (
//                           <li key={i} className="flex items-start">
//                             <span className={`flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-gradient-to-br ${module.color} text-white flex items-center justify-center text-[10px] mr-2`}>
//                               ✓
//                             </span>
//                             <span className="text-xs text-gray-700 dark:text-gray-300">{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Decorative Blur Lights */}
//         <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-10 -z-10" />
//         <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-10 -z-10" />
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderData } from "react-router-dom";

export default function RoadMap() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [connectionsVisible, setConnectionsVisible] = useState(false);
  const roadmapData = useLoaderData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setConnectionsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 inline-block">
            Roadmap to Learn {roadmapData.whatIs.name}
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Top Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 relative z-10">
            {roadmapData.roadMap.slice(0, 4).map((module, index) => (
              <RoadmapItem 
                key={index}
                module={module}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                position="top"
                totalItems={roadmapData.roadMap.length}
              />
            ))}
          </div>

          {/* Central 3D Pipeline */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-2 hidden md:block z-0">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-full mix-blend-overlay"></div>
                <div className="absolute inset-0 border-t border-b border-white/20 rounded-full"></div>
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "linear",
                      repeatDelay: 0
                    }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/30 via-white/10 to-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Connection Pipes */}
          {connectionsVisible && (
            <div className="absolute left-0 right-0 top-0 bottom-0 hidden md:block pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <marker 
                    id="pipeEnd" 
                    markerWidth="5" 
                    markerHeight="5" 
                    refX="2.5" 
                    refY="2.5"
                    orient="auto"
                  >
                    <circle cx="2.5" cy="2.5" r="2" fill="url(#pipeGradient)" />
                  </marker>
                </defs>
                
                {/* Main horizontal pipeline */}
                <path
                  d="M10,50 L90,50"
                  stroke="url(#pipeGradient)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Vertical connection pipes */}
                {roadmapData.roadMap.map((_, index) => {
                  const col = index % 4;
                  const x = 12.5 + (col * 25);
                  const isTopRow = index < 4;
                  const y1 = isTopRow ? 20 : 80; // Adjusted connection points
                  const y2 = 50;
                  
                  return (
                    <motion.path
                      key={index}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      d={`M${x},${y1} L${x},${y2}`}
                      stroke="url(#pipeGradient)"
                      strokeWidth="0.8"
                      fill="none"
                      strokeLinecap="round"
                      markerEnd="url(#pipeEnd)"
                    />
                  );
                })}
              </svg>
            </div>
          )}

          {/* Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 relative z-10">
            {roadmapData.roadMap.slice(4, 8).map((module, index) => (
              <RoadmapItem 
                key={index + 4}
                module={module}
                index={index + 4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                position="bottom"
                totalItems={roadmapData.roadMap.length}
              />
            ))}
          </div>
        </div>

        {/* Decorative Blur Lights */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-10 -z-10" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-10 -z-10" />
      </div>
    </section>
  );
}

const RoadmapItem = ({ module, index, activeIndex, setActiveIndex, position, totalItems }) => {
  const delay = index * 0.1;
  const zIndexOffset = position === "top" ? totalItems - index : index;

  return (
    <motion.div
      initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="relative flex flex-col items-center text-center"
      style={{ zIndex: zIndexOffset }} // Dynamic z-index based on position
    >
      {/* Connection Dot */}
      <div className="absolute hidden md:block"
        style={{
          top: position === "top" ? "calc(100% + 16px)" : "auto",
          bottom: position === "bottom" ? "calc(100% + 16px)" : "auto",
          left: "50%",
          transform: "translateX(-50%)",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          zIndex: 5,
          boxShadow: "0 0 0 4px rgba(255,255,255,0.2)"
        }}
      />

      {/* Main Icon Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
        className={`relative z-20 w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-gradient-to-tr ${module.color} text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer`}
      >
        {module.icon}
        <div className="absolute -inset-2 rounded-full border-2 border-white/30 animate-ping opacity-0 hover:opacity-100 transition-opacity"></div>
      </motion.div>

      {/* Title & Description */}
      <div className="mt-4 px-2">
        <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {module.title}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
          {module.description}
        </p>
      </div>

      {/* Expandable Detail */}
      <AnimatePresence>
        {activeIndex === index && (
          <motion.div
            initial={{ opacity: 0, y: position === "top" ? 10 : -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: position === "top" ? 10 : -10, scale: 0.9 }}
            className={`absolute ${position === "top" ? "top-full mt-4" : "bottom-full mb-4"} w-[90vw] max-w-sm bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 text-left backdrop-blur-sm`}
            style={{
              zIndex: 1000 + index // Ensure tooltip is above everything
            }}
          >
            <div className={`absolute ${position === "top" ? "-top-2" : "-bottom-2"} left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 ${position === "top" ? "border-t border-l" : "border-b border-r"} border-gray-200 dark:border-gray-700`}></div>
            <h4 className="font-semibold text-base mb-2 flex items-center">
              <span className={`bg-gradient-to-r ${module.color} rounded-full w-5 h-5 flex items-center justify-center text-white mr-2 text-sm`}>
                {module.icon}
              </span>
              {module.title} Details
            </h4>
            <ul className="space-y-2">
              {module.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className={`flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-gradient-to-br ${module.color} text-white flex items-center justify-center text-[10px] mr-2`}>
                    ✓
                  </span>
                  <span className="text-xs text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};