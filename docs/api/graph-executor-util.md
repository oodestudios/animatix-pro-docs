# GraphExecutorUtil

The `GraphExecutorUtil` class provides a static API for controlling Animatix Pro animations programmatically. This is the core interface for developers who want to trigger animations from their own scripts.

## Overview

```csharp
using AnimatixPro.GraphFlow;

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
using AnimatixPro.GraphFlow;
using UnityEngine;

public class AnimationController : MonoBehaviour
{
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
    }
}
```

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
