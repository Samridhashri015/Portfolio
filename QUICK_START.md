# Quick Start Guide

## Fastest Way to Get Started

### 1. Install Node.js
Download and install from https://nodejs.org/

### 2. Clone Project
```bash
cd /path/to/sam-portfolio
```

### 3. Install Dependencies
```bash
npm install          # Root dependencies
cd backend && npm install
cd ../frontend && npm install
```

### 4. Set Up Environment Variables

**Create backend/.env:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:3000
SMTP_SERVICE=gmail
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_TO=samridha@example.com
```

**Create frontend/.env:**
```
REACT_APP_API_URL=http://localhost:5000
```

### 5. Start MongoDB
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community
```

### 6. Run Application
```bash
# From root directory
npm start
```

**Automatically launches:**
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

### 7. Test It
1. Open http://localhost:3000 in browser
2. Navigate through sections
3. Test contact form
4. Check browser console for errors

## What's Included?

✓ Responsive Design - Works on all devices
✓ Dark/Light Theme - Toggle in navbar
✓ Contact Form - With validation and email
✓ Smooth Navigation - Instant scrolling to sections
✓ SEO Optimized - Proper meta tags
✓ Accessibility - WCAG compliant
✓ Modern Stack - React, Node.js, MongoDB
✓ Well Commented - Easy to understand and modify

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Port 3000/5000 in use | Change PORT in backend/.env, or kill process |
| MongoDB connection error | Start MongoDB service or use MongoDB Atlas |
| Email not working | Check SMTP credentials and 2FA settings |
| Dependencies fail | Run `npm cache clean --force` then reinstall |

## File Customization

**Update Portfolio Content:**
- Edit components in `frontend/src/components/` for content
- Edit data in respective component files
- Update project details in Projects.js
- Update skills in Skills.js

**Styling:**
- Edit colors in `tailwind.config.js`
- Edit CSS in `frontend/src/index.css`

**Theme Colors:**
- Primary (Blue): Change from `#2563eb` in components
- Dark bg: `#0a0a0a`
- Light bg: `#ffffff`

## Adding Your Resume

1. Save your resume as `resume.pdf`
2. Place in `frontend/public/` folder
3. Download link will automatically work

## Deployment

**Frontend (Vercel):**
```bash
npm install -g vercel
vercel
```

**Backend (Heroku):**
```bash
git push heroku main
```

For detailed instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## Next Steps

1. Update personal information
2. Add your actual projects
3. Configure email service
4. Deploy to hosting platform
5. Share your portfolio!

## Tech Stack Overview

| Layer | Technology |
|-------|------------|
| Frontend | React.js + Tailwind CSS |
| Backend | Node.js + Express |
| Database | MongoDB |
| Email | Nodemailer |
| Validation | Express Validator |

## Support

For issues or questions:
1. Check [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed help
2. Check browser console for client-side errors
3. Check terminal for server-side errors
4. Review comments in code files

Enjoy your portfolio!
