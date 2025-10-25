---
sidebar_position: 2
title: Action Nodes
description: Learn about action nodes that perform side effects during your animations.
---

# Action Nodes

Action nodes perform side effects during your animations. They don't create visual effects but trigger other systems.

## Log Message Action
- **What it does:** Prints messages to the console
- **Perfect for:** Debugging, development testing, status updates
- **Settings:**
  - Message: Text to display
  - Log Type: Log, Warning, or Error
  - Show Timestamp: Include time information

## Set Active Action
- **What it does:** Shows or hides GameObjects
- **Perfect for:** UI state changes, object management, scene control
- **Settings:**
  - Target Object: GameObject to control
  - Set Active: True (show) or False (hide)
  - Toggle Mode: Toggle current state
  - Delay: Wait before changing state

## Play Audio Action
- **What it does:** Plays sound effects or music
- **Perfect for:** Audio feedback, sound effects, music triggers
- **Settings:**
  - Audio Source: AudioSource component to use
  - Audio Clip: Sound file to play
  - Volume: Loudness (0.0 to 1.0)
  - Pitch: Speed/tone (0.1 to 3.0)
  - Loop: Repeat continuously
  - Stop Previous: Stop other sounds first

## Play Animation Action
- **What it does:** Triggers other animations or systems
- **Perfect for:** Chained effects, complex sequences, system integration
- **Settings:**
  - Animation Name: Name of animation to trigger
  - Wait for Completion: Wait for animation to finish
  - Loop Animation: Repeat the animation
  - Animation Speed: Speed multiplier

## Wait Action
- **What it does:** Pauses execution for a specific time
- **Perfect for:** Timing control, pacing, delays between actions
- **Settings:**
  - Wait Duration: How long to wait (seconds)
  - Wait Mode: Fixed time or until condition
  - Can Be Interrupted: Allow early termination

## Trigger Animation Action
- **What it does:** Starts other GraphFlow animations
- **Perfect for:** Complex sequences, branching animations, system integration
- **Settings:**
  - Target Graph: GraphFlow Asset to trigger
  - Wait for Completion: Wait for animation to finish
  - Loop Animation: Repeat the animation
  - Animation Speed: Speed multiplier

## Setting Up Actions

1. **Add Action Node**
   - Right-click in GraphFlow Editor
   - Add Node → Action → [Action Type]
   - Configure settings in Inspector
2. **Connect to Animation**
   - Drag from animation node's output port
   - Connect to action node's input port
   - Set up the action sequence
3. **Test the Action**
   - Press Play in Unity
   - Trigger the animation
   - Verify the action executes

![Action node settings in Inspector](/img/events-actions/22-action-node-settings.png)
