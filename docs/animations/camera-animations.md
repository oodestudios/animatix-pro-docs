# Camera Animations

**Camera Animations** control camera movement, framing, and effects — essential for cutscenes, cinematic sequences, and dynamic camera work.

## Overview

**Purpose:** Create dynamic camera work for cutscenes, gameplay, and cinematic sequences

**Common Use Cases:**

- **Cutscenes:** Smooth camera movements for storytelling
- **Gameplay Transitions:** Camera shifts between gameplay modes
- **Zoom Effects:** Dramatic zoom-ins for emphasis
- **Shake Effects:** Impact feedback, explosions, hits
- **Orbit Movements:** Circular camera paths around objects
- **Look At:** Camera following targets dynamically

## Animation Types

### Movement Animations

- **Camera Move To** — Smooth camera positioning
- **Camera Pan To** — Lateral camera movement
- **Camera Zoom To** — FOV zoom effect
- **Camera Cut To** — Instant camera cut

### Look Animations

- **Camera Look At** — Look at target object
- **Camera Follow Target** — Follow moving target

### Orbital Animations

- **Camera Orbit Around** — Orbit around point
- **Camera Spin Loop** — Continuous camera spin

### Effect Animations

- **Camera Shake** — Shake effect
- **Camera Punch Position** — Strong impact shake
- **Camera Breath Zoom** — Breathing zoom effect
- **Camera Flash Shake** — Dramatic flash shake

### Advanced Animations

- **Camera Dolly Move** — Dolly camera movement
- **Camera Bob Motion** — Bobbing motion
- **Camera Drift Motion** — Drifting camera motion

## Common Parameters

- **Duration:** 1.0–5.0s typical (cuts: instant, moves: 1.0–3.0s, orbits: 3.0–10.0s)
- **Easing:** EaseInOutQuart for smooth moves, EaseOutElastic for dramatic effects
- **Loop Type:** None (one-time), Loop for continuous effects (Orbit, Spin)

## Best Practices

- Chain **Camera Move To + Camera Look At** for cinematic reveals
- Use **Camera Shake + Camera Punch Position** for impactful moments
- Use smooth easing for natural camera movement
- Test camera animations in Play Mode for proper framing

---

**Next:** [Audio Animations](./audio-animations)

