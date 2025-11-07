# GraphExecutorUtil Runtime API

**GraphExecutorUtil** provides static methods for runtime control of GraphFlow graphs.

## Overview

**Purpose:** Programmatic control over GraphFlow graphs and components

**Key Features:**

- **Graph Control:** Start, stop, pause, resume graphs
- **Event Triggering:** Trigger events by name
- **Component Access:** Access GraphExecutor components

## API Methods

### Graph Control

```csharp
// Start graph
GraphExecutorUtil.PlayGraph(graphExecutor);

// Stop graph
GraphExecutorUtil.StopGraph(graphExecutor);

// Pause graph
GraphExecutorUtil.PauseGraph(graphExecutor);

// Resume graph
GraphExecutorUtil.ResumeGraph(graphExecutor);
```

### Event Triggering

```csharp
// Trigger event by name
GraphExecutorUtil.TriggerEventByName("EventName");

// Trigger event on specific executor
GraphExecutorUtil.TriggerEventByName(graphExecutor, "EventName");
```

### Component Access

```csharp
// Get GraphExecutor component
GraphExecutor executor = GraphExecutorUtil.GetGraphExecutor(gameObject);

// Find all GraphExecutors in scene
GraphExecutor[] executors = GraphExecutorUtil.FindAllGraphExecutors();
```

## Best Practices

- Use GraphExecutorUtil for runtime control
- Cache GraphExecutor references for performance
- Test API calls in Play Mode
- Document API usage in code comments

---

**Next:** [Component API](./component-api)

