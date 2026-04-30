# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables are set correctly
- [ ] MongoDB connection is tested and working
- [ ] Email service is configured and tested
- [ ] Frontend build is created without errors
- [ ] All sensitive data is removed from code
- [ ] `.env` files are in `.gitignore`
- [ ] Application tested locally and working
- [ ] API endpoints are secured
- [ ] Frontend build optimizations are done

## Frontend Deployment

### Option 1: Vercel (Recommended)

Vercel is optimized for React and provides excellent performance.

**Steps:**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Configure Environment**
   - Add `REACT_APP_API_URL` in Vercel dashboard
   - Set to your deployed backend URL

5. **Verify**
   - Visit deployment URL
   - Test all features
   - Check console for errors

**Deployment URL:** `https://your-portfolio.vercel.app`

### Option 2: Netlify

**Steps:**

1. **Build Locally**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy via Drag & Drop**
   - Go to https://app.netlify.com
   - Drag `build` folder to deploy

3. **Connect GitHub**
   - Connect repository for automatic deploys
   - Configure build command: `npm run build`
   - Configure publish directory: `build`

4. **Set Environment Variables**
   - Add `REACT_APP_API_URL` in Netlify dashboard

**Deployment URL:** `https://your-portfolio.netlify.app`

### Option 3: GitHub Pages

Suitable for static hosting.

**Steps:**

1. **Add Homepage to package.json**
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. **Install gh-pages**
   ```bash
   npm install gh-pages
   ```

3. **Add Deploy Scripts**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d build"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## Backend Deployment

### Option 1: Heroku

**Steps:**

1. **Install Heroku CLI**
   - Download from https://devcenter.heroku.com/articles/heroku-cli

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create App**
   ```bash
   heroku create your-portfolio-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set SMTP_USER=your_email@gmail.com
   heroku config:set SMTP_PASSWORD=your_app_password
   heroku config:set EMAIL_TO=recipient@example.com
   heroku config:set FRONTEND_URL=https://your-frontend-url.com
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Verify**
   ```bash
   heroku logs --tail
   heroku open
   ```

**Backend URL:** `https://your-portfolio-backend.herokuapp.com`

### Option 2: Railway

Modern alternative to Heroku.

**Steps:**

1. **Connect Repository**
   - Go to https://railway.app
   - Connect GitHub account
   - Select repository

2. **Configure Variables**
   - Add environment variables in Railway dashboard

3. **Deploy**
   - Railway automatically deploys on push

**Backend URL:** `https://your-project.railway.app`

### Option 3: Render

Suitable for Node.js applications.

**Steps:**

1. **Create Web Service**
   - Go to https://render.com
   - Create new Web Service
   - Connect GitHub

2. **Configure Settings**
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`

3. **Add Environment Variables**
   - Add all required variables in Render dashboard

4. **Deploy**
   - Render automatically deploys on push

**Backend URL:** `https://your-portfolio-api.onrender.com`

## MongoDB Deployment

### MongoDB Atlas (Cloud Database)

**Steps:**

1. **Create Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for free account

2. **Create Cluster**
   - Create a new cluster
   - Choose free tier
   - Select nearest region

3. **Setup Security**
   - Create database user
   - Add IP address to whitelist
   - Generate connection string

4. **Get Connection String**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

5. **Update Backend .env**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

## Complete Deployment Workflow

### Step 1: Prepare Application

```bash
# Ensure all changes are committed
git status
git add .
git commit -m "Prepare for deployment"

# Test locally
npm start
# Verify everything works
```

### Step 2: Deploy Backend

```bash
# Option: Heroku
cd backend
heroku create your-app-name
heroku config:set MONGODB_URI=...
git push heroku main

# Verify
heroku logs --tail
```

### Step 3: Update Frontend API URL

Update `.env` in frontend:
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Step 4: Deploy Frontend

```bash
# Option: Vercel
cd frontend
vercel --prod

# Option: Netlify
netlify deploy --prod

# Option: GitHub Pages
npm run deploy
```

### Step 5: Verify Deployment

1. Visit frontend URL
2. Test all features
3. Check browser console for errors
4. Test contact form
5. Verify links work
6. Test on mobile

## Post-Deployment

### Monitoring

**Backend Monitoring:**
```bash
# Heroku logs
heroku logs --tail

# Check health
curl https://your-backend-url.com/api/health
```

**Frontend Monitoring:**
- Check deployment dashboard
- Monitor error tracking
- Check performance metrics

### Update Custom Domain

**Vercel:**
1. Go to project settings
2. Add custom domain
3. Update DNS records

**Heroku:**
1. Add domain in Heroku dashboard
2. Update DNS records

**Netlify:**
1. Go to domain settings
2. Connect custom domain

### SSL/TLS Certificate

Most platforms provide free HTTPS:
- Vercel: Automatic
- Netlify: Automatic
- Heroku: Automatic
- Railway: Automatic
- Render: Automatic

### Performance Optimization

**Frontend:**
```bash
# Check build size
npm run build
# Check bundle
npm install -g webpack-bundle-analyzer
```

**Backend:**
- Enable gzip compression
- Add caching headers
- Optimize database queries

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run build
      - run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## Troubleshooting Deployment

| Issue | Solution |
|-------|----------|
| CORS errors | Update FRONTEND_URL in backend |
| MongoDB connection fails | Check connection string and whitelist IP |
| Email not working | Verify SMTP credentials |
| Environment variables not loading | Restart deployment after setting vars |
| Build fails | Check Node version compatibility |
| 404 errors | Verify API endpoints |

## Environment Variables Summary

**Backend Required:**
```
PORT=5000
MONGODB_URI=...
FRONTEND_URL=https://your-frontend.com
SMTP_SERVICE=gmail
SMTP_USER=...
SMTP_PASSWORD=...
EMAIL_TO=...
```

**Frontend Required:**
```
REACT_APP_API_URL=https://your-backend.com
```

## Security Checklist

- [ ] Remove console.log statements
- [ ] Use HTTPS everywhere
- [ ] Enable CORS only for your domain
- [ ] Use environment variables for secrets
- [ ] Update dependencies regularly
- [ ] Enable rate limiting
- [ ] Use helmet for security headers
- [ ] Validate all inputs
- [ ] Use strong database passwords
- [ ] Enable email verification

## Rollback Procedures

**Heroku:**
```bash
heroku releases
heroku rollback v123
```

**Vercel:**
- Go to Deployments
- Click previous version
- Click "Redeploy"

**Netlify:**
- Go to Deploys
- Click previous build
- Restore

## Getting Help

- Check deployment platform documentation
- Review server logs
- Test endpoints with Postman
- Check MongoDB connection
- Verify SMTP configuration

## Deployment Costs

**Free Tier Options:**
- Frontend: Vercel, Netlify (free)
- Backend: Heroku free tier, Railway, Render
- Database: MongoDB Atlas (free tier)
- Total: $0 for starting

**Paid Recommendations:**
- Backend: $5-10/month
- Database: $0-10/month based on usage
- Total: $5-20/month for production

For more details on monitoring and performance, see [README.md](./README.md)
