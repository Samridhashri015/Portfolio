# Troubleshooting Guide

Common issues and their solutions.

## Installation Issues

### Issue: npm install fails

**Error:** `npm ERR! code ERESOLVE` or `npm ERR! npm ERR! Could not resolve dependency`

**Solutions:**

Option 1: Use legacy peer deps
```bash
npm install --legacy-peer-deps
```

Option 2: Clear cache and retry
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

Option 3: Use newer Node version
```bash
node --version  # Check current version
# Install Node 18+
```

### Issue: Node.js version incompatibility

**Error:** `The engine "node" is incompatible with this package`

**Solution:**
```bash
# Check version requirement in package.json
node --version

# Install correct Node version
# Download from https://nodejs.org/
# Or use nvm (Node Version Manager)
nvm install 16
nvm use 16
```

### Issue: Permission denied

**Error:** `Error: EACCES: permission denied`

**Solution (Windows):** Run as Administrator  
**Solution (Mac/Linux):**
```bash
# Don't use sudo for npm
# Instead, fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

## Environment Configuration Issues

### Issue: Environment variables not loading

**Error:** API URL undefined, email not sending

**Solution:**
1. Verify `.env` file exists in correct location
2. Check file name (must be exactly `.env`)
3. Restart server after creating `.env`
4. Check variable names are correct
5. No quotes needed around values

**Check variables are loading:**
```bash
# Backend
node -e "require('dotenv').config(); console.log(process.env.PORT)"

# Frontend
echo $REACT_APP_API_URL
```

### Issue: REACT_APP variables not available

**Error:** `process.env.REACT_APP_API_URL is undefined`

**Solution:**
1. Variable name must start with `REACT_APP_`
2. Create `frontend/.env` (not backend)
3. Restart development server after creating `.env`
4. Use `process.env.REACT_APP_*` in code

## MongoDB Issues

### Issue: MongoDB connection refused

**Error:** `MongooseError: Cannot connect to mongodb://localhost:27017`

**Solution 1: Start MongoDB locally**

Windows:
```bash
# If installed as service
net start MongoDB

# Or start manually
"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"
```

macOS:
```bash
brew services start mongodb-community
```

Linux:
```bash
sudo systemctl start mongod
```

**Solution 2: Use MongoDB Atlas (Cloud)**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Add to `MONGODB_URI` in `.env`

Example:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Issue: MongoDB authentication failed

**Error:** `authentication failed`

**Solution:**
1. Verify username and password in connection string
2. Ensure user has access to database
3. Check IP whitelist (if using Atlas)
4. Recreate database user with correct credentials

### Issue: Database not found

**Error:** `auth failed` or `no reachable servers`

**Solution:**
1. Ensure MongoDB is running
2. Check connection string format
3. For Atlas: Verify cluster is running
4. Check network connection

**Test MongoDB connection:**
```bash
# Local
mongo mongodb://localhost:27017/portfolio

# Atlas
mongo "mongodb+srv://username:password@cluster.mongodb.net/portfolio"
```

## Port Issues

### Issue: Port already in use

**Error:** `Error: listen EADDRINUSE :::3000` or `EADDRINUSE :::5000`

**Solution 1: Kill process using port**

Windows:
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID with actual ID)
taskkill /PID <PID> /F
```

macOS/Linux:
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

**Solution 2: Use different port**

Backend - Edit `backend/.env`:
```
PORT=5001  # Change from 5000 to 5001
```

Frontend - Edit `frontend/.package.json`:
```json
"scripts": {
  "start": "PORT=3001 react-scripts start"
}
```

## CORS Issues

### Issue: CORS error when submitting contact form

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution 1: Check FRONTEND_URL in backend**

`backend/.env`:
```
FRONTEND_URL=http://localhost:3000
```

Make sure it matches your frontend URL exactly.

**Solution 2: Clear browser cache**
```bash
# Hard refresh in browser
Ctrl+Shift+R  (Windows)
Cmd+Shift+R   (Mac)
```

**Solution 3: Check API URL in frontend**

`frontend/.env`:
```
REACT_APP_API_URL=http://localhost:5000
```

Make sure it matches your backend URL exactly.

**Debug CORS:**
```bash
# Test with curl
curl -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -X OPTIONS http://localhost:5000/api/contact
```

## Email Issues

### Issue: Contact form submitted but email not received

**Error:** No error, but email doesn't arrive

**Solution 1: Verify email configuration**

Check `backend/.env`:
```
SMTP_SERVICE=gmail
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_TO=recipient@example.com
```

**Solution 2: Setup Gmail app password**

1. Enable 2-Factor Authentication on Gmail
2. Go to https://myaccount.google.com/apppasswords
3. Generate app password
4. Copy 16-character password to `SMTP_PASSWORD`
5. Restart server

**Solution 3: Check spam folder**
- Email might be in spam
- Add sender to contacts

**Solution 4: Enable Less Secure Apps (older method)**
- Not recommended, use App Password instead

**Solution 5: Test email service**

```javascript
// In backend route, test email
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.EMAIL_TO,
  subject: 'Test Email',
  text: 'If you see this, email is working!'
}, (err, info) => {
  console.log(err || info);
});
```

## API Issues

### Issue: API returns 404 error

**Error:** `POST http://localhost:5000/api/contact 404 (Not Found)`

**Solution:**
1. Verify backend is running: http://localhost:5000/api/health
2. Check API endpoint URL is correct
3. Verify server.js routes are properly configured
4. Check no typos in route paths

### Issue: Form submission returns validation error

**Error:** `"field": "email", "message": "Please provide a valid email address"`

**Solution:**
1. Check email format (must be valid)
2. Message must be 10+ characters
3. Name must be 2-50 characters
4. Subject must be 3-100 characters
5. All fields are required

Example valid submission:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I am interested in your portfolio projects."
}
```

### Issue: 429 Too Many Requests

**Error:** `Error: Too many requests, please try again later`

**Solution:**
- Rate limit is 100 requests per 15 minutes
- Wait 15 minutes before trying again
- Or modify rate limit in `backend/server.js`

### Issue: 500 Internal Server Error

**Error:** `Error: Internal server error`

**Solution:**
1. Check backend console for error message
2. Verify database connection
3. Check all environment variables are set
4. Restart backend server
5. Check MongoDB is running

## Frontend Issues

### Issue: Website not loading

**Error:** Page is blank or shows nothing

**Solution:**
1. Check browser console for errors (F12)
2. Verify frontend is running: http://localhost:3000
3. Check for React/JavaScript errors in console
4. Check network tab for failed requests
5. Try hard refresh: Ctrl+Shift+R

### Issue: Styles not applied

**Error:** Page looks unstyled, plain text

**Solution:**
1. Check Tailwind CSS is installed: `npm list tailwindcss`
2. Verify `tailwind.config.js` exists
3. Check `index.css` has @tailwind imports
4. Restart development server
5. Clear browser cache

### Issue: Dark mode not working

**Error:** Toggle button doesn't change theme

**Solution:**
1. Check browser console for JavaScript errors
2. Verify `darkMode` state in App.js
3. Check CSS classes have dark: prefix
4. Test theme toggle in browser DevTools
5. Check localStorage for theme preference

### Issue: Smooth scrolling not working

**Error:** Page jumps instead of scrolling smoothly

**Solution:**
1. Check HTML has `scroll-behavior: smooth` in index.css
2. Verify navigation links have correct href values
3. Check target sections have matching id attributes
4. Test in different browsers
5. Check for JavaScript errors

## Development Server Issues

### Issue: React app keeps restarting

**Error:** Constant recompiling/restarting

**Solution:**
1. Check for infinite loops in code
2. Look for circular dependencies
3. Check for missing dependencies
4. Verify no syntax errors
5. Check NODE_ENV is set correctly

### Issue: Changes not reflecting

**Error:** Code changes not appearing in browser

**Solution:**
1. Clear browser cache
2. Hard refresh page: Ctrl+Shift+R
3. Check file was saved
4. Look for Webpack build errors in terminal
5. Restart development server

### Issue: React DevTools not working

**Error:** Can't inspect React components

**Solution:**
1. Install React DevTools extension
2. Build is in development mode
3. Restart browser
4. Check extension permissions
5. Verify React version is compatible

## Deployment Issues

### Issue: Deployment fails

**Solution:**
1. Check all environment variables are set
2. Verify database connection works
3. Ensure `.env` not included in deployment
4. Check Node version compatibility
5. Review deployment platform logs

### Issue: API not reachable after deployment

**Solution:**
1. Update frontend `REACT_APP_API_URL` to deployed backend
2. Redeploy frontend after updating URL
3. Verify backend is actually running
4. Check CORS allows production domain
5. Check backend logs for errors

### Issue: Email not working in production

**Solution:**
1. Verify SMTP credentials are set on platform
2. Use app passwords (not regular password)
3. Check production environment is not restricted
4. Verify EMAIL_TO is correct
5. Check spam folder for emails

## Performance Issues

### Issue: Website is slow

**Solution:**
1. Check network tab for slow requests
2. Optimize images
3. Minimize dependencies
4. Enable compression on backend
5. Use production build

### Issue: Memory leak

**Error:** App getting slower over time, high memory usage

**Solution:**
1. Check for event listeners not cleaned up
2. Verify components properly unmounting
3. Use React DevTools Profiler
4. Check for circular references
5. Optimize re-renders

## Browser Compatibility Issues

### Issue: Not working in specific browser

**Solution:**
1. Test in different browsers
2. Check browser console for errors
3. Verify CSS support (use autoprefixer)
4. Check JavaScript compatibility (use transpiler)
5. Test on BrowserStack for different versions

## Security Issues

### Issue: Getting HTTPS warnings

**Solution:**
1. Use HTTPS in production
2. Install SSL certificate
3. Update CORS to use HTTPS URL
4. Update environment variables

### Issue: Sensitive data exposed

**Solution:**
1. Never commit `.env` files
2. Don't console.log sensitive data
3. Use environment variables for secrets
4. Don't expose passwords in URLs
5. Use `.gitignore` properly

## Database Issues

### Issue: Data not saving

**Error:** Form submitted but data not in database

**Solution:**
1. Verify MongoDB connection is working
2. Check schema validation passes
3. Look for errors in server logs
4. Verify database permissions
5. Check collection exists

### Issue: Queries taking too long

**Solution:**
1. Add indexes to frequently queried fields
2. Optimize MongoDB queries
3. Monitor query performance
4. Use explain() to analyze queries
5. Archive old data

## Getting More Help

### Check These Resources

1. **Error Message** - Read error carefully, search error message
2. **Console** - Check browser (F12) and server console
3. **Network Tab** - Check API requests and responses
4. **Documentation** - See guides in project root
5. **Stack Overflow** - Search similar issues
6. **GitHub Issues** - Check package repositories

### Enable Debug Mode

```bash
# Backend debugging
DEBUG=* npm start

# Frontend debugging  
npm start  # Check browser console
```

### Collect Information for Support

When asking for help, include:
1. Error message (exact text)
2. Steps to reproduce
3. Operating system
4. Node/npm versions
5. Screenshots if visual issue
6. Relevant code snippet
7. `.env` configuration (without secrets)

## Common Quick Fixes

```bash
# Problem: Module not found
Solution: npm install

# Problem: Port in use
Solution: Change PORT in .env

# Problem: CORS error
Solution: Check FRONTEND_URL in backend .env

# Problem: Email not working
Solution: Verify SMTP credentials

# Problem: Database connection
Solution: Start MongoDB or check Atlas connection

# Problem: Styles not loading
Solution: npm install && npm start

# Problem: Dark mode broken
Solution: Check index.css has @tailwind imports

# Problem: API not responding
Solution: Check backend is running on correct port

# Problem: Changes not showing
Solution: Clear cache and hard refresh Ctrl+Shift+R
```

For more help, see:
- [README.md](./README.md)
- [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
- [ARCHITECTURE.md](./ARCHITECTURE.md)
