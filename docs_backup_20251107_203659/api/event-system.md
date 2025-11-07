# Event System API

**Event System API** provides methods for event-based communication and triggering.

## Overview

**Purpose:** Event-based communication between systems

**Key Features:**

- **Event Triggering:** Trigger events by name
- **Event Listening:** Listen for events
- **Event Management:** Manage event subscriptions

## API Methods

### Event Triggering

```csharp
// Trigger event by name
GraphExecutorUtil.TriggerEventByName("EventName");

// Trigger event on specific executor
GraphExecutorUtil.TriggerEventByName(graphExecutor, "EventName");
```

### Event Listening

```csharp
// Register event handler
EventNodeManager.RegisterHandler("EventName", OnEventFired);

// Unregister event handler
EventNodeManager.UnregisterHandler("EventName", OnEventFired);
```

## Best Practices

- Use descriptive event names
- Document event names used in your project
- Test event integration thoroughly
- Unregister handlers in OnDestroy

---

**Next:** [Graph Manipulation](./graph-manipulation)

