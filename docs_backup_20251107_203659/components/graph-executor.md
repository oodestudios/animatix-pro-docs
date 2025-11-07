# GraphExecutor Component

**GraphExecutor** is the core component that executes GraphFlow graphs at runtime.

## Overview

**Purpose:** Execute GraphFlow graphs in your scenes

**Key Features:**

- **Graph Assignment:** Assign GraphFlow Asset to execute
- **Auto Start:** Automatically start graph on enable
- **Loop Graph:** Repeat graph execution continuously
- **Runtime Control:** Start, stop, pause, resume graphs programmatically

## Configuration

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| **Graph Asset** | `GraphFlowAsset` | GraphFlow Asset to execute |
| **Auto Start On Enable** | `bool` | Start graph automatically when enabled |
| **Loop Graph** | `bool` | Repeat graph execution continuously |

## Runtime API

```csharp
// Start graph
graphExecutor.Play();

// Stop graph
graphExecutor.Stop();

// Pause graph
graphExecutor.Pause();

// Resume graph
graphExecutor.Resume();
```

## Best Practices

- Assign GraphFlow Asset in Inspector
- Use Auto Start for automatic execution
- Use Loop Graph for continuous animations
- Test graph execution in Play Mode

---

**Next:** [Event Handler](./event-handler)

