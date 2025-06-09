import React from 'react';
import { useLoaderData } from "react-router-dom";

function WhatIs() {
    const courseDetail = useLoaderData();
    
    return (
        <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto">
            {/* Left section for image */}
            <div className="md:w-1/3 flex justify-center">
                <img 
                    src="/sap-image.jpg" 
                    alt="SAP ERP Software" 
                    className="rounded-lg shadow-lg object-cover w-full h-auto max-h-80"
                />
            </div>
            
            {/* Right section for text */}
            <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                    What is {courseDetail['best-sap-training'].whatIs.name}?
                </h2>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {courseDetail['best-sap-training'].whatIs.points.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-lg">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default WhatIs;
