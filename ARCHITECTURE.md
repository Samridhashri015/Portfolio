# Project Architecture & Technical Documentation

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT BROWSER                       │
├─────────────────────────────────────────────────────────┤
│  React.js Frontend (Port 3000)                          │
│  ├── Components (Navbar, Hero, About, etc.)            │
│  ├── Services (API calls)                              │
│  └── Tailwind CSS Styling                              │
└────────────────┬────────────────────────────────────────┘
                 │ HTTP/REST API
                 │ (Axios)
┌────────────────▼────────────────────────────────────────┐
│              EXPRESS.JS SERVER (Port 5000)              │
├─────────────────────────────────────────────────────────┤
│  ├── Routes                                             │
│  │   ├── /api/health                                   │
│  │   └── /api/contact                                  │
│  ├── Middleware                                         │
│  │   ├── Validation (express-validator)               │
│  │   ├── CORS                                          │
│  │   ├── Rate Limiting                                 │
│  │   └── Security (Helmet)                             │
│  └── Models                                             │
│      └── Contact (Mongoose)                             │
└────────────────┬────────────────────────────────────────┘
                 │ MongoDB Driver
                 │
┌────────────────▼────────────────────────────────────────┐
│              MONGODB DATABASE                            │
├─────────────────────────────────────────────────────────┤
│  Collections:                                            │
│  ├── contacts (Contact form submissions)                │
│  └── [Future collections]                               │
└─────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **React.js 18.2.0** - UI library
- **Tailwind CSS 3.2.7** - Utility-first CSS framework
- **Axios 1.3.4** - HTTP client
- **JavaScript ES6+** - Programming language

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 7.0.0** - MongoDB ODM

### Libraries & Tools
- **Nodemailer** - Email service
- **express-validator** - Input validation
- **helmet** - Security headers
- **express-rate-limit** - Rate limiting
- **dotenv** - Environment variables
- **CORS** - Cross-origin support

## Folder Structure

```
sam-portfolio/
│
├── frontend/                          # React frontend application
│   ├── public/                        # Static files
│   │   ├── index.html                 # Main HTML file
│   │   └── resume.pdf                 # Resume download (add your resume here)
│   │
│   ├── src/                           # Source code
│   │   ├── components/                # Reusable React components
│   │   │   ├── Navbar.js              # Navigation bar
│   │   │   ├── Hero.js                # Hero section
│   │   │   ├── About.js               # About section
│   │   │   ├── Skills.js              # Skills showcase
│   │   │   ├── Projects.js            # Projects display
│   │   │   ├── Resume.js              # Resume section
│   │   │   ├── Contact.js             # Contact form
│   │   │   └── Footer.js              # Footer
│   │   │
│   │   ├── services/                  # API service layer
│   │   │   └── apiService.js          # Centralized API calls
│   │   │
│   │   ├── assets/                    # Images, fonts, etc.
│   │   │
│   │   ├── App.js                     # Root component
│   │   ├── index.js                   # Entry point
│   │   └── index.css                  # Global styles
│   │
│   ├── package.json                   # Dependencies
│   ├── tailwind.config.js             # Tailwind configuration
│   ├── postcss.config.js              # PostCSS configuration
│   ├── .env.example                   # Environment template
│   └── .env                           # Environment variables (git ignored)
│
├── backend/                           # Node.js backend application
│   ├── models/                        # Database schemas
│   │   └── Contact.js                 # Contact form schema
│   │
│   ├── routes/                        # API routes
│   │   ├── contact.js                 # Contact form routes
│   │   └── health.js                  # Health check routes
│   │
│   ├── middleware/                    # Custom middleware
│   │   ├── validation.js              # Input validation
│   │   └── email.js                   # Email service
│   │
│   ├── server.js                      # Main server file
│   ├── package.json                   # Dependencies
│   ├── .env.example                   # Environment template
│   └── .env                           # Environment variables (git ignored)
│
├── .gitignore                         # Git ignore file
├── package.json                       # Root package.json
├── README.md                          # Main documentation
├── QUICK_START.md                     # Quick setup guide
├── SETUP_GUIDE.md                     # Detailed setup guide
└── DEPLOYMENT_GUIDE.md                # Deployment instructions
```

## Component Architecture

### Component Hierarchy

```
App (Root)
├── Navbar
│   ├── Links
│   ├── Dark Mode Toggle
│   └── Mobile Menu
├── Hero
│   ├── Title
│   ├── Subtitle
│   ├── CTA Buttons
│   └── Social Links
├── About
│   ├── Description
│   └── Stats Grid
├── Skills
│   ├── Category 1 (Frontend)
│   ├── Category 2 (Backend)
│   ├── Category 3 (Programming)
│   └── Category 4 (Tools)
├── Projects
│   ├── Project Card 1
│   ├── Project Card 2
│   ├── Project Card 3
│   ├── Project Card 4
│   └── Project Card 5
├── Resume
│   ├── Education
│   ├── Experience
│   ├── Certifications
│   └── Download Button
├── Contact
│   ├── Contact Info
│   └── Contact Form
│       ├── Name Input
│       ├── Email Input
│       ├── Subject Input
│       ├── Message Textarea
│       ├── Status Message
│       └── Submit Button
└── Footer
    ├── About
    ├── Quick Links
    ├── Social Links
    └── Copyright
```

## API Endpoints

### Contact Endpoints

**POST /api/contact**
```javascript
// Request
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss..."
}

// Success Response (201)
{
  "success": true,
  "message": "Your message has been received...",
  "contactId": "507f1f77bcf86cd799439011"
}

// Error Response (400)
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

**GET /api/contact/status**
```javascript
// Response (200)
{
  "success": true,
  "message": "Contact form service is operational",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Health Check

**GET /api/health**
```javascript
// Response (200)
{
  "success": true,
  "message": "Server is healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "uptime": 3600.5
}
```

## Data Models

### Contact Schema (MongoDB)

```javascript
{
  _id: ObjectId,
  name: String (required, 2-50 chars),
  email: String (required, valid email),
  subject: String (required, 3-100 chars),
  message: String (required, 10-5000 chars),
  createdAt: Date (default: now),
  read: Boolean (default: false)
}
```

## State Management

### Frontend State

**App Level:**
```javascript
{
  darkMode: boolean  // Dark/Light theme toggle
}
```

**Contact Component:**
```javascript
{
  formData: {
    name: string,
    email: string,
    subject: string,
    message: string
  },
  loading: boolean,
  message: {
    type: 'success' | 'error',
    text: string
  }
}
```

## Authentication & Security

### Current Implementation

- **No Authentication** - Public portfolio
- **Input Validation** - Server-side validation
- **Rate Limiting** - 100 requests per 15 minutes
- **CORS** - Restricted to frontend URL only
- **Helmet** - Security headers enabled
- **HTTPS** - Required in production

### Future Enhancements

- User authentication for admin panel
- JWT tokens for secure endpoints
- Password hashing for user management
- Two-factor authentication

## Environment Variables

### Backend (.env)

```
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# CORS
FRONTEND_URL=http://localhost:3000

# Email
SMTP_SERVICE=gmail
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_TO=recipient@example.com
```

### Frontend (.env)

```
# API
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development

# Features
REACT_APP_DARK_MODE=true
```

## Performance Considerations

### Frontend Optimization

1. **Code Splitting** - React lazy loading for components
2. **CSS Minification** - Tailwind CSS production build
3. **Image Optimization** - Responsive images
4. **Caching** - Browser caching headers
5. **Compression** - Gzip compression

### Backend Optimization

1. **Database Indexing** - Fast queries
2. **Gzip Compression** - Response compression
3. **Rate Limiting** - DDoS protection
4. **Connection Pooling** - MongoDB connection reuse
5. **Caching** - Future Redis integration

## Error Handling

### Frontend

- Try-catch blocks for API calls
- User-friendly error messages
- Console logging for debugging
- Form validation feedback

### Backend

- Express error middleware
- Mongoose validation errors
- HTTP status codes
- Detailed logging

## Testing Strategy

### Manual Testing

1. Unit - Component functionality
2. Integration - Component interactions
3. E2E - Full user workflows
4. Performance - Load testing
5. Security - Input validation

### Automated Testing (Future)

- Jest for unit tests
- React Testing Library
- Supertest for API tests
- CI/CD pipeline integration

## Deployment Architecture

### Local Development

```
Client Browser (http://localhost:3000)
    ↓
React Dev Server
    ↓
Express Server (http://localhost:5000)
    ↓
MongoDB Local (mongodb://localhost:27017)
```

### Production

```
User Browser (https://domain.com)
    ↓
CDN / Frontend Host (Vercel, Netlify)
    ↓
Backend Server (Heroku, Railway, Render)
    ↓
MongoDB Atlas
```

## Monitoring & Logging

### Frontend Logging

- Browser console for debugging
- Network tab for API monitoring
- Error boundaries for crash handling

### Backend Logging

- Console logs for request tracking
- Error middleware for exceptions
- MongoDB query logging

## Scalability Considerations

### Horizontal Scaling

1. Load balancer
2. Multiple backend instances
3. Database clustering
4. CDN for static assets

### Vertical Scaling

1. Increase server resources
2. Database optimization
3. Caching strategies
4. Code optimization

## Security Best Practices

1. ✓ Input validation on server
2. ✓ CORS restriction
3. ✓ Rate limiting enabled
4. ✓ Security headers (Helmet)
5. ✓ HTTPS enforced
6. ✓ Environment variables for secrets
7. ✓ Regular dependency updates

## Future Enhancements

1. Admin panel for portfolio management
2. Blog system with categories
3. Project filtering and search
4. Testimonials/Reviews section
5. Analytics dashboard
6. Newsletter subscription
7. Dark mode improvements
8. i18n (Internationalization)
9. Real-time notifications
10. Advanced caching strategies

For implementation details, refer to specific component files.
