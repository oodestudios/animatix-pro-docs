# Particle System Control

**Particle System Control** manages particle playback, emission rates, and simulation — essential for VFX triggers, environmental effects, and dynamic particle systems.

## Overview

**Purpose:** Control particle system playback and properties

**Common Use Cases:**

- **Particle Playback:** Start/stop particle emission
- **Emission Control:** Dynamic emission rate changes
- **Particle Looping:** Continuous particle effects
- **Simulation Control:** Particle simulation management

## Animation Types

### Playback Animations

- **Play Particles** — Start particle emission
- **Stop Particles** — Stop particle emission
- **Loop Particles** — Continuous particle loop

### Property Animations

- **Emission Rate Tween** — Emission rate transition

### Simulation Animations

- **Simulate Particles** — Particle simulation control

## Common Parameters

- **Duration:** 0.1–5.0s typical (start/stop: instant, emission tween: 1.0–5.0s)
- **Easing:** EaseInOutQuad for smooth emission changes, Linear for rate control
- **Loop Type:** None (one-time), Loop for continuous particles

## Best Practices

- Use particle playback for VFX triggers
- Use emission rate tweens for dynamic particle intensity
- Use loop particles for ambient effects
- Optimize particle counts for mobile devices

---

**Next:** [Easing Curves](./easing-curves)

