/**
 * Projects Component
 * Showcase of completed projects with details
 */

import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce website with product catalog, shopping cart, and checkout functionality.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API'],
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      },
      highlights: ['User authentication', 'Payment integration', 'Admin dashboard']
    },
    {
      title: 'Personal Blog Platform',
      description: 'A blogging platform where users can create, edit, and share blog posts with rich text editor.',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'JWT'],
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      },
      highlights: ['CRUD operations', 'User comments', 'Search functionality']
    },
    {
      title: 'Task Management App',
      description: 'A productivity app to manage daily tasks with priority levels and deadline reminders.',
      technologies: ['React.js', 'Node.js', 'SQLite', 'Tailwind CSS'],
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      },
      highlights: ['Drag-and-drop interface', 'Categories', 'Local storage']
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application fetching data from public APIs with detailed forecasts.',
      technologies: ['React.js', 'OpenWeather API', 'Axios', 'Tailwind CSS'],
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      },
      highlights: ['Real-time data', 'Geolocation', 'Multiple cities']
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging application with user authentication and message history.',
      technologies: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'],
      links: {
        github: 'https://github.com',
        demo: 'https://example.com'
      },
      highlights: ['Real-time messaging', 'User profiles', 'Online status']
    }
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-4 ${
        darkMode ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
                darkMode
                  ? 'bg-gray-700 border border-gray-600'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className={`text-xs space-y-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>• {highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          darkMode
                            ? 'bg-gray-600 text-gray-200'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t" style={{
                  borderColor: darkMode ? '#374151' : '#e5e7eb'
                }}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
