# Test script to verify Docusaurus build works locally
# Run this before pushing to GitHub to catch issues early

Write-Host "Testing Docusaurus build locally..." -ForegroundColor Green

# Change to the docs directory
Set-Location -Path "animatix-pro-docs"

# Check if package.json exists
if (-not (Test-Path "package.json")) {
    Write-Host "ERROR: package.json not found in animatix-pro-docs directory" -ForegroundColor Red
    exit 1
}

Write-Host "✓ package.json found" -ForegroundColor Green

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm ci --prefer-offline --no-audit

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green

# Build the site
Write-Host "Building Docusaurus site..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Build failed" -ForegroundColor Red
    exit 1
}

# Check if build directory exists
if (-not (Test-Path "build")) {
    Write-Host "ERROR: Build directory not created" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Build completed successfully" -ForegroundColor Green
Write-Host "✓ Build directory created" -ForegroundColor Green

# List build contents
Write-Host "Build contents:" -ForegroundColor Cyan
Get-ChildItem -Path "build" -Recurse | Select-Object Name, Length, LastWriteTime | Format-Table

Write-Host "`nBuild test completed successfully! Ready to push to GitHub." -ForegroundColor Green
