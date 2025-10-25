---
sidebar_position: 1
title: How the GraphFlow System Works
description: Learn how the GraphFlow System functions like a flowchart for animations.
---

# How the GraphFlow System Works

The GraphFlow System functions like a flowchart for animations.

Each "flow" represents a sequence of actions that happen in order (or in parallel).

## The Flow Concept

```
Trigger → Animation → Action → Event
   ↓         ↓         ↓        ↓
 Start    Fade In   Play Sound  Show UI
```

## Key Principles

1. **Nodes are Actions** — Each node performs one specific operation
2. **Connections are Timing** — Lines show the execution sequence
3. **Flow is Directional** — Animation flows from left to right
4. **Parallel Execution** — Multiple branches can run simultaneously

## Graph Structure

- **Start Point:** Usually a Trigger node (On Start, On Button Click, etc.)
- **Animation Nodes:** The main visual effects (Fade, Slide, Scale, etc.)
- **Action Nodes:** Side effects (Play Sound, Show Message, etc.)
- **Event Nodes:** Custom events for other systems
- **End Point:** Animation completes or loops back

<!-- ![\1](\2) -->
