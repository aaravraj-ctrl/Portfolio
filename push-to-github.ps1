# PowerShell script to push project to GitHub
# Run this script AFTER installing Git and creating a GitHub repository

Write-Host "GitHub Push Script" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan
Write-Host ""

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then restart PowerShell and run this script again." -ForegroundColor Yellow
    exit 1
}

# Initialize git repository if not already initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$status = git status --porcelain
if ($status) {
    Write-Host "Creating initial commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: Rave Portfolio project"
    Write-Host "Commit created successfully!" -ForegroundColor Green
} else {
    Write-Host "No changes to commit." -ForegroundColor Yellow
}

# Prompt for GitHub repository URL
Write-Host ""
Write-Host "Please provide your GitHub repository URL:" -ForegroundColor Cyan
Write-Host "Example: https://github.com/yourusername/rave-portfolio.git" -ForegroundColor Gray
$repoUrl = Read-Host "Repository URL"

if ($repoUrl) {
    # Check if remote already exists
    $remoteExists = git remote get-url origin 2>$null
    if ($remoteExists) {
        Write-Host "Remote 'origin' already exists. Updating..." -ForegroundColor Yellow
        git remote set-url origin $repoUrl
    } else {
        Write-Host "Adding remote repository..." -ForegroundColor Yellow
        git remote add origin $repoUrl
    }
    
    # Set branch to main
    Write-Host "Setting branch to main..." -ForegroundColor Yellow
    git branch -M main
    
    # Push to GitHub
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Success! Your project has been pushed to GitHub!" -ForegroundColor Green
        Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan
    } else {
        Write-Host ""
        Write-Host "Push failed. You may need to:" -ForegroundColor Red
        Write-Host "1. Create the repository on GitHub first: https://github.com/new" -ForegroundColor Yellow
        Write-Host "2. Authenticate with GitHub (use GitHub Desktop or GitHub CLI)" -ForegroundColor Yellow
    }
} else {
    Write-Host "No repository URL provided. Exiting." -ForegroundColor Red
}

