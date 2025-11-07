# Triggers & Conditions

Master the art of creating intelligent, responsive animations with advanced triggers and conditions. This comprehensive guide covers all aspects of trigger systems and conditional logic in Animatix Pro.

## 🎯 Trigger System Fundamentals

Triggers are the foundation of interactive animations, allowing your animations to respond to:
- **User Input** - Mouse clicks, keyboard presses, touch gestures
- **Game Events** - Collisions, state changes, achievements
- **Time-based Events** - Delays, timers, scheduled actions
- **Custom Events** - User-defined triggers for specific needs

### Trigger Types
- **Input Triggers** - User interaction events
- **Gameplay Triggers** - Game state and events
- **Time Triggers** - Temporal and scheduled events
- **Custom Triggers** - User-defined trigger logic

## 🖱️ Input Triggers

### Mouse Triggers
Respond to mouse interactions.

#### On Mouse Click
```
Trigger: Mouse Click
Target: UI Button
Action: Start Animation
```

#### On Mouse Enter
```
Trigger: Mouse Enter
Target: UI Element
Action: Hover Animation
```

#### On Mouse Exit
```
Trigger: Mouse Exit
Target: UI Element
Action: Exit Animation
```

#### On Mouse Drag
```
Trigger: Mouse Drag
Target: Draggable Object
Action: Drag Animation
```

### Keyboard Triggers
Respond to keyboard input.

#### On Key Press
```
Trigger: Key Press
Key: Space
Action: Jump Animation
```

#### On Key Release
```
Trigger: Key Release
Key: Space
Action: Land Animation
```

#### On Key Hold
```
Trigger: Key Hold
Key: Shift
Action: Run Animation
```

### Touch Triggers
Respond to touch interactions.

#### On Touch Start
```
Trigger: Touch Start
Target: Touchable Object
Action: Touch Animation
```

#### On Touch End
```
Trigger: Touch End
Target: Touchable Object
Action: Release Animation
```

#### On Touch Move
```
Trigger: Touch Move
Target: Touchable Object
Action: Move Animation
```

## 🎮 Gameplay Triggers

### Collision Triggers
Respond to physics collisions.

#### On Collision Enter
```
Trigger: Collision Enter
Target: Player
Action: Impact Animation
```

#### On Collision Exit
```
Trigger: Collision Exit
Target: Player
Action: Exit Animation
```

#### On Collision Stay
```
Trigger: Collision Stay
Target: Player
Action: Continuous Animation
```

### State Triggers
Respond to game state changes.

#### On State Change
```
Trigger: State Change
From: Idle
To: Running
Action: Transition Animation
```

#### On Health Change
```
Trigger: Health Change
Threshold: Below 25%
Action: Low Health Animation
```

#### On Score Change
```
Trigger: Score Change
Threshold: Above 1000
Action: Achievement Animation
```

### Event Triggers
Respond to custom game events.

#### On Level Complete
```
Trigger: Level Complete
Action: Victory Animation
```

#### On Power-up Collected
```
Trigger: Power-up Collected
Action: Collection Animation
```

#### On Enemy Defeated
```
Trigger: Enemy Defeated
Action: Defeat Animation
```

## ⏰ Time Triggers

### Timer Triggers
Execute actions after time delays.

#### Delayed Action
```
Trigger: Timer
Duration: 2.0 seconds
Action: Delayed Animation
```

#### Repeating Timer
```
Trigger: Timer
Duration: 1.0 seconds
Repeat: Infinite
Action: Repeating Animation
```

#### Random Timer
```
Trigger: Timer
Duration: Random 1-3 seconds
Action: Random Animation
```

### Schedule Triggers
Execute actions at specific times.

#### Scheduled Action
```
Trigger: Schedule
Time: 10:00 AM
Action: Scheduled Animation
```

#### Daily Trigger
```
Trigger: Daily
Time: Every 24 hours
Action: Daily Animation
```

#### Weekly Trigger
```
Trigger: Weekly
Day: Monday
Action: Weekly Animation
```

## 🎨 Custom Triggers

### Script Triggers
Execute custom script logic.

#### Custom Condition
```csharp
public class CustomTrigger : MonoBehaviour
{
    public bool CheckCondition()
    {
        // Custom logic here
        return someCondition;
    }
}
```

#### Custom Event
```csharp
public class CustomEvent : MonoBehaviour
{
    public void OnCustomEvent()
    {
        // Trigger animation
        GraphExecutorUtil.RunGraph(animationAsset);
    }
}
```

### Data Triggers
Respond to data changes.

#### Variable Change
```
Trigger: Variable Change
Variable: PlayerLevel
Action: Level Up Animation
```

#### Array Change
```
Trigger: Array Change
Array: Inventory
Action: Inventory Update Animation
```

#### Object Change
```
Trigger: Object Change
Object: PlayerStats
Action: Stats Update Animation
```

## 🔍 Condition System

### Boolean Conditions
Simple true/false logic.

#### Basic Condition
```
Condition: IsPlayerAlive
Action: If true, play alive animation
Action: If false, play death animation
```

#### Multiple Conditions
```
Condition: IsPlayerAlive AND HasWeapon
Action: Play combat animation
```

#### Negated Conditions
```
Condition: NOT IsPlayerDead
Action: Play normal animation
```

### Comparison Conditions
Compare values and properties.

#### Value Comparison
```
Condition: PlayerHealth > 50
Action: Play healthy animation
```

#### String Comparison
```
Condition: PlayerName == "Hero"
Action: Play hero animation
```

#### Range Comparison
```
Condition: PlayerLevel >= 10 AND PlayerLevel <= 20
Action: Play mid-level animation
```

### Complex Conditions
Advanced logical operations.

#### AND Logic
```
Condition: IsPlayerAlive AND HasWeapon AND IsInCombat
Action: Play combat animation
```

#### OR Logic
```
Condition: IsPlayerDead OR IsPlayerStunned
Action: Play disabled animation
```

#### Nested Logic
```
Condition: (IsPlayerAlive AND HasWeapon) OR (IsPlayerDead AND HasRespawn)
Action: Play appropriate animation
```

## 🎪 Advanced Trigger Patterns

### Trigger Chains
Sequence multiple triggers.

#### Chain Trigger
```
Trigger 1: Mouse Click
Action: Start Animation 1
Trigger 2: Animation 1 Complete
Action: Start Animation 2
Trigger 3: Animation 2 Complete
Action: Start Animation 3
```

#### Parallel Triggers
```
Trigger 1: Mouse Click
Action: Start Animation A
Trigger 2: Mouse Click
Action: Start Animation B
Trigger 3: Mouse Click
Action: Start Animation C
```

#### Conditional Chains
```
Trigger: Mouse Click
Condition: IsPlayerAlive
Action: If true, play alive animation
Action: If false, play death animation
```

### Trigger Groups
Organize related triggers.

#### UI Group
```
Group: UI Triggers
- Button Click
- Menu Hover
- Slider Change
- Toggle Switch
```

#### Gameplay Group
```
Group: Gameplay Triggers
- Player Movement
- Combat Actions
- Item Collection
- Level Progression
```

#### Audio Group
```
Group: Audio Triggers
- Sound Effects
- Music Changes
- Voice Lines
- Ambient Sounds
```

## 🎯 Trigger Optimization

### Performance Best Practices

#### Efficient Triggering
- **Limit trigger frequency** to prevent spam
- **Use cooldowns** for repeated triggers
- **Disable unused triggers** when not needed
- **Profile trigger performance** regularly

#### Memory Management
- **Use trigger pooling** for dynamic triggers
- **Clean up unused triggers** automatically
- **Limit trigger complexity** on mobile devices
- **Monitor memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler triggers, lower frequency
- **Desktop**: More complex triggers, higher frequency
- **Console**: Optimize for specific hardware
- **VR**: Consider input method differences

## 🔧 Trigger Debugging

### Debug Tools
Built-in debugging features.

#### Trigger Inspector
- **View active triggers** in real-time
- **Monitor trigger frequency** and performance
- **Debug trigger conditions** step by step
- **Log trigger events** for analysis

#### Trigger Profiler
- **Profile trigger performance** over time
- **Identify performance bottlenecks** in triggers
- **Optimize trigger execution** based on data
- **Monitor memory usage** of triggers

#### Trigger Logger
- **Log all trigger events** to console
- **Export trigger logs** for analysis
- **Filter trigger logs** by type or source
- **Track trigger patterns** over time

### Common Issues

#### Trigger Not Firing
- Check if trigger is enabled
- Verify trigger conditions are met
- Ensure target object is active
- Check for conflicting triggers

#### Performance Issues
- Reduce trigger frequency
- Simplify trigger conditions
- Use trigger pooling
- Profile trigger performance

#### Logic Errors
- Debug trigger conditions step by step
- Use trigger logging to trace execution
- Test trigger logic in isolation
- Verify trigger dependencies

## 🎨 Creative Trigger Applications

### Interactive Storytelling
Use triggers for narrative experiences.

#### Dialogue Triggers
```
Trigger: Player approaches NPC
Action: Start dialogue animation
Trigger: Dialogue choice made
Action: Play choice consequence animation
```

#### Environmental Triggers
```
Trigger: Player enters area
Action: Play area-specific animation
Trigger: Player leaves area
Action: Play exit animation
```

#### Cinematic Triggers
```
Trigger: Cutscene starts
Action: Play cinematic animation
Trigger: Cutscene ends
Action: Return to gameplay animation
```

### Gameplay Mechanics
Use triggers for game systems.

#### Combat Triggers
```
Trigger: Player attacks
Action: Play attack animation
Trigger: Enemy hit
Action: Play hit reaction animation
Trigger: Enemy defeated
Action: Play death animation
```

#### Puzzle Triggers
```
Trigger: Puzzle piece placed
Action: Play placement animation
Trigger: Puzzle solved
Action: Play solution animation
```

#### Progression Triggers
```
Trigger: Level completed
Action: Play completion animation
Trigger: Achievement unlocked
Action: Play achievement animation
```

## 🚀 Advanced Techniques

### Dynamic Triggers
Create triggers that adapt to gameplay.

#### Adaptive Triggers
```
Trigger: Player skill level changes
Action: Adjust trigger sensitivity
Trigger: Game difficulty changes
Action: Modify trigger behavior
```

#### Contextual Triggers
```
Trigger: Player in combat
Action: Enable combat triggers
Trigger: Player in exploration
Action: Enable exploration triggers
```

#### Learning Triggers
```
Trigger: Player behavior pattern detected
Action: Adapt trigger response
Trigger: Player preference learned
Action: Customize trigger behavior
```

### Trigger Networks
Create complex trigger relationships.

#### Trigger Dependencies
```
Trigger A: Must complete before Trigger B
Trigger B: Must complete before Trigger C
Trigger C: Final trigger in sequence
```

#### Trigger Hierarchies
```
Parent Trigger: Overall game state
Child Trigger 1: UI state
Child Trigger 2: Audio state
Child Trigger 3: Visual state
```

#### Trigger Synchronization
```
Trigger 1: Start animation A
Trigger 2: Start animation B
Trigger 3: Synchronize A and B
```

## 🎉 What's Next?

Now that you understand triggers and conditions:

### **📚 Learn More**
- **[Events & Actions](events-actions)** - Master event systems
- **[Loops & Variables](loops-variables)** - Control animation flow
- **[State Management](state-management)** - Manage complex states

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game trigger examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Trigger mastery achieved!** You're ready to create intelligent animations!

**Let's explore events!** Check out the [Events & Actions](events-actions) guide!

</div>
