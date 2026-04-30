/**
 * About Component
 * Section describing background, education, and goals
 */

import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          About Me
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p className="mb-6 leading-relaxed">
              I am a B.Tech Computer Science student with a strong passion for software development 
              and web technologies. I love solving complex problems and building applications that 
              make a difference.
            </p>

            <p className="mb-6 leading-relaxed">
              My journey into tech began with curiosity about how things work, which led me to explore 
              various programming languages and frameworks. I have hands-on experience in full-stack 
              development using the MERN stack.
            </p>

            <p className="mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices in software 
              development. I am always eager to learn new technologies and improve my skills.
            </p>

            {/* Key Points */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">→</span>
                <p><strong>Education:</strong> B.Tech Computer Science</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">→</span>
                <p><strong>Focus:</strong> Full-stack Web Development</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">→</span>
                <p><strong>Interest:</strong> Scalable Applications, Cloud Technologies</p>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className={`p-6 rounded-lg ${
              darkMode 
                ? 'bg-gray-700' 
                : 'bg-white shadow-md'
            } text-center`}>
              <h3 className="text-3xl font-bold text-blue-500 mb-2">5+</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Programming Languages
              </p>
            </div>

            <div className={`p-6 rounded-lg ${
              darkMode 
                ? 'bg-gray-700' 
                : 'bg-white shadow-md'
            } text-center`}>
              <h3 className="text-3xl font-bold text-blue-500 mb-2">10+</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Projects Completed
              </p>
            </div>

            <div className={`p-6 rounded-lg ${
              darkMode 
                ? 'bg-gray-700' 
                : 'bg-white shadow-md'
            } text-center`}>
              <h3 className="text-3xl font-bold text-blue-500 mb-2">2+</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Years Coding
              </p>
            </div>

            <div className={`p-6 rounded-lg ${
              darkMode 
                ? 'bg-gray-700' 
                : 'bg-white shadow-md'
            } text-center`}>
              <h3 className="text-3xl font-bold text-blue-500 mb-2">100%</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Dedication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
