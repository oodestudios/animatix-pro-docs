# Node Types Reference

Complete reference guide to all available nodes in Animatix Pro. Learn about each node type, their properties, and how to use them effectively.

## 🎬 Animation Nodes

Animation nodes control the visual properties of GameObjects over time.

### Scale Animation
Animates the scale (size) of an object.

**Properties:**
- **Target Object** - GameObject to animate
- **Start Scale** - Starting scale (Vector3)
- **End Scale** - Ending scale (Vector3)
- **Duration** - Animation duration (float)
- **Easing** - Easing curve type
- **Delay** - Delay before starting (float)

**Use Cases:**
- Button hover effects
- Pop-in animations
- Breathing effects
- Zoom transitions

**Example:**
```
Start Scale: (1, 1, 1)
End Scale: (1.2, 1.2, 1.2)
Duration: 0.3 seconds
Easing: Ease Out Back
```

### Position Animation
Animates the position of an object.

**Properties:**
- **Target Object** - GameObject to animate
- **Start Position** - Starting position (Vector3)
- **End Position** - Ending position (Vector3)
- **Duration** - Animation duration (float)
- **Easing** - Easing curve type
- **Space** - Local or World space

**Use Cases:**
- Slide-in menus
- Moving platforms
- Camera movements
- UI transitions

**Example:**
```
Start Position: (0, -100, 0)
End Position: (0, 0, 0)
Duration: 0.5 seconds
Easing: Ease Out Bounce
```

### Rotation Animation
Animates the rotation of an object.

**Properties:**
- **Target Object** - GameObject to animate
- **Start Rotation** - Starting rotation (Vector3)
- **End Rotation** - Ending rotation (Vector3)
- **Duration** - Animation duration (float)
- **Easing** - Easing curve type
- **Space** - Local or World space

**Use Cases:**
- Spinning objects
- Card flip effects
- Rotating UI elements
- 3D object rotations

**Example:**
```
Start Rotation: (0, 0, 0)
End Rotation: (0, 180, 0)
Duration: 0.8 seconds
Easing: Ease In Out
```

### Color Animation
Animates the color of UI elements or materials.

**Properties:**
- **Target Object** - GameObject to animate
- **Start Color** - Starting color (Color)
- **End Color** - Ending color (Color)
- **Duration** - Animation duration (float)
- **Easing** - Easing curve type
- **Property** - Which color property to animate

**Use Cases:**
- Button state changes
- Highlight effects
- Fade transitions
- Color-coded feedback

**Example:**
```
Start Color: White (1, 1, 1, 1)
End Color: Blue (0, 0.5, 1, 1)
Duration: 0.4 seconds
Easing: Ease In Out
```

### Alpha Animation
Animates the transparency of objects.

**Properties:**
- **Target Object** - GameObject to animate
- **Start Alpha** - Starting alpha (float, 0-1)
- **End Alpha** - Ending alpha (float, 0-1)
- **Duration** - Animation duration (float)
- **Easing** - Easing curve type

**Use Cases:**
- Fade in/out effects
- Ghost effects
- Loading indicators
- Transition overlays

**Example:**
```
Start Alpha: 0
End Alpha: 1
Duration: 0.6 seconds
Easing: Ease In
```

### Size Animation
Animates the size of UI elements (RectTransform).

**Properties:**
- **Target Object** - UI GameObject to animate
- **Start Size** - Starting size (Vector2)
- **End Size** - Ending size (Vector2)
- **Duration** - Animation duration (float)
- **Easing** - Easing curve type

**Use Cases:**
- Expanding panels
- Resizing buttons
- Dynamic layouts
- Responsive UI

**Example:**
```
Start Size: (100, 50)
End Size: (200, 100)
Duration: 0.3 seconds
Easing: Ease Out Back
```

## 🎯 Trigger Nodes

Trigger nodes detect events and start animation sequences.

### On Button Click
Triggers when a UI button is clicked.

**Properties:**
- **Target Button** - Button GameObject to monitor
- **Trigger Type** - Click, Press, Release
- **Cooldown** - Minimum time between triggers
- **One Shot** - Trigger only once

**Use Cases:**
- Button interactions
- Menu navigation
- Game actions
- UI feedback

### On Mouse Enter
Triggers when mouse enters an object's area.

**Properties:**
- **Target Object** - GameObject to monitor
- **Trigger Type** - Enter, Exit, Hover
- **Cooldown** - Minimum time between triggers

**Use Cases:**
- Hover effects
- Tooltip displays
- Interactive feedback
- UI highlights

### On Collision
Triggers when objects collide in 3D space.

**Properties:**
- **Target Object** - GameObject with collider
- **Collision Type** - Enter, Exit, Stay
- **Tag Filter** - Only trigger with specific tags
- **Layer Filter** - Only trigger with specific layers

**Use Cases:**
- Collectible items
- Damage zones
- Interactive objects
- Physics events

### On Timer
Triggers after a specified time delay.

**Properties:**
- **Duration** - Time to wait (float)
- **Loop** - Repeat timer
- **Random Range** - Random duration range

**Use Cases:**
- Delayed actions
- Periodic events
- Countdown timers
- Scheduled animations

### Custom Trigger
User-defined trigger for specific events.

**Properties:**
- **Event Name** - Custom event to listen for
- **Parameters** - Event parameters
- **Condition** - Additional conditions

**Use Cases:**
- Game state changes
- Custom input
- External events
- Complex conditions

## 🎛️ Control Nodes

Control nodes manage the flow and execution of animations.

### Wait
Pauses execution for a specified duration.

**Properties:**
- **Duration** - Time to wait (float)
- **Random Range** - Random duration range
- **Condition** - Optional condition to check

**Use Cases:**
- Delays between animations
- Pacing control
- Synchronization
- Timing coordination

### Condition
Executes different paths based on conditions.

**Properties:**
- **Condition** - Boolean expression to evaluate
- **True Path** - Path when condition is true
- **False Path** - Path when condition is false
- **Parameters** - Variables for condition

**Use Cases:**
- Branching logic
- State-based animations
- Conditional effects
- Dynamic behavior

### Loop
Repeats a sequence of animations.

**Properties:**
- **Loop Count** - Number of repetitions (-1 = infinite)
- **Loop Type** - Once, Ping Pong, Reverse
- **Delay** - Delay between loops
- **Condition** - Condition to break loop

**Use Cases:**
- Repeating animations
- Idle animations
- Continuous effects
- Pattern sequences

### Sequence
Executes nodes in a specific order.

**Properties:**
- **Execution Order** - Order of node execution
- **Wait for Completion** - Wait for each node to complete
- **Parallel Execution** - Execute multiple nodes simultaneously

**Use Cases:**
- Ordered animations
- Step-by-step sequences
- Complex choreography
- Synchronized effects

### Parallel
Executes multiple nodes simultaneously.

**Properties:**
- **Node List** - List of nodes to execute
- **Wait for All** - Wait for all nodes to complete
- **Stop on Error** - Stop if any node fails

**Use Cases:**
- Simultaneous animations
- Complex effects
- Multi-object animations
- Synchronized sequences

### Random
Randomly selects which path to execute.

**Properties:**
- **Path Weights** - Probability weights for each path
- **Seed** - Random seed for reproducible results
- **Exclusive** - Only one path can execute

**Use Cases:**
- Random effects
- Varied animations
- Procedural content
- Surprise elements

## ✨ Effect Nodes

Effect nodes create visual and audio effects.

### Particle Play
Plays particle system effects.

**Properties:**
- **Particle System** - Particle system to play
- **Play Type** - Play, Stop, Restart
- **Duration** - How long to play
- **Position** - Position to play at

**Use Cases:**
- Explosion effects
- Magic spells
- Environmental effects
- Celebration effects

### Audio Play
Plays sound effects or music.

**Properties:**
- **Audio Source** - Audio source to use
- **Audio Clip** - Sound clip to play
- **Volume** - Playback volume
- **Pitch** - Playback pitch

**Use Cases:**
- Sound effects
- Background music
- Audio feedback
- Ambient sounds

### Screen Shake
Creates camera shake effects.

**Properties:**
- **Intensity** - Shake intensity
- **Duration** - Shake duration
- **Frequency** - Shake frequency
- **Direction** - Shake direction

**Use Cases:**
- Impact effects
- Earthquake effects
- Explosion feedback
- Dramatic emphasis

### Flash
Creates screen flash effects.

**Properties:**
- **Color** - Flash color
- **Intensity** - Flash intensity
- **Duration** - Flash duration
- **Fade Type** - Fade in/out type

**Use Cases:**
- Camera flashes
- Explosion effects
- Transition effects
- Dramatic moments

### Fade
Creates screen fade effects.

**Properties:**
- **Color** - Fade color
- **Alpha** - Target alpha
- **Duration** - Fade duration
- **Fade Type** - Fade in/out

**Use Cases:**
- Scene transitions
- Loading screens
- Dramatic effects
- UI overlays

### Blur
Creates screen blur effects.

**Properties:**
- **Intensity** - Blur intensity
- **Duration** - Blur duration
- **Blur Type** - Gaussian, Motion, Radial
- **Direction** - Blur direction

**Use Cases:**
- Focus effects
- Transition effects
- Depth of field
- Visual emphasis

## 🛠️ Custom Nodes

Custom nodes allow you to extend Animatix Pro with your own functionality.

### Custom Action
Execute custom code or actions.

**Properties:**
- **Action Name** - Name of the action
- **Parameters** - Input parameters
- **Return Value** - Output value
- **Script Reference** - Script to execute

**Use Cases:**
- Custom game logic
- External API calls
- Complex calculations
- Integration with other systems

### Custom Condition
Evaluate custom conditions.

**Properties:**
- **Condition Name** - Name of the condition
- **Parameters** - Input parameters
- **Return Type** - Boolean result
- **Script Reference** - Script to execute

**Use Cases:**
- Complex game state checks
- External data validation
- Custom logic evaluation
- Integration conditions

### Script Node
Execute arbitrary scripts.

**Properties:**
- **Script** - Script code to execute
- **Language** - Scripting language
- **Parameters** - Input parameters
- **Return Value** - Output value

**Use Cases:**
- Quick scripting
- Prototype development
- Custom logic
- Experimental features

### Event Node
Send custom events to other systems.

**Properties:**
- **Event Name** - Name of the event
- **Event Data** - Data to send
- **Target** - Event target
- **Priority** - Event priority

**Use Cases:**
- System communication
- Event broadcasting
- Integration points
- Custom messaging

## 🎨 Node Styling

Customize the appearance of nodes for better organization.

### Node Colors
- **Animation Nodes** - Blue theme
- **Trigger Nodes** - Green theme
- **Control Nodes** - Orange theme
- **Effect Nodes** - Purple theme
- **Custom Nodes** - Gray theme

### Node Icons
Each node type has a unique icon for easy identification:
- **Scale** - Resize icon
- **Position** - Move icon
- **Rotation** - Rotate icon
- **Color** - Palette icon
- **Alpha** - Transparency icon
- **Size** - Dimensions icon

### Node Labels
- **Display Name** - User-friendly name
- **Node Type** - Technical type name
- **Status** - Current status (Active, Inactive, Error)
- **Duration** - Animation duration

## 🚀 Best Practices

### Node Organization
- **Group related nodes** together
- **Use descriptive names** for nodes
- **Color-code by function** for easy identification
- **Keep graphs clean** and well-organized

### Performance
- **Limit concurrent animations** for better performance
- **Use appropriate durations** for smooth animations
- **Test on target devices** regularly
- **Profile memory usage** during development

### Debugging
- **Use debug mode** to see node execution
- **Add breakpoints** for complex logic
- **Log important events** for troubleshooting
- **Test edge cases** thoroughly

## 🎉 What's Next?

Now that you understand all node types:

### **📚 Learn More**
- **[Connections & Flow](connections-flow)** - Master node connections
- **[Animation Types](animation-types/ui-animations)** - Explore different animations
- **[Advanced Features](advanced-features/triggers-conditions)** - Complex workflows

### **🎯 Start Creating**
- **[UI/UX Animations](examples/ui-ux-animations)** - Complete UI examples
- **[Camera Animations](examples/cinematic-camera)** - Cinematic sequences
- **[Custom Actions](developer-guide/custom-actions)** - Create your own functionality

---

<div align="center">

**🎊 Node mastery achieved!** You're ready to build complex animations!

**Let's learn about connections!** Check out the [Connections & Flow](connections-flow) guide!

</div>
