# Quick Push to GitHub Guide

## Step 1: Restart PowerShell
**IMPORTANT**: After installing Git, you MUST restart PowerShell for it to work.
- Close this PowerShell window
- Open a new PowerShell window
- Navigate back to: `cd "C:\Users\AARAV KUMAR\Downloads\Rave-Portfolio\Rave-Portfolio"`

## Step 2: Verify Git Installation
```powershell
git --version
```
You should see something like: `git version 2.x.x`

## Step 3: Initialize Git Repository
```powershell
git init
```

## Step 4: Add All Files
```powershell
git add .
```

## Step 5: Create Initial Commit
```powershell
git commit -m "Initial commit: Rave Portfolio project"
```

## Step 6: Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `rave-portfolio` (or any name you prefer)
3. Choose Public or Private
4. **DO NOT** check "Initialize this repository with a README"
5. Click "Create repository"

## Step 7: Push to GitHub
After creating the repository, GitHub will show you commands. Use these (replace YOUR_USERNAME and YOUR_REPO_NAME):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## If you get authentication errors:
You may need to authenticate. Options:
1. Use GitHub Desktop (easiest): https://desktop.github.com/
2. Use GitHub CLI: `gh auth login`
3. Use Personal Access Token (Settings > Developer settings > Personal access tokens)

