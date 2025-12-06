# Manual Deployment Guide - Step by Step

## Method 1: Deploy to Vercel (Recommended - Easiest)

### Prerequisites
- GitHub account
- Code pushed to GitHub
- Vercel account (free)

### Steps

#### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. **Repository name**: `indestrial-tra`
3. **Description**: E-commerce application (optional)
4. Choose **Public** or **Private**
5. Click **"Create repository"** (leave all checkboxes unchecked)

#### Step 2: Push Your Code to GitHub
Open PowerShell in your project folder:

```powershell
cd "c:\Users\Aditya\Downloads\Indestrial tra"

# Configure Git (one time only)
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"

# Initialize if not already done
git init

# Stage all files
git add .

# Create first commit
git commit -m "Initial commit - Nexmart e-commerce app"

# Add GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/indestrial-tra.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**When prompted for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)
  - Go to GitHub Settings → Developer settings → Personal access tokens
  - Click "Tokens (classic)" → "Generate new token (classic)"
  - Check: `repo`, `workflow`, `write:packages`
  - Copy and paste the token as password

#### Step 3: Deploy on Vercel
1. Go to https://vercel.com
2. Click **"Sign Up"** (top right)
3. Click **"Continue with GitHub"**
4. Click **"Authorize Vercel"**
5. You'll be redirected to Vercel dashboard
6. Click **"Add New..."** → **"Project"**
7. Find and click **"indestrial-tra"** repository
8. **Framework**: Should auto-detect "Vite"
9. **Build Command**: `npm run build` (auto-filled)
10. **Output Directory**: `dist` (auto-filled)
11. Click **"Deploy"**

**Wait 1-2 minutes** → Your app is live! 🎉

**Your live URL**: https://indestrial-tra.vercel.app

---

## Method 2: Deploy to Netlify

### Prerequisites
- GitHub account
- Code pushed to GitHub
- Netlify account (free)

### Steps

#### Step 1: Push to GitHub (Same as above)
```powershell
git remote add origin https://github.com/YOUR-USERNAME/indestrial-tra.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Netlify
1. Go to https://netlify.com
2. Click **"Sign up"** (top right)
3. Click **"Sign up with GitHub"**
4. Click **"Authorize netlify"**
5. You'll be redirected to Netlify dashboard
6. Click **"Add new site"** → **"Import an existing project"**
7. Select **"GitHub"** as your Git provider
8. Find and select **"indestrial-tra"** repository
9. Click **"Deploy site"**
10. Wait for build to complete

**Your live URL**: https://indestrial-tra-abc123.netlify.app

---

## Method 3: Manual Build & Deploy to GitHub Pages

### Prerequisites
- GitHub account
- Code pushed to GitHub

### Steps

#### Step 1: Build Your Application
```powershell
cd "c:\Users\Aditya\Downloads\Indestrial tra"

# Build for production
npm run build
```

This creates a `dist` folder with optimized files.

#### Step 2: Update Vite Config for GitHub Pages
Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/indestrial-tra/',  // Add this line - replace repo name if different
  plugins: [react()],
})
```

#### Step 3: Rebuild
```powershell
npm run build
```

#### Step 4: Commit & Push
```powershell
git add .
git commit -m "Update base path for GitHub Pages"
git push origin main
```

#### Step 5: Enable GitHub Pages
1. Go to https://github.com/YOUR-USERNAME/indestrial-tra
2. Click **"Settings"** (top right)
3. Click **"Pages"** (left sidebar)
4. Under **"Build and deployment"**:
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select **"main"** and **"/(root)"**
   - Click **"Save"**

5. GitHub will start building automatically

**Your live URL**: https://YOUR-USERNAME.github.io/indestrial-tra

---

## Method 4: Deploy to AWS S3 + CloudFront

### Prerequisites
- AWS account
- AWS CLI installed
- Code built locally

### Steps

#### Step 1: Build Your App
```powershell
npm run build
```

#### Step 2: Create S3 Bucket
1. Go to https://s3.console.aws.amazon.com
2. Click **"Create bucket"**
3. **Bucket name**: `indestrial-tra-abc123` (must be unique)
4. Region: Choose closest to you
5. **Uncheck**: "Block all public access"
6. Click **"Create bucket"**

#### Step 3: Enable Static Website Hosting
1. Click on your bucket
2. Go to **"Properties"** tab
3. Scroll to **"Static website hosting"**
4. Click **"Edit"**
5. Enable **"Static website hosting"**
6. **Index document**: `index.html`
7. **Error document**: `index.html` (for React Router)
8. Click **"Save changes"**

#### Step 4: Upload Files
1. Go to **"Objects"** tab
2. Click **"Upload"**
3. Click **"Add files"** → Select all files from `dist` folder
4. Click **"Upload"**

#### Step 5: Make Files Public
1. Select all uploaded files
2. Right-click → **"Make public using ACL"**
3. Confirm

**Your live URL**: (shown in Static website hosting settings)

---

## Method 5: Deploy Locally with Live Server (For Testing)

### Quick Test Before Deploying

```powershell
# Build the app
npm run build

# Install live-server (one time)
npm install -g live-server

# Start live server in dist folder
cd dist
live-server

# Server starts at http://localhost:8080
```

---

## Quick Reference - All Methods

| Method | Difficulty | Cost | Speed | Best For |
|--------|-----------|------|-------|----------|
| **Vercel** | ⭐ Easy | Free | ⚡ 1-2 min | Modern React apps |
| **Netlify** | ⭐ Easy | Free | ⚡ 2-5 min | Full-stack apps |
| **GitHub Pages** | ⭐⭐ Medium | Free | ⚡ 2-5 min | Static sites |
| **AWS S3** | ⭐⭐⭐ Hard | ~$1/month | ⚡ 5-10 min | Enterprise |

---

## Common Issues & Fixes

### Issue: "Cannot find module" during build
**Solution:**
```powershell
rm -r node_modules
npm install
npm run build
```

### Issue: GitHub Push asks for password
**Solution:** Use Personal Access Token instead:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` + `workflow` permissions
3. Use token as password when prompted

### Issue: App shows blank page after deployment
**Check:**
1. Open browser DevTools (F12)
2. Check **Console** tab for errors
3. Check **Network** tab - look for failed requests
4. If using GitHub Pages, verify `base` in vite.config.js is set correctly

### Issue: Routes not working on deployment
**Solution:** Make sure `index.html` is the error document:
- Vercel/Netlify: Auto-configured ✅
- GitHub Pages: Auto-configured ✅
- AWS S3: Set `index.html` as Error Document ✅

---

## Manual Verification Steps

### Before Deployment - Test Locally
```powershell
# Build production version
npm run build

# Preview production build
npm run preview

# Open http://localhost:4173 in browser
# Test all features before deploying
```

### After Deployment - Check Live Site
- [ ] Homepage loads with header, hero, categories
- [ ] Can click on categories
- [ ] Search works
- [ ] Can add products to cart
- [ ] Cart persists (refresh page)
- [ ] Can proceed to checkout
- [ ] Can login/register
- [ ] Order history accessible
- [ ] No console errors (DevTools → Console)
- [ ] Responsive on mobile

---

## Rolling Back / Redeployment

### If Something Goes Wrong

**Vercel:**
1. Go to Vercel dashboard
2. Click your project
3. Go to **"Deployments"** tab
4. Find previous working deployment
5. Click the 3 dots → **"Promote to Production"**

**Netlify:**
1. Go to Netlify dashboard
2. Click your site
3. Go to **"Deploys"** tab
4. Find previous working deployment
5. Click → **"Publish deploy"**

**GitHub Pages:**
1. Go to your GitHub repo
2. Click **"Actions"** tab
3. Find previous successful workflow
4. Click **"Re-run all jobs"**

---

## Monitoring & Analytics

### Track Your Live Site

**Google Analytics:**
1. Go to https://analytics.google.com
2. Create new property
3. Get tracking ID
4. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

**Sentry (Error Tracking):**
1. Go to https://sentry.io
2. Create account
3. Create new React project
4. Follow setup instructions

---

## Performance Checklist

Before deploying to production:

- [ ] Run `npm run build` successfully
- [ ] `dist` folder created
- [ ] Test with `npm run preview`
- [ ] All routes working
- [ ] Images loading
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Form validation working
- [ ] Cart functionality working
- [ ] Search/filter working

---

## Clean Up Commands

```powershell
# Remove build artifacts
rm -r dist
rm -r node_modules

# Clean reinstall
npm install
npm run build

# Check git status
git status

# See all commits
git log --oneline
```

---

## Support

Need help?
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
- GitHub docs: https://docs.github.com
- Vite docs: https://vitejs.dev
