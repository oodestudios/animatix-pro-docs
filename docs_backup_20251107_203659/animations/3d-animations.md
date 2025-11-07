# 3D Object Animations

**3D Object Animations** affect world-space objects, meshes, and props — used for cinematic object motion and gameplay feedback.

## Overview

**Purpose:** Animate 3D objects in world space

**Common Use Cases:**

- **Object Movement:** Smooth position changes
- **Rotation Effects:** Spinning and rotating objects
- **Scale Effects:** Growth and shrink animations
- **Path Following:** Objects following curves
- **Physics-Based:** Gravity, forces, physics interactions
- **Procedural:** Continuous looping effects

## Animation Types

### Transform Animations

- **Move 3D** — Move in world space
- **Move Local 3D** — Move in local space
- **Rotate 3D** — Rotate in world space
- **Rotate Local 3D** — Rotate in local space
- **Scale Local 3D** — Scale transformation

### Advanced Animations

- **Move Path** — Follow curved path
- **Rotate To** — Rotate to target rotation
- **Look At Target** — Look at target object
- **Jump** — Jump motion
- **Teleport** — Instant position change
- **Orbit Around** — Orbit around point
- **Pivot Shift** — Pivot point movement

### Physics-Based Animations

- **Bounce 3D** — 3D bounce effect
- **Hover Oscillate** — Hovering oscillation
- **Spin Loop** — Continuous spinning
- **Wiggle Transform** — Random wiggle
- **Drift** — Drifting motion

### Spring Animations

- **Spring Follow** — Spring-follow motion
- **Overshoot Move** — Overshoot movement
- **Elastic Scale 3D** — Elastic scale in 3D
- **Spring Position** — Spring-based position

### Simulation Animations

- **Pendulum** — Pendulum physics
- **Magnetic Attraction** — Magnetic pull effect
- **Buoyancy** — Buoyancy simulation
- **Vortex** — Vortex motion
- **Gravity Well** — Gravity well effect
- **Companion Follow** — Companion following
- **Damped Rotate** — Damped rotation
- **Gravity Drop 3D** — Gravity-based drop
- **Float Rise** — Floating rise motion
- **Spin Bounce** — Spinning bounce
- **Velocity Move** — Velocity-based movement
- **Inertia Translate** — Inertia translation

### Procedural Animations

- **Loop Bounce** — Looping bounce
- **Loop Pulse Scale** — Looping pulse scale
- **Loop Orbit** — Continuous orbit
- **Loop Sway** — Continuous sway
- **Loop Wobble** — Continuous wobble
- **Loop Look At Target** — Continuous look-at
- **Loop Wiggle** — Continuous wiggle

## Common Parameters

- **Duration:** 0.5–3.0s typical (quick moves: 0.3–1.0s, cinematic: 2.0–5.0s)
- **Easing:** EaseInOutCubic for smooth motion, EaseOutBounce for bouncy effects
- **Loop Type:** None (one-time), Loop for continuous effects (Spin, Orbit, Sway)

## Performance Notes

- Use **local-space transforms** (Move Local 3D, Rotate Local 3D) for UI and character-attached elements to avoid costly world matrix updates
- Prefer world-space transforms only when needed for absolute positioning

## Best Practices

- Combine **Rotate Local 3D + Scale Local 3D** using parallel chaining for dynamic object reveals
- Use local-space transforms for better performance
- Use procedural animations for continuous ambient effects

---

**Next:** [Camera Animations](./camera-animations)

