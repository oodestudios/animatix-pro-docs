# EventNodeManager Component

**EventNodeManager** manages listeners for EventNode components and handles event callbacks.

## Overview

**Purpose:** Manage event node listeners and callbacks

**Key Features:**

- **Listener Management:** Automatic listener registration
- **Event Callbacks:** Handle event node callbacks
- **Custom Handlers:** Register custom event handlers

## Configuration

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| **Auto Register** | `bool` | Automatically register listeners |
| **Enable Logging** | `bool` | Enable debug logging |

## API

```csharp
// Register event handler
EventNodeManager.RegisterHandler("EventName", OnEventFired);

// Unregister event handler
EventNodeManager.UnregisterHandler("EventName", OnEventFired);
```

## Best Practices

- Use EventNodeManager for centralized event handling
- Register handlers in Start or Awake
- Unregister handlers in OnDestroy
- Test event handlers in Play Mode

---

**Next:** [Animator Manager](./animator-manager)

