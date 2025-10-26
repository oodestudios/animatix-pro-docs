---
sidebar_position: 1
---

# Getting Started

## What Is Animatix Pro

Animatix Pro is Unity's most powerful visual animation system that lets you create complex, professional animations without writing a single line of code.

Think of it as a visual programming language specifically designed for animations.

### The Magic:

Instead of coding animations in scripts, you drag and connect nodes in a visual graph editor.

Each node represents an action (like Fade In, Play Sound, or Wait 2 seconds), and you connect them to create complete animation sequences.

### Perfect For:

- **Game Developers** — UI animations, cutscenes, gameplay effects
- **Artists & Designers** — No coding required, visual workflow
- **Indie Studios** — Fast iteration, professional results
- **Mobile Games** — Optimized performance, small file sizes

## Key Features & Why It's Different

### Visual Graph System
- Drag-and-drop node-based workflow
- Real-time preview in the editor
- No coding knowledge required

### Performance Optimized
- Built specifically for Unity's rendering pipeline
- Efficient memory usage
- Mobile and WebGL optimized

### Comprehensive Animation Types
- **UI Animations**: Fade, Slide, Scale, Rotate, Color changes
- **Text Animations**: Typewriter effects, character-by-character reveals
- **3D Animations**: Object movement, camera controls, material changes
- **Audio Integration**: Sound triggers, volume tweens, pitch changes
- **Particle Systems**: Control emission rates, play/stop effects

### 🔧 Developer-Friendly
- Full API access for runtime control
- Custom node creation support
- Integration with Unity Events
- ScriptableObject-based assets

### Artist-Friendly
- Intuitive visual interface
- Real-time preview
- Preset system for common effects
- Non-destructive editing

## Installation

### 1. Import the Package
- Download Animatix Pro from the Unity Asset Store.
- Import the .unitypackage file into your project.
- Wait for Unity to process all assets.

### 2. Verify Installation
- Look for Animatix Pro in your Project window.
- Check that the Animatix Pro menu appears in Unity's top menu bar.
- Ensure no compilation errors in the Console.

### 3. First Setup
- Create a new scene or use an existing one.
- Add a GameObject to your scene (this will be your animation target).
- Add the GraphExecutor component to it.
- **Important**: The GraphExecutor automatically recognizes the GameObject it's attached to as the animation target.

<!-- ![Screenshot Placeholder – Unity Asset Store Import Process](/static/img/getting-started/1.png) -->

## Quick Start: Your First Animation

Let's create a simple button fade-in animation in under 5 minutes.

### Step 1: Create the Graph
1. Right-click in the Project Window → Create → Animatix Pro → GraphFlow Asset
2. Name it ButtonFadeIn
3. Double-click to open the GraphFlow Editor

<!-- ![Screenshot Placeholder – Creating a New GraphFlow Asset](/static/img/getting-started/2.png) -->

### Step 2: Add Nodes
1. Right-click in the graph → Add Node → Trigger → On Start
2. Right-click again → Add Node → Animation → Fade
3. Right-click again → Add Node → Action → Play Animation
4. Drag from the On Start node's output port to the Fade node's input port.

<!-- ![Screenshot Placeholder – Basic Node Connection in GraphFlow Editor](/static/img/getting-started/3.png) -->

### Step 3: Configure the Animation
1. Select the Fade node.
2. In the Inspector, set:
   - Duration: 1.0 seconds
   - Fade Start: 0 (invisible)
   - Fade End: 1 (fully visible)
   - Easing: Ease In Out

<!-- ![Screenshot Placeholder – Fade Node Settings in Inspector](/static/img/getting-started/4.png) -->

### Step 4: Attach GraphExecutor to Target
1. Select your UI button in the scene.
2. Add the GraphExecutor component to the button.
3. Assign the ButtonFadeIn asset to the Graph Asset field.

<!-- ![Screenshot Placeholder – GraphExecutor Component with Assigned GraphFlow Asset](/static/img/getting-started/5.png) -->

### Step 5: Test the Animation
1. Press Play in Unity.
2. Watch your button fade in automatically!

🎉 **Congratulations!**

You've created your first Animatix Pro animation — the button now fades in smoothly when the scene starts.

## Interface Overview

Animatix Pro uses two main interfaces that work together:

### GraphFlow Editor
- **Purpose**: Visual node-based animation creation
- **Location**: Opens when you double-click a GraphFlow Asset
- **Features**:
  - Drag-and-drop node creation
  - Visual connection system
  - Real-time preview
  - Zoom and pan controls

<!-- ![Screenshot Placeholder – GraphFlow Editor Interface](/static/img/getting-started/6.png) -->

### Inspector Window
- **Purpose**: Configure individual node properties
- **Location**: Unity's standard Inspector panel
- **Features**:
  - Detailed property editing
  - Animation curve editor
  - Target object assignment

<!-- ![Screenshot Placeholder – Inspector Window with Node Properties](/static/img/getting-started/7.png) -->

## Key Interface Elements

| Element | Purpose | Location |
|---------|---------|----------|
| Node Palette | Add new nodes | Right-click in GraphFlow Editor |
| Connection Ports | Link nodes together | Small circles on node edges |
| Inspector Panel | Edit node properties | Unity's Inspector window |
| Preview Controls | Test animations | Inspector window |
| Graph Executor | Run animations & auto-detect target | Scene GameObject component |