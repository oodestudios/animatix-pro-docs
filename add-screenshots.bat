@echo off
echo 🖼️  Animatix Pro Screenshot Organizer
echo =====================================
echo.

REM Check if PowerShell is available
powershell -Command "& {Write-Host 'Running screenshot organizer...' -ForegroundColor Cyan}"

REM Run the PowerShell script
powershell -ExecutionPolicy Bypass -File "add-screenshots.ps1"

echo.
echo Press any key to exit...
pause >nul
