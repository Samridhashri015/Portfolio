/**
 * Skills Component
 * Categorized display of technical skills
 */

import React from 'react';

const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'Database Design']
    },
    {
      title: 'Programming',
      skills: ['Java', 'JavaScript', 'Problem Solving', 'Data Structures', 'Algorithms', 'OOPS']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'MongoDB Compass', 'Command Line', 'npm/yarn']
    }
  ];

  return (
    <section
      id="skills"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Skills & Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                darkMode
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      darkMode
                        ? 'bg-gray-700 text-gray-200 hover:bg-blue-600'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className={`mt-12 p-8 rounded-lg ${
          darkMode
            ? 'bg-gray-800'
            : 'bg-blue-50'
        }`}>
          <p className={`${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          } leading-relaxed`}>
            I am continuously learning and updating my skills. I stay current with industry trends 
            and best practices through online courses, documentation, and hands-on projects. 
            My expertise spans full-stack development, and I am proficient in building scalable, 
            maintainable applications using modern frameworks and tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
