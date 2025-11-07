# Graph Structure

Every GraphFlow animation follows a structured pattern: it begins with a **Trigger node**, flows through **processing nodes** (Animation, Action, Condition, Delay), and concludes by **completing or looping**. Understanding this structure helps you build well-organized, efficient animation graphs.

## Start Point: Trigger Nodes

**Trigger nodes** are the entry points of every animation graph — they initiate the animation sequence when specific conditions are met.

**Characteristics:**

- **No input connections** — Triggers are autonomous entry points
- **One or more output connections** — Can start single or multiple animation paths
- **Event-driven** — Activate based on user input, system events, or custom conditions
- **Required** — Every graph must have at least one trigger to execute

**Common Trigger Nodes:**

| **Trigger Type** | **When It Fires** | **Use Case** |
|------------------|-------------------|--------------|
| **On Start** | Scene starts or GameObject becomes active | Automatic animations when level loads |
| **On Button Click** | UI button is clicked | Menu interactions, button feedback |
| **On Key Press** | Specific keyboard key is pressed | Keyboard shortcuts, debug triggers |
| **On Mouse Enter** | Mouse cursor enters UI element | Hover effects, tooltip triggers |
| **On Mouse Exit** | Mouse cursor leaves UI element | Exit animations, cleanup |
| **On Value Changed** | A watched value changes | Reactive animations |
| **Custom Trigger** | User-defined condition | Advanced, custom logic |

**Visual Representation:**

*Trigger nodes — entry points for animation graphs*

**Multiple Triggers:**

A single graph can have **multiple trigger nodes**, each starting different animation paths:

```
On Start → Fade In Animation
On Button Click → Slide Animation
On Key Press → Rotate Animation
```

All three paths can coexist in the same graph, allowing for complex, multi-trigger systems.

## Node Types: Building Blocks

Between the trigger and completion, your graph consists of various node types that process and control the animation flow.

### 1. Animation Nodes

Animation nodes perform **visual transformations** on GameObjects.

**Purpose:** Change visual properties over time (position, rotation, scale, transparency, etc.)

**Common Animation Nodes:**

| **Node** | **What It Animates** | **Example Use** |
|-----------|---------------------|-----------------|
| **Fade** | Alpha/Transparency | UI elements appearing/disappearing |
| **Move** | Position | Sliding panels, objects moving |
| **Scale** | Size | Growth/shrink effects, impact feedback |
| **Rotate** | Rotation | Spinning icons, rotating objects |
| **Slide** | Position with easing | Smooth panel transitions |
| **Bounce** | Position with bounce physics | Playful UI effects |
| **Color** | Color values | Material transitions, UI color changes |

**Animation Node Characteristics:**

- **Duration-based** — Execute over a specified time period
- **Interpolated** — Smooth transitions between start and end values
- **Configurable** — Start/end values, easing, delays all customizable
- **Reusable** — Same node type can animate different targets

*Animation nodes — visual transformation building blocks*

### 2. Action Nodes

Action nodes execute **system operations** that aren't visual animations.

**Purpose:** Perform non-visual tasks like playing sounds, triggering events, or calling functions

**Common Action Nodes:**

| **Node** | **What It Does** | **Example Use** |
|-----------|------------------|-----------------|
| **Log Message** | Writes message to console | Debug output, action logging |
| **Set Active** | Shows/hides GameObject | Toggle UI visibility |
| **Play Audio** | Plays audio clip | Sound effects, background music |
| **Play Animation** | Triggers Animator/Animation | Play character animations |
| **Load Scene** | Changes Unity scene | Level transitions |
| **Invoke Unity Event** | Fires Unity Event | Communicate with other systems |
| **Set Variable** | Sets game variable value | Store animation state |
| **Show/Hide UI** | Controls UI element visibility | Toggle UI panels |
| **Set Text** | Changes text content | Update UI text dynamically |
| **Wait** | Pauses execution for duration | Timing control between actions |

**Action Node Characteristics:**

- **Instant or timed** — Can execute immediately or wait for duration
- **System-level** — Affect game systems beyond visual changes
- **Event-driven** — Often used to trigger other game logic

*Action nodes — system operation building blocks*

### 3. Condition Nodes

Condition nodes add **logic and branching** to your animation flow.

**Purpose:** Create decision points where animation can take different paths based on conditions

**Common Condition Nodes:**

| **Node** | **What It Checks** | **Example Use** |
|-----------|-------------------|----------------|
| **Is Key Pressed** | Keyboard key state | Different animations based on key input |
| **Is Player In Zone** | Distance/proximity check | Animate when player approaches |
| **Is Cursor Hovering** | Mouse hover state | Hover effects for UI or 3D objects |
| **Is UI Button Pressed** | Button click state | Button-specific animation logic |
| **Is Variable Equal** | Variable equality check | Conditional animations based on game state |
| **Is Bool True** | Boolean value check | Different animations based on boolean state |
| **Is Active** | GameObject active state | Animate only if object is active |
| **Has Tag** | GameObject tag check | Different behavior for tagged objects |

**Condition Node Characteristics:**

- **Single output port** — Condition node has one output port
- **Condition-based** — Evaluates conditions (e.g., "If Player Enter", "If has tag")
- **Continue or stop** — Execution continues if true, stops if false
- **Non-blocking** — Evaluation is instant, doesn't delay animation

**Example Flow:**

```
On Button Click → Is Variable Equal (Has Coin, true)
  ↓
  If true → Fade In (Success UI)
  If false → Execution stops
```

*Condition nodes — evaluate conditions and continue execution if true, stop if false*

### 4. Delay Nodes

Delay nodes add **timing control** and pauses to your animation sequence.

**Purpose:** Create pauses between actions or wait for specific durations

**Common Delay Nodes:**

| **Node** | **What It Does** | **Example Use** |
|-----------|------------------|-----------------|
| **Wait** | Pauses execution for duration | Time between animations, pacing control |

**Delay Node Characteristics:**

- **Blocking** — Stops flow until delay completes
- **Configurable duration** — Set exact wait time
- **Timing control** — Essential for pacing complex sequences

**Example Use:**

```
On Start → Fade In → Wait 2s → Slide Out
```

This creates a fade-in, followed by a 2-second pause, then slides out.

*Delay nodes — timing and pause control*

### 5. Event Nodes

Event nodes handle **callbacks and completion notifications**.

**Purpose:** Notify systems when animations complete or trigger custom events

**Common Event Nodes:**

| **Node** | **What It Does** | **Example Use** |
|-----------|------------------|-----------------|
| **Event Node** | Fires Unity Events with automatic listener management | Connect to Unity systems, notify completion |

**Event Node Characteristics:**

- **Callback points** — Notify other systems
- **Completion markers** — Indicate animation finished
- **Integration** — Bridge to other game systems

*Event nodes — completion and callback handling*

## End Point: Completion or Looping

Every graph ends by **completing or looping**.

### Completion (Default Behavior)

When an animation sequence reaches its natural end:

- **Execution stops** — Animation completes and stops
- **Resources cleaned up** — Nodes release any allocated resources
- **Final state reached** — GameObject remains in final animated state
- **Event nodes fire** — Completion events trigger if connected

**Visual Flow Example:**

```
On Start → Fade In → Scale Up → Event Node
                                  ↓
                            [Animation Ends]
```

### Looping Behavior

Animations can be set to **loop continuously** instead of completing once.

**How Looping Works:**

1. **GraphExecutor Setting:** Enable "Loop Graph" in GraphExecutor component
2. **Node-Level Looping:** Some animation nodes have built-in loop options
3. **Manual Looping:** Connect last node back to trigger (advanced)

**Looping Types:**

| **Loop Type** | **Behavior** | **Use Case** |
|---------------|-------------|--------------|
| **Simple Loop** | Repeats entire sequence | Continuous background animations |
| **Ping-Pong Loop** | Plays forward, then reverse | Breathing effects, pulsing |
| **Custom Loop** | User-defined loop logic | Advanced animation patterns |

**Example Looping Graph:**

```
On Start → Rotate 360° → [Loop Back to Start]
```

This creates an infinite rotation animation.

*Looping animation — continuous execution*

**When to Use Each:**

| **End Point Type** | **When to Use** | **Example** |
|-------------------|-----------------|-------------|
| **Completion** | One-time animations | Menu transitions, cutscenes |
| **Looping** | Continuous effects | Background elements, ambient animations |

## Complete Graph Flow Example

Here's a complete example showing all graph structure elements:

**Example: Menu Panel Animation**

```
On Button Click (Trigger)
  ↓
Fade In (Animation) — Duration: 0.5s
  ↓
Wait 1s (Delay)
  ↓
Scale Up (Animation) — Duration: 0.3s
  ↓
Is Bool True: HasSoundEnabled (Condition)
  ├─ True → Play Audio (Action) — Button Click Sound
  └─ False → [Skip]
  ↓
Event Node (Event)
  ↓
[Animation Completes]
```

**Graph Breakdown:**

1. **Trigger:** `On Button Click` starts the sequence
2. **Animation:** `Fade In` makes panel visible
3. **Delay:** `Wait 1s` pauses for emphasis
4. **Animation:** `Scale Up` adds bounce effect
5. **Condition:** `Is Bool True` checks sound settings
6. **Action:** `Play Audio` plays sound if enabled
7. **Event:** `Event Node` notifies completion

*Complete graph flow example — showing trigger, animation, delay, condition, action, and event nodes*

## Graph Structure Best Practices

**Organization Tips:**

1. **Start with Trigger** — Always begin with a clear trigger node
2. **Logical Flow** — Arrange nodes left-to-right for readability
3. **Group Related Nodes** — Keep connected nodes visually close
4. **Clear End Points** — Use completion or looping explicitly
5. **Avoid Spaghetti** — Keep connections clean and organized

**Common Patterns:**

| **Pattern** | **Structure** | **Use Case** |
|-------------|---------------|--------------|
| **Simple Sequence** | Trigger → Animation → Complete | Basic animations |
| **Layered Effect** | Trigger → [Parallel: Fade + Scale with RunWithPrevious] → Complete | Complex simultaneous animations |
| **Conditional Path** | Trigger → Condition → [If true → Animation] → Complete | Decision-based animations |
| **Timed Sequence** | Trigger → Animation → Delay → Animation → Complete | Paced animations with pauses |

---

> **Key Takeaways:**
>
> - **Start with Triggers** — Entry points initiate animation sequences
> - **Process with nodes** — Animation, Action, Condition, Delay handle execution
> - **End with completion or looping** — Graphs conclude or repeat
> - **Structure matters** — Organized graphs are easier to read and maintain

---

**Next:** [Graph Categories](./graph-categories)

