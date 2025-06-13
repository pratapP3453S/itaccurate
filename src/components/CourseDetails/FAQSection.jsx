import { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* FAQ Section */}
        <div className="lg:w-2/3">
          <div className="text-center lg:text-left mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 dark:text-white mb-4">Frequently Asked Questions</h1>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                placeholder="Search question here"
                className="w-full px-6 py-3 rounded-full border-2 border-indigo-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:border-indigo-500 focus:outline-none shadow-lg transition-all duration-300 hover:shadow-xl focus:shadow-2xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-4 top-3.5 h-6 w-6 text-indigo-400 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ${activeIndex === index ? 'ring-2 ring-indigo-500 dark:ring-indigo-400' : ''}`}
              >
                <button
                  className={`w-full px-6 py-5 text-left flex justify-between items-center transition-all duration-300 ${activeIndex === index ? 'bg-indigo-50 dark:bg-gray-800' : 'hover:bg-indigo-50 dark:hover:bg-gray-800'}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-indigo-900 dark:text-white">{faq.question}</h3>
                  <svg
                    className={`h-6 w-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-indigo-600 dark:text-indigo-400' : 'text-indigo-400 dark:text-gray-400'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="prose prose-indigo dark:prose-invert">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No result */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-block p-4 bg-indigo-100 dark:bg-gray-800 rounded-full mb-4">
                <svg className="h-12 w-12 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-white mb-2">No results found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try searching with different keywords</p>
            </div>
          )}
        </div>

        {/* Right Side Illustration */}
        <div className="hidden lg:block lg:w-1/3 relative">
          <div className="sticky top-24">
            <div className="relative group">
              <img
                src="./faq.jpg"
                alt="FAQ Illustration"
                className="w-full h-auto rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute -inset-4 bg-indigo-100 dark:bg-gray-700 rounded-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-6 bg-indigo-200 dark:bg-gray-600 rounded-2xl -z-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
            <div className="mt-6 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-indigo-900 dark:text-white mb-2">Need more help?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Can't find what you're looking for? Our team is happy to help!</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

const faqs = [
  {
    question: "What is an HR Business Analyst?",
    answer: "An HR Business Analyst is a professional who analyzes human resources data and processes to improve organizational performance. They work closely with both the HR team and business stakeholders to ensure that HR strategies align with business goals, focusing on areas such as workforce planning, recruitment, retention, and performance management.",
  },
  {
    question: "What skills are essential for an HR Business Analyst?",
    answer: "Key skills for an HR Business Analyst include proficiency in data analysis tools like Excel, Power BI, and Tableau, a deep understanding of HR processes (recruitment, employee engagement, retention), strong problem-solving abilities, business strategy awareness, and effective communication skills to present insights clearly.",
  },
  {
    question: "What tools are used by HR Business Analysts?",
    answer: "HR Business Analysts commonly use tools such as Excel for data analysis, Power BI and Tableau for data visualization, SQL for querying databases, and HR platforms like SAP SuccessFactors or Oracle HCM for workforce management and analytics.",
  },
  {
    question: "How does an HR Business Analyst contribute to organizational success?",
    answer: "HR Business Analysts help organizations by providing data-driven insights into employee performance, turnover rates, engagement levels, and other key HR metrics. They identify trends, improve HR processes, and suggest actionable strategies to align HR practices with overall business objectives, leading to better decision-making and enhanced organizational efficiency.",
  },
  {
    question: "What are the main responsibilities of an HR Business Analyst?",
    answer: "The main responsibilities include analyzing workforce data to identify trends, supporting HR in decision-making for recruitment and retention, improving HR processes, creating reports and dashboards for business stakeholders, and aligning HR strategies with organizational goals. They also work on projects that require optimizing HR systems and ensuring data accuracy.",
  },
  {
    question: "How do HR Business Analysts use data in their role?",
    answer: "HR Business Analysts use data to identify patterns in employee behavior, turnover rates, recruitment success, and engagement levels. They analyze this data to provide actionable insights for improving HR processes, designing better HR policies, and aligning workforce strategies with business objectives.",
  },
  {
    question: "What qualifications are required to become an HR Business Analyst?",
    answer: "While a background in HR or business analysis is helpful, key qualifications include expertise in data analysis, proficiency in relevant tools (Excel, Power BI, Tableau), and knowledge of HR practices. Certifications in HR Analytics, business analysis, or data analytics can be advantageous for a successful career in this field.",
  },
  {
    question: "How can I transition into an HR Business Analyst role?",
    answer: "To transition into an HR Business Analyst role, start by gaining experience in HR functions and developing strong data analysis skills. Learn tools like Excel, Power BI, or Tableau. You may also consider completing courses in HR analytics, business analysis, or data science. Gaining practical experience through internships or projects will help as well.",
  },
  {
    question: "What challenges does an HR Business Analyst face?",
    answer: "HR Business Analysts may face challenges such as managing large volumes of employee data, ensuring data accuracy, aligning HR insights with business strategies, and addressing complex HR issues like employee engagement or retention. They also have to deal with organizational resistance to change when suggesting new HR processes.",
  },
  {
    question: "What is the career outlook for HR Business Analysts?",
    answer: "The career outlook for HR Business Analysts is promising, as organizations increasingly recognize the value of data-driven decision-making in HR. The demand for professionals who can combine HR expertise with analytical skills is growing, particularly in companies looking to optimize their HR functions and improve employee performance.",
  },
];

export default FAQSection;