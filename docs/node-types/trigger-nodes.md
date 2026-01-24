# Trigger Nodes

**Trigger nodes** 🟧 are the **entry points** of every animation graph — they initiate animation sequences when specific conditions are met. Without a trigger node, your graph cannot execute.

**Color Coding:** Green (🟧) — easily identifiable as entry points

## Overview

- **Purpose:** Start animation sequences based on events, user input, or system conditions
- **Execution:** Autonomous — no input connections needed
- **Outputs:** One or more output ports for connecting to animation nodes
- **Activation:** Based on Unity events, user input, timers, or custom logic

**Common Characteristics:**

- **No Input Ports:** Triggers don't receive execution from other nodes
- **Autonomous:** Act independently based on their specific conditions
- **Event-Driven:** React to Unity events, user actions, or system changes
- **Reusable:** Same trigger type can be used multiple times in different graphs

**Trigger Lifecycle:**

```
Trigger Detected → Node Activated → Connected Animations Execute → Graph Continues
```

Triggers monitor for their specific conditions (button click, key press, timer, etc.). When the condition is met, the trigger activates and sends execution to connected nodes, which then execute their animations.

## Quick Reference Table

| **Trigger Type** | **Use Case** | **Typical Target** |
|------------------|--------------|-------------------|
| **On Start** | Scene intro, automatic animations | UI panels, intro sequences |
| **On Button Click** | Menu interactions, UI feedback | Button component |
| **On Key Press** | Input shortcuts, debug controls | Keyboard keys |
| **On Custom Event** | Code integration, game events | Event name string |
| **On Enable** | Object lifecycle, reusable animations | GameObject active state |
| **On Disable** | Cleanup sequences, exit effects | GameObject inactive state |
| **On Trigger Zone** | 3D proximity, collisions | Collider component |
| **On Timer** | Delayed sequences, looping effects | Time duration |
| **On API Call** | Advanced integration, direct control | Code API calls |

## On Start

**Purpose:** Triggers automatically when the scene starts or the GameObject becomes active

> 📘 **Key Uses:**
>
> - Menu panels appearing on scene load
> - Game opening animations
> - HUD elements fading in
> - Opening cinematics

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Startup Delay** | `float` | `0.5s` | Delay before trigger fires (prevents false triggers) |
| **Fire Once** | `bool` | `true` | Whether trigger fires only once or repeatedly |

**Settings Explained:**

- **Startup Delay:** Prevents false triggers when Unity starts. Recommended: 0.5-1.0 seconds
- **Fire Once:** When enabled, trigger fires once and stops. When disabled, can fire repeatedly if GameObject is disabled/re-enabled

**Example Use:**

```
On Start (0.5s delay, Fire Once)
  ↓
Fade In (Menu Panel)
  ↓
Play Audio (Background Music)
```

**Best Practices:**

- Use startup delay to avoid false triggers during Unity initialization
- Enable "Fire Once" for one-time intro animations
- Combine with delay nodes for precise timing control

## On Button Click

**Purpose:** Triggers when a UI Button is clicked

> 📘 **Key Uses:**
>
> - Menu navigation
> - Gameplay triggers
> - Button feedback animations
> - Screen transitions

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Target Button** | `Button` | `null` | The UI Button component to monitor |

**Button Assignment:**

1. Select the trigger node in GraphFlow Editor
2. In Inspector, find **Target Button** field
3. Drag a Button GameObject from Hierarchy into the field
   - Or click circle icon to select from scene
4. Button is automatically connected on assignment

**Setup Requirements:**

- Button must have `Button` component (Unity UI)
- Button must be in active Canvas hierarchy
- EventSystem must exist in scene

**Example Use:**

```
On Button Click (Target: "Play Button")
  ↓
Fade Out (Current Screen)
  ↓
Fade In (Game Screen)
```

**Best Practices:**

- Assign button reference in Inspector before testing
- Test with actual button clicks, not just code triggers
- Use button name for debugging ("Button: PlayButton, Active: True")

## On Key Press

**Purpose:** Triggers when a specific keyboard key is pressed

> 📘 **Key Uses:**
>
> - Debug controls
> - Cheat codes
> - Testing shortcuts
> - Accessibility inputs

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Key** | `KeyCode` | `Space` | Keyboard key to monitor for presses |

**Key Selection:**

- Click **Key** dropdown in Inspector
- Choose from all Unity KeyCode options
- Common choices: Space, Enter, Escape, Alpha1-9, etc.

**Example Use:**

```
On Key Press (Key: Space)
  ↓
Fade In (HUD)
  ↓
Play Audio (UI Sound)
```

**Platform Notes:**

- **Desktop:** Full keyboard support
- **Mobile:** Not applicable (use On Button Click instead)
- **Console:** Limited to controller button mappings

**Best Practices:**

- Use for debug/testing shortcuts
- Provide alternative UI buttons for accessibility
- Test key responsiveness after startup delay

## On Enable / On Disable

**On Enable:** Triggers when the GameObject becomes active/enabled

**On Disable:** Triggers when the GameObject becomes inactive/disabled

> 📘 **Key Uses:**
>
> - Reusable animations
> - Respawn effects
> - Dynamic UI panels
> - State transitions
> - Cleanup sequences
> - Exit effects

**Configuration:**

*No configurable parameters* — Automatically detects enable/disable state

**How It Works:**

- GraphExecutor monitors GameObject active state
- When GameObject becomes active/inactive, trigger fires
- Works with GameObject.SetActive() calls

**Example Use:**

```
On Enable
  ↓
Scale Up (UI Panel)
  ↓
Fade In (Content)
```

**Best Practices:**

- Use for objects that are frequently enabled/disabled
- Combine with On Disable for complete lifecycle management
- Test enable/disable cycles for expected behavior

## On Trigger Zone

**Purpose:** Triggers when collision/trigger events occur (collision-based triggers)

> 📘 **Key Uses:**
>
> - Proximity detection
> - Interaction zones
> - Area-based events
> - 3D interactions

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Required Tag** | `string` | `""` | Tag that colliding object must have |
| **Check Tag** | `bool` | `false` | Whether to filter by tag |
| **Trigger On Enter** | `bool` | `true` | Fire when collider enters trigger |
| **Trigger On Exit** | `bool` | `false` | Fire when collider exits trigger |
| **Trigger Zone** | `Collider` | `null` | The trigger collider to monitor |

**Setup Requirements:**

1. **Create Trigger Zone:**
   - Add Collider component to GameObject
   - Check "Is Trigger" checkbox
   - Set appropriate size and position

2. **Configure Trigger:**
   - Assign Collider to **Trigger Zone** field in Inspector
   - Set **Required Tag** if tag filtering needed
   - Enable **Trigger On Enter** or **Trigger On Exit**

3. **Tag Objects:**
   - Apply matching tag to objects that should trigger

**Example Use:**

```
On Trigger Zone (Tag: "Player", Enter: true)
  ↓
Scale Up (Sign Post)
  ↓
Play Audio (Area Music)
```

**Best Practices:**

- Use tags for precise object filtering
- Test trigger zones with target objects
- Optimize collider sizes for performance
- Use layer-based filtering for complex scenes

## On Timer

**Purpose:** Triggers after a specified time delay (time-based triggers)

> 📘 **Key Uses:**
>
> - Delayed sequences
> - Looping effects
> - Timed events
> - Cutscene pacing

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Delay Time** | `float` | `1.0s` | Time to wait before firing |
| **Loop Timer** | `bool` | `false` | Whether to repeat after delay |
| **Use Unscaled Time** | `bool` | `false` | Use Time.unscaledTime instead of Time.time |

**Settings Explained:**

- **Delay Time:** Duration in seconds before trigger fires
- **Loop Timer:** When enabled, trigger repeats every `Delay Time` seconds
- **Use Unscaled Time:** Ignores Time.timeScale (useful for pause/resume)

**Example Use:**

```
On Timer (Delay: 3s, Loop: false)
  ↓
Fade In (Warning Message)
```

**Looping Example:**

```
On Timer (Delay: 5s, Loop: true)
  ↓
Play Audio (Ambient Loop)
```

**Time Scale Behavior:**

- **Use Unscaled Time = false:** Affected by Time.timeScale (pause pauses timer)
- **Use Unscaled Time = true:** Ignores Time.timeScale (timer continues when paused)

**Best Practices:**

- Use loop timers for ambient/repeating effects
- Use unscaled time for UI elements that should work during pause
- Combine with other triggers for complex timing sequences

## On Custom Event

**Purpose:** Triggers programmatically via event-name API calls

> 📘 **Key Uses:**
>
> - Code integration
> - Game events (achievements, level completion)
> - System integration
> - Custom trigger logic

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Event Name** | `string` | `"CustomEvent"` | Unique name to identify this trigger |

**API Integration:**

```csharp
// In your code:
GraphExecutorUtil.TriggerEventByName("CustomEventName");
```

**Event Naming:**

- **Unique names:** Each custom event should have a unique name
- **Descriptive:** Use descriptive names (e.g., "AchievementUnlocked", "LevelComplete")
- **Case-sensitive:** Event names are case-sensitive

**Example Use:**

```
On Custom Event (Event Name: "BossDefeated")
  ↓
Fade In (Victory Screen)
  ↓
Play Audio (Victory Music)
```

**Best Practices:**

- Use descriptive, unique event names
- Document event names used in your project
- Test API calls match trigger event names exactly

## On API Call

**Purpose:** Triggers via direct API method calls (advanced integration)

> 📘 **Key Uses:**
>
> - Advanced integration
> - External system plugins
> - Complex conditional logic
> - Debug controls

**Configuration:**

*No configurable parameters* — Triggered via code API

**API Usage:**

```csharp
// Get trigger node reference
var triggerNode = graphExecutor.GetTriggerNode("OnApiCall");
if (triggerNode != null && triggerNode.triggerInstance is OnApiCallTrigger apiTrigger)
{
    apiTrigger.SetApiCalled();
}
```

**When to Use:**

- **Advanced workflows:** Custom trigger logic not covered by other triggers
- **Direct control:** Need direct code-to-animation link
- **Integration:** External systems calling animations
- **Testing:** Programmatic test triggers

**Best Practices:**

- Use sparingly — prefer **On Custom Event** for most cases
- Document API usage in code comments
- Test API integration thoroughly
- Consider event-based alternatives first

## Trigger Relay Node

**Purpose:** Flow control node for unlimited parallel execution of connected nodes

> 📘 **Key Uses:**
>
> - Execute 3+ nodes simultaneously
> - Multiple animations on same object
> - Explicit parallel execution intent
> - Complex layered effects

**How It Works:**

Trigger Relay automatically executes **all connected output nodes in parallel**. Unlike `RunWithPrevious` (which supports 2 nodes), Trigger Relay supports **unlimited parallel execution**.

**Execution Flow:**

```
Trigger Node → Trigger Relay → [Node A, Node B, Node C, ...]
                                    ↓         ↓         ↓
                              All execute simultaneously
```

<!-- TODO: image pending: /img/screenshots/49.trigger-relay-node-editor.png -->

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Title** | `string` | `"Trigger Relay"` | Custom name for the node |

<!-- TODO: image pending: /img/screenshots/51.trigger-relay-inspector.png -->

**Example Use:**

```
On Button Click
    ↓
Trigger Relay
    ↓         ↓         ↓
Move 3D   Color Tween  Rotate 3D
```

<!-- TODO: image pending: /img/screenshots/50.trigger-relay-multiple-connections.png -->

**Result:** All three animations play simultaneously on the same object.

**When to Use:**

- **3+ parallel nodes** - Execute multiple nodes simultaneously
- **Same object animations** - Multiple animations on one object
- **Explicit intent** - Make parallel execution clear in graph

**Comparison:**

| **Method** | **Max Nodes** | **Best For** |
|------------|---------------|--------------|
| `RunWithPrevious` | 2 nodes | Simple two-node parallel |
| **Trigger Relay** | Unlimited | 3+ nodes, same-object multi-animation |

**Best Practices:**

- Use Trigger Relay for 3+ parallel nodes
- Use `RunWithPrevious` for simple 2-node parallel execution
- Give Trigger Relay descriptive titles for clarity

> 💡 **See Also:** [Parallel Execution Strategies](../advanced/parallel-execution) for detailed Trigger Relay documentation.

## When to Use Each Trigger

**Quick Decision Guide:**

| **Scenario** | **Recommended Trigger** | **Why** |
|--------------|------------------------|---------|
| **Scene starts, automatic animations** | **On Start** | Simple, automatic activation |
| **UI button interactions** | **On Button Click** | Built for UI, easy setup |
| **Keyboard shortcuts, debug** | **On Key Press** | Direct keyboard input |
| **Code integration, game events** | **On Custom Event** | Flexible, event-based |
| **Object lifecycle (enable)** | **On Enable** | Automatic, lifecycle-aware |
| **Object lifecycle (disable)** | **On Disable** | Cleanup, exit animations |
| **3D proximity, collisions** | **On Trigger Zone** | Collision-based, spatial |
| **Timed delays, loops** | **On Timer** | Time-based, repeating |
| **Advanced API control** | **On API Call** | Direct code integration |

## Troubleshooting Common Issues

**Issue: Trigger not firing**

- **Solution:** Ensure GameObject and EventSystem (for UI triggers) are active
- **Solution:** Check trigger configuration (target references, tags, delays)
- **Solution:** Verify trigger is connected to animation nodes

**Issue: Multiple triggers conflicting**

- **Solution:** Each trigger type is independent — multiple triggers can coexist
- **Solution:** Check execution priority if order matters (use sequential connections)
- **Solution:** Use unique event names for custom events

**Issue: Trigger fires too early or too late**

- **Solution:** Adjust startup delay (On Start, On Key Press)
- **Solution:** Use Delay nodes for precise timing control
- **Solution:** Check Time.timeScale if using scaled time

**Issue: Button click not registering**

- **Solution:** Verify EventSystem exists in scene
- **Solution:** Check button is in active Canvas hierarchy
- **Solution:** Ensure button component is enabled and interactable

---

> **Key Takeaways:**
>
> - **Triggers start everything** — No trigger, no animation
> - **Choose by use case** — Match trigger type to your needs
> - **Configure carefully** — Proper setup ensures reliable triggering
> - **Test thoroughly** — Verify trigger behavior in Play Mode
> - **Combine triggers** — Multiple triggers can coexist in one graph

---

**Next:** [Animation Nodes](./animation-nodes)

