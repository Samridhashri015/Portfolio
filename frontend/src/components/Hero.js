/**
 * Hero Component
 * Introduction section with name, title, and call-to-action
 */

import React from 'react';

const Hero = ({ darkMode }) => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className={`pt-32 pb-20 px-4 ${
        darkMode 
          ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
          : 'bg-gradient-to-b from-white to-gray-50'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Name */}
        <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Samridha Shri
        </h1>

        {/* Title */}
        <p className="text-2xl md:text-3xl text-blue-500 font-semibold mb-6">
          Aspiring Software Developer
        </p>

        {/* Intro Text */}
        <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto fade-in ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          B.Tech Computer Science Student at SRM Institute of Science and Technology | 
          Passionate about building scalable web applications and solving real-world problems | 
          Proficient in React, Node.js, Java, and full-stack development
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get in Touch
          </button>
          <button
            onClick={() => scrollToSection('#projects')}
            className={`px-8 py-3 font-semibold rounded-lg transition-colors border-2 border-blue-500 text-blue-500 hover:bg-blue-50 ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-blue-50'
            }`}
          >
            View My Work
          </button>
        </div>

        {/* Social Links (optional preview) */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/Samridhashri015"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-500 transition-colors ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            aria-label="GitHub"
            title="GitHub"
          >
            ⓖ
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-blue-500 transition-colors ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            in
          </a>
          <a
            href="mailto:samridha@example.com"
            className={`hover:text-blue-500 transition-colors ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            aria-label="Email"
            title="Email"
          >
            ✉
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
