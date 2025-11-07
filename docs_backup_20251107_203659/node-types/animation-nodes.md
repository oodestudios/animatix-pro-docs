# Animation Nodes

**Animation nodes** 🟩 are the **core visual effects** of Animatix Pro — they perform actual transformations, movements, and visual changes on GameObjects.

**Color Coding:** Blue/Green (🟩) — easily identifiable as visual effects

## Overview

- **Purpose:** Create visual animations — transform objects, change properties, create effects
- **Execution:** Time-based — animations execute over a specified duration
- **Outputs:** One or more output ports for chaining animations
- **Activation:** Receives execution from triggers, other animations, or conditions

**Common Characteristics:**

- **Duration-Based:** Execute over a specified time period
- **Interpolated:** Smooth transitions between start and end values
- **Configurable:** Start/end values, easing, delays all customizable
- **Chainable:** Can connect multiple animations sequentially or in parallel

## Animation Categories

Animatix Pro organizes animations into **functional categories** based on what they animate:

| **Category** | **Purpose** | **Target** |
|--------------|------------|------------|
| **UI Animations** | Interface elements | Canvas, UI components |
| **Text Animations** | Text effects | TextMeshPro, UI Text |
| **3D Object Animations** | 3D transforms | GameObjects, Transforms |
| **Camera Animations** | Camera control | Camera component |
| **Audio Animations** | Sound control | AudioSource, audio clips |
| **Material Animations** | Material properties | Renderer materials, shaders |
| **Particle System Control** | Particle effects | ParticleSystem component |

## Common Animation Properties

All animation nodes share common configuration properties:

| **Property** | **Type** | **Default** | **Description** |
|--------------|----------|-------------|-----------------|
| **Duration** | `float` | `1.0s` | How long the animation takes to complete |
| **Delay Before** | `float` | `0.0s` | Wait time before animation starts |
| **Delay After** | `float` | `0.0s` | Wait time after animation completes |
| **Easing** | `enum` | `Ease In Out` | Animation curve type |
| **Start Value** | `varies` | Depends on type | Starting value for interpolation |
| **End Value** | `varies` | Depends on type | Ending value for interpolation |
| **Loop Type** | `enum` | `None` | Whether animation loops |
| **Update Method** | `enum` | `LateUpdate` | Unity update method |

## Complete Animation List

Animatix Pro includes **100+ animation types** organized by category:

### UI Animations (20+)
- **Transform:** Fade, Slide, Scale, Rotate, Color Tint, Flip
- **Visual:** Jelly, Blur In Out, Glow Pulse, Image Fill Amount, Outline Shadow Color, Wiggle, Wobble, Wind Drift, Pendulum Swing, Breathing Scale, Skew
- **Impact:** Punch, Bounce, Shake, Elastic Scale

### Text Animations (25+)
- **Reveal:** Typewriter, Scramble Text, Word Fade In, Line Drop, Fade Up, Grow and Fade
- **Character:** Character Scale Pop, Character Fade, Character Slide In, Character Bounce, Character Shake, Character Jitter, Character Wave, Character Flip Reveal, Character Rotate Reveal, Character Zoom In
- **Text Effect:** Rainbow Text Color, Text Flicker, Blinking
- **Special:** Explosion Reveal, Gravity Drop, Curtain Reveal, Crumble Reveal

### 3D Object Animations (30+)
- **Transform:** Move 3D, Move Local 3D, Rotate 3D, Rotate Local 3D, Scale Local 3D
- **Advanced:** Move Path, Rotate To, Look At Target, Jump, Teleport, Orbit Around, Pivot Shift
- **Physics:** Bounce 3D, Hover Oscillate, Spin Loop, Wiggle Transform, Drift
- **Spring:** Spring Follow, Overshoot Move, Elastic Scale 3D, Spring Position
- **Simulation:** Pendulum, Magnetic Attraction, Buoyancy, Vortex, Gravity Well, Companion Follow, Damped Rotate, Gravity Drop 3D, Float Rise, Spin Bounce, Velocity Move, Inertia Translate
- **Procedural:** Loop Bounce, Loop Pulse Scale, Loop Orbit, Loop Sway, Loop Wobble, Loop Look At Target, Loop Wiggle

### Camera Animations (10+)
- **Movement:** Camera Move To, Camera Pan To, Camera Zoom To, Camera Cut To
- **Look:** Camera Look At, Camera Follow Target
- **Orbital:** Camera Orbit Around, Camera Spin Loop
- **Effect:** Camera Shake, Camera Punch Position, Camera Breath Zoom, Camera Flash Shake
- **Advanced:** Camera Dolly Move, Camera Bob Motion, Camera Drift Motion

### Audio Animations (5+)
- **Playback:** Sound, Play Sound
- **Property:** Pitch Tween, Volume Tween, Audio Cue Group, Spatial Audio Tween

### Material Animations (5+)
- **Color:** Color Tween
- **Property:** Float Property Tween
- **Texture:** Texture Swap
- **Fade:** Material Fade

### Particle System Control (5+)
- **Playback:** Play Particles, Stop Particles, Loop Particles
- **Property:** Emission Rate Tween
- **Simulation:** Simulate Particles

## Chaining Animations

Animation nodes can **chain together** to create complex sequences:

**Sequential Chaining:**
```
Fade In → Scale Up → Rotate → Fade Out
```

**Parallel Chaining (using RunWithPrevious):**
```
On Start → Fade In → Scale Up (RunWithPrevious: true)
```

**Mixed Chaining:**
```
Fade In
  ├─→ Scale Up (RunWithPrevious: true)
  └─→ Rotate (RunWithPrevious: true)
     ↓
  Wait 1s
     ↓
Color Tint
```

## Creating an Animation

1. **Add Animation Node:** Right-click in GraphFlow Editor → Add Node → Animation → [Choose type]
2. **Connect Input:** Link from Trigger or previous Animation node
3. **Configure Properties:** Set Duration, Start/End values, Easing in Inspector
4. **Connect Output:** Link to next Animation or Action node
5. **Test:** Use Preview or Play Mode to verify

---

> **Key Takeaways:**
>
> - **Animation nodes = visual effects** — They perform actual transformations
> - **Categories organize by purpose** — UI, Text, 3D, Camera, Audio, Material, Particles
> - **Common properties** — Duration, delays, easing, loops apply to all
> - **Chain for complexity** — Connect multiple animations for sequences
> - **100+ animation types** — Complete list available, detailed docs in Animation Modules section

---

**Next:** [Action Nodes](./action-nodes)

