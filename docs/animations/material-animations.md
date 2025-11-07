# Material Animations

**Material Animations** animate material properties, shader values, and textures — ideal for dynamic material effects, shader animations, and visual feedback.

## Overview

**Purpose:** Create dynamic material effects and shader animations

**Common Use Cases:**

- **Color Transitions:** Material color changes
- **Shader Properties:** Custom shader property animation
- **Texture Swapping:** Dynamic texture changes
- **Material Fade:** Material transparency effects

## Animation Types

### Color Animations

- **Color Tween** — Material color transition

### Property Animations

- **Float Property Tween** — Shader property animation

### Texture Animations

- **Texture Swap** — Texture switching

### Fade Animations

- **Material Fade** — Material transparency

## Common Parameters

- **Duration:** 0.5–2.0s typical (color changes: 0.5–1.0s, fades: 1.0–3.0s)
- **Easing:** EaseInOutSine for smooth color transitions, Linear for property changes
- **Loop Type:** None (one-time), PingPong for pulsing effects

## Best Practices

- Use color tweens for smooth material transitions
- Use float property tweens for custom shader effects
- Use material fade for transparency effects
- Test material animations with different shader types

---

**Next:** [Particle Systems](./particle-systems)

