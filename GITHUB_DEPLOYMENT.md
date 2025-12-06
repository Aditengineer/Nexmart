# Quick GitHub Deployment Guide

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in or create an account
3. Click the **"+"** icon in the top-right corner → **"New repository"**
4. Fill in repository details:
   - **Repository name**: `indestrial-tra` or your preferred name
   - **Description**: "E-commerce application built with React and Vite"
   - **Public** or **Private** (choose based on preference)
   - **Do NOT initialize with README** (we already have one)
   - Click **"Create repository"**

## Step 2: Push Your Local Repository to GitHub

After creating the repository, GitHub will show you commands to push. Run these in your terminal:

```bash
cd "c:\Users\Aditya\Downloads\Indestrial tra"

# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/indestrial-tra.git

# Verify remote was added
git remote -v

# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel (Recommended - Easiest)

**Vercel is the creator of Next.js/Vite and provides the best deployment experience.**

1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Click **"New Project"**
5. Select your `indestrial-tra` repository
6. Vercel auto-detects Vite configuration ✅
7. Click **"Deploy"** → Wait 1-2 minutes
8. Your app is live! You'll get a URL like: `https://indestrial-tra.vercel.app`

**Every time you push to GitHub, Vercel auto-deploys!** 🚀

## Step 4 (Alternative): Deploy to Netlify

If you prefer Netlify:

1. Go to [Netlify.com](https://netlify.com)
2. Click **"Sign up"** → Choose **"GitHub"**
3. Click **"New site from Git"**
4. Select your GitHub account and repository
5. Build settings (should be auto-filled):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**
7. Your app will be live at a Netlify URL

## Step 5 (Alternative): Deploy to GitHub Pages

For a free GitHub Pages deployment:

1. Go to your repository settings → **"Pages"**
2. Under **"Source"**, select **"Deploy from a branch"**
3. Branch: select **"main"** → folder: **"/(root)"** → Save
4. GitHub Actions will automatically build and deploy
5. Your app will be available at: `https://YOUR-USERNAME.github.io/indestrial-tra/`

**Note**: GitHub Pages requires you to update `vite.config.js` to set the base path:

```javascript
export default {
  base: "/indestrial-tra/", // Add this line
  plugins: [react()],
};
```

## Git Commands Summary

```bash
# Check status
git status

# Make changes and stage them
git add .

# Commit with message
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature
```

## Recommended Deployment Flow

1. **Development**: `npm run dev`
2. **Build locally**: `npm run build`
3. **Test production build**: `npm run preview`
4. **Commit changes**: `git add . && git commit -m "message"`
5. **Push to GitHub**: `git push origin main`
6. **Vercel auto-deploys** ✨

## Setting Up Auto-Deployment with GitHub Actions

The `.github/workflows/` files we created enable:

- ✅ Automatic builds on every push
- ✅ Automatic deployment to Vercel
- ✅ Automatic deployment to GitHub Pages
- ✅ CI/CD testing across multiple Node versions

No additional setup needed - just push!

## Custom Domain (Optional)

### For Vercel:

1. Go to Vercel project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS settings at your domain provider

### For GitHub Pages:

1. Add `CNAME` file to repository with your domain
2. Update DNS settings at domain provider

## Environment Variables (Optional)

For production environment variables:

**Vercel**: Project Settings → Environment Variables
**Netlify**: Site Settings → Build & Deploy → Environment

Add variables with `VITE_` prefix:

```
VITE_API_URL=https://api.example.com
```

## Troubleshooting

**"fatal: remote origin already exists"**

```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/indestrial-tra.git
```

**"Permission denied (publickey)"**

- Set up SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
- Or use HTTPS instead of SSH

**Build fails on Vercel/Netlify**

- Check the build logs
- Ensure `npm run build` works locally
- Verify all dependencies are in package.json

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel or Netlify
3. 📝 Update README with live URL
4. 🎉 Share your app with the world!

## Support Resources

- [GitHub Docs](https://docs.github.com)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Docs](https://vitejs.dev)
