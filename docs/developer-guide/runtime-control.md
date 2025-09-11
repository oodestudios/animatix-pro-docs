# Runtime Control

Master the art of controlling animations at runtime to create dynamic, responsive experiences. This comprehensive guide covers all aspects of runtime animation control in Animatix Pro.

## 🎮 Runtime Control Fundamentals

Runtime control allows you to:
- **Dynamic Animation Control** - Start, stop, pause, and modify animations at runtime
- **Real-time Parameter Adjustment** - Change animation parameters during execution
- **Interactive Animation Systems** - Create user-controlled animation experiences
- **Performance Optimization** - Control animation performance based on system capabilities

### Control Types
- **Playback Control** - Start, stop, pause, resume animations
- **Parameter Control** - Modify animation parameters at runtime
- **State Control** - Manage animation states and transitions
- **Performance Control** - Optimize animation performance dynamically

## ▶️ Playback Control

### Basic Playback Control
Control animation playback at runtime.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class AnimationController : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset animationAsset;
    [SerializeField] private GraphExecutor graphExecutor;
    
    private void Start()
    {
        if (graphExecutor == null)
        {
            graphExecutor = GetComponent<GraphExecutor>();
        }
        
        if (graphExecutor != null && animationAsset != null)
        {
            graphExecutor.SetGraphFlowAsset(animationAsset);
        }
    }
    
    public void PlayAnimation()
    {
        if (graphExecutor != null)
        {
            graphExecutor.Play();
        }
    }
    
    public void StopAnimation()
    {
        if (graphExecutor != null)
        {
            graphExecutor.Stop();
        }
    }
    
    public void PauseAnimation()
    {
        if (graphExecutor != null)
        {
            graphExecutor.Pause();
        }
    }
    
    public void ResumeAnimation()
    {
        if (graphExecutor != null)
        {
            graphExecutor.Resume();
        }
    }
    
    public void RestartAnimation()
    {
        if (graphExecutor != null)
        {
            graphExecutor.Restart();
        }
    }
}
```

### Advanced Playback Control
More sophisticated playback control with callbacks.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System;

public class AdvancedAnimationController : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset animationAsset;
    [SerializeField] private GraphExecutor graphExecutor;
    
    public event Action OnAnimationStarted;
    public event Action OnAnimationCompleted;
    public event Action OnAnimationPaused;
    public event Action OnAnimationStopped;
    
    private void Start()
    {
        if (graphExecutor == null)
        {
            graphExecutor = GetComponent<GraphExecutor>();
        }
        
        if (graphExecutor != null && animationAsset != null)
        {
            graphExecutor.SetGraphFlowAsset(animationAsset);
            SubscribeToEvents();
        }
    }
    
    private void SubscribeToEvents()
    {
        graphExecutor.OnAnimationStarted += () => OnAnimationStarted?.Invoke();
        graphExecutor.OnAnimationCompleted += () => OnAnimationCompleted?.Invoke();
        graphExecutor.OnAnimationPaused += () => OnAnimationPaused?.Invoke();
        graphExecutor.OnAnimationStopped += () => OnAnimationStopped?.Invoke();
    }
    
    public void PlayAnimationWithCallback(Action onComplete = null)
    {
        if (onComplete != null)
        {
            OnAnimationCompleted += onComplete;
        }
        
        PlayAnimation();
    }
    
    public void PlayAnimationSequence(GraphFlowAsset[] animations, int currentIndex = 0)
    {
        if (currentIndex >= animations.Length)
            return;
        
        graphExecutor.SetGraphFlowAsset(animations[currentIndex]);
        PlayAnimationWithCallback(() => 
        {
            PlayAnimationSequence(animations, currentIndex + 1);
        });
    }
    
    public bool IsAnimationPlaying()
    {
        return graphExecutor != null && graphExecutor.IsPlaying();
    }
    
    public bool IsAnimationPaused()
    {
        return graphExecutor != null && graphExecutor.IsPaused();
    }
    
    public float GetAnimationProgress()
    {
        return graphExecutor != null ? graphExecutor.GetProgress() : 0f;
    }
}
```

## 🎛️ Parameter Control

### Runtime Parameter Modification
Modify animation parameters at runtime.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class ParameterController : MonoBehaviour
{
    [SerializeField] private GraphExecutor graphExecutor;
    [SerializeField] private string parameterName;
    [SerializeField] private float parameterValue;
    
    public void SetParameter(string name, float value)
    {
        if (graphExecutor != null)
        {
            graphExecutor.SetParameter(name, value);
        }
    }
    
    public void SetParameter(string name, bool value)
    {
        if (graphExecutor != null)
        {
            graphExecutor.SetParameter(name, value);
        }
    }
    
    public void SetParameter(string name, string value)
    {
        if (graphExecutor != null)
        {
            graphExecutor.SetParameter(name, value);
        }
    }
    
    public void SetParameter(string name, Vector3 value)
    {
        if (graphExecutor != null)
        {
            graphExecutor.SetParameter(name, value);
        }
    }
    
    public T GetParameter<T>(string name)
    {
        if (graphExecutor != null)
        {
            return graphExecutor.GetParameter<T>(name);
        }
        return default(T);
    }
    
    public void UpdateParameter()
    {
        SetParameter(parameterName, parameterValue);
    }
}
```

### Dynamic Parameter Animation
Animate parameters over time.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;

public class DynamicParameterController : MonoBehaviour
{
    [SerializeField] private GraphExecutor graphExecutor;
    [SerializeField] private string parameterName;
    [SerializeField] private float startValue = 0f;
    [SerializeField] private float endValue = 1f;
    [SerializeField] private float duration = 1f;
    [SerializeField] private AnimationCurve curve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    
    public void AnimateParameter()
    {
        StartCoroutine(AnimateParameterCoroutine());
    }
    
    private IEnumerator AnimateParameterCoroutine()
    {
        float elapsed = 0f;
        
        while (elapsed < duration)
        {
            float progress = elapsed / duration;
            float curveValue = curve.Evaluate(progress);
            float currentValue = Mathf.Lerp(startValue, endValue, curveValue);
            
            SetParameter(parameterName, currentValue);
            
            elapsed += Time.deltaTime;
            yield return null;
        }
        
        SetParameter(parameterName, endValue);
    }
    
    private void SetParameter(string name, float value)
    {
        if (graphExecutor != null)
        {
            graphExecutor.SetParameter(name, value);
        }
    }
}
```

## 🎭 State Control

### Animation State Management
Manage animation states at runtime.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

public class AnimationStateManager : MonoBehaviour
{
    [SerializeField] private GraphExecutor graphExecutor;
    [SerializeField] private List<AnimationState> states = new List<AnimationState>();
    
    [System.Serializable]
    public class AnimationState
    {
        public string stateName;
        public GraphFlowAsset animationAsset;
        public bool loop = false;
        public float transitionDuration = 0.5f;
    }
    
    private string currentState = "";
    private bool isTransitioning = false;
    
    public void ChangeState(string stateName)
    {
        if (isTransitioning || currentState == stateName)
            return;
        
        AnimationState targetState = states.Find(s => s.stateName == stateName);
        if (targetState == null)
            return;
        
        StartCoroutine(TransitionToState(targetState));
    }
    
    private IEnumerator TransitionToState(AnimationState targetState)
    {
        isTransitioning = true;
        
        // Fade out current animation
        if (graphExecutor.IsPlaying())
        {
            yield return StartCoroutine(FadeOutAnimation());
        }
        
        // Change animation asset
        graphExecutor.SetGraphFlowAsset(targetState.animationAsset);
        
        // Fade in new animation
        yield return StartCoroutine(FadeInAnimation());
        
        // Start new animation
        graphExecutor.Play();
        
        currentState = targetState.stateName;
        isTransitioning = false;
    }
    
    private IEnumerator FadeOutAnimation()
    {
        // Implement fade out logic
        yield return new WaitForSeconds(0.5f);
    }
    
    private IEnumerator FadeInAnimation()
    {
        // Implement fade in logic
        yield return new WaitForSeconds(0.5f);
    }
    
    public string GetCurrentState()
    {
        return currentState;
    }
    
    public bool IsTransitioning()
    {
        return isTransitioning;
    }
}
```

### Animation Queue System
Queue multiple animations for sequential playback.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class AnimationQueue : MonoBehaviour
{
    [SerializeField] private GraphExecutor graphExecutor;
    
    private Queue<QueuedAnimation> animationQueue = new Queue<QueuedAnimation>();
    private bool isProcessing = false;
    
    [System.Serializable]
    public class QueuedAnimation
    {
        public GraphFlowAsset animationAsset;
        public float delay = 0f;
        public bool loop = false;
        public System.Action onComplete;
    }
    
    public void QueueAnimation(GraphFlowAsset animationAsset, float delay = 0f, bool loop = false, System.Action onComplete = null)
    {
        QueuedAnimation queuedAnimation = new QueuedAnimation
        {
            animationAsset = animationAsset,
            delay = delay,
            loop = loop,
            onComplete = onComplete
        };
        
        animationQueue.Enqueue(queuedAnimation);
        
        if (!isProcessing)
        {
            StartCoroutine(ProcessQueue());
        }
    }
    
    private IEnumerator ProcessQueue()
    {
        isProcessing = true;
        
        while (animationQueue.Count > 0)
        {
            QueuedAnimation queuedAnimation = animationQueue.Dequeue();
            
            // Wait for delay
            if (queuedAnimation.delay > 0f)
            {
                yield return new WaitForSeconds(queuedAnimation.delay);
            }
            
            // Set and play animation
            graphExecutor.SetGraphFlowAsset(queuedAnimation.animationAsset);
            graphExecutor.Play();
            
            // Wait for animation to complete
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
            
            // Call completion callback
            queuedAnimation.onComplete?.Invoke();
        }
        
        isProcessing = false;
    }
    
    public void ClearQueue()
    {
        animationQueue.Clear();
        if (isProcessing)
        {
            StopAllCoroutines();
            isProcessing = false;
        }
    }
    
    public int GetQueueCount()
    {
        return animationQueue.Count;
    }
}
```

## ⚡ Performance Control

### Dynamic Performance Adjustment
Adjust animation performance based on system capabilities.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class PerformanceController : MonoBehaviour
{
    [SerializeField] private GraphExecutor graphExecutor;
    [SerializeField] private PerformanceLevel currentLevel = PerformanceLevel.High;
    
    public enum PerformanceLevel
    {
        Low,
        Medium,
        High,
        Ultra
    }
    
    [System.Serializable]
    public class PerformanceSettings
    {
        public float animationSpeed = 1f;
        public int maxConcurrentAnimations = 10;
        public bool enableParticleEffects = true;
        public bool enableComplexEasing = true;
        public float updateFrequency = 60f;
    }
    
    [SerializeField] private PerformanceSettings lowSettings = new PerformanceSettings
    {
        animationSpeed = 0.8f,
        maxConcurrentAnimations = 5,
        enableParticleEffects = false,
        enableComplexEasing = false,
        updateFrequency = 30f
    };
    
    [SerializeField] private PerformanceSettings mediumSettings = new PerformanceSettings
    {
        animationSpeed = 0.9f,
        maxConcurrentAnimations = 8,
        enableParticleEffects = true,
        enableComplexEasing = false,
        updateFrequency = 45f
    };
    
    [SerializeField] private PerformanceSettings highSettings = new PerformanceSettings
    {
        animationSpeed = 1f,
        maxConcurrentAnimations = 10,
        enableParticleEffects = true,
        enableComplexEasing = true,
        updateFrequency = 60f
    };
    
    [SerializeField] private PerformanceSettings ultraSettings = new PerformanceSettings
    {
        animationSpeed = 1.1f,
        maxConcurrentAnimations = 15,
        enableParticleEffects = true,
        enableComplexEasing = true,
        updateFrequency = 120f
    };
    
    private void Start()
    {
        DetectPerformanceLevel();
        ApplyPerformanceSettings();
    }
    
    private void DetectPerformanceLevel()
    {
        // Simple performance detection based on device capabilities
        if (SystemInfo.processorCount >= 8 && SystemInfo.systemMemorySize >= 8192)
        {
            currentLevel = PerformanceLevel.Ultra;
        }
        else if (SystemInfo.processorCount >= 4 && SystemInfo.systemMemorySize >= 4096)
        {
            currentLevel = PerformanceLevel.High;
        }
        else if (SystemInfo.processorCount >= 2 && SystemInfo.systemMemorySize >= 2048)
        {
            currentLevel = PerformanceLevel.Medium;
        }
        else
        {
            currentLevel = PerformanceLevel.Low;
        }
    }
    
    private void ApplyPerformanceSettings()
    {
        PerformanceSettings settings = GetPerformanceSettings(currentLevel);
        
        // Apply settings to graph executor
        if (graphExecutor != null)
        {
            graphExecutor.SetAnimationSpeed(settings.animationSpeed);
            graphExecutor.SetMaxConcurrentAnimations(settings.maxConcurrentAnimations);
            graphExecutor.SetUpdateFrequency(settings.updateFrequency);
        }
        
        // Apply global settings
        Application.targetFrameRate = Mathf.RoundToInt(settings.updateFrequency);
    }
    
    private PerformanceSettings GetPerformanceSettings(PerformanceLevel level)
    {
        switch (level)
        {
            case PerformanceLevel.Low:
                return lowSettings;
            case PerformanceLevel.Medium:
                return mediumSettings;
            case PerformanceLevel.High:
                return highSettings;
            case PerformanceLevel.Ultra:
                return ultraSettings;
            default:
                return highSettings;
        }
    }
    
    public void SetPerformanceLevel(PerformanceLevel level)
    {
        currentLevel = level;
        ApplyPerformanceSettings();
    }
    
    public PerformanceLevel GetCurrentPerformanceLevel()
    {
        return currentLevel;
    }
}
```

### Memory Management
Manage animation memory usage at runtime.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

public class AnimationMemoryManager : MonoBehaviour
{
    [SerializeField] private int maxMemoryUsage = 100; // MB
    [SerializeField] private float cleanupInterval = 30f; // seconds
    
    private List<GraphExecutor> activeExecutors = new List<GraphExecutor>();
    private float lastCleanupTime = 0f;
    
    private void Update()
    {
        if (Time.time - lastCleanupTime >= cleanupInterval)
        {
            CleanupUnusedAnimations();
            lastCleanupTime = Time.time;
        }
    }
    
    public void RegisterExecutor(GraphExecutor executor)
    {
        if (!activeExecutors.Contains(executor))
        {
            activeExecutors.Add(executor);
        }
    }
    
    public void UnregisterExecutor(GraphExecutor executor)
    {
        activeExecutors.Remove(executor);
    }
    
    private void CleanupUnusedAnimations()
    {
        // Remove inactive executors
        activeExecutors.RemoveAll(executor => executor == null || !executor.gameObject.activeInHierarchy);
        
        // Check memory usage
        if (GetCurrentMemoryUsage() > maxMemoryUsage)
        {
            // Clean up least recently used animations
            CleanupLeastRecentlyUsed();
        }
    }
    
    private float GetCurrentMemoryUsage()
    {
        // Simple memory usage estimation
        return activeExecutors.Count * 10f; // 10MB per executor (rough estimate)
    }
    
    private void CleanupLeastRecentlyUsed()
    {
        // Sort by last access time and remove oldest
        activeExecutors.Sort((a, b) => a.GetLastAccessTime().CompareTo(b.GetLastAccessTime()));
        
        int toRemove = Mathf.CeilToInt(activeExecutors.Count * 0.2f); // Remove 20%
        for (int i = 0; i < toRemove && i < activeExecutors.Count; i++)
        {
            if (activeExecutors[i] != null)
            {
                activeExecutors[i].Stop();
                activeExecutors[i].ClearCache();
            }
        }
    }
}
```

## 🎨 Advanced Runtime Techniques

### Animation Blending
Blend between multiple animations at runtime.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class AnimationBlender : MonoBehaviour
{
    [SerializeField] private GraphExecutor[] executors;
    [SerializeField] private float[] blendWeights;
    [SerializeField] private float blendDuration = 1f;
    
    private bool isBlending = false;
    private float blendProgress = 0f;
    
    public void BlendAnimations(float[] targetWeights)
    {
        if (isBlending || targetWeights.Length != blendWeights.Length)
            return;
        
        StartCoroutine(BlendCoroutine(targetWeights));
    }
    
    private System.Collections.IEnumerator BlendCoroutine(float[] targetWeights)
    {
        isBlending = true;
        blendProgress = 0f;
        
        float[] startWeights = new float[blendWeights.Length];
        System.Array.Copy(blendWeights, startWeights, blendWeights.Length);
        
        while (blendProgress < 1f)
        {
            blendProgress += Time.deltaTime / blendDuration;
            
            for (int i = 0; i < blendWeights.Length; i++)
            {
                blendWeights[i] = Mathf.Lerp(startWeights[i], targetWeights[i], blendProgress);
                executors[i].SetBlendWeight(blendWeights[i]);
            }
            
            yield return null;
        }
        
        // Ensure final weights are set
        for (int i = 0; i < blendWeights.Length; i++)
        {
            blendWeights[i] = targetWeights[i];
            executors[i].SetBlendWeight(blendWeights[i]);
        }
        
        isBlending = false;
    }
    
    public bool IsBlending()
    {
        return isBlending;
    }
}
```

### Animation Synchronization
Synchronize multiple animations at runtime.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

public class AnimationSynchronizer : MonoBehaviour
{
    [SerializeField] private List<GraphExecutor> executors = new List<GraphExecutor>();
    [SerializeField] private bool syncPlayback = true;
    [SerializeField] private bool syncSpeed = true;
    [SerializeField] private bool syncProgress = true;
    
    private float masterSpeed = 1f;
    private float masterProgress = 0f;
    private bool masterPlaying = false;
    
    public void RegisterExecutor(GraphExecutor executor)
    {
        if (!executors.Contains(executor))
        {
            executors.Add(executor);
        }
    }
    
    public void UnregisterExecutor(GraphExecutor executor)
    {
        executors.Remove(executor);
    }
    
    public void PlayAll()
    {
        masterPlaying = true;
        foreach (var executor in executors)
        {
            if (executor != null)
            {
                executor.Play();
            }
        }
    }
    
    public void PauseAll()
    {
        masterPlaying = false;
        foreach (var executor in executors)
        {
            if (executor != null)
            {
                executor.Pause();
            }
        }
    }
    
    public void StopAll()
    {
        masterPlaying = false;
        foreach (var executor in executors)
        {
            if (executor != null)
            {
                executor.Stop();
            }
        }
    }
    
    public void SetSpeedAll(float speed)
    {
        masterSpeed = speed;
        if (syncSpeed)
        {
            foreach (var executor in executors)
            {
                if (executor != null)
                {
                    executor.SetSpeed(speed);
                }
            }
        }
    }
    
    public void SetProgressAll(float progress)
    {
        masterProgress = progress;
        if (syncProgress)
        {
            foreach (var executor in executors)
            {
                if (executor != null)
                {
                    executor.SetProgress(progress);
                }
            }
        }
    }
}
```

## 🚀 Performance Optimization

### Runtime Control Best Practices

#### Efficient Control
- **Minimize runtime changes** to reduce overhead
- **Use parameter caching** for frequently accessed values
- **Batch parameter updates** when possible
- **Profile runtime performance** regularly

#### Memory Management
- **Clean up unused animations** automatically
- **Use object pooling** for frequently created animations
- **Limit concurrent animations** based on system capabilities
- **Monitor memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler controls, lower update frequency
- **Desktop**: More complex controls, higher update frequency
- **Console**: Optimize for specific hardware
- **VR**: Consider frame rate requirements

## 🔧 Testing Runtime Control

### Unit Testing
Test your runtime control systems thoroughly.

```csharp
using NUnit.Framework;
using UnityEngine;
using AnimatixPro.GraphFlow;

[TestFixture]
public class RuntimeControlTests
{
    [Test]
    public void TestAnimationController()
    {
        // Arrange
        var controller = new GameObject().AddComponent<AnimationController>();
        var executor = controller.gameObject.AddComponent<GraphExecutor>();
        controller.graphExecutor = executor;
        
        // Act
        controller.PlayAnimation();
        
        // Assert
        Assert.IsTrue(executor.IsPlaying());
    }
    
    [Test]
    public void TestParameterController()
    {
        // Arrange
        var controller = new GameObject().AddComponent<ParameterController>();
        var executor = controller.gameObject.AddComponent<GraphExecutor>();
        controller.graphExecutor = executor;
        
        // Act
        controller.SetParameter("testParam", 1.5f);
        
        // Assert
        Assert.AreEqual(1.5f, controller.GetParameter<float>("testParam"));
    }
}
```

### Integration Testing
Test how your runtime controls work with the GraphFlow system.

```csharp
[Test]
public void TestRuntimeControlIntegration()
{
    // Create a test GraphFlow asset
    var graphFlow = ScriptableObject.CreateInstance<GraphFlowAsset>();
    
    // Test runtime control functionality
    // Verify the results
}
```

## 🎉 What's Next?

Now that you understand runtime control:

### **📚 Learn More**
- **[API Reference](api/graph-executor-util)** - Technical documentation
- **[Examples & Tutorials](examples/ui-ux-animations)** - Complete examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game control examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Runtime Control mastery achieved!** You're ready to create dynamic animations!

**Let's explore the API!** Check out the [API Reference](api/graph-executor-util) guide!

</div>
