---
sidebar_position: 1
---

# Troubleshooting

## Common Issues & Fixes

### Animation Not Playing
- **Check GraphExecutor** — Ensure GraphExecutor component is attached
- **Verify Graph Asset** — Make sure GraphFlow Asset is assigned
- **Check Play On Start** — Ensure "Play On Start" is enabled
- **Verify Trigger** — Make sure trigger conditions are met

### Nodes Not Connecting
- **Check Node Types** — Ensure compatible node types are being connected
- **Verify Ports** — Make sure you're connecting to the correct ports
- **Check Node State** — Ensure nodes are properly initialized
- **Refresh Graph** — Try refreshing the graph in the editor

### Animation Playing Too Fast/Slow
- **Check Playback Speed** — Adjust Playback Speed in GraphExecutor
- **Verify Duration** — Check animation duration settings
- **Check Easing** — Ensure easing curves are properly set
- **Test on Device** — Performance may vary on different hardware

### Audio Not Playing
- **Check Audio Source** — Ensure AudioSource component is attached
- **Verify Audio Clip** — Make sure audio clip is assigned
- **Check Volume** — Ensure volume is not muted
- **Verify Audio Settings** — Check Unity's audio settings

### Particles Not Showing
- **Check Particle System** — Ensure ParticleSystem component is attached
- **Verify Emission** — Make sure emission is enabled
- **Check Material** — Ensure particle material is assigned
- **Verify Camera** — Make sure camera can see the particles

## Graph Not Playing? Checklist

### Basic Checks
- GraphExecutor component is attached to GameObject
- GraphFlow Asset is assigned to Graph Asset field
- "Play On Start" is enabled (if you want auto-play)
- Scene is playing (not paused)
- No compilation errors in Console

### Trigger Checks
- Trigger node is properly configured
- Trigger conditions are being met
- Trigger is not set to "Fire Once" if you need repeated triggers
- Startup delay has passed (for On Start triggers)

### Connection Checks
- Nodes are properly connected
- Connections are enabled (not grayed out)
- No orphaned nodes (nodes with no connections)
- Graph has a clear start point (trigger node)

### Target Checks
- GraphExecutor is attached to the object you want to animate
- Target object is active in the scene
- Target object has required components (e.g., UI components for UI animations)
- Target object is visible to the camera

### Performance Checks
- Animation is not too complex for the hardware
- No infinite loops in the graph
- Memory usage is reasonable
- Frame rate is not too low

## Node Errors or Missing Connections

### Missing Connections
- **Check Node Types** — Ensure compatible node types are being connected
- **Verify Ports** — Make sure you're connecting to the correct ports
- **Check Node State** — Ensure nodes are properly initialized
- **Refresh Graph** — Try refreshing the graph in the editor

### Node Errors
- **Check Node Configuration** — Ensure all required fields are filled
- **Verify GraphExecutor Setup** — Make sure GraphExecutor is attached to the target object
- **Check Node State** — Ensure nodes are properly initialized
- **Refresh Graph** — Try refreshing the graph in the editor

### Connection Errors
- **Check Connection Validity** — Ensure connections are valid
- **Verify Node IDs** — Make sure node IDs are correct
- **Check Connection State** — Ensure connections are enabled
- **Refresh Graph** — Try refreshing the graph in the editor

### Target Errors
- **Check GraphExecutor Attachment** — Ensure GraphExecutor is attached to the correct object
- **Verify Target Components** — Make sure target has required components
- **Check Target State** — Ensure target is active and visible
- **Refresh Graph** — Try refreshing the graph in the editor

## Debug Mode & Logging

### Enable Debug Logging
- **In GraphExecutor** — Check "Enable Debug Logging" checkbox
- **In Animation Nodes** — Enable "Debug Mode" for specific nodes
- **In Action Nodes** — Enable "Log Message" actions for debugging
- **In Event Nodes** — Enable "Debug Log" for event tracking

### Debug Information
- **Animation Status** — Shows when animations start/stop
- **Node Execution** — Shows which nodes are executing
- **Connection Flow** — Shows how connections are being followed
- **Error Messages** — Shows detailed error information

### Console Output
- **Animation Events** — Shows animation start/stop events
- **Node Execution** — Shows which nodes are executing
- **Connection Flow** — Shows how connections are being followed
- **Error Messages** — Shows detailed error information

### Performance Debugging
- **Frame Rate** — Monitor frame rate during animations
- **Memory Usage** — Check memory usage during animations
- **CPU Usage** — Monitor CPU usage during animations
- **GPU Usage** — Check GPU usage during animations

### Common Debug Messages
- **"Animation started"** — Animation has begun
- **"Animation completed"** — Animation has finished
- **"Node executing"** — A node is currently executing
- **"Connection followed"** — A connection is being followed
- **"Error: [message]"** — An error has occurred