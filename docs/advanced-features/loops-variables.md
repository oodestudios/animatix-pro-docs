# Loops & Variables

Master the art of creating dynamic, data-driven animations with loops and variables. This comprehensive guide covers all aspects of loop control and variable management in Animatix Pro.

## 🔄 Loop System Fundamentals

Loops are essential for creating:
- **Repeating Animations** - Continuous or periodic effects
- **Data-driven Animations** - Animations that respond to changing data
- **Procedural Content** - Generated animations based on algorithms
- **Interactive Sequences** - User-controlled animation loops

### Loop Types
- **Count Loops** - Repeat a specific number of times
- **Condition Loops** - Repeat while a condition is true
- **Infinite Loops** - Repeat indefinitely until stopped
- **Nested Loops** - Loops within loops for complex patterns

## 🔢 Count Loops

### Basic Count Loop
Repeat animation a specific number of times.

#### Simple Count
```
Loop: Count
Iterations: 5
Action: Play animation
Result: Animation plays 5 times
```

#### Count with Delay
```
Loop: Count
Iterations: 3
Delay: 1.0 seconds
Action: Play animation
Result: Animation plays 3 times with 1-second delays
```

#### Count with Variation
```
Loop: Count
Iterations: 4
Variation: Random delay 0.5-1.5 seconds
Action: Play animation
Result: Animation plays 4 times with random delays
```

### Advanced Count Loops
More sophisticated counting mechanisms.

#### Count Down
```
Loop: Count Down
Start: 10
End: 0
Action: Play countdown animation
Result: Animation plays 10 times counting down
```

#### Count Up
```
Loop: Count Up
Start: 0
End: 100
Step: 10
Action: Play progress animation
Result: Animation plays 10 times counting up
```

#### Count Range
```
Loop: Count Range
Start: 5
End: 15
Step: 2
Action: Play animation
Result: Animation plays 6 times (5, 7, 9, 11, 13, 15)
```

## 🔁 Condition Loops

### While Loops
Repeat while a condition is true.

#### Basic While Loop
```
Loop: While
Condition: IsPlayerAlive
Action: Play breathing animation
Result: Animation plays while player is alive
```

#### While with Timeout
```
Loop: While
Condition: IsPlayerAlive
Timeout: 60 seconds
Action: Play breathing animation
Result: Animation plays while player is alive, max 60 seconds
```

#### While with Counter
```
Loop: While
Condition: Counter < 10
Action: Play animation, increment counter
Result: Animation plays up to 10 times
```

### Do-While Loops
Execute at least once, then check condition.

#### Basic Do-While
```
Loop: Do-While
Action: Play animation
Condition: ShouldContinue
Result: Animation plays at least once, then continues if condition is true
```

#### Do-While with Validation
```
Loop: Do-While
Action: Play animation, validate result
Condition: ResultIsValid
Result: Animation plays until valid result is achieved
```

## ♾️ Infinite Loops

### Continuous Loops
Loops that run indefinitely.

#### Basic Infinite Loop
```
Loop: Infinite
Action: Play animation
Result: Animation plays continuously
```

#### Infinite with Pause
```
Loop: Infinite
Action: Play animation
Pause: 2.0 seconds between iterations
Result: Animation plays continuously with 2-second pauses
```

#### Infinite with Variation
```
Loop: Infinite
Action: Play animation
Variation: Random pause 1-3 seconds
Result: Animation plays continuously with random pauses
```

### Controlled Infinite Loops
Infinite loops with external control.

#### Infinite with Stop Condition
```
Loop: Infinite
Action: Play animation
Stop Condition: User presses stop button
Result: Animation plays until user stops it
```

#### Infinite with Time Limit
```
Loop: Infinite
Action: Play animation
Time Limit: 300 seconds
Result: Animation plays for maximum 5 minutes
```

#### Infinite with Resource Limit
```
Loop: Infinite
Action: Play animation
Resource Limit: Memory usage < 100MB
Result: Animation plays until memory limit reached
```

## 🎯 Nested Loops

### Simple Nested Loops
Loops within loops.

#### Outer and Inner Loops
```
Outer Loop: Count 3
  Inner Loop: Count 5
    Action: Play animation
Result: Animation plays 15 times (3 × 5)
```

#### Nested with Different Types
```
Outer Loop: While condition
  Inner Loop: Count 10
    Action: Play animation
Result: Outer loop continues while condition is true, inner loop plays 10 times each iteration
```

### Complex Nested Loops
Advanced nested loop patterns.

#### Multi-level Nested
```
Level 1: Count 2
  Level 2: Count 3
    Level 3: Count 4
      Action: Play animation
Result: Animation plays 24 times (2 × 3 × 4)
```

#### Nested with Conditions
```
Outer Loop: While game is running
  Inner Loop: While player is alive
    Action: Play animation
Result: Animation plays while both conditions are true
```

## 📊 Variable System

### Variable Types
Different types of variables for different needs.

#### Integer Variables
```
Variable: Counter
Type: Integer
Value: 0
Action: Increment by 1 each loop
```

#### Float Variables
```
Variable: Progress
Type: Float
Value: 0.0
Action: Increment by 0.1 each loop
```

#### String Variables
```
Variable: Message
Type: String
Value: "Hello"
Action: Append text each loop
```

#### Boolean Variables
```
Variable: IsComplete
Type: Boolean
Value: false
Action: Set to true when condition met
```

### Variable Operations
Performing operations on variables.

#### Arithmetic Operations
```
Variable: Count
Operation: Add 1
Result: Count = Count + 1
```

#### Comparison Operations
```
Variable: Score
Operation: Compare with 100
Result: Score > 100
```

#### String Operations
```
Variable: Text
Operation: Concatenate " World"
Result: Text = Text + " World"
```

#### Boolean Operations
```
Variable: Flag1, Flag2
Operation: AND
Result: Flag1 AND Flag2
```

## 🎨 Loop Patterns

### Animation Patterns
Common animation loop patterns.

#### Breathing Pattern
```
Loop: Infinite
Action: Scale up (1.0 → 1.1)
Duration: 2.0 seconds
Action: Scale down (1.1 → 1.0)
Duration: 2.0 seconds
Result: Continuous breathing effect
```

#### Pulsing Pattern
```
Loop: Infinite
Action: Scale up (1.0 → 1.2)
Duration: 0.5 seconds
Action: Scale down (1.2 → 1.0)
Duration: 0.5 seconds
Result: Continuous pulsing effect
```

#### Rotating Pattern
```
Loop: Infinite
Action: Rotate (0° → 360°)
Duration: 4.0 seconds
Result: Continuous rotation
```

### Data Patterns
Common data-driven loop patterns.

#### Progress Bar
```
Loop: Count
Iterations: 100
Action: Update progress bar
Variable: Progress (0 → 100)
Result: Progress bar fills over time
```

#### Countdown Timer
```
Loop: Count Down
Start: 60
End: 0
Action: Update timer display
Variable: Time (60 → 0)
Result: Countdown from 60 to 0
```

#### Random Generation
```
Loop: Count
Iterations: 10
Action: Generate random number
Variable: RandomValue (0-100)
Result: 10 random numbers generated
```

## 🎪 Advanced Loop Techniques

### Loop Control
Advanced control mechanisms.

#### Break Statement
```
Loop: Count 100
Action: Play animation
Condition: If user presses stop
Action: Break loop
Result: Loop stops when user presses stop
```

#### Continue Statement
```
Loop: Count 100
Condition: If animation should skip
Action: Continue to next iteration
Result: Loop skips current iteration
```

#### Return Statement
```
Loop: Count 100
Condition: If target found
Action: Return from loop
Result: Loop exits when target is found
```

### Loop Optimization
Optimizing loop performance.

#### Early Exit
```
Loop: Count 1000
Condition: If result found
Action: Exit loop early
Result: Loop stops as soon as result is found
```

#### Loop Unrolling
```
Loop: Count 4
Action: Play animation 4 times
Optimization: Unroll to 4 separate actions
Result: Better performance for small loops
```

#### Loop Fusion
```
Loop 1: Count 10, Action A
Loop 2: Count 10, Action B
Fusion: Single loop with both actions
Result: Better performance by combining loops
```

## 🚀 Performance Optimization

### Loop Performance Best Practices

#### Efficient Loops
- **Minimize loop overhead** by reducing unnecessary operations
- **Use appropriate loop types** for different scenarios
- **Avoid nested loops** when possible
- **Profile loop performance** regularly

#### Memory Management
- **Reuse variables** when possible
- **Clear unused variables** after loops
- **Use efficient data structures** for loop data
- **Monitor memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler loops, lower iteration counts
- **Desktop**: More complex loops, higher iteration counts
- **Console**: Optimize for specific hardware
- **VR**: Consider frame rate requirements

## 🔧 Loop Debugging

### Debug Tools
Built-in debugging features.

#### Loop Inspector
- **View active loops** in real-time
- **Monitor loop variables** and their values
- **Debug loop conditions** step by step
- **Log loop execution** for analysis

#### Loop Profiler
- **Profile loop performance** over time
- **Identify performance bottlenecks** in loops
- **Optimize loop execution** based on data
- **Monitor memory usage** of loops

#### Loop Logger
- **Log all loop events** to console
- **Export loop logs** for analysis
- **Filter loop logs** by type or variable
- **Track loop patterns** over time

### Common Issues

#### Infinite Loops
- Check loop conditions for proper exit
- Use timeouts or resource limits
- Add break conditions for user control
- Test loop logic thoroughly

#### Performance Issues
- Reduce loop iteration counts
- Optimize loop operations
- Use efficient loop types
- Profile loop performance

#### Logic Errors
- Debug loop conditions step by step
- Use loop logging to trace execution
- Test loop logic in isolation
- Verify loop variables and operations

## 🎯 Creative Loop Applications

### Interactive Patterns
Use loops for interactive experiences.

#### User Input Loops
```
Loop: While user is typing
Action: Play typing animation
Variable: TypingSpeed (based on user input)
Result: Animation speed adapts to user typing
```

#### Gesture Recognition Loops
```
Loop: While gesture is active
Action: Play gesture animation
Variable: GestureType (based on user input)
Result: Different animations for different gestures
```

#### Voice Recognition Loops
```
Loop: While voice is detected
Action: Play voice animation
Variable: VoiceLevel (based on audio input)
Result: Animation intensity based on voice level
```

### Procedural Generation
Use loops for procedural content.

#### Procedural Animation
```
Loop: Count 100
Action: Generate random animation
Variable: AnimationType (random selection)
Result: 100 different random animations
```

#### Procedural UI
```
Loop: Count 20
Action: Create UI element
Variable: ElementType (based on data)
Result: 20 different UI elements created
```

#### Procedural Effects
```
Loop: Count 50
Action: Create particle effect
Variable: EffectType (random selection)
Result: 50 different particle effects
```

## 🎉 What's Next?

Now that you understand loops and variables:

### **📚 Learn More**
- **[State Management](state-management)** - Manage complex states
- **[API Reference](api/graph-executor-util)** - Technical documentation
- **[Developer Guide](developer-guide/custom-actions)** - Create custom functionality

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game loop examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Loop mastery achieved!** You're ready to create dynamic animations!

**Let's manage states!** Check out the [State Management](state-management) guide!

</div>
