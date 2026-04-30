# Setup and Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (local or MongoDB Atlas account) - [Download](https://www.mongodb.com/)
- **Git** (optional, for version control)

To check if you have Node.js and npm installed:

```bash
node --version
npm --version
```

## Project Setup Steps

### 1. Clone/Download the Project

```bash
cd path/to/your/project
```

### 2. Install Root Dependencies

```bash
npm install
```

This installs `concurrently` which allows running both frontend and backend simultaneously.

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

Dependencies installed:
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-Origin Resource Sharing
- `dotenv` - Environment variables
- `nodemailer` - Email service
- `express-validator` - Input validation
- `helmet` - Security headers
- `express-rate-limit` - Rate limiting

### 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

Dependencies installed:
- `react` - UI library
- `react-dom` - DOM rendering
- `axios` - HTTP client
- `tailwindcss` - CSS framework

### 5. Configure Environment Variables

#### Backend Configuration

Create `backend/.env` file:

```bash
# Server
PORT=5000
NODE_ENV=development

# Database
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# Option 2: MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Email Configuration (for contact form)
SMTP_SERVICE=gmail
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
EMAIL_TO=samridha@example.com
```

#### Frontend Configuration

Create `frontend/.env` file:

```bash
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development
REACT_APP_DARK_MODE=true
```

### 6. Setup MongoDB

#### Option 1: Local MongoDB

```bash
# Start MongoDB service (Windows)
net start MongoDB

# Or on macOS/Linux
brew services start mongodb-community
```

#### Option 2: MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Update `MONGODB_URI` in `backend/.env`

### 7. Setup Email Configuration

For the contact form to send emails:

1. **Gmail Setup:**
   - Enable 2-Factor Authentication on your Gmail account
   - Create an App Password: [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Copy the 16-character password
   - Paste into `SMTP_PASSWORD` in `backend/.env`

2. **Other Email Providers:**
   - Update `SMTP_SERVICE` in `.env`
   - Supported services: gmail, outlook, yahoo, etc.

### 8. Run the Application

#### Option 1: Run Both Frontend and Backend

From root directory:

```bash
npm start
```

This runs:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000

#### Option 2: Run Separately

Terminal 1 - Backend:
```bash
cd backend
npm start
# or for development with auto-reload
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

### 9. Test the Application

1. Open http://localhost:3000 in your browser
2. Test navigation and sections
3. Try the contact form
4. Check browser console and terminal for any errors

## Troubleshooting

### MongoDB Connection Issues

```bash
# Test MongoDB connection
mongo mongodb://localhost:27017/portfolio

# If connection fails, verify MongoDB is running
```

### Port Already in Use

```bash
# Find process using port 5000 (Backend)
netstat -ano | findstr :5000

# Find process using port 3000 (Frontend)
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### Email Not Sending

- Verify SMTP credentials in `.env`
- Check if 2FA and App Password are set (for Gmail)
- Verify `EMAIL_TO` recipient email is correct
- Check backend console for email errors

### Dependencies Installation Failed

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

Creates optimized production build in `frontend/build/`

### Deploy Frontend

- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Setup in repository settings

### Deploy Backend

- **Heroku**: 
  ```bash
  git push heroku main
  ```
- **Railway**: Connect GitHub repo
- **Render**: Connect GitHub repo

## Project Structure Reference

```
sam-portfolio/
├── backend/
│   ├── models/          # Database schemas
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── server.js        # Main server file
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API services
│   │   ├── assets/      # Images, fonts
│   │   ├── App.js
│   │   └── index.js
│   ├── public/          # Static files
│   ├── package.json
│   └── .env
├── package.json
└── README.md
```

## Next Steps

1. **Customize Portfolio Content**
   - Update personal information in components
   - Add actual projects
   - Update skills and technologies

2. **Add Resume**
   - Place `resume.pdf` in `frontend/public/`
   - Update download link in Resume component

3. **Configure Email**
   - Test contact form
   - Verify email notifications

4. **Deploy**
   - Deploy backend to hosting platform
   - Deploy frontend to Vercel/Netlify
   - Update API URL in frontend `.env`

## Support & Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Common Commands

```bash
# Start both frontend and backend
npm start

# Start only backend
cd backend && npm start

# Start only frontend
cd frontend && npm start

# Development mode with auto-reload (backend)
cd backend && npm run dev

# Build frontend
cd frontend && npm run build

# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Environment Variables Checklist

- [ ] Backend `.env` created with MongoDB URI
- [ ] Backend `.env` created with SMTP credentials
- [ ] Frontend `.env` created with API URL
- [ ] Email service configured
- [ ] MongoDB running locally or Atlas connection working
- [ ] Ports 3000 and 5000 are available

## Security Notes

- Never commit `.env` files to GitHub
- Use `.env.example` as template
- Rotate API keys and passwords regularly
- Use strong passwords for MongoDB
- Enable SSL/TLS in production
- Update dependencies regularly

For more details, see [README.md](./README.md)
