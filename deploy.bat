@echo off
echo ========================================
echo   Animatix Pro Documentation Deployer
echo ========================================
echo.
echo This will deploy your documentation to GitHub Pages
echo Your site will be live at: https://oodestudios.github.io/animatix-pro-docs/
echo.
pause
echo.
echo Building documentation...
npm run build
echo.
echo Deploying to GitHub Pages...
npm run deploy
echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your documentation is now live at:
echo https://oodestudios.github.io/animatix-pro-docs/
echo.
echo Press any key to exit...
pause >nul
