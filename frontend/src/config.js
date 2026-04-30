/**
 * Portfolio Configuration
 * Centralized configuration file for easy customization
 */

// Personal Information
export const personalInfo = {
  name: 'Samridha Shri',
  title: 'Aspiring Software Developer',
  email: 'samridha@example.com',
  phone: '+91 XXXXXXXXXX',
  location: 'Your City, Country'
};

// Social Links
export const socialLinks = {
  github: 'https://github.com/samridha',
  linkedin: 'https://linkedin.com/in/samridha',
  twitter: 'https://twitter.com/samridha',
  email: 'mailto:samridha@example.com'
};

// About Section
export const about = {
  intro: 'B.Tech Computer Science Student | Passionate about building scalable web applications | Proficient in React, Node.js, Java, and full-stack development',
  description: 'I am a B.Tech Computer Science student with a strong passion for software development and web technologies. I love solving complex problems and building applications that make a difference.',
  stats: [
    { label: 'Programming Languages', value: '5+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Years Coding', value: '2+' },
    { label: 'Dedication', value: '100%' }
  ]
};

// Skills
export const skills = {
  frontend: {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design']
  },
  backend: {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'Database Design']
  },
  programming: {
    title: 'Programming',
    items: ['Java', 'JavaScript', 'Problem Solving', 'Data Structures', 'Algorithms', 'OOPS']
  },
  tools: {
    title: 'Tools & Platforms',
    items: ['Git & GitHub', 'VS Code', 'Postman', 'MongoDB Compass', 'Command Line', 'npm/yarn']
  }
};

// Projects
export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce website with product catalog, shopping cart, and checkout functionality.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API'],
    highlights: ['User authentication', 'Payment integration', 'Admin dashboard'],
    github: 'https://github.com/samridha/ecommerce',
    demo: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Personal Blog Platform',
    description: 'A blogging platform where users can create, edit, and share blog posts with rich text editor.',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'JWT'],
    highlights: ['CRUD operations', 'User comments', 'Search functionality'],
    github: 'https://github.com/samridha/blog',
    demo: 'https://blog-demo.com'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A productivity app to manage daily tasks with priority levels and deadline reminders.',
    technologies: ['React.js', 'Node.js', 'SQLite', 'Tailwind CSS'],
    highlights: ['Drag-and-drop interface', 'Categories', 'Local storage'],
    github: 'https://github.com/samridha/taskapp',
    demo: 'https://taskapp-demo.com'
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Real-time weather application fetching data from public APIs with detailed forecasts.',
    technologies: ['React.js', 'OpenWeather API', 'Axios', 'Tailwind CSS'],
    highlights: ['Real-time data', 'Geolocation', 'Multiple cities'],
    github: 'https://github.com/samridha/weather',
    demo: 'https://weather-demo.com'
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time messaging application with user authentication and message history.',
    technologies: ['React.js', 'Socket.io', 'Node.js', 'MongoDB'],
    highlights: ['Real-time messaging', 'User profiles', 'Online status'],
    github: 'https://github.com/samridha/chat',
    demo: 'https://chat-demo.com'
  }
];

// Education
export const education = {
  degree: 'B.Tech Computer Science',
  institution: 'Your College/University Name',
  graduationYear: 2025,
  cgpa: '8.5/10',
  coursework: 'Data Structures, Web Development, DBMS, OOP'
};

// Experience
export const experience = [
  {
    title: 'Web Development Intern',
    company: 'Tech Company / Startup',
    duration: 'Jun 2024 - Aug 2024',
    highlights: [
      'Developed responsive React components',
      'Implemented REST APIs with Node.js',
      'Optimized database queries in MongoDB'
    ]
  }
];

// Certifications
export const certifications = [
  'React.js Fundamentals - Udemy (2024)',
  'Full-Stack Web Development - Coursera (2024)',
  'JavaScript Advanced - freeCodeCamp (2023)'
];

// Theme Configuration
export const themeConfig = {
  colors: {
    primary: '#2563eb', // Blue
    primaryDark: '#1d4ed8',
    secondary: '#1a1a1a', // Dark
    accent: '#ffffff', // White
    darkBg: '#0a0a0a',
    lightBg: '#ffffff',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  typography: {
    fontFamily: 'Segoe UI, Roboto, sans-serif',
    headingSize: {
      h1: '3rem',
      h2: '2.25rem',
      h3: '1.875rem'
    }
  }
};

export default {
  personalInfo,
  socialLinks,
  about,
  skills,
  projects,
  education,
  experience,
  certifications,
  themeConfig
};
