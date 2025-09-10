# GraphExecutorUtil

The `GraphExecutorUtil` class provides static utility methods for controlling Animatix Pro animations programmatically. This is the main API for integrating Animatix Pro with your Unity scripts.

## Overview

```csharp
using AnimatixPro.GraphFlow;

public class GraphExecutorUtil
{
    // Main execution methods
    public static void RunGraph(GraphFlowAsset graphAsset);
    public static void RunGraph(string graphName);
    public static void RunGraph(GraphFlowAsset graphAsset, GameObject target);
    
    // Control methods
    public static void StopGraph(GraphFlowAsset graphAsset);
    public static void PauseGraph(GraphFlowAsset graphAsset);
    public static void ResumeGraph(GraphFlowAsset graphAsset);
    public static void ResetGraph(GraphFlowAsset graphAsset);
    
    // Query methods
    public static bool IsGraphRunning(GraphFlowAsset graphAsset);
    public static float GetGraphProgress(GraphFlowAsset graphAsset);
    public static float GetGraphDuration(GraphFlowAsset graphAsset);
    
    // Event management
    public static void SubscribeToEvents(GraphFlowAsset graphAsset, IGraphEventListener listener);
    public static void UnsubscribeFromEvents(GraphFlowAsset graphAsset, IGraphEventListener listener);
}
```

## Methods

### RunGraph

#### `RunGraph(GraphFlowAsset graphAsset)`

Starts executing a GraphFlow animation.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to execute

**Example:**
```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class AnimationController : MonoBehaviour
{
    public GraphFlowAsset buttonAnimation;
    
    void Start()
    {
        // Start the animation
        GraphExecutorUtil.RunGraph(buttonAnimation);
    }
}
```

#### `RunGraph(string graphName)`

Starts executing a GraphFlow animation by name.

**Parameters:**
- `graphName` (string): The name of the animation graph

**Example:**
```csharp
// Start animation by name
GraphExecutorUtil.RunGraph("ButtonHoverAnimation");
```

#### `RunGraph(GraphFlowAsset graphAsset, GameObject target)`

Starts executing a GraphFlow animation with a specific target object.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to execute
- `target` (GameObject): The target object for the animation

**Example:**
```csharp
public GraphFlowAsset scaleAnimation;
public GameObject targetObject;

void AnimateObject()
{
    GraphExecutorUtil.RunGraph(scaleAnimation, targetObject);
}
```

### Control Methods

#### `StopGraph(GraphFlowAsset graphAsset)`

Stops the execution of a running animation.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to stop

**Example:**
```csharp
void StopAnimation()
{
    GraphExecutorUtil.StopGraph(buttonAnimation);
}
```

#### `PauseGraph(GraphFlowAsset graphAsset)`

Pauses the execution of a running animation.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to pause

**Example:**
```csharp
void PauseAnimation()
{
    GraphExecutorUtil.PauseGraph(buttonAnimation);
}
```

#### `ResumeGraph(GraphFlowAsset graphAsset)`

Resumes a paused animation.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to resume

**Example:**
```csharp
void ResumeAnimation()
{
    GraphExecutorUtil.ResumeGraph(buttonAnimation);
}
```

#### `ResetGraph(GraphFlowAsset graphAsset)`

Resets an animation to its initial state.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to reset

**Example:**
```csharp
void ResetAnimation()
{
    GraphExecutorUtil.ResetGraph(buttonAnimation);
}
```

### Query Methods

#### `IsGraphRunning(GraphFlowAsset graphAsset)`

Checks if an animation is currently running.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to check

**Returns:**
- `bool`: True if the animation is running, false otherwise

**Example:**
```csharp
void Update()
{
    if (GraphExecutorUtil.IsGraphRunning(buttonAnimation))
    {
        Debug.Log("Animation is running!");
    }
}
```

#### `GetGraphProgress(GraphFlowAsset graphAsset)`

Gets the current progress of a running animation.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to check

**Returns:**
- `float`: Progress value between 0.0 and 1.0

**Example:**
```csharp
void Update()
{
    float progress = GraphExecutorUtil.GetGraphProgress(buttonAnimation);
    Debug.Log($"Animation progress: {progress * 100}%");
}
```

#### `GetGraphDuration(GraphFlowAsset graphAsset)`

Gets the total duration of an animation.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph to check

**Returns:**
- `float`: Total duration in seconds

**Example:**
```csharp
float duration = GraphExecutorUtil.GetGraphDuration(buttonAnimation);
Debug.Log($"Animation duration: {duration} seconds");
```

### Event Management

#### `SubscribeToEvents(GraphFlowAsset graphAsset, IGraphEventListener listener)`

Subscribes to animation events.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph
- `listener` (IGraphEventListener): The event listener

**Example:**
```csharp
public class AnimationListener : MonoBehaviour, IGraphEventListener
{
    void Start()
    {
        GraphExecutorUtil.SubscribeToEvents(buttonAnimation, this);
    }
    
    public void OnAnimationStarted(string animationName)
    {
        Debug.Log($"Animation {animationName} started!");
    }
    
    public void OnAnimationCompleted(string animationName)
    {
        Debug.Log($"Animation {animationName} completed!");
    }
}
```

#### `UnsubscribeFromEvents(GraphFlowAsset graphAsset, IGraphEventListener listener)`

Unsubscribes from animation events.

**Parameters:**
- `graphAsset` (GraphFlowAsset): The animation graph
- `listener` (IGraphEventListener): The event listener

**Example:**
```csharp
void OnDestroy()
{
    GraphExecutorUtil.UnsubscribeFromEvents(buttonAnimation, this);
}
```

## Complete Example

Here's a complete example showing how to use GraphExecutorUtil:

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class CompleteAnimationExample : MonoBehaviour, IGraphEventListener
{
    [Header("Animation Assets")]
    public GraphFlowAsset buttonHoverAnimation;
    public GraphFlowAsset buttonClickAnimation;
    public GraphFlowAsset buttonResetAnimation;
    
    [Header("Target Objects")]
    public GameObject buttonObject;
    public GameObject panelObject;
    
    void Start()
    {
        // Subscribe to events
        GraphExecutorUtil.SubscribeToEvents(buttonHoverAnimation, this);
        GraphExecutorUtil.SubscribeToEvents(buttonClickAnimation, this);
    }
    
    void Update()
    {
        // Check if animations are running
        if (GraphExecutorUtil.IsGraphRunning(buttonHoverAnimation))
        {
            float progress = GraphExecutorUtil.GetGraphProgress(buttonHoverAnimation);
            Debug.Log($"Hover animation progress: {progress * 100}%");
        }
    }
    
    public void OnButtonHover()
    {
        // Start hover animation
        GraphExecutorUtil.RunGraph(buttonHoverAnimation, buttonObject);
    }
    
    public void OnButtonClick()
    {
        // Stop hover animation and start click animation
        GraphExecutorUtil.StopGraph(buttonHoverAnimation);
        GraphExecutorUtil.RunGraph(buttonClickAnimation, buttonObject);
    }
    
    public void OnButtonRelease()
    {
        // Start reset animation
        GraphExecutorUtil.RunGraph(buttonResetAnimation, buttonObject);
    }
    
    // Event callbacks
    public void OnAnimationStarted(string animationName)
    {
        Debug.Log($"Animation started: {animationName}");
    }
    
    public void OnAnimationCompleted(string animationName)
    {
        Debug.Log($"Animation completed: {animationName}");
        
        // Chain animations
        if (animationName == "ButtonClick")
        {
            // Show panel after button click
            GraphExecutorUtil.RunGraph(buttonResetAnimation, panelObject);
        }
    }
    
    void OnDestroy()
    {
        // Clean up event subscriptions
        GraphExecutorUtil.UnsubscribeFromEvents(buttonHoverAnimation, this);
        GraphExecutorUtil.UnsubscribeFromEvents(buttonClickAnimation, this);
    }
}
```

## Best Practices

### Performance
- **Cache GraphFlowAsset references** to avoid repeated lookups
- **Use object pooling** for frequently used animations
- **Check IsGraphRunning** before starting new animations
- **Unsubscribe from events** to prevent memory leaks

### Error Handling
- **Check for null references** before calling methods
- **Validate GraphFlowAsset** before execution
- **Handle exceptions** gracefully
- **Log errors** for debugging

### Code Organization
- **Use meaningful variable names** for clarity
- **Group related animations** together
- **Implement proper cleanup** in OnDestroy
- **Document complex logic** with comments

## Related Classes

- **[AnimatixProController](animatix-pro-controller)** - Runtime controller for animations
- **[GraphFlowAsset](graph-flow-asset)** - Animation asset management
- **[Node Interfaces](node-interfaces)** - Custom node development
- **[Event System](event-system)** - Animation event handling

---

**Need more information?** Check out the [AnimatixProController](animatix-pro-controller) guide for advanced usage patterns!