# Graph Categories: Organizing Animations by Purpose

Animatix Pro organizes animations into **functional categories** based on their purpose and target. Understanding these categories helps you structure your projects, choose the right animation types, and create effective animation graphs.

## UI: User Interface Animations

**UI animations** focus on **interface elements** — buttons, panels, menus, HUD components, and other user-facing elements.

**Purpose:** Create polished, responsive user interface interactions and transitions

**Common Use Cases:**

- **Menu Transitions:** Smooth fade-ins/outs when opening/closing menus
- **Button Feedback:** Visual responses when buttons are clicked or hovered
- **Panel Animations:** Sliding panels, expanding/collapsing sections
- **HUD Effects:** Health bars, score displays, notification animations
- **Dialog Boxes:** Entrance/exit animations for pop-ups and messages
- **Loading Screens:** Progress indicators, loading animations

**Typical Animation Types:**

| **Animation** | **Common Use** | **Example** |
|---------------|----------------|-------------|
| **Fade** | Show/hide UI elements | Menu panel fade-in |
| **Slide** | Smooth transitions | Settings panel sliding in |
| **Scale** | Button press feedback | Button grows on click |
| **Rotate** | Icon animations | Loading spinner |
| **Color Tint** | State changes | Button color on hover |
| **Wiggle** | Attention-grabbing | Error message shake |

**UI Animation Characteristics:**

- **Lightweight** — Optimized for frequent use
- **Responsive** — Fast feedback to user actions
- **Polished** — Smooth, professional feel
- **Scalable** — Works across different screen sizes

*UI animations — menu transitions, button feedback, and panel effects*

> 💡 **Pro Tip:** Combine UI animations with Camera animations to create cinematic menu transitions.

## Camera: Camera Movements and Effects

**Camera animations** control **camera behavior** — movement, rotation, zoom, and cinematic effects.

**Purpose:** Create dynamic camera work for cutscenes, gameplay, and cinematic sequences

**Common Use Cases:**

- **Cutscenes:** Smooth camera movements for storytelling
- **Gameplay Transitions:** Camera shifts between gameplay modes
- **Zoom Effects:** Dramatic zoom-ins for emphasis
- **Shake Effects:** Impact feedback, explosions, hits
- **Orbit Movements:** Circular camera paths around objects
- **Look At:** Camera following targets dynamically

**Typical Animation Types:**

| **Animation** | **Common Use** | **Example** |
|---------------|----------------|-------------|
| **Camera Move To** | Smooth camera positioning | Cutscene camera movement |
| **Camera Pan To** | Lateral camera movement | Panning across scene |
| **Camera Zoom To** | FOV changes | Zoom in on important object |
| **Camera Look At** | Focus on target | Tracking moving object |
| **Camera Orbit Around** | Circular movement | Orbiting around character |
| **Camera Shake** | Impact effects | Explosion camera shake |
| **Camera Punch Position** | Strong impact feedback | Heavy hit feedback |
| **Camera Flash Shake** | Dramatic effects | Boss entrance shake |

**Camera Animation Characteristics:**

- **Cinematic** — Professional camera work
- **Smooth** — Eased movements for natural feel
- **Dynamic** — Responsive to game events
- **Versatile** — Supports many camera styles

*Camera animations — smooth movements, orbits, and shake effects*

> 💡 **Pro Tip:** Use Camera animations for dynamic gameplay transitions and cinematic storytelling.

## Cutscene: Cinematic Sequences

**Cutscene animations** create **cinematic sequences** combining multiple elements — UI, camera, audio, and 3D objects.

**Purpose:** Tell stories, showcase events, and create memorable moments

**Common Use Cases:**

- **Story Sequences:** Narrative-driven scenes with synchronized elements
- **Dialogue Reveals:** Character introductions and dialogue presentations
- **Event Showcases:** Highlighting important game events
- **Transition Scenes:** Between levels or game states
- **Opening Sequences:** Game introductions and title screens
- **Ending Sequences:** Credits, conclusions, and epilogues

**Typical Components:**

| **Component** | **Role** | **Example** |
|---------------|---------|-------------|
| **Camera Work** | Visual framing | Smooth camera movements |
| **UI Overlays** | Text, subtitles, hints | Dialogue boxes appearing |
| **3D Objects** | Characters, props | Character animations |
| **Audio** | Music, sound effects | Dramatic music entrance |
| **Timing** | Synchronization | Coordinated element reveals |

**Cutscene Characteristics:**

- **Orchestrated** — Multiple elements working together
- **Precise Timing** — Synchronized events
- **Narrative-Driven** — Story-focused execution
- **Polished** — Production-quality sequences

*Cutscene sequences — orchestrated animations combining multiple elements*

> 💡 **Pro Tip:** Orchestrate cutscenes by combining Camera, UI, Audio, and 3D Object animations for maximum impact.

## Gameplay: In-Game Effects

**Gameplay animations** create **interactive effects** during gameplay — feedback, reactions, and dynamic responses.

**Purpose:** Enhance gameplay feel, provide feedback, and create responsive interactions

**Common Use Cases:**

- **Hit Feedback:** Visual response when objects are hit
- **Pickup Effects:** Items being collected with animations
- **Ability Animations:** Visual effects for player abilities
- **Enemy Reactions:** Enemy responses to player actions
- **Environmental Feedback:** World reacting to player
- **UI Gameplay Elements:** Dynamic HUD during gameplay

**Typical Animation Types:**

| **Animation** | **Common Use** | **Example** |
|---------------|----------------|-------------|
| **Punch** | Impact effects | Hit impact animation |
| **Shake** | Strong feedback | Screen shake on impact |
| **Bounce** | Playful effects | Item pickup bounce |
| **Scale** | Growth/shrink | Power-up growth |
| **Move** | Position changes | Object movement |
| **Rotate** | Spinning effects | Collectible spinning |

**Gameplay Animation Characteristics:**

- **Responsive** — Immediate feedback to actions
- **Performance-Optimized** — Fast, efficient execution
- **Impactful** — Clear visual communication
- **Dynamic** — Adapts to game state

*Gameplay animations — hit feedback, pickups, and ability effects*

> 💡 **Pro Tip:** Optimize gameplay animations for performance — keep durations short and use parallel execution for responsive feedback.

## VFX: Visual Effects

**VFX animations** create **visual effects** — particle systems, materials, shaders, and atmospheric effects.

**Purpose:** Enhance visual quality with effects, transitions, and atmospheric elements

**Common Use Cases:**

- **Particle Effects:** Explosions, magic, environmental particles
- **Material Transitions:** Shader property animations
- **Color Effects:** Color shifts and transitions
- **Atmospheric Effects:** Fog, lighting changes
- **Screen Effects:** Post-processing animations
- **Particle Playback:** Controlling particle emission and simulation

**Typical Animation Types:**

| **Animation** | **Common Use** | **Example** |
|---------------|----------------|-------------|
| **Play Particles** | Start particle systems | Explosion particles |
| **Stop Particles** | Stop particle emission | Effect cleanup |
| **Loop Particles** | Continuous particles | Ambient effects |
| **Emission Rate Tween** | Dynamic particle density | Increasing/decreasing intensity |
| **Color Tween** | Material color changes | Object color transitions |
| **Material Fade** | Material transparency | Fading objects |
| **Float Property Tween** | Shader property animation | Custom shader effects |

**VFX Animation Characteristics:**

- **Atmospheric** — Enhances mood and feeling
- **Flexible** — Works with custom shaders
- **Performance-Conscious** — Optimized for effects
- **Creative** — Supports unique visual styles

*VFX animations — particle systems, material effects, and color transitions*

> 💡 **Pro Tip:** Use VFX animations sparingly on mobile devices — consider reducing particle counts for optimal performance.

## Misc: Other Animations

**Misc animations** cover **specialized and unique** animation needs that don't fit into other categories.

**Purpose:** Handle edge cases, custom needs, and specialized animation requirements

**Common Use Cases:**

- **Text Animations:** Typewriter, reveal, scramble, character effects
- **Audio Animations:** Volume, pitch, spatial audio control
- **3D Transform Animations:** Complex 3D object transformations
- **Path Animations:** Following curves and paths
- **Physics-Based Animations:** Gravity, forces, physics interactions
- **Custom Animations:** User-defined animation logic

**Typical Animation Types:**

| **Animation** | **Common Use** | **Example** |
|---------------|----------------|-------------|
| **Typewriter** | Text reveals | Dialogue appearing letter-by-letter |
| **Character Effects** | Text character animations | Individual letter animations |
| **Move Path** | Following curves | Object following path |
| **Audio Cue Group** | Complex audio control | Layered audio effects |
| **Volume Tween** | Audio volume control | Fading music |
| **Pitch Tween** | Audio pitch control | Voice modulation |
| **Physics-Based** | Gravity, forces | Dropping objects |
| **Custom** | User-defined | Specialized custom logic |

**Misc Animation Characteristics:**

- **Diverse** — Wide range of animation types
- **Specialized** — Handles unique requirements
- **Flexible** — Supports custom implementations
- **Comprehensive** — Covers edge cases

*Misc animations — text effects, path animations, and specialized effects*

> 💡 **Pro Tip:** Misc category is perfect for specialized needs — explore text animations and audio control for enhanced experiences.

## Category Selection Guide

**Choosing the Right Category:**

| **Goal** | **Recommended Category** | **Why** |
|----------|-------------------------|---------|
| **Interface polish** | UI | Optimized for interface elements |
| **Cinematic camera work** | Camera | Built for camera control |
| **Storytelling sequences** | Cutscene | Supports orchestrated multi-element sequences |
| **Gameplay feedback** | Gameplay | Fast, responsive, optimized |
| **Visual effects** | VFX | Particle and material control |
| **Specialized needs** | Misc | Flexible for unique requirements |

**Combining Categories:**

You can **combine multiple categories** in a single graph for complex sequences:

- **Cutscene + Camera:** Cinematic sequences with dynamic camera
- **Gameplay + UI:** Gameplay feedback with UI overlays
- **VFX + Gameplay:** Visual effects during gameplay
- **UI + Misc:** Text animations with interface elements

**Best Practices:**

- **Choose by purpose** — Select category based on what you're animating
- **Stay consistent** — Use appropriate categories for similar animations
- **Mix when needed** — Combine categories for complex sequences
- **Optimize performance** — Consider category-specific optimizations

---

> **Key Takeaways:**
>
> - **Six main categories** — UI, Camera, Cutscene, Gameplay, VFX, Misc
> - **Choose by purpose** — Select category based on animation goal
> - **Combine when needed** — Mix categories for complex sequences
> - **Stay organized** — Consistent categorization improves project structure

---

**Next:** [Connection System](./connection-system)

