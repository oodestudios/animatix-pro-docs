# Node Reference

Complete reference guide for all Animatix Pro nodes. This comprehensive guide provides detailed information about every node type, their properties, and usage examples.

## 🎬 Animation Nodes

### Scale Animation Node
Animates the scale (size) of an object.

**Properties:**
- **Target Object** (GameObject) - The object to animate
- **Start Scale** (Vector3) - Starting scale values
- **End Scale** (Vector3) - Ending scale values
- **Duration** (float) - Animation duration in seconds
- **Easing** (EasingType) - Easing curve type
- **Delay** (float) - Delay before animation starts
- **Space** (Space) - Local or World space

**Usage Example:**
```csharp
// Scale a button from 1x to 1.2x size
ScaleAnimationNode scaleNode = new ScaleAnimationNode();
scaleNode.TargetObject = buttonGameObject;
scaleNode.StartScale = Vector3.one;
scaleNode.EndScale = Vector3.one * 1.2f;
scaleNode.Duration = 0.3f;
scaleNode.Easing = EasingType.EaseOutBack;
```

### Position Animation Node
Animates the position of an object.

**Properties:**
- **Target Object** (GameObject) - The object to animate
- **Start Position** (Vector3) - Starting position
- **End Position** (Vector3) - Ending position
- **Duration** (float) - Animation duration in seconds
- **Easing** (EasingType) - Easing curve type
- **Delay** (float) - Delay before animation starts
- **Space** (Space) - Local or World space

**Usage Example:**
```csharp
// Move a UI element from off-screen to center
PositionAnimationNode positionNode = new PositionAnimationNode();
positionNode.TargetObject = uiElement;
positionNode.StartPosition = new Vector3(-1000, 0, 0);
positionNode.EndPosition = Vector3.zero;
positionNode.Duration = 0.5f;
positionNode.Easing = EasingType.EaseOutBounce;
```

### Rotation Animation Node
Animates the rotation of an object.

**Properties:**
- **Target Object** (GameObject) - The object to animate
- **Start Rotation** (Vector3) - Starting rotation (Euler angles)
- **End Rotation** (Vector3) - Ending rotation (Euler angles)
- **Duration** (float) - Animation duration in seconds
- **Easing** (EasingType) - Easing curve type
- **Delay** (float) - Delay before animation starts
- **Space** (Space) - Local or World space

**Usage Example:**
```csharp
// Rotate a card 180 degrees
RotationAnimationNode rotationNode = new RotationAnimationNode();
rotationNode.TargetObject = cardGameObject;
rotationNode.StartRotation = Vector3.zero;
rotationNode.EndRotation = new Vector3(0, 180, 0);
rotationNode.Duration = 0.8f;
rotationNode.Easing = EasingType.EaseInOut;
```

### Color Animation Node
Animates the color of UI elements or materials.

**Properties:**
- **Target Object** (GameObject) - The object to animate
- **Start Color** (Color) - Starting color
- **End Color** (Color) - Ending color
- **Duration** (float) - Animation duration in seconds
- **Easing** (EasingType) - Easing curve type
- **Delay** (float) - Delay before animation starts
- **Property** (ColorProperty) - Which color property to animate

**Usage Example:**
```csharp
// Fade a UI element from transparent to opaque
ColorAnimationNode colorNode = new ColorAnimationNode();
colorNode.TargetObject = uiElement;
colorNode.StartColor = new Color(1, 1, 1, 0);
colorNode.EndColor = new Color(1, 1, 1, 1);
colorNode.Duration = 0.6f;
colorNode.Easing = EasingType.EaseIn;
```

### Alpha Animation Node
Animates the transparency of objects.

**Properties:**
- **Target Object** (GameObject) - The object to animate
- **Start Alpha** (float) - Starting alpha value (0-1)
- **End Alpha** (float) - Ending alpha value (0-1)
- **Duration** (float) - Animation duration in seconds
- **Easing** (EasingType) - Easing curve type
- **Delay** (float) - Delay before animation starts

**Usage Example:**
```csharp
// Fade out an object
AlphaAnimationNode alphaNode = new AlphaAnimationNode();
alphaNode.TargetObject = gameObject;
alphaNode.StartAlpha = 1f;
alphaNode.EndAlpha = 0f;
alphaNode.Duration = 1f;
alphaNode.Easing = EasingType.EaseOut;
```

### Size Animation Node
Animates the size of UI elements (RectTransform).

**Properties:**
- **Target Object** (GameObject) - The UI object to animate
- **Start Size** (Vector2) - Starting size
- **End Size** (Vector2) - Ending size
- **Duration** (float) - Animation duration in seconds
- **Easing** (EasingType) - Easing curve type
- **Delay** (float) - Delay before animation starts

**Usage Example:**
```csharp
// Resize a button
SizeAnimationNode sizeNode = new SizeAnimationNode();
sizeNode.TargetObject = buttonGameObject;
sizeNode.StartSize = new Vector2(100, 50);
sizeNode.EndSize = new Vector2(200, 100);
sizeNode.Duration = 0.3f;
sizeNode.Easing = EasingType.EaseOutBack;
```

## 🎯 Trigger Nodes

### On Button Click Node
Triggers when a UI button is clicked.

**Properties:**
- **Target Button** (Button) - The button to monitor
- **Trigger Type** (ButtonTriggerType) - Click, Press, or Release
- **Cooldown** (float) - Minimum time between triggers
- **One Shot** (bool) - Trigger only once

**Usage Example:**
```csharp
// Trigger on button click
OnButtonClickNode buttonNode = new OnButtonClickNode();
buttonNode.TargetButton = myButton;
buttonNode.TriggerType = ButtonTriggerType.Click;
buttonNode.Cooldown = 0.5f;
buttonNode.OneShot = false;
```

### On Mouse Enter Node
Triggers when mouse enters an object's area.

**Properties:**
- **Target Object** (GameObject) - The object to monitor
- **Trigger Type** (MouseTriggerType) - Enter, Exit, or Hover
- **Cooldown** (float) - Minimum time between triggers

**Usage Example:**
```csharp
// Trigger on mouse hover
OnMouseEnterNode mouseNode = new OnMouseEnterNode();
mouseNode.TargetObject = hoverObject;
mouseNode.TriggerType = MouseTriggerType.Enter;
mouseNode.Cooldown = 0.1f;
```

### On Collision Node
Triggers when objects collide in 3D space.

**Properties:**
- **Target Object** (GameObject) - The object with collider
- **Collision Type** (CollisionTriggerType) - Enter, Exit, or Stay
- **Tag Filter** (string) - Only trigger with specific tags
- **Layer Filter** (LayerMask) - Only trigger with specific layers

**Usage Example:**
```csharp
// Trigger on collision with player
OnCollisionNode collisionNode = new OnCollisionNode();
collisionNode.TargetObject = triggerObject;
collisionNode.CollisionType = CollisionTriggerType.Enter;
collisionNode.TagFilter = "Player";
```

### On Timer Node
Triggers after a specified time delay.

**Properties:**
- **Duration** (float) - Time to wait in seconds
- **Loop** (bool) - Repeat timer
- **Random Range** (Vector2) - Random duration range

**Usage Example:**
```csharp
// Trigger every 5 seconds
OnTimerNode timerNode = new OnTimerNode();
timerNode.Duration = 5f;
timerNode.Loop = true;
timerNode.RandomRange = new Vector2(4f, 6f);
```

### Custom Trigger Node
User-defined trigger for specific events.

**Properties:**
- **Event Name** (string) - Custom event to listen for
- **Parameters** (object[]) - Event parameters
- **Condition** (string) - Additional conditions

**Usage Example:**
```csharp
// Custom trigger for game events
CustomTriggerNode customNode = new CustomTriggerNode();
customNode.EventName = "PlayerLevelUp";
customNode.Parameters = new object[] { 5 };
customNode.Condition = "Level > 10";
```

## 🎛️ Control Nodes

### Wait Node
Pauses execution for a specified duration.

**Properties:**
- **Duration** (float) - Time to wait in seconds
- **Random Range** (Vector2) - Random duration range
- **Condition** (string) - Optional condition to check

**Usage Example:**
```csharp
// Wait for 2 seconds
WaitNode waitNode = new WaitNode();
waitNode.Duration = 2f;
waitNode.RandomRange = new Vector2(1.5f, 2.5f);
```

### Condition Node
Executes different paths based on conditions.

**Properties:**
- **Condition** (string) - Boolean expression to evaluate
- **True Path** (Node[]) - Path when condition is true
- **False Path** (Node[]) - Path when condition is false
- **Parameters** (Dictionary&lt;string, object&gt;) - Variables for condition

**Usage Example:**
```csharp
// Conditional execution
ConditionNode conditionNode = new ConditionNode();
conditionNode.Condition = "PlayerHealth > 50";
conditionNode.TruePath = new Node[] { healAnimation };
conditionNode.FalsePath = new Node[] { damageAnimation };
```

### Loop Node
Repeats a sequence of animations.

**Properties:**
- **Loop Count** (int) - Number of repetitions (-1 = infinite)
- **Loop Type** (LoopType) - Once, Ping Pong, or Reverse
- **Delay** (float) - Delay between loops
- **Condition** (string) - Condition to break loop

**Usage Example:**
```csharp
// Loop animation 3 times
LoopNode loopNode = new LoopNode();
loopNode.LoopCount = 3;
loopNode.LoopType = LoopType.Once;
loopNode.Delay = 0.5f;
```

### Sequence Node
Executes nodes in a specific order.

**Properties:**
- **Execution Order** (Node[]) - Order of node execution
- **Wait for Completion** (bool) - Wait for each node to complete
- **Parallel Execution** (bool) - Execute multiple nodes simultaneously

**Usage Example:**
```csharp
// Execute animations in sequence
SequenceNode sequenceNode = new SequenceNode();
sequenceNode.ExecutionOrder = new Node[] { 
    scaleAnimation, 
    rotationAnimation, 
    colorAnimation 
};
sequenceNode.WaitForCompletion = true;
```

### Parallel Node
Executes multiple nodes simultaneously.

**Properties:**
- **Node List** (Node[]) - List of nodes to execute
- **Wait for All** (bool) - Wait for all nodes to complete
- **Stop on Error** (bool) - Stop if any node fails

**Usage Example:**
```csharp
// Execute animations in parallel
ParallelNode parallelNode = new ParallelNode();
parallelNode.NodeList = new Node[] { 
    scaleAnimation, 
    rotationAnimation, 
    colorAnimation 
};
parallelNode.WaitForAll = true;
```

### Random Node
Randomly selects which path to execute.

**Properties:**
- **Path Weights** (float[]) - Probability weights for each path
- **Seed** (int) - Random seed for reproducible results
- **Exclusive** (bool) - Only one path can execute

**Usage Example:**
```csharp
// Random animation selection
RandomNode randomNode = new RandomNode();
randomNode.PathWeights = new float[] { 0.5f, 0.3f, 0.2f };
randomNode.Seed = 12345;
randomNode.Exclusive = true;
```

## ✨ Effect Nodes

### Particle Play Node
Plays particle system effects.

**Properties:**
- **Particle System** (ParticleSystem) - Particle system to play
- **Play Type** (ParticlePlayType) - Play, Stop, or Restart
- **Duration** (float) - How long to play
- **Position** (Vector3) - Position to play at

**Usage Example:**
```csharp
// Play particle effect
ParticlePlayNode particleNode = new ParticlePlayNode();
particleNode.ParticleSystem = explosionParticles;
particleNode.PlayType = ParticlePlayType.Play;
particleNode.Duration = 2f;
particleNode.Position = transform.position;
```

### Audio Play Node
Plays sound effects or music.

**Properties:**
- **Audio Source** (AudioSource) - Audio source to use
- **Audio Clip** (AudioClip) - Sound clip to play
- **Volume** (float) - Playback volume
- **Pitch** (float) - Playback pitch

**Usage Example:**
```csharp
// Play sound effect
AudioPlayNode audioNode = new AudioPlayNode();
audioNode.AudioSource = audioSource;
audioNode.AudioClip = clickSound;
audioNode.Volume = 0.8f;
audioNode.Pitch = 1.2f;
```

### Screen Shake Node
Creates camera shake effects.

**Properties:**
- **Intensity** (float) - Shake intensity
- **Duration** (float) - Shake duration
- **Frequency** (float) - Shake frequency
- **Direction** (Vector3) - Shake direction

**Usage Example:**
```csharp
// Create screen shake
ScreenShakeNode shakeNode = new ScreenShakeNode();
shakeNode.Intensity = 0.5f;
shakeNode.Duration = 0.3f;
shakeNode.Frequency = 10f;
shakeNode.Direction = Vector3.one;
```

### Flash Node
Creates screen flash effects.

**Properties:**
- **Color** (Color) - Flash color
- **Intensity** (float) - Flash intensity
- **Duration** (float) - Flash duration
- **Fade Type** (FadeType) - Fade in/out type

**Usage Example:**
```csharp
// Create screen flash
FlashNode flashNode = new FlashNode();
flashNode.Color = Color.white;
flashNode.Intensity = 1f;
flashNode.Duration = 0.2f;
flashNode.FadeType = FadeType.FadeOut;
```

### Fade Node
Creates screen fade effects.

**Properties:**
- **Color** (Color) - Fade color
- **Alpha** (float) - Target alpha
- **Duration** (float) - Fade duration
- **Fade Type** (FadeType) - Fade in/out

**Usage Example:**
```csharp
// Fade to black
FadeNode fadeNode = new FadeNode();
fadeNode.Color = Color.black;
fadeNode.Alpha = 1f;
fadeNode.Duration = 1f;
fadeNode.FadeType = FadeType.FadeIn;
```

### Blur Node
Creates screen blur effects.

**Properties:**
- **Intensity** (float) - Blur intensity
- **Duration** (float) - Blur duration
- **Blur Type** (BlurType) - Gaussian, Motion, or Radial
- **Direction** (Vector2) - Blur direction

**Usage Example:**
```csharp
// Create motion blur
BlurNode blurNode = new BlurNode();
blurNode.Intensity = 0.8f;
blurNode.Duration = 0.5f;
blurNode.BlurType = BlurType.Motion;
blurNode.Direction = Vector2.right;
```

## 🛠️ Custom Nodes

### Custom Action Node
Execute custom code or actions.

**Properties:**
- **Action Name** (string) - Name of the action
- **Parameters** (object[]) - Input parameters
- **Return Value** (object) - Output value
- **Script Reference** (MonoBehaviour) - Script to execute

**Usage Example:**
```csharp
// Custom action node
CustomActionNode actionNode = new CustomActionNode();
actionNode.ActionName = "SaveGame";
actionNode.Parameters = new object[] { "saveSlot1" };
actionNode.ScriptReference = gameManager;
```

### Custom Condition Node
Evaluate custom conditions.

**Properties:**
- **Condition Name** (string) - Name of the condition
- **Parameters** (object[]) - Input parameters
- **Return Type** (Type) - Boolean result
- **Script Reference** (MonoBehaviour) - Script to execute

**Usage Example:**
```csharp
// Custom condition node
CustomConditionNode conditionNode = new CustomConditionNode();
conditionNode.ConditionName = "IsPlayerAlive";
conditionNode.Parameters = new object[] { player };
conditionNode.ReturnType = typeof(bool);
conditionNode.ScriptReference = gameManager;
```

### Script Node
Execute arbitrary scripts.

**Properties:**
- **Script** (string) - Script code to execute
- **Language** (ScriptLanguage) - Scripting language
- **Parameters** (Dictionary&lt;string, object&gt;) - Input parameters
- **Return Value** (object) - Output value

**Usage Example:**
```csharp
// Script execution node
ScriptNode scriptNode = new ScriptNode();
scriptNode.Script = "return player.health > 50;";
scriptNode.Language = ScriptLanguage.CSharp;
scriptNode.Parameters = new Dictionary&lt;string, object&gt; { { "player", player } };
```

### Event Node
Send custom events to other systems.

**Properties:**
- **Event Name** (string) - Name of the event
- **Event Data** (object) - Data to send
- **Target** (GameObject) - Event target
- **Priority** (int) - Event priority

**Usage Example:**
```csharp
// Event broadcasting node
EventNode eventNode = new EventNode();
eventNode.EventName = "PlayerDied";
eventNode.EventData = new { playerId = 1, cause = "Enemy" };
eventNode.Target = gameManager;
eventNode.Priority = 10;
```

## 🎨 Node Styling

### Node Colors
Each node type has a specific color theme:
- **Animation Nodes** - Blue (#2196F3)
- **Trigger Nodes** - Green (#4CAF50)
- **Control Nodes** - Orange (#FF9800)
- **Effect Nodes** - Purple (#9C27B0)
- **Custom Nodes** - Gray (#607D8B)

### Node Icons
Each node type has a unique icon:
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

## 🚀 Performance Tips

### Node Optimization
- **Use appropriate durations** for smooth animations
- **Limit concurrent nodes** to prevent frame drops
- **Use efficient easing curves** for better performance
- **Profile node performance** regularly

### Memory Management
- **Clean up unused nodes** automatically
- **Use node pooling** for frequently created nodes
- **Limit node complexity** on mobile devices
- **Monitor memory usage** during development

## 🎉 What's Next?

Now that you understand all node types:

### **📚 Learn More**
- **[Properties Reference](properties-reference)** - Complete properties guide
- **[Error Codes](error-codes)** - Troubleshooting guide
- **[Changelog](changelog)** - Version history

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Node Reference mastery achieved!** You're ready to use all node types!

**Let's explore properties!** Check out the [Properties Reference](properties-reference) guide!

</div>
