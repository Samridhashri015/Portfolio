/**
 * Footer Component
 * Footer with social links and copyright
 */

import React from 'react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Samridhashri015',
      icon: 'GitHub'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/samridha',
      icon: 'LinkedIn'
    },
    {
      name: 'Email',
      url: 'mailto:samridha@example.com',
      icon: 'Email'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/samridha',
      icon: 'Twitter'
    }
  ];

  return (
    <footer className={`${
      darkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-gray-900 border-gray-800'
    } border-t`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              <span className="text-blue-500">Samridha</span> Shri
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              B.Tech Computer Science Student | Aspiring Software Developer | 
              Full-Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors text-lg"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.name === 'GitHub' && 'ⓖ'}
                  {social.name === 'LinkedIn' && 'in'}
                  {social.name === 'Email' && '✉'}
                  {social.name === 'Twitter' && '𝕏'}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            Copyright © {currentYear} Samridha Shri. All rights reserved.
          </p>
          <p>
            Built with <span className="text-blue-500">React</span> | Powered by <span className="text-blue-500">MERN Stack</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
