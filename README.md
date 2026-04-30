# Samridha Shri - Professional Portfolio

A clean, modern, and professional personal portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Minimalist, responsive design
- Modern UI/UX practices with clean typography
- Dark/Light theme support
- Contact form with backend validation
- SEO-friendly and accessible
- Resume download functionality
- Smooth scrolling navigation
- Mobile-optimized

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer (for contact form)
- CORS

## Folder Structure

```
sam-portfolio/
├── frontend/                  # React frontend
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/            # Page components
│   │   ├── assets/           # Images, fonts, etc.
│   │   ├── App.js
│   │   └── index.js
│   ├── public/               # Static files
│   └── package.json
├── backend/                   # Node.js backend
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API routes
│   ├── middleware/           # Custom middleware
│   ├── server.js
│   └── package.json
├── .env                       # Environment variables
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

### Steps

1. **Clone/Extract the repository**
   ```bash
   cd sam-portfolio
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   - Create `.env` file in the root directory
   - Create `backend/.env` file

   **Root .env:**
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

   **Backend .env:**
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   # OR use MongoDB Atlas:
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_SERVICE=gmail
   EMAIL_TO=samridha@example.com
   ```

5. **Start the application**
   ```bash
   npm start
   ```
   - Frontend will run on `http://localhost:3000`
   - Backend will run on `http://localhost:5000`

## Usage

### Contact Form
The contact form collects:
- Name
- Email
- Subject
- Message

Submissions are stored in MongoDB and an email notification is sent.

### Resume Download
Place your resume file (`resume.pdf`) in `frontend/public/` directory.

## Components

### Frontend Components
- **Navbar** - Navigation with smooth scrolling links
- **Hero** - Introduction section with CTA button
- **About** - Background and educational information
- **Skills** - Categorized skills (Frontend, Backend, Programming)
- **Projects** - Showcase of project work
- **Resume** - Resume download section
- **Contact** - Contact form and information
- **Footer** - Social links and copyright

## API Endpoints

### POST /api/contact
Submit a contact form message
- Request body:
  ```json
  {
    "name": "string",
    "email": "string",
    "subject": "string",
    "message": "string"
  }
  ```

### GET /api/contact/status
Check if contact form is working

## Customization

### Update Portfolio Content
Edit the data in respective component files or create a data file for easier management.

### Styling
- Tailwind CSS is used for styling
- Edit `tailwind.config.js` for customization
- Global styles in `index.css`

### Theme
Modify the theme colors in component files or Tailwind configuration.

## Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```
Deploy the `build` folder

### Backend (Heroku/Railway/Render)
- Set environment variables on hosting platform
- Push to GitHub and connect repository

## Performance Optimization

- Lazy loading for images
- Code splitting with React Router
- Responsive images
- CSS minimization with Tailwind
- Gzip compression on backend

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Samridha Shri

## Contact

- Email: samridha@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
