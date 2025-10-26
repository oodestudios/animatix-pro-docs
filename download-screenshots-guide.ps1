$files = @(
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="01-unity-asset-store-import.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="02-creating-graphflow-asset.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="03-basic-node-connection.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="04-fade-node-settings.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="05-graph-executor-component.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="06-graphflow-editor-interface.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="07-inspector-window-properties.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="08-example-graph-flow.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="09-node-types-visual-representation.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="10-graph-executor-inspector.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="11-graph-executor-all-properties.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="12-trigger-animation-action-flow.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="13-parallel-execution-example.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="14-ui-animation-node-settings.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="15-text-animation-character-word-modes.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="16-3d-object-animation-inspector.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="17-camera-animation-movement-effects.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="18-audio-animation-volume-pitch.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="19-material-animation-color-fade.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="20-particle-system-emission-tween.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="21-trigger-node-settings.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="22-action-node-settings.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="23-event-node-settings.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="24-condition-node-settings.png"},
    @{url="https://drive.google.com/uc?export=download&id=1bbb447-HpfjXdRloaLp3PlFkPvDiScVz"; name="25-api-reference-example.png"}
)

Write-Host "Downloading screenshots from Google Drive..."
Write-Host "Please note: Google Drive requires individual file IDs for direct downloads."
Write-Host "You'll need to manually download the files and place them in static\img\screenshots\"
Write-Host ""
Write-Host "Files to download:"
foreach ($file in $files) {
    Write-Host "- $($file.name)"
}
Write-Host ""
Write-Host "After downloading, rename them to match the names above and place them in:"
Write-Host "C:\Users\AMIR\animatix-pro-docs\static\img\screenshots\"

