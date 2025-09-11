# Events & Actions

Master the event system to create responsive, interconnected animations that communicate and coordinate seamlessly. This comprehensive guide covers all aspects of events and actions in Animatix Pro.

## 🎭 Event System Fundamentals

Events are the communication backbone of Animatix Pro, enabling:
- **Inter-Animation Communication** - Animations can trigger other animations
- **System Integration** - Connect with external systems and APIs
- **Real-time Coordination** - Synchronize multiple animation sequences
- **Dynamic Behavior** - Create adaptive, responsive animation systems

### Event Types
- **Animation Events** - Events related to animation lifecycle
- **System Events** - Events from Unity and external systems
- **Custom Events** - User-defined events for specific needs
- **Network Events** - Events for multiplayer and networked applications

## 🎬 Animation Events

### Lifecycle Events
Events that occur during animation execution.

#### Animation Started
```
Event: Animation Started
Trigger: When animation begins
Action: Log start time, update UI, notify other systems
```

#### Animation Completed
```
Event: Animation Completed
Trigger: When animation finishes
Action: Clean up resources, trigger next animation, update state
```

#### Animation Paused
```
Event: Animation Paused
Trigger: When animation is paused
Action: Save current state, update UI, notify systems
```

#### Animation Stopped
```
Event: Animation Stopped
Trigger: When animation is stopped
Action: Reset state, clean up resources, notify systems
```

### Progress Events
Events that occur during animation progress.

#### Animation Progress
```
Event: Animation Progress
Trigger: Every frame during animation
Action: Update progress bar, sync other animations, log progress
```

#### Keyframe Reached
```
Event: Keyframe Reached
Trigger: When specific keyframe is reached
Action: Play sound effect, change camera, update UI
```

#### Loop Complete
```
Event: Loop Complete
Trigger: When animation loop finishes
Action: Increment counter, check loop condition, trigger next action
```

## 🎮 System Events

### Unity Events
Events from Unity's built-in systems.

#### Scene Events
```
Event: Scene Loaded
Trigger: When scene finishes loading
Action: Initialize animations, set up triggers, start ambient effects
```

#### GameObject Events
```
Event: GameObject Destroyed
Trigger: When object is destroyed
Action: Clean up animations, stop related effects, update references
```

#### Component Events
```
Event: Component Enabled
Trigger: When component is enabled
Action: Start animations, resume effects, update state
```

### Input Events
Events from user input systems.

#### Mouse Events
```
Event: Mouse Clicked
Trigger: When mouse button is pressed
Action: Play click animation, update UI, trigger game logic
```

#### Keyboard Events
```
Event: Key Pressed
Trigger: When key is pressed
Action: Play key animation, update input state, trigger actions
```

#### Touch Events
```
Event: Touch Started
Trigger: When touch begins
Action: Play touch animation, update touch state, trigger gestures
```

## 🎨 Custom Events

### Event Definition
Creating custom events for specific needs.

#### Simple Event
```csharp
public class SimpleEvent : MonoBehaviour
{
    public UnityEvent OnCustomEvent;
    
    public void TriggerEvent()
    {
        OnCustomEvent.Invoke();
    }
}
```

#### Parameterized Event
```csharp
public class ParameterizedEvent : MonoBehaviour
{
    public UnityEvent<string> OnCustomEvent;
    
    public void TriggerEvent(string parameter)
    {
        OnCustomEvent.Invoke(parameter);
    }
}
```

#### Complex Event
```csharp
public class ComplexEvent : MonoBehaviour
{
    public UnityEvent<EventData> OnCustomEvent;
    
    public void TriggerEvent(EventData data)
    {
        OnCustomEvent.Invoke(data);
    }
}
```

### Event Broadcasting
Sending events to multiple listeners.

#### Direct Broadcasting
```csharp
public class EventBroadcaster : MonoBehaviour
{
    public void BroadcastEvent()
    {
        // Send to specific targets
        EventManager.Instance.SendEvent("CustomEvent", this);
    }
}
```

#### Global Broadcasting
```csharp
public class GlobalBroadcaster : MonoBehaviour
{
    public void BroadcastGlobalEvent()
    {
        // Send to all listeners
        EventManager.Instance.BroadcastEvent("GlobalEvent", this);
    }
}
```

#### Conditional Broadcasting
```csharp
public class ConditionalBroadcaster : MonoBehaviour
{
    public void BroadcastConditionalEvent()
    {
        if (ShouldBroadcast())
        {
            EventManager.Instance.SendEvent("ConditionalEvent", this);
        }
    }
}
```

## 🎯 Action System

### Action Types
Different types of actions that can be executed.

#### Animation Actions
Actions that control animations.

#### Start Animation
```
Action: Start Animation
Target: Animation Graph
Parameters: Animation settings
Result: Animation begins playing
```

#### Stop Animation
```
Action: Stop Animation
Target: Animation Graph
Parameters: Stop settings
Result: Animation stops playing
```

#### Pause Animation
```
Action: Pause Animation
Target: Animation Graph
Parameters: Pause settings
Result: Animation pauses at current position
```

#### Resume Animation
```
Action: Resume Animation
Target: Animation Graph
Parameters: Resume settings
Result: Animation resumes from paused position
```

### System Actions
Actions that control system behavior.

#### Change Scene
```
Action: Change Scene
Target: Scene Manager
Parameters: Scene name, transition type
Result: Scene changes with transition
```

#### Load Asset
```
Action: Load Asset
Target: Asset Manager
Parameters: Asset path, load settings
Result: Asset is loaded into memory
```

#### Save Data
```
Action: Save Data
Target: Data Manager
Parameters: Data to save, save location
Result: Data is saved to storage
```

### UI Actions
Actions that control user interface.

#### Show UI
```
Action: Show UI
Target: UI Element
Parameters: Show animation, duration
Result: UI element becomes visible
```

#### Hide UI
```
Action: Hide UI
Target: UI Element
Parameters: Hide animation, duration
Result: UI element becomes hidden
```

#### Update UI
```
Action: Update UI
Target: UI Element
Parameters: New values, update animation
Result: UI element displays new values
```

## 🎪 Event-Action Patterns

### Event Chains
Sequences of events and actions.

#### Linear Chain
```
Event 1 → Action 1 → Event 2 → Action 2 → Event 3 → Action 3
```

#### Branching Chain
```
Event 1 → Action 1
    ├── Event 2A → Action 2A
    └── Event 2B → Action 2B
```

#### Looping Chain
```
Event 1 → Action 1 → Event 2 → Action 2 → Event 1 (loop)
```

### Event Coordination
Coordinating multiple events and actions.

#### Synchronized Events
```
Event A: Start at time 0
Event B: Start at time 0
Event C: Start at time 0
Action: All events start simultaneously
```

#### Sequential Events
```
Event A: Start at time 0
Event B: Start at time 1
Event C: Start at time 2
Action: Events start in sequence
```

#### Conditional Events
```
Event A: Start if condition X
Event B: Start if condition Y
Event C: Start if condition Z
Action: Events start based on conditions
```

## 🎨 Advanced Event Techniques

### Event Filtering
Filter events based on criteria.

#### Type Filtering
```
Filter: Only animation events
Action: Process only animation-related events
```

#### Source Filtering
```
Filter: Only events from specific source
Action: Process only events from that source
```

#### Parameter Filtering
```
Filter: Only events with specific parameters
Action: Process only events matching criteria
```

### Event Transformation
Transform events before processing.

#### Parameter Transformation
```
Input: Event with parameter A
Transform: Convert A to B
Output: Event with parameter B
```

#### Type Transformation
```
Input: Event of type X
Transform: Convert to type Y
Output: Event of type Y
```

#### Source Transformation
```
Input: Event from source A
Transform: Change source to B
Output: Event from source B
```

### Event Aggregation
Combine multiple events into one.

#### Time-based Aggregation
```
Input: Multiple events over time
Aggregate: Combine events within time window
Output: Single aggregated event
```

#### Count-based Aggregation
```
Input: Multiple events
Aggregate: Combine events until count reached
Output: Single aggregated event
```

#### Condition-based Aggregation
```
Input: Multiple events
Aggregate: Combine events until condition met
Output: Single aggregated event
```

## 🚀 Performance Optimization

### Event System Best Practices

#### Efficient Event Handling
- **Limit event frequency** to prevent spam
- **Use event pooling** for repeated events
- **Filter events early** to reduce processing
- **Profile event performance** regularly

#### Memory Management
- **Clean up unused event listeners** automatically
- **Use weak references** for event subscriptions
- **Limit event data size** to reduce memory usage
- **Monitor memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler events, lower frequency
- **Desktop**: More complex events, higher frequency
- **Console**: Optimize for specific hardware
- **VR**: Consider event latency requirements

## 🔧 Event Debugging

### Debug Tools
Built-in debugging features.

#### Event Inspector
- **View active events** in real-time
- **Monitor event frequency** and performance
- **Debug event flow** step by step
- **Log event data** for analysis

#### Event Profiler
- **Profile event performance** over time
- **Identify performance bottlenecks** in events
- **Optimize event handling** based on data
- **Monitor memory usage** of events

#### Event Logger
- **Log all events** to console
- **Export event logs** for analysis
- **Filter event logs** by type or source
- **Track event patterns** over time

### Common Issues

#### Event Not Firing
- Check if event listener is registered
- Verify event conditions are met
- Ensure event source is active
- Check for conflicting events

#### Performance Issues
- Reduce event frequency
- Simplify event handling
- Use event pooling
- Profile event performance

#### Logic Errors
- Debug event flow step by step
- Use event logging to trace execution
- Test event logic in isolation
- Verify event dependencies

## 🎯 Creative Event Applications

### Interactive Storytelling
Use events for narrative experiences.

#### Dialogue Events
```
Event: Dialogue started
Action: Play dialogue animation
Event: Dialogue choice made
Action: Play choice consequence animation
Event: Dialogue ended
Action: Return to normal animation
```

#### Cinematic Events
```
Event: Cutscene started
Action: Play cinematic animation
Event: Cutscene ended
Action: Return to gameplay animation
```

#### Environmental Events
```
Event: Player entered area
Action: Play area-specific animation
Event: Player left area
Action: Play exit animation
```

### Gameplay Mechanics
Use events for game systems.

#### Combat Events
```
Event: Player attacked
Action: Play attack animation
Event: Enemy hit
Action: Play hit reaction animation
Event: Enemy defeated
Action: Play death animation
```

#### Puzzle Events
```
Event: Puzzle piece placed
Action: Play placement animation
Event: Puzzle solved
Action: Play solution animation
```

#### Progression Events
```
Event: Level completed
Action: Play completion animation
Event: Achievement unlocked
Action: Play achievement animation
```

## 🎉 What's Next?

Now that you understand events and actions:

### **📚 Learn More**
- **[Loops & Variables](loops-variables)** - Control animation flow
- **[State Management](state-management)** - Manage complex states
- **[API Reference](api/graph-executor-util)** - Technical documentation

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game event examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Event mastery achieved!** You're ready to create interconnected animations!

**Let's explore loops!** Check out the [Loops & Variables](loops-variables) guide!

</div>
