---
sidebar_position: 3
title: Quick Start
description: Create your first animation in under 5 minutes with this step-by-step guide.
---

# Quick Start: Your First Animation

Let's create a simple button fade-in animation in under 5 minutes.

## Step 1: Create the Graph

1. Right-click in the Project Window → Create → Animatix Pro → GraphFlow Asset
2. Name it `ButtonFadeIn`
3. Double-click to open the GraphFlow Editor

<!-- ![\1](\2) -->

## Step 2: Add Nodes

1. Right-click in the graph → Add Node → Trigger → On Start
2. Right-click again → Add Node → Animation → Fade
3. Right-click again → Add Node → Action → Play Animation
4. Drag from the On Start node's output port to the Fade node's input port.

<!-- ![\1](\2) -->

## Step 3: Configure the Animation

1. Select the Fade node.
2. In the Inspector, set:
   - **Duration:** 1.0 seconds
   - **Fade Start:** 0 (invisible)
   - **Fade End:** 1 (fully visible)
   - **Easing:** Ease In Out

<!-- ![\1](\2) -->

## Step 4: Attach GraphExecutor to Target

1. Select your UI button in the scene.
2. Add the GraphExecutor component to the button.
3. Assign the `ButtonFadeIn` asset to the Graph Asset field.

<!-- ![\1](\2) -->

## Step 5: Test the Animation

1. Press Play in Unity.
2. Watch your button fade in automatically!

🎉 **Congratulations!** You've created your first Animatix Pro animation — the button now fades in smoothly when the scene starts.

## Interface Overview

Animatix Pro uses two main interfaces that work together:

### GraphFlow Editor
- **Purpose:** Visual node-based animation creation
- **Location:** Opens when you double-click a GraphFlow Asset
- **Features:**
  - Drag-and-drop node creation
  - Visual connection system
  - Real-time preview
  - Zoom and pan controls

<!-- ![\1](\2) -->

### Inspector Window
- **Purpose:** Configure individual node properties
- **Location:** Unity's standard Inspector panel
- **Features:**
  - Detailed property editing
  - Animation curve editor
  - Target object assignment

<!-- ![\1](\2) -->

## Key Interface Elements

| Element | Purpose | Location |
|---------|---------|----------|
| Node Palette | Add new nodes | Right-click in GraphFlow Editor |
| Connection Ports | Link nodes together | Small circles on node edges |
| Inspector Panel | Edit node properties | Unity's Inspector window |
| Preview Controls | Test animations | Inspector window |
| Graph Executor | Run animations & auto-detect target | Scene GameObject component |
