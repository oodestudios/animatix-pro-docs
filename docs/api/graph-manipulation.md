# Runtime Graph Manipulation

**Runtime Graph Manipulation** allows you to modify graphs at runtime.

## Overview

**Purpose:** Modify graph structure and properties at runtime

**Key Features:**

- **Node Access:** Access and modify nodes
- **Connection Management:** Add/remove connections
- **Property Modification:** Change node properties

## API Methods

```csharp
// Get node by ID
GraphNode node = graphExecutor.GetNode(nodeId);

// Modify node properties
node.SetProperty("Duration", 2.0f);

// Add connection
graphExecutor.AddConnection(sourceNode, targetNode);

// Remove connection
graphExecutor.RemoveConnection(sourceNode, targetNode);
```

## Best Practices

- Use runtime manipulation sparingly
- Test runtime changes thoroughly
- Document runtime modifications
- Consider performance impact

---

**Next:** [Custom Nodes](./custom-nodes)

