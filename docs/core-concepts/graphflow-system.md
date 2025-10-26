---
sidebar_position: 1
---

# Core Concepts

## 2️⃣ Core Concepts

### How the GraphFlow System Works

The GraphFlow System functions like a flowchart for animations.

Each "flow" represents a sequence of actions that happen in order (or in parallel).

### The Flow Concept

```
Trigger → Animation → Action → Event
   ↓         ↓         ↓        ↓
 Start    Fade In   Play Sound  Show UI
```

### Key Principles

1. **Nodes are Actions** — Each node performs one specific operation
2. **Connections are Timing** — Lines show the execution sequence
3. **Flow is Directional** — Animation flows from left to right
4. **Parallel Execution** — Multiple branches can run simultaneously

### Graph Structure

- **Start Point:** Usually a Trigger node (On Start, On Button Click, etc.)
- **Animation Nodes:** The main visual effects (Fade, Slide, Scale, etc.)
- **Action Nodes:** Side effects (Play Sound, Show Message, etc.)
- **Event Nodes:** Custom events for other systems
- **End Point:** Animation completes or loops back

**📸 [Screenshot Placeholder – Example Graph Showing Flow from Trigger to Multiple Animations]**

---

## Node Types Overview

Animatix Pro includes six primary node types, each serving a unique purpose.

### 🎯 Trigger Nodes (Red)
- **Purpose:** Start animations based on events
- **Examples:** On Start, On Button Click, On Key Press, On Collision
- **Outputs:** 1 connection port
- **When to Use:** To begin animation sequences

### 🎨 Animation Nodes (Green)
- **Purpose:** Create visual effects
- **Examples:** Fade, Slide, Scale, Rotate, Color Change
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Main visual elements of your animation

### ⚡ Action Nodes (Blue)
- **Purpose:** Perform non-visual side effects
- **Examples:** Play Sound, Set Active, Log Message, Wait
- **Inputs:** 1+ connection ports
- **Outputs:** 0–1 connection ports
- **When to Use:** Audio control, object toggling, or debugging

### 🔔 Event Nodes (Dark Cyan)
- **Purpose:** Trigger Unity Events with automatic listener management
- **Examples:** Custom events, system notifications
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Integration with Unity's Event system
- **Key Feature:** Listeners are created automatically by the Event Manager

### ❓ Condition Nodes (Yellow)
- **Purpose:** Create decision-based animation flows
- **Examples:** Check if a button is pressed, verify object is active
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Conditional logic or state-based animation control

### ⏱️ Delay Nodes (Purple)
- **Purpose:** Wait for a specified duration
- **Examples:** Pause between animations, timed sequences
- **Inputs:** 1+ connection ports
- **Outputs:** 1+ connection ports
- **When to Use:** Timing control and pacing adjustments

**📸 [Screenshot Placeholder – Visual Representation of All Node Types with Their Colors]**

---

## GraphExecutor — How Animations Run

The GraphExecutor is the brain of Animatix Pro — it reads your graph and executes animations in real time.

**Think of it as the conductor of an orchestra.**

### How It Works

1. **Graph Loading** — Loads your assigned GraphFlow Asset
2. **Target Recognition** — Automatically identifies the GameObject it's attached to
3. **Node Initialization** — Prepares nodes with recognized target
4. **Trigger Detection** — Waits for trigger conditions to be met
5. **Sequential Execution** — Runs animations in connected order
6. **Parallel Processing** — Handles two animation simultaneously
7. **Completion** — Ends or loops the animation flow

### GraphExecutor Component

```csharp
// Main properties you'll use
public GraphFlowAsset GraphAsset;        // Your animation graph
public bool PlayOnStart = true;          // Auto-play when scene starts
public bool LoopAnimation = false;       // Repeat the animation
public float PlaybackSpeed = 1.0f;       // Speed multiplier
```

**📸 [Screenshot Placeholder – GraphExecutor Inspector Showing Correct Settings]**
(Graph Asset assigned, Play On Start enabled, Loop Animation off, Playback Speed 1.0, auto-target recognition visible)

### Runtime Control

```csharp
// Start animation
GraphExecutorUtil.RunByName("MyAnimation");
// Stop animation
GraphExecutorUtil.StopByName("MyAnimation");

// Pause / Resume
GraphExecutorUtil.PauseByName("MyAnimation");
GraphExecutorUtil.ResumeByName("MyAnimation");

// Check status
bool isPlaying = GraphExecutorUtil.IsPlaying("MyAnimation");
float progress = GraphExecutorUtil.GetProgress("MyAnimation");
```

**📸 [Screenshot Placeholder – GraphExecutor Component in Inspector (All Properties Displayed)]**

---

## Events & Actions System

The Events & Actions System lets you create interactive animations that react to player input and game state changes.

### Event Flow

```
Player Action → Trigger Node → Animation → Action Node → Event Node → Automatic Event Response
     ↓              ↓            ↓           ↓              ↓              ↓
Button Click → On Click → Fade Out → Play Sound → Custom Event → Event Manager handles automatically
```

### Automatic Event Management

- **Event Listeners:** Automatically created by the Event Manager
- **No Manual Setup:** No need to manually subscribe or unregister events
- **Event Manager:** Handles routing and listener management
- **System Integration:** Seamless connection with Unity's event system

### Built-In Triggers

| Trigger | Description | Use Case |
|---------|-------------|----------|
| On Start | Fires when scene begins | Auto-play animations |
| On Button Click | Fires when UI button is pressed | Interactive UI |
| On Key Press | Fires when specific key is pressed | Keyboard shortcuts |
| On Collision | Fires when objects collide | Physics-based triggers |
| On Timer | Fires after time delay | Timed sequences |
| On API Call | Fires from code | Programmatic triggers |

### Built-In Actions

| Action | Description | Use Case |
|--------|-------------|----------|
| Play Audio | Plays sound effects | Audio feedback |
| Set Active | Show/hide objects | UI visibility control |
| Log Message | Outputs to console | Debugging |
| Play Animation | Triggers another animation | Chained effects |
| Wait | Pauses execution | Timing control |
| Trigger Animation | Starts other graphs | Complex sequences |

**📸 [Screenshot Placeholder – Example Graph Showing Trigger → Animation → Action Flow]**

---

## Parallel Execution & Delays

Animatix Pro supports running multiple animations simultaneously, allowing for layered and synchronized effects.

### Parallel Execution

```
Trigger Node
     ↓
    ┌─→ Animation A (Fade In)
    ├─→ Animation B (Slide In)
    └─→ Animation C (Scale Up)
```

### Setting Up Parallel Animations

1. **Connect Multiple Branches** — Drag from one node to multiple targets
2. **Enable Parallel Mode** — Check Parallel With Previous in Animation nodes
3. **Sync Timing** — Use Delay Nodes to align actions
4. **Control Flow** — Combine with Condition Nodes for advanced logic

### Delay Control

| Delay Type | Purpose | Example |
|------------|---------|---------|
| Delay Before | Wait before starting | Pause 2 seconds, then fade |
| Delay After | Wait after completing | Fade out, then wait 1 second |
| Delay Between | Pause between animations | Fade → Wait → Slide |
| Custom Timing | Precise control | Use Delay Nodes for exact timing |

### Real-World Example

```
On Button Click
     ↓
Play Click Sound (immediate)
     ↓
Fade Out Button (0.5s duration)
     ↓
Wait 0.3 seconds
     ↓
Slide In Next Screen (1.0s duration)
```

This creates a polished button interaction with audio feedback, smooth transitions, and properly timed pacing.

**📸 [Screenshot Placeholder – Parallel Execution Example in GraphFlow Editor]**