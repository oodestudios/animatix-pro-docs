---
sidebar_position: 1
title: Adding Trigger Nodes
description: Learn about trigger nodes that detect when something happens and start animation sequences.
---

# Adding Trigger Nodes

Trigger nodes are the starting points of your animations. They detect when something happens and start the animation sequence.

## On Start Trigger
- **When it fires:** Automatically when the scene begins
- **Perfect for:** Auto-playing animations, scene initialization
- **Settings:**
  - Startup Delay: Wait time before firing (prevents false triggers)
  - Fire Once: Only trigger once per scene

## On Button Click Trigger
- **When it fires:** When a UI button is pressed
- **Perfect for:** Interactive UI, menu systems, user input
- **Settings:**
  - Target Button: Which button to monitor
  - Fire Once: Only trigger once per click
  - Reset on Scene Change: Reset trigger state

## On Key Press Trigger
- **When it fires:** When a specific key is pressed
- **Perfect for:** Keyboard shortcuts, debug controls, alternative input
- **Settings:**
  - Key Code: Which key to monitor (Space, Enter, etc.)
  - Fire Once: Only trigger once per press
  - Startup Delay: Wait time before monitoring

## On Collision Trigger
- **When it fires:** When objects collide
- **Perfect for:** Physics-based triggers, interaction systems
- **Settings:**
  - Collision Layer: Which layers to detect
  - Collision Type: Enter, Exit, or Stay
  - Target Object: Specific object to collide with

## On Timer Trigger
- **When it fires:** After a specific time delay
- **Perfect for:** Timed sequences, delayed actions, scheduled events
- **Settings:**
  - Timer Duration: How long to wait
  - Fire Once: Only trigger once
  - Loop: Repeat the timer

## On API Call Trigger
- **When it fires:** When called from code
- **Perfect for:** Programmatic triggers, custom events
- **Settings:**
  - Trigger Name: Identifier for the trigger
  - Fire Once: Only trigger once per call
  - Reset Method: How to reset the trigger

## Setting Up Triggers

1. **Add Trigger Node**
   - Right-click in GraphFlow Editor
   - Add Node → Trigger → [Trigger Type]
   - Configure settings in Inspector
2. **Connect to Animation**
   - Drag from trigger's output port
   - Connect to animation node's input port
   - Set up the animation sequence
3. **Test the Trigger**
   - Press Play in Unity
   - Trigger the condition (click button, press key, etc.)
   - Watch the animation play

![Trigger node settings in Inspector](/img/events-actions/21-trigger-node-settings.png)
