// import { useEffect, useRef, useState } from "react"
// import {
//   BookOpen,
//   Code2,
//   Bug,
//   List,
//   Globe,
//   TestTube,
//   Database,
//   FileText,
//   CheckCircle,
//   Clock,
// } from "lucide-react"



// const roadmapData = [
//   {
//     id: "1",
//     title: "Introduction",
//     description: "Foundation of SAP ABAP development",
//     topics: [
//       "What is SAP?",
//       "What is SAP ABAP?",
//       "What is SAP HANA?",
//       "SAP course",
//       "SAP certification",
//       "SAP jobs in India",
//       "SAP jobs in nagpur",
//     ],
//     icon: <BookOpen className="w-6 h-6" />,
//     color: "from-blue-500 to-blue-600",
//     position: { x: 10, y: 20 },
//   },
//   {
//     id: "2",
//     title: "ABAP Object-Oriented Programming (OOP)",
//     description: "Master OOP concepts in ABAP",
//     topics: [
//       "Understand and implement ABAP OOP concepts",
//       "Create and use classes, interfaces, and inheritance",
//     ],
//     icon: <Code2 className="w-6 h-6" />,
//     color: "from-purple-500 to-purple-600",
//     position: { x: 25, y: 60 },
//   },
//   {
//     id: "3",
//     title: "Debugging and Performance Optimization",
//     description: "Advanced debugging and optimization techniques",
//     topics: [
//       "Master ABAP debugging techniques",
//       "Learn strategies for optimizing ABAP code and database queries",
//     ],
//     icon: <Bug className="w-6 h-6" />,
//     color: "from-red-500 to-red-600",
//     position: { x: 50, y: 30 },
//   },
//   {
//     id: "4",
//     title: "ALV(ABAP List Viewer) Programming",
//     description: "Create dynamic reports and interfaces",
//     topics: [
//       "Develop reports using ALV Grid and ALV List",
//       "Customize ALV output according to business requirements",
//     ],
//     icon: <List className="w-6 h-6" />,
//     color: "from-green-500 to-green-600",
//     position: { x: 75, y: 70 },
//   },
//   {
//     id: "5",
//     title: "Web Dynpro ABAP",
//     description: "Build modern web applications",
//     topics: [
//       "Learn Web Dynpro ABAP for developing web-based applications",
//       "Understand MVC (Model-View-Controller) architecture in Web Dynpro",
//     ],
//     icon: <Globe className="w-6 h-6" />,
//     color: "from-cyan-500 to-cyan-600",
//     position: { x: 15, y: 85 },
//   },
//   {
//     id: "6",
//     title: "ABAP Unit Testing",
//     description: "Implement robust testing strategies",
//     topics: [
//       "Implement unit testing using ABAP Unit",
//       "Understand the importance of test-driven development (TDD)",
//     ],
//     icon: <TestTube className="w-6 h-6" />,
//     color: "from-orange-500 to-orange-600",
//     position: { x: 40, y: 90 },
//   },
//   {
//     id: "7",
//     title: "SAP Gateway and OData Services",
//     description: "Connect SAP with external systems",
//     topics: [
//       "Learn SAP Gateway for building OData services",
//       "Enable communication between SAP systems and external applications",
//     ],
//     icon: <Database className="w-6 h-6" />,
//     color: "from-indigo-500 to-indigo-600",
//     position: { x: 70, y: 45 },
//   },
//   {
//     id: "8",
//     title: "Resume Preparation",
//     description: "Professional career development",
//     topics: [
//       "Include keywords",
//       "How to prepare resume",
//       "How to prepare resume for freshers",
//       "Show impact",
//       "Include soft skills",
//       "Be unique",
//     ],
//     icon: <FileText className="w-6 h-6" />,
//     color: "from-pink-500 to-pink-600",
//     position: { x: 85, y: 15 },
//   },
// ]

// export default function SAPABAPRoadmap() {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [completedItems, setCompletedItems] = useState(new Set());
//   const [isMobile, setIsMobile] = useState(false);

//   // Check for mobile view
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);
//     return () => window.removeEventListener('resize', checkIfMobile);
//   }, []);

//   const toggleCompletion = (id) => {
//     const newCompleted = new Set(completedItems);
//     newCompleted.has(id) ? newCompleted.delete(id) : newCompleted.add(id);
//     setCompletedItems(newCompleted);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
//       <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
//         <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
//           SAP ABAP Developer Roadmap
//         </h1>
//         <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Your journey to becoming an SAP ABAP expert starts here!
//         </p>
//         <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mt-4 md:mt-6">
//           <div className="flex items-center px-3 py-1 border rounded-full text-xs md:text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600">
//             <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
//             {roadmapData.length} Modules
//           </div>
//           <div className="flex items-center px-3 py-1 border rounded-full text-xs md:text-sm text-gray-700 dark:text-gray-300 dark:border-gray-600">
//             <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
//             {completedItems.size} Completed
//           </div>
//         </div>
//       </div>

//       {/* Desktop Road View */}
//       {!isMobile && (
//         <DesktopRoadView 
//           selectedItem={selectedItem}
//           setSelectedItem={setSelectedItem}
//           completedItems={completedItems}
//           toggleCompletion={toggleCompletion}
//         />
//       )}

//       {/* Mobile Timeline View */}
//       {isMobile && (
//         <MobileTimelineView 
//           selectedItem={selectedItem}
//           setSelectedItem={setSelectedItem}
//           completedItems={completedItems}
//           toggleCompletion={toggleCompletion}
//         />
//       )}

//       {/* Progress Section */}
//       <ProgressSection 
//         completedItems={completedItems} 
//         roadmapData={roadmapData} 
//       />
//     </div>
//   );
// }

// function DesktopRoadView({ selectedItem, setSelectedItem, completedItems, toggleCompletion }) {
//   const pathRef = useRef(null);
//   const [positions, setPositions] = useState([]);

//   useEffect(() => {
//     const updatePositions = () => {
//       const path = pathRef.current;
//       if (!path) return;

//       const totalLength = path.getTotalLength();
//       const newPoints = roadmapData.map((_, index) => {
//         const progress = index / (roadmapData.length - 1);
//         const point = path.getPointAtLength(progress * totalLength);
//         return { x: point.x, y: point.y };
//       });

//       setPositions(newPoints);
//     };

//     updatePositions();
//     window.addEventListener("resize", updatePositions);
//     return () => window.removeEventListener("resize", updatePositions);
//   }, [roadmapData.length]);

//   return (
//     <div className="relative w-full h-[800px] md:h-[1000px] hidden md:block">
//       <div className="absolute inset-0 w-full h-full overflow-hidden">
//         <svg 
//           className="w-full h-full" 
//           viewBox="0 0 1000 1000" 
//           preserveAspectRatio="none"
//         >
//           <defs>
//             <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#6D28D9" />
//               <stop offset="50%" stopColor="#4F46E5" />
//               <stop offset="100%" stopColor="#0891B2" />
//             </linearGradient>
//             <pattern id="roadDots" patternUnits="userSpaceOnUse" width="10" height="10">
//               <circle cx="5" cy="5" r="1" fill="#ffffff" fillOpacity="0.7" />
//             </pattern>
//           </defs>
          
//           <path
//             ref={pathRef}
//             d="M 50 200 Q 200 150 350 200 Q 500 250 450 400 Q 400 550 550 600 Q 700 650 650 800"
//             stroke="url(#roadGradient)"
//             strokeWidth="60"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
          
//           <path
//             d="M 50 200 Q 200 150 350 200 Q 500 250 450 400 Q 400 550 550 600 Q 700 650 650 800"
//             stroke="url(#roadDots)"
//             strokeWidth="4"
//             fill="none"
//             strokeDasharray="10,15"
//             strokeLinecap="round"
//           />
          
//           <path
//             d="M 50 200 Q 200 150 350 200 Q 500 250 450 400 Q 400 550 550 600 Q 700 650 650 800"
//             stroke="#ffffff"
//             strokeWidth="4"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeDasharray="0"
//           />
//         </svg>
//       </div>

//       <div className="relative z-10">
//         {positions.map((pos, index) => {
//           const item = roadmapData[index];
//           return (
//             <RoadItem 
//               key={item.id}
//               item={item}
//               index={index}
//               pos={pos}
//               selectedItem={selectedItem}
//               setSelectedItem={setSelectedItem}
//               completedItems={completedItems}
//               toggleCompletion={toggleCompletion}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function MobileTimelineView({ selectedItem, setSelectedItem, completedItems, toggleCompletion }) {
//   return (
//     <div className="md:hidden space-y-6">
//       {roadmapData.map((item, index) => (
//         <div 
//           key={item.id}
//           className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
//         >
//           <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-md">
//             {index + 1}
//           </div>
          
//           <div className="flex items-start justify-between mb-4 pl-4">
//             <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center text-white shadow-lg`}>
//               {item.icon}
//             </div>
//             <button
//               onClick={() => toggleCompletion(item.id)}
//               className={`px-3 py-1 rounded-lg text-xs font-medium transition-all shadow-sm ${
//                 completedItems.has(item.id)
//                   ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                   : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
//               }`}
//             >
//               {completedItems.has(item.id) ? "✓ Done" : "Mark Complete"}
//             </button>
//           </div>

//           <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 pl-4">{item.title}</h3>
//           <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 pl-4">{item.description}</p>
          
//           <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
//             <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
//               <BookOpen className="w-3 h-3 mr-2" /> Key Topics:
//             </h4>
//             <ul className="space-y-1">
//               {item.topics.map((topic, topicIndex) => (
//                 <li 
//                   key={topicIndex} 
//                   className="text-xs text-gray-700 dark:text-gray-300 flex items-start bg-white dark:bg-gray-800 p-2 rounded-md"
//                 >
//                   <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
//                   {topic}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function RoadItem({ item, index, pos, selectedItem, setSelectedItem, completedItems, toggleCompletion }) {
//   return (
//     <div
//       className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
//       style={{ left: pos.x, top: pos.y }}
//     >
//       <div
//         className={`relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br ${item.color} 
//           shadow-lg cursor-pointer transition-all duration-300 
//           hover:scale-110 hover:shadow-xl group-hover:rotate-3
//           ${completedItems.has(item.id) ? "ring-4 ring-green-400 ring-opacity-80" : ""}
//           ${selectedItem === item.id ? "scale-110 shadow-xl -translate-y-2" : ""}`}
//         onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
//       >
//         <div className="absolute inset-0 rounded-full bg-white bg-opacity-20 backdrop-blur-sm" />
//         <div className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl">
//           {item.icon}
//         </div>

//         {completedItems.has(item.id) && (
//           <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full flex items-center justify-center shadow-md">
//             <CheckCircle className="w-4 h-4 text-white" />
//           </div>
//         )}

//         <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
//           <div className="px-2 py-1 rounded-full text-xs font-bold bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm">
//             {index + 1}
//           </div>
//         </div>
//       </div>

//       <div
//         className={`absolute top-24 left-1/2 transform -translate-x-1/2 w-72 md:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl transition-all duration-300 z-10 p-4 border border-gray-200 dark:border-gray-700
//         ${selectedItem === item.id
//           ? "opacity-100 visible translate-y-0"
//           : "opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"}`}
//       >
//         <div className="flex items-start justify-between mb-3">
//           <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center text-white shadow-md`}>
//             {item.icon}
//           </div>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               toggleCompletion(item.id);
//             }}
//             className={`px-3 py-1 rounded-md text-xs font-medium transition-all shadow-sm ${
//               completedItems.has(item.id)
//                 ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                 : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
//             }`}
//           >
//             {completedItems.has(item.id) ? "✓ Completed" : "Complete"}
//           </button>
//         </div>

//         <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
//         <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">{item.description}</p>
        
//         <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
//           <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
//             <BookOpen className="w-3 h-3 mr-1" /> Key Topics:
//           </h4>
//           <ul className="space-y-1">
//             {item.topics.map((topic, topicIndex) => (
//               <li 
//                 key={topicIndex} 
//                 className="text-xs text-gray-700 dark:text-gray-300 flex items-start bg-white dark:bg-gray-800 p-1.5 rounded"
//               >
//                 <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 mr-1.5 flex-shrink-0" />
//                 {topic}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProgressSection({ completedItems, roadmapData }) {
//   return (
//     <div className="mt-12 md:mt-20 text-center">
//       <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
//         <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Your Learning Journey</h3>
        
//         <div className="flex items-center justify-between mb-1 md:mb-2">
//           <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300">
//             Starting Point
//           </span>
//           <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300">
//             ABAP Expert
//           </span>
//         </div>
        
//         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3 mb-3 md:mb-4">
//           <div
//             className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 h-2 md:h-3 rounded-full transition-all duration-700 shadow-inner"
//             style={{ width: `${(completedItems.size / roadmapData.length) * 100}%` }}
//           />
//         </div>
        
//         <div className="flex justify-between items-center">
//           <div className="text-left">
//             <p className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
//               {Math.round((completedItems.size / roadmapData.length) * 100)}%
//             </p>
//             <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Progress</p>
//           </div>
          
//           <div className="text-right">
//             <p className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
//               {roadmapData.length - completedItems.size}
//             </p>
//             <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Modules Left</p>
//           </div>
//         </div>
        
//         <button 
//           className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-sm md:text-base font-medium shadow hover:shadow-md transition-all"
//           onClick={() => {
//             const firstIncomplete = roadmapData.find(item => !completedItems.has(item.id));
//             if (firstIncomplete) {
//               // Implement scroll to element logic here
//               console.log("Scroll to", firstIncomplete.id);
//             }
//           }}
//         >
//           Continue Learning
//         </button>
//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const RoadMap = () => {
//   const [activeSection, setActiveSection] = useState(0);
//   const [isHovering, setIsHovering] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);

//   const sections = [
//     {
//       title: "Introduction",
//       items: [
//         "What is SAP?",
//         "What is SAP ABAP?",
//         "What is SAP HANA?",
//         "SAP course overview",
//         "SAP certification paths",
//         "SAP job market in India",
//         "SAP opportunities in Nagpur"
//       ],
//       color: "bg-blue-500",
//       icon: "📚",
//       description: "Foundation of SAP knowledge"
//     },
//     {
//       title: "Web Dynpro ABAP",
//       items: [
//         "Develop web-based applications with Web Dynpro ABAP",
//         "Master MVC (Model-View-Controller) architecture",
//         "Create UI components and controllers",
//         "Implement navigation between views"
//       ],
//       color: "bg-purple-500",
//       icon: "🌐",
//       description: "Web application development in SAP"
//     },
//     {
//       title: "ABAP OOP",
//       items: [
//         "Implement ABAP Object-Oriented Programming",
//         "Create and use classes and interfaces",
//         "Understand inheritance and polymorphism",
//         "Apply encapsulation principles"
//       ],
//       color: "bg-green-500",
//       icon: "🧩",
//       description: "Modern ABAP development techniques"
//     },
//     {
//       title: "Debugging & Optimization",
//       items: [
//         "Master ABAP debugging techniques",
//         "Optimize ABAP code performance",
//         "Improve database query efficiency",
//         "Analyze runtime statistics"
//       ],
//       color: "bg-yellow-500",
//       icon: "🔍",
//       description: "Ensure code quality and performance"
//     },
//     {
//       title: "ALV Programming",
//       items: [
//         "Develop reports using ALV Grid",
//         "Create ALV List displays",
//         "Customize ALV output formats",
//         "Implement interactive ALV features"
//       ],
//       color: "bg-red-500",
//       icon: "📊",
//       description: "Reporting solutions in SAP"
//     },
//     {
//       title: "ABAP Unit Testing",
//       items: [
//         "Implement unit testing with ABAP Unit",
//         "Apply test-driven development (TDD)",
//         "Create test classes and methods",
//         "Analyze test coverage"
//       ],
//       color: "bg-indigo-500",
//       icon: "🧪",
//       description: "Quality assurance in ABAP"
//     },
//     {
//       title: "SAP Gateway & OData",
//       items: [
//         "Build OData services with SAP Gateway",
//         "Enable SAP-external communication",
//         "Create RESTful APIs",
//         "Consume OData services"
//       ],
//       color: "bg-pink-500",
//       icon: "🔗",
//       description: "Integration technologies"
//     },
//     {
//       title: "Career Preparation",
//       items: [
//         "Optimize resume with SAP keywords",
//         "Highlight project impact and achievements",
//         "Showcase technical and soft skills",
//         "Fresher-specific interview strategies"
//       ],
//       color: "bg-teal-500",
//       icon: "📝",
//       description: "Launch your SAP career"
//     }
//   ];

//   const handleNext = () => {
//     if (activeSection < sections.length - 1) {
//       setActiveSection((prev) => prev + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (activeSection > 0) {
//       setActiveSection((prev) => prev - 1);
//     }
//   };

//   const progress = ((activeSection + 1) / sections.length) * 100;

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <motion.h1 
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
//             >
//               SAP ABAP Learning Roadmap
//             </motion.h1>
//             <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//               Your guided path to becoming an SAP ABAP expert
//             </p>
//           </div>
//           <button 
//             onClick={() => setDarkMode(!darkMode)}
//             className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
//           >
//             {darkMode ? '☀️' : '🌙'}
//           </button>
//         </div>

//         {/* Timeline Progress Bar */}
//         <div className="relative mb-12">
//           <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
//             <motion.div 
//               className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600`}
//               initial={{ width: 0 }}
//               animate={{ width: `${progress}%` }}
//               transition={{ duration: 0.6 }}
//             />
//           </div>
//           <div className="absolute -bottom-8 left-0 right-0 flex justify-between">
//             <span className="text-sm">Getting Started</span>
//             <span className="text-sm">{Math.round(progress)}% Complete</span>
//             <span className="text-sm">Career Ready</span>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Timeline Navigation - Desktop */}
//           <div className="hidden lg:block w-1/4">
//             <div className="relative">
//               <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              
//               {sections.map((section, index) => (
//                 <div 
//                   key={index}
//                   className="relative pl-10 pb-8"
//                   onMouseEnter={() => setIsHovering(index)}
//                   onMouseLeave={() => setIsHovering(null)}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer transition-all duration-300 ${section.color} ${index === activeSection ? 'ring-4 ring-opacity-50 ring-current' : ''}`}
//                     onClick={() => setActiveSection(index)}
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     {section.icon}
//                   </motion.div>
//                   <AnimatePresence>
//                     {(isHovering === index || index === activeSection) && (
//                       <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 20 }}
//                         transition={{ duration: 0.2 }}
//                         className={`ml-16 p-3 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} absolute z-10 w-64`}
//                       >
//                         <h3 className="font-bold">{section.title}</h3>
//                         <p className="text-sm mt-1">{section.description}</p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Current Section Content */}
//           <div className="lg:w-2/4">
//             <motion.div
//               key={activeSection}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`rounded-xl overflow-hidden shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
//             >
//               <div className={`p-6 flex items-center gap-4 ${sections[activeSection].color} text-white`}>
//                 <motion.div 
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 1, repeat: 0 }}
//                   className="text-3xl"
//                 >
//                   {sections[activeSection].icon}
//                 </motion.div>
//                 <div>
//                   <h2 className="text-2xl font-bold">{sections[activeSection].title}</h2>
//                   <p className="text-sm opacity-90">{sections[activeSection].description}</p>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="mb-4 flex justify-between items-center">
//                   <h3 className="font-medium">Key Learning Points</h3>
//                   <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
//                     Step {activeSection + 1} of {sections.length}
//                   </span>
//                 </div>
//                 <ul className="space-y-3">
//                   {sections[activeSection].items.map((item, i) => (
//                     <motion.li
//                       key={i}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       className="flex items-start gap-3"
//                     >
//                       <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${sections[activeSection].color}`}>
//                         {i + 1}
//                       </span>
//                       <span className="text-sm">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between items-center mt-8">
//               <button
//                 onClick={handlePrev}
//                 disabled={activeSection === 0}
//                 className={`px-6 py-3 rounded-lg font-medium transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600 disabled:opacity-30' : 'bg-gray-200 hover:bg-gray-300 disabled:opacity-30'}`}
//               >
//                 ← Previous
//               </button>
//               <button
//                 onClick={handleNext}
//                 disabled={activeSection === sections.length - 1}
//                 className={`px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-30`}
//               >
//                 Next Step →
//               </button>
//             </div>
//           </div>

//           {/* Progress Overview - Desktop */}
//           <div className="hidden lg:block w-1/4">
//             <div className={`sticky top-4 p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//               <h3 className="font-bold mb-4">Roadmap Progress</h3>
//               <div className="space-y-6">
//                 {sections.map((section, index) => (
//                   <div 
//                     key={index} 
//                     className={`flex items-center gap-3 cursor-pointer ${index === activeSection ? 'font-bold' : ''}`}
//                     onClick={() => setActiveSection(index)}
//                   >
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${index <= activeSection ? section.color : darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                       {index <= activeSection ? '✓' : index + 1}
//                     </div>
//                     <span className={`text-sm ${index <= activeSection ? '' : darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
//                       {section.title}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
//                 <div className="flex justify-between mb-2">
//                   <span className="text-sm">Progress</span>
//                   <span className="text-sm font-medium">{Math.round(progress)}%</span>
//                 </div>
//                 <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
//                   <div 
//                     className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600`}
//                     style={{ width: `${progress}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="lg:hidden mt-12">
//           <div className="flex overflow-x-auto pb-4 gap-2">
//             {sections.map((section, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSection(index)}
//                 className={`flex-shrink-0 p-3 rounded-lg flex items-center gap-2 ${index === activeSection ? 'bg-blue-500 text-white' : darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
//               >
//                 <span>{section.icon}</span>
//                 <span className="text-sm">{section.title}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoadMap;



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoaderData } from "react-router-dom";

export default function RoadMap() {
  const [activeIndex, setActiveIndex] = useState(null);
  const roadmapData = useLoaderData();

  return (
    <section className="relative w-full px-4 py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600 inline-block">
            Roadmap to Learn {roadmapData.whatIs.name}
          </h2>
        </div>

        {/* Background Curve Line */}
        <div className="absolute inset-0 top-1/2 transform -translate-y-1/2 pointer-events-none z-0 hidden md:block">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path 
              d="M0,50 
                 C10,10 20,90 30,50
                 C40,10 50,90 60,50
                 C70,10 80,90 90,50
                 C100,10 100,90 100,50" 
              stroke="url(#gradient)" 
              strokeWidth="1.5" 
              fill="none"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 relative z-10">
          {roadmapData.roadMap.map((module, index) => {
            const row = Math.floor(index / 4);
            const isEvenRow = row % 2 === 0;
            const positionInRow = index % 4;
            const delay = index * 0.1;

            const alignmentClass = isEvenRow 
              ? positionInRow % 2 === 0 ? "md:mt-0" : "md:mt-16" 
              : positionInRow % 2 === 0 ? "md:mt-16" : "md:mt-0";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay }}
                className={`relative flex flex-col items-center text-center ${alignmentClass}`}
              >
                {/* Main Icon Button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setActiveIndex(activeIndex === index ? null : index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl bg-gradient-to-tr ${module.color} text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer`}
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
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className="absolute top-full mt-2 w-[90vw] max-w-sm bg-white dark:bg-gray-800 p-4 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 text-left backdrop-blur-sm z-50"
                    >
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 rotate-45 border-t border-l border-gray-200 dark:border-gray-700"></div>
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
          })}
        </div>

        {/* Decorative Blur Lights */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-10 -z-10" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-10 -z-10" />
      </div>
    </section>
  );
}