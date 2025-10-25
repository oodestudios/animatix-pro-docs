---
sidebar_position: 2
title: Node Types Overview
description: Learn about the six primary node types in Animatix Pro and their purposes.
---

# Node Types Overview

Animatix Pro includes six primary node types, each serving a unique purpose.

## 🎯 Trigger Nodes (Red)
- **Purpose:** Start animations based on events
- **Examples:** On Start, On Button Click, On Key Press, On Collision
- **Outputs:** 1 connection port
- **When to Use:** To begin animation sequences

## 🎨 Animation Nodes (Green)
- **Purpose:** Create visual effects
- **Examples:** Fade, Slide, Scale, Rotate, Color Change
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Main visual elements of your animation

## ⚡ Action Nodes (Blue)
- **Purpose:** Perform non-visual side effects
- **Examples:** Play Sound, Set Active, Log Message, Wait
- **Inputs:** 1+ connection ports
- **Outputs:** 0–1 connection ports
- **When to Use:** Audio control, object toggling, or debugging

## 🔔 Event Nodes (Dark Cyan)
- **Purpose:** Trigger Unity Events with automatic listener management
- **Examples:** Custom events, system notifications
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Integration with Unity's Event system
- **Key Feature:** Listeners are created automatically by the Event Manager

## ❓ Condition Nodes (Yellow)
- **Purpose:** Create decision-based animation flows
- **Examples:** Check if a button is pressed, verify object is active
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Conditional logic or state-based animation control

## ⏱️ Delay Nodes (Purple)
- **Purpose:** Wait for a specified duration
- **Examples:** Pause between animations, timed sequences
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Timing control and pacing adjustments

![Visual Representation of All Node Types with Their Colors](/img/core-concepts/09-node-types-visual-representation.png)
