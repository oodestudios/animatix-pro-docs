# Action Nodes

**Action nodes** 🟦 perform **non-visual side effects** — they execute system operations, control game objects, trigger events, and interact with Unity systems.

**Color Coding:** Blue (🟦) — easily identifiable as system operations

## Overview

- **Purpose:** Execute system operations, control objects, trigger events, modify state
- **Execution:** Instant or timed — can execute immediately or wait for duration
- **Outputs:** One or more output ports for continuing execution
- **Activation:** Receives execution from triggers, animations, or conditions

**Common Characteristics:**

- **Instant Operations:** Most actions execute immediately (Set Active, Play Audio)
- **Timed Operations:** Some actions wait for duration (Wait)
- **System-Level:** Affect game systems beyond visual changes
- **Event-Driven:** Often used to trigger other game logic

## Action Categories

Actions are organized into functional categories:

| **Category** | **Examples** | **Description** |
|-------------|-------------|-----------------|
| **System** | Log Message, Wait, Set Variable | General system logic and data operations |
| **GameObject** | Set Active, Enable/Disable Component | Object and component control |
| **UI** | Show/Hide UI, Set Text | UI manipulation and text updates |
| **Audio** | Play Audio | Sound playback and audio control |
| **Animation** | Play Animation | Animator and Legacy Animation triggering |
| **Scene/Graph** | Load Scene, Pause/Resume Graph, Stop Graph, Reset Graph | Graph or scene management |
| **Event** | Invoke Unity Event | Event-driven system integration |

## Quick Reference Table

| **Action Type** | **Use Case** | **Typical Target** |
|-----------------|--------------|-------------------|
| **Log Message** | Debug output, action logging | Console |
| **Set Active** | Toggle GameObject visibility | GameObject Active State |
| **Play Audio** | Sound effects, background music | AudioSource, Audio Clips |
| **Play Animation** | Trigger Animator/Animation | Animator Component, Animation Clips |
| **Load Scene** | Level transitions | Scene Name String |
| **Invoke Unity Event** | Communicate with other systems | UnityEvent Reference |
| **Set Variable** | Store game state | PlayerPrefs Variables |
| **Increment Variable** | Modify game variables | PlayerPrefs Variables |
| **Show/Hide UI** | Control UI visibility | UI GameObject |
| **Set Text** | Update text content | Text Component |
| **Pause/Resume Graph** | Control graph execution | GraphExecutor Component |
| **Stop Graph** | Stop graph execution | GraphExecutor Component |
| **Reset Graph** | Reset graph state | GraphExecutor Component |
| **Wait** | Timing delays | Time Duration |
| **Enable/Disable Component** | Toggle component state | Component References |

## Common Action Nodes

### Log Message

**Purpose:** Writes messages to Unity's console for debugging and logging

**Configuration:**
- **Message:** Text to display in console
- **Log Type:** Log, Warning, or Error

**Example:**
```
On Start → Log Message (Type: Log, "Game Started")
```

### Set Active

**Purpose:** Shows or hides GameObjects by setting their active state

**Configuration:**
- **Target Object:** GameObject reference
- **Set Active:** True to show, false to hide
- **Toggle Mode:** Toggle current state

**Example:**
```
On Button Click → Fade Out (Panel) → Wait 0.5s → Set Active (Target: Panel, Active: false)
```

### Play Audio

**Purpose:** Plays audio clips through an AudioSource component

**Configuration:**
- **Audio Source:** AudioSource component (auto-created if null)
- **Audio Clip:** Sound file to play
- **Volume:** Audio volume (0.0 to 1.0)
- **Pitch:** Audio pitch (0.1 to 3.0)
- **Loop:** Whether audio repeats
- **Stop Previous:** Stop currently playing audio before starting

**Example:**
```
On Button Click → Play Audio (Clip: "Click Sound", Volume: 0.8)
```

### Play Animation

**Purpose:** Triggers Animator (Mecanim) or Legacy Animation clips

**Configuration:**
- **Target Animator:** Animator component (Mecanim)
- **Trigger Name:** Animator trigger parameter name
- **State Name:** Animator state name
- **Use Trigger:** Use trigger (true) or state (false)
- **Cross Fade Duration:** Transition duration for state
- **Target Animation:** Legacy Animation component
- **Animation Clip:** Legacy animation clip
- **Play Legacy Animation:** Use Legacy Animation instead of Animator

**Example:**
```
On Button Click → Play Animation (Animator: Player, Trigger: "Attack")
```

### Load Scene

**Purpose:** Loads Unity scenes synchronously or asynchronously

**Configuration:**
- **Scene Name:** Name of scene to load
- **Load Mode:** Single (replace) or Additive (add to current)
- **Async Load:** Load asynchronously with progress
- **Show Loading Screen:** Display loading UI during load

**Example:**
```
On Button Click → Fade Out (Current Screen) → Load Scene (Scene: "GameLevel", Mode: Single)
```

### Wait

**Purpose:** Pauses execution for a specified duration

**Configuration:**
- **Duration:** Time to wait in seconds
- **Use Unscaled Time:** Ignore Time.timeScale

**Example:**
```
On Start → Fade In → Wait 1s → Scale Up
```

### Set Variable / Increment Variable

**Purpose:** Store or modify game variables (PlayerPrefs)

**Configuration:**
- **Variable Name:** Name of variable to set/increment
- **Value:** Value to set (Set Variable) or amount to add (Increment Variable)
- **Variable Type:** Int, Float, or String

**Example:**
```
On Achievement Unlocked → Set Variable (Name: "AchievementsUnlocked", Value: 5, Type: Int)
```

### Show/Hide UI

**Purpose:** Control UI element visibility

**Configuration:**
- **Target UI:** UI GameObject reference
- **Show:** True to show, false to hide

**Example:**
```
On Button Click → Show UI (Target: "HUD", Show: true)
```

### Set Text

**Purpose:** Update text content dynamically

**Configuration:**
- **Target Text:** Text component reference
- **Text:** New text content

**Example:**
```
On Score Changed → Set Text (Target: "ScoreText", Text: "Score: 100")
```

### Graph Control Actions

**Pause/Resume Graph:** Pause or resume graph execution
**Stop Graph:** Stop graph execution completely
**Reset Graph:** Reset graph to initial state

**Example:**
```
On Pause Button Click → Pause Graph
On Resume Button Click → Resume Graph
```

---

> **Key Takeaways:**
>
> - **Action nodes = system operations** — They perform non-visual tasks
> - **Instant or timed** — Most execute immediately, some wait for duration
> - **System-level** — Affect game systems beyond visual changes
> - **Event-driven** — Often used to trigger other game logic

---

**Next:** [Event Nodes](./event-nodes)

