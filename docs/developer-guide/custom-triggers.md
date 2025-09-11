# Custom Triggers

Learn how to create custom triggers that extend Animatix Pro's trigger system. This comprehensive guide covers all aspects of custom trigger development.

## 🎯 Custom Trigger Fundamentals

Custom triggers allow you to:
- **Extend Input Systems** - Add new input methods and gestures
- **Integrate External Systems** - Connect with APIs, databases, and services
- **Create Game-Specific Logic** - Build triggers for unique gameplay mechanics
- **Optimize Performance** - Create specialized triggers for specific needs

### Trigger Types
- **Input Triggers** - Custom input detection and processing
- **System Triggers** - Integration with external systems
- **Gameplay Triggers** - Game-specific trigger logic
- **Utility Triggers** - Helper triggers for common tasks

## 🖱️ Input Triggers

### Basic Input Trigger
Create a simple custom input trigger.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class CustomInputTrigger : GraphTrigger
{
    [SerializeField] private KeyCode triggerKey = KeyCode.Space;
    [SerializeField] private bool requireHold = false;
    [SerializeField] private float holdDuration = 1.0f;
    
    private bool isHolding = false;
    private float holdStartTime = 0f;
    
    public override void Update()
    {
        if (Input.GetKeyDown(triggerKey))
        {
            if (requireHold)
            {
                isHolding = true;
                holdStartTime = Time.time;
            }
            else
            {
                Trigger();
            }
        }
        
        if (requireHold && isHolding)
        {
            if (Input.GetKeyUp(triggerKey))
            {
                isHolding = false;
            }
            else if (Time.time - holdStartTime >= holdDuration)
            {
                Trigger();
                isHolding = false;
            }
        }
    }
    
    public override bool CanTrigger()
    {
        return true; // Add your custom conditions here
    }
}
```

### Gesture Trigger
Create a trigger that detects custom gestures.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

[System.Serializable]
public class GestureTrigger : GraphTrigger
{
    [SerializeField] private List<Vector2> gesturePattern = new List<Vector2>();
    [SerializeField] private float tolerance = 0.1f;
    [SerializeField] private float maxTime = 2.0f;
    
    private List<Vector2> currentGesture = new List<Vector2>();
    private float gestureStartTime = 0f;
    private bool isRecording = false;
    
    public override void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            StartGesture();
        }
        else if (Input.GetMouseButton(0) && isRecording)
        {
            RecordGesture();
        }
        else if (Input.GetMouseButtonUp(0) && isRecording)
        {
            CompleteGesture();
        }
    }
    
    private void StartGesture()
    {
        currentGesture.Clear();
        gestureStartTime = Time.time;
        isRecording = true;
    }
    
    private void RecordGesture()
    {
        if (Time.time - gestureStartTime > maxTime)
        {
            isRecording = false;
            return;
        }
        
        Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        currentGesture.Add(mousePos);
    }
    
    private void CompleteGesture()
    {
        isRecording = false;
        
        if (IsGestureMatch())
        {
            Trigger();
        }
    }
    
    private bool IsGestureMatch()
    {
        if (currentGesture.Count != gesturePattern.Count)
            return false;
        
        for (int i = 0; i < currentGesture.Count; i++)
        {
            if (Vector2.Distance(currentGesture[i], gesturePattern[i]) > tolerance)
                return false;
        }
        
        return true;
    }
}
```

### Multi-Touch Trigger
Create a trigger for multi-touch gestures.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class MultiTouchTrigger : GraphTrigger
{
    [SerializeField] private int requiredTouches = 2;
    [SerializeField] private float maxDistance = 100f;
    [SerializeField] private float minDuration = 0.5f;
    
    private float touchStartTime = 0f;
    private bool isMultiTouching = false;
    
    public override void Update()
    {
        if (Input.touchCount == requiredTouches)
        {
            if (!isMultiTouching)
            {
                StartMultiTouch();
            }
            else
            {
                CheckMultiTouch();
            }
        }
        else
        {
            isMultiTouching = false;
        }
    }
    
    private void StartMultiTouch()
    {
        touchStartTime = Time.time;
        isMultiTouching = true;
    }
    
    private void CheckMultiTouch()
    {
        if (Time.time - touchStartTime < minDuration)
            return;
        
        Touch touch1 = Input.GetTouch(0);
        Touch touch2 = Input.GetTouch(1);
        
        float distance = Vector2.Distance(touch1.position, touch2.position);
        
        if (distance <= maxDistance)
        {
            Trigger();
            isMultiTouching = false;
        }
    }
}
```

## 🎮 Gameplay Triggers

### Health-Based Trigger
Create a trigger that responds to health changes.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class HealthTrigger : GraphTrigger
{
    [SerializeField] private HealthComponent healthComponent;
    [SerializeField] private HealthCondition condition;
    [SerializeField] private float threshold = 0.5f;
    
    public enum HealthCondition
    {
        Above,
        Below,
        Equal,
        Changed
    }
    
    private float lastHealth = 0f;
    
    public override void Update()
    {
        if (healthComponent == null)
            return;
        
        float currentHealth = healthComponent.GetHealthPercentage();
        
        if (CheckHealthCondition(currentHealth))
        {
            Trigger();
        }
        
        lastHealth = currentHealth;
    }
    
    private bool CheckHealthCondition(float currentHealth)
    {
        switch (condition)
        {
            case HealthCondition.Above:
                return currentHealth > threshold;
            case HealthCondition.Below:
                return currentHealth < threshold;
            case HealthCondition.Equal:
                return Mathf.Approximately(currentHealth, threshold);
            case HealthCondition.Changed:
                return !Mathf.Approximately(currentHealth, lastHealth);
            default:
                return false;
        }
    }
}
```

### Score-Based Trigger
Create a trigger that responds to score changes.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class ScoreTrigger : GraphTrigger
{
    [SerializeField] private ScoreManager scoreManager;
    [SerializeField] private ScoreCondition condition;
    [SerializeField] private int targetScore = 1000;
    [SerializeField] private int scoreIncrement = 100;
    
    public enum ScoreCondition
    {
        Reached,
        Exceeded,
        Increased,
        Milestone
    }
    
    private int lastScore = 0;
    
    public override void Update()
    {
        if (scoreManager == null)
            return;
        
        int currentScore = scoreManager.GetScore();
        
        if (CheckScoreCondition(currentScore))
        {
            Trigger();
        }
        
        lastScore = currentScore;
    }
    
    private bool CheckScoreCondition(int currentScore)
    {
        switch (condition)
        {
            case ScoreCondition.Reached:
                return currentScore >= targetScore && lastScore < targetScore;
            case ScoreCondition.Exceeded:
                return currentScore > targetScore;
            case ScoreCondition.Increased:
                return currentScore > lastScore;
            case ScoreCondition.Milestone:
                return currentScore % scoreIncrement == 0 && currentScore > lastScore;
            default:
                return false;
        }
    }
}
```

### Timer-Based Trigger
Create a trigger that fires at specific time intervals.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class TimerTrigger : GraphTrigger
{
    [SerializeField] private float interval = 5.0f;
    [SerializeField] private bool repeat = true;
    [SerializeField] private int maxTriggers = -1;
    
    private float lastTriggerTime = 0f;
    private int triggerCount = 0;
    
    public override void Update()
    {
        if (Time.time - lastTriggerTime >= interval)
        {
            if (maxTriggers == -1 || triggerCount < maxTriggers)
            {
                Trigger();
                lastTriggerTime = Time.time;
                triggerCount++;
            }
        }
    }
    
    public override void Reset()
    {
        base.Reset();
        lastTriggerTime = Time.time;
        triggerCount = 0;
    }
}
```

## 🌐 System Triggers

### API Response Trigger
Create a trigger that responds to API calls.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;
using System.Net.Http;

[System.Serializable]
public class APIResponseTrigger : GraphTrigger
{
    [SerializeField] private string apiUrl;
    [SerializeField] private float checkInterval = 1.0f;
    [SerializeField] private string expectedResponse;
    
    private float lastCheckTime = 0f;
    private bool isWaiting = false;
    
    public override void Update()
    {
        if (isWaiting && Time.time - lastCheckTime >= checkInterval)
        {
            StartCoroutine(CheckAPIResponse());
            lastCheckTime = Time.time;
        }
    }
    
    public void StartAPICall()
    {
        isWaiting = true;
        lastCheckTime = Time.time;
    }
    
    private IEnumerator CheckAPIResponse()
    {
        using (HttpClient client = new HttpClient())
        {
            try
            {
                HttpResponseMessage response = client.GetAsync(apiUrl).Result;
                string responseContent = response.Content.ReadAsStringAsync().Result;
                
                if (response.IsSuccessStatusCode && responseContent.Contains(expectedResponse))
                {
                    Trigger();
                    isWaiting = false;
                }
            }
            catch (System.Exception e)
            {
                Debug.LogError($"API Error: {e.Message}");
            }
        }
        
        yield return null;
    }
}
```

### File System Trigger
Create a trigger that responds to file changes.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.IO;

[System.Serializable]
public class FileSystemTrigger : GraphTrigger
{
    [SerializeField] private string filePath;
    [SerializeField] private FileSystemCondition condition;
    [SerializeField] private float checkInterval = 1.0f;
    
    public enum FileSystemCondition
    {
        FileExists,
        FileCreated,
        FileModified,
        FileDeleted
    }
    
    private float lastCheckTime = 0f;
    private bool lastFileExists = false;
    private DateTime lastWriteTime = DateTime.MinValue;
    
    public override void Update()
    {
        if (Time.time - lastCheckTime >= checkInterval)
        {
            CheckFileSystem();
            lastCheckTime = Time.time;
        }
    }
    
    private void CheckFileSystem()
    {
        bool fileExists = File.Exists(filePath);
        
        switch (condition)
        {
            case FileSystemCondition.FileExists:
                if (fileExists)
                {
                    Trigger();
                }
                break;
                
            case FileSystemCondition.FileCreated:
                if (fileExists && !lastFileExists)
                {
                    Trigger();
                }
                break;
                
            case FileSystemCondition.FileModified:
                if (fileExists)
                {
                    DateTime currentWriteTime = File.GetLastWriteTime(filePath);
                    if (currentWriteTime > lastWriteTime)
                    {
                        Trigger();
                        lastWriteTime = currentWriteTime;
                    }
                }
                break;
                
            case FileSystemCondition.FileDeleted:
                if (!fileExists && lastFileExists)
                {
                    Trigger();
                }
                break;
        }
        
        lastFileExists = fileExists;
    }
}
```

## 🎨 Advanced Trigger Techniques

### Composite Trigger
Create a trigger that combines multiple conditions.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections.Generic;

[System.Serializable]
public class CompositeTrigger : GraphTrigger
{
    [SerializeField] private List<GraphTrigger> subTriggers = new List<GraphTrigger>();
    [SerializeField] private CompositeLogic logic = CompositeLogic.And;
    
    public enum CompositeLogic
    {
        And,
        Or,
        Not
    }
    
    public override void Update()
    {
        foreach (var trigger in subTriggers)
        {
            trigger.Update();
        }
    }
    
    public override bool CanTrigger()
    {
        switch (logic)
        {
            case CompositeLogic.And:
                return subTriggers.TrueForAll(t => t.CanTrigger());
            case CompositeLogic.Or:
                return subTriggers.Exists(t => t.CanTrigger());
            case CompositeLogic.Not:
                return !subTriggers.Exists(t => t.CanTrigger());
            default:
                return false;
        }
    }
}
```

### State Machine Trigger
Create a trigger that responds to state machine changes.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class StateMachineTrigger : GraphTrigger
{
    [SerializeField] private StateMachine stateMachine;
    [SerializeField] private string targetState;
    [SerializeField] private bool triggerOnEnter = true;
    [SerializeField] private bool triggerOnExit = false;
    
    private string lastState = "";
    
    public override void Update()
    {
        if (stateMachine == null)
            return;
        
        string currentState = stateMachine.GetCurrentState();
        
        if (triggerOnEnter && currentState == targetState && lastState != targetState)
        {
            Trigger();
        }
        
        if (triggerOnExit && lastState == targetState && currentState != targetState)
        {
            Trigger();
        }
        
        lastState = currentState;
    }
}
```

## 🚀 Performance Optimization

### Trigger Optimization Best Practices

#### Efficient Triggering
- **Limit trigger frequency** to prevent spam
- **Use trigger pooling** for frequently created triggers
- **Cache trigger calculations** when possible
- **Profile trigger performance** regularly

#### Memory Management
- **Clean up unused triggers** automatically
- **Use weak references** for trigger dependencies
- **Limit trigger complexity** on mobile devices
- **Monitor memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler triggers, lower frequency
- **Desktop**: More complex triggers, higher frequency
- **Console**: Optimize for specific hardware
- **VR**: Consider input method differences

## 🔧 Testing Custom Triggers

### Unit Testing
Test your custom triggers thoroughly.

```csharp
using NUnit.Framework;
using UnityEngine;
using AnimatixPro.GraphFlow;

[TestFixture]
public class CustomTriggerTests
{
    [Test]
    public void TestCustomInputTrigger()
    {
        // Arrange
        var trigger = new CustomInputTrigger();
        trigger.triggerKey = KeyCode.Space;
        
        // Act
        // Simulate key press
        // Assert
        // Verify trigger behavior
    }
    
    [Test]
    public void TestHealthTrigger()
    {
        // Arrange
        var trigger = new HealthTrigger();
        var healthComponent = new HealthComponent();
        trigger.healthComponent = healthComponent;
        trigger.condition = HealthTrigger.HealthCondition.Below;
        trigger.threshold = 0.5f;
        
        // Act
        healthComponent.SetHealth(0.3f);
        
        // Assert
        Assert.IsTrue(trigger.CanTrigger());
    }
}
```

### Integration Testing
Test how your triggers work with the GraphFlow system.

```csharp
[Test]
public void TestTriggerIntegration()
{
    // Create a test GraphFlow asset
    var graphFlow = ScriptableObject.CreateInstance<GraphFlowAsset>();
    
    // Add your custom trigger to the graph
    // Test the trigger execution
    // Verify the results
}
```

## 🎉 What's Next?

Now that you understand custom triggers:

### **📚 Learn More**
- **[Custom Conditions](custom-conditions)** - Create custom condition logic
- **[Runtime Control](runtime-control)** - Control animations at runtime
- **[API Reference](api/graph-executor-util)** - Technical documentation

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game trigger examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Custom Trigger mastery achieved!** You're ready to create intelligent triggers!

**Let's create custom conditions!** Check out the [Custom Conditions](custom-conditions) guide!

</div>
