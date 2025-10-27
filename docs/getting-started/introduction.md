---
sidebar_position: 1
title: Animatix Pro — Complete Documentation
description: Complete guide to Animatix Pro - Unity's most powerful visual animation system
---

# Animatix Pro — Complete Documentation

🎯 **Goal: "Get started in 5 minutes, master it in 30."**

---

## 1️⃣ Getting Started

### What Is Animatix Pro

Animatix Pro is Unity's most powerful visual animation system that lets you create complex, professional animations without writing a single line of code.

**Think of it as a visual programming language specifically designed for animations.**

**The Magic:**
- Instead of coding animations in scripts, you drag and connect nodes in a visual graph editor.
- Each node represents an action (like Fade In, Play Sound, or Wait 2 seconds), and you connect them to create complete animation sequences.

**Perfect For:**
- **Game Developers** — UI animations, cutscenes, gameplay effects
- **Artists & Designers** — No coding required, visual workflow
- **Indie Studios** — Fast iteration, professional results
- **Mobile Games** — Optimized performance, small file sizes

### Key Features & Why It's Different

**Visual Graph System**
- Drag-and-drop node-based workflow
- Real-time preview in the editor
- No coding knowledge required

**Performance Optimized**
- Built specifically for Unity's rendering pipeline
- Efficient memory usage
- Mobile and WebGL optimized

**Comprehensive Animation Types**
- **UI Animations:** Fade, Slide, Scale, Rotate, Color changes
- **Text Animations:** Typewriter effects, character-by-character reveals
- **3D Animations:** Object movement, camera controls, material changes
- **Audio Integration:** Sound triggers, volume tweens, pitch changes
- **Particle Systems:** Control emission rates, play/stop effects

**🔧 Developer-Friendly**
- Full API access for runtime control
- Custom node creation support
- Integration with Unity Events
- ScriptableObject-based assets

**Artist-Friendly**
- Intuitive visual interface
- Real-time preview
- Preset system for common effects
- Non-destructive editing

---

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
- **Important:** The GraphExecutor automatically recognizes the GameObject it's attached to as the animation target.

**📸 [Screenshot Placeholder – Unity Asset Store Import Process]**

---

## Quick Start: Your First Animation

Let's create a simple button fade-in animation in under 5 minutes.

### Step 1: Create the Graph
1. Right-click in the Project Window → Create → Animatix Pro → GraphFlow Asset
2. Name it `ButtonFadeIn`
3. Double-click to open the GraphFlow Editor

**📸 [Screenshot Placeholder – Creating a New GraphFlow Asset]**

### Step 2: Add Nodes
1. Right-click in the graph → Add Node → Trigger → On Start
2. Right-click again → Add Node → Animation → Fade
3. Right-click again → Add Node → Action → Play Animation
4. Drag from the On Start node's output port to the Fade node's input port.

**📸 [Screenshot Placeholder – Basic Node Connection in GraphFlow Editor]**

### Step 3: Configure the Animation
1. Select the Fade node.
2. In the Inspector, set:
   - **Duration:** 1.0 seconds
   - **Fade Start:** 0 (invisible)
   - **Fade End:** 1 (fully visible)
   - **Easing:** Ease In Out

**📸 [Screenshot Placeholder – Fade Node Settings in Inspector]**

### Step 4: Attach GraphExecutor to Target
1. Select your UI button in the scene.
2. Add the GraphExecutor component to the button.
3. Assign the `ButtonFadeIn` asset to the Graph Asset field.

**📸 [Screenshot Placeholder – GraphExecutor Component with Assigned GraphFlow Asset]**

### Step 5: Test the Animation
1. Press Play in Unity.
2. Watch your button fade in automatically!

🎉 **Congratulations!** You've created your first Animatix Pro animation — the button now fades in smoothly when the scene starts.

---

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

**📸 [Screenshot Placeholder – GraphFlow Editor Interface]**

### Inspector Window
- **Purpose:** Configure individual node properties
- **Location:** Unity's standard Inspector panel
- **Features:**
  - Detailed property editing
  - Animation curve editor
  - Target object assignment

**📸 [Screenshot Placeholder – Inspector Window with Node Properties]**

### Key Interface Elements

| Element | Purpose | Location |
|---------|---------|----------|
| Node Palette | Add new nodes | Right-click in GraphFlow Editor |
| Connection Ports | Link nodes together | Small circles on node edges |
| Inspector Panel | Edit node properties | Unity's Inspector window |
| Preview Controls | Test animations | Inspector window |
| Graph Executor | Run animations & auto-detect target | Scene GameObject component |

---

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

---

## 3️⃣ Animation Modules

Animatix Pro offers a complete suite of animation modules designed to bring every element of your game or app to life — from UI and text to 3D objects, cameras, audio, materials, and particles.

Each module is modular, stackable, and fully compatible with the GraphFlow System, Event System, and GraphExecutor runtime engine.

### 🟦 UI Animations

UI Animations are the foundation of modern interfaces. They make your menus feel responsive, your buttons clickable, and your interface alive.

#### Transform Animations

**Fade**
- Smoothly transitions transparency from 0% → 100%.
- Perfect for: menus, popups, loading screens.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Fade Start | float | 0.0–1.0 | 0.0 | Starting alpha value |
| Fade End | float | 0.0–1.0 | 1.0 | Ending alpha value |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |
| Update Method | enum | LateUpdate–FixedUpdate | LateUpdate | Update timing |

**Slide**
- Moves objects between positions.
- Perfect for: panels, notifications, off-screen transitions.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 0.5s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Slide From | Vector2 | Any | (0, -100) | Starting position offset |
| Slide To | Vector2 | Any | (0, 0) | Ending position offset |
| Use Local Space | bool | true/false | false | Use local vs world offset |
| Snapping Mode | enum | None–Smooth | None | Position snapping |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

**Scale**
- Changes object size smoothly.
- Perfect for: button presses, emphasis effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 0.3s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Scale From | Vector3 | 0.0–10.0 | (0, 0, 0) | Starting scale |
| Scale To | Vector3 | 0.0–10.0 | (1, 1, 1) | Ending scale |
| Uniform Scaling | bool | true/false | true | Apply same scale to all axes |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

**Rotate**
- Spins objects around center or local pivot.
- Perfect for: loaders, icons, interactive feedback.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Rotation From | Vector3 | 0–360° | (0, 0, 0) | Starting rotation |
| Rotation To | Vector3 | 0–360° | (0, 0, 360) | Ending rotation |
| Use Local Space | bool | true/false | true | Use local vs world rotation |
| Loop Rotation | bool | true/false | false | Continuous rotation |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

#### Visual Effects

**Color Tint**
- Changes color or alpha of UI elements.
- Perfect for: highlighting, state changes, visual feedback.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 0.5s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Color From | Color | RGBA | White | Starting color |
| Color To | Color | RGBA | Target color | Ending color |
| Alpha Only | bool | true/false | false | Only change alpha channel |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

**Jelly**
- Bouncy, elastic deformation effect.
- Perfect for: button presses, playful interactions.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 0.3s | Animation duration |
| Easing | enum | Linear–Elastic | Elastic | Easing curve type |
| Scale From | float | 0.1–2.0 | 1.0 | Starting scale |
| Scale To | float | 0.1–2.0 | 1.0 | Ending scale |
| Overshoot | float | 0.0–2.0 | 0.2 | Bounce overshoot amount |
| Elasticity | float | 0.0–1.0 | 0.8 | Elastic bounce strength |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

**Blur**
- Applies real-time UI blur effect.
- Perfect for: background blur, depth of field effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Blur From | float | 0.0–10.0 | 0.0 | Starting blur strength |
| Blur To | float | 0.0–10.0 | 5.0 | Ending blur strength |
| Blur Mode | enum | Standard–Advanced | Standard | Blur quality mode |
| Target Canvas Group | CanvasGroup | Reference | null | CanvasGroup to blur |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

#### Impact Effects

**Punch**
- Sharp, quick movement for impact feedback.
- Perfect for: button clicks, error messages.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–1.0s | 0.15s | Animation duration |
| Punch Direction | Vector3 | Any | (1, 0, 0) | Direction of punch |
| Punch Amount | float | 0.0–100.0 | 10.0 | Distance of punch |
| Vibrato | int | 0–10 | 5 | Number of vibrations |
| Elasticity | float | 0.0–1.0 | 0.5 | Bounce elasticity |

**Bounce**
- Elastic bouncing motion.
- Perfect for: item drops, playful animations.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–2.0s | 0.5s | Animation duration |
| Bounce Height | float | 0.0–50.0 | 10.0 | Maximum bounce height |
| Bounce Count | int | 1–10 | 3 | Number of bounces |
| Decay Rate | float | 0.0–1.0 | 0.7 | Bounce decay rate |
| Direction | Vector3 | Any | (0, 1, 0) | Bounce direction |

**Shake**
- Random shaking motion.
- Perfect for: earthquakes, impact effects, alerts.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–3.0s | 0.5s | Animation duration |
| Shake Strength | Vector3 | Any | (5, 5, 5) | Shake strength per axis |
| Vibrato | int | 1–20 | 10 | Number of vibrations |
| Randomness | float | 0.0–100.0 | 50.0 | Shake randomness |

**Elastic Scale**
- Overshooting scale animation.
- Perfect for: pop-ups, attention-grabbing effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–2.0s | 0.4s | Animation duration |
| Scale From | Vector3 | 0.0–2.0 | (0, 0, 0) | Starting scale |
| Scale To | Vector3 | 0.0–2.0 | (1, 1, 1) | Ending scale |
| Overshoot | float | 0.0–2.0 | 0.3 | Overshoot scale amount |
| Elasticity | float | 0.0–1.0 | 0.7 | Elastic strength |

**Example Use Cases**
- On Start → Fade In Menu (1.0 s)
- On Click → Scale Down (0.1 s) → Scale Up (0.2 s)

**📸 [Screenshot Placeholder: UI Animation Node Settings in Inspector]**

---

### 🟨 Text Animations

Text animations make dialogue dynamic, menus expressive, and words memorable.

#### Character Effects

**Character Scale Pop**
- Bouncy character scaling effect.
- Perfect for: titles, headings, emphasis.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | Elastic | Easing curve type |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Scale From | float | 0.0–2.0 | 0.5 | Starting scale |
| Scale To | float | 0.0–2.0 | 1.0 | Ending scale |
| Interval | float | 0.0–1.0s | 0.05s | Delay between each character |
| Overshoot | float | 0.0–1.0 | 0.2 | Bounce overshoot |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |

**Character Fade**
- Character-by-character fade reveal.
- Perfect for: dramatic reveals, dialogue.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Fade From | float | 0.0–1.0 | 0.0 | Starting alpha |
| Fade To | float | 0.0–1.0 | 1.0 | Ending alpha |
| Interval | float | 0.0–1.0s | 0.03s | Delay between each character |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |

**Character Slide**
- Character sliding reveal effect.
- Perfect for: dynamic intros, modern UI.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–5.0s | 1.5s | Animation duration |
| Easing | enum | Linear–Elastic | EaseOutBack | Easing curve type |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Slide From | Vector2 | Any | (-50, 0) | Starting offset |
| Slide To | Vector2 | Any | (0, 0) | Ending offset |
| Interval | float | 0.0–1.0s | 0.04s | Delay between each character |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |

**Character Wave**
- Per-character wave motion effect.
- Perfect for: playful effects, attention-grabbing.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–10.0s | 3.0s | Animation duration |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Wave Height | float | 0.0–100.0 | 20.0 | Vertical wave displacement |
| Wave Speed | float | 0.1–10.0 | 2.0 | Wave animation speed |
| Wave Frequency | float | 0.1–5.0 | 1.0 | Number of waves |
| Loop | bool | true/false | true | Continuous looping |

#### Reveal Effects

**Typewriter**
- Character-by-character typing effect.
- Perfect for: dialogue, code display, dramatic reveals.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–30.0s | 5.0s | Total animation duration |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Type Speed | float | 0.001–0.5s | 0.05s | Time per character |
| Scramble Before Reveal | bool | true/false | false | Scramble characters before typing |
| Scramble Charset | string | Any | "ABC123" | Scramble character set |
| Audio Per Char | AudioClip | Reference | null | Sound per character |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |

**Fade Up**
- Text fading with upward movement.
- Perfect for: titles, announcements, menu items.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–5.0s | 2.0s | Animation duration |
| Target Type | enum | Character–Word–Line | Line | Text targeting |
| Fade From | float | 0.0–1.0 | 0.0 | Starting alpha |
| Fade To | float | 0.0–1.0 | 1.0 | Ending alpha |
| Move From | Vector2 | Any | (0, -20) | Starting position offset |
| Move To | Vector2 | Any | (0, 0) | Ending position offset |
| Interval | float | 0.0–2.0s | 0.1s | Delay between each word/line |
| Easing | enum | Linear–Elastic | EaseOutCubic | Easing curve type |

**Word Fade In**
- Word-by-word fade reveal.
- Perfect for: paragraphs, descriptions, content reveals.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–10.0s | 3.0s | Animation duration |
| Fade From | float | 0.0–1.0 | 0.0 | Starting alpha |
| Fade To | float | 0.0–1.0 | 1.0 | Ending alpha |
| Interval | float | 0.0–1.0s | 0.1s | Delay between each word |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |

**Scramble Text**
- Text scrambling reveal effect.
- Perfect for: hacker themes, dramatic reveals, sci-fi.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–5.0s | 2.0s | Animation duration |
| Scramble Charset | string | Any | "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()" | Characters to use for scrambling |
| Scramble Speed | float | 0.01–0.5s | 0.05s | Time between character changes |
| Reveal Duration | float | 0.5–2.0s | 1.0s | Time to reveal final text |
| Target Type | enum | Character–Word–Line | Character | Text targeting |

**Gravity Drop**
- Characters dropping with gravity.
- Perfect for: dramatic reveals, impact effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 3.0s | Animation duration |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Fall Height | float | 0.0–200.0 | 50.0 | Starting height offset |
| Gravity | float | 0.1–5.0 | 1.0 | Gravity strength |
| Bounce On Land | bool | true/false | true | Character bounces on landing |
| Interval | float | 0.0–1.0s | 0.05s | Delay between each character |
| Easing | enum | Linear–Elastic | EaseInBounce | Easing curve type |

#### Text Effects

**Wiggle**
- Random wiggle motion on text.
- Perfect for: playful effects, attention.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 2.0s | Animation duration |
| Wiggle Strength | Vector2 | Any | (2, 2) | Wiggle displacement |
| Wiggle Speed | float | 0.1–10.0 | 3.0 | Animation speed |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Loop | bool | true/false | true | Continuous looping |

**Breathing Scale**
- Subtle breathing/pulsing scale effect.
- Perfect for: emphasis, idle animations.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–10.0s | 2.0s | Animation duration |
| Scale From | float | 0.8–1.2 | 1.0 | Minimum scale |
| Scale To | float | 0.8–1.2 | 1.1 | Maximum scale |
| Easing | enum | Linear–Elastic | EaseInOutSine | Easing curve type |
| Loop | bool | true/false | true | Continuous looping |

**Rainbow Color**
- Color cycling through rainbow spectrum.
- Perfect for: festive effects, special occasions.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–20.0s | 5.0s | Animation duration |
| Color Start | Color | RGBA | Red | Starting rainbow color |
| Color End | Color | RGBA | Red | Ending rainbow color |
| Saturation | float | 0.0–1.0 | 1.0 | Color saturation |
| Brightness | float | 0.0–1.0 | 1.0 | Color brightness |
| Loop | bool | true/false | true | Continuous looping |
| Target Type | enum | Character–Word–Line | Character | Text targeting |

---

### 🟥 3D Object Animations

Bring 3D objects to life with smooth transformations and cinematic motion.

#### Transform Animations

**Move 3D**
- World space 3D object movement.
- Perfect for: scene transitions, cinematic movement.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–20.0s | 3.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Move From | Vector3 | Any | (0, 0, 0) | Starting position |
| Move To | Vector3 | Any | Target position | Ending position |
| Use Local Space | bool | true/false | false | Use local vs world space |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

**Rotate 3D**
- 3D object rotation.
- Perfect for: spinning effects, orientation changes.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–30.0s | 5.0s | Animation duration |
| Easing | enum | Linear–Elastic | Linear | Easing curve type |
| Rotate From | Vector3 | 0–360° | (0, 0, 0) | Starting rotation |
| Rotate To | Vector3 | 0–360° | (0, 0, 360) | Ending rotation |
| Use Local Space | bool | true/false | true | Use local vs world space |
| Loop Rotation | bool | true/false | false | Continuous rotation |

**Scale 3D**
- 3D object scaling.
- Perfect for: growth effects, expanding objects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseOutBack | Easing curve type |
| Scale From | Vector3 | 0.0–10.0 | (0, 0, 0) | Starting scale |
| Scale To | Vector3 | 0.0–10.0 | (1, 1, 1) | Ending scale |
| Uniform Scaling | bool | true/false | true | Apply same scale to all axes |

**Look At 3D**
- 3D object orientation toward target.
- Perfect for: aiming, facing targets.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Look At Target | Transform | Reference | null | Target to look at |
| Lock Axis | enum | None–XY–XZ–YZ | None | Axis to lock |
| Rotation Speed | float | 0.1–10.0 | 5.0 | Rotation speed multiplier |

---

### 🟩 Camera Animations

Camera animations create cinematic immersion and smooth scene flow.

#### Movement Animations

**Move To**
- Camera movement to position.
- Perfect for: cinematic camera moves.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–30.0s | 5.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Target Position | Vector3 | Any | (0, 0, 0) | Target camera position |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |

**Zoom To**
- Camera FOV change (zoom effect).
- Perfect for: focus shifts, dramatic zooms.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| FOV From | float | 1–179° | 60° | Starting FOV |
| FOV To | float | 1–179° | 30° | Ending FOV |

**Camera Shake**
- Random camera shake for impact.
- Perfect for: explosions, impacts, dramatic moments.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 1.0s | Shake duration |
| Shake Strength | Vector3 | Any | (2, 2, 2) | Shake intensity per axis |
| Vibrato | int | 1–50 | 10 | Number of shake vibrations |
| Randomness | float | 0.0–100.0 | 80.0 | Shake randomness |

**Orbit Around**
- Camera orbiting around target.
- Perfect for: product showcases, scenic views.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 2.0–60.0s | 10.0s | Orbit duration |
| Target | Transform | Reference | null | Center of orbit |
| Radius | float | 0.1–100.0 | 5.0 | Orbit radius |
| Height Offset | float | -100–100.0 | 0.0 | Vertical offset |
| Speed | float | 0.1–10.0 | 1.0 | Orbit speed |
| Loop | bool | true/false | true | Continuous orbit |

---

### 🟧 Audio Animations

Synchronize sound with motion for total immersion.

**Play Sound**
- Play audio clip with control.
- Perfect for: feedback, sound effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Audio Source | AudioSource | Reference | null | AudioSource component |
| Audio Clip | AudioClip | Reference | null | Sound clip to play |
| Volume | float | 0.0–1.0 | 0.5 | Playback volume |
| Pitch | float | 0.1–3.0 | 1.0 | Playback pitch |
| Loop | bool | true/false | false | Loop audio |
| Stop Previous | bool | true/false | true | Stop other sounds first |

**Volume Tween**
- Animate audio volume over time.
- Perfect for: fade ins/outs, smooth volume changes.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Volume From | float | 0.0–1.0 | 0.0 | Starting volume |
| Volume To | float | 0.0–1.0 | 1.0 | Ending volume |
| Audio Source | AudioSource | Reference | null | AudioSource to control |

**Pitch Tween**
- Animate audio pitch over time.
- Perfect for: effects, transformations.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Pitch From | float | 0.1–3.0 | 1.0 | Starting pitch |
| Pitch To | float | 0.1–3.0 | 1.5 | Ending pitch |
| Audio Source | AudioSource | Reference | null | AudioSource to control |

---

### 🟪 Material Animations

Change surface look and feel dynamically to match game events.

**Color Tween**
- Animate material color.
- Perfect for: state changes, damage effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Color From | Color | RGBA | White | Starting color |
| Color To | Color | RGBA | Target | Ending color |
| Property Name | string | Any | "_Color" | Shader property name |

**Float Property Tween**
- Animate any float shader property.
- Perfect for: glow, emission, displacement.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Property Name | string | Any | "_Metallic" | Shader property name |
| Value From | float | Any | 0.0 | Starting value |
| Value To | float | Any | 1.0 | Ending value |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |

**Material Fade**
- Animate material transparency.
- Perfect for: disappearances, reveals.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 2.0s | Animation duration |
| Fade From | float | 0.0–1.0 | 1.0 | Starting alpha |
| Fade To | float | 0.0–1.0 | 0.0 | Ending alpha |
| Property Name | string | Any | "_Transparency" | Alpha property name |

---

### 🟫 Particle System Control

Control Unity's particle systems directly through animation nodes.

**Play Particles**
- Start particle emission.
- Perfect for: explosions, effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Particle System | ParticleSystem | Reference | null | Particle system to control |
| Duration | float | 0.1–60.0s | 5.0s | Emission duration |
| Loop | bool | true/false | false | Continuous emission |

**Emission Rate Tween**
- Animate particle emission rate.
- Perfect for: gradual effects, crescendos.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–30.0s | 3.0s | Animation duration |
| Rate From | float | 0–10000.0 | 0.0 | Starting emission rate |
| Rate To | float | 0–10000.0 | 100.0 | Ending emission rate |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Particle System | ParticleSystem | Reference | null | Particle system to control |

**Simulate Particles**
- Advance particle simulation forward.
- Perfect for: pre-warming, specific states.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Particle System | ParticleSystem | Reference | null | Particle system to control |
| Simulation Time | float | 0.0–100.0s | 5.0s | Time to simulate forward |
| Reset On Complete | bool | true/false | true | Reset simulation after |

---

## 4️⃣ Using Events & Actions

### Adding Trigger Nodes

Trigger nodes are the starting points of your animations. They detect when something happens and start the animation sequence.

#### On Start Trigger
- **When it fires:** Automatically when the scene begins
- **Perfect for:** Auto-playing animations, scene initialization
- **Settings:**
  - Startup Delay: Wait time before firing (prevents false triggers)
  - Fire Once: Only trigger once per scene

#### On Button Click Trigger
- **When it fires:** When a UI button is pressed
- **Perfect for:** Interactive UI, menu systems, user input
- **Settings:**
  - Target Button: Which button to monitor
  - Fire Once: Only trigger once per click
  - Reset on Scene Change: Reset trigger state

#### On Key Press Trigger
- **When it fires:** When a specific key is pressed
- **Perfect for:** Keyboard shortcuts, debug controls, alternative input
- **Settings:**
  - Key Code: Which key to monitor (Space, Enter, etc.)
  - Fire Once: Only trigger once per press
  - Startup Delay: Wait time before monitoring

#### On Collision Trigger
- **When it fires:** When objects collide
- **Perfect for:** Physics-based triggers, interaction systems
- **Settings:**
  - Collision Layer: Which layers to detect
  - Collision Type: Enter, Exit, or Stay
  - Target Object: Specific object to collide with

#### On Timer Trigger
- **When it fires:** After a specific time delay
- **Perfect for:** Timed sequences, delayed actions, scheduled events
- **Settings:**
  - Timer Duration: How long to wait
  - Fire Once: Only trigger once
  - Loop: Repeat the timer

#### On API Call Trigger
- **When it fires:** When called from code
- **Perfect for:** Programmatic triggers, custom events
- **Settings:**
  - Trigger Name: Identifier for the trigger
  - Fire Once: Only trigger once per call
  - Reset Method: How to reset the trigger

#### Setting Up Triggers:
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

**📸 [Screenshot Placeholder: Trigger node settings in Inspector]**

---

### Action Nodes

Action nodes perform side effects during your animations. They don't create visual effects but trigger other systems.

#### Log Message Action
- **What it does:** Prints messages to the console
- **Perfect for:** Debugging, development testing, status updates
- **Settings:**
  - Message: Text to display
  - Log Type: Log, Warning, or Error
  - Show Timestamp: Include time information

#### Set Active Action
- **What it does:** Shows or hides GameObjects
- **Perfect for:** UI state changes, object management, scene control
- **Settings:**
  - Target Object: GameObject to control
  - Set Active: True (show) or False (hide)
  - Toggle Mode: Toggle current state
  - Delay: Wait before changing state

#### Play Audio Action
- **What it does:** Plays sound effects or music
- **Perfect for:** Audio feedback, sound effects, music triggers
- **Settings:**
  - Audio Source: AudioSource component to use
  - Audio Clip: Sound file to play
  - Volume: Loudness (0.0 to 1.0)
  - Pitch: Speed/tone (0.1 to 3.0)
  - Loop: Repeat continuously
  - Stop Previous: Stop other sounds first

#### Play Animation Action
- **What it does:** Triggers other animations or systems
- **Perfect for:** Chained effects, complex sequences, system integration
- **Settings:**
  - Animation Name: Name of animation to trigger
  - Wait for Completion: Wait for animation to finish
  - Loop Animation: Repeat the animation
  - Animation Speed: Speed multiplier

#### Wait Action
- **What it does:** Pauses execution for a specific time
- **Perfect for:** Timing control, pacing, delays between actions
- **Settings:**
  - Wait Duration: How long to wait (seconds)
  - Wait Mode: Fixed time or until condition
  - Can Be Interrupted: Allow early termination

#### Trigger Animation Action
- **What it does:** Starts other GraphFlow animations
- **Perfect for:** Complex sequences, branching animations, system integration
- **Settings:**
  - Target Graph: GraphFlow Asset to trigger
  - Wait for Completion: Wait for animation to finish
  - Loop Animation: Repeat the animation
  - Animation Speed: Speed multiplier

#### Setting Up Actions:
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

**📸 [Screenshot Placeholder: Action node settings in Inspector]**

---

### Event Nodes

Event nodes integrate with Unity's event system, allowing you to trigger custom events that other systems can listen to.

#### UnityEvent Integration
- **What it does:** Fires Unity Events when triggered
- **Perfect for:** System integration, custom events, external triggers
- **Settings:**
  - Event Name: Identifier for the event
  - Fire On Start: Trigger automatically when node starts
  - Auto Preview: Test the event in editor
  - Preview Delay: Wait time before preview

#### Parameterized Events
- **What it does:** Sends data with the event
- **Perfect for:** Complex event systems, data passing, state changes
- **Settings:**
  - Use Parameters: Enable parameter passing
  - Parameter Type: String, Integer, Float, or Boolean
  - Parameter Value: Data to send with event
  - Event Name: Identifier for the event

#### Event Listeners
- **What it does:** Responds to events from other systems automatically
- **Perfect for:** Event-driven architecture, system communication
- **Settings:**
  - Event Name: Which event to listen for
  - Fire Once: Only respond once per event
  - Reset on Scene Change: Reset listener state
  - Automatic Setup: Listeners are created automatically by the Event Manager

#### Setting Up Events:
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

**📸 [Screenshot Placeholder: Event node settings in Inspector]**

---

### Condition Nodes

Condition nodes add logic to your animations, allowing them to make decisions based on game state.

#### Boolean Logic
- **What it does:** Evaluates true/false conditions
- **Perfect for:** Conditional animations, state checks, decision making
- **Settings:**
  - Condition Type: What to check
  - Target Object: Object to check
  - Expected Value: What value to expect
  - Invert Result: Flip true/false result

#### UI State Checks
- **What it does:** Checks UI element states
- **Perfect for:** UI interactions, button states, menu systems
- **Settings:**
  - UI Element: Which UI element to check
  - Check Type: Active, Enabled, Visible, etc.
  - Expected State: What state to expect
  - Update Frequency: How often to check

#### Game State Checks
- **What it does:** Checks game variables or states
- **Perfect for:** Game logic, progress checks, conditional content
- **Settings:**
  - Variable Name: Which variable to check
  - Check Type: Equals, Greater Than, Less Than, etc.
  - Expected Value: What value to expect
  - Update Frequency: How often to check

#### Setting Up Conditions:
1. **Add Condition Node**
   - Right-click in GraphFlow Editor
   - Add Node → Condition → [Condition Type]
   - Configure settings in Inspector
2. **Set Up Conditional Flow**
   - Connect from condition node
   - Create branches for true/false results
   - Set up different animations for each branch
3. **Test the Condition**
   - Press Play in Unity
   - Change the condition state
   - Verify correct branch executes

**📸 [Screenshot Placeholder: Condition node settings in Inspector]**

---

## 5️⃣ API Overview for Developers

### Main Classes

Animatix Pro provides a comprehensive API for runtime control and integration with your game systems.

#### GraphExecutor
- **Purpose:** Main component that runs GraphFlow animations
- **Location:** MonoBehaviour component on GameObjects
- **Key Properties:**
```csharp
public GraphFlowAsset GraphAsset;        // Animation graph to run
public bool PlayOnStart = true;          // Auto-play when scene starts
public bool LoopAnimation = false;       // Repeat the animation
public float PlaybackSpeed = 1.0f;       // Speed multiplier
```

#### GraphExecutorUtil
- **Purpose:** Static utility class for runtime control
- **Location:** Static methods accessible from anywhere
- **Key Methods:**
```csharp
// Control animations
GraphExecutorUtil.RunByName(string name);
GraphExecutorUtil.StopByName(string name);
GraphExecutorUtil.PauseByName(string name);
GraphExecutorUtil.ResumeByName(string name);

// Check status
bool isPlaying = GraphExecutorUtil.IsPlaying(string name);
float progress = GraphExecutorUtil.GetProgress(string name);
```

#### GraphFlowAsset
- **Purpose:** ScriptableObject containing animation graph data
- **Location:** Asset files in your project
- **Key Properties:**
```csharp
public List<GraphNode> Nodes;            // All nodes in the graph
public List<GraphConnection> Connections; // Connections between nodes
public string GraphName;                  // Name of the graph
public GraphCategory Category;           // Organization category
```

#### GraphNode Types
- **Purpose:** Base class for all animation nodes
- **Location:** Abstract base class
- **Key Properties:**
```csharp
public string ID;                         // Unique identifier
public string Title;                      // Display name
public Vector2 Position;                  // Position in editor
public Color NodeColor;                   // Visual color
```

---

### Common API Actions

#### Starting Animations
```csharp
// Start animation by name
GraphExecutorUtil.RunByName("MyAnimation");

// Start animation with callback
GraphExecutorUtil.RunByName("MyAnimation", () => {
    Debug.Log("Animation completed!");
});

// Start animation with speed multiplier
GraphExecutorUtil.RunByName("MyAnimation", 2.0f); // 2x speed
```

#### Stopping Animations
```csharp
// Stop animation immediately
GraphExecutorUtil.StopByName("MyAnimation");

// Stop all animations
GraphExecutorUtil.StopAll();

// Stop animation with callback
GraphExecutorUtil.StopByName("MyAnimation", () => {
    Debug.Log("Animation stopped!");
});
```

#### Pausing and Resuming
```csharp
// Pause animation
GraphExecutorUtil.PauseByName("MyAnimation");

// Resume animation
GraphExecutorUtil.ResumeByName("MyAnimation");

// Check if paused
bool isPaused = GraphExecutorUtil.IsPaused("MyAnimation");
```

#### Status Checking
```csharp
// Check if animation is playing
bool isPlaying = GraphExecutorUtil.IsPlaying("MyAnimation");

// Get animation progress (0.0 to 1.0)
float progress = GraphExecutorUtil.GetProgress("MyAnimation");

// Get animation duration
float duration = GraphExecutorUtil.GetDuration("MyAnimation");

// Get remaining time
float remaining = GraphExecutorUtil.GetRemainingTime("MyAnimation");
```

---

### Accessing and Modifying Nodes at Runtime

#### Finding Nodes
```csharp
// Get GraphExecutor component
GraphExecutor executor = GetComponent<GraphExecutor>();

// Get the graph asset
GraphFlowAsset graph = executor.GraphAsset;

// Find node by ID
GraphNode node = graph.GetNodeByID("node_123");

// Find node by type
AnimationNode animNode = graph.Nodes.OfType<AnimationNode>().FirstOrDefault();
```

#### Modifying Node Properties
```csharp
// Cast to specific node type
AnimationNode animNode = node as AnimationNode;

// Modify animation properties
animNode.Duration = 2.0f;
animNode.EasingCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);

// Apply changes
executor.RefreshGraph();
```

#### Runtime Node Creation
```csharp
// Create new animation node
AnimationNode newNode = ScriptableObject.CreateInstance<AnimationNode>();
newNode.InitializeDefaults();
newNode.Duration = 1.0f;

// Add to graph
graph.AddNode(newNode);

// Create connection
GraphConnection connection = ScriptableObject.CreateInstance<GraphConnection>();
connection.SourceNodeID = sourceNode.ID;
connection.TargetNodeID = newNode.ID;
graph.AddConnection(connection);
```

---

### API Reference Example

The AnimatixProAPIReference.cs file demonstrates common API usage patterns:

```csharp
public class AnimatixProAPIReference : MonoBehaviour
{
    [Header("Settings")]
    public string animationName = "MyAnimation";
    public bool showUI = true;

    void Update()
    {
        // SPACE - Start/Stop
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (GraphExecutorUtil.IsPlaying(animationName))
            {
                GraphExecutorUtil.StopByName(animationName);
            }
            else
            {
                StartAnimation();
            }
        }
        
        // P - Pause
        if (Input.GetKeyDown(KeyCode.P))
        {
            GraphExecutorUtil.PauseByName(animationName);
        }
        
        // R - Resume
        if (Input.GetKeyDown(KeyCode.R))
        {
            GraphExecutorUtil.ResumeByName(animationName);
        }
    }

    void StartAnimation()
    {
        // Trigger API call for OnApiCallTrigger
        TriggerApiCall();
        
        // Start animation
        GraphExecutorUtil.RunByName(animationName);
    }
}
```

**Key API Patterns:**
1. **Event-Driven Control** — Use triggers to start animations based on game events
2. **Status Monitoring** — Check animation status before performing actions
3. **Callback Integration** — Use callbacks for complex sequences
4. **Runtime Modification** — Modify node properties during gameplay
5. **Error Handling** — Always check for null references and valid states

**📸 [Screenshot Placeholder: API Reference example in action]**

---

## 6️⃣ Best Practices

### Organizing Graphs

#### Naming Conventions
- **Graph Names:** Use descriptive names like "MainMenu_ButtonFade" or "Gameplay_PlayerDeath"
- **Node Names:** Keep node titles short but clear ("Fade In", "Play Sound", "Wait 2s")
- **Categories:** Use the built-in categories (UI, Camera, Cutscene, Gameplay, VFX, Misc)

#### File Organization
```
Assets/
├── AnimatixPro/
│   ├── UI/
│   │   ├── MainMenu_ButtonFade.asset
│   │   ├── Settings_PanelSlide.asset
│   │   └── Loading_ScreenTransition.asset
│   ├── Gameplay/
│   │   ├── Player_DeathSequence.asset
│   │   ├── Enemy_SpawnEffect.asset
│   │   └── PowerUp_Collection.asset
│   └── Cutscenes/
│       ├── Intro_CameraSweep.asset
│       └── Ending_CreditsRoll.asset
```

#### Graph Structure
- **Keep graphs focused** — One graph per specific animation sequence
- **Use clear flow** — Left to right, top to bottom
- **Group related nodes** — Keep similar animations together
- **Add comments** — Use node titles to document purpose

#### Version Control
- **Use meaningful commit messages** — "Add button hover animation" vs. "Updated graph"
- **Test before committing** — Ensure animations work correctly
- **Document changes** — Note what was modified and why

---

### Performance Optimization

#### Parallel Execution
- **Use parallel connections** — Run multiple animations simultaneously
- **Avoid unnecessary waits** — Only use Delay nodes when needed
- **Optimize timing** — Match animation durations to avoid gaps

#### Object Management
- **Reuse objects** — Don't create/destroy objects during animations
- **Pool particle systems** — Reuse particle effects
- **Cache references** — Store frequently accessed objects

#### Memory Optimization
- **Use object references** — Avoid string-based lookups
- **Clean up unused nodes** — Remove nodes that are no longer needed
- **Optimize textures** — Use appropriate texture sizes

#### Mobile Considerations
- **Limit particle effects** — Reduce particle counts on mobile
- **Use simpler animations** — Avoid complex multi-layered effects
- **Test on devices** — Always test on target hardware

---

### Using Animatix Pro in Different Contexts

#### UI Animations
- **Keep animations short** — 0.2-1.0 seconds for UI feedback
- **Use consistent timing** — Standardize animation durations
- **Provide visual feedback** — Always respond to user input
- **Test on different screen sizes** — Ensure animations work on all devices

#### 3D Scene Animations
- **Use world space** — For object movement in 3D scenes
- **Consider camera angles** — Ensure animations are visible
- **Optimize for performance** — Use simpler animations for distant objects
- **Test with different lighting** — Ensure animations work in all lighting conditions

#### Cutscene Animations
- **Plan the sequence** — Storyboard before creating animations
- **Use camera animations** — Create cinematic camera movements
- **Sync with audio** — Match animation timing to sound effects
- **Test playback speed** — Ensure animations work at different speeds

#### Gameplay Animations
- **Respond to game state** — Use triggers based on game events
- **Provide clear feedback** — Make animations communicate game state
- **Optimize for gameplay** — Don't let animations interfere with controls
- **Test with different players** — Ensure animations work for all skill levels

---

### Mobile & WebGL Considerations

#### Performance Limits
- **Reduce particle counts** — Use fewer particles on mobile
- **Simplify animations** — Avoid complex multi-layered effects
- **Use lower resolution** — Reduce texture sizes for mobile
- **Test on devices** — Always test on target hardware

#### Input Considerations
- **Touch-friendly** — Ensure animations work with touch input
- **Responsive design** — Adapt animations to different screen sizes
- **Battery optimization** — Avoid continuous animations that drain battery
- **Network optimization** — Minimize data usage for WebGL builds

#### Platform-Specific Features
- **Use platform defines** — Different animations for different platforms
- **Test on all platforms** — Ensure compatibility across devices
- **Optimize for each platform** — Use platform-specific optimizations
- **Handle platform differences** — Account for different capabilities

---

### Backup & Version Control Tips

#### Regular Backups
- **Save frequently** — Use Ctrl+S regularly
- **Create backups** — Keep copies of important graphs
- **Test backups** — Ensure backups work correctly
- **Document changes** — Note what was modified and why

#### Version Control
- **Use meaningful commit messages** — "Add button hover animation" vs. "Updated graph"
- **Test before committing** — Ensure animations work correctly
- **Document changes** — Note what was modified and why
- **Use branches** — Create branches for experimental features

#### Collaboration
- **Communicate changes** — Let team members know about modifications
- **Use consistent naming** — Follow team naming conventions
- **Document complex animations** — Explain how complex animations work
- **Test together** — Ensure animations work for all team members

#### Recovery
- **Keep old versions** — Don't delete old graph versions
- **Test recovery** — Ensure you can restore from backups
- **Document recovery process** — Know how to restore from backups
- **Have multiple backups** — Keep backups in different locations

---

## 7️⃣ Troubleshooting

### Common Issues & Fixes

#### Animation Not Playing
- **Check GraphExecutor** — Ensure GraphExecutor component is attached
- **Verify Graph Asset** — Make sure GraphFlow Asset is assigned
- **Check Play On Start** — Ensure "Play On Start" is enabled
- **Verify Trigger** — Make sure trigger conditions are met

#### Nodes Not Connecting
- **Check Node Types** — Ensure compatible node types are being connected
- **Verify Ports** — Make sure you're connecting to the correct ports
- **Check Node State** — Ensure nodes are properly initialized
- **Refresh Graph** — Try refreshing the graph in the editor

#### Animation Playing Too Fast/Slow
- **Check Playback Speed** — Adjust Playback Speed in GraphExecutor
- **Verify Duration** — Check animation duration settings
- **Check Easing** — Ensure easing curves are properly set
- **Test on Device** — Performance may vary on different hardware

#### Audio Not Playing
- **Check Audio Source** — Ensure AudioSource component is attached
- **Verify Audio Clip** — Make sure audio clip is assigned
- **Check Volume** — Ensure volume is not muted
- **Verify Audio Settings** — Check Unity's audio settings

#### Particles Not Showing
- **Check Particle System** — Ensure ParticleSystem component is attached
- **Verify Emission** — Make sure emission is enabled
- **Check Material** — Ensure particle material is assigned
- **Verify Camera** — Make sure camera can see the particles

---

### Graph Not Playing? Checklist

#### Basic Checks
- GraphExecutor component is attached to GameObject
- GraphFlow Asset is assigned to Graph Asset field
- "Play On Start" is enabled (if you want auto-play)
- Scene is playing (not paused)
- No compilation errors in Console

#### Trigger Checks
- Trigger node is properly configured
- Trigger conditions are being met
- Trigger is not set to "Fire Once" if you need repeated triggers
- Startup delay has passed (for On Start triggers)

#### Connection Checks
- Nodes are properly connected
- Connections are enabled (not grayed out)
- No orphaned nodes (nodes with no connections)
- Graph has a clear start point (trigger node)

#### Target Checks
- GraphExecutor is attached to the object you want to animate
- Target object is active in the scene
- Target object has required components (e.g., UI components for UI animations)
- Target object is visible to the camera

#### Performance Checks
- Animation is not too complex for the hardware
- No infinite loops in the graph
- Memory usage is reasonable
- Frame rate is not too low

---

### Node Errors or Missing Connections

#### Missing Connections
- **Check Node Types** — Ensure compatible node types are being connected
- **Verify Ports** — Make sure you're connecting to the correct ports
- **Check Node State** — Ensure nodes are properly initialized
- **Refresh Graph** — Try refreshing the graph in the editor

#### Node Errors
- **Check Node Configuration** — Ensure all required fields are filled
- **Verify GraphExecutor Setup** — Make sure GraphExecutor is attached to the target object
- **Check Node State** — Ensure nodes are properly initialized
- **Refresh Graph** — Try refreshing the graph in the editor

#### Connection Errors
- **Check Connection Validity** — Ensure connections are valid
- **Verify Node IDs** — Make sure node IDs are correct
- **Check Connection State** — Ensure connections are enabled
- **Refresh Graph** — Try refreshing the graph in the editor

#### Target Errors
- **Check GraphExecutor Attachment** — Ensure GraphExecutor is attached to the correct object
- **Verify Target Components** — Make sure target has required components
- **Check Target State** — Ensure target is active and visible
- **Refresh Graph** — Try refreshing the graph in the editor

---

### Debug Mode & Logging

#### Enable Debug Logging
- **In GraphExecutor** — Check "Enable Debug Logging" checkbox
- **In Animation Nodes** — Enable "Debug Mode" for specific nodes
- **In Action Nodes** — Enable "Log Message" actions for debugging
- **In Event Nodes** — Enable "Debug Log" for event tracking

#### Debug Information
- **Animation Status** — Shows when animations start/stop
- **Node Execution** — Shows which nodes are executing
- **Connection Flow** — Shows how connections are being followed
- **Error Messages** — Shows detailed error information

#### Console Output
- **Animation Events** — Shows animation start/stop events
- **Node Execution** — Shows which nodes are executing
- **Connection Flow** — Shows how connections are being followed
- **Error Messages** — Shows detailed error information

#### Performance Debugging
- **Frame Rate** — Monitor frame rate during animations
- **Memory Usage** — Check memory usage during animations
- **CPU Usage** — Monitor CPU usage during animations
- **GPU Usage** — Check GPU usage during animations

#### Common Debug Messages
- "Animation started" — Animation has begun
- "Animation completed" — Animation has finished
- "Node executing" — A node is currently executing
- "Connection followed" — A connection is being followed
- "Error: [message]" — An error has occurred

---

## 8️⃣ Quick Reference

### Complete Animation Type List

#### UI Animations

| Category | Animation | Description | Duration |
|----------|-----------|-------------|----------|
| Transform | Fade | Change transparency | 0.5-2.0s |
| | Slide | Move position | 0.3-1.5s |
| | Scale | Change size | 0.2-0.8s |
| | Rotate | Spin rotation | 0.5-3.0s |
| Visual | Color Tint | Change color | 0.2-1.0s |
| | Jelly | Elastic deformation | 0.3-0.8s |
| | Blur | Blur effect | 0.5-2.0s |
| | Glow Pulse | Glowing effect | 0.5-2.0s |
| | Image Fill Amount | Fill progress | 0.5-3.0s |
| | Outline Shadow Color | Change outline | 0.3-1.0s |
| Impact | Punch | Sharp movement | 0.1-0.5s |
| | Bounce | Elastic bounce | 0.3-1.0s |
| | Shake | Random movement | 0.2-1.0s |
| | Elastic Scale | Overshoot scale | 0.3-1.0s |

#### Text Animations

| Category | Animation | Description | Duration |
|----------|-----------|-------------|----------|
| Character Effects | Character Scale Pop | Bouncy character scale | 0.5-1.5s |
| | Character Fade | Character-by-character fade | 0.8-2.0s |
| | Character Slide In | Character slide reveal | 0.6-1.8s |
| | Character Bounce | Character drop bounce | 0.8-2.0s |
| | Character Shake | Character shake effect | 0.3-1.0s |
| | Character Jitter | Character jitter motion | 0.5-2.0s |
| | Character Wave | Character wave motion | 1.0-3.0s |
| | Character Flip Reveal | Character flip reveal | 0.5-1.5s |
| | Character Rotate Reveal | Character rotate reveal | 0.4-1.2s |
| | Character Zoom In | Character zoom effect | 0.3-1.0s |
| Reveal | Typewriter | Character-by-character typing | 1.0-5.0s |
| | Fade Up | Text fade with upward movement | 0.8-2.0s |
| | Grow and Fade | Text scale with fade | 0.6-1.5s |
| | Word Fade In | Word-by-word fade | 1.0-3.0s |
| | Line Drop | Line-by-line drop | 0.8-2.5s |
| | Scramble Text | Text scramble effect | 0.5-2.0s |
| | Explosion Reveal | Character explosion | 0.8-2.0s |
| | Gravity Drop | Character gravity fall | 1.0-3.0s |
| | Curtain Reveal | Curtain-style reveal | 1.0-2.5s |
| | Crumble Reveal | Crumble-style reveal | 1.0-2.5s |
| Text Effects | Wiggle | Text wiggle motion | 0.5-2.0s |
| | Breathing Scale | Text breathing scale | 1.0-3.0s |
| | Skew | Text skew effect | 0.3-1.0s |
| | Rainbow Text Color | Rainbow color cycle | 1.0-5.0s |
| | Wobble | Text wobble motion | 0.5-2.0s |
| | Wind Drift | Text wind drift | 1.0-3.0s |
| | Pendulum Swing | Text pendulum swing | 1.0-4.0s |
| | Text Flicker | Text flicker effect | 0.2-1.0s |
| | Blinking | Text blinking effect | 0.5-2.0s |

#### 3D Object Animations

| Animation | Description | Duration |
|-----------|-------------|----------|
| Move 3D | World space movement | 1.0-5.0s |
| Move Local 3D | Local space movement | 1.0-5.0s |
| Rotate 3D | 3D rotation | 1.0-10.0s |
| Scale 3D | 3D scaling | 0.5-3.0s |
| Look At 3D | Face target object | 0.5-2.0s |

#### Camera Animations

| Category | Animation | Description | Duration |
|----------|-----------|-------------|----------|
| Movement | Move To | Move to position | 2.0-8.0s |
| | Pan To | Pan to look at point | 1.0-5.0s |
| | Zoom To | Change field of view | 1.0-3.0s |
| | Cut To | Instant position change | Instant |
| Look & Follow | Look At | Face target object | 1.0-4.0s |
| | Follow Target | Follow moving object | Continuous |
| Orbital | Orbit Around | Orbit around point | 2.0-10.0s |
| | Spin Loop | Continuous spinning | Continuous |
| Effects | Shake | Camera shake | 0.2-2.0s |
| | Punch Position | Quick position punch | 0.1-0.5s |
| | Breath Zoom | Breathing zoom effect | 1.0-3.0s |
| | Flash Shake | Flash with shake | 0.3-1.0s |
| Advanced Motion | Dolly Move | Forward/backward movement | 2.0-8.0s |
| | Bob Motion | Up/down bobbing | 1.0-3.0s |
| | Drift Motion | Slow directional drift | 2.0-10.0s |

#### Audio Animations

| Animation | Description | Duration |
|-----------|-------------|----------|
| Play Sound | Play audio clip | Variable |
| Stop Sound | Stop audio playback | Instant |
| Volume Tween | Change volume over time | 0.5-3.0s |
| Pitch Tween | Change pitch over time | 0.5-3.0s |

#### Material Animations

| Animation | Description | Duration |
|-----------|-------------|----------|
| Color Tween | Change material color | 0.5-3.0s |
| Float Property Tween | Change material property | 0.5-3.0s |
| Texture Swap | Change material texture | Instant |
| Material Fade | Change material transparency | 0.5-3.0s |

#### Particle System Control

| Animation | Description | Duration |
|-----------|-------------|----------|
| Play Particles | Start particle emission | Variable |
| Stop Particles | Stop particle emission | Instant |
| Loop Particles | Set particle looping | Continuous |
| Emission Rate Tween | Change emission rate | 0.5-3.0s |
| Simulate Particles | Advance particle simulation | Variable |

---

### Supported Easing Curves

#### Linear
- **Description:** Constant speed, no acceleration
- **Use Case:** Mechanical movement, simple transitions
- **Formula:** y = x

#### Ease In
- **Description:** Slow start, fast finish
- **Use Case:** Natural acceleration, object falling
- **Formula:** y = x²

#### Ease Out
- **Description:** Fast start, slow finish
- **Use Case:** Natural deceleration, object stopping
- **Formula:** y = 1 - (1 - x)²

#### Ease In Out
- **Description:** Slow start and finish, fast middle
- **Use Case:** Most natural movement, smooth transitions
- **Formula:** y = x < 0.5 ? 2x² : 1 - 2(1 - x)²

#### Ease In Back
- **Description:** Slow start with overshoot
- **Use Case:** Playful animations, bouncy effects
- **Formula:** y = x²(2.7x - 1.7)

#### Ease Out Back
- **Description:** Fast start with overshoot
- **Use Case:** Dramatic exits, attention-grabbing
- **Formula:** y = 1 + (1 - x)²(2.7(1 - x) - 1.7)

#### Ease In Out Back
- **Description:** Overshoot at both ends
- **Use Case:** Playful bounces, elastic effects
- **Formula:** Complex cubic function

#### Bounce
- **Description:** Bouncing motion
- **Use Case:** Playful animations, elastic effects
- **Formula:** Multiple sine waves

#### Elastic
- **Description:** Elastic spring motion
- **Use Case:** Spring animations, elastic effects
- **Formula:** Exponential decay with sine waves

#### Custom Curves
- **Description:** User-defined animation curves
- **Use Case:** Specific timing requirements, unique effects
- **Formula:** User-defined

---

### Node Types Summary

| Node Type | Color | Inputs | Outputs | Purpose | Common Use |
|-----------|-------|--------|---------|---------|------------|
| Trigger | Green | 0 | 1 | Start animations | On Start, On Click, On Key |
| Animation | Blue | 1+ | 1+ | Visual effects | Fade, Slide, Scale, Rotate |
| Action | Orange | 1+ | 0-1 | Side effects | Play Sound, Set Active, Wait |
| Event | Purple | 1+ | 1+ | Unity Events | Custom events, system integration |
| Condition | Yellow | 1+ | 1+ | Logic decisions | State checks, conditional flow |
| Delay | Gray | 1+ | 1+ | Timing control | Pauses, delays, pacing |

---

### Keyboard Shortcuts & Tips

#### GraphFlow Editor
- **Right-click:** Open node creation menu
- **Drag:** Pan the graph view
- **Scroll:** Zoom in/out
- **Ctrl+Z:** Undo last action
- **Ctrl+Y:** Redo last action
- **Delete:** Remove selected nodes
- **Ctrl+A:** Select all nodes
- **Ctrl+D:** Duplicate selected nodes

#### Inspector Window
- **Tab:** Move between fields
- **Enter:** Apply changes
- **Escape:** Cancel changes
- **Ctrl+C:** Copy values
- **Ctrl+V:** Paste values
- **F:** Focus on selected object

#### General Tips
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

#### Performance Tips
- Limit particle counts on mobile devices
- Use object pooling for frequently used objects
- Cache frequently accessed objects and components
- Optimize texture sizes for target platforms
- Test on actual hardware, not just the editor
- Use simpler animations for distant objects
- Avoid continuous animations that drain battery
- Profile performance regularly during development

---

## 9️⃣ Versioning & Compatibility

### Unity Version Support

Animatix Pro is tested and supported on the following Unity versions:

| Unity Version | Status | Notes |
|---------------|--------|-------|
| Unity 2021.3 LTS | ✅ Fully Supported | Recommended for production |
| Unity 2022.3 | ✅ Fully Supported | Recommended for production |
| Unity 2023.1+ | ✅ Fully Supported | Latest features included |
| Unity 2020.3 | ⚠️ Limited Support | Basic functionality only |

**Note:** For best results, use Unity 2021.3 LTS or later. Earlier versions may experience compatibility issues.

### Platform Compatibility

Animatix Pro supports all Unity-supported platforms:

| Platform | Status | Performance Notes |
|----------|--------|-------------------|
| Windows (Desktop) | ✅ Fully Supported | Excellent performance |
| macOS | ✅ Fully Supported | Excellent performance |
| Linux | ✅ Fully Supported | Excellent performance |
| iOS | ✅ Fully Supported | Optimized for mobile |
| Android | ✅ Fully Supported | Optimized for mobile |
| WebGL | ✅ Fully Supported | Requires optimization |
| PlayStation | ✅ Fully Supported | Console-optimized |
| Xbox | ✅ Fully Supported | Console-optimized |
| Nintendo Switch | ✅ Fully Supported | Console-optimized |

### Version History

**Animatix Pro v1.2** *(Latest)*
- Added Material Animations module
- Enhanced Particle System Control
- Improved mobile performance
- Added Text Animation targeting (Character/Word/Line)
- Enhanced GraphExecutor runtime API
- Fixed memory leaks in long-running animations
- Improved Editor performance with large graphs

**v1.1**
- Added Audio Animations module
- Enhanced Camera Animations
- Improved UI Animation performance
- Added parallel execution optimization
- Enhanced Event System automatic listener management

**v1.0**
- Initial release
- Core GraphFlow System
- UI, Text, 3D, and Camera Animations
- GraphExecutor runtime engine
- Visual node-based workflow

### Migrating Between Versions

When upgrading Animatix Pro:

1. **Backup Your Project** — Always create a backup before upgrading
2. **Read Release Notes** — Check for breaking changes in the changelog
3. **Update Graphs** — Open existing graphs to trigger auto-update
4. **Test Animations** — Verify all animations work correctly
5. **Update API Code** — Review and update any custom code using the API

### Breaking Changes

**v1.2 → Current**
- Material property names now use string identifiers (e.g., `"_Color"` instead of enum)
- Update material property references in existing graphs

**v1.1 → v1.2**
- Audio Source parameter changed from `AudioClip` to `AudioSource` reference
- Update audio nodes in existing graphs

---

## 🔟 Performance Optimization Guide

### General Performance Tips

**Optimize Graph Complexity**
- Keep graphs focused: 10-20 nodes per graph is optimal
- Avoid deeply nested condition chains
- Use parallel execution instead of sequential delays
- Profile graphs with Unity Profiler

**Memory Management**
- Avoid creating/destroying objects during animations
- Use object pooling for frequently animated objects
- Clear unused animation data
- Monitor memory with Unity Profiler

**Update Method Selection**
- Use `LateUpdate` for UI animations (default)
- Use `FixedUpdate` for physics-based animations
- Use `Update` only when necessary

### Mobile Optimization

**Reduce Animation Overhead**
- Limit simultaneous animations (max 5-10 concurrent)
- Use simpler animations for distant objects
- Reduce particle counts on mobile
- Disable expensive effects on low-end devices

**Battery Optimization**
- Avoid infinite loops unless necessary
- Use frame-based delays instead of time-based
- Pause animations when not visible
- Reduce update frequency for background animations

**Memory Considerations**
- Keep texture sizes reasonable (max 2048x2048)
- Use compressed audio formats
- Limit concurrent particle systems (max 3-5)
- Profile on actual devices, not just emulators

### WebGL Optimization

**Specific WebGL Tips**
- Minimize graph complexity (max 5-10 nodes)
- Avoid complex particle effects
- Use simpler easing curves
- Test in browser build, not only editor

**Build Size**
- Remove unused animation modules
- Use modular GraphFlow Asset loading
- Compress audio files appropriately
- Enable IL2CPP for better performance

### Debug Performance

**Enabling Debug Mode**
```csharp
// Enable debug logging
GraphExecutor.DebugMode = true;

// Check animation status
Debug.Log($"Animation playing: {GraphExecutorUtil.IsPlaying("MyAnimation")}");
Debug.Log($"Animation progress: {GraphExecutorUtil.GetProgress("MyAnimation")}");

// Monitor frame rate
float fps = 1.0f / Time.deltaTime;
Debug.Log($"FPS: {fps}");
```

**Profiling Tips**
- Use Unity Profiler to identify bottlenecks
- Profile on target hardware, not just editor
- Check GC allocations (should be minimal)
- Monitor draw calls (shouldn't spike during animations)

---

## Conclusion

Animatix Pro transforms how you create animations in Unity. With its visual graph system, comprehensive animation types, and powerful API, you can create professional-quality animations without writing code.

### Key Takeaways
- **Visual Workflow** — Drag, connect, and configure nodes for instant results
- **Comprehensive Coverage** — 124 animation types across 8 categories with full parameter control
- **Performance Optimized** — Built for Unity's rendering pipeline, mobile and WebGL optimized
- **Developer Friendly** — Full API access for runtime control, custom nodes support
- **Artist Friendly** — No coding required, intuitive interface
- **Modular Design** — Mix and match animation modules for infinite combinations

### Next Steps
1. **Start Simple** — Create basic fade and slide animations
2. **Explore Types** — Try different animation categories with parameter tables
3. **Build Sequences** — Combine multiple animations using parallel execution
4. **Add Interactivity** — Use triggers, actions, and condition nodes
5. **Optimize Performance** — Test on target hardware, profile with Unity tools
6. **Share Knowledge** — Document your animations for your team

### Get Started Today
- **Download:** Unity Asset Store — Animatix Pro
- **Documentation:** https://oodestudios.github.io/animatix-pro-docs
- **Support:** oode.contact@gmail.com
- **Feedback:** We'd love to hear from you!

**Remember:** The best animations enhance the player experience without getting in the way. Keep animations purposeful, performant, and polished.

---

## Happy Animating! 🎨✨

For technical support, feature requests, or community discussions, visit the Animatix Pro documentation and support channels.

**OODE Studios** — Creating powerful tools for game developers.

**Contact:** oode.contact@gmail.com  
**Website:** https://oodestudios.github.io/animatix-pro-docs  
**Unity Asset Store:** Search "Animatix Pro"