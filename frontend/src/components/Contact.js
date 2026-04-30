/**
 * Contact Component
 * Contact form and contact information
 */

import React, { useState } from 'react';
import axios from 'axios';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Get API URL from environment or use default
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      const response = await axios.post(`${API_URL}/api/contact`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        setMessage({
          type: 'success',
          text: response.data.message
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Get In Touch
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div>
                <p className="text-blue-500 font-semibold mb-2">Email</p>
                <a
                  href="mailto:shrisamridha@gmail.com"
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition-colors`}
                >
                  shrisamridha@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <p className="text-blue-500 font-semibold mb-2">Phone</p>
                <a
                  href="tel:+919060839583"
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition-colors`}
                >
                  +91 9060839583
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p className="text-blue-500 font-semibold mb-2">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/samridha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition-colors`}
                >
                  linkedin.com/in/samridha
                </a>
              </div>

              {/* GitHub */}
              <div>
                <p className="text-blue-500 font-semibold mb-2">GitHub</p>
                <a
                  href="https://github.com/Samridhashri015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:text-blue-500 transition-colors`}
                >
                  github.com/Samridhashri015
                </a>
              </div>

              {/* Response Time */}
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-blue-50'
              }`}>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Response Time:</strong> I typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Message subject"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your message..."
                />
              </div>

              {/* Status Message */}
              {message && (
                <div className={`p-4 rounded-lg ${
                  message.type === 'success'
                    ? darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700'
                    : darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-700'
                }`}>
                  {message.text}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-colors ${
                  loading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-600'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
