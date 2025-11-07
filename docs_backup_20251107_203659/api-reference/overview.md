---
sidebar_position: 1
---

# API Overview for Developers

## 5️⃣ API Overview for Developers

### Main Classes

Animatix Pro provides a comprehensive API for runtime control and integration with your game systems.

#### GraphExecutor
- **Purpose:** Main component that runs GraphFlow animations
- **Location:** MonoBehaviour component on GameObjects
- **Key Properties:**
```csharp
public GraphFlowAsset GraphAsset;        // Animation graph to run
public bool PlayOnStart = true;          // Auto-play when scene starts
public bool LoopAnimation = false;       // Repeat the animation
public float PlaybackSpeed = 1.0f;       // Speed multiplier
```

#### GraphExecutorUtil
- **Purpose:** Static utility class for runtime control
- **Location:** Static methods accessible from anywhere
- **Key Methods:**
```csharp
// Control animations
GraphExecutorUtil.RunByName(string name);
GraphExecutorUtil.StopByName(string name);
GraphExecutorUtil.PauseByName(string name);
GraphExecutorUtil.ResumeByName(string name);

// Check status
bool isPlaying = GraphExecutorUtil.IsPlaying(string name);
float progress = GraphExecutorUtil.GetProgress(string name);
```

#### GraphFlowAsset
- **Purpose:** ScriptableObject containing animation graph data
- **Location:** Asset files in your project
- **Key Properties:**
```csharp
public List<GraphNode> Nodes;            // All nodes in the graph
public List<GraphConnection> Connections; // Connections between nodes
public string GraphName;                  // Name of the graph
public GraphCategory Category;           // Organization category
```

#### GraphNode Types
- **Purpose:** Base class for all animation nodes
- **Location:** Abstract base class
- **Key Properties:**
```csharp
public string ID;                         // Unique identifier
public string Title;                      // Display name
public Vector2 Position;                  // Position in editor
public Color NodeColor;                   // Visual color
```

---

### Common API Actions

#### Starting Animations
```csharp
// Start animation by name
GraphExecutorUtil.RunByName("MyAnimation");

// Start animation with callback
GraphExecutorUtil.RunByName("MyAnimation", () => {
    Debug.Log("Animation completed!");
});

// Start animation with speed multiplier
GraphExecutorUtil.RunByName("MyAnimation", 2.0f); // 2x speed
```

#### Stopping Animations
```csharp
// Stop animation immediately
GraphExecutorUtil.StopByName("MyAnimation");

// Stop all animations
GraphExecutorUtil.StopAll();

// Stop animation with callback
GraphExecutorUtil.StopByName("MyAnimation", () => {
    Debug.Log("Animation stopped!");
});
```

#### Pausing and Resuming
```csharp
// Pause animation
GraphExecutorUtil.PauseByName("MyAnimation");

// Resume animation
GraphExecutorUtil.ResumeByName("MyAnimation");

// Check if paused
bool isPaused = GraphExecutorUtil.IsPaused("MyAnimation");
```

#### Status Checking
```csharp
// Check if animation is playing
bool isPlaying = GraphExecutorUtil.IsPlaying("MyAnimation");

// Get animation progress (0.0 to 1.0)
float progress = GraphExecutorUtil.GetProgress("MyAnimation");

// Get animation duration
float duration = GraphExecutorUtil.GetDuration("MyAnimation");

// Get remaining time
float remaining = GraphExecutorUtil.GetRemainingTime("MyAnimation");
```

---

### Accessing and Modifying Nodes at Runtime

#### Finding Nodes
```csharp
// Get GraphExecutor component
GraphExecutor executor = GetComponent<GraphExecutor>();

// Get the graph asset
GraphFlowAsset graph = executor.GraphAsset;

// Find node by ID
GraphNode node = graph.GetNodeByID("node_123");

// Find node by type
AnimationNode animNode = graph.Nodes.OfType<AnimationNode>().FirstOrDefault();
```

#### Modifying Node Properties
```csharp
// Cast to specific node type
AnimationNode animNode = node as AnimationNode;

// Modify animation properties
animNode.Duration = 2.0f;
animNode.EasingCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);

// Apply changes
executor.RefreshGraph();
```

#### Runtime Node Creation
```csharp
// Create new animation node
AnimationNode newNode = ScriptableObject.CreateInstance<AnimationNode>();
newNode.InitializeDefaults();
newNode.Duration = 1.0f;

// Add to graph
graph.AddNode(newNode);

// Create connection
GraphConnection connection = ScriptableObject.CreateInstance<GraphConnection>();
connection.SourceNodeID = sourceNode.ID;
connection.TargetNodeID = newNode.ID;
graph.AddConnection(connection);
```

---

### API Reference Example

The AnimatixProAPIReference.cs file demonstrates common API usage patterns:

```csharp
public class AnimatixProAPIReference : MonoBehaviour
{
    [Header("Settings")]
    public string animationName = "MyAnimation";
    public bool showUI = true;

    void Update()
    {
        // SPACE - Start/Stop
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (GraphExecutorUtil.IsPlaying(animationName))
            {
                GraphExecutorUtil.StopByName(animationName);
            }
            else
            {
                StartAnimation();
            }
        }
        
        // P - Pause
        if (Input.GetKeyDown(KeyCode.P))
        {
            GraphExecutorUtil.PauseByName(animationName);
        }
        
        // R - Resume
        if (Input.GetKeyDown(KeyCode.R))
        {
            GraphExecutorUtil.ResumeByName(animationName);
        }
    }

    void StartAnimation()
    {
        // Trigger API call for OnApiCallTrigger
        TriggerApiCall();
        
        // Start animation
        GraphExecutorUtil.RunByName(animationName);
    }
}
```

**Key API Patterns:**
1. **Event-Driven Control** — Use triggers to start animations based on game events
2. **Status Monitoring** — Check animation status before performing actions
3. **Callback Integration** — Use callbacks for complex sequences
4. **Runtime Modification** — Modify node properties during gameplay
5. **Error Handling** — Always check for null references and valid states

![API Reference example in action](/img/screenshots/25-api-reference-example.png)