# Custom Actions

Learn how to create custom actions that extend Animatix Pro's functionality. This comprehensive guide covers all aspects of custom action development.

## 🛠️ Custom Action Fundamentals

Custom actions allow you to:
- **Extend Functionality** - Add new capabilities to Animatix Pro
- **Integrate Systems** - Connect with external APIs and services
- **Create Reusable Components** - Build actions for multiple projects
- **Optimize Performance** - Create specialized actions for specific needs

### Action Types
- **Animation Actions** - Actions that control animations
- **System Actions** - Actions that interact with Unity systems
- **External Actions** - Actions that connect to external services
- **Utility Actions** - Actions that provide utility functions

## 🎬 Animation Actions

### Basic Animation Action
Create a simple custom animation action.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class CustomAnimationAction : GraphAction
{
    [SerializeField] private float duration = 1.0f;
    [SerializeField] private AnimationCurve curve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    
    public override void Execute()
    {
        // Custom animation logic here
        StartCoroutine(AnimateCoroutine());
    }
    
    private System.Collections.IEnumerator AnimateCoroutine()
    {
        float elapsed = 0f;
        while (elapsed < duration)
        {
            float progress = elapsed / duration;
            float curveValue = curve.Evaluate(progress);
            
            // Apply animation based on curve value
            ApplyAnimation(curveValue);
            
            elapsed += Time.deltaTime;
            yield return null;
        }
    }
    
    private void ApplyAnimation(float value)
    {
        // Implement your custom animation logic
    }
}
```

### Advanced Animation Action
Create a more sophisticated animation action.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class AdvancedAnimationAction : GraphAction
{
    [SerializeField] private Transform target;
    [SerializeField] private Vector3 startPosition;
    [SerializeField] private Vector3 endPosition;
    [SerializeField] private float duration = 1.0f;
    [SerializeField] private AnimationCurve positionCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    [SerializeField] private AnimationCurve rotationCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    [SerializeField] private AnimationCurve scaleCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    
    public override void Execute()
    {
        if (target == null)
        {
            Debug.LogError("Target is null!");
            return;
        }
        
        StartCoroutine(AnimateCoroutine());
    }
    
    private System.Collections.IEnumerator AnimateCoroutine()
    {
        Vector3 initialPosition = target.position;
        Quaternion initialRotation = target.rotation;
        Vector3 initialScale = target.localScale;
        
        float elapsed = 0f;
        while (elapsed < duration)
        {
            float progress = elapsed / duration;
            
            // Apply position animation
            float posValue = positionCurve.Evaluate(progress);
            target.position = Vector3.Lerp(startPosition, endPosition, posValue);
            
            // Apply rotation animation
            float rotValue = rotationCurve.Evaluate(progress);
            target.rotation = Quaternion.Lerp(initialRotation, Quaternion.identity, rotValue);
            
            // Apply scale animation
            float scaleValue = scaleCurve.Evaluate(progress);
            target.localScale = Vector3.Lerp(initialScale, Vector3.one, scaleValue);
            
            elapsed += Time.deltaTime;
            yield return null;
        }
        
        // Ensure final values are set
        target.position = endPosition;
        target.rotation = Quaternion.identity;
        target.localScale = Vector3.one;
    }
}
```

## 🎮 System Actions

### Unity System Integration
Create actions that interact with Unity systems.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.SceneManagement;

[System.Serializable]
public class SceneLoadAction : GraphAction
{
    [SerializeField] private string sceneName;
    [SerializeField] private LoadSceneMode loadMode = LoadSceneMode.Single;
    [SerializeField] private bool async = false;
    
    public override void Execute()
    {
        if (string.IsNullOrEmpty(sceneName))
        {
            Debug.LogError("Scene name is empty!");
            return;
        }
        
        if (async)
        {
            StartCoroutine(LoadSceneAsync());
        }
        else
        {
            SceneManager.LoadScene(sceneName, loadMode);
        }
    }
    
    private System.Collections.IEnumerator LoadSceneAsync()
    {
        AsyncOperation operation = SceneManager.LoadSceneAsync(sceneName, loadMode);
        
        while (!operation.isDone)
        {
            float progress = operation.progress;
            // You can update UI or trigger events based on progress
            yield return null;
        }
    }
}
```

### Audio System Integration
Create actions that control audio systems.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class AudioFadeAction : GraphAction
{
    [SerializeField] private AudioSource audioSource;
    [SerializeField] private float targetVolume = 1.0f;
    [SerializeField] private float fadeDuration = 1.0f;
    [SerializeField] private AnimationCurve fadeCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    
    public override void Execute()
    {
        if (audioSource == null)
        {
            Debug.LogError("Audio source is null!");
            return;
        }
        
        StartCoroutine(FadeCoroutine());
    }
    
    private System.Collections.IEnumerator FadeCoroutine()
    {
        float startVolume = audioSource.volume;
        float elapsed = 0f;
        
        while (elapsed < fadeDuration)
        {
            float progress = elapsed / fadeDuration;
            float curveValue = fadeCurve.Evaluate(progress);
            
            audioSource.volume = Mathf.Lerp(startVolume, targetVolume, curveValue);
            
            elapsed += Time.deltaTime;
            yield return null;
        }
        
        audioSource.volume = targetVolume;
    }
}
```

## 🌐 External Actions

### API Integration
Create actions that connect to external APIs.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;
using System.Text;
using System.Net.Http;

[System.Serializable]
public class APIRequestAction : GraphAction
{
    [SerializeField] private string apiUrl;
    [SerializeField] private string requestMethod = "GET";
    [SerializeField] private string requestBody = "";
    [SerializeField] private float timeout = 30f;
    
    public override void Execute()
    {
        if (string.IsNullOrEmpty(apiUrl))
        {
            Debug.LogError("API URL is empty!");
            return;
        }
        
        StartCoroutine(SendAPIRequest());
    }
    
    private IEnumerator SendAPIRequest()
    {
        using (HttpClient client = new HttpClient())
        {
            client.Timeout = System.TimeSpan.FromSeconds(timeout);
            
            HttpResponseMessage response = null;
            
            try
            {
                if (requestMethod.ToUpper() == "GET")
                {
                    response = client.GetAsync(apiUrl).Result;
                }
                else if (requestMethod.ToUpper() == "POST")
                {
                    StringContent content = new StringContent(requestBody, Encoding.UTF8, "application/json");
                    response = client.PostAsync(apiUrl, content).Result;
                }
                
                if (response != null && response.IsSuccessStatusCode)
                {
                    string responseContent = response.Content.ReadAsStringAsync().Result;
                    Debug.Log($"API Response: {responseContent}");
                    // Process response here
                }
                else
                {
                    Debug.LogError($"API Request failed: {response?.StatusCode}");
                }
            }
            catch (System.Exception e)
            {
                Debug.LogError($"API Request error: {e.Message}");
            }
        }
        
        yield return null;
    }
}
```

### File System Integration
Create actions that interact with the file system.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.IO;

[System.Serializable]
public class FileSaveAction : GraphAction
{
    [SerializeField] private string filePath;
    [SerializeField] private string content;
    [SerializeField] private bool createDirectory = true;
    
    public override void Execute()
    {
        if (string.IsNullOrEmpty(filePath))
        {
            Debug.LogError("File path is empty!");
            return;
        }
        
        try
        {
            if (createDirectory)
            {
                string directory = Path.GetDirectoryName(filePath);
                if (!Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }
            }
            
            File.WriteAllText(filePath, content);
            Debug.Log($"File saved successfully: {filePath}");
        }
        catch (System.Exception e)
        {
            Debug.LogError($"File save error: {e.Message}");
        }
    }
}
```

## 🔧 Utility Actions

### Math Utility Actions
Create actions that provide mathematical functions.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

[System.Serializable]
public class MathUtilityAction : GraphAction
{
    [SerializeField] private float inputValue;
    [SerializeField] private MathOperation operation;
    [SerializeField] private float parameter;
    [SerializeField] private bool outputToConsole = true;
    
    public enum MathOperation
    {
        Add,
        Subtract,
        Multiply,
        Divide,
        Power,
        SquareRoot,
        Sine,
        Cosine,
        Tangent
    }
    
    public override void Execute()
    {
        float result = CalculateResult();
        
        if (outputToConsole)
        {
            Debug.Log($"Math Result: {result}");
        }
        
        // You can store the result in a variable or trigger other actions
    }
    
    private float CalculateResult()
    {
        switch (operation)
        {
            case MathOperation.Add:
                return inputValue + parameter;
            case MathOperation.Subtract:
                return inputValue - parameter;
            case MathOperation.Multiply:
                return inputValue * parameter;
            case MathOperation.Divide:
                return parameter != 0 ? inputValue / parameter : 0;
            case MathOperation.Power:
                return Mathf.Pow(inputValue, parameter);
            case MathOperation.SquareRoot:
                return Mathf.Sqrt(inputValue);
            case MathOperation.Sine:
                return Mathf.Sin(inputValue * Mathf.Deg2Rad);
            case MathOperation.Cosine:
                return Mathf.Cos(inputValue * Mathf.Deg2Rad);
            case MathOperation.Tangent:
                return Mathf.Tan(inputValue * Mathf.Deg2Rad);
            default:
                return inputValue;
        }
    }
}
```

### String Utility Actions
Create actions that manipulate strings.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Text.RegularExpressions;

[System.Serializable]
public class StringUtilityAction : GraphAction
{
    [SerializeField] private string inputString;
    [SerializeField] private StringOperation operation;
    [SerializeField] private string parameter;
    [SerializeField] private bool outputToConsole = true;
    
    public enum StringOperation
    {
        ToUpperCase,
        ToLowerCase,
        Reverse,
        Replace,
        Remove,
        Split,
        Join,
        ValidateEmail,
        ValidatePhone
    }
    
    public override void Execute()
    {
        string result = ProcessString();
        
        if (outputToConsole)
        {
            Debug.Log($"String Result: {result}");
        }
    }
    
    private string ProcessString()
    {
        switch (operation)
        {
            case StringOperation.ToUpperCase:
                return inputString.ToUpper();
            case StringOperation.ToLowerCase:
                return inputString.ToLower();
            case StringOperation.Reverse:
                char[] charArray = inputString.ToCharArray();
                System.Array.Reverse(charArray);
                return new string(charArray);
            case StringOperation.Replace:
                return inputString.Replace(parameter, "");
            case StringOperation.Remove:
                return inputString.Replace(parameter, "");
            case StringOperation.Split:
                string[] parts = inputString.Split(parameter.ToCharArray());
                return string.Join(", ", parts);
            case StringOperation.Join:
                return string.Join(parameter, inputString.Split(' '));
            case StringOperation.ValidateEmail:
                return IsValidEmail(inputString) ? "Valid Email" : "Invalid Email";
            case StringOperation.ValidatePhone:
                return IsValidPhone(inputString) ? "Valid Phone" : "Invalid Phone";
            default:
                return inputString;
        }
    }
    
    private bool IsValidEmail(string email)
    {
        string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
        return Regex.IsMatch(email, pattern);
    }
    
    private bool IsValidPhone(string phone)
    {
        string pattern = @"^\+?[\d\s\-\(\)]{10,}$";
        return Regex.IsMatch(phone, pattern);
    }
}
```

## 🎨 Custom Action Best Practices

### Code Organization
Organize your custom actions effectively.

#### Naming Conventions
```csharp
// Use descriptive names
public class PlayerMovementAction : GraphAction
public class UIAnimationAction : GraphAction
public class AudioFadeAction : GraphAction
```

#### Documentation
```csharp
/// <summary>
/// Custom action that animates a UI element with a bounce effect
/// </summary>
[System.Serializable]
public class UIBounceAction : GraphAction
{
    /// <summary>
    /// The UI element to animate
    /// </summary>
    [SerializeField] private RectTransform target;
    
    /// <summary>
    /// The bounce intensity (1.0 = normal, 2.0 = double bounce)
    /// </summary>
    [SerializeField] private float bounceIntensity = 1.5f;
    
    /// <summary>
    /// The duration of the bounce animation
    /// </summary>
    [SerializeField] private float duration = 0.5f;
}
```

#### Error Handling
```csharp
public override void Execute()
{
    if (target == null)
    {
        Debug.LogError($"{GetType().Name}: Target is null!");
        return;
    }
    
    if (duration <= 0)
    {
        Debug.LogError($"{GetType().Name}: Duration must be positive!");
        return;
    }
    
    // Execute action logic
}
```

### Performance Optimization
Optimize your custom actions for better performance.

#### Object Pooling
```csharp
public class PooledAction : GraphAction
{
    private static Queue<PooledAction> pool = new Queue<PooledAction>();
    
    public static PooledAction Get()
    {
        if (pool.Count > 0)
        {
            return pool.Dequeue();
        }
        return new PooledAction();
    }
    
    public static void Return(PooledAction action)
    {
        action.Reset();
        pool.Enqueue(action);
    }
}
```

#### Caching
```csharp
public class CachedAction : GraphAction
{
    private static Dictionary<string, object> cache = new Dictionary<string, object>();
    
    private object GetCachedValue(string key)
    {
        if (cache.ContainsKey(key))
        {
            return cache[key];
        }
        return null;
    }
    
    private void SetCachedValue(string key, object value)
    {
        cache[key] = value;
    }
}
```

## 🚀 Testing Custom Actions

### Unit Testing
Test your custom actions thoroughly.

```csharp
using NUnit.Framework;
using UnityEngine;
using AnimatixPro.GraphFlow;

[TestFixture]
public class CustomActionTests
{
    [Test]
    public void TestCustomAnimationAction()
    {
        // Arrange
        var action = new CustomAnimationAction();
        var gameObject = new GameObject();
        var transform = gameObject.transform;
        
        // Act
        action.Execute();
        
        // Assert
        Assert.IsNotNull(transform);
        // Add more assertions based on your action's behavior
    }
    
    [Test]
    public void TestMathUtilityAction()
    {
        // Arrange
        var action = new MathUtilityAction();
        action.inputValue = 5f;
        action.operation = MathUtilityAction.MathOperation.Add;
        action.parameter = 3f;
        
        // Act
        action.Execute();
        
        // Assert
        // Verify the result is correct
    }
}
```

### Integration Testing
Test how your actions work with the GraphFlow system.

```csharp
[Test]
public void TestActionIntegration()
{
    // Create a test GraphFlow asset
    var graphFlow = ScriptableObject.CreateInstance<GraphFlowAsset>();
    
    // Add your custom action to the graph
    // Test the action execution
    // Verify the results
}
```

## 🔧 Debugging Custom Actions

### Debug Tools
Use built-in debugging features.

#### Debug Logging
```csharp
public class DebugAction : GraphAction
{
    [SerializeField] private bool enableDebugLogging = true;
    
    public override void Execute()
    {
        if (enableDebugLogging)
        {
            Debug.Log($"{GetType().Name}: Starting execution");
        }
        
        // Action logic
        
        if (enableDebugLogging)
        {
            Debug.Log($"{GetType().Name}: Execution completed");
        }
    }
}
```

#### Performance Profiling
```csharp
public class ProfiledAction : GraphAction
{
    public override void Execute()
    {
        var stopwatch = System.Diagnostics.Stopwatch.StartNew();
        
        // Action logic
        
        stopwatch.Stop();
        Debug.Log($"{GetType().Name}: Execution time: {stopwatch.ElapsedMilliseconds}ms");
    }
}
```

## 🎉 What's Next?

Now that you understand custom actions:

### **📚 Learn More**
- **[Custom Triggers](custom-triggers)** - Create custom trigger systems
- **[Custom Conditions](custom-conditions)** - Build custom condition logic
- **[Runtime Control](runtime-control)** - Control animations at runtime

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game action examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Custom Action mastery achieved!** You're ready to extend Animatix Pro!

**Let's create custom triggers!** Check out the [Custom Triggers](custom-triggers) guide!

</div>
