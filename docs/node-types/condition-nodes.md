# Condition Nodes

**Condition nodes** add **logic and branching** to your animation flow — they evaluate conditions and control execution flow.

## Overview

- **Purpose:** Create decision points where animation can take different paths based on conditions
- **Execution:** Instant — evaluation is immediate, doesn't delay animation
- **Outputs:** Single output port — execution continues if true, stops if false
- **Activation:** Receives execution from triggers, animations, or other conditions

**Common Characteristics:**

- **Single output port** — Condition node has one output port
- **Condition-based** — Evaluates conditions (e.g., "If Player Enter", "If has tag")
- **Continue or stop** — Execution continues if true, stops if false
- **Non-blocking** — Evaluation is instant, doesn't delay animation

## Common Condition Nodes

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

## How Condition Nodes Work

**Execution Flow:**

1. **Condition Node Evaluates:** Checks a condition (e.g., "Is Key Pressed?", "Has Tag?", "If Player Enter")
2. **Evaluation Result:** Returns true or false based on condition content
3. **Execution Flow:** If true, execution continues to the next connected node; if false, execution stops
4. **Single Path:** Only one execution path exists — continue if true, stop if false

**Pattern:**
```
Trigger → Condition Node (e.g., "If Player Enter")
  ↓
  If true → Next Node
  If false → Execution stops
```

**Example Flow:**

```
On Button Click → Is Variable Equal (Has Coin, true)
  ↓
  If true → Fade In (Success UI) → Play Audio (Success Sound)
  If false → Execution stops (no animation)
```

**Execution Flow:**
- If `Has Coin` is `true`: Success UI fades in, success sound plays
- If `Has Coin` is `false`: Execution stops, no animations play

## Conditional Flow Types

| **Flow Type** | **Structure** | **Use Case** |
|-----------------|---------------|--------------|
| **Simple Condition** | Condition → Next Node (if true) | Basic conditional logic |
| **Chained Conditions** | Condition A → Condition B → Condition C | Complex logic chains |
| **Conditional Sequences** | Condition → [If true → Animation → Condition] | Multi-level conditional sequences |

## Best Practices

- **Use for decision points** — When animation should vary based on conditions
- **Keep conditions simple** — Complex logic should be in code, not graphs
- **Test both paths** — Verify execution continues when true, stops when false
- **Combine with other nodes** — Use conditions with animations and actions for complex flows

---

> **Key Takeaways:**
>
> - **Condition nodes = logic** — They evaluate conditions and control flow
> - **Single output** — Execution continues if true, stops if false
> - **Non-blocking** — Evaluation is instant, doesn't delay animation
> - **Decision points** — Create branching logic in your animations

---

**Next:** [Delay Nodes](./delay-nodes)

