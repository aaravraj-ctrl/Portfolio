# GitHub Setup Instructions

## Step 1: Install Git (if not already installed)
Download and install Git from: https://git-scm.com/download/win

## Step 2: Open PowerShell/Terminal in the project directory
Navigate to: `C:\Users\AARAV KUMAR\Downloads\Rave-Portfolio\Rave-Portfolio`

## Step 3: Initialize Git Repository
```bash
git init
```

## Step 4: Add all files
```bash
git add .
```

## Step 5: Create initial commit
```bash
git commit -m "Initial commit: Rave Portfolio project"
```

## Step 6: Create a new repository on GitHub
1. Go to https://github.com/new
2. Enter repository name (e.g., "rave-portfolio")
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 7: Add GitHub remote and push
After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Alternative: Using GitHub Desktop
If you prefer a GUI:
1. Download GitHub Desktop from: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" > "Add Local Repository"
4. Select the project folder
5. Click "Publish repository" to push to GitHub

