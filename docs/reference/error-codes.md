# Error Codes

Complete reference guide for all Animatix Pro error codes and troubleshooting solutions. This comprehensive guide provides detailed information about every error, their causes, and step-by-step solutions.

## 🚨 Animation Errors

### ANIM_001: Target Object Not Found
**Error Code:** ANIM_001  
**Severity:** Error  
**Description:** The target object for animation is null or missing.

**Common Causes:**
- Object was destroyed before animation started
- Object reference was not assigned
- Object is inactive in hierarchy

**Solutions:**
1. **Check Object Reference:**
   ```csharp
   if (targetObject == null)
   {
       Debug.LogError("Target object is null. Please assign a valid object.");
       return;
   }
   ```

2. **Verify Object is Active:**
   ```csharp
   if (!targetObject.activeInHierarchy)
   {
       targetObject.SetActive(true);
   }
   ```

3. **Use Object Pooling:**
   ```csharp
   // For frequently created/destroyed objects
   GameObject pooledObject = ObjectPooler.Instance.GetPooledObject();
   if (pooledObject != null)
   {
       targetObject = pooledObject;
   }
   ```

### ANIM_002: Invalid Animation Duration
**Error Code:** ANIM_002  
**Severity:** Error  
**Description:** Animation duration is invalid (negative, zero, or too large).

**Common Causes:**
- Duration set to negative value
- Duration set to zero
- Duration exceeds maximum allowed value

**Solutions:**
1. **Validate Duration:**
   ```csharp
   if (duration <= 0f)
   {
       duration = 1f; // Default duration
       Debug.LogWarning("Invalid duration, using default value of 1 second.");
   }
   ```

2. **Clamp Duration:**
   ```csharp
   duration = Mathf.Clamp(duration, 0.1f, 60f);
   ```

3. **Use Safe Duration:**
   ```csharp
   public float SafeDuration
   {
       get { return Mathf.Max(0.1f, Mathf.Min(60f, duration)); }
   }
   ```

### ANIM_003: Easing Curve Not Found
**Error Code:** ANIM_003  
**Severity:** Warning  
**Description:** The specified easing curve type is not implemented.

**Common Causes:**
- Easing type enum value is invalid
- Easing curve is not implemented
- Easing type is null

**Solutions:**
1. **Use Default Easing:**
   ```csharp
   if (!Enum.IsDefined(typeof(EasingType), easingType))
   {
       easingType = EasingType.EaseOut;
       Debug.LogWarning("Invalid easing type, using EaseOut as default.");
   }
   ```

2. **Implement Missing Easing:**
   ```csharp
   public float EvaluateEasing(float t, EasingType type)
   {
       switch (type)
       {
           case EasingType.EaseOut:
               return 1f - Mathf.Pow(1f - t, 3f);
           default:
               return t; // Linear fallback
       }
   }
   ```

### ANIM_004: Animation Already Running
**Error Code:** ANIM_004  
**Severity:** Warning  
**Description:** Attempting to start an animation that is already running.

**Common Causes:**
- Animation started multiple times
- Previous animation not properly stopped
- Concurrent animation conflicts

**Solutions:**
1. **Check Animation State:**
   ```csharp
   if (isAnimating)
   {
       Debug.LogWarning("Animation already running, stopping previous animation.");
       StopAnimation();
   }
   ```

2. **Use Animation Queue:**
   ```csharp
   if (isAnimating)
   {
       animationQueue.Enqueue(newAnimation);
       return;
   }
   ```

3. **Force Stop and Restart:**
   ```csharp
   if (isAnimating)
   {
       StopAnimation();
       yield return new WaitForEndOfFrame();
   }
   StartAnimation();
   ```

## 🎯 Trigger Errors

### TRIG_001: Trigger Target Not Found
**Error Code:** TRIG_001  
**Severity:** Error  
**Description:** The target object for trigger is null or missing.

**Common Causes:**
- Button reference not assigned
- Collider reference missing
- Mouse target object destroyed

**Solutions:**
1. **Validate Button Reference:**
   ```csharp
   if (targetButton == null)
   {
       Debug.LogError("Target button is null. Please assign a valid button.");
       return;
   }
   ```

2. **Find Button Automatically:**
   ```csharp
   if (targetButton == null)
   {
       targetButton = GetComponent&lt;Button&gt;();
       if (targetButton == null)
       {
           targetButton = FindObjectOfType&lt;Button&gt;();
       }
   }
   ```

3. **Use Safe Button Access:**
   ```csharp
   public Button SafeTargetButton
   {
       get
       {
           if (targetButton == null)
           {
               targetButton = GetComponent&lt;Button&gt;();
           }
           return targetButton;
       }
   }
   ```

### TRIG_002: Invalid Trigger Condition
**Error Code:** TRIG_002  
**Severity:** Error  
**Description:** The trigger condition expression is invalid or cannot be evaluated.

**Common Causes:**
- Syntax error in condition string
- Undefined variables in condition
- Invalid operators used

**Solutions:**
1. **Validate Condition Syntax:**
   ```csharp
   try
   {
       bool result = EvaluateCondition(condition);
   }
   catch (Exception e)
   {
       Debug.LogError($"Invalid trigger condition: {e.Message}");
       condition = "true"; // Safe fallback
   }
   ```

2. **Use Safe Condition Evaluation:**
   ```csharp
   public bool SafeEvaluateCondition(string condition)
   {
       try
       {
           return EvaluateCondition(condition);
       }
       catch
       {
           Debug.LogWarning("Condition evaluation failed, returning false.");
           return false;
       }
   }
   ```

3. **Pre-validate Conditions:**
   ```csharp
   public bool IsValidCondition(string condition)
   {
       // Check for basic syntax errors
       if (string.IsNullOrEmpty(condition)) return false;
       if (condition.Contains("undefined")) return false;
       return true;
   }
   ```

### TRIG_003: Trigger Cooldown Active
**Error Code:** TRIG_003  
**Severity:** Info  
**Description:** Trigger is in cooldown period and cannot fire.

**Common Causes:**
- Cooldown timer still active
- Rapid trigger attempts
- Cooldown value too high

**Solutions:**
1. **Check Cooldown Status:**
   ```csharp
   if (Time.time - lastTriggerTime < cooldown)
   {
       Debug.Log("Trigger in cooldown, ignoring trigger attempt.");
       return;
   }
   ```

2. **Adjust Cooldown Value:**
   ```csharp
   if (cooldown > 1f)
   {
       cooldown = 0.5f; // Reduce cooldown
       Debug.LogWarning("Cooldown too high, reducing to 0.5 seconds.");
   }
   ```

3. **Use Dynamic Cooldown:**
   ```csharp
   public float DynamicCooldown
   {
       get { return Mathf.Max(0.1f, cooldown * 0.8f); }
   }
   ```

## 🎛️ Control Errors

### CTRL_001: Invalid Loop Count
**Error Code:** CTRL_001  
**Severity:** Error  
**Description:** Loop count is invalid (negative or too large).

**Common Causes:**
- Loop count set to negative value
- Loop count exceeds maximum allowed
- Infinite loop without proper exit condition

**Solutions:**
1. **Validate Loop Count:**
   ```csharp
   if (loopCount < 0)
   {
       loopCount = 1; // Default to single loop
       Debug.LogWarning("Invalid loop count, using default value of 1.");
   }
   ```

2. **Clamp Loop Count:**
   ```csharp
   loopCount = Mathf.Clamp(loopCount, 0, 1000);
   ```

3. **Use Safe Loop Count:**
   ```csharp
   public int SafeLoopCount
   {
       get { return Mathf.Max(0, Mathf.Min(1000, loopCount)); }
   }
   ```

### CTRL_002: Empty Node List
**Error Code:** CTRL_002  
**Severity:** Warning  
**Description:** Node list is empty or contains null elements.

**Common Causes:**
- No nodes assigned to sequence/parallel
- Null nodes in the list
- Nodes removed after assignment

**Solutions:**
1. **Validate Node List:**
   ```csharp
   if (nodeList == null || nodeList.Length == 0)
   {
       Debug.LogWarning("Node list is empty, skipping execution.");
       return;
   }
   ```

2. **Filter Null Nodes:**
   ```csharp
   nodeList = nodeList.Where(node => node != null).ToArray();
   ```

3. **Use Safe Node List:**
   ```csharp
   public Node[] SafeNodeList
   {
       get
       {
           if (nodeList == null) return new Node[0];
           return nodeList.Where(node => node != null).ToArray();
       }
   }
   ```

### CTRL_003: Condition Evaluation Failed
**Error Code:** CTRL_003  
**Severity:** Error  
**Description:** Condition node failed to evaluate its condition.

**Common Causes:**
- Invalid condition syntax
- Missing variables in condition
- Runtime evaluation error

**Solutions:**
1. **Safe Condition Evaluation:**
   ```csharp
   public bool SafeEvaluateCondition()
   {
       try
       {
           return EvaluateCondition(condition);
       }
       catch (Exception e)
       {
           Debug.LogError($"Condition evaluation failed: {e.Message}");
           return false; // Safe fallback
       }
   }
   ```

2. **Validate Condition Before Use:**
   ```csharp
   if (string.IsNullOrEmpty(condition))
   {
       Debug.LogError("Condition is empty, using false as default.");
       return false;
   }
   ```

3. **Use Fallback Condition:**
   ```csharp
   public string SafeCondition
   {
       get { return string.IsNullOrEmpty(condition) ? "true" : condition; }
   }
   ```

## ✨ Effect Errors

### EFF_001: Particle System Not Found
**Error Code:** EFF_001  
**Severity:** Error  
**Description:** Particle system component is missing or null.

**Common Causes:**
- Particle system not assigned
- Particle system component missing
- Particle system destroyed

**Solutions:**
1. **Find Particle System:**
   ```csharp
   if (particleSystem == null)
   {
       particleSystem = GetComponent&lt;ParticleSystem&gt;();
       if (particleSystem == null)
       {
           particleSystem = FindObjectOfType&lt;ParticleSystem&gt;();
       }
   }
   ```

2. **Create Particle System:**
   ```csharp
   if (particleSystem == null)
   {
       GameObject particleObj = new GameObject("ParticleSystem");
       particleSystem = particleObj.AddComponent&lt;ParticleSystem&gt;();
   }
   ```

3. **Use Safe Particle System:**
   ```csharp
   public ParticleSystem SafeParticleSystem
   {
       get
       {
           if (particleSystem == null)
           {
               particleSystem = GetComponent&lt;ParticleSystem&gt;();
           }
           return particleSystem;
       }
   }
   ```

### EFF_002: Audio Source Not Found
**Error Code:** EFF_002  
**Severity:** Error  
**Description:** Audio source component is missing or null.

**Common Causes:**
- Audio source not assigned
- Audio source component missing
- Audio source destroyed

**Solutions:**
1. **Find Audio Source:**
   ```csharp
   if (audioSource == null)
   {
       audioSource = GetComponent&lt;AudioSource&gt;();
       if (audioSource == null)
       {
           audioSource = FindObjectOfType&lt;AudioSource&gt;();
       }
   }
   ```

2. **Create Audio Source:**
   ```csharp
   if (audioSource == null)
   {
       audioSource = gameObject.AddComponent&lt;AudioSource&gt;();
   }
   ```

3. **Use Safe Audio Source:**
   ```csharp
   public AudioSource SafeAudioSource
   {
       get
       {
           if (audioSource == null)
           {
               audioSource = GetComponent&lt;AudioSource&gt;();
           }
           return audioSource;
       }
   }
   ```

### EFF_003: Invalid Effect Parameters
**Error Code:** EFF_003  
**Severity:** Warning  
**Description:** Effect parameters are invalid or out of range.

**Common Causes:**
- Intensity value out of range
- Duration value invalid
- Color values invalid

**Solutions:**
1. **Validate Parameters:**
   ```csharp
   intensity = Mathf.Clamp(intensity, 0f, 2f);
   duration = Mathf.Clamp(duration, 0.1f, 10f);
   ```

2. **Use Safe Parameters:**
   ```csharp
   public float SafeIntensity
   {
       get { return Mathf.Clamp(intensity, 0f, 2f); }
   }
   ```

3. **Reset to Defaults:**
   ```csharp
   if (intensity &lt; 0f || intensity &gt; 2f)
   {
       intensity = 1f; // Default intensity
       Debug.LogWarning("Invalid intensity, using default value.");
   }
   ```

## 🛠️ Custom Errors

### CUST_001: Custom Action Failed
**Error Code:** CUST_001  
**Severity:** Error  
**Description:** Custom action execution failed.

**Common Causes:**
- Action method not found
- Invalid parameters passed
- Runtime execution error

**Solutions:**
1. **Validate Action Method:**
   ```csharp
   if (string.IsNullOrEmpty(actionName))
   {
       Debug.LogError("Action name is empty.");
       return;
   }
   ```

2. **Safe Action Execution:**
   ```csharp
   try
   {
       ExecuteAction(actionName, parameters);
   }
   catch (Exception e)
   {
       Debug.LogError($"Custom action failed: {e.Message}");
   }
   ```

3. **Use Fallback Action:**
   ```csharp
   if (!HasAction(actionName))
   {
       Debug.LogWarning($"Action '{actionName}' not found, using fallback.");
       ExecuteFallbackAction();
   }
   ```

### CUST_002: Script Execution Failed
**Error Code:** CUST_002  
**Severity:** Error  
**Description:** Script node execution failed.

**Common Causes:**
- Invalid script syntax
- Missing script dependencies
- Runtime script error

**Solutions:**
1. **Validate Script Syntax:**
   ```csharp
   if (string.IsNullOrEmpty(script))
   {
       Debug.LogError("Script is empty.");
       return;
   }
   ```

2. **Safe Script Execution:**
   ```csharp
   try
   {
       return ExecuteScript(script, parameters);
   }
   catch (Exception e)
   {
       Debug.LogError($"Script execution failed: {e.Message}");
       return null;
   }
   ```

3. **Use Script Validation:**
   ```csharp
   if (!IsValidScript(script))
   {
       Debug.LogError("Invalid script syntax.");
       return;
   }
   ```

### CUST_003: Event Broadcasting Failed
**Error Code:** CUST_003  
**Severity:** Warning  
**Description:** Event broadcasting failed.

**Common Causes:**
- Event target not found
- Event system not initialized
- Invalid event data

**Solutions:**
1. **Validate Event Target:**
   ```csharp
   if (target == null)
   {
       Debug.LogWarning("Event target is null, broadcasting globally.");
       BroadcastEvent(eventName, eventData);
   }
   ```

2. **Safe Event Broadcasting:**
   ```csharp
   try
   {
       BroadcastEvent(eventName, eventData, target);
   }
   catch (Exception e)
   {
       Debug.LogError($"Event broadcasting failed: {e.Message}");
   }
   ```

3. **Use Event Queue:**
   ```csharp
   if (!CanBroadcastEvent())
   {
       eventQueue.Enqueue(new EventData(eventName, eventData, target));
   }
   ```

## 🔧 System Errors

### SYS_001: Graph Executor Not Found
**Error Code:** SYS_001  
**Severity:** Error  
**Description:** Graph executor component is missing.

**Common Causes:**
- Graph executor not assigned
- Component missing from object
- Object not properly initialized

**Solutions:**
1. **Find Graph Executor:**
   ```csharp
   if (graphExecutor == null)
   {
       graphExecutor = GetComponent&lt;GraphExecutor&gt;();
       if (graphExecutor == null)
       {
           graphExecutor = gameObject.AddComponent&lt;GraphExecutor&gt;();
       }
   }
   ```

2. **Validate Graph Executor:**
   ```csharp
   if (graphExecutor == null)
   {
       Debug.LogError("Graph executor is required but not found.");
       return;
   }
   ```

3. **Use Safe Graph Executor:**
   ```csharp
   public GraphExecutor SafeGraphExecutor
   {
       get
       {
           if (graphExecutor == null)
           {
               graphExecutor = GetComponent&lt;GraphExecutor&gt;();
           }
           return graphExecutor;
       }
   }
   ```

### SYS_002: Graph Flow Asset Not Found
**Error Code:** SYS_002  
**Severity:** Error  
**Description:** Graph flow asset is null or missing.

**Common Causes:**
- Asset not assigned
- Asset file missing
- Asset not loaded

**Solutions:**
1. **Load Asset:**
   ```csharp
   if (graphFlowAsset == null)
   {
       graphFlowAsset = Resources.Load&lt;GraphFlowAsset&gt;("DefaultGraphFlow");
   }
   ```

2. **Validate Asset:**
   ```csharp
   if (graphFlowAsset == null)
   {
       Debug.LogError("Graph flow asset is required but not found.");
       return;
   }
   ```

3. **Use Fallback Asset:**
   ```csharp
   public GraphFlowAsset SafeGraphFlowAsset
   {
       get
       {
           if (graphFlowAsset == null)
           {
               graphFlowAsset = CreateDefaultGraphFlow();
           }
           return graphFlowAsset;
       }
   }
   ```

### SYS_003: Memory Allocation Failed
**Error Code:** SYS_003  
**Severity:** Error  
**Description:** Memory allocation failed during animation execution.

**Common Causes:**
- Insufficient memory
- Memory fragmentation
- Large animation data

**Solutions:**
1. **Check Memory Usage:**
   ```csharp
   if (System.GC.GetTotalMemory(false) > maxMemory)
   {
       System.GC.Collect();
   }
   ```

2. **Use Object Pooling:**
   ```csharp
   // Use pooled objects instead of creating new ones
   GameObject pooledObject = ObjectPooler.Instance.GetPooledObject();
   ```

3. **Optimize Memory Usage:**
   ```csharp
   // Use structs instead of classes where possible
   // Limit animation data size
   // Clean up unused references
   ```

## 🚀 Performance Errors

### PERF_001: Frame Rate Too Low
**Error Code:** PERF_001  
**Severity:** Warning  
**Description:** Frame rate is below acceptable threshold.

**Common Causes:**
- Too many concurrent animations
- Complex animation calculations
- Inefficient rendering

**Solutions:**
1. **Limit Concurrent Animations:**
   ```csharp
   if (activeAnimations.Count > maxConcurrentAnimations)
   {
       Debug.LogWarning("Too many concurrent animations, limiting to " + maxConcurrentAnimations);
       // Stop oldest animations
   }
   ```

2. **Optimize Animation Performance:**
   ```csharp
   // Use simpler easing curves
   // Reduce animation frequency
   // Use LOD for distant objects
   ```

3. **Use Performance Monitoring:**
   ```csharp
   if (Time.deltaTime > maxFrameTime)
   {
       Debug.LogWarning("Frame time too high, optimizing animations.");
       OptimizeAnimations();
   }
   ```

### PERF_002: Animation Queue Full
**Error Code:** PERF_002  
**Severity:** Warning  
**Description:** Animation queue has reached maximum capacity.

**Common Causes:**
- Queue size limit reached
- Animations not processing fast enough
- Queue not being cleared

**Solutions:**
1. **Increase Queue Size:**
   ```csharp
   if (animationQueue.Count >= maxQueueSize)
   {
       maxQueueSize *= 2;
       Debug.LogWarning("Animation queue full, increasing size to " + maxQueueSize);
   }
   ```

2. **Process Queue Faster:**
   ```csharp
   // Increase processing frequency
   // Use coroutines for better performance
   // Batch process animations
   ```

3. **Clear Old Animations:**
   ```csharp
   if (animationQueue.Count >= maxQueueSize)
   {
       // Remove oldest animations
       while (animationQueue.Count > maxQueueSize / 2)
       {
           animationQueue.Dequeue();
       }
   }
   ```

## 🎉 Error Prevention Tips

### Best Practices
- **Always validate inputs** before using them
- **Use null checks** for all object references
- **Implement fallback values** for critical parameters
- **Monitor performance** regularly
- **Test error conditions** during development

### Debugging Tools
- **Enable detailed logging** in development builds
- **Use breakpoints** for complex error scenarios
- **Profile memory usage** regularly
- **Monitor frame rates** during testing
- **Test on various devices** and platforms

### Error Recovery
- **Implement graceful degradation** for non-critical errors
- **Use try-catch blocks** for risky operations
- **Provide user feedback** for recoverable errors
- **Log errors** for debugging purposes
- **Restart systems** when necessary

## 🎉 What's Next?

Now that you understand all error codes:

### **📚 Learn More**
- **[Changelog](changelog)** - Version history
- **[FAQ](community/faq)** - Frequently asked questions
- **[Troubleshooting](community/troubleshooting)** - Common issues

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Error Codes mastery achieved!** You're ready to troubleshoot any issue!

**Let's check the changelog!** Check out the [Changelog](changelog) guide!

</div>
