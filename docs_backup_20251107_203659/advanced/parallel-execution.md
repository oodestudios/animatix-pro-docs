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

**Next:** [Event Architecture](./event-architecture)

