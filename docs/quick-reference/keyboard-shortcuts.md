---
sidebar_position: 3
title: Keyboard Shortcuts & Tips
description: A quick reference for keyboard shortcuts and general tips for using Animatix Pro.
---

# Keyboard Shortcuts & Tips

## GraphFlow Editor
- **Right-click:** Open node creation menu
- **Drag:** Pan the graph view
- **Scroll:** Zoom in/out
- **Ctrl+Z:** Undo last action
- **Ctrl+Y:** Redo last action
- **Delete:** Remove selected nodes
- **Ctrl+A:** Select all nodes
- **Ctrl+D:** Duplicate selected nodes

## Inspector Window
- **Tab:** Move between fields
- **Enter:** Apply changes
- **Escape:** Cancel changes
- **Ctrl+C:** Copy values
- **Ctrl+V:** Paste values
- **F:** Focus on selected object

## General Tips
- Use descriptive names for graphs and nodes
- Group related nodes together visually
- Test animations frequently during development
- Use parallel connections for simultaneous animations
- Keep animations short for better performance
- Use consistent timing across similar animations
- Test on target hardware for performance validation
- Document complex animations for team members
- Use version control for animation assets
- Backup important graphs regularly

## Performance Tips
- Limit particle counts on mobile devices
- Use object pooling for frequently used objects
- Cache frequently accessed objects and components
- Optimize texture sizes for target platforms
- Test on actual hardware, not just the editor
- Use simpler animations for distant objects
- Avoid continuous animations that drain battery
- Profile performance regularly during development

## Node Types Summary

| Node Type | Color | Inputs | Outputs | Purpose | Common Use |
|-----------|-------|--------|---------|---------|------------|
| Trigger | Green | 0 | 1 | Start animations | On Start, On Click, On Key |
| Animation | Blue | 1+ | 1+ | Visual effects | Fade, Slide, Scale, Rotate |
| Action | Orange | 1+ | 0-1 | Side effects | Play Sound, Set Active, Wait |
| Event | Purple | 1+ | 1+ | Unity Events | Custom events, system integration |
| Condition | Yellow | 1+ | 1+ | Logic decisions | State checks, conditional flow |
| Delay | Gray | 1+ | 1+ | Timing control | Pauses, delays, pacing |
