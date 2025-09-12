# Properties Reference

Complete reference guide for all Animatix Pro properties and settings. This comprehensive guide provides detailed information about every property, their types, ranges, and usage examples.

## 🎬 Animation Properties

### Scale Properties
Properties for scale animation nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The object to animate
- **Required:** Yes
- **Default:** None

#### Start Scale
- **Type:** Vector3
- **Description:** Starting scale values
- **Range:** Any positive values
- **Default:** (1, 1, 1)
- **Usage:** `new Vector3(1f, 1f, 1f)`

#### End Scale
- **Type:** Vector3
- **Description:** Ending scale values
- **Range:** Any positive values
- **Default:** (1, 1, 1)
- **Usage:** `new Vector3(2f, 2f, 2f)`

#### Duration
- **Type:** float
- **Description:** Animation duration in seconds
- **Range:** 0.1 - 60.0
- **Default:** 1.0
- **Usage:** `1.5f`

#### Easing
- **Type:** EasingType
- **Description:** Easing curve type
- **Options:** Linear, EaseIn, EaseOut, EaseInOut, EaseInBack, EaseOutBack, EaseInOutBack, EaseInBounce, EaseOutBounce, EaseInOutBounce, EaseInElastic, EaseOutElastic, EaseInOutElastic, EaseInCirc, EaseOutCirc, EaseInOutCirc, EaseInCubic, EaseOutCubic, EaseInOutCubic, EaseInExpo, EaseOutExpo, EaseInOutExpo, EaseInQuad, EaseOutQuad, EaseInOutQuad, EaseInQuart, EaseOutQuart, EaseInOutQuart, EaseInQuint, EaseOutQuint, EaseInOutQuint, EaseInSine, EaseOutSine, EaseInOutSine
- **Default:** EaseOut
- **Usage:** `EasingType.EaseOutBack`

#### Delay
- **Type:** float
- **Description:** Delay before animation starts
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.5f`

#### Space
- **Type:** Space
- **Description:** Local or World space
- **Options:** Self, World
- **Default:** Self
- **Usage:** `Space.Self`

### Position Properties
Properties for position animation nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The object to animate
- **Required:** Yes
- **Default:** None

#### Start Position
- **Type:** Vector3
- **Description:** Starting position
- **Range:** Any values
- **Default:** (0, 0, 0)
- **Usage:** `new Vector3(0f, 0f, 0f)`

#### End Position
- **Type:** Vector3
- **Description:** Ending position
- **Range:** Any values
- **Default:** (0, 0, 0)
- **Usage:** `new Vector3(100f, 0f, 0f)`

#### Duration
- **Type:** float
- **Description:** Animation duration in seconds
- **Range:** 0.1 - 60.0
- **Default:** 1.0
- **Usage:** `2.0f`

#### Easing
- **Type:** EasingType
- **Description:** Easing curve type
- **Options:** Same as Scale Easing
- **Default:** EaseOut
- **Usage:** `EasingType.EaseInOut`

#### Delay
- **Type:** float
- **Description:** Delay before animation starts
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `1.0f`

#### Space
- **Type:** Space
- **Description:** Local or World space
- **Options:** Self, World
- **Default:** Self
- **Usage:** `Space.World`

### Rotation Properties
Properties for rotation animation nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The object to animate
- **Required:** Yes
- **Default:** None

#### Start Rotation
- **Type:** Vector3
- **Description:** Starting rotation (Euler angles)
- **Range:** 0 - 360 degrees
- **Default:** (0, 0, 0)
- **Usage:** `new Vector3(0f, 0f, 0f)`

#### End Rotation
- **Type:** Vector3
- **Description:** Ending rotation (Euler angles)
- **Range:** 0 - 360 degrees
- **Default:** (0, 0, 0)
- **Usage:** `new Vector3(0f, 180f, 0f)`

#### Duration
- **Type:** float
- **Description:** Animation duration in seconds
- **Range:** 0.1 - 60.0
- **Default:** 1.0
- **Usage:** `1.5f`

#### Easing
- **Type:** EasingType
- **Description:** Easing curve type
- **Options:** Same as Scale Easing
- **Default:** EaseOut
- **Usage:** `EasingType.EaseInOut`

#### Delay
- **Type:** float
- **Description:** Delay before animation starts
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.3f`

#### Space
- **Type:** Space
- **Description:** Local or World space
- **Options:** Self, World
- **Default:** Self
- **Usage:** `Space.Self`

### Color Properties
Properties for color animation nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The object to animate
- **Required:** Yes
- **Default:** None

#### Start Color
- **Type:** Color
- **Description:** Starting color
- **Range:** RGBA (0-1)
- **Default:** White (1, 1, 1, 1)
- **Usage:** `new Color(1f, 1f, 1f, 1f)`

#### End Color
- **Type:** Color
- **Description:** Ending color
- **Range:** RGBA (0-1)
- **Default:** White (1, 1, 1, 1)
- **Usage:** `new Color(1f, 0f, 0f, 1f)`

#### Duration
- **Type:** float
- **Description:** Animation duration in seconds
- **Range:** 0.1 - 60.0
- **Default:** 1.0
- **Usage:** `0.8f`

#### Easing
- **Type:** EasingType
- **Description:** Easing curve type
- **Options:** Same as Scale Easing
- **Default:** EaseOut
- **Usage:** `EasingType.EaseIn`

#### Delay
- **Type:** float
- **Description:** Delay before animation starts
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.2f`

#### Property
- **Type:** ColorProperty
- **Description:** Which color property to animate
- **Options:** MainColor, EmissionColor, SpecularColor, MetallicColor, SmoothnessColor, NormalMapColor, HeightMapColor, OcclusionColor, DetailMaskColor
- **Default:** MainColor
- **Usage:** `ColorProperty.MainColor`

### Alpha Properties
Properties for alpha animation nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The object to animate
- **Required:** Yes
- **Default:** None

#### Start Alpha
- **Type:** float
- **Description:** Starting alpha value
- **Range:** 0.0 - 1.0
- **Default:** 1.0
- **Usage:** `1.0f`

#### End Alpha
- **Type:** float
- **Description:** Ending alpha value
- **Range:** 0.0 - 1.0
- **Default:** 0.0
- **Usage:** `0.0f`

#### Duration
- **Type:** float
- **Description:** Animation duration in seconds
- **Range:** 0.1 - 60.0
- **Default:** 1.0
- **Usage:** `1.2f`

#### Easing
- **Type:** EasingType
- **Description:** Easing curve type
- **Options:** Same as Scale Easing
- **Default:** EaseOut
- **Usage:** `EasingType.EaseInOut`

#### Delay
- **Type:** float
- **Description:** Delay before animation starts
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.5f`

### Size Properties
Properties for size animation nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The UI object to animate
- **Required:** Yes
- **Default:** None

#### Start Size
- **Type:** Vector2
- **Description:** Starting size
- **Range:** Any positive values
- **Default:** (100, 100)
- **Usage:** `new Vector2(100f, 50f)`

#### End Size
- **Type:** Vector2
- **Description:** Ending size
- **Range:** Any positive values
- **Default:** (200, 200)
- **Usage:** `new Vector2(200f, 100f)`

#### Duration
- **Type:** float
- **Description:** Animation duration in seconds
- **Range:** 0.1 - 60.0
- **Default:** 1.0
- **Usage:** `0.6f`

#### Easing
- **Type:** EasingType
- **Description:** Easing curve type
- **Options:** Same as Scale Easing
- **Default:** EaseOut
- **Usage:** `EasingType.EaseOutBack`

#### Delay
- **Type:** float
- **Description:** Delay before animation starts
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.1f`

## 🎯 Trigger Properties

### Button Trigger Properties
Properties for button trigger nodes.

#### Target Button
- **Type:** Button
- **Description:** The button to monitor
- **Required:** Yes
- **Default:** None

#### Trigger Type
- **Type:** ButtonTriggerType
- **Description:** When to trigger
- **Options:** Click, Press, Release, DoubleClick, LongPress
- **Default:** Click
- **Usage:** `ButtonTriggerType.Click`

#### Cooldown
- **Type:** float
- **Description:** Minimum time between triggers
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.5f`

#### One Shot
- **Type:** bool
- **Description:** Trigger only once
- **Default:** false
- **Usage:** `true`

#### Long Press Duration
- **Type:** float
- **Description:** Duration for long press trigger
- **Range:** 0.1 - 5.0
- **Default:** 1.0
- **Usage:** `2.0f`

### Mouse Trigger Properties
Properties for mouse trigger nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The object to monitor
- **Required:** Yes
- **Default:** None

#### Trigger Type
- **Type:** MouseTriggerType
- **Description:** When to trigger
- **Options:** Enter, Exit, Hover, Click, DoubleClick, RightClick, MiddleClick
- **Default:** Enter
- **Usage:** `MouseTriggerType.Enter`

#### Cooldown
- **Type:** float
- **Description:** Minimum time between triggers
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.1f`

#### Hover Duration
- **Type:** float
- **Description:** Duration for hover trigger
- **Range:** 0.0 - 5.0
- **Default:** 0.0
- **Usage:** `1.0f`

### Collision Trigger Properties
Properties for collision trigger nodes.

#### Target Object
- **Type:** GameObject
- **Description:** The object with collider
- **Required:** Yes
- **Default:** None

#### Collision Type
- **Type:** CollisionTriggerType
- **Description:** When to trigger
- **Options:** Enter, Exit, Stay
- **Default:** Enter
- **Usage:** `CollisionTriggerType.Enter`

#### Tag Filter
- **Type:** string
- **Description:** Only trigger with specific tags
- **Default:** ""
- **Usage:** `"Player"`

#### Layer Filter
- **Type:** LayerMask
- **Description:** Only trigger with specific layers
- **Default:** -1 (All layers)
- **Usage:** `LayerMask.GetMask("Player", "Enemy")`

#### Min Velocity
- **Type:** float
- **Description:** Minimum collision velocity
- **Range:** 0.0 - 100.0
- **Default:** 0.0
- **Usage:** `5.0f`

### Timer Trigger Properties
Properties for timer trigger nodes.

#### Duration
- **Type:** float
- **Description:** Time to wait in seconds
- **Range:** 0.1 - 3600.0
- **Default:** 1.0
- **Usage:** `5.0f`

#### Loop
- **Type:** bool
- **Description:** Repeat timer
- **Default:** false
- **Usage:** `true`

#### Random Range
- **Type:** Vector2
- **Description:** Random duration range
- **Range:** 0.0 - 3600.0
- **Default:** (0, 0)
- **Usage:** `new Vector2(4f, 6f)`

#### Start On Awake
- **Type:** bool
- **Description:** Start timer immediately
- **Default:** true
- **Usage:** `false`

## 🎛️ Control Properties

### Wait Properties
Properties for wait nodes.

#### Duration
- **Type:** float
- **Description:** Time to wait in seconds
- **Range:** 0.0 - 3600.0
- **Default:** 1.0
- **Usage:** `2.5f`

#### Random Range
- **Type:** Vector2
- **Description:** Random duration range
- **Range:** 0.0 - 3600.0
- **Default:** (0, 0)
- **Usage:** `new Vector2(1.0f, 3.0f)`

#### Condition
- **Type:** string
- **Description:** Optional condition to check
- **Default:** ""
- **Usage:** `"PlayerHealth > 50"`

### Condition Properties
Properties for condition nodes.

#### Condition
- **Type:** string
- **Description:** Boolean expression to evaluate
- **Required:** Yes
- **Default:** ""
- **Usage:** `"PlayerHealth > 50 && PlayerLevel > 10"`

#### True Path
- **Type:** Node[]
- **Description:** Path when condition is true
- **Required:** Yes
- **Default:** Empty array
- **Usage:** `new Node[] { healAnimation }`

#### False Path
- **Type:** Node[]
- **Description:** Path when condition is false
- **Required:** Yes
- **Default:** Empty array
- **Usage:** `new Node[] { damageAnimation }`

#### Parameters
- **Type:** Dictionary<string, object>
- **Description:** Variables for condition
- **Default:** Empty dictionary
- **Usage:** `new Dictionary<string, object> { { "PlayerHealth", 75 } }`

### Loop Properties
Properties for loop nodes.

#### Loop Count
- **Type:** int
- **Description:** Number of repetitions
- **Range:** -1 (infinite) to 1000
- **Default:** 1
- **Usage:** `3`

#### Loop Type
- **Type:** LoopType
- **Description:** Loop behavior
- **Options:** Once, PingPong, Reverse
- **Default:** Once
- **Usage:** `LoopType.PingPong`

#### Delay
- **Type:** float
- **Description:** Delay between loops
- **Range:** 0.0 - 10.0
- **Default:** 0.0
- **Usage:** `0.5f`

#### Condition
- **Type:** string
- **Description:** Condition to break loop
- **Default:** ""
- **Usage:** `"PlayerHealth <= 0"`

### Sequence Properties
Properties for sequence nodes.

#### Execution Order
- **Type:** Node[]
- **Description:** Order of node execution
- **Required:** Yes
- **Default:** Empty array
- **Usage:** `new Node[] { scaleAnimation, rotationAnimation, colorAnimation }`

#### Wait for Completion
- **Type:** bool
- **Description:** Wait for each node to complete
- **Default:** true
- **Usage:** `true`

#### Parallel Execution
- **Type:** bool
- **Description:** Execute multiple nodes simultaneously
- **Default:** false
- **Usage:** `false`

### Parallel Properties
Properties for parallel nodes.

#### Node List
- **Type:** Node[]
- **Description:** List of nodes to execute
- **Required:** Yes
- **Default:** Empty array
- **Usage:** `new Node[] { scaleAnimation, rotationAnimation, colorAnimation }`

#### Wait for All
- **Type:** bool
- **Description:** Wait for all nodes to complete
- **Default:** true
- **Usage:** `true`

#### Stop on Error
- **Type:** bool
- **Description:** Stop if any node fails
- **Default:** false
- **Usage:** `true`

### Random Properties
Properties for random nodes.

#### Path Weights
- **Type:** float[]
- **Description:** Probability weights for each path
- **Required:** Yes
- **Default:** Empty array
- **Usage:** `new float[] { 0.5f, 0.3f, 0.2f }`

#### Seed
- **Type:** int
- **Description:** Random seed for reproducible results
- **Range:** 0 - 2147483647
- **Default:** 0
- **Usage:** `12345`

#### Exclusive
- **Type:** bool
- **Description:** Only one path can execute
- **Default:** true
- **Usage:** `true`

## ✨ Effect Properties

### Particle Properties
Properties for particle effect nodes.

#### Particle System
- **Type:** ParticleSystem
- **Description:** Particle system to play
- **Required:** Yes
- **Default:** None

#### Play Type
- **Type:** ParticlePlayType
- **Description:** How to play particles
- **Options:** Play, Stop, Restart, Pause, Resume
- **Default:** Play
- **Usage:** `ParticlePlayType.Play`

#### Duration
- **Type:** float
- **Description:** How long to play
- **Range:** 0.0 - 60.0
- **Default:** 1.0
- **Usage:** `2.0f`

#### Position
- **Type:** Vector3
- **Description:** Position to play at
- **Default:** (0, 0, 0)
- **Usage:** `transform.position`

### Audio Properties
Properties for audio nodes.

#### Audio Source
- **Type:** AudioSource
- **Description:** Audio source to use
- **Required:** Yes
- **Default:** None

#### Audio Clip
- **Type:** AudioClip
- **Description:** Sound clip to play
- **Required:** Yes
- **Default:** None

#### Volume
- **Type:** float
- **Description:** Playback volume
- **Range:** 0.0 - 1.0
- **Default:** 1.0
- **Usage:** `0.8f`

#### Pitch
- **Type:** float
- **Description:** Playback pitch
- **Range:** 0.1 - 3.0
- **Default:** 1.0
- **Usage:** `1.2f`

#### Loop
- **Type:** bool
- **Description:** Loop the audio
- **Default:** false
- **Usage:** `true`

### Screen Shake Properties
Properties for screen shake nodes.

#### Intensity
- **Type:** float
- **Description:** Shake intensity
- **Range:** 0.0 - 2.0
- **Default:** 0.5
- **Usage:** `1.0f`

#### Duration
- **Type:** float
- **Description:** Shake duration
- **Range:** 0.0 - 10.0
- **Default:** 0.3
- **Usage:** `0.5f`

#### Frequency
- **Type:** float
- **Description:** Shake frequency
- **Range:** 1.0 - 50.0
- **Default:** 10.0
- **Usage:** `15.0f`

#### Direction
- **Type:** Vector3
- **Description:** Shake direction
- **Default:** (1, 1, 1)
- **Usage:** `new Vector3(1f, 0f, 0f)`

### Flash Properties
Properties for flash nodes.

#### Color
- **Type:** Color
- **Description:** Flash color
- **Default:** White (1, 1, 1, 1)
- **Usage:** `new Color(1f, 1f, 1f, 1f)`

#### Intensity
- **Type:** float
- **Description:** Flash intensity
- **Range:** 0.0 - 2.0
- **Default:** 1.0
- **Usage:** `1.5f`

#### Duration
- **Type:** float
- **Description:** Flash duration
- **Range:** 0.0 - 5.0
- **Default:** 0.2
- **Usage:** `0.5f`

#### Fade Type
- **Type:** FadeType
- **Description:** Fade in/out type
- **Options:** FadeIn, FadeOut, FadeInOut
- **Default:** FadeOut
- **Usage:** `FadeType.FadeInOut`

### Fade Properties
Properties for fade nodes.

#### Color
- **Type:** Color
- **Description:** Fade color
- **Default:** Black (0, 0, 0, 1)
- **Usage:** `new Color(0f, 0f, 0f, 1f)`

#### Alpha
- **Type:** float
- **Description:** Target alpha
- **Range:** 0.0 - 1.0
- **Default:** 1.0
- **Usage:** `0.5f`

#### Duration
- **Type:** float
- **Description:** Fade duration
- **Range:** 0.0 - 10.0
- **Default:** 1.0
- **Usage:** `2.0f`

#### Fade Type
- **Type:** FadeType
- **Description:** Fade in/out
- **Options:** FadeIn, FadeOut, FadeInOut
- **Default:** FadeIn
- **Usage:** `FadeType.FadeOut`

### Blur Properties
Properties for blur nodes.

#### Intensity
- **Type:** float
- **Description:** Blur intensity
- **Range:** 0.0 - 2.0
- **Default:** 0.5
- **Usage:** `1.0f`

#### Duration
- **Type:** float
- **Description:** Blur duration
- **Range:** 0.0 - 10.0
- **Default:** 0.5
- **Usage:** `1.0f`

#### Blur Type
- **Type:** BlurType
- **Description:** Type of blur
- **Options:** Gaussian, Motion, Radial, Box
- **Default:** Gaussian
- **Usage:** `BlurType.Motion`

#### Direction
- **Type:** Vector2
- **Description:** Blur direction
- **Default:** (1, 0)
- **Usage:** `new Vector2(1f, 0f)`

## 🛠️ Custom Properties

### Custom Action Properties
Properties for custom action nodes.

#### Action Name
- **Type:** string
- **Description:** Name of the action
- **Required:** Yes
- **Default:** ""
- **Usage:** `"SaveGame"`

#### Parameters
- **Type:** object[]
- **Description:** Input parameters
- **Default:** Empty array
- **Usage:** `new object[] { "saveSlot1", 123 }`

#### Return Value
- **Type:** object
- **Description:** Output value
- **Default:** null
- **Usage:** `"Success"`

#### Script Reference
- **Type:** MonoBehaviour
- **Description:** Script to execute
- **Default:** null
- **Usage:** `gameManager`

### Custom Condition Properties
Properties for custom condition nodes.

#### Condition Name
- **Type:** string
- **Description:** Name of the condition
- **Required:** Yes
- **Default:** ""
- **Usage:** `"IsPlayerAlive"`

#### Parameters
- **Type:** object[]
- **Description:** Input parameters
- **Default:** Empty array
- **Usage:** `new object[] { player }`

#### Return Type
- **Type:** Type
- **Description:** Boolean result
- **Default:** typeof(bool)
- **Usage:** `typeof(bool)`

#### Script Reference
- **Type:** MonoBehaviour
- **Description:** Script to execute
- **Default:** null
- **Usage:** `gameManager`

### Script Properties
Properties for script nodes.

#### Script
- **Type:** string
- **Description:** Script code to execute
- **Required:** Yes
- **Default:** ""
- **Usage:** `"return player.health > 50;"`

#### Language
- **Type:** ScriptLanguage
- **Description:** Scripting language
- **Options:** CSharp, JavaScript, Python
- **Default:** CSharp
- **Usage:** `ScriptLanguage.CSharp`

#### Parameters
- **Type:** Dictionary<string, object>
- **Description:** Input parameters
- **Default:** Empty dictionary
- **Usage:** `new Dictionary<string, object> { { "player", player } }`

#### Return Value
- **Type:** object
- **Description:** Output value
- **Default:** null
- **Usage:** `true`

### Event Properties
Properties for event nodes.

#### Event Name
- **Type:** string
- **Description:** Name of the event
- **Required:** Yes
- **Default:** ""
- **Usage:** `"PlayerDied"`

#### Event Data
- **Type:** object
- **Description:** Data to send
- **Default:** null
- **Usage:** `new { playerId = 1, cause = "Enemy" }`

#### Target
- **Type:** GameObject
- **Description:** Event target
- **Default:** null
- **Usage:** `gameManager`

#### Priority
- **Type:** int
- **Description:** Event priority
- **Range:** 0 - 100
- **Default:** 0
- **Usage:** `10`

## 🎨 Property Styling

### Property Colors
Each property type has a specific color theme:
- **Animation Properties** - Blue (#2196F3)
- **Trigger Properties** - Green (#4CAF50)
- **Control Properties** - Orange (#FF9800)
- **Effect Properties** - Purple (#9C27B0)
- **Custom Properties** - Gray (#607D8B)

### Property Icons
Each property type has a unique icon:
- **Vector3** - 3D icon
- **Vector2** - 2D icon
- **Color** - Palette icon
- **Float** - Slider icon
- **Bool** - Toggle icon
- **String** - Text icon
- **Enum** - Dropdown icon

### Property Labels
- **Display Name** - User-friendly name
- **Property Type** - Technical type name
- **Range** - Valid value range
- **Default** - Default value
- **Required** - Whether property is required

## 🚀 Performance Tips

### Property Optimization
- **Use appropriate ranges** for better performance
- **Limit property complexity** on mobile devices
- **Use efficient data types** when possible
- **Profile property performance** regularly

### Memory Management
- **Clean up unused properties** automatically
- **Use property pooling** for frequently created properties
- **Limit property count** on mobile devices
- **Monitor memory usage** during development

## 🎉 What's Next?

Now that you understand all properties:

### **📚 Learn More**
- **[Error Codes](error-codes)** - Troubleshooting guide
- **[Changelog](changelog)** - Version history
- **[FAQ](community/faq)** - Frequently asked questions

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Properties Reference mastery achieved!** You're ready to configure all properties!

**Let's explore error codes!** Check out the [Error Codes](error-codes) guide!

</div>
