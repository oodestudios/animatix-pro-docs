# GraphFlowEventHandler Component

**GraphFlowEventHandler** handles GraphExecutor lifecycle and node execution events.

## Overview

**Purpose:** Handle graph execution events and node callbacks

**Key Features:**

- **Lifecycle Events:** OnGraphStarted, OnGraphCompleted, OnGraphStopped
- **Node Events:** OnNodeStarted, OnNodeCompleted
- **Custom Events:** Handle custom event node callbacks

## Configuration

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| **Target GraphExecutor** | `GraphExecutor` | GraphExecutor to monitor |
| **Enable Logging** | `bool` | Enable debug logging |

## Event Handlers

```csharp
// Lifecycle events
void OnGraphStarted(GraphExecutor executor)
void OnGraphCompleted(GraphExecutor executor)
void OnGraphStopped(GraphExecutor executor)

// Node events
void OnNodeStarted(GraphNode node)
void OnNodeCompleted(GraphNode node)
```

## Best Practices

- Assign Target GraphExecutor in Inspector
- Use event handlers for system integration
- Enable logging for debugging
- Test event handlers in Play Mode

---

**Next:** [Event Manager](./event-manager)

