# Delay Nodes

**Delay nodes** add **timing control** and pauses to your animation sequence.

## Overview

- **Purpose:** Create pauses between actions or wait for specific durations
- **Execution:** Blocking — stops flow until delay completes
- **Outputs:** One or more output ports for continuing execution
- **Activation:** Receives execution from triggers, animations, or conditions

**Common Characteristics:**

- **Blocking** — Stops flow until delay completes
- **Configurable duration** — Set exact wait time
- **Timing control** — Essential for pacing complex sequences

## Wait Node

**Purpose:** Pauses execution for a specified duration

**Configuration:**

| **Parameter** | **Type** | **Default** | **Description** |
|---------------|----------|-------------|-----------------|
| **Duration** | `float` | `1.0s` | Time to wait in seconds |
| **Use Unscaled Time** | `bool` | `false` | Use Time.unscaledTime instead of Time.time |

**Settings Explained:**

- **Duration:** How long to wait before continuing execution
- **Use Unscaled Time:** When enabled, ignores Time.timeScale (useful for pause/resume)

**Example Use:**

```
On Start → Fade In → Wait 2s → Slide Out
```

This creates a fade-in, followed by a 2-second pause, then slides out.

**Time Scale Behavior:**

- **Use Unscaled Time = false:** Affected by Time.timeScale (pause pauses delay)
- **Use Unscaled Time = true:** Ignores Time.timeScale (delay continues when paused)

**Common Use Cases:**

- **Timed sequences:** Show message → Wait 2s → Hide message
- **Pacing control:** Animation → Wait → Animation → Wait
- **Dramatic pauses:** Build-up sequences with timed delays
- **UI timing:** Wait between UI element reveals

**Best Practices:**

- **Use for pacing** — Control timing between animation steps
- **Combine with animations** — Create timed sequences with delays
- **Use unscaled time for UI** — UI elements should work during pause
- **Test timing** — Verify delays match your intended pacing

---

> **Key Takeaways:**
>
> - **Delay nodes = timing control** — They create pauses in execution
> - **Blocking** — Stops flow until delay completes
> - **Configurable** — Set exact wait time
> - **Essential for pacing** — Control timing in complex sequences

---

**Next:** [UI Animations](../animations/ui-animations)

