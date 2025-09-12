<<<<<<< HEAD
# Examples

Explore real-world examples of Animatix Pro in action. These examples demonstrate various use cases and techniques you can apply to your own projects.

## UI Animations

### Button Click Animation

A simple button scale animation that triggers on click.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class ButtonAnimationExample : MonoBehaviour
{
    [SerializeField] private Button targetButton;
    [SerializeField] private string animationName = "ButtonClick";
    
    void Start()
    {
        if (targetButton != null)
        {
            targetButton.onClick.AddListener(OnButtonClick);
        }
    }
    
    void OnButtonClick()
    {
        GraphExecutorUtil.RunGraph(animationName);
    }
}
```

**GraphFlow Setup:**
1. Create a trigger node: `On Button Click`
2. Create an animation node: `UI Animation > Scale`
3. Connect trigger to animation
4. Set target to your button

### Menu Slide Animation

Animate a menu sliding in from the side.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class MenuController : MonoBehaviour
{
    [SerializeField] private string slideInAnimation = "MenuSlideIn";
    [SerializeField] private string slideOutAnimation = "MenuSlideOut";
    [SerializeField] private bool isMenuOpen = false;
    
    public void ToggleMenu()
    {
        if (isMenuOpen)
        {
            GraphExecutorUtil.RunGraph(slideOutAnimation);
        }
        else
        {
            GraphExecutorUtil.RunGraph(slideInAnimation);
        }
        isMenuOpen = !isMenuOpen;
    }
}
```

### Loading Screen Animation

Create a smooth loading screen with progress animation.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class LoadingScreen : MonoBehaviour
{
    [SerializeField] private string fadeInAnimation = "LoadingFadeIn";
    [SerializeField] private string fadeOutAnimation = "LoadingFadeOut";
    [SerializeField] private string progressAnimation = "LoadingProgress";
    [SerializeField] private Slider progressBar;
    
    public void ShowLoading()
    {
        GraphExecutorUtil.RunGraph(fadeInAnimation);
        StartCoroutine(UpdateProgress());
    }
    
    IEnumerator UpdateProgress()
    {
        float progress = 0f;
        while (progress < 1f)
        {
            progress += Time.deltaTime * 0.5f; // 2 seconds total
            progressBar.value = progress;
            yield return null;
        }
        
        GraphExecutorUtil.RunGraph(progressAnimation);
        yield return new WaitForSeconds(1f);
        GraphExecutorUtil.RunGraph(fadeOutAnimation);
    }
}
```

## Camera Animations

### Smooth Camera Follow

Create a smooth camera that follows a target with easing.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform target;
    [SerializeField] private string followAnimation = "CameraFollow";
    [SerializeField] private float followDistance = 10f;
    
    void Update()
    {
        if (target != null)
        {
            float distance = Vector3.Distance(transform.position, target.position);
            if (distance > followDistance)
            {
                GraphExecutorUtil.RunGraph(followAnimation);
            }
        }
    }
}
```

### Cinematic Camera Sequence

Create a cinematic sequence with multiple camera movements.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;

public class CinematicSequence : MonoBehaviour
{
    [SerializeField] private string[] cameraAnimations = {
        "CameraIntro",
        "CameraPanLeft",
        "CameraZoomIn",
        "CameraOutro"
    };
    
    void Start()
    {
        StartCoroutine(PlayCinematicSequence());
    }
    
    IEnumerator PlayCinematicSequence()
    {
        foreach (string animName in cameraAnimations)
        {
            GraphExecutorUtil.RunGraph(animName);
            
            // Wait for animation to complete
            yield return new WaitUntil(() => !GraphExecutorUtil.IsGraphPlaying(animName));
            
            // Pause between animations
            yield return new WaitForSeconds(0.5f);
        }
    }
}
```

## Game State Animations

### Level Complete Sequence

Animate UI elements when a level is completed.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class LevelComplete : MonoBehaviour
{
    [SerializeField] private string levelCompleteAnimation = "LevelComplete";
    [SerializeField] private string scoreAnimation = "ScoreCountUp";
    [SerializeField] private string starAnimation = "StarAppear";
    
    public void OnLevelComplete(int score, int stars)
    {
        // Play level complete animation
        GraphExecutorUtil.RunGraph(levelCompleteAnimation);
        
        // Animate score counting up
        StartCoroutine(AnimateScore(score));
        
        // Animate stars appearing
        StartCoroutine(AnimateStars(stars));
    }
    
    IEnumerator AnimateScore(int finalScore)
    {
        yield return new WaitForSeconds(1f);
        GraphExecutorUtil.RunGraph(scoreAnimation);
        // Score counting logic would go here
    }
    
    IEnumerator AnimateStars(int starCount)
    {
        yield return new WaitForSeconds(2f);
        for (int i = 0; i < starCount; i++)
        {
            GraphExecutorUtil.RunGraph(starAnimation);
            yield return new WaitForSeconds(0.3f);
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
        }
    }
}
```

<<<<<<< HEAD
### Player Death Animation

Create a dramatic death sequence.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class PlayerDeath : MonoBehaviour
{
    [SerializeField] private string deathAnimation = "PlayerDeath";
    [SerializeField] private string screenShakeAnimation = "DeathScreenShake";
    [SerializeField] private string fadeToBlackAnimation = "FadeToBlack";
    
    public void OnPlayerDeath()
    {
        // Play death animation
        GraphExecutorUtil.RunGraph(deathAnimation);
        
        // Add screen shake
        GraphExecutorUtil.RunGraph(screenShakeAnimation);
        
        // Fade to black after delay
        StartCoroutine(FadeToBlack());
    }
    
    IEnumerator FadeToBlack()
    {
        yield return new WaitForSeconds(2f);
        GraphExecutorUtil.RunGraph(fadeToBlackAnimation);
    }
}
```

## Interactive Animations

### Hover Effects

Create interactive hover effects for UI elements.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.EventSystems;

public class HoverEffect : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    [SerializeField] private string hoverInAnimation = "HoverIn";
    [SerializeField] private string hoverOutAnimation = "HoverOut";
    
    public void OnPointerEnter(PointerEventData eventData)
    {
        GraphExecutorUtil.RunGraph(hoverInAnimation);
    }
    
    public void OnPointerExit(PointerEventData eventData)
    {
        GraphExecutorUtil.RunGraph(hoverOutAnimation);
    }
}
```

### Drag and Drop Animation

Animate objects during drag and drop operations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.EventSystems;

public class DraggableItem : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] private string dragStartAnimation = "DragStart";
    [SerializeField] private string dragEndAnimation = "DragEnd";
    [SerializeField] private string dropAnimation = "DropItem";
    
    public void OnBeginDrag(PointerEventData eventData)
    {
        GraphExecutorUtil.RunGraph(dragStartAnimation);
    }
    
    public void OnDrag(PointerEventData eventData)
    {
        // Drag logic here
        transform.position = eventData.position;
    }
    
    public void OnEndDrag(PointerEventData eventData)
    {
        if (IsValidDropZone(eventData.position))
        {
            GraphExecutorUtil.RunGraph(dropAnimation);
        }
        else
        {
            GraphExecutorUtil.RunGraph(dragEndAnimation);
        }
    }
    
    private bool IsValidDropZone(Vector2 position)
    {
        // Check if position is over a valid drop zone
        return true; // Simplified for example
    }
}
```

## Performance Examples

### Animation Pooling

Efficiently manage multiple similar animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

public class AnimationPool : MonoBehaviour
{
    [SerializeField] private string baseAnimationName = "Effect";
    [SerializeField] private int poolSize = 10;
    
    private Queue<string> availableAnimations = new Queue<string>();
    private HashSet<string> activeAnimations = new HashSet<string>();
    
    void Start()
    {
        // Pre-generate animation names
        for (int i = 0; i < poolSize; i++)
        {
            availableAnimations.Enqueue($"{baseAnimationName}_{i}");
        }
    }
    
    public void PlayEffect()
    {
        if (availableAnimations.Count > 0)
        {
            string animName = availableAnimations.Dequeue();
            activeAnimations.Add(animName);
            
            GraphExecutorUtil.RunGraph(animName);
            
            // Return to pool after animation completes
            StartCoroutine(ReturnToPool(animName));
        }
    }
    
    IEnumerator ReturnToPool(string animName)
    {
        yield return new WaitUntil(() => !GraphExecutorUtil.IsGraphPlaying(animName));
        
        activeAnimations.Remove(animName);
        availableAnimations.Enqueue(animName);
    }
}
```

### Conditional Animation

Only play animations when certain conditions are met.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class ConditionalAnimation : MonoBehaviour
{
    [SerializeField] private string animationName = "SpecialEffect";
    [SerializeField] private int requiredScore = 1000;
    [SerializeField] private bool hasPlayed = false;
    
    public void OnScoreUpdate(int newScore)
    {
        if (newScore >= requiredScore && !hasPlayed)
        {
            GraphExecutorUtil.RunGraph(animationName);
            hasPlayed = true;
        }
    }
    
    public void Reset()
    {
        hasPlayed = false;
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
    }
}
```

## Advanced Examples

<<<<<<< HEAD
### Animation Chaining

Chain multiple animations together for complex sequences.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;

public class AnimationChain : MonoBehaviour
{
    [System.Serializable]
    public class AnimationStep
    {
        public string animationName;
        public float delay;
        public bool waitForCompletion;
    }
    
    [SerializeField] private AnimationStep[] animationSteps;
    
    public void StartAnimationChain()
    {
        StartCoroutine(PlayAnimationChain());
    }
    
    IEnumerator PlayAnimationChain()
    {
        foreach (var step in animationSteps)
        {
            // Wait for delay
            if (step.delay > 0)
            {
                yield return new WaitForSeconds(step.delay);
            }
            
            // Start animation
            GraphExecutorUtil.RunGraph(step.animationName);
            
            // Wait for completion if required
            if (step.waitForCompletion)
            {
                yield return new WaitUntil(() => !GraphExecutorUtil.IsGraphPlaying(step.animationName));
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
            }
        }
    }
}
```

<<<<<<< HEAD
### Dynamic Animation Selection

Choose animations based on runtime conditions.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class DynamicAnimation : MonoBehaviour
{
    [SerializeField] private string[] animationNames = {
        "Animation1", "Animation2", "Animation3"
    };
    
    [SerializeField] private AnimationCondition[] conditions;
    
    [System.Serializable]
    public class AnimationCondition
    {
        public string animationName;
        public int minValue;
        public int maxValue;
    }
    
    public void PlayAnimationForValue(int value)
    {
        foreach (var condition in conditions)
        {
            if (value >= condition.minValue && value <= condition.maxValue)
            {
                GraphExecutorUtil.RunGraph(condition.animationName);
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
                break;
            }
        }
    }
}
```

<<<<<<< HEAD
---

<div className="info-box">
  <h3>💡 Pro Tips</h3>
  <ul>
    <li>Use descriptive names for your animations to make them easier to manage</li>
    <li>Test animations on different devices to ensure consistent performance</li>
    <li>Consider using animation pooling for frequently used effects</li>
    <li>Chain animations together for complex sequences</li>
    <li>Always provide fallbacks for when animations fail to play</li>
  </ul>
</div>
=======
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
>>>>>>> 305028138015dfcc6aee6d67aa27995df9812972
