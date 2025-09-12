# GraphExecutorUtil

<<<<<<< HEAD
The `GraphExecutorUtil` class provides a static API for controlling Animatix Pro animations programmatically. This is the core interface for developers who want to trigger animations from their own scripts.
=======
The `GraphExecutorUtil` class provides static utility methods for controlling Animatix Pro animations programmatically. This is the main API for integrating Animatix Pro with your Unity scripts.
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972

## Overview

```csharp
using AnimatixPro.GraphFlow;

<<<<<<< HEAD
// Play an animation
GraphExecutorUtil.RunGraph("MyAnimation");

// Check if animation is playing
bool isPlaying = GraphExecutorUtil.IsGraphPlaying("MyAnimation");

// Stop an animation
GraphExecutorUtil.StopGraph("MyAnimation");
```

## Static Methods

### RunGraph

Starts playing an animation by its executor name.

```csharp
public static void RunGraph(string executorName)
```

**Parameters:**
- `executorName` (string): The name of the GraphExecutor to run

**Example:**
```csharp
// Start the intro animation
GraphExecutorUtil.RunGraph("IntroAnimation");

// Trigger jump animation on space key
if (Input.GetKeyDown(KeyCode.Space))
{
    GraphExecutorUtil.RunGraph("JumpAnimation");
}
```

### StopGraph

Stops a currently playing animation.

```csharp
public static void StopGraph(string executorName)
```

**Parameters:**
- `executorName` (string): The name of the GraphExecutor to stop

**Example:**
```csharp
// Stop the current animation
GraphExecutorUtil.StopGraph("IntroAnimation");
```

### ResetGraph

Resets an animation to its initial state.

```csharp
public static void ResetGraph(string executorName)
```

**Parameters:**
- `executorName` (string): The name of the GraphExecutor to reset

**Example:**
```csharp
// Reset animation to beginning
GraphExecutorUtil.ResetGraph("IntroAnimation");
```

### IsGraphPlaying

Checks if an animation is currently playing.

```csharp
public static bool IsGraphPlaying(string executorName)
```

**Parameters:**
- `executorName` (string): The name of the GraphExecutor to check

**Returns:**
- `bool`: True if the animation is playing, false otherwise

**Example:**
```csharp
if (GraphExecutorUtil.IsGraphPlaying("IntroAnimation"))
{
    Debug.Log("Animation is still playing...");
}
```

### GetAllExecutorNames

Gets all available executor names in the current scene.

```csharp
public static string[] GetAllExecutorNames()
```

**Returns:**
- `string[]`: Array of all executor names in the scene

**Example:**
```csharp
string[] allAnimations = GraphExecutorUtil.GetAllExecutorNames();
foreach (string animName in allAnimations)
{
    Debug.Log($"Available animation: {animName}");
}
```

### RunGraphAsync

Runs an animation asynchronously and returns a coroutine.

```csharp
public static Coroutine RunGraphAsync(string executorName)
```

**Parameters:**
- `executorName` (string): The name of the GraphExecutor to run

**Returns:**
- `Coroutine`: The coroutine running the animation

**Example:**
```csharp
// Start animation and wait for completion
StartCoroutine(WaitForAnimation());

IEnumerator WaitForAnimation()
{
    yield return GraphExecutorUtil.RunGraphAsync("IntroAnimation");
    Debug.Log("Animation completed!");
}
```

## Usage Examples

### Basic Animation Control

```csharp
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
using AnimatixPro.GraphFlow;
using UnityEngine;

public class AnimationController : MonoBehaviour
{
<<<<<<< HEAD
    [SerializeField] private string animationName = "MyAnimation";
    
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (GraphExecutorUtil.IsGraphPlaying(animationName))
            {
                GraphExecutorUtil.StopGraph(animationName);
            }
            else
            {
                GraphExecutorUtil.RunGraph(animationName);
            }
        }
    }
}
```

### Animation Sequence

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;

public class AnimationSequence : MonoBehaviour
{
    public string[] animationSequence = {"Intro", "Main", "Outro"};
    
    void Start()
    {
        StartCoroutine(PlaySequence());
    }
    
    IEnumerator PlaySequence()
    {
        foreach (string animName in animationSequence)
        {
            // Start animation
            GraphExecutorUtil.RunGraph(animName);
            
            // Wait for completion
            yield return new WaitUntil(() => !GraphExecutorUtil.IsGraphPlaying(animName));
            
            // Small delay between animations
            yield return new WaitForSeconds(0.5f);
        }
    }
}
```

### Event-Driven Animation

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class EventAnimationController : MonoBehaviour
{
    [Header("Animation Names")]
    public string onStartAnimation = "StartAnimation";
    public string onPlayerDeathAnimation = "DeathAnimation";
    public string onLevelCompleteAnimation = "CompleteAnimation";
    
    void Start()
    {
        // Play start animation
        GraphExecutorUtil.RunGraph(onStartAnimation);
    }
    
    public void OnPlayerDied()
    {
        GraphExecutorUtil.RunGraph(onPlayerDeathAnimation);
    }
    
    public void OnLevelComplete()
    {
        GraphExecutorUtil.RunGraph(onLevelCompleteAnimation);
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
    }
}
```

<<<<<<< HEAD
## Error Handling

The `GraphExecutorUtil` includes built-in error handling:

```csharp
// This will log a warning if the executor is not found
GraphExecutorUtil.RunGraph("NonExistentAnimation");
// Output: [AnimatixPro] No GraphExecutor found with name: NonExistentAnimation
```

## Performance Tips

1. **Cache Executor Names**: Store executor names in variables to avoid string allocation
2. **Check Before Playing**: Use `IsGraphPlaying()` to avoid starting duplicate animations
3. **Use Async Methods**: For complex sequences, use `RunGraphAsync()` with coroutines
4. **Batch Operations**: Group multiple animation calls together when possible

## Best Practices

- **Use Descriptive Names**: Choose clear, descriptive names for your executors
- **Handle Errors**: Always check if animations exist before playing them
- **Document Your Animations**: Keep a list of all animation names in your project
- **Test Thoroughly**: Verify animations work correctly in different scenarios

## Related Classes

- **[AnimatixProController](/docs/api/animatix-pro-controller)** - MonoBehaviour wrapper for easier use
- **[GraphExecutor](/docs/api/graph-executor)** - The component that runs animations
- **[GraphFlowAsset](/docs/api/graph-flow-asset)** - The asset containing your animation graphs

---

<div className="info-box">
  <h3>💡 Pro Tip</h3>
  <p>Use the `GetAllExecutorNames()` method to dynamically discover all available animations in your scene, perfect for debugging and dynamic UI generation.</p>
</div>
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
