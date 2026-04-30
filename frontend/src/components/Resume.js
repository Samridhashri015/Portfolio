/**
 * Resume Component
 * Resume download section
 */

import React from 'react';

const Resume = ({ darkMode }) => {
  return (
    <section
      id="resume"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Resume
        </h2>

        {/* Resume Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Education */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 text-blue-500`}>
              Education
            </h3>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-lg`}>
              <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                B.Tech Computer Science
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                SRM Institute Of Science and Technology
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                Expected Graduation: 2027
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-3`}>
                CGPA: 9.2/10 | Relevant Coursework: Data Structures, Web Development, DBMS, OOP
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className={`text-2xl font-bold mb-6 text-blue-500`}>
              Experience & Internships
            </h3>
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-lg`}>
              <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Web Development Intern
              </h4>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                Tech Company / Startup
              </p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3`}>
                Jun 2024 - Aug 2024
              </p>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>• Developed responsive React components</li>
                <li>• Implemented REST APIs with Node.js</li>
                <li>• Optimized database queries in MongoDB</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6 rounded-lg mb-12`}>
          <h3 className={`text-2xl font-bold mb-6 text-blue-500`}>
            Certifications
          </h3>
          <div className="space-y-3">
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              • React.js Fundamentals - Udemy (2024)
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              • Full-Stack Web Development - Coursera (2024)
            </p>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              • JavaScript Advanced - freeCodeCamp (2023)
            </p>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center">
          <a
            href="/resume.pdf"
            download="Samridha_Shri_Resume.pdf"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download Resume (PDF)
          </a>
          <p className={`mt-4 text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Note: Place your resume.pdf file in the public folder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
