# 🚀 Deploy to Vercel - Step by Step Guide

## Method 1: Vercel Dashboard (Easiest - Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with your GitHub account

2. **Import Your Project**
   - Click "Add New..." → "Project"
   - Find and select: `aaravraj-ctrl/Portfolio`
   - Click "Import"

3. **Configure Project** (Vercel auto-detects these, but verify):
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build:client`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at: `https://portfolio-xxxxx.vercel.app`

5. **Custom Domain** (Optional)
   - After deployment, go to Project Settings → Domains
   - Add your custom domain

## Method 2: Vercel CLI

If you prefer CLI, follow these steps:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first deployment)
   - Project name? (Press Enter for default: `rave-portfolio`)
   - Directory? (Press Enter for `./`)
   - Override settings? **No**

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

## ✅ What's Already Configured

- ✅ `vercel.json` - Routing and build configuration
- ✅ `build:client` script - Optimized client build
- ✅ Code splitting - Better performance
- ✅ SPA routing - All routes work correctly

## 🔗 Your Repository

Your code is ready at: https://github.com/aaravraj-ctrl/Portfolio

Just import it in Vercel and deploy!

