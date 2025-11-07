# Component API Reference

**Component API** provides direct access to GraphExecutor and related components.

## Overview

**Purpose:** Direct component access and control

**Key Components:**

- **GraphExecutor:** Main graph execution component
- **GraphFlowEventHandler:** Event handling component
- **EventNodeManager:** Event node management
- **AnimatixAnimatorManager:** Animation step management

## GraphExecutor API

```csharp
// Component properties
GraphExecutor executor = GetComponent<GraphExecutor>();

// Control methods
executor.Play();
executor.Stop();
executor.Pause();
executor.Resume();

// State properties
bool isPlaying = executor.IsPlaying;
bool isPaused = executor.IsPaused;
```

## Event Handler API

```csharp
// Component access
GraphFlowEventHandler handler = GetComponent<GraphFlowEventHandler>();

// Event subscription
handler.OnGraphStarted += OnGraphStarted;
handler.OnGraphCompleted += OnGraphCompleted;
```

## Best Practices

- Cache component references for performance
- Use component API for direct control
- Test component API in Play Mode
- Document component usage in code comments

---

**Next:** [Event System API](./event-system)

