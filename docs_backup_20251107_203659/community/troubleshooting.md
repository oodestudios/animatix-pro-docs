# Troubleshooting

Comprehensive troubleshooting guide for Animatix Pro. This guide helps you diagnose and fix common issues, performance problems, and technical difficulties.

## 🚨 Common Issues

### Animation Not Playing
**Symptoms:** Animation doesn't start or play properly.

**Possible Causes:**
- Target object is null or inactive
- Animation duration is zero or negative
- Graph executor is not properly initialized
- Animation is paused or stopped

**Solutions:**
1. **Check Target Object:**
   ```csharp
   if (targetObject == null)
   {
       Debug.LogError("Target object is null!");
       return;
   }
   
   if (!targetObject.activeInHierarchy)
   {
       targetObject.SetActive(true);
   }
   ```

2. **Validate Animation Duration:**
   ```csharp
   if (duration <= 0f)
   {
       duration = 1f; // Set default duration
       Debug.LogWarning("Invalid duration, using default value.");
   }
   ```

3. **Check Graph Executor:**
   ```csharp
   if (graphExecutor == null)
   {
       graphExecutor = GetComponent<GraphExecutor>();
       if (graphExecutor == null)
       {
           graphExecutor = gameObject.AddComponent<GraphExecutor>();
       }
   }
   ```

4. **Verify Animation State:**
   ```csharp
   if (graphExecutor.IsPaused())
   {
       graphExecutor.Resume();
   }
   else if (!graphExecutor.IsPlaying())
   {
       graphExecutor.Play();
   }
   ```

### Animation Playing Too Fast/Slow
**Symptoms:** Animation speed doesn't match expected timing.

**Possible Causes:**
- Incorrect duration values
- Time scale modifications
- Frame rate issues
- Easing curve problems

**Solutions:**
1. **Check Duration Values:**
   ```csharp
   Debug.Log($"Animation duration: {duration} seconds");
   Debug.Log($"Time scale: {Time.timeScale}");
   Debug.Log($"Frame rate: {1f / Time.deltaTime}");
   ```

2. **Reset Time Scale:**
   ```csharp
   Time.timeScale = 1f; // Reset to normal speed
   ```

3. **Adjust for Frame Rate:**
   ```csharp
   // Use unscaled time for consistent timing
   float unscaledTime = Time.unscaledTime;
   ```

4. **Check Easing Curves:**
   ```csharp
   // Verify easing curve is appropriate
   if (easingType == EasingType.Linear)
   {
       // Linear should be consistent
   }
   ```

### Animation Stuttering or Choppy
**Symptoms:** Animation appears jerky or not smooth.

**Possible Causes:**
- Low frame rate
- Too many concurrent animations
- Complex calculations
- Memory issues

**Solutions:**
1. **Check Frame Rate:**
   ```csharp
   void Update()
   {
       float fps = 1f / Time.deltaTime;
       if (fps < 30f)
       {
           Debug.LogWarning($"Low frame rate: {fps} FPS");
       }
   }
   ```

2. **Limit Concurrent Animations:**
   ```csharp
   if (activeAnimations.Count > maxConcurrentAnimations)
   {
       Debug.LogWarning("Too many concurrent animations!");
       // Stop oldest animations
       StopOldestAnimations();
   }
   ```

3. **Optimize Calculations:**
   ```csharp
   // Use efficient easing calculations
   float progress = elapsed / duration;
   float easedProgress = EaseOut(progress); // Simple easing
   ```

4. **Check Memory Usage:**
   ```csharp
   long memory = System.GC.GetTotalMemory(false);
   if (memory > maxMemory)
   {
       System.GC.Collect();
   }
   ```

### Animation Not Stopping
**Symptoms:** Animation continues running when it should stop.

**Possible Causes:**
- Loop node set to infinite
- Stop method not called
- Animation state not properly managed
- Event system issues

**Solutions:**
1. **Check Loop Settings:**
   ```csharp
   if (loopCount == -1) // Infinite loop
   {
       Debug.LogWarning("Infinite loop detected!");
       loopCount = 1; // Set to single loop
   }
   ```

2. **Force Stop Animation:**
   ```csharp
   if (graphExecutor.IsPlaying())
   {
       graphExecutor.Stop();
   }
   ```

3. **Reset Animation State:**
   ```csharp
   isAnimating = false;
   currentProgress = 0f;
   ```

4. **Check Event Handlers:**
   ```csharp
   // Ensure event handlers are properly unsubscribed
   graphExecutor.OnAnimationCompleted -= OnAnimationCompleted;
   ```

## 🎯 Trigger Issues

### Trigger Not Firing
**Symptoms:** Trigger conditions not activating animations.

**Possible Causes:**
- Trigger target not assigned
- Condition not met
- Cooldown active
- Event system not working

**Solutions:**
1. **Check Trigger Target:**
   ```csharp
   if (targetButton == null)
   {
       Debug.LogError("Trigger target not assigned!");
       return;
   }
   ```

2. **Debug Condition:**
   ```csharp
   bool conditionMet = EvaluateCondition(condition);
   Debug.Log($"Condition '{condition}' result: {conditionMet}");
   ```

3. **Check Cooldown:**
   ```csharp
   if (Time.time - lastTriggerTime < cooldown)
   {
       Debug.Log("Trigger in cooldown period");
       return;
   }
   ```

4. **Test Event System:**
   ```csharp
   // Test if events are being received
   void OnEnable()
   {
       targetButton.onClick.AddListener(OnButtonClick);
   }
   
   void OnDisable()
   {
       targetButton.onClick.RemoveListener(OnButtonClick);
   }
   ```

### Trigger Firing Too Often
**Symptoms:** Trigger activates multiple times when it should only fire once.

**Possible Causes:**
- Multiple event listeners
- Cooldown too short
- One-shot not working
- Event bubbling

**Solutions:**
1. **Remove Duplicate Listeners:**
   ```csharp
   void OnEnable()
   {
       targetButton.onClick.RemoveAllListeners();
       targetButton.onClick.AddListener(OnButtonClick);
   }
   ```

2. **Increase Cooldown:**
   ```csharp
   cooldown = Mathf.Max(cooldown, 0.5f); // Minimum 0.5 seconds
   ```

3. **Use One-Shot:**
   ```csharp
   if (oneShot && hasTriggered)
   {
       return; // Don't trigger again
   }
   ```

4. **Prevent Event Bubbling:**
   ```csharp
   void OnButtonClick()
   {
       if (isProcessing) return;
       isProcessing = true;
       // Handle trigger
       isProcessing = false;
   }
   ```

### Trigger Not Responding to Input
**Symptoms:** Trigger doesn't respond to user input.

**Possible Causes:**
- Input system not working
- Object not receiving input
- Raycast issues
- UI blocking input

**Solutions:**
1. **Check Input System:**
   ```csharp
   if (Input.GetMouseButtonDown(0))
   {
       Debug.Log("Mouse click detected");
   }
   ```

2. **Verify Object Receives Input:**
   ```csharp
   // Ensure object has collider and is in correct layer
   if (GetComponent<Collider>() == null)
   {
       gameObject.AddComponent<BoxCollider>();
   }
   ```

3. **Check Raycast:**
   ```csharp
   Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
   if (Physics.Raycast(ray, out RaycastHit hit))
   {
       Debug.Log($"Hit object: {hit.collider.name}");
   }
   ```

4. **Check UI Blocking:**
   ```csharp
   // Ensure UI doesn't block input
   if (EventSystem.current.IsPointerOverGameObject())
   {
       return; // UI is blocking input
   }
   ```

## 🎛️ Control Issues

### Loop Not Working
**Symptoms:** Loop node doesn't repeat animations.

**Possible Causes:**
- Loop count set to zero
- Exit condition met immediately
- Animation not completing
- Loop state not managed

**Solutions:**
1. **Check Loop Count:**
   ```csharp
   if (loopCount <= 0)
   {
       Debug.LogError("Invalid loop count!");
       return;
   }
   ```

2. **Debug Exit Condition:**
   ```csharp
   if (!string.IsNullOrEmpty(exitCondition))
   {
       bool shouldExit = EvaluateCondition(exitCondition);
       Debug.Log($"Exit condition result: {shouldExit}");
   }
   ```

3. **Ensure Animation Completes:**
   ```csharp
   yield return new WaitUntil(() => !graphExecutor.IsPlaying());
   // Animation completed, proceed with loop
   ```

4. **Manage Loop State:**
   ```csharp
   int currentLoop = 0;
   while (currentLoop < loopCount)
   {
       // Play animation
       yield return new WaitUntil(() => !graphExecutor.IsPlaying());
       currentLoop++;
   }
   ```

### Condition Not Evaluating
**Symptoms:** Condition node doesn't evaluate properly.

**Possible Causes:**
- Invalid condition syntax
- Missing variables
- Type mismatches
- Evaluation errors

**Solutions:**
1. **Validate Condition Syntax:**
   ```csharp
   if (string.IsNullOrEmpty(condition))
   {
       Debug.LogError("Condition is empty!");
       return false;
   }
   ```

2. **Check Variables:**
   ```csharp
   foreach (var variable in parameters)
   {
       Debug.Log($"Variable: {variable.Key} = {variable.Value}");
   }
   ```

3. **Handle Type Mismatches:**
   ```csharp
   try
   {
       return EvaluateCondition(condition);
   }
   catch (Exception e)
   {
       Debug.LogError($"Condition evaluation failed: {e.Message}");
       return false;
   }
   ```

4. **Use Safe Evaluation:**
   ```csharp
   public bool SafeEvaluateCondition()
   {
       try
       {
           return EvaluateCondition(condition);
       }
       catch
       {
           Debug.LogWarning("Condition evaluation failed, returning false");
           return false;
       }
   }
   ```

### Parallel Execution Issues
**Symptoms:** Parallel nodes don't execute simultaneously.

**Possible Causes:**
- Nodes not properly configured
- Execution order issues
- Resource conflicts
- Timing problems

**Solutions:**
1. **Check Node Configuration:**
   ```csharp
   if (nodeList == null || nodeList.Length == 0)
   {
       Debug.LogError("No nodes to execute in parallel!");
       return;
   }
   ```

2. **Start All Nodes Simultaneously:**
   ```csharp
   foreach (var node in nodeList)
   {
       if (node != null)
       {
           node.Execute();
       }
   }
   ```

3. **Handle Resource Conflicts:**
   ```csharp
   // Use different objects for parallel animations
   // or ensure they don't conflict
   ```

4. **Check Timing:**
   ```csharp
   float startTime = Time.time;
   // All nodes should start at the same time
   ```

## ✨ Effect Issues

### Particle Effects Not Playing
**Symptoms:** Particle system doesn't start or play properly.

**Possible Causes:**
- Particle system not assigned
- Particle system inactive
- Emission disabled
- Duration issues

**Solutions:**
1. **Check Particle System:**
   ```csharp
   if (particleSystem == null)
   {
       Debug.LogError("Particle system not assigned!");
       return;
   }
   ```

2. **Enable Emission:**
   ```csharp
   var emission = particleSystem.emission;
   emission.enabled = true;
   ```

3. **Start Particle System:**
   ```csharp
   particleSystem.Play();
   ```

4. **Check Duration:**
   ```csharp
   if (duration > 0f)
   {
       StartCoroutine(StopParticlesAfterDuration());
   }
   ```

### Audio Not Playing
**Symptoms:** Audio clips don't play or play incorrectly.

**Possible Causes:**
- Audio source not assigned
- Audio clip not assigned
- Audio source muted
- Volume set to zero

**Solutions:**
1. **Check Audio Source:**
   ```csharp
   if (audioSource == null)
   {
       Debug.LogError("Audio source not assigned!");
       return;
   }
   ```

2. **Check Audio Clip:**
   ```csharp
   if (audioClip == null)
   {
       Debug.LogError("Audio clip not assigned!");
       return;
   }
   ```

3. **Set Audio Properties:**
   ```csharp
   audioSource.clip = audioClip;
   audioSource.volume = volume;
   audioSource.pitch = pitch;
   audioSource.Play();
   ```

4. **Check Audio Settings:**
   ```csharp
   if (AudioListener.volume == 0f)
   {
       Debug.LogWarning("Audio listener volume is zero!");
   }
   ```

### Screen Effects Not Working
**Symptoms:** Screen shake, flash, or fade effects don't appear.

**Possible Causes:**
- Post-processing not enabled
- Effect intensity too low
- Camera not assigned
- Effect system not initialized

**Solutions:**
1. **Check Post-Processing:**
   ```csharp
   if (postProcessVolume == null)
   {
       Debug.LogError("Post-processing volume not assigned!");
       return;
   }
   ```

2. **Check Effect Intensity:**
   ```csharp
   if (intensity <= 0f)
   {
       Debug.LogWarning("Effect intensity is zero!");
       intensity = 1f;
   }
   ```

3. **Verify Camera:**
   ```csharp
   if (camera == null)
   {
       camera = Camera.main;
   }
   ```

4. **Initialize Effect System:**
   ```csharp
   if (!effectSystem.IsInitialized)
   {
       effectSystem.Initialize();
   }
   ```

## 🚀 Performance Issues

### Low Frame Rate
**Symptoms:** Game runs below 60fps.

**Possible Causes:**
- Too many concurrent animations
- Complex calculations
- Memory issues
- Inefficient code

**Solutions:**
1. **Limit Concurrent Animations:**
   ```csharp
   if (activeAnimations.Count > maxConcurrentAnimations)
   {
       // Stop oldest animations
       StopOldestAnimations();
   }
   ```

2. **Optimize Calculations:**
   ```csharp
   // Use efficient easing functions
   // Cache frequently used values
   // Use object pooling
   ```

3. **Check Memory Usage:**
   ```csharp
   long memory = System.GC.GetTotalMemory(false);
   if (memory > maxMemory)
   {
       System.GC.Collect();
   }
   ```

4. **Profile Performance:**
   ```csharp
   // Use Unity Profiler to identify bottlenecks
   ```

### Memory Leaks
**Symptoms:** Memory usage increases over time.

**Possible Causes:**
- Objects not being destroyed
- Event handlers not unsubscribed
- Cached data not cleared
- Circular references

**Solutions:**
1. **Destroy Objects Properly:**
   ```csharp
   void OnDestroy()
   {
       if (targetObject != null)
       {
           Destroy(targetObject);
       }
   }
   ```

2. **Unsubscribe from Events:**
   ```csharp
   void OnDisable()
   {
       targetButton.onClick.RemoveListener(OnButtonClick);
   }
   ```

3. **Clear Cached Data:**
   ```csharp
   void ClearCache()
   {
       animationCache.Clear();
       parameterCache.Clear();
   }
   ```

4. **Check for Circular References:**
   ```csharp
   // Ensure objects don't reference each other
   // Use weak references where appropriate
   ```

### Animation Stuttering
**Symptoms:** Animations appear choppy or stutter.

**Possible Causes:**
- Inconsistent frame rate
- Complex easing calculations
- Too many updates per frame
- Threading issues

**Solutions:**
1. **Maintain Consistent Frame Rate:**
   ```csharp
   Application.targetFrameRate = 60;
   ```

2. **Simplify Easing Calculations:**
   ```csharp
   // Use simpler easing functions
   // Cache easing results
   ```

3. **Limit Updates per Frame:**
   ```csharp
   if (Time.deltaTime > maxDeltaTime)
   {
       return; // Skip this frame
   }
   ```

4. **Use Coroutines:**
   ```csharp
   // Use coroutines for smooth animations
   StartCoroutine(AnimateCoroutine());
   ```

## 🔧 Debugging Tips

### Enable Debug Logging
```csharp
// Enable detailed logging
Debug.Log($"Animation started: {animationName}");
Debug.Log($"Target object: {targetObject.name}");
Debug.Log($"Duration: {duration} seconds");
Debug.Log($"Easing: {easingType}");
```

### Use Breakpoints
```csharp
// Set breakpoints in critical code
void OnAnimationStarted()
{
    Debug.Break(); // Pause execution here
    // Check variable values
}
```

### Profile Performance
```csharp
// Use Unity Profiler
void Update()
{
    if (Input.GetKeyDown(KeyCode.P))
    {
        Profiler.BeginSample("Animation Update");
        // Your animation code here
        Profiler.EndSample();
    }
}
```

### Check Object References
```csharp
// Validate all object references
if (targetObject == null)
{
    Debug.LogError("Target object is null!");
    return;
}

if (graphExecutor == null)
{
    Debug.LogError("Graph executor is null!");
    return;
}
```

## 🎉 What's Next?

Now that you can troubleshoot common issues:

### **📚 Learn More**
- **[Contact Support](contact-support)** - Get help from our team
- **[Contributing](contributing)** - Contribute to the project
- **[FAQ](faq)** - Frequently asked questions

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Troubleshooting mastery achieved!** You can fix any issue!

**Need more help?** Check out [Contact Support](contact-support)!

</div>
