# Code Examples

Real-world examples showing how to use Animatix Pro in your Unity projects.

## Basic Usage

### Simple Animation Trigger

```csharp
using UnityEngine;
using AnimatixPro.GraphFlow;

public class SimpleAnimationTrigger : MonoBehaviour
{
    void Update()
    {
        // Press Space to play animation
        if (Input.GetKeyDown(KeyCode.Space))
        {
            GraphExecutorUtil.RunGraph("JumpAnimation");
        }
        
        // Press R to reset animation
        if (Input.GetKeyDown(KeyCode.R))
        {
            GraphExecutorUtil.ResetGraph("JumpAnimation");
        }
    }
}
```

### UI Button Integration

```csharp
using UnityEngine;
using UnityEngine.UI;
using AnimatixPro.GraphFlow;

public class UIButtonController : MonoBehaviour
{
    [Header("Animation Names")]
    public string playAnimation = "PlayButtonClick";
    public string settingsAnimation = "SettingsButtonClick";
    public string quitAnimation = "QuitButtonClick";
    
    public void OnPlayButtonClicked()
    {
        GraphExecutorUtil.RunGraph(playAnimation);
    }
    
    public void OnSettingsButtonClicked()
    {
        GraphExecutorUtil.RunGraph(settingsAnimation);
    }
    
    public void OnQuitButtonClicked()
    {
        GraphExecutorUtil.RunGraph(quitAnimation);
    }
}
```

## Advanced Examples

### Animation Sequence Controller

```csharp
using UnityEngine;
using System.Collections;
using AnimatixPro.GraphFlow;

public class AnimationSequenceController : MonoBehaviour
{
    [Header("Animation Sequence")]
    public string[] animationSequence = {
        "FadeIn",
        "ScaleUp", 
        "MoveToPosition",
        "FadeOut"
    };
    
    [Header("Settings")]
    public float delayBetweenAnimations = 0.5f;
    public bool loopSequence = false;
    
    void Start()
    {
        if (loopSequence)
        {
            StartCoroutine(PlaySequenceLoop());
        }
        else
        {
            StartCoroutine(PlaySequenceOnce());
        }
    }
    
    IEnumerator PlaySequenceOnce()
    {
        foreach (string animationName in animationSequence)
        {
            yield return StartCoroutine(PlayAndWait(animationName));
            yield return new WaitForSeconds(delayBetweenAnimations);
        }
    }
    
    IEnumerator PlaySequenceLoop()
    {
        while (true)
        {
            yield return StartCoroutine(PlaySequenceOnce());
        }
    }
    
    IEnumerator PlayAndWait(string animationName)
    {
        GraphExecutorUtil.RunGraph(animationName);
        
        while (GraphExecutorUtil.IsGraphPlaying(animationName))
        {
            yield return null;
        }
    }
}
```

### Dynamic Animation Manager

```csharp
using UnityEngine;
using System.Collections.Generic;
using AnimatixPro.GraphFlow;

public class DynamicAnimationManager : MonoBehaviour
{
    [Header("Animation Settings")]
    public string[] availableAnimations;
    public float animationCooldown = 1f;
    
    private Dictionary<string, float> lastPlayedTime = new Dictionary<string, float>();
    
    void Start()
    {
        // Get all available animations
        availableAnimations = GraphExecutorUtil.GetAllExecutorNames();
        
        // Initialize last played times
        foreach (string anim in availableAnimations)
        {
            lastPlayedTime[anim] = 0f;
        }
    }
    
    public bool PlayAnimation(string animationName)
    {
        // Check if animation exists
        if (!System.Array.Exists(availableAnimations, name => name == animationName))
        {
            Debug.LogWarning($"Animation '{animationName}' not found!");
            return false;
        }
        
        // Check cooldown
        if (Time.time - lastPlayedTime[animationName] < animationCooldown)
        {
            Debug.Log($"Animation '{animationName}' is on cooldown!");
            return false;
        }
        
        // Play animation
        GraphExecutorUtil.RunGraph(animationName);
        lastPlayedTime[animationName] = Time.time;
        
        return true;
    }
    
    public void PlayRandomAnimation()
    {
        if (availableAnimations.Length > 0)
        {
            string randomAnimation = availableAnimations[Random.Range(0, availableAnimations.Length)];
            PlayAnimation(randomAnimation);
        }
    }
}
```

### Game State Animation Controller

```csharp
using UnityEngine;
using AnimatixPro.GraphFlow;

public class GameStateAnimationController : MonoBehaviour
{
    [Header("State Animations")]
    public string menuAnimation = "MenuState";
    public string gameplayAnimation = "GameplayState";
    public string pauseAnimation = "PauseState";
    public string gameOverAnimation = "GameOverState";
    
    private string currentState = "Menu";
    
    public void ChangeState(string newState)
    {
        if (currentState == newState) return;
        
        // Stop current state animation
        GraphExecutorUtil.StopGraph(GetStateAnimation(currentState));
        
        // Play new state animation
        GraphExecutorUtil.RunGraph(GetStateAnimation(newState));
        
        currentState = newState;
    }
    
    string GetStateAnimation(string state)
    {
        switch (state)
        {
            case "Menu": return menuAnimation;
            case "Gameplay": return gameplayAnimation;
            case "Pause": return pauseAnimation;
            case "GameOver": return gameOverAnimation;
            default: return "";
        }
    }
    
    // Public methods for UI buttons
    public void OnPlayButtonClicked() => ChangeState("Gameplay");
    public void OnPauseButtonClicked() => ChangeState("Pause");
    public void OnResumeButtonClicked() => ChangeState("Gameplay");
    public void OnGameOver() => ChangeState("GameOver");
    public void OnMainMenuButtonClicked() => ChangeState("Menu");
}
```

## Mobile-Specific Examples

### Touch Input Animation

```csharp
using UnityEngine;
using AnimatixPro.GraphFlow;

public class TouchInputAnimation : MonoBehaviour
{
    [Header("Touch Settings")]
    public float touchThreshold = 50f;
    public string tapAnimation = "TapEffect";
    public string swipeLeftAnimation = "SwipeLeft";
    public string swipeRightAnimation = "SwipeRight";
    
    private Vector2 touchStartPos;
    private Vector2 touchEndPos;
    
    void Update()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            
            if (touch.phase == TouchPhase.Began)
            {
                touchStartPos = touch.position;
            }
            else if (touch.phase == TouchPhase.Ended)
            {
                touchEndPos = touch.position;
                ProcessTouch();
            }
        }
    }
    
    void ProcessTouch()
    {
        float deltaX = touchEndPos.x - touchStartPos.x;
        float deltaY = touchEndPos.y - touchStartPos.y;
        
        if (Mathf.Abs(deltaX) < touchThreshold && Mathf.Abs(deltaY) < touchThreshold)
        {
            // Tap
            GraphExecutorUtil.RunGraph(tapAnimation);
        }
        else if (Mathf.Abs(deltaX) > Mathf.Abs(deltaY))
        {
            // Horizontal swipe
            if (deltaX > 0)
            {
                GraphExecutorUtil.RunGraph(swipeRightAnimation);
            }
            else
            {
                GraphExecutorUtil.RunGraph(swipeLeftAnimation);
            }
        }
    }
}
```

## Performance Examples

### Animation Pool Manager

```csharp
using UnityEngine;
using System.Collections.Generic;
using AnimatixPro.GraphFlow;

public class AnimationPoolManager : MonoBehaviour
{
    [Header("Pool Settings")]
    public int poolSize = 10;
    public string[] poolableAnimations;
    
    private Dictionary<string, Queue<string>> animationPools = new Dictionary<string, Queue<string>>();
    
    void Start()
    {
        InitializePools();
    }
    
    void InitializePools()
    {
        foreach (string animationName in poolableAnimations)
        {
            Queue<string> pool = new Queue<string>();
            
            for (int i = 0; i < poolSize; i++)
            {
                string instanceName = $"{animationName}_Instance_{i}";
                pool.Enqueue(instanceName);
            }
            
            animationPools[animationName] = pool;
        }
    }
    
    public bool PlayPooledAnimation(string animationName)
    {
        if (!animationPools.ContainsKey(animationName))
        {
            Debug.LogWarning($"Animation '{animationName}' not in pool!");
            return false;
        }
        
        Queue<string> pool = animationPools[animationName];
        
        if (pool.Count > 0)
        {
            string instanceName = pool.Dequeue();
            GraphExecutorUtil.RunGraph(instanceName);
            
            // Return to pool after animation finishes
            StartCoroutine(ReturnToPool(animationName, instanceName));
            
            return true;
        }
        
        Debug.LogWarning($"No available instances of '{animationName}'!");
        return false;
    }
    
    System.Collections.IEnumerator ReturnToPool(string animationName, string instanceName)
    {
        while (GraphExecutorUtil.IsGraphPlaying(instanceName))
        {
            yield return null;
        }
        
        animationPools[animationName].Enqueue(instanceName);
    }
}
```

## Integration Examples

### Audio-Visual Sync

```csharp
using UnityEngine;
using AnimatixPro.GraphFlow;

public class AudioVisualSync : MonoBehaviour
{
    [Header("Audio Settings")]
    public AudioSource audioSource;
    public AudioClip[] audioClips;
    
    [Header("Animation Settings")]
    public string[] syncAnimations;
    
    private int currentIndex = 0;
    
    void Start()
    {
        if (audioClips.Length != syncAnimations.Length)
        {
            Debug.LogError("Audio clips and animations must have the same length!");
            return;
        }
        
        PlayNext();
    }
    
    void PlayNext()
    {
        if (currentIndex >= audioClips.Length)
        {
            currentIndex = 0; // Loop
        }
        
        // Play audio
        audioSource.clip = audioClips[currentIndex];
        audioSource.Play();
        
        // Play synchronized animation
        GraphExecutorUtil.RunGraph(syncAnimations[currentIndex]);
        
        // Schedule next
        Invoke(nameof(PlayNext), audioClips[currentIndex].length);
        
        currentIndex++;
    }
}
```

### Event-Driven Animation System

```csharp
using UnityEngine;
using System.Collections.Generic;
using AnimatixPro.GraphFlow;

public class EventDrivenAnimationSystem : MonoBehaviour
{
    [System.Serializable]
    public class AnimationEvent
    {
        public string eventName;
        public string animationName;
        public float delay = 0f;
    }
    
    [Header("Animation Events")]
    public AnimationEvent[] animationEvents;
    
    private Dictionary<string, AnimationEvent> eventMap = new Dictionary<string, AnimationEvent>();
    
    void Start()
    {
        // Build event map
        foreach (var animEvent in animationEvents)
        {
            eventMap[animEvent.eventName] = animEvent;
        }
    }
    
    public void TriggerAnimationEvent(string eventName)
    {
        if (eventMap.ContainsKey(eventName))
        {
            var animEvent = eventMap[eventName];
            
            if (animEvent.delay > 0)
            {
                Invoke(nameof(PlayDelayedAnimation), animEvent.delay);
            }
            else
            {
                GraphExecutorUtil.RunGraph(animEvent.animationName);
            }
        }
        else
        {
            Debug.LogWarning($"Animation event '{eventName}' not found!");
        }
    }
    
    void PlayDelayedAnimation()
    {
        // This would need to be modified to handle multiple delayed animations
        // For simplicity, playing the first delayed animation
        foreach (var animEvent in animationEvents)
        {
            if (animEvent.delay > 0)
            {
                GraphExecutorUtil.RunGraph(animEvent.animationName);
                break;
            }
        }
    }
}
```

## Best Practices

### 1. **Use Meaningful Names**
```csharp
// Good
GraphExecutorUtil.RunGraph("MainMenuFadeIn");

// Bad
GraphExecutorUtil.RunGraph("Graph1");
```

### 2. **Check Animation Existence**
```csharp
string[] availableAnimations = GraphExecutorUtil.GetAllExecutorNames();
if (System.Array.Exists(availableAnimations, name => name == "MyAnimation"))
{
    GraphExecutorUtil.RunGraph("MyAnimation");
}
```

### 3. **Handle Errors Gracefully**
```csharp
try
{
    GraphExecutorUtil.RunGraph("MyAnimation");
}
catch (System.Exception e)
{
    Debug.LogError($"Failed to play animation: {e.Message}");
}
```

### 4. **Use Coroutines for Sequences**
```csharp
IEnumerator PlayAnimationSequence()
{
    GraphExecutorUtil.RunGraph("Animation1");
    while (GraphExecutorUtil.IsGraphPlaying("Animation1"))
        yield return null;
        
    GraphExecutorUtil.RunGraph("Animation2");
}
```

## Need More Examples?

- **API Reference**: [GraphExecutorUtil](/docs/api/graph-executor-util)
- **Core Concepts**: [GraphFlow System](/docs/core-concepts/graphflow-system)
- **Getting Started**: [Quick Start Guide](/docs/getting-started/quick-start)
