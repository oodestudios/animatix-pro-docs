# UI Animations

**UI animations** focus on **interface elements** — buttons, panels, menus, HUD components, and other user-facing elements.

## Overview

**Purpose:** Create polished, responsive user interface interactions and transitions

**Common Use Cases:**

- **Menu Transitions:** Smooth fade-ins/outs when opening/closing menus
- **Button Feedback:** Visual responses when buttons are clicked or hovered
- **Panel Animations:** Sliding panels, expanding/collapsing sections
- **HUD Effects:** Health bars, score displays, notification animations
- **Dialog Boxes:** Entrance/exit animations for pop-ups and messages
- **Loading Screens:** Progress indicators, loading animations

## Animation Types

### Transform Animations

Basic transformations that change position, rotation, scale, or transparency:

- **Fade** — Alpha/transparency changes
- **Slide** — Position movement
- **Scale** — Size changes
- **Rotate** — Rotation effects
- **Color Tint** — Color property changes
- **Flip** — Flip transformations

### Visual Effects

Special visual properties and atmospheric effects:

- **Jelly** — Elastic deformation
- **Blur In Out** — Blur effect transitions
- **Glow Pulse** — Glowing effects
- **Image Fill Amount** — Fill progress animations
- **Outline Shadow Color** — Outline color changes
- **Wiggle** — Random wiggle motion
- **Wobble** — Wobbling effects
- **Wind Drift** — Wind-like motion
- **Pendulum Swing** — Pendulum motion
- **Breathing Scale** — Breathing/pulsing scale
- **Skew** — Skewing transformations

### Impact Effects

Strong, attention-grabbing effects for feedback:

- **Punch** — Sharp, impactful movement
- **Bounce** — Elastic bounce effects
- **Shake** — Random shake motion
- **Elastic Scale** — Overshoot scale effects

## Common Parameters

- **Duration:** 0.3–1.0s typical (quick feedback: 0.1–0.3s, cinematic: 1.0–2.0s)
- **Easing:** EaseOutBack or EaseInSine for natural feel
- **Loop Type:** None (one-time), PingPong for breathing effects

## Best Practices

- Combine multiple animations (e.g., Scale + Color Tint) using parallel chaining for rich, synchronized feedback
- Use shorter durations for quick feedback
- Use longer durations for cinematic effects
- Test animations across different screen sizes

---

**Next:** [Text Animations](./text-animations)

