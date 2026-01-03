# Parallel Execution Strategies

**Parallel execution** allows multiple animations to run simultaneously using the `RunWithPrevious` property.

## Overview

**Purpose:** Execute multiple animations simultaneously for layered effects

**How It Works:**

- Connect nodes sequentially
- Enable `RunWithPrevious` on the second node
- Both nodes execute concurrently (2 nodes max at once)

**Example:**

```
On Start → Fade In → Scale Up (RunWithPrevious: true)
```

Both Fade In and Scale Up start simultaneously.

## Best Practices

- Use parallel execution for layered effects
- Maximum 2 nodes can run in parallel at once
- Use `StartOffset` for timing control
- Test parallel execution for proper synchronization

---

## Trigger Relay Node: Unlimited Parallel Execution

For executing **3 or more nodes** in parallel, use the **Trigger Relay** node instead of `RunWithPrevious`.

**Trigger Relay** is a special flow control node that automatically executes **all connected output nodes in parallel**. Unlike `RunWithPrevious` (which supports 2 nodes), Trigger Relay supports **unlimited parallel execution**.

**How It Works:**

```
Trigger Node → Trigger Relay → [Node A, Node B, Node C, ...]
                                    ↓         ↓         ↓
                              All execute simultaneously
```

![Trigger Relay Node in GraphFlow Editor](/img/screenshots/49-trigger-relay-node-in-editor.png)

**Key Features:**

- ✅ **Unlimited parallel nodes** - Execute as many nodes as needed
- ✅ **Automatic execution** - No need to set `RunWithPrevious` flags
- ✅ **Same object support** - Multiple animations can play on the same object simultaneously
- ✅ **Waits for completion** - Trigger Relay waits for all nodes to complete before proceeding

**When to Use:**

- **3+ nodes** need to execute in parallel
- Multiple animations should play on the **same object** simultaneously
- You want **explicit parallel execution** intent in your graph

**Example:**

```
On Button Click
    ↓
Trigger Relay
    ↓         ↓         ↓
Move 3D   Color Tween  Rotate 3D
```

![Trigger Relay with Multiple Connections](/img/screenshots/50-trigger-relay-multiple-connections.png)

**Result:** All three animations play simultaneously on the same object.

![Trigger Relay Parallel Execution Animation](/img/screenshots/54-trigger-relay-same-object-animation.gif)

**Setup:**

1. Right-click in GraphFlow Editor → **"Add Node" → "🔀 Trigger Relay"**
2. Connect trigger to Trigger Relay
3. Connect all parallel nodes to Trigger Relay
4. No configuration needed - parallel execution is automatic!

**Comparison:**

| **Method** | **Max Nodes** | **Best For** |
|------------|---------------|--------------|
| `RunWithPrevious` | 2 nodes | Simple two-node parallel |
| **Trigger Relay** | Unlimited | 3+ nodes, same-object multi-animation |

![RunWithPrevious vs Trigger Relay Comparison](/img/screenshots/52-runwithprevious-vs-trigger-relay-comparison.png)

> 💡 **Tip:** Use `RunWithPrevious` for 2 nodes, use **Trigger Relay** for 3+ nodes.

---

**Next:** [Event Architecture](./event-architecture)

