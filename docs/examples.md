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
        }
    }
}
```

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
    }
}
```

## Advanced Examples

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
            }
        }
    }
}
```

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
                break;
            }
        }
    }
}
```

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
