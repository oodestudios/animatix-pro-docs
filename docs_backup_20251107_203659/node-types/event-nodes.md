# Event Nodes

**Event nodes** handle **callbacks and completion notifications** — they notify systems when animations complete or trigger custom events.

## Overview

- **Purpose:** Notify systems when animations complete or trigger custom events
- **Execution:** Instant — events fire immediately when reached
- **Outputs:** One or more output ports for continuing execution
- **Activation:** Receives execution from triggers, animations, or conditions

**Common Characteristics:**

- **Callback points** — Notify other systems
- **Completion markers** — Indicate animation finished
- **Integration** — Bridge to other game systems

## Event Node

**Purpose:** Fires Unity Events with automatic listener management

**Configuration:**

| **Parameter** | **Type** | **Description** |
|---------------|----------|-----------------|
| **Event Name** | `string` | Unique name to identify this event |
| **Unity Event** | `UnityEvent` | Unity Event to invoke |

**How It Works:**

- Event Node fires when execution reaches it
- Unity Event is invoked with automatic listener management
- Can be used to connect to other Unity systems

**Example Use:**

```
On Start → Fade In → Scale Up → Event Node (Event: "AnimationComplete")
```

**Integration:**

Event Nodes can be connected to:
- Other Unity systems via Unity Events
- Custom scripts via event listeners
- Game state management systems

---

> **Key Takeaways:**
>
> - **Event nodes = callbacks** — They notify other systems
> - **Completion markers** — Indicate when animations finish
> - **Integration** — Bridge to other game systems

---

**Next:** [Condition Nodes](./condition-nodes)

