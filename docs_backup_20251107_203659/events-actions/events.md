---
sidebar_position: 3
title: Event Nodes
description: Learn about event nodes that integrate with Unity's event system for custom events.
---

# Event Nodes

Event nodes integrate with Unity's event system, allowing you to trigger custom events that other systems can listen to.

## UnityEvent Integration
- **What it does:** Fires Unity Events when triggered
- **Perfect for:** System integration, custom events, external triggers
- **Settings:**
  - Event Name: Identifier for the event
  - Fire On Start: Trigger automatically when node starts
  - Auto Preview: Test the event in editor
  - Preview Delay: Wait time before preview

## Parameterized Events
- **What it does:** Sends data with the event
- **Perfect for:** Complex event systems, data passing, state changes
- **Settings:**
  - Use Parameters: Enable parameter passing
  - Parameter Type: String, Integer, Float, or Boolean
  - Parameter Value: Data to send with event
  - Event Name: Identifier for the event

## Event Listeners
- **What it does:** Responds to events from other systems automatically
- **Perfect for:** Event-driven architecture, system communication
- **Settings:**
  - Event Name: Which event to listen for
  - Fire Once: Only respond once per event
  - Reset on Scene Change: Reset listener state
  - Automatic Setup: Listeners are created automatically by the Event Manager

## Setting Up Events

1. **Add Event Node**
   - Right-click in GraphFlow Editor
   - Add Node → Event → [Event Type]
   - Configure settings in Inspector
2. **Event Listeners Created Automatically**
   - The Event system automatically creates listeners
   - No manual listener setup required
   - Events are handled by the Event Manager automatically
3. **Test the Event**
   - Press Play in Unity
   - Trigger the event
   - Verify the event system responds automatically

<!-- ![\1](\2) -->
