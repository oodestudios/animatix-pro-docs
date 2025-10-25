# PowerShell script to help organize screenshots
# Run this script after downloading screenshots from Google Drive

Write-Host "🖼️  Animatix Pro Screenshot Organizer" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if screenshots directory exists
$screenshotsDir = ".\screenshots"
if (-not (Test-Path $screenshotsDir)) {
    Write-Host "📁 Creating screenshots directory..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $screenshotsDir
}

Write-Host "📋 Instructions:" -ForegroundColor Green
Write-Host "1. Download all 25 screenshots from Google Drive to the 'screenshots' folder"
Write-Host "2. Rename them to remove the extra .png extension"
Write-Host "3. Run this script to organize them automatically"
Write-Host ""

# Screenshot mapping
$screenshotMap = @{
    "01-unity-asset-store-import.png" = "static\img\getting-started\"
    "02-creating-graphflow-asset.png" = "static\img\getting-started\"
    "03-basic-node-connection.png" = "static\img\getting-started\"
    "04-fade-node-settings.png" = "static\img\getting-started\"
    "05-graph-executor-component.png" = "static\img\getting-started\"
    "06-graphflow-editor-interface.png" = "static\img\getting-started\"
    "07-inspector-window-properties.png" = "static\img\getting-started\"
    "08-example-graph-flow.png" = "static\img\core-concepts\"
    "09-node-types-visual-representation.png" = "static\img\core-concepts\"
    "10-graph-executor-inspector.png" = "static\img\core-concepts\"
    "11-graph-executor-all-properties.png" = "static\img\core-concepts\"
    "12-trigger-animation-action-flow.png" = "static\img\core-concepts\"
    "13-parallel-execution-example.png" = "static\img\core-concepts\"
    "14-ui-animation-node-settings.png" = "static\img\animation-modules\"
    "15-text-animation-character-word-modes.png" = "static\img\animation-modules\"
    "16-3d-object-animation-inspector.png" = "static\img\animation-modules\"
    "17-camera-animation-movement-effects.png" = "static\img\animation-modules\"
    "18-audio-animation-volume-pitch.png" = "static\img\animation-modules\"
    "19-material-animation-color-fade.png" = "static\img\animation-modules\"
    "20-particle-system-emission-tween.png" = "static\img\animation-modules\"
    "21-trigger-node-settings.png" = "static\img\events-actions\"
    "22-action-node-settings.png" = "static\img\events-actions\"
    "23-event-node-settings.png" = "static\img\events-actions\"
    "24-condition-node-settings.png" = "static\img\events-actions\"
    "25-api-reference-example.png" = "static\img\api-reference\"
}

Write-Host "🔍 Looking for screenshots..." -ForegroundColor Yellow

$movedCount = 0
foreach ($screenshot in $screenshotMap.Keys) {
    $sourcePath = Join-Path $screenshotsDir $screenshot
    $destDir = $screenshotMap[$screenshot]
    $destPath = Join-Path $destDir $screenshot
    
    if (Test-Path $sourcePath) {
        Write-Host "✅ Moving $screenshot to $destDir" -ForegroundColor Green
        Move-Item -Path $sourcePath -Destination $destPath -Force
        $movedCount++
    } else {
        Write-Host "❌ Missing: $screenshot" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "Moved $movedCount out of 25 screenshots" -ForegroundColor White

if ($movedCount -eq 25) {
    Write-Host ""
    Write-Host "🎉 All screenshots organized successfully!" -ForegroundColor Green
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Run: git add ." -ForegroundColor White
    Write-Host "2. Run: git commit -m 'Add screenshots'" -ForegroundColor White
    Write-Host "3. Run: git push" -ForegroundColor White
    Write-Host "4. Wait for GitHub Actions to deploy your site!" -ForegroundColor White
} else {
    Write-Host ""
    Write-Host "⚠️  Some screenshots are missing. Please check the list above." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🌐 Your site will be live at: https://oodestudios.github.io/animatix-pro-docs/" -ForegroundColor Cyan
